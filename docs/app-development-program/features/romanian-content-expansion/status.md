# Romanian Content Expansion Status

Last updated: 2026-05-17

## Current Phase

Phase: Batch 8 complete

Overall status: Batch 8 is complete. The first 15-word Romanian production expansion slice remains finalized for metadata, image readiness, validation, helper-derived coverage, and compatibility checks. Batch 8 implemented the 17-word second production slice planned in Batch 7 from accepted worksheet rows only. It added production image briefs in `image-briefs-batch-8.md`, generated and reviewed pixel-art source images, optimized final `256 x 256 px` lossless WebP assets to canonical local paths, added canonical approved JSON records, and enabled the completed `D`, `F`, `Ș`, and `Ț` letter buckets. Exact `Ș` and `Ț` bucket IDs, word files, route segments, and image folders remain Unicode (`ș`, `ț`), while word IDs and image filenames use ASCII prefixes `ro-sh-...` and `ro-tz-...`. Helper-derived `/admin/words` coverage now reports 72 approved Romanian words, 72 ready images, 0 placeholders, 15 enabled letters, 72 starts-with assignments, and 120 contains-only assignments. Batch 8 added no rejected or needs-revision candidates, placeholder-backed approved words, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Completed

- Created the feature folder.
- Drafted `spec.md`.
- Drafted batch plan in `plan.md`.
- Created this feature-specific `status.md`.
- Confirmed this feature follows:
  - Admin Words Inventory;
  - Locale-Wide Content Refactor;
  - Gameplay Inclusion Mode Selector.
- Defined `/admin/words` as the review surface for coverage and image readiness.
- Defined locale-wide helpers as the source of starts-with, contains-only, and mixed coverage gaps.
- Defined candidate generation requirements.
- Defined human review requirements.
- Defined canonical starting-letter storage rules.
- Defined contains-pool impact checks.
- Defined image brief requirements.
- Defined QA gates for documentation-only, candidate-review, content, and image batches.
- Confirmed Batch 1 should remain documentation-first and coverage-audit focused.
- Added `docs/app-development-program/speech-therapy-content-guidance.md`.
- Cross-checked Romanian logopedie and speech-language guidance on 2026-05-16.
- Updated the expansion workflow to track target sound, sound position, syllable complexity, consonant clusters, and contrast value before production content changes.
- Updated program-level review workflow with speech-target QA.
- Updated the app development program reading order.
- Updated the app development program package list.
- Updated global `docs/status.md`.
- Completed Batch 1: Coverage Audit And Expansion Targets.
- Created `coverage-audit-and-targets.md`.
- Recorded current alphabet coverage:
  - `A`: 10 starts-with, 12 contains-only, 22 mixed;
  - `C`: 10 starts-with, 7 contains-only, 17 mixed;
  - `M`: 10 starts-with, 0 contains-only, 10 mixed;
  - `P`: 10 starts-with, 3 contains-only, 13 mixed.
- Confirmed current content has 40 approved Romanian words, 40 ready images, and 0 placeholder images.
- Recorded high-value speech-target gaps for `R`, `S`, `Z`, `Ș`, `J`, `Ț`, `CE/CI`, `GE/GI`, `F`, `V`, `L`, `T`, `D`, `C`, and `G`.
- Defined the first pilot scope as a worksheet-first `Tier 1 Speech Seed` covering primary targets `R`, `S`, `Ș`, `Ț`, `Z`, and `J`, with `CE/CI` and `GE/GI` on a secondary watchlist.
- Completed Batch 2: Candidate Generation And Review Worksheet.
- Created `candidate-review-worksheet-batch-2.md`.
- Generated 69 candidate rows for the worksheet-first `Tier 1 Speech Seed` pilot.
- Deduplicated worksheet candidates against all 40 existing approved Romanian words.
- Excluded existing approved production words from the main candidate table.
- Normalized Romanian spelling for review while preserving diacritics in display forms.
- Assigned proposed canonical starting letters using exact Romanian first characters, including `Ș` and `Ț`.
- Recorded category, part of speech, age fit, primary target, secondary/watchlist targets, sound position, syllable count, syllable complexity, consonant clusters, contrast value, imageability, safety, expected coverage impact, review decision, and rejection/revision reasons.
- Marked 43 candidate rows as `accept`, 19 as `needs revision`, and 7 as `reject`.
- Clarified that worksheet `accept` means candidate-stage acceptance only, not production approval.
- Kept the batch documentation-only; no production content manifests or image assets were changed.
- Recorded the user decision that the pilot audit and worksheet phase is complete and future Romanian expansion work is production preparation.
- Updated agent and workflow documentation to require internet/source research when production decisions depend on current or specialized facts.
- Updated agent and workflow documentation to require human escalation for critical content, safety, schema, licensing, placeholder, and clinical-claim decisions.
- Completed Batch 3: Schema And Validation Readiness.
- Confirmed the existing `ContentWord` shape can represent the accepted worksheet candidates as production vocabulary records when candidates are mapped to the existing `partOfSpeech`, `difficulty`, `ageBand`, `category`, image, source, license, and status fields.
- Kept speech-target metadata out of production JSON for this slice.
- Updated `scripts/content/validate-content.mjs` to reject unsupported fields in letter manifests, word manifests, and word records.
- Updated `scripts/content/validate-content.mjs` to reject duplicate `normalized` values and duplicate exact Romanian `word`/`display` values across the locale.
- Kept existing canonical placement, duplicate ID, duplicate image path, ready-image existence, WebP dimension, and image byte-size validation in place.
- Updated `src/content/matching.check.ts` to assert that locale coverage summaries match derived starts-with, contains-only, mixed, and image-readiness pools.
- Kept Batch 3 free of production word additions, image additions, schema migrations, admin editing, auth, database, billing, upload, CSV, accounts, AI pronunciation, and child-facing clinical claims.
- Completed Batch 4: Production Content Batch.
- Selected 15 production-bound draft records from accepted worksheet rows only:
  - `braț`
  - `buză`
  - `geam`
  - `gheață`
  - `jucărie`
  - `jachetă`
  - `rață`
  - `roată`
  - `robot`
  - `soare`
  - `suc`
  - `săpun`
  - `ușă`
  - `zebră`
  - `zăpadă`
