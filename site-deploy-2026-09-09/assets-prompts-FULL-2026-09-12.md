# MemoryCare — полный список промптов для генерации медиаконтента (Higgsfield)

Для вашей **локальной** сессии Claude Code (там, где Higgsfield авторизован).
Каждый промпт самодостаточен и написан на уровне брифа для профессионального
фотографа/оператора: камера и оптика, свет и его направление, экспозиция,
композиция, цветокоррекция, постобработка. Копируйте по одному, ничего
дописывать не нужно.

**Сквозной арт-дирекшн бренда** (уже встроен в каждый промпт, но держите в
голове при отборе кадров): люди армянской внешности; форма — оливковая/
тёмно-оливковая; всё оборудование жёлто-чёрное в стиле Kärcher **без единой
видимой надписи, логотипа или бренд-маркировки**; на камнях — **только
гладкая полированная поверхность без надписей**; никаких портретов крупным
планом в объектив; документальный, спокойный, приглушённый тон; общая
цветовая формула — приглушённый оливковый + айвори + тёплый серый, лёгкое
утреннее рассеянное освещение, ощущение 35-мм плёнки, а не студийной съёмки.

⚠️ **Три позиции уже один раз генерировались с браком** (паразитные
псевдо-надписи на камне/оборудовании): `hero-still.jpg`, `about-tools.jpg`,
`news-team.jpg`. Для них в промпте усилен негативный блок — проверяйте
результат крупным планом перед тем как принимать кадр.

Модели и стоимость: `soul_location` 0.12 кр (места/объекты) ·
`text2image_soul_v2` 0.12 кр (люди/руки, 2k) · `nano_banana_2` 2 кр (edit
before→after по референсу) · `kling3_0_turbo` image-to-video 5 сек 1080p
≈ 7.5 кр.

---

## 1. Главная страница — hero (видео-фон)

### hero-still.jpg ⚠️ (постер hero, постер видео-отчёта, стартовый кадр видео)
Модель: `soul_v2` · Пропорции: 16:9

```
Professional documentary photograph, shot as if on a full-frame mirrorless
camera with a 35mm f/1.4 prime lens, aperture around f/2 for a shallow but not
extreme depth of field that keeps both caretakers sharp while the cypress
background softens into gentle bokeh. Golden-hour morning backlight coming
from low camera-left, roughly 20 degrees above the horizon, filtered through
thin ground mist so the light wraps softly around the subjects instead of
casting hard shadows; a faint warm rim-light traces the edge of the near
caretaker's shoulder and the water spray. Exposure metered for the skin tones
and olive fabric, letting the mist and sky highlights bloom slightly toward
overexposure for an airy, hopeful feel; shutter speed fast enough to freeze
individual water droplets in the spray as small sharp highlights against the
softer mist. Composition: the main caretaker is positioned on the right third
of the frame following the rule of thirds, headstone occupying the lower-right
quadrant, his colleague kneeling further back on the left third creating depth
through foreground-midground-background layering; camera height at the
caretaker's chest level, slight low angle looking very slightly upward to give
the figure quiet dignity without heroic exaggeration. Subject: an Armenian man
in his thirties, olive-green field jacket, deep-olive trousers, grey nitrile
work gloves, both hands steady on a yellow-and-black pressure-washer wand,
directing a fan-pattern spray across a weathered pink tuff headstone; a second
Armenian team member in matching olive uniform kneels a few metres behind him
with a soft-bristle brush and an unlabelled stone-cleaner spray bottle.
Environment: a quiet Yerevan cemetery alley, mature cypress trees flanking the
path, low mountains dissolving into haze on the horizon, wet gravel underfoot
catching soft reflected light. Colour grade: desaturated, olive-green and warm
grey midtones, ivory highlights, lifted black point for a gentle filmic
contrast curve, subtle warm-cool split (warm highlights, slightly cool
shadows). Finish: visible but fine 35mm film grain, a touch of halation around
the brightest mist highlights, no digital sharpening halos, no HDR look. No
text overlays, no lettering or logos anywhere. The headstone surface must be
completely blank and polished — absolutely no inscriptions, engraved text, or
pseudo-letters of any kind, even partially obscured. All equipment must be
plain yellow and black with zero visible branding, model numbers or lettering.
No faces looking directly at camera.
```

