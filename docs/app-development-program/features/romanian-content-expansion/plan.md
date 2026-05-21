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
pnpm run check:matching
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
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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

## Batch 22: Diacritic And Sequence Coverage Top-Up Planning

Status: Complete

Tasks:

- Use `/admin/words`, helper-derived coverage, production JSON, and user testing feedback to audit underfilled exact diacritic buckets and bottom-row sequence targets.
- Record the current diacritic-bucket state:
  - `Ă` and `Â` have resolved route/ID conventions from Batch 12 but are not currently enabled because no strong child-facing exact starts-with words were accepted.
  - `Î` is enabled but currently has only `1` approved starts-with word.
- Record the current sequence mixed-pool counts:
  - `CE`: `14`;
  - `CI`: `14`;
  - `GE`: `10`;
  - `GI`: `4`;
  - `CHE`: `10`;
  - `CHI`: `9`;
  - `GHE`: `8`;
  - `GHI`: `8`.
- Define a candidate worksheet to bring every bottom-row sequence target to at least `15` total mixed words, with `20` as a stretch target only where common, concrete, imageable Romanian child vocabulary allows it.
- Prioritize `GI`, `GHE`, `GHI`, `CHI`, `GE`, and `CHE`; top off `CE` and `CI` without adding weak words.
- Revisit exact `Ă`, `Â`, and `Î` content scope. Do not force `Ă` or `Â` if strong child-facing starts-with options are too weak; document quality ceilings explicitly.
- Use current source research when vocabulary familiarity, Romanian usage, child safety, or speech/logopedie value depends on external facts.
- Ask the human before accepting borderline vocabulary, enabling `Ă` or `Â`, changing route/schema conventions, adding clinical claims, or introducing placeholder tradeoffs beyond existing policy.
- Keep this batch planning/worksheet-only unless a later explicit implementation batch is approved.
- Update this feature `status.md` and global `docs/status.md`.

Review checkpoint:

- Current gaps are recorded with starts-with, contains-only, mixed, ready-image, and placeholder counts where relevant.
- The worksheet separates accepted, needs-revision, and rejected candidates.
- No obscure, abstract, adult, unsafe, visually weak, or too-specialized words are proposed just to satisfy numeric targets.
- Exact diacritic bucket handling remains deliberate and documented.
- No production JSON records, image assets, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are added.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Decision result:

- Created `diacritic-and-sequence-top-up-worksheet-batch-22.md` as the planning source for the next implementation batch.
- Kept the batch worksheet-only: no production JSON records, image assets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.
- Recorded the current bottom-row sequence coverage as starts-with, contains-only, and mixed counts, then planned a quality-gated top-up toward at least `15` mixed words per `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` target, with `20` left as a stretch target only where vocabulary quality allows.
- Prioritized the weakest and highest-impact targets first: `GI`, `GHE`, `GHI`, `CHI`, `GE`, and `CHE`; `CE` and `CI` only need small top-ups.
- Revisited exact `Ă`, `Â`, and `Î` starts-with scope:
  - `Ă` remains convention-only because proposed exact starts-with options are demonstratives or weak child-facing production vocabulary.
  - `Â` remains convention-only because standard Romanian orthography makes exact starts-with options unsuitable for this child-facing v1 scope.
  - `Î` should receive a small quality-gated exact starts-with top-up, but not a forced `15`-word quota.
- Projected sequence coverage if all accepted worksheet rows pass the next implementation batch:
  - `CE`: `13` starts-with, `3` contains-only, `16` mixed;
  - `CI`: `9` starts-with, `8` contains-only, `17` mixed;
  - `GE`: `9` starts-with, `6` contains-only, `15` mixed;
  - `GI`: `6` starts-with, `9` contains-only, `15` mixed;
  - `CHE`: `2` starts-with, `13` contains-only, `15` mixed;
  - `CHI`: `8` starts-with, `7` contains-only, `15` mixed;
  - `GHE`: `11` starts-with, `4` contains-only, `15` mixed;
  - `GHI`: `9` starts-with, `6` contains-only, `15` mixed.

