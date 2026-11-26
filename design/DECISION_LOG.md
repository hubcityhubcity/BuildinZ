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

## 2026-11-21 — Midnight Lounge approval provenance reconciliation

- **Owner authority:** William’s current production direction explicitly identifies `BuildinZ_Midnight_Lounge_Artwork_APPROVED.zip` and `BuildinZ_Midnight_All_Stages.png` as approved references.
- **Repository corroboration:** `design/04-midnight-lounge-evolution.md` records owner approval on October 23, 2026, and the canonical registry fixes Midnight Lounge → Nocturne Palace → Eclipse Citadel.
- **Stale package note:** The ZIP’s embedded README still says “proposed (not approved).” That label conflicts with the newer owner direction and repository record, so it is retained as historical package metadata and does not override approval.
- **Integrity:** The ZIP passed archive testing. The selected repository Stage II and III reference PNGs matched the asset manifest hashes. Pixel evolutions are separately selected after full-frame visual review.


## 2026-11-22 — Royal Mirage pixel evolution activation

- **Delegated decision:** Activate Royal Mirage Stage II/III production in registry order using the five already-selected Stage I pixel bases and the five November lineage handoffs as architecture references.
- **Medium correction:** Replace the stale generic stylized-3D wording with 1024×1536 refined high-definition isometric pixel art, matching the current standalone architecture program.
- **Authority boundary:** The canonical registry controls exact names/types; the Stage I source inventory controls selected bases; lineage candidates remain references only; older Library edition/trait maps remain legacy downstream evidence.
- **Style separation:** Sapphire, turquoise, rose-gold structural trim, sand shells and mirrored-black frames define desert-future luxury without collapsing into Golden Crest classicism or Neon Heights cyberpunk.
- **Scene boundary:** People, crowds, cameos, sky events and street scenes remain deferred. Water is elevated/private where required; no ground-level public pool.
- **Evidence:** `ROYAL_MIRAGE_PRODUCTION_BRIEF.md`, five `ROYAL_MIRAGE_*_ART_HANDOFF.md` files, `STAGE_I_PIXEL_SOURCE_INVENTORY.json`, `COLLECTION_REGISTRY.json`.
- **Exact next action:** Oasis Residences → Mirage Habitat → Sultan's Skyhold.


## 2026-11-25 — Old World Steel pixel evolution activation

- **Delegated decision:** Activate Old World Steel Stage II/III production in registry order using the five already-selected Stage I pixel bases and the five lineage QA records as architecture evidence.
- **Medium correction:** Replace stale generic stylized-3D wording with 1024×1536 refined high-definition isometric pixel art, matching the standalone architecture program.
- **Authority boundary:** The registry controls exact names/types; the Stage I source inventory controls selected bases; lineage candidates and the collection contact sheet remain references only; older Library edition maps remain legacy working-label evidence.
- **Style separation:** Red-brown brick, coal-black riveted iron, weathered copper, industrial-blue glazing and furnace-orange interiors define civic retrofuturist heavy industry without collapsing into Shadow Market noir or Velocity Row streamline modernism.
- **Scene boundary:** People, crowds, vehicles, cameos, sky events and street scenes remain deferred. Residential water is elevated/private; no ground-level public pool.
- **Integrity:** All five selected Stage I pixel bases independently reproduced their recorded 1024×1536 dimensions, byte counts, SHA-256 hashes and Git blob hashes.
- **Evidence:** `OLD_WORLD_STEEL_PRODUCTION_BRIEF.md`, five `OLD_WORLD_STEEL_*_QA.md` files, `OLD_WORLD_STEEL_COLLECTION_QA.md`, `STAGE_I_PIXEL_SOURCE_INVENTORY.json`, `ASSET_MANIFEST.json`, `COLLECTION_REGISTRY.json`.
- **Exact next action:** Foundry Flats → Riveted Habitat → Ironclad Arcology.


## 2026-11-25 — Old World Steel Residential pixel evolution selection

