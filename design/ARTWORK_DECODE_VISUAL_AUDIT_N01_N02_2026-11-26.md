# BuildinZ selected-master decode and visual audit — N01/N02

Audit date: November 26, 2026 (America/Chicago)  
Repository commit audited: `1e40a444fa76ae51f3e1a0555198af669d711579`  
Scope: Neon Heights and Golden Crest, 30 selected architectural masters.

## Result

Both neighborhoods pass this bounded decode, integrity, equal-scale visual and perceptual-similarity review. No artwork correction was justified in this batch.

This advances 30 of 150 selected masters through the fresh decode/visual audit. It does not certify the remaining eight neighborhoods, edition renders or launch assets.

## Source control

- Exact selected paths came from `STAGE_I_PIXEL_SOURCE_INVENTORY.json` and `PIXEL_EVOLUTION_INVENTORY.json` at the audited commit.
- Every PNG was downloaded from that immutable commit, not from a candidate folder, composite sheet or current mutable branch URL.
- The designated Midnight ZIP/master and the three Neon source images were re-resolved by exact Library title before review. Existing provenance boundaries in `MIDNIGHT_APPROVED_SOURCE_AUDIT.md` and `NEON_SOURCE_MANIFEST.md` remain unchanged.

## Machine verification

| Gate | Neon Heights | Golden Crest | Result |
| --- | ---: | ---: | --- |
| Selected files decoded | 15 | 15 | Pass |
| Native 1024×1536 PNG | 15 | 15 | Pass |
| RGB mode | 15 | 15 | Pass |
| Byte count equals inventory | 15 | 15 | Pass |
| Fresh SHA-256 equals inventory | 15 | 15 | Pass |
| Duplicate or near-duplicate dHash at distance ≤5 | 0 | 0 | Pass |
| Complete I/II/III families | 5 | 5 | Pass |

The automated dark-background top-clearance heuristic observed at least 38 pixels in Neon Heights and at least 44 pixels in Golden Crest. Side and bottom heuristic readings were not used as certification because illuminated streets intentionally reach image edges; complete bases and useful street reserve were inspected on the contact sheets instead.

## Perceptual-similarity review

- Neon Heights nearest pair: N01-I01 Stage I and N01-I03 Stage I, dHash distance 12. They remain visibly distinct residential and technology architectures.
- Golden Crest nearest pair: N02-I02 Crown Arcade and Grand Aureum Exchange, dHash distance 6. Equal-scale review confirms distinct Stage III growth: expanded height, an additional upper commercial zone, larger dome/crown and increased program. This is intentional lineage similarity, not a duplicate.
- No pair in either neighborhood met the ≤5 near-duplicate review threshold.

## Neon Heights visual findings

- All five exact three-stage names are readable and agree with the inventories.
- Residential progression is clear: Neon Residences → Skyline Habitat → Aurora Arcology. Stage II is taller with its private rooftop/sky-lounge program; Stage III adds the tallest multi-tower resort form, multiple elevated pool zones and the dominant crown.
- Stage III facade media/display presence is at least Stage II's, without treating the mounted stage-name sign as a display.
- No ground-level public residential pool is present. Rooftop water amenities, restrained planting, black glass, chrome and purple/electric-blue/pink/cyan lighting remain consistent.
- Retail, technology, entertainment and landmark identities remain visually separate while sharing the neighborhood palette.
- Full crowns, architectural bases, sky reserve and street foreground remain visible. No new correction is queued.

QA evidence: `assets/qa/neon-heights-selected-master-audit-v1.png`.

## Golden Crest visual findings

- All five exact three-stage names are readable and agree with the inventories.
- Residential, retail, technology, entertainment and landmark families each show clear I→II→III increases in mass, height or program.
- Gold/ivory structure, royal-blue accents and sunset lighting remain coherent without collapsing the five building types into one silhouette.
- Grand Aureum Exchange remains distinct from Crown Arcade despite their close perceptual hash.
- Full crowns, domes, bases and approaches remain visible. No correction is queued.

QA evidence: `assets/qa/golden-crest-selected-master-audit-v1.png`.

## Status boundary

This is independent evidence for the 30 selected architectural masters only. It is not a security audit, edition certification, metadata validation or permission to deploy/open a mint. Final-art certification remains open until all ten neighborhoods pass and any later failures are corrected.

## Exact next action

Run the same immutable-blob decode, hash, contact-sheet and perceptual-similarity audit for Shadow Market and Skygarden District. Preserve all passing artwork and create correction candidates only for observed failures.