### hero.mp4 (фоновый луп в hero-секции)
Модель: `kling3_0_turbo`, image-to-video от `hero-still.jpg` · 5 сек · 1080p · 16:9

```
Slow, continuous cinematic push-in from the exact framing of the reference
still, as if on a motorized slider moving roughly 15–20 cm total over 5
seconds — subtle enough to read as ambient camera breathing rather than a
deliberate dolly move, no visible acceleration or deceleration jump. Simulated
lens: 35mm-equivalent, f/2, matching the reference photo's depth of field
exactly so the transition from still to motion is seamless; frame rate feel of
24fps with natural motion blur on fast-moving elements (the water spray) and
crisp clarity on slow ones (the caretakers). Lighting stays continuous with
the reference frame: soft golden-hour backlight from camera-left, mist
drifting laterally through the beam at a slow, even drift speed, catching and
releasing highlights as it moves. Action: the lead caretaker's wrist and
forearm move in a smooth, even side-to-side arc as the wand sweeps the spray
pattern across the stone in a realistic cleaning rhythm — not mechanical
repetition, slight natural variation in speed; his colleague's brushing hand
moves in small, gentle circular strokes; a few cypress branches at the frame
edges sway very slightly in a light breeze, out of sync with each other for
naturalism. Camera holds level, no handheld shake, no whip pans, no jump cuts,
no speed ramping. Colour and grain must stay identical to the reference frame
throughout — no drift in white balance or contrast across the 5 seconds. Keep
the headstone surface blank throughout — no text or inscriptions should
appear or become readable at any single frame of the motion. Equipment stays
plain yellow and black with no lettering visible at any point in the loop.
```

---

## 2. Секция «Why» (главная) + History / Values / Reset