- **Delegated decision:** Select `riveted-habitat-v1.png` and `ironclad-arcology-v1.png` as the N07-I01 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Foundry Flats Stage I base at equal width. The older cinematic candidates supplied massing and program evidence only.
- **Acceptance:** Exact single names, residential occupancy, progressive two-/three-tower scale, supported sky structures, elevated private water, restrained planting, complete framing and preserved brick/iron/copper/blue-glass lineage all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; their byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `OLD_WORLD_STEEL_RESIDENTIAL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, street figures, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Forge Market → Steelworks Arcade → Grand Industrial Exchange.


## 2026-11-25 — Old World Steel Retail pixel evolution selection

- **Delegated decision:** Select `steelworks-arcade-v1.png` and `grand-industrial-exchange-v1.png` as the N07-I02 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Forge Market Stage I base at equal width. The older cinematic candidates supplied massing and program evidence only.
- **Acceptance:** Exact single names, clear public retail function, visible merchandise, broad escalator circulation, supported galleries/crossings, dry approaches, complete roofs/crown and preserved brick/iron/copper lineage all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; their byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `OLD_WORLD_STEEL_RETAIL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, street figures, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Gearhouse Labs → Titan Mill → Machina Nexus.


## 2026-11-25 — Old World Steel Technology pixel evolution selection

- **Delegated decision:** Select `titan-mill-v1.png` and `machina-nexus-v1.png` as the N07-I03 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Gearhouse Labs Stage I base at equal width. Older cinematic candidates supplied massing and program evidence only.
- **Acceptance:** Exact single names, secured engineering function, progressive laboratory capacity, visible robotics, supported external decks and enclosed service bridges, complete crowns/bases and preserved brick/iron/copper/blue-glass lineage all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `OLD_WORLD_STEEL_TECHNOLOGY_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, street figures, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Boiler Hall → Foundry Palace → Imperial Engineworks.


## 2026-11-25 — Old World Steel Entertainment pixel evolution selection

- **Delegated decision:** Select `foundry-palace-v1.png` and `imperial-engineworks-v1.png` as the N07-I04 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Boiler Hall Stage I base at equal width. Older cinematic candidates supplied massing and program evidence only.
- **Acceptance:** Exact single names, exactly three visible instrumented stages, expanded empty seating, progressive civic venue scale, supported audience galleries/circulation, dry approaches, complete crowns/bases and preserved brick/iron/copper/blue-glass lineage all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `OLD_WORLD_STEEL_ENTERTAINMENT_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, performers, crowds, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Rivet Monument → Iron Crown Spire → Colossus of Steel. This corrects the non-authoritative “Ironworks Beacon” working phrase to the live registry name.


## 2026-11-25 — Old World Steel Landmark pixel evolution selection

