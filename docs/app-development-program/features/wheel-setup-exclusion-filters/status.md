# Wheel Setup Exclusion Filters Status

Last updated: 2026-05-20

## Current Phase

Phase: saved setup editing UX overhaul complete; Batch 5 partially complete

Overall status: The setup flow now uses the four-step wizard `Reguli`, `Evită`, `Cuvinte`, `Final`. Exclusion filters are an optional rule layer that removes words containing selected letters or Romanian sequence targets after inclusion-mode selection and before all/manual word selection. Batch 1 added the shared target registry and exact matching helpers. Batch 2 updated local setup storage for `excludedTargetKeys`. Batch 3 wired filtering data flow, count recomputation, clamping, and empty-state helpers. Batch 4 added the four-step UI, impact counts, recovery state, comfortable selectable chips, and mobile verification. A user-reported follow-up also applied exclusions on `/ro/play/<target>` and expanded the Romanian exclusion picker to the full 31-letter alphabet. The saved setup editing UX overhaul is complete: editing a saved configuration keeps saved identity/name, save/update actions have feedback, duplicate names are blocked per target, save-as-new is clearly a copy path, and the final start action is simply `Pornește roata`. Remaining Batch 5 work is limited to optional concise play-screen status polish and final release QA.

## Completed

- Reviewed the existing setup implementation and confirmed the current model has inclusion modes but no exclusion dimension.
- Verified the expected local dev server is reachable outside the sandbox at `http://localhost:3000`.
- Inspected `/ro/setup/f` on desktop and mobile.
- Confirmed the recommended UX should not add exclusion as another inclusion-mode card.
- Confirmed a four-step flow is preferable for mobile clarity and parent-readable setup.
- Recorded real-world source notes for accessibility, mobile usability, and speech-practice boundary decisions.
- Created `spec.md`.
- Created `plan.md`.
- Created this `status.md`.
- Created `next-implementation-prompt.md`.
- Completed Batch 1: Exclusion Target Registry And Matching Helpers on 2026-05-20.
- Added `src/content/exclusions.ts` with locale-aware exclusion target generation from enabled letters and enabled practice targets.
- Added stable prefixed target keys such as `letter:r` and `sequence:ghe`, with target `kind`, `id`, `label`, and `key` in helper output.
- Omitted the active setup target from the selectable exclusion target list.
- Added shared filtering by excluded target keys, with invalid stored keys ignored.
- Kept exclusion matching on the exact `wordContainsTarget` helper path, preserving Romanian diacritic distinctions and sequence target matching without using folded `normalized`.
- Added `check:matching` compatibility coverage for target-list generation, active target exclusion, invalid keys, `F` starts-with excluding `R`, exact `S` versus `Ș` behavior, and all enabled Romanian sequence targets.
- Batch 1 verification passed using the local nvm `pnpm` binary because the default shell PATH did not include `pnpm`: `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:matching`, and `pnpm run check:gameplay`. `git diff --check` also passed.
- Completed Batch 2: Setup Storage Schema Migration on 2026-05-20.
- Added `excludedTargetKeys` to `WheelSetupConfig`.
- Bumped the setup store schema writer to version `2` while keeping the existing `word-wheel.setup.v1` localStorage key.
- Kept the parser compatible with stored schema version `1` so existing active configs and saved configs load with `excludedTargetKeys: []`.
- Validated stored exclusion keys through the Batch 1 registry; unknown keys and duplicate keys are ignored while valid keys such as `letter:r` and `sequence:ghe` are retained.
- Preserved active setup and saved setup behavior by keeping the existing target-scoped active config and saved setup APIs.
- Added `getExcludedTargetsSummary` so setup summaries can render labels such as `Fără R` and omit the phrase when no exclusions exist.
- Added focused compatibility coverage in `src/game/wheel-setup-storage.check.ts` and the `pnpm run check:setup-storage` script.
- Updated `next-implementation-prompt.md` for Batch 3.
- Batch 2 verification passed using `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm` because the default shell PATH still did not include `pnpm`: `pnpm run check:setup-storage`, `pnpm run lint`, and `pnpm exec tsc --noEmit --incremental false`.
- Completed Batch 3: Filtering Data Flow And Counts on 2026-05-20.
- `getModeWords`, `getModeWordCounts`, `getValidWordIdsForMode`, `getAvailableWordCountForMode`, and `resolveWheelSetupConfig` now apply `excludedTargetKeys` after inclusion-mode selection and before all/manual word source resolution.
- Setup editor data now reads filtered mode words, filtered available counts, and filtered manual-selection eligibility when a draft config already contains exclusions.
- Manual selected word IDs are clamped to the filtered eligible pool, and custom mode falls back to all filtered words when exclusions invalidate every selected word.
- Wheel word count is clamped to the filtered available count for all/custom source modes.
- Added `getWheelSetupEmptyStateKind` to distinguish inclusion modes with no base words from exclusions that remove every word from a previously non-empty base pool.
- Added `check:gameplay` coverage for `F` starts-with excluding `R`, all-words count changes, selected-word clamping, wheel-count clamping, custom fallback, and empty-state classification.
- Batch 3 verification passed using `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm` because the default shell PATH still did not include `pnpm`: `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, and `pnpm run check:matching`. `git diff --check` also passed.

## In Progress

- No implementation is currently in progress.

## Batch 4 Completion

- Completed Batch 4: Four-Step Setup UI on 2026-05-20.
- Changed setup wizard steps to `Reguli`, `Evită`, `Cuvinte`, and `Final`.
- Added the `Evită` step with selectable letter and sequence chips, `aria-pressed`, visible selected state, and mobile-sized tap targets.
- The active setup target is omitted from the exclusion picker.
- Step 2 now shows immediate impact counts: baseline available words, filtered words after exclusions, and removed count.
- Continuation to word selection is blocked when exclusions empty a previously non-empty inclusion-mode pool, with a compact recovery state.
- Step 3 all/manual word selection now clearly operates on the filtered pool and includes the exclusion summary where useful.
- Final setup summary includes exclusions when present.
- Expanded Romanian letter exclusion choices to the full 31-letter alphabet: `A`, `Ă`, `Â`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `Î`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `Ș`, `T`, `Ț`, `U`, `V`, `W`, `X`, `Y`, `Z`.
- Recorded the Romanian alphabet source in `spec.md`.
- Fixed the user-reported play-route bug: saved active exclusions now filter `/ro/play/<target>` wheel words, result replacement candidates, reset behavior, and visible wheel subset keys.
- Browser verification confirmed `/ro/setup/f` excluding `R` starts `/ro/play/f` with only `față`, `fetiță`, `fulgi`, `fasole`, `fustă`, and `fotoliu` on the wheel.
- Browser verification confirmed the full-letter exclusion picker includes `Ă`, `Â`, `Q`, and `X`.
- Browser verification checked `320 x 568`, `360 x 780`, and `390 x 844` setup viewports with no horizontal overflow.
- Verification passed: `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:matching`, `pnpm run check:gameplay`, and `git diff --check`.
- The first sandboxed `pnpm` attempts failed because the pnpm shim tried to fetch and network access was restricted; reruns with approved network access passed.

## Saved Setup Editing UX Audit And Fix

- Completed a UX audit of the saved-configuration edit flow on 2026-05-20.
- Finding: editing a saved setup loaded only the saved config into the editor. The editor lost the saved setup `id`, original name, and original config, so the final step showed a blank `Nume configurație` field and generic save actions.
- Finding: the generic `Salvează` action always called create behavior, which made duplicate saved setups instead of clearly updating the selected saved setup.
- Finding: the final mobile action hierarchy did not clearly distinguish updating the existing adult configuration, saving a duplicate/new configuration, and starting the wheel without saving the draft.
- Added explicit editor context for `new` versus `editing-saved`, including saved setup `id`, original name, and original normalized config for dirty-state comparison.
- Added `updateSavedWheelSetup(setupId, { name, config })`, preserving `createdAt` and updating `updatedAt`.
- Editing a saved setup now prefills the saved setup name and shows `Editezi: <name>`.
- The final step now offers `Salvează modificările`, `Salvează ca nouă`, and the normal `Pornește roata` start action when editing a saved setup.
- `Salvează modificările` is disabled when the draft and name match the loaded saved setup, and the UI shows `Modificări nesalvate` only when the draft differs.
- Creating a new setup keeps save-as-new behavior and still allows starting without saving.
- Mobile final-step save actions stack to one column, while the primary footer action remains reachable and explicitly starts without saving.
- Added focused `check:setup-storage` coverage for update behavior, including preserving `createdAt`, updating `updatedAt`, retaining one saved record on update, and returning `null` for a missing setup id.
- Browser verification against the existing `http://localhost:3000` server covered:
  - creating a new saved setup;
  - returning to saved configurations;
  - editing it, adding `Fără R`, changing wheel count, and saving changes to the same setup;
  - confirming only one saved setup remained with updated summary/timestamp text;
  - editing again and saving as new;
  - confirming two saved setups existed;
  - starting an edited draft without saving and confirming `/ro/play/f` used the draft count/exclusions while saved setup summaries stayed unchanged;
  - delete confirmation with cancel before cleanup;
  - `/ro/setup/f`, `/ro/play/f`, and `/ro/setup/ghe`.
