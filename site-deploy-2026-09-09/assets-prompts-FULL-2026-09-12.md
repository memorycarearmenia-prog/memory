# MemoryCare — полный список промптов для генерации медиаконтента (Higgsfield)
### v2 — 13 сентября 2026, после разбора концепций пятью ревьюерами (см. `PHOTO-CONCEPT-REVIEW-2026-09-13.md`)

Для вашей **локальной** сессии Claude Code (там, где Higgsfield авторизован).
Каждый промпт самодостаточен и написан на уровне брифа для профессионального
фотографа/оператора: камера и оптика, свет и его направление, экспозиция,
композиция, цветокоррекция, постобработка. Копируйте по одному, ничего
дописывать не нужно.

**Что изменилось в v2** (полный разбор решений — в `PHOTO-CONCEPT-REVIEW-2026-09-13.md`):
основной сдвиг оптики — с «покажем процесс работы» на «покажем последствие
заботы»: большинство кадров, где человек снят в момент действия (моет,
фотографирует, смотрит в телефон), заменены на кадры-улики (чистый камень,
отставленный инструмент, деталь). Убраны три повтора мотива «руки+цветы» и
два повтора «инвентарь оборудования». Добавлена армянская культурная
специфика, которой не хватало (стол со скамейками, лампада, резной бордюр,
джезве). **Один пункт (forgetmenot.jpg) ждёт решения владельца бренда** —
см. флаг в разделе 6, промпт ниже — временный безопасный вариант.

**Сквозной арт-дирекшн бренда** (уже встроен в каждый промпт): люди
армянской внешности; форма — оливковая/тёмно-оливковая; всё оборудование
жёлто-чёрное в стиле Kärcher **без единой видимой надписи, логотипа или
бренд-маркировки**; на камнях — **только гладкая полированная (для гранита)
или чистая матовая (для туфа) поверхность без надписей**; никаких портретов
крупным планом в объектив; документальный, спокойный, приглушённый тон;
общая цветовая формула — приглушённый оливковый + айвори + тёплый серый,
лёгкое утреннее рассеянное освещение, ощущение 35-мм плёнки.

⚠️ **about-tools.jpg и news-team.jpg** уже один раз генерировались с браком
(паразитные псевдо-надписи) — теперь у них полностью новые концепции, но
негативный блок на надписи оставлен усиленным на всякий случай.

Модели и стоимость: `soul_location` 0.12 кр (места/объекты) ·
`text2image_soul_v2` 0.12 кр (люди/руки, 2k) · `nano_banana_2` 2 кр (edit
before→after по референсу) · `kling3_0_turbo` image-to-video 5 сек 1080p
≈ 7.5 кр.

---

## 1. Главная страница — hero (видео-фон)

### hero-still.jpg — REPLACE: последствие, а не процесс
Модель: `soul_v2` · Пропорции: 16:9

```
Professional documentary photograph, shot as if on a full-frame mirrorless
camera with a 35mm f/1.4 prime lens, aperture around f/2.2 for a shallow
depth of field that keeps the wet stone surface and foreground gravel crisp
while the receding cypress alley softens into gentle bokeh. Golden-hour
morning backlight from low camera-left, roughly 20 degrees above the
horizon, filtered through thin ground mist so light wraps softly around
every surface with no hard shadow edges; a faint warm rim-light catches the
wet sheen on the stone and the individual droplets still clinging to its
lower edge. Exposure metered for the stone's mid-tones, letting the mist and
sky highlights bloom slightly toward overexposure for an airy, resolved
feeling — the work is already done, the light is calm. Shutter speed fast
enough to render each hanging water droplet as a small, sharp highlight.
Composition: the clean, wet granite headstone sits on the right third of
frame following the rule of thirds, catching the low sun directly on its
polished face; a plain yellow-and-black pressure-washer wand rests, switched
off, on the gravel beside it rather than being held; a soft-bristle brush
leans against the stone's base; on the left third, a single caretaker in an
olive uniform is seen from behind at a shallow depth, mid-stride, already
walking away down the alley — present but not performing an action, implying
the visit just concluded. Camera height at knee-to-waist level, a very
slight low angle toward the stone to give it quiet presence without
theatricality. Environment: a quiet Yerevan cemetery alley, mature cypress
trees flanking the path, low mountains dissolving into haze on the horizon,
wet gravel underfoot catching soft reflected light. Colour grade: desaturated
olive-green and warm grey midtones, ivory highlights, lifted black point for
gentle filmic contrast, subtle warm-cool split (warm highlights, slightly
cool shadows). Finish: visible but fine 35mm film grain, a touch of halation
around the brightest mist highlights, no digital sharpening halos, no HDR
look. No text overlays, no lettering or logos anywhere. The headstone is
granite with a natural polished sheen — completely blank, no inscriptions,
engraved text or pseudo-letters of any kind, even partially obscured. All
equipment must be plain yellow and black with zero visible branding, model
numbers or lettering. No faces looking directly at camera; the departing
caretaker is seen only from behind or in deep three-quarter profile.
```

### hero.mp4 — REPLACE: созерцательный проезд без людей
Модель: `kling3_0_turbo`, image-to-video · 5 сек · 1080p · 16:9