- **Delegated decision:** Select `iron-crown-spire-v1.png` and `colossus-of-steel-v1.png` as the N07-I05 Stage II/III standalone pixel architectural masters.
- **Naming correction:** The canonical Stage I name is **Rivet Monument** in the live registry, production brief table and selected asset. The prior “Ironworks Beacon” next-action phrase was stale non-authoritative text and is corrected in this checkpoint.
- **Visual basis:** Both outputs were inspected individually and beside the selected Rivet Monument Stage I base at equal width. Older cinematic candidates supplied massing and program evidence only.
- **Acceptance:** Exact single names, civic observation function, progressive enclosed telescope levels, complete lattice support, base-connected outer ribs, dry ceremonial approaches, complete finials/bases and preserved brick/iron/copper/blue-glass lineage all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `OLD_WORLD_STEEL_LANDMARK_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, visitors, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Audit and activate Moonline Harbor Stage II/III pixel evolution production before generating new artwork.


## 2026-11-25 — Moonline Harbor pixel evolution activation

- **Delegated decision:** Activate Moonline Harbor Stage II/III production in registry order using the five already-selected Stage I pixel bases and five lineage QA records as architecture evidence.
- **Medium correction:** Replace stale generic stylized-3D wording and the prior “15/15 base candidates complete” framing with the current 1024×1536 refined high-definition isometric pixel-art gate. The older cinematic candidates remain references only.
- **Authority boundary:** The registry controls exact names and types; the Stage I source inventory controls selected bases; repository lineage candidates and contact sheets are references; no Moonline Harbor Stage II/III asset is selected until an actual standalone pixel output passes visual and integrity review.
- **Library evidence:** Inspected `Moonline Harbor Waterfront Building Sprites.png`, `Moonline Harbor Stage II Upgrades.png` and `Moonline Harbor Stage III Waterfront Upgrades.png`. All are model-generated five-family composite sheets. They reinforce palette and waterfront continuity but are not owner-approved individual token art and do not satisfy the standalone asset gate.
- **Style separation:** Pearl shells/curved canopies, navy structural fins, moon-silver trim, aqua/deep-teal glass, warm interiors, substantial piles and wet urban waterfront approaches define Moonline Harbor without collapsing into Neon Heights, Old World Steel or Royal Mirage.
- **Scene boundary:** People, crowds, performers, vehicles, boats, cameos, sky events, street incidents, rarity traits and editions remain deferred. Residential water is elevated/private; no ground-level public pool.
- **Integrity:** All five selected Stage I bases independently reproduced their recorded 1024×1536 dimensions, byte counts, SHA-256 values and Git blob hashes. `PIXEL_EVOLUTION_INVENTORY.json` contains zero N08 selections at activation.
- **Evidence:** `MOONLINE_HARBOR_PRODUCTION_BRIEF.md`, five `MOONLINE_HARBOR_*_QA.md` files, `MOONLINE_HARBOR_COLLECTION_QA.md`, `STAGE_I_PIXEL_SOURCE_INVENTORY.json`, `ASSET_MANIFEST.json`, `COLLECTION_REGISTRY.json`.
- **Exact next action:** Tidelight Residences → Moonwake Habitat → Lunar Marina Arcology.


## 2026-11-25 — Moonline Harbor Residential pixel evolution selection

- **Delegated decision:** Select `moonwake-habitat-v1.png` and `lunar-marina-arcology-v1.png` as the N08-I01 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Tidelight Residences Stage I base at equal width. Older cinematic candidates supplied tower massing, private amenity program and support evidence only.
- **Acceptance:** Exact single names, inhabited residential function, decisive one-/two-/three-tower growth, supported enclosed sky lounges, progressively larger elevated-only private pools, restrained planting, complete crowns/pier/street framing and preserved pearl/navy/aqua waterfront continuity all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `MOONLINE_HARBOR_RESIDENTIAL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, street figures, vehicles, boats, rarity traits and editions remain deferred.
- **Exact next action:** Dockside Market → Pearl Galleria → High Tide Exchange.


## 2026-11-26 — Moonline Harbor Retail pixel evolution selection

- **Delegated decision:** Select `pearl-galleria-v1.png` and `high-tide-exchange-v1.png` as the N08-I02 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Dockside Market Stage I base at equal width. Older cinematic candidates supplied massing and public-retail program evidence only; their crowds and rendering were excluded.
- **Acceptance:** Exact single names, unmistakable stocked public retail, progressive multi-level atria, broad escalator circulation, physically supported galleries and promenades, complete pearl wave canopies, pier/access/street framing and preserved pearl/navy/aqua continuity all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `MOONLINE_HARBOR_RETAIL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, boats, rarity traits and editions remain deferred.
- **Exact next action:** Beacon Labs → Tidal Array → Mooncurrent Nexus.


## 2026-11-26 — Moonline Harbor Technology pixel evolution selection

- **Delegated decision:** Select `tidal-array-v1.png` and `mooncurrent-nexus-v1.png` as the N08-I03 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Beacon Labs Stage I base at equal width. Older cinematic candidates supplied massing and marine-engineering program evidence only.
- **Acceptance:** Exact single names, secured Technology function, progressive robotics and sealed water-testing capacity, two supported Stage II instrument decks, three connected Stage III laboratories, four enclosed service bridges, dominant computation/current core, complete scientific crowns and preserved pearl/navy/aqua continuity all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `MOONLINE_HARBOR_TECHNOLOGY_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, boats, rarity traits and editions remain deferred.
- **Exact next action:** Harbor Lounge → Moondeck Palace → Eclipse Marina.