## Batch 23: Diacritic And Sequence Top-Up Manifest Implementation

Status: Complete

Tasks:

- Start from `diacritic-and-sequence-top-up-worksheet-batch-22.md`, not from ad hoc word generation.
- Re-check accepted worksheet rows against current production JSON before adding anything, including duplicate `word`, `display`, `normalized`, ID, route, and image-path checks.
- Implement only production-ready, reviewed rows from the worksheet; keep rejected and held rows out of production manifests.
- Preserve the existing decision that `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` are sequence practice targets, not alphabet letters.
- Keep `Ă` and `Â` disabled unless the human explicitly changes the quality ceiling decision; add only the accepted exact-`Î` scope.
- Use the existing placeholder policy for any approved words whose final canonical images are not produced in the same batch, and document image status explicitly.
- Keep speech/logopedie observations documentation-only; do not add speech-target, syllable, therapy, clinical-review, or claim fields to production JSON.
- Update helper-derived coverage notes, this feature `status.md`, and global `docs/status.md`.

Review checkpoint:

- Every added word is common enough, concrete enough, imageable, child-safe, and suitable for children around ages 4 to 6.
- Sequence targets reach at least `15` mixed words where quality allows, without padding with obscure or weak vocabulary.
- Exact `Î` improves from the current single starts-with word without forcing a quota.
- `Ă` and `Â` remain documented quality ceilings unless an explicit human decision changes scope.
- `/admin/words` and the `/ro` start page show separate starts-with and contains-only counts for the affected targets.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 23 implemented all `51` accepted rows from `diacritic-and-sequence-top-up-worksheet-batch-22.md` as approved placeholder-backed production records.
- Production Romanian content now has `370` approved words: `154` ready-image records and `216` intentional placeholder-backed records.
- The eight bottom-row sequence targets remain separate practice targets, not alphabet letters.
- Helper-derived sequence mixed-pool counts now meet or exceed the `15`-word floor where the worksheet quality review allowed it:
  - `CE`: `13` starts-with, `3` contains-only, `16` mixed;
  - `CI`: `9` starts-with, `10` contains-only, `19` mixed;
  - `GE`: `9` starts-with, `6` contains-only, `15` mixed;
  - `GI`: `6` starts-with, `9` contains-only, `15` mixed;
  - `CHE`: `2` starts-with, `13` contains-only, `15` mixed;
  - `CHI`: `8` starts-with, `7` contains-only, `15` mixed;
  - `GHE`: `11` starts-with, `4` contains-only, `15` mixed;
  - `GHI`: `9` starts-with, `6` contains-only, `15` mixed.
- Exact `Î` starts-with depth improved from `1` to `8` approved words; exact `Ă` and `Â` remain disabled/convention-only.
- Updated gameplay compatibility expectations for the expanded sequence practice target pools.
- Kept speech/logopedie metadata documentation-only and added no route/schema changes, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Batch 24: General Placeholder Image Replacement Slice 7

Status: Complete

Continue the general placeholder image replacement work after the diacritic and sequence coverage top-up implementation scope is completed, unless the human explicitly prioritizes image completion first.

Decision result:

- Batch 24 implemented a 12-word image-only replacement slice for newly added high-value sequence and exact-`Î` placeholders: `centură`, `covrigi`, `chiuvetă`, `geamantan`, `gelatină`, `frânghie`, `triunghi`, `dreptunghi`, `înot`, `încălțăminte`, `îmbrăcăminte`, and `încuietoare`.
- Added `image-briefs-batch-24.md` with target words, image briefs, review decisions, final paths, and image-readiness impact.
- Updated the 12 canonical production records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `370` approved words; ready images move from `154` to `166`, and placeholders move from `216` to `204`.
- Kept `Ă` and `Â` disabled/convention-only and added no new vocabulary, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Batch 25: General Placeholder Image Replacement Slice 8

Status: Complete

