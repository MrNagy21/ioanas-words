# Romanian Content Expansion Status

Last updated: 2026-06-29

## Current Phase

Phase: Batch 108 Slice 8 coverage QA and next-prompt preparation complete; Batch 107 Slice 8 production promotion complete; Batch 106 Slice 8 image/identity briefs complete; Batch 105 Slice 8 production planning complete with follow-up human decision resolved; Batch 104 Slice 7 coverage QA and next-prompt preparation complete; Batch 103 Slice 7 production promotion complete; Batch 102 Slice 7 image briefs/contact sheet complete; Batch 101 Slice 7 production planning complete; Batch 100 Slice 6 coverage QA and next-prompt preparation complete; Batch 99 Slice 6 production promotion complete; Batch 98 Slice 6 image briefs/contact sheet complete; Batch 97 Slice 6 production planning complete; Batch 96 Slice 5 coverage QA and next-prompt preparation complete; Batch 95 Slice 5 production promotion complete; Batch 94 Slice 5 image briefs/contact sheet complete; Batch 93 Slice 5 production planning complete; Batch 92 Slice 4 coverage QA and next-prompt preparation complete; Batch 91 Slice 4 production promotion complete; Batch 90 Slice 4 image briefs/contact sheet complete; Batch 89 Slice 4 production planning complete; Batch 88 Slice 3 coverage QA and next-prompt preparation complete; Batch 87 Slice 3 production promotion complete; Batch 86 Slice 3 image briefs/contact sheet complete; Batch 85 Slice 3 production planning complete; Batch 84 Slice 2 coverage QA and next-prompt preparation complete; Batch 83 Slice 2 production promotion complete; Batch 82 Slice 2 image briefs/contact sheet complete; Batch 81 Slice 2 production planning complete; Batch 80 Slice 1 coverage QA and localhost follow-up complete; Batch 79 Slice 1 production promotion complete; Batch 78 Slice 1 image briefs/contact sheet complete; Batch 77 Slice 1 planning complete; Batch 76 orchestrator scope split complete; Batch 76+ implementation orchestrator prompt prepared; Batch 75 high-value target top-up worksheet complete; Batch 74 final requirement top-up complete; Release 1/Release 2/Release 3 admin review route complete

Overall status: Batch 108 completed Slice 8 QA after the human explicitly approved promoting both `ramă` and `râmă`. Batch 106 recorded the narrow content-identity decision, Batch 107 promoted all `15` Slice 8 rows with ready images, and Batch 108 verified content, build, routes, images, Release 3, and circular-mask safety. A follow-up release-wide image-style audit found the first Slice 8 assets too smooth/CGI-like for the locked pixel-art direction; all `15` Slice 8 public WebPs were regenerated as pixel-art icons, nearest-neighbor processed, padded for circular display, and revalidated. The validator now allows only the exact Romanian `ramă` / `râmă` duplicate-normalized pair while all other duplicate normalized forms remain errors. Current production content is `599` total Romanian records, `596` approved words, `596` ready images, `0` approved placeholders, and `3` rejected audit-trail rows (`ghicitoare`, `miez`, and `stinghie`). Release 2 remains the committed frozen content release with `109` IDs, and Release 3 lists the `120` current dirty-tree additions for QA.

## Completed