## 2026-11-26 — Moonline Harbor Entertainment pixel evolution selection

- **Delegated decision:** Select `moondeck-palace-v1.png` and `eclipse-marina-v1.png` as the N08-I04 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Harbor Lounge Stage I base at equal width. Older cinematic candidates supplied massing and venue-program evidence only; their performers and crowds were excluded.
- **Acceptance:** Exact single names, exactly three separate instrumented stages at Stages II/III, progressive empty audience tiers, supported stair towers, galleries and circulation, complete layered shell crowns, full pier/street framing and preserved pearl/navy/aqua continuity all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `MOONLINE_HARBOR_ENTERTAINMENT_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, performers, crowds, vehicles, boats, rarity traits and editions remain deferred.
- **Exact next action:** Tide Beacon → Lunar Lighthouse → Crown of Tides.


## 2026-11-26 — Moonline Harbor Landmark pixel evolution selection

- **Delegated decision:** Select `lunar-lighthouse-v1.png` and `crown-of-tides-v1.png` as the N08-I05 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and beside the selected Tide Beacon Stage I base at equal width. Older cinematic candidates supplied massing and observation-program evidence only; their visitors were excluded.
- **Acceptance:** Exact single names, unoccupied civic-landmark function, one-/two-/three-gallery escalation, unoccupied brass telescope infrastructure, supported gallery stacks, base-connected Stage III ribs, complete lantern crowns, expanded dry pier/street framing and preserved pearl/navy/aqua continuity all passed.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `MOONLINE_HARBOR_LANDMARK_ART_HANDOFF.md`.
- **Neighborhood completion:** Moonline Harbor now has all ten required Stage II/III pixel masters across five complete families.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, visitors, vehicles, boats, rarity traits and editions remain deferred.
- **Exact next action:** Audit and activate Arcadia Prime Stage II/III standalone pixel production.


## 2026-11-26 — Arcadia Prime pixel evolution production activation

- **Authority decision:** William's November 19 refined isometric pixel direction supersedes the older Arcadia Prime stylized-3D production brief and any prior 15/15 candidate-completion implication.
- **Stage I evidence:** five selected 1024×1536 RGB bases were independently decoded, hash-verified and reviewed together; exact registry names and selected source paths remain canonical.
- **Reference classification:** the older candidate set and five lineage QA files remain architecture/program evidence only. The three November 19 Library images are model-generated five-building composites, not standalone selected token assets.
- **Inventory safeguard:** zero N09 entries exist in `PIXEL_EVOLUTION_INVENTORY.json`; no cinematic candidate, mockup, composite crop or placeholder is counted as a current evolution.
- **Delegated reversible standards:** exact single signage; full crown/base/street reserve; white-stone/cobalt/laurel/gold/cyan continuity; physically supported additions; clear Residential/Retail/Technology/Entertainment/Landmark separation; no people, crowds, vehicles or edition traits.
- **Exact next action:** Arcadian Residences → Harmony Habitat → Elysium Arcology.



## 2026-11-26 — Arcadia Prime Residential pixel evolution selection

- **Delegated decision:** Select `harmony-habitat-v1.png` and `elysium-arcology-v1.png` as the N09-I01 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the new QA sheet is explicitly a Library reference crop; the canonical Stage I standalone had already been independently verified in the activation checkpoint.
- **Acceptance:** Exact single names, inhabited residential function, decisive one-/two-/three-tower progression, one supported Stage II private lounge/pool zone, two supported Stage III private sky zones, elevated-only pools, restrained planting, complete framing and Arcadia palette continuity all pass.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `ARCADIA_PRIME_RESIDENTIAL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Agora Plaza → Lyceum Galleria → Infinite Forum.


