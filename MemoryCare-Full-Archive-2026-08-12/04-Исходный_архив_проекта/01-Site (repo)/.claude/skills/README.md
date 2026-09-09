# Installed Skills

Claude Code auto-discovers each skill via its `SKILL.md`.

## ui-ux-pro-max plugin

- Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Version: 2.11.0 · License: MIT (see `LICENSE`)

Primary skill `ui-ux-pro-max`, plus companion skills `brand`, `design`,
`design-system`, `ui-styling`, `banner-design`, `slides`.

## design-motion-principles

- Source: https://github.com/kylezantos/design-motion-principles
- License: MIT (see `design-motion-principles/LICENSE`)

Motion & interaction design skill (create + audit modes) based on Emil Kowalski,
Jakub Krehel, and Jhey Tompkins' techniques.

## emilkowalski/skills

- Source: https://github.com/emilkowalski/skills (installed via `npx skills add`)
- Real files in `../../.agents/skills/`, discovered here via symlinks.

`animation-vocabulary`, `apple-design`, `emil-design-eng`,
`find-animation-opportunities`, `improve-animations`, `pick-ui-library`,
`prototype`, `review-animations`.

## taste-skill bundle

- Source: https://github.com/Leonxlnx/taste-skill
- Version: 1.0.0 · License: MIT (see `taste-skill/LICENSE`)

Frontend design-taste skills: `taste-skill` (design-taste-frontend), `taste-skill-v1`,
`brandkit`, `brutalist-skill`, `gpt-tasteskill`, `image-to-code-skill`,
`imagegen-frontend-web`, `imagegen-frontend-mobile`, `minimalist-skill`,
`output-skill`, `redesign-skill`, `soft-skill`, `stitch-skill`.

## llm-council

- Source: https://github.com/aiwithremy/claude-skills-llm-council (no upstream license)

`llm-council` — runs a question/decision through 5 AI advisors that analyze,
peer-review anonymously, and synthesize a verdict (Karpathy's LLM Council method).

## agent-skill-creator

- Source: https://github.com/FrancyJGLisboa/agent-skill-creator
- Version: 6.0.0 · License: MIT (see `agent-skill-creator/LICENSE`)

Skill factory: describe a workflow in plain English → a validated, security-scanned
cross-platform agent skill with evals and an installer. Installed with its
`references/` and `scripts/` (marketing `assets/`+`docs/` omitted).

## marketing-skills bundle (Corey Haines)

- Source: https://github.com/coreyhaines31/marketingskills
- Version: 2.10.0 · License: MIT

49 marketing skills across acquisition, activation, retention, referral & revenue —
e.g. `marketing-plan`, `marketing-ideas`, `marketing-council`, `product-marketing`,
`copywriting`, `copy-editing`, `content-strategy`, `ai-seo`, `programmatic-seo`,
`seo-audit`, `schema`, `site-architecture`, `ads`, `ad-creative`, `cro`, `ab-testing`,
`landing`/`offers`/`pricing`/`paywalls`/`popups`, `emails`/`cold-email`/`sms`,
`social`/`video`/`image`, `influencer-marketing`/`community-marketing`/`co-marketing`,
`referrals`/`prospecting`/`sales-enablement`/`revops`, `analytics`/`attribution`,
`customer-research`/`competitor-profiling`, `churn-prevention`/`onboarding`/`signup`,
`public-relations`/`launch`, and more.

The skills link to integration docs via `../../tools/`, installed at `.claude/tools/`
(`REGISTRY.md` + `integrations/*.md`).

## claude-seo suite (AgriciDaniel)

- Source: https://github.com/AgriciDaniel/claude-seo
- Version: 2.2.4 · License: MIT (see `seo/LICENSE`)

Comprehensive SEO suite — orchestrator `seo` + `seo-technical`, `seo-content`,
`seo-content-brief`, `seo-schema`, `seo-sitemap`, `seo-page`, `seo-plan`,
`seo-cluster`, `seo-local`, `seo-maps`, `seo-geo`, `seo-backlinks`, `seo-drift`,
`seo-ecommerce`, `seo-hreflang`, `seo-sxo`, `seo-images`, `seo-image-gen`,
`seo-google`, `seo-dataforseo`, `seo-programmatic`, `seo-competitor-pages`,
`seo-flow`, + extensions `seo-ahrefs`, `seo-bing`, `seo-firecrawl`, `seo-profound`,
`seo-seranking`, `seo-unlighthouse`.

- **Collision handled:** this suite's `seo-audit` was renamed to
  **`seo-audit-claudeseo`** to preserve the marketing bundle's `seo-audit`.
- Fetcher/report **scripts, data, and schema** live at `.claude/seo-scripts/`,
  `.claude/seo-data/`, `.claude/seo-schema/` (the ~9 script-backed skills call
  them; the plugin's `agents/` and `hooks/` were not installed — not needed for
  skill use).

## superpowers (obra / Jesse Vincent)

- Source: https://github.com/obra/superpowers
- Version: 6.2.0 · License: MIT (see `using-superpowers/LICENSE`)

Core dev-workflow skills: `brainstorming`, `writing-plans`, `executing-plans`,
`test-driven-development`, `systematic-debugging`, `verification-before-completion`,
`requesting-code-review`, `receiving-code-review`, `subagent-driven-development`,
`dispatching-parallel-agents`, `using-git-worktrees`, `finishing-a-development-branch`,
`writing-skills`, `using-superpowers`. Each skill bundles its own `scripts/`.
(The plugin's SessionStart auto-injection `hooks/` were not installed — skills are
still discovered normally; invoke via Skill or `using-superpowers`.)