- Added canonical draft word files:
  - `content/ro/words-b.json`
  - `content/ro/words-g.json`
  - `content/ro/words-j.json`
  - `content/ro/words-r.json`
  - `content/ro/words-s.json`
  - `content/ro/words-u.json`
  - `content/ro/words-z.json`
- Added disabled letter manifest entries for `B`, `G`, `J`, `R`, `S`, `U`, and `Z`.
- Updated `src/content/loaders.ts` so the new canonical word manifests are included in locale-wide content loading and validation.
- Kept all 15 new records hidden from child-facing gameplay by using `status: "draft"`.
- Kept all 15 new records off ready-image paths by using `imageStatus: "placeholder"` and no committed image assets.
- Preserved exact Romanian display spelling and folded `normalized` values.
- Preserved stable ASCII IDs and canonical image paths under `/images/ro/<letter>/<word-id>.webp`.
- Kept speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata out of production JSON.
- Completed Batch 5: Production Image Briefs And Images.
- Added `image-briefs-batch-5.md` with production image briefs for the 15 Batch 4 target records.
- Generated child-safe, text-free, logo-free, brand-free pixel-art image candidates with the built-in `image_gen` workflow.
- Visually reviewed the Batch 5 contact sheet before JSON promotion.
- Accepted all 15 image candidates after review for recognizability, child safety, no text/logo/brand/watermark, style consistency, and optimization viability.
- Staged reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/<word-id>.png` paths.
- Recorded ignored trace metadata at `assets/image-sources/ro/batch-5-metadata.json`.
- Optimized final local WebP assets to:
  - `public/images/ro/b/ro-b-brat.webp`
  - `public/images/ro/b/ro-b-buza.webp`
  - `public/images/ro/g/ro-g-geam.webp`
  - `public/images/ro/g/ro-g-gheata.webp`
  - `public/images/ro/j/ro-j-jacheta.webp`
  - `public/images/ro/j/ro-j-jucarie.webp`
  - `public/images/ro/r/ro-r-rata.webp`
  - `public/images/ro/r/ro-r-roata.webp`
  - `public/images/ro/r/ro-r-robot.webp`
  - `public/images/ro/s/ro-s-sapun.webp`
  - `public/images/ro/s/ro-s-soare.webp`
  - `public/images/ro/s/ro-s-suc.webp`
  - `public/images/ro/u/ro-u-usa.webp`
  - `public/images/ro/z/ro-z-zapada.webp`
  - `public/images/ro/z/ro-z-zebra.webp`
- Promoted the 15 Batch 4 draft records to `status: "approved"`.
- Changed all 15 image records to `imageStatus: "ready"` and `license: "app-owned"` only after image review and asset optimization.
- Enabled the completed `B`, `G`, `J`, `R`, `S`, `U`, and `Z` letter manifest entries.
- Updated `src/game/gameplay-compatibility.check.ts` so the enabled-letter regression check matches the new approved production letter set.
- Completed Batch 6: Production Expansion QA And Next Scope.
- Re-ran full content validation, linting, TypeScript, gameplay compatibility, matching, and whitespace checks.
- Confirmed helper-derived `/admin/words` coverage now reports 55 approved Romanian words, 55 ready images, 0 placeholder images, 11 enabled letters, 55 starts-with assignments, and 76 contains-only assignments.
- Confirmed the first production expansion slice improved documented coverage without adding weak words, placeholders, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Confirmed all 15 Batch 5 production WebP images are well below the `12 KB` warning threshold and `20 KB` hard maximum.
- Reviewed affected gameplay coverage through the compatibility checks and locale-wide helper output; browser route checks remain pending until the user-running dev server is available on port `3000`.
- Defined the next recommended content scope as a diacritic-bucket decision plus a second small production slice selected from already accepted worksheet rows.
- Completed Batch 7: Diacritic Buckets And Second Production Slice Planning.
- Asked the human to choose the stable `Ș`/`Ț` convention because multiple viable schema and URL options remained.
- Recorded the human-approved hybrid convention:
  - exact letter IDs: `ș`, `ț`;
  - exact word files: `content/ro/words-ș.json`, `content/ro/words-ț.json`;
  - exact play routes: `/ro/play/ș`, `/ro/play/ț`;
  - ASCII word ID prefixes: `ro-sh-...`, `ro-tz-...`;
  - exact image folders with ASCII filenames: `/images/ro/ș/ro-sh-...webp`, `/images/ro/ț/ro-tz-...webp`.
- Updated `scripts/content/validate-content.mjs` so exact `ș` and `ț` word manifests can validate with ASCII word ID prefixes.
- Added `diacritic-buckets-and-second-slice-batch-7.md` as the planning source for the next slice.
- Planned a 17-word second production slice from accepted worksheet rows only:
  - `șapcă`
  - `șosetă`
  - `șoricel`
  - `țestoasă`
  - `sanie`
  - `salată`
  - `sandale`
  - `zar`
  - `gem`
  - `girafă`
  - `ceapă`
  - `cireșe`
  - `ciorap`
  - `față`
  - `frunză`
  - `bicicletă`
  - `deget`
- Recorded expected coverage impact if all 17 planned rows later pass image review and validation:
  - approved words `55 -> 72`;
  - ready images `55 -> 72`;
  - `Ș` `0/5/5 -> 3/6/9`;
  - `Ț` `0/3/3 -> 1/4/5`;
  - `S` `3/5/8 -> 6/7/13`;
  - `Z` `2/2/4 -> 3/3/6`;
  - `GE` `1/1/2 -> 2/2/4`;
  - `GI` `0/0/0 -> 1/0/1`;
  - `CE` `0/0/0 -> 1/1/2`;
  - `CI` `0/1/1 -> 2/2/4`;
  - `F` `0/1/1 -> 2/2/4`;
  - `D` `0/3/3 -> 1/4/5`.
- Updated this feature plan with Batch 7 completion and Batch 8 as the next implementation step.
- Completed Batch 8: Second Production Slice Image Briefs And Implementation.
- Added `image-briefs-batch-8.md` with production image briefs for all 17 planned Batch 7 words.
- Generated and reviewed child-safe, text-free, logo-free, brand-free pixel-art source images for all 17 Batch 8 words.
- Staged reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/<word-id>.png` paths.
- Recorded ignored trace metadata at `assets/image-sources/ro/batch-8-metadata.json`.
- Optimized final local WebP assets to:
  - `public/images/ro/ș/ro-sh-sapca.webp`
  - `public/images/ro/ș/ro-sh-soseta.webp`
  - `public/images/ro/ș/ro-sh-soricel.webp`
  - `public/images/ro/ț/ro-tz-testoasa.webp`
  - `public/images/ro/s/ro-s-sanie.webp`
  - `public/images/ro/s/ro-s-salata.webp`
  - `public/images/ro/s/ro-s-sandale.webp`
  - `public/images/ro/z/ro-z-zar.webp`
  - `public/images/ro/g/ro-g-gem.webp`
  - `public/images/ro/g/ro-g-girafa.webp`
  - `public/images/ro/c/ro-c-ceapa.webp`
  - `public/images/ro/c/ro-c-cirese.webp`
  - `public/images/ro/c/ro-c-ciorap.webp`
  - `public/images/ro/f/ro-f-fata.webp`
  - `public/images/ro/f/ro-f-frunza.webp`
  - `public/images/ro/b/ro-b-bicicleta.webp`
  - `public/images/ro/d/ro-d-deget.webp`