Continue the general placeholder image replacement work after Batch 24.

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 24.
- Prioritize remaining high-value sequence placeholders where image clarity is strongest, especially `licurici`, `piscină`, `cerneală`, `fulgi`, `fragi`, `ghemotoc`, `ghețar`, `baghetă`, `parchet`, `echer`, `ochean`, and `chipiu` if visual review succeeds.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Decision result:

- Batch 25 implemented a 12-word image-only replacement slice for remaining high-value sequence placeholders: `licurici`, `piscină`, `cerneală`, `fulgi`, `fragi`, `ghemotoc`, `ghețar`, `baghetă`, `parchet`, `echer`, `ochean`, and `chipiu`.
- Added `image-briefs-batch-25.md` with target words, image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Updated the 12 canonical production records from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Production Romanian content remains `370` approved words; ready images move from `166` to `178`, and placeholders move from `204` to `192`.
- Kept `Ă` and `Â` disabled/convention-only and added no new vocabulary, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

## Batch 26: General Placeholder Image Replacement Slice 9

Status: Complete

Continue general placeholder image replacement after Batch 25.

Tasks:

- Continue from `/admin/words` and production JSON placeholder counts after Batch 25.
- Prioritize remaining sequence placeholders only where image clarity is strong, especially `înger`, `gibon`, `giroscop`, `argint`, `chimen`, `mochetă`, `machetă`, `gheară`, `ghețuș`, `unghi`, and `ghișeu` if visual review succeeds.
- Defer or reject concepts that remain too abstract, broad, low-familiarity, or visually ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 26 implemented an 11-word image-only replacement slice for `înger`, `gibon`, `giroscop`, `mochetă`, `machetă`, `gheară`, `ghețuș`, `argint`, `chimen`, `unghi`, and `ghișeu`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 26 added `image-briefs-batch-26.md`, generated reviewed pixel-art assets, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 27: General Placeholder Image Replacement Slice 10

Status: Complete

Continue general placeholder image replacement after Batch 26.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-26.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `capră`, `căpșună`, `clopoțel`, `colac`, `cort`, `cocoș`, `căruță`, `căsuță`, `cozonac`, `delfin`, `dovleac`, `dulap`, `elefant`, `elicopter`, `floare`, `fluture`, `fular`, `furculiță`, `umbrelă`, `ursuleț`, `vacă`, `vapor`, `vulpe`, `șopârlă`, `șarpe`, and `țânțar`.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 27 implemented a 16-word image-only replacement slice for `capră`, `căpșună`, `clopoțel`, `colac`, `cort`, `cocoș`, `căruță`, `căsuță`, `cozonac`, `delfin`, `dovleac`, `dulap`, `elefant`, `elicopter`, `floare`, and `fluture`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 27 added `image-briefs-batch-27.md`, generated reviewed pixel-art assets, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 28: General Placeholder Image Replacement Slice 11

Status: Complete

Continue general placeholder image replacement after Batch 27.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-27.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `fular`, `furculiță`, `umbrelă`, `ursuleț`, `vacă`, `vapor`, `vulpe`, `șopârlă`, `șarpe`, and `țânțar`.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 28 implemented a 10-word image-only replacement slice for `fular`, `furculiță`, `umbrelă`, `ursuleț`, `vacă`, `vapor`, `vulpe`, `șopârlă`, `șarpe`, and `țânțar`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 28 added `image-briefs-batch-28.md`, generated reviewed pixel-art assets, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 29: General Placeholder Image Replacement Slice 12

Status: Complete

Continue general placeholder image replacement after Batch 28.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-28.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `fustă`, `fotoliu`, `fasole`, `frigider`, `vagon`, `varză`, `vază`, `veveriță`, `vioară`, `vițel`, `șal`, `șampon`, `șervețel`, `șort`, `șiret`, `șurub`, `țap`, and `țeavă`.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 29 implemented a 17-word image-only replacement slice for `fustă`, `fotoliu`, `fasole`, `vagon`, `varză`, `vază`, `veveriță`, `vioară`, `vițel`, `șal`, `șampon`, `șervețel`, `șorț`, `șiret`, `șurub`, `țap`, and `țeavă`.
- `frigider` was already ready before the slice and was left unchanged; the requested `șort` spelling did not exist as a production record, so the existing `șorț` record was implemented.
- All selected words already existed as approved placeholder-backed production records.
- Batch 29 added `image-briefs-batch-29.md`, generated reviewed pixel-art assets, simplified source PNGs to a small hard-edged palette, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 30: General Placeholder Image Replacement Slice 13