### alley.jpg (секция Why, слайд Moments, боковая панель Reset)
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
receding toward a vanishing point in the upper-left third, cypress trees
forming a loose vertical rhythm on both sides that frames the path without
fully enclosing it, rose bushes as soft colour accents along the lower edge of
frame; camera height at approximately 1.5m (standing eye-level), lens held
level with no tilt. Environment: a well-kept alley inside a Yerevan cemetery,
tuff memorial stones visible only as soft, unreadable shapes well out of focus
in the middle distance, Armenian mountains faintly resolved through haze at
the horizon. Colour grade: muted olive greens in the foliage, warm ivory and
grey in the gravel and mist, gently lifted shadows, restrained overall
saturation. Finish: fine film grain, soft natural vignette at the corners, no
HDR halos, no oversharpened edges. No people, no text, no lettering or logos
anywhere, no readable inscriptions on any visible stone surfaces even at a
distance.
```

### step-flowers.jpg (Why-секция «стопкой», «Что входит в визит»)
Модель: `soul_v2` · Пропорции: 4:3

```
Professional macro-documentary photograph, shot as if on a 100mm macro lens
at roughly f/2.8, close enough to fill the frame with the hands and the base
of the stone while still keeping the yellow-and-black unit in the background
recognisable but very soft (heavy bokeh, three to four stops out of focus).
Soft, diffused window-quality daylight from camera-left, low in contrast,
wrapping gently around the fingers and the flower petals with no harsh
specular highlights; a faint warm bounce-light from below (implied reflection
off the pale stone) lifts the shadow side of the hand just enough to keep
detail. Exposure balanced for the mid-tone skin and ivory cloth, letting the
white chrysanthemum petals hold detail rather than clip to pure white.
Composition: the hands and flowers occupy the lower two-thirds of frame in a
diagonal placement from bottom-left to centre, the polished stone edge running
along the base of frame as a stable horizontal anchor, generous negative space
in the upper third for calm breathing room. Subject: gloved hands belonging to
an Armenian caretaker, wearing an olive-green jacket sleeve visible at the
wrist, gently placing a small, loosely tied bunch of fresh white
chrysanthemums and blue forget-me-nots at the clean base of a polished granite
headstone, an ivory-coloured cotton cloth resting nearby ready for a final
wipe. Colour grade: warm neutral skin tones, muted olive sleeve, soft ivory
and white in the flowers and cloth, gentle grey in the stone. Finish: fine
grain, no digital noise reduction smoothing, natural micro-texture retained on
the petals and fabric. No text overlays, no lettering or logos anywhere,
headstone surface completely blank and polished with no inscriptions,
equipment in the background plain yellow and black without any brand
lettering. No faces visible in frame.
```

---

## 3. «Что входит в Express-визит» / «Как это работает»

### step-clean.jpg (используется дважды: «Что входит», шаг 3 «Как это работает»)
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary close-up, shot as if on an 85mm macro-capable lens at
around f/2.5, tight enough that the granite surface and foam texture fill most
of the frame while the pressure washer in the background dissolves into soft,
warm-toned bokeh roughly four stops out of focus. Soft, even overcast daylight
from directly above and slightly camera-left, producing gentle, low-contrast
modelling on the foam bubbles and brush bristles without harsh specular
glare — the kind of soft box-like quality a bright cloudy sky gives outdoors.
Exposure balanced to preserve highlight detail in the white foam while keeping
the dark granite from crushing to pure black; a touch of lifted shadow detail
for a documentary, unpolished feel. Composition: the brush and foam-covered
stone surface run diagonally through the frame from lower-left to upper-right,
the gloved hand entering from the left edge at roughly the lower third,
leaving open negative space in the upper-right for the softly blurred
equipment. Subject: gloved hands working pH-neutral cleaning foam over a dark
granite headstone surface with a natural-bristle brush, small clusters of foam
bubbles visible catching the light individually, an olive-coloured sleeve cuff
just visible at the edge of frame; a yellow-and-black pressure washer
softly blurred behind. Colour grade: cool-neutral granite grey, warm olive
sleeve accent, bright but not blown-out white foam, muted background yellow.
Finish: fine film grain, natural micro-contrast on the wet stone texture, no
oversharpening. No text overlays, no lettering or logos anywhere, headstone
surface blank and polished with no inscriptions, equipment plain yellow and
black without any brand lettering.
```

### plot-1.jpg (шаг 1 «Как это работает», демо-объект «Petrosyan family plot»)
Модель: `soul_location` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 35mm lens at around f/5.6
for a moderate, even depth of field that keeps both headstones and the
immediate border sharp while the cypress trees in the background soften
gently. Soft, directional early-morning light from camera-left at a low angle,
grazing across the tile border and gravel to reveal texture, with delicate,
elongated shadows falling to the right; light haze in the air softens contrast
slightly without flattening the image. Exposure balanced for the mid-grey
granite and pale tile border, sky (where visible) allowed to read as a soft,
slightly bright neutral band. Composition: the two headstones sit just off
centre on the right two-thirds of frame following the rule of thirds, the tile
border forming a clean horizontal line roughly one-third up from the bottom of
frame, small trimmed shrubs providing a soft vertical counterpoint on the
left; camera at standing eye-level, lens held level with no convergence
distortion. Environment: a well-kept family memorial plot in the Davtashen
cemetery area of Yerevan — two clean, polished granite headstones side by
side, a neat low tile border in pale stone, small manicured shrubs beside the
stones, cypress trees softly out of focus in the background. Colour grade:
neutral cool granite grey balanced against warm ivory tile and muted olive
foliage, restrained overall saturation, gentle filmic contrast. Finish: fine
grain, soft natural vignette, no HDR look. No people, no text, no lettering or
logos anywhere, headstone surfaces completely blank and polished with no
inscriptions.
```

### step-inspect.jpg (шаг 2 «Как это работает»)
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary photograph, shot as if on a 50mm lens at around f/2.2
for a shallow depth of field that keeps the caretaker and tablet crisply sharp
while the cypress trees behind fall into soft, warm bokeh. Soft side-lighting
from camera-left, roughly 45 degrees, mid-morning quality with gentle
directionality that models the folds of the olive uniform and the curve of the
tablet without harsh shadow edges; a faint cool skylight fill from
camera-right keeps the shadow side of her face and uniform from going fully
dark. Exposure balanced for the olive uniform's mid-tones, tablet screen
slightly underexposed relative to the scene to avoid a distracting glow.
Composition: the caretaker stands just right of centre following the rule of
thirds, holding the tablet up at chest-to-shoulder height as she photographs
the headstone which sits just outside the left edge of frame (implied, not
fully shown), the plain yellow-and-black case at her feet anchoring the lower
third; camera at a slightly lower angle than her eye-line, looking up just
enough to give a quiet, respectful read without heroicising her. Subject: an
Armenian woman caretaker in an olive-green uniform, hair tied back simply,
holding a tablet and photographing a blank polished grey granite headstone for
an inspection report, her expression calm and focused, not directed at
camera. Colour grade: muted olive uniform, warm grey stone tones, soft ivory
ambient light, restrained saturation throughout. Finish: fine grain, gentle
natural vignette, no digital sharpening artefacts. No text overlays, no
lettering or logos anywhere, headstone surface blank and polished with no
inscriptions, equipment case plain yellow and black without any brand
lettering.
```