- Responsive browser verification found no horizontal overflow at `320 x 568`, `360 x 780`, `390 x 844`, `820 x 1180`, and `1280 x 720` for the saved-edit final step. `/ro/setup/ghe` final step at `390 x 844` also had no horizontal overflow and showed the expected save actions plus `Pornește roata`.
- Verification passed after rerunning `pnpm` outside the sandbox because the sandboxed pnpm shim failed with `fetch failed`: `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:setup-storage`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check`.
- No Romanian words, image assets, database, auth, billing, accounts, admin editing, AI pronunciation, live play-screen setup controls, or clinical claims were added.

## Saved Setup Editing UX Overhaul Follow-Up

- Completed a second audit on 2026-05-20 after review found the previous fix still left confusing save behavior.
- Finding: saving a new setup produced no visible confirmation, so users could repeatedly press the save action without knowing whether anything happened.
- Finding: the UI allowed duplicate saved setup names for the same practice target, making the saved-configuration chooser ambiguous.
- Finding: `Pornește fără salvare` stayed visible after changes had already been saved, which framed a normal start action as risky or unsaved.
- Finding: the final step still exposed too much implementation state. It needed validation and transaction feedback, not more explanatory copy.
- Added normalized saved setup name checking for target-scoped duplicate names. Matching trims whitespace, collapses repeated spaces, and compares lowercased Romanian text.
- Added `isSavedWheelSetupNameTaken(...)` storage helper plus focused `check:setup-storage` coverage for duplicate-name detection, same-setup exclusion, and target scoping.
- The setup editor now blocks duplicate names for both update and save-as-new flows. Updating an existing setup may keep its own name, but saving a copy requires a different name.
- Save actions now show inline feedback:
  - `Configurația „<name>” a fost salvată.`;
  - `Modificările au fost salvate.`;
  - `Există deja o configurație cu acest nume.`.
- The setup name field now has inline helper/error text and `aria-invalid` when duplicate names are entered.
- The final footer action is now consistently `Pornește roata`; unsaved state is communicated only through the compact config status (`Nesalvată`, `Modificări nesalvate`, `Salvată`) and save feedback.
- Browser verification against `http://localhost:3000` confirmed:
  - save-as-new feedback appears after creating a setup;
  - saving as new is disabled after saving because the current name is already taken;
  - renaming a saved setup to another saved setup's name shows the duplicate-name error and disables update/save-as-new;
  - saving changes to the same setup shows update feedback;
  - saved chooser had exactly one test setup per unique name before cleanup;
  - `Pornește fără salvare` no longer appears in the final step;
  - `/ro/play/f` remains wheel-first with the setup link and no horizontal overflow.
