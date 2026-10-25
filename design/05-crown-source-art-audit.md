## Crown Spire source-art audit — October 24, 2026

Searched the saved artwork library and compared:
- **Neon Heights: Landmark Evolution.png** (1672×941), and
- **Neon Landmark Evolution Infographic.png** (1672×941).

Both contain the correct named lineage: `Crown Spire → Sovereign Apex → Crown of Neon`, dramatic Stage I/II/III growth, purple/cyan glass-and-metal landmark architecture and iconic elevated observation features. However, these are **three-panel annotated reference posters**, not clean per-token artwork.

**Findings:** Embedded description boxes/titles contaminate naive image slices, some tip/headroom regions approach the original frame boundaries, and there are no stage-specific full building names mounted on the actual structure in the same signage family as other Neon Heights designs. One source depicts a taller multispire ultimate crown than the other. Without choosing canonical visual forms and preparing clean standalone images, placing any extracted crop on the main homepage as a final NFT would misrepresent quality.

**Review-only artifact:** `BuildinZ_Crown_Existing_Art_References.zip` from current conversation contains a six-crop A/B source comparison and the visual contact sheet, explicitly NOT final NFT media. Preserve these as historical sources.

**Recommendation:** choose the source family that matches the approved Crown Spire visual direction, create three new full-silhouette portrait master artworks **without infographic boxes**, with exact stage-specific mounted names, then visually approve each and export stage-specific WebP assets. The Stage III sculpted crown must be fully inside frame, not clipped. The current fifth-building `crownStage` evolution mechanics are already in the main code under `CROWN_ART_APPROVED=false`.

**QA gate:** Do not enable fifth-building selector or merge any final Crown art until stage master resolution, placement and mobile/browser testing pass. No blockchain or paid work.
