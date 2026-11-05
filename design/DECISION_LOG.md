# BuildinZ Genesis decision log

Canonical decision log recorded October 31, 2026 (America/Chicago). Entries distinguish owner-fixed canon, earlier approved canon, delegated production decisions and unresolved owner-controlled actions.

| ID | Decision | Authority | Status | Evidence / effect |
|---|---|---|---|---|
| D-001 | Genesis supply is 1,000: 10 neighborhoods × 5 identities × 20 editions. | Owner-fixed; Foundation Blueprint verified | Active | `GENESIS_LAUNCH_SCOPE_2026-10-30.md`; validator enforces arithmetic |
| D-002 | Every identity has three permanent stages; identity and base rarity survive evolution and resale. | Owner-fixed | Active | Registry and token manifest encode all stage names and transfer-persistence flag |
| D-003 | Building type is stable and separate from exact stage-specific mounted name. | Owner-fixed consistency direction | Active | `COLLECTION_CONSISTENCY_STANDARD.md` |
| D-004 | Genesis excludes the game. Utility is points-first; BRICK remains a placeholder with no initial liquidity or income guarantee. | Owner-fixed | Active | Scope, registry and collector disclosures |
| D-005 | Preserve source art; corrections are versioned derivatives with their own provenance. | Owner-fixed consistency direction | Active | Existing Neon Heights handoffs and manifests |
| D-006 | Midnight Library bytes are authoritative source geometry, but the embedded README's “proposed/not approved” wording remains recorded. | Source evidence plus current delegated authority | Active | `MIDNIGHT_APPROVED_SOURCE_AUDIT.md` |
| D-007 | Adopt Golden Crest, Shadow Market, Skygarden District, Velocity Row, Royal Mirage, Old World Steel, Moonline Harbor, Arcadia Prime and Crimson Commons as the remaining neighborhood themes. | Foundation working directions adopted under delegated production authority | Active and reversible before dependent final art | `COLLECTION_REGISTRY.json` |
| D-008 | Use stable types Residential, Retail, Technology, Entertainment and Landmark in every neighborhood. | Extension of existing collection structure under delegated authority | Active | 50-identity registry |
| D-009 | Assign 20 editions per identity as Common 8, Uncommon 5, Rare 4, Epic 2 and Legendary 1. | Delegated production decision | Active | Global totals 400/250/200/100/50 |
| D-010 | Stable token IDs are deterministic: neighborhood_id × 100 + (identity_ordinal − 1) × 20 + edition. | Delegated implementation decision | Active | Produces contiguous IDs 1–1000 |
| D-011 | Mint at Stage I; evolution changes stage state and metadata for the same token rather than minting a replacement. | Owner architecture translated into implementation rule | Active; contract unimplemented | Registry/manifest now; contract tests still required |
| D-012 | Registry-only tokens carry no placeholder image URI and cannot be called metadata-complete. | Delegated quality gate | Active | Validator rejects image/image_uri fields in registry manifest |
| D-013 | Website prototype state remains explicitly simulated until production contract/network configuration is verified. | Safety and accuracy requirement | Active | Existing site disclosure; production integration pending |
| D-014 | Mint price, allocation, receiving wallet, funding, signatures and launch timing remain owner-controlled. | Owner action required | Unresolved by design | Launch runbook gate |

## Change rule

A later decision may supersede an entry only by adding a new dated entry that names the superseded ID and explains migration impact on artwork, metadata, token IDs and contracts. Never silently reorder identities after token IDs are used outside the repository.


## 2026-11-04 — Golden Crest edition finishes

- **Delegated decision:** Adopt a deterministic 20-finish matrix for Golden Crest, keyed directly to canonical edition numbers 1–20 and rarity ranges 8/5/4/2/1.
- **Persistence rule:** A token keeps the same edition finish through Stage I, II and III; evolution changes architecture, not edition identity.
- **Allowed variation:** Controlled material response, glazing tint, lighting and restrained decorative inlays.
- **Forbidden variation:** Architecture, silhouette, amenities, exact mounted name, building type, framing, logos, captions, watermarks or unsupported geometry.
- **Status boundary:** The matrix is a validated production plan only. Its 300 Golden Crest edition-stage images are not yet rendered, visually inspected, assigned permanent URIs or final-certified.
- **Evidence:** `GOLDEN_CREST_EDITION_FINISH_MATRIX.json`, `GOLDEN_CREST_EDITION_FINISH_MATRIX.md`, `GOLDEN_CREST_COLLECTION_QA.md`.


## 2026-11-04 — Shadow Market production language

- **Delegated decision:** Adopt obsidian, smoked violet, aged copper, black glass and restrained acid-green guidance as Shadow Market's production palette.
- **Style separation:** Noir mercantile silhouettes, deep overhangs, screened passages and physically supported bridges distinguish Shadow Market from Neon Heights cyberpunk saturation and Golden Crest ceremonial ivory/gold.
- **Residential rule:** Private resident amenities only; no public ground-level pool or retail frontage.
- **Authority boundary:** Neighborhood theme derives from the Foundation working set; all exact non-Neon stage names and continuity details remain delegated production decisions.
- **Evidence:** `SHADOW_MARKET_PRODUCTION_BRIEF.md`.


## 2026-11-04 — Shadow Market edition finishes

- **Delegated decision:** Adopt a deterministic 20-finish matrix for Shadow Market, keyed directly to canonical edition numbers 1–20 and rarity ranges 8/5/4/2/1.
- **Persistence rule:** A token keeps the same edition finish through Stage I, II and III; evolution changes architecture, not edition identity.
- **Allowed variation:** Controlled obsidian/copper material response, smoked-violet glazing tint, restrained acid-green guidance, lighting and decorative inlays.
- **Forbidden variation:** Architecture, silhouette, amenities, exact mounted name, building type, framing, logos, captions, watermarks or unsupported geometry.
- **Status boundary:** The matrix is a validated production plan only. Its 300 Shadow Market edition-stage images are not yet rendered, visually inspected, assigned permanent URIs or final-certified.
- **Evidence:** `SHADOW_MARKET_EDITION_FINISH_MATRIX.json`, `SHADOW_MARKET_EDITION_FINISH_MATRIX.md`, `SHADOW_MARKET_COLLECTION_QA.md`.


## 2026-11-04 — Skygarden District production language

- **Delegated decision:** Adopt emerald, mint, sky blue, pearl structural frames and warm wood as Skygarden District's production palette, rendered in a bright airy post-rain dawn atmosphere.
- **Style separation:** Branching pearl frames, broad trellis canopies, planted ribbons and light sky structures distinguish Skygarden from Neon Heights cyberpunk saturation, Golden Crest ceremonial palaces and Shadow Market noir massing.
- **Greenery rule:** Planting is controlled architectural infrastructure; it must not swallow facades, hide exact names or substitute foliage for stage escalation.
- **Residential rule:** Private elevated amenities only; no public or ground-level pool, retail frontage or hotel program.
- **Authority boundary:** Neighborhood theme derives from the Foundation working set; exact stage names come from the canonical registry, while continuity anchors and acceptance decisions remain delegated production decisions.
- **Evidence:** `SKYGARDEN_DISTRICT_PRODUCTION_BRIEF.md`, `SKYGARDEN_DISTRICT_RESIDENTIAL_ART_HANDOFF.md`.
