# Design System — "WashOut" Cleaning Service Website

**Source:** Pinterest pin [11188699074920785](https://www.pinterest.com/pin/11188699074920785/) →
Behance case "Cleaning Service Website" by Al Mehadi Hossain.
**Captured:** 9 September 2026. Colors extracted by pixel-sampling the source image directly
(canvas quantization), not eyeballed — see `palette.json` for raw counts.

---

## 1. Color palette

| Role | Hex | Usage |
|---|---|---|
| Base / page background | `#FCFCFC` | Dominant ground (~28% of pixels) — near-white, not pure `#FFFFFF` |
| Body / muted text | `#546078` | Slate blue-grey — paragraph copy, secondary labels |
| Section tint 1 (lavender-white) | `#F0F0FC` | Alternating section background |
| Section tint 2 (pale blue) | `#E4F0FC` | Alternating section background, icon-badge fills |
| Section tint 3 (pale cyan) | `#F0FCFC` | Rare accent section |
| **Primary accent** | `#2484FC` | Buttons, links, active icons — the one saturated color in the system |
| Deep navy | `#0C2448` | Headings, footer background — the anchor dark |
| Card tint | `#D8E4FC` / `#D8F0FC` | Icon circle fills, light card backgrounds |
| Neutral borders/greys | `#CCCCCC`, `#E4E4E4`, `#D8D8D8` | Hairlines, dividers |

**The core move:** one saturated accent (`#2484FC`) against a field of near-white and *barely-there*
pastel tints (all within ~10–15 points of white in each channel — `#F0F0FC`, `#E4F0FC`, `#F0FCFC`).
Sections are distinguished by these whisper-tints rather than hard borders, which is what gives the
page its "airy," low-contrast rhythm. Deep navy (`#0C2448`) is used sparingly — headings and the
footer only — as the one true dark note.

**Not part of the system:** the yellow rubber gloves / buckets in the photography read as a strong
accent visually, but pixel-sampling confirms they don't show up in the top color frequencies —
they're photographic content, not a picked brand color. Worth noting because it's an easy thing to
misread as "the brand uses yellow."

---

## 2. Typography (visual impression — exact family not confirmed)

- **Headings:** bold, geometric-leaning sans, dark navy (`#0C2448`), tight leading, sentence case
  ("Economical Cleaning Services For All.")
- **Body:** regular weight, same sans family, slate-grey (`#546078`), noticeably smaller and lighter
  than headings — strong size contrast between the two roles, no serif anywhere
- **Buttons/UI labels:** same sans, medium weight, all-lowercase or sentence case, never uppercase

---

## 3. Layout structure (top to bottom)

1. **Nav** — logo left, inline links center, pill-shaped CTA button + search icon right, white bar
2. **Hero** — headline + subcopy + CTA pill on the left; a large photo on the right with a **second,
   smaller photo layered/overlapping its bottom-left corner** (layered photography, not a single flat image)
3. **Services** — "Excellence At The Core Of Our Services" — 2×2 icon-led feature list: circular
   pale-blue icon badge + bold label + one-line description, alternating with a tall service photo
4. **Pricing/value block** — tinted section background, photo + copy + a **floating stat badge**
   ("25K+") overlapping the photo corner — a common trust-signal device
5. **Gallery ("Purpose And Performance Goals")** — photos arranged **scattered and slightly rotated**,
   polaroid-style, breaking the grid deliberately for a more human, less corporate feel
6. **Process cards** — a row of small rotated/fanned cards ("Our Purpose And Content Work")
7. **Pricing toggle** — "Easiest Pricing To Fit Your Budget," monthly/yearly switch, card-based tiers
8. **Video/testimonial block** — dark image panel with a play button
9. **Blog teaser** — "Latest Articles & Blogs," card row
10. **Footer** — full-width deep navy (`#0C2448`), closing the page on the one saturated dark note

---

## 4. Creative devices worth reusing

- **Layered/overlapping photography** instead of single flat hero images (small photo tucked over
  the corner of a larger one) — reads as more dynamic without needing illustration
- **Rotated "scattered" photo cards** in the gallery section — deliberately breaks the grid for
  warmth; works well for a service business that wants to feel human, not corporate
- **Floating stat badges** overlapping photo edges (the "25K+" bubble) — cheap, effective trust signal
- **Whisper-tint section backgrounds** instead of borders/dividers to separate content blocks —
  keeps the page feeling like one continuous surface rather than stacked boxes
- **One accent color discipline** — every other color in the system is either near-white, a pale
  tint of the accent, or the one deep navy. Nothing else competes for attention.

---

## 5. If reusing this system

- Keep the accent to **one** saturated hue — the whole effect collapses if a second bright color
  (e.g. the incidental yellow from photography) gets promoted into the UI itself
- Pastel section tints should stay within ~10–15 points of white per channel — anything more
  saturated starts reading as its own section color rather than a soft rhythm shift
- Layered/rotated photography is the signature move here — a straight single hero image would lose
  most of what makes this feel distinctive