- Completed Batch 108 Slice 8 coverage QA and next-prompt preparation on 2026-06-29.
- Added `slice-coverage-qa-batch-108.md` with exact Batch 107 promotion checks, identity QA for `ramă`/`râmă`, image QA, current totals, Release 3 count, verification results, localhost route targets, and the Batch 109 planning prompt.
- Completed Batch 107 Slice 8 production promotion on 2026-06-29 after the human explicitly approved promoting both `ramă` and `râmă`.
- Added `production-promotion-batch-107.md` with validator allowlist notes, production content changes, final asset sizes, totals, coverage deltas, fixture updates, and verification handoff.
- Promoted all `15` Slice 8 rows into canonical manifests: `content/ro/words-l.json`, `content/ro/words-r.json`, and `content/ro/words-s.json`.
- Added `15` final `256 x 256 px` WebP assets under `public/images/ro/l/`, `public/images/ro/r/`, and `public/images/ro/s/`; every Batch 107 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added the narrow `ramă` / `râmă` duplicate-normalized allowlist in `scripts/content/validate-content.mjs`; the two words use distinct IDs and paths: `ro-r-rama-cadru` and `ro-r-rama-vierme`.
- Added `/admin/releases/3` for the current uncommitted package and moved the dirty-tree additions there; `/admin/releases/2` remains the committed frozen Release 2 list with `109` IDs, while Release 3 lists `120` dirty-tree additions.
- Updated `src/game/gameplay-compatibility.check.ts` because `CHI` practice-target mixed coverage is now `17`.
- Confirmed post-Batch-107 totals: `599` total records, `596` approved words, `596` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Batch 107/108 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry passed against the user-running dev server on port `3000`; `/ro`, `/admin/words`, `/admin/releases/3`, `/ro/play/l`, `/ro/play/r`, `/ro/play/s`, and representative new image URLs returned `200 OK`.
- Completed follow-up Release 3 image-style audit for all `120` dirty-tree image records on 2026-06-29; regenerated the `15` Slice 8 assets as pixel-art replacements after the first Slice 8 assets were found too smooth/CGI-like for the pack direction.
- Added release-wide square and circular audit sheets under `assets/image-sources/ro/release-2-audit/`, plus `slice-8-pixel-regeneration-sheet.png` and `slice-8-pixel-circle-preview.png`.
- Completed Batch 106 Slice 8 image/identity briefs on 2026-06-29.
- Added `image-briefs-batch-106.md` with the human-approved `ramă`/`râmă` identity decision, row-major contact-sheet mapping, per-word image decisions, source artifact paths, and circular-mask review notes.
- Completed Batch 105 Slice 8 production planning on 2026-06-29.
- Added `production-slice-planning-batch-105.md` with source labels, source/spelling decisions, duplicate/collision checks, planned canonical files, stable IDs, image paths, normalized forms, metadata plans, speech-target notes, expected coverage impact, route/validation impact, active image-brief list, blocked rows, and the required `ramă`/`râmă` decision.
- Planned only the requested Slice 8 candidates, preserving Batch 76 order: `leopard`, `lână`, `lan`, `lampion`, `ramă`, `râmă`, `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`, `stea`, and `saltea`.
- Confirmed `13` rows remain active planning candidates and `2` rows are blocked. `ramă` and `râmă` are blocked because both fold to `normalized: "rama"`, both default to stable ID `ro-r-rama`, and both default to `/images/ro/r/ro-r-rama.webp`.
- Confirmed no exact word/display, normalized, planned ID, or planned image-path collisions against existing production content for the Slice 8 candidates; the only blocker is internal to the Slice 8 pair `ramă`/`râmă`.
- Confirmed Batch 105 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Completed Batch 104 Slice 7 coverage QA and next-prompt preparation on 2026-06-29.
- Added `slice-coverage-qa-batch-104.md` with exact Batch 103 promotion checks, image QA, current totals, affected coverage, Release 2 count, verification targets, localhost route targets, and the Batch 105 planning prompt.
- Completed Batch 103 Slice 7 production promotion on 2026-06-29 after the human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed while preserving image QA and circular-mask safety.
- Added `production-promotion-batch-103.md` with image-processing notes, final asset sizes, production content changes, totals, coverage deltas, fixture updates, and verification handoff.
- Promoted all `15` active Batch 102 / Slice 7 cells into canonical manifests: `content/ro/words-t.json` and `content/ro/words-l.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/t/` and `public/images/ro/l/`; every Batch 103 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added Batch 102 image-processing artifacts under `assets/image-sources/ro/batch-102/`, including `contact-sheet.png`, `final-sources/`, `work-128/`, `optimized-preview.png`, and `optimized-circular-preview.png`.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask after local padding corrections for `tuș`, `trotinetă`, `turn`, `tricicletă`, `libelulă`, and `lift`.
- Updated `/admin/releases/2` to include all `15` Batch 103 IDs; Release 2 now lists `214` dirty-tree additions for QA.
- Updated `src/game/gameplay-compatibility.check.ts` because `CI` practice-target mixed coverage is now `21`.
- Confirmed post-Batch-103 totals: `584` total records, `581` approved words, `581` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Batch 103/104 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry passed against the user-running dev server on port `3000`; `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/t`, `/ro/play/l`, and representative new image URLs returned `200 OK`.
- Completed Batch 101 Slice 7 production planning on 2026-06-29.
- Added `production-slice-planning-batch-101.md` with source labels, source/spelling decisions, duplicate/collision checks, planned canonical files, stable IDs, image paths, normalized forms, metadata plans, speech-target notes, expected coverage impact, route/validation impact, active image-brief list, and the Batch 102 prompt.
- Planned only the requested Slice 7 candidates, preserving Batch 76 order: `tuș`, `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`, `lemn`, `lacăt`, `libelulă`, and `lift`.
- Confirmed all `15` rows are Batch 75 non-hold accepted candidates and remain active planning candidates; no row was blocked at this planning stage.
- Re-ran exact word/display, normalized-form, planned ID, and planned image-path collision checks against current `content/ro/words-*.json`; no collisions were found.
- Recorded strict image/sense decisions: `tuș` must be drawing ink, not makeup/tattoo; `trusă` must be a school pencil case/art kit, not medical; `tub` must be a plain paint/squeeze tube, not medical/plumbing/lab; `telecomandă` must avoid readable buttons, letters, numbers, and brands; and `lift` must avoid floor numbers, emergency signage, or trapped-person framing.
- Confirmed Batch 101 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Set Batch 102 as the next image-generation, production-promotion, and QA batch for the active Slice 7 candidates, with the separate image-approval stop waived for this orchestrator run but QA still required.
- Completed Batch 100 Slice 6 coverage QA and next-prompt preparation on 2026-06-28.
- Added `slice-coverage-qa-batch-100.md` with exact Batch 99 promotion checks, Batch 99 asset dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, verification targets, localhost route targets, and the Batch 101 planning prompt.
- Completed Batch 99 Slice 6 production promotion on 2026-06-28 after the human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed while preserving image QA and circular-mask safety.
- Added `production-promotion-batch-99.md` with image-processing notes, final asset sizes, production content changes, totals, coverage deltas, fixture updates, and verification handoff.
- Promoted all `15` active Batch 98 / Slice 6 cells into canonical manifests: `content/ro/words-c.json`, `content/ro/words-p.json`, `content/ro/words-ș.json`, `content/ro/words-t.json`, and `content/ro/words-b.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/c/`, `public/images/ro/p/`, `public/images/ro/ș/`, `public/images/ro/t/`, and `public/images/ro/b/`; every Batch 99 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added Batch 98 image-processing artifacts under `assets/image-sources/ro/batch-98/`, including `contact-sheet.png`, `final-sources/`, `work-128/`, `optimized-preview.png`, and `optimized-circular-preview.png`.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask after local padding corrections for `coif`, `șifonier`, `cufăr`, `șah`, `șevalet`, `șofer`, and `coșuleț`.
- Updated `/admin/releases/2` to include all `15` Batch 99 IDs; Release 2 now lists `199` dirty-tree additions for QA.
- Updated `src/game/gameplay-compatibility.check.ts` because `CE` practice-target mixed coverage is now `20`.
- Confirmed post-Batch-99 totals: `569` total records, `566` approved words, `566` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 99: `C` `75` starts / `98` contains-only / `173` mixed, `P` `45` / `49` / `94`, `Ș` `27` / `34` / `61`, `T` `19` / `133` / `152`, `B` `38` / `37` / `75`, `F` `27` / `25` / `52`, `CE` `15` / `5` / `20`, `U` `11` / `137` / `148`, `R` `22` / `211` / `233`, `I` `9` / `221` / `230`, `O` `9` / `144` / `153`, `Ă` `0` / `229` / `229`, `N` `6` / `161` / `167`, `E` `9` / `236` / `245`, `A` `19` / `243` / `262`, `Ț` `14` / `50` / `64`, `L` `22` / `120` / `142`, and `H` `24` / `65` / `89`.
- Batch 99/100 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry passed against the user-running dev server on port `3000`; `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/c`, `/ro/play/p`, `/ro/play/sh`, `/ro/play/t`, `/ro/play/b`, and representative new image URLs returned `200 OK`.
- Completed Batch 98 Slice 6 image briefs/contact sheet on 2026-06-28.
- Added `image-briefs-batch-98.md` with scope guard, row-major contact-sheet mapping, human waiver note for the separate image approval stop, per-word image decisions, circular-mask corrections, image metadata, and QA requirements.
- Completed Batch 97 Slice 6 production planning on 2026-06-28.
- Added `production-slice-planning-batch-97.md` with source labels, source/spelling decisions, duplicate/collision checks, planned canonical files, stable IDs, image paths, normalized forms, metadata plans, speech-target notes, expected coverage impact, route/validation impact, active image-brief list, and the Batch 98 prompt.
- Planned only the requested Slice 6 candidates, preserving Batch 76 order: `coif`, `ceafă`, `puf`, `șifonier`, `cufăr`, `trifoi`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`, `brioșă`, and `coșuleț`.
- Confirmed all `15` rows are Batch 75 non-hold accepted candidates and remain active planning candidates; no row was blocked at this planning stage.
- Re-ran exact word/display, normalized-form, planned ID, and planned image-path collision checks against current `content/ro/words-*.json`; no collisions were found.
- Recorded current baseline coverage before Slice 6 promotion, including `C` `71` starts / `97` contains-only / `168` mixed, `P` `44` / `48` / `92`, `Ș` `19` / `32` / `51`, `T` `18` / `131` / `149`, and `B` `37` / `37` / `74`.
- Recorded that if all Slice 6 rows later pass image review and promotion, direct starts-with deltas would be `C +4`, `P +1`, `Ș +8`, `T +1`, and `B +1`; key mixed-pool deltas would include `Ș +10`, `F +7`, `O +7`, `E +6`, `R +6`, `C +5`, `I +5`, and `U +5`.
- Recorded strict image/sense decisions: `coif` must use party-hat/paper-cone sense, not helmet/armor/shame cue; `ceafă` needs neutral back-of-neck imageability review; `puf` must read as soft feather/fluff, not smoke/dust/blob; `șuncă` must be distinct from `jambon`; `șalupă` must be distinct from existing boat/ship rows; `șah` must avoid letters/numbers; `șofer` and `șotron` need person/scene thumbnail review; and `coșuleț` must stay distinct from basket near-neighbors.
- Confirmed Batch 97 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Set Batch 98 as the next image-generation, production-promotion, and QA batch for the active Slice 6 candidates, with the separate image-approval stop waived for this orchestrator run but QA still required.
- Completed Batch 96 Slice 5 coverage QA and next-prompt preparation on 2026-06-28.
- Added `slice-coverage-qa-batch-96.md` with exact Batch 95 promotion checks, Batch 95 asset dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, verification targets, localhost route targets, and the Batch 97 planning prompt.
- Completed Batch 95 Slice 5 production promotion on 2026-06-28 after the human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed while preserving image QA and circular-mask safety.
- Added `production-promotion-batch-95.md` with image-processing notes, final asset sizes, production content changes, totals, coverage deltas, fixture updates, and verification handoff.
- Promoted all `15` active Batch 94 / Slice 5 cells into canonical manifests: `content/ro/words-ș.json`, `content/ro/words-m.json`, `content/ro/words-s.json`, `content/ro/words-f.json`, `content/ro/words-a.json`, `content/ro/words-b.json`, and `content/ro/words-c.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/ș/`, `public/images/ro/m/`, `public/images/ro/s/`, `public/images/ro/f/`, `public/images/ro/a/`, `public/images/ro/b/`, and `public/images/ro/c/`; every Batch 95 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added Batch 94 image-processing artifacts under `assets/image-sources/ro/batch-94/`, including `contact-sheet.png`, `final-sources/`, `work-128/`, `final-preview.png`, `circular-preview.png`, `optimized-preview.png`, and `optimized-circular-preview.png`.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask after local padding corrections for `șuviță`, `fereastră`, `fermă`, `foarfecă`, `fântână`, and `bufniță`.
- Updated `/admin/releases/2` to include all `15` Batch 95 IDs; Release 2 now lists `184` dirty-tree additions for QA.
- Updated `src/content/matching.check.ts` and `src/game/gameplay-compatibility.check.ts` because the `F` starts-with pool excluding exact `R` now has `10` words.
- Confirmed post-Batch-95 totals: `554` total records, `551` approved words, `551` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 95: `Ș` `19` starts / `32` contains-only / `51` mixed, `M` `27` / `59` / `86`, `S` `26` / `42` / `68`, `F` `27` / `18` / `45`, `A` `19` / `239` / `258`, `B` `37` / `37` / `74`, `C` `71` / `97` / `168`, `U` `11` / `132` / `143`, `V` `26` / `24` / `50`, `I` `9` / `216` / `225`, `E` `9` / `230` / `239`, `Ă` `0` / `224` / `224`, `R` `22` / `205` / `227`, `T` `18` / `131` / `149`, `N` `6` / `157` / `163`, `O` `9` / `137` / `146`, and `G` `44` / `47` / `91`.
- Batch 95/96 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry passed against the user-running dev server on port `3000`; `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/sh`, `/ro/play/m`, `/ro/play/s`, `/ro/play/f`, `/ro/play/a`, `/ro/play/b`, `/ro/play/c`, and representative new image URLs returned `200 OK`.
- Completed Batch 94 Slice 5 image briefs/contact sheet on 2026-06-28.
- Added `image-briefs-batch-94.md` with scope guard, row-major contact-sheet mapping, human waiver note for the separate image approval stop, per-word image decisions, circular-mask corrections, image metadata, and QA requirements.
- Completed Batch 93 Slice 5 production planning on 2026-06-28.
- Added `production-slice-planning-batch-93.md` with source labels, source/spelling decisions, duplicate/collision checks, planned canonical files, stable IDs, image paths, normalized forms, metadata plans, speech-target notes, expected coverage impact, route/validation impact, active image-brief list, and the Batch 94 prompt.
- Planned only the requested Slice 5 candidates, preserving Batch 76 order: `șuviță`, `movilă`, `servietă`, `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`, `afine`, `bufniță`, and `cartof`.
- Confirmed all `15` rows are Batch 75 non-hold accepted candidates and remain active planning candidates; no row was blocked at this planning stage.
- Re-ran exact word/display, normalized-form, planned ID, and planned image-path collision checks against current `content/ro/words-*.json`; no collisions were found.
- Recorded current baseline coverage before Slice 5 promotion, including `Ș` `18` starts / `32` contains-only / `50` mixed, `F` `18` / `15` / `33`, `A` `18` / `233` / `251`, `B` `36` / `37` / `73`, and `C` `70` / `95` / `165`.
- Recorded that if all Slice 5 rows later pass image review and promotion, direct starts-with deltas would be `Ș +1`, `M +1`, `S +1`, `F +9`, `A +1`, `B +1`, and `C +1`.
- Recorded strict image/sense decisions: `șuviță` must read as a lock of hair, not thread/string; `movilă` must avoid grave/trash/mountain/blob readings; `servietă` must be school-like, not adult office; `fermă` is a small scene row; `frate` is a person row and needs style consistency; `fotografie` must be the photo object, not a camera; `foarfecă` must be child-safe; and `fântână` must use a safe fountain/well sense with no dark deep hole.
- Confirmed Batch 93 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Set Batch 94 as the next image-generation, production-promotion, and QA batch for the active Slice 5 candidates, with the separate image-approval stop waived for this orchestrator run but QA still required.
- Completed Batch 92 Slice 4 coverage QA and next-prompt preparation on 2026-06-28.
- Added `slice-coverage-qa-batch-92.md` with exact Batch 91 promotion checks, Batch 91 asset dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, verification results, localhost status, and the Batch 93 planning prompt.
- Completed Batch 91 Slice 4 production promotion on 2026-06-28 after the human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed while preserving image QA and circular-mask safety.
- Added `production-promotion-batch-91.md` with image-processing notes, circular-mask QA, final asset sizes, production content changes, totals, coverage deltas, verification, localhost status, and representative attempted image URLs.
- Promoted all `15` active Batch 90 / Slice 4 cells into canonical manifests: `content/ro/words-d.json`, `content/ro/words-v.json`, `content/ro/words-e.json`, and `content/ro/words-n.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/d/`, `public/images/ro/v/`, `public/images/ro/e/`, and `public/images/ro/n/`; every Batch 91 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added Batch 90 image-processing artifacts under `assets/image-sources/ro/batch-90/`, including `contact-sheet.png`, `final-sources/`, `work-128/`, `final-preview.png`, `circular-preview.png`, `optimized-preview.png`, and `optimized-circular-preview.png`.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask after local padding corrections for `vultur` and `valiză`; `vâslă`, `velier`, `evantai`, and `navă` also remain circle-safe.
- Updated `/admin/releases/2` to include all `15` Batch 91 IDs; Release 2 now lists `169` dirty-tree additions for QA.
- Updated `src/game/gameplay-compatibility.check.ts` because `D` starts-with coverage is now `25`.
- Confirmed post-Batch-91 totals: `539` total records, `536` approved words, `536` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 91: `D` `25` starts / `30` contains-only / `55` mixed, `V` `26` / `21` / `47`, `E` `9` / `222` / `231`, `N` `6` / `153` / `159`, `I` `9` / `208` / `217`, `A` `18` / `233` / `251`, `L` `22` / `115` / `137`, `R` `22` / `197` / `219`, `T` `18` / `125` / `143`, `Ă` `0` / `214` / `214`, `Â` `0` / `16` / `16`, and `S` `25` / `41` / `66`.
- Batch 91/92 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry passed after the user started the expected dev server on port `3000`; `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/d`, `/ro/play/v`, `/ro/play/e`, `/ro/play/n`, and representative new image URLs returned `200 OK`.
- Completed Batch 90 Slice 4 image briefs/contact sheet on 2026-06-28.
- Added `image-briefs-batch-90.md` with scope guard, row-major contact-sheet mapping, human waiver note for the separate image approval stop, brand consistency notes, circular-mask constraints, per-word briefs, generation prompt/metadata, and QA requirements.
- Created the ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-90/contact-sheet.png`; the sheet is `1536 x 1024` PNG with `15` square review cells in the planned Slice 4 order.
- Confirmed Batch 90 stayed review/contact-sheet scoped until the later Batch 91 promotion, with no production JSON records, content manifest edits, cropped production assets, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims in the brief worker step.
- Completed Batch 89 Slice 4 production planning on 2026-06-28.
- Added `production-slice-planning-batch-89.md` with source labels, source/spelling decisions, duplicate/collision checks, planned canonical files, stable IDs, image paths, normalized forms, metadata plans, speech-target notes, expected coverage impact, route/validation impact, active image-brief list, and the Batch 90 prompt.
- Planned only the requested Slice 4 candidates, preserving Batch 76 order: `disc`, `diamant`, `dungă`, `dronă`, `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, and `navă`.
- Confirmed all `15` rows are Batch 75 non-hold accepted candidates and remain active planning candidates; no row was blocked at this planning stage.
- Re-ran exact word/display, normalized-form, planned ID, and planned image-path collision checks against current `content/ro/words-*.json`; no collisions were found.
- Recorded current baseline coverage before Slice 4 promotion, including `D` `21` starts / `30` contains-only / `51` mixed, `V` `17` / `19` / `36`, `E` `8` / `218` / `226`, and `N` `5` / `147` / `152`.
- Recorded that if all Slice 4 rows later pass image review and promotion, direct starts-with deltas would be `D +4`, `V +9`, `E +1`, and `N +1`; notable mixed-pool deltas would include `V +11`, `D +4`, `E +5`, `N +7`, `I +7`, `A +7`, `L +7`, `R +4`, `T +5`, `Ă +7`, `Â +1`, and `S +2`.
- Recorded strict image/sense decisions: `disc` must be a toy/circular disc rather than CD/record/anatomy/sport-event/data-storage imagery; `dungă` must be a concrete stripe on fabric or another child-safe object; `dronă` must avoid surveillance, military, weapon, emergency, and disaster cues; `vulcan` must avoid scary/disaster framing; `val` must be one clear wave; `vâslă` needs circular-safe composition as a long object; `vultur` must avoid fierce/heraldic/national framing; `ventuză` must be a simple non-medical suction cup or hook; and `navă` must be distinct from existing `barcă` and `vapor` and from Slice 4 `velier`.
- Confirmed Batch 89 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Set Batch 90 as the next image-brief/contact-sheet batch for the active Slice 4 candidates, with a hard stop before production promotion.
- Completed Batch 88 Slice 3 coverage QA and next-prompt preparation on 2026-06-26.
- Added `slice-coverage-qa-batch-88.md` with exact Batch 87 promotion checks, Batch 87 asset dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, full verification results, localhost status, and the Batch 89 planning prompt.
- Confirmed Batch 87 promoted exactly the `15` human-approved Slice 3 rows: `jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, `drum`, `dulceață`, `dop`, `dar`, `drapel`, and `dalmațian`.
- Confirmed every Batch 87 image exists at its canonical path, is `256 x 256 px`, and is below both the `12 KB` warning threshold and the `20 KB` hard maximum; the largest Batch 87 asset is `coji` at `3,128` bytes.
- Confirmed the optimized circular preview remains acceptable, especially for `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `pajiște`, `coji`, `drapel`, and `dalmațian`.
- Recomputed current totals: `524` total Romanian records, `521` approved words, `521` ready images, `0` approved placeholders, and `3` rejected audit-trail records.
- Recomputed affected coverage: `J` `16` starts / `19` contains-only / `35` mixed and `D` `21` / `30` / `51`; other affected targets remain `A` `18` / `226` / `244`, `E` `8` / `218` / `226`, `B` `36` / `36` / `72`, `P` `44` / `48` / `92`, `M` `26` / `57` / `83`, `C` `70` / `93` / `163`, `Ă` `0` / `207` / `207`, `Ș` `18` / `32` / `50`, `Ț` `14` / `46` / `60`, `R` `22` / `193` / `215`, and `L` `22` / `108` / `130`.
- Confirmed `/admin/releases/2` includes all `15` Batch 87 IDs and has `154` dirty-tree additions.
- Batch 88 verification passed with bundled `pnpm`, bundled Node, and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- The first shell `pnpm run validate:content` attempt failed before validation ran with `fetch failed` because `node` was missing from the shell `PATH`; the required verification command passed when rerun with the bundled runtime.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry failed with `ECONNREFUSED` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/j`, `/ro/play/d`, and representative new image URLs; no alternate dev server or port was started.
- Set Batch 89 as the next planning-only production-slice batch for Slice 4: `disc`, `diamant`, `dungă`, `dronă`, `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, and `navă`.
- Completed Batch 87 Slice 3 production promotion on 2026-06-26 after the human accepted all Batch 86 images with "Images are approved, please go on."
- Added `production-promotion-batch-87.md` with image-processing notes, circular-mask QA, final asset sizes, production content changes, totals, coverage deltas, verification, localhost status, and the Batch 88 prompt.
- Promoted all `15` accepted Batch 86 cells into canonical manifests: `content/ro/words-j.json`, `content/ro/words-a.json`, `content/ro/words-e.json`, `content/ro/words-b.json`, `content/ro/words-p.json`, `content/ro/words-m.json`, `content/ro/words-c.json`, and `content/ro/words-d.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/j/`, `public/images/ro/a/`, `public/images/ro/e/`, `public/images/ro/b/`, `public/images/ro/p/`, `public/images/ro/m/`, `public/images/ro/c/`, and `public/images/ro/d/`; every Batch 87 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Added Batch 86 image-processing artifacts under `assets/image-sources/ro/batch-86/`, including `final-sources/`, `work-128/`, `final-preview.png`, `circular-preview.png`, `optimized-preview.png`, and `optimized-circular-preview.png`.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask; `jet` remains water/fountain imagery, `prăjitor` remains a toaster/appliance, `drapel` stays generic/non-national, and `dalmațian` has no firefighter or copyrighted-character cue.
- Updated `/admin/releases/2` to include the new Batch 87 IDs; Release 2 now lists `154` dirty-tree additions for QA.
- Updated `src/game/gameplay-compatibility.check.ts` because `D` starts-with coverage is now `21` and `CE` mixed coverage is now `19`.
- Confirmed post-Batch-87 totals: `524` total records, `521` approved words, `521` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 87: `J` `16` starts / `19` contains-only / `35` mixed, `D` `21` / `30` / `51`, `A` `18` / `226` / `244`, `E` `8` / `218` / `226`, `B` `36` / `36` / `72`, `P` `44` / `48` / `92`, `M` `26` / `57` / `83`, `C` `70` / `93` / `163`, `Ă` `0` / `207` / `207`, `Ș` `18` / `32` / `50`, `Ț` `14` / `46` / `60`, `R` `22` / `193` / `215`, and `L` `22` / `108` / `130`.
- Batch 87 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, and `pnpm run build`.
- Sandboxed localhost checks failed with `EPERM`, then the required outside-sandbox retry failed with `ECONNREFUSED`; no alternate dev server or port was started.
- Completed Batch 86 Slice 3 image briefs/contact sheet on 2026-06-24.
- Added `image-briefs-batch-86.md` with scope guard, row-major contact-sheet mapping, human review notes, brand consistency review, per-word briefs, generation prompt/metadata, and a human-validation gate.
- Created the ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-86/contact-sheet.png`; the sheet is `1536 x 1024` PNG with `15` square review cells in the planned Slice 3 order.
- Confirmed Batch 86 stayed review-only with no production JSON records, content manifest edits, cropped cells, optimized public WebP assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims until the later human-approved Batch 87 promotion.
- Completed Batch 85 Slice 3 production planning on 2026-06-24.
- Added `production-slice-planning-batch-85.md` with source/spelling checks, duplicate/collision checks, canonical file/ID/path plans, metadata plans, speech-target notes, route/validation impact, promotion risks, target coverage impact, active image-brief list, and the Batch 86 image-brief/contact-sheet prompt.
- Planned only the requested Slice 3 candidates, preserving Batch 76 order: `jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, `drum`, `dulceață`, `dop`, `dar`, `drapel`, and `dalmațian`.
- Confirmed no exact word/display collisions, normalized collisions, or planned ID collisions against current production content for the Slice 3 candidates.
- Recorded current baseline coverage before Slice 3 promotion, including `J` `15` starts / `11` contains-only / `26` mixed and `D` `15` / `30` / `45`.
- Recorded that if all Slice 3 rows later pass image review and promotion, the direct starts-with deltas would be `J +1`, `D +6`, `A +1`, `E +1`, `B +1`, `P +3`, `M +1`, and `C +1`.
- Recorded strict promotion risks: `jet` must use the water-jet/fountain-stream sense, not aircraft or emergency imagery; `prăjitor` must use the toaster/appliance sense; `drapel` must stay politics-free and non-national unless explicitly approved; `dalmațian` must avoid copyrighted-character cues; and scene/abstract rows need strict thumbnail review.
- Confirmed Batch 85 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Batch 85 verification passed: `git diff --check`.
- Set Batch 86 as the next image-brief/contact-sheet batch for the active Slice 3 candidates, with a hard stop before production promotion.
- Completed Batch 84 Slice 2 coverage QA and next-prompt preparation on 2026-06-24.
- Added `slice-coverage-qa-batch-84.md` with exact Batch 83 promotion checks, image dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, verification results, localhost route QA, and the Batch 85 planning prompt.
- Confirmed Batch 83 promoted exactly the `15` human-approved Slice 2 rows: `hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`, `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`, `țintă`, `ținută`, `țesătură`, and `țâșnitoare`.
- Confirmed every Batch 83 image is a canonical `256 x 256 px` WebP below `20 KB` and below the `12 KB` warning threshold.
- Confirmed the optimized circular preview remains acceptable, especially for `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare`; `țintă` remains weapon-free and `joystick` remains generic/unbranded.
- Recomputed current totals: `509` total Romanian records, `506` approved words, `506` ready images, `0` approved placeholders, and `3` rejected audit-trail records.
- Recomputed affected coverage: `H` `24` starts / `64` contains-only / `88` mixed, `J` `15` / `11` / `26`, `Ț` `14` / `44` / `58`, `S` `25` / `38` / `63`, `Ș` `18` / `31` / `49`, `T` `18` / `115` / `133`, `R` `22` / `187` / `209`, `D` `15` / `30` / `45`, and `L` `22` / `104` / `126`.
- Confirmed `/admin/releases/2` includes all `15` Batch 83 IDs and has `139` dirty-tree additions.
- Batch 84 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200 OK` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, `/images/ro/h/ro-h-ham.webp`, `/images/ro/j/ro-j-joystick.webp`, and `/images/ro/ț/ro-tz-tasnitoare.webp`.
- Set Batch 85 as the next planning-only production-slice batch for Slice 3: `jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, `drum`, `dulceață`, `dop`, `dar`, `drapel`, and `dalmațian`.
- Completed Batch 83 Slice 2 production promotion on 2026-06-24 after the human accepted all Batch 82 images with "images are fine."
- Added `production-promotion-batch-83.md` with image-processing notes, circular-mask QA, final asset sizes, production content changes, totals, coverage deltas, verification, localhost route QA, and the Batch 84 prompt.
- Promoted all `15` accepted Batch 82 cells into canonical manifests: `content/ro/words-h.json`, `content/ro/words-j.json`, and `content/ro/words-ț.json`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/h/`, `public/images/ro/j/`, and `public/images/ro/ț/`; every Batch 83 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Confirmed the optimized circular preview keeps important subject parts inside the circular mask, including the risk cells `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare`.
- Updated `/admin/releases/2` to include the new Batch 83 IDs; Release 2 now lists `139` dirty-tree additions for QA.
- Confirmed post-Batch-83 totals: `509` total records, `506` approved words, `506` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 83: `H` `24` starts / `64` contains-only / `88` mixed, `J` `15` / `11` / `26`, `Ț` `14` / `44` / `58`, `S` `25` / `38` / `63`, `Ș` `18` / `31` / `49`, `T` `18` / `115` / `133`, `R` `22` / `187` / `209`, `D` `15` / `30` / `45`, and `L` `22` / `104` / `126`.
- Batch 83 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, and `pnpm run build`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200 OK` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, `/images/ro/h/ro-h-ham.webp`, `/images/ro/j/ro-j-joystick.webp`, and `/images/ro/ț/ro-tz-tasnitoare.webp`.
- Completed Batch 82 Slice 2 image briefs/contact sheet on 2026-06-24.
- Added `image-briefs-batch-82.md` with scope guard, row-major contact-sheet mapping, human review notes, brand consistency review, per-word briefs, generation prompt/metadata, and a Batch 83 prompt gated on explicit human image acceptance.
- Created the ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-82/contact-sheet.png`; the sheet is `1536 x 1024` PNG with `15` square review cells in the planned Slice 2 order.
- Confirmed Batch 82 stayed review-only with no production JSON records, content manifest edits, cropped cells, optimized public WebP assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims until the later human-approved Batch 83 promotion.
- Completed Batch 81 Slice 2 production planning on 2026-06-24.
- Added `production-slice-planning-batch-81.md` with source/spelling checks, duplicate/collision checks, canonical file/ID/path plans, metadata plans, speech-target notes, image brief direction, route/validation impact, localhost follow-up status, and the Batch 82 image-brief/contact-sheet prompt.
- Planned the Slice 2 candidates, preserving Batch 76 order: `hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`, `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`, `țintă`, `ținută`, `țesătură`, and `țâșnitoare`.
- Confirmed no exact word/display collisions and no normalized collisions against current production content for the Slice 2 candidates.
- Recorded current baseline coverage before Slice 2 promotion: `H` `18` starts / `64` contains-only / `82` mixed, `J` `10` / `11` / `21`, and `Ț` `10` / `44` / `54`.
- Recorded that if all Slice 2 rows later pass image review and promotion, the direct starts-with deltas would be `H +6`, `J +5`, and `Ț +4`.
- Confirmed Batch 81 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Batch 81 verification passed: `git diff --check`.
- Set Batch 82 as the next image-brief/contact-sheet batch for the active Slice 2 candidates, with a hard stop before production promotion.
- Completed Batch 80 localhost follow-up QA on 2026-06-24 after the user started the expected dev server. Sandboxed localhost still failed to connect, but outside-sandbox checks returned `200 OK` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, and representative Batch 79 images for `horn`, `hol`, `horă`, `hochei`, and `hering`.
- Completed Batch 80 Slice 1 coverage QA and next-prompt preparation on 2026-06-24.
- Added `slice-coverage-qa-batch-80.md` with exact Batch 79 promotion checks, image dimensions and byte sizes, circular-mask review notes, current totals, affected coverage, Release 2 count, full verification results, localhost status, and the Batch 81 planning prompt.
- Confirmed Batch 79 promoted exactly the `15` human-approved `H` rows: `hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, and `hering`.
- Confirmed every Batch 79 image is a canonical `256 x 256 px` WebP under `public/images/ro/h/`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed the optimized circular preview remains acceptable, especially for `horn`, `hol`, `horă`, `hochei`, and `hering`.
- Recomputed current totals: `494` total Romanian records, `491` approved words, `491` ready images, `0` approved placeholders, and `3` rejected audit-trail records.
- Recomputed affected coverage: `H` `18` starts / `64` contains-only / `82` mixed, `GE` `9` / `8` / `17`, and `CHE` `2` / `15` / `17`.
- Confirmed `/admin/releases/2` includes all `15` Batch 79 IDs and now has `124` dirty-tree additions.
- Batch 80 verification passed with bundled Node and local Bun on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Initial localhost route checks for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, and representative new image URLs could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate server or port was started. This was later resolved by the Batch 80 localhost follow-up after the user started the expected dev server.
- Completed Batch 79 Slice 1 production promotion on 2026-06-23.
- Added `production-promotion-batch-79.md` with human acceptance, image-processing notes, circular-mask QA, final asset sizes, production content changes, totals, coverage deltas, verification, localhost status, and the Batch 80 prompt.
- Promoted all `15` accepted Batch 78 cells into `content/ro/words-h.json`: `hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, and `hering`.
- Added `15` final `256 x 256 px` lossless WebP assets under `public/images/ro/h/`; every Batch 79 asset is below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Confirmed the revised circular preview keeps important subject parts inside the circular mask; `horn` received extra padding after the first preview left the roof too close to the mask.
- Updated `/admin/releases/2` to include the new Batch 79 IDs; Release 2 now lists `124` dirty-tree additions for QA.
- Updated the gameplay compatibility fixture because `hamburger` increases `GE` mixed coverage to `17` and `hochei` increases `CHE` mixed coverage to `17`.
- Batch 79 verification passed with bundled Node on `PATH`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, and `pnpm run build`.
- Localhost route checks for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, and representative new images could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate server or port was started.
- Completed Batch 78 Slice 1 image briefs/contact sheet on 2026-06-23.
- Added `image-briefs-batch-78.md` with scope guard, row-major mapping, human review notes, per-word briefs, generation prompt/metadata, and a Batch 79 prompt gated on explicit human image acceptance.
- Created the ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-78/contact-sheet.png`; the sheet is `1536 x 1024` PNG with `15` square review cells in the planned Slice 1 order.
- Confirmed Batch 78 stayed review-only with no production JSON records, content manifest edits, cropped cells, optimized public WebP assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Completed Batch 77 Slice 1 planning on 2026-06-23.
- Added `production-slice-planning-batch-77.md` with source/spelling checks, duplicate/collision checks, canonical file/ID/path plans, metadata plans, speech-target notes, image brief direction, route/validation impact, and the Batch 78 image-brief/contact-sheet prompt.
- Confirmed all `15` Slice 1 rows remain active for image-brief work: `hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, and `hering`.
- Confirmed Batch 77 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Completed Batch 76 orchestrator scope split on 2026-06-23.
- Added `slice-plan-index-batch-76.md` with the accepted-pool dedupe audit, current-production collision check, exact cross-listed words, the `ramă` / `râmă` normalized/ID blocker, `11` roughly `15`-word slices, key per-slice risks, verification notes, and the Batch 77 planning-only prompt.
- Used a bounded `multi_agent_v1` worker audit for an independent read-only check; it matched the `164` accepted target entries, `161` exact unique words, three cross-listed words (`rechin`, `săgeată`, `ceafă`), and no current approved production collisions.
- Confirmed Batch 76 stayed documentation-only with no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Prepared Batch 76+ implementation orchestrator prompt on 2026-06-23.
- Added `implementation-orchestrator-prompt-batch-76.md` with the human acceptance decision, exact non-hold accepted candidate pool, excluded hold list, subagent workflow, image-validation stop gate, promotion verification checklist, browser checks, documentation requirements, and final closeout criteria.
- Completed Batch 75 high-value target top-up worksheet on 2026-06-23.
- Added `high-value-target-top-up-worksheet-batch-75.md` with a source basis, current target coverage, candidate rows, image notes, review rules, and the Batch 76 planning prompt.
- Confirmed Batch 75 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Completed Batch 74 final requirement top-up on 2026-06-13.
- Added `production-promotion-batch-74.md` with source checks, image-processing notes, asset sizes, content totals, point 2 coverage, Release 2 updates, verification, browser QA, and the release QA prompt.
- Promoted new approved rows for `ghemuit` and `burghiu`; `ghemuit` replaced the less usual `gherghef` after human review.
- Added `public/images/ro/g/ro-g-ghemuit.webp` (`3,320 B`) and `public/images/ro/b/ro-b-burghiu.webp` (`7,000 B`); both are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed post-Batch-74 totals: `479` total records, `476` approved words, `476` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed point 2 mixed coverage after Batch 74: `CE 18`, `CI 20`, `GE 16`, `GI 16`, `CHE 16`, `CHI 16`, `GHE 16`, and `GHI 15`.
- Updated `/admin/releases/2` to include `ghemuit` and `burghiu`; Release 2 now lists `109` dirty-tree additions for QA.
- Batch 74 verification passed outside the sandbox after sandboxed `pnpm` hung before script output: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- In-app Browser QA loaded `/ro`, `/admin/releases/2`, `/ro/play/ghe`, and `/ro/play/ghi`; outside-sandbox HTTP checks returned `200` for those routes plus `/images/ro/g/ro-g-ghemuit.webp` and `/images/ro/b/ro-b-burghiu.webp`.
- Completed Batch 73 production promotion on 2026-06-13.
- Added `production-promotion-batch-73.md` with human review decisions, image-processing notes, promoted asset sizes, content totals, coverage, verification, localhost route QA, and the Batch 74 prompt.
- Promoted new approved rows for `unghieră`, `pereche`, and `rechizite`.
- Replaced the existing `gheretă` production image with the human-accepted corrective image and updated its alt text; no duplicate `gheretă` row was added.
- Added `public/images/ro/u/ro-u-unghiera.webp`, `public/images/ro/p/ro-p-pereche.webp`, `public/images/ro/r/ro-r-rechizite.webp`, and replaced `public/images/ro/g/ro-g-ghereta.webp`; every Batch 73 asset is `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed post-Batch-73 totals: `477` total records, `474` approved words, `474` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Updated `/admin/releases/2` to include `unghieră`, `pereche`, and `rechizite` for Release 2 QA.
- Batch 73 verification passed outside the sandbox after sandboxed `pnpm` failed with `fetch failed`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/releases/2`, `/ro/play/ghe`, `/ro/play/ghi`, `/images/ro/u/ro-u-unghiera.webp`, and `/images/ro/r/ro-r-rechizite.webp`.
- Completed Batch 72 sequence top-up image-brief/contact-sheet preparation on 2026-06-13.
- Added `image-briefs-batch-72.md` with row-major mapping, candidate rationale, DEX/dexonline source notes, human feedback, corrective generation metadata, and the Batch 73 prompt for promoting only human-accepted cells.
- Generated the unlabeled four-cell Batch 72 review sheet at `assets/image-sources/ro/batch-72/contact-sheet.png` for `ghebe`, `ghioc`, `pereche`, and `rechizite`.
- Recorded human feedback that `rechizite` is accepted, `pereche` is accepted as a word but needs a clearer pair image, and `ghebe` / `ghioc` should be changed.
- Generated the unlabeled corrective Batch 72 review sheet at `assets/image-sources/ro/batch-72/corrective-contact-sheet-1.png` for `gheretă`, `unghieră`, and a clearer socks-based `pereche` image.
- Confirmed Batch 72 stayed review-only with no production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Updated the read-only `/admin/releases` area on 2026-06-13 so content QA can move between `/admin/releases/1` for the committed baseline and `/admin/releases/2` for the current dirty-tree additions.
- Completed Batch 71 slice coverage QA and next-prompt preparation on 2026-06-13.
- Added `slice-coverage-qa-batch-71.md` with canonical totals, Batch 70 asset QA, requested-target coverage, verification results, preserved decisions, and the Batch 72 planning prompt.
- Confirmed the Batch 70 state remains `474` total records, `471` approved words, `471` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed `răchită` was not promoted and has no production row or asset.
- Confirmed all Batch 70 assets are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Batch 71 verification passed on 2026-06-13: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/words`, `/ro/play/gi`, and representative Batch 70 image URL `/images/ro/r/ro-r-rasina.webp`.
- Redirected Batch 72 from broad planning to the focused point 2 sequence top-up review after the release-readiness check found no new Release 2 `GHE`, `GHI`, `CHE`, or `CHI` rows.
- Completed Batch 70 production promotion on 2026-06-13.
- Added `production-promotion-batch-70.md` with human review decisions, removed `răchită`, promoted rows, image QA artifacts, final asset sizes, content totals, requested-target coverage, verification, localhost route QA, and the Batch 71 prompt.
- Promoted the `14` accepted Batch 69 cells: `șnur`, `țambal`, `țipar`, `dantelă`, `degetar`, `daltă`, `dudă`, `jder`, `jambiere`, `rășină`, `bondar`, `cojoc`, `bijuterie`, and `gingie`.
- Used the first corrective sheet option for `rășină` and the first corrective sheet option for `gingie`.
- Added production WebP assets under `public/images/ro/ș`, `public/images/ro/ț`, `public/images/ro/d`, `public/images/ro/j`, `public/images/ro/r`, `public/images/ro/b`, `public/images/ro/c`, and `public/images/ro/g`; every Batch 70 asset is `256 x 256 px` and below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Confirmed post-Batch-70 totals: `474` total records, `471` approved words, `471` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 70, including `Ă` `0` starts / `196` contains / `196` mixed, `GE` `9` / `7` / `16`, `GI` `7` / `9` / `16`, `L` `22` / `98` / `120`, `R` `21` / `169` / `190`, `Ș` `18` / `30` / `48`, `T` `18` / `102` / `120`, `Ț` `10` / `44` / `54`, `B` `34` / `31` / `65`, `D` `15` / `29` / `44`, and `J` `10` / `11` / `21`.
- Updated the content-derived gameplay compatibility fixture because `degetar` increases the `GE` mixed pool from `15` to `16`, and `gingie` increases the `GI` mixed pool from `15` to `16`; the exact-size reset-regression fixture now uses the stable `CHE` mixed pool.
- Batch 70 verification passed on 2026-06-13: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/words`, `/ro/play/gi`, and representative Batch 70 image URL `/images/ro/g/ro-g-gingie.webp`.
- Set Batch 71 as the next slice coverage QA and next-prompt preparation batch.
- Completed Batch 69 corrective image pass on 2026-06-13.
- Recorded human feedback that `gingie` must clearly show gums, `rășină` must clearly come from a tree, and `răchită` should be removed because it is not familiar or inferable enough.
- Generated focused corrective sheet `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png` with four `gingie` variants in the top row and four `rășină` variants in the bottom row.
- Removed `răchită` from the active Batch 70 promotion candidate list; do not crop or promote the original Batch 69 `răchită` cell.
- Completed Batch 69 image briefs and contact sheet on 2026-06-13.
- Added `image-briefs-batch-69.md` with per-word image briefs for the original `15` review cells and revised it after human feedback to keep `14` active promotion candidates.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-69/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Generated a style comparison sheet at `assets/image-sources/ro/batch-69/comparison-sheet.png` with representative existing production assets and selected Batch 69 cells.
- Confirmed Batch 69 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points and the corrected Batch 70 prompt for human-accepted image promotion and full validation.
- Completed Batch 68 production-slice planning on 2026-06-13.
- Added `production-slice-planning-batch-68.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, preserved decisions, and the Batch 69 prompt.
- Planned the seventh requested expansion slice, later revised after human image review to the `14` active rows: `șnur`, `țambal`, `țipar`, `dantelă`, `degetar`, `daltă`, `dudă`, `jder`, `jambiere`, `rășină`, `bondar`, `cojoc`, `bijuterie`, and `gingie`.
- Confirmed Batch 68 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded revised planned coverage impact if all `14` active rows are later promoted with ready images: total would become `471` approved words and `471` ready images; requested-target deltas would be `Ă +4 contains`, `GE +1 contains`, `GI +1 starts`, `L +3 contains`, `R +1 starts/+7 contains`, `Ș +1 starts/+1 contains`, `T +4 contains`, `Ț +2 starts`, `B +2 starts/+2 contains`, `D +4 starts/+2 contains`, and `J +2 starts/+2 contains`.
- Set Batch 69 as the next image-brief/contact-sheet batch for human review.
- Completed Batch 67 slice coverage QA and next-prompt preparation on 2026-06-13.
- Added `slice-coverage-qa-batch-67.md` with canonical totals, Batch 66 asset QA, requested-target coverage, verification results, preserved decisions, and the Batch 68 planning prompt.
- Confirmed the Batch 66 state remains `460` total records, `457` approved words, `457` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed `tacâmuri` is the promoted production row and `tacâm` was not added.
- Set Batch 68 as the next planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool.
- Completed Batch 66 production promotion on 2026-06-13.
- Added `production-promotion-batch-66.md` with human review decisions, the `tacâmuri` revision, promoted rows, image QA artifacts, final asset sizes, content totals, requested-target coverage, verification plan, and the Batch 67 prompt.
- Promoted all `15` accepted Batch 65 cells: `bibliotecă`, `radiator`, `sacou`, `șoim`, `ștampilă`, `șezlong`, `tacâmuri`, `țarc`, `țiglă`, `viespe`, `șurubelniță`, `joben`, `jantă`, `coțofană`, and `jardinieră`.
- Added production WebP assets under `public/images/ro/b`, `public/images/ro/r`, `public/images/ro/s`, `public/images/ro/ș`, `public/images/ro/t`, `public/images/ro/ț`, `public/images/ro/v`, `public/images/ro/j`, and `public/images/ro/c`; every Batch 66 asset is `256 x 256 px` and below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Confirmed post-Batch-66 totals: `460` total records, `457` approved words, `457` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 66, including `Ă` `0` starts / `192` contains / `192` mixed, `Â` `0` / `13` / `13`, `L` `22` / `95` / `117`, `R` `20` / `162` / `182`, `S` `25` / `32` / `57`, `Ș` `17` / `29` / `46`, `T` `18` / `98` / `116`, `Ț` `8` / `44` / `52`, `V` `17` / `19` / `36`, `B` `32` / `29` / `61`, `D` `11` / `27` / `38`, and `J` `8` / `9` / `17`.
- Batch 66 verification passed on 2026-06-13: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/words`, affected play routes, and representative Batch 66 image URLs.
- Set Batch 67 as the next slice coverage QA and next-prompt preparation batch.
- Completed Batch 65 image briefs and contact sheet on 2026-06-13.
- Added `image-briefs-batch-65.md` with per-word image briefs for `bibliotecă`, `radiator`, `sacou`, `șoim`, `ștampilă`, `șezlong`, `tacâmuri`, `țarc`, `țiglă`, `viespe`, `șurubelniță`, `joben`, `jantă`, `coțofană`, and `jardinieră`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-65/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Generated a style comparison sheet at `assets/image-sources/ro/batch-65/comparison-sheet.png` with representative existing production assets and selected Batch 65 cells.
- Confirmed Batch 65 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points for `bibliotecă`, `radiator`, `sacou`, `șoim`, `ștampilă`, `șezlong`, `tacâmuri`, `țarc`, `țiglă`, `viespe`, `șurubelniță`, `joben`, `jantă`, `coțofană`, and `jardinieră`.
- Recorded that `șurubelniță` is diagonal and needs careful circular-mask QA if accepted, and that Batch 66 must crop/normalize accepted cells into true `256 x 256 px` square assets because the review sheet is `1536 x 1024 px`.
- Recorded the ready-to-copy Batch 66 prompt for human-accepted image promotion and full validation.
- Completed Batch 64 production-slice planning on 2026-06-13.
- Added `production-slice-planning-batch-64.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, preserved decisions, and the Batch 65 prompt.
- Planned the sixth requested expansion slice in order: `bibliotecă`, `radiator`, `sacou`, `șoim`, `ștampilă`, `șezlong`, `tacâmuri`, `țarc`, `țiglă`, `viespe`, `șurubelniță`, `joben`, `jantă`, `coțofană`, and `jardinieră`.
- Confirmed Batch 64 stayed planning-only with no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Deferred `sticluță`, `râmă`, `roză`, `șnur`, the weakest remaining obscure stretch rows, and rare-letter reopen candidates because their near-duplicate, familiarity, image-clarity, or source tradeoffs are weaker than the selected slice.
- Recorded planned coverage impact if all `15` rows are later promoted with ready images: total would become `457` approved words and `457` ready images; requested-target deltas would be `Ă +7 contains`, `Â +1 contains`, `L +5 contains`, `R +1 starts/+4 contains`, `S +1 starts/+1 contains`, `Ș +4 starts`, `T +1 starts/+4 contains`, `Ț +2 starts/+2 contains`, `V +1 starts`, `B +1 starts/+2 contains`, `D +2 contains`, and `J +3 starts`.
- Set Batch 65 as the next image-brief/contact-sheet batch for human review.
- Completed Batch 63 slice coverage QA and next-prompt preparation on 2026-06-13.
- Added `slice-coverage-qa-batch-63.md` with canonical totals, requested-target coverage, scope guard checks, Batch 62 asset dimensions and sizes, localhost route QA, verification, next-step decision, and the Batch 64 prompt.
- Confirmed the Batch 62 state remains `442` approved words, `442` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed all Batch 62 assets are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Batch 63 verification passed on 2026-06-13: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/words`, affected play routes, and representative Batch 62 image URLs.
- Set Batch 64 as the next planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool.
- Completed Batch 62 production promotion on 2026-06-12.
- Added `production-promotion-batch-62.md` with human review decisions, promoted rows, image QA artifacts, final asset sizes, content totals, coverage impact, verification, localhost route QA, and the Batch 63 prompt.
- Promoted all `15` Batch 61 accepted cells: `locomotivă`, `sac`, `soră`, `gălușcă`, `fundiță`, `punguță`, `covor`, `cravată`, `lavetă`, `porumbel`, `roabă`, `cabană`, `pădure`, `medalie`, and `bomboană`.
- Used the third spoon-based corrective sheet option for `gălușcă` after the human accepted any of the spoon-based options.
- Added production WebP assets under `public/images/ro/l`, `public/images/ro/s`, `public/images/ro/g`, `public/images/ro/f`, `public/images/ro/p`, `public/images/ro/c`, `public/images/ro/r`, `public/images/ro/m`, and `public/images/ro/b`; every Batch 62 asset is below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Confirmed post-Batch-62 totals: `445` total records, `442` approved words, `442` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Updated content-derived fixtures because `fundiță` increases the F filtered setup pool from `6` to `7`, and the previous `V` contains-only exact-size fixture is no longer exact-size after the new `V` contains additions; the exact-size visible-subset fixture now uses the stable `GE` mixed pool.
- Verification passed on 2026-06-12: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `pnpm run build`.
- Sandboxed localhost checks failed, then required outside-sandbox retries returned `200` for `/ro`, `/admin/words`, affected play routes, and representative Batch 62 image URLs.
- Set Batch 63 as the next slice coverage QA and next-prompt preparation batch.
- Completed Batch 61 image briefs and contact sheet on 2026-06-12.
- Added `image-briefs-batch-61.md` with per-word image briefs for `locomotivă`, `sac`, `soră`, `gălușcă`, `fundiță`, `punguță`, `covor`, `cravată`, `lavetă`, `porumbel`, `roabă`, `cabană`, `pădure`, `medalie`, and `bomboană`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-61/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Recorded human feedback that all first-sheet cells are pretty good except `gălușcă`, which should emphasize the singular noun more clearly.
- Generated one ordered, unlabeled corrective review sheet at `assets/image-sources/ro/batch-61/corrective-contact-sheet-1.png` with four spoon-based singular `gălușcă` options after the first corrective direction looked too much like `gomboț`.
- Confirmed Batch 61 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points for `locomotivă`, `soră`, `gălușcă`, `fundiță`, `punguță`, `covor`, `cravată`, `lavetă`, `cabană`, and `pădure`.
- Recorded the ready-to-copy Batch 62 prompt for human-accepted image promotion and full validation.
- Completed Batch 60 production-slice planning on 2026-06-12.
- Added `production-slice-planning-batch-60.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, image brief direction, preserved decisions, and a ready-to-copy Batch 61 prompt.
- Planned the fifth requested expansion slice in order: `locomotivă`, `sac`, `soră`, `gălușcă`, `fundiță`, `punguță`, `covor`, `cravată`, `lavetă`, `porumbel`, `roabă`, `cabană`, `pădure`, `medalie`, and `bomboană`.
- Confirmed all `15` planned rows remain planning-only; no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.
- Deferred `sticluță` because `sticlă` was just corrected and promoted, making the diminutive a higher visual-confusion risk for this immediate slice.
- Recorded planned coverage impact if all `15` rows are later promoted with ready images: total would become `442` approved words and `442` ready images; requested-target deltas would be `Ă +11 contains`, `L +2 starts/+3 contains`, `R +1 starts/+5 contains`, `S +2 starts`, `Ș +1 contains`, `T +3 contains`, `Ț +2 contains`, `V +4 contains`, `B +1 starts/+3 contains`, and `D +3 contains`.
- Preserved Batch 59 baseline decisions: no forced `Ă` or `Â` starts-with rows, no `Q`/`W`/`Y` padding with obscure vocabulary, no `webcam`, no `yak`, and no speech-target production metadata.
- Set Batch 61 as the next image-brief/contact-sheet batch for human review.
- Completed Batch 59 slice coverage QA and next-prompt preparation on 2026-06-12.
- Added `slice-coverage-qa-batch-59.md` with canonical totals, requested-target coverage, scope guard checks, Batch 58 asset dimensions and sizes, resolved localhost route QA, verification, next-step decision, and the Batch 60 prompt.
- Confirmed the Batch 58 state remains `427` approved words, `427` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed all Batch 58 assets are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Resolved previously pending localhost route and representative asset QA for Batches 54, 55, and 58: outside-sandbox checks returned `200` for `/ro`, `/admin/words`, representative play routes, and representative Batch 54/58 image URLs.
- Batch 59 verification passed on 2026-06-12: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Set Batch 60 as the next planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool.
- Completed Batch 58 production promotion on 2026-06-12.
- Added `production-promotion-batch-58.md` with human approval, promoted rows, image QA artifacts, final asset sizes, content totals, coverage impact, verification, and the Batch 59 prompt.
- Promoted all `15` Batch 57 accepted cells: `biberon`, `borcan`, `burete`, `brad`, `bluză`, `bancă`, `dormitor`, `periuță`, `brățară`, `sticlă`, `șină`, `vierme`, `vișine`, `papuci`, and `lădiță`.
- Used the corrective sheet for `dormitor`, `brățară`, `sticlă`, and `vișine`, and used the first Batch 57 sheet for the other accepted cells.
- Added production WebP assets under `public/images/ro/b`, `public/images/ro/d`, `public/images/ro/p`, `public/images/ro/s`, `public/images/ro/ș`, `public/images/ro/v`, and `public/images/ro/l`; every Batch 58 asset is below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Added production JSON rows only to existing canonical manifests.
- Confirmed post-Batch-58 totals: `430` total records, `427` approved words, `427` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 58, including `B` `30` starts / `24` contains / `54` mixed, `CI` `9` / `11` / `20`, `L` `20` / `87` / `107`, `R` `18` / `153` / `171`, `S` `22` / `31` / `53`, `Ș` `13` / `28` / `41`, `Ț` `6` / `40` / `46`, `V` `16` / `15` / `31`, and `D` `11` / `22` / `33`.
- Updated content-derived gameplay compatibility fixtures because `papuci` increases the `CI` mixed practice-target pool from `19` to `20`.
- Verification passed on 2026-06-12: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Local browser/app QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Completed Batch 57 image briefs and contact sheet on 2026-06-12.
- Added `image-briefs-batch-57.md` with per-word image briefs for `biberon`, `borcan`, `burete`, `brad`, `bluză`, `bancă`, `dormitor`, `periuță`, `brățară`, `sticlă`, `șină`, `vierme`, `vișine`, `papuci`, and `lădiță`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-57/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Confirmed Batch 57 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points for `bancă` circular crop comfort, `sticlă` bottle reading, `șină` circular crop comfort, and `vierme` character-like face acceptability.
- Recorded human feedback: `dormitor` should better represent a bedroom, `brățară` should be on a hand, `sticlă` should be a glass bottle rather than a `flacon`, and `vișine` needs stronger distinction from `cireșe`.
- Generated corrective contact sheet `assets/image-sources/ro/batch-57/corrective-contact-sheet-1.png` with replacement candidates for `dormitor`, `brățară`, `sticlă`, and `vișine`.
- Recorded that the strongest no-label cue for `vișine` is darker/smaller sour cherries with a cut fruit, but the distinction from `cireșe` remains inherently ambiguous for some children; if exact recognition is critical, use `cireșe` or defer the row.
- Prepared the Batch 58 promotion prompt with a hard requirement to promote only human-accepted cells after review.
- Completed Batch 56 production-slice planning on 2026-06-12.
- Added `production-slice-planning-batch-56.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, image brief direction, preserved decisions, and a ready-to-copy Batch 57 prompt.
- Planned the fourth requested expansion slice in order: `biberon`, `borcan`, `burete`, `brad`, `bluză`, `bancă`, `dormitor`, `periuță`, `brățară`, `sticlă`, `șină`, `vierme`, `vișine`, `papuci`, and `lădiță`.
- Confirmed all `15` planned rows remain planning-only; no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.
- Recorded source/safety decisions: `bancă` must use the park bench sense; `sticlă` must use the bottle sense; `șină` must show rail/train-track; `periuță` uses the toothbrush sense; `vișine` and `papuci` are natural plural rows from singular dictionary forms; `brad` should stay a plain fir tree; `vierme` should be friendly and non-scary; `dormitor` should stay a simple bed-centered room icon; and `lădiță` should show a small crate/box.
- Recorded planned coverage impact if all `15` rows are later promoted with ready images: total would become `427` approved words and `427` ready images; requested-target deltas would be `Ă +7 contains`, `CI +1 contains`, `L +1 starts/+2 contains`, `R +8 contains`, `S +1 starts`, `Ș +1 starts/+1 contains`, `T +3 contains`, `Ț +3 contains`, `V +2 starts`, `B +7 starts`, and `D +1 starts/+2 contains`.
- Preserved Batch 55 baseline decisions: no forced `Ă` or `Â` starts-with rows, no `Q`/`W`/`Y` padding with obscure vocabulary, no `webcam`, no `yak`, and no speech-target production metadata.
- Completed Batch 55 slice coverage QA and next-prompt preparation on 2026-06-11.
- Added `slice-coverage-qa-batch-55.md` with canonical totals, requested-target coverage including `GHI`, scope guard checks, Batch 54 asset dimensions and sizes, localhost status, verification, next-step decision, and the Batch 56 prompt.
- Confirmed the Batch 54 state remains `412` approved words, `412` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed all Batch 54 assets are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirmed no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Batch 55 verification passed on 2026-06-11: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Local browser/app QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Set Batch 56 as the next planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool.
- Completed Batch 54 production promotion on 2026-06-11.
- Added `production-promotion-batch-54.md` with human approval, promoted rows, image QA artifacts, final asset sizes, content totals, coverage impact, verification, and the Batch 55 prompt.
- Promoted all `15` Batch 53 accepted cells: `lebădă`, `lopată`, `lipici`, `lupă`, `leagăn`, `rac`, `ren`, `rucsac`, `role`, `supă`, `sare`, `semințe`, `sită`, `dovlecel`, and `țelină`.
- Added production WebP assets under `public/images/ro/l`, `public/images/ro/r`, `public/images/ro/s`, `public/images/ro/d`, and `public/images/ro/ț`; every Batch 54 asset is below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Added production JSON rows only to `content/ro/words-l.json`, `content/ro/words-r.json`, `content/ro/words-s.json`, `content/ro/words-d.json`, and `content/ro/words-ț.json`.
- Confirmed post-Batch-54 totals: `415` total records, `412` approved words, `412` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 54, including `L` `19` starts / `85` contains / `104` mixed, `R` `18` / `145` / `163`, `S` `21` / `31` / `52`, `D` `10` / `20` / `30`, `Ț` `6` / `37` / `43`, `V` `14` / `15` / `29`, `CE` `14` / `4` / `18`, and `CI` `9` / `10` / `19`.
- Updated content-derived gameplay compatibility fixtures because `dovlecel` increases `V` contains-only and `CE` mixed counts, and `lipici` increases `CI` mixed count.
- Verification passed on 2026-06-11: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Local browser/app QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Completed Batch 53 image briefs and contact sheet on 2026-06-11.
- Added `image-briefs-batch-53.md` with per-word image briefs for `lebădă`, `lopată`, `lipici`, `lupă`, `leagăn`, `rac`, `ren`, `rucsac`, `role`, `supă`, `sare`, `semințe`, `sită`, `dovlecel`, and `țelină`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-53/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Confirmed Batch 53 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points for `lopată`, `rac`, `sare`, and `semințe`.
- Prepared the Batch 54 promotion prompt with a hard requirement to promote only human-accepted cells after review.
- Completed Batch 52 production-slice planning on 2026-06-11.
- Added `production-slice-planning-batch-52.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, image brief direction, preserved decisions, and a ready-to-copy Batch 53 prompt.
- Planned the third requested expansion slice in order: `lebădă`, `lopată`, `lipici`, `lupă`, `leagăn`, `rac`, `ren`, `rucsac`, `role`, `supă`, `sare`, `semințe`, `sită`, `dovlecel`, and `țelină`.
- Confirmed all `15` planned rows remain planning-only; no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.
- Recorded source/safety decisions: `role` uses the roller-skates sense from `rolă`; `semințe` is planned as a natural plural food row from `sămânță`; `sită` uses the household sieve sense; `dovlecel` must stay visually distinct from `dovleac`; `țelină` uses the culinary vegetable sense; `leagăn` uses a playground swing, not a cradle or institution.
- Recorded planned coverage impact if all `15` rows are later promoted with ready images: total would become `412` approved words and `412` ready images; requested-target deltas would be `Ă +7 contains`, `L +5 starts/+3 contains`, `R +4 starts/+1 contains`, `S +4 starts/+1 contains`, `D +1 starts/+1 contains`, `Ț +1 starts/+1 contains`, `T +2 contains`, `V +1 contains`, `B +1 contains`, `CE +1 contains`, and `CI +1 contains`.
- Preserved Batch 51 baseline decisions: no forced `Ă` or `Â` starts-with rows, no `Q`/`W`/`Y` padding with obscure vocabulary, no `webcam`, no `yak`, and no speech-target production metadata.
- Completed Batch 51 slice coverage QA and next-prompt preparation on 2026-06-11.
- Added `slice-coverage-qa-batch-51.md` with canonical totals, affected target coverage, scope guard checks, Batch 50 asset dimensions and sizes, localhost status, verification, next-step decision, and the Batch 52 prompt.
- Confirmed `400` total records, `397` approved words, `397` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Confirmed all Batch 50 public WebP files exist, are `256 x 256 px`, and are below the `20 KB` hard maximum.
- Confirmed `http://localhost:3000/ro` remained unavailable both inside and outside the sandbox; browser QA remains pending.
- Set Batch 52 as the next planning-only production-slice batch from the already human-reviewed Batch 43 candidate pool.
- Completed Batch 50 production promotion on 2026-06-11.
- Added `production-promotion-batch-50.md` with human review decisions, promoted rows, image QA artifacts, file sizes, content totals, verification, and the Batch 51 prompt.
- Promoted all `15` planned Batch 48 rows after human acceptance: `kimono`, `karate`, `kilt`, `yoga`, `tren`, `tractor`, `tablă`, `tigaie`, `tamburină`, `trandafir`, `ventilator`, `vopsea`, `volan`, `vestă`, and `vânătă`.
- Generated a white `kimono` replacement with a blue belt because the human rejected the purple robe color but accepted the concept.
- Added production WebP assets under `public/images/ro/k`, `public/images/ro/y`, `public/images/ro/t`, and `public/images/ro/v`; every Batch 50 asset is below both the `12 KB` warning threshold and `20 KB` hard maximum.
- Added production JSON rows only to `content/ro/words-k.json`, `content/ro/words-y.json`, `content/ro/words-t.json`, and `content/ro/words-v.json`.
- Confirmed post-Batch-50 totals: `400` total records, `397` approved words, `397` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Recorded affected coverage after Batch 50: `K` `5` starts / `1` contains / `6` mixed, `Y` `2` / `0` / `2`, `T` `17` / `86` / `103`, `V` `14` / `14` / `28`, `L` `14` / `82` / `96`, `R` `14` / `144` / `158`, `S` `17` / `30` / `47`, `B` `23` / `23` / `46`, and `D` `9` / `19` / `28`.
- Verification passed on 2026-06-11: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Local browser/app QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Completed Batch 49 image briefs and contact sheet on 2026-06-02.
- Added `image-briefs-batch-49.md` with per-word image briefs for `kimono`, `karate`, `kilt`, `yoga`, `tren`, `tractor`, `tablă`, `tigaie`, `tamburină`, `trandafir`, `ventilator`, `vopsea`, `volan`, `vestă`, and `vânătă`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-49/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Confirmed Batch 49 stayed review-only with no production word records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded human-review attention points for the `karate` and `yoga` person/action cells, and circular-safety or thumbnail-readability checks for `tren`, `tractor`, `tigaie`, `trandafir`, and `ventilator`.
- Prepared the Batch 50 promotion prompt with a hard requirement to promote only human-accepted cells after review.
- Completed Batch 48 second production-slice planning on 2026-06-02.
- Added `production-slice-planning-batch-48.md` with source checks, canonical file/ID/path plans, metadata plans, route/loader/validation impact, coverage deltas, image brief direction, preserved decisions, and a ready-to-copy Batch 49 prompt.
- Planned the second requested expansion slice in order: `kimono`, `karate`, `kilt`, `yoga`, `tren`, `tractor`, `tablă`, `tigaie`, `tamburină`, `trandafir`, `ventilator`, `vopsea`, `volan`, `vestă`, and `vânătă`.
- Confirmed all `15` planned rows remain planning-only; no production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.
- Recorded source/safety decisions: `karate` requires a solo, nonviolent sport image; `kilt` should be garment-only and culture-neutral; `yoga` should be a calm exercise pose without spiritual, medical, therapy, or wellness claims; `tablă` uses the school-board sense; `volan` uses the steering-wheel sense; and `vânătă` uses the eggplant/aubergine food sense.
- Recorded planned coverage impact if all `15` rows are later promoted with ready images: total would become `397` approved words and `397` ready images; requested-target deltas would be `Ă +4 contains`, `Â +1 contains`, `K +3 starts`, `Y +1 starts`, `L +4 contains`, `R +6 contains`, `S +2 contains`, `T +6 starts/+5 contains`, `V +5 starts`, `B +2 contains`, and `D +1 contains`.
- Preserved Batch 47 baseline decisions: no forced `Ă` or `Â` starts-with rows, no `Q`/`W`/`Y` padding with obscure vocabulary, no `webcam`, no `yak`, and no speech-target production metadata.
- Completed Batch 47 slice coverage QA and next-prompt preparation on 2026-06-02.
- Recomputed canonical production totals from `content/ro/*.json`: `385` total records, `382` approved, `382` approved ready images, `0` approved placeholders, and `3` rejected audit-trail rows: `ghicitoare`, `miez`, and `stinghie`.
- Confirmed new playable letters/routes are enabled and loaded: `K` -> `k` / `content/ro/words-k.json`, `Q` -> `q` / `words-q.json`, `W` -> `w` / `words-w.json`, `X` -> `x` / `words-x.json`, and `Y` -> `y` / `words-y.json`.
- Confirmed the first-slice canonical rows remain in the intended files: `cameră web` is `ro-c-camera-web` in `content/ro/words-c.json`, `iac` is `ro-i-iac` in `content/ro/words-i.json`, and no production `webcam` or `yak` row exists.
- Recorded requested-target coverage after Batch 46 from canonical manifests: `Ă` `0` starts / `156` contains / `156` mixed; `Â` `0` / `11` / `11`; `K` `2` / `1` / `3`; `Q` `1` / `0` / `1`; `W` `1` / `2` / `3`; `X` `1` / `5` / `6`; `Y` `1` / `0` / `1`; `CE` `14` / `3` / `17`; `CI` `9` / `9` / `18`; `GE` `9` / `6` / `15`; `GI` `6` / `9` / `15`; `GHE` `11` / `4` / `15`; `CHE` `2` / `13` / `15`; `CHI` `8` / `7` / `15`; `L` `14` / `78` / `92`; `R` `14` / `138` / `152`; `S` `17` / `28` / `45`; `Ș` `12` / `27` / `39`; `T` `11` / `81` / `92`; `Ț` `5` / `36` / `41`; `V` `9` / `14` / `23`; `B` `23` / `21` / `44`; `D` `9` / `18` / `27`; and `J` `5` / `9` / `14`.
- Reviewed follow-up needs after the first slice: `K`, `Q`, `W`, `X`, and `Y` are now playable but remain small; no production-ready starts-with `Ă` or `Â` rows have been found; `Q`, `W`, and additional `Y` rows should stay source-checked and quality-gated; the next slice should avoid forcing rare buckets and should draw primarily from the already human-approved Batch 43 pool.
- Batch 47 verification passed outside the sandbox after sandboxed `pnpm` attempts hung and then failed with `fetch failed`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, and `pnpm run check:matching`.
- `pnpm run validate:content` passed with warning-threshold image notices only; the new `content/ro/words-x.json` / `ro-x-xilofon.webp` warning remains `13,520 B`, below the `20 KB` hard maximum.
- `git diff --check` passed after the Batch 47 status edits.
- Localhost route QA for representative new routes and images could not be completed because `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Prepared the next ready-to-copy prompt for a repeated Batch 44-style second production-slice planning batch.
- Completed Batch 46 production promotion and verification on 2026-06-02 after the human explicitly accepted all Batch 45 contact-sheet cells.
- Promoted all `15` accepted rows: `kiwi`, `koala`, `xilofon`, `taxi`, `pix`, `boxă`, `mixer`, `walkie-talkie`, `cameră web`, `yo-yo`, `iac`, `quinoa`, `lampă`, `lună`, and `ceainic`.
- Added new enabled Romanian letter manifests and routes for `K`, `Q`, `W`, `X`, and `Y`: `content/ro/words-k.json`, `words-q.json`, `words-w.json`, `words-x.json`, and `words-y.json`.
- Added existing-manifest production rows for `boxă`, `cameră web`, `ceainic`, `iac`, `lampă`, `lună`, `mixer`, `pix`, and `taxi`; kept `cameră web` in `content/ro/words-c.json` and `iac` in `content/ro/words-i.json`.
- Promoted final public assets under canonical paths in `public/images/ro/...`; all new assets are `256 x 256 px` lossless WebP files below the `20 KB` hard maximum.
- Confirmed the accepted crops are recognizable at full size and thumbnail size, with circular-mask QA for long or edge-heavy subjects; `pix`, `yo-yo`, `koala`, and `iac` were locally padded so circular thumbnails clip only background or non-meaningful pixels.
- Updated `src/content/loaders.ts` to import the new rare-letter manifests and updated `src/game/gameplay-compatibility.check.ts` for the enabled-letter list and the new `CE` mixed count.
- Confirmed post-Batch-46 production totals from the canonical manifests: `382` approved words, `382` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed requested-target coverage after Batch 46: `Ă` `0` starts / `156` contains, `K` `2` starts / `1` contains, `Q` `1` starts / `0` contains, `W` `1` starts / `2` contains, `X` `1` starts / `5` contains, `Y` `1` starts / `0` contains, `CE` `14` starts / `3` contains, `L` `14` starts / `78` contains, `R` `14` starts / `138` contains, `T` `11` starts / `81` contains, and `B` `23` starts / `21` contains.
- Batch 46 verification passed outside the sandbox because sandboxed `pnpm` commands repeatedly hung and then failed with `fetch failed`: `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check`.
- `pnpm run validate:content` passed with existing image warning-threshold notices plus the new `content/ro/words-x.json` / `ro-x-xilofon.webp` warning at `13,520 B`; this remains below the `20 KB` hard maximum.
- Localhost route QA could not be completed because the expected existing dev server on `http://localhost:3000` was unavailable both inside and outside the sandbox; no alternate dev server or port was started.
- Confirmed Batch 46 added no placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Recorded Batch 47 as the next slice coverage QA and next-prompt batch.
- Completed Batch 45 image briefs and contact sheet on 2026-06-02.
- Added `image-briefs-batch-45.md` with per-word image briefs for `kiwi`, `koala`, `xilofon`, `taxi`, `pix`, `boxă`, `mixer`, `walkie-talkie`, `cameră web`, `yo-yo`, `iac`, `quinoa`, `lampă`, `lună`, and `ceainic`.
- Generated one ordered, unlabeled review contact sheet at `assets/image-sources/ro/batch-45/contact-sheet.png` using the built-in `image_gen` tool and the pixel-art, full-square, circle-safe constraints from `docs/image-pipeline.md`.
- Confirmed Batch 45 stayed review-only with no production word records, cropped cells, optimized WebP assets, route/schema changes, placeholders, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Recorded the Batch 46 promotion prompt with the hard requirement to promote only human-accepted cells after review.
- Completed Batch 44 first production-slice planning on 2026-06-02.
- Added `production-slice-planning-batch-44.md` with source verification, canonical file/ID/path plans, route and validation impacts, coverage deltas, image brief direction, and a ready-to-copy Batch 45 prompt.
- Recorded Batch 44 display-form decisions: use `cameră web` instead of `webcam` for the child-facing production row unless a later human decision explicitly prioritizes a `W` starts-with borrowed display; use `iac` instead of `yak` because `iac` is the stronger Romanian standard and `yak` is a variant/cross-reference.
- Planned new rare-letter manifests for Batch 46 if the Batch 45 images are accepted: `content/ro/words-k.json`, `words-q.json`, `words-w.json`, `words-x.json`, and `words-y.json`, with enabled routes `k`, `q`, `w`, `x`, and `y`.
- Planned requested-target impact if all `15` rows are later promoted with ready images: `Ă +4 contains`, `K +2 starts/+1 contains`, `Q +1 starts`, `W +1 starts/+2 contains`, `X +1 starts/+4 contains`, `Y +1 starts`, `CE +1 starts`, `L +2 starts/+3 contains`, `R +2 contains`, `T +1 starts/+1 contains`, and `B +1 starts/+1 contains`.
- Confirmed Batch 44 stayed planning-only with no production word records, image assets, route/schema changes, placeholders, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Completed Batch 43 human vocabulary review on 2026-06-02.
- Added `human-vocabulary-review-batch-43.md` with broad human approval of the Batch 42 candidate pool, source rechecks for borrowed rows, accepted strong/stretch/held-row decisions, missing `Ă`/`Â` starts-with decisions, rejected rows, a first approved production-slice queue of `15` words, and a ready-to-copy Batch 44 prompt.
- Recorded that `webcam`, `walkie-talkie`, `yak`, `yo-yo`, `quinoa`, and `mixer` are human-approved for planning consideration, but Batch 44 must still verify standard Romanian display forms, especially `webcam` versus `cameră web`, `yak` versus `iac`, `yo-yo` hyphenation, `walkie-talkie` hyphenation, and whether `wombat` or `vombat` is defensible for any later `W` starts-with slice.
- Recorded the first Batch 44 planning queue: `kiwi`, `koala`, `xilofon`, `taxi`, `pix`, `boxă`, `mixer`, `walkie-talkie`, `webcam` or `cameră web`, `yo-yo`, `yak` or `iac`, `quinoa`, `lampă`, `lună`, and `ceainic`.
- Confirmed Batch 43 stayed review-only with no production word records, image assets, route/schema changes, placeholders, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Completed Batch 42 requested letter and sound expansion candidate worksheet on 2026-06-02.
- Added `candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md` with the confirmed batch sequence, fresh current coverage table, source URLs, strong child-known candidates, learnable stretch candidates, held candidates, rejected candidates, rare-letter summary, first-slice review notes, and a ready-to-copy Batch 43 prompt.
- Recomputed current requested-target coverage from `content/ro/*.json`: the pack remains `367` approved words, `367` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Confirmed the Batch 41 coverage snapshot still matches the canonical manifests for all requested targets.
- Re-checked Romanian alphabet and rare-letter sources for `K`, `Q`, `W`, `X`, and `Y`, including dexonline and DOOM-related guidance.
- Re-checked Romanian speech/logopedie sources for sound positions and differentiation involving `R`, `S`, `Ș`, `Ț`, `J`, `L`, `V`, `D`, `T`, `CE/CI`, `GE/GI`, `CHE/CHI`, and `GHE/GHI`, including Logorici, CJRAE, and CMBRAE materials.
- Recorded that no strong production-ready starts-with candidates were found for `Ă` or `Â`, and that `Q`, `W`, and `Y` should remain human-reviewed, quality-limited rare-letter areas.
- Kept Batch 42 worksheet-only with no production word records, image assets, route/schema changes, placeholders, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Created the feature folder.
- Completed Batch 41 requested letter and sound expansion planning on 2026-06-02.
- Added `requested-letter-and-sound-expansion-batch-41.md` with the current coverage snapshot for all requested targets, recorded human decisions, rare-letter policy, target quantity policy, overlap guidance, source-check requirements, worksheet requirements, and the full Batch 41 through Batch 47 plus final QA sequence.
- Added `next-vocabulary-expansion-prompt-batch-41.md` as the ready-to-copy prompt for a future agent to start from Batch 41 context and execute Batch 42 candidate worksheet work.
- Recorded that `Ă`, `Â`, `K`, `Q`, `W`, `X`, and `Y` should behave like normal playable letters once implemented, including starts-with, contains-only, mixed mode, setup, play, exclusion filtering, and admin inventory.
- Recorded that `Ă` and `Â` should use the existing `a-breve` / `a-circ` route tokens and `ro-a-breve-...` / `ro-a-circ-...` ID/image prefixes.
- Recorded the human guidance to aim near `10` good additions per requested area where quality allows, use fewer for rare weak buckets, cap broad areas at roughly `20` to `25`, avoid duplicate/near-synonym padding, allow imageable actions, and include but not over-prioritize overlapping words.
- Recorded that Batch 42 must re-check Romanian speech/logopedie references, especially for sound positions and differentiation involving `R`, `S`, `Ș`, `Ț`, `J`, `L`, `V`, `D`, `T`, `CE/CI`, `GE/GI`, `CHE/CHI`, and `GHE/GHI`.
- Kept Batch 41 documentation-only with no production word records, image assets, route/schema changes, placeholders, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.
- Corrected the user-reported G/GHI vocabulary error on 2026-05-26 after online dexonline/DOOM checks (`https://dexonline.ro/intrare/chiuvet%C4%83/10192`, `https://dexonline.ro/definitie/ghimbir`): removed the incorrect approved `ro-g-ghiuveta` / `ghiuvetă` record and unused public image asset, preserved the existing correct `ro-c-chiuveta` / `chiuvetă` C/CHI record, added `ro-g-ghimbir` / `ghimbir` as the replacement G/GHI word, generated a child-safe ginger-root pixel-art image, refined it through a `128 px` pixel-art grid, and promoted `public/images/ro/g/ro-g-ghimbir.webp` as a `256 x 256 px` lossless WebP file below the warning threshold.
- Updated the content-dependent gameplay compatibility fixture because replacing `ghiuvetă` with `ghimbir` intentionally reduces the derived `V` contains-only pool from `15` to `14` while preserving exact-size visible-subset countdown regression coverage.
- Verification for the 2026-05-26 vocabulary correction passed: `pnpm run validate:content` passed with only pre-existing image warning-threshold notices; `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` passed; a production image sanity check found `367` approved words, `367` ready image refs, `367` public non-placeholder WebP files, `0` missing files, and `0` unused files. `pnpm run build` remains blocked locally by the known Next SWC darwin/arm64 code-signature failure before app compilation.
- Outside-sandbox route checks returned `200 OK` for `http://localhost:3000/ro/play/ghi` and `http://localhost:3000/images/ro/g/ro-g-ghimbir.webp`.
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
- Completed Batch 27: General Placeholder Image Replacement Slice 10.
- Added `image-briefs-batch-27.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 16 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `capră`, `căpșună`, `clopoțel`, `colac`, `cort`, `cocoș`, `căruță`, `căsuță`, `cozonac`, `delfin`, `dovleac`, `dulap`, `elefant`, `elicopter`, `floare`, and `fluture` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 27: `370` approved Romanian words, `205` ready images, and `165` placeholders.
- Confirmed letter image readiness after Batch 27: `C` `57` ready / `5` placeholder, `D` `6` ready / `3` placeholder, `E` `3` ready / `4` placeholder, and `F` `9` ready / `8` placeholder.
- Completed Batch 28: General Placeholder Image Replacement Slice 11.
- Added `image-briefs-batch-28.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 10 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `fular`, `furculiță`, `umbrelă`, `ursuleț`, `vacă`, `vapor`, `vulpe`, `șopârlă`, `șarpe`, and `țânțar` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 28: `370` approved Romanian words, `215` ready images, and `155` placeholders.
- Confirmed letter image readiness after Batch 28: `F` `11` ready / `6` placeholder, `U` `8` ready / `2` placeholder, `V` `3` ready / `6` placeholder, `Ș` `5` ready / `7` placeholder, and `Ț` `2` ready / `3` placeholder.
- Completed Batch 29: General Placeholder Image Replacement Slice 12.
- Added `image-briefs-batch-29.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 17 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `fustă`, `fotoliu`, `fasole`, `vagon`, `varză`, `vază`, `veveriță`, `vioară`, `vițel`, `șal`, `șampon`, `șervețel`, `șorț`, `șiret`, `șurub`, `țap`, and `țeavă` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed `frigider` was already ready before the slice and left unchanged; the requested `șort` spelling did not exist as a production record, so the existing `șorț` record was implemented.
- Confirmed helper-derived production totals after Batch 29: `370` approved Romanian words, `232` ready images, and `138` placeholders.
- Confirmed letter image readiness after Batch 29: `F` `14` ready / `3` placeholder, `V` `9` ready / `0` placeholder, `Ș` `11` ready / `1` placeholder, and `Ț` `4` ready / `1` placeholder.
- Completed Batch 30: General Placeholder Image Replacement Slice 13.
- Added `image-briefs-batch-30.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 20 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `album`, `ascuțitoare`, `ață`, `buștean`, `cadă`, `dinozaur`, `duș`, `excavator`, `găină`, `gâscă`, `găleată`, `gard`, `glob`, `gogoașă`, `hamac`, `hartă`, `iaurt`, `iglu`, `inel`, and `inimă` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 30: `370` approved Romanian words, `252` ready images, and `118` placeholders.
- Confirmed letter image readiness after Batch 30: `A` `15` ready / `2` placeholder, `B` `18` ready / `4` placeholder, `C` `58` ready / `4` placeholder, `D` `8` ready / `1` placeholder, `E` `4` ready / `3` placeholder, `G` `33` ready / `9` placeholder, `H` `2` ready / `1` placeholder, and `I` `5` ready / `3` placeholder.
- Confirmed `glob` and `hartă` remain above the `12 KB` warning threshold but below the `20 KB` hard maximum; further simplification was deferred because it reduced thumbnail clarity.
- Completed Batch 31: General Placeholder Image Replacement Slice 14.
- Added `image-briefs-batch-31.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 20 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `haină`, `iarbă`, `joc`, `jeleu`, `jaluzea`, `lac`, `lalea`, `lămâie`, `lapte`, `lanternă`, `leu`, `lingură`, `lup`, `lanț`, `linguriță`, `maimuță`, `măgar`, `mătură`, `miere`, and `motan` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 31: `370` approved Romanian words, `272` ready images, and `98` placeholders.
- Confirmed letter image readiness after Batch 31: `H` `3` ready / `0` placeholder, `I` `6` ready / `2` placeholder, `J` `5` ready / `0` placeholder, `L` `12` ready / `0` placeholder, and `M` `18` ready / `6` placeholder.
- Confirmed all Batch 31 final assets are below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Batch 31 QA: `pnpm run validate:content` passed via the nvm/Corepack `pnpm` path with only pre-existing image warning-threshold notices.
- Batch 31 QA: `pnpm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` passed.
- Batch 31 QA: `pnpm run build` remains blocked locally by the known Next SWC darwin/arm64 code-signature error before app compilation.
- Batch 31 route QA: sandboxed localhost checks failed, and outside-sandbox retries returned `200 OK` for `http://localhost:3000/ro/play/l` and `/images/ro/l/ro-l-leu.webp`.
- Completed Batch 32: General Placeholder Image Replacement Slice 15.
- Added `image-briefs-batch-32.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 20 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `nor`, `nucă`, `nasture`, `nufăr`, `oaie`, `oală`, `oglindă`, `omidă`, `ou`, `orez`, `pară`, `pălărie`, `pătură`, `pepene`, `pensulă`, `penar`, `pieptene`, `portocală`, `prună`, and `puzzle` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 32: `370` approved Romanian words, `292` ready images, and `78` placeholders.
- Confirmed letter image readiness after Batch 32: `N` `5` ready / `0` placeholder, `O` `9` ready / `0` placeholder, and `P` `26` ready / `8` placeholder.
- Confirmed all Batch 32 final assets are below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Batch 32 QA: `pnpm run validate:content` passed via the nvm/Corepack `pnpm` path with only pre-existing image warning-threshold notices.
- Batch 32 QA: `pnpm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` passed.
- Batch 32 QA: `pnpm run build` remains blocked locally by the known Next SWC darwin/arm64 code-signature error before app compilation.
- Batch 32 route QA: sandboxed localhost checks failed, and outside-sandbox retries returned `200 OK` for `http://localhost:3000/ro/play/n`, `/images/ro/n/ro-n-nor.webp`, `/images/ro/o/ro-o-oaie.webp`, and `/images/ro/p/ro-p-puzzle.webp`.
- Completed Batch 33: General Placeholder Image Replacement Slice 16.
- Added `image-briefs-batch-33.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 23 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `raft`, `ramură`, `râu`, `roșie`, `robinet`, `rotiță`, `sandviș`, `scară`, `scoică`, `sfoară`, `spumă`, `struguri`, `stilou`, `stejar`, `săniuță`, `tavă`, `telefon`, `tigru`, `tobă`, `tobogan`, `tort`, `tricou`, and `televizor` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Confirmed helper-derived production totals after Batch 33: `370` approved Romanian words, `315` ready images, and `55` placeholders.
- Confirmed letter image readiness after Batch 33: `R` `14` ready / `0` placeholder, `S` `17` ready / `1` placeholder, and `T` `9` ready / `1` placeholder.
- Confirmed all Batch 33 final assets are below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Batch 33 QA: `pnpm run validate:content` passed via the nvm/Corepack `pnpm` path with only pre-existing image warning-threshold notices.
- Batch 33 QA: `pnpm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` passed.
- Batch 33 route QA: sandboxed localhost checks failed, and outside-sandbox retries returned `200 OK` for `http://localhost:3000/ro/play/r`, `http://localhost:3000/ro/play/s`, `http://localhost:3000/ro/play/t`, `/images/ro/r/ro-r-raft.webp`, `/images/ro/s/ro-s-struguri.webp`, and `/images/ro/t/ro-t-tigru.webp`.
- Completed Batch 34: General Placeholder Image Replacement Slice 17.
- Added `image-briefs-batch-34.md` with production image briefs, review decisions, final paths, file sizes, and image-readiness impact.
- Replaced 20 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Regenerated the first Batch 34 pass after brand comparison showed it was coarser and flatter than the existing production pack; the final Batch 34 sources use a finer `128 x 128 px` pixel grid with outlines, highlights, and contact shadows.
- Added brand-consistency review guidance to `docs/image-pipeline.md`, requiring future image batches to compare new assets against representative existing ready images before acceptance.
- Updated canonical records for `acoperiș`, `aripă`, `cap`, `coajă`, `desen`, `eșarfă`, `garaj`, `iaz`, `mazăre`, `plajă`, `ploaie`, `prăjitură`, `păianjen`, `pătuț`, `pisicuță`, `ulei`, `zid`, `zmeură`, `zambilă`, and `țurțure` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Deferred `miez` as broad and context-dependent at thumbnail size, and `pluș` because the material/object distinction remains ambiguous without leaning on an already-covered plush-toy concept.
- Confirmed helper-derived production totals after Batch 34: `370` approved Romanian words, `335` ready images, and `35` placeholders.
- Confirmed letter image readiness after Batch 34: `A` `17` ready / `0` placeholder, `C` `60` ready / `2` placeholder, `D` `9` ready / `0` placeholder, `E` `5` ready / `2` placeholder, `G` `34` ready / `8` placeholder, `I` `7` ready / `1` placeholder, `M` `19` ready / `5` placeholder, `P` `32` ready / `2` placeholder, `U` `9` ready / `1` placeholder, `Z` `6` ready / `2` placeholder, and `Ț` `5` ready / `0` placeholder.
- Confirmed all Batch 34 final assets are below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Batch 34 QA: `pnpm run validate:content` passed via the nvm/Corepack `pnpm` path with only pre-existing image warning-threshold notices.
- Batch 34 QA: `pnpm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` passed.
- Batch 34 QA: `pnpm run build` is blocked locally by the Next SWC darwin/arm64 code-signature error, including after retrying outside the sandbox.
- Batch 34 route QA: sandboxed localhost checks failed, and outside-sandbox retries returned `200 OK` for `http://localhost:3000/ro/play/a`, `http://localhost:3000/ro/play/p`, `http://localhost:3000/ro/play/tz`, `/images/ro/a/ro-a-acoperis.webp`, `/images/ro/p/ro-p-pisicuta.webp`, and `/images/ro/ț/ro-tz-turture.webp`.
- Completed Batch 35: General Placeholder Image Replacement Slice 18.
- Added `image-briefs-batch-35.md` with production image briefs, review decisions, final paths, file sizes, brand-comparison review, and image-readiness impact.
- Replaced 12 approved placeholder-backed records with reviewed final pixel-art WebP assets.
- Updated canonical records for `colaj`, `chiciură`, `echipament`, `frizerie`, `ger`, `gheretă`, `gheruță`, `insulă`, `mușețel`, `mărțișor`, `poză`, and `școală` from the generic placeholder to ready app-owned image paths and meaningful alt text.
- Deferred `miez` again as broad and context-dependent at thumbnail size, and `pluș` again because the material/object distinction remains ambiguous without leaning on an already-covered plush-toy concept.
- Confirmed helper-derived production totals after Batch 35: `370` approved Romanian words, `347` ready images, and `23` placeholders.
- Confirmed letter image readiness after Batch 35: `C` `62` ready / `0` placeholder, `E` `6` ready / `1` placeholder, `F` `15` ready / `2` placeholder, `G` `37` ready / `5` placeholder, `I` `8` ready / `0` placeholder, `M` `21` ready / `3` placeholder, `P` `33` ready / `1` placeholder, and `Ș` `12` ready / `0` placeholder.
- Confirmed all Batch 35 final assets are below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Batch 35 QA: the default shell still did not expose `pnpm`, so checks were run with `/Users/darius/.nvm/versions/node/v24.15.0/bin` first on `PATH`.
- Batch 35 QA: `pnpm run validate:content` passed with only pre-existing image warning-threshold notices; all new Batch 35 assets are below the `12 KB` warning threshold.
- Batch 35 QA: `pnpm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` passed.
- Batch 35 route QA: sandboxed localhost checks failed, and outside-sandbox retries returned `200 OK` for `http://localhost:3000/ro/play/c`, `http://localhost:3000/ro/play/sh`, `/images/ro/c/ro-c-colaj.webp`, and `/images/ro/%C8%99/ro-sh-scoala.webp`.
- Updated `docs/image-pipeline.md` with concrete on-brand image references for future generation: `autobuz`, `acvariu`, `cal`, `castravete`, `copac`, `cadă`, `cozonac`, `cetate`, `chitară`, `elefant`, `excavator`, `jachetă`, `măgar`, `oală`, `scaun`, `vacă`, `barcă`, `glob`, `buchet`, `zebră`, `umbrelă`, `șurub`, `arici`, and `cățel`.
- Flagged existing ready images for future corrective regeneration: `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`. The spoken `Capea` review note does not match a current production record and needs human clarification before action.
- Completed Batch 36: Remaining Placeholder Decision Audit.
- Added `remaining-placeholder-decision-audit-batch-36.md`.
- Confirmed all `23` remaining placeholders are still approved production records using the shared generic placeholder.
- Grouped the remaining placeholders by likely path: one kite-only `zmeu` replacement candidate, `11` person/family-sensitive records, `6` magical/fantasy-dependent records, and `5` likely deferrals.
- Confirmed the ready-image corrective-regeneration watchlist remains `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Kept `Capea` unresolved because no current production word ID matches it.
- Kept Batch 36 documentation-only with no production JSON, image asset, route/schema, speech-target metadata, admin, auth, database, billing, account, AI pronunciation, or clinical-claim changes.
- Started Batch 37: Human Decision Gate And Corrective Planning.
- Added `human-decision-gate-and-corrective-planning-batch-37.md`.
- Recorded explicit human decision questions for person/family records, magical/fantasy records, `zmeu`, likely-deferral records, and the unresolved spoken `Capea` note.
- Planned corrective regeneration directions for `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa` using the on-brand reference set requirement from `docs/image-pipeline.md`.
- Kept Batch 37 documentation-only so far with no production JSON, image asset, route/schema, speech-target metadata, admin, auth, database, billing, account, AI pronunciation, or clinical-claim changes.
- Completed Batch 37: Human Decision Gate And Corrective Planning.
- Recorded human approval for normal reviewed person/family images.
- Recorded human approval for child-safe magical/fantasy imagery.
- Recorded human approval to treat `zmeu` as the toy kite sense for child-facing imagery.
- Recorded human approval to image `gimnastică` and image `pluș` as a teddy bear.
- Removed `ghicitoare`, `miez`, and `stinghie` from gameplay by changing their status from `approved` to `rejected`.
- Kept the spoken `Capea` / `Kapia` note unresolved because no current production record matches it.
- Recorded human approval for corrective regeneration of `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Added `image-briefs-batch-37.md`.
- Confirmed production Romanian content now has `367` approved words, `347` ready images, and `20` approved placeholder images.
- Completed Batch 38: Approved Batch 37 Image Generation And Corrective Regeneration.
- Added `image-briefs-batch-38.md` with review artifacts, accepted asset paths, file sizes, and content impact.
- Generated and reviewed all `25` approved Batch 37 image targets.
- Created Batch 38 contact, brand-comparison, and final contact sheets under ignored local source folders before promotion.
- Promoted the `20` remaining approved placeholder-backed records to ready app-owned image paths with concrete alt text.
- Replaced the `5` approved corrective ready assets for `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Confirmed `zmeu` is a colorful toy kite only, with no dragon or fantasy creature.
- Confirmed `pluș` is a teddy bear image.
- Confirmed final Batch 38 assets are `256 x 256 px` WebP files between `1394 B` and `4296 B`, below the `20 KB` hard maximum.
- Confirmed production Romanian content now has `367` approved words, `367` ready images, and `0` approved placeholder images.
- Kept `ghicitoare`, `miez`, and `stinghie` rejected.
- Kept the spoken `Capea` / `Kapia` note unresolved with no vocabulary or asset change.
- Completed Batch 39: Final Romanian Image Pack QA And Release Readiness Audit.
- Audited all canonical Romanian word manifests and confirmed `370` total records: `367` approved, `3` rejected, and `0` drafts.
- Confirmed all `367` approved records have `imageStatus: "ready"`, app-owned licensing, and existing public WebP image assets.
- Confirmed approved production content has `0` placeholder images.
- Confirmed the non-placeholder public image tree has exactly `367` WebP assets referenced by approved ready records, with no missing or unused production image files.
- Confirmed `ro-g-ghicitoare`, `ro-m-miez`, and `ro-s-stinghie` remain `rejected` placeholder-backed audit-trail rows and do not appear in `/admin/words` or representative gameplay route text.
- Confirmed no current production record matches the spoken `Capea` / `Kapia` note, so no vocabulary or asset change was made.
- Verified `/admin/words` renders `367` approved words, `367` ready images, and `0` placeholder images.
- Verified representative local routes on `http://localhost:3000`: `/ro`, `/admin/words`, `/ro/play/b`, `/ro/play/g`, `/ro/play/ghe`, `/ro/play/i-circ`, and `/images/ro/z/ro-z-zmeu.webp`.
- Batch 39 QA: `pnpm run validate:content` passed with only existing image warning-threshold notices; `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` passed.
- Remaining release verification steps: run `pnpm run build` before deployment, verify the Vercel preview, test the deployed `/ro`, `/admin/words`, and representative `/ro/play/...` routes on mobile and desktop, and complete final human visual review of the deployed production image pack.
- Prepared Batch 40 corrective image audit framework.
- Added `corrective-image-audit-batch-40.md` as the place to record human-flagged poor images, current-image diagnosis, reference comparison, online object references, and per-word decisions before any regeneration.
- Updated `docs/image-pipeline.md` with a required corrective image audit workflow covering quality, style match, 3D-ness, pixel construction, shadows, shape clarity, subject size, perspective, background color, color/contrast, and thumbnail readability.
- Added guidance that agents should look up online images of the object when the visual form or intended Romanian meaning is uncertain, use those sources only for object-shape understanding, and record source URLs in the audit.
- Updated the feature plan and next-image prompt so future image work starts with audit and human-approved scope, not immediate generation.
- Audited the first Batch 40 corrective image list for `A` through `C` on 2026-05-20.
- Tried deterministic local-drawing replacements for `ro-a-acoperis`, `ro-a-alge`, `ro-a-ascutitoare`, `ro-a-ata`, `ro-b-branza`, `ro-b-barza`, `ro-b-buzunar`, `ro-c-ceapa`, `ro-c-ciorap`, `ro-c-cirese`, `ro-c-cap`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura`; the human rejected them as too flat, coarse, ugly, and off-brand.
- Restored those `14` A-C replacement assets to their previous committed versions and reverted the temporary alt text changes.
- Reused the previous casual-cap `ro-c-cascheta` bitmap from Git history for `ro-sh-sapca`, because it fit `șapcă` better than the existing `șapcă` image.
- Recorded the corrective lesson: future A-C replacement work should use the earlier successful AI contact-sheet workflow, not deterministic SVG-like local drawings.
- Added a hard human review gate for corrective regeneration: after each generated contact sheet of about `12` to `15` images, stop and ask the human to review before cropping, optimizing, editing JSON, or replacing production assets.
- Generated one unlabeled AI corrective contact sheet for the `14` A-C flagged assets and stopped for human review.
- Recorded the human approval that the direction was correct, with a request for slightly stronger pixelation if needed.
- Cropped the accepted cells in fixed order and post-processed them through a refined `128 px` pixel-art grid with `96` colors, then nearest-upscaled to `256 x 256 px`.
- Compared the final candidates against `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, and `scaun`; the accepted assets are more polished and dimensional while retaining visible pixel texture.
- Replaced `ro-a-acoperis`, `ro-a-alge`, `ro-a-ascutitoare`, `ro-a-ata`, `ro-b-branza`, `ro-b-barza`, `ro-b-buzunar`, `ro-c-ceapa`, `ro-c-ciorap`, `ro-c-cirese`, `ro-c-cap`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura` with optimized `256 x 256 px` lossless WebP files.
- Confirmed the `14` new A-C assets are between `7692 B` and `11120 B`, below both the `12 KB` warning threshold and the `20 KB` hard maximum.
- Updated only necessary alt text: `ro-a-alge` now describes algae underwater, and `ro-b-buzunar` now describes a pocket on pants.
- Batch 40 QA: sandboxed `pnpm` commands returned `fetch failed`, then outside-sandbox `pnpm run validate:content`, `pnpm run lint`, and `pnpm exec tsc --noEmit --incremental false` passed; `git diff --check` passed.
- Recorded follow-up human notes that `ro-a-ascutitoare` needs pencil orientation correction, `ro-b-bicicleta` should be improved, and several accepted A-C assets had cut-looking backgrounds.
- Normalized full square backgrounds for `ro-a-ascutitoare`, `ro-b-branza`, `ro-b-bustean`, `ro-b-barza`, `ro-c-ceapa`, `ro-c-cirese`, `ro-c-ciorap`, `ro-c-cada`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura` without changing the subject concept.
- Confirmed the background-cleaned assets remain `256 x 256 px` and under the `12 KB` warning threshold.
- Updated `docs/image-pipeline.md` so future image crops must fill the whole square background and reject gutters, side bars, corner blocks, or rectangular panel artifacts before promotion.
- Marked the A-C corrective set done for now per human review, while preserving the caveat that some A-C images may still be improved in a later polish pass.
- Started the next D-F corrective scope for `desen`, `duș`, `echer`, `echipament`, `față`, `frunză`, `fasole`, `frizerie`, and `frizură`; recorded the per-image human issues and candidate directions in `corrective-image-audit-batch-40.md`.
- Generated one unlabeled `3 x 3` D-F corrective contact sheet for `desen`, `duș`, `echer`, `echipament`, `față`, `frunză`, `fasole`, `frizerie`, and `frizură`, then stopped for human review.
- Recorded human approval of all `9` D-F cells.
- Cropped the accepted D-F cells in fixed order, normalized full square backgrounds, post-processed through the refined `128 px` grid and `96`-color palette, nearest-upscaled to `256 x 256 px`, and optimized as lossless WebP files.
- Replaced `ro-d-desen`, `ro-d-dus`, `ro-e-echer`, `ro-e-echipament`, `ro-f-fata`, `ro-f-frunza`, `ro-f-fasole`, `ro-f-frizerie`, and `ro-f-frizura`.
- Confirmed the `9` promoted D-F assets are `256 x 256 px` and between `4574 B` and `8216 B`, below the `12 KB` warning threshold and the `20 KB` hard maximum.
- Updated alt text for `ro-d-desen`, `ro-d-dus`, `ro-e-echipament`, `ro-f-fata`, `ro-f-frizerie`, and `ro-f-frizura` to match the accepted replacements.
- Batch 40 D-F QA: sandboxed `pnpm` commands returned `fetch failed`, then outside-sandbox `pnpm run validate:content`, `pnpm run lint`, and `pnpm exec tsc --noEmit --incremental false` passed; `git diff --check` passed.
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
- Batch 18 decision: the next placeholder image replacement slice should prioritize the remaining `GE`, `GI`, `GHE`, and `GHI` placeholders: `alge`, `fulger`, `mărgele`, `frigider`, `pagină`, `regină`, `înghețată`, `lighean`, `spaghete`, `ghirlandă`, `ghimbir`, and `unghie`. `ghimbir` supersedes the incorrect `ghiuvetă` G-bucket record corrected on 2026-05-26.
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
- Batch 27 decision: use a 16-word C/D/E/F image-only slice because the selected common concrete placeholders generated recognizable, child-safe, text-free thumbnails; keep the remaining F/U/V/Ș/Ț suggestions for a later slice instead of broadening this batch beyond one reviewed contact sheet.
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
- Batch 19 generated and visually reviewed 12 child-safe, text-free, logo-free, brand-free pixel-art images for `alge`, `fulger`, `mărgele`, `frigider`, `pagină`, `regină`, `înghețată`, `lighean`, `spaghete`, `ghirlandă`, `ghimbir`, and `unghie`; the `ghimbir` asset was added later as the 2026-05-26 correction for the incorrect G-bucket `ghiuvetă`.
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
- `ro-g-ghimbir`
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

