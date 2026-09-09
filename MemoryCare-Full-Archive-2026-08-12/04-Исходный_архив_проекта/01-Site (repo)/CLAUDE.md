# Memory Care — website project context

This file is auto-loaded by Claude Code at the start of every session in this
repo. It is the source of truth for brand, pricing, and copy facts. If a file
in this repo (old component, old copy) disagrees with this file, **this file
wins** — flag the mismatch to the user instead of trusting the stale code.

> **Note on related docs (merged from a parallel branch, 2026-08-02):**
> `docs/BUSINESS-CONTEXT.md` (public, non-confidential brand/product
> reference) and a local, account-level `memory-care-project` skill
> (confidential financials/ops, not in this repo) cover overlapping ground.
> This file, `docs/BUSINESS-CONTEXT.md`, and `docs/site-update-prompt.md`
> were reconciled to agree as of 2026-08-02 (slogan, pricing, universal
> audience). If a future edit touches brand/pricing/copy facts, **update all
> three** — don't let this file drift from the others again.

## What this business is

Memory Care LLC (Armenia) — a premium subscription service for cleaning,
monitoring, and light repair of family graves/memorial plots, with verified
photo/video reporting. Plus an add-on: a QR code on the headstone linking to
a digital memory page (gallery + biography + family-only guestbook).

**Audience — BOTH segments equally, not diaspora-first (corrected 2026-08-01):**
(1) Armenian diaspora (US, France, Russia, Europe) — emotional driver:
relieving the guilt of distance. (2) Local premium segment in Yerevan —
rational driver: lack of time, not distance. ⚠️ An earlier draft of the
site (hero, problem section, price-comparison section) was written
100% diaspora-only ("across the miles," "cheaper than flying yourself"),
which reads as excluding local Armenian readers entirely — flagged by the
user 2026-08-01. Fix pattern: universal headline that leads with the
**outcome** ("cared for even when you can't be there yourself") rather
than the cause, then subheadline/body names **both** reasons (distance OR
local busy schedule) in one natural sentence each. One brand, one page —
do NOT split into a diaspora version and a local version. Full rewritten
copy (hero/problem/comparison/trust/FAQ, all 4 languages) is in
`docs/site-update-prompt.md`.

**Tone:** premium, warm, dignified. NOT somber/funeral-cliché, NOT generic
corporate. Think "quiet trust and craftsmanship," not "grief industry."

## Brand identity (do not deviate without the user's explicit sign-off)

- Name: **MemoryCare** (one word, mixed case — "Memory" + "Care", per the
  live logo asset). Do NOT use "MEMORY CARE" (two words, all caps) —
  that was an earlier/incorrect assumption, corrected by the user
  2026-08-01.
- **Slogan — FINALIZED 2026-08-01 (supersedes any earlier value, including
  "Love Knows No Borders..." which is now RETIRED — diaspora-coded, do not
  use):** **"The care that matters."** (EN, primary/untranslated brand
  signature). Originated from the user's own Armenian phrasing during the
  audience correction above. Localized lines:
  - HY: «Խնամքը, որը կարևոր է» *(originated this phrasing)*
  - RU: «Уход, который по-настоящему важен.»
  - FR: «Le soin qui compte.»
  Chosen specifically for being short, neutral (zero distance/border
  language) and tied to the brand name (Memory**Care**) — reads the same
  for a local Yerevan client and a diaspora client.
