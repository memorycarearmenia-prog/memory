# MemoryCare — полный список промптов для генерации медиаконтента (Higgsfield)

Для вашей **локальной** сессии Claude Code (там, где Higgsfield авторизован).
Каждый промпт самодостаточен — можно копировать по одному и сразу генерировать,
ничего дополнительно дописывать не нужно.

**Общие правила бренда** (уже встроены в каждый промпт ниже, но держите в голове при ревью результата):
люди армянской внешности; форма — оливковая/тёмно-оливковая; всё оборудование
жёлто-чёрное в стиле Kärcher **без единой видимой надписи, логотипа или бренд-маркировки**;
на камнях — **только гладкая полированная поверхность без надписей**; никаких
портретов крупным планом; документальный, спокойный, приглушённый тон.

⚠️ **Три позиции ниже уже один раз генерировались с браком** (паразитные псевдо-надписи
на камне/оборудовании — см. `assets-prompts.md`, раздел "Known imperfections"):
`hero-still.jpg`, `about-tools.jpg`, `news-team.jpg`. При генерации этих трёх — обязательно
проверьте результат крупным планом на отсутствие текста/надписей перед тем как принимать кадр,
при необходимости перегенерируйте с seed/вариацией.

Модели и стоимость (из прошлой сессии): `soul_location` 0.12 кр (места/объекты) ·
`text2image_soul_v2` 0.12 кр (люди/руки, 2k) · `nano_banana_2` 2 кр (edit before→after
по референсу) · `kling3_0_turbo` image-to-video 5 сек 1080p ≈ 7.5 кр.

---

## 1. Главная страница — hero (видео-фон)

### hero-still.jpg ⚠️ (постер hero, постер видео-отчёта, стартовый кадр видео)
Модель: `soul_v2` · Пропорции: 16:9

```
Documentary photograph: an Armenian man in his thirties, olive jacket, deep olive
trousers, grey work gloves, cleaning a weathered pink tuff headstone with a
yellow-and-black pressure washer, mist rising in low morning sun; a second Armenian
team member in the same olive uniform kneels beside him with a soft brush and a
stone-cleaner bottle; cypress trees and a Yerevan cemetery alley behind, mountains
in haze in the far background. Natural soft morning light, muted olive green,
ivory and warm grey palette, calm and dignified mood, shallow depth of field,
35 mm film look. No text overlays, no lettering or logos anywhere. The headstone
surface must be completely blank and polished — absolutely no inscriptions,
no engraved text, no pseudo-letters of any kind. The pressure washer and all
equipment must be plain yellow and black with zero visible branding, labels or
lettering. No portraits, no faces looking at camera.
```

### hero.mp4 (фоновый луп в hero-секции)
Модель: `kling3_0_turbo`, image-to-video от `hero-still.jpg` · 5 сек · 1080p · 16:9

```
Slow cinematic push-in on the scene. The Armenian caretaker in the olive uniform
moves the pressure-washer wand steadily and smoothly across the stone surface;
mist drifts gently in the sunlight; his colleague brushes the stone gently in the
background; cypress leaves sway very slightly in the breeze. Steady, locked-off
feeling camera movement, no shake, no jump cuts. Keep the headstone surface blank
throughout — no text or inscriptions should appear or become readable at any
frame of the motion. Equipment stays plain yellow and black, no lettering visible
at any point in the loop.
```

---

## 2. Секция «Why» (главная) + «Мы верим…» / History / Values

