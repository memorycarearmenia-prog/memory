# Intake: files received 2026-09-09 (second session)

Received from the user in this session, verified and organized. No changes made to
the site or to prior findings — this is a save/intake pass only, per user request
("проанализируй, сохрани, а потом скажу что делать").

## 1. mc-audit-screenshots (204 PNG + manifest + README)

The 4-part zip delivered by the previous audit session (`HANDOFF-mc-audit-2026-09-09.md`)
came back as an upload. Re-assembled and verified:

- 204 PNG files across `01_public/ 02_account/ 03_forms-and-states/ 04_languages/ 05_responsive/`.
- `manifest.csv`: 204 data rows, matches file count exactly (no gaps, no extras).
- Spot-checked PNGs open correctly (valid PNG headers, expected dimensions — e.g.
  full-page home 1440×5825, account index 1440×1136).
- `README.md` (RU) content unchanged from the handoff doc summary — same coverage,
  same "not captured" list, same observations (payments page open without auth,
  lost language on redirect-to-login, Lorem Ipsum content, 404-stub pages returning
  HTTP 200, package number/title mismatch, etc.)

**Saved to:** `mc-audit-screenshots/` (repo root). This directory is already covered
by `.gitignore` (`mc-audit-screenshots/`), matching the convention set by the prior
session — binary screenshot dumps stay out of git history. **This means the PNGs
live only on this session's ephemeral disk and will NOT survive past this session**
unless you ask me to either (a) commit them anyway (overriding the existing
gitignore convention), or (b) re-deliver them to you as a download so you keep your
own copy outside the repo. Say which you'd prefer.

## 2. Creative-cleaner design references (3 competitor design systems)

Design-system extractions from three cleaning-service website references, produced
by a prior research pass (Pinterest/Behance "WashOut" case by Al Mehadi Hossain, and
an Envato Elements "CleanCore/PureClean" template). Each folder has `design-system.md`
(palette, typography, layout notes) and `palette.json` (raw extracted tokens).

- `1-washout-pinterest/` — accent `#2484FC` on near-white `#FCFCFC`, deep navy `#0C2448`.
- `2-washout-behance-full/` — same system, cross-confirmed on the full case study (higher-res, corrects a misread stat badge from pass 1).
- `3-cleancore-envato/` — different template, iOS-blue accent `#007AFF`, navy `#011A65`, Playfair Display / DM Sans typography; note the source page itself is inconsistent about its own brand name (CleanCore vs PureClean).

**Saved to:** `design/creative-cleaner-references/` (committed — small text/JSON, no binaries).

## 3. Armenian-supporting fonts (3 families)

- **Montserrat Armenian** — original Google-Fonts Montserrat (variable + 18 static weights, OFL) plus a separate Armenian-glyph companion cut, `Montserratarm-*.otf` (9 weights, Black→Thin).
- **Noto Sans Armenian** — 9 weights (Thin→Black), OFL licensed.
- **GHEA Mariam** — 4 styles (Regular, Bold, Italic, Bold Italic), Armenian-specific serif/humanist face.

**Saved to:** `assets/fonts/{montserrat-armenian,noto-sans-armenian,ghea-mariam}/` (committed).
Each retains its original license file (`OFL.txt` / `LICENSE_OFL.txt`) where provided —
GHEA Mariam's zip did not include one; check licensing before shipping it if that matters.

## Not yet decided (waiting on you)

- Whether the 204 screenshots should be committed to git despite the existing
  gitignore convention, or handled some other way.
- What to do with the 3 competitor design references and 3 font families — e.g.
  apply one as the new site design system, pick a font pairing, etc.
- Nothing from the audit's findings list has been acted on (no code/site changes).