### step-report.jpg (шаг 4 «Как это работает», боковая панель Login)
Модель: `soul_v2` · Пропорции: 4:3

```
Professional documentary interior photograph, shot as if on a 35mm lens at
around f/2 for a shallow depth of field that keeps the woman and her phone
sharp while the kitchen background softens into gentle, warm bokeh. Soft
window light from camera-left, mid-morning quality filtered through a sheer
curtain implied off-frame, producing a gentle gradient of light across her
face and the table — brighter near the window side, softly falling off toward
camera-right; a warm practical light source (implied kitchen lamp, off-frame)
adds a subtle golden fill to prevent the shadow side from going flat. Exposure
balanced for her skin tones and the pale ceramic coffee cup, letting the
window itself read as a soft, slightly overexposed bright patch for a natural
interior feel. Composition: she sits at roughly a three-quarter angle to
camera, positioned on the left third of frame, the phone held at a
comfortable, natural angle in her hands on the lower-right third, the coffee
cup nearby as a small warm accent; camera at seated eye-level, no downward
angle, to keep the moment intimate rather than observational. Subject: an
Armenian woman in her fifties, seated at a kitchen table abroad, a cup of
coffee within reach, calmly looking at a phone screen that shows two small,
softly rendered photographs of the same memorial plot and an abstract map-pin
icon — no legible text or UI labels, just soft shapes suggesting a report
interface. Colour grade: warm, homely tones — soft amber window light, muted
neutral interior, gentle skin warmth, understated background desaturation.
Finish: fine film grain, soft warm halation near the window highlight, no
clinical digital sharpness. No text overlays, no visible logos or brand
lettering anywhere, no readable text large enough to be legible on the phone
screen itself.
```

---

## 4. Блок цен (фон секции)

### texture-tuff.jpg (фоновая текстура секции Pricing)
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

## 5. Before/After сравнение (используется в hero-карточке, слайдере, отчётах)

