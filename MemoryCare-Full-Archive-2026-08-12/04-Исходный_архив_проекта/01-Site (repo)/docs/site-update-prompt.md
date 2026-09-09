# MemoryCare — промпт обновления контента сайта (для Claude Design)

> Итоговый набор правок от 01.08.2026: универсальная аудитория (не только
> диаспора), единая цена без доплат за площадь, новый слоган. Все правки на
> 4 языках (EN/RU/HY/FR), готовы к вставке. Не затрагивает структуру страниц,
> тарифы (суммы), визуальный дизайн — только текст перечисленных секций.

---

## Контекст для дизайн-инструмента

MemoryCare — подписочный сервис ухода и уборки семейных захоронений в
Армении с фото- и видеоотчётами (GPS + дата). Сайт мультиязычный
(EN/RU/HY/FR), в объекте переводов `t` (`slogan`, `heroH1`, `heroSub`,
`probTitle`, `probBody`, `cmpTitle`, `cmpBody`, `trustLead`, `priceLead`,
массив `faq` и т.д. — по одному блоку `{...}` на язык).

**Причина правок:** аудит показал, что hero, блок «Проблема» и блок
сравнения цены были написаны **только под диаспору** («через тысячи
километров», «дешевле, чем прилететь самому») — это отталкивает локальных
армянских клиентов, которые тоже целевая аудитория. Плюс убираем ценовую
дифференциацию по происхождению клиента и меняем слоган на нейтральный.

---

## ⚠️ Обязательно сделать
1. Заменить копирайт в 5 секциях (ниже) на всех 4 языках — универсальная
   аудитория вместо diaspora-only.
2. Убрать **любое** упоминание площади участка/м² с сайта (тексты и FAQ).
3. Заменить слоган во всех местах, где он используется (шапка/hero/футер).

## ⛔ Не делать
- Не упоминать площадь участка, м², доплаты за размер — нигде на сайте.
  *(Внутреннее решение: первые ~полгода компания либо поглощает разницу по
  нестандартно большим участкам, либо решает индивидуально с клиентом —
  это НЕ публикуется.)*
- Не упоминать QR-код / цифровую страницу памяти — это продукт Года 2, вне
  текущего сайта.
- Не делать переключатель «для местных / для диаспоры» и не разносить сайт
  на две версии — один бренд, одна страница, тон меняется по секциям.
- Название бренда — **`MemoryCare`** слитно, не переводится.

---

## 1. Слоган (заменить везде)

| Язык | Было (убрать) | Стало |
|---|---|---|
| EN | "Love Knows No Borders. Care Knows No Distance." | **"The care that matters."** |
| RU | «Любовь не знает границ. Забота не знает расстояний.» | **«Уход, который по-настоящему важен.»** |
| HY | «Սերը սահման չի ճանաչում, հոգատարությունը՝ հեռավորություն։» | **«Խնամքը, որը կարևոր է»** |
| FR | «L'amour ne connaît pas de frontières, le soin ne connaît pas de distance.» | **«Le soin qui compte.»** |

---

## 2. Hero (шапка) — универсальная аудитория

**Заголовок (heroH1):**
- EN: "Their resting place, cared for — even when you can't be there yourself."
- RU: «Место памяти родных — под уходом, даже когда вы не можете быть рядом.»
- HY: «Ձեր հարազատների հանգստավայրը՝ խնամված, նույնիսկ երբ դուք չեք կարող կողքին լինել։»
- FR: «Leur lieu de repos, entretenu — même quand vous ne pouvez pas être là.»