- Added canonical approved word records for all 17 Batch 8 words in their true starting-letter manifests.
- Added new canonical word manifests:
  - `content/ro/words-d.json`
  - `content/ro/words-f.json`
  - `content/ro/words-ș.json`
  - `content/ro/words-ț.json`
- Added and enabled `D`, `F`, `Ș`, and `Ț` letter manifest entries only after approved records and ready images existed.
- Updated `src/content/loaders.ts` so all new manifests are included in locale-wide content loading and validation.
- Updated `src/game/gameplay-compatibility.check.ts` so the enabled-letter regression check matches the new approved production letter set.
- Confirmed helper-derived `/admin/words` coverage now reports 72 approved Romanian words, 72 ready images, 0 placeholders, 15 enabled letters, 72 starts-with assignments, and 120 contains-only assignments.
- Confirmed helper-derived target coverage now matches the Batch 7 planned impact:
  - `Ș`: `3 / 6 / 9`
  - `Ț`: `1 / 4 / 5`
  - `S`: `6 / 7 / 13`
  - `Z`: `3 / 3 / 6`
  - `GE`: `2 / 2 / 4`
  - `GI`: `1 / 0 / 1`
  - `CE`: `1 / 1 / 2`
  - `CI`: `2 / 2 / 4`
  - `F`: `2 / 2 / 4`
  - `D`: `1 / 4 / 5`
- Kept speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata out of production JSON.

## In Progress

- No implementation is currently in progress.

## Decisions