### before.jpg (слайдер before/after, hero report-card, все отчёты о визитах)
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary photograph, shot as if on a 50mm lens at around f/5.6
for even, front-to-back sharpness suitable for a precise before/after
comparison — deliberately less shallow than the site's other lifestyle photos,
because this frame must read as a neutral, evidentiary record rather than an
artistic composition. Flat, soft overcast daylight from directly above with no
strong directional shadows, mimicking a bright cloudy sky — the same
lighting quality the "after" edit must match exactly. Exposure set for
accurate, neutral colour rendition rather than mood — mid-grey card exposure,
no crushed shadows or blown highlights, so the comparison reads honestly.
Composition: strictly frontal, camera perpendicular to the headstone face at
the same working distance and height that the after-photo edit will need to
preserve pixel-for-pixel, headstone centred in frame with even margin on both
sides, horizon-level camera with no tilt or convergence. Subject: a neglected
family memorial plot — a dark granite headstone dulled by a fine layer of dust
and patchy lichen, dry fallen leaves and dead grass scattered around the base,
a cracked stone border with a few weeds growing through the gaps. Colour
grade: deliberately desaturated and slightly cool-neutral, muted olive-grey in
the lichen, warm dusty tones in the dead leaves, an overall slightly
melancholic but respectful, clinical-documentary palette — not moody, just
honest. Finish: fine grain, minimal contrast styling, no dramatic
colour-grading, so it reads as a plain factual record. No people, no text, no
lettering or logos anywhere, no readable inscriptions visible on the stone
(keep any engraved area out of frame or angled away from camera).
```

### after.jpg (edit-версия before.jpg — тот же кадр после ухода)
Модель: `nano_banana_2` (image edit, референс: `before.jpg`) · Пропорции: 3:2 (сохранить кадрирование пиксель-в-пиксель)

```
Edit this exact photograph, keeping the camera position, framing, focal
length, lens perspective and crop pixel-identical to the reference image — do
not shift, zoom, or re-angle the shot in any way. Preserve the reference's
exact lighting direction, colour temperature and flat overcast exposure so the
only visible difference between the two images is the physical condition of
the plot, not the photography. Change only the condition of the scene: the
granite headstone is now clean and evenly polished with a soft, consistent
natural sheen across its whole surface, all lichen and dust fully removed with
no residual patchiness; the dead leaves and weeds are gone and the ground
beneath is now neatly raked fine gravel with visible rake-line texture; the
stone border is washed clean and its crack repaired or tightly re-set so it
reads as solid and level; a small, loosely tied bunch of fresh white flowers
rests at the base of the headstone, placed naturally rather than staged
dead-centre. Match grain structure and colour grade exactly to the reference
so the pairing reads as one continuous documentary record, not two separate
renders. No text, no lettering or logos anywhere, no inscriptions appear on
the stone surface — it stays blank and polished.
```

---

## 6. «Что рассказали семьи» (фон секции)

### forgetmenot.jpg (фон секции Voices, карточка новости)
Модель: `soul_location` · Пропорции: 21:9

```
Professional macro photograph, shot as if on a 90mm macro lens wide open
around f/2, producing an extremely shallow plane of focus — only a thin band
of petals and dew droplets sharp, with the rest of the field dissolving almost
immediately into soft, luminous, colour-blended bokeh. Backlit dawn light from
low behind the flowers (camera pointed roughly toward the light source),
causing each dew droplet to catch a small, bright specular highlight and the
thin petals to glow slightly translucent at their edges — a classic macro
backlight technique. Exposure biased toward slight overexposure in the
out-of-focus highlight areas for a soft, dreamy glow, while keeping the
in-focus droplets and petal edges crisp with detail. Composition: the sharp
focal band sits roughly one-third up from the bottom of the wide 21:9 frame,
a loose diagonal scatter of blue petals leading the eye gently left to right,
generous soft negative space above for section-heading text to sit over in
the final web layout. Subject: a macro field of forget-me-not flowers at dawn,
small five-petalled blue blooms with fine dew droplets on the petal surfaces
and stems, thin grass stalks softly woven through. Colour grade: soft
powder-blue petals, warm golden backlight glow, muted green in the
soft-focus stems, gentle overall pastel quality. Finish: fine grain, natural
light bloom around the brightest highlights, no artificial lens-flare
overlays. No people, no text, no lettering or logos anywhere, no man-made
objects visible.
```

---

## 7. «Моменты» (fade-слайдер на главной)

### about-khachkar.jpg (слайд 1 «Moments», страница History)
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

### about-tools.jpg ⚠️ (слайд 2 «Moments», страница Values)
Модель: `soul_location` · Пропорции: 3:2

```
Professional flat-lay product photograph, shot as if on a 35mm lens directly
overhead on a copy-stand, aperture around f/8 for uniform, edge-to-edge sharp
focus across the entire arrangement with zero perspective distortion. Soft,
large-source even lighting from directly above (as if a large diffused
softbox or bright open shade), producing gentle, non-directional shadows
beneath each object just strong enough to convey shape and separation between
items, with no glare or hotspot on any surface. Exposure balanced for the
mid-tone olive canvas backdrop, letting the yellow equipment hold its full
saturation without clipping. Composition: objects arranged with clear
breathing room between each one following an implied grid, the pressure
washer and steam cleaner as the two largest anchor shapes on the left and
centre, smaller items (brushes, bottles, gloves, folded cloths, coiled hose)
arranged in a loose supporting rhythm to the right and along the bottom edge,
generous even margin of plain canvas around the whole arrangement. Subject: a
flat-lay on olive-coloured canvas fabric — an upright yellow-and-black
pressure washer unit, a yellow-and-black steam cleaner unit, a yellow drum
vacuum unit, a compact petrol generator, several natural-bristle brushes of
varying sizes, two plain white plastic cleaner bottles, grey work gloves,
neatly folded ivory cloths, a coiled hose. Colour grade: bright, clean yellow
and black equipment against a muted olive-green canvas, warm ivory cloth
accents, natural unforced saturation. Finish: fine grain, crisp product-level
clarity without artificial sharpening halos. CRITICAL: every single piece of
equipment must be completely free of text, brand names, logos, model numbers,
warning labels or any lettering whatsoever — plain yellow and black surfaces
only, and plain unlabelled bottles. Double-check before accepting: zero
readable characters anywhere in the frame.
```

---

## 8. Страница Mission

### about-hands-flower.jpg (Mission — фото рядом с текстом, боковая панель Register)
Модель: `soul_v2` · Пропорции: 3:4

```
Professional documentary studio-style photograph, shot as if on an 85mm lens
at around f/2 for a shallow depth of field that keeps the hands and flowers
crisply sharp while the plain background falls into a soft, smooth gradient of
out-of-focus tone. Soft, large-source diffused light from camera-left at a
gentle 45-degree angle (as if a large window with a sheer diffuser), wrapping
smoothly around the curve of the hands with a soft shadow falling to the
lower-right, no harsh specular highlights on the skin. Exposure balanced for
the skin tone mid-greys, letting the pale blue petals hold delicate colour
without washing out. Composition: the cupped hands sit slightly off-centre,
positioned in the lower two-thirds of the vertical 3:4 frame following the
rule of thirds, flowers nestled naturally in the palms rather than arranged
symmetrically, generous soft negative space in the upper third for calm
breathing room. Subject: two open hands cupped together, holding a small,
loosely gathered cluster of blue forget-me-not flowers, an ivory linen sleeve
visible at the wrist, no rings or identifying jewellery. Colour grade: warm
neutral skin tones, soft powder-blue flowers, muted warm-grey background,
gentle overall desaturation for a tender, quiet mood. Finish: fine grain, soft
natural light falloff at the frame edges, no clinical digital sharpness. No
text, no lettering or logos anywhere, no visible face, no jewellery or
identifying details on the hands.
```

---

## 9. Страница Contact (резерв — на будущее, если решите ставить фото офиса/района)

### contact-yerevan.jpg (резерв для страницы Contact)
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary street photograph, shot as if on a 35mm lens at
around f/5.6 for even sharpness across the street scene from foreground
pavement to the building facades in the middle distance. Soft, low
golden-morning side-light from camera-left, raking gently along the tuff-stone
building facades to reveal their texture, long soft shadows cast by the plane
trees stretching across the empty street. Exposure balanced for the warm
stone facades, sky allowed to read as a soft pale band without clipping.
Composition: the tree-lined street recedes on a gentle diagonal from the
lower-right corner toward a vanishing point in the upper-left third, building
facades forming a loose frame along the right edge, plane tree canopy
providing a dappled soft ceiling of light across the upper portion of frame.
Environment: Komitas Avenue in Yerevan on a calm early morning — tuff-stone
buildings, mature plane trees lining the street, near-empty pavement. Colour
grade: warm honey-toned stone, muted olive-green foliage, soft neutral sky,
restrained overall saturation for a calm, unhurried mood. Finish: fine grain,
gentle natural vignette, no HDR look. No people, no vehicles with readable
plates or logos, no readable shop signage or text of any kind.
```

