# Exploratory Arcology registration — November 13, 2026

Ran saved SciPy/Pillow/NumPy analysis on actual v2/v3 PNGs. Seeded edge-registration optimization converged: overlay v3 needs about1.16987 scale, x−1.07/y−66.31 native-pixel offset around canvas center to best align the sampled central structural region to v2. Edge MSE fell from0.19549 to0.05828. This numerically supports the observed substantial zoom difference; it does not certify geometry or establish actual foundation dimensions. Repeated windows/lighting and selected ROI can bias this exploratory fit.

Reproducible script design/qa/measure_arcology_alignment.py accepts two source paths; report saved separately. No image editing occurred. OpenCV unavailable; used available SciPy rather than claiming inaccessible analysis ran.

Next use scale1.16987,x−1.07,y−66.31 as a starting point in review-arcology-alignment.html, then visually compare native crown/bridge/pool/base reference points. Keep v3 held until manual anchor evidence resolves nonuniform drift. Do not treat fitted residual or5% foundation rule as interchangeable metrics. Source selection, manifest count196 and certification unchanged.
