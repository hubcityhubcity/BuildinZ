# Neon Heights: stage-name and full-selector regression checks
**Scope:** October 25, 2026 user-reported defects: only three evolution selectors shown; the headline repeated Stage I's founding name even when later stages were selected.

## Fix
- All five **identities** are represented in the selector row. Neon/Pulse/Holo remain playable; Midnight and Crown buttons are shown **disabled** as `Art in review`. No unapproved assets or playable evolutions are exposed.
- Evolution headline and image label display `stages[preview - 1].name` instead of the base building identity. For example, Neon I/II/III show **Neon Residences / Skyline Habitat / Aurora Arcology** in UI; Holo shows **HoloTech Tower / Quantum Spire / Omninet Nexus**.
- Above the heading the separate lineage text preserves the founding building identity so visitors understand continuity.
- Existing Stage II or Stage III artwork may still have founding brand names **baked into image pixels**. A clear text note warns that on-building signage requires reviewed image revisions; UI labels are **not a substitute for art correction**.
- All other stage records, simulators, localStorage key, shared mock BRICK, and stage image URLs remain unchanged.

## Checks completed
- [x] Both inline JS blocks parse.
- [x] Both unreleased selectors are visible and disabled by default; guard prevents accidental selection.
- [x] Restoring previous saved state with Neon Stage II, Pulse Stage III, Holo Stage II, BRICK 600, 14 simulated days preserves other fields.
- [x] Restored Neon Stage II headline and image label show **Skyline Habitat**.
- [x] Previewing Neon III changes headline to **Aurora Arcology** but does **not** upgrade the saved Neon Stage II.
- [x] Pulse Stage III displays **Infinity Bazaar**; Holo Stage II displays **Quantum Spire**.
- [x] Attempting to select gated Midnight/Crown leaves Holo selected.
- [x] Holo II→III deducts 280 mock BRICK, updates header to **Omninet Nexus** and doesn't change Neon/Pulse stages.
- [ ] Real GitHub Pages response, Android landscape/portrait, and cross-browser screenshot QA outstanding.

## Remaining **art** defect
HoloTech II/III images still visibly show original **HOLOTECH** branding. Neon II/III retain **NEON** in the building art. Pulse individual stage imagery/lettering needs end-to-end image QA. Per [brand issue #11](https://github.com/hubcityhubcity/BuildinZ/issues/11), versioned, owner-reviewed **actual NFT image revisions** are still required; no header/UI label, even one overlaid on the image, makes these art files compliant.

Related: [visual standard](../design/BUILDINZ_BRAND_STANDARD_V1.md), [device QA #2](https://github.com/hubcityhubcity/BuildinZ/issues/2).