---

## 10. Личный кабинет — демо-объекты (3 разных участка, у каждого свой отчёт)

### plot-2.jpg («Grandparents' plot», Абовян)
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

### plot-3.jpg («Uncle Vahan's plot», Тохмах)
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
clutter; camera at standing eye-level, held level with no convergence. Subject
environment: a family memorial plot in the old section of Tokhmakh cemetery,
Yerevan — a black granite headstone with a soft polished sheen, a small
wrought-iron fence around the plot showing gentle wear, a traditional
cemetery lantern beside the stone. Colour grade: deep neutral black granite
with a cool undertone, warm muted grey-green in the surrounding foliage,
restrained overall saturation, quiet and dignified mood. Finish: fine grain,
soft natural vignette, no HDR look. No people, no text, no lettering or logos
anywhere, headstone surface completely blank and polished with no
inscriptions.
```

### report-poster.jpg (постер видео на странице отчёта о визите)
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
the stone, the cypress tree positioned upper-left as a soft vertical anchor,
generous sky-to-ground ratio suitable for a video poster frame with a
play-button overlay in the final layout. Subject: a freshly cleaned family
memorial plot in Yerevan — polished granite headstone catching soft light,
neatly raked gravel, a small bunch of fresh flowers at the base, a cypress
tree in the background. Colour grade: warm ivory and olive-grey palette,
gentle filmic contrast, restrained saturation. Finish: fine grain, soft
natural vignette, no HDR look. No people, no text, no lettering or logos
anywhere, headstone surface completely blank and polished with no
inscriptions.
```

