# Claude to Codex: CTR rewrites and query-gap sections (2026-11-07)

Source data: SEO Gets GSC pull, 2026-10-08 to 2026-11-05. Annotation logged in SEO Gets on 2026-11-07 for the first three pages.

## What changed

Commit `a7f32f7`: title, meta description, H1, and Article schema aligned to observed queries.
- `src/pages/conveyor-functions/infeed-outfeed/star-wheel.astro`: baseline 1.22% CTR, pos 5.19. Removed timing screw as a co-topic (H1, intro, schema, FAQ). "What is a timing screw?" FAQ replaced with "What are star wheels made of?" since timing-screw page owns that question.
- `src/pages/conveyor-functions/singulation.astro`: baseline 0.91% CTR, pos 8.13. Title leads with "Singulation Meaning" (top queries are definitional).
- `src/pages/conveyor-functions/metering.astro`: baseline 1.86% CTR, pos 5.93. Title leads with "Metering Belt"; H1 carries both "metering belt" and "metering conveyor".

Commit `a5ac6b1`: `playwright.config.ts` preview command adds `--ignore-lock`. Astro 7 auto-backgrounds `astro preview` when it detects an AI agent, which made `npm test` fail with "webServer exited early" in agent sessions.

Second commit (this note): content added where query data showed a gap.
- `src/pages/components/guide-rails.astro`: new "Guide Rails for Bottle Conveyors" section (condition-to-setup table, bottle changeover rails). Page had ~20 bottle-specific queries at pos 7-35 but only 3 bottle mentions. Title/schema retargeted.
- `src/pages/conveyor-functions/infeed-outfeed/star-wheel.astro`: new "How to Evaluate Star Wheel & Change Parts Suppliers" section (source comparison table, questions to ask). Targets "best star wheels for beverage bottling lines" and "change parts ... vs competitor" queries at pos ~8.
- `src/pages/conveyor-functions/singulation.astro`: "Singulation Methods Compared" table, built only from claims already on the page.
- `src/pages/resources/conveyor-manufacturers.astro`: title and description now use the live directory count ("Conveyor Manufacturers & Companies: 41 Compared"). Baseline 3,248 impressions, 0.06% CTR, pos 24.7. Position is the real limit here; title alone will not fix it.

## Needs review

- New table claims are qualitative. Check the bottle rail table and supplier table against your own sources.
- Re-measure all touched pages around 2026-12-05 against the baselines above.

## Follow-ups

- SEO Gets topic clusters report 0 clicks while content groups show clicks. Cluster mapping needs rework in SEO Gets.
- `internal-linker links` reports every link into `/components/*` as broken. Pages exist in `dist/`; the tool appears to skip `src/pages/components/`. Tool bug, not a site bug.
- Manufacturer hub ranks 21-30 for "conveyor manufacturers / companies / belt conveyor manufacturers". Needs ranking work (depth, links), not more title edits.
- Tray loading (pos 18, 1,271 impr) and reject systems (pos 11, 1,290 impr) are the next near-page-1 candidates.

## Schema refactor (later commit, same day)

- `src/layouts/BaseLayout.astro` now builds FAQPage schema from the visible FAQ accordion (after `id="faq-heading"`) and sets Article `headline` from the H1. Pages no longer define `faqSchema`; do not add it back. Article `headline` in page frontmatter is now ignored.
- Removed `faqSchema` from 113 pages. Before this, schema questions and answers had drifted from the visible FAQ on 69 pages (order, wording, longer answers), which breaks Google's rule that FAQ markup match visible content.
- Three pages had a schema-only question with no visible answer. Each is now a visible accordion item: `low-profile-conveyors.astro`, `pallet-conveyors/index.astro`, `accumulation-conveyors/zero-pressure.astro`.
- Fixed a literal `\'` rendering on the star-wheel FAQ.
