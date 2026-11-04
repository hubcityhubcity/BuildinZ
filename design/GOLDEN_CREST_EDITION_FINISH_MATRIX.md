# Golden Crest edition finish matrix

Recorded November 4, 2026 (America/Chicago).

## Status boundary

This is a delegated, reversible production plan. It does **not** mean the 300 Golden Crest edition-stage images have been rendered, inspected, uploaded or final-certified. Canonical edition numbers and rarity tiers remain inherited from `COLLECTION_REGISTRY.json`.

Each of Golden Crest's five identities has 20 tokens. The same edition finish follows its token through Stage I, II and III, so evolution changes architecture while preserving the token's edition identity.

## Canonical allocation

| Rarity | Edition numbers | Per identity | Golden Crest total |
|---|---|---:|---:|
| Common | 1–8 | 8 | 40 |
| Uncommon | 9–13 | 5 | 25 |
| Rare | 14–17 | 4 | 20 |
| Epic | 18–19 | 2 | 10 |
| Legendary | 20 | 1 | 5 |
| **Total** | **1–20** | **20** | **100** |

Three stages per token require **300 unique Golden Crest edition-stage images**.

## Finish assignments

| Edition | Rarity | Finish | Stable key | Controlled treatment |
|---:|---|---|---|---|
| 1 | Common | Champagne Standard | `champagne-standard` | baseline champagne-gold trim, ivory stone and clear amber glazing |
| 2 | Common | Ivory Dawn | `ivory-dawn` | slightly brighter ivory surfaces with pale-gold edge light |
| 3 | Common | Amber Window | `amber-window` | warmer amber glazing and restrained interior luminance |
| 4 | Common | Royal Blue Accent | `royal-blue-accent` | slightly stronger royal-blue glass and textile accents |
| 5 | Common | Black Marble Polish | `black-marble-polish` | higher-polish black-marble base with subtle gold veining |
| 6 | Common | Soft Gold Cornice | `soft-gold-cornice` | soft champagne-gold cornice emphasis and muted facade highlights |
| 7 | Common | Sunlit Podium | `sunlit-podium` | gentle radial podium lighting and brighter arrival-path accents |
| 8 | Common | Twilight Reflection | `twilight-reflection` | cooler sky reflections in glass while retaining warm interiors |
| 9 | Uncommon | Azure Veil | `azure-veil` | deeper azure glazing with narrow champagne highlights |
| 10 | Uncommon | Rose Champagne Edge | `rose-champagne-edge` | restrained rose-champagne metal edge treatment |
| 11 | Uncommon | Moon Pearl Stone | `moon-pearl-stone` | pearl-toned ivory stone with soft moonlit specular response |
| 12 | Uncommon | Citrine Glass | `citrine-glass` | citrine-amber glazing with controlled internal glow |
| 13 | Uncommon | Sapphire Night | `sapphire-night` | sapphire-blue glass and slightly deeper blue-hour atmosphere |
| 14 | Rare | Platinum Crest | `platinum-crest` | platinum-gold crown accents with cool specular highlights |
| 15 | Rare | Obsidian Sun | `obsidian-sun` | expanded obsidian surfaces with luminous gold sunburst inlays |
| 16 | Rare | Aurora Aureum | `aurora-aureum` | subtle gold-blue aurora reflections across upper glazing |
| 17 | Rare | Solar Flare | `solar-flare` | brighter radial crown and facade-edge illumination without bloom clipping |
| 18 | Epic | Imperial Eclipse | `imperial-eclipse` | high-contrast black marble, deep royal blue and concentrated gold edge light |
| 19 | Epic | Celestial Aureum | `celestial-aureum` | layered celestial-blue reflections with elevated champagne-gold radiance |
| 20 | Legendary | Genesis Dawn | `genesis-dawn` | unique dawn-gradient glazing, luminous radial inlays and maximum restrained gold presence |

## Non-negotiable render rules

- Preserve architecture, silhouette, amenities, exact mounted stage name, building type and framing.
- Finishes may change controlled material response, glazing tint, lighting and restrained decorative inlays only.
- The same finish key must persist across all three stages of one edition.
- No finish may introduce new rooms, pools, signs, logos, people as focal points, unsupported geometry, captions or watermarks.
- Every produced edition-stage file requires actual visual inspection, unique bytes, SHA-256, dimensions and a permanent URI before metadata release.
- The Legendary treatment must remain a material/lighting finish, not a different building.

## Validation

Run:

```bash
node scripts/validate_golden_crest_edition_finishes.mjs design/GOLDEN_CREST_EDITION_FINISH_MATRIX.json
```

Expected result:

```text
Golden Crest edition finish matrix valid: 20 finishes, 100 tokens, 300 planned stage images.
```

## Exact next action

Use the matrix to create a non-destructive edition-render pipeline and pilot one complete three-stage identity before producing all 300 outputs. Do not attach image URIs or mark Golden Crest final-certified until rendered outputs pass visual and integrity gates.
