# Wheel setup clarity

Implemented locally on 2026-10-24 after the user's phone screenshot exposed two problems: an unlabeled highlighted count and cards nested inside other cards. The initial checked production build was `G7oeOHDjUw5QzP-NLW22q`; the final label-fix build `3r7qAXrNzteZcBQV_qGzg` runs on port 3000.

## Changes

All four wheel-editor steps now use one continuous workspace. Headings, spacing and thin separators group the content. The outer editor/navigation surfaces, option tiles, word-preview rows, exclusion totals and final summary no longer form nested cards. Inputs, selected controls and buttons keep their own usable boundaries.

The final page asks "Câte cuvinte punem pe roată?" and labels the live value "8 cuvinte pe roată". Minus/plus retain their accessible names. The separate hint explains the available pool and maximum wheel size. A plain description list summarises matching, exclusions and word source without repeating an ambiguous available count.

"Salvează roata pentru altă dată" expands optional saving. Existing configuration updates, copies and save-and-start remain available. Starting without saving remains the main footer action. The mobile footer gives the primary action more width than Back, and task/section headings remain visible. The words page explains that the pool supplies the wheel rather than claiming every available word will appear at once.

The first capture pass caught intrinsic width in the expanded save form. The final correction adds shrinkable fields and applies the phone layout through 760px. No storage schema, matching, exclusion, counting, reward or encryption rules changed. No words or images were added.

## Verification

- Final production build/TypeScript and ESLint pass.
- The focused setup journey passes in headed Chrome 155.0.8059.85 and headless WebKit 26.5 after the final correction. It covers all four steps, CHE mixed mode, excluding X, changing 8 to 9 and back, optional saving, and exactly eight prepared words.
- The final size checks cover 320×568, 390×844, 568×320, 740×800 and 1440×900 at 100% and 200% root text. Start stays reachable; the setup has no horizontal overflow and the expanded save form passes its internal-width assertion.
- Full practice/backup journeys pass in both engines before the final scoped field-width/breakpoint correction. The existing practice script now opens optional saving before entering its configuration name.
- Impeccable's scoped component layout detector returns `[]` before and after the change. This is not a whole-codebase audit.
- Tailscale HTTPS practice returns HTTP 200 with TLS verification result 0. The existing 443/8443 services remain unchanged.

The focused script and screenshots are retained in `/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/`. Repeat the retained script with the repository's external Playwright path and either `WORD_WHEEL_HEADED=1` or `WORD_WHEEL_BROWSER=webkit`; the app must already be running on port 3000.

T3 preview snapshots failed twice with `Preview automation snapshot timed out after 15000ms.` Verification therefore used the documented repository browser workflow. There is no Word Wheel project in the available graph catalog; code discovery used direct source reads and searches without graph evidence.

## Evidence

Both engines have six captures under their `chromium-setup-` and `webkit-setup-` prefixes: rules-mobile, exclusions-mobile, words-mobile, finish-mobile, save-mobile and finish-desktop. These use synthetic Ioana QA. The save capture is scrolled after successful saving, not a claim to show the entire task from the top. Chrome additionally has chooser-mobile and delete-mobile captures for the final label fixes.

- [Rules on phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-setup-rules-mobile.png)
- [Words on phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-setup-words-mobile.png)
- [Final step on phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-setup-finish-mobile.png)
- [Final step on desktop](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-setup-finish-desktop.png)

## Finish review

The fresh finish review confirmed the clean structure, explicit count and separate available pool. It requested removal of two remaining eyebrows in the saved-configuration chooser and deletion dialog. Those labels were removed; the chooser heading now includes the target. Build/lint and the focused Chrome journey passed again, including new chooser/delete captures. A fresh verdict pass read the same six captures plus those two, marked both fixes resolved, found no regressions and returned `disposition: ship` for these fixes only. DESIGN.md records the setup refinement. No new raster assets were generated.

## Remaining acceptance

Actual iPhone/Android acceptance of the updated setup remains pending. Browser viewport tests are supporting evidence. Romanian mapping review, therapist pilot and release/deployment gates remain unchanged. At this checkpoint no deployment, commit or merge had been made. The user subsequently authorized an Astra high code audit and deployment if release checks pass; its result is recorded separately. Use the [feature testing checklist](acceptance-test-checklist.md) and [next GP9 prompt](next-implementation-prompt.md).