## Batch 27 Result

Batch 27 completed the tenth placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `C`: `capră`, `căpșună`, `clopoțel`, `colac`, `cort`, `cocoș`, `căruță`, `căsuță`, `cozonac`
- `D`: `delfin`, `dovleac`, `dulap`
- `E`: `elefant`, `elicopter`
- `F`: `floare`, `fluture`

Helper-derived production totals after Batch 27:

- Approved Romanian words: `370`.
- Ready images: `205`.
- Placeholder images: `165`.

Letter image-readiness after Batch 27:

| Letter | Approved | Ready | Placeholder |
| ------ | -------: | ----: | ----------: |
| `C`    |       62 |    57 |           5 |
| `D`    |        9 |     6 |           3 |
| `E`    |        7 |     3 |           4 |
| `F`    |       17 |     9 |           8 |

## Batch 28 Result

Batch 28 completed the eleventh placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `F`: `fular`, `furculiță`
- `U`: `umbrelă`, `ursuleț`
- `V`: `vacă`, `vapor`, `vulpe`
- `Ș`: `șopârlă`, `șarpe`
- `Ț`: `țânțar`

Helper-derived production totals after Batch 28:

- Approved Romanian words: `370`.
- Ready images: `215`.
- Placeholder images: `155`.

Letter image-readiness after Batch 28:

| Letter | Approved | Ready | Placeholder |
| ------ | -------: | ----: | ----------: |
| `F`    |       17 |    11 |           6 |
| `U`    |       10 |     8 |           2 |
| `V`    |        9 |     3 |           6 |
| `Ș`    |       12 |     5 |           7 |
| `Ț`    |        5 |     2 |           3 |

Exact diacritic image-readiness result:

- `Î`: unchanged at `8` starts-with, `0` contains-only, `8` mixed, `6` ready, `2` placeholder.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 28 QA:

- Initial `pnpm` checks failed because `pnpm` was not on the default shell `PATH`; rerunning with `$HOME/.nvm/versions/node/v24.15.0/bin` first on `PATH` fixed the toolchain path.
- `pnpm run validate:content` passed with warning-threshold notices for the new `fular`, `ursuleț`, `vacă`, `vulpe`, and `șarpe` images plus pre-existing older image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` passed with the nvm Node path first on `PATH`.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro`; required outside-sandbox retries returned `200 OK` for `/ro`, `/ro/play/v`, and `/images/ro/v/ro-v-vaca.webp`.

## Batch 29 Result

Batch 29 completed the twelfth placeholder image replacement slice without changing approved vocabulary.

Replaced approved placeholder-backed records:

- `F`: `fustă`, `fotoliu`, `fasole`
- `V`: `vagon`, `varză`, `vază`, `veveriță`, `vioară`, `vițel`
- `Ș`: `șal`, `șampon`, `șervețel`, `șorț`, `șiret`, `șurub`
- `Ț`: `țap`, `țeavă`

