# MemoryCare — промпт «профессионализм» для Claude Design

> Готовый промпт от 03.08.2026: акцент на профессионализме сервиса —
> обученная команда, профессиональное оборудование, безопасная для камня
> химия. Раньше это упоминалось только в одной карточке блока доверия;
> теперь акцент проходит через весь путь клиента (hero → как это работает →
> тарифы → доверие → FAQ). Все правки на 4 языках (EN/RU/HY/FR), готовы к
> вставке. Не меняет структуру секций, суммы тарифов, палитру — только
> текст перечисленных мест плюс один новый пункт в FAQ и одна новая
> мини-метрика в hero.

---

## Контекст для дизайн-инструмента

MemoryCare — подписочный сервис ухода и уборки семейных захоронений в
Армении. Один из открытых вопросов сайта: нигде не было ясно сказано, что
это **профессиональная услуга** — с обученной командой, профессиональным
инвентарём и подобранной для камня (не абразивной/не кислотной) химией, а
не «дядя с ведром и тряпкой». Это отличает MemoryCare от неорганизованных
фрилансеров с list.am/Instagram (см. позиционирование в
`docs/BUSINESS-CONTEXT.md` §7).

## ⚠️ Обязательно сделать

1. В hero добавить третью мини-метрику (сейчас их две: «100% фото/видео» и
   «GPS») — про команду и оборудование.
2. В блоке «Как это работает», шаг 2 («Регулярные визиты») — явно назвать
   профессиональное оборудование и безопасную для камня химию.
3. В карточке тарифа «Экспресс» добавить пункт про профессиональное
   оборудование (он же наследуется в «Оптимальный»/«Максимум» через
   «Всё из Экспресс»).
4. В блоке доверия — поднять карточку про команду/оборудование на 2-е
   место (сразу после «Подтверждено каждый раз»), не в конец сетки.
5. Добавить новый вопрос в FAQ — какое оборудование и химию используете и
   почему это важно (не повредить камень).

## ⛔ Не делать

- Не изобретать конкретные бренды оборудования/химии, сертификаты — их нет
  в брифе, это осталось бы недостоверным. Формулировки ниже — общего рода
  («профессиональное оборудование», «безопасные для камня средства»), без
  вымышленной конкретики.
- Не трогать суммы тарифов, структуру секций, палитру, слоган.

---

## 1. Hero — новая мини-метрика (третья, после «100%» и «GPS»)

| Язык | Число/лейбл | Подпись |
|---|---|---|
| EN | **PRO** | Trained team, professional equipment |
| RU | **ПРОФ** | Обученная команда, профессиональное оборудование |
| HY | **ՊՐՈՖ** | Վերապատրաստված թիմ, պրոֆեսիոնալ սարքավորում |
| FR | **PRO** | Équipe formée, équipement professionnel |

Визуально — третий блок в ряду мини-метрик hero, тот же стиль (крупное
число/лейбл + мелкая подпись под ним), рядом с существующими.

---

## 2. Как это работает — шаг 2 (заголовок не меняется, меняется только текст)

**Было (EN, для примера):** "Our caretaker tends and cleans the grave on
your plan's schedule."

**Стало:**
- EN: "Our trained care team tends and cleans the grave with professional equipment and stone-safe products, on your plan's schedule."
- RU: «Наша обученная команда ухаживает за могилой и убирает её с профессиональным оборудованием и безопасными для камня средствами, по графику тарифа.»
- HY: «Մեր վերապատրաստված թիմը խնամում և մաքրում է գերեզմանը՝ պրոֆեսիոնալ սարքավորումներով և քարի համար անվտանգ միջոցներով, ըստ սակագնի ժամանակացույցի։»
- FR: «Notre équipe formée entretient et nettoie la tombe avec un équipement professionnel et des produits sans danger pour la pierre, selon le rythme de votre formule.»

---

## 3. Тариф «Экспресс» — новый пункт (4-й в списке фич, после «Идеально, чтобы попробовать»)

- EN: "Professional equipment & stone-safe products"
- RU: «Профессиональное оборудование и безопасные для камня средства»
- HY: «Պրոֆեսիոնալ սարքավորումներ և քարի համար անվտանգ մաքրող միջոցներ»
- FR: «Équipement professionnel et produits sans danger pour la pierre»

Карточки «Оптимальный»/«Максимум» отдельно не трогать — они уже наследуют
список фич «Экспресс» через пункт «Всё из Экспресс/Оптимального».