**Подзаголовок (heroSub) — здесь явно называем обе причины:**
- EN: "Regular care, cleaning and upkeep in Armenia — whether you're abroad or simply don't have the time to visit as often as you'd like. A photo and video report, GPS-tagged and dated, after every visit."
- RU: «Регулярный уход, уборка и профилактика в Армении — для тех, кто далеко, и для тех, кому просто не хватает времени приезжать так часто, как хочется. Фото- и видеоотчёт, GPS и дата — после каждого визита.»
- HY: «Կանոնավոր խնամք, մաքրում և պահպանում Հայաստանում՝ նրանց համար, ովքեր հեռու են, և նրանց համար, ովքեր պարզապես ժամանակ չունեն հաճախ գալու։ Ֆոտո և տեսահաշվետվություն, GPS և ամսաթիվ՝ ամեն այցից հետո։»
- FR: «Entretien, nettoyage et soin réguliers en Arménie — que vous soyez à l'étranger ou que vous manquiez simplement de temps pour venir aussi souvent que vous le voudriez. Un rapport photo et vidéo, géolocalisé et daté, après chaque visite.»

*(heroChip — «Отчёт отправлен · дата · GPS» — не менять, уже нейтрален.)*

---

## 3. Блок «Проблема»

**Заголовок (probTitle):**
- EN: "It's not always possible to visit as often as you'd like."
- RU: «Не всегда получается приезжать так часто, как хочется.»
- HY: «Միշտ չէ, որ հնարավոր է գալ այնքան հաճախ, որքան կուզենայիք։»
- FR: «On ne peut pas toujours venir aussi souvent qu'on le voudrait.»

**Текст (probBody):**
- EN: "For some, the reason is thousands of kilometres, work weeks and visas. For others, it's simply a packed schedule right here in Yerevan. The reason matters less than the outcome: you haven't forgotten, and their resting place shouldn't suffer for it. We become your hands — nearby or far away."
- RU: «Для одних причина — тысячи километров, рабочие недели и визы. Для других — плотный график в самом Ереване. Причина не так важна: вы не забыли, а место памяти не должно от этого страдать. Мы становимся вашими руками — рядом или издалека.»
- HY: «Ոմանց համար պատճառը հազարավոր կիլոմետրերն են, աշխատանքային շաբաթներն ու վիզաները։ Ուրիշների համար՝ ծանրաբեռնված ժամանակացույցը հենց Երևանում։ Պատճառը այնքան էլ կարևոր չէ. դուք չեք մոռացել, և հիշատակի վայրը չպետք է տուժի դրանից։ Մենք դառնում ենք ձեր ձեռքերը՝ կողքին կամ հեռվից։»
- FR: «Pour certains, c'est la distance : des milliers de kilomètres, des semaines de travail, des visas. Pour d'autres, c'est simplement un emploi du temps chargé, ici même à Erevan. La raison importe moins que le résultat : vous n'avez pas oublié, et leur lieu de mémoire ne doit pas en pâtir. Nous devenons vos mains — de près ou de loin.»

---

## 4. Блок сравнения цены

**Заголовок (cmpTitle):**
- EN: "Less hassle than doing it yourself"
- RU: «Меньше хлопот, чем сделать это самому»
- HY: «Ավելի քիչ հոգսեր, քան ինքներդ անելը»
- FR: «Moins de tracas que de le faire vous-même»

**Текст (cmpBody):**
- EN: "A round-trip flight to Yerevan often costs more than a full year of care on the Optimal plan. And if you're already here, it's a weekend back in your hands — and one less thing to feel guilty about missing."
- RU: «Перелёт в Ереван и обратно часто стоит дороже, чем год ухода по тарифу «Оптимальный». А если вы уже в Ереване — это освободившиеся выходные и меньше чувства вины за очередной пропущенный визит.»
- HY: «Երևան չվերթը երկու ուղղությամբ հաճախ ավելի թանկ է, քան «Օպտիմալ» փաթեթով մեկ ամբողջ տարվա խնամքը։ Իսկ եթե դուք արդեն Երևանում եք՝ սա ազատված հանգստյան օրեր են և ավելի քիչ մեղքի զգացում հերթական բաց թողած այցի համար։»
- FR: «Un aller-retour en avion jusqu'à Erevan coûte souvent plus cher qu'une année entière d'entretien avec la formule Optimal. Et si vous êtes déjà à Erevan, c'est un week-end que vous récupérez — et un peu moins de culpabilité pour une visite manquée.»

