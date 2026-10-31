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
