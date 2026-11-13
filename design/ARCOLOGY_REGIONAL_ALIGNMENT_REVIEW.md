# Arcology regional registration sensitivity — November 13, 2026

Executed the existing actual-image Sobel registration separately for crown, amenities and foundation ROIs. All deterministic optimizations converged. Scale results1.16755/1.16672/1.16785; x offsets−0.75/−1.02/−1.31 native pixels; y−67.17/−67.46/−64.32. Scale range is about0.1% relative, and vertical offsets differ about3.15native pixels. These independent-region fits support a broadly uniform similarity transform, rather than demonstrated gross nonuniform geometry drift, at256x384 analysis resolution. They do not certify native details, actual floor dimensions or approved architecture.

Extended design/qa/measure_arcology_alignment.py with optional ROI arguments left top right bottom in analysis pixels (defaults unchanged). Reproduce with source v2 path, v3 path and ROI coordinates from saved regional JSON. Original PNGs untouched; no image generation. Fine generative texture differences remain and should not be conflated with structural redesign.

Next: combine this evidence with aligned visual detail review and inspect native silhouette bounds; treat v3 as viable framing candidate under review, still nonselected. Resolve common-lineage camera policy and source selection explicitly rather than repeatedly regenerating identical framing requests. Inventory196 and final-certified count0 unchanged.
