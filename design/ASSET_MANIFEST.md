# BuildinZ consolidated asset manifest

Recorded November 4, 2026 (America/Chicago) against repository commit `440fcafdee6c3cad493cfef7f9411bab344f8af1`.

This is the canonical repository asset inventory. “Selected” means selected for the current prototype, not final NFT certification. Git blob SHA and byte length come from the actual repository tree. SHA-256 and dimensions appear only where an existing source audit or identity handoff recorded them.

## Coverage

- Repository asset files: **52**
- Prototype-selected Neon Heights stage files: **15 of 15**
- Final NFT-certified stage files: **0 of 150**
- Non-Neon required stage masters without a selected lineage candidate: **120**
- No placeholder is counted as artwork.

## Production matrix

| Neighborhood | Required stage masters | Prototype-selected | Final NFT certified | Status |
|---|---:|---:|---:|---|
| Neon Heights | 15 | 15 | 0 | prototype-selected; final NFT export certification open |
| Golden Crest | 15 | 0 | 0 | 15 base lineage candidates pass equal-width collection QA; 300 edition-stage renders, release manifest and final certification remain open |
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

Prepare `SHADOW_MARKET_PRODUCTION_BRIEF.md` from the canonical registry, then produce Gloomstep Flats → Veilside Habitat → Noctis Enclave as its first controlled lineage. Golden Crest's edition finish matrix is planned and validated, but its 300 edition-stage renders remain unproduced.

## Golden Crest Residential selected candidates — October 31, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Aureate Residences | `assets/candidates/golden-crest-aureate-residences-stage-1-v1.png` | 1024 × 1536 | 3,399,766 | `916f9d52d26f1e1794d3a88d6d71e633e02c6d6d3dbec8ce6682219a642682fb` | `42d9d7c7ed5bb955d668ca5dcfd68c3fc4e3aae5` |
| II | Gilded Terraces | `assets/candidates/golden-crest-gilded-terraces-stage-2-v1.png` | 1024 × 1536 | 3,325,923 | `8fa5deb341febda51cb547d9a18544b0b34d7dd6b019efb14d1012cd44da3ce8` | `0c82afc8fff3c99391d31254838878b15c8c3cbf` |
| III | Imperial Sunhold | `assets/candidates/golden-crest-imperial-sunhold-stage-3-v2.png` | 1024 × 1536 | 3,016,756 | `a326d66274af91c3a89ac1d0ccffe517fd04bf700394cf6be27413513b1a2ae6` | `545e152c1e8e063c3b37a48f9bc9b5e1cb8c01de` |

These are delegated, visually inspected lineage candidates—not prototype-integrated art and not final NFT certification. The first Stage III generation had insufficient crown clearance and was not committed; v2 is a targeted framing correction with clear sky margin, full base and exact mounted name.


## Golden Crest Retail selected candidates — October 31, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Meridian Market | `assets/candidates/golden-crest-meridian-market-stage-1-v1.png` | 1024 × 1536 | 3,023,710 | `19dba4fd0c59f6d9f9276713e31868d9db79b17cc16bc018580d923b8f937328` | `500a4669903afc61556e15d101d34e86567a5969` |
| II | Crown Arcade | `assets/candidates/golden-crest-crown-arcade-stage-2-v1.png` | 1024 × 1536 | 3,075,937 | `bb5cf9c0d063e849bab3c95fb02a4458690c89470b820040fe8f629735c8be64` | `2eab2be0e655d1479b38ef15bd015cf56ee124aa` |
| III | Grand Aureum Exchange | `assets/candidates/golden-crest-grand-aureum-exchange-stage-3-v2.png` | 1024 × 1536 | 2,942,203 | `307d82f5ba398a2515ed43b6e1694d59d07a7a03773e6329fa7c37f9ad746a85` | `c4a3c4078412de98bafe6df43fddba87cc077725` |

