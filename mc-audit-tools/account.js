// Съёмка личного кабинета на сохранённой сессии (state.json). Никогда не переходит на /account/logout/.
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path');
const ROOT='C:/Users/hayk/memorycare/mc-audit-screenshots';
const BASE='https://mc.makyan.com';
const LANGS=['am','ru','en'];
const VP={desktop:{width:1440,height:900},tablet:{width:768,height:1024},mobile:{width:375,height:812}};
let n=parseInt(process.env.START); let last=0;
const csvq=s=>'"'+String(s).replace(/"/g,'""')+'"';
const findings=[]; let b;
async function save(page,o){
  const name=`${String(n).padStart(3,'0')}_${o.lang}_${o.section}_${o.state}_${o.vp}.png`; n++;
  const fp=path.join(ROOT,o.folder,name);
  await page.screenshot({path:fp,fullPage:!!o.full});
  if(!fs.existsSync(fp)||fs.statSync(fp).size<1000) throw new Error('NOT SAVED '+fp);
  fs.appendFileSync(path.join(ROOT,'manifest.csv'),[name,o.url,`${VP[o.vp].width}x${VP[o.vp].height}`,o.auth||'logged-in',o.note||''].map(csvq).join(',')+'\n');
  console.log('saved',o.folder+'/'+name,fs.statSync(fp).size);
}
async function go(page,u,wait='networkidle'){
  if(u.includes('/logout/')) throw new Error('REFUSING logout URL');
  const d=Date.now()-last; if(d<1200) await page.waitForTimeout(1200-d);
  const r=await page.goto(BASE+u,{waitUntil:wait,timeout:60000}); last=Date.now();
  return {status:r?r.status():0,final:page.url().replace(BASE,'')};
}
const isLoggedIn=async p=>p.evaluate(()=>{const a=document.querySelector('li.account');return !!a&&getComputedStyle(a).display!=='none'&&!location.pathname.includes('/account/login/');});
const bodyText=async page=>page.evaluate(()=>(document.querySelector('.main,main')||document.body).innerText.replace(/\s+/g,' ').trim().slice(0,160));
async function newPage(_,vp){ const c=await b.newContext({storageState:path.join(__dirname,'state.json'),viewport:VP[vp],isMobile:vp==='mobile',hasTouch:vp==='mobile',deviceScaleFactor:1}); const pg=await c.newPage(); const cl=pg.close.bind(pg); pg.close=async()=>{await cl(); await c.close();}; return pg; }

(async()=>{
b=await chromium.launch({channel:'chrome'});
const ctx=await b.newContext({storageState:path.join(__dirname,'state.json')});
const p0=await newPage(ctx,'desktop');
let r=await go(p0,'/ru/account/index/');
if(!(await isLoggedIn(p0))){ console.error('NOT LOGGED IN: final',r.final); process.exit(3); }
await p0.close();

for(const lang of LANGS){
  const p=await newPage(ctx,'desktop');
  r=await go(p,`/${lang}/account/index/`);
  if(!(await isLoggedIn(p))){ findings.push(`[${lang}] СЕССИЯ ПОТЕРЯНА на account/index (final ${r.final})`); console.error('SESSION LOST',lang); break; }
  await save(p,{folder:'02_account',lang,section:'account-index',state:'default',vp:'desktop',url:`${BASE}/${lang}/account/index/`,note:`главная кабинета; HTTP ${r.status}`,full:true});
  // objects list + each view
  r=await go(p,`/${lang}/account/objects/`);
  const views=await p.evaluate(()=>[...new Set([...document.querySelectorAll('a[href*="/account/objects/view/"]')].map(a=>a.getAttribute('href')))]);
  await save(p,{folder:'02_account',lang,section:'account-objects',state:'list',vp:'desktop',url:`${BASE}/${lang}/account/objects/`,note:`список объектов; HTTP ${r.status}; ссылок на карточки: ${views.length}; текст: ${await bodyText(p)}`,full:true});
  findings.push(`[${lang}] objects view links: ${views.join(' ')||'нет'}`);
  for(const v of views){
    const id=(v.match(/view\/(\d+)/)||[])[1]||'x';
    r=await go(p,v);
    await save(p,{folder:'02_account',lang,section:`account-objects-view-${id}`,state:'default',vp:'desktop',url:BASE+v,note:`карточка отчёта объекта id=${id} (ссылка из списка объектов текущего аккаунта); HTTP ${r.status}; final=${r.final}`,full:true});
  }
  // mypackages, payments
  for(const [sec,u] of [['account-mypackages',`/${lang}/account/mypackages/`],['account-payments',`/${lang}/account/payments/`]]){
    r=await go(p,u);
    await save(p,{folder:'02_account',lang,section:sec,state:'default',vp:'desktop',url:BASE+u,note:`HTTP ${r.status}; final=${r.final}; текст: ${await bodyText(p)}`,full:true});
  }
  // personal-edit own id: find link in account pages
  r=await go(p,`/${lang}/account/index/`);
  let pe=await p.evaluate(()=>{const a=document.querySelector('a[href*="/account/personal-edit/"]');return a?a.getAttribute('href'):null;});
  if(!pe){ r=await go(p,`/${lang}/account/objects/`); pe=await p.evaluate(()=>{const a=document.querySelector('a[href*="/account/personal-edit/"]');return a?a.getAttribute('href'):null;}); }
  if(pe){
    const id=(pe.match(/personal-edit\/(\d+)/)||[])[1]||'x';
    r=await go(p,pe);
    await save(p,{folder:'02_account',lang,section:`account-personal-edit-${id}`,state:'default',vp:'desktop',url:BASE+pe,note:`форма профиля своего аккаунта (ссылка из кабинета, id=${id}); HTTP ${r.status}`,full:true});
    const tips=await p.$$('text=ⓘ');
    findings.push(`[${lang}] personal-edit ${pe}, tooltips ⓘ: ${tips.length}`);
    if(tips.length){ await tips[tips.length-1].scrollIntoViewIfNeeded(); await tips[tips.length-1].hover(); await p.waitForTimeout(800);
      await save(p,{folder:'03_forms-and-states',lang,section:`account-personal-edit-${id}`,state:'tooltip-info-hover',vp:'desktop',url:BASE+pe,note:`hover на ⓘ рядом с полем пароля в форме личных данных (всего ⓘ: ${tips.length})`});
    }
  } else findings.push(`[${lang}] ссылка на personal-edit в кабинете не найдена`);
  // packages/add 1..4 — до финальной кнопки
  for(const k of [1,2,3,4]){
    const u=`/${lang}/account/packages/add/${k}/`;
    r=await go(p,u);
    const btns=await p.evaluate(()=>[...document.querySelectorAll('button, input[type=submit], a.btn')].map(b=>b.textContent.trim()||b.value).filter(Boolean).slice(0,6).join(' | '));
    await save(p,{folder:'02_account',lang,section:`account-packages-add-${k}`,state:'default',vp:'desktop',url:BASE+u,note:`страница заказа тарифа ${k}; HTTP ${r.status}; final=${r.final}; кнопки на странице: ${btns}; финальная кнопка НЕ нажата`,full:true});
    const ob=await p.$('button.btn, input[type=submit], .main a.btn');
    if(ob&&k===1){ await ob.scrollIntoViewIfNeeded(); await ob.hover(); await p.waitForTimeout(500);
      await save(p,{folder:'03_forms-and-states',lang,section:`account-packages-add-${k}`,state:'button-hover',vp:'desktop',url:BASE+u,note:'hover на кнопке подтверждения заказа тарифа (не нажата)'});
      await p.mouse.move(5,5); await ob.focus(); await p.waitForTimeout(400);
      await save(p,{folder:'03_forms-and-states',lang,section:`account-packages-add-${k}`,state:'button-focus',vp:'desktop',url:BASE+u,note:'focus на кнопке подтверждения заказа тарифа (не нажата)'});
    }
  }
  // dropdown menus & lang switcher inside account
  await go(p,`/${lang}/account/index/`);
  await p.hover('li.has-children:nth-of-type(2) > a'); await p.waitForTimeout(700);
  await save(p,{folder:'03_forms-and-states',lang,section:'account-header-dropdown-about',state:'open-hover',vp:'desktop',url:`${BASE}/${lang}/account/index/`,note:'кабинет: раскрыт пункт «О нас» в шапке'});
  await p.hover('.lang'); await p.waitForTimeout(700);
  await save(p,{folder:'04_languages',lang,section:'account-lang-switcher',state:'hover-open',vp:'desktop',url:`${BASE}/${lang}/account/index/`,note:'кабинет: переключатель языка при наведении'});
  await p.close();
  // mobile menu in account
  const m=await newPage(ctx,'mobile');
  await go(m,`/${lang}/account/index/`);
  await m.click('.menu-toggle'); await m.waitForTimeout(800);
  await save(m,{folder:'03_forms-and-states',lang,section:'account-mobile-menu',state:'open',vp:'mobile',url:`${BASE}/${lang}/account/index/`,note:'открытое мобильное меню в кабинете (пункт «Выход» НЕ нажимался)'});
  await m.close();
}
// responsive for account index
for(const vp of ['desktop','tablet','mobile']){
  for(const lang of LANGS){
    const p=await newPage(ctx,vp);
    r=await go(p,`/${lang}/account/index/`);
    await save(p,{folder:'05_responsive',lang,section:'account-index',state:'logged-in-fullpage',vp,url:`${BASE}/${lang}/account/index/`,note:`${vp} ${VP[vp].width}x${VP[vp].height}; кабинет после входа; HTTP ${r.status}`,full:true});
    await p.close();
  }
}
await b.close();
fs.appendFileSync(path.join(ROOT,'..','mc-audit-findings.txt'),'\n'+findings.join('\n'));
console.log('DONE account, next n =',n);
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)});