- Every approved Romanian word remains stored once in its true canonical starting-letter file.
- Contains-only and mixed pools remain derived from the locale-wide approved word catalog.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app.
- Candidate generation is not approval; human review is required before production JSON changes.
- Worksheet `accept` decisions are not production approvals; later batches still need schema review, production JSON review, image briefs, and validation.
- The pilot audit and worksheet phase is complete; future Romanian expansion batches are production preparation, not exploratory pilot work.
- Production decisions should be backed by internet/source research when they depend on current Romanian usage, child development, speech-language guidance, safety, licensing, framework behavior, deployment behavior, or other externally governed facts.
- Critical decisions should be asked of the human before implementation, especially borderline vocabulary acceptance, placeholder use in child-facing production content, therapy metadata in production JSON, schema changes, clinical-claim boundaries, licensing uncertainty, and safety-sensitive content calls.
- Romanian diacritics remain exact and distinct for canonical placement and matching.
- New words should improve documented starts-with or contains coverage, not just fill quotas.
- Weak or rare letters may stay small when child-friendly vocabulary quality would otherwise drop.
- Image briefs are required before image generation or assignment for new production words.
- Word Wheel should remain a pronunciation and vocabulary practice app unless a future safety and clinical-review spec explicitly adds therapeutic claims.
- The target matrix must distinguish alphabet coverage from speech-target coverage.
- The completed candidate worksheet is the transition point from pilot discovery to production preparation.
- `J`, `Ț`, `Z`, `CE/CI`, `GE/GI`, `F`, `V`, `L`, `D`, and `G` should not be padded with weak words even though their current coverage is poor.
- Batch 3 decision: speech-target metadata remains worksheet/status-only for the first production content slice. Do not add target sound, sound position, syllable, cluster, contrast, therapy, or clinical fields to production JSON without a later human-approved schema/spec update.
- Batch 3 decision: the current production JSON shape is sufficient for accepted candidates that are ordinary child-facing vocabulary words. TypeScript content types do not need shape changes before Batch 4.
- Batch 3 decision: unsupported production JSON fields should fail validation so review-only metadata does not silently enter manifests.
- Batch 3 decision: exact Romanian matching remains based on `word` and `display` with locale-aware lowercasing, while `normalized` remains the folded duplicate-review and slug-support value.
- Batch 3 decision: placeholder-only production release remains a critical decision for the human. Batch 4 must not add placeholder-backed approved child-facing words unless a human explicitly approves the tradeoff and documents how unfinished content is hidden or completed before release.
- Batch 4 decision: because images were out of scope and placeholder-backed approved words were not approved, the selected production subset was added as draft metadata only. These records are production-bound but not child-facing until images are created, reviewed, optimized, and the word statuses are explicitly promoted.
- Batch 4 decision: new letters added in this slice remain `enabled: false`; enabling them belongs with the image/approval step so the child-facing letter selector does not expose empty or unfinished wheels.
- Batch 4 decision: accepted worksheet rows that start with `Ș` or `Ț` were deferred. The current validator requires ASCII word IDs but also requires ID prefixes to match the exact canonical letter bucket, so diacritic-starting buckets need a deliberate ID convention before production files are added.
- Batch 5 decision: all 15 Batch 4 draft words passed image review and validation, so they were promoted to approved and their canonical letters were enabled.
- Batch 5 decision: no new words or rejected worksheet candidates were added; the image target set remained exactly `braț`, `buză`, `geam`, `gheață`, `jucărie`, `jachetă`, `rață`, `roată`, `robot`, `soare`, `suc`, `săpun`, `ușă`, `zebră`, and `zăpadă`.
- Batch 5 decision: speech-target metadata remains status/docs-only. Production JSON still contains only ordinary child-facing vocabulary fields.
- Batch 6 decision: the first 15-word production expansion slice is finalized for content QA. It should not be expanded inside this slice; the next words should start a new production batch.
- Batch 6 decision: `/admin/words` coverage can be reviewed from `getLocaleCoverageSummary` when the user-running dev server is unavailable, but visual browser verification remains pending until `http://localhost:3000` is reachable.
- Batch 6 decision: the next content scope should first resolve the stable ID convention for exact diacritic starting-letter buckets such as `Ș` and `Ț`, then add a small second production slice from already accepted worksheet rows.
- Batch 6 decision: the recommended next slice should prioritize accepted, concrete, imageable rows that address remaining gaps without padding weak buckets: initial `Ș` and `Ț` after the ID decision, additional simple `S` and `R`, `CE/CI` and `GE/GI` watchlist examples, and a few secondary targets such as `F`, `D`, and `V` only where the word is clearly child-known.
- Batch 7 decision: `Ș` and `Ț` use exact lowercase Romanian bucket IDs, exact Unicode word files, exact route segments, and exact image folders, while production word IDs and image filenames use ASCII prefixes `ro-sh-...` and `ro-tz-...`.
- Batch 7 decision: do not add ASCII alias routes such as `/ro/play/sh` or `/ro/play/tz`; the child-facing route target remains the exact Romanian letter.
- Batch 7 decision: the second production slice should target 17 accepted worksheet rows: `șapcă`, `șosetă`, `șoricel`, `țestoasă`, `sanie`, `salată`, `sandale`, `zar`, `gem`, `girafă`, `ceapă`, `cireșe`, `ciorap`, `față`, `frunză`, `bicicletă`, and `deget`.
- Batch 7 decision: `Ă`, `Â`, and `Î` ASCII word ID tokens are not decided in this batch; resolve them deliberately before adding production starting-letter manifests for those buckets.
- Batch 7 decision: the planned second slice remains documentation/planning-only until image briefs, reviewed images, canonical JSON changes, and readiness validation are completed.
- Batch 8 decision: all 17 planned second-slice words passed image review and automated validation, so they were promoted to approved with ready app-owned images.
- Batch 8 decision: no draft-only metadata path was needed because image briefs, reviewed source images, optimized WebP assets, and canonical metadata were all completed in the same batch.
- Batch 8 decision: `D`, `F`, `Ș`, and `Ț` were enabled only after each new enabled bucket had at least one approved word with a ready reviewed image.
- Batch 8 decision: speech-target metadata remains status/docs-only. Production JSON still contains only ordinary child-facing vocabulary fields.
- Batch 3 source note: ASHA's Speech Sound Disorders Practice Portal keeps assessment, diagnosis, target selection, and treatment planning in the speech-language professional domain, so Word Wheel should avoid production clinical metadata and claims until a dedicated review exists: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Batch 3 source note: ASHA's 4-to-5 communication milestones and CDC's 4-year milestones support keeping the app framed as age-appropriate vocabulary/pronunciation practice, not screening or treatment: https://www.asha.org/public/developmental-milestones/communication-milestones-4-to-5-years/ and https://www.cdc.gov/act-early/milestones/4-years.html
- Batch 3 source note: Romanian diacritics should stay exact because Romanian orthography includes `Ă`, `Â`, `Î`, `Ș`, and `Ț`, with comma-below `Ș/Ț` as the modern standard form: https://european-language-equality.eu/wp-content/uploads/2022/03/ELE___Deliverable_D1_29__Language_Report_Romanian_.pdf
- Batch 4 source note: DEXOnline was spot-checked for representative selected spellings, including `rață` and `jucărie`, before adding draft production metadata: https://dexonline.ro/definitie/ra%C8%9B%C4%83 and https://dexonline.ro/definitie/juc%C4%83rie
- Batch 7 source note: Next.js App Router dynamic segments and `generateStaticParams` support known dynamic route params, which fits exact letter IDs in `/ro/play/[letter]`: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- Batch 7 source note: URL percent-encoding is expected for URL characters outside simple ASCII contexts, so exact `/ro/play/ș` and `/ro/play/ț` links may be encoded during transport without changing the canonical route decision: https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