Status: Complete

Continue general placeholder image replacement after Batch 29.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-29.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `album`, `ascuțitoare`, `ață`, `buștean`, `cadă`, `dinozaur`, `duș`, `excavator`, `găină`, `gâscă`, `găleată`, `gard`, `glob`, `gogoașă`, `hamac`, `hartă`, `iaurt`, `iglu`, `inel`, and `inimă` if visual review succeeds.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 30 implemented a 20-word image-only replacement slice for `album`, `ascuțitoare`, `ață`, `buștean`, `cadă`, `dinozaur`, `duș`, `excavator`, `găină`, `gâscă`, `găleată`, `gard`, `glob`, `gogoașă`, `hamac`, `hartă`, `iaurt`, `iglu`, `inel`, and `inimă`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 30 added `image-briefs-batch-30.md`, generated reviewed pixel-art assets, simplified source crops to a hard-edged 4-bit-per-channel RGB palette, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- `glob` and `hartă` remain above the `12 KB` warning threshold but below the hard maximum; further simplification was deferred because it reduced thumbnail clarity.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 31: General Placeholder Image Replacement Slice 14

Status: Complete

Continue general placeholder image replacement after Batch 30.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-30.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `haină`, `iarbă`, `joc`, `jeleu`, `jaluzea`, `lac`, `lalea`, `lămâie`, `lapte`, `lanternă`, `leu`, `lingură`, `lup`, `lanț`, `linguriță`, `maimuță`, `măgar`, `mătură`, `miere`, and `motan` if visual review succeeds.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 31 implemented a 20-word image-only replacement slice for `haină`, `iarbă`, `joc`, `jeleu`, `jaluzea`, `lac`, `lalea`, `lămâie`, `lapte`, `lanternă`, `leu`, `lingură`, `lup`, `lanț`, `linguriță`, `maimuță`, `măgar`, `mătură`, `miere`, and `motan`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 31 added `image-briefs-batch-31.md`, generated reviewed pixel-art assets, cropped reviewed source cells to canonical source PNGs, encoded final `256 x 256 px` WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- All Batch 31 final assets are below the `12 KB` warning threshold.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 32: General Placeholder Image Replacement Slice 15

Status: Complete

Continue general placeholder image replacement after Batch 31.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-31.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `nor`, `nucă`, `nasture`, `nufăr`, `oaie`, `oală`, `oglindă`, `omidă`, `ou`, `orez`, `pară`, `pălărie`, `pătură`, `pepene`, `pensulă`, `penar`, `pieptene`, `portocală`, `prună`, and `puzzle` if visual review succeeds.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 32 implemented a 20-word image-only replacement slice for `nor`, `nucă`, `nasture`, `nufăr`, `oaie`, `oală`, `oglindă`, `omidă`, `ou`, `orez`, `pară`, `pălărie`, `pătură`, `pepene`, `pensulă`, `penar`, `pieptene`, `portocală`, `prună`, and `puzzle`.
- All selected words already existed as approved placeholder-backed production records.
- Batch 32 added `image-briefs-batch-32.md`, generated reviewed pixel-art assets, cropped reviewed source cells to canonical source PNGs, simplified source crops to a 48-color hard-edged palette, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- All Batch 32 final assets are below the `12 KB` warning threshold.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 33: General Placeholder Image Replacement Slice 16

Status: Complete

