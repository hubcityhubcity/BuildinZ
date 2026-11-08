# BuildinZ Genesis launch checklist

Canonical checklist recorded October 31, 2026 (America/Chicago). A checked item means the stated evidence exists; it does not imply downstream launch readiness.

## 0. Governance and canon

- [x] Fixed owner scope recorded: 1,000 tokens = 10 neighborhoods × 5 identities × 20 editions.
- [x] Three permanent stages retained; identity and base rarity persist through evolution and resale.
- [x] Game excluded from Genesis; points-first utility and BRICK placeholder disclosed without liquidity or income promises.
- [x] Naming/style rules recorded in `COLLECTION_CONSISTENCY_STANDARD.md`.
- [x] Decision authority separated in `DECISION_LOG.md`.
- [x] Current handoff maintained in `LAUNCH_HANDOFF.md`.

## 1. Source and artwork audit

- [x] Designated Midnight ZIP/master byte-audited against repository originals.
- [x] Existing Neon Heights prototype lineages corrected and integrated with versioned derivatives.
- [x] Golden Crest 15-master equal-width review passes asset loading, name/framing continuity, function separation and stage progression; evidence in `GOLDEN_CREST_COLLECTION_QA.md`.
- [x] Golden Crest 20-finish edition matrix maps deterministically to the canonical 8/5/4/2/1 rarity schedule and passes its validator; the 300 actual edition-stage renders remain unproduced.
- [x] Shadow Market production brief committed with five exact lineages, palette separation, continuity anchors and per-output rejection gates.
- [x] Consolidate one collection-wide asset manifest with every repository source/derivative, Git blob evidence, known hashes/dimensions, provenance state and release state.
- [ ] Certify final export framing, typography and image integrity for all 15 Neon Heights stage assets.
- [ ] Produce and visually inspect all 135 non-Neon stage designs. Golden Crest and Shadow Market each have 15 selected base candidates and pass collection-level QA; Skygarden District has 15 selected base candidates and passes equal-width collection QA; Velocity Row and Royal Mirage each have 15 base lineage candidates passing equal-width collection QA; Old World Steel has 15 selected base candidates passing collection review, with production safe-area/export checks open; Moonline Harbor has all 15 base candidates selected and collection review recorded, with safe-area/export checks open; Arcadia Prime has fourteen selected candidates: four lineages reviewed and Landmark I/II individually inspected; 15 non-Neon stage masters remain without selected candidates; Nexus side and Beacon top margins require final widening. Deterministic edition-finish plans exist for Golden Crest and Shadow Market; edition rendering and final certification remain open.
- [ ] Produce and validate edition-level visual differentiation without counting placeholders.

## 2. Registry, editions and metadata

- [x] Canonical 10-neighborhood/50-identity/150-stage registry committed.
- [x] Deterministic token IDs 1–1000 committed.
- [x] Per-identity rarity allocation committed: 8/5/4/2/1 across Common/Uncommon/Rare/Epic/Legendary.
- [x] Automated arithmetic, uniqueness and mapping validator committed and passing.
- [ ] Assign verified three-stage image checksums and permanent URIs to every token.
- [ ] Generate standards-compatible stage metadata for all tokens.
- [ ] Validate metadata schema, URI resolution, image decoding and stage/name agreement.
- [ ] Freeze final metadata and retain a reproducible release manifest.

## 3. Collector website

- [x] Add separate full 1,000-token registry/gallery **preview** with rarity, stage, type, neighborhood and search filters; preserve simulation-only disclosures.
- [x] Run automated Chromium desktop and 360px mobile-emulation gallery QA, including missing-art fail-closed behavior and homepage link (9/9 checks, [November 4 CI](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41796630697)). **This does not replace physical-device and accessibility QA.**

- [x] Neon Heights prototype distinguishes saved stage and building type.
- [x] Existing prototype regression checks cover stage switching and legacy saves.
- [ ] Add all neighborhoods, rarity filters and full gallery data from canonical registry.
- [ ] Finish accessible evolution explanation, roadmap, FAQ and delivered/future disclosures.
- [ ] Connect production wallet/network handling only after verified contract configuration.
- [ ] Complete desktop, narrow-mobile, keyboard, contrast, image-failure and navigation QA.

## 4. Polygon contracts and integration

- [x] Extend contract-prototype regression coverage with ten adversarial/fuzz tests. [November 4 Foundry CI](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41796504950): **21/21 tests passed**. This is **not** an independent audit.