## Open Questions

- Should `/admin/words` later add a speech-target coverage section, or should that remain a generated markdown report for the first expansion cycle?
- Should a later practice-target architecture add optional production metadata for speech targets after human and clinical-safety review?
- What stable ASCII ID convention should be used for future exact `Ă`, `Â`, and `Î` starting-letter buckets?

## Exceptions

- No code, content JSON, or image assets were changed in Batch 0.
- The therapy-informed update changed documentation and workflow only.
- No code, content JSON, or image assets were changed in Batch 1.
- No code, content JSON, or image assets were changed in Batch 2.
- No production content JSON or image assets were changed in Batch 3.
- Batch 3 intentionally did not enforce a new placeholder policy in validation because placeholder-backed production words are a critical product decision for the human before Batch 4.
- Batch 4 added production-bound draft metadata but intentionally added 0 approved child-facing words and 0 images.
- Batch 4 did not change approved coverage counts because draft records are excluded from `getApprovedWords`.
- Batch 4 deferred `Ș` and `Ț` starting-letter files to avoid silently choosing a diacritic-bucket ID convention.
- Batch 5 could not use the Sharp-backed `bun run optimize:images -- --locale ro` execution path because local Sharp loading failed with the known macOS code-signature error. The documented optimizer dry run passed, then final Batch 5 assets were written with local `cwebp` from reviewed 256 px staged PNG sources.
- Batch 5 browser verification was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Batch 6 could not run `pnpm run validate:content` or `pnpm run lint` because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- Batch 6 `bun run build` was attempted and remains blocked by the local Next SWC darwin/arm64 code-signature error.
- Batch 6 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 15-word production expansion slice.
- Batch 6 browser verification for `/ro`, `/admin/words`, and affected `/ro/play/<letter>` routes was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Browser verification for `/admin/words` was skipped in Batch 3 because no visual admin changes were made and `http://localhost:3000` was not reachable.
- Browser verification for `/admin/words` was skipped in Batch 1 because `http://localhost:3000` was not reachable.
- No dev server was started.
- Batch 7 added validator support for the `Ș`/`Ț` ASCII word ID convention, but added no production word manifests or image assets.
- Batch 7 browser verification was skipped because no child-facing content or UI changed and no words were promoted to approved.
- Batch 8 could not run `pnpm run validate:content` or `pnpm run lint` because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- Batch 8 did not use the Sharp-backed optimizer path because local Sharp loading still fails with the known macOS code-signature error; final Batch 8 assets were written with local `cwebp` from reviewed 256 px staged PNG sources.
- Batch 8 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 17-word production expansion slice.
- Batch 8 browser verification for `/ro`, `/admin/words`, `/ro/play/ș`, `/ro/play/ț`, `/ro/play/f`, and `/ro/play/d` was skipped because no user-running dev server was listening at `http://localhost:3000`.

## Acceptance Status

- Feature spec exists: complete.
- Implementation plan exists: complete.
- Feature status tracker exists: complete.
- Candidate generation workflow defined: complete.
- Human review workflow defined: complete.
- Canonical starting-letter storage defined: complete.
- Contains-pool impact checks defined: complete.
- Speech-target impact checks defined: complete.
- Sound-position, syllable-complexity, and contrast-review fields defined: complete.
- Image brief requirements defined: complete.
- QA gates defined: complete.
- First batch documentation-first: complete.
- Coverage audit artifact: complete.
- First pilot scope defined: complete.
- Candidate review worksheet: complete.
- Candidate deduplication against approved Romanian words: complete.
- Candidate canonical starting-letter review: complete.
- Candidate speech-target metadata review: complete.
- Schema readiness for accepted candidates: complete.
- Therapy metadata production decision: complete; keep worksheet/status-only for this slice.
- Validator unknown-field guard: complete.
- Validator exact duplicate word guard: complete.
- Coverage summary regression checks: complete.
- First production-bound draft metadata slice: complete.
- Batch 5 image briefs: complete.
- Batch 5 image generation and review: complete.
- Batch 5 final WebP optimization: complete.
- Actual approved child-facing production content expansion: complete for the first 15-word production slice.
- Batch 6 validation and compatibility rerun: complete.
- Batch 6 helper-derived `/admin/words` coverage review: complete.
- Batch 6 image-readiness review: complete.
- Batch 6 child-facing gameplay compatibility review: complete through automated checks; browser route verification remains pending user-running dev server.
- Batch 6 confirmation that no weak words, placeholders, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 6 next content scope definition: complete.
- Batch 7 human decision for `Ș`/`Ț` convention: complete.
- Batch 7 validator support for `ro-sh-` and `ro-tz-` prefixes: complete.
- Batch 7 second-slice planning artifact: complete.
- Batch 7 confirmation that no production words, image assets, placeholder-backed approved words, rejected candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 8 image briefs: complete.
- Batch 8 image generation and review: complete.
- Batch 8 final WebP optimization: complete.
- Batch 8 canonical JSON promotion with ready images: complete.
- Batch 8 `Ș`/`Ț` exact bucket implementation with ASCII word IDs: complete.
- Batch 8 validation and compatibility rerun: complete.
- Batch 8 child-facing gameplay compatibility review: complete through automated checks; browser route verification remains pending user-running dev server.
- Batch 8 confirmation that no rejected or needs-revision candidates, placeholder-backed approved words, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.