```
A slow, continuous, contemplative camera glide down the centre of a cypress-
lined cemetery alley, as if on a motorized slider moving forward at a gentle,
even pace over the full 5 seconds — no acceleration, no deceleration jump,
the feeling of quiet breathing rather than a deliberate cinematic move.
Simulated lens: 35mm-equivalent, f/2.8, moderate depth of field keeping the
gravel path and nearest tree trunks sharp while the alley's far end
dissolves into soft morning haze. Frame rate feel of 24fps, no motion blur
artefacts, no handheld shake, camera held perfectly level throughout — no
whip pans, no jump cuts, no speed ramping. Lighting: soft, even early-morning
light filtering through the cypress canopy from camera-left, creating gentle,
slowly shifting dapples of light and shadow on the gravel as the camera
moves forward past each tree; thin ground mist drifts laterally through the
frame at a slow, even pace, catching soft highlights as it crosses patches of
light. No people anywhere in frame — the alley is empty and calm. Very
subtle, natural movement only: cypress branches at the frame edges sway
gently and independently of each other in a light breeze; mist drifts;
nothing else moves. Colour grade stays completely consistent throughout the
5 seconds — muted olive-green foliage, warm ivory gravel, soft grey haze, no
drift in white balance or contrast. Finish: fine 35mm film grain maintained
consistently, soft natural vignette at the corners, no HDR look, no
digital-zoom softness. No text, no lettering or logos anywhere, no readable
inscriptions on any stone surface visible at the edges of frame (keep any
stones at the very periphery, softly out of focus).
```

---

## 2. Секция «Why» (главная) + History / Values / Reset

### alley.jpg — TWEAK: добавлен стол со скамейками
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary landscape photograph, shot as if on a full-frame
camera with a 50mm f/1.8 lens stopped down to around f/4 for a moderate depth
of field that keeps the gravel path sharp into the middle distance while
letting the farthest cypress trees and mountains soften naturally with
atmospheric haze — no artificial background blur. Early-morning light coming
from low camera-left at a shallow, almost grazing angle, raking across the
gravel path and casting long, soft-edged shadows from the cypress trunks;
light ground mist scatters the light into a gentle, even glow rather than
producing hard-edged sunbeams. Exposure balanced for the midtones of the
gravel and foliage, sky allowed to be a soft, slightly overexposed pale band
at the top of frame for an airy feel. Composition: the gravel path acts as a
strong diagonal leading line entering from the bottom-right corner and
receding toward a vanishing point in the upper-left third; midway along the
path, set slightly back among the plots, a simple metal table with two
attached benches — the traditional graveside memorial-meal furniture found at
Armenian and wider Caucasus cemeteries — sits quietly in soft focus, a
recognisable but unobtrusive cultural anchor, not a focal subject; cypress
trees forming a loose vertical rhythm on both sides, rose bushes as soft
colour accents along the lower edge of frame; camera height at approximately
1.5m (standing eye-level), lens held level with no tilt. Environment: a
well-kept alley inside a Yerevan cemetery, tuff memorial stones visible only
as soft, unreadable shapes well out of focus in the middle distance, Armenian
mountains faintly resolved through haze at the horizon. Colour grade: muted
olive greens in the foliage, warm ivory and grey in the gravel, mist and
metal table, gently lifted shadows, restrained overall saturation. Finish:
fine film grain, soft natural vignette at the corners, no HDR halos, no
oversharpened edges. No people, no text, no lettering or logos anywhere, no
readable inscriptions on any visible stone surfaces even at a distance.
```

### step-flowers.jpg — TWEAK: без рук, добавлена лампада
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary macro-still-life photograph, shot as if on a 100mm
macro lens at roughly f/2.8, close enough to fill the frame with the base of
the stone and the objects resting against it, the yellow-and-black unit in
the deep background reduced to soft, unrecognisable warm-toned bokeh four to
five stops out of focus. Soft, diffused window-quality daylight from
camera-left, low in contrast, wrapping gently around the flowers and the
small brass oil lamp with no harsh specular highlights; a faint warm
bounce-light from below (implied reflection off the pale stone) lifts the
shadow side just enough to retain detail. Exposure balanced for the mid-tone
stone base, letting the white chrysanthemum petals hold full detail rather
than clipping to pure white. Composition: a small, loosely tied bunch of
fresh white chrysanthemums and blue forget-me-nots rests already placed at
the clean base of a polished granite headstone, occupying the lower two-
thirds of frame on a gentle diagonal; beside it, a small traditional brass
oil lamp (կանթեղ) sits lit with a tiny, steady flame — the everyday ritual
detail of ongoing care; an ivory cotton cloth lies folded neatly nearby.
No hands, no human presence in frame at all — this is a still-life of care
already given, not an action. Generous negative space in the upper third for
calm breathing room. Colour grade: warm neutral stone tones, soft ivory and
white in the flowers and cloth, a small warm amber glow from the lamp flame
as the only saturated colour accent in the frame. Finish: fine grain, no
digital noise-reduction smoothing, natural micro-texture retained on the
petals, cloth and lamp's tarnished brass surface. No text overlays, no
lettering or logos anywhere, headstone surface completely blank and polished
with no inscriptions, equipment in the far background plain yellow and black
without any brand lettering.
```