- Responsive browser verification confirmed saved-edit final step has no horizontal overflow at `320 x 568`, `360 x 780`, `390 x 844`, `820 x 1180`, and `1280 x 720`; `/ro/setup/ghe` at `390 x 844` also has no horizontal overflow and keeps the expected save/start actions.
- Verification passed after rerunning `pnpm` outside the sandbox because sandboxed pnpm failed with `fetch failed`: `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:setup-storage`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check`.
- No Romanian words, image assets, database, auth, billing, accounts, admin editing, AI pronunciation, live play-screen setup controls, or clinical claims were added.

## Decisions

- Exclusions are a separate setup rule, not a fourth inclusion mode.
- The recommended setup steps are:
  - `Reguli`;
  - `Evită`;
  - `Cuvinte`;
  - `Final`.
- Romanian exclusion letter choices use the full 31-letter Romanian alphabet, not only currently enabled starts-with practice buckets.
- Exclusion sequence choices use enabled practice target groups.
- Romanian sequence groups for the first implementation are `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- Exclusion matching uses exact locale-aware containment in `word.word` and `word.display`.
- Exclusion matching must not use folded `normalized` values.
- The active target cannot be excluded in v1.
- Exclusions apply before manual word picking.
- Saved setup configs now include `excludedTargetKeys`.
- Existing v1 local setup configurations migrate at read time with no exclusions.
- Editing saved setups must preserve saved identity and use update-in-place for `Salvează modificările`.
- `Salvează ca nouă` intentionally creates a separate saved setup, but it requires a unique name for that target.
- Starting from the final setup step is labeled as `Pornește roata`; save state is handled by validation and inline feedback.
- The feature must not make diagnostic, treatment, or clinical recommendation claims.