### alley.jpg (секция Why, слайд Moments, боковая панель Reset)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary photograph of a well-kept alley in a Yerevan cemetery in early
morning: gravel path, rows of cypress trees, rose bushes along the edges, tuff
memorial stones softly out of focus in the background, light mist near the
ground, Armenian mountains faintly visible in haze beyond the trees. Natural
soft morning light, muted olive green, ivory and warm grey palette, calm and
dignified documentary mood, shallow depth of field, 35 mm film look. No people,
no text, no lettering or logos anywhere, no readable inscriptions on any visible
stone surfaces.
```

### step-flowers.jpg (Why-секция «стопкой», «Что входит в визит»)
Модель: `soul_v2` · Пропорции: 4:3

```
Documentary close-up of gloved hands belonging to an Armenian caretaker in an
olive sleeve, placing a small bunch of fresh white chrysanthemums and
forget-me-nots at the clean base of a polished granite headstone, gently wiping
the stone surface with an ivory-coloured cloth; a plain yellow-and-black
cleaning unit blurred softly in the background. Natural soft light, muted olive
green, ivory and warm grey palette, calm and dignified mood, shallow depth of
field, 35 mm film look. No text overlays, no lettering or logos anywhere,
headstone surface completely blank and polished with no inscriptions, equipment
plain yellow and black without any brand lettering. No faces visible.
```

---

## 3. «Что входит в Express-визит» / «Как это работает»

### step-clean.jpg (используется дважды: «Что входит», шаг 3 «Как это работает»)
Модель: `soul_v2` · Пропорции: 4:3

```
Documentary close-up of gloved hands working pH-neutral cleaning foam over a
dark granite headstone surface with a natural-bristle brush, small foam bubbles
visible on the stone; a yellow-and-black pressure washer blurred softly behind,
olive-coloured sleeve visible at the edge of frame. Natural soft light, muted
olive green, ivory and warm grey palette, calm and dignified mood, shallow depth
of field, 35 mm film look. No text overlays, no lettering or logos anywhere,
headstone surface blank and polished with no inscriptions, equipment plain
yellow and black without any brand lettering.
```

### plot-1.jpg (шаг 1 «Как это работает», демо-объект «Petrosyan family plot»)
Модель: `soul_location` · Пропорции: 4:3

```
Documentary photograph of a well cared-for family memorial plot in a Davtashen
cemetery in Yerevan: two clean polished granite headstones, a neat low tile
border, small trimmed shrubs beside the stones, soft morning light, cypress
trees in the background slightly out of focus. Muted olive green, ivory and
warm grey palette, calm and dignified documentary mood, 35 mm film look. No
people, no text, no lettering or logos anywhere, headstone surfaces completely
blank and polished with no inscriptions.
```

### step-inspect.jpg (шаг 2 «Как это работает»)
Модель: `soul_v2` · Пропорции: 4:3

```
Documentary photograph of an Armenian woman caretaker in an olive uniform,
holding a tablet and photographing a blank polished grey granite headstone for
an inspection report; a plain yellow-and-black equipment case sits at her feet;
cypress trees around her, soft side light. Muted olive green, ivory and warm
grey palette, calm and dignified documentary mood, shallow depth of field,
35 mm film look. No text overlays, no lettering or logos anywhere, headstone
surface blank and polished with no inscriptions, equipment case plain yellow
and black without any brand lettering. Her face may be partially visible but
not posed toward camera.
```

### step-report.jpg (шаг 4 «Как это работает», боковая панель Login)
Модель: `soul_v2` · Пропорции: 4:3

```
Documentary photograph of an Armenian woman in her fifties, sitting at a kitchen
table abroad with a cup of coffee, calmly looking at a phone screen that shows
two small photos of the same memorial plot and a small map pin icon; soft window
light from the side, homely but understated interior blurred behind her. Muted
olive green, ivory and warm grey palette, calm and dignified documentary mood,
shallow depth of field, 35 mm film look. No text overlays, no visible logos or
brand lettering anywhere, no readable text large enough to be legible on the
phone screen itself (keep any on-screen UI abstract/blurred).
```

---

## 4. Блок цен (фон секции)

### texture-tuff.jpg (фоновая текстура секции Pricing)
Модель: `soul_location` · Пропорции: 21:9

```
Extreme close-up documentary photograph of Armenian pink tuff stone texture:
volcanic porosity, small natural holes and rough grain, raking side light
creating soft shadows, almost abstract in composition. Muted warm pink, ivory
and grey palette, calm and dignified mood, 35 mm film look. No text, no
lettering, no logos, no inscriptions, no recognizable objects other than the
stone texture itself.
```

---

## 5. Before/After сравнение (используется в hero-карточке, слайдере, отчётах)

### before.jpg (слайдер before/after, hero report-card, все отчёты о визитах)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary photograph of a neglected family memorial plot: dark granite
headstone dulled by dust and lichen patches, dry fallen leaves and dead grass
scattered around the base, a cracked stone border, some weeds growing through
gaps, overcast diffused daylight, frontal medium shot, straight-on composition
suitable for a before/after comparison. Muted olive green, ivory and warm grey
palette, documentary and slightly melancholic but respectful mood, 35 mm film
look. No people, no text, no lettering or logos anywhere, no readable
inscriptions visible on the stone (keep any engraved area out of frame or
angled away from camera).
```

### after.jpg (edit-версия before.jpg — тот же кадр после ухода)
Модель: `nano_banana_2` (image edit, референс: `before.jpg`) · Пропорции: 3:2 (сохранить кадрирование пиксель-в-пиксель)