---

## 5. Блок доверия (лёгкая правка)

**Текст (trustLead):**
- EN: "Whether you're thousands of kilometres away or simply don't get there often, you're trusting us with work you don't see with your own eyes every day. That's why this service is built on evidence, not promises."
- RU: «Будь вы за тысячи километров или просто редко бываете на месте — вы платите за работу, которую не видите каждый день. Поэтому мы строим сервис вокруг доказательств, а не обещаний.»
- HY: «Անկախ նրանից՝ դուք հազարավոր կիլոմետրեր հեռու եք, թե պարզապես հազվադեպ եք գնում այնտեղ, դուք վճարում եք աշխատանքի համար, որը ամեն օր չեք տեսնում։ Դրա համար էլ մեր ծառայությունը կառուցված է ապացույցների, ոչ թե խոստումների վրա։»
- FR: «Que vous soyez à des milliers de kilomètres ou que vous vous y rendiez simplement rarement, vous payez pour un travail que vous ne voyez pas chaque jour. C'est pourquoi ce service repose sur des preuves, et non sur des promesses.»

---

## 6. Тарифы — убрать упоминание площади участка

**Текст (priceLead) — убрать первое предложение про 16 м²:**
- EN: ~~"Base plot up to 16 m²."~~ "Payment is made in Armenian drams (֏). Other currencies are shown for reference at ≈ 365 ֏ per $1."
- RU: ~~«Базовый участок — до 16 м².»~~ «Оплата в драмах (֏). Суммы в других валютах — справочные, по курсу ≈ 365 ֏ за $1.»
- HY: ~~«Բազային տեղամաս՝ մինչև 16 մ²։»~~ «Վճարումը դրամով (֏)։ Այլ արժույթները՝ տեղեկատվական, ≈ 365 ֏ / $1 փոխարժեքով։»
- FR: ~~«Parcelle de base jusqu'à 16 m².»~~ «Le paiement se fait en drams (֏). Les autres devises sont indicatives, au taux de ≈ 365 ֏ pour 1 $.»

Карточки тарифов (`tiers` — Экспресс/Оптимальный/Максимум и их фичи) не
содержат упоминаний площади — менять не нужно.

---

## 7. Новый вопрос в FAQ (добавить)

- EN: **Q** "I live in Yerevan — is this service still for me?" **A** "Yes. Many local clients simply don't have time for regular visits — we handle the schedule for you, including a one-time visit before a memorial date."
- RU: **Q** «Я живу в Ереване — этот сервис вообще для меня?» **A** «Да. Многие локальные клиенты просто не успевают выделить время на регулярные визиты — мы берём уход на себя по расписанию, которое удобно вам, включая разовый визит перед памятной датой.»
- HY: **Q** «Ես ապրում եմ Երևանում․ այս ծառայությունը իմ համար է՞։» **A** «Այո։ Շատ տեղացի հաճախորդներ պարզապես ժամանակ չունեն կանոնավոր այցերի համար․ մենք ստանձնում ենք խնամքը ձեզ հարմար ժամանակացույցով, ներառյալ միանվագ այցը հիշատակի օրվա նախօրեին։»
- FR: **Q** « J'habite à Erevan — ce service est-il fait pour moi ? » **A** « Oui. Beaucoup de clients locaux manquent simplement de temps pour des visites régulières — nous prenons en charge le calendrier qui vous convient, y compris une visite ponctuelle avant une date de commémoration. »

Разместить последним пунктом в существующем массиве `faq` (после вопроса
про доступ на участок).

---

## Приложение — готовый код (если конструктор использует объект `t{}`)

Если сайт использует ту же структуру перевода, что была в экспорте (блоки
`ru:{...}`, `en:{...}`, `hy:{...}`, `fr:{...}` с ключами вида `key:'значение'`),
ниже — точечные замены по ключам для каждого языка. Вставить точечно, не
заменяя весь объект целиком.

