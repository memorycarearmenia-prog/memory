// Открывает обычное (видимое) окно Chrome на странице входа.
// Вы сами вводите логин и пароль и нажимаете «Войти».
// Скрипт ждёт успешного входа (появление пункта «Личный кабинет» в шапке
// или переход на /account/index/), сохраняет cookies сессии в state.json и закрывает окно.
// Пароль скрипт НЕ читает и никуда не записывает.
const {chromium}=require('playwright');
const path=require('path');
(async()=>{
  const b=await chromium.launch({channel:'chrome',headless:false});
  const ctx=await b.newContext({viewport:{width:1280,height:900}});
  const p=await ctx.newPage();
  await p.goto('https://mc.makyan.com/ru/account/login/',{waitUntil:'networkidle'});
  console.log('Окно открыто. Войдите в аккаунт вручную. Ожидание до 10 минут...');
  await p.waitForFunction(()=>location.pathname.includes('/account/index/')||
     (document.querySelector('li.account')&&getComputedStyle(document.querySelector('li.account')).display!=='none'),
     null,{timeout:600000,polling:1000});
  await p.waitForTimeout(1500);
  const out=path.join(__dirname,'state.json');
  await ctx.storageState({path:out});
  console.log('Сессия сохранена:',out,'| URL:',p.url());
  await b.close();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