Delegated lineage candidates only. They are not prototype-integrated and not final NFT-certified. The first Stage III output had insufficient crown clearance and was not committed; v2 corrects framing while retaining the supported gallery system, full plaza and exact two-line name.


## Golden Crest Technology selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Solara Labs | `assets/candidates/golden-crest-solara-labs-stage-1-v1.png` | 1024 × 1536 | 2,976,586 | `f5d4154f6f77fcb299107d0d657f0489fb6281a741842ba4746d17ba5af4d820` | `5f9a6c8605df5c6df4f48ac8bb3a89bc13b1415c` |
| II | Helios Foundry | `assets/candidates/golden-crest-helios-foundry-stage-2-v2.png` | 1024 × 1536 | 2,942,244 | `68a2601514ef877332f2f8feff6c7d7eb378a72923275b777cdf2fd5daeb85ad` | `492f3049873e19924de110cff59dedd20083e6a5` |
| III | Daystar Citadel | `assets/candidates/golden-crest-daystar-citadel-stage-3-v1.png` | 1024 × 1536 | 3,071,069 | `ba6e6abcc2dbac9245eee27564e89bfb61bbafccbc3f1f05f842a3df5107044e` | `f1024e0bd19ab6568ab2414c096342d9879869cf` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. The first Helios Foundry render failed the crown-clearance gate and was not committed; v2 is a framing-only correction preserving the accepted architecture and exact name. Daystar Citadel passed on its first inspected output.


## Golden Crest Entertainment selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Velvet Hall | `assets/candidates/golden-crest-velvet-hall-stage-1-v1.png` | 1024 × 1536 | 2,540,865 | `367905bfac34cfd8ef8254ec2bba1c500736c3ad737986a72bb68c4f43d627e3` | `258a4f155761e5e5b87f225179056b6d814882ed` |
| II | Radiant Opera | `assets/candidates/golden-crest-radiant-opera-stage-2-v1.png` | 1024 × 1536 | 2,580,994 | `771ed525d940d9d9fc9329854f72b590a791af6f0d6f0d37b6bd641aa8168387` | `e2ed112d6a765010b8f9d89d4267e49e8b08078c` |
| III | Solaris Grand Theatre | `assets/candidates/golden-crest-solaris-grand-theatre-stage-3-v1.png` | 1024 × 1536 | 2,854,359 | `b4ab1a62f7852820bcf2170eb8d92e8510e63e036dd82508a7343b679f3538c4` | `5d4170220111cfc26a43a2a69807edcaf9dfacd8` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three selected outputs passed exact-name, framing, architectural-function and stage-escalation review on their first generated versions.


## Golden Crest Landmark selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Golden Obelisk | `assets/candidates/golden-crest-golden-obelisk-stage-1-v1.png` | 1024 × 1536 | 2,232,033 | `e3ead4c33fa469023e63d8ee669b81da58549f6c791347bd2bd74d9de5fad4a8` | `cbe3b5157425f2bf3cd90855899eeda88aefb3d2` |
| II | Sunspire Monument | `assets/candidates/golden-crest-sunspire-monument-stage-2-v1.png` | 1024 × 1536 | 2,263,635 | `7c349722ab0c1cbf0efc247670151a80068581a292aff579e2a39b972545c07d` | `109dbe45cf2fca22d1946d631ccbe07f7b48a01f` |
| III | Crown of Dawn | `assets/candidates/golden-crest-crown-of-dawn-stage-3-v1.png` | 1024 × 1536 | 2,576,603 | `50e4d004effabec568a78353d14963be7a7febdcb612f1cc5b1afd0683f2323c` | `8a8fbfb7e406bf2379004a3e1603ba609bd3a2e7` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three selected outputs passed exact-name, framing, landmark-function and stage-escalation review on their first generated versions. Golden Crest now has 15 of 15 required stage candidates, but collection-level equal-width QA and final export certification remain open.
