# Moonline Harbor Residential pixel evolution handoff

Recorded November 25, 2026 (America/Chicago). Source activation commit: `c3d7b3f32d5c26e9ae0c73fa1e257f430ffcff29`.

## Canonical lineage

| Identity | Type | Stage | Exact name | Selected asset |
|---|---|---:|---|---|
| N08-I01 | Residential | I | Tidelight Residences | `assets/pixel-stage-i/tidelight-residences-v1.png` |
| N08-I01 | Residential | II | Moonwake Habitat | `assets/pixel-evolutions/moonwake-habitat-v1.png` |
| N08-I01 | Residential | III | Lunar Marina Arcology | `assets/pixel-evolutions/lunar-marina-arcology-v1.png` |

William's November 19 direction controls the medium and production order. The registry controls exact names and type. Stage I is the selected production base. The older 1024×1536 Moonwake and Lunar Marina cinematic files supplied architecture and program evidence only; they are not selected evolutions.

## Production method

Built-in image generation used the selected Stage I pixel base plus the matching cinematic reference for Stage II. Stage III used the selected Stage I and newly selected Stage II pixel assets plus the matching cinematic Stage III reference. Both prompts required refined high-definition isometric pixel art, exact single signage, complete portrait framing, wet street and harbor space for deferred scene layers, and no baked-in people, vehicles, boats, sky events or edition traits.

## Visual verification

Actual Stage II and Stage III outputs were inspected individually and with Stage I at equal width in `assets/qa/moonline-harbor-residential-pixel-lineage-v1.png`.

| Gate | Result | Evidence |
|---|---|---|
| Exact names | Pass | MOONWAKE HABITAT and LUNAR MARINA ARCOLOGY each appear once above the entrance; no stage/type captions or second signs. |
| Residential function | Pass | Repeated furnished domestic units, private balconies and warm inhabited interiors remain visible across all stages. |
| Evolution | Pass | One compact tower becomes two taller towers, then a dominant crowned center tower plus two substantial side towers. |
| Stage II amenity | Pass | One enclosed private residents' sky lounge bridges both towers on visible diagonal braces; a larger elevated pool and seating deck sit above it. |
| Stage III amenity | Pass | Two distinct enclosed private resort/lounge bridge levels attach to all three towers and carry several elevated pools and seating zones. |
| Structural support | Pass | Sky lounges, resort bridges, pool terraces, balconies, crowns, pier platforms and access bridges visibly connect to towers, braces, piles or foundations. |
| Neighborhood continuity | Pass | Curved pearl balconies, navy fins, silver trim, aqua/deep-teal glazing, warm interiors, moonlit water and wet urban approaches persist. |
| Framing | Pass | Highest antenna/crown, tower sides, pier corners/piles, complete access bridge, street foreground and useful sky reserve remain inside frame. |
| Exclusions | Pass | No people, crowds, vehicles, boats, public/ground-level pool, hotel, retail, casino, floating geometry or watermark. |

The equal-width comparison shows decisive increases in tower count, height, breadth, private amenity capacity and crown complexity. No physical height or floor-count metric is inferred from pixels.

## Integrity

| Asset | Dimensions | Bytes | SHA-256 | Git blob |
|---|---|---:|---|---|
| `assets/pixel-evolutions/moonwake-habitat-v1.png` | 1024×1536 | 3,149,899 | `b9e69433f70102e5dfe8953c4211b29a9e0f3275d685366cc070d111288bcecf` | `1bf7819e04b4fed12b75eaf2cb72c77d7c60584f` |
| `assets/pixel-evolutions/lunar-marina-arcology-v1.png` | 1024×1536 | 3,244,382 | `b5cd536846cd728c4067546ff75ca8c79e539cdf22b5e95f848608a741d5a023` | `cd1339b6c0d7eafe2f37ff771062b8684d742ae4` |
| `assets/qa/moonline-harbor-residential-pixel-lineage-v1.png` | 1536×768 | 6,424,122 | `a415f106716d30a6a841876af185b631a94c7768fc9beeab1fe6e02b9995cfda` | `8ed45d27258b6206f632a0b4f0bae84fc1709b14` |

The QA sheet is an inspection derivative, not token artwork.

## Status boundary and next action

These are selected architectural masters under delegated authority, not owner-approved final edition exports or launch-certified token images. Edition finishes, rarity traits, scene events, permanent URIs, metadata and release certification remain deferred.

Moonline Harbor now has one complete pixel evolution family and two selected Stage II/III assets. Next, produce and inspect **Dockside Market → Pearl Galleria → High Tide Exchange** under `MOONLINE_HARBOR_PRODUCTION_BRIEF.md`.