---

## 3. «Что входит в Express-визит» / «Как это работает»

### step-clean.jpg — TWEAK: результат, а не процесс
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary macro photograph, shot as if on an 85mm macro lens
at around f/2.2, tight enough that a single large water droplet on the
polished granite surface fills a meaningful portion of the frame, the
pressure-washer resting in the background dissolving into soft, warm-toned
bokeh roughly four stops out of focus. Soft, even overcast daylight from
directly above and slightly camera-left, producing gentle, low-contrast
modelling with no harsh specular glare — the quality a bright cloudy sky
gives outdoors. Exposure balanced to preserve the tiny, sharp highlight
inside the droplet itself (acting as a miniature lens reflecting a soft,
inverted image of the cypress trees above) while keeping the dark granite
around it rich and detailed, not crushed to pure black. Composition: the
droplet sits just off-centre on the polished stone surface, positioned using
the rule of thirds, with the reflective sheen of the freshly cleaned granite
stretching diagonally through the frame from lower-left to upper-right,
generous negative space in the upper-right where the softly blurred
equipment barely registers as a warm colour shape, not a recognisable object.
Subject: a macro close-up of a single water droplet resting on an already-
clean, polished dark granite headstone surface — no hands, no brush, no
visible cleaning action, only the evidence of a finished, careful job.
Colour grade: cool-neutral granite grey, a small warm highlight inside the
droplet, muted background yellow far out of focus. Finish: fine film grain,
natural micro-contrast on the wet stone texture, no oversharpening. No text
overlays, no lettering or logos anywhere, headstone surface blank and
polished with no inscriptions, equipment in the background plain yellow and
black without any brand lettering.
```

### plot-1.jpg — TWEAK: добавлена резьба на бордюре
Модель: `soul_location` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 35mm lens at around f/5.6
for a moderate, even depth of field that keeps both headstones and the
immediate border sharp while the cypress trees in the background soften
gently. Soft, directional early-morning light from camera-left at a low
angle, grazing across the tile border to reveal a simple carved rope-and-leaf
ornamental pattern along its edge, and across the gravel to reveal texture,
with delicate, elongated shadows falling to the right; light haze in the air
softens contrast slightly without flattening the image. Exposure balanced for
the mid-grey granite and pale tile border, sky (where visible) allowed to
read as a soft, slightly bright neutral band. Composition: the two
headstones sit just off centre on the right two-thirds of frame following
the rule of thirds, the carved tile border forming a clean horizontal line
roughly one-third up from the bottom of frame with its ornamental detail
clearly legible in the raking light, small trimmed shrubs providing a soft
vertical counterpoint on the left; camera at standing eye-level, lens held
level with no convergence distortion. Environment: a well-kept family
memorial plot in the Davtashen cemetery area of Yerevan — two clean, polished
granite headstones side by side, a neat low tile border with simple carved
ornament in pale stone, small manicured shrubs beside the stones, cypress
trees softly out of focus in the background. Colour grade: neutral cool
granite grey balanced against warm ivory tile and muted olive foliage,
restrained overall saturation, gentle filmic contrast. Finish: fine grain,
soft natural vignette, no HDR look. No people, no text, no lettering or logos
anywhere, headstone surfaces completely blank and polished with no
inscriptions.
```

