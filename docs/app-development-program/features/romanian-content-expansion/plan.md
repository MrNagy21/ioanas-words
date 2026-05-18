# Romanian Content Expansion Implementation Plan

This plan is split into small batches. After each implementation batch, update this feature `status.md`. Update global `docs/status.md` when the feature starts, completes, or materially changes the next task.

## Batch 0: Spec Package

Status: Complete when `spec.md`, `plan.md`, and `status.md` exist and have been reviewed.

Tasks:

- Create the Romanian Content Expansion feature package.
- Confirm this feature follows Admin Words Inventory, Locale-Wide Content Refactor, and Gameplay Inclusion Mode Selector.
- Define candidate generation, human review, canonical storage, contains-pool impact checks, image brief requirements, validation, and QA gates.
- Incorporate therapy-informed target guidance from `docs/app-development-program/speech-therapy-content-guidance.md`.
- Confirm the first implementation batch is documentation-first.
- Record decisions, exceptions, and the next implementation batch in `status.md`.
- Update global `docs/status.md`.

Review checkpoint:

- The spec can be implemented without the original conversation.
- Non-goals are explicit enough to prevent actual content expansion during Batch 0.
- The next batch can audit coverage before production content changes.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

## Batch 1: Coverage Audit And Expansion Targets

Status: Complete

Tasks:

- Use `/admin/words` and locale-wide helper architecture as the source of coverage gaps.
- Create a small documentation artifact in this feature folder that records current Romanian starts-with, contains-only, mixed, and image-readiness coverage.
- Map gaps to the priority tiers in `docs/app-development-program/romanian-content-program.md`.
- Map current and future gaps to the speech-target model in `docs/app-development-program/speech-therapy-content-guidance.md`.
- Record target sound, target sound position, syllable complexity, and contrast-coverage gaps for high-value targets where the current helper output can support it or where a manual worksheet is needed.
- Identify letters or targets that should not be padded because child-friendly vocabulary is weak.
- Define the first content pilot scope, but do not add production words in this batch.
- Record any helper, validation, or admin-inventory gaps that block reliable content review.

Review checkpoint:

- The target matrix explains why the first expansion pilot should focus on its selected letters or targets.
- The target matrix distinguishes alphabet coverage from speech-target value.
- Coverage findings come from current app helpers or `/admin/words`, not manual guesses.
- No production content manifests are changed.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/admin/words
```

If `http://localhost:3000` is not reachable, ask the user to start the dev server on port `3000`. Do not start another port.

## Batch 2: Candidate Generation And Review Worksheet

Status: Complete

Tasks:

- Generate candidate Romanian words for the selected pilot scope.
- Deduplicate candidates against all approved Romanian words.
- Normalize spelling and Romanian diacritics.
- Assign proposed canonical starting letters.
- Record category, part of speech, age fit, imageability notes, and expected contains-pool impact.
- Record primary speech target, secondary speech targets, target sound position, syllable count, syllable complexity, consonant clusters, and likely contrast target.
- Human-review every candidate and mark accepted, rejected, or needs revision.
- Keep rejected candidates and rejection reasons in the worksheet if a worksheet is committed.
- Do not add accepted candidates to production JSON in this batch unless the plan is deliberately updated before work starts.

Review checkpoint:

- Accepted candidates are common, concrete, child-known, safe, and imageable.
- Accepted candidates have a clear therapy target, warm-up target, or vocabulary reason.
- Accepted candidates do not force abstract or weak words merely to create contrast pairs.
- Rejected candidates have clear reasons.
- Canonical starting-letter placement is reviewed before JSON changes.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

## Batch 3: Schema And Validation Readiness

Status: Complete

Tasks:

- Inspect whether existing content types and validation can support the accepted production candidates without shape changes.
- Research current sources where production decisions depend on Romanian language usage, child vocabulary familiarity, speech-target guidance, safety, licensing, or framework behavior.
- Ask the human before making critical production decisions, including borderline vocabulary acceptance, placeholder use in child-facing content, therapy metadata entering production JSON, or schema changes that affect future content.
- If needed, update TypeScript content types before adding content.
- If needed, update `scripts/content/validate-content.mjs` before adding content.
- Add or update checks for coverage reports, canonical placement, duplicate IDs, exact matching, and image readiness only where the current validator has a real gap.
- Decide whether therapy metadata remains worksheet-only or becomes optional production metadata.
- If therapy metadata enters production JSON, validate target sound values, target sound position values, and simple complexity fields before adding words.
- Keep production content changes out of this batch unless they are pure shape migrations required by the updated schema.

