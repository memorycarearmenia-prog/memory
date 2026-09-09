# Design System — "WashOut" Cleaning Service Website (full case)

**Source:** [Behance — Cleaning Service Website](https://www.behance.net/gallery/231912503/Cleaning-Service-Website)
by Al Mehadi Hossain. Full case-study image, 1400×7438px — 8 sections, much more detail than the
Pinterest crop analyzed in `creative cleaner 1`.
**Captured:** 9 September 2026. Colors extracted by pixel-sampling the source image (canvas
quantization) — see `palette.json`.

**Correction to `creative cleaner 1`:** that pass mis-read a low-resolution stat badge as "25K+".
At full resolution there are actually **two separate badges** with different numbers/copy — see
§3 below. Worth knowing before quoting either number as final.

---

## 1. Color palette (confirms + extends creative cleaner 1)

| Role | Hex | Share of full case |
|---|---|---|
| Base / page background | `#FCFCFC` | 38.2% |
| Section tint (lavender-white) | `#F0F0FC` | 12.6% |
| **Primary accent** | `#2484FC` | 8.5% — much higher here because full-bleed blue sections exist (see §5) |
| Deep navy | `#0C2448` | 5.0% — footer + one CTA band |
| Section tint (pale blue) | `#E4F0FC` | 4.3% |
| Section tint (pale cyan) | `#F0FCFC` | 1.2% |
| Card tint | `#D8E4FC` | 1.0% |
| Neutral greys | `#E4E4E4`, `#D8D8D8`, `#CCCCCC` | <1% each — hairlines |

Same system as before, just confirmed at higher confidence: one saturated accent, one deep navy,
everything else a whisper-tint of white. The full case reveals *why* the accent's pixel share
looked low in the homepage-only crop — there are two entire sections built on solid `#2484FC` and
`#0C2448` backgrounds further down the page (§5, §7).

---

## 2. Typography & iconography

- **Headings:** bold, geometric-rounded sans, deep navy `#0C2448` (white on dark sections),
  tight leading — e.g. "Top‑Notch Cleaning Services To Fit Your Budget."
- **Eyebrow labels:** small, uppercase, accent blue, wide letter-spacing, often paired with a thin
  horizontal rule extending from the text — e.g. "OUR SERVICES AND WHAT WE DO ————"
- **Body copy:** regular weight, same sans, grey/slate, notably smaller than headings
- **Icons:** consistent single-weight line-art style (not filled), white-on-blue-circle for feature
  icons, blue-on-white for checklist marks — one icon language throughout, no mixing of styles

---

## 3. Components (named for reuse)

**Pill button with icon cap** — the single most repeated UI element. A rounded/pill button whose
right edge terminates in a circular icon badge that overlaps the pill's edge (e.g. "GET STARTED"
+ a white circle with a compass-like glyph). Appears in three color inversions depending on
context: blue pill / white icon-cap (on white bg), white pill / blue icon-cap (on blue bg),
outlined pill / blue icon-cap (secondary "READ MORE" style). This single component, recolored,
covers every CTA on the site.

**Numbered feature card** — white card, circular icon badge top-left, large pale-grey index numeral
(01–04) top-right, bold title, 2-line grey description, underlined text link (not a button) at the
bottom. Used in a 2×2 grid flanking a central photo.

**Split stat badge** — a small colored square/rectangle overlapping a photo's corner, big number +
short label stacked (e.g. "20+ / YEARS OF SERVICES", "50K+ / CLEANING EXPERTS"). Two different
instances exist with two different numbers — treat as illustrative placeholders, not real KPIs, if
reusing this content.

**Tilted photo card with caption chip** — a photo rotated a few degrees off-grid, with a two-part
caption overlapping its bottom-left corner: a small solid-color label chip ("SHINE") sitting above
a larger white card with the real caption ("Sparkle Squad"). Several of these scattered at
different rotations and depths make up the gallery section — deliberately breaks the grid.

**Solid-color step band** — a full-bleed section painted entirely in the accent blue, holding 2–4
white cards (icon, numeral badge, title, description) connected by a hand-drawn-style dashed path
that curves between them, each card tilted a few degrees independently. This is the site's boldest
move: it's the only section with zero white background showing.

**Tiered pricing row** — horizontal (not card-grid) pricing list: icon, price, plan name + description,
a 3-item checklist, and a pill CTA, all in one row. Three rows stacked; the **middle tier is inverted**
to a solid blue background with white text as the "featured" treatment, while the outer two stay
white/outlined — a cheap, effective way to draw the eye without extra chrome (badges, borders, etc).

**Asymmetric blog grid** — one large featured card (full photo, caption baked into the bottom edge)
beside a stack of smaller cards, each with a pale-blue tint background, a small square photo, an
uppercase category label + date, a bold two-line title, and a **small circular arrow button** in the
top-right corner in place of a text link.

**Footer** — full-bleed deep navy `#0C2448`, three columns (nav links / centered logo+tagline+social
icons / contact details with line-icons), closed off by a wide pill-shaped bar at the very bottom
(reads as a copyright/legal strip, though empty in this mockup).

---

## 4. Layout structure (full page, 8 sections)

1. Nav + hero — logo, 4 links, search icon, pill CTA; headline + subcopy + pill CTA left, layered
   photo pair + stat badge right
2. Services — 2×2 numbered feature cards flanking a center photo with **oversized accent-blue
   headline text bleeding behind it** (a big typographic background layer, partly obscured by the photo)
3. About/support — tabbed content ("Our Support" / "Our Benefits"), checklist, two photos, stat badge,
   faint decorative line-art icon (broom) as background texture
4. Gallery — "Purpose And Performance Goals," 3–4 tilted/scattered photo cards with caption chips,
   a pill CTA centered among them, faint decorative bubble/broom glyphs
5. **Solid-blue step band** — "Our Purpose And Goals In Work," 3 tilted cards on a dashed connecting path
6. Pricing — 3-tier horizontal list, middle tier inverted to solid blue
7. Video panel (stock/placeholder footage) + asymmetric blog grid, "Latest Articles & Blogs"
8. Footer — navy, 3-column

---

## 5. Creative devices worth reusing (updated from creative cleaner 1)

- **One component, three color inversions** — the pill-with-icon-cap button covers every CTA on
  the site just by swapping which half is filled. Cuts the button vocabulary to a single shape.
- **A full-bleed solid-accent section as the page's one loud moment** — everywhere else is white/
  pastel; one section goes all-in on `#2484FC`. That contrast is what makes it register as the
  page's centerpiece rather than just another block.
- **Oversized type as a background layer**, deliberately half-hidden behind a photo — cheap way to
  add scale and texture without a new asset
- **Dashed hand-drawn-style connector paths** between step cards — turns a plain 3-step list into
  a "journey," reinforced by tilting each card at a slightly different angle
- **Middle-tier pricing inversion** instead of a badge/ribbon/border to mark the recommended plan —
  simpler and reads faster
- **Small circular arrow button instead of a text link** on card corners — consistent, compact,
  works at any card size

## 6. Caveats

- The stat badges ("20+", "50K+") and the video section use clearly placeholder content (stock
  footage carries a Storyblocks watermark) — treat all copy/numbers here as example content, not
  a real business's figures, if adapting this for a live site.
- "Read more" is a text link, not a button, in the services grid — don't over-promote it to a pill
  button if replicating this hierarchy; the site deliberately reserves pill buttons for primary actions.
