# BuildinZ consolidated asset manifest

Recorded October 31, 2026 (America/Chicago) against repository commit `55eed0213013f6fa6ef47ff1a9e6448f1b15234c`.

This is the canonical repository asset inventory. “Selected” means selected for the current prototype, not final NFT certification. Git blob SHA and byte length come from the actual repository tree. SHA-256 and dimensions appear only where an existing source audit or identity handoff recorded them.

## Coverage

- Repository asset files: **37**
- Prototype-selected Neon Heights stage files: **15 of 15**
- Final NFT-certified stage files: **0 of 150**
- Non-Neon required stage files not yet produced: **135**
- No placeholder is counted as artwork.

## Production matrix

| Neighborhood | Required stage masters | Prototype-selected | Final NFT certified | Status |
|---|---:|---:|---:|---|
| Neon Heights | 15 | 15 | 0 | prototype-selected; final NFT export certification open |
| Golden Crest | 15 | 0 | 0 | production not started |
| Shadow Market | 15 | 0 | 0 | production not started |
| Skygarden District | 15 | 0 | 0 | production not started |
| Velocity Row | 15 | 0 | 0 | production not started |
| Royal Mirage | 15 | 0 | 0 | production not started |
| Old World Steel | 15 | 0 | 0 | production not started |
| Moonline Harbor | 15 | 0 | 0 | production not started |
| Arcadia Prime | 15 | 0 | 0 | production not started |
| Crimson Commons | 15 | 0 | 0 | production not started |

## Prototype-selected Neon Heights set

| Type | Stage | Canonical name | Path | Bytes | Dimensions | SHA-256 |
|---|---:|---|---|---:|---|---|
| Entertainment | 1 | Midnight Lounge | `assets/candidates/midnight-stage-1-signage-v2.png` | 2451364 | Not yet consolidated | Not yet consolidated |
| Entertainment | 2 | Nocturne Palace | `assets/candidates/midnight-stage-2-signage-v2.png` | 2280776 | Not yet consolidated | Not yet consolidated |
| Entertainment | 3 | Eclipse Citadel | `assets/candidates/midnight-stage-3-signage-v2.png` | 2386886 | Not yet consolidated | Not yet consolidated |
| Landmark | 1 | Crown Spire | `assets/candidates/crown-stage-1-v3.png` | 2683764 | 1024 × 1536 | `8017f1e5c9129b68ea00bb66a80aa581da17aedef95e2cda5943aebb7b95a3c7` |
| Landmark | 2 | Sovereign Apex | `assets/candidates/crown-stage-2-v2.png` | 2772146 | 1024 × 1536 | `9e6513c2c5b64fc9ed4a89bc26524ca1733dd18524f1e3c6024228026c033af7` |
| Landmark | 3 | Crown of Neon | `assets/candidates/crown-stage-3-v2.png` | 3127783 | 1024 × 1536 | `0a9cd24e7fefa050bede61685b594426c7c84d8b923ad1b5458f18a287608ac6` |
| Residential | 1 | Neon Residences | `assets/candidates/neon-stage-1-signage-v1.png` | 2122861 | 1275 × 1234 | `0865ab5da322a54a578346ef8c2b071e53ece95da82c0587b7131a0ebf663a6b` |
| Residential | 2 | Skyline Habitat | `assets/candidates/neon-stage-2-screens-v3.png` | 2133400 | 1087 × 1446 | `e1db7e61f192a0fc477fb84176aa8e1a7c8732f05847452610e4cd193096ac88` |
| Residential | 3 | Aurora Arcology | `assets/candidates/neon-stage-3-screens-v1.png` | 2614369 | 969 × 1624 | `842067c3077c9df1d74ddc369dd9138ec6e5449c6473ac40f2bda4da1802a87b` |
| Retail | 1 | Pulse Plaza | `assets/pulse-stage-1.png` | 2854030 | Not yet consolidated | `3b0bc97838b4a68b09c02f0e690e2648f1923e047203b3f8edeba816de27c055` |
| Retail | 2 | Spectrum Galleria | `assets/candidates/pulse-stage-2-signage-v1.png` | 2907094 | 1024 × 1536 | `84ce4472a041d8b6b29215794de03101f48b3b024b0b680adefea01fae1a1ceb` |
| Retail | 3 | Infinity Bazaar | `assets/candidates/pulse-stage-3-signage-v1.png` | 2888081 | 1024 × 1536 | `0d8c1f9e48cdd866bd2cf1e551d0cc696dbd618dd7bb53c8f5b06355e9a1ffee` |
| Technology | 1 | HoloTech Tower | `assets/candidates/holotech-stage-1-signage-v1.png` | 2063949 | 1102 × 1428 | `e14b65116f7ea6971b2137f655671d04009b3acb41ecf36417bed6018f37905e` |
| Technology | 2 | Quantum Spire | `assets/candidates/holotech-stage-2-signage-v1.png` | 2402979 | 1126 × 1397 | `906d13b3fb351b3912c519a82fab38412a1bf60f5f647820ea07a731aca98e0b` |
| Technology | 3 | Omninet Nexus | `assets/candidates/holotech-stage-3-signage-v1.png` | 2508286 | 1134 × 1387 | `0363293d00267775344ed1d389be684b209e11f92edc9668a60015b14fec8547` |

## Preserved and rejected material

- Original source art remains in place even where a derivative supplies the prototype.
- Legacy files `crown.webp`, `holo.webp`, `midnight.webp` and `pulse.webp` are thumbnails, not stage masters.
- `neon-stage-2-screens-v2.png` is explicitly rejected because a lower display overlaps glazing.
- Crown II/III v1, Midnight II/III v1 and Neon signage-only II/III remain preserved superseded candidates.
- Branding files are not collection artwork.

## Integrity fields

The machine-readable source of truth is `ASSET_MANIFEST.json`. Every entry records path, repository byte length, Git blob SHA, classification, selection state and final-certification state. Missing SHA-256 or dimensions remain null rather than inferred.

## Exact next action

Use `GOLDEN_CREST_PRODUCTION_BRIEF.md` to produce the first non-Neon versioned stage set. After every generated output: inspect the actual image, save it under a versioned candidate path, add dimensions/SHA-256/Git blob evidence here, and do not change final certification until collection-wide export checks pass.