## Open Questions

- Whether to show the active target as disabled in the exclusion picker or omit it entirely. Recommendation: omit it unless user testing shows the absence is confusing.
- Whether the play-screen mobile status can include exclusions without crowding. Recommendation: leave the wheel-first play screen unchanged unless a compact status can be verified without crowding.
- Whether future locales need phoneme-level metadata beyond orthographic targets. Recommendation: defer; v1 should use app-supported letters and sequence targets only.

## Next Recommended Batch

Start the remaining Batch 5 polish/final QA from `plan.md`: Play Route, Save/Load, And Summary Integration.

Ready-to-copy implementation prompt:

```txt
Read AGENTS.md, docs/agent-brief.md, docs/spec.md, docs/plan.md, docs/status.md, and the full feature package in docs/app-development-program/features/wheel-setup-exclusion-filters/.

Implement the remaining Wheel Setup Exclusion Filters Batch 5 polish and QA.

Goals:
- Review the current implementation before editing: Batch 4 already added the four-step setup UI, full Romanian alphabet exclusion choices, and play-route filtering for active saved exclusions.
- Add concise play-screen exclusion status only if it fits the wheel-first mobile layout; otherwise keep exclusions visible in setup and saved summaries.
- Verify saved configurations with exclusions can be loaded, edited, deleted, recreated, and started.
- Verify result modal remove, replace, and reset behavior continues to respect the filtered pool.
- Keep changes small and avoid reintroducing live setup controls on the play screen.

Do not add Romanian words, images, database, auth, billing, accounts, AI pronunciation, clinical claims, or a new dev server port.

Verification:
- pnpm run lint
- pnpm exec tsc --noEmit --incremental false
- pnpm run check:gameplay
- pnpm run check:matching

Browser verification:
- http://localhost:3000/ro/setup/f
- http://localhost:3000/ro/play/f
- http://localhost:3000/ro/setup/ghe

Update docs/app-development-program/features/wheel-setup-exclusion-filters/status.md and docs/status.md when the batch starts and completes.
```
