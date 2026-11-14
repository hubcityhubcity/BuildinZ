# Commons Market v2 visual QA and handoff

Reviewed November 14, 2026 UTC, against commit e32ae9d5a8cb9b19a74808c3b666074e58fe4eb1.

## Evidence
- Source validation passed: https://github.com/hubcityhubcity/BuildinZ/actions/runs/43526564386
- Existing gallery browser suite passed: https://github.com/hubcityhubcity/BuildinZ/actions/runs/43526564373
- Pages build passed: https://github.com/hubcityhubcity/BuildinZ/actions/runs/43526562923
- Actual PNG comparison inspected at 360×540 for both versions, plus a doubled native right-edge crop of v2 (x864–1024, y500–900) with native coordinate guides.
- V2 SHA256: 095e246d327f605b08465ef7496b3044da7adf45d27a13130528d8baa7bb317c. 2447679 bytes, 1024×1536.
- New review-commons-market.html provides both originals, responsive layout and optional 3% inset guides. Existing CI above predates this new page; it is not evidence of browser execution on this page.

## Findings and decision
Exact COMMONS MARKET text remains legible at the inspected mobile-size presentation. Two occupied retail levels, stepped burgundy roofs, pale columns, banners and central stair/entry remain visible. V2 has stronger right-wing depth. Generative fine details vary; this is not a geometry-preserving transform.

Right roof tip extends beyond native x993 (the right 3% inset). Therefore the framing gate fails. This is a visual bound, not an exact segmented pixel measurement. Do not infer a precise roof bounding box from it.

Agent decision: retain v1 as selected preview and v2 as an unselected camera-correction candidate. No artwork final certification, rarity decision, edition completion or metadata promotion. Inventory remains197; final-certified artwork remains0.

## Exact next actions
1. Use actual v2 as reference for a framing-only image edit, asking for enough additional space on both sides to meet the 3% architectural inset. Preserve two-storey silhouette, stepped roofs, mounted sans-serif sign and shop occupancy.
2. Inspect native edges and a 360px-wide presentation; compare Ruby Galleria and Cardinal Exchange with a common display-width/foundation reference before choosing a shared Retail camera.
3. Persist new PNG/hash non-destructively and update manifest only after visual inspection. Keep all prior sources.
4. Run source validation and relevant browser checks for changed selection/review pages. Do not restart restored originals or completed Residential signage.

Other launch gates remain open as recorded in canonical checklist: final art/editions, permanent release URIs, production utility settlement and wallet/testnet acceptance, independent contract review and final release audit.
