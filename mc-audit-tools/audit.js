const {chromium}=require('playwright');
const fs=require('fs'),path=require('path');
const ROOT='C:/Users/hayk/memorycare/mc-audit-screenshots';
const BASE='https://mc.makyan.com';
const LANGS=['am','ru','en'];
const VP={desktop:{width:1440,height:900},tablet:{width:768,height:1024},mobile:{width:375,height:812}};
let n=parseInt(process.env.START||'1'); let last=0; const SKIP_PUBLIC=!!process.env.SKIP_PUBLIC;
const csvq=s=>'"'+String(s).replace(/"/g,'""')+'"';
async function save(page,o){
  const name=`${String(n).padStart(3,'0')}_${o.lang}_${o.section}_${o.state}_${o.vp}.png`; n++;
  const fp=path.join(ROOT,o.folder,name);
  await page.screenshot({path:fp,fullPage:!!o.full});
  if(!fs.existsSync(fp)||fs.statSync(fp).size<1000) throw new Error('NOT SAVED '+fp);
  fs.appendFileSync(path.join(ROOT,'manifest.csv'),[name,o.url,`${VP[o.vp].width}x${VP[o.vp].height}`,o.auth||'guest',o.note||''].map(csvq).join(',')+'\n');
  console.log('saved',o.folder+'/'+name,fs.statSync(fp).size);
}
async function go(page,u,wait='networkidle'){
  const d=Date.now()-last; if(d<1200) await page.waitForTimeout(1200-d);
  const r=await page.goto(BASE+u,{waitUntil:wait,timeout:60000}); last=Date.now();
  return {status:r?r.status():0,final:page.url().replace(BASE,'')};
}
async function scrollThrough(page){
  await page.evaluate(async()=>{const h=document.documentElement.scrollHeight;for(let y=0;y<h;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
  await page.waitForTimeout(1500);
}
const bodyText=async page=>page.evaluate(()=>(document.querySelector('.main,main')||document.body).innerText.replace(/\s+/g,' ').trim().slice(0,120));
async function newPage(b,vp){ return b.newPage({viewport:VP[vp],isMobile:vp==='mobile',hasTouch:vp==='mobile',deviceScaleFactor:1}); }

(async()=>{
const b=await chromium.launch({channel:'chrome'});
const findings=[];

if(!SKIP_PUBLIC)
for(const lang of LANGS){
  const p=await newPage(b,'desktop');
  let r=await go(p,`/${lang}/page/home/`,'domcontentloaded');
  await save(p,{folder:'03_forms-and-states',lang,section:'home',state:'aos-initial-just-loaded',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:`первый экран сразу после DOMContentLoaded, до срабатывания AOS-анимаций; HTTP ${r.status}`});
  await p.waitForLoadState('networkidle');
  await scrollThrough(p);
  await save(p,{folder:'03_forms-and-states',lang,section:'home',state:'aos-after-scroll',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'первый экран после прокрутки всей страницы и ожидания AOS-анимаций'});
  await save(p,{folder:'01_public',lang,section:'home',state:'fullpage',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'главная целиком (full-page), после прокрутки и AOS',full:true});
  for(const [sec,u] of [['page-history',`/${lang}/page/history/`],['page-mission',`/${lang}/page/mission/`],['page-values',`/${lang}/page/values/`],['publications-news',`/${lang}/publications/news/`]]){
    r=await go(p,u); const t=await bodyText(p);
    await save(p,{folder:'01_public',lang,section:sec,state:'default',vp:'desktop',url:BASE+u,note:`HTTP ${r.status}; final=${r.final}; текст: ${t}`,full:true});
    findings.push(`${u} -> HTTP ${r.status}, текст: "${t}"`);
  }
  r=await go(p,`/${lang}/contact/`);
  await save(p,{folder:'01_public',lang,section:'contact',state:'empty',vp:'desktop',url:`${BASE}/${lang}/contact/`,note:`пустая форма обратной связи; HTTP ${r.status}`,full:true});
  await p.fill('input[name=namesurname]','Test Testyan (TEST, не отправлять)');
  await p.fill('input[name=email]','test-audit@example.com');
  await p.fill('input[name=phone]','+374 00 000000');
  await p.fill('textarea[name=message]','Тестовое сообщение визуального аудита. НЕ ОТПРАВЛЕНО.');
  await p.waitForTimeout(300);
  await save(p,{folder:'03_forms-and-states',lang,section:'contact',state:'filled-not-submitted',vp:'desktop',url:`${BASE}/${lang}/contact/`,note:'форма с тестовыми данными, submit НЕ нажат',full:true});
  await p.close();
}

// ================= 02_account (guest) =================
for(const lang of LANGS){
  const p=await newPage(b,'desktop');
  let r=await go(p,`/${lang}/account/login/`);
  const method=await p.evaluate(()=>document.querySelector('form')?document.querySelector('form').method:'?');
  await save(p,{folder:'02_account',lang,section:'account-login',state:'empty',vp:'desktop',url:`${BASE}/${lang}/account/login/`,note:`пустая форма входа; HTTP ${r.status}; method формы=${method}`});
  await p.fill('input[name=email]','wrong-user@example.com');
  await p.fill('input[name=password]','WrongPassword123');
  await p.waitForTimeout(1200);
  await Promise.all([p.waitForLoadState('networkidle').catch(()=>{}),p.click('form button.btn')]);
  await p.waitForTimeout(1500); last=Date.now();
  const errUrl=p.url(); const errTxt=await bodyText(p);
  const errEl=await p.evaluate(()=>[...document.querySelectorAll('#lres,.error,.alert,.err,[class*=error],[class*=alert],.message,.msg')].map(e=>e.textContent.trim().replace(/\s+/g,' ')).filter(Boolean).slice(0,3).join(' | '));
  findings.push(`login wrong password [${lang}] -> URL ${errUrl.replace(BASE,'')} | error el: "${errEl}" | text: "${errTxt}"`);
  await save(p,{folder:'03_forms-and-states',lang,section:'account-login',state:'error-wrong-password',vp:'desktop',url:errUrl,note:`реальная отправка с неверным паролем; итоговый URL=${errUrl.replace(BASE,'')}; текст ошибки: ${errEl||'(элемент ошибки не найден)'}`});
  r=await go(p,`/${lang}/account/register/`);
  await save(p,{folder:'02_account',lang,section:'account-register',state:'empty',vp:'desktop',url:`${BASE}/${lang}/account/register/`,note:`пустая форма регистрации; HTTP ${r.status}`});
  await p.fill('input[name=fullname]','Test Testyan');
  await p.fill('input[name=phone]','123');
  await p.fill('input[name=email]','not-an-email');
  await p.click('input[name=password]'); await p.keyboard.type('12');
  await p.keyboard.press('Tab'); await p.waitForTimeout(800);
  const liveVal=await p.evaluate(()=>[...document.querySelectorAll('.error,[class*=error],[class*=invalid],.is-invalid,[aria-invalid=true]')].map(e=>e.className+':'+e.textContent.trim().slice(0,40)).join(' | '));
  findings.push(`register partial [${lang}] live-validation elements: "${liveVal||'нет'}"`);
  await save(p,{folder:'03_forms-and-states',lang,section:'account-register',state:'partial-filled-live-validation',vp:'desktop',url:`${BASE}/${lang}/account/register/`,note:`частично заполненные/невалидные значения (phone=123, email=not-an-email, password=12), submit НЕ нажат; live-валидация: ${liveVal||'не обнаружена'}`});
  const tips=await p.$$('text=ⓘ');
  if(tips.length){ await tips[tips.length-1].hover(); await p.waitForTimeout(700);
    await save(p,{folder:'03_forms-and-states',lang,section:'account-register',state:'tooltip-info-hover',vp:'desktop',url:`${BASE}/${lang}/account/register/`,note:`hover на ⓘ рядом с полем пароля (форма регистрации, т.к. personal-edit требует входа); всего ⓘ на странице: ${tips.length}`});
  }
  r=await go(p,`/${lang}/account/reset/`);
  await save(p,{folder:'02_account',lang,section:'account-reset',state:'empty',vp:'desktop',url:`${BASE}/${lang}/account/reset/`,note:`форма восстановления пароля; HTTP ${r.status}`});
  for(const [sec,u] of [['account-index',`/${lang}/account/index/`],['account-objects',`/${lang}/account/objects/`],['account-mypackages',`/${lang}/account/mypackages/`],['account-payments',`/${lang}/account/payments/`],['account-packages-add-1',`/${lang}/account/packages/add/1/`]]){
    r=await go(p,u);
    await save(p,{folder:'02_account',lang,section:sec,state:'guest-redirect',vp:'desktop',url:BASE+u,note:`БЕЗ АВТОРИЗАЦИИ (учётные данные не переданы): HTTP ${r.status}, итоговый URL=${r.final}`});
    findings.push(`${u} guest -> HTTP ${r.status} final ${r.final}`);
  }
  await p.close();
}

// ================= 03 states: menus, dropdowns, buttons =================
for(const lang of LANGS){
  const p=await newPage(b,'desktop');
  await go(p,`/${lang}/page/home/`);
  await p.hover('li.has-children:nth-of-type(2) > a'); await p.waitForTimeout(700);
  await save(p,{folder:'03_forms-and-states',lang,section:'header-dropdown-about',state:'open-hover',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'раскрыт пункт «Մեր մասին»/«О нас» (javascript:void(0)) по hover'});
  await p.hover('li.has-children:nth-of-type(3) > a'); await p.waitForTimeout(700);
  await save(p,{folder:'03_forms-and-states',lang,section:'header-dropdown-news',state:'open-hover',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'раскрыт пункт «Նորություններ»/«Новости» (javascript:void(0)) по hover'});
  await p.mouse.move(10,400); await p.waitForTimeout(500);
  await save(p,{folder:'04_languages',lang,section:'lang-switcher',state:'closed',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'переключатель языка в исходном состоянии (шапка)'});
  await p.hover('.lang'); await p.waitForTimeout(700);
  await save(p,{folder:'04_languages',lang,section:'lang-switcher',state:'hover-open',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'переключатель языка при наведении (открытое состояние)'});
  const btn=await p.$('a.sp.btn');
  if(btn){ await btn.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
    await save(p,{folder:'03_forms-and-states',lang,section:'home-package-order-btn',state:'default',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'блок тарифов, кнопки заказа в обычном состоянии'});
    await btn.hover(); await p.waitForTimeout(600);
    await save(p,{folder:'03_forms-and-states',lang,section:'home-package-order-btn',state:'hover',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'hover на кнопке заказа тарифа (ссылка на /account/packages/add/N/)'});
    await p.mouse.move(5,5); await btn.focus(); await p.waitForTimeout(400);
    await save(p,{folder:'03_forms-and-states',lang,section:'home-package-order-btn',state:'focus',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:'focus (клавиатурный) на кнопке заказа тарифа'});
  } else findings.push(`[${lang}] кнопки a.sp.btn на главной не найдены`);
  await p.close();
  const m=await newPage(b,'mobile');
  await go(m,`/${lang}/page/home/`);
  await m.click('.menu-toggle'); await m.waitForTimeout(800);
  await save(m,{folder:'03_forms-and-states',lang,section:'mobile-menu',state:'open',vp:'mobile',url:`${BASE}/${lang}/page/home/`,note:'открытое мобильное меню (гамбургер), публичная часть'});
  await m.click('li.has-children:nth-of-type(2) > a'); await m.waitForTimeout(800);
  await save(m,{folder:'03_forms-and-states',lang,section:'mobile-menu',state:'open-submenu-about',vp:'mobile',url:`${BASE}/${lang}/page/home/`,note:'мобильное меню с раскрытым подменю «О нас»'});
  await m.click('li.has-children:nth-of-type(3) > a'); await m.waitForTimeout(800);
  await save(m,{folder:'03_forms-and-states',lang,section:'mobile-menu',state:'open-submenu-news',vp:'mobile',url:`${BASE}/${lang}/page/home/`,note:'мобильное меню с раскрытым подменю «Новости»'});
  await m.close();
  const m2=await newPage(b,'mobile');
  await go(m2,`/${lang}/account/login/`);
  await m2.click('.menu-toggle'); await m2.waitForTimeout(800);
  await save(m2,{folder:'03_forms-and-states',lang,section:'mobile-menu-login-page',state:'open',vp:'mobile',url:`${BASE}/${lang}/account/login/`,note:'мобильное меню на странице входа (зона account без авторизации)'});
  await m2.close();
}

// ================= 05_responsive =================
for(const vp of ['desktop','tablet','mobile']){
  for(const lang of LANGS){
    const p=await newPage(b,vp);
    for(const [sec,u] of [['home',`/${lang}/page/home/`],['contact',`/${lang}/contact/`],['account-login',`/${lang}/account/login/`],['account-index',`/${lang}/account/index/`]]){
      const r=await go(p,u); if(sec==='home') await scrollThrough(p);
      await save(p,{folder:'05_responsive',lang,section:sec,state:'fullpage',vp,url:BASE+u,note:`${vp} ${VP[vp].width}x${VP[vp].height}; HTTP ${r.status}; final=${r.final}${sec==='account-index'?' (без авторизации — редирект на login)':''}`,full:true});
    }
    await p.close();
  }
}
await b.close();
fs.writeFileSync(path.join(ROOT,'..','mc-audit-findings.txt'),findings.join('\n'));
console.log('DONE total files',n-1);
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)});