Continue general placeholder image replacement after Batch 32.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-32.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `raft`, `ramură`, `râu`, `roșie`, `robinet`, `rotiță`, `sandviș`, `scară`, `scoică`, `sfoară`, `spumă`, `struguri`, `stilou`, `stejar`, `săniuță`, `tavă`, `telefon`, `tigru`, `tobă`, `tobogan`, `tort`, `tricou`, and `televizor` if visual review succeeds.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, frightening, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 33 implemented a 23-word image-only replacement slice for `raft`, `ramură`, `râu`, `roșie`, `robinet`, `rotiță`, `sandviș`, `scară`, `scoică`, `sfoară`, `spumă`, `struguri`, `stilou`, `stejar`, `săniuță`, `tavă`, `telefon`, `tigru`, `tobă`, `tobogan`, `tort`, `tricou`, and `televizor`.
- Batch 33 added `image-briefs-batch-33.md`, generated reviewed hard-edged pixel-art assets from deterministic local `64 x 64 px` source icons, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- Production Romanian content remains `370` approved words; ready images move from `292` to `315`, and placeholders move from `78` to `55`.
- Letter image readiness now includes `R` at `14` ready / `0` placeholder, `S` at `17` ready / `1` placeholder, and `T` at `9` ready / `1` placeholder.
- `tata` was deferred as person-sensitive, and `stinghie` was deferred as lower-familiarity and visually less clear for this child-facing thumbnail slice.
- No new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 34: General Placeholder Image Replacement Slice 17

Status: Complete

Continue general placeholder image replacement after Batch 33.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-33.md`.
- Prioritize another focused slice of common, concrete placeholder-backed words where wheel-thumbnail clarity is strongest.
- Start visual review from high-clarity remaining candidates such as `acoperiș`, `aripă`, `cap`, `coajă`, `desen`, `eșarfă`, `garaj`, `iaz`, `mazăre`, `miez`, `plajă`, `ploaie`, `pluș`, `prăjitură`, `păianjen`, `pătuț`, `pisicuță`, `ulei`, `zid`, `zmeură`, `zambilă`, and `țurțure` if visual review succeeds.
- Defer or reject concepts that remain too broad, abstract, low-familiarity, unsafe, visually cluttered, person-sensitive, frightening, brand-like, magical/fantasy-dependent, or ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Write image briefs before image promotion.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Decision result:

- Batch 34 implemented a 20-word image-only replacement slice for `acoperiș`, `aripă`, `cap`, `coajă`, `desen`, `eșarfă`, `garaj`, `iaz`, `mazăre`, `plajă`, `ploaie`, `prăjitură`, `păianjen`, `pătuț`, `pisicuță`, `ulei`, `zid`, `zmeură`, `zambilă`, and `țurțure`.
- Batch 34 added `image-briefs-batch-34.md`, generated reviewed hard-edged pixel-art assets from deterministic local `128 x 128 px` source icons, checked them against a comparison sheet of existing production assets, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- Production Romanian content remains `370` approved words; ready images move from `315` to `335`, and placeholders move from `55` to `35`.
- Letter image readiness now includes `A` at `17` ready / `0` placeholder, `D` at `9` ready / `0` placeholder, `P` at `32` ready / `2` placeholder, and `Ț` at `5` ready / `0` placeholder.
- `miez` was deferred as broad and context-dependent at thumbnail size, and `pluș` was deferred because the material/object distinction remains ambiguous without leaning on an already-covered plush-toy concept.
- No new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 35: General Placeholder Image Replacement Slice 18

Status: Complete

Continue general placeholder image replacement after Batch 34.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-34.md`.
- Prioritize the clearest remaining non-person, non-magical placeholders such as `colaj`, `chiciură`, `echipament`, `frizerie`, `ger`, `gheretă`, `gheruță`, `insulă`, `mușețel`, `mărțișor`, `poză`, and `școală` if visual review succeeds.
- Reconsider `miez` or `pluș` only if the image brief can disambiguate the concept without confusing the 4-to-6-year-old wheel thumbnail.
- Defer concepts that remain too abstract, broad, low-familiarity, unsafe, cluttered, person-sensitive, frightening, brand-like, magical/fantasy-dependent, or visually ambiguous.
- Use only existing approved placeholder-backed production records; do not add vocabulary.
- Replace only placeholder image paths/statuses with canonical ready assets; do not add speech-target production metadata.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- Every selected word remains approved in the current production JSON before image replacement.
- Every ready image is recognizable, child-safe, text-free, logo-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- Person/family, fantasy/magical, and abstract records stay deferred unless the human explicitly approves those production tradeoffs.
- No new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims are introduced.

