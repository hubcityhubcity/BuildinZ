# Midnight Lounge: Stage-Specific Facade Signage Correction Brief

**Status:** proposed ART CORRECTION design, not a new approval and not public release.  
**Architectural master:** the owner-approved October 23, 2026 Midnight Lounge triptych; original clean stage files are `assets/midnight-stage-1.webp`, `-2.webp`, `-3.webp`. These files MUST NOT be overwritten until specific replacements are approved.  
**Brand canon:** [BUILDINZ_BRAND_STANDARD_V1.md](BUILDINZ_BRAND_STANDARD_V1.md).

## The exact mismatch to correct
All three approved Midnight assets have impressive purple premium cyberpunk architecture but no clearly legible *building-mounted* stage names. A later experimental edit with neon Z symbols was rejected as off-brand; another edit that showed names had classical hotel-like serif lettering, inconsistent with the futuristic signs of Pulse Plaza and HoloTech.

**Corrective approach:** surgical signage integration into the **same existing buildings** with coherent techno-luxury uppercase geometric signage. Do **not** remodel, reframe or substitute the architecture.

## Stage-by-stage placement instructions

### Stage I — MIDNIGHT LOUNGE
- Source image: `assets/midnight-stage-1.webp`. Retain the low-rise black glass lounge, purple edge illumination, rooftop open-air circular canopy, illuminated entry portal, lobby and landscaping.
- Mount **MIDNIGHT LOUNGE** on the broad black-purple **front facade on the building's street-facing right-hand side, above the angular entrance**; use two tightly aligned rows if needed. Letters should have structurally plausible neon backlighting and follow the facade's perspective.
- Palette: soft violet / magenta letters edged with cool cyan; bold, clearly legible futuristic sans strokes. Make name the primary sign. If desired, a *small* BuildinZ emblem on a separate side panel, subordinate.
- Do not obscure rooftop canopy, glass atrium or entrance.

### Stage II — NOCTURNE PALACE
- Source: `assets/midnight-stage-2.webp`. Preserve the two tall split club towers, elevated glass VIP performance stage/bridge and cinematic suspended terraces.
- Mount **NOCTURNE PALACE** across a clean black-glass **mid-height podium facade immediately below the suspended performance deck**, sized to be legible on mobile but not covering dancers/people or facade screens. It should look manufactured into the illuminated building structure, not pasted onto image foreground.
- Stronger magenta-violet lettering than Stage I; same geometric typographic DNA, tasteful cyan edge accent and discreet Z emblem. The VIP bridge remains the exclusive architectural centerpiece.
- Do not put classical serif hotel signage on the facade or break the glass bridge.

### Stage III — ECLIPSE CITADEL
- Source: `assets/midnight-stage-3.webp`. Preserve the large eclipse-shaped canopy's **full circle and headroom**, central ribbed tower, terraced club balconies, fountains, and street frontage.
- Mount **ECLIPSE CITADEL** on a structurally visible **main central vertical tower facade below the eclipse canopy**; use a horizontally framed two-line neon sign integrated into the central black glass or bronze architectural band.
- Sign should be skyline-readable but not as large as the entire tower, unobtrusive to signature canopy. Strong magenta-violet illumination, subtle cyan glass edge, same futuristic geometric letterforms as I/II.
- Tiny supporting BuildinZ marque on a separate lower panel if useful; no giant floating Z replacing name.
- Do not crop/cover the canopy, deform the building, add unrelated sky rings or change its tiered architecture.

## Technical production and release policy

- Create three **new versioned candidates**, `midnight-stage-1-branded-candidate.webp`, `-2-...`, `-3-...`, in a draft branch. Keep original unbranded masters and approved images immutable until owner accepts the exact replacements.
- Compare each candidate side by side with its original. Only name signage and subtle mounting detail may differ; buildings, atmosphere, streets, roof design and stage identities should otherwise be preserved. Avoid image-generation 'creative restyling'.
- Legibility check at 300–400px portrait image size: all letters of **MIDNIGHT LOUNGE**, **NOCTURNE PALACE**, **ECLIPSE CITADEL** must be complete and spelled correctly, without invented glyphs.
- Make sure no giant caption/title overlay or explanatory card leaks into collectible image.
- Obtain owner visual approval of all three replacement assets. Only then replace the stage paths in a separate review PR, visually verify mobile & desktop, test mock BRICK/stage/legacy saves and merge.
- The existing PR #7 MUST stay artwork-gated and unmerged until that happens. Existing `preview-midnight.html` is a clearly labeled historical architectural preview; it is not brand-complete art.

This is a visual prototype design brief, not a claim of NFT minting, staking returns, or paid work.