Review checkpoint:

- Validation fails clearly for incorrect canonical placement, duplicate IDs, missing ready images, and broken exact matching.
- Existing starter content still validates.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/content/matching.check.ts
git diff --check
```

## Batch 4: Production Content Batch

Status: Complete

Tasks:

- Add a small accepted set of Romanian words from the reviewed worksheet to their canonical starting-letter files.
- Use stable IDs and canonical image paths.
- Keep each word stored once.
- Record contains-pool impact in this feature `status.md`.
- Treat every implemented word as production-bound once it enters a manifest.
- Prefer adding production words only when their image plan is ready. Use placeholders only if the production plan explicitly accepts a metadata-first release and documents how unfinished words will stay out of child-facing gameplay or be completed before release.
- Do not add admin editing, auth, database, upload, CSV, billing, accounts, or AI pronunciation.

Review checkpoint:

- Every new word is approved by the worksheet.
- Every new word is in the correct canonical starting-letter file.
- Every new word is production-ready for metadata quality, canonical placement, child safety, and validation.
- Derived starts-with, contains-only, and mixed pools update as expected.
- Target sound position and therapy-target impact are recorded for every new word in the feature `status.md` or committed worksheet.
- `/admin/words` shows the expected coverage changes when the dev server is available.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/admin/words
http://localhost:3000/ro/play/<affected-letter>
```

## Batch 5: Production Image Briefs And Images

Status: Complete

Tasks:

- Write image briefs for every accepted production word that still needs a ready image.
- Generate or assign reviewed pixel-art images using the existing image-pipeline rules.
- Stage source images under `assets/image-sources/ro/<letter>/<word-id>.<ext>`.
- Optimize final images to `public/images/ro/<letter>/<word-id>.webp`.
- Mark images ready only after human visual review.
- Keep the canonical image owned by the canonical word record.

Review checkpoint:

- Every ready image is recognizable, child-safe, text-free, logo-free, and style-consistent.
- Image prompts preserve the speech target context without adding visible letters or text inside images.
- Every final asset is `256 x 256 px` WebP and below the hard maximum.
- Images render from canonical paths in starts-with, contains-only, and mixed gameplay.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/admin/words
http://localhost:3000/ro/play/<affected-letter>
```

## Batch 6: Production Expansion QA And Next Scope

Status: Complete

Tasks:

- Re-run full validation and compatibility checks.
- Review `/admin/words` coverage and image readiness for affected targets.
- Review child-facing gameplay for affected starts-with, contains-only, and mixed pools.
- Update this feature `status.md` with final production expansion results, decisions, exceptions, and remaining gaps.
- Update global `docs/status.md`.
- Define the next content expansion scope or explain that this production expansion slice is finalized.

Review checkpoint:

- The production slice improved documented coverage gaps.
- The production slice improved documented speech-target coverage without weakening child vocabulary quality.
- No weak or obscure words were added to pad counts.
- Content and images are ready for normal gameplay.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/ro/play/<affected-letter>
```

## Batch 7: Diacritic Buckets And Second Production Slice Planning

Status: Complete

Tasks:

- Resolve the stable ID, filename, and route convention for exact Romanian diacritic starting-letter buckets, especially `Ș` and `Ț`.
- Ask the human before implementing the convention if multiple viable options remain.
- Update validation where the convention affects accepted production content.
- Use the Batch 6 coverage data to plan a second small production slice from accepted worksheet rows only.
- Evaluate first: `șapcă`, `șosetă`, `șoricel`, `țestoasă`, `sanie`, `salată`, `sandale`, `zar`, `gem`, `girafă`, `ceapă`, `cireșe`, `ciorap`, `față`, `frunză`, `bicicletă`, and `deget`.
- Keep planned candidates in review/planning docs until canonical JSON shape, image briefs, and readiness path are clear.
- Update this feature `status.md` and global `docs/status.md`.

Review checkpoint:

- The convention preserves exact Romanian matching and routes while keeping production word IDs and image filenames tool-friendly.
- The second slice uses only accepted worksheet rows.
- No new approved child-facing words are added before image briefs and reviewed image readiness.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification is only needed after words are promoted to approved and the user-running dev server is reachable at `http://localhost:3000`.