### step-inspect.jpg — REPLACE: тень и старая фотография вместо планшета
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 50mm lens at around f/4
for a moderate depth of field keeping both the stone surface and the small
photograph niche crisply sharp while the cypress trees behind fall into
soft, warm bokeh. Soft side-lighting from camera-left, roughly 45 degrees,
mid-morning quality with gentle directionality that casts a clear, long,
recognisably human-shaped shadow — an Armenian caretaker in an olive uniform,
implied by silhouette only — falling diagonally across the lower portion of
the polished stone. Exposure balanced for the stone's mid-tones, allowing the
shadow to read as a soft, warm-toned dark shape rather than crushed black.
Composition: the shadow enters from the bottom-right corner and stretches
diagonally toward the upper-left third of frame, where a small weathered
photograph — an old, sepia-toned family portrait — rests tucked into a
shallow carved niche in the stone's base, catching a soft highlight of its
own; the caretaker's gloved hand is visible only at the very edge of frame,
fingertips just touching the corner of the photograph to straighten it, not
performing any documentation action; camera at a slightly low angle toward
the stone. Subject: a caretaker's shadow falling across a blank polished
granite headstone, a small old family photograph tucked in a niche at its
base being gently straightened by a gloved hand at the frame's edge — the
idea of inspection reframed as an act of tending to memory, not a technical
QA process. Colour grade: muted olive shadow tone, warm sepia accent from
the old photograph, soft grey stone, restrained saturation throughout.
Finish: fine grain, gentle natural vignette, no digital sharpening
artefacts. No text overlays, no lettering or logos anywhere, headstone
surface blank and polished with no inscriptions beyond the small tucked
photograph itself, no modern equipment visible in frame.
```

### step-report.jpg — TWEAK: распечатанное фото вместо экрана, армянская деталь
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary interior photograph, shot as if on a 35mm lens at
around f/2 for a shallow depth of field that keeps the tabletop objects sharp
while the kitchen background softens into gentle, warm bokeh. Soft window
light from camera-left, mid-morning quality filtered through a sheer curtain
implied off-frame, producing a gentle gradient of light across the table —
brighter near the window side, softly falling off toward camera-right; a
warm practical light source (implied kitchen lamp, off-frame) adds a subtle
golden fill. Exposure balanced for the pale printed photograph and the small
ceramic djezve (Armenian coffee pot), letting the window itself read as a
soft, slightly overexposed bright patch for a natural interior feel.
Composition: a small printed photograph of a memorial plot — showing the
polished stone and fresh flowers, GPS coordinates and a date printed in a
plain caption beneath it — lies on the table at the centre of frame, occupying
the lower two-thirds; a djezve and small demitasse cup sit just to the right
as a specific, unmistakably Armenian domestic detail; a smartphone rests
face-down and out of focus at the very edge of frame, deliberately
de-emphasised rather than shown lit up; a woman's hand, resting gently at the
photograph's edge, enters from the left. Camera at seated eye-level, a
slightly high angle looking down at the table, keeping the moment intimate.
Subject: an Armenian woman in her fifties, seated at a kitchen table abroad,
her hand resting beside a printed photograph from a visit report and a small
cup of Armenian coffee, calmly looking down at the photograph rather than at
a screen. Colour grade: warm, homely tones — soft amber window light, muted
neutral interior, gentle skin warmth, understated background desaturation.
Finish: fine film grain, soft warm halation near the window highlight, no
clinical digital sharpness. No lettering or logos anywhere; any text printed
on the photograph's caption must remain small, generic and non-legible at
normal viewing size (a date and coordinates only, not a paragraph).
```

---

## 4. Блок цен (фон секции)

### texture-tuff.jpg — KEEP
Модель: `soul_location` · Пропорции: 21:9

```
Professional macro photograph, shot as if on a 100mm macro lens at around f/8
for enough depth of field to hold the porous stone texture sharp across most
of the frame while the very edges soften almost imperceptibly, giving a sense
of physical depth to the rock face rather than a flat scan. Hard, low raking
light from one side (camera-left, near-grazing angle) designed specifically to
carve out the volcanic pores and grain of the tuff in strong micro-shadows,
producing an almost topographic, semi-abstract pattern of light and shadow
across the stone. Exposure set to preserve the full tonal range of the
porous texture — bright highlight edges on raised grain, deep but detailed
shadow inside each pore, no clipping at either end. Composition: the stone
grain fills the entire frame edge-to-edge with no horizon or defined subject,
composed so the raking light direction reads as a consistent diagonal texture
gradient across the wide 21:9 aspect ratio, avoiding any single dominant focal
point in favour of an even, rhythmic pattern. Subject: an extreme close-up of
Armenian pink tuff stone — natural volcanic porosity, small holes and rough
mineral grain, no polished or cut edges visible. Colour grade: warm dusty pink
and terracotta undertones in the stone, muted grey shadow fill, desaturated
enough to sit quietly behind UI content. Finish: fine natural grain, no
digital noise reduction smoothing the pore detail. No text, no lettering, no
logos, no inscriptions, no recognisable objects other than the stone texture
itself.
```

---

## 5. Before/After сравнение

