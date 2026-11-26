# BuildinZ architectural-master integrity audit

Audit date: November 26, 2026 (America/Chicago)  
Repository commit audited: `57d29915d07d1ee8aed9aaac09bafdeab08ac71a`  
Scope: the 150 selected architectural masters only — 50 Stage I bases plus 100 Stage II/III evolutions.

## Result

The selected architectural-master set passes the repository data-integrity audit. All 150 declared files exist in the audited Git tree, and every recorded byte count and Git blob SHA matches the actual tree entry. Every identity has exactly one Stage I, one Stage II and one Stage III selection. No selected path, Git blob or recorded SHA-256 value is duplicated.

This is not final-art or launch certification. The audit verifies repository identity and manifest consistency; it does not replace a fresh decode and visual/export inspection of every PNG.

## Authoritative inputs

- `design/STAGE_I_PIXEL_SOURCE_INVENTORY.json`: 50 selected `portrait_candidates`.
- `design/PIXEL_EVOLUTION_INVENTORY.json`: 100 selected evolution `entries`.
- Recursive Git tree `da15830fa19d54f8f63af1110386a4e901fdc621`: 918 repository entries, complete and not truncated.
- `design/COLLECTION_CONSISTENCY_STANDARD.md` and the neighborhood production briefs for stage names, building types and lineage rules.
- Current Library source anchors resolved by exact title:
  - `BuildinZ_Midnight_Lounge_Artwork_APPROVED.zip` — `libfile_1e1670b0969c81918e9ee35e15eacef5`, 3,908,932 bytes.
  - `BuildinZ_Midnight_All_Stages.png` — `libfile_b6fa69b3e2ec8191a4e6fa5aa0afab33`, 3,233,905 bytes.
  - `BuildinZ-Stage-I.png` — `libfile_6ad092de193881918c90290e2748d960`, 613,789 bytes.
  - `BuildinZ-Stage-II.png` — `libfile_b76d663588848191a172a149c2f5409c`, 801,071 bytes.
  - `BuildinZ-Stage-III.png` — `libfile_b478779814508191b72efbd9a92de3a3`, 808,186 bytes.

The existing `MIDNIGHT_APPROVED_SOURCE_AUDIT.md` and `NEON_SOURCE_MANIFEST.md` retain the byte-level and visual findings for those approved architecture sources. This audit does not alter their provenance boundary.

## Machine checks

| Gate | Expected | Observed | Result |
| --- | ---: | ---: | --- |
| Selected Stage I masters | 50 | 50 | Pass |
| Selected Stage II/III masters | 100 | 100 | Pass |
| Complete identity families | 50 | 50 | Pass |
| Selected masters per identity | 3 | 3 for every identity | Pass |
| Neighborhoods represented | 10 | 10 | Pass |
| Missing selected paths | 0 | 0 | Pass |
| Byte-count mismatches vs Git tree | 0 | 0 | Pass |
| Git-blob mismatches vs Git tree | 0 | 0 | Pass |
| Non-1024×1536 declared selections | 0 | 0 | Pass |
| Duplicate selected paths | 0 | 0 | Pass |
| Duplicate selected Git blobs | 0 | 0 | Pass |
| Duplicate recorded selected SHA-256 values | 0 | 0 | Pass |
| Evolution-to-Stage-I path mismatches | 0 | 0 | Pass |
| Stage-name/path slug mismatches | 0 | 0 | Pass |

The repository contains 523 files beneath `assets/`, including 511 PNGs. Only the 150 paths explicitly selected by the two current inventories count as architectural masters. Candidates, QA boards, composites, mockups, source images and superseded revisions remain preserved but are not counted.

## Corrected inconsistency

`design/ASSET_MANIFEST.json` and its Markdown companion were still anchored to the November 7 candidate-era state:

- the JSON contained 297 historical asset records but zero of the 150 current selected pixel-master paths;
- its summary still described one prototype-selected neighborhood and 135 non-Neon candidate slots;
- the Markdown coverage and exact-next-action sections predated completion of the Stage I and evolution-master work.

The manifest is corrected in the audit commit by adding explicit records for all 150 selected architectural masters, preserving all 297 historical records, and updating the summary and ten-neighborhood production matrix. Historical candidate notes remain preserved as history and do not override the new current-state section.

## Correction queue

### P0 — repository integrity

No failures. Do not regenerate or rename selected artwork in response to this audit.

### P1 — independent visual/export certification

Still required before edition production:

1. Decode all 150 selected PNGs from the committed blobs and independently confirm native dimensions, color mode, alpha behavior and image readability.
2. Generate equal-scale neighborhood contact sheets from the selected paths, not from candidates or Library composites.
3. Inspect exact in-image stage names, typography, complete crown/base framing, sky/street reserve, building-type separation and Stage I→II→III visual escalation.
4. Compute a perceptual-similarity report to catch accidental near-duplicate architecture despite unique bytes.
5. Record only observed failures in a versioned correction queue; preserve passing originals and avoid broad regeneration.
6. Certify corrected final-art exports before edition traits, rarity allocation or 20-edition rendering begins.

## Status boundary

Architectural lineage coverage is complete and repository data integrity passes. Final image decoding, collection-wide visual review, safe-area/export certification, edition rendering, metadata URIs, website integration, contract/security work and release gates remain open. No wallet action, deployment, mint opening or public message was performed.

## Exact next action

Materialize or otherwise retrieve the 150 selected committed PNG blobs in a bounded neighborhood batch, beginning with Neon Heights and Golden Crest. Decode them, build equal-scale contact sheets, run perceptual similarity and safe-area checks, and commit only the observed correction queue and evidence.
