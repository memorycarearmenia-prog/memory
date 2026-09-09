const {chromium}=require('playwright');
const fs=require('fs'),path=require('path');
const ROOT='C:/Users/hayk/memorycare/mc-audit-screenshots';
const BASE='https://mc.makyan.com';
const LANGS=['am','ru','en'];
const VP={desktop:{width:1440,height:900},tablet:{width:768,height:1024},mobile:{width:375,height:812}};
let n=parseInt(process.env.START); let last=0;
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
(async()=>{
const b=await chromium.launch({channel:'chrome'});
const findings=[];
for(const lang of LANGS){
  const p=await b.newPage({viewport:VP.desktop});
  await go(p,`/${lang}/page/home/`);
  await p.waitForTimeout(1500);
  // jump to mid page: AOS elements there are not yet animated
  const st=await p.evaluate(()=>{window.scrollTo(0,2300);const els=[...document.querySelectorAll('[data-aos]')];return {total:els.length,animated:els.filter(e=>e.classList.contains('aos-animate')).length};});
  await save(p,{folder:'03_forms-and-states',lang,section:'home-midpage',state:'aos-before-animation',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:`мгновенный прыжок на scrollY=2300 и снимок без ожидания: AOS-блоки ещё не появились (animated ${st.animated}/${st.total})`});
  await p.waitForTimeout(2000);
  const st2=await p.evaluate(()=>{const els=[...document.querySelectorAll('[data-aos]')];return {total:els.length,animated:els.filter(e=>e.classList.contains('aos-animate')).length};});
  await save(p,{folder:'03_forms-and-states',lang,section:'home-midpage',state:'aos-after-animation',vp:'desktop',url:`${BASE}/${lang}/page/home/`,note:`та же позиция scrollY=2300 через 2 с: AOS-анимация отработала (animated ${st2.animated}/${st2.total})`});
  findings.push(`AOS [${lang}] before ${st.animated}/${st.total} -> after ${st2.animated}/${st2.total}`);
  // contact viewport-only (compare with full-page ghost submenu artifact)
  await go(p,`/${lang}/contact/`); await p.mouse.move(700,500); await p.waitForTimeout(1500);
  await save(p,{folder:'01_public',lang,section:'contact',state:'viewport-only',vp:'desktop',url:`${BASE}/${lang}/contact/`,note:'контакты, только видимая область (для сравнения с full-page кадром, где подменю шапки просвечивают)'});
  // login: password eye toggle
  await go(p,`/${lang}/account/login/`);
  await p.fill('input[name=password]','TestPassword'); await p.click('.pt'); await p.waitForTimeout(500);
  await save(p,{folder:'03_forms-and-states',lang,section:'account-login',state:'password-visible-toggle',vp:'desktop',url:`${BASE}/${lang}/account/login/`,note:'нажата иконка «глаз» — пароль показан открытым текстом (тестовое значение, форма не отправлена)'});
  await p.close();
}
await b.close();
fs.appendFileSync(path.join(ROOT,'..','mc-audit-findings.txt'),'\n'+findings.join('\n'));
console.log('DONE extra, next n =',n);
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)});
