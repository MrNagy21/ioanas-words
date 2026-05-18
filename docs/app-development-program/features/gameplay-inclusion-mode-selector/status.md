# Gameplay Inclusion Mode Selector Status

Last updated: 2026-05-16

## Current Phase

Phase: Complete

Overall status: Gameplay Inclusion Mode Selector is implementation-complete and post-QA UX polish is documented. The play route now uses the mode-ready `GameplayContent` contract backed by `getDerivedWordPoolsForTarget`, defaults to `starts-with`, opens a focused wheel setup sheet for starts-with, contains-only, mixed mode, and bounded word-count choices, then keeps the play surface wheel-first with only concise status and setup/reset/spin actions. Remove, reset, result modal keep/remove, and result-modal random replacement all work from shared active-mode pools while preserving exact Romanian matching and canonical ready image or placeholder records. `Scoate` now removes the selected word and shrinks the current wheel instead of automatically backfilling; `Înlocuiește` remains the one-for-one random swap path. The documented 16-word cap is enforced by shared gameplay helpers and covered by small, exact-size, and large-pool compatibility checks. Final local browser verification remains pending because no user-running dev server was reachable at `http://localhost:3000`.

## Completed

- Created the feature folder.
- Drafted `spec.md`.
- Drafted batch plan in `plan.md`.
- Created this feature-specific `status.md`.
- Confirmed this feature follows the completed Locale-Wide Content Refactor.
- Confirmed `starts-with` remains the default child-facing mode.
- Defined the three child-facing modes:
  - `starts-with`;
  - `contains-only`;
  - `starts-with-or-contains`.
- Confirmed derived mode pools should use the completed locale-wide helper API and exact matching helpers.
- Confirmed matching must use exact lowercased `word` and `display`, not folded `normalized`.
- Confirmed Romanian diacritics stay distinct for gameplay matching.
- Confirmed remove, reset, and result modal behavior across all modes.
- Confirmed `/admin/words` must remain public, read-only, and unlinked from child-facing navigation.
- Started Batch 1: Gameplay Data Contract.
- Completed Batch 1: Gameplay Data Contract.
- Replaced the play route's `getLetterContent(locale, letter)` dependency with `getLetter(locale, letter)` validation plus `getDerivedWordPoolsForTarget(locale, selectedLetter)`.
- Added `GameplayContent` as the client-facing selected-letter plus derived-pools data shape.
- Updated `WordWheelShell` and `WheelGame` to accept `GameplayContent`.
- Kept current visible gameplay on `DEFAULT_WORD_INCLUSION_MODE` with `content.wordPools.startsWithWords`, so starts-with remains the default behavior.
- Kept `generateStaticParams` stable for enabled Romanian letters.
- Updated the gameplay compatibility check to assert the derived-pool data contract still produces duplicate-free pools and starts-with default gameplay.
- Started Batch 2: Selector UI And Mode State.
- Completed Batch 2: Selector UI And Mode State.
- Added `selectedMode` state to `WheelGame`, initialized from `DEFAULT_WORD_INCLUSION_MODE`.
- Added compact segmented controls for:
  - `starts-with` as `Încep cu`;
  - `contains-only` as `Conțin`;
  - `starts-with-or-contains` as `Amestecat`.
- Made the selected mode visually clear with active button styling.
- Made the selected mode programmatically clear with `aria-pressed`.
- Added per-mode counts inside the segmented control.
- Added compact visible mode/count status text below the selector.
- Switched visible wheel words from the Batch 1 `GameplayContent.wordPools` contract rather than restoring `getLetterContent` as the play route data source.
- Kept the old full word preview list out of the play route.
- Kept the wheel-first app shell layout and existing modal/remove/reset controls.
- Captured a new requirement for user-selectable wheel word count:
  - users choose how many words appear on the wheel;
  - the app picks that many words randomly from the active mode pool;
  - users do not pick exact words in v1.
- Captured a new requirement for result-modal replacement:
  - the modal should offer replacing the selected word with a random eligible off-wheel word;
  - replacement must not duplicate a word already on the wheel;
  - replacement must not re-add removed words.
