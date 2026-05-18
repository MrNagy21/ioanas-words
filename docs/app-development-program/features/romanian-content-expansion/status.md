# Romanian Content Expansion Status

Last updated: 2026-05-18

## Current Phase

Phase: Batch 26 general placeholder image replacement complete; Batch 27 general placeholder image replacement proposed

Overall status: Batch 26 replaced `11` approved placeholder-backed records with reviewed final pixel-art WebP assets. Production Romanian content now has `370` approved words, `189` ready images, and `181` intentional placeholders. The slice prioritized remaining exact-`Î` and sequence-related placeholders whose generated visuals passed thumbnail review: `înger`, `gibon`, `giroscop`, `mochetă`, `machetă`, `gheară`, `ghețuș`, `argint`, `chimen`, `unghi`, and `ghișeu`. `CE` and `CHE` are now fully ready at `0` placeholders, and exact `Î` improved to `6` ready / `2` placeholder. Production word JSON still uses only ordinary vocabulary fields; speech-target, syllable, cluster, contrast, therapy, and clinical-review fields remain documentation-only. The eight sequence practice targets remain separate from `content/ro/letters.json` and stay auditable in `/admin/words`.

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
- Completed Batch 22: Diacritic And Sequence Coverage Top-Up Planning.
- Created `diacritic-and-sequence-top-up-worksheet-batch-22.md`.
- Kept Batch 22 worksheet-only with no production JSON records, image assets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Recorded accepted, held, and rejected candidate rows for underfilled `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, `GHI`, and exact `Ă`/`Â`/`Î` coverage.
- Confirmed `Ă` and `Â` remain convention-only for now, while `Î` should receive a small quality-gated exact starts-with top-up.
- Completed Batch 23: Diacritic And Sequence Top-Up Manifest Implementation.
- Implemented all `51` accepted Batch 22 worksheet rows as approved placeholder-backed records in their canonical starting-letter manifests.
- Updated gameplay compatibility expectations for the expanded sequence practice target mixed pools.
- Kept `Ă` and `Â` disabled/convention-only and added only the accepted exact-`Î` scope.
- Kept `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` as sequence practice targets outside `content/ro/letters.json`.
- Kept speech-target, syllable, cluster, contrast, therapy, and clinical metadata out of production JSON.
- Completed Batch 24: General Placeholder Image Replacement Slice 7.
- Added `image-briefs-batch-24.md` with production image briefs, review decisions, final paths, and image-readiness impact.
- Replaced 12 newly added Batch 23 placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `centură`, `covrigi`, `chiuvetă`, `geamantan`, `gelatină`, `frânghie`, `triunghi`, `dreptunghi`, `înot`, `încălțăminte`, `îmbrăcăminte`, and `încuietoare` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 24: `370` approved Romanian words, `166` ready images, and `204` placeholders.
- Confirmed exact `Î` image readiness improved to `5` ready / `3` placeholder while `Ă` and `Â` remain disabled/convention-only.
- Completed Batch 25: General Placeholder Image Replacement Slice 8.
- Added `image-briefs-batch-25.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 12 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `licurici`, `piscină`, `cerneală`, `fulgi`, `fragi`, `ghemotoc`, `ghețar`, `baghetă`, `parchet`, `echer`, `ochean`, and `chipiu` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 25: `370` approved Romanian words, `178` ready images, and `192` placeholders.
- Confirmed sequence readiness improvements after Batch 25: `CE` `16` ready / `0` placeholder, `CI` `16` ready / `3` placeholder, `GI` `7` ready / `8` placeholder, `CHE` `13` ready / `2` placeholder, `CHI` `11` ready / `4` placeholder, and `GHE` `11` ready / `4` placeholder.
- Completed Batch 26: General Placeholder Image Replacement Slice 9.
- Added `image-briefs-batch-26.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 11 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `înger`, `gibon`, `giroscop`, `mochetă`, `machetă`, `gheară`, `ghețuș`, `argint`, `chimen`, `unghi`, and `ghișeu` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 26: `370` approved Romanian words, `189` ready images, and `181` placeholders.
- Confirmed sequence readiness improvements after Batch 26: `GE` `13` ready / `2` placeholder, `GI` `10` ready / `5` placeholder, `CHE` `15` ready / `0` placeholder, `CHI` `12` ready / `3` placeholder, `GHE` `13` ready / `2` placeholder, and `GHI` `13` ready / `2` placeholder.
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

- Completed Batch 16: Placeholder Image Replacement first CE/CI slice.
- Added `image-briefs-batch-16.md` with production image briefs, review decisions, final paths, and impact.
- Replaced 12 generic placeholder image records in `content/ro/words-c.json` with canonical ready image paths and meaningful alt text.
- Added final reviewed WebP assets for:
  - `ro-c-ceas`
  - `ro-c-cerb`
  - `ro-c-cerc`
  - `ro-c-cercel`
  - `ro-c-ceai`
  - `ro-c-ceasca`
  - `ro-c-cereale`
  - `ro-c-cearsaf`
  - `ro-c-ciocolata`
  - `ro-c-ciocan`
  - `ro-c-ciuperca`
  - `ro-c-ciorba`
- Confirmed the first Batch 16 slice changes production image readiness from 83 ready / 236 placeholder to 95 ready / 224 placeholder, with 319 approved words unchanged.
- Completed Batch 17: Placeholder Image Replacement Slice 2.
- Added `image-briefs-batch-17.md` with production image briefs, review decisions, final paths, and target-readiness impact.
- Replaced 12 generic placeholder image records in `content/ro/words-g.json` with canonical ready image paths and meaningful alt text.
- Added final reviewed WebP assets for:
  - `ro-g-geaca`
  - `ro-g-geanta`
  - `ro-g-genunchi`
  - `ro-g-ghete`
  - `ro-g-ghetuta`
  - `ro-g-ghem`
  - `ro-g-ghepard`
  - `ro-g-ghiozdan`
  - `ro-g-ghiveci`
  - `ro-g-ghinda`
  - `ro-g-ghiocel`
  - `ro-g-ghidon`
- Confirmed the second Batch 17 slice changes production image readiness from 95 ready / 224 placeholder to 107 ready / 212 placeholder, with 319 approved words unchanged.

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
- Batch 15 decision: implement every accepted Batch 14 row as an approved placeholder-backed production vocabulary record because the rows were already reviewed in `sound-coverage-scope-spec-batch-14.md` and the Batch 11/13 placeholder policy allows child-facing placeholder-backed words.
- Batch 15 decision: keep `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` in `content/ro/practice-targets.json` and helper APIs, not in `content/ro/letters.json`, because they are sequence practice targets rather than Romanian alphabet buckets.
- Batch 15 decision: sequence practice target routes reuse `/ro/play/<target>` and resolve after exact/alias letter routes; sequence targets default the wheel setup to mixed mode because starts-with pools are naturally small.
- Batch 15 decision: `/admin/words` should show practice-target starts, contains, mixed, ready-image, and placeholder counts so image replacement can be audited before Batch 16.
- Batch 16 decision: start placeholder replacement with a small CE/CI-focused slice because those practice targets had high-value placeholder-backed rows and all selected concepts were visually clear enough for one QA batch.
- Batch 16 decision: reject and regenerate any image that violates the image-review rules even if the rest of a generated sprite sheet is accepted; the first `ciupercă` cell was rejected because it added a face to an object.
- Batch 16 decision: palette reduction is acceptable as a post-processing step before the documented WebP optimizer when reviewed AI sources are visually good but exceed the image-size targets.
- Batch 16 decision: the next placeholder image replacement slice should prioritize remaining sequence targets, especially `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`, without adding new vocabulary or production speech-target metadata.
- Batch 17 decision: use a focused `G`-bucket sequence slice to improve `GE`, `GHE`, and `GHI` ready-image coverage while keeping JSON edits localized and visual QA manageable.
- Batch 17 decision: `genunchi` can be illustrated as a neutral bent-knee body-part icon, with no injury, medical scene, or full-person context.
- Batch 17 decision: the next placeholder image replacement slice should prioritize `CHE`, remaining `CHI`, remaining `GE/GI`, and any remaining visually straightforward `GHE/GHI` placeholders without adding new vocabulary or production speech-target metadata.
- Batch 18 decision: regenerate the contact sheet when icons are too close for clean cropping; future image sheets should use generous gutters or individual generations before cropping.
- Batch 18 decision: the next placeholder image replacement slice should prioritize the remaining `GE`, `GI`, `GHE`, and `GHI` placeholders: `alge`, `fulger`, `mărgele`, `frigider`, `pagină`, `regină`, `înghețată`, `lighean`, `spaghete`, `ghirlandă`, `ghiuvetă`, and `unghie`.
- Batch 19 decision: the next placeholder image replacement slice should prioritize remaining high-value sequence target placeholders, especially the remaining `CE` and `CI` rows, while preserving `CHE`, `CHI`, `GE`, `GI`, `GHE`, and `GHI` at `0` placeholders.
- Batch 20 decision: replace all remaining `CE` and `CI` sequence-target placeholders in one 8-word slice because the concepts were visually straightforward and the batch size stayed manageable for visual QA.
- Batch 20 decision: after this slice, the next Romanian image work can move to general high-value placeholder-backed records because all eight sequence practice targets are now at `0` placeholders.
- Batch 21 decision: start general placeholder replacement with a focused `B` slice because `/admin/words` showed many remaining `B` placeholders and the selected records were common, concrete, visually straightforward, and useful in child-facing gameplay.
- Batch 23 decision: implement every accepted Batch 22 worksheet row as approved placeholder-backed production vocabulary because the rows were already source/review checked and the existing placeholder policy allows child-facing placeholder-backed words.
- Batch 23 decision: do not enable exact `Ă` or `Â`; keep those buckets convention-only because Batch 22 did not accept strong child-facing exact starts-with vocabulary.
- Batch 23 decision: exact `Î` top-up should remain small and quality-gated; the implemented scope improves starts-with depth to `8` without forcing a `15`-word exact-`Î` quota.
- Batch 23 decision: the next Romanian content step should return to image replacement, prioritizing newly added sequence and exact-`Î` placeholders where final-image clarity is strongest.
- Batch 24 decision: use a 12-word image-only slice because the selected newly added sequence and exact-`Î` concepts were visually clear enough for one QA batch; defer weaker fantasy, people-group, frost, booth, riddle, and low-familiarity concepts to later stricter review.
- Batch 25 decision: use a 12-word image-only slice because the selected remaining sequence placeholders were concrete and visually clear enough for one QA batch; defer more abstract, people-group, broad equipment, and lower-familiarity concepts to later stricter review.
- Batch 26 decision: use an 11-word image-only slice because every prioritized candidate generated a recognizable, child-safe, text-free thumbnail; simplify the accepted contact-sheet cells to a lower pixel grid before lossless WebP encoding so the final assets stay below the `20 KB` hard maximum.
- Batch 3 source note: ASHA's Speech Sound Disorders Practice Portal keeps assessment, diagnosis, target selection, and treatment planning in the speech-language professional domain, so Word Wheel should avoid production clinical metadata and claims until a dedicated review exists: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Batch 3 source note: ASHA's 4-to-5 communication milestones and CDC's 4-year milestones support keeping the app framed as age-appropriate vocabulary/pronunciation practice, not screening or treatment: https://www.asha.org/public/developmental-milestones/communication-milestones-4-to-5-years/ and https://www.cdc.gov/act-early/milestones/4-years.html
- Batch 3 source note: Romanian diacritics should stay exact because Romanian orthography includes `Ă`, `Â`, `Î`, `Ș`, and `Ț`, with comma-below `Ș/Ț` as the modern standard form: https://european-language-equality.eu/wp-content/uploads/2022/03/ELE___Deliverable_D1_29__Language_Report_Romanian_.pdf
- Batch 4 source note: DEXOnline was spot-checked for representative selected spellings, including `rață` and `jucărie`, before adding draft production metadata: https://dexonline.ro/definitie/ra%C8%9B%C4%83 and https://dexonline.ro/definitie/juc%C4%83rie
- Batch 7 source note: Next.js App Router dynamic segments and `generateStaticParams` support known dynamic route params, which fits exact letter IDs in `/ro/play/[letter]`: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- Batch 7 source note, updated after the reported route issue: URL percent-encoding is expected for URL characters outside simple ASCII contexts, so `Ș` and `Ț` play routes now use ASCII route segments to avoid diacritic path issues while preserving exact internal content IDs: https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

## Open Questions

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
- Batch 5 could not use the Sharp-backed `pnpm run optimize:images -- --locale ro` execution path because local Sharp loading failed with the known macOS code-signature error. The documented optimizer dry run passed, then final Batch 5 assets were written with local `cwebp` from reviewed 256 px staged PNG sources.
- Batch 5 browser verification was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Batch 6 could not run `pnpm run validate:content` or `pnpm run lint` because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- Batch 6 `pnpm run build` was attempted and remains blocked by the local Next SWC darwin/arm64 code-signature error.
- Batch 6 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 15-word production expansion slice.
- Batch 6 browser verification for `/ro`, `/admin/words`, and affected `/ro/play/<letter>` routes was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Browser verification for `/admin/words` was skipped in Batch 3 because no visual admin changes were made and `http://localhost:3000` was not reachable.
- Browser verification for `/admin/words` was skipped in Batch 1 because `http://localhost:3000` was not reachable.
- No dev server was started.
- Batch 7 added validator support for the `Ș`/`Ț` ASCII word ID convention, but added no production word manifests or image assets.
- Batch 7 browser verification was skipped because no child-facing content or UI changed and no words were promoted to approved.
- Batch 8 could not run `pnpm run validate:content` or `pnpm run lint` because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- Batch 8 did not use the Sharp-backed optimizer path because local Sharp loading still fails with the known macOS code-signature error; final Batch 8 assets were written with local `cwebp` from reviewed 256 px staged PNG sources.
- Batch 8 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 17-word production expansion slice.
- Batch 8 browser verification for `/ro`, `/admin/words`, `/ro/play/sh`, `/ro/play/tz`, `/ro/play/f`, and `/ro/play/d` was skipped because no user-running dev server was listening at `http://localhost:3000`.
- Batch 9 added no production JSON records or image assets.
- Batch 10 used the Sharp-backed repository optimizer successfully through `pnpm run optimize:images -- --locale ro --source /private/tmp/batch10-image-sources`; direct `node` Sharp loading still fails locally with the known macOS code-signature error.
- Batch 10 content validation still reports existing warning-threshold notices for 5 older `M` and `P` images; all are below the `20 KB` hard maximum and none belong to the new 11-word production expansion slice.
- Batch 11 added documentation only. No production JSON records, image assets, schema changes, child-facing UI, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.
- Batch 11 intentionally did not resolve `Ă`, `Â`, or `Î` ASCII ID tokens because those exact starts-with buckets do not enter the selected next scope.
- Batch 17 visual Browser automation could not be run because the in-app Browser execution tool was not exposed in that session and no local Playwright/Chromium binary was available. The required localhost route checks were retried outside the sandbox and passed for `/ro`, `/admin/words`, `/ro/play/g`, `/ro/play/ge`, `/ro/play/ghe`, `/ro/play/ghi`, and `/ro/play/chi`.
- Batch 18 in-app Browser route checks passed for `/ro`, `/admin/words`, `/ro/play/che`, `/ro/play/chi`, `/ro/play/b`, `/ro/play/c`, `/ro/play/o`, `/ro/play/p`, `/ro/play/r`, and `/ro/play/u`. `/admin/words`, `/ro/play/che`, and `/ro/play/chi` exposed Batch 18 ready image refs; affected canonical letter routes loaded successfully, with bounded/random wheel subsets noted where a single load does not guarantee every new word is visible.
- Batch 19 preserved the existing dirty worktree from prior batches and added only image assets, placeholder-to-ready image metadata changes, and documentation updates for the new slice.

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
- Batch 15 accepted sound-coverage manifest implementation: complete; all 110 accepted Batch 14 rows are approved placeholder-backed production records.
- Batch 15 practice-target manifest/helper implementation: complete; `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` are separate enabled sequence targets outside `letters.json`.
- Batch 15 `/ro` start-page practice target section: complete.
- Batch 15 `/ro/play/<target>` route generation and target resolution for letters plus practice targets: complete.
- Batch 15 `/admin/words` practice-target coverage and placeholder-count audit surface: complete.
- Batch 15 confirmation that no rejected, held, or needs-revision candidates, final per-word images, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 16 first CE/CI placeholder replacement slice: complete.
- Batch 16 image briefs and review record: complete; see `image-briefs-batch-16.md`.
- Batch 16 generated and visually reviewed 12 child-safe, text-free, logo-free, brand-free pixel-art images for `ceas`, `cerb`, `cerc`, `cercel`, `ceai`, `ceașcă`, `cereale`, `cearșaf`, `ciocolată`, `ciocan`, `ciupercă`, and `ciorbă`.
- Batch 16 rejected the first `ciupercă` sprite-sheet cell because it added a face to an object, then regenerated and accepted a clean mushroom icon.
- Batch 16 palette-reduced the accepted source PNGs, optimized final canonical WebP assets under `public/images/ro/c/`, and confirmed all 12 final assets are `256 x 256 px` and below the `20 KB` hard maximum.
- Batch 16 promoted the 12 affected `words-c.json` records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 16 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 17 second `G`-sequence placeholder replacement slice: complete.
- Batch 17 image briefs and review record: complete; see `image-briefs-batch-17.md`.
- Batch 17 generated and visually reviewed 12 child-safe, text-free, logo-free, brand-free pixel-art images for `geacă`, `geantă`, `genunchi`, `ghete`, `ghetuță`, `ghem`, `ghepard`, `ghiozdan`, `ghiveci`, `ghindă`, `ghiocel`, and `ghidon`.
- Batch 17 palette-reduced the accepted source PNGs, optimized final canonical WebP assets under `public/images/ro/g/`, and confirmed all 12 final assets are `256 x 256 px` and below the `20 KB` hard maximum.
- Batch 17 promoted the 12 affected `words-g.json` records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 17 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 18 third `CHE`/`CHI` placeholder replacement slice: complete.
- Batch 18 image briefs and review record: complete; see `image-briefs-batch-18.md`.
- Batch 18 generated and visually reviewed 15 child-safe, text-free, logo-free, brand-free pixel-art images for `cheie`, `chec`, `buchet`, `caschetă`, `ochelari`, `pachet`, `ridiche`, `ureche`, `chitară`, `chiflă`, `chiftea`, `chioșc`, `cochilie`, `ochi`, and `unchi`.
- Batch 18 regenerated the contact sheet with larger gutters after cropability review, then cropped, background-normalized, palette-reduced, optimized final canonical WebP assets under `public/images/ro/`, and confirmed all 15 final assets are below the `20 KB` hard maximum.
- Batch 18 promoted the 15 affected production records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 18 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 19 fourth `GE`/`GI`/`GHE`/`GHI` placeholder replacement slice: complete.
- Batch 19 image briefs and review record: complete; see `image-briefs-batch-19.md`.
- Batch 19 generated and visually reviewed 12 child-safe, text-free, logo-free, brand-free pixel-art images for `alge`, `fulger`, `mărgele`, `frigider`, `pagină`, `regină`, `înghețată`, `lighean`, `spaghete`, `ghirlandă`, `ghiuvetă`, and `unghie`.
- Batch 19 cropped the generated contact sheet with generous gutters, background-normalized the accepted source cells, palette-reduced them, optimized final canonical WebP assets under `public/images/ro/`, and confirmed all 12 final assets are `256 x 256 px` and below the `20 KB` hard maximum.
- Batch 19 promoted the 12 affected production records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 19 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 20 fifth `CE`/`CI` placeholder replacement slice: complete.
- Batch 20 image briefs and review record: complete; see `image-briefs-batch-20.md`.
- Batch 20 generated and visually reviewed 8 child-safe, text-free, logo-free, brand-free pixel-art images for `ceară`, `cetate`, `purcel`, `căciulă`, `cizmă`, `cioc`, `ciucure`, and `rădăcină`.
- Batch 20 cropped the generated contact sheet with generous gutters, background-normalized the accepted source cells, palette-reduced them, optimized final canonical WebP assets under `public/images/ro/`, and confirmed all 8 final assets are `256 x 256 px` and below the `20 KB` hard maximum.
- Batch 20 promoted the 8 affected production records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 20 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.
- Batch 21 sixth general placeholder replacement slice: complete.
- Batch 21 image briefs and review record: complete; see `image-briefs-batch-21.md`.
- Batch 21 generated and visually reviewed 12 child-safe, text-free, logo-free, brand-free pixel-art images for `balon`, `banană`, `barcă`, `bec`, `biscuit`, `broască`, `brânză`, `băț`, `buburuză`, `bagaj`, `barză`, and `buzunar`.
- Batch 21 cropped the generated contact sheet with generous gutters, background-normalized the accepted source cells, palette-reduced them, optimized final canonical WebP assets under `public/images/ro/b/`, and confirmed all 12 final assets are `256 x 256 px` and below the `20 KB` hard maximum.
- Batch 21 promoted the 12 affected `words-b.json` records from the generic placeholder to ready app-owned image paths with meaningful alt text.
- Batch 21 confirmation that no new vocabulary, rejected/held/needs-revision candidates, speech-target JSON metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added: complete.