### before.jpg — TWEAK: нейтральнее по тону, добавлена «улика»
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary photograph, shot as if on a 50mm lens at around f/5.6
for even, front-to-back sharpness suitable for a precise before/after
comparison — deliberately less shallow than the site's other lifestyle
photos, because this frame must read as a neutral, evidentiary record rather
than an artistic or emotionally charged composition. Flat, soft overcast
daylight from directly above with no strong directional shadows, mimicking a
bright cloudy sky — the same lighting quality the "after" edit must match
exactly. Exposure set for accurate, neutral colour rendition rather than
mood — mid-grey card exposure, no crushed shadows or blown highlights, so
the comparison reads plainly and honestly, without dramatisation. Composition:
strictly frontal, camera perpendicular to the headstone face at the same
working distance and height that the after-photo edit will need to preserve
pixel-for-pixel, headstone centred in frame with even margin on both sides,
horizon-level camera with no tilt or convergence. Subject: a neglected family
memorial plot — a dark granite headstone dulled by a fine layer of dust and
patchy lichen, dry fallen leaves and dead grass scattered around the base, a
cracked stone border with a few weeds growing through the gaps, and a small,
faded plastic memorial wreath leaning against the base — the one unambiguous
detail that marks this as a grave rather than a generic dirty courtyard or
patio. Colour grade: neutral, plainly documentary — muted olive-grey in the
lichen, warm dusty tones in the dead leaves, restrained contrast, deliberately
not moody or melancholic — a factual record, not an emotional appeal. Finish:
fine grain, minimal contrast styling, no dramatic colour-grading. No people,
no text, no lettering or logos anywhere, no readable inscriptions visible on
the stone (keep any engraved area out of frame or angled away from camera).
```

### after.jpg — TWEAK: синхронно с before.jpg
Модель: `nano_banana_2` (image edit, референс: `before.jpg`) · Пропорции: 3:2 (сохранить кадрирование пиксель-в-пиксель)

```
Edit this exact photograph, keeping the camera position, framing, focal
length, lens perspective and crop pixel-identical to the reference image — do
not shift, zoom, or re-angle the shot in any way. Preserve the reference's
exact lighting direction, colour temperature and flat overcast exposure so the
only visible difference between the two images is the physical condition of
the plot, not the photography. Change the condition of the scene: the
granite headstone is now clean and evenly polished with a soft, consistent
natural sheen across its whole surface, all lichen and dust fully removed
with no residual patchiness; the dead leaves and weeds are gone and the
ground beneath is now neatly raked fine gravel with visible rake-line
texture; the stone border is washed clean and its crack repaired or tightly
re-set so it reads as solid and level; the faded plastic wreath from the
reference is replaced with a small, loosely tied bunch of fresh white
flowers placed naturally rather than staged dead-centre. Match grain
structure and colour grade exactly to the reference, keeping the same
plainly documentary, non-dramatised tone — this is a factual record of care,
not a before/after emotional reveal. No text, no lettering or logos
anywhere, no inscriptions appear on the stone surface — it stays blank and
polished.
```

---

## 6. «Что рассказали семьи» (фон секции)

### forgetmenot.jpg ⚠️ ЖДЁТ ВАШЕГО РЕШЕНИЯ — REPLACE (временно на безопасный вариант)
Модель: `soul_location` · Пропорции: 21:9

**Контекст:** оригинальная концепция использовала макро-незабудки как
декоративный фон. Незабудка — официальный символ 100-летия Геноцида армян
(2015), и использовать её как красивую декорацию под свайпером с отзывами
рискует читаться как эксплуатация памяти о геноциде в коммерческом контексте.
Ниже — безопасная замена (белая гвоздика/бессмертник). **Если вы сознательно
хотите оставить именно незабудку как культурное высказывание бренда** —
скажите, и я верну оригинальный промпт, но пересмотрю его размещение (не
фоном под отзывами).

```
Professional macro photograph, shot as if on a 90mm macro lens wide open
around f/2, producing an extremely shallow plane of focus — only a thin band
of petals and dew droplets sharp, with the rest of the field dissolving
almost immediately into soft, luminous, colour-blended bokeh. Backlit dawn
light from low behind the flowers (camera pointed roughly toward the light
source), causing each dew droplet to catch a small, bright specular highlight
and the thin petals to glow slightly translucent at their edges — a classic
macro backlight technique. Exposure biased toward slight overexposure in the
out-of-focus highlight areas for a soft, dreamy glow, while keeping the
in-focus droplets and petal edges crisp with detail. Composition: the sharp
focal band sits roughly one-third up from the bottom of the wide 21:9 frame,
a loose diagonal scatter of white blooms leading the eye gently left to
right, generous soft negative space above for section-heading text to sit
over in the final web layout. Subject: a macro field of white carnations (or
immortelle/bessmertnik, the traditional "everlasting" graveside flower) at
dawn, fine dew droplets on the petal surfaces and stems, thin grass stalks
softly woven through. Colour grade: soft ivory-white petals, warm golden
backlight glow, muted green in the soft-focus stems, gentle overall pastel
quality. Finish: fine grain, natural light bloom around the brightest
highlights, no artificial lens-flare overlays. No people, no text, no
lettering or logos anywhere, no man-made objects visible.
```

---

## 7. «Моменты» (fade-слайдер на главной)

### about-khachkar.jpg — KEEP
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary close-up, shot as if on a 90mm macro lens at around
f/4 for enough depth to hold the carved relief sharp across its full depth
while the churchyard background falls softly out of focus. Soft, diffused
overcast light from slightly above and camera-left, ideal for revealing the
fine relief carving through gentle, even shadow modelling in the carved
grooves without harsh specular glare on the stone. Exposure balanced for the
mid-grey stone tones, letting the moss patches hold rich, saturated detail
rather than going muddy. Composition: the carved ornamental pattern fills
most of the frame on a slight diagonal, camera held close to perpendicular to
the stone face to minimise perspective distortion of the relief, a small
strip of soft-focus churchyard greenery visible at one edge for context and
depth. Subject: an ancient Armenian khachkar stone cross, close-up on its
intricate carved lace-like ornamental pattern, soft moss growing in the
recessed carved lines, weathered stone surface showing centuries of gentle
erosion. Colour grade: cool-neutral grey stone with olive-green moss accents,
warm undertone in the more weathered stone patches, restrained overall
saturation, reverent and quiet mood. Finish: fine grain, soft natural
vignette, no digital clarity/sharpening artefacts on the carved texture. No
people, no modern text, no lettering or logos anywhere — only the historic
carved ornament itself, no separate readable inscriptions in Armenian or any
other script beyond the traditional cross-stone ornamental pattern.
```

### about-tools.jpg ⚠️ — REPLACE: отъезд команды на рассвете вместо flat-lay
Модель: `soul_v2` · Пропорции: 3:2