**November 3 prototype checkpoint:** A limited [ERC-721 Solidity draft](../contracts/BuildinZGenesis.sol) and [Foundry test suite](../test/BuildinZGenesis.t.sol) compile and pass in [CI run 41728482051](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41728482051). This is an engineering milestone only: production contract requirements and security gates remain unchecked. See [handoff](POLYGON_CONTRACT_PROTOTYPE_HANDOFF.md).

- [x] Implement an isolated 1,000-supply, forward-only evolution contract **prototype** with default-closed mint/evolution and ERC-4906 stage events.
- [x] Compile the prototype and pass initial positive/negative unit tests in CI.
- [ ] Integrate final approved BRICK/points evolution authorization/settlement (draft upgrade is fee-free for testing).

- [ ] Implement capped 1,000-supply mint contract.
- [ ] Implement owner-authorized permanent Stage I→II→III evolution on the same token.
- [ ] Verify evolution state persists across transfers.
- [ ] Test permissions, supply limits, configurable price, withdraw path and failure cases locally.
- [ ] Test metadata stage switching and mint-to-gallery integration on a public test network.
- [ ] Obtain independent security review; do not describe local tests as an audit.
- [ ] Record final source commit, compiler settings, deployment addresses and verification links.

## 5. Release audit and owner-controlled actions

- [ ] Run separate final audit against every committed file and checklist gate.
- [ ] Assemble reproducible release bundle and launch runbook.
- [ ] Verify permanent storage availability and final contract/site configuration.
- [ ] Owner selects mint price, allocation, receiving wallet and launch timing.
- [ ] Owner funds and signs deployment/mint-opening transactions.
- [ ] Open public mint and send public announcements only after explicit authorization.

## Final export correction queue

- [ ] Close every recorded item in [FINAL_EXPORT_CORRECTION_QUEUE.md](FINAL_EXPORT_CORRECTION_QUEUE.md) with actual corrected-file and visual evidence before final certification.

## Current exact next action

Generate Crown of Flame from Bloodmoon Beacon v1 and Cardinal Apex v1 after inspecting originals: broad three-gallery observation crown, attached structural ribs and complete ember lantern above expanded civic base; then Landmark comparison and full Crimson review. Crimson14/15;149/150 selected base slots;1 remains;zero certified.

## Crown of Olympus checkpoint — November 7, 2026

Arcadia Prime now has15/15 individually selected base candidates; Landmark/full-neighborhood comparison remains pending. Current totals:168 assets,120 non-Neon selected,15 base stages remaining,zero final-certified. Next:actual Landmark/full-neighborhood visual QA; preserve all export correction gates.

## Arcadia collection review — November 7, 2026

Actual15-source equal-width comparison completed; see ARCADIA_PRIME_COLLECTION_QA.md and ARCADIA_PRIME_LANDMARK_QA.md.15/15 base candidates retained, zero final-certified. Final camera/scale/background consistency and Residential side safe areas remain open alongside Beacon/Nexus corrections. No art generated or certification advanced. Next:Crimson Commons production brief verified against registry. Current coverage135/150 selected;15 remaining.

## Crimson Commons production checkpoint — November 7, 2026

Registry N10/index9 names/palette verified. CRIMSON_COMMONS_PRODUCTION_BRIEF.md defines all15 exact stage forms, functional separation, framing/support/inspection gates and authority. No art generated or count advanced. Next:Ember Residences → Scarlet Habitat → Crimson Arcology, then Residential comparison. Global135/150 selected; final-certified0; all export corrections stay open.

## Ember Residences checkpoint — November 7, 2026

Built-in generation produced first N10-I01 Residential candidate using committed Crimson brief: bone piers/charcoal/crimson/burgundy/brass, furnished apartment balconies, one private rooftop pool/lounge and dry civic arrival. Actual output inspected: exact EMBER RESIDENCES, domestic function, attached balconies, roof and entrance visible. Wider plaza reaches frame edges; full site safe-area/camera consistency remain final export gates. No metric floor/height claim. Agent selection, not prior owner approval/final certification.

Path assets/candidates/crimson-commons-ember-residences-stage-1-v1.png;3106160 bytes;1024×1536;PNG verified;SHA-256 a097824c28cdddac9ed27dc9a28e48ea6f596af01b0689598c3452afa85cf615;Git blob 2a57ce1417e7bb9e24c527f28485337dffcf4c5a. Original preserved.

Totals169 assets;121 non-Neon selected +15 Neon prototype stages=136/150 base slots;14 remaining;zero final-certified. Crimson1/15. Next:Scarlet Habitat from this source, twin taller apartment towers with supported enclosed private sky lounge and larger elevated pool, then Crimson Arcology/Residential comparison. All existing export/edition/metadata/integration/security gates remain open. No paid/wallet/deploy/mint/public messaging action.