Helper-derived production totals after Batch 29:

- Approved Romanian words: `370`.
- Ready images: `232`.
- Placeholder images: `138`.

Letter image-readiness after Batch 29:

| Letter | Approved | Ready | Placeholder |
| ------ | -------: | ----: | ----------: |
| `F`    |       17 |    14 |           3 |
| `V`    |        9 |     9 |           0 |
| `Ș`    |       12 |    11 |           1 |
| `Ț`    |        5 |     4 |           1 |

Exact diacritic image-readiness result:

- `Î`: unchanged at `8` starts-with, `0` contains-only, `8` mixed, `6` ready, `2` placeholder.
- `Ă`: still not enabled.
- `Â`: still not enabled.

Batch 29 QA:

- Initial `pnpm` checks failed because `pnpm` was not on the default shell `PATH`; rerunning with `$HOME/.nvm/versions/node/v24.15.0/bin/corepack pnpm` fixed the toolchain path.
- `pnpm run validate:content` passed with pre-existing image warning-threshold notices only; all new Batch 29 assets are below the `12 KB` warning threshold.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `pnpm run build` passed with the nvm Node path first on `PATH`.
- `git diff --check` passed.
- Sandboxed localhost checks failed for `/ro`, `/ro/play/v`, and `/images/ro/v/ro-v-vagon.webp`; required outside-sandbox retries returned `200 OK` for all three.