## Batch 5 Production Impact

Batch 5 promoted the 15 Batch 4 draft records after image review and validation. Approved gameplay and `/admin/words` coverage now include these words.

| Word | Canonical file | Worksheet row | Status now | Starts-with impact | Contains and speech-target impact |
| --- | --- | ---: | --- | --- | --- |
| `braț` | `words-b.json` | 40 | approved, ready image | `B` +1 | final `Ț`; contains-only `R`; complex `br` cluster |
| `buză` | `words-b.json` | 51 | approved, ready image | `B` +1 | medial `Z` |
| `geam` | `words-g.json` | 66 | approved, ready image | `G` +1 | initial watchlist `GE/GI` |
| `gheață` | `words-g.json` | 41 | approved, ready image | `G` +1 | medial `Ț` |
| `jucărie` | `words-j.json` | 54 | approved, ready image | `J` +1 | initial `J`; medial `R` |
| `jachetă` | `words-j.json` | 55 | approved, ready image | `J` +1 | initial `J` |
| `rață` | `words-r.json` | 1 | approved, ready image | `R` +1 | initial `R`; medial `Ț` |
| `roată` | `words-r.json` | 2 | approved, ready image | `R` +1 | initial `R` |
| `robot` | `words-r.json` | 3 | approved, ready image | `R` +1 | initial `R` |
| `soare` | `words-s.json` | 14 | approved, ready image | `S` +1 | initial `S`; medial `R` |
| `suc` | `words-s.json` | 15 | approved, ready image | `S` +1 | initial short `S` |
| `săpun` | `words-s.json` | 22 | approved, ready image | `S` +1 | initial `S` |
| `ușă` | `words-u.json` | 30 | approved, ready image | `U` +1 | medial `Ș`; improves contains-only `Ș` |
| `zebră` | `words-z.json` | 45 | approved, ready image | `Z` +1 | initial `Z`; medial `R`; `br` cluster |
| `zăpadă` | `words-z.json` | 46 | approved, ready image | `Z` +1 | initial `Z`; medial `D` |

Aggregate target impact:

- Starts-with: `B` +2, `G` +2, `J` +2, `R` +3, `S` +3, `U` +1, `Z` +2.
- Contains/speech targets: `R` +4 contains-only contexts, `Ț` +3 contexts, `Z` +1 medial context, `Ș` +1 medial context, and `GE/GI` +1 initial watchlist context.
- Approved count impact: `+15`.
- Ready image impact: `+15`.
- Enabled letters: `A`, `B`, `C`, `G`, `J`, `M`, `P`, `R`, `S`, `U`, and `Z`.

## Batch 6 Final QA And Next Scope

Batch 6 rechecked the first production expansion slice without adding new content.

Current helper-derived `/admin/words` summary:

- Enabled letters: `A`, `B`, `C`, `G`, `J`, `M`, `P`, `R`, `S`, `U`, and `Z`.
- Approved words: `55`.
- Ready images: `55`.
- Placeholder images: `0`.
- Starts-with assignments: `55`.
- Contains-only assignments across enabled targets: `76`.

Current enabled-letter coverage:

| Letter | Starts-with | Contains-only | Mixed | Ready starts | Ready contains | Placeholder images |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `A` | 10 | 20 | 30 | 10 | 20 | 0 |
| `B` | 2 | 5 | 7 | 2 | 5 | 0 |
| `C` | 10 | 10 | 20 | 10 | 10 | 0 |
| `G` | 2 | 1 | 3 | 2 | 1 | 0 |
| `J` | 2 | 0 | 2 | 2 | 0 | 0 |
| `M` | 10 | 1 | 11 | 10 | 1 | 0 |
| `P` | 10 | 5 | 15 | 10 | 5 | 0 |
| `R` | 3 | 16 | 19 | 3 | 16 | 0 |
| `S` | 3 | 5 | 8 | 3 | 5 | 0 |
| `U` | 1 | 11 | 12 | 1 | 11 | 0 |
| `Z` | 2 | 2 | 4 | 2 | 2 | 0 |

Current high-value target coverage after the slice:

- `R`: 3 starts-with, 16 contains-only, 19 mixed; first initial `R` examples are now present through `rață`, `roată`, and `robot`.
- `S`: 3 starts-with, 5 contains-only, 8 mixed; first simple initial `S` examples are now present through `soare`, `suc`, and `săpun`.
- `Z`: 2 starts-with, 2 contains-only, 4 mixed; first initial `Z` examples are now present through `zebră` and `zăpadă`, and `buză` adds medial `Z`.
- `J`: 2 starts-with, 0 contains-only, 2 mixed; first initial `J` examples are now present through `jucărie` and `jachetă`.
- `Ț`: 0 starts-with, 3 contains-only, 3 mixed through `braț`, `gheață`, and `rață`.
- `Ș`: 0 starts-with, 5 contains-only, 5 mixed after adding `ușă`.
- `GE/GI`: `ge` has 1 starts-with and 1 contains-only through `geam` and `minge`; `gi` remains empty.

Image readiness:

- All 15 Batch 5 WebP files exist at canonical paths, validate as `256 x 256 px` WebP, and are below the `20 KB` hard maximum.
- The 15 Batch 5 WebP files range from `1,816` bytes to `5,246` bytes, so none trigger the `12 KB` warning threshold.
- Content validation still reports 5 existing warning-threshold notices for older `M` and `P` images. These remain below the hard maximum and are outside the new production slice.

Content quality confirmation:

- The production slice used only accepted worksheet rows and did not add rejected candidates.
- The selected words are common, concrete, child-known, imageable, and appropriate for ages 4 to 6.
- No weak or obscure words were added to pad `J`, `Z`, `G`, or any other low-count bucket.
- Production JSON contains only the established vocabulary fields; speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata remain worksheet/status-only.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app. No editing, auth, database, billing, accounts, upload, CSV, AI pronunciation, or clinical-claim surface was added.

Remaining gaps after Batch 7:

- Initial `Ș` and initial `Ț` are still absent from enabled production starts-with buckets. The `Ș`/`Ț` convention is now resolved, so the remaining blocker is image-brief and image-readiness implementation.
- `CE/CI` and `GE/GI` watchlist coverage remains thin; `CE` and `GI` still have no current examples.
- `F`, `V`, `L`, `T`, and `D` still lack starts-with production buckets, though some have useful contains-only examples.
- Future `Ă`, `Â`, and `Î` starting-letter word ID tokens are not yet resolved.
- Dense mixed pools such as `A`, `C`, and `R` exceed the 16-word visible wheel cap, which is acceptable because gameplay samples bounded subsets, but future QA should continue checking random subset and replacement behavior.
- Browser verification for `/ro`, `/admin/words`, and affected `/ro/play/<letter>` routes remains pending until the user-running dev server is available on `http://localhost:3000`.

## Batch 7 Diacritic Convention And Second Slice Plan

Batch 7 resolved the `Ș`/`Ț` convention and created `diacritic-buckets-and-second-slice-batch-7.md`.

Chosen convention:

- `letters.json` IDs stay exact: `ș`, `ț`.
- Word files stay exact: `content/ro/words-ș.json`, `content/ro/words-ț.json`.
- Routes stay exact: `/ro/play/ș`, `/ro/play/ț`.
- Word IDs and image filenames stay ASCII: `ro-sh-...`, `ro-tz-...`.
- Image folders stay exact: `/images/ro/ș/...`, `/images/ro/ț/...`.

Planned second production slice:

- `șapcă`, `șosetă`, `șoricel`
- `țestoasă`
- `sanie`, `salată`, `sandale`
- `zar`
- `gem`, `girafă`
- `ceapă`, `cireșe`, `ciorap`
- `față`, `frunză`
- `bicicletă`, `deget`

Expected coverage if all 17 later pass image review and validation:

| Target | Batch 6 starts/contains/mixed | Planned starts/contains/mixed |
| --- | ---: | ---: |
| `Ș` | `0 / 5 / 5` | `3 / 6 / 9` |
| `Ț` | `0 / 3 / 3` | `1 / 4 / 5` |
| `S` | `3 / 5 / 8` | `6 / 7 / 13` |
| `Z` | `2 / 2 / 4` | `3 / 3 / 6` |
| `GE` | `1 / 1 / 2` | `2 / 2 / 4` |
| `GI` | `0 / 0 / 0` | `1 / 0 / 1` |
| `CE` | `0 / 0 / 0` | `1 / 1 / 2` |
| `CI` | `0 / 1 / 1` | `2 / 2 / 4` |
| `F` | `0 / 1 / 1` | `2 / 2 / 4` |
| `D` | `0 / 3 / 3` | `1 / 4 / 5` |

Batch 8 implemented this planned second slice. No Batch 7 planned row remains pending.

## Batch 8 Production Impact

Batch 8 promoted the 17 Batch 7 planned rows after image brief review, source image review, WebP optimization, and automated validation. Approved gameplay and `/admin/words` coverage now include these words.

| Word | Canonical file | Worksheet row | Status now | Starts-with impact | Contains and speech-target impact |
| --- | --- | ---: | --- | --- | --- |
| `șapcă` | `words-ș.json` | 25 | approved, ready image | `Ș` +1 | initial `Ș`; `S/Ș` contrast context |
| `șosetă` | `words-ș.json` | 27 | approved, ready image | `Ș` +1 | initial `Ș`; medial `S` |
| `șoricel` | `words-ș.json` | 29 | approved, ready image | `Ș` +1 | initial `Ș`; medial `R` |
| `țestoasă` | `words-ț.json` | 36 | approved, ready image | `Ț` +1 | initial `Ț`; medial/final `S` |
| `sanie` | `words-s.json` | 13 | approved, ready image | `S` +1 | simple initial `S` |
| `salată` | `words-s.json` | 17 | approved, ready image | `S` +1 | simple initial `S` |
| `sandale` | `words-s.json` | 23 | approved, ready image | `S` +1 | simple initial `S` |
| `zar` | `words-z.json` | 47 | approved, ready image | `Z` +1 | initial `Z`; final `R` |
| `gem` | `words-g.json` | 67 | approved, ready image | `G` +1 | initial watchlist `GE` |
| `girafă` | `words-g.json` | 68 | approved, ready image | `G` +1 | initial watchlist `GI`; medial `R` and `F` |
| `ceapă` | `words-c.json` | 60 | approved, ready image | `C` +1 | initial watchlist `CE` |
| `cireșe` | `words-c.json` | 62 | approved, ready image | `C` +1 | initial watchlist `CI`; medial `Ș` |
| `ciorap` | `words-c.json` | 63 | approved, ready image | `C` +1 | initial watchlist `CI`; medial `R` |
| `față` | `words-f.json` | 39 | approved, ready image | `F` +1 | medial `Ț`; first `F` starts-with candidate |
| `frunză` | `words-f.json` | 52 | approved, ready image | `F` +1 | medial `Z`; `F/R` cluster context |
| `bicicletă` | `words-b.json` | 65 | approved, ready image | `B` +1 | contains `CI`; final-ish `Ț`; later-practice complexity |
| `deget` | `words-d.json` | 69 | approved, ready image | `D` +1 | medial `GE`; first `D` starts-with candidate |

