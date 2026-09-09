# MemoryCare — video brand tokens (v2.1 · light theme)

Shared TypeScript tokens — import into every composition so brand stays consistent.
Palette v2.1: **Olive Green + Light Anthracite + White** (light, organic — matching
the olive line-art emblem). No navy/gold/lilac.

```ts
// src/brand.ts
export const COLORS = {
  paper:      '#FAFAF7',  // main background (warm white)
  surface:    '#FFFFFF',  // cards
  band:       '#F2F2EE',  // section band
  ink:        '#33373C',  // text (light anthracite)
  inkMut:     '#6B7075',  // muted text
  line:       '#E3E4DF',  // borders
  olive:      '#5E6A3A',  // accent / brand
  oliveLight: '#7C8654',  // light olive / hover
};

export const GRAD_OLIVE = `linear-gradient(135deg, ${COLORS.oliveLight}, ${COLORS.olive})`;

// Formats (px). 30 fps everywhere.
export const FORMAT = {
  reel:   { width: 1080, height: 1920 },  // 9:16 Reels / Stories / TikTok
  square: { width: 1080, height: 1080 },  // 1:1 feed
  wide:   { width: 1920, height: 1080 },  // 16:9 YouTube
};

// Safe area for 9:16 (keep text/logos inside — avoids IG UI overlap).
// top ~14% (profile), bottom ~18% (caption/CTA), sides ~6%.
export const SAFE_9x16 = { top: 260, bottom: 340, side: 64 };

export const FPS = 30;
```

## Type scale (1080-wide canvas)
- Display / headline: 96–140px, serif (Cormorant/Playfair → Noto Serif Armenian).
- Subhead: 52–64px, sans (Montserrat → Noto Sans Armenian), weight 500–600.
- Caption / lower-third: 40–48px, sans, letter-spacing +0.02em.
- Never below ~40px on a 1080-wide canvas (unreadable on phones).

## Motion rules
- Fades: 300–500 ms (9–15 frames @30fps). Slides: 400–600 ms.
- Photos: slow Ken-Burns (scale 1.0 → 1.06 over the shot), never fast zoom.
- Use `spring({fps, frame, config:{damping:200}})` for soft, non-bouncy easing.
- Stagger reveals by ~5–8 frames. No spins, no whip-pans, no strobe.
- Always hold the final frame ~1 s before the end.

## Forget-me-not watermark
Place the SVG emblem (the site uses it in `index.html`) bottom-corner at ~10%
opacity, or as a 0.5 s intro/outro sting fading in olive on white. Keep it small
and quiet — a mark of authorship, not a billboard.

## Audio
Optional, soft, licensed (e.g. gentle piano/strings, ‑18 LUFS or quieter under
any narration). Never somber funeral organ. Many Reels are watched muted — the
video must fully work with **no sound** (all meaning in the visuals/captions).

## Multilingual captions
Keep one language per cut (don't stack 4 languages on screen). Provide separate
renders per language when needed by passing a `lang` prop (`hy`/`ru`/`en`/`fr`).
Brand name "MemoryCare" stays in Latin, untranslated (one word).

## Occasions (diaspora greeting calendar)
- **Զատիկ / Easter** — spring, light, renewal.
- **Վարդավառ / Vardavar** — water/summer festival, warm.
- **Memorial / Merelots days** — remembrance, gentle and restrained.
- Genocide Remembrance Day (Apr 24) — the forget-me-not is *the* national
  symbol here; handle with maximal restraint and dignity.
