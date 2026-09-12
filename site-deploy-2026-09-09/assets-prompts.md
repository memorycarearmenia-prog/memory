# MemoryCare — shot list & generation prompts (Higgsfield) — final

Owner's rules (2026-09-09): people of Armenian appearance; uniforms olive / deep olive; all equipment
in Kärcher yellow-and-black (K7-class pressure washer, SC 5-class steam cleaner, WD-class drum vacuum,
petrol generator) **without brand lettering**; no readable inscriptions on stones; no portraits.

Shared style suffix appended to every still:
`documentary photograph, natural soft morning light, muted olive green, ivory and warm grey palette, calm and dignified mood, shallow depth of field, 35 mm film look, no text overlays, no lettering or logos anywhere, headstones with blank polished surfaces without inscriptions, equipment plain yellow and black without any brand lettering`

Models & cost: `soul_location` 0.12 cr (places/objects) · `text2image_soul_v2` 0.12 cr (people/hands, 2k) ·
`nano_banana_2` 2 cr (before → after edit with reference) · `kling3_0_turbo` image-to-video 5 s 1080p ≈ 7.5 cr.
Total spent this session ≈ 20 credits. The exact prompt strings live in `tools/gen-assets.cjs`; the generation log with
result URLs is `tools/gen-log.json` / `tools/gen*.log`.

| File | Used | Model | AR | Prompt (core) |
|---|---|---|---|---|
| hero-still.png | hero poster, report video poster, video start frame | soul_v2 | 16:9 | Armenian man in his thirties, olive jacket, deep olive trousers, grey gloves, cleaning a weathered pink tuff headstone with a yellow-and-black pressure washer, mist in low sun; second Armenian team member in the same uniform kneels with a soft brush and a stone-cleaner bottle; cypresses, Yerevan cemetery alley, mountains in haze |
| hero.mp4 | hero background loop | kling3_0_turbo (start: hero-still) | 16:9 · 5 s | Slow cinematic push-in, the Armenian caretaker in olive uniform moves the wand steadily across the stone, mist drifts in sunlight, colleague brushes gently, leaves sway; steady camera, no shake |
| alley.png | Why section, moments slide, reset aside | soul_location | 3:2 | Well-kept Yerevan cemetery alley at early morning, gravel path, cypresses, rose bushes, tuff memorials out of focus, mist, mountains |
| before.png | before/after slider, hero report card, report page | soul_location | 3:2 | Neglected plot: dark granite dulled by dust and lichen, dry leaves, dead grass, cracked border, weeds, overcast, frontal medium shot |
| after.png | before/after slider, hero report card, report page | nano_banana_2 (ref: before) | 3:2 | Edit this exact photograph, keep framing pixel-identical; granite clean and polished, leaves and weeds removed, border washed, gravel raked, small bunch of fresh white flowers at the base |
| step-inspect.png | How it works 2 | soul_v2 | 4:3 | Armenian woman caretaker, olive uniform, holding a tablet photographing a blank grey granite headstone; plain yellow-and-black case at her feet; cypresses; side light |
| step-clean.png | What a visit includes, How it works 3 | soul_v2 | 4:3 | Gloved hands working pH-neutral foam over dark granite with a natural-bristle brush; yellow-and-black pressure washer blurred behind; olive sleeve |
| step-flowers.png | Why section (stacked photo) | soul_v2 | 4:3 | Gloved hands of an Armenian caretaker place white chrysanthemums and forget-me-nots at a clean granite base, wiping the stone with an ivory cloth; yellow unit blurred behind |
| step-report.png | How it works 4, login aside | soul_v2 | 4:3 | Armenian woman in her fifties at a kitchen table abroad, coffee, calmly looking at a phone showing two photos of one plot and a map pin; window light |
| texture-tuff.png | pricing section background | soul_location | 21:9 | Extreme close-up of Armenian pink tuff, volcanic porosity, raking light, almost abstract |
| about-khachkar.png | History page, moments slide 1 | soul_location | 3:2 | Ancient khachkar detail, carved lace ornament, moss, quiet churchyard, diffused light |
| about-hands-flower.png | Mission page, register aside | soul_v2 | 3:4 | Two open hands holding blue forget-me-nots, ivory linen sleeve, plain warm background |
| about-tools.png | Values page, moments slide 2 | soul_location | 3:2 | Flat-lay on olive canvas: K7-style upright pressure washer, SC 5-style steam cleaner, WD-style drum vacuum, compact petrol generator, brushes, white cleaner bottles, gloves, cloths, tape — no lettering |
| forgetmenot.png | voices background, news card | soul_location | 21:9 | Macro field of forget-me-nots at dawn, dew, soft focus |
| contact-yerevan.png | (reserve) Contact | soul_location | 3:2 | Komitas Avenue, Yerevan, calm early morning, tuff buildings, plane trees, no people |
| plot-1/2/3.png | account demo plots, How it works 1 | soul_location | 4:3 | Cared-for plots: Davtashen (two granite stones, tile border, shrubs) · Abovyan hillside (tuff stone, gravel, cypress) · Tokhmakh (black granite, iron fence, lantern) |
| news-team.png | News page | soul_v2 | 3:2 | Three-person Armenian team in olive uniforms beside a white van with open cases holding plain yellow-and-black units, Yerevan cemetery gate, morning |
| news-equipment.png | News page | soul_location | 3:2 | Open van rear: K7-style washer, SC 5-style steam cleaner, drum vacuum, petrol generator, cases, hose, canisters — no lettering |
| report-poster.png | report page video poster | soul_location | 16:9 | Wide view of a freshly cleaned plot in Yerevan, polished granite, raked gravel, flowers, cypress |
| lang-stub.png | ՀԱՅ/РУС coming-soon, 404 | soul_location | 16:9 | Mount Ararat at dawn from a quiet hillside, pink haze, grasses out of focus |

Known imperfections to replace with real photography before launch: generated lettering still appears on some
equipment (`about-tools`, `news-team`), and the hero still shows a pseudo-inscription on the left stone (covered by the
headline at most widths).