## Batch 5 Production Impact

Batch 5 promoted the 15 Batch 4 draft records after image review and validation. Approved gameplay and `/admin/words` coverage now include these words.

| Word      | Canonical file | Worksheet row | Status now            | Starts-with impact | Contains and speech-target impact                  |
| --------- | -------------- | ------------: | --------------------- | ------------------ | -------------------------------------------------- |
| `braț`    | `words-b.json` |            40 | approved, ready image | `B` +1             | final `Ț`; contains-only `R`; complex `br` cluster |
| `buză`    | `words-b.json` |            51 | approved, ready image | `B` +1             | medial `Z`                                         |
| `geam`    | `words-g.json` |            66 | approved, ready image | `G` +1             | initial watchlist `GE/GI`                          |
| `gheață`  | `words-g.json` |            41 | approved, ready image | `G` +1             | medial `Ț`                                         |
| `jucărie` | `words-j.json` |            54 | approved, ready image | `J` +1             | initial `J`; medial `R`                            |
| `jachetă` | `words-j.json` |            55 | approved, ready image | `J` +1             | initial `J`                                        |
| `rață`    | `words-r.json` |             1 | approved, ready image | `R` +1             | initial `R`; medial `Ț`                            |
| `roată`   | `words-r.json` |             2 | approved, ready image | `R` +1             | initial `R`                                        |
| `robot`   | `words-r.json` |             3 | approved, ready image | `R` +1             | initial `R`                                        |
| `soare`   | `words-s.json` |            14 | approved, ready image | `S` +1             | initial `S`; medial `R`                            |
| `suc`     | `words-s.json` |            15 | approved, ready image | `S` +1             | initial short `S`                                  |
| `săpun`   | `words-s.json` |            22 | approved, ready image | `S` +1             | initial `S`                                        |
| `ușă`     | `words-u.json` |            30 | approved, ready image | `U` +1             | medial `Ș`; improves contains-only `Ș`             |
| `zebră`   | `words-z.json` |            45 | approved, ready image | `Z` +1             | initial `Z`; medial `R`; `br` cluster              |
| `zăpadă`  | `words-z.json` |            46 | approved, ready image | `Z` +1             | initial `Z`; medial `D`                            |

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
| ------ | ----------: | ------------: | ----: | -----------: | -------------: | -----------------: |
| `A`    |          10 |            20 |    30 |           10 |             20 |                  0 |
| `B`    |           2 |             5 |     7 |            2 |              5 |                  0 |
| `C`    |          10 |            10 |    20 |           10 |             10 |                  0 |
| `G`    |           2 |             1 |     3 |            2 |              1 |                  0 |
| `J`    |           2 |             0 |     2 |            2 |              0 |                  0 |
| `M`    |          10 |             1 |    11 |           10 |              1 |                  0 |
| `P`    |          10 |             5 |    15 |           10 |              5 |                  0 |
| `R`    |           3 |            16 |    19 |            3 |             16 |                  0 |
| `S`    |           3 |             5 |     8 |            3 |              5 |                  0 |
| `U`    |           1 |            11 |    12 |            1 |             11 |                  0 |
| `Z`    |           2 |             2 |     4 |            2 |              2 |                  0 |

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
| ------ | ----------------------------: | ----------------------------: |
| `Ș`    |                   `0 / 5 / 5` |                   `3 / 6 / 9` |
| `Ț`    |                   `0 / 3 / 3` |                   `1 / 4 / 5` |
| `S`    |                   `3 / 5 / 8` |                  `6 / 7 / 13` |
| `Z`    |                   `2 / 2 / 4` |                   `3 / 3 / 6` |
| `GE`   |                   `1 / 1 / 2` |                   `2 / 2 / 4` |
| `GI`   |                   `0 / 0 / 0` |                   `1 / 0 / 1` |
| `CE`   |                   `0 / 0 / 0` |                   `1 / 1 / 2` |
| `CI`   |                   `0 / 1 / 1` |                   `2 / 2 / 4` |
| `F`    |                   `0 / 1 / 1` |                   `2 / 2 / 4` |
| `D`    |                   `0 / 3 / 3` |                   `1 / 4 / 5` |