## Scarlet Habitat checkpoint — November 7, 2026

Built-in generation used Ember Residences v1 reference. Actual output inspected: exact name, twin tall domestic towers, enclosed furnished private sky lounge, diagonal braces tied into towers, larger elevated resident pool and complete roofs/entry. Crimson/burgundy/bone/charcoal/brass retained. No metric floor/height claim. Agent candidate choice, not prior owner approval/final certification; final site safe-area/style and lineage comparison remain open.

Path assets/candidates/crimson-commons-scarlet-habitat-stage-2-v1.png;3339091 bytes;1024×1536;PNG verified;SHA-256 c923d17135cc43c76934e9edca394bee0d5bb042983e5dda044bae7481baa82e;Git blob 17a63c24a046c443e8e2566638813a37ffafeebe. Original/reference retained.

Totals170 assets;122 non-Neon selected +15 Neon prototypes=137/150 base slots;13 remaining;zero final-certified. Crimson2/15. Next:Crimson Arcology with three towers, supported multi-zone private resort/several elevated pools and attached ember-lit crown, then equal-width Residential review. All existing export/edition/metadata/integration/security gates open. No paid/wallet/deploy/mint/public messaging action.

## Crimson Arcology checkpoint — November 7, 2026

Built-in generation used Scarlet Habitat v1 reference. Actual output inspected: exact CRIMSON ARCOLOGY, three domestic towers, attached crown, two elevated enclosed lounge/resort levels on large diagonal braces, several separate elevated pools and private seating. Palette retained. Top crown margin tight; wider final export required. No metric height claim; agent candidate choice, not owner approval/final certification. Original preserved.

Path assets/candidates/crimson-commons-crimson-arcology-stage-3-v1.png;3279182 bytes;1024×1536;PNG verified;SHA-256 aa3f774e7e9684cc79772463fe4d8f56a9bc92f44de947f2115ea106ec8e1102;Git blob f01f32381a7fe9ac19e51cf8eb4352dbe4cc415b.

Totals171 assets;123 non-Neon selected+15 Neon prototypes=138/150 base slots;12 remaining;zero final-certified. Crimson3/15. Exact next:actual equal-width Residential comparison before Commons Market. Preserve III top margin and I/II site safe-area/style review on final correction queue. No paid/wallet/deploy/mint/public messaging action.

## Residential comparison checkpoint — November 7, 2026

Actual equal-width three-source review recorded in CRIMSON_COMMONS_RESIDENTIAL_QA.md. Core lineage gates pass; final III top margin, site safe areas and camera/style remain open. No new art/count advancement:138/150 base stages selected;12 remaining;zero certified. Exact next:Commons Market, then Ruby Galleria/Cardinal Exchange and Retail comparison.

## Commons Market checkpoint — November 7, 2026

Built-in generation followed Crimson brief for low two-level public shopping arcade with visible merchandise, bone piers/charcoal/crimson-burgundy/brass, covered galleries and dry civic approach. Actual output inspected: exact COMMONS MARKET, clothing/produce/books/housewares and shoppers, supported upper gallery, roof/steps present. Side clearance tight and camera near-symmetric: final wider framing/style review required. No metric floor/height claim. Delegated base candidate, not owner approval/final-certified.

Path assets/candidates/crimson-commons-commons-market-stage-1-v1.png;2532615 bytes;1024×1536;PNG verified;SHA-256 128673ffedd4f39cb613fb32d02117966df71690498d9c664ff1d84f77acdc1a;Git blob 6830e8299cadf17c74a6ed90a253ed9a6a15d495. Generated original preserved.

Totals172 assets;124 non-Neon+15 Neon prototypes=139/150 base slots;11 remaining;zero final-certified. Crimson4/15. Next:Ruby Galleria using this source, taller multilevel shops/escalators/supported galleries; then Cardinal Exchange and Retail review. All existing export/edition/metadata/integration/security gates open. No paid/wallet/deploy/mint/public message action.


## Ruby Galleria checkpoint — November 8, 2026 UTC

Restored original Commons Market from earlier chat attachment; SHA-256 128673ffedd4f39cb613fb32d02117966df71690498d9c664ff1d84f77acdc1a matches repository manifest. Inspected original before built-in image generation. Actual Ruby output inspected: exact RUBY GALLERIA; taller retail tiers, central escalators, stocked clothing/produce/books/housewares shops and supported galleries; bone/charcoal/crimson-burgundy/brass, dry civic platform. Generated image shows three visible retail tiers rather than the requested four: select for lineage growth, do not claim four floors. Camera remains nearly symmetric and side clearance tight; final camera/framing certification stays open. Delegated production selection, not prior owner approval.