## Batch 36 Result

Batch 36 completed the remaining placeholder decision audit without changing approved vocabulary or image assets.

Remaining placeholder decision groups:

- Clear non-person/non-magical replacement candidate: `zmeu`, only if the intended child-facing sense is a toy kite.
- Person/family-sensitive decision: `bebeluș`, `bunic`, `bunică`, `băiețel`, `echipă`, `fetiță`, `frizură`, `gemeni`, `gimnast`, `tata`, and `îmbrățișare`.
- Magical/fantasy-dependent decision: `gigant`, `magie`, `magician`, `unicorn`, `zână`, and `împărat`.
- Likely deferral: `gimnastică`, `ghicitoare`, `miez`, `pluș`, and `stinghie`.

Ready-image quality audit:

- `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa` remain on the corrective-regeneration watchlist.
- The spoken `Capea` note remains unresolved because no current production record matches it.

Production totals are unchanged:

- Approved Romanian words: `370`.
- Ready images: `347`.
- Placeholder images: `23`.

Batch 36 QA:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.

## Batch 37 Result

Batch 37 completed the human decision gate and corrective planning.

Decisions recorded:

- Person/family records should receive normal reviewed images.
- Magical/fantasy records may receive child-safe fantasy images.
- `zmeu` should be treated as a toy kite.
- `gimnastică` should receive an image.
- `pluș` should receive a teddy bear image.
- `ghicitoare`, `miez`, and `stinghie` should be removed from gameplay; their rows now use `status: "rejected"`.
- The spoken `Capea` / `Kapia` note remains unresolved and no matching production row was changed.
- Corrective regeneration is approved for `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.

Batch 37 wrote `image-briefs-batch-37.md` for the approved image scope. No images were generated or promoted.

Production totals after Batch 37:

- Approved Romanian words: `367`.
- Ready images: `347`.
- Approved placeholder images: `20`.

Sequence target impact from the three rejected records:

- `CI` mixed count is now `18`.
- `GHI` mixed count is now `13`.

Batch 37 QA:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices.
- `pnpm run lint` passed.
- `pnpm exec tsc --noEmit` passed.
- `pnpm run check:gameplay` passed after updating expected `CI` and `GHI` mixed counts for the approved cleanup.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- `pnpm run build` remains blocked locally by the known Next SWC darwin/arm64 code-signature error before app compilation.
- Sandboxed localhost check failed for `/ro/play/ci`; the required outside-sandbox retry returned `200 OK`.

## Batch 38 Result

Batch 38 completed the approved Batch 37 image generation and corrective regeneration scope.

Implemented image work:

- Replaced the `20` remaining approved placeholder images with reviewed ready WebP assets.
- Regenerated the `5` approved corrective ready assets: `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.
- Created contact, brand-comparison, and final contact sheets before promotion.
- Confirmed `zmeu` is shown as a colorful toy kite only.
- Confirmed `pluș` is shown as a teddy bear.
- Kept `ghicitoare`, `miez`, and `stinghie` rejected.
- Kept the spoken `Capea` / `Kapia` note unresolved because no current production record matches it.

