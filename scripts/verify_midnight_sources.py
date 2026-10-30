"""Verify approved Midnight source bytes without modifying artwork.
Run from repository root: python scripts/verify_midnight_sources.py
"""
from pathlib import Path
import hashlib
import sys

EXPECTED = {
    "assets/midnight-stage-1.webp": (219470, "4cf3914effbdec2f45b9823dcc9e28b224957c148e9ccc0dbbd089dd18c5a8a7"),
    "assets/midnight-stage-2.webp": (230986, "07a5ae6367b3abbabd9b9d82d7150d6d55312cf564ec43a931b562ebbd3a106e"),
    "assets/midnight-stage-3.webp": (263892, "776cd6b6a06527e09119e0a0efc87590b47c698a056d3da9785292d5ac5887ce"),
}
def main():
    root = Path(__file__).resolve().parents[1]
    failures = []
    for name, (size, digest) in EXPECTED.items():
        path = root / name
        if not path.is_file():
            failures.append(name + ": missing")
            continue
        data = path.read_bytes()
        if len(data) != size or hashlib.sha256(data).hexdigest() != digest:
            failures.append(name + ": differs from approved source")
        else:
            print("PASS " + name)
    for failure in failures:
        print("FAIL " + failure, file=sys.stderr)
    return int(bool(failures))
if __name__ == "__main__":
    sys.exit(main())