Path assets/candidates/crimson-commons-ruby-galleria-stage-2-v1.png;2567784 bytes;1024×1536;PNG decode verified;SHA-256 a5e196d3df3a6ddcc7b0e0eee8e65b1590e0e97ecec537cdf96753ce25297a24;Git blob 77608dede8ed51c2afc417198d55fc7e519d0332. Original generated output preserved.

Totals173 assets;125 non-Neon selected+15 Neon prototypes=140/150 base slots;10 remaining;zero final-certified. Generate Cardinal Exchange from the selected Commons Market and Ruby Galleria originals after visually inspecting both: vertical retail exchange, stacked atria, supported sky shopping promenades and broad attached structural crown. Then perform equal-width Retail I/II/III comparison. Crimson5/15 selected; global140/150 base slots,10 remaining; final-certified0. Final camera/framing corrections, editions, metadata, integration, security review and release gates remain open.

Generation prompt (built-in tool): Use case: stylized-concept. BuildinZ Crimson Commons Retail Stage II candidate, portrait 1024x1536. Reference image is the existing Stage I Commons Market: preserve its bone structural piers, charcoal trim, crimson/burgundy panels, fine warm brass edges, banner language, dry stepped civic plaza and stocked retail identity. Evolve it clearly into a taller four-level RUBY GALLERIA with open central shopping atrium, visible paired escalators between levels, structurally supported galleries, clothing, produce, books and housewares shops, small shoppers for scale. Elevated isometric three-quarter corner view, both wings and depth visible. Fully frame roof, wings, platform and approach with generous side margins; no cropped architecture. Beautiful precise architectural 3D render, warm evening shop lighting and restrained sunset city backdrop. Exact sole building name mounted in clean gold sans-serif letters: "RUBY GALLERIA". No Commons Market lettering, no other words or stage labels. Increasing architectural complexity from source, retain grounded civic retail character. No pools, residences, labs, theatre, casino, flames, floating floors or unsupported balconies. Reserve monumental vertical exchange crown for Stage III.


## Cardinal Exchange checkpoint — November 7, 2026

Restored and visually inspected exact Commons Market and Ruby Galleria references; their SHA-256 values match manifest. Built-in generation evolved the family into taller stacked atria/shopping galleries, paired escalators, visible structural side braces and broad layered crown. Actual output inspected: exact CARDINAL EXCHANGE, stocked retail, bone/crimson/burgundy/charcoal/brass and dry steps. Near-symmetric camera and tight side margins remain final correction gates. Do not certify requested six floors from prompt. Delegated candidate selection, not owner approval/final certification.

assets/candidates/crimson-commons-cardinal-exchange-stage-3-v1.png;2668901 bytes;1024x1536;PNG verified;SHA-256 e210976480e3f8c5b837cfb07c4e390ebb820e7e4c30a6c17601016af92397f5;Git blob f9ee728c2f17693d7120c27e7536d957207bdf4d. Original preserved. Totals174 assets,126 non-Neon candidates+15 Neon prototypes=141/150. Perform equal-width Crimson Commons Retail I/II/III comparison using preserved originals before Redline Labs. Crimson6/15 selected;141/150 global base slots;9 remain;zero final-certified. Camera/framing, editions, metadata, website/contracts and release gates remain open.


## Retail comparison checkpoint — November 7, 2026

Actual equal-width original-source comparison completed; names, growing mass, palette, retail function and visible supports pass candidate lineage review. Near-symmetric camera, tight sides and final crown/program/export checks remain open. Evidence:CRIMSON_COMMONS_RETAIL_QA.md. Generate Redline Labs under CRIMSON_COMMONS_PRODUCTION_BRIEF.md: secured engineering labs, visible robotics/test benches and diagnostic glass; then Vermilion Spire, Phoenix Nexus and Technology comparison. Retail core lineage reviewed in CRIMSON_COMMONS_RETAIL_QA.md; final camera/framing corrections remain open. Counts unchanged:141/150 selected base stages,9 remain,zero final-certified.


## Redline Labs checkpoint — November 7, 2026

Generated and inspected v1: correct name, laboratory function/palette, strong corner camera, but right low wing clipped; rejected and preserved. Built-in framing correction v2 restores complete right wing and visible base/roof. Actual v2 inspected: robotics, diagnostic screens, test benches, researchers, secured entrance and bone structural braces. Selected v2 under delegated production authority, not prior owner approval/final certification. PNG decode verified1024x1536. V1:2920907 bytes,SHA256 da986db4be42fd69bee26b270ddc449f3ee771e108e2cf112a13d716eb107df0. V2:2794209 bytes,SHA256 530634c9c42706036113f42078aa6e06020d7ad7f14a0d7b97dab61d19272c67. Manifest records Git hashes. Inventory176 files;127 non-Neon candidates+15 Neon prototypes=142/150 base slots. Final export/style/crop checks remain open.

