#!/usr/bin/env python3
"""Install ONLY the owner-approved Midnight Lounge stage artwork from its ZIP.

Standard-library only. Run from an existing checkout of BuildinZ:
  python scripts/import_approved_midnight.py /path/to/BuildinZ_Midnight_Lounge_Artwork_APPROVED.zip

This validates approved SHA-256 hashes before changing any files.
It never edits index.html, never enables the selector, and never pushes to GitHub.
"""
from __future__ import annotations

import argparse
import hashlib
import os
from pathlib import Path
import sys
from zipfile import ZipFile, BadZipFile

STAGES = (
    ("stage-1-midnight-lounge.webp", "assets/midnight-stage-1.webp",
     "4cf3914effbdec2f45b9823dcc9e28b224957c148e9ccc0dbbd089dd18c5a8a7", 219470),
    ("stage-2-nocturne-palace.webp", "assets/midnight-stage-2.webp",
     "07a5ae6367b3abbabd9b9d82d7150d6d55312cf564ec43a931b562ebbd3a106e", 230986),
    ("stage-3-eclipse-citadel.webp", "assets/midnight-stage-3.webp",
     "776cd6b6a06527e09119e0a0efc87590b47c698a056d3da9785292d5ac5887ce", 263892),
)


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("zip_file", type=Path, help="Approved conversation ZIP file")
    p.add_argument("--repo", type=Path, default=Path(__file__).resolve().parent.parent,
                   help="Local repository root (default: parent of scripts/)")
    p.add_argument("--check-only", action="store_true",
                   help="Verify the ZIP without creating any files")
    opts = p.parse_args()
    if not opts.zip_file.is_file():
        p.error("ZIP not found: " + str(opts.zip_file))
    root = opts.repo.resolve()
    if not (root / "index.html").is_file():
        p.error("--repo must contain the BuildinZ index.html")

    # Validate ALL bytes before writing ANYTHING.
    data = []
    try:
        with ZipFile(opts.zip_file) as archive:
            for name, dest, digest, length in STAGES:
                payload = archive.read(name)
                if len(payload) != length:
                    raise ValueError(f"{name}: incorrect length ({len(payload)} vs {length})")
                if hashlib.sha256(payload).hexdigest() != digest:
                    raise ValueError(f"{name}: checksum mismatch; do not use altered artwork")
                if payload[:4] != b"RIFF" or payload[8:12] != b"WEBP":
                    raise ValueError(f"{name}: not a WebP image")
                data.append((dest, payload))
    except (BadZipFile, KeyError, ValueError) as e:
        print(f"Artwork verification FAILED: {e}", file=sys.stderr)
        return 1

    print("All three owner-approved Midnight Lounge WebP images verified.")
    if opts.check_only:
        print("CHECK ONLY: no files were written.")
        return 0

    # Avoid silently replacing existing media, especially after user approval.
    for dest, payload in data:
        target = root / dest
        if target.exists() and target.read_bytes() != payload:
            print(f"REFUSING overwrite of different image: {target}", file=sys.stderr)
            return 1
    for dest, payload in data:
        target = root / dest
        target.parent.mkdir(parents=True, exist_ok=True)
        if not target.exists():
            target.write_bytes(payload)
        print(f"Ready: {dest}")
    print("Artwork installed in local checkout ONLY. Commit these three WebP files")
    print("to draft PR #7, verify real browser rendering, then enable the art gate.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