Batch 8 implemented this planned second slice. No Batch 7 planned row remains pending.

## Batch 8 Production Impact

Batch 8 promoted the 17 Batch 7 planned rows after image brief review, source image review, WebP optimization, and automated validation. Approved gameplay and `/admin/words` coverage now include these words.

| Word        | Canonical file | Worksheet row | Status now            | Starts-with impact | Contains and speech-target impact                       |
| ----------- | -------------- | ------------: | --------------------- | ------------------ | ------------------------------------------------------- |
| `șapcă`     | `words-ș.json` |            25 | approved, ready image | `Ș` +1             | initial `Ș`; `S/Ș` contrast context                     |
| `șosetă`    | `words-ș.json` |            27 | approved, ready image | `Ș` +1             | initial `Ș`; medial `S`                                 |
| `șoricel`   | `words-ș.json` |            29 | approved, ready image | `Ș` +1             | initial `Ș`; medial `R`                                 |
| `țestoasă`  | `words-ț.json` |            36 | approved, ready image | `Ț` +1             | initial `Ț`; medial/final `S`                           |
| `sanie`     | `words-s.json` |            13 | approved, ready image | `S` +1             | simple initial `S`                                      |
| `salată`    | `words-s.json` |            17 | approved, ready image | `S` +1             | simple initial `S`                                      |
| `sandale`   | `words-s.json` |            23 | approved, ready image | `S` +1             | simple initial `S`                                      |
| `zar`       | `words-z.json` |            47 | approved, ready image | `Z` +1             | initial `Z`; final `R`                                  |
| `gem`       | `words-g.json` |            67 | approved, ready image | `G` +1             | initial watchlist `GE`                                  |
| `girafă`    | `words-g.json` |            68 | approved, ready image | `G` +1             | initial watchlist `GI`; medial `R` and `F`              |
| `ceapă`     | `words-c.json` |            60 | approved, ready image | `C` +1             | initial watchlist `CE`                                  |
| `cireșe`    | `words-c.json` |            62 | approved, ready image | `C` +1             | initial watchlist `CI`; medial `Ș`                      |
| `ciorap`    | `words-c.json` |            63 | approved, ready image | `C` +1             | initial watchlist `CI`; medial `R`                      |
| `față`      | `words-f.json` |            39 | approved, ready image | `F` +1             | medial `Ț`; first `F` starts-with candidate             |
| `frunză`    | `words-f.json` |            52 | approved, ready image | `F` +1             | medial `Z`; `F/R` cluster context                       |
| `bicicletă` | `words-b.json` |            65 | approved, ready image | `B` +1             | contains `CI`; final-ish `Ț`; later-practice complexity |
| `deget`     | `words-d.json` |            69 | approved, ready image | `D` +1             | medial `GE`; first `D` starts-with candidate            |

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
| ------ | ----------------------------: | ----------------------------: |
| `R`    |                 `3 / 22 / 25` |                 `5 / 24 / 29` |
| `I`    |                 `0 / 20 / 20` |                 `1 / 23 / 24` |
| `S`    |                  `6 / 7 / 13` |                  `7 / 9 / 16` |
| `N`    |                 `0 / 19 / 19` |                 `1 / 21 / 22` |
| `U`    |                 `1 / 12 / 13` |                 `2 / 14 / 16` |
| `C`    |                `13 / 13 / 26` |                `16 / 16 / 32` |
| `D`    |                   `1 / 4 / 5` |                   `2 / 4 / 6` |
| `P`    |                 `10 / 8 / 18` |                 `11 / 9 / 20` |
| `Ș`    |                   `3 / 6 / 9` |                  `3 / 8 / 11` |
| `Ț`    |                   `1 / 4 / 5` |                   `1 / 6 / 7` |
| `J`    |                   `2 / 0 / 2` |                   `2 / 1 / 3` |
| `M`    |                 `10 / 2 / 12` |                 `10 / 4 / 14` |
| `A`    |                `10 / 30 / 40` |                `10 / 35 / 45` |

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

