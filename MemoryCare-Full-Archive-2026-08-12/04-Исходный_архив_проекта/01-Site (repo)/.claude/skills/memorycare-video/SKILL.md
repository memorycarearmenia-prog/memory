---
name: memorycare-video
description: >-
  Create on-brand marketing and report videos for MemoryCare (the Armenian
  grave-care subscription service) using Remotion (programmatic React video).
  Use when the user wants an Instagram Reel or Story, a before/after
  photo-report video with a date + GPS overlay, a holiday greeting video for the
  diaspora (Easter/Զատիկ, Vardavar/Վարդավառ, memorial days), a service/offer
  promo, or any branded animated asset (including animated OG images). Triggers:
  video, reel, story, видеоотчёт, "до/после" видео, holiday video, greeting
  video, Remotion, motion asset, animated OG, TikTok/Instagram video.
license: MIT
---

# MemoryCare — Video (Remotion)

Produce **premium, dignified, on-brand videos** for MemoryCare with
[Remotion](https://remotion.dev) — video authored as React components and
rendered to MP4/WebM/GIF/stills.

Brand + audience context lives in `docs/BUSINESS-CONTEXT.md` and the
`memory-care-project` skill — read them before writing copy. For motion
quality, also consult the `design-motion-principles` and `apple-design` skills.

## When to use
- **Before/after report video** — a grave visit report: before → after with a
  delicate frame, date + GPS caption, forget-me-not watermark. (The brand brief
  mandates a *tasteful* presentation with no visual noise over the real photo.)
- **Holiday greeting Reel/Story** for the diaspora — warm, multilingual
  (AM/RU/EN/FR), for Easter (Զատիկ), Vardavar (Վարդավառ), and memorial days.
- **Service / offer promo** — short explainer of the subscription (tariffs,
  "your eyes and hands in the homeland").
- **Animated OG / social cards**, story templates, logo stings.

## When NOT to use
Static images (use `seo-image-gen` / `imagegen-frontend-web` / `banner-design`),
plain web animation (use `design-motion-principles`), or logo/brand vector work
(that's the SVG emblem, not video).

## Non-negotiable brand rules (video)
Full tokens in `references/brand-video.md`. The essentials:

- **Palette (v2.1, light theme):** warm white `#FAFAF7` bg · Olive Green
  `#5E6A3A`/`#7C8654` accents · Light Anthracite `#33373C`/`#6B7075` text ·
  surfaces `#FFFFFF`/`#EFF0EC`. (Replaces the old Navy/Gold/Blue.)
- **Symbol:** Armenian forget-me-not (Անմոռուկ) as a subtle watermark/sting.
- **Type:** display serif (Cormorant / Playfair) + body sans (Montserrat), with
  **Noto Serif/Sans Armenian** fallbacks so AM text renders. Load fonts with
  `@remotion/google-fonts` (bundled, deterministic renders).
- **Tone:** warm, calm, dignified. **Never** funeral-cliché — no dominant black,
  no crosses in frame, no heavy gothic, no gimmicky transitions or fast cuts.
- **Motion:** gentle only — fades and slow slides (300–600 ms), `spring()` with
  soft damping, slow Ken-Burns on photos. No spinning, no flashy wipes.
- **Formats:** Reel/Story `1080×1920` (9:16) · Square `1080×1080` · YouTube
  `1920×1080`. 30 fps. Keep captions inside the safe area (see brand-video.md).
- **Language:** captions in AM/RU/EN/FR as needed; brand name "MemoryCare" is
  never translated (one word, not two).
- **Photos of real graves:** frame them respectfully, dim/soften the background
  behind captions, never plaster text across the headstone.

## Core templates
Ready-to-use Remotion compositions with full code in `references/templates.md`:
1. **`BeforeAfterReport`** — before → after crossfade/wipe + date·GPS lower-third
   + forget-me-not watermark. Props: `beforeSrc, afterSrc, date, coords, place`.
2. **`HolidayGreeting`** — vertical greeting Reel with multilingual message and
   forget-me-not motif. Props: `occasion, message, lang`.
3. **`ServicePromo`** — 15–20 s subscription explainer with tariff cards.

## Workflow
Setup, dev, and render commands are in `references/remotion-setup.md`. In short:

1. **Scaffold** (once): `npm create video@latest` (Blank template) inside a
   `video/` subfolder, or add `remotion` to an existing React app.
2. **Author** the composition (start from a template above).
3. **Preview:** `npx remotion studio`.
4. **Render:**
   `npx remotion render <CompId> out/<name>.mp4 --props='{...}'`
   (add `--codec=gif` for a Slack/preview GIF, or `npx remotion still` for an OG
   image).
5. Deliver the file to the user; log GPS/date props used in the report video.

## Pre-delivery checklist
- [ ] Correct format/aspect for the channel (Reel 9:16, feed 1:1, YT 16:9).
- [ ] Captions inside safe area; readable at phone size (min ~48px at 1080w).
- [ ] Brand palette + forget-me-not present; no funeral clichés.
- [ ] Motion is gentle (300–600 ms, soft springs); no fast cuts.
- [ ] AM/RU/EN/FR text renders (Noto Armenian fallback loaded).
- [ ] Real-grave photos framed respectfully; text never over the headstone.
- [ ] Fonts loaded via `@remotion/google-fonts` (deterministic render).
- [ ] Audio (if any) soft, licensed, and quiet under narration.
