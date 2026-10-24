# Cross-browser pilot checks

Completed 2026-10-16 against the existing production server at `http://localhost:3000`. This batch adds WebKit to the repository's browser QA workflow. No application code, dependencies, sound mappings or deployment changed.

## Results

| Check                                           | Engine               | Result |
| ----------------------------------------------- | -------------------- | ------ |
| Full guided-practice journey                    | WebKit 26.5          | Pass   |
| Touch, text sizing and storage-failure recovery | WebKit 26.5          | Pass   |
| Existing anonymous wheel regression             | WebKit 26.5          | Pass   |
| Full guided-practice journey                    | Chrome 155.0.8059.82 | Pass   |
| ESLint                                          | Node 24.21.0         | Pass   |

The full journey covers profile isolation, goals, prepared wheels, five tracked-play layouts, count-on-close, once-only pending-word recovery, ownership across tabs, adult observations, both encrypted restore scopes, shared-library preservation, Help, demo isolation and returning-adult navigation. It also checks the manifest assets and explicitly verifies that cold offline launch is unsupported.

The resilience suite covers synthesized touch, reduced motion, enlarged text, quota rollback/retry, End-dialog errors and temporary anonymous play when IndexedDB or Web Locks is blocked. It verifies that a seeded saved configuration remains unchanged. These are browser simulations with synthetic profiles.

The shared launcher in `scripts/qa/browser-runtime.mjs` selects Chrome by default or WebKit through `WORD_WHEEL_BROWSER=webkit`. All three browser suites use it. Playwright 1.62.1 and its WebKit revision 2336 are installed outside the repository; no test dependency was added to the app. Existing production-build verification remains applicable because this batch changes tests and documentation only.

## Navigation errors investigated

The first WebKit practice run completed its functional steps but failed the final error assertion. WebKit reported same-origin access-control errors when forced document navigation cancelled Next.js prefetch requests. A separate route-loop probe produced nine errors with immediate navigation and zero errors or failed requests after requests settled.

The suite now uses the app's links for demo entry/exit and waits for network idle, bounded to ten seconds, before deliberate fresh-document navigation. The abrupt pending-word reload test remains unchanged. No console or page errors are filtered, and no CORS headers or application behavior were changed. The full suite then passed in WebKit and Chrome.

These observations are consistent with the document-replacement behavior reported in [Playwright issue 43120](https://github.com/microsoft/playwright/issues/43120) and the pending-prefetch case in [issue 42823](https://github.com/microsoft/playwright/issues/42823). That evidence supports the test-navigation explanation; it does not establish that every possible browser network error has the same cause.

## Run again

Use the pinned Node/pnpm environment, an external Playwright installation and the existing server on port 3000. Install WebKit using that installation's CLI if it is missing, as described in [Playwright's browser documentation](https://playwright.dev/docs/browsers). Set the package path for your machine:

```sh
export WORD_WHEEL_PLAYWRIGHT_PATH=/path/to/node_modules/playwright
export WORD_WHEEL_BROWSER=webkit
export WORD_WHEEL_QA_ARTIFACT_DIR=/tmp/word-wheel-webkit-evidence
pnpm run check:practice-browser
pnpm run check:practice-resilience
pnpm run check:wheel-browser
```

Unset `WORD_WHEEL_BROWSER` to use installed Chrome. `WORD_WHEEL_QA_ARTIFACT_DIR` is optional; the practice suite captures two mobile checkpoints and the desktop workspace when it is set.

## Screenshots

These captures come from the passing WebKit practice run, using synthetic child data:

- [Mobile first participation medal](/tmp/word-wheel-webkit-final/webkit-mobile-first-medal.png), 390×844.
- [Mobile protected-restore preview](/tmp/word-wheel-webkit-final/webkit-mobile-restore-preview.png), 390×844.
- [Desktop child workspace](/tmp/word-wheel-webkit-final/webkit-desktop-child-workspace.png), 1440×900.

They are local QA artifacts, not committed application assets.

## Remaining pilot gates

Playwright's WebKit follows upstream development and can differ from shipping Safari, as its [browser documentation](https://playwright.dev/docs/browsers) explains. This run is not physical iPhone evidence. Real iPhone Safari and Android Chrome still need keyboard/toolbars, rotation, OS file handling, secure-origin storage/crypto, installed mode and assistive-technology checks.

The Romanian sound sidecar remains empty. The user-arranged reviewer must approve actual targets and word mappings before goal credits can be verified with production mappings. Therapist usability feedback is also pending. Continue the [pilot checklist](pilot-checklist.md) and [next-batch prompt](next-implementation-prompt.md); no release or clinical validation is claimed.
