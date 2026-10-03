# 2026-10-02: Sourcing round 2 and Bing gap pages (deployed)

## Changed
- Sourcing pass on the remaining 82 pages. Numbers are sourced (inline links plus a Sources section) or qualified. FAQ schema synced. Manufacturer sections replaced with "How to Evaluate" sections.
- Major factual fixes:
  - USDA equipment acceptance has been voluntary since 1997 (4 pages said it was required).
  - IP69K: wrong standard cited, and wrongly said to be required by USDA or 3-A.
  - CDLR does accumulate, and its capacity is rated per foot.
  - VRC throughput was overstated about 30x.
  - Serpentine FAQ capacity was 10x too high.
  - Fan cube law misapplied to conveyors.
  - Bump-turn definition rewritten.
  - Many ownership, HQ, and model-name errors in the supplier directory (41 companies verified).
- Bing gaps:
  - Belt pull calculator (`src/components/BeltPullCalculator.astro`) on conveyor-engineering. It reproduces the worked example.
  - Nip-point diagram on conveyor-safety, and a conveyor anatomy diagram on design-guide/components.
  - ZPA control logic and troubleshooting on zero-pressure.
  - Compliant vs rigid diverters on pusher-diverter, and guide rail clamps on guide-rails.
  - Timing screw sync on star-wheel, food-contact belt materials on belting, power-and-free vs monorail table, and a layout design section in the design guide.
- Fixed 3 meta descriptions that claimed numbers the pages no longer make (cdlr, pallet-conveyors, powered roller).

## Open
- 10 VERIFY notes: washdown IP test values, bump-turn terminology, screw section lengths, ProMach HQ, Toyota AL HQ, 3-A finish (custom), 3-A verification and PMO (sanitary, 2), bakery temperatures, FSIS cooling link. Web search quota was exhausted.
- The design guide has two overlapping layout sections. Merge them.
- Hytrol specs are cited via distributor PDFs (Cisco-Eagle, ACG, condrives) because hytrol.com blocks fetches. Swap in hytrol.com links if available.
- About 60 long titles and descriptions are held until the measurement window closes (late October).