Generate Vermilion Spire from selected Redline Labs v2 after inspecting original: taller research spire, enclosed testing chambers, braced instrument decks; then Phoenix Nexus and Technology comparison. Crimson7/15;142/150 selected base slots;8 remain;zero certified.

Original generation prompt: Use case: stylized-concept. BuildinZ Crimson Commons Technology Stage I: REDLINE LABS. Premium architectural isometric 3D render in portrait1024x1536. Compact secured two-level engineering research building with bone structural piers, charcoal metal frames, crimson and burgundy facade panels, thin warm brass edges, vertical burgundy banners without text. Clearly visible through large diagnostic glass walls: industrial robotic arms, engineering test benches, instruments and researchers, secure glazed entrance. No shops, apartment balconies, pools or theatre. Attached low roof instrumentation and mechanical vents, supported structure; reserve tall research spire and connected towers for later evolutions. Elevated three-quarter CORNER view with visibly unequal facade widths, strong side depth, full roof, all wings, base corners and dry civic approach inside image with generous margins. Restrained sunset urban backdrop, warm architectural lighting and muted laboratory task lights. Exact sole mounted entrance name in clean gold sans-serif: "REDLINE LABS". No other words, type labels or stage labels. No flames, floating decks or cropped architecture.
Correction: pull camera back; preserve exact building, name/function/materials; complete right wing and show entire base/roof/approach with margins. Actual output visually checked; no numerical safe-area claim.


## Vermilion Spire checkpoint — November 8, 2026

Inspected selected Redline Labs v2 original before built-in generation. Actual StageII output inspected: exact VERMILION SPIRE; clearly taller single research tower with robotics/testing chambers, bone diagonal braces, sensor/mechanical crown, preserved low laboratory wing and secured dry civic campus. Tip, wings and base visible inside frame; final numerical safe-area/export and full lineage QA remain open. Delegated candidate selection, not prior owner approval/final certification.

assets/candidates/crimson-commons-vermilion-spire-stage-2-v1.png;2767766 bytes;1024x1536;PNG verified;SHA256 77583d5d36faec0a7304dc16230fd861321f02e754286cf69ba51887b17fa938;Git blob f84dd146d8487ea1776fd75cd6fa6a7142b0048a.177 inventory assets;128 non-Neon+15 Neon prototypes=143/150 base slots. Original preserved. Generate Phoenix Nexus from selected Redline Labs v2 and Vermilion Spire v1 after inspecting both originals: connected research towers, visible computation core, enclosed braced service bridges and attached machinery crown; then equal-width Technology comparison. Crimson8/15;143/150 base slots selected;7 remain;zero final-certified.

Built-in generation prompt: BuildinZ Crimson Commons Technology Stage II VERMILION SPIRE. Reference is selected Redline Labs Stage I: preserve bone structural braces, charcoal frames, crimson/burgundy panels, warm brass edges, robotics engineering labs and secured dry civic campus. Evolve into a clearly taller single research spire rising above original low laboratory wing, enclosed glazed testing chambers, visibly braced scientific instrument decks with sensors, robotic arms and researchers through diagnostic glass. Retain grounded visible structural supports and mechanical roof equipment; reserve connected multiple towers for Stage III. Exact sole mounted entrance name in gold sans-serif: VERMILION SPIRE. Remove REDLINE LABS. No other wording or stage labels. Premium isometric elevated three-quarter CORNER architectural3D, unequal facade widths and strong side depth, sunset. Portrait1024x1536. Pull camera back to fit ENTIRE spire tip, low wings, fenced base and approach with generous margins on all sides. No clipped architecture, shops, apartments, pools, theatre, flames or floating decks.


## Phoenix Nexus checkpoint — November 8, 2026

Inspected both selected technology originals before built-in generation. Actual output inspected: correct PHOENIX NEXUS signage; two research towers, attached enclosed glazed trussed bridges, central computation/server chamber, robotics/testing labs, bone diagonal braces and machinery/sensor crowns. Palette and secured dry campus retained. Complete tips and base visible; side margins tight, final safe-area/export check open. Delegated base candidate selection, not owner approval or final certification.

