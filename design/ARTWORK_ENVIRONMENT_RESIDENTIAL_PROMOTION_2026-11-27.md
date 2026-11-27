# Residential environment-normalization promotion

Recorded November 27, 2026 (America/Chicago).

## Outcome

The Arcadia Prime and Crimson Commons Residential Stage II/III environment-normalized derivatives pass deterministic pixel preservation and complete Stage I/II/III visual review. They are promoted as the selected presentation masters for N09-I01 and N10-I01.

The original Stage II/III files remain preserved as architectural source masters. Promotion changes presentation environment only; exact names, building pixels, amenities, supports, framing and stage progression are unchanged. This closes four of the twenty environment-normalization queue items. Final NFT certification remains open.

## Selected family mapping

| Identity | Stage | Exact name | Preserved architecture source | Promoted presentation master |
| --- | ---: | --- | --- | --- |
| N09-I01 | II | Harmony Habitat | `assets/pixel-evolutions/harmony-habitat-v1.png` | `assets/candidates/environment-normalization/harmony-habitat-environment-composite-v1.png` |
| N09-I01 | III | Elysium Arcology | `assets/pixel-evolutions/elysium-arcology-v1.png` | `assets/candidates/environment-normalization/elysium-arcology-environment-composite-v1.png` |
| N10-I01 | II | Scarlet Habitat | `assets/pixel-evolutions/scarlet-habitat-v1.png` | `assets/candidates/environment-normalization/scarlet-habitat-environment-composite-v2.png` |
| N10-I01 | III | Crimson Arcology | `assets/pixel-evolutions/crimson-arcology-v1.png` | `assets/candidates/environment-normalization/crimson-arcology-environment-composite-v1.png` |

## Deterministic verification

All masks contain only alpha 0 and 255. Source and composite RGB values were compared on every protected pixel.

| Stage asset | Protected pixels | Protected pixels changed | Background pixels replaced |
| --- | ---: | ---: | ---: |
| Harmony Habitat | 1,069,843 | **0** | 503,021 |
| Elysium Arcology | 1,072,722 | **0** | 500,142 |
| Scarlet Habitat | 747,322 | **0** | 825,542 |
| Crimson Arcology | 874,807 | **0** | 698,057 |

## Stage III artifacts

| Artifact | Dimensions | Bytes | SHA-256 |
| --- | ---: | ---: | --- |
| Elysium Arcology mask v1 | 1024×1536 | 4,607 | `ce09fc33f592409f6829de85dead314787aeb1eaee308c59c63e54881da9e48c` |
| Crimson Arcology mask v1 | 1024×1536 | 5,425 | `5516514022381c7d10a454e6e729cfbe12c0892177cef0aa329781cac8d39c44` |
| Elysium Arcology composite v1 | 1024×1536 | 2,612,383 | `7d40a092987131d65e40af916df6ce25dc3fbec182e3517c9069dc7d22d5a6a4` |
| Crimson Arcology composite v1 | 1024×1536 | 2,701,789 | `555d27fae10988c3099ef6c8baf6e83ee843bc201748eeab03dd0ee5d8f92150` |
| Residential Stage I/II/III comparison v1 | 984×992 | 4,521,689 | `5bd35815583e760b9211d3e67c1518ab0472b801ffeab4a09488c80b18c1e36d` |

Stage II artifact hashes and method evidence remain in `ARTWORK_ENVIRONMENT_DETERMINISTIC_COMPOSITE_2026-11-26.md`.

## Visual review

### Arcadia Prime

- Arcadian Residences → Harmony Habitat → Elysium Arcology shows clear height, breadth, dwelling-capacity and amenity growth.
- Harmony retains its supported private sky lounge and elevated pool.
- Elysium retains three towers, two supported private lounge/resort bridges, several elevated resident pools and the largest attached crown.
- Exact stage names remain legible; crowns, bases and useful scene-layer reserve remain in frame.

### Crimson Commons

- Ember Residences → Scarlet Habitat → Crimson Arcology shows clear height, breadth, dwelling-capacity, pool-count and crown growth.
- Scarlet retains its supported enclosed sky lounge and elevated private pool.
- Crimson retains three towers, two supported private sky-lounge bridges, several elevated resident pools and the ember-lit crown.
- Exact stage names remain legible; crowns, bases and useful scene-layer reserve remain in frame.

No people, vehicles, edition traits or deferred sky/street events were introduced.

## Status boundary

- Selected architectural-presentation coverage remains 150 stage assets; four selected paths now point to environment-normalized derivatives.
- The four original Stage II/III paths remain preserved and recorded as source masters.
- Sixteen Arcadia Prime/Crimson Commons Stage II/III environment items remain queued.
- Final NFT-certified exports remain 0 of 150. Edition/rarity, metadata freeze and downstream launch gates remain held.

## Exact next action

Normalize both Retail families using the accepted plates and deterministic masks:

1. Agora Plaza → Lyceum Galleria → Infinite Forum.
2. Commons Market → Ruby Galleria → Cardinal Exchange.

Require zero protected-pixel changes for all four Stage II/III derivatives, then inspect both complete Retail lineages before promotion.
