# Browser verification handoff

Source inspected: `9dfa930acb29c5cf7c50a852b3ff2aa98907eb02`.

## Result: blocked before rendering

On 2026-11-09, the cloud browser returned “Browser runtime unavailable”. Local Playwright resolved and /usr/bin/chromium existed, but Chromium exited before creating a page: `process_singleton_posix.cc:297 socket() failed: Operation not permitted (1)`. No screenshot, responsive pass, or browser interaction pass is claimed.

## Prepared test

`scripts/verify_gallery_browser.cjs` exercises the actual served repository gallery, using its real JSON and image URLs without fixtures. Checks: 1,000-token load, pagination, 20-edition Aurora search, exact three-stage names, empty state, horizontal overflow at 320/375/768/1440 pixels, and uncaught JavaScript errors. Runner syntax was checked; assertions could not execute here.

In a browser-capable environment with Playwright installed, serve the repository root, then run:

```sh
BUILDINZ_PREVIEW_URL=http://localhost:8080/ node scripts/verify_gallery_browser.cjs
```

Optionally set CHROMIUM_PATH to an installed Chromium binary. A successful smoke test still leaves visual safe-area, all-image loading, navigation, keyboard/accessibility, wallet/network behavior and hosted deployment gates open. Capture evidence and inspect screenshots separately before marking any gate passed.

## Next production actions

1. Run this smoke test where browser processes are permitted, fix actual failures, and record the tested commit.
2. Restore the six exact Crimson Residential/Retail originals for complete source comparison; do not regenerate approved architecture merely because a local copy is missing.
3. Continue final artwork safe-area/evolution review. All 150 selected stage slots remain candidates/prototypes; final certification remains zero.
