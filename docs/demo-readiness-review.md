# Demo readiness review

Reviewed on 2026-09-12. Implementation and local browser QA are complete. Deployment and physical-device verification remain.

## Findings and fixes

| Priority | Finding | Change |
| --- | --- | --- |
| P1 | The saved-setup effect clears progress whenever the same target receives a new content object. A fresh server payload can therefore restart a partly cleared round. | Hydrate saved preferences once per mounted target session. Wait for hydration before enabling play. |
| P1 | Reusing the game component for another target can retain state or an outstanding spin timer, particularly when the new target has no saved setup. | Key the game session by locale, target kind, and target ID. Unmounting cancels its spin timer. |
| P1 | Completion leaves the normal status panel, spin instruction, and game controls beside a separate empty-state card. This crowds short screens and offers duplicate actions. | Replace the live board with one completion card offering replay, another target, and setup. Describe clearing the visible wheel rather than clearing the entire mode pool. |
| P2 | Restoring focus after removing the last word can target the wheel button that has just disappeared. Modal effects also rerun when their callback props change. | Use stable callbacks and restore focus after the DOM update to the wheel or completion heading. Replay restores focus to the new wheel. |
| P2 | Wheel sizes depend on viewport height rather than the space left after headers, status, and actions. The live board overlaps controls in short landscape windows. | Size the wheel within its allocated grid cell. Use a side-by-side board in landscape. |
| P2 | Result dialogs hide overflow, which can clip actions when a window is short or a word wraps. | Allow contained scrolling, wrap long words, and use a two-column result card in short landscape windows. |
| P2 | The small portrait home screen requires scrolling to reach the last sound groups. | Fit six letter columns and shorter grid rows on short portrait screens. |
| P3 | A one-word setup says `1 cuvânt disponibile`. | Use the singular `disponibil`, including replacement availability announcements. |

The existing `reconcileVisibleWheelWordIds` helper already preserves empty subsets and does not refill removed slots. This review retains that behavior. The original intermittent report was not independently reproduced during an ordinary uninterrupted round on the starting revision. The additional reset path above is supported by source review and is covered by a component regression that supplies fresh same-target content props late in the round.

Wheel sizing uses container-relative height so the pointer and wheel fit within the actual board cell. The unit definition is documented in [CSS Containment Level 3](https://www.w3.org/TR/css-contain-3/#container-lengths).

## Verification

Automated checks passed:

- `pnpm run lint`
- `pnpm run check:gameplay`
- `pnpm run check:matching`
- `pnpm run check:setup-storage`
- `pnpm run validate:content`
- `pnpm run build`, including TypeScript checking and 84 generated pages
- `pnpm run check:wheel-browser`
- `git diff --check`

The browser regression uses the actual React game, production word pools, stylesheet, and Next Image component in a temporary fixture. It runs under React Strict Mode and covers keep, Escape, focus trapping, replacement, a 15-to-zero countdown backed by a larger pool, same-target prop updates at the last few words and after completion, focus after removal and replay, switching targets, and cancelling a pending spin. It also checks board overlap, completion bounds, and result controls at desktop, tablet, portrait phone, and landscape sizes.

The fixture does not replace route verification. The in-app browser was used against `http://localhost:3000` for the actual home → D setup → 15-word wheel → completion → replay journey, the full normal-duration countdown, keyboard focus and Escape, and a manually selected `dreptunghi` round for GHI. The one-word custom round had no replacement action, completed correctly, and replayed with the same selected word. Exclusions that remove every GHI word disabled progression and exposed a recovery message; clearing them restored the flow.

Viewport coverage: `1440×900`, `768×1024`, `390×844`, `320×568`, `844×390`, and `568×320`. The in-app browser confirmed the completion layouts, phone home and setup screens, and short landscape results visually. Automated overlap and bounds assertions supplement those observations.

All 82 generated public routes returned HTTP 200 from the local server. An invalid play target returned HTTP 404. Framework-internal error pages were excluded from the public-route check. The in-app browser reported no console errors.

Content validation still reports 13 existing image-size warnings above 12 KB. Validation passes, and no word records or images changed in this review.

## Running the browser regression

The test requires Bun, Chrome, and Playwright in the QA environment. It does not start a server or add a production dependency. With a local Playwright installation, run:

```sh
pnpm run check:wheel-browser
```

When using the Codex desktop bundled dependencies, set `WORD_WHEEL_PLAYWRIGHT_PATH` to the Playwright package directory returned by `load_workspace_dependencies`, then run the same command. The test creates and deletes its own temporary files and isolated browser profile.

## Remaining release checks

- Deploy or inspect a Vercel preview containing these changes.
- Repeat completion and replay on a real iPhone in Safari and an Android phone in Chrome, including rotation and browser toolbar changes.
- Check the preview's home, setup, play, and content-review routes.
- Obtain parent or speech-therapist feedback on usability and vocabulary practice. This review makes no diagnostic or treatment claims.

The dev server is running on port 3000 for local review. Gameplay progress remains scoped to the current mounted target session. A full reload or starting a new setup begins another round, as before.

## Next batch prompt

```text
Prepare the Word Wheel demo release. Read AGENTS.md, docs/agent-brief.md, docs/spec.md, docs/plan.md, docs/status.md, and docs/demo-readiness-review.md. Deploy or inspect a Vercel preview with the reviewed changes. Verify home, setup, play, and content-review routes. Repeat a 15-to-zero round, completion, replay, a one-word custom round, exclusions, and keyboard navigation. Coordinate real iPhone Safari and Android Chrome checks, including rotation. Fix release issues, update docs/status.md with evidence, and provide the demo URL and any remaining limitations. Keep the approved vocabulary and product scope unchanged.
```