## Batch 8: Second Production Slice Image Briefs And Implementation

Status: Complete

Tasks:

- Use `diacritic-buckets-and-second-slice-batch-7.md` as the source of planned words, IDs, canonical files, and image paths.
- Write production image briefs for the planned second-slice words.
- Generate or assign reviewed pixel-art images using the established image pipeline.
- Optimize final WebP assets to canonical paths.
- Add or update canonical word manifests only when metadata and image readiness are clear.
- Promote words to approved only with ready reviewed images, or use draft-only metadata only if the human explicitly approves that tradeoff.
- Enable newly completed letter buckets only after their approved words and ready images exist.
- Keep speech-target metadata in docs/status only, not production JSON.

Review checkpoint:

- Every implemented word is from an accepted worksheet row and matches the Batch 7 canonical shape.
- Every approved word has a ready reviewed image.
- `Ș` and `Ț` buckets validate with exact bucket files/routes and ASCII word ID prefixes.
- No rejected or needs-revision candidates are added.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/ro/play/sh
http://localhost:3000/ro/play/tz
http://localhost:3000/ro/play/f
http://localhost:3000/ro/play/d
```

## Batch 9: Third Production Slice Planning

Status: Complete

Tasks:

- Define a third small Romanian production slice from remaining accepted worksheet rows only.
- Start from `rochie`, `rachetă`, `iepure`, `scaun`, `nas`, `urs`, `coș`, `cămașă`, `dinți`, `cățel`, and `pijama`.
- Confirm each planned candidate is still not duplicated in current approved JSON by ID, exact word, or normalized value.
- Record canonical file, proposed ID, canonical image path, category, alt text direction, expected starts/contains/mixed impact, and image-readiness path.
- Keep the slice planning-only: no production JSON records and no image assets.
- Preserve exact Romanian bucket storage and current ASCII public route behavior for `Ș` and `Ț`.
- Update this feature `status.md` and global `docs/status.md`.

Review checkpoint:

- Every planned word is an accepted worksheet row.
- No rejected or needs-revision worksheet candidate enters the slice.
- Planned image paths and IDs match current naming conventions.
- New `I` and `N` bucket work is identified as an implementation-batch task, not silently introduced in planning.
- No placeholder-backed approved words are introduced.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification should use the always-running local server:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/ro/play/sh
http://localhost:3000/ro/play/tz
http://localhost:3000/ro/play/r
http://localhost:3000/ro/play/s
http://localhost:3000/ro/play/c
http://localhost:3000/ro/play/d
http://localhost:3000/ro/play/p
http://localhost:3000/ro/play/u
```

If a sandboxed localhost check fails, retry outside the sandbox before treating the server as unavailable. Do not start another dev server or use another port.

## Batch 10: Third Production Slice Image Briefs And Implementation

Status: Complete

Tasks:

- Use `third-production-slice-batch-9.md` as the source of planned words, IDs, canonical files, image paths, and readiness requirements.
- Write production image briefs for the 11 planned words.
- Generate or assign reviewed pixel-art images using the established image pipeline.
- Optimize final WebP assets to canonical paths.
- Add or update canonical word manifests only when metadata and image readiness are clear.
- Add `I` and `N` letter manifest entries and loader imports only when their planned words are ready for promotion, or use draft-only metadata only if the human explicitly approves that tradeoff.
- Promote words to approved only with ready reviewed images.
- Enable new letters only when their approved words and images are ready.
- Keep speech-target metadata in docs/status only, not production JSON.

Review checkpoint:

- Every implemented word is from an accepted worksheet row and matches the Batch 9 canonical shape.
- Every approved word has a ready reviewed image.
- `I` and `N` buckets are introduced deliberately with canonical word files and enabled only after ready content exists.
- No rejected or needs-revision candidates are added.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification should use the always-running local server on `http://localhost:3000`, retrying outside the sandbox if sandboxed localhost checks fail.

## Batch 11: Next Romanian Production Scope Decision

Status: Complete

Tasks:

