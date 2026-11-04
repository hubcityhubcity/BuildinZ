# Shadow Market edition finish matrix

Recorded November 4, 2026 (America/Chicago).

## Status boundary

This is a delegated, reversible production plan. It does **not** mean the 300 Shadow Market edition-stage images have been rendered, inspected, uploaded or final-certified. Canonical edition numbers and rarity tiers remain inherited from `COLLECTION_REGISTRY.json`.

Each of Shadow Market's five identities has 20 tokens. The same edition finish follows its token through Stage I, II and III, so evolution changes architecture while preserving the token's edition identity.

## Canonical allocation

| Rarity | Edition numbers | Per identity | Shadow Market total |
|---|---|---:|---:|
| Common | 1–8 | 8 | 40 |
| Uncommon | 9–13 | 5 | 25 |
| Rare | 14–17 | 4 | 20 |
| Epic | 18–19 | 2 | 10 |
| Legendary | 20 | 1 | 5 |
| **Total** | **1–20** | **20** | **100** |

Three stages per token require **300 unique Shadow Market edition-stage images**.

## Finish assignments

| Edition | Rarity | Finish | Stable key | Controlled treatment |
|---:|---|---|---|---|
| 1 | Common | Obsidian Standard | `obsidian-standard` | baseline polished obsidian, aged-copper trim, smoked-violet glass and restrained acid-green guide |
| 2 | Common | Smoked Violet Glass | `smoked-violet-glass` | slightly deeper smoked-violet glazing with unchanged interior visibility |
| 3 | Common | Aged Copper Edge | `aged-copper-edge` | warmer aged-copper ribs and restrained edge highlights |
| 4 | Common | Blackstone Polish | `blackstone-polish` | higher-polish black-stone base with subtle wet reflections |
| 5 | Common | Acid Guide | `acid-guide` | slightly brighter but still narrow acid-green wayfinding lines |
| 6 | Common | Rain Mirror | `rain-mirror` | stronger rain-slick plaza reflections without changing atmosphere or geometry |
| 7 | Common | Veil Glow | `veil-glow` | soft violet interior veil light with muted copper exterior response |
| 8 | Common | Midnight Matte | `midnight-matte` | lower-gloss obsidian upper surfaces with controlled black-glass contrast |
| 9 | Uncommon | Amethyst Smoke | `amethyst-smoke` | amethyst-shifted smoked glass with narrow copper highlights |
| 10 | Uncommon | Verdigris Copper | `verdigris-copper` | restrained verdigris patina on selected aged-copper structural edges |
| 11 | Uncommon | Moonlit Graphite | `moonlit-graphite` | cool graphite specular response on obsidian planes under moonlight |
| 12 | Uncommon | Ultraviolet Glass | `ultraviolet-glass` | deeper ultraviolet glazing with controlled internal luminance |
| 13 | Uncommon | Phantom Brass | `phantom-brass` | dark brass-copper trim with pale violet edge reflections |
| 14 | Rare | Eclipse Inlay | `eclipse-inlay` | restrained eclipse-ring inlays across existing black-stone surfaces |
| 15 | Rare | Nightwire Circuit | `nightwire-circuit` | fine copper and acid-green circuit-like inlays limited to existing ribs and paths |
| 16 | Rare | Void Pearl | `void-pearl` | pearl-black obsidian response with subtle violet iridescence |
| 17 | Rare | Veiled Aurora | `veiled-aurora` | controlled violet-green aurora reflections across upper glass only |
| 18 | Epic | Sovereign Nocturne | `sovereign-nocturne` | high-contrast obsidian, concentrated copper crowns and deep violet glass |
| 19 | Epic | Spectral Masquerade | `spectral-masquerade` | layered spectral-violet reflections with elevated copper and green edge light |
| 20 | Legendary | Genesis Umbra | `genesis-umbra` | unique black-violet gradient glazing, luminous veil inlays and maximum restrained copper presence |

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
node scripts/validate_shadow_market_edition_finishes.mjs design/SHADOW_MARKET_EDITION_FINISH_MATRIX.json
```

Expected result:

```text
Shadow Market edition finish matrix valid: 20 finishes, 100 tokens, 300 planned stage images.
```

## Exact next action

Prepare the Skygarden District production brief and begin its Residential evolution while a non-destructive Shadow Market edition-render pipeline is developed. Do not attach image URIs or mark Shadow Market final-certified until rendered outputs pass visual and integrity gates.

