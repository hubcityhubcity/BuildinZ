# Deterministic environment-composite prototype

Recorded November 26, 2026 (America/Chicago).

## Outcome

The Arcadia Prime and Crimson Commons Stage II Residential environment prototypes pass the bounded candidate gate. The selected Harmony Habitat and Scarlet Habitat architecture was not regenerated. Binary masks were derived from the flat dark fields, and the original RGB building pixels were composited over building-free neighborhood plates.

These are **versioned candidates**, not selected-master replacements or final NFT-certified exports. Stage III has not yet been normalized, so neither Residential family is complete and no asset-manifest selection changed.

## Immutable inputs

Inputs were downloaded from repository commit `1bd8feaa21894d115c7afd1fc2a3d26f0b1b6db9` and reproduced their canonical SHA-256 values.

| Identity | Stage | Input | SHA-256 |
| --- | ---: | --- | --- |
| N09-I01 | I | `assets/pixel-stage-i/arcadian-residences-v2.png` | `793f971f700216c52343d3e3c9f6544d51637d5f3e1f0424152439b37440622e` |
| N09-I01 | II | `assets/pixel-evolutions/harmony-habitat-v1.png` | `8b97ddad4ac1041b70a4f2dbb215db8fbe91ad488cebce839b7515f9c1bbc912` |
| N10-I01 | I | `assets/pixel-stage-i/ember-residences-v3.png` | `60791932192ebcaa04a9f60a2012ff5ce26bd65e5885f2d6cc719694c5df4de9` |
| N10-I01 | II | `assets/pixel-evolutions/scarlet-habitat-v1.png` | `86772b9386032aa50d9735f8062d1bf758b0b8a600deda142723e765d5e6d76f` |

## Method

1. Create a building-free 1024×1536 neighborhood environment plate from the selected Stage I presentation language.
2. On the selected Stage II source, flood only connected flat-background regions with a 7% color tolerance. Seed the outer background and the enclosed open-air center below the sky lounge.
3. Extract the resulting binary alpha mask.
4. Composite the unchanged Stage II RGB pixels over the environment plate using that mask.
5. Compare source and composite pixel-by-pixel over every protected mask pixel.
6. Inspect the candidate individually and beside Stage I at equal scale.

The first Crimson plate contained a redundant outlined platform. It was rejected and replaced by v2 before the candidate composite was accepted.

## Protected-pixel proof

| Candidate | Total pixels | Protected pixels | Protected pixels changed | Background pixels replaced |
| --- | ---: | ---: | ---: | ---: |
| Harmony Habitat | 1,572,864 | 1,069,843 | **0** | 503,021 |
| Scarlet Habitat | 1,572,864 | 747,322 | **0** | 825,542 |

Both masks contain only alpha values 0 and 255. There is no partial-alpha blending. Every retained architecture/sign/foundation pixel is RGB-identical to its selected source.

## Visual disposition

### Harmony Habitat

- Exact `HARMONY HABITAT` sign, twin-tower massing, supported bridge, private elevated pool, solar roofs, entry and foundation are unchanged.
- Arcadia cobalt/violet dusk, pink pixel clouds and reflective street language now continue from Stage I.
- Crown and base remain fully framed; no people, vehicles or deferred trait events were added.
- Candidate result: **pass for Stage II family comparison**.

### Scarlet Habitat

- Exact `SCARLET HABITAT` sign, tower massing, bridge, braces, private rooftop pool, entry and foundation are unchanged.
- Crimson burgundy sunset, red pixel clouds, mountains, sun and reflective plaza now continue from Stage I.
- The rejected v1 platform outline is absent from the accepted v2 plate.
- Candidate result: **pass for Stage II family comparison**.

## Candidate artifacts

| Artifact | Dimensions | Bytes | SHA-256 |
| --- | ---: | ---: | --- |
| Arcadia environment plate v1 | 1024×1536 | 1,951,032 | `99ed428a7493f19dc9db875d07e3cdcb494771b8ac94cd8256c3fd3560c393dd` |
| Crimson environment plate v2 | 1024×1536 | 2,074,754 | `ef3abbf7d5ba6843affad615596bd68d0d82574214994362ffba0cb60b503cab` |
| Harmony Habitat mask v1 | 1024×1536 | 3,872 | `269efadade7eaa3ff46b5323caacded42f82cee4e523b984af4b04c2fa236a50` |
| Scarlet Habitat mask v1 | 1024×1536 | 5,564 | `8048c613c3de0459ceb7a5b5619e4ed0550e1dd55c2984c108628af16ce7bca4` |
| Harmony Habitat composite v1 | 1024×1536 | 2,433,132 | `98d70bd38e0b1aeeb419dc3beda6edf05901ecc3236977cbdc6c280666c45205` |
| Scarlet Habitat composite v2 | 1024×1536 | 2,418,048 | `2e54b04a924585fd43439330941a1c37a03f0ca5975730083e3c8fd06742abe3` |
| Stage I/II comparison v2 | 808×1192 | 4,645,506 | `965e3db0272cf6e128d1cdfe979f4cf29a0f8a2379e030bedf95083a147db8e0` |

## Status boundary and exact next action

No selected-master path, approval status, manifest checksum, rarity, edition, metadata or final-certification count changes in this checkpoint.

Next, apply the same deterministic method to Elysium Arcology and Crimson Arcology using the accepted neighborhood plates. Require zero protected-pixel changes, inspect both Stage III composites individually, and compare each complete Stage I/II/III Residential family before considering promotion or any other queued identity.