- Added planned Batch 3.5: Wheel Word Count And Random Replacement to `plan.md`.
- Started Batch 3: Mode-Specific Gameplay Behavior.
- Completed Batch 3: Mode-Specific Gameplay Behavior.
- Confirmed starts-with mode uses the derived `startsWithWords` pool.
- Confirmed contains-only mode uses the derived `containsOnlyWords` pool, excluding words that start with the selected target.
- Confirmed mixed mode uses the derived duplicate-free `mixedWords` pool.
- Extended `src/game/gameplay-compatibility.check.ts` to assert starts-with, contains-only, mixed, removal, and reset behavior for every enabled Romanian target.
- Kept exact Romanian diacritic matching in the shared `src/content/matching.ts` helper path.
- Kept removed word IDs in `WheelGame` session state for the current target route.
- Preserved cross-mode removal because every mode applies the same removed word ID list.
- Preserved cross-mode reset because reset clears the shared removed word ID list.
- Blocked wheel spin, reset, and mode selector controls while the result modal is open, so modal behavior cannot be bypassed through background controls.
- Kept Batch 3.5 out of this batch: no user-selected wheel count, random wheel subset, or result-modal replacement action was added.
- Started Batch 3.5: Wheel Word Count And Random Replacement.
- Completed Batch 3.5: Wheel Word Count And Random Replacement.
- Added exported wheel-size helpers in `src/game/word-selection.ts`:
  - `MAX_WHEEL_WORD_COUNT = 16`;
  - `DEFAULT_WHEEL_WORD_COUNT = 10`;
  - `getBoundedWheelWordCount`;
  - `getRandomWheelWords`;
  - `getOffWheelWords`;
  - `getRandomWord`.
- Added a compact `Cuvinte` stepper to `WheelGame` for choosing the target number of visible wheel words.
- Bounded the stepper by active mode available words after removals and by the 16-word maximum.
- Kept exact manual word picking out of the UI; users can only choose a count.
- Randomized visible wheel words from the active mode pool after removed words are excluded.
- Preserved stable visible subsets per selected mode and target count while words remain eligible.
- Reset now clears removed words and rebuilds random subsets.
- Added result-modal `Înlocuiește` action when eligible off-wheel words exist.
- Replacement chooses a random off-wheel word from the same active mode pool, avoids duplicates on the wheel, and does not re-add removed words.
- Preserved canonical ready image and placeholder rendering because replacement uses canonical `ContentWord` records.
- Preserved modal focus trap, Escape close, keep/remove/choose-another-letter behavior, and focus return.
- Preserved no-scroll wheel-first layout with compact controls.
- Started Batch 4: Pool Size, Empty States, And Readability.
- Completed Batch 4: Pool Size, Empty States, And Readability.
- Kept `MAX_WHEEL_WORD_COUNT = 16` as the documented maximum wheel size.
- Added shared empty-state classification for `no-content` versus `all-removed` active-mode states.
- Updated the empty wheel state to show concise Romanian copy for no-content and all-removed cases.
- Kept mode switching available from empty states through the existing segmented control in the game panel.
- Prevented stale visible subset IDs from producing a temporary empty state when the active mode still has eligible off-wheel words after removal.
- Added dense-wheel visual scaling so 11+ and 13+ word wheels use smaller image chips, farther-out image placement, and smaller stroked labels.
- Extended compatibility checks for small pools, exact 16-word pools, large pools above the maximum, off-wheel replacement candidates, unavailable current IDs, no-content empty states, all-removed empty states, and canonical ready/placeholder record preservation.
- Started and completed Batch 5: Final QA And Documentation.
- Re-ran final content validation, lint, TypeScript, gameplay compatibility, exact matching, build, browser reachability, and whitespace diff checks.
- Confirmed `/ro/play/<letter>` continues to derive gameplay from the locale-wide content API through `GameplayContent.wordPools`.
- Confirmed `/ro/play/a` browser verification must remain pending until the user starts the dev server on port `3000`.
- Confirmed `/admin/words` remains public, read-only, backed by static helpers, and unlinked from the child-facing app.
- Removed the `Altă literă` navigation action from the result modal.
- Changed result-modal replacement so `Înlocuiește` updates the wheel subset and closes the modal, matching `Păstrează` and `Scoate` dismissal behavior.
- Moved mode and word-count controls out of the live play panel and into a focused `Setează roata` setup modal.
- Opened setup by default after choosing a letter, with `starts-with` selected by default.
- Added draft setup state so mode/count changes do not mutate the live wheel until the user applies setup.
- Kept the play surface focused on the wheel, concise status, setup, reset, and spin.
- Changed removal behavior so `Scoate` shrinks the current visible wheel instead of backfilling to the configured target count.
- Kept deliberate one-for-one backfill available through `Înlocuiește`.
- Added setup reset behavior that can restore removed words and rebuild the random subset deliberately.
- Marked Batch 5 complete in this feature plan.
- Updated global `docs/status.md` with feature completion notes and the next recommended feature.
- Prepared the next ready-to-copy prompt for a Romanian Content Expansion spec package.

