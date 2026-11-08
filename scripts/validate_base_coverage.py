#!/usr/bin/env python3
"""Validate selected base-stage coverage without treating candidates as certified art."""
import json, sys
from collections import Counter
from pathlib import Path
def validate(data):
    assets=data["assets"]
    selected=[a for a in assets if a.get("selected_for_lineage_review") or a.get("selected_for_prototype")]
    slots=[(a.get("neighborhood"),a.get("building_type"),a.get("stage")) for a in selected]
    errors=[]
    # Legacy Neon records may omit descriptive slot fields: never silently certify them.
    complete=[s for s in slots if all(x is not None for x in s)]
    duplicates=[s for s,n in Counter(complete).items() if n>1]
    if duplicates: errors.append("duplicate selected slots: "+repr(duplicates))
    if len(assets)!=data["summary"]["asset_files"]: errors.append("inventory count mismatch")
    lineage=sum(a.get("classification")=="lineage-selected-candidate" for a in assets)
    if lineage!=data["summary"]["lineage_selected_candidate_stage_assets"]: errors.append("lineage count mismatch")
    for a in selected:
        if not a.get("git_blob_sha") or not a.get("bytes"): errors.append("missing integrity: "+a["path"])
        if a.get("stage") is not None and a["stage"] not in (1,2,3): errors.append("invalid stage: "+a["path"])
    return {"inventory":len(assets),"selected":len(selected),"lineage_candidates":lineage,
            "described_slots":len(complete),"undescribed_selected_records":len(slots)-len(complete),
            "errors":errors,"final_certification_inferred":False}
if __name__=="__main__":
    result=validate(json.loads(Path(sys.argv[1] if len(sys.argv)>1 else "design/ASSET_MANIFEST.json").read_text()))
    print(json.dumps(result,indent=2))
    sys.exit(bool(result["errors"]))