Decision result:

- Batch 35 implemented a 12-word image-only replacement slice for `colaj`, `chiciură`, `echipament`, `frizerie`, `ger`, `gheretă`, `gheruță`, `insulă`, `mușețel`, `mărțișor`, `poză`, and `școală`.
- Batch 35 added `image-briefs-batch-35.md`, generated reviewed hard-edged pixel-art assets from deterministic local `128 x 128 px` source icons, checked them against a comparison sheet of existing production assets, encoded final `256 x 256 px` lossless WebP files below the `20 KB` hard maximum, and promoted only the affected image fields to ready app-owned image paths.
- Production Romanian content remains `370` approved words; ready images move from `335` to `347`, and placeholders move from `35` to `23`.
- Letter image readiness now includes `C` at `62` ready / `0` placeholder, `I` at `8` ready / `0` placeholder, and `Ș` at `12` ready / `0` placeholder.
- `miez` was deferred again as broad and context-dependent, and `pluș` was deferred again because the material/object distinction remains ambiguous without leaning on an already-covered plush-toy concept.
- Remaining placeholders are now mostly person/family, fantasy/magical, abstract, low-familiarity, or visually ambiguous records; they need an explicit production tradeoff decision before further image replacement.
- No new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

## Batch 36: Remaining Placeholder Decision Audit

Status: Complete

Pause broad image replacement and audit the remaining `23` placeholder-backed approved records after Batch 35.

Tasks:

- Continue from `/admin/words`, production JSON placeholder counts, and `image-briefs-batch-35.md`.
- List every remaining placeholder-backed approved word and group each by likely decision path:
  - replaceable with a clear non-person/non-magical icon;
  - needs human approval because it is person/family-sensitive;
  - needs human approval because it is magical/fantasy-dependent;
  - likely should stay deferred because it is abstract, broad, low-familiarity, cluttered, unsafe, frightening, brand-like, or visually ambiguous.
- Run a ready-image quality audit against the on-brand reference set in `docs/image-pipeline.md`.
- Include the flagged corrective-regeneration candidates `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa` in that audit.
- Clarify the spoken `Capea` review note with the human before creating, replacing, or regenerating any asset for it, because no current production word ID matches it.
- Re-evaluate borderline non-person items such as `miez`, `pluș`, `ghicitoare`, and `stinghie` only as a decision audit; do not promote images unless the brief can stay clear for a 4-to-6-year-old wheel thumbnail.
- Ask the human before changing production scope, removing approved records, hiding records from gameplay, adding person-sensitive image conventions, or accepting magical/fantasy image tradeoffs.
- Do not add new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Update this feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Review checkpoint:

- The remaining placeholder set is fully auditable from current production JSON.
- The ready-image regeneration watchlist is recorded with enough context to produce corrected assets later.
- No difficult remaining concept is silently accepted into production imagery without a recorded tradeoff.
- The next implementation prompt is either a tightly approved image slice or a cleanup/scope decision prompt.

Decision result:

- Batch 36 added `remaining-placeholder-decision-audit-batch-36.md`.
- Audited all `23` remaining approved placeholder-backed records from current production JSON.
- Grouped the remaining placeholders by likely path:
  - clear non-person/non-magical replacement candidate: `zmeu`, only if the intended child-facing sense is a toy kite;
  - person/family-sensitive decision: `bebeluș`, `bunic`, `bunică`, `băiețel`, `echipă`, `fetiță`, `frizură`, `gemeni`, `gimnast`, `tata`, and `îmbrățișare`;
  - magical/fantasy-dependent decision: `gigant`, `magie`, `magician`, `unicorn`, `zână`, and `împărat`;
  - likely deferral: `gimnastică`, `ghicitoare`, `miez`, `pluș`, and `stinghie`.
