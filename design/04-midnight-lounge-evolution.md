# BuildinZ / Neon Heights / Building 004 — Midnight Lounge
**Status:** proposed art direction for owner review. Not approved production media, not released as an evolution selector.  
**Next:** produce and review three clean, independent NFT-quality stage images; then integrate the existing shared mock-BRICK mechanics.  
**Parent tracker:** [#6](https://github.com/hubcityhubcity/BuildinZ/issues/6).

## Collection-standard constraints
- A polished isometric or architectural 3D concept illustration, with full building silhouette visible at all three stages; dark purple, ultraviolet, cyan, magenta accents and luminous black glass grounded in the approved Neon Heights cyberpunk palette.
- Each evolution must be a fundamentally distinct **building** with newly introduced permanent architectural mass/features, **not** the same building stretched taller or recolored.
- The three NFT assets must be individually framed and legible on phone screens, never slices of an annotated infographic with clipped roofs, embedded titles, labels, cards, sidebars or excessive landscaping.
- Commercial nightclub/entertainment architecture: entrance, terraces, live venue features must read as deliberate real building forms, not floating props.
- No accessible ground-floor pools. Restrained landscaped rooftops only where architecturally believable. Preserve a consistent viewpoint, surrounding pavement and visual atmosphere across the stages.
- Stage names are the names in the existing Foundation Blueprint, not fresh substitutes. All art is **proposed** pending owner approval.

## Stage I — Midnight Lounge / "The Violet Door"
**Role:** elite, intimate nightlife venue.  
**Silhouette:** low-rise, compact three-to-five-level asymmetrical venue; very wide lower volume compared to height, articulated smoked-black glass and violet façade, angled signature entry canopy.  
**Signature feature exclusive to Stage I:** a recognizable glowing violet gateway with double-height glass atrium and panoramic rooftop cocktail room.  
**Story:** exclusive street-level nightlife destination in the heart of Neon Heights, with music and glamour visible through panoramic windows.  
**Must-not:** make it look like generic office block, shopping mall or residential tower; no skybridge or giant Stage III crown.

## Stage II — Nocturne Palace / "The Ascension"
**Role:** luxury vertical nightlife resort.  
**Silhouette:** dramatically higher and tiered than Stage I, two offset illuminated club towers rising out of the enlarged original lounge podium, clearly readable vertical transition.  
**Signature feature exclusive to Stage II:** substantial enclosed **suspended VIP performance deck** bridging the two upper sections, with layered aerial terrace viewing platforms and an elevated sky-entrance, not just extra floors.  
**Story:** transforms the original intimate lounge into a high-rise, multi-level palace of nightlife and entertainment.  
**Must-not:** borrow the rooftop sky-resort unique to Neon Residences or the HoloTech data/orbital ring. The glass performance deck should be physically attached and architectural.

## Stage III — Eclipse Citadel / "The Night Kingdom"
**Role:** skyline-defining music/nightlife monument.  
**Silhouette:** monumental stepped entertainment citadel with three distinct venue zones, a central soaring glass/black tower mass, broad outward-suspended viewing terraces, taller and more recognizable than Stage II.  
**Signature feature exclusive to Stage III:** giant **eclipse-shaped luminous architectural canopy/crown** spanning the high-rise performance amphitheater, integrated structurally with a pair of tapered supporting towers; multiple spectacular sky-venues are clearly visible.  
**Story:** a district icon whose crown casts a purple-magenta halo over Neon Heights nightlife.  
**Must-not:** make an isolated floating ring indistinguishable from HoloTech's Omninet Nexus; the eclipse here is a wide dramatic architectural canopy rather than a communications halo.

## Production checklist
- [ ] Three separate, full-quality stage assets, one per building form.
- [ ] Verify I, II, III architecture distinctly recognizable *without* relying on names.
- [ ] Compare image dimensions/color/readability against Neon Residences, Pulse Plaza, and HoloTech.
- [ ] User inspects and approves aesthetics; only then mark art as approved.
- [ ] Build shared-selector independent `midnightStage` 1→2→3 on a review branch; leave existing `stage`, `pulseStage`, `holoStage`, balance and `owned` intact.
- [ ] Use same `buildinz-neon-heights-demo-v01` localStorage key; old saves default to Midnight Stage I and do not lose progress.
- [ ] Art previews never change saved stage; negative/insufficient balance and ownership guardrails stay intact; Five-of-five means one of *each* identity.
- [ ] Test code, Android/desktop and old saves, then merge to GitHub Pages.

**Economics:** mock BRICK costs 120→280 are *demo-test placeholders only*, not approved tokenomics, staking returns or claims on real cryptocurrency. No wallets or paid services.