| Word      | Canonical file | Worksheet row | Status now            | Starts-with impact | Contains and speech-target impact                                |
| --------- | -------------- | ------------: | --------------------- | ------------------ | ---------------------------------------------------------------- |
| `rochie`  | `words-r.json` |             4 | approved, ready image | `R` +1             | contains `C` and `I`; initial `R` context                        |
| `rachetă` | `words-r.json` |             5 | approved, ready image | `R` +1             | contains `A` and `C`; toy-rocket image constrained as child-safe |
| `iepure`  | `words-i.json` |             8 | approved, ready image | `I` +1             | contains `P`, `R`, and `U`; first `I` starts-with candidate      |
| `scaun`   | `words-s.json` |            18 | approved, ready image | `S` +1             | contains `A`, `C`, `N`, and `U`                                  |
| `nas`     | `words-n.json` |            20 | approved, ready image | `N` +1             | contains `A` and final `S`; first `N` starts-with candidate      |
| `urs`     | `words-u.json` |            21 | approved, ready image | `U` +1             | contains `R` and final `S`                                       |
| `coș`     | `words-c.json` |            31 | approved, ready image | `C` +1             | final `Ș`; improves contains-only `Ș`                            |
| `cămașă`  | `words-c.json` |            32 | approved, ready image | `C` +1             | contains `A`, `M`, and medial `Ș`                                |
| `dinți`   | `words-d.json` |            43 | approved, ready image | `D` +1             | contains `I`, `N`, and final `Ț`                                 |
| `cățel`   | `words-c.json` |            44 | approved, ready image | `C` +1             | medial `Ț`; puppy image distinct from existing `câine`           |
| `pijama`  | `words-p.json` |            56 | approved, ready image | `P` +1             | contains `A`, `I`, `J`, and `M`                                  |

