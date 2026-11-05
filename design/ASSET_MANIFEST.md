# BuildinZ consolidated asset manifest

Recorded November 4, 2026 (America/Chicago) against repository commit `dc0a849fc38e30119a09ed48276761fd9adc14b1`.

This is the canonical repository asset inventory. “Selected” means selected for the current prototype, not final NFT certification. Git blob SHA and byte length come from the actual repository tree. SHA-256 and dimensions appear only where an existing source audit or identity handoff recorded them.

## Coverage

- Repository asset files: **73**
- Prototype-selected Neon Heights stage files: **15 of 15**
- Final NFT-certified stage files: **0 of 150**
- Non-Neon required stage masters without a selected lineage candidate: **99**
- No placeholder is counted as artwork.

## Production matrix

| Neighborhood | Required stage masters | Prototype-selected | Final NFT certified | Status |
|---|---:|---:|---:|---|
| Neon Heights | 15 | 15 | 0 | prototype-selected; final NFT export certification open |
| Golden Crest | 15 | 0 | 0 | 15 base lineage candidates pass equal-width collection QA; 300 edition-stage renders, release manifest and final certification remain open |
| Shadow Market | 15 | 0 | 0 | 15 base lineage candidates pass equal-width collection QA; deterministic 20-finish edition plan validated; 300 edition-stage renders, release manifest and final certification remain open |
| Skygarden District | 15 | 0 | 0 | Residential and Retail lineages have 6 visually inspected selected candidates; remaining 9 stage masters and final certification open |
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

Produce Shadow Market Entertainment: Backroom Stage → Phantom Pavilion → Midnight Masquerade from `SHADOW_MARKET_PRODUCTION_BRIEF.md`. Preserve the narrow copper marquee, mask-like facade split, smoked-violet drapery/glass and restrained acid-green edge guide.

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


## Shadow Market Residential selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Gloomstep Flats | `assets/candidates/shadow-market-gloomstep-flats-stage-1-v1.png` | 1024 × 1536 | 2,389,959 | `d1763e40abfdab9d8df5f269bcfb7f54e48db9b8d5395708b60cab809ebad10a` | `dcfa4a2d63cb4f226ee3cd841c67e579db6715dc` |
| II | Veilside Habitat | `assets/candidates/shadow-market-veilside-habitat-stage-2-v1.png` | 1024 × 1536 | 2,499,816 | `5c7aa790e9bfac6d2a9fbb74aa22d587a7dc20ef9dd73d98f4c7437de875f3e0` | `1778d5dd7187dbdd56e925958535cd7ea6ea8e65` |
| III | Noctis Enclave | `assets/candidates/shadow-market-noctis-enclave-stage-3-v1.png` | 1024 × 1536 | 2,548,162 | `d5e1354e0b451b529f9bfd6b9c9d8445d423c207514d3a92a30f9f6643822071` | `e82d705cfb767df7271af1a5e2ab74a8bfa7ee0b` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three selected outputs passed exact-name, residential-function, no-public-pool, supported-passage, framing and stage-escalation review on their first generated versions.


## Shadow Market Retail selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Lantern Row | `assets/candidates/shadow-market-lantern-row-stage-1-v1.png` | 1024 × 1536 | 2,778,901 | `0cdedad632c473bf3f6df5c866fcbf5623904aefc8e3a090a89bdb2fcac8f9f7` | `def191c2485babd0fe1db00dc1669e1d587ba47b` |
| II | Blackglass Bazaar | `assets/candidates/shadow-market-blackglass-bazaar-stage-2-v1.png` | 1024 × 1536 | 3,125,730 | `159db7ce13ac0292c8a52b0affcabaf8869539ccd90a5efb2d00955a42c4cc6c` | `bdd069e406bf19266d825e6bdd10368ca4aac5c3` |
| III | Eclipse Exchange | `assets/candidates/shadow-market-eclipse-exchange-stage-3-v1.png` | 1024 × 1536 | 3,211,921 | `87a3381945b964f4b750a61917366f6e1fa612a1b627a9f0d2d6684947163e2d` | `0f0b0b0994abb00908a205b4e85a0440600a7646` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three outputs passed exact-name, retail-function, supported-structure, framing and stage-escalation review on their first generated versions.


## Shadow Market Technology selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Cipher Works | `assets/candidates/shadow-market-cipher-works-stage-1-v1.png` | 1024 × 1536 | 2,452,865 | `1251e59aef57574cbb5643b6218e2e03ed1b8a85647e38bcc0579f009974f3ef` | `07d58f74fe2f0f8edc0dee19f89c5949bd9c8668` |
| II | Umbra Array | `assets/candidates/shadow-market-umbra-array-stage-2-v1.png` | 1024 × 1536 | 2,644,340 | `9294236e93e4cd5eb33952cc5d6a97028b4b04a1453deb641090266c59c47a14` | `4b08f48743d1a887fe8e791599789d15f55d0d44` |
| III | Nightcode Nexus | `assets/candidates/shadow-market-nightcode-nexus-stage-3-v2.png` | 1024 × 1536 | 2,657,864 | `dbdd931ca404a42001368c424bae986fb831ea6623563f2aa4c4dc1ca00ecbce` | `80f322907ad392a589f2f1fb73fba3aca2249d41` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. The first Stage III output failed the antenna-clearance gate and was not committed; v2 is a framing-only correction retaining the architecture, exact name and complete base.