### RU
```js
slogan:'Уход, который по-настоящему важен.',
heroH1:'Место памяти родных — под уходом, даже когда вы не можете быть рядом.',
heroSub:'Регулярный уход, уборка и профилактика в Армении — для тех, кто далеко, и для тех, кому просто не хватает времени приезжать так часто, как хочется. Фото- и видеоотчёт, GPS и дата — после каждого визита.',
probTitle:'Не всегда получается приезжать так часто, как хочется.',
probBody:'Для одних причина — тысячи километров, рабочие недели и визы. Для других — плотный график в самом Ереване. Причина не так важна: вы не забыли, а место памяти не должно от этого страдать. Мы становимся вашими руками — рядом или издалека.',
cmpTitle:'Меньше хлопот, чем сделать это самому',
cmpBody:'Перелёт в Ереван и обратно часто стоит дороже, чем год ухода по тарифу «Оптимальный». А если вы уже в Ереване — это освободившиеся выходные и меньше чувства вины за очередной пропущенный визит.',
trustLead:'Будь вы за тысячи километров или просто редко бываете на месте — вы платите за работу, которую не видите каждый день. Поэтому мы строим сервис вокруг доказательств, а не обещаний.',
priceLead:'Оплата в драмах (֏). Суммы в других валютах — справочные, по курсу ≈ 365 ֏ за $1.',
// добавить в конец массива faq:
{q:'Я живу в Ереване — этот сервис вообще для меня?', a:'Да. Многие локальные клиенты просто не успевают выделить время на регулярные визиты — мы берём уход на себя по расписанию, которое удобно вам, включая разовый визит перед памятной датой.'}
```

### EN
```js
slogan:'The care that matters.',
heroH1:'Their resting place, cared for — even when you can’t be there yourself.',
heroSub:'Regular care, cleaning and upkeep in Armenia — whether you’re abroad or simply don’t have the time to visit as often as you’d like. A photo and video report, GPS-tagged and dated, after every visit.',
probTitle:'It’s not always possible to visit as often as you’d like.',
probBody:'For some, the reason is thousands of kilometres, work weeks and visas. For others, it’s simply a packed schedule right here in Yerevan. The reason matters less than the outcome: you haven’t forgotten, and their resting place shouldn’t suffer for it. We become your hands — nearby or far away.',
cmpTitle:'Less hassle than doing it yourself',
cmpBody:'A round-trip flight to Yerevan often costs more than a full year of care on the Optimal plan. And if you’re already here, it’s a weekend back in your hands — and one less thing to feel guilty about missing.',
trustLead:'Whether you’re thousands of kilometres away or simply don’t get there often, you’re trusting us with work you don’t see with your own eyes every day. That’s why this service is built on evidence, not promises.',
priceLead:'Payment is made in Armenian drams (֏). Other currencies are shown for reference at ≈ 365 ֏ per $1.',
// append to faq array:
{q:'I live in Yerevan — is this service still for me?', a:'Yes. Many local clients simply don’t have time for regular visits — we handle the schedule for you, including a one-time visit before a memorial date.'}
```