---

## 11. Страница News

### news-team.jpg ⚠️ (карточка новости «Первый сезон»)
Модель: `soul_v2` · Пропорции: 3:2

```
Professional documentary group photograph, shot as if on a 35mm lens at
around f/4 for enough depth of field to keep all three team members and the
van sharp while the cemetery gate softens slightly in the background. Soft,
even early-morning light from camera-left, low and slightly warm, producing
gentle, natural modelling on the olive uniforms without harsh shadows across
faces; a light haze in the air softens overall contrast for a calm,
unposed documentary feel rather than a promotional group shot. Exposure
balanced for the mid-tone uniforms, van body allowed to hold clean, even
white/neutral tone without blowing out. Composition: the three team members
stand in a loose, naturally staggered line beside the van's open rear doors
rather than a stiff symmetrical row, positioned across the centre and
right-of-centre of frame, the open van doors and visible equipment cases
occupying the left third, cemetery gate softly visible in the background
providing context; camera at standing eye-level, held level. Subject: a
three-person Armenian caretaker team in matching olive uniforms, standing
beside a plain white service van with its rear doors open, showing open
equipment cases inside holding plain yellow-and-black cleaning units, at the
gate of a Yerevan cemetery in early morning light, expressions calm and
unposed, not looking directly at camera. Colour grade: muted olive uniforms,
clean neutral white van body, warm morning ambient light, restrained overall
saturation for a professional but understated mood. Finish: fine grain, soft
natural vignette, no promotional-style gloss or HDR look. CRITICAL: the van
must have no visible logo, company name, license plate text or any lettering
on its body; all equipment cases and units must be completely free of brand
names, labels or lettering. Double-check before accepting: zero readable
characters anywhere in the frame, including on the van itself.
```

### news-equipment.jpg (карточка новости «Почему низкое давление»)
Модель: `soul_location` · Пропорции: 3:2

