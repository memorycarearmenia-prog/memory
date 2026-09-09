# MemoryCare — локализованные title / description (AM · EN · RU · FR)

Готовые строки для `<title>`, `<meta name="description">` и Open Graph.
Длина в пределах нормы (title ≤ ~60, description ≤ ~160 символов).

## EN
- **title:** `MemoryCare — Grave Care in Armenia · Photo & Video Reports`
- **description:** `We tend and clean your family's grave in Armenia and send a GPS-tagged photo & video report after every visit. The care that matters.`

## RU
- **title:** `MemoryCare — уход за могилой в Армении · фото- и видеоотчёты`
- **description:** `Регулярный уход и уборка могилы родных в Армении с фото- и видеоотчётом (GPS и дата) после каждого визита. Уход, который по-настоящему важен.`

## HY
- **title:** `MemoryCare — գերեզմանի խնամք Հայաստանում · ֆոտո և տեսահաշվետվություն`
- **description:** `Ձեր հարազատների գերեզմանի կանոնավոր խնամք ու մաքրում Հայաստանում՝ ամեն այցից հետո GPS-ով ֆոտո և տեսահաշվետվությամբ։ Խնամքը, որը կարևոր է։`

## FR
- **title:** `MemoryCare — entretien de tombe en Arménie · rapports photo/vidéo`
- **description:** `Entretien et nettoyage réguliers de la tombe de vos proches en Arménie, avec un rapport photo et vidéo géolocalisé après chaque visite.`

---

## Как подключить (JS, под ваш i18n-объект `t`)

Добавьте в объект перевода каждого языка поля `metaTitle` и `metaDesc`, затем
при переключении языка обновляйте `<title>`, `<html lang>` и meta:

```js
const META = {
  en:{ title:"MemoryCare — Grave Care in Armenia · Photo & Video Reports",
       desc:"We tend and clean your family's grave in Armenia and send a GPS-tagged photo & video report after every visit. The care that matters." },
  ru:{ title:"MemoryCare — уход за могилой в Армении · фото- и видеоотчёты",
       desc:"Регулярный уход и уборка могилы родных в Армении с фото- и видеоотчётом (GPS и дата) после каждого визита. Уход, который по-настоящему важен." },
  hy:{ title:"MemoryCare — գերեզմանի խնամք Հայաստանում · ֆոտո և տեսահաշվետվություն",
       desc:"Ձեր հարազատների գերեզմանի կանոնավոր խնամք ու մաքրում Հայաստանում՝ ամեն այցից հետո GPS-ով ֆոտո և տեսահաշվետվությամբ։" },
  fr:{ title:"MemoryCare — entretien de tombe en Arménie · rapports photo/vidéo",
       desc:"Entretien et nettoyage réguliers de la tombe de vos proches en Arménie, avec un rapport photo et vidéo géolocalisé après chaque visite." },
};
function applyMeta(lang){
  const m = META[lang] || META.en;
  document.title = m.title;
  document.documentElement.lang = lang;
  const set = (sel, val) => { const el=document.querySelector(sel); if(el) el.setAttribute('content', val); };
  set('meta[name="description"]', m.desc);
  set('meta[property="og:title"]', m.title);
  set('meta[property="og:description"]', m.desc);
  set('meta[property="og:locale"]', ({en:'en',hy:'hy_AM',ru:'ru_RU',fr:'fr_FR'})[lang]||'en');
}
// вызывать applyMeta(currentLang) при загрузке и при каждом переключении языка
```

> Примечание: соцсети (WhatsApp/Telegram/Facebook) читают og:* из **отданного**
> HTML без JS. Чтобы превью было на нужном языке, значения по умолчанию в `<head>`
> должны быть реальными (EN), а JS доуточняет для пользователя в браузере.