Production totals after Batch 38:

- Approved Romanian words: `367`.
- Ready images: `367`.
- Approved placeholder images: `0`.

Batch 38 QA:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices; all Batch 38 assets are below the warning threshold and hard maximum.
- `pnpm run lint` passed.
- `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` and `pnpm run check:matching` initially failed when Bun was omitted from the verification `PATH`, then both passed with `/Users/darius/.bun/bin` included.
- `git diff --check` passed.
- `pnpm run optimize:images -- --dry-run --source assets/image-sources/batch-38` passed. The real optimize pass through the `pnpm` wrapper hit the known local Sharp code-signature issue under the app-bundled Node runtime, so the same optimizer script was run with `/Users/darius/.nvm/versions/node/v24.15.0/bin/node` and completed successfully.
- Sandboxed localhost checks failed for `/ro`, `/ro/play/b`, and `/images/ro/b/ro-b-bebelus.webp`; the required outside-sandbox retries returned `200 OK`.
- Outside-sandbox route and asset checks also returned `200 OK` for `/ro/play/g`, `/images/ro/g/ro-g-gigant.webp`, `/images/ro/z/ro-z-zmeu.webp`, `/images/ro/%C3%AE/ro-i-circ-imparat.webp`, and `/images/ro/r/ro-r-robinet.webp`.
- Browser verification loaded `http://localhost:3000/ro/play/b`; the page rendered the `B` wheel, included `bebeluș`, and exposed the expected SVG image href `/images/ro/b/ro-b-bebelus.webp`.