- Review post-Batch 10 `/admin/words` coverage and helper-derived coverage data.
- Decide whether the next Romanian expansion step should be another production slice, a speech-target reporting tool, a pause for broader app QA, or a split vocabulary-first/image-second pipeline.
- If another production slice is selected, plan from accepted worksheet rows only and do not add production JSON or image assets in this batch.
- Resolve any needed conventions before implementation, especially future exact `Ă`, `Â`, and `Î` starting-letter ASCII ID tokens if those buckets enter scope.
- Ask the human before selecting borderline vocabulary, adding speech-target production metadata, adding clinical claims, or changing v1 scope.
- Update this feature `status.md` and global `docs/status.md`.

Review checkpoint:

- The next scope is explicit and does not silently add content.
- Remaining gaps are grounded in helper output and existing review documents.
- No rejected or needs-revision worksheet candidates are promoted.
- No production JSON records or image assets are introduced in Batch 11.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification should use the always-running local server on `http://localhost:3000`, especially:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
```

If a sandboxed localhost check fails, retry outside the sandbox before treating the server as unavailable. Do not start another dev server or use another port.

Decision result:

- Batch 11 selected a split vocabulary-first and image-second pipeline as the next Romanian expansion direction.
- Another small production slice is blocked until a new candidate worksheet is created and accepted by review, because all `43` accepted Batch 2 worksheet rows are already implemented.
- The next vocabulary work should plan the broader Romanian word set first, then implement approved words with an intentional generic placeholder strategy, then run separate image-focused batches to replace placeholders.
- `Ă`, `Â`, and `Î` exact starts-with bucket ASCII ID tokens remain unresolved because those buckets do not enter the selected next scope.
- See `next-scope-decision-batch-11.md`.

## Batch 12: Romanian Vocabulary Scope Spec

Status: Complete

Tasks:

- Research current Romanian child vocabulary, Romanian language usage, and speech/logopedie target guidance before selecting words.
- Review existing coverage from `/admin/words`, locale helpers, and the exhausted Batch 2 worksheet.
- Define a broader Romanian target vocabulary list by letter, with target counts that respect quality limits.
- Track target sound, sound position, syllable complexity, consonant clusters, contrast value, age fit, imageability, safety, and expected coverage impact in a reviewable spec or worksheet.
- Apply the human-approved placeholder visibility policy: approved placeholder-backed words may be visible in gameplay with a deliberately generic placeholder until final images exist.
- Resolve exact `Ă`, `Â`, and `Î` ASCII ID tokens if those buckets enter scope.
- Ask the human before accepting borderline vocabulary, adding clinical/speech-therapy claims, changing the approved placeholder visibility policy, or expanding v1 scope.
- Do not add production words or image assets in this batch.
- Update this feature `status.md` and global `docs/status.md`.

Review checkpoint:

- The vocabulary scope is broad enough to avoid word-by-word production batching.
- Every proposed word has a documented reason, quality review, and speech-target or vocabulary value.
- The spec distinguishes review metadata from production JSON fields.
- Placeholder-backed gameplay visibility follows the documented human-approved policy.
- Production JSON remains ordinary vocabulary content only.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 12 added `vocabulary-scope-spec-batch-12.md` as the broad Romanian vocabulary scope source for Batch 13.
- The scope defines `126` new accepted placeholder-ready vocabulary rows across broad Romanian letter coverage, with target sound, sound position, syllable complexity, consonant clusters, contrast value, age fit, imageability, safety, and expected coverage impact recorded in documentation only.
- No Batch 2 rejected or needs-revision candidates were included.
- If Batch 13 implements the whole scope, approved Romanian content should move from `83` to `209` words before image replacement.
- The `Ă`, `Â`, and `Î` convention is now resolved for future implementation:
  - `Ă`: exact bucket `ă`, route segment `a-breve`, word ID/image prefix `ro-a-breve-`.
  - `Â`: exact bucket `â`, route segment `a-circ`, word ID/image prefix `ro-a-circ-`.
  - `Î`: exact bucket `î`, route segment `i-circ`, word ID/image prefix `ro-i-circ-`.
- Batch 12 selected only `înghețată` for an exact `Î` starts-with bucket; `Ă` and `Â` remain convention-only because no strong child-facing exact starts-with words were accepted.
- Batch 12 added no production JSON records, image assets, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Batch 13: Placeholder-Backed Vocabulary Manifest Implementation

Status: Complete

Tasks:

- Implement the approved Batch 12 vocabulary scope from `vocabulary-scope-spec-batch-12.md` into canonical `content/ro/words-<letter>.json` files.
- Add any required letter manifest entries and loader imports.
- Use stable IDs and canonical image paths.
- Apply the Batch 12 diacritic convention for `Î`: exact bucket `î`, route segment `i-circ`, and `ro-i-circ-...` word ID/image filename prefixes.
- Add or generate one app-owned generic placeholder image asset for words without final images.
- Mark placeholder-backed approved records deliberately; they may be visible in gameplay until final images exist.
- Update validation if needed so intentional placeholder-backed words are allowed without hiding accidental missing-image states.
- Update `/admin/words` documentation/status so reviewers can see placeholder counts and prioritize image work.
- Do not add final per-word images in this batch.
- Do not add speech-target metadata to production JSON unless a separate human-approved schema change exists.

Review checkpoint:

- Every implemented word comes from the approved Batch 12 vocabulary scope.
- Placeholder-backed words are intentional, easy to audit, and do not pretend to have final art.
- No rejected, needs-revision, obscure, unsafe, or weak words are added just to fill quotas.
- Content validation and gameplay compatibility checks pass.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification should use the always-running local server on `http://localhost:3000`, especially `/ro` and `/admin/words`.