```
Professional documentary product-in-context photograph, shot as if on a 24mm
lens at around f/6.3 for deep, even sharpness across the whole van interior
from front to back. Soft, even daylight coming from outside the van
(camera-side, diffused, as if an overcast sky), producing gentle, low-contrast
illumination across the equipment with soft shadow fill inside the van's
interior so no piece falls into unreadable darkness. Exposure balanced for the
mid-tone equipment surfaces, van interior shadows lifted just enough to retain
detail without looking artificially flat. Composition: camera positioned
directly behind the open rear doors looking straight into the van, doors
framing the left and right edges of the composition symmetrically, equipment
arranged in an implied grid receding slightly toward the back of the van for a
sense of depth, hose coiled in the foreground as a leading curved shape.
Subject: looking into the open rear of a service van — a yellow-and-black
pressure washer, a yellow-and-black steam cleaner, a yellow drum vacuum, a
compact petrol generator, plastic equipment cases, a coiled hose, and
unlabelled plastic canisters, arranged neatly. Colour grade: bright, clean
yellow and black equipment against the neutral grey van interior, restrained
overall saturation, documentary rather than promotional colour treatment.
Finish: fine grain, natural even clarity, no artificial product-shot gloss.
Every piece of equipment must be completely free of text, brand names, logos
or lettering — plain yellow and black surfaces only.
```

---

## 12. Языковые заглушки (ՀԱՅ / РУС «скоро») и страница 404

### lang-stub.jpg (заглушка "coming soon" для am/ru, страница 404)
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

## 13. og:image — соцсети/мессенджеры (сейчас файла нет вообще!)

### og-image.jpg (превью сайта в соцсетях/мессенджерах — **этого файла пока нет вообще, нужно сделать в первую очередь**)
Модель: `soul_v2` или композиция на основе `hero-still.jpg` · Пропорции: 1.91:1 (1200×630)

```
Professional documentary photograph, shot as if on a full-frame camera with a
35mm f/1.8 lens at around f/2.5, wide horizontal composition suitable for a
social-media link preview. Soft golden-hour backlight from low camera-left
through thin mist, matching the site's hero photograph in mood and lighting
direction for brand consistency. Exposure balanced for the caretaker's olive
uniform and the mist highlights, allowed to bloom slightly for an airy,
inviting feel. Composition: the caretaker cleaning the headstone is placed on
the lower-right two-thirds of frame, generous open negative space with soft,
even mist tones across the upper third of the frame specifically left clear
for a logo/wordmark to be overlaid separately by the design team — no visual
clutter in that zone. Subject: an Armenian caretaker in an olive uniform
gently cleaning a weathered pink tuff headstone with a yellow-and-black
pressure washer, soft morning mist, cypress trees and a Yerevan cemetery alley
in the background. Colour grade: muted olive-green, ivory and warm grey
palette matching the site's brand exactly, gentle filmic contrast. Finish:
fine grain, subtle halation in the mist highlights, no HDR look. No text baked
into the image itself, no lettering or logos anywhere, headstone surface blank
and polished with no inscriptions, equipment plain yellow and black without
any brand lettering.
```

---

## Чек-лист после генерации

- [ ] На всех камнях — гладкая полированная поверхность, ни одной надписи
- [ ] На всём оборудовании (washer/steam cleaner/vacuum/generator/van) — ноль надписей и логотипов
- [ ] Ни одного лица, повёрнутого прямо в камеру крупным планом
- [ ] Единая цветовая палитра выдержана: приглушённый оливковый + айвори + тёплый серый
- [ ] Свет и характер объектива визуально согласуются между кадрами одной секции (не смешивать жёсткий студийный свет с мягким документальным)
- [ ] `og-image.jpg` сгенерирован и добавлен в `src/assets/brand/` (сейчас файла нет вообще)
- [ ] Готовые файлы положены в `site-deploy-2026-09-09/src/assets/img/` (фото) и `src/assets/brand/` (og-image), после чего прислать их мне — я заменю плейсхолдеры и пересоберу сайт