Aggregate impact:

- Approved words: `72 -> 83`.
- Ready images: `72 -> 83`.
- Placeholder images: stayed `0`.
- Enabled letters: `A`, `B`, `C`, `D`, `F`, `G`, `I`, `J`, `M`, `N`, `P`, `R`, `S`, `Ș`, `Ț`, `U`, and `Z`.
- Starts-with assignments: `83`.
- Contains-only assignments across enabled targets: `186`; this includes the new `I` and `N` enabled target pools derived from all approved words.

Affected target coverage:

| Target | Starts-with | Contains-only | Mixed |
| ------ | ----------: | ------------: | ----: |
| `A`    |          10 |            35 |    45 |
| `C`    |          16 |            16 |    32 |
| `D`    |           2 |             4 |     6 |
| `I`    |           1 |            23 |    24 |
| `J`    |           2 |             1 |     3 |
| `M`    |          10 |             4 |    14 |
| `N`    |           1 |            21 |    22 |
| `P`    |          11 |             9 |    20 |
| `R`    |           5 |            24 |    29 |
| `S`    |           7 |             9 |    16 |
| `Ș`    |           3 |             8 |    11 |
| `Ț`    |           1 |             6 |     7 |
| `U`    |           2 |            14 |    16 |

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
pnpm run validate:content
pnpm run lint
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.

Batch 4 verification:

```txt
pnpm run validate:content
pnpm run validate:content
pnpm run lint
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Browser verification against `http://localhost:3000/admin/words` was skipped because no user-running dev server was listening on port `3000`.

Batch 5 verification:

```txt
pnpm run validate:content
pnpm run validate:content
pnpm run lint
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
curl -I --max-time 2 http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed after updating its enabled-letter expectation for the new approved letter set.
- `pnpm run check:matching` passed.
- `git diff --check` passed after final documentation updates.
- The documented image optimizer dry run passed for staged sources.
- `pnpm run optimize:images -- --locale ro` was blocked by the local Sharp code-signature error, so Batch 5 final assets were optimized with local `cwebp` from reviewed staged PNG sources.
- `http://localhost:3000/admin/words` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 6 verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run optimize:images -- --locale ro --dry-run
pnpm run build
git diff --check
curl -I --max-time 2 http://localhost:3000
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run optimize:images -- --locale ro --dry-run` passed and found 55 staged source images.
- `pnpm run build` remains blocked by the known local Next SWC darwin/arm64 code-signature error.
- `git diff --check` passed before final documentation updates.
- `http://localhost:3000` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 7 verification:

```txt
pnpm run validate:content
pnpm run validate:content
pnpm run lint
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
curl -I --max-time 2 http://localhost:3000
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- `http://localhost:3000` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Batch 8 verification:

```txt
pnpm run validate:content
pnpm run validate:content
pnpm run lint
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
curl -I --max-time 3 http://localhost:3000/ro
```

Result:

- `pnpm run validate:content` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` could not run because `pnpm` is not installed on PATH in this environment; the documented pnpm commands should be rerun in an environment with pnpm on PATH.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed after updating its enabled-letter expectation for the new approved letter set.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- `http://localhost:3000/ro` was not reachable because no user-running dev server was listening on port `3000`; browser verification was skipped and no dev server was started.

Post-Batch 8 diacritic route fix verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
node -e 'import { generateStaticParams } from "./app/[locale]/play/[letter]/page.tsx"; console.log(JSON.stringify(generateStaticParams().filter((p)=>p.letter==="sh"||p.letter==="tz"||p.letter==="ș"||p.letter==="ț")));'
git diff --check
curl -I --max-time 3 http://localhost:3000/ro/play/sh
```

Result:

- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed, including route alias assertions.
- Play route static params now include `sh` and `tz`, not raw `ș` or `ț`.
- `git diff --check` passed.
- A sandboxed `http://localhost:3000/ro/play/sh` reachability check failed. The user later clarified the app is always running on port `3000`, so future agents should retry localhost checks outside the sandbox before treating the server as unavailable.

Batch 9 verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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

- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro`, `/admin/words`, `/ro/play/sh`, `/ro/play/tz`, `/ro/play/r`, `/ro/play/s`, `/ro/play/c`, `/ro/play/d`, `/ro/play/p`, and `/ro/play/u`.
- `/ro` and `/admin/words` both expose ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 10 verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
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

- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed after updating its enabled-letter expectation for the new approved letter set.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro`, `/admin/words`, `/ro/play/r`, `/ro/play/i`, `/ro/play/n`, `/ro/play/s`, `/ro/play/c`, `/ro/play/d`, `/ro/play/p`, `/ro/play/u`, `/ro/play/sh`, and `/ro/play/tz`.
- `/admin/words` shows the post-Batch 10 summary: 17 enabled letters, 83 approved words, 83 ready images, 0 placeholder images, 83 starts-with assignments, and 186 contains-only assignments.
- `/admin/words` includes `I`, `N`, all 11 new Batch 10 words, and ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 11 verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
Browser checks:
  http://localhost:3000/ro
  http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Browser verification passed against the local server on port `3000` for `/ro` and `/admin/words`.
- `/ro` shows the expanded 17-letter Romanian selector.
- `/admin/words` shows the expected Batch 11 coverage baseline: 17 enabled letters, 83 approved words, 83 ready images, 0 placeholder images, 83 starts-with assignments, and 186 contains-only assignments.
- `/admin/words` still exposes ASCII `Ș`/`Ț` play links (`/ro/play/sh` and `/ro/play/tz`).

Batch 13 verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
Browser checks:
  http://localhost:3000/ro
  http://localhost:3000/admin/words