## 2026-11-26 — Arcadia Prime Retail pixel evolution selection

- **Delegated decision:** Select `lyceum-galleria-v1.png` and `infinite-forum-v1.png` as the N09-I02 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the new QA sheet is explicitly a Library reference crop; the canonical Stage I standalone had already been independently verified in the activation checkpoint.
- **Acceptance:** Exact single names, unmistakable stocked public retail, decisive plaza/galleria/vertical-forum progression, two Stage II paired escalator systems, three Stage III stacked atria with paired escalators, supported galleries/promenades, complete framing and Arcadia palette continuity all pass.
- **Normalization:** Lyceum's native 1086×1448 output was proportionally resized with point sampling and placed at the bottom of a 1024×1536 navy canvas, adding only sky reserve while retaining the complete architecture.
- **Integrity:** Both selected PNGs decode at 1024×1536 RGB; byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `ARCADIA_PRIME_RETAIL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Axiom Labs → Oracle Spire → Prime Mind Nexus.


## 2026-11-26 — Arcadia Prime Technology pixel evolution selection

- **Delegated decision:** Select `oracle-spire-v1.png` and `prime-mind-nexus-v1.png` as the N09-I03 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the new QA sheet is explicitly a Library reference crop; the canonical Stage I standalone had already been independently verified in the activation checkpoint.
- **Acceptance:** Exact single names, secured scientific function, repeated robotics/testing chambers, exactly two attached and diagonally braced Stage II instrument decks, exactly three Stage III research towers, a dominant computation core, exactly four enclosed trussed service bridges, a monumental supported sensor crown, complete framing and Arcadia palette continuity all pass. No mystical/oracle imagery is present.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `ARCADIA_PRIME_TECHNOLOGY_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Muse Hall → Apollo Palace → Olympian Conservatory.


## 2026-11-26 — Arcadia Prime Entertainment pixel evolution selection

- **Delegated decision:** Select `apollo-palace-v1.png` and `olympian-conservatory-v1.png` as the N09-I04 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the new QA sheet is explicitly a Library reference crop; the canonical Stage I standalone had already been independently verified in the activation checkpoint.
- **Acceptance:** Exact single names, unmistakable empty performance function, exactly three separate instrumented stages in each evolution, exactly two central upper Stage II audience tiers, exactly three central upper Stage III tiers, substantial empty side seating, supported galleries/circulation, complete attached acoustic-shell crowns, full framing and Arcadia palette continuity all pass.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `ARCADIA_PRIME_ENTERTAINMENT_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Arcadia Beacon → Parthenon Apex → Crown of Olympus.


## 2026-11-26 — Arcadia Prime Landmark pixel evolution selection and neighborhood completion

- **Delegated decision:** Select `parthenon-apex-v1.png` and `crown-of-olympus-v1.png` as the N09-I05 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the new QA sheet is explicitly a Library reference crop; the canonical Stage I standalone had already been independently verified in the activation checkpoint.
- **Acceptance:** Exact single names, unoccupied civic-landmark function, exactly two vertically separated supported Stage II observation galleries, exactly three Stage III galleries, base-connected outer ribs/colonnades, expanded ceremonial bases, distinct attached lantern crowns, complete framing and Arcadia palette continuity all pass.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `ARCADIA_PRIME_LANDMARK_ART_HANDOFF.md`.
- **Neighborhood gate:** Arcadia Prime now has ten selected Stage II/III assets across all five complete identity families.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** audit and activate Crimson Commons, then produce Ember Residences → Scarlet Habitat → Crimson Arcology.


## 2026-11-26 — Crimson Commons activation correction and Residential pixel evolution selection

- **Inventory correction:** The canonical `portrait_candidates` table already contains five selected 1024×1536 Crimson Commons Stage I masters. The smaller `entries` table is preserved source/reference evidence and does not indicate unfinished Stage I production. Duplicate base drafts produced during reconciliation were rejected and were not added to the repository.
- **Delegated decision:** Select `scarlet-habitat-v1.png` and `crimson-arcology-v1.png` as the N10-I01 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the QA sheet is explicitly a Library reference crop; the canonical Ember Residences standalone remains `assets/pixel-stage-i/ember-residences-v3.png`.
- **Acceptance:** Exact single names, inhabited residential function, decisive one-/two-/three-tower progression, one supported Stage II private sky lounge and elevated pool, two supported Stage III private sky lounges, several elevated pools, no ground-level public pool, restrained planting, complete framing and Crimson palette continuity all pass.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `CRIMSON_COMMONS_RESIDENTIAL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Commons Market → Ruby Galleria → Cardinal Exchange.