Aggregate impact:

- Approved words: `55 -> 72`.
- Ready images: `55 -> 72`.
- Placeholder images: stayed `0`.
- Enabled letters: `A`, `B`, `C`, `D`, `F`, `G`, `J`, `M`, `P`, `R`, `S`, `Ș`, `Ț`, `U`, and `Z`.
- Starts-with assignments: `72`.
- Contains-only assignments across enabled targets: `120`.

High-value target impact:

- `Ș`: `3` starts-with, `6` contains-only, `9` mixed.
- `Ț`: `1` starts-with, `4` contains-only, `5` mixed.
- `S`: `6` starts-with, `7` contains-only, `13` mixed.
- `Z`: `3` starts-with, `3` contains-only, `6` mixed.
- `GE`: `2` starts-with, `2` contains-only, `4` mixed.
- `GI`: `1` starts-with, `0` contains-only, `1` mixed.
- `CE`: `1` starts-with, `1` contains-only, `2` mixed.
- `CI`: `2` starts-with, `2` contains-only, `4` mixed.
- `F`: `2` starts-with, `2` contains-only, `4` mixed.
- `D`: `1` starts-with, `4` contains-only, `5` mixed.

Image readiness:

- All 17 Batch 8 WebP files exist at canonical paths, validate as `256 x 256 px` WebP, and are below the `20 KB` hard maximum.
- The 17 Batch 8 WebP files range from `250` bytes to `982` bytes, so none trigger the `12 KB` warning threshold.
- Content validation still reports 5 existing warning-threshold notices for older `M` and `P` images. These remain below the hard maximum and are outside the new production slice.

Content quality confirmation:

- The production slice used only accepted worksheet rows and did not add rejected or needs-revision candidates.
- No draft-only or placeholder-backed approved records were added.
- Production JSON contains only the established vocabulary fields; speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata remain worksheet/status-only.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app. No editing, auth, database, billing, accounts, upload, CSV, AI pronunciation, or clinical-claim surface was added.

Remaining gaps after Batch 8:

- Future `Ă`, `Â`, and `Î` starting-letter word ID tokens are not yet resolved.
- `V`, `L`, and `T` still lack starts-with production buckets, though future content should not pad them with weak words.
- Browser verification for `/ro`, `/admin/words`, `/ro/play/ș`, `/ro/play/ț`, `/ro/play/f`, `/ro/play/d`, and other affected routes remains pending until the user-running dev server is available on `http://localhost:3000`.

## Verification

Spec package verification:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Batch 0 result:

- Markdown consistency review completed for the new package.
- `git diff --check` passed.

Batch 1 verification:

```txt
curl -I --max-time 2 http://localhost:3000/admin/words
git diff --check
```

Result:

- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.
- `git diff --check` passed.

Batch 2 verification:

```txt
node - <<'NODE'
// Checked worksheet row count, decision counts, duplicate approved words, and internal duplicates.
NODE
git diff --check
```

Result:

- Worksheet row count confirmed: 69.
- Decision counts confirmed: 43 `accept`, 19 `needs revision`, 7 `reject`.
- No worksheet candidate duplicates an existing approved Romanian word by normalized form.
- No duplicate normalized forms exist inside the worksheet.
- `git diff --check` passed.

Batch 3 verification:

```txt
pnpm run validate:content
bun run validate:content
pnpm run lint
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.

Batch 4 verification:

```txt
pnpm run validate:content
bun run validate:content
pnpm run lint
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Browser verification against `http://localhost:3000/admin/words` was skipped because no user-running dev server was listening on port `3000`.

Batch 5 verification:

```txt
pnpm run validate:content
bun run validate:content
pnpm run lint
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed after updating its enabled-letter expectation for the new approved letter set.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed after final documentation updates.
- The documented image optimizer dry run passed for staged sources.
- `bun run optimize:images -- --locale ro` was blocked by the local Sharp code-signature error, so Batch 5 final assets were optimized with local `cwebp` from reviewed staged PNG sources.
- `http://localhost:3000/admin/words` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 6 verification:

```txt
pnpm run validate:content
pnpm run lint
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
bun run optimize:images -- --locale ro --dry-run
bun run build
git diff --check
curl -I --max-time 2 http://localhost:3000
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `bun run optimize:images -- --locale ro --dry-run` passed and found 55 staged source images.
- `bun run build` remains blocked by the known local Next SWC darwin/arm64 code-signature error.
- `git diff --check` passed before final documentation updates.
- `http://localhost:3000` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 7 verification:

```txt
pnpm run validate:content
bun run validate:content
pnpm run lint
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
curl -I --max-time 2 http://localhost:3000
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- `http://localhost:3000` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 8 verification:

```txt
pnpm run validate:content
bun run validate:content
pnpm run lint
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
curl -I --max-time 3 http://localhost:3000/ro
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; `bun` was used for project scripts instead.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed after updating its enabled-letter expectation for the new approved letter set.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- `http://localhost:3000/ro` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

## Next Batch

There is no Batch 9 defined in this feature plan. The second Romanian production expansion slice is finalized for metadata, image readiness, validation, and automated gameplay compatibility.

Remaining verification and release steps:

- Start the dev server on port `3000` and browser-check `/ro`, `/admin/words`, `/ro/play/ș`, `/ro/play/ț`, `/ro/play/f`, `/ro/play/d`, and a mixed/contains mode route that can surface the new words.
- Decide whether to open a new feature batch for the next Romanian expansion scope, including any future `Ă`, `Â`, and `Î` ASCII ID convention work.