```
Professional documentary photograph, shot as if on a 28mm lens at around f/4
for a moderate depth of field keeping the van and nearest team member sharp
while the mountains in the background soften slightly with atmospheric haze.
Soft, low golden-hour sidelight from camera-left, just after sunrise,
producing long, warm-toned shadows across the ground and a gentle rim-light
along the edge of the van's roofline; the quality of light suggests the very
start of the working day, not a posed moment. Exposure balanced for the
olive uniforms' mid-tones, sky allowed to hold a soft gradient from pale gold
near the horizon to cooler blue above. Composition: a plain white service van
sits on the left two-thirds of frame at a three-quarter angle, its side door
open; one caretaker in an olive uniform is caught mid-motion stepping up into
the van, seen from behind or in deep profile, not posed toward camera;
mountains form a low, soft horizon line across the upper third; the
composition reads as a candid, in-motion documentary moment — a team
departing for the first visit of the day — rather than a static group
portrait. Colour grade: warm gold morning light, muted olive uniforms, clean
neutral white van body, cool pale sky, gentle filmic contrast. Finish: fine
grain, soft natural vignette, no promotional gloss or HDR look. CRITICAL: the
van must have no visible logo, company name, license plate text or any
lettering on its body. Double-check before accepting: zero readable
characters anywhere in the frame, including on the van itself. No face
looking directly at camera.
```

### alley.jpg (повторно, слайд 3 «Moments») — используйте промпт из раздела 2 выше

---

## 8. Страница Mission

### about-hands-flower.jpg — REPLACE: силуэт вместо ещё одних рук
Модель: `soul_location` · Пропорции: 3:4

```
Professional documentary photograph, shot as if on a 50mm lens at around f/4
for a moderate depth of field keeping the silhouetted figure sharp against a
softly resolved row of memorial plots behind. Soft, low early-morning
backlight from directly behind the figure (camera facing toward the light
source), producing a clean, warm-rimmed silhouette with gentle atmospheric
haze softening the rows of headstones receding into the distance behind.
Exposure biased for the sky and rim-light, allowing the figure itself to sit
as a soft, warm-toned silhouette with just enough detail retained in the
olive uniform's outline to read as human and caring, not ominous. Composition:
the caretaker's silhouette stands in the lower third of the vertical 3:4
frame, slightly off-centre, facing away from camera toward the rows of
plots stretching into soft-focus distance — a composition about scale and
quiet responsibility rather than a close, literal gesture. Generous open sky
above for calm negative space. Subject: a single Armenian caretaker in an
olive uniform, seen only as a backlit silhouette from behind, standing at the
edge of a row of well-kept memorial plots stretching into the distance,
early morning mist softening the furthest rows. Colour grade: warm golden
backlight, muted olive-grey silhouette, soft desaturated background, gentle
overall calm. Finish: fine grain, soft natural light bloom around the
silhouette's rim, no clinical digital sharpness. No text, no lettering or
logos anywhere, no visible face, no readable inscriptions on any distant
stone.
```

---

## 9. Страница Contact

### contact-yerevan.jpg — REPLACE: вход на кладбище вместо городской улицы
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary photograph, shot as if on a 35mm lens at around
f/5.6 for even sharpness from the gate structure in the foreground to the
cypress alley beyond. Soft, low golden-morning sidelight from camera-left,
raking gently along the stone gate pillars to reveal their texture, long
soft shadows stretching across the entrance path. Exposure balanced for the
warm stone pillars, the alley beyond allowed to fall into a slightly softer,
cooler tonal range for a sense of depth and quiet invitation. Composition:
the cemetery's stone entrance gate/pillars frame the left and right edges of
the composition, the cypress-lined alley receding through the centre of
frame toward a soft, misty vanishing point, wrought-iron gate details visible
but not the focal subject. Environment: the entrance to a Yerevan cemetery on
a calm early morning — stone gate pillars, the start of a cypress-lined
alley beyond, near-empty and quiet. Colour grade: warm honey-toned stone,
muted olive-green cypress, soft neutral morning haze, restrained overall
saturation for a calm, respectful mood. Finish: fine grain, gentle natural
vignette, no HDR look. No people, no readable signage or text of any kind, no
logos.
```

---

## 10. Личный кабинет — демо-объекты

### plot-2.jpg — KEEP
Модель: `soul_location` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 35mm lens at around f/5.6
for even depth of field across the headstone, gravel and cypress. Soft,
directional early-morning light from camera-left at a low hillside angle,
producing gentle modelling on the tuff stone's rough texture and long, soft
shadows from the young cypress tree; light atmospheric haze softens the
distant mountains without flattening foreground contrast. Exposure balanced
for the warm tuff stone mid-tones, mountains in the distance allowed to read
as a soft, slightly pale silhouette. Composition: the headstone sits on the
right third of frame at a gentle three-quarter angle rather than dead-on,
raked gravel ground leading the eye from the lower-left corner toward the
stone, the young cypress positioned on the left third as a vertical
counterpoint, distant mountains forming a low horizon line in the upper
third. Environment: a well-kept family memorial plot on a gentle hillside in
the Abovyan central cemetery (Kotayk region) — a tuff-stone headstone, clean
raked gravel ground, a young cypress tree beside the plot, soft morning light
with mountains faintly visible in the distance. Colour grade: warm dusty pink
tuff tones, muted olive-green cypress, soft grey-mauve distant mountains,
restrained overall saturation. Finish: fine grain, soft natural vignette, no
HDR look. No people, no text, no lettering or logos anywhere, headstone
surface completely blank and polished with no inscriptions.
```