```

Result:

- `pnpm run validate:content` passed for 1 locale with the existing ready-image warning-threshold notices in `words-m.json` and `words-p.json`.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
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
| ------ | ----------: | ------------: | ----: | --------------: |
| `ș`    |           7 |            15 |    22 |               8 |
| `s`    |          14 |            19 |    33 |               0 |
| `r`    |          10 |            72 |    82 |               0 |
| `j`    |           2 |             2 |     4 |              26 |
| `l`    |           8 |            48 |    56 |               0 |
| `ț`    |           1 |            13 |    14 |              16 |
| `z`    |           4 |             8 |    12 |              18 |
| `ce`   |           1 |             1 |     2 |              28 |
| `ci`   |           2 |             3 |     5 |              25 |
| `ge`   |           2 |             2 |     4 |              26 |
| `gi`   |           1 |             0 |     1 |              29 |
| `che`  |           0 |             3 |     3 |              27 |
| `chi`  |           0 |             1 |     1 |              29 |
| `ghe`  |           1 |             1 |     2 |              28 |
| `ghi`  |           1 |             1 |     2 |              28 |

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

| Target | Current mixed | Expected mixed | Decision                                               |
| ------ | ------------: | -------------: | ------------------------------------------------------ |
| `ș`    |            22 |             36 | Clears the `30` target.                                |
| `j`    |             4 |             14 | Quality ceiling; do not pad to `30`.                   |
| `ț`    |            14 |             36 | Clears the `30` target.                                |
| `z`    |            12 |             31 | Clears the `30` target.                                |
| `ce`   |             2 |             14 | Improves sequence pool; below `30` by quality ceiling. |
| `ci`   |             5 |             14 | Improves sequence pool; below `30` by quality ceiling. |
| `ge`   |             4 |             10 | Improves sequence pool; below `30` by quality ceiling. |
| `gi`   |             1 |              4 | Severe quality ceiling; do not pad.                    |
| `che`  |             3 |             10 | Improves sequence pool; below `30` by quality ceiling. |
| `chi`  |             1 |              9 | Improves sequence pool; below `30` by quality ceiling. |
| `ghe`  |             2 |              8 | Quality ceiling; do not pad.                           |
| `ghi`  |             2 |              8 | Quality ceiling; do not pad.                           |

Production count impact if fully implemented:

- Approved Romanian words: `209 -> 319`.
- Ready images: unchanged at `83`.
- Placeholder images: `126 -> 236`.

## Batch 15 Result

Batch 15 implemented the accepted sound-coverage scope and practice-target UI path.

Implemented content:

- Added all `110` accepted rows from `sound-coverage-scope-spec-batch-14.md` to canonical `content/ro/words-<letter>.json` manifests.
- Added them as `status: "approved"` and `imageStatus: "placeholder"` under the existing placeholder policy.
- Used the existing app-owned generic placeholder image for every new row.
- Kept production word records limited to ordinary vocabulary fields.
- Added no rejected, held, or needs-revision candidates.

Implemented practice targets:

- Added `content/ro/practice-targets.json` with enabled `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` sequence targets.
- Added helper APIs for enabled practice targets, route targets, start-page summaries, and admin coverage summaries.
- Added a separate bottom `Alte sunete` section on `/ro`.
- Updated `/ro/play/[letter]` static params and route resolution so enabled letters and sequence practice targets both work.
- Sequence targets use derived exact-match pools and default the wheel setup to mixed mode.
- Updated `/admin/words` to show practice-target starts, contains, mixed, ready-image, and placeholder counts.

Helper-derived production totals after Batch 15:

- Approved Romanian words: `319`.
- Ready images: `83`.
- Placeholder images: `236`.
- Starts-with assignments: `319`.
- Contains-only assignments across enabled letters: `1175`.

Helper-derived target coverage after Batch 15:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ș`    |     12 |       24 |    36 |    11 |          25 |
| `j`    |      5 |        9 |    14 |     3 |          11 |
| `ț`    |      5 |       31 |    36 |     7 |          29 |
| `z`    |      8 |       23 |    31 |     6 |          25 |
| `ce`   |     11 |        3 |    14 |     2 |          12 |
| `ci`   |      9 |        5 |    14 |     4 |          10 |
| `ge`   |      5 |        5 |    10 |     4 |           6 |
| `gi`   |      1 |        3 |     4 |     1 |           3 |
| `che`  |      2 |        8 |    10 |     2 |           8 |
| `chi`  |      4 |        5 |     9 |     1 |           8 |
| `ghe`  |      5 |        3 |     8 |     1 |           7 |
| `ghi`  |      7 |        1 |     8 |     0 |           8 |

Batch 15 QA:

- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost checks were blocked, then outside-sandbox route checks returned `200 OK` for `/ro`, `/admin/words`, and all eight sequence play routes. The in-app browser session was interrupted before a full visual pass could be completed.

## Batch 19 Result

Batch 19 completed the fourth placeholder image replacement slice without changing approved vocabulary.

Updated image records:

- `ro-a-alge`
- `ro-f-fulger`
- `ro-m-margele`
- `ro-f-frigider`
- `ro-p-pagina`
- `ro-r-regina`
- `ro-i-circ-inghetata`
- `ro-l-lighean`
- `ro-s-spaghete`
- `ro-g-ghirlanda`
- `ro-g-ghiuveta`
- `ro-u-unghie`

Helper-derived production totals after Batch 19:

- Approved Romanian words: `319`.
- Ready images: `134`.
- Placeholder images: `185`.

Helper-derived target image readiness after Batch 19:

| Target | Ready | Placeholder | Total |
| ------ | ----: | ----------: | ----: |
| `ge`   |    10 |           0 |    10 |
| `gi`   |     4 |           0 |     4 |
| `ghe`  |     8 |           0 |     8 |
| `ghi`  |     8 |           0 |     8 |
| `che`  |    10 |           0 |    10 |
| `chi`  |     9 |           0 |     9 |

Batch 19 QA:

- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed after final QA status notes.
- Sandboxed localhost checks failed for `/ro` and `/admin/words`, then the required outside-sandbox retry returned `200 OK` for both routes.
- In-app Browser route checks passed for `/ro`, `/admin/words`, `/ro/play/ge`, `/ro/play/gi`, `/ro/play/ghe`, `/ro/play/ghi`, `/ro/play/a`, `/ro/play/f`, `/ro/play/m`, `/ro/play/p`, `/ro/play/r`, `/ro/play/i-circ`, `/ro/play/l`, `/ro/play/s`, `/ro/play/g`, and `/ro/play/u`.
- `/admin/words` exposed all 12 Batch 19 ready image refs and reported `319` approved words, `134` ready images, and `185` placeholders.
- The four affected sequence target routes exposed the new ready image refs for their target pools; affected canonical letter routes loaded successfully, with bounded/random wheel subsets noted where a single load does not guarantee every new word is visible.

## Batch 20 Result

Batch 20 completed the fifth placeholder image replacement slice without changing approved vocabulary.

Updated image records:

- `ro-c-ceara`
- `ro-c-cetate`
- `ro-p-purcel`
- `ro-c-caciula`
- `ro-c-cizma`
- `ro-c-cioc`
- `ro-c-ciucure`
- `ro-r-radacina`

Helper-derived production totals after Batch 20:

- Approved Romanian words: `319`.
- Ready images: `142`.
- Placeholder images: `177`.

Helper-derived target image readiness after Batch 20:

| Target | Ready | Placeholder | Total |
| ------ | ----: | ----------: | ----: |
| `ce`   |    14 |           0 |    14 |
| `ci`   |    14 |           0 |    14 |
| `ge`   |    10 |           0 |    10 |
| `gi`   |     4 |           0 |     4 |
| `che`  |    10 |           0 |    10 |
| `chi`  |     9 |           0 |     9 |
| `ghe`  |     8 |           0 |     8 |
| `ghi`  |     8 |           0 |     8 |

Batch 20 QA:

- `pnpm run optimize:images -- --source /private/tmp/word-wheel-batch20-sources` was attempted first; it failed under `node` because Sharp hit the known local macOS code-signature issue.
- `pnpm run optimize:images -- --source /private/tmp/word-wheel-batch20-sources` passed and optimized the 8 reviewed source crops with the repository optimizer settings.
- All 8 final WebP assets are `256 x 256 px` and below the `20 KB` hard maximum.
- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost check failed for `/ro`, then the required outside-sandbox retry returned `200 OK`.
- In-app Browser route checks passed for `/ro`, `/admin/words`, `/ro/play/ce`, `/ro/play/ci`, `/ro/play/ge`, `/ro/play/gi`, `/ro/play/che`, `/ro/play/chi`, `/ro/play/ghe`, `/ro/play/ghi`, `/ro/play/c`, `/ro/play/p`, and `/ro/play/r`.
- `/admin/words` exposed all 8 Batch 20 ready image refs and reported `319` approved words, `142` ready images, and `177` placeholders.
- `/admin/words` reported every sequence practice target at `0` placeholders: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- `/ro/play/ce` exposed the new ready image refs for `ceară`, `cetate`, and `purcel`; `/ro/play/ci` exposed the new ready image refs for `căciulă`, `cizmă`, `cioc`, `ciucure`, and `rădăcină`.

## Batch 21 Result

Batch 21 completed the sixth placeholder image replacement slice without changing approved vocabulary.

Updated image records:

- `ro-b-balon`
- `ro-b-banana`
- `ro-b-barca`
- `ro-b-bec`
- `ro-b-biscuit`
- `ro-b-broasca`
- `ro-b-branza`
- `ro-b-bat`
- `ro-b-buburuza`
- `ro-b-bagaj`
- `ro-b-barza`
- `ro-b-buzunar`

Helper-derived production totals after Batch 21:

- Approved Romanian words: `319`.
- Ready images: `154`.
- Placeholder images: `165`.

Helper-derived `B` image readiness after Batch 21:

- Starts-with: `21`.
- Contains-only: `16`.
- Mixed: `37`.
- Ready images in mixed pool: `23`.
- Placeholder images in mixed pool: `14`.

Helper-derived sequence target image readiness after Batch 21:

| Target | Ready | Placeholder | Total |
| ------ | ----: | ----------: | ----: |
| `ce`   |    14 |           0 |    14 |
| `ci`   |    14 |           0 |    14 |
| `ge`   |    10 |           0 |    10 |
| `gi`   |     4 |           0 |     4 |
| `che`  |    10 |           0 |    10 |
| `chi`  |     9 |           0 |     9 |
| `ghe`  |     8 |           0 |     8 |
| `ghi`  |     8 |           0 |     8 |

Batch 21 QA:

- Generated a 4-by-3 contact sheet with generous gutters through the built-in image generation workflow.
- Used the bundled Codex Node runtime for Sharp-based cropping/background normalization because the repo-local Sharp install still hits the known local macOS code-signature issue.
- Used local `cwebp` for lossless WebP output.
- All 12 final WebP assets are `256 x 256 px` and below the `20 KB` hard maximum.
- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost check failed for `/admin/words`, then the required outside-sandbox retry returned `200 OK`.
- In-app Browser route checks passed for `/ro`, `/admin/words`, `/ro/play/b`, `/ro/play/ce`, `/ro/play/ci`, `/ro/play/ge`, `/ro/play/gi`, `/ro/play/che`, `/ro/play/chi`, `/ro/play/ghe`, and `/ro/play/ghi`.
- `/admin/words` exposed all 12 Batch 21 ready image refs and reported `319` approved words, `154` ready images, and `165` placeholders.
- `/admin/words` reported every sequence practice target at `0` placeholders: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`.
- `/ro/play/b` exposed all 12 new ready image refs with no broken images.

## Post-Test Coverage Audit

User testing on 2026-05-18 found that `0` placeholders on sequence targets is not the same as sufficient sequence depth. The current helper-derived sequence mixed-pool counts are:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ce`   |     11 |        3 |    14 |    14 |           0 |
| `ci`   |      9 |        5 |    14 |    14 |           0 |
| `ge`   |      5 |        5 |    10 |    10 |           0 |
| `gi`   |      1 |        3 |     4 |     4 |           0 |
| `che`  |      2 |        8 |    10 |    10 |           0 |
| `chi`  |      4 |        5 |     9 |     9 |           0 |
| `ghe`  |      5 |        3 |     8 |     8 |           0 |
| `ghi`  |      7 |        1 |     8 |     8 |           0 |

Exact diacritic bucket state:

- `A`: enabled with `16` approved starts-with words.
- `Ă`: convention resolved as exact bucket `ă`, route `a-breve`, and `ro-a-breve-` ID/image prefix, but not enabled because no strong exact starts-with words were accepted in Batch 12.
- `Â`: convention resolved as exact bucket `â`, route `a-circ`, and `ro-a-circ-` ID/image prefix, but not enabled because no strong exact starts-with words were accepted in Batch 12.
- `I`: enabled with `8` approved starts-with words.
- `Î`: enabled with `1` approved starts-with word, `înghețată`.

## Batch 22 Result

Batch 22 created `diacritic-and-sequence-top-up-worksheet-batch-22.md` as the planning source for the next implementation batch. It did not add production JSON records, image assets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

Projected helper-derived sequence coverage if all accepted worksheet rows pass the next implementation batch:

| Target | Projected starts | Projected contains | Projected mixed |
| ------ | ---------------: | -----------------: | --------------: |
| `ce`   |               13 |                  3 |              16 |
| `ci`   |                9 |                  8 |              17 |
| `ge`   |                9 |                  6 |              15 |
| `gi`   |                6 |                  9 |              15 |
| `che`  |                2 |                 13 |              15 |
| `chi`  |                8 |                  7 |              15 |
| `ghe`  |               11 |                  4 |              15 |
| `ghi`  |                9 |                  6 |              15 |

Exact diacritic scope decisions:

- `Ă`: keep convention-only for now; do not enable with demonstratives or weak child-facing vocabulary.
- `Â`: keep convention-only for now; do not force an exact starts-with bucket against standard Romanian orthographic constraints.
- `Î`: add a small quality-gated exact starts-with scope in the next implementation batch, but do not force a `15`-word quota.

## Batch 23 Result

Batch 23 completed the diacritic and sequence top-up manifest implementation.

Added approved placeholder-backed records:

- `A`: `argint`
- `B`: `baghetă`
- `C`: `cerneală`, `centură`, `covrigi`, `chiuvetă`, `chipiu`, `chimen`, `chiciură`
- `D`: `dreptunghi`
- `E`: `echer`, `echipă`, `echipament`
- `F`: `fulgi`, `fragi`, `frânghie`
- `G`: `gemeni`, `geamantan`, `ger`, `gelatină`, `gimnastică`, `gimnast`, `gibon`, `gigant`, `giroscop`, `ghemotoc`, `ghețar`, `gheretă`, `gheruță`, `gheară`, `ghețuș`, `ghicitoare`, `ghișeu`
- `Î`: `înger`, `înot`, `încălțăminte`, `îmbrăcăminte`, `îmbrățișare`, `împărat`, `încuietoare`
- `L`: `licurici`
- `M`: `magie`, `magician`, `mochetă`, `machetă`
- `O`: `ochean`
- `P`: `piscină`, `parchet`
- `S`: `stinghie`
- `T`: `triunghi`
- `U`: `unghi`

Helper-derived production totals after Batch 23:

- Approved Romanian words: `370`.
- Ready images: `154`.
- Placeholder images: `216`.