### HY
```js
slogan:'Խնամքը, որը կարևոր է',
heroH1:'Ձեր հարազատների հանգստավայրը՝ խնամված, նույնիսկ երբ դուք չեք կարող կողքին լինել։',
heroSub:'Կանոնավոր խնամք, մաքրում և պահպանում Հայաստանում՝ նրանց համար, ովքեր հեռու են, և նրանց համար, ովքեր պարզապես ժամանակ չունեն հաճախ գալու։ Ֆոտո և տեսահաշվետվություն, GPS և ամսաթիվ՝ ամեն այցից հետո։',
probTitle:'Միշտ չէ, որ հնարավոր է գալ այնքան հաճախ, որքան կուզենայիք։',
probBody:'Ոմանց համար պատճառը հազարավոր կիլոմետրերն են, աշխատանքային շաբաթներն ու վիզաները։ Ուրիշների համար՝ ծանրաբեռնված ժամանակացույցը հենց Երևանում։ Պատճառը այնքան էլ կարևոր չէ. դուք չեք մոռացել, և հիշատակի վայրը չպետք է տուժի դրանից։ Մենք դառնում ենք ձեր ձեռքերը՝ կողքին կամ հեռվից։',
cmpTitle:'Ավելի քիչ հոգսեր, քան ինքներդ անելը',
cmpBody:'Երևան չվերթը երկու ուղղությամբ հաճախ ավելի թանկ է, քան «Օպտիմալ» փաթեթով մեկ ամբողջ տարվա խնամքը։ Իսկ եթե դուք արդեն Երևանում եք՝ սա ազատված հանգստյան օրեր են և ավելի քիչ մեղքի զգացում հերթական բաց թողած այցի համար։',
trustLead:'Անկախ նրանից՝ դուք հազարավոր կիլոմետրեր հեռու եք, թե պարզապես հազվադեպ եք գնում այնտեղ, դուք վճարում եք աշխատանքի համար, որը ամեն օր չեք տեսնում։ Դրա համար էլ մեր ծառայությունը կառուցված է ապացույցների, ոչ թե խոստումների վրա։',
priceLead:'Վճարումը դրամով (֏)։ Այլ արժույթները՝ տեղեկատվական, ≈ 365 ֏ / $1 փոխարժեքով։',
// ավելացնել faq զանգվածի վերջում:
{q:'Ես ապրում եմ Երևանում․ այս ծառայությունը իմ համար է՞։', a:'Այո։ Շատ տեղացի հաճախորդներ պարզապես ժամանակ չունեն կանոնավոր այցերի համար․ մենք ստանձնում ենք խնամքը ձեզ հարմար ժամանակացույցով, ներառյալ միանվագ այցը հիշատակի օրվա նախօրեին։'}
```

### FR
```js
slogan:'Le soin qui compte.',
heroH1:'Leur lieu de repos, entretenu — même quand vous ne pouvez pas être là.',
heroSub:'Entretien, nettoyage et soin réguliers en Arménie — que vous soyez à l’étranger ou que vous manquiez simplement de temps pour venir aussi souvent que vous le voudriez. Un rapport photo et vidéo, géolocalisé et daté, après chaque visite.',
probTitle:'On ne peut pas toujours venir aussi souvent qu’on le voudrait.',
probBody:'Pour certains, c’est la distance : des milliers de kilomètres, des semaines de travail, des visas. Pour d’autres, c’est simplement un emploi du temps chargé, ici même à Erevan. La raison importe moins que le résultat : vous n’avez pas oublié, et leur lieu de mémoire ne doit pas en pâtir. Nous devenons vos mains — de près ou de loin.',
cmpTitle:'Moins de tracas que de le faire vous-même',
cmpBody:'Un aller-retour en avion jusqu’à Erevan coûte souvent plus cher qu’une année entière d’entretien avec la formule Optimal. Et si vous êtes déjà à Erevan, c’est un week-end que vous récupérez — et un peu moins de culpabilité pour une visite manquée.',
trustLead:'Que vous soyez à des milliers de kilomètres ou que vous vous y rendiez simplement rarement, vous payez pour un travail que vous ne voyez pas chaque jour. C’est pourquoi ce service repose sur des preuves, et non sur des promesses.',
priceLead:'Le paiement se fait en drams (֏). Les autres devises sont indicatives, au taux de ≈ 365 ֏ pour 1 $.',
// ajouter à la fin du tableau faq:
{q:'J’habite à Erevan — ce service est-il fait pour moi ?', a:'Oui. Beaucoup de clients locaux manquent simplement de temps pour des visites régulières — nous prenons en charge le calendrier qui vous convient, y compris une visite ponctuelle avant une date de commémoration.'}
```

---

*Промпт подготовлен 01.08.2026. Не включает уже согласованные ранее вещи
(тарифные суммы, палитра olive/anthracite/white, эмблема — незабудка в
символе вечности между ладоней), если они уже применены на сайте —
проверьте отдельно.*