- Symbol — **CORRECTED 2026-08-02, FINAL (the owner sent the two source
  components separately as the эталон — `assets/brand/
  forget-me-not-reference.jpeg` and `assets/brand/
  eternity-symbol-reference.jpeg` — any other description in this repo
  that conflicts with these two images is wrong and must be fixed on
  sight; also see the combined `assets/brand/logo-reference.jpeg`):**
  the logo has exactly **two components**. (1) The Armenian
  **forget-me-not (Անմոռուկ)** — 5 rounded petals, a center of fine
  radiating stamens. (2) The Armenian **symbol of eternity (Հավերժություն
  / aravakhach)** — the classic 8-blade interlocking pinwheel with a
  scalloped (wavy) circular outer edge and a small circular opening at
  the centre. The forget-me-not sits **in front of** the eternity symbol,
  and the eternity symbol sits **between two open hands**. **Do NOT
  describe the eternity symbol as "rings," a "ring swirl," or "woven
  rings" — the owner explicitly rejected that wording 2026-08-02.** Two
  earlier same-day passes both got this wrong in different ways: one
  called the eternity symbol "not really an eternity symbol, just rings
  with no meaning"; a walk-back then called it "an eternity symbol
  rendered as woven rings." Both are wrong — it is the eternity symbol,
  drawn as the pinwheel-with-scalloped-edge shown in the reference image,
  not rings of any kind.
- Colors (corrected by user 2026-08-01 — **do not revert to the old
  Midnight Navy / Antique Gold / Celestial Blue scheme, ever**):
  - **Olive green** — primary accent (buttons, active nav state, "most
    chosen" badge, checkmarks, highlighted headline word)
  - **Light anthracite** — primary text color and dark card/surface fills
    (e.g. the highlighted pricing card uses a near-black anthracite
    background)
  - **Imperfect white** (warm off-white, not pure `#FFFFFF`) — page
    background
  - Exact hex values aren't pinned down yet — pull them from the live
    site's CSS (see below) rather than eyeballing from screenshots when
    precision matters.
- **Languages — CONFIRMED 4-way: ARM / ENG / RUS / FRA** (resolved
  2026-08-01; the "ARM/ENG/RU"-only mentions elsewhere in this file were
  stale — FR is in scope). All languages must carry real translated copy,
  not decoration; `docs/site-update-prompt.md` has real (non-native-
  reviewed — recommend a native read-through before publishing) HY/FR
  translations for the newest copy blocks. Mobile-first: diaspora traffic
  is majority mobile.

**Live reference site:** deployed at `memorycarearmenia.netlify.app`
(confirmed live 2026-08-02) — its actual source is an external design tool
("Claude Design" per the user), **not this repo's `index.html`** (this
repo's `index.html` is a parallel/reference build, kept for design-system
exploration — the two can drift; don't assume `index.html` matches the
live site without checking). The live site implements: the corrected
name/colors/logo, the 4-language switcher, hero, pricing cards, a
before/after slider, and a "Family stories" section referencing the 10
completed discovery interviews. As of 2026-08-02 it has been updated with
the universal-audience copy, flat pricing, and new slogan from
`docs/site-update-prompt.md` — verify against the live site before further
copy edits rather than assuming this file is current.

## Pricing — locked, do not change without explicit instruction

| Tariff | AMD | Visits/yr | Notes |
|---|---|---|---|
| Экспресс (разовый) | 80,000 ֏ | 1 (single heavy visit) | entry/trial |
| Оптимальный | 180,000 ֏ | 6 (2 heavy + 4 light) | **bestseller — mark visually** |
| Максимум | 240,000 ֏ | 12 (4 heavy + 8 light) | premium tier |

~~Plot-size rule: base covers up to 16 m². Over that: +$20/m² (local
clients) or +$30/m² (diaspora clients).~~ **REMOVED 2026-08-01 — no
plot-size surcharge and no local/diaspora price difference anywhere.**
All three tariffs are a flat single price for every client, full stop. May
be reconsidered ~6 months post-launch (terms TBD). ⚠️ **Internal only, do
NOT surface on the site (no disclaimer, no FAQ):** for the first ~6 months,
oversized plots (e.g. ~40 m²) are handled by the company either absorbing
the extra cost or negotiating individually per client.

Currency calculator: AMD/USD/EUR/RUB, interactive (not a static table).
Static reference rates are fine for now (mark "ориентировочно" /
approximate); live FX API is a later upgrade, not required for launch.