Helper-derived sequence target coverage after Batch 23:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ce`   |     13 |        3 |    16 |    14 |           2 |
| `ci`   |      9 |       10 |    19 |    14 |           5 |
| `ge`   |      9 |        6 |    15 |    10 |           5 |
| `gi`   |      6 |        9 |    15 |     4 |          11 |
| `che`  |      2 |       13 |    15 |    10 |           5 |
| `chi`  |      8 |        7 |    15 |     9 |           6 |
| `ghe`  |     11 |        4 |    15 |     8 |           7 |
| `ghi`  |      9 |        6 |    15 |     8 |           7 |

Exact diacritic result:

- `Î`: `8` starts-with, `0` contains-only, `8` mixed.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 23 QA:

- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed after updating the expected sequence mixed-pool counts.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro` and `/admin/words`, then the required outside-sandbox retry returned `200 OK` for both routes.
- Outside-sandbox route checks returned `200 OK` for `/ro/play/ce`, `/ro/play/ci`, `/ro/play/ge`, `/ro/play/gi`, `/ro/play/che`, `/ro/play/chi`, `/ro/play/ghe`, `/ro/play/ghi`, and `/ro/play/i-circ`.

## Batch 24 Result

Batch 24 completed the seventh placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `C`: `centură`, `covrigi`, `chiuvetă`
- `D`: `dreptunghi`
- `F`: `frânghie`
- `G`: `geamantan`, `gelatină`
- `Î`: `înot`, `încălțăminte`, `îmbrăcăminte`, `încuietoare`
- `T`: `triunghi`

Helper-derived production totals after Batch 24:

- Approved Romanian words: `370`.
- Ready images: `166`.
- Placeholder images: `204`.

Helper-derived sequence target coverage after Batch 24:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ce`   |     13 |        3 |    16 |    15 |           1 |
| `ci`   |      9 |       10 |    19 |    14 |           5 |
| `ge`   |      9 |        6 |    15 |    12 |           3 |
| `gi`   |      6 |        9 |    15 |     5 |          10 |
| `che`  |      2 |       13 |    15 |    10 |           5 |
| `chi`  |      8 |        7 |    15 |    10 |           5 |
| `ghe`  |     11 |        4 |    15 |     8 |           7 |
| `ghi`  |      9 |        6 |    15 |    11 |           4 |

Exact diacritic image-readiness result:

- `Î`: `8` starts-with, `0` contains-only, `8` mixed, `5` ready, `3` placeholder.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 24 QA:

- `pnpm run validate:content` could not run because `pnpm` was not on this shell's PATH.
- `bun run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` could not run because `pnpm` was not on this shell's PATH.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro`, `/admin/words`, `/ro/play/i-circ`, and `/ro/play/ge`, then the required outside-sandbox retry returned `200 OK` for all four routes.
- Outside-sandbox route checks also returned `200 OK` for `/ro/play/ce`, `/ro/play/gi`, `/ro/play/chi`, and `/ro/play/ghi`.

## Batch 25 Result

Batch 25 completed the eighth placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `B`: `baghetă`
- `C`: `cerneală`, `chipiu`
- `E`: `echer`
- `F`: `fulgi`, `fragi`
- `G`: `ghemotoc`, `ghețar`
- `L`: `licurici`
- `O`: `ochean`
- `P`: `piscină`, `parchet`

Helper-derived production totals after Batch 25:

- Approved Romanian words: `370`.
- Ready images: `178`.
- Placeholder images: `192`.

Helper-derived sequence target coverage after Batch 25:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ce`   |     13 |        3 |    16 |    16 |           0 |
| `ci`   |      9 |       10 |    19 |    16 |           3 |
| `ge`   |      9 |        6 |    15 |    12 |           3 |
| `gi`   |      6 |        9 |    15 |     7 |           8 |
| `che`  |      2 |       13 |    15 |    13 |           2 |
| `chi`  |      8 |        7 |    15 |    11 |           4 |
| `ghe`  |     11 |        4 |    15 |    11 |           4 |
| `ghi`  |      9 |        6 |    15 |    11 |           4 |

Exact diacritic image-readiness result:

- `Î`: unchanged at `8` starts-with, `0` contains-only, `8` mixed, `5` ready, `3` placeholder.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 25 QA:

- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `bun src/game/gameplay-compatibility.check.ts` passed.
- `bun src/content/matching.check.ts` passed.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro` and `/admin/words`, then the required outside-sandbox retry returned `200 OK` for both routes.
- Outside-sandbox route checks also returned `200 OK` for `/ro/play/ce` and `/ro/play/ghe`.

## Batch 26 Result

Batch 26 completed the ninth placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `A`: `argint`
- `C`: `chimen`
- `G`: `gibon`, `giroscop`, `gheară`, `ghețuș`, `ghișeu`
- `M`: `mochetă`, `machetă`
- `U`: `unghi`
- `Î`: `înger`

Helper-derived production totals after Batch 26:

- Approved Romanian words: `370`.
- Ready images: `189`.
- Placeholder images: `181`.

Helper-derived sequence target coverage after Batch 26:

| Target | Starts | Contains | Mixed | Ready | Placeholder |
| ------ | -----: | -------: | ----: | ----: | ----------: |
| `ce`   |     13 |        3 |    16 |    16 |           0 |
| `ci`   |      9 |       10 |    19 |    16 |           3 |
| `ge`   |      9 |        6 |    15 |    13 |           2 |
| `gi`   |      6 |        9 |    15 |    10 |           5 |
| `che`  |      2 |       13 |    15 |    15 |           0 |
| `chi`  |      8 |        7 |    15 |    12 |           3 |
| `ghe`  |     11 |        4 |    15 |    13 |           2 |
| `ghi`  |      9 |        6 |    15 |    13 |           2 |

Exact diacritic image-readiness result:

- `Î`: `8` starts-with, `0` contains-only, `8` mixed, `6` ready, `2` placeholder.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 26 QA:

- `pnpm run validate:content` passed with the pre-existing five older `M`/`P` image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` passed after retrying with the nvm Node path first on `PATH`; the initial Codex-bundled Node attempt could not load the signed Next.js SWC binary.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro`, `/ro/play/ghi`, `/ro/play/i-circ`, and the new `ghișeu` asset path; required outside-sandbox retries returned `200 OK`.

## Next Batch

Batch 27: General Placeholder Image Replacement Slice 10.

Use this status file, `plan.md`, `/admin/words`, helper-derived coverage, current production JSON, `image-briefs-batch-26.md`, the image pipeline docs, and the remaining placeholder-backed words as the source for implementation.

Batch 27 should:

- Replace another focused slice of approved placeholder images with reviewed final pixel-art WebP assets.
- Prioritize common, concrete, visually clear remaining placeholders such as `capră`, `căpșună`, `clopoțel`, `colac`, `cort`, `cocoș`, `căruță`, `căsuță`, `cozonac`, `delfin`, `dovleac`, `dulap`, `elefant`, `elicopter`, `floare`, `fluture`, `fular`, `furculiță`, `umbrelă`, `ursuleț`, `vacă`, `vapor`, `vulpe`, `șopârlă`, `șarpe`, and `țânțar` if visual review succeeds.
- Defer or reject concepts that remain too abstract, broad, low-familiarity, unsafe, cluttered, or visually ambiguous for a 4-to-6-year-old wheel thumbnail.
- Use existing production records only; do not add new vocabulary, `Ă`/`Â` buckets, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Keep final assets recognizable, child-safe, text-free, brand-free, style-consistent, `256 x 256 px`, and below the `20 KB` hard maximum.
- Update image briefs/status docs and run the standard validation checks.
