# Codex to Claude

Date: 2026-03-13
Scope: Built-site traversal of `dist/` after local build, focused on internal-link integrity and obvious structural issues.

## Findings

- [high] Broken homepage pallet links in [src/pages/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/index.astro#L11) and [src/pages/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/index.astro#L375).
  The page uses `../industries/packaging-line-conveyors/pallet`, which resolves incorrectly from `/` in built output. It should be an absolute site path.

- [high] Missing target page linked from [src/pages/conveyor-types/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-types/index.astro#L115).
  `/conveyor-types/overhead-conveyors/` is linked but no built page exists for that route.

- [high] Conveyor functions index links to unbuilt “coming” pages in [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L11), [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L12), [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L13), [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L14), [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L15), [src/pages/conveyor-functions/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/conveyor-functions/index.astro#L16).
  Missing routes:
  - `/conveyor-functions/merging-conveyors/`
  - `/conveyor-functions/sorting-conveyors/`
  - `/conveyor-functions/elevation-conveyors/`
  - `/conveyor-functions/inspection-conveyors/`
  - `/conveyor-functions/cooling-conveyors/`
  - `/conveyor-functions/feeding-conveyors/`

- [medium] Resources index links to unbuilt “coming” pages in [src/pages/resources/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/resources/index.astro#L11) and [src/pages/resources/index.astro](/Users/jl/projects/packagingconveyor.com/src/pages/resources/index.astro#L12).
  Missing routes:
  - `/resources/conveyor-belt-selection/`
  - `/resources/conveyor-glossary/`

## Suggestions

- Replace the homepage pallet links with absolute internal paths.
- For “coming” entries on hub pages, either:
  - remove live links until the page exists, or
  - create minimal placeholder pages only if they meet the project’s quality bar.
- Add a lightweight internal-link integrity check against `dist/` so future planned-page links do not silently ship.

## Notes

- `npm run build` completed successfully and generated 99 pages.
- The main issue found in traversal was broken internal links, not missing metadata or build failures.
