# Shared Issues

## Open

- SEO Gets topic clusters show 0 clicks for packagingconveyor.com while content groups show clicks. Remap clusters before using cluster reports (2026-11-07).
- `internal-linker links` false-positives every link into `/components/*`. Tool skips `src/pages/components/` (2026-11-07).
- CTR rewrites on star-wheel, singulation, metering, guide-rails, conveyor-manufacturers shipped 2026-11-07. Re-measure ~2026-12-05 (baselines in `feedback/claude-to-codex-2026-11-07-ctr-rewrites.md`).
- Some repo messaging still mixes editorial-resource positioning with future leadgen language. Review before turning on stronger commercial CTAs.

## Resolved (2026-03-16)

- ~~6 orphan content pages (bag-loading, buffer, low-profile, monorail, portable, washdown)~~ Fixed: linked from contextually relevant parent/sibling pages.
- ~~Weak internal cross-linking across functions, types, resources~~ Fixed: 101 internal links added via internal-linker + manual fixes.

## Resolved (2026-03-14)

- ~~Broken internal links for coming-soon pages~~ Fixed: orphan pages connected to hubs, coming-soon links removed or pages built.
- ~~Homepage pallet link resolving incorrectly~~ Fixed: now uses absolute path.
- ~~No internal-link integrity check~~ Addressed: `internal-linker` CLI tool used for auditing. Consider adding to CI.