## Batch 39 Result

Batch 39 completed the final Romanian image pack QA and release readiness audit without adding vocabulary, generating images, or changing production records.

Audit result:

- Production JSON contains `370` total Romanian records: `367` approved, `3` rejected, and `0` drafts.
- All `367` approved records have `imageStatus: "ready"`, app-owned licensing, and existing public WebP assets.
- Approved production content has `0` placeholder images.
- The non-placeholder public image tree has exactly `367` WebP assets referenced by approved ready records, with no missing or unused production image files.
- `ro-g-ghicitoare`, `ro-m-miez`, and `ro-s-stinghie` remain `rejected` placeholder-backed audit-trail rows and do not appear in `/admin/words` or representative gameplay route text.
- No current production record matches the spoken `Capea` / `Kapia` note, so no vocabulary or asset change was made.
- `/admin/words` renders `367` approved words, `367` ready images, and `0` placeholder images.
- Representative local routes on `http://localhost:3000` render as expected: `/ro`, `/admin/words`, `/ro/play/b`, `/ro/play/g`, `/ro/play/ghe`, `/ro/play/i-circ`, and `/images/ro/z/ro-z-zmeu.webp`.

Batch 39 QA:

- `pnpm run validate:content` passed with only existing image warning-threshold notices.
- `pnpm run lint` passed.
- `pnpm exec tsc --noEmit --incremental false` passed.
- `pnpm run check:gameplay` passed.
- `pnpm run check:matching` passed.
- `git diff --check` passed.
- Sandboxed localhost checks failed for representative routes and assets; the required outside-sandbox retries returned `200 OK`.

## Batch 40 Corrective Image Continuation

Batch 40 continued with human-flagged corrective image work after the A-C and D-F passes.

Implemented G-M corrective changes:

- Generated one unlabeled 13-cell AI contact sheet for `gem`, `garaj`, `gemeni`, `ger`, `gheretă`, `gheruță`, `insulă`, `iaz`, `lac`, `melc`, `mușețel`, `mărțișor`, and `mazăre`.
- Looked up `mărțișor` before prompting and recorded the Romanian red-white cord/trinket sources in the corrective audit document.
- Stopped for human review; the human accepted all cells.
- Cropped the accepted cells in fixed order, normalized them onto true square `256 x 256 px` canvases, processed them through the refined `128 px` / `96` color pixel-art workflow, and optimized them as lossless WebP files below the `12 KiB` warning boundary.
- Updated only necessary alt text for `garaj`, `gemeni`, `ger`, `gheretă`, `iaz`, `lac`, `mușețel`, and `mărțișor`.
- Updated `docs/image-pipeline.md` to explicitly reject partial/cut backgrounds inside future generated contact-sheet cells.

G-M verification:

- `pnpm run validate:content` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`; only pre-existing image-size warnings were reported, and none of the promoted G-M assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Batch 40 N-R Corrective Image Continuation

Batch 40 continued with another human-flagged corrective image list after the G-M pass.

Implemented N-R corrective changes:

- Generated one unlabeled 12-cell AI contact sheet for `nas`, `plajă`, `ploaie`, `prăjitură`, `păianjen`, `poză`, `pisicuță`, `raft`, `ramură`, `râu`, `roșie`, and `rotiță`.
- The human accepted the first 11 cells and requested another pass only for `rotiță`, which needed to read more as a cog or visibly small wheel instead of a full vehicle tire.
- Generated a focused 4-cell `rotiță` variant sheet; the human accepted the bottom-left third cell.
- Cropped accepted cells in fixed order, normalized them onto true square `256 x 256 px` canvases, processed them through the refined `128 px` pixel-art workflow, and optimized them as lossless WebP files below the `12 KiB` warning boundary.
- Updated only necessary alt text for `prăjitură`, `poză`, `pisicuță`, `raft`, and `rotiță`.

N-R verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing image-size warnings were reported, and none of the promoted N-R assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Batch 40 S Corrective Image Continuation

Batch 40 continued with a human-approved corrective pass for the `S` letter.

Implemented S corrective changes:

- Excluded the human-approved acceptable S images: `soare`, `suc`, `săpun`, `scaun`, and `spaghete`.
- Left rejected audit-trail row `stinghie` untouched.
- Generated one unlabeled 12-cell AI contact sheet for `sanie`, `salată`, `sandale`, `sandviș`, `scară`, `scoică`, `sfoară`, `spumă`, `struguri`, `stilou`, `stejar`, and `săniuță`.
- The human accepted all S cells.
- Cropped accepted cells in fixed order, then added circular-slot QA because the app displays images in circular wheel slots and future admin thumbnails may also be circular.
- Promoted circle-safe `256 x 256 px` lossless WebP assets; the circular-mask preview confirmed the subject stays inside the inscribed circle for each S crop.
- Updated only necessary alt text for `sanie`, `sandviș`, and `săniuță`.
- Updated `docs/image-pipeline.md` with a reusable circular corrective prompt add-on for future batch-by-batch regeneration.

S verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing image-size warnings were reported, and none of the promoted S assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Batch 40 Ș-T-Ț-U-Z Corrective Image Continuation

Batch 40 continued with a human-approved corrective pass for selected `Ș`, `T`, `Ț`, `U`, and `Z` images.

Implemented corrective changes:

- Generated one unlabeled 18-cell AI contact sheet for `șoricel`, `șosetă`, `șervețel`, `școală`, `tavă`, `telefon`, `tigru`, `tobă`, `tort`, `tricou`, `televizor`, `țestoasă`, `țurțure`, `ulei`, `zar`, `zid`, `zmeură`, and `zambilă`.
- The human accepted all cells.
- Cropped accepted cells in fixed order, added circular-slot QA, and promoted circle-safe `256 x 256 px` lossless WebP assets.
- The circular-mask preview confirmed the subject stays inside the inscribed circle for each crop.
- Updated only necessary alt text for `șosetă`, `șervețel`, `tavă`, `tobă`, `tort`, `televizor`, `țurțure`, and `zmeură`.

Ș-T-Ț-U-Z verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing image-size warnings were reported, and none of the promoted Ș-T-Ț-U-Z assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Next Batch

The next approved Romanian vocabulary-expansion step is Batch 72: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool.

Ready-to-copy prompt:

```txt
You are continuing Word Wheel Romanian content expansion after Batch 71.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
6. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
7. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
10. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
11. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
12. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-64.md
13. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-68.md
14. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-71.md
15. docs/app-development-program/features/romanian-content-expansion/status.md
16. docs/status.md

Goal:

Execute Batch 72: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. Do not generate images or add production JSON records in this batch.

Tasks:

- Recompute the current canonical totals and requested-target coverage from `content/ro/*.json`.
- Review remaining Batch 43 candidate rows after excluding already planned/promoted rows from Batches 44, 48, 52, 56, 60, 64, and 68.
- Select up to `15` concrete, child-safe, imageable Romanian nouns that are defensible for production and improve underfilled monitored areas without forcing obscure rare-letter padding.
- Before accepting any word whose current usage, form, child familiarity, safety, or source status is uncertain, do current source research and record the source.
- For each selected row, record canonical file, stable ID, planned image path, normalized form, category, difficulty, source check, image brief direction, and expected starts/contains impact.
- Defer weak rows with explicit reasons, especially near-duplicates, visually confusing concepts, obscure terms, or safety-awkward words.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, do not reintroduce `webcam` or `yak`, and do not reopen `răchită` without explicit human decision.
- Run `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the planning result and the Batch 73 image-brief/contact-sheet prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