### plot-3.jpg — KEEP (эталон детализации)
Модель: `soul_location` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 50mm lens at around f/4
for a moderate depth of field that keeps the headstone and fence sharp while
the background softens gently. Soft, even overcast daylight with a hint of
directionality from camera-left, producing gentle, low-contrast shadows that
reveal the ironwork's texture and the granite's polish without harsh glare.
Exposure balanced for the dark granite mid-tones, careful not to crush detail
in the black stone's shadow areas. Composition: the headstone and iron fence
sit slightly left of centre, the traditional lantern positioned beside the
stone as a small vertical accent on the right third, framed by the old
section's mature trees at the very edges of frame for quiet enclosure without
clutter; camera at standing eye-level, held level with no convergence.
Subject environment: a family memorial plot in the old section of Tokhmakh
cemetery, Yerevan — a black granite headstone with a soft polished sheen, a
small wrought-iron fence around the plot showing gentle wear, a traditional
cemetery lantern beside the stone. Colour grade: deep neutral black granite
with a cool undertone, warm muted grey-green in the surrounding foliage,
restrained overall saturation, quiet and dignified mood. Finish: fine grain,
soft natural vignette, no HDR look. No people, no text, no lettering or logos
anywhere, headstone surface completely blank and polished with no
inscriptions.
```

### report-poster.jpg — TWEAK: добавлена деталь-«улика»
Модель: `soul_location` · Пропорции: 16:9

```
Professional documentary wide photograph, shot as if on a 28mm lens at around
f/5.6 for even sharpness from the foreground flowers to the cypress
background. Soft morning sidelight from camera-left, catching the polished
granite at a glancing angle so it shows a gentle sheen without glare, and
lighting the fresh flowers with a warm, slightly golden quality. Exposure
balanced for the polished stone's mid-tones, letting the gravel highlights
lift slightly for an airy feel without clipping. Composition: the headstone
sits just right of centre on the middle third of frame, freshly raked gravel
filling the foreground with visible rake-line texture leading the eye toward
the stone, a small lit brass oil lamp resting at the stone's base as the
distinguishing "evidence" detail, the cypress tree positioned upper-left as a
soft vertical anchor, generous sky-to-ground ratio suitable for a video
poster frame with a play-button overlay in the final layout. Subject: a
freshly cleaned family memorial plot in Yerevan — polished granite headstone
catching soft light, neatly raked gravel, a small bunch of fresh flowers and
a lit oil lamp at the base, a cypress tree in the background. Colour grade:
warm ivory and olive-grey palette, gentle filmic contrast, restrained
saturation, small warm amber accent from the lamp flame. Finish: fine grain,
soft natural vignette, no HDR look. No people, no text, no lettering or logos
anywhere, headstone surface completely blank and polished with no
inscriptions.
```

---

## 11. Страница News

### news-team.jpg ⚠️ — REPLACE: журнал визитов вместо построения у машины
Модель: `soul_v2` · Пропорции: 3:2

```
Professional documentary photograph, shot as if on a 50mm lens at around f/2.8
for a shallow-to-moderate depth of field keeping the hands and open ledger
book sharp while the van and second team member soften gently behind. Soft,
warm early-morning sidelight from camera-left, low and golden, catching the
page of an open paper ledger and casting a soft, warm glow across the scene;
a light haze in the air keeps the background calm and unobtrusive. Exposure
balanced for the pale ledger page, letting it hold bright, clean detail
without clipping, while the olive uniforms and van sit comfortably in the
mid-tones. Composition: a gloved hand writes into an open paper ledger
resting on the open tailgate of a plain white service van, positioned on the
lower-right third of frame; a second caretaker stands softly out of focus in
the background near the van's open rear doors, visible but secondary; the
cemetery gate is faintly visible in the deep background. Subject: an
Armenian caretaker's hand entering the first visit of the new season into a
simple paper ledger — date, plot, visit type — resting on the tailgate of the
service van, a quiet act of record-keeping that stands in for the whole
season's promise of documented care. Colour grade: warm golden morning
light, muted olive uniform, clean neutral white van, restrained overall
saturation. Finish: fine grain, soft natural vignette, no promotional gloss.
CRITICAL: the van must have no visible logo, company name, license plate
text or any lettering on its body; the ledger page must show only abstract
handwriting marks, never legible words or numbers large enough to read.
Double-check before accepting: zero legible characters anywhere in the
frame, including on the van and the ledger page.
```

### news-equipment.jpg — REPLACE: регулятор давления вместо каталога техники
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary macro-product photograph, shot as if on a 100mm
macro lens at around f/3.2, close enough to fill the frame with the pressure
regulator dial and the gloved hand adjusting it, the rest of the pressure
washer unit softening into recognisable but out-of-focus yellow-and-black
shape behind. Soft, even daylight from camera-left, diffused as if from an
overcast sky, producing gentle, low-contrast modelling on the dial's texture
and the glove's fabric with no harsh glare on the metal fittings. Exposure
balanced for the mid-tone dial and glove, letting the small pressure-gauge
needle read clearly against its backing. Composition: the regulator dial and
the gloved hand turning it occupy the centre-right two-thirds of frame on a
slight diagonal, the blurred body of the unit anchoring the left third,
tight enough that the specific act of dialling down the pressure is the
unmistakable subject of the image rather than the equipment as a whole.
Subject: a close-up of a gloved hand carefully adjusting the pressure
regulator dial on a plain yellow-and-black pressure-washer unit, illustrating
the specific practice of using low pressure on delicate stone. Colour grade:
bright, clean yellow and black equipment, neutral grey glove, restrained
overall saturation, documentary rather than promotional colour treatment.
Finish: fine grain, natural even clarity, no artificial product-shot gloss.
The equipment must be completely free of text, brand names, logos, numbers
or lettering beyond a small, abstract, non-legible pressure-gauge face —
plain yellow and black surfaces only.
```