---

## 4. Блок доверия — переставить карточку, не переписывать текст

Текущий порядок карточек (4 шт., сетка 2×2): (1) Подтверждено каждый раз →
(2) Реальная компания → (3) Понятные условия → (4) Обученная
команда/оборудование.

**Новый порядок:** (1) Подтверждено каждый раз → **(2) Обученная
команда/оборудование** → (3) Реальная компания → (4) Понятные условия.

Только перестановка позиции карточки (2-я вместо 4-й, чтобы её было видно
сразу, без скролла/на первом ряду сетки). Сам текст карточки не меняется —
он уже был добавлен ранее:

- EN: **"A trained team, proper equipment"** — "Every visit is done by a trained care team with professional equipment and cleaning products chosen to be safe for natural stone — never harsh chemicals that could damage the memorial."
- RU: **«Обученная команда, профессиональное оборудование»** — «Каждый визит выполняет обученная команда с профессиональным оборудованием и средствами для чистки, безопасными для натурального камня — никакой агрессивной химии, способной повредить памятник.»
- HY: **«Վերապատրաստված թիմ, պրոֆեսիոնալ սարքավորում»** — «Ամեն այցն իրականացնում է վերապատրաստված թիմը՝ պրոֆեսիոնալ սարքավորումներով և քարի համար անվտանգ մաքրող միջոցներով, ոչ թե ագրեսիվ քիմիայով, որը կարող է վնասել հուշարձանը։»
- FR: **«Une équipe formée, un équipement adapté»** — «Chaque visite est réalisée par une équipe formée, avec un équipement professionnel et des produits d'entretien choisis pour être sans danger pour la pierre naturelle — jamais de produits agressifs pouvant endommager le monument.»

