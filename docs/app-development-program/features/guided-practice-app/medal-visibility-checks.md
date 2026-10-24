# Medal rendering checks

Completed 2026-10-17 against the rebuilt local production app on port 3000. This checkpoint strengthens browser QA; it preserves the approved medal layout, entrance animation, confetti, copy and reward rules.

## What the comparison showed

Some Chrome 155.0.8059.82 headless captures showed a blank save action, clipped controls or repeated medal artwork after viewport changes. DOM bounds, computed styles and hit testing still reported a visible control. A locator screenshot could trigger a repaint and hide the problem.

The same full journey passes in visible Chrome with live confetti and in headless Playwright WebKit 26.5. A separate Chrome headless comparison with reduced motion also passed. Disabling GPU rendering did not reliably clear all capture artifacts. These results point to a headless rendering/capture interaction with the live canvas, but do not establish an upstream browser defect or rule out every application/browser interaction. No matching upstream fix is claimed. Physical phone verification remains pending.

CSS experiments did not isolate an application fix, so they were reverted. The medal's original SVG shadow and entrance effect remain. Headless Chrome's failing captures are recorded as a test-environment limitation, not silently accepted as passing evidence.

## Added checks

The practice suite now resizes during live confetti, confirms the canvas is present, then inspects the settled phone, desktop and short-landscape medal. It checks the actual viewport screenshot buffer, sampling the primary action's background near both its top and bottom. Bounds and center hit testing remain required. This catches a blank or clipped surface that DOM-only checks missed; it is not a complete visual comparison or a test of every label pixel.

The existing five-size geometry matrix still requires every medal control to fit and have at least a 48px height. Selecting a design must preserve the practice count and save the chosen illustration. The shared launcher accepts `WORD_WHEEL_HEADED=1`; default operation remains headless. Captures use CSS pixels and synthetic data. No browser errors are filtered.

## Verified results

| Check                                                      | Result                                                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Production build, TypeScript and lint                      | Pass                                                                                              |
| Full practice/backup journey, visible Chrome 155.0.8059.82 | Pass, including live-confetti and settled pixel checks                                            |
| Full practice/backup journey, headless WebKit 26.5         | Pass, including the same pixel checks                                                             |
| WebKit resilience                                          | Pass, including enlarged text, touch simulation, reduced motion, quota retry and storage fallback |
| Public routes                                              | 85 pass; unknown target returns 404                                                               |
| Chrome 155 headless with live canvas                       | Capture artifacts observed; not a passing visual result                                           |

A separate server-log check confirmed `/ro/practice`, `/ro/play/s` and `/ro/setup/s` return 200 without new server output. Requesting `/ro/play/not-a-target` returns the expected 404 and also prints `Internal: NoFallbackError` in Next.js output. This diagnostic remains visible; it was not filtered or fixed in this checkpoint. Valid-route and invalid-route response checks pass.

To repeat on this machine, use the external Playwright installation described in [README](../../../../README.md) and the running port 3000 server:

```sh
export WORD_WHEEL_PLAYWRIGHT_PATH=/path/to/node_modules/playwright
export WORD_WHEEL_QA_ARTIFACT_DIR=/path/to/evidence
WORD_WHEEL_HEADED=1 pnpm run check:practice-browser
WORD_WHEEL_BROWSER=webkit pnpm run check:practice-browser
WORD_WHEEL_BROWSER=webkit pnpm run check:practice-resilience
```

Visible mode needs a desktop display. Keep headless runs available for diagnosis; do not remove the paint assertions to make an affected capture pass.

## Screenshots and handoff

Final unedited captures are saved outside the repository in a persistent user-data folder:

- [Phone medal, 390×844](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/chromium-mobile-first-medal.png).
- [Landscape medal, 568×320](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/chromium-landscape-medal.png).
- [Desktop medal, 1440×900](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/chromium-desktop-medal.png).

The folder also contains both engines' animated-medal, restore-preview and workspace frames. These are local QA artifacts, not committed app assets.

The earlier temporary reviewer ZIP was no longer available. Fresh blank S/R packets and their six-file archive were recreated in the same persistent folder. Both contain 596 unknown rows and approval remains false. Production sound mappings are unchanged. See the [reviewer handoff](reviewer-handoff.md).

No deployment was made. Romanian review, real iPhone Safari/Android Chrome checks and therapist feedback remain the next GP9 work. Continue with the [next-batch prompt](next-implementation-prompt.md). Source discovery used direct reads because no Word Wheel graph index was available.