## In Progress

- No implementation is currently in progress.

## Decisions

- The feature is a child-facing gameplay selector, not a content expansion.
- `starts-with` is the default on every play route load.
- Mode options should use short Romanian labels suitable for a compact segmented control.
- The play route should stop relying only on `getLetterContent(locale, letter)` for gameplay data because that helper is starts-with-only.
- Preferred implementation is for the server play route to pass `getDerivedWordPoolsForTarget(locale, selectedLetter)` or an equivalent mode-ready data shape into `WheelGame`.
- Removed word IDs are scoped to the current target page session.
- Removing a word removes that word from every mode for the current target until reset.
- Switching modes does not clear removed words.
- Reset restores removed words across all modes for the current target.
- Navigating to another letter naturally starts a new target session.
- The result modal keeps the focused action intent: keep, remove, and replace when an off-wheel candidate exists.
- Large pools should be capped to a readable wheel subset of 16 available words until real expanded-content browser review changes that limit.
- Empty mode states should be recoverable and should keep mode switching available when another mode has words.
- Batch 1 intentionally does not add visible mode controls; it only moves the route and client prop contract to mode-ready pools.
- Batch 2 uses the short Romanian labels `Încep cu`, `Conțin`, and `Amestecat`.
- Mode switching clears the prior displayed result text and closes any open result state.
- Setup controls are draft-only; mode/count changes apply only when the user starts or updates the wheel from the setup modal.
- Wheel spin, reset, and setup entry controls are disabled while the result modal is open.
- User-adjustable wheel size belongs in this feature because it directly controls the active mode pool shown on the child-facing wheel.
- Random replacement belongs in this feature because it depends on the same active mode pool, visible wheel subset, removed-word state, and result modal.
- Exact manual word picking is explicitly out of scope for this feature.
- Wheel size is capped by exported `MAX_WHEEL_WORD_COUNT = 16`.
- The default target wheel size is `10`, with smaller active pools showing all available words.
- Random visible wheel subsets are stable for a selected mode/count while their words remain eligible.
- Removing a word shrinks the current visible wheel and does not backfill automatically.
- Reset clears removed word IDs and visible subset memory, so random subsets may rebuild.
- Result-modal replacement closes the modal after updating the wheel subset.
- Empty-state copy is based on the selected mode's original available count, not only on whether any word has been removed somewhere in the target session.
- Dense wheel readability is handled in the SVG layout by scaling image chip size, image slot radius, and label stroke/font size at 11+ and 13+ visible words.

## Resolved Questions

- Mixed mode preserves the locale-wide helper ordering at the data layer; gameplay samples random visible subsets in the client layer.
- The 16-word wheel cap is now a shared exported constant in `src/game/word-selection.ts`.
- Wheel-size controls use a compact stepper rather than fixed choices, bounded by the active mode's available count and the 16-word maximum.
- Random wheel subsets persist for the selected mode/count while their words remain eligible; removal shrinks the subset, reset clears subset memory, and replacement updates the current subset.
- Mode and count controls moved into setup so wheel configuration is not a live play-time control.

## Exceptions