Decision result:

- Batch 13 implemented all `126` accepted rows from `vocabulary-scope-spec-batch-12.md`.
- Production Romanian content now has `209` approved words: `83` ready-image records and `126` intentional placeholder-backed approved records.
- Added enabled `E`, `H`, `Î`, `L`, `O`, `T`, and `V` letter manifest entries, canonical word files, and loader imports.
- Applied the exact `Î` convention with bucket `î`, route segment `i-circ`, and `ro-i-circ-...` word ID prefix.
- Added the generic app-owned placeholder asset at `/images/ro/placeholders/generic-word-placeholder.webp`.
- Updated validation so that generic placeholder sharing is explicit and auditable while ordinary duplicate image paths still fail.
- Kept speech-target review metadata out of production JSON.

## Batch 14: Sound Coverage Scope Spec And Practice Target UI Plan

Status: Complete

Tasks:

- Use `sound-coverage-and-practice-targets-batch-14.md` as the starting scope.
- Check current online/source material before accepting any new production word or sound-coverage target; prefer Romanian early-education guidance, Romanian child phonology research, Romanian logopedie materials, and Romanian phonetics/phonology references.
- Record source URLs or explicit internal-review notes for candidate words and sound-coverage decisions.
- Review helper-derived coverage for priority sound targets, especially `ș`, `j`, `ț`, `z`, `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi`.
- Create a candidate worksheet/spec for additional production-quality words that strengthen underfilled important sound targets.
- Target at least `30` mixed/combined words for important sounds where child-friendly, concrete, safe, imageable vocabulary allows it.
- Document quality ceilings explicitly where a target cannot reach `30` without weak or obscure words.
- Define the start-page practice target model for the eight bottom-row options: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- Keep these eight options separate from Romanian alphabet letter buckets.
- Define route, helper, admin, and QA expectations for implementing practice targets before image replacement.
- Do not add production JSON records, UI code, image assets, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims in this planning batch.

Review checkpoint:

- The sound-coverage target list is grounded in current helper output.
- The eight bottom-row practice targets have clear route tokens, labels, and matching behavior.
- Candidate words are reviewed for age fit, concreteness, safety, imageability, and target value before production JSON changes.
- Candidate words and sound targets cite online/source research where available, or clearly mark internal-review choices where no useful source was found.
- The plan does not pad targets with obscure or visually weak words.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Decision result:

- Batch 14 added `sound-coverage-scope-spec-batch-14.md` as the accepted documentation-only source for Batch 15.
- The scope defines `110` unique accepted candidate rows for underfilled priority targets, with source tags or internal-review notes for each row.
- Expected impact if Batch 15 implements every accepted row as placeholder-backed approved content:
  - approved Romanian words `209 -> 319`;
  - ready images unchanged at `83`;
  - placeholder images `126 -> 236`;
  - `ș` mixed `22 -> 36`;
  - `j` mixed `4 -> 14`;
  - `ț` mixed `14 -> 36`;
  - `z` mixed `12 -> 31`;
  - `ce` mixed `2 -> 14`;
  - `ci` mixed `5 -> 14`;
  - `ge` mixed `4 -> 10`;
  - `gi` mixed `1 -> 4`;
  - `che` mixed `3 -> 10`;
  - `chi` mixed `1 -> 9`;
  - `ghe` mixed `2 -> 8`;
  - `ghi` mixed `2 -> 8`.
