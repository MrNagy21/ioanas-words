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
http://localhost:3000/ro/play/ș
http://localhost:3000/ro/play/ț
http://localhost:3000/ro/play/f
http://localhost:3000/ro/play/d
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
