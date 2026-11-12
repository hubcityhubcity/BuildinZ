# Browser runner compatibility correction — November 12, 2026

Inspected complete logs for run 43102725539, job 130798054113. The failure was not a network timeout: ubuntu-latest resolved to Ubuntu 26.04, which pinned Playwright 1.55.1 rejected for chromium-headless-shell. The dependency step also printed an unsupported-OS warning despite its success conclusion. Gallery assertions never ran.

Correction: pin only the browser job to ubuntu-24.04, retaining the pinned Playwright version and existing test assertions. This is a delegated reversible CI decision. Workflow diff verified to contain one runner replacement; no artwork, contracts or launch certification changed.

Evidence: https://github.com/hubcityhubcity/BuildinZ/actions/runs/43102725539

Next: inspect the new browser run. Require actual desktop/mobile assertions, all-image decode checks and Burgundy review screenshots to pass; inspect screenshots separately before visual certification. If installation fails, read its exact logs before changing configuration. Existing 192-image Pillow verification remains independent.