- `pnpm` is not on the default shell `PATH`; Batch 1 used `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm`.
- `pnpm run validate:content` passed but reported existing warning-threshold image sizes above `12 KB` for five ready `M` and `P` images. All remain below the `20 KB` hard maximum.
- `pnpm run build` is still blocked in the current Codex desktop environment by the local Next SWC macOS code-signing issue before app compilation.
- Browser verification was not run because `http://localhost:3000` is not reachable and the user owns the dev server on port `3000`.
- Batch 2 browser verification was not run because `http://localhost:3000/ro/play/a` is not reachable and the user owns the dev server on port `3000`.
- Batch 3 browser verification was not run because `http://localhost:3000/ro/play/a` is not reachable and the user owns the dev server on port `3000`.
- Batch 5 browser verification was not run because `http://localhost:3000/ro` was not reachable and the user owns the dev server on port `3000`.
- Post-QA setup modal browser verification was not run because `http://localhost:3000/ro/play/a` was not reachable and the user owns the dev server on port `3000`.

## Acceptance Status

- Feature spec exists: complete.
- Implementation plan exists: complete.
- Feature status tracker exists: complete.
- Child-facing default mode behavior is defined: complete.
- Starts-with, contains-only, and mixed behavior is defined: complete.
- Remove, reset, and modal behavior is defined: complete.
- QA expectations are defined: complete.
- Batch 1 play route data contract: complete.
- Batch 1 route validation for supported locale and enabled selected letter: complete.
- Batch 1 generated Romanian play params remain stable: complete.
- Batch 1 starts-with default visible behavior: complete.
- Visible mode selector: complete.
- Setup modal for mode/count controls: complete.
- Batch 2 default selected mode from `DEFAULT_WORD_INCLUSION_MODE`: complete.
- Batch 2 mode switching without route navigation: complete.
- Batch 2 visible mode/count status text: complete.
- Batch 3 starts-with derived-pool behavior: complete.
- Batch 3 contains-only derived-pool behavior: complete.
- Batch 3 mixed duplicate-free derived-pool behavior: complete.
- Batch 3 cross-mode removal and reset behavior: complete.
- Batch 3 modal behavior preservation: complete.
- User-selected wheel word count: complete.
- Random wheel subset: complete.
- Result-modal random replacement: complete.
- Batch 4 16-word maximum enforcement: complete.
- Batch 4 small, exact-size, and large-pool edge checks: complete.
- Batch 4 no-content versus all-removed empty states: complete.
- Batch 4 mode switching from empty states: complete.
- Batch 4 wheel label and image readability hardening: complete.
- Batch 4 ready image and placeholder preservation: complete.
- Batch 5 final validation and type checks: complete.
- Batch 5 production build check: attempted; blocked by the local Next SWC code-signature issue before app compilation.
- Batch 5 browser verification for `/ro`, `/ro/play/a`, and `/admin/words`: pending user-running dev server on port `3000`.
- Post-QA result modal and setup UX polish: complete.
- `Scoate` shrinks the current wheel without automatic backfill: complete.
- `/admin/words` public read-only and unlinked from child-facing navigation: complete by code review.
- No content expansion, admin editing, auth, database, upload, CSV, billing, accounts, or AI pronunciation introduced: complete.

## Verification

Spec package verification:

```txt
Review markdown for consistency and readable handoff quality.
```

Result:

- Completed as a documentation-only review.

No code verification was run for Batch 0 because that batch created specs only.

Batch 1 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
curl -I --max-time 3 http://localhost:3000/ro
curl -I --max-time 3 http://localhost:3000/ro/play/a
curl -I --max-time 3 http://localhost:3000/admin/words
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for some `M` and `P` ready images.
- `pnpm run lint` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- Browser reachability checks for `/ro`, `/ro/play/a`, and `/admin/words` failed because no dev server was listening on port `3000`.

Batch 2 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
curl -I --max-time 3 http://localhost:3000/ro/play/a
```

Results:

- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- Browser verification was skipped because `curl` could not connect to `http://localhost:3000/ro/play/a`; no user-running dev server was listening on port `3000`.

Batch 3 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
curl -I --max-time 3 http://localhost:3000/ro/play/a
git diff --check
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for some `M` and `P` ready images.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- Browser verification was skipped because `curl` could not connect to `http://localhost:3000/ro/play/a`; no user-running dev server was listening on port `3000`.
- `git diff --check` passed.

Batch 3.5 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
curl -I --max-time 3 http://localhost:3000/ro/play/a
git diff --check
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for some `M` and `P` ready images.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- Browser verification was skipped because `curl` could not connect to `http://localhost:3000/ro/play/a`; no user-running dev server was listening on port `3000`.
- `git diff --check` passed.