```
Edit this exact photograph, keeping the framing and camera angle pixel-identical
to the reference image. Change only the condition of the scene: the granite
headstone is now clean and polished with a soft natural sheen, all lichen and
dust removed; dead leaves and weeds are gone; the stone border is washed and
straightened/repaired-looking; the ground is neatly raked gravel; a small fresh
bunch of white flowers rests at the base of the stone. Keep the same lighting
direction and time of day as the original. No text, no lettering or logos
anywhere, no inscriptions appear on the stone surface — it stays blank and
polished.
```

---

## 6. «Что рассказали семьи» (фон секции)

### forgetmenot.jpg (фон секции Voices, карточка новости)
Модель: `soul_location` · Пропорции: 21:9

```
Macro documentary photograph of a field of forget-me-not flowers at dawn, small
blue petals with soft dew droplets, very shallow depth of field creating a
dreamy soft-focus background. Muted blue, olive green and ivory palette, calm
and dignified mood, 35 mm film look. No people, no text, no lettering or logos
anywhere, no man-made objects visible.
```

---

## 7. «Моменты» (fade-слайдер на главной)

### about-khachkar.jpg (слайд 1 «Moments», страница History)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary close-up photograph of an ancient Armenian khachkar stone cross
detail: intricate carved lace-like ornamental pattern, soft moss growing in the
carved recesses, quiet churchyard setting, diffused overcast light. Muted grey,
olive-green moss and warm stone tones, calm and reverent documentary mood,
35 mm film look. No people, no modern text, no lettering or logos anywhere —
only the historic carved ornament itself, no separate readable inscriptions in
Armenian or any other script beyond the traditional cross-stone ornamental
pattern.
```

### about-tools.jpg ⚠️ (слайд 2 «Moments», страница Values)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary flat-lay photograph on olive-coloured canvas fabric: an upright
yellow-and-black pressure washer unit (Kärcher K7 style), a yellow-and-black
steam cleaner unit (SC 5 style), a yellow drum vacuum unit, a compact petrol
generator, several natural-bristle brushes, two plain white plastic cleaner
bottles with no labels, grey work gloves, folded ivory cloths, a coil of hose,
shot from directly above in soft even light. Muted olive green, ivory and warm
grey palette, calm and orderly documentary mood, 35 mm film look. CRITICAL: every
single piece of equipment must be completely free of text, brand names, logos,
model numbers, warning labels or any lettering whatsoever — plain yellow and
black surfaces only, and plain unlabelled bottles. Double-check before
accepting: zero readable characters anywhere in the frame.
```

---

## 8. Страница Mission

### about-hands-flower.jpg (Mission — фото рядом с текстом, боковая панель Register)
Модель: `soul_v2` · Пропорции: 3:4

```
Documentary photograph of two open hands cupped together, holding a small
cluster of blue forget-me-not flowers, wearing an ivory linen sleeve, shot
against a plain warm-toned neutral background, soft even light. Muted blue,
olive green and ivory palette, calm and tender documentary mood, shallow depth
of field, 35 mm film look. No text, no lettering or logos anywhere, no visible
face, no jewellery or identifying details on the hands.
```

---

## 9. Страница Contact (резерв — на будущее, если решите ставить фото офиса/района)