## Shadow Market Entertainment selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Backroom Stage | `assets/candidates/shadow-market-backroom-stage-1-v1.png` | 1024 × 1536 | 2,402,148 | `604ceb5b2e393771cd636f421e01eaa9ad547eb239ac729173e531c37768a8fd` | `2582677529780db30dd81f99ced0b3b243316715` |
| II | Phantom Pavilion | `assets/candidates/shadow-market-phantom-pavilion-stage-2-v1.png` | 1024 × 1536 | 2,523,362 | `51c539241fcc56c42e2f26d1e016126c1f9313c9c6371757c73385594a1b981d` | `51aa43b3afd09c81a666be8fff34c74b2dc9a361` |
| III | Midnight Masquerade | `assets/candidates/shadow-market-midnight-masquerade-stage-3-v1.png` | 1024 × 1536 | 2,603,812 | `312545a085ec986ef02f4950b10060a6715ce53a71483648f6e4d2a8267f58e6` | `18676156efcbd9eb8d2b5ce40f963fce3ede0508` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three selected outputs passed exact-name, entertainment-function, supported-structure, framing and stage-escalation review on their first generated versions.


## Shadow Market Landmark selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Veil Beacon | `assets/candidates/shadow-market-veil-beacon-stage-1-v1.png` | 1024 × 1536 | 2,251,797 | `0df83c4fb39f33faa200095d32c07e507f20cc4bedb34f80afbf8fe11543d313` | `68da550c30709ec6c9905a0dc158d5cba85228b2` |
| II | Obsidian Spire | `assets/candidates/shadow-market-obsidian-spire-stage-2-v1.png` | 1024 × 1536 | 2,308,008 | `6f8b93e2c8059b0c05fdd46a8154d7c06973a9d2323dcf6042db6e3a9dad29de` | `cec4e4036181abc0ca694853743bae12706ae187` |
| III | Shadow Sovereign | `assets/candidates/shadow-market-shadow-sovereign-stage-3-v1.png` | 1024 × 1536 | 2,598,274 | `067a923c31b07ce2c42c5336a38ccf9c9566f11de3aa905b5611ccea0c9764af` | `f9cfe75d7ae90fd9e736d746c8b197f3b479b9a8` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three selected outputs passed exact-name, landmark-function, physical-support, framing and stage-escalation review on their first generated versions. Shadow Market now has all 15 required base stage candidates; collection-level equal-width QA and edition rendering remain open.


## Shadow Market collection QA and edition plan — November 4, 2026

- Equal-width five-row × three-stage review surface: `design/qa/shadow-market/shadow-market-15-master-contact-sheet.png`
- QA evidence: `design/SHADOW_MARKET_COLLECTION_QA.md`
- Deterministic edition matrix: `design/SHADOW_MARKET_EDITION_FINISH_MATRIX.json` and `.md`
- Validator: `scripts/validate_shadow_market_edition_finishes.mjs`
- Result: all 15 base candidates pass collection-level lineage, function, naming and framing review; the matrix validates 20 unique finishes, 100 tokens and 300 planned stage images.

Status boundary: the 300 edition-stage images are planned but not rendered, inspected, assigned permanent URIs or final-certified.


## Skygarden District Residential selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Canopy Residences | `assets/candidates/skygarden-district-canopy-residences-stage-1-v1.png` | 1024 × 1536 | 2,759,462 | `b1d0c034474ff5045ac851d4ad46ab7393125e3bdf357c463e89d065aaf94df5` | `1fe427ba9c1b3d21f4b28f0de906c47fdfd241b1` |
| II | Cloudterrace Habitat | `assets/candidates/skygarden-district-cloudterrace-habitat-stage-2-v1.png` | 1024 × 1536 | 3,054,851 | `8f94b942f82e112d3e08b38449a5b6fbd324968a0eaa3564028bf6d823a5296d` | `f535b3e486c216ef67f7b24195526de6f63945dd` |
| III | Eden Skyhold | `assets/candidates/skygarden-district-eden-skyhold-stage-3-v1.png` | 1024 × 1536 | 3,136,806 | `0aeb348cff627be100053d58d707965791907c0f3d9b697d3257c6a8feefb502` | `1cbb43f5171236362a248894d1eccb12e6309c2b` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three outputs passed exact-name, residential-function, controlled-greenery, supported-structure, no-public-pool, framing and stage-escalation review on their first generated versions.


## Skygarden District Retail selected candidates — November 4, 2026

| Stage | Canonical name | Path | Dimensions | Bytes | SHA-256 | Git blob |
|---:|---|---|---|---:|---|---|
| I | Bloom Market | `assets/candidates/skygarden-district-bloom-market-stage-1-v1.png` | 1024 × 1536 | 2,816,713 | `24831823656f2806383b86e4a427eb2e2c09bab0c4bc6afa3478be4a20b7f370` | `1908d4ba47ebae5da1b8973ad1c478cb58025ec4` |
| II | Verdant Galleria | `assets/candidates/skygarden-district-verdant-galleria-stage-2-v1.png` | 1024 × 1536 | 3,198,948 | `ff07fa6bf740f49d4eb265634d102535ac100f694e1431071f46c7edb0776820` | `eeed2397e21f50d8e303ab1b6086d019b4c90b83` |
| III | Hanging Garden Exchange | `assets/candidates/skygarden-district-hanging-garden-exchange-stage-3-v1.png` | 1024 × 1536 | 3,548,169 | `0024864a7565681beb378aa8c121af8b523f6b30343adb3a3e222361411d4cd1` | `bb47dfd4f6a6df71a39f59f1035c074d587e79d5` |

Delegated lineage candidates only. They are not prototype-integrated, edition variants, or final NFT-certified. All three outputs passed exact-name, retail-function, controlled-greenery, supported-gallery, framing and stage-escalation review on their first generated versions.
