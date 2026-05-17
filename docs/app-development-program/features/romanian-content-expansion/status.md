# Romanian Content Expansion Status

Last updated: 2026-05-17

## Current Phase

Phase: Batch 14 complete

Overall status: Batch 13 implemented the full accepted Batch 12 placeholder-backed vocabulary scope. Production Romanian content now has 209 approved words: 83 ready-image words and 126 intentionally placeholder-backed approved words. Helper-derived coverage now reports 24 enabled letters, 209 starts-with assignments, and 744 contains-only assignments. The new exact `Î` bucket is enabled with route segment `i-circ` and `ro-i-circ-...` word ID prefix. The deliberately generic app-owned placeholder asset is stored at `/images/ro/placeholders/generic-word-placeholder.webp`, and all placeholder-backed records use `imageStatus: "placeholder"` with alt text that marks the image as temporary/generic. Speech-target, syllable, cluster, contrast, and therapy review fields remain documentation-only in `vocabulary-scope-spec-batch-12.md`; production JSON still uses ordinary vocabulary fields only. After user review, placeholder image replacement was paused for one more sound-coverage pass. Batch 14 completed that planning pass with `sound-coverage-scope-spec-batch-14.md`: `110` unique accepted candidate rows, source tags or internal-review notes for each candidate, explicit quality ceilings for targets that cannot honestly reach `30` mixed words, and a separate practice-target model for the eight bottom-row start-page options (`CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, `GHI`). If Batch 15 implements all accepted rows as placeholder-backed approved records, approved Romanian content should move from `209 -> 319` words, placeholders from `126 -> 236`, and mixed coverage should reach `ș 36`, `j 14`, `ț 36`, `z 31`, `ce 14`, `ci 14`, `ge 10`, `gi 4`, `che 10`, `chi 9`, `ghe 8`, and `ghi 8`. Batch 15 should implement accepted sound-coverage words plus the start-page practice targets, and placeholder image replacement moves to Batch 16.

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
  - ASCII play routes: `/ro/play/sh`, `/ro/play/tz`, resolved internally to `ș` and `ț`;
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
- Fixed the post-Batch 8 diacritic play-route issue by generating ASCII public routes for `Ș` and `Ț`:
  - `/ro/play/sh` resolves internally to canonical letter ID `ș`;
  - `/ro/play/tz` resolves internally to canonical letter ID `ț`.
- Updated letter-selection and `/admin/words` play links to use the same ASCII route segments.
- Added regression checks for `getLetterRouteSegment` and `getLetterIdFromRouteSegment`.
- Completed Batch 9: Third Production Slice Planning.
- Added `third-production-slice-batch-9.md`.
- Planned an 11-word third production slice from remaining accepted worksheet rows only:
  - `rochie`
  - `rachetă`
  - `iepure`
  - `scaun`
  - `nas`
  - `urs`
  - `coș`
  - `cămașă`
  - `dinți`
  - `cățel`
  - `pijama`
- Confirmed all 11 planned candidates are not duplicated in current approved JSON by proposed ID, exact `word`, or `normalized` value.
- Recorded canonical files, proposed IDs, canonical image paths, categories, alt text directions, expected starts/contains/mixed impact, and image-readiness paths for all 11 planned rows.
- Recorded expected aggregate impact if all 11 planned rows later pass image review and validation:
  - approved words `72 -> 83`;
  - ready images `72 -> 83`;
  - new canonical starts-with buckets after approval: `I` and `N`;
  - existing buckets strengthened: `C`, `D`, `P`, `R`, `S`, and `U`.
- Updated this feature plan with Batch 9 completion and Batch 10 as the next proposed implementation step.
- Kept Batch 9 planning-only: no production JSON records and no image assets were added.
- Completed Batch 10: Third Production Slice Image Briefs And Implementation.
- Added `image-briefs-batch-10.md` with production image briefs for all 11 planned Batch 9 words.
- Generated and reviewed child-safe, text-free, logo-free, brand-free pixel-art source images for all 11 Batch 10 words.
- Staged reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/<word-id>.png` paths.
- Recorded ignored trace metadata at `assets/image-sources/ro/batch-10-metadata.json`.
- Post-processed the source PNGs into simplified 48-color pixel sources, then optimized final local WebP assets to:
  - `public/images/ro/r/ro-r-rochie.webp`
  - `public/images/ro/r/ro-r-racheta.webp`
  - `public/images/ro/i/ro-i-iepure.webp`
  - `public/images/ro/s/ro-s-scaun.webp`
  - `public/images/ro/n/ro-n-nas.webp`
  - `public/images/ro/u/ro-u-urs.webp`
  - `public/images/ro/c/ro-c-cos.webp`
  - `public/images/ro/c/ro-c-camasa.webp`
  - `public/images/ro/d/ro-d-dinti.webp`
  - `public/images/ro/c/ro-c-catel.webp`
  - `public/images/ro/p/ro-p-pijama.webp`
- Added canonical approved word records for all 11 Batch 10 words in their true starting-letter manifests.
- Added new canonical word manifests:
  - `content/ro/words-i.json`
  - `content/ro/words-n.json`
- Added and enabled `I` and `N` letter manifest entries only after approved records and ready images existed.
- Updated `src/content/loaders.ts` so the new manifests are included in locale-wide content loading and validation.
- Updated `src/game/gameplay-compatibility.check.ts` so the enabled-letter regression check matches the new approved production letter set.
- Confirmed helper-derived `/admin/words` coverage now reports 83 approved Romanian words, 83 ready images, 0 placeholders, 17 enabled letters, 83 starts-with assignments, and 186 contains-only assignments.
- Confirmed helper-derived target coverage now matches the Batch 9 planned per-target impact for the affected targets:
  - `R`: `5 / 24 / 29`
  - `I`: `1 / 23 / 24`
  - `S`: `7 / 9 / 16`
  - `N`: `1 / 21 / 22`
  - `U`: `2 / 14 / 16`
  - `C`: `16 / 16 / 32`
  - `D`: `2 / 4 / 6`
  - `P`: `11 / 9 / 20`
  - `Ș`: `3 / 8 / 11`
  - `Ț`: `1 / 6 / 7`
  - `J`: `2 / 1 / 3`
  - `M`: `10 / 4 / 14`
  - `A`: `10 / 35 / 45`
- Kept speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata out of production JSON.
- Completed Batch 11: Next Romanian Production Scope Decision.
- Added `next-scope-decision-batch-11.md`.
- Reviewed post-Batch 10 helper-derived `/admin/words` coverage:
  - 17 enabled letters;
  - 83 approved Romanian words;
  - 83 ready images;
  - 0 placeholder images;
  - 83 starts-with assignments;
  - 186 contains-only assignments.
- Confirmed all 43 accepted Batch 2 worksheet rows are already implemented as approved production records with ready reviewed images.
- Confirmed there are 0 accepted Batch 2 worksheet rows remaining for another production slice.
- Selected a split vocabulary-first and image-second Romanian expansion pipeline as the next direction.
- Recorded the human-approved policy that approved placeholder-backed words may be visible in gameplay until final per-word images exist.
- Confirmed another production slice must wait for a new candidate worksheet and review pass.
- Confirmed `Ă`, `Â`, and `Î` exact starts-with bucket ASCII ID tokens remain unresolved because those buckets do not enter the selected next scope.
- Updated this feature plan with Batch 11 completion and Batch 12 as the next proposed step.
- Completed Batch 12: Romanian Vocabulary Scope Spec.
- Added `vocabulary-scope-spec-batch-12.md`.
- Researched current Romanian child vocabulary, Romanian early-education language guidance, Romanian usage/orthography, and speech/logopedie target guidance before selecting the scope.
- Reviewed current helper-derived coverage:
  - 83 approved Romanian words;
  - 83 ready images;
  - 0 placeholder images;
  - 17 enabled letters;
  - 83 starts-with assignments;
  - 186 contains-only assignments.
- Defined 126 new accepted placeholder-ready vocabulary rows across broad Romanian letter coverage.
- Recorded target sound, sound position, syllable complexity, consonant clusters, contrast value, age fit, imageability, safety, and expected coverage impact for each scoped word in documentation only.
- Confirmed no Batch 2 rejected or needs-revision candidates were included in the accepted scope.
- Recorded expected approved-word impact if Batch 13 implements the whole scope: 83 -> 209 approved words before image replacement.
- Applied the human-approved placeholder visibility policy to the scope: Batch 13 may make approved placeholder-backed words visible in gameplay with a deliberately generic app-owned placeholder.
- Resolved `Ă`, `Â`, and `Î` ASCII conventions for future implementation:
  - exact `ă` bucket uses route `a-breve` and ID/image prefix `ro-a-breve-`;
  - exact `â` bucket uses route `a-circ` and ID/image prefix `ro-a-circ-`;
  - exact `î` bucket uses route `i-circ` and ID/image prefix `ro-i-circ-`.
- Selected only `înghețată` for exact `Î`; kept `Ă` and `Â` convention-only because no strong child-facing exact starts-with words were accepted.
- Updated this feature plan with Batch 12 completion and Batch 13 as the next proposed step.

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
- Batch 7 decision, superseded after the reported route issue: `Ș` and `Ț` use exact lowercase Romanian bucket IDs, exact Unicode word files, exact route segments, and exact image folders, while production word IDs and image filenames use ASCII prefixes `ro-sh-...` and `ro-tz-...`.
- Post-Batch 8 route fix decision: canonical `Ș` and `Ț` content stays in exact `ș` and `ț` buckets, but child-facing play URLs use ASCII route segments `/ro/play/sh` and `/ro/play/tz` resolved internally to exact letter IDs.
- Batch 7 decision: the second production slice should target 17 accepted worksheet rows: `șapcă`, `șosetă`, `șoricel`, `țestoasă`, `sanie`, `salată`, `sandale`, `zar`, `gem`, `girafă`, `ceapă`, `cireșe`, `ciorap`, `față`, `frunză`, `bicicletă`, and `deget`.
- Batch 7 decision: `Ă`, `Â`, and `Î` ASCII word ID tokens are not decided in this batch; resolve them deliberately before adding production starting-letter manifests for those buckets.
- Batch 7 decision: the planned second slice remains documentation/planning-only until image briefs, reviewed images, canonical JSON changes, and readiness validation are completed.
- Batch 8 decision: all 17 planned second-slice words passed image review and automated validation, so they were promoted to approved with ready app-owned images.
- Batch 8 decision: no draft-only metadata path was needed because image briefs, reviewed source images, optimized WebP assets, and canonical metadata were all completed in the same batch.
- Batch 8 decision: `D`, `F`, `Ș`, and `Ț` were enabled only after each new enabled bucket had at least one approved word with a ready reviewed image.
- Batch 8 decision: speech-target metadata remains status/docs-only. Production JSON still contains only ordinary child-facing vocabulary fields.
- Batch 9 decision: the third production slice should target 11 remaining accepted worksheet rows: `rochie`, `rachetă`, `iepure`, `scaun`, `nas`, `urs`, `coș`, `cămașă`, `dinți`, `cățel`, and `pijama`.
- Batch 9 decision: `I` and `N` are planned as new canonical starts-with buckets for `iepure` and `nas`, but the letter manifest entries, word manifests, loader imports, approval, and enabling belong to the implementation batch after image readiness is clear.
- Batch 9 decision: `rachetă` should be planned as a child-friendly toy rocket image, not a realistic weapon, launch, or military scene.
- Batch 9 decision: `cățel` remains eligible even though `câine` exists because it is not a duplicate by exact word or normalized value; the future image brief must make it visibly a puppy and distinct from the existing dog image.
- Batch 9 decision: the planned third slice remains documentation/planning-only until image briefs, reviewed images, canonical JSON changes, and readiness validation are completed.
- Batch 10 decision: all 11 planned third-slice words passed image review and automated validation, so they were promoted to approved with ready app-owned images.
- Batch 10 decision: no draft-only metadata path was needed because image briefs, reviewed source images, optimized WebP assets, and canonical metadata were completed in the same batch.
- Batch 10 decision: `I` and `N` were enabled only after each new enabled bucket had one approved word with a ready reviewed image.
- Batch 10 decision: speech-target metadata remains status/docs-only. Production JSON still contains only ordinary child-facing vocabulary fields.
- Batch 11 decision: do not plan another small production slice from the Batch 2 worksheet, because all 43 accepted rows are already implemented and no accepted rows remain available.
- Batch 11 decision: split future Romanian expansion into vocabulary-first and image-second work. Batch 12 should research and specify the broader word set; Batch 13 should implement approved words with intentional placeholders; later image batches should replace placeholders with final reviewed pixel art.
- Batch 11 decision: approved placeholder-backed words may be visible in gameplay until final per-word images exist, using a deliberately generic app-owned placeholder that is easy to identify in `/admin/words`.
- Batch 11 decision, resolved by Batch 12: `Ă`, `Â`, and `Î` ASCII word ID tokens needed a deliberate convention before exact production starts-with buckets were added.
- Batch 11 decision: rejected and needs-revision worksheet rows remain ineligible for production and must not be used for quota-filling without a new review pass.
- Batch 12 decision: use exact `ă`, `â`, and `î` bucket IDs, exact Unicode word files and image folders, ASCII public route segments `/ro/play/a-breve`, `/ro/play/a-circ`, and `/ro/play/i-circ`, and ASCII word ID/image filename prefixes `ro-a-breve-`, `ro-a-circ-`, and `ro-i-circ-`.
- Batch 12 decision: include only one exact `Î` starts-with word, `înghețată`; do not add exact `Ă` or `Â` starts-with words in this scope because current reviewed child-facing vocabulary quality is too weak.
- Batch 12 decision: Batch 13 should implement only the 126 accepted rows from `vocabulary-scope-spec-batch-12.md`, with a single generic placeholder image for unfinished art and no speech-target fields in production JSON.
- Batch 12 source note: Romanian early-education curriculum supports vocabulary growth, phonetic differentiation, picture/book work, and familiar oral communication contexts for ages 3 to 6: https://legislatie.just.ro/Public/DetaliiDocument/217614
- Batch 12 source note: Logorici's early vocabulary material supports functional illustrated categories such as family, food, body parts, room objects, toys, fruits, and animals: https://www.logorici.ro/vocabularul-primele-100-de-cuvinte/
- Batch 12 source note: ASHA speech-sound guidance supports tracking word position, phonetic context, sound combinations, consonant clusters, and syllable shape, while keeping clinical diagnosis and treatment planning out of Word Wheel: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Batch 12 source note: Romanian logopedie materials support practice by initial/medial/final position and differentiation for targets such as `S`, `Z`, `Ț`, `Ș`, and `J`: https://cjrae-ab.ro/wp-content/uploads/2020/03/C%C3%AEmpean-Lucia-EMITEREA-CORECTA-A-SUNETELOR.pdf
- Batch 12 source note: Romanian alphabet guidance preserves `Ă`, `Â`, `Î`, `Ș`, and `Ț` as distinct letters and treats `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` as sequences outside the alphabet: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/alfabetul-limbii-romane/
- Batch 12 source note: Academia Română orthography guidance supports `î` at the beginning/end of ordinary words and `â` inside words, so exact `Â` starts-with child vocabulary should remain convention-only unless a strong reviewed exception appears: https://academiaromana.ro/grafieLimbaRomana/pag_grafieLR_norme.htm
- Batch 3 source note: ASHA's Speech Sound Disorders Practice Portal keeps assessment, diagnosis, target selection, and treatment planning in the speech-language professional domain, so Word Wheel should avoid production clinical metadata and claims until a dedicated review exists: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Batch 3 source note: ASHA's 4-to-5 communication milestones and CDC's 4-year milestones support keeping the app framed as age-appropriate vocabulary/pronunciation practice, not screening or treatment: https://www.asha.org/public/developmental-milestones/communication-milestones-4-to-5-years/ and https://www.cdc.gov/act-early/milestones/4-years.html
- Batch 3 source note: Romanian diacritics should stay exact because Romanian orthography includes `Ă`, `Â`, `Î`, `Ș`, and `Ț`, with comma-below `Ș/Ț` as the modern standard form: https://european-language-equality.eu/wp-content/uploads/2022/03/ELE___Deliverable_D1_29__Language_Report_Romanian_.pdf
- Batch 4 source note: DEXOnline was spot-checked for representative selected spellings, including `rață` and `jucărie`, before adding draft production metadata: https://dexonline.ro/definitie/ra%C8%9B%C4%83 and https://dexonline.ro/definitie/juc%C4%83rie
- Batch 7 source note: Next.js App Router dynamic segments and `generateStaticParams` support known dynamic route params, which fits exact letter IDs in `/ro/play/[letter]`: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- Batch 7 source note, updated after the reported route issue: URL percent-encoding is expected for URL characters outside simple ASCII contexts, so `Ș` and `Ț` play routes now use ASCII route segments to avoid diacritic path issues while preserving exact internal content IDs: https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

## Open Questions

- Should Batch 13 implement all 126 Batch 12 accepted rows in one manifest batch, or split them into large letter groups for easier review?
- Should a later practice-target architecture add optional production metadata for speech targets after human and clinical-safety review?

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
- Batch 8 browser verification for `/ro`, `/admin/words`, `/ro/play/sh`, `/ro/play/tz`, `/ro/play/f`, and `/ro/play/d` was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Batch 9 added no production JSON records or image assets.
- Batch 10 used the Sharp-backed repository optimizer successfully through `bun scripts/images/optimize-images.mjs --locale ro --source /private/tmp/batch10-image-sources`; direct `node` Sharp loading still fails locally with the known macOS code-signature error.
- Batch 10 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 11-word production expansion slice.
- Batch 11 added documentation only. No production JSON records, image assets, schema changes, child-facing UI, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.
- Batch 11 intentionally did not resolve `Ă`, `Â`, or `Î` ASCII ID tokens because those exact starts-with buckets do not enter the selected next scope.

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
- Batch 9 third-slice planning artifact: complete.
- Batch 9 duplicate check against approved JSON: complete.
- Batch 9 canonical file, ID, image path, category, alt direction, coverage impact, and image-readiness path review: complete.
- Batch 9 confirmation that no production JSON records, image assets, rejected or needs-revision candidates, placeholder-backed approved words, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 10 image briefs: complete.
- Batch 10 image generation and review: complete.
- Batch 10 final WebP optimization: complete.
- Batch 10 canonical JSON promotion with ready images: complete.
- Batch 10 `I` and `N` manifests, loader imports, and enabled letter entries: complete.
- Batch 10 validation and compatibility rerun: complete.
- Batch 10 confirmation that no rejected or needs-revision candidates, placeholder-backed approved words, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 11 post-Batch 10 helper-derived `/admin/words` coverage review: complete.
- Batch 11 accepted worksheet availability check: complete; 43 accepted rows, 43 implemented, 0 remaining.
- Batch 11 next scope decision: complete; select split vocabulary-first and image-second pipeline.
- Batch 11 placeholder visibility decision: complete; approved placeholder-backed words may be visible in gameplay until final per-word images exist.
- Batch 11 confirmation that no production JSON records, image assets, rejected or needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 12 vocabulary scope spec: complete; `vocabulary-scope-spec-batch-12.md` defines 126 accepted placeholder-ready rows.
- Batch 12 research/source recording: complete.
- Batch 12 target sound, sound position, syllable complexity, consonant cluster, contrast, age fit, imageability, safety, and expected coverage impact tracking: complete in docs only.
- Batch 12 `Ă`/`Â`/`Î` ASCII convention: complete.
- Batch 12 confirmation that no production JSON records, image assets, rejected or needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 14 sound-coverage scope spec: complete; `sound-coverage-scope-spec-batch-14.md` defines 110 accepted candidate rows.
- Batch 14 research/source recording: complete.
- Batch 14 helper-derived baseline review for priority targets: complete.
- Batch 14 quality ceilings for `J`, `GI`, `GHE`, `GHI`, and other underfilled sequence targets: complete.
- Batch 14 start-page practice-target model for `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`: complete.
- Batch 14 confirmation that no production JSON records, UI code, image assets, rejected or held candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.

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
- Routes use ASCII public segments: `/ro/play/sh`, `/ro/play/tz`.
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
- Browser verification for `/ro`, `/admin/words`, `/ro/play/sh`, `/ro/play/tz`, `/ro/play/f`, `/ro/play/d`, and other affected routes remains pending until the user-running dev server is available on `http://localhost:3000`.

## Batch 9 Third Production Slice Plan

Batch 9 created `third-production-slice-batch-9.md` and did not add production JSON records or image assets.

Planned third production slice:

- `rochie`
- `rachetă`
- `iepure`
- `scaun`
- `nas`
- `urs`
- `coș`
- `cămașă`
- `dinți`
- `cățel`
- `pijama`

All 11 planned rows are accepted worksheet candidates and were confirmed not duplicated in current approved JSON by proposed ID, exact word, or normalized value.

Expected coverage if all 11 later pass image review and validation:

| Target | Current starts/contains/mixed | Planned starts/contains/mixed |
| --- | ---: | ---: |
| `R` | `3 / 22 / 25` | `5 / 24 / 29` |
| `I` | `0 / 20 / 20` | `1 / 23 / 24` |
| `S` | `6 / 7 / 13` | `7 / 9 / 16` |
| `N` | `0 / 19 / 19` | `1 / 21 / 22` |
| `U` | `1 / 12 / 13` | `2 / 14 / 16` |
| `C` | `13 / 13 / 26` | `16 / 16 / 32` |
| `D` | `1 / 4 / 5` | `2 / 4 / 6` |
| `P` | `10 / 8 / 18` | `11 / 9 / 20` |
| `Ș` | `3 / 6 / 9` | `3 / 8 / 11` |
| `Ț` | `1 / 4 / 5` | `1 / 6 / 7` |
| `J` | `2 / 0 / 2` | `2 / 1 / 3` |
| `M` | `10 / 2 / 12` | `10 / 4 / 14` |
| `A` | `10 / 30 / 40` | `10 / 35 / 45` |

Expected aggregate impact:

- Approved words: `72 -> 83`.
- Ready images: `72 -> 83`.
- New canonical starts-with buckets after approval: `I` and `N`.
- Existing buckets strengthened: `C`, `D`, `P`, `R`, `S`, and `U`.
- Contains-only coverage improves for high-value targets including `R`, `S`, `Ș`, `Ț`, and `J`.

Readiness path:

- Batch 10 should create image briefs before any JSON promotion.
- Batch 10 should generate or assign reviewed pixel-art images, stage source images under `assets/image-sources/ro/<letter>/<word-id>.png`, and optimize final WebP assets to `public/images/ro/<letter>/<word-id>.webp`.
- New `I` and `N` letter buckets should be added and enabled only when `iepure` and `nas` have ready reviewed images.
- Draft-only metadata remains blocked unless the human explicitly approves that tradeoff.

Batch 10 implemented this planned third slice. No Batch 9 planned row remains pending.

## Batch 10 Production Impact

Batch 10 promoted the 11 Batch 9 planned rows after image brief review, source image review, WebP optimization, and automated validation. Approved gameplay and `/admin/words` coverage now include these words.

| Word | Canonical file | Worksheet row | Status now | Starts-with impact | Contains and speech-target impact |
| --- | --- | ---: | --- | --- | --- |
| `rochie` | `words-r.json` | 4 | approved, ready image | `R` +1 | contains `C` and `I`; initial `R` context |
| `rachetă` | `words-r.json` | 5 | approved, ready image | `R` +1 | contains `A` and `C`; toy-rocket image constrained as child-safe |
| `iepure` | `words-i.json` | 8 | approved, ready image | `I` +1 | contains `P`, `R`, and `U`; first `I` starts-with candidate |
| `scaun` | `words-s.json` | 18 | approved, ready image | `S` +1 | contains `A`, `C`, `N`, and `U` |
| `nas` | `words-n.json` | 20 | approved, ready image | `N` +1 | contains `A` and final `S`; first `N` starts-with candidate |
| `urs` | `words-u.json` | 21 | approved, ready image | `U` +1 | contains `R` and final `S` |
| `coș` | `words-c.json` | 31 | approved, ready image | `C` +1 | final `Ș`; improves contains-only `Ș` |
| `cămașă` | `words-c.json` | 32 | approved, ready image | `C` +1 | contains `A`, `M`, and medial `Ș` |
| `dinți` | `words-d.json` | 43 | approved, ready image | `D` +1 | contains `I`, `N`, and final `Ț` |
| `cățel` | `words-c.json` | 44 | approved, ready image | `C` +1 | medial `Ț`; puppy image distinct from existing `câine` |
| `pijama` | `words-p.json` | 56 | approved, ready image | `P` +1 | contains `A`, `I`, `J`, and `M` |

Aggregate impact:

- Approved words: `72 -> 83`.
- Ready images: `72 -> 83`.
- Placeholder images: stayed `0`.
- Enabled letters: `A`, `B`, `C`, `D`, `F`, `G`, `I`, `J`, `M`, `N`, `P`, `R`, `S`, `Ș`, `Ț`, `U`, and `Z`.
- Starts-with assignments: `83`.
- Contains-only assignments across enabled targets: `186`; this includes the new `I` and `N` enabled target pools derived from all approved words.

Affected target coverage:

| Target | Starts-with | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `A` | 10 | 35 | 45 |
| `C` | 16 | 16 | 32 |
| `D` | 2 | 4 | 6 |
| `I` | 1 | 23 | 24 |
| `J` | 2 | 1 | 3 |
| `M` | 10 | 4 | 14 |
| `N` | 1 | 21 | 22 |
| `P` | 11 | 9 | 20 |
| `R` | 5 | 24 | 29 |
| `S` | 7 | 9 | 16 |
| `Ș` | 3 | 8 | 11 |
| `Ț` | 1 | 6 | 7 |
| `U` | 2 | 14 | 16 |

Image readiness:

- All 11 Batch 10 WebP files exist at canonical paths, validate as `256 x 256 px` WebP, and are below the `20 KB` hard maximum.
- The 11 Batch 10 WebP files range from `1,482` bytes to `4,284` bytes, so none trigger the `12 KB` warning threshold.
- Content validation still reports 5 existing warning-threshold notices for older `M` and `P` images. These remain below the hard maximum and are outside the new production slice.

Content quality confirmation:

- The production slice used only accepted worksheet rows and did not add rejected or needs-revision candidates.
- No draft-only or placeholder-backed approved records were added.
- Production JSON contains only the established vocabulary fields; speech-target, target-position, syllable, cluster, contrast, therapy, and clinical metadata remain worksheet/status-only.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app. No editing, auth, database, billing, accounts, upload, CSV, AI pronunciation, or clinical-claim surface was added.

Remaining gaps after Batch 10:

- Future `Ă`, `Â`, and `Î` starting-letter word ID tokens are not yet resolved.
- `V`, `L`, and `T` still lack starts-with production buckets, though future content should not pad them with weak words.
- The next Romanian expansion step should be a scope decision batch before any further production words or images are added.

## Batch 11 Next Scope Decision

Batch 11 added `next-scope-decision-batch-11.md` and made no production content changes.

Current helper-derived `/admin/words` summary:

- Enabled letters: `17`.
- Approved words: `83`.
- Ready images: `83`.
- Placeholder images: `0`.
- Starts-with assignments: `83`.
- Contains-only assignments across enabled targets: `186`.

Batch 11 worksheet availability check:

- Batch 2 accepted rows: `43`.
- Accepted rows already implemented: `43`.
- Accepted rows still available for a production slice: `0`.

Decision:

- The next Romanian expansion step should use a split vocabulary-first and image-second pipeline.
- Batch 12 should research and specify the broader Romanian vocabulary set before JSON implementation.
- Batch 13 should implement approved words with an intentional generic placeholder image.
- Later image batches should replace placeholders with final reviewed pixel art.
- Approved placeholder-backed words may be visible in gameplay until final per-word images exist.
- Another small production slice is blocked until a new candidate worksheet is created and reviewed.
- Rejected and needs-revision Batch 2 rows remain ineligible for production.
- `Ă`, `Â`, and `Î` ASCII ID tokens are still unresolved because those buckets do not enter the selected next scope.
- Production JSON should continue to avoid speech-target, therapy, and clinical metadata until a future human-approved schema and safety review changes that boundary.

Recommended next batch:

- Batch 12 should create a researched vocabulary scope spec/worksheet with target sound, sound position, syllable complexity, consonant clusters, contrast value, age fit, imageability, safety, and expected coverage impact.
- Batch 12 should not add production JSON records or image assets.

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

Post-Batch 8 diacritic route fix verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
bun -e 'import { generateStaticParams } from "./app/[locale]/play/[letter]/page.tsx"; console.log(JSON.stringify(generateStaticParams().filter((p)=>p.letter==="sh"||p.letter==="tz"||p.letter==="ș"||p.letter==="ț")));'
git diff --check
curl -I --max-time 3 http://localhost:3000/ro/play/sh
```

Result:

- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed, including route alias assertions.
- Play route static params now include `sh` and `tz`, not raw `ș` or `ț`.
- `git diff --check` passed.
- A sandboxed `http://localhost:3000/ro/play/sh` reachability check failed. The user later clarified the app is always running on port `3000`, so future agents should retry localhost checks outside the sandbox before treating the server as unavailable.

Batch 9 verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
Browser checks:
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

Result:

- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro`, `/admin/words`, `/ro/play/sh`, `/ro/play/tz`, `/ro/play/r`, `/ro/play/s`, `/ro/play/c`, `/ro/play/d`, `/ro/play/p`, and `/ro/play/u`.
- `/ro` and `/admin/words` both expose ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 10 verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
Browser checks:
  http://localhost:3000/ro
  http://localhost:3000/admin/words
  http://localhost:3000/ro/play/r
  http://localhost:3000/ro/play/i
  http://localhost:3000/ro/play/n
  http://localhost:3000/ro/play/s
  http://localhost:3000/ro/play/c
  http://localhost:3000/ro/play/d
  http://localhost:3000/ro/play/p
  http://localhost:3000/ro/play/u
  http://localhost:3000/ro/play/sh
  http://localhost:3000/ro/play/tz
```

Result:

- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed after updating its enabled-letter expectation for the new approved letter set.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro`, `/admin/words`, `/ro/play/r`, `/ro/play/i`, `/ro/play/n`, `/ro/play/s`, `/ro/play/c`, `/ro/play/d`, `/ro/play/p`, `/ro/play/u`, `/ro/play/sh`, and `/ro/play/tz`.
- `/admin/words` shows the post-Batch 10 summary: 17 enabled letters, 83 approved words, 83 ready images, 0 placeholder images, 83 starts-with assignments, and 186 contains-only assignments.
- `/admin/words` includes `I`, `N`, all 11 new Batch 10 words, and ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 11 verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
Browser checks:
  http://localhost:3000/ro
  http://localhost:3000/admin/words
```

Result:

- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro` and `/admin/words`.
- `/ro` shows the expanded 17-letter Romanian selector.
- `/admin/words` shows the expected Batch 11 coverage baseline: 17 enabled letters, 83 approved words, 83 ready images, 0 placeholder images, 83 starts-with assignments, and 186 contains-only assignments.
- `/admin/words` still exposes ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 13 verification:

```txt
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
Browser checks:
  http://localhost:3000/ro
  http://localhost:3000/admin/words
```

Result:

- `bun run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro` and `/admin/words`.
- Implemented all 126 accepted Batch 12 rows and no rejected or needs-revision rows.
- Added enabled `E`, `H`, `Î`, `L`, `O`, `T`, and `V` letter manifest entries plus their canonical word files and loader imports.
- Added the generic app-owned placeholder asset at `/images/ro/placeholders/generic-word-placeholder.webp`.
- Updated validation so only the approved generic placeholder path can be shared across placeholder-backed approved words.
- Updated route matching for exact `Î` so `/ro/play/i-circ` resolves to bucket `î`.
- Helper-derived `/admin/words` coverage now reports 24 enabled letters, 209 approved words, 83 ready images, 126 placeholder images, 209 starts-with assignments, and 744 contains-only assignments.
- Speech-target metadata remains only in documentation; production JSON contains no therapy, syllable, cluster, or contrast fields.

## User Review After Batch 13

The user requested one more vocabulary/sound pass before image replacement:

- Important sounds should have stronger mixed/combined coverage before final image work.
- As a working threshold, important sounds should target at least `30` mixed words where quality allows.
- Current examples: `R` has `82` mixed words and is fine; `S` has `33` and is fine; `Ș` has only `22`; `J` has only `4`.
- The `/ro` starting page should add eight bottom-row practice options for the sequence targets already discussed: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- These sound targets should be added before placeholder images are replaced.

Document added:

- `sound-coverage-and-practice-targets-batch-14.md`
- `sound-coverage-scope-spec-batch-14.md`

Current helper-derived baseline after Batch 13:

| Target | Starts-with | Contains-only | Mixed | Gap to 30 mixed |
| --- | ---: | ---: | ---: | ---: |
| `ș` | 7 | 15 | 22 | 8 |
| `s` | 14 | 19 | 33 | 0 |
| `r` | 10 | 72 | 82 | 0 |
| `j` | 2 | 2 | 4 | 26 |
| `l` | 8 | 48 | 56 | 0 |
| `ț` | 1 | 13 | 14 | 16 |
| `z` | 4 | 8 | 12 | 18 |
| `ce` | 1 | 1 | 2 | 28 |
| `ci` | 2 | 3 | 5 | 25 |
| `ge` | 2 | 2 | 4 | 26 |
| `gi` | 1 | 0 | 1 | 29 |
| `che` | 0 | 3 | 3 | 27 |
| `chi` | 0 | 1 | 1 | 29 |
| `ghe` | 1 | 1 | 2 | 28 |
| `ghi` | 1 | 1 | 2 | 28 |

## Batch 14 Result

Batch 14 completed the sound-coverage scope and practice-target planning pass without adding production JSON records or UI code.

Research/source basis recorded:

- Romanian early-education guidance for vocabulary growth, image/object sorting, and sound-awareness games.
- Romanian early-education curriculum for phonetic discrimination, sound-letter association, initial/final sound naming, and syllable work.
- Romanian child phonology research for fricatives, affricates, and liquids as meaningful review targets.
- Recognized Romanian logopedie materials for `J`, `Z/J`, and `Ț`.
- Romanian phonetics/phonology references for `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` as sequences rather than alphabet letters.
- DEXOnline as the lexical/spelling spot-check source pattern for accepted rows.

Accepted scope:

- `110` unique accepted candidate rows in `sound-coverage-scope-spec-batch-14.md`.
- Every candidate row has source tags or an explicit internal Word Wheel review note.
- Rejected and held rows are documented so later agents do not pad counts with unsafe, adult, abstract, text-heavy, obscure, or visually weak words.
- The eight bottom-row options are specified as separate sequence practice targets, not entries in `content/ro/letters.json`.

Expected helper-derived impact if Batch 15 implements all accepted rows:

| Target | Current mixed | Expected mixed | Decision |
| --- | ---: | ---: | --- |
| `ș` | 22 | 36 | Clears the `30` target. |
| `j` | 4 | 14 | Quality ceiling; do not pad to `30`. |
| `ț` | 14 | 36 | Clears the `30` target. |
| `z` | 12 | 31 | Clears the `30` target. |
| `ce` | 2 | 14 | Improves sequence pool; below `30` by quality ceiling. |
| `ci` | 5 | 14 | Improves sequence pool; below `30` by quality ceiling. |
| `ge` | 4 | 10 | Improves sequence pool; below `30` by quality ceiling. |
| `gi` | 1 | 4 | Severe quality ceiling; do not pad. |
| `che` | 3 | 10 | Improves sequence pool; below `30` by quality ceiling. |
| `chi` | 1 | 9 | Improves sequence pool; below `30` by quality ceiling. |
| `ghe` | 2 | 8 | Quality ceiling; do not pad. |
| `ghi` | 2 | 8 | Quality ceiling; do not pad. |

Production count impact if fully implemented:

- Approved Romanian words: `209 -> 319`.
- Ready images: unchanged at `83`.
- Placeholder images: `126 -> 236`.

## Next Batch

Batch 15: Sound Coverage Manifest Implementation And Practice Targets.

Use this status file, `plan.md`, `sound-coverage-and-practice-targets-batch-14.md`, `sound-coverage-scope-spec-batch-14.md`, `/admin/words`, helper-derived coverage, and current production JSON as the source for implementation.

Batch 15 should:

- Implement only accepted rows from `sound-coverage-scope-spec-batch-14.md`.
- Add production-quality placeholder-backed approved word records where final images are not ready.
- Keep production word JSON to the established ordinary vocabulary fields only.
- Add a separate practice-target manifest/helper for `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- Add the eight practice target options in a separate bottom section on `/ro`.
- Update `/ro/play/[letter]` static params and target resolution so letter buckets and practice targets both work.
- Use derived pools for exact sequence matching.
- Update admin coverage so practice-target counts and placeholder counts are visible/auditable.
- Update this feature status, this feature plan if implementation details materially change, and global `docs/status.md`.
- Keep Batch 15 free of rejected or held candidates, final per-word images unless explicitly approved in a changed scope, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, and clinical claims.