Batch 4 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
curl -I --max-time 3 http://localhost:3000/ro/play/a
git diff --check
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for some `M` and `P` ready images.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- Browser verification was skipped because `curl` could not connect to `http://localhost:3000/ro/play/a`; no user-running dev server was listening on port `3000`.
- `git diff --check` passed.

Batch 5 verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
curl -I --max-time 3 http://localhost:3000/ro
git diff --check
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for two `M` images and three `P` images. All warned files remain below the `20 KB` hard maximum.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- Browser verification for `/ro`, `/ro/play/a`, and `/admin/words` was skipped because `curl` could not connect to `http://localhost:3000/ro`; no user-running dev server was listening on port `3000`.
- `git diff --check` passed.

Post-QA setup modal and removal UX verification:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
curl -I --max-time 3 http://localhost:3000/ro/play/a
git diff --check
```

Results:

- `pnpm run validate:content` passed with existing image warning-threshold notices for two `M` images and three `P` images. All warned files remain below the `20 KB` hard maximum.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.
- Browser verification for `/ro/play/a` was skipped because `curl` could not connect to `http://localhost:3000/ro/play/a`; no user-running dev server was listening on port `3000`.
- `git diff --check` passed.

## Finalization

Gameplay Inclusion Mode Selector is finalized from the documented static QA perspective. Remaining verification is browser-only: after the user starts the dev server on port `3000`, verify `/ro`, `/ro/play/a`, and `/admin/words` in the browser, including the initial setup sheet, applying mode/count setup, reopening setup from play, result modal keep/remove/replacement, `Scoate` shrinking the wheel without automatic backfill, reset, empty states, and the read-only admin inventory.

Next recommended feature: Romanian Content Expansion spec package.

## Ready-To-Copy Prompt

```txt
You are working in /Users/darius/mrNagySSC/ioana/word-wheel.

Before editing docs or code, read:
1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/plan.md
5. docs/status.md
6. docs/app-development-program/README.md
7. docs/app-development-program/roadmap.md
8. docs/app-development-program/content-architecture.md
9. docs/app-development-program/word-inclusion-modes.md
10. docs/app-development-program/romanian-content-program.md
11. docs/app-development-program/review-and-qa.md
12. docs/app-development-program/spec-template.md
13. docs/app-development-program/features/locale-wide-content-refactor/spec.md
14. docs/app-development-program/features/locale-wide-content-refactor/status.md
15. docs/app-development-program/features/gameplay-inclusion-mode-selector/spec.md
16. docs/app-development-program/features/gameplay-inclusion-mode-selector/plan.md
17. docs/app-development-program/features/gameplay-inclusion-mode-selector/status.md

Task:
Create the Romanian Content Expansion feature spec package.

Scope:
- Add a new feature folder under docs/app-development-program/features/ for Romanian content expansion.
- Write spec.md, plan.md, and status.md for expanding Romanian content after the completed Admin Words Inventory, Locale-Wide Content Refactor, and Gameplay Inclusion Mode Selector.
- Use /admin/words and the locale-wide helper architecture as the review surface and source of coverage gaps.
- Define candidate generation, human review, validation, canonical starting-letter storage, contains-pool impact checks, image brief requirements, and QA gates.
- Keep the first implementation batch documentation-first unless the spec explicitly scopes a small content pilot.
- Update docs/status.md when the feature package is created and prepare the next ready-to-copy implementation prompt.

Non-goals:
- Do not add actual content expansion in the spec-package batch.
- Do not add admin editing, auth, database, upload, CSV, billing, accounts, or AI pronunciation.
- Do not link /admin/words from the child-facing app.
- Do not start a dev server on another port.

QA:
- Documentation-only spec work requires markdown consistency review.
- If code or content changes are made unexpectedly, run pnpm run validate:content, pnpm run lint, ./node_modules/.bin/tsc --noEmit --incremental false, pnpm run check:gameplay, pnpm run check:matching, and git diff --check.
- Browser verification is only needed if http://localhost:3000 is already running and a UI change was made; otherwise ask the user to start the dev server on port 3000.
```
