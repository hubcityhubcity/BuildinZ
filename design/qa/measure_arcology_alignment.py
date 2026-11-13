"""Exploratory edge registration; not architectural or final-art certification."""
import json
import numpy as np
from PIL import Image
from scipy.ndimage import sobel, map_coordinates
from scipy.optimize import differential_evolution

def edges(path):
    a=np.asarray(Image.open(path).convert('L').resize((256,384)),dtype=float)
    g=np.hypot(sobel(a,0),sobel(a,1))
    return np.minimum(g,250)/250

import sys
base,over=edges(sys.argv[1]),edges(sys.argv[2])
roi=[int(v) for v in sys.argv[3:7]] if len(sys.argv)==7 else [35,80,220,310]
left,top,right,bottom=roi
assert 0<=left<right<=256 and 0<=top<bottom<=384, 'invalid ROI'
y,x=np.mgrid[top:bottom:2,left:right:2]
target=base[y,x]
def loss(v):
    scale,dx,dy=v
    sample=map_coordinates(over,[(y-192-dy)/scale+192,(x-128-dx)/scale+128],order=1,mode='constant')
    return float(np.mean((sample-target)**2))
r=differential_evolution(loss,[(.9,1.3),(-20,20),(-50,30)],seed=42,maxiter=90,popsize=12,tol=1e-7)
report={'method':'grayscale Sobel edge MSE; centered similarity transform; deterministic seed42','analysis_size':[256,384],'roi_analysis_pixels':roi,'overlay_to_base_scale':float(r.x[0]),'native_offset_pixels':[float(r.x[1]*4),float(r.x[2]*4)],'identity_loss':loss([1,0,0]),'fitted_loss':float(r.fun),'optimizer_success':bool(r.success),'limitations':'Exploratory image registration, not measured foundation anchors or geometric equivalence. Repeated windows and lighting can bias fit. No source pixels modified.'}
print(json.dumps(report,indent=2))
