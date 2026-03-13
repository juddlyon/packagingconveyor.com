# VERIFY Fact Check Report

Generated: 2026-03-13

## Summary

This repo originally contained **151** `<!-- VERIFY: ... -->` markers across `src/pages/**`.

After the first cleanup passes in this report, the remaining count is **134**.

This pass did three things:

1. audited the full inventory of `VERIFY` markers
2. grouped them by risk / verification type
3. verified a first set of higher-risk current-company, branding, and standards claims

This is **not a complete closeout of all 151 markers**. It is a structured first pass so future verification work can proceed without rediscovering the scope.

## Cleanup Progress

Cleared or rewritten in this pass:

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

## Inventory By Type

- `numeric/spec`: 36
- `product/model`: 33
- `company/brand`: 30
- `standards/regulatory`: 18
- `other`: 34

## Highest-Risk Verified Items

### Confirmed

- **Hartness is part of ITW**
  - Marker: `src/pages/conveyor-types/serpentine-conveyors.astro:181`
  - Status: confirmed
  - Notes: Hartness is presented by Illinois Tool Works as an ITW business.

- **Gebo Cermex is part of Sidel / Tetra Laval**
  - Marker: `src/pages/conveyor-types/serpentine-conveyors.astro:182`
  - Status: confirmed
  - Notes: Current Gebo Cermex branding sits within Sidel, which is part of Tetra Laval.

- **PACCAR is the parent of Kenworth and Peterbilt**
  - Marker: `src/pages/conveyor-types/monorail-power-free.astro:174`
  - Status: confirmed
  - Notes: PACCAR’s brand portfolio includes both Kenworth and Peterbilt.

- **Ammeraal Beltech and uni-chains are under the AMMEGA / Megadyne group structure**
  - Marker: `src/pages/conveyor-types/modular-conveyors.astro:186`
  - Status: confirmed in substance
  - Notes: The older phrasing should probably be updated to current AMMEGA group branding instead of older Megadyne-only framing.

- **Bunting Magnetics headquarters in Newton, Kansas**
  - Marker: `src/pages/conveyor-types/magnetic-conveyors.astro:104`
  - Status: confirmed

- **Norland International location in Lincoln, Nebraska**
  - Marker: `src/pages/conveyor-types/magnetic-conveyors.astro:135`
  - Status: confirmed

- **Eagle Product Inspection is part of Mettler-Toledo**
  - Marker: `src/pages/conveyor-functions/inspection-detection.astro:130`
  - Status: confirmed

- **BluePrint Automation remains a ProMach brand**
  - Marker: `src/pages/conveyor-functions/tray-loading.astro:360`
  - Status: confirmed

- **Bastian Solutions remains part of Toyota Advanced Logistics**
  - Marker: `src/pages/industries/packaging-line-conveyors/pallet.astro:351`
  - Status: confirmed

- **Key Technology still includes Iso-Flo**
  - Marker: `src/pages/industries/food-conveyors/index.astro:413`
  - Status: confirmed

- **3-A sanitary surface finish requirement commonly references 32 microinch / 0.8 um Ra for product contact surfaces**
  - Markers:
    - `src/pages/industries/food-conveyors/index.astro:135`
    - `src/pages/industries/food-conveyors/sanitary.astro:270`
  - Status: broadly confirmed
  - Notes: Exact phrasing should be checked against the specific current 3-A standard language used by the page.

- **Bucket elevator dust standards under NFPA 61 and NFPA 652 are applicable**
  - Marker: `src/pages/conveyor-types/bucket-elevators.astro:241`
  - Status: confirmed in substance
  - Notes: The exact compliance language should be aligned to current NFPA wording and scope.

## Likely Incorrect Or Needs Rewrite

- **Fowler Products location in Fowler, Indiana**
  - Marker: `src/pages/conveyor-types/magnetic-conveyors.astro:134`
  - Status: treated as stale and removed from page copy
  - Notes: The page was rewritten to avoid carrying a weakly supported location claim.

- **Megadyne-only parent-company phrasing for Ammeraal Beltech / uni-chains**
  - Marker: `src/pages/conveyor-types/modular-conveyors.astro:186`
  - Status: corrected
  - Notes: Updated to current AMMEGA framing.

- **Baldor/Dodge grouped together under ABB**
  - Marker: `src/pages/resources/conveyor-parts.astro:286`
  - Status: corrected
  - Notes: Rewritten to separate Baldor Reliance (ABB) from Dodge.

- **Eaglestone headquarters listed as Bridgeton, NJ**
  - Marker: `src/pages/resources/conveyor-manufacturers.astro:295`
  - Status: corrected
  - Notes: Updated to Naperville, IL.

## Highest-Priority Remaining Verification Buckets

These should be checked next because they affect trust, legal exposure, or obvious factual drift:

1. **Current ownership / branding / parent-company claims**
   - examples:
     - `src/pages/resources/conveyor-parts.astro:286`
     - `src/pages/industries/automotive-conveyors.astro:105`
     - `src/pages/resources/conveyor-manufacturers.astro:295`
     - `src/pages/conveyor-functions/indexing-conveyors.astro:168`

2. **Current product and model names**
   - examples:
     - `src/pages/conveyor-functions/reject-systems.astro:260`
     - `src/pages/conveyor-functions/reject-systems.astro:269`
     - `src/pages/industries/packaging-line-conveyors/case/index.astro:105`
     - `src/pages/industries/packaging-line-conveyors/case/index.astro:106`
     - `src/pages/conveyor-types/mdr-conveyors.astro:279`

3. **Current standards / regulatory exactness**
   - examples:
     - `src/pages/industries/food-conveyors/sanitary.astro:146`
     - `src/pages/industries/pharmaceutical-conveyors/index.astro:142`
     - `src/pages/resources/conveyor-maintenance.astro:139`
     - `src/pages/resources/conveyor-motors-drives.astro:260`

4. **Numeric performance claims that need manufacturer catalogs**
   - examples:
     - `src/pages/conveyor-types/mdr-conveyors.astro:101`
     - `src/pages/conveyor-types/vertical-reciprocating.astro:217`
     - `src/pages/industries/mining-conveyors.astro:171`
     - `src/pages/industries/food-conveyors/beverage.astro:332`
     - `src/pages/industries/packaging-line-conveyors/pallet.astro:343`

## File Concentration

Pages with the highest number of `VERIFY` markers:

- `src/pages/industries/food-conveyors/index.astro` — 6
- `src/pages/industries/packaging-line-conveyors/pallet.astro` — 6
- `src/pages/industries/food-conveyors/sanitary.astro` — 5
- `src/pages/conveyor-functions/tray-loading.astro` — 4
- `src/pages/industries/food-conveyors/bakery/index.astro` — 4
- `src/pages/conveyor-types/diverting-merging/sortation.astro` — 4
- `src/pages/conveyor-types/chain-conveyors/index.astro` — 4

## Recommendation

Do not try to clear all `VERIFY` markers in random order.

Work in this sequence:

1. company ownership / branding
2. current product and model names
3. standards and compliance language
4. numeric performance / throughput / load claims

That order removes the highest factual-drift risk first.
