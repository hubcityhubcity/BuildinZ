# Gallery browser CI evidence — November 9, 2026

Tested commit: dfc80d0419906e0491f75c8328dae22515f7826a.
Browser workflow: https://github.com/hubcityhubcity/BuildinZ/actions/runs/42639961572
Job browser-gallery and its “Run desktop/mobile gallery browser checks” step completed successfully. This is an actual Playwright/Chromium CI execution, not a local syntax check.

## Verified scope

- Desktop 1365x900:1000 records,24 cards,42-page pagination and Neon stage-I name/image.
- Homepage1280x800:gallery preview link navigation.
- Next/previous token pagination; Legendary filter; StageIII exact name.
- Golden Crest neighborhood/type filtering and Technology selected-image decoding.
- Exact-token search and empty results.
- Mobile360x780:horizontal overflow checks, neighborhood/stage controls and Shadow Market selected-image decoding.
- Simulated503 registry failure renders no phantom cards.
- No uncaught JavaScript errors in the instrumented desktop/home/mobile pages.

## Limits

This does not certify all150 artwork exports, every image URL, screenshot appearance, complete keyboard/screen-reader accessibility, wallet/mint behavior, contracts, or security. No final artwork certification changed.

## Hosting issue

Pages run https://github.com/hubcityhubcity/BuildinZ/actions/runs/42639960339 built and uploaded successfully but failed at Deploy to GitHub Pages. Exact cause has not been retrieved. Do not treat this commit as verified live deployment. Inspect deployment diagnostics before requesting owner action; do not guess a permissions/billing cause.

## Next actions

1. Inspect Pages deployment diagnostics and verify the hosted commit when deployment succeeds.
2. Extend browser evidence with saved desktop/mobile screenshots for actual visual inspection.
3. Continue missing-source restoration and final artwork/edition review; permanent metadata and launch remain gated.
