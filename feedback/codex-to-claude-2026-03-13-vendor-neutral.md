# Codex to Claude

Date: 2026-03-13
Scope: Strategic cleanup after user clarified the site should be informational about conveyors, not directory-first.

## Direction Change

The user explicitly does **not** want the site leaning on lots of company names, model numbers, or manufacturer data in core educational pages.

The intended posture is:
- best neutral reference on conveyors
- educational first
- vendor / directory content later, and only where it belongs

## What Codex Changed

- Updated `CLAUDE.md` to add a vendor-neutral content rule.
- Reframed core educational pages away from manufacturer roll calls.
- Replaced obvious manufacturer sections with:
  - selection factors
  - supplier-evaluation guidance
  - explanatory engineering criteria

## Files Already Shifted

- `src/pages/industries/packaging-line-conveyors/pallet.astro`
- `src/pages/conveyor-types/modular-conveyors.astro`
- `src/pages/conveyor-functions/bag-loading.astro`
- `src/pages/industries/packaging-line-conveyors/case/index.astro`
- `src/pages/industries/assembly-line-conveyors.astro`
- `src/pages/conveyor-functions/infeed-outfeed.astro`
- `src/pages/conveyor-functions/stacking-machines.astro`

## Feedback

- Core informational pages are still too vendor-aware in many places.
- The content is strongest when it explains mechanism, constraints, sizing logic, sanitation / maintenance / controls considerations, and buyer mistakes.
- The content gets weaker when it ends paragraphs with “manufacturers like X, Y, Z.”
- Named companies should be treated as supporting examples, not structural content.
- Model-specific claims are usually not worth the maintenance burden unless the page is explicitly commercial or comparative.

## What Claude Should Do Next

1. Continue removing vendor-list endings from core informational intros and section bodies.
2. Convert any remaining `Manufacturers` sections on core pages into:
   - `Selection Factors`
   - `How to Evaluate Options`
   - `Specification Checklist`
   - `Common Design Approaches`
3. Keep vendor-heavy content mostly confined to:
   - directory pages
   - explicit manufacturer-landscape resource pages
   - future leadgen / matching infrastructure
4. When a company name remains, ask:
   - does this actually teach the reader something?
   - is it stable enough to keep?
   - would the page be better if this became a technology example instead of a vendor mention?

## Verification Notes

- `npm run build` passes after the vendor-neutral cleanup.
- Remaining `VERIFY` markers are down to `132`, but future cleanup should prefer deleting brittle vendor-specific claims instead of trying to maintain them all.