### contact-yerevan.jpg (резерв для страницы Contact)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary photograph of Komitas Avenue in Yerevan on a calm early morning:
tuff-stone buildings, plane trees lining the street, soft golden morning light,
almost empty street. Muted warm grey, olive-green foliage and ivory palette,
calm documentary mood, 35 mm film look. No people, no vehicles with readable
plates or logos, no readable shop signage or text of any kind.
```

---

## 10. Личный кабинет — демо-объекты (3 разных участка, теперь у каждого свой отчёт)

### plot-2.jpg («Grandparents' plot», Абовян)
Модель: `soul_location` · Пропорции: 4:3

```
Documentary photograph of a well-kept family memorial plot on a hillside in the
Abovyan central cemetery (Kotayk region): a tuff-stone headstone, clean raked
gravel ground, a young cypress tree beside the plot, soft morning light with
mountains faintly visible in the distance. Muted olive green, ivory and warm
grey palette, calm and dignified documentary mood, 35 mm film look. No people,
no text, no lettering or logos anywhere, headstone surface completely blank and
polished with no inscriptions.
```

### plot-3.jpg («Uncle Vahan's plot», Тохмах)
Модель: `soul_location` · Пропорции: 4:3

```
Documentary photograph of a family memorial plot in the old section of Tokhmakh
cemetery, Yerevan: a black granite headstone, a small wrought-iron fence around
the plot, a traditional cemetery lantern beside the stone, soft overcast light.
Muted olive green, ivory and warm grey palette, calm and dignified documentary
mood, 35 mm film look. No people, no text, no lettering or logos anywhere,
headstone surface completely blank and polished with no inscriptions.
```

### report-poster.jpg (постер видео на странице отчёта о визите)
Модель: `soul_location` · Пропорции: 16:9

```
Wide documentary photograph of a freshly cleaned family memorial plot in
Yerevan: polished granite headstone catching soft light, neatly raked gravel,
a small bunch of fresh flowers at the base, a cypress tree in the background.
Muted olive green, ivory and warm grey palette, calm and dignified documentary
mood, 35 mm film look. No people, no text, no lettering or logos anywhere,
headstone surface completely blank and polished with no inscriptions.
```

---

## 11. Страница News

### news-team.jpg ⚠️ (карточка новости «Первый сезон»)
Модель: `soul_v2` · Пропорции: 3:2

```
Documentary photograph of a three-person Armenian caretaker team in matching
olive uniforms, standing beside a plain white service van with its rear doors
open, showing open equipment cases inside holding plain yellow-and-black
cleaning units, at the gate of a Yerevan cemetery in early morning light. Muted
olive green, ivory and warm grey palette, calm and professional documentary
mood, 35 mm film look. CRITICAL: the van must have no visible logo, company
name, license plate text or any lettering on its body; all equipment cases and
units must be completely free of brand names, labels or lettering. Double-check
before accepting: zero readable characters anywhere in the frame, including on
the van itself.
```

### news-equipment.jpg (карточка новости «Почему низкое давление»)
Модель: `soul_location` · Пропорции: 3:2

```
Documentary photograph looking into the open rear of a service van: a
yellow-and-black pressure washer (Kärcher K7 style), a yellow-and-black steam
cleaner (SC 5 style), a yellow drum vacuum, a compact petrol generator, plastic
equipment cases, a coiled hose, and unlabelled plastic canisters, arranged
neatly, soft even daylight. Muted olive green, ivory and warm grey palette,
calm and orderly documentary mood, 35 mm film look. Every piece of equipment
must be completely free of text, brand names, logos or lettering — plain yellow
and black surfaces only.
```

---

## 12. Языковые заглушки (ՀԱՅ / РУС «скоро») и страница 404

### lang-stub.jpg (заглушка "coming soon" для am/ru, страница 404)
Модель: `soul_location` · Пропорции: 16:9

```
Documentary photograph of Mount Ararat at dawn, seen from a quiet grassy
hillside in Armenia, soft pink and gold haze in the sky, tall grasses softly
out of focus in the foreground. Muted pink, olive-grey and ivory palette, calm
and hopeful documentary mood, 35 mm film look. No people, no text, no lettering
or logos anywhere, no man-made structures visible.
```

---

## 13. Открытый графический элемент — og:image (сейчас отсутствует, но объявлен в `<meta property="og:image">` во всех страницах!)

### og-image.jpg (превью сайта в соцсетях/мессенджерах — **этого файла пока нет вообще, нужно сделать в первую очередь**)
Модель: `soul_v2` или композиция на основе `hero-still.jpg` · Пропорции: 1.91:1 (1200×630)

```
Documentary photograph, wide horizontal composition suitable for a social-media
link preview: an Armenian caretaker in an olive uniform gently cleaning a
weathered pink tuff headstone with a yellow-and-black pressure washer, soft
morning mist, cypress trees and Yerevan cemetery alley in the background,
generous empty space in the upper third of the frame for a logo/wordmark to be
overlaid separately by the design team. Muted olive green, ivory and warm grey
palette, calm and dignified documentary mood, 35 mm film look. No text baked
into the image itself, no lettering or logos anywhere, headstone surface blank
and polished with no inscriptions, equipment plain yellow and black without any
brand lettering.
```

---

## Чек-лист после генерации

- [ ] На всех камнях — гладкая полированная поверхность, ни одной надписи
- [ ] На всём оборудовании (washer/steam cleaner/vacuum/generator/van) — ноль надписей и логотипов
- [ ] Ни одного лица, повёрнутого прямо в камеру крупным планом
- [ ] Единая цветовая палитра выдержана: приглушённый оливковый + айвори + тёплый серый
- [ ] `og-image.jpg` сгенерирован и добавлен в `src/assets/brand/` (сейчас файла нет вообще)
- [ ] Готовые файлы положены в `site-deploy-2026-09-09/src/assets/img/` (фото) и `src/assets/brand/` (og-image), после чего прислать их мне — я заменю плейсхолдеры и пересоберу сайт