- Batch 14 documented quality ceilings instead of padding weak targets: `J`, `GI`, `GHE`, `GHI`, and several sequence targets remain below `30` mixed words because stronger counts would require obscure, abstract, unsafe, adult, or visually weak words.
- Batch 14 confirmed the eight bottom-row start-page options must be separate sequence practice targets, not entries in `content/ro/letters.json`.
- Batch 14 added no production JSON records, UI code, image assets, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Batch 15: Sound Coverage Manifest Implementation And Practice Targets

Status: Complete

Tasks:

- Implement only accepted Batch 14 sound-coverage rows from `sound-coverage-scope-spec-batch-14.md` into canonical word manifests.
- Use approved placeholder-backed records if final images are not ready, following the Batch 13 placeholder policy.
- Add the eight bottom-row practice target options on `/ro`: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- Add a separate practice-target manifest/helper instead of adding these sequences to `content/ro/letters.json`.
- Update `/ro/play/[letter]` static params and target resolution so both alphabet letters and practice targets route correctly.
- Make sequence target play pages use derived pools from exact target matching.
- Update `/admin/words` or a nearby admin coverage section so practice-target coverage and placeholder counts are visible.
- Keep production word JSON free of speech-target, syllable, cluster, contrast, therapy, and clinical metadata.
- Do not add final per-word images in this batch unless the batch scope is explicitly changed after review.

Review checkpoint:

- Every implemented word comes from the accepted Batch 14 sound-coverage scope.
- The `/ro` start page still shows alphabet letters and now has a separate bottom section for the eight practice targets.
- Practice-target routes work and do not pretend `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, or `ghi` are alphabet buckets.
- `R`, `S`, and `L` remain stable, while underfilled targets improve.
- Placeholder-backed words remain visible and auditable.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Browser verification should use the always-running local server on `http://localhost:3000`, especially:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/ro/play/ce
http://localhost:3000/ro/play/ci
http://localhost:3000/ro/play/ge
http://localhost:3000/ro/play/gi
http://localhost:3000/ro/play/che
http://localhost:3000/ro/play/chi
http://localhost:3000/ro/play/ghe
http://localhost:3000/ro/play/ghi
```

If a sandboxed localhost check fails, retry outside the sandbox before treating the server as unavailable. Do not start another dev server or use another port.

Decision result:

- Batch 15 implemented all `110` accepted rows from `sound-coverage-scope-spec-batch-14.md` as approved placeholder-backed production word records.
- Production Romanian content now has `319` approved words: `83` ready-image records and `236` placeholder-backed records.
- Added `content/ro/practice-targets.json` and helper APIs for enabled sequence practice targets.
- Kept `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` out of `content/ro/letters.json`.
- Added a separate bottom section on `/ro` for the eight sequence targets.
- Updated `/ro/play/[letter]` static params and target resolution so both enabled letter buckets and practice targets work.
- Updated `/admin/words` so practice-target coverage and placeholder counts are visible and auditable.
- Kept speech-target metadata out of production JSON and added no final per-word images.

## Batch 16: Placeholder Image Replacement

Status: Complete for the first CE/CI image-replacement slice

Tasks:

- Use `/admin/words` and production JSON to find Romanian words with placeholder images after the sound-coverage and practice-target work is complete.
- Generate, review, and optimize final pixel-art images using the established image pipeline.
- Replace placeholder paths/statuses with canonical ready WebP assets in image-focused batches.
- Keep image batches large enough to reduce handoff overhead but small enough for visual QA.
- Do not change vocabulary selection except to fix documented defects.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Placeholder counts decrease after each image batch.
- Child-facing gameplay still works for starts-with, contains-only, mixed, and the eight practice-target routes.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 16 implemented the first image-focused replacement slice for `12` placeholder-backed `C` words that strengthen `CE` and `CI` practice targets: `ceas`, `cerb`, `cerc`, `cercel`, `ceai`, `ceașcă`, `cereale`, `cearșaf`, `ciocolată`, `ciocan`, `ciupercă`, and `ciorbă`.
- Added `image-briefs-batch-16.md` with target words, image briefs, review decisions, and final asset paths.
- Generated reviewed child-safe pixel-art images, rejected the first `ciupercă` source because it included a face on an object, regenerated a clean mushroom icon, palette-reduced the accepted source PNGs, and optimized final canonical WebP assets under `public/images/ro/c/`.
- Updated the 12 canonical production records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `83` to `95`, and placeholders move from `236` to `224`.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

## Batch 17: Placeholder Image Replacement Slice 2

Status: Complete

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 16.
- Prioritize remaining high-value practice-target placeholders, especially `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`, while keeping the batch small enough for visual QA.
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add new vocabulary or speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Placeholder counts decrease and ready-image counts increase after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 17 implemented a 12-word `G`-sequence image-replacement slice for `geacă`, `geantă`, `genunchi`, `ghete`, `ghetuță`, `ghem`, `ghepard`, `ghiozdan`, `ghiveci`, `ghindă`, `ghiocel`, and `ghidon`.
- Added `image-briefs-batch-17.md` with target words, image briefs, review decisions, final asset paths, and target-readiness impact.
- Generated and visually reviewed one child-safe pixel-art sprite sheet, cropped and palette-reduced the accepted source cells, and optimized final canonical WebP assets under `public/images/ro/g/`.
- Updated the 12 canonical `words-g.json` records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `95` to `107`, and placeholders move from `224` to `212`.
- Target ready-image coverage improves for `GE` (`4 -> 7`), `CHI` (`1 -> 2`), `GHE` (`1 -> 5`), and `GHI` (`0 -> 5`), with incidental `CE`/`CI` improvements from `ghiocel` and `ghiveci`.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

## Batch 18: Placeholder Image Replacement Slice 3

Status: Complete

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 17.
- Prioritize remaining high-value practice-target placeholders, especially `CHE`, remaining `CHI`, remaining `GE/GI`, and any still-placeholder `GHE/GHI` words that are visually straightforward.
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add new vocabulary or speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Placeholder counts decrease and ready-image counts increase after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 18 implemented a 15-word `CHE`/`CHI` image-replacement slice for `cheie`, `chec`, `buchet`, `caschetă`, `ochelari`, `pachet`, `ridiche`, `ureche`, `chitară`, `chiflă`, `chiftea`, `chioșc`, `cochilie`, `ochi`, and `unchi`.
- Added `image-briefs-batch-18.md` with target words, image briefs, review decisions, final asset paths, and target-readiness impact.
- Regenerated the initial contact sheet with larger gutters after cropability review, then cropped, background-normalized, palette-reduced, and optimized final canonical WebP assets under `public/images/ro/`.
- Updated the 15 canonical word records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `107` to `122`, and placeholders move from `212` to `197`.
- `CHE` and `CHI` practice target placeholder counts are now `0`.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

Browser QA:

- In-app Browser route checks passed for `/ro`, `/admin/words`, `/ro/play/che`, `/ro/play/chi`, `/ro/play/b`, `/ro/play/c`, `/ro/play/o`, `/ro/play/p`, `/ro/play/r`, and `/ro/play/u`.
- `/admin/words` exposed the Batch 18 ready image refs.
- `/ro/play/che` and `/ro/play/chi` loaded with ready image refs from the slice.
- Affected canonical letter routes loaded successfully; some route wheels use bounded/random subsets, so route QA confirms page render and gameplay surface availability rather than guaranteed inclusion of every new image in a single load.

## Batch 19: Placeholder Image Replacement Slice 4

Status: Complete

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 18.
- Prioritize remaining high-value `GE`, `GI`, `GHE`, and `GHI` practice-target placeholders.
- Proposed 12-word target set:
  - `alge`
  - `fulger`
  - `mărgele`
  - `frigider`
  - `pagină`
  - `regină`
  - `înghețată`
  - `lighean`
  - `spaghete`
  - `ghirlandă`
  - `ghiuvetă`
  - `unghie`
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add new vocabulary or speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- `GE`, `GI`, `GHE`, and `GHI` placeholder counts decrease after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.
- Image generation uses generous gutters or individual generations so cropability problems do not recur.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 19 implemented a 12-word `GE`/`GI`/`GHE`/`GHI` image-replacement slice for `alge`, `fulger`, `mărgele`, `frigider`, `pagină`, `regină`, `înghețată`, `lighean`, `spaghete`, `ghirlandă`, `ghiuvetă`, and `unghie`.
- Added `image-briefs-batch-19.md` with target words, image briefs, review decisions, final asset paths, and target-readiness impact.
- Generated one cropable contact sheet with generous gutters, then cropped, background-normalized, palette-reduced, and optimized final canonical WebP assets under `public/images/ro/`.
- Updated the 12 canonical word records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `122` to `134`, and placeholders move from `197` to `185`.
- `GE`, `GI`, `GHE`, and `GHI` practice target placeholder counts are now `0`.
- `CHE` and `CHI` practice target placeholder counts remain `0`.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

## Batch 20: Placeholder Image Replacement Slice 5

Status: Complete

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 19.
- Prioritize remaining high-value sequence-target placeholders, especially the still-placeholder `CE` and `CI` words, while keeping `CHE`, `CHI`, `GE`, `GI`, `GHE`, and `GHI` at `0` placeholders.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Remaining high-value sequence-target placeholder counts decrease after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.
- Image generation uses generous gutters or individual generations so cropability problems do not recur.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 20 implemented an 8-word `CE`/`CI` image-replacement slice for `ceară`, `cetate`, `purcel`, `căciulă`, `cizmă`, `cioc`, `ciucure`, and `rădăcină`.
- Added `image-briefs-batch-20.md` with target words, image briefs, review decisions, final asset paths, and target-readiness impact.
- Generated one cropable contact sheet with generous gutters, then cropped, background-normalized, palette-reduced, and optimized final canonical WebP assets under `public/images/ro/`.
- Updated the 8 canonical word records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `134` to `142`, and placeholders move from `185` to `177`.
- `CE` and `CI` practice target placeholder counts are now `0`.
- `CHE`, `CHI`, `GE`, `GI`, `GHE`, and `GHI` practice target placeholder counts remain `0`.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

## Batch 21: General Placeholder Image Replacement Slice 6

Status: Complete

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 20.
- Prioritize common, concrete, visually straightforward placeholder-backed records from active child-facing buckets now that all eight sequence practice targets have `0` placeholders.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Overall placeholder counts decrease and ready-image counts increase after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.
- Image generation uses generous gutters or individual generations so cropability problems do not recur.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Decision result:

- Batch 21 implemented a 12-word general `B` image-replacement slice for `balon`, `banană`, `barcă`, `bec`, `biscuit`, `broască`, `brânză`, `băț`, `buburuză`, `bagaj`, `barză`, and `buzunar`.
- Added `image-briefs-batch-21.md` with target words, image briefs, review decisions, final asset paths, and image-readiness impact.
- Generated and visually reviewed one child-safe pixel-art contact sheet with generous gutters, then cropped, background-normalized, palette-reduced, and optimized final canonical WebP assets under `public/images/ro/b/`.
- Updated the 12 canonical `words-b.json` records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `319` approved words; ready images move from `142` to `154`, and placeholders move from `177` to `165`.
- `B` mixed-pool image readiness improves from `11` ready / `26` placeholder to `23` ready / `14` placeholder.
- `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` practice targets remain at `0` placeholders.
- Kept vocabulary scope unchanged and kept speech-target metadata out of production JSON.

## Batch 22: General Placeholder Image Replacement Slice 7

Status: Proposed

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 21.
- Prioritize common, concrete, visually straightforward placeholder-backed records from active child-facing buckets with high gameplay value.
- Preserve all eight sequence practice targets at `0` placeholders.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Generate, visually review, palette-reduce if needed, and optimize final pixel-art WebP assets using the established image pipeline.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and image-brief documentation.

Review checkpoint:

- Final images are recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the hard maximum size.
- Overall placeholder counts decrease and ready-image counts increase after the slice.
- `/admin/words` and affected `/ro/play/<target-or-letter>` routes show the new ready thumbnails/images.
- Image generation uses generous gutters or individual generations so cropability problems do not recur.

Suggested verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

## Exit Criteria

- Romanian expansion targets are documented from current coverage data.
- Candidate generation is reviewable and separate from production JSON.
- Every production word is human-approved.
- Every production word is stored once in its canonical starting-letter file.
- Contains-pool impact is recorded for new words.
- Speech-target impact is recorded for new words.
- Every ready image has a reviewed image brief and canonical asset path.
- Validation and gameplay compatibility checks pass or documented blockers are explicit.
- `/admin/words` accurately reflects expanded coverage and image readiness.