assets/candidates/crimson-commons-phoenix-nexus-stage-3-v1.png;2940983 bytes;1024x1536;PNG verified;SHA256 b43d23f481532b1ef165d00afb01e7a76f98fce5530399ee7551b8d54c34f6c8;Git blob df125ddad834200da3d081bee2a3eda75bda3658. Original preserved.178 inventory assets;129 non-Neon+15 Neon prototypes=144/150 base slots. Perform equal-width Crimson Commons Technology I/II/III comparison from Redline Labs v2, Vermilion Spire v1 and Phoenix Nexus v1; then Ember Hall. Crimson9/15;144/150 selected base slots;6 remain;zero final-certified.

Built-in generation prompt: BuildinZ Crimson Commons Technology Stage III PHOENIX NEXUS. Reference1 Redline Labs and reference2 Vermilion Spire are same permanent evolution family. Preserve bone diagonal structural braces, charcoal frames, crimson/burgundy panels, warm brass edges, secured dry civic campus and visible robotics/research labs. Evolve into larger connected research towers, two tall towers joined by ENCLOSED glazed service bridges with visible trusses firmly attached to tower piers, visible computation core/server arrays in central glazed research section, robotic testing chambers, attached machinery/sensor crown. Clearly greater mass/program than StageII. Exact sole mounted entrance name PHOENIX NEXUS in clean gold sans-serif. Remove prior names; no stage/type labels. Premium isometric elevated three-quarter CORNER architectural3D, unequal facade widths, sunset lighting. Portrait1024x1536. Full tips, all wings, fenced base and approach inside frame with generous visible margins. No pools, apartments, shops, theatres, flames or unsupported floating decks. Preserve laboratory functional identity.


## Technology comparison checkpoint — November 8, 2026

Actual three-original equal-width comparison completed; core names/function/palette/supports/mass progression pass candidate lineage review. Final III margin, mobile signage and consistent camera/export checks open. Evidence:CRIMSON_COMMONS_TECHNOLOGY_QA.md. No counts advanced. Generate Ember Hall per Crimson brief: compact concert hall, raised performance stage with instruments and visible audience seating, supported architecture, exact name, full framing; then Scarlet Palace/Crimson Coliseum. Technology core lineage reviewed; final safe-area/export checks remain open.144/150 selected base slots;6 remain;zero certified.


## Ember Hall checkpoint — November 8, 2026

Built-in generation per Crimson brief. Actual output inspected: exact EMBER HALL; raised stage with piano, drums, microphones and audience seating; supported upper side gallery; bone structural braces/crimson-burgundy/charcoal/brass and dry civic steps. Roof/base inside frame; side clearance tight and final camera/framing/export checks remain open. Delegated candidate selection, not prior owner approval/final certification.

assets/candidates/crimson-commons-ember-hall-stage-1-v1.png;2856578 bytes;1024x1536;PNG verified;SHA256 4a6ce7c5d9d3b30b72d42c8e0ac5b63ea908d0c0a1d4cecf3c6605b3cf119b98;Git blob 8f1c69689e5da77d6a4a0a2aab49cbedc1e8fef9. Original preserved.179 inventory assets;130 non-Neon+15 Neon prototypes=145/150 base slots. Generate Scarlet Palace from Ember Hall v1 after inspecting original: taller multi-hall theatre, visible stages/audiences and supported upper audience tiers; then Crimson Coliseum and Entertainment comparison. Crimson10/15;145/150 selected base slots;5 remain;zero certified.

Generation prompt: Use case stylized-concept. BuildinZ Crimson Commons Entertainment Stage I EMBER HALL. Compact premium civic concert hall, bone structural piers and diagonal supports, charcoal frames, crimson/burgundy facade panels, restrained warm brass edges, blank vertical burgundy banners. Large glazed facade reveals a raised performance stage with musicians' instruments (grand piano, drum kit, microphones), theatrical warm lighting and rows of seated audience facing stage. Clearly concert/performance architecture, no laboratories, shops, apartments, pools or casino. Low angular attached roof and supported audience gallery; reserve monumental multihall palace/coliseum for later stages. Exact sole mounted entrance name EMBER HALL in clean gold sans-serif; no stage/type labels or other words. Premium isometric elevated three-quarter CORNER 3D architectural rendering, unequal facade widths and clear side depth. Portrait1024x1536, warm sunset urban backdrop, dry stepped civic plaza. Pull camera back to show full roof, wings, base corners and approach, generous side margins, no cropped architecture or flames.


## Scarlet Palace checkpoint — November 8, 2026

Inspected Ember Hall original before built-in generation. Actual output inspected: correct SCARLET PALACE, two glazed concert halls with stages/instruments/audience seating and supported upper tiers, connecting foyer, expanded mass/program, retained bone/crimson-burgundy/charcoal/brass and dry civic approach. Candidate selected under delegated authority, not owner approval/final certification. Camera near-symmetric and side clearance tight; final camera/export/lineage checks open. Do not infer metric height increase from differently framed renders.

