# Artwork environment normalization prototype disposition

Recorded November 26, 2026 (America/Chicago).

## Scope

This bounded test evaluated whether reference-guided image editing could add the established Stage I dusk sky/street presentation language to the selected Arcadia Prime and Crimson Commons Stage II Residential masters without changing their architecture. The selected masters and all originals were preserved.

## Inputs

| Family | Edit target | Environment reference |
| --- | --- | --- |
| Arcadia Prime Residential | `assets/pixel-evolutions/harmony-habitat-v1.png` | `assets/pixel-stage-i/arcadian-residences-v2.png` |
| Crimson Commons Residential | `assets/pixel-evolutions/scarlet-habitat-v1.png` | `assets/pixel-stage-i/ember-residences-v3.png` |

Both edit prompts explicitly required exact architecture, massing, pools, supports, perspective, framing and mounted names to remain unchanged. They prohibited people, vehicles, events, new traits and new amenities.

## Actual prototype evidence

| Prototype | Dimensions | Bytes | SHA-256 | Disposition |
| --- | ---: | ---: | --- | --- |
| Harmony Habitat environment edit | 1024×1536 PNG | 2,728,356 | `67e0fa8d9a36b104cd6a303243e306a87d874618e66d37075589d853c8cbe96b` | Rejected; evidence only |
| Scarlet Habitat environment edit | 1024×1536 PNG | 2,642,635 | `e1e4df0c2a066697ed694f21cab48b0cdc82f63188205e639bdbd9df577bfa07` | Rejected; evidence only |

The generated files are intentionally not added to the selected-master asset tree because they failed the preservation gate.

## Visual findings

### Harmony Habitat

- The requested dusk sky and reflective street were introduced.
- The building was substantially redrawn: facade rhythm, tower proportions, bridge enclosure, pool deck, entry, landscaping, supports and overall composition differ from the selected master.
- The name remained legible, but moved from the selected top-mounted presentation into a rebuilt entrance sign.
- Result: reject under queue rules 3–5.

### Scarlet Habitat

- The requested sunset atmosphere and reflective ground were introduced.
- The building was substantially redrawn: tower massing, balcony rhythm, facade modules, bridge, pool zone, stair/entry composition and foundation differ from the selected master.
- The exact name remained legible, but the sign scale and placement changed.
- Result: reject under queue rules 3–5.

## Decision

Reference-guided generative editing is not an acceptable normalization method for these selected masters. Do not repeat this whole-image method on the remaining 18 queued assets. No selected path, approval state, checksum, manifest record or final-certification count changes.

The next safe prototype must use a non-generative composite: extract or mask the existing selected architecture, construct a reusable neighborhood environment plate, and place the unchanged architecture pixels over it. Edge cleanup must be confined to documented silhouette pixels and compared against the source at full resolution before any promotion.

## Exact next action

1. Build one Arcadia Prime and one Crimson Commons environment plate without a building.
2. Produce deterministic masks for `harmony-habitat-v1.png` and `scarlet-habitat-v1.png` from their flat dark backgrounds.
3. Composite unchanged building pixels over the plates and calculate a protected-region pixel diff; the building region must be byte-identical except for explicitly documented antialias fringe pixels.
4. Inspect both composites individually and in equal-scale Stage I/II comparisons before considering Stage III or the other identities.

This checkpoint does not unblock editions, rarities, metadata freeze or final NFT export certification.