- Confirmed the existing ready-image watchlist should remain active for corrective regeneration: `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Kept the spoken `Capea` note unresolved because no current production record matches it.
- Made no production content, image asset, route, schema, speech-target metadata, admin, auth, database, billing, account, AI pronunciation, or clinical-claim changes.

## Batch 37: Human Decision Gate And Corrective Planning

Status: Complete

Use `remaining-placeholder-decision-audit-batch-36.md` as the source for the next step.

Tasks:

- Ask the human to decide whether person/family records should receive generic person icons, stay placeholder-backed, or move into a separate visibility/vocabulary cleanup decision.
- Ask the human to decide whether magical/fantasy records are acceptable in the production image pack.
- Ask the human to confirm whether `zmeu` should be treated as the toy kite sense for child-facing imagery.
- Ask the human whether the likely-deferral records should remain approved placeholder-backed, be hidden from gameplay, or be revisited in a vocabulary cleanup batch.
- Clarify the spoken `Capea` note before creating or regenerating any asset for it.
- If the human approves a tightly scoped image or regeneration slice, write image briefs before asset promotion and follow `docs/image-pipeline.md`.
- Do not generate or promote person/family, fantasy/magical, or corrective regeneration assets without explicit approval for that slice.
- Do not add new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

Review checkpoint:

- Every sensitive tradeoff has an explicit human decision before implementation.
- Any approved next image slice is tightly scoped and documented before image generation.
- Remaining deferred records are not silently narrowed to convenient visuals.
- Production JSON and asset changes happen only after the decision gate.

Decision result:

- Recorded human approval for normal reviewed person/family images.
- Recorded human approval for child-safe magical/fantasy imagery.
- Recorded human approval to treat `zmeu` as the toy kite sense for child-facing imagery.
- Recorded human approval to image `gimnastică` and image `pluș` as a teddy bear.
- Removed `ghicitoare`, `miez`, and `stinghie` from gameplay by changing their status from `approved` to `rejected`.
- Kept the spoken `Capea` / `Kapia` note unresolved because no current production record matches it.
- Recorded human approval for corrective regeneration of `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Added `human-decision-gate-and-corrective-planning-batch-37.md` and `image-briefs-batch-37.md`.
- Production Romanian content now has `367` approved words, `347` ready images, and `20` approved placeholder images.

## Batch 38: Approved Batch 37 Image Generation And Corrective Regeneration

Status: Complete

Use `image-briefs-batch-37.md` as the source of approved image work.

Tasks:

- Generate and review the `20` approved placeholder replacements from Batch 37:
  - person/family records: `bebeluș`, `bunic`, `bunică`, `băiețel`, `echipă`, `fetiță`, `frizură`, `gemeni`, `gimnast`, `tata`, and `îmbrățișare`;
  - child-safe fantasy records: `gigant`, `magie`, `magician`, `unicorn`, `zână`, and `împărat`;
  - additional approved records: `zmeu` as a toy kite, `gimnastică`, and `pluș` as a teddy bear.