assets/candidates/crimson-commons-scarlet-palace-stage-2-v1.png;2911478 bytes;1024x1536;PNG verified;SHA256 bb253b05f143a145f522a538562bce455d3e31d5c9aa4253a99a1edb758dfc7e;Git blob b0d55e43e94f838a030c758342edaa333baccf41. Original preserved.180 inventory assets;131 non-Neon+15 Neon prototypes=146/150 base slots. Generate Crimson Coliseum from Ember Hall v1 and Scarlet Palace v1 after inspecting originals: monumental multi-zone performance coliseum, multiple stages/audience tiers and attached ember-lit canopy crown; then equal-width Entertainment comparison. Crimson11/15;146/150 selected base slots;4 remain;zero certified.

Built-in prompt: BuildinZ Crimson Commons Entertainment Stage II SCARLET PALACE. Reference Ember Hall StageI: preserve bone piers/diagonal braces, charcoal frames, crimson/burgundy panels, fine brass edges, angular roof, burgundy blank banners, concert function and dry civic steps. Evolve into clearly taller larger multi-hall performance palace, two visibly distinct performance halls with raised stages/instruments and seated audiences facing stages, supported upper audience tiers and glazed connecting foyer. Attached supports throughout. Exact sole mounted gold sans-serif name SCARLET PALACE, remove EMBER HALL; no stage/type labels/other words. Reserve monumental coliseum/canopy crown for StageIII. Premium isometric elevated three-quarter CORNER architectural3D, unequal facade widths with side depth, sunset backdrop. Portrait1024x1536. Pull camera back substantially, entire roof, wing ends, base corners and approach visible with generous side clearance. No cropped architecture, pools, residences, shops, labs, casinos or flames.


## Crimson Coliseum checkpoint — November 8, 2026

Inspected both selected Entertainment originals before built-in generation. Actual output inspected: correct CRIMSON COLISEUM; multiple visible performance stages/audience zones, supported tiers, central glazed foyer and broad attached canopy crown illuminated warm amber. Bone braces/crimson-burgundy/charcoal/brass and dry plaza retained. Near-symmetric camera/tight sides remain final correction gates; no metric height certification. Delegated candidate selection, not prior owner approval/final certification.

assets/candidates/crimson-commons-crimson-coliseum-stage-3-v1.png;2949252 bytes;1024x1536;PNG verified;SHA256 0be25a196be59641d38958e18e77476bac3ebe87eefeb9fe4c503951190d008d;Git blob f804df5a030000cd76ead8d1a2c840af5a57a8f9. Original preserved.181 inventory assets;132 non-Neon+15 Neon prototypes=147/150 base slots. Perform equal-width Crimson Commons Entertainment I/II/III comparison from Ember Hall v1, Scarlet Palace v1, Crimson Coliseum v1; then Bloodmoon Beacon. Crimson12/15;147/150 selected base slots;3 remain;zero certified.

Built-in prompt: BuildinZ Crimson Commons Entertainment Stage III CRIMSON COLISEUM. References Ember Hall and Scarlet Palace are the same evolution family. Preserve bone diagonal braces/piers, charcoal framing, crimson/burgundy panels, fine brass edges, blank burgundy banners and dry civic approach. Evolve into monumental taller multi-zone performance coliseum, several visible performance stages with instruments and seated audiences facing each stage, supported upper audience tiers, glazed foyers and a broad ATTACHED canopy crown lit with warm ember-colored architectural light (no actual flames). Clear increase in mass, height/program relative to StageII. Exact sole mounted gold sans-serif name CRIMSON COLISEUM; remove older names; no other words/stage/type labels. Premium isometric elevated three-quarter corner3D architecture, visible unequal front/side widths, sunset. Portrait1024x1536. Pull camera back to fit entire canopy crown, all wings, base and approach with generous side margins. No cropped structure, pools, apartments, shops, laboratories, casinos or floating decks.


## Entertainment comparison checkpoint — November 8, 2026

Actual equal-width review completed, hashes match manifest. Names/function/palette/supports and expanding performance program pass candidate review. Height progression remains unverified: II appears shorter at different camera scale; consistent-camera correction required. II/III camera and all safe-area/mobile/export checks remain open. Evidence:CRIMSON_COMMONS_ENTERTAINMENT_QA.md. Generate Bloodmoon Beacon under Crimson brief: slender civic observation beacon, enclosed viewing gallery with telescopes, complete lantern, supported structure and exact name; then Cardinal Apex/Crown of Flame and Landmark comparison. Entertainment program progression reviewed; camera/scale and height readability require final corrections.147/150 selected base slots;3 remain;zero certified.