---

## 12. Языковые заглушки (ՀԱՅ / РУС «скоро») и страница 404

### lang-stub.jpg — KEEP
Модель: `soul_location` · Пропорции: 16:9

```
Professional landscape photograph, shot as if on a 70mm lens at around f/8 for
even sharpness across the layered hillside grasses and distant mountain.
Backlit dawn light from directly behind the mountain silhouette, producing a
soft pink-to-gold gradient sky and a gentle atmospheric haze that separates
the tonal layers of foreground grass, midground hillside and distant peak.
Exposure balanced for the sky gradient, letting the foreground grasses sit as
soft, slightly underexposed silhouetted shapes for depth. Composition: Mount
Ararat's silhouette sits on the horizon roughly one-third up from the bottom
of the wide 16:9 frame, tall grasses soft and out of focus filling the lower
third as a foreground frame, generous open sky above for calm negative space.
Subject: Mount Ararat at dawn, seen from a quiet grassy hillside in Armenia,
soft pink and gold haze in the sky, tall grasses softly out of focus in the
foreground. Colour grade: soft pink and gold sky tones, muted olive-grey
grasses, gentle desaturation overall for a calm, hopeful mood. Finish: fine
grain, soft natural light gradient, no HDR look. No people, no text, no
lettering or logos anywhere, no man-made structures visible.
```

---

## 13. og:image — соцсети/мессенджеры

### og-image.jpg — REPLACE: следует новой концепции hero-still
Модель: `soul_v2` или композиция на основе нового `hero-still.jpg` · Пропорции: 1.91:1 (1200×630)

```
Professional documentary photograph, shot as if on a full-frame camera with a
35mm f/1.8 lens at around f/2.5, wide horizontal composition suitable for a
social-media link preview, matching the site's new hero photograph in mood,
lighting direction and story for brand consistency. Soft golden-hour backlight
from low camera-left through thin mist. Exposure balanced for the clean, wet
granite stone catching the light, mist highlights allowed to bloom slightly
for an airy, resolved feel. Composition: a clean, freshly cared-for granite
headstone occupies the lower-right two-thirds of frame, a caretaker seen only
from behind, already walking away in the middle distance on the left third;
generous open negative space with soft, even mist tones across the upper
third of the frame specifically left clear for a logo/wordmark to be overlaid
separately by the design team — no visual clutter in that zone. Subject: the
quiet aftermath of a completed visit — a clean, polished headstone in soft
morning mist, the caretaker who tended it departing in the background,
cypress trees and a Yerevan cemetery alley around them. Colour grade: muted
olive-green, ivory and warm grey palette matching the site's brand exactly,
gentle filmic contrast. Finish: fine grain, subtle halation in the mist
highlights, no HDR look. No text baked into the image itself, no lettering or
logos anywhere, headstone surface blank and polished with no inscriptions.
```

---

## Чек-лист после генерации

- [ ] На всех камнях — гладкая полированная (гранит) или чистая матовая (туф) поверхность, ни одной надписи
- [ ] На всём оборудовании (washer/regulator/van) — ноль надписей и логотипов; в кадре ledger-книги (news-team.jpg) — только абстрактные пометки, не читаемый текст
- [ ] Ни одного лица, повёрнутого прямо в камеру крупным планом; в новых «процессных» заменах человек либо не показан, либо снят со спины/в силуэте
- [ ] Единая цветовая палитра выдержана: приглушённый оливковый + айвори + тёплый серый
- [ ] Свет и характер объектива визуально согласуются между кадрами одной секции
- [ ] **Решение по forgetmenot.jpg принято** (незабудка vs гвоздика/бессмертник) — см. раздел 6
- [ ] `og-image.jpg` сгенерирован и добавлен в `src/assets/brand/`
- [ ] Готовые файлы положены в `site-deploy-2026-09-09/src/assets/img/` (фото) и `src/assets/brand/` (og-image), после чего прислать их мне — я заменю плейсхолдеры и пересоберу сайт