## Site sections (already scoped, keep unless user changes it)

1. Hero — emotional offer + GPS/verified-reporting visual
2. Тарифы — 3 tariffs above + multi-currency calculator
3. Галерея «До/После» — before/after slider(s), each with a date + GPS tag
4. Как это работает — subscribe → visits → photo report. **No QR mention —
   the QR memory page is a Year-2 product, entirely out of Year-1 site
   scope** (not even as "optional"; corrected 2026-08-01).
5. Блок доверия — verification, regularity, transparency, aimed at both
   audiences (not diaspora-only trust signals; see audience note above)
6. Language switcher ARM/ENG/RUS/FRA
7. Clear CTA to subscribe (universal — "book a free visit," not diaspora-
   specific)

## Known open TODOs (do not consider the site launch-ready until closed)

1. Real geo-tagged before/after photos — currently placeholders.
2. Real phone number — currently a placeholder `+374 10 00 00 00`.
3. Professional email on the `memorycare.am` domain (e.g. `info@memorycare.am`)
   — currently a Gmail address, which undercuts the premium positioning.
4. ~~Verify the forget-me-not logo mark against the original brand-brief
   asset~~ — done 2026-08-01, user provided the real logo. ~~Get the
   actual logo file into the repo~~ — done 2026-08-02, saved as
   `assets/brand/logo-reference.jpeg` plus the two source components
   separately, `assets/brand/forget-me-not-reference.jpeg` and
   `assets/brand/eternity-symbol-reference.jpeg` (эталон — treat these
   files as the ground truth over any text description). The site's SVG
   emblem (`index.html`, `docs/uniform-prototype.html`) has been redrawn
   as an 8-blade interlocking pinwheel with a scalloped outer edge (the
   actual eternity-symbol geometry, NOT rings — see the corrected Symbol
   note above, 2026-08-02), with the forget-me-not in front and two hands
   cradling it. It's a hand-built SVG approximation, not a traced vector
   — a proper SVG/PNG export of the real logo (all color variants) is
   still worth getting for production use.
5. Confirm mobile view actually matches the desktop design quality —
   mobile is the primary channel for this audience.
6. Confirm ENG/RU/ARM/FRA copy is real translated content — the live site's
   full `t{}` translation object was audited 2026-08-01 (82–110 keys per
   language, all real, no placeholders) and is largely solid. The
   audit found real language/tone issues to still fix: (a) CTA/FAQ copy
   used «интервью»/"interview" for the free consultation across all 4
   languages — should read as "consultation," not a job interview (FR
   especially: "entretien" ambiguously also means "upkeep/maintenance" —
   confusing on a maintenance-service site); (b) the hero/hero-adjacent
   copy is the diaspora-only-audience issue noted above; (c) HY/FR
   translations for the NEW copy in `docs/site-update-prompt.md` are
   mine (Claude's), not native-reviewed — get a native read-through
   before publishing.
7. Live FX API — nice-to-have, not blocking. Can bundle with the payment/CRM/
   Telegram-bot integration work.
8. **Customer-interview survey** — built and deployed separately via Claude
   Design (per commit `cd0dc7c`, 2026-08-01). Purpose likely: the
   diaspora-validation interviews recommended by the LLM Council review
   (see `docs/BUSINESS-PLAN-v2.1.md` Ch. 16, confidential/local-only) —
   confirm this is what it's for and track results here once available.

## Things NOT to invent

- Don't invent client testimonials, review counts, or "X families trust us"
  stats — the company is pre-launch (pilot paused, 10 discovery interviews
  done, no live customers yet). Use aspirational/process-trust copy instead
  ("verified visits," "GPS-tagged reports"), not fabricated social proof.
- Don't add pricing tiers, discounts, or visit counts beyond the table above
  without the user confirming it first.