- Regenerate and review the `5` approved corrective assets: `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Create a comparison sheet against the on-brand reference set in `docs/image-pipeline.md` before accepting replacements.
- Promote only reviewed, recognizable, child-safe, text-free, brand-free, style-consistent final WebP assets.
- If the full `25`-image scope is too large for one visual QA pass, split it into two smaller batches without changing scope.
- Do not reintroduce `ghicitoare`, `miez`, or `stinghie` without a separate human-approved vocabulary decision.
- Do not add new vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

Review checkpoint:

- Every generated image has a Batch 37 image brief.
- Every accepted image passes comparison review against the documented on-brand reference set.
- `zmeu` is shown as a toy kite only.
- `pluș` is shown as a teddy bear.
- Corrective replacements are clearly better than the current ready images at wheel thumbnail size.

Result:

- Added `image-briefs-batch-38.md` with the generation, comparison review, accepted asset table, and content impact.
- Generated and reviewed all `25` approved image targets from Batch 37.
- Created a comparison sheet against the on-brand reference set before promotion.
- Promoted all `20` approved placeholder replacements to ready app-owned WebP assets.
- Replaced the `5` approved corrective ready assets with clearer regenerated WebP files.
- Confirmed final Batch 38 assets are `256 x 256 px` WebP files between `1394 B` and `4296 B`, below the `20 KB` hard maximum.
- Production Romanian content remains `367` approved words; ready images move from `347` to `367`, and approved placeholders move from `20` to `0`.
- Kept `ghicitoare`, `miez`, and `stinghie` rejected.
- Kept the spoken `Capea` / `Kapia` note unresolved with no vocabulary or asset change.

## Batch 40: Corrective Image Audit And Regeneration Planning

Status: A-C corrective image regeneration complete

Use `corrective-image-audit-batch-40.md` as the audit artifact and `docs/image-pipeline.md` as the visual QA source of truth.

Tasks:

- Collect the human's list of poor, unclear, or off-style ready images.
- Resolve each flagged word to a production word ID and canonical image path.
- Inspect the current image at full `256 x 256 px` size and wheel thumbnail size.
- Compare current images against the production reference set for quality, style, 3D-ness, pixel construction, shadows, shape, subject size, background color, color palette, and thumbnail readability.
- Look up online images of the object when the visual form or intended word sense is uncertain; use them only as object-shape references, not as copied artwork, and record source URLs.
- Decide per word whether to keep, regenerate, remove from gameplay, or ask the human for a meaning/scope decision.
- Write regeneration prompt deltas only after the audit identifies the concrete failure.
- Do not generate or promote replacement images until the flagged list and regeneration scope are reviewed.

Review checkpoint:

- Every flagged image has a recorded current-image diagnosis, reference comparison, and decision.
- Online object references are recorded when they affect the prompt direction.
- Ambiguous Romanian word senses are escalated to the human before generation.
- No vocabulary, route/schema, speech-target metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical-claim changes happen in this corrective image step.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
git diff --check
```

Result:

- Audited the first human-flagged list for letters `A` through `C`.
- Tried a deterministic local-drawing replacement pass for `acoperiș`, `alge`, `ascuțitoare`, `ață`, `brânză`, `barză`, `buzunar`, `ceapă`, `ciorap`, `cireșe`, `cap`, `colaj`, `caschetă`, and `chiciură`; the human rejected it as too ugly, coarse, flat, and off-brand.
- Restored those `14` generated A-C replacements to the previous committed ready assets and reverted temporary alt text changes.
- Kept the requested reuse of the previous casual-cap `caschetă` asset for `șapcă`, because it better matches `șapcă`.
- Recorded current-image issues, reference comparisons, online object references, and the rejected-generation lesson in `corrective-image-audit-batch-40.md`.
- Generated one unlabeled AI contact sheet for the `14` A-C flagged assets, stopped for human review, and received human approval for the direction.
- Cropped accepted cells in fixed order and used the current corrective post-processing default: refined `128 px` pixel-art grid, `96`-color palette limit, nearest-neighbor upscale to `256 x 256 px`, and lossless WebP optimization.
- Replaced `ro-a-acoperis`, `ro-a-alge`, `ro-a-ascutitoare`, `ro-a-ata`, `ro-b-branza`, `ro-b-barza`, `ro-b-buzunar`, `ro-c-ceapa`, `ro-c-ciorap`, `ro-c-cirese`, `ro-c-cap`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura`.
- Confirmed the `14` promoted A-C assets are `256 x 256 px` and between `7692 B` and `11120 B`, below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Updated only necessary alt text: `ro-a-alge` and `ro-b-buzunar`.
- Updated `docs/image-pipeline.md` so future corrective prompts and post-processing can explicitly distinguish refined `128 px` pixel-art texture from both over-smooth AI output and coarse `64 px` sprite output.

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