## Bloodmoon Beacon checkpoint — November 8, 2026

Built-in generation per Crimson brief. Actual output inspected: exact BLOODMOON BEACON, one enclosed telescope/observer gallery, complete attached illuminated lantern, bone supporting ribs/crimson-burgundy/charcoal/brass and dry civic base. Tip is very close to upper edge; final wider framing correction remains mandatory. No numerical clearance asserted. Delegated candidate selection, not prior owner approval/final certification.

assets/candidates/crimson-commons-bloodmoon-beacon-stage-1-v1.png;2415836 bytes;1024x1536;PNG verified;SHA256 af3857c8edc27466c37f05d70c4252e0c78c2f13a9af51e6b544ec4fdb5cac43;Git blob ad9c37bb3c5783e54ebb0f84b8ef018967a7aa41. Original preserved.182 inventory assets;133 non-Neon+15 Neon prototypes=148/150 base slots. Generate Cardinal Apex from Bloodmoon Beacon v1 after inspecting original: taller civic landmark with two attached enclosed observation galleries and supported summit; then Crown of Flame and Landmark comparison. Correct StageI tight tip margin during final export pass. Crimson13/15;148/150 selected base slots;2 remain;zero certified.

Built-in prompt: Use case stylized-concept. BuildinZ Crimson Commons Landmark Stage I BLOODMOON BEACON. Slender civic observation beacon on modest dry stepped civic base, ONE enclosed glazed viewing gallery near summit with clearly visible public telescopes and observers, complete attached warm ember lantern above gallery (architectural illumination, no flame). Bone structural piers and diagonal ribs, charcoal frames, crimson/burgundy panels, fine warm brass edges, blank burgundy vertical banners. Distinct observation landmark, no labs/robotics, apartments, shops, concert stage or pools. Reserve two galleries/taller structure for StageII and broad three-gallery crown for StageIII. Exact sole mounted entrance name BLOODMOON BEACON in clean gold sans-serif; no extra wording/stage/type labels. Premium isometric elevated three-quarter CORNER architectural3D, unequal base facade widths, strong depth. Portrait1024x1536, sunset city backdrop. Entire lantern/tip, gallery, all base corners and dry approach within frame, generous sky and side margins; no cropped structure or floating decks.


## Cardinal Apex checkpoint — November 8, 2026

Inspected original Bloodmoon Beacon before built-in generation. Actual output inspected: correct CARDINAL APEX; two enclosed telescope/observer galleries at different heights with attached supporting ribs, complete illuminated lantern and visible sky clearance. Bone/crimson-burgundy/charcoal/brass and dry civic base retained. Final equal-scale height, safe-area/export and full lineage review remain open; no metric height certified. Delegated selection, not owner approval/final certification.

assets/candidates/crimson-commons-cardinal-apex-stage-2-v1.png;2460607 bytes;1024x1536;PNG verified;SHA256 f3d5454a3f26fa02534f75347e3a95fc9502fa07e0cbf77e30d27e12b28a0493;Git blob 2a550a006bf4b9ddb9962006a4faf31a35940bcb. Original preserved.183 inventory assets;134 non-Neon+15 Neon prototypes=149/150 base slots. Generate Crown of Flame from Bloodmoon Beacon v1 and Cardinal Apex v1 after inspecting originals: broad three-gallery observation crown, attached structural ribs and complete ember lantern above expanded civic base; then Landmark comparison and full Crimson review. Crimson14/15;149/150 selected base slots;1 remains;zero certified.

Built-in prompt: BuildinZ Crimson Commons Landmark Stage II CARDINAL APEX. Reference Bloodmoon Beacon is Stage I. Preserve bone supporting diagonal ribs/piers, crimson/burgundy panels, charcoal window frames, fine brass edges, blank burgundy banners, dry stepped civic base and observation function. Evolve into clearly taller more substantial civic observation landmark with TWO distinct attached enclosed glazed viewing galleries at different heights, telescopes and observers visible in each, connected by supported central tower, complete supported warm illuminated lantern summit. No actual flame. Exact sole mounted gold sans-serif entrance name CARDINAL APEX; remove BLOODMOON BEACON. No other words/type/stage labels. Reserve broad three-gallery observation crown for StageIII. Premium isometric elevated three-quarter corner3D, unequal base facade widths and clear depth, sunset backdrop. Portrait1024x1536. Pull camera well back: complete tip/lantern, galleries, all base corners and approach inside frame; generous SKY above tip and side margins. No cropped architecture, floating galleries, labs, apartments, shops, theatres or pools.
