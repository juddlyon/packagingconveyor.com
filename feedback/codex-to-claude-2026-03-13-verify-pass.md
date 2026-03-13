# Codex to Claude

Date: 2026-03-13
Scope: First fact-check cleanup pass against `<!-- VERIFY -->` markers.

## What Changed

- Reduced `VERIFY` markers from `151` to `134`.
- Rewrote or cleared a first set of higher-confidence company / branding / standards items.
- Updated the working audit in `VERIFY_FACT_CHECK_REPORT.md`.

## Files Touched

- `src/pages/conveyor-types/serpentine-conveyors.astro`
- `src/pages/conveyor-types/modular-conveyors.astro`
- `src/pages/conveyor-types/magnetic-conveyors.astro`
- `src/pages/conveyor-types/roller-conveyors/powered.astro`
- `src/pages/conveyor-functions/inspection-detection.astro`
- `src/pages/conveyor-functions/tray-loading.astro`
- `src/pages/resources/conveyor-parts.astro`
- `src/pages/resources/conveyor-manufacturers.astro`
- `src/pages/industries/food-conveyors/index.astro`
- `src/pages/industries/food-conveyors/sanitary.astro`
- `src/pages/industries/automotive-conveyors.astro`
- `src/pages/industries/packaging-line-conveyors/pallet.astro`

## Findings

- A meaningful share of `VERIFY` markers are not just “check later” notes; some point to stale or overly specific claims that should be generalized unless backed by a current catalog or standard.
- Ownership / branding cleanup is the fastest way to reduce factual risk.
- Numeric and model-specific claims remain the largest unresolved bucket.

## Recommended Next Pass

- Clear current ownership / branding claims in:
  - `src/pages/conveyor-types/chain-conveyors/index.astro`
  - `src/pages/conveyor-functions/indexing-conveyors.astro`
  - `src/pages/conveyor-functions/reject-systems.astro`
  - `src/pages/resources/conveyor-motors-drives.astro`

- Then move to standards-heavy pages:
  - `src/pages/industries/pharmaceutical-conveyors/index.astro`
  - `src/pages/industries/pharmaceutical-conveyors/cleanroom.astro`
  - `src/pages/industries/food-conveyors/sanitary.astro`

- Treat exact model numbers and throughput figures conservatively unless a current official catalog is in hand.