## 2026-11-26 — Crimson Commons Retail pixel evolution selection

- **Delegated decision:** Select `ruby-galleria-v1.png` and `cardinal-exchange-v1.png` as the N10-I02 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the QA sheet is explicitly a Library reference crop; the canonical Commons Market standalone remains `assets/pixel-stage-i/commons-market-v1.png`.
- **Acceptance:** Exact single names, unmistakable stocked public retail, decisive low-market/four-level-galleria/vertical-exchange progression, two Stage II paired escalator systems, exactly three Stage III atrium zones with paired escalators, exactly two enclosed braced sky-shopping promenades, attached crowns, complete framing and Crimson palette continuity all pass.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `CRIMSON_COMMONS_RETAIL_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Redline Labs → Vermilion Spire → Phoenix Nexus.


## 2026-11-26 — Crimson Commons Technology pixel evolution selection

- **Delegated decision:** Select `vermilion-spire-v1.png` and `phoenix-nexus-v1.png` as the N10-I03 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the QA sheet is explicitly a Library reference crop; the canonical Redline Labs standalone remains `assets/pixel-stage-i/redline-labs-v2.png`.
- **Acceptance:** Exact single names, secured research function, repeated robotics/testing chambers, exactly two attached and diagonally braced Stage II instrument decks, exactly three Stage III research towers, a dominant computation core, exactly four enclosed braced service bridges, a complete attached machinery/sensor crown, full framing and Crimson palette continuity all pass. No mystical phoenix imagery is present.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `CRIMSON_COMMONS_TECHNOLOGY_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Scene events, people, vehicles, rarity traits and editions remain deferred.
- **Exact next action:** Ember Hall → Scarlet Palace → Crimson Coliseum.


## 2026-11-26 — Crimson Commons Entertainment canon correction and pixel evolution selection

- **Canon correction:** Preserve N10-I04 as a boxing-arena lineage. The source filename, selected Ember Hall architecture and dedicated Library sheet all establish a regulation ring. Older concert-hall and multiple-concert-stage wording is superseded for this identity; building type remains Entertainment.
- **Delegated decision:** Select `scarlet-palace-v1.png` and `crimson-coliseum-v1.png` as the N10-I04 Stage II/III standalone pixel architectural masters.
- **Visual basis:** Both outputs were inspected individually and together. The Stage I panel in the QA sheet is explicitly a Library reference crop; the canonical Ember Hall standalone remains `assets/pixel-stage-i/ember-hall-v1.png`.
- **Acceptance:** Exact single names, exactly one regulation boxing ring at each stage, decisive compact-hall/palace/coliseum growth, two-/three-tier empty seating escalation, supported galleries/circulation, broadcast and training infrastructure, four structurally mounted Stage III screens, complete attached crowns, full framing and Crimson palette continuity all pass.
- **Integrity:** Both selected PNGs decode natively at 1024×1536 RGB; no normalization was required. Byte counts, SHA-256 values and Git blob hashes are recorded in `PIXEL_EVOLUTION_INVENTORY.json` and `CRIMSON_COMMONS_ENTERTAINMENT_ART_HANDOFF.md`.
- **Status boundary:** Selected architectural masters are not edition exports, permanent-storage assets or launch-certified token images. Fighters, crowds, people, vehicles, event traits, rarity traits and editions remain deferred.
- **Exact next action:** Bloodmoon Beacon → Cardinal Apex → Crown of Flame.