Иконка для этой карточки — тонкая оливковая line-art иконка ящика с
инструментами (прямоугольник + дуга-ручка сверху + горизонтальная линия
шва), тот же визуальный стиль, что у остальных иконок блока доверия
(тонкий контур, тот же градиент/цвета #5E6A3A/#7C8654).

---

## 5. FAQ — новый вопрос (добавить последним пунктом)

- EN: **Q** "What equipment and products do you use?" **A** "Our care team uses professional-grade tools and cleaning products chosen specifically for natural stone — never abrasive or acidic chemicals that could damage the memorial over time."
- RU: **Q** «Каким оборудованием и средствами вы пользуетесь?» **A** «Наша команда использует профессиональное оборудование и чистящие средства, подобранные специально для натурального камня — никаких абразивных или кислотных составов, которые могут повредить памятник со временем.»
- HY: **Q** «Ի՞նչ սարքավորումներ և միջոցներ եք օգտագործում։» **A** «Մեր թիմն օգտագործում է պրոֆեսիոնալ գործիքներ և հատուկ քարի համար ընտրված մաքրող միջոցներ՝ երբեք աբրազիվ կամ թթվային նյութեր, որոնք ժամանակի ընթացքում կարող են վնասել հուշարձանը։»
- FR: **Q** « Quels équipements et produits utilisez-vous ? » **A** « Notre équipe utilise des outils professionnels et des produits d'entretien choisis spécifiquement pour la pierre naturelle — jamais de produits abrasifs ou acides qui pourraient l'endommager avec le temps. »

---

## Приложение — готовый код (если конструктор использует объект `t{}`/`I18N{}`)

Точечные добавления по ключам — вставить, не заменяя весь объект целиком.
Ключевые имена ниже условные (`heroMetricPro`, `how2Body`, `expressFeaturePro`,
`trustProTitle`/`trustProBody`, новый faq-элемент) — подставьте под реальные
имена ключей в вашей структуре перевода.

### RU
```js
heroMetricProLabel: 'ПРОФ',
heroMetricProCaption: 'Обученная команда, профессиональное оборудование',
how2Body: 'Наша обученная команда ухаживает за могилой и убирает её с профессиональным оборудованием и безопасными для камня средствами, по графику тарифа.',
expressFeaturePro: 'Профессиональное оборудование и безопасные для камня средства',
trustProTitle: 'Обученная команда, профессиональное оборудование',
trustProBody: 'Каждый визит выполняет обученная команда с профессиональным оборудованием и средствами для чистки, безопасными для натурального камня — никакой агрессивной химии, способной повредить памятник.',
// добавить в конец массива faq:
{q: 'Каким оборудованием и средствами вы пользуетесь?', a: 'Наша команда использует профессиональное оборудование и чистящие средства, подобранные специально для натурального камня — никаких абразивных или кислотных составов, которые могут повредить памятник со временем.'}
```

### EN
```js
heroMetricProLabel: 'PRO',
heroMetricProCaption: 'Trained team, professional equipment',
how2Body: 'Our trained care team tends and cleans the grave with professional equipment and stone-safe products, on your plan\'s schedule.',
expressFeaturePro: 'Professional equipment & stone-safe products',
trustProTitle: 'A trained team, proper equipment',
trustProBody: 'Every visit is done by a trained care team with professional equipment and cleaning products chosen to be safe for natural stone — never harsh chemicals that could damage the memorial.',
// append to faq array:
{q: 'What equipment and products do you use?', a: 'Our care team uses professional-grade tools and cleaning products chosen specifically for natural stone — never abrasive or acidic chemicals that could damage the memorial over time.'}
```

### HY
```js
heroMetricProLabel: 'ՊՐՈՖ',
heroMetricProCaption: 'Վերապատրաստված թիմ, պրոֆեսիոնալ սարքավորում',
how2Body: 'Մեր վերապատրաստված թիմը խնամում և մաքրում է գերեզմանը՝ պրոֆեսիոնալ սարքավորումներով և քարի համար անվտանգ միջոցներով, ըստ սակագնի ժամանակացույցի։',
expressFeaturePro: 'Պրոֆեսիոնալ սարքավորումներ և քարի համար անվտանգ մաքրող միջոցներ',
trustProTitle: 'Վերապատրաստված թիմ, պրոֆեսիոնալ սարքավորում',
trustProBody: 'Ամեն այցն իրականացնում է վերապատրաստված թիմը՝ պրոֆեսիոնալ սարքավորումներով և քարի համար անվտանգ մաքրող միջոցներով, ոչ թե ագրեսիվ քիմիայով, որը կարող է վնասել հուշարձանը։',
// ավելացնել faq զանգվածի վերջում:
{q: 'Ի՞նչ սարքավորումներ և միջոցներ եք օգտագործում։', a: 'Մեր թիմն օգտագործում է պրոֆեսիոնալ գործիքներ և հատուկ քարի համար ընտրված մաքրող միջոցներ՝ երբեք աբրազիվ կամ թթվային նյութեր, որոնք ժամանակի ընթացքում կարող են վնասել հուշարձանը։'}
```

### FR
```js
heroMetricProLabel: 'PRO',
heroMetricProCaption: 'Équipe formée, équipement professionnel',
how2Body: 'Notre équipe formée entretient et nettoie la tombe avec un équipement professionnel et des produits sans danger pour la pierre, selon le rythme de votre formule.',
expressFeaturePro: 'Équipement professionnel et produits sans danger pour la pierre',
trustProTitle: 'Une équipe formée, un équipement adapté',
trustProBody: 'Chaque visite est réalisée par une équipe formée, avec un équipement professionnel et des produits d\'entretien choisis pour être sans danger pour la pierre naturelle — jamais de produits agressifs pouvant endommager le monument.',
// ajouter à la fin du tableau faq:
{q: 'Quels équipements et produits utilisez-vous ?', a: 'Notre équipe utilise des outils professionnels et des produits d\'entretien choisis spécifiquement pour la pierre naturelle — jamais de produits abrasifs ou acides qui pourraient l\'endommager avec le temps.'}
```

### Иконка для карточки доверия (SVG, тонкая линия, стиль как у остальных иконок блока)
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 7V5.5a2 2 0 012-2h2a2 2 0 012 2V7" stroke="#5E6A3A" stroke-width="1.5" stroke-linecap="round"/>
  <rect x="4.5" y="7" width="15" height="10.5" rx="2" stroke="#5E6A3A" stroke-width="1.5"/>
  <path d="M4.5 12h15" stroke="#7C8654" stroke-width="1.8" stroke-linecap="round"/>
</svg>
```

---

*Промпт подготовлен 03.08.2026. Отражает изменения, уже применённые в
`index.html` этого репозитория (параллельная/референсная сборка) —
проверьте перед вставкой, что реальный лендинг на memorycarearmenia.netlify.app
использует ту же структуру секций/ключей, прежде чем вставлять точечно.*
