# Romanian Content Expansion Batch 97 Production Slice Planning

Date: 2026-06-28

## Scope

Batch 97 plans Slice 6 from `slice-plan-index-batch-76.md` only.

Planned candidates, preserving Batch 76 order:

1. `coif`
2. `ceafă`
3. `puf`
4. `șifonier`
5. `cufăr`
6. `trifoi`
7. `șuncă`
8. `șnițel`
9. `șalupă`
10. `șah`
11. `șevalet`
12. `șofer`
13. `șotron`
14. `brioșă`
15. `coșuleț`

This is a planning-only batch. It does not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Source Basis

All `15` candidates are Batch 75 non-hold accepted candidates and remain in Slice 6 of the Batch 76 plan.

Source/spelling checks used DEX Online definition pages as current lexical references:

| Candidate | Source |
| --- | --- |
| `coif` | [dexonline.ro/definitie/coif](https://dexonline.ro/definitie/coif) |
| `ceafă` | [dexonline.ro/definitie/ceaf%C4%83](https://dexonline.ro/definitie/ceaf%C4%83) |
| `puf` | [dexonline.ro/definitie/puf](https://dexonline.ro/definitie/puf) |
| `șifonier` | [dexonline.ro/definitie/%C8%99ifonier](https://dexonline.ro/definitie/%C8%99ifonier) |
| `cufăr` | [dexonline.ro/definitie/cuf%C4%83r](https://dexonline.ro/definitie/cuf%C4%83r) |
| `trifoi` | [dexonline.ro/definitie/trifoi](https://dexonline.ro/definitie/trifoi) |
| `șuncă` | [dexonline.ro/definitie/%C8%99unc%C4%83](https://dexonline.ro/definitie/%C8%99unc%C4%83) |
| `șnițel` | [dexonline.ro/definitie/%C8%99ni%C8%9Bel](https://dexonline.ro/definitie/%C8%99ni%C8%9Bel) |
| `șalupă` | [dexonline.ro/definitie/%C8%99alup%C4%83](https://dexonline.ro/definitie/%C8%99alup%C4%83) |
| `șah` | [dexonline.ro/definitie/%C8%99ah](https://dexonline.ro/definitie/%C8%99ah) |
| `șevalet` | [dexonline.ro/definitie/%C8%99evalet](https://dexonline.ro/definitie/%C8%99evalet) |
| `șofer` | [dexonline.ro/definitie/%C8%99ofer](https://dexonline.ro/definitie/%C8%99ofer) |
| `șotron` | [dexonline.ro/definitie/%C8%99otron](https://dexonline.ro/definitie/%C8%99otron) |
| `brioșă` | [dexonline.ro/definitie/brio%C8%99%C4%83](https://dexonline.ro/definitie/brio%C8%99%C4%83) |
| `coșuleț` | [dexonline.ro/definitie/co%C8%99ule%C8%9B](https://dexonline.ro/definitie/co%C8%99ule%C8%9B) |

No current-fact production decision was made beyond lexical/source confirmation.

## Checks Re-Run

Recomputed after Batch 95 / Batch 96 state:

- Total Romanian records: `554`
- Approved words: `551`
- Ready images: `551`
- Approved placeholders: `0`
- Rejected audit-trail rows: `3`

Collision checks against current `content/ro/words-*.json` found:

- no exact `word` collisions;
- no exact `display` collisions;
- no normalized-form collisions;
- no planned stable-ID collisions;
- no planned image-path collisions.

Rejected audit-trail rows remain unrelated:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Planned Rows

| # | Display | Canonical file | Stable ID | Image path | Normalized | Category | Part of speech | Difficulty | Age band | Speech-target value | Alt-text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `coif` | `content/ro/words-c.json` | `ro-c-coif` | `/images/ro/c/ro-c-coif.webp` | `coif` | `clothing` | `noun` | 3 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `Un coif de petrecere` |
| 2 | `ceafă` | `content/ro/words-c.json` | `ro-c-ceafa` | `/images/ro/c/ro-c-ceafa.webp` | `ceafa` | `body` | `noun` | 3 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `Ceafa unui copil văzută din spate` |
| 3 | `puf` | `content/ro/words-p.json` | `ro-p-puf` | `/images/ro/p/ro-p-puf.webp` | `puf` | `nature` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `Un puf moale de pană` |
| 4 | `șifonier` | `content/ro/words-ș.json` | `ro-sh-sifonier` | `/images/ro/ș/ro-sh-sifonier.webp` | `sifonier` | `household` | `noun` | 2 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un șifonier` |
| 5 | `cufăr` | `content/ro/words-c.json` | `ro-c-cufar` | `/images/ro/c/ro-c-cufar.webp` | `cufar` | `household` | `noun` | 2 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `Un cufăr de lemn` |
| 6 | `trifoi` | `content/ro/words-t.json` | `ro-t-trifoi` | `/images/ro/t/ro-t-trifoi.webp` | `trifoi` | `nature` | `noun` | 1 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `Un trifoi verde` |
| 7 | `șuncă` | `content/ro/words-ș.json` | `ro-sh-sunca` | `/images/ro/ș/ro-sh-sunca.webp` | `sunca` | `food` | `noun` | 2 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Felii de șuncă pe o farfurie` |
| 8 | `șnițel` | `content/ro/words-ș.json` | `ro-sh-snitel` | `/images/ro/ș/ro-sh-snitel.webp` | `snitel` | `food` | `noun` | 2 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un șnițel pe o farfurie` |
| 9 | `șalupă` | `content/ro/words-ș.json` | `ro-sh-salupa` | `/images/ro/ș/ro-sh-salupa.webp` | `salupa` | `vehicle` | `noun` | 3 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O șalupă pe apă` |
| 10 | `șah` | `content/ro/words-ș.json` | `ro-sh-sah` | `/images/ro/ș/ro-sh-sah.webp` | `sah` | `toy` | `noun` | 3 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `O tablă de șah cu piese` |
| 11 | `șevalet` | `content/ro/words-ș.json` | `ro-sh-sevalet` | `/images/ro/ș/ro-sh-sevalet.webp` | `sevalet` | `school` | `noun` | 3 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `Un șevalet cu hârtie albă` |
| 12 | `șofer` | `content/ro/words-ș.json` | `ro-sh-sofer` | `/images/ro/ș/ro-sh-sofer.webp` | `sofer` | `people` | `noun` | 3 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `Un șofer într-o mașină` |
| 13 | `șotron` | `content/ro/words-ș.json` | `ro-sh-sotron` | `/images/ro/ș/ro-sh-sotron.webp` | `sotron` | `toy` | `noun` | 3 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Un șotron desenat pe jos` |
| 14 | `brioșă` | `content/ro/words-b.json` | `ro-b-briosa` | `/images/ro/b/ro-b-briosa.webp` | `briosa` | `food` | `noun` | 1 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `O brioșă` |
| 15 | `coșuleț` | `content/ro/words-c.json` | `ro-c-cosulet` | `/images/ro/c/ro-c-cosulet.webp` | `cosulet` | `household` | `noun` | 2 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `Un coșuleț mic` |

## Source / Safety / Child-Fit Decisions

All `15` rows remain active.

| Display | Decision | Notes |
| --- | --- | --- |
| `coif` | Active | Use party-hat/paper-cone sense; avoid helmet, armor, sharp cone, dunce-cap shame cue, or historical battle framing. |
| `ceafă` | Active with strict imageability review | Body-part row is harder than object rows. Use back-of-neck/head cue, neutral child-safe framing, no medical, injury, massage, pain, or close skin crop. |
| `puf` | Active with strict imageability review | Use soft feather/fluff cue. Avoid abstract cloud, dust, dirt, mold, smoke, or unreadable blob. |
| `șifonier` | Active | Clear wardrobe/closet object; avoid brand, mirror reflection, or cluttered room. |
| `cufăr` | Active | Storage chest sense; avoid pirate treasure branding, weapons, skulls, coins/money emphasis, or scary attic mood. |
| `trifoi` | Active | Green clover; simple and child-known enough as a nature object. |
| `șuncă` | Active with duplicate-image review | Must be visually distinct from existing `jambon`; use pink ham slices on a plate, no packaging or labels. |
| `șnițel` | Active | Breaded cutlet on plate; avoid raw meat, grease, knife, restaurant branding, or adult dining scene. |
| `șalupă` | Active | Small motor boat on calm water; keep distinct from `barcă`, `velier`, `navă`, and `vapor`. |
| `șah` | Active | Chess board/pieces; no letters, numbers, flags, logos, or combat metaphor. |
| `șevalet` | Active | Art easel with blank paper/canvas; no readable letters or logo on the paper. |
| `șofer` | Active with person-row review | Friendly driver in a simple car; no accident, police stop, seatbelt warning, brand, or adult realism. |
| `șotron` | Active with scene review | Hopscotch grid on pavement; no written numbers or letters; can use colored squares and a beanbag/stone cue. |
| `brioșă` | Active | Muffin/cupcake object; no candle, birthday text, logo, or wrapper brand. |
| `coșuleț` | Active with near-neighbor review | Small basket/diminutive sense; keep distinct from existing `coș`, `coș de gunoi`, or fruit basket by using one small woven basket. |

No row failed source, safety, duplicate, child-fit, or imageability checks at planning time. The rows with imageability or near-neighbor risk remain active only because the planned image sense is concrete and reviewable.

## Expected Coverage Impact

If all `15` rows later pass image review and promotion, direct starts-with deltas:

| Target | Starts delta |
| --- | ---: |
| `C` | `+4` |
| `P` | `+1` |
| `Ș` | `+8` |
| `T` | `+1` |
| `B` | `+1` |

Expected affected coverage:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `C` | `71 / 97 / 168` | `75 / 98 / 173` | `+4 / +1 / +5` |
| `P` | `44 / 48 / 92` | `45 / 49 / 94` | `+1 / +1 / +2` |
| `Ș` | `19 / 32 / 51` | `27 / 34 / 61` | `+8 / +2 / +10` |
| `T` | `18 / 131 / 149` | `19 / 133 / 152` | `+1 / +2 / +3` |
| `B` | `37 / 37 / 74` | `38 / 37 / 75` | `+1 / +0 / +1` |
| `F` | `27 / 18 / 45` | `27 / 25 / 52` | `+0 / +7 / +7` |
| `CE` | `14 / 5 / 19` | `15 / 5 / 20` | `+1 / +0 / +1` |
| `U` | `11 / 132 / 143` | `11 / 137 / 148` | `+0 / +5 / +5` |
| `R` | `22 / 205 / 227` | `22 / 211 / 233` | `+0 / +6 / +6` |
| `I` | `9 / 216 / 225` | `9 / 221 / 230` | `+0 / +5 / +5` |
| `O` | `9 / 137 / 146` | `9 / 144 / 153` | `+0 / +7 / +7` |
| `Ă` | `0 / 224 / 224` | `0 / 229 / 229` | `+0 / +5 / +5` |
| `N` | `6 / 157 / 163` | `6 / 161 / 167` | `+0 / +4 / +4` |
| `E` | `9 / 230 / 239` | `9 / 236 / 245` | `+0 / +6 / +6` |
| `A` | `19 / 239 / 258` | `19 / 243 / 262` | `+0 / +4 / +4` |
| `Ț` | `14 / 48 / 62` | `14 / 50 / 64` | `+0 / +2 / +2` |
| `L` | `22 / 116 / 138` | `22 / 120 / 142` | `+0 / +4 / +4` |
| `H` | `24 / 64 / 88` | `24 / 65 / 89` | `+0 / +1 / +1` |

Sequence coverage impact:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `CE` | `14 / 5 / 19` | `15 / 5 / 20` | `+1 / +0 / +1` |

Other tracked sequences are expected to remain unchanged.

## Route And Validation Impact

If later promoted with ready images, Slice 6 affects existing routes only:

- `/ro/play/c`
- `/ro/play/p`
- `/ro/play/sh`
- `/ro/play/t`
- `/ro/play/b`
- `/admin/words`
- `/admin/releases/2`

No route, schema, loader, database, auth, billing, admin editing, or speech-target metadata changes are required.

Expected manifest changes for the later production batch:

- `content/ro/words-c.json`: `coif`, `ceafă`, `cufăr`, `coșuleț`
- `content/ro/words-p.json`: `puf`
- `content/ro/words-ș.json`: `șifonier`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`
- `content/ro/words-t.json`: `trifoi`
- `content/ro/words-b.json`: `brioșă`

Expected release review impact:

- `/admin/releases/2` should add exactly `15` IDs, increasing Release 2 from `184` to `199` dirty-tree additions if all rows are promoted.

Expected fixture impact after later promotion:

- `src/game/gameplay-compatibility.check.ts`: `expectedPracticeTargetMixedCounts.ce` likely changes from `19` to `20` because of `ceafă`.
- Existing `F` starts-with excluding exact `R` fixtures should remain `10`; Slice 6 adds no `F` starts-with words.

## Image Brief Risks For Batch 98

Batch 98 should create a `5 x 3` contact sheet in this exact row-major order:

`coif`, `ceafă`, `puf`, `șifonier`, `cufăr`, `trifoi`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`, `brioșă`, `coșuleț`

Required image decisions:

- `coif`: party-hat/paper-cone sense only; no helmet/armor/shame cue.
- `ceafă`: neutral back-of-neck cue; no medical/injury/massage framing and no confusing close-up skin crop.
- `puf`: soft feather/fluff cue; must not become smoke, dust, cloud, mold, or an abstract blob.
- `șuncă`: must be distinct from existing `jambon`; use ham slices without packaging.
- `șnițel`: breaded cutlet, no raw meat or knife.
- `șalupă`: small motor boat, distinct from `barcă`, `velier`, `navă`, and `vapor`.
- `șah`: board and pieces only, no letters or numbers.
- `șofer`: person row; keep friendly, fully clothed, car context visible, no accident/police/emergency.
- `șotron`: hopscotch grid without numbers or letters.
- `coșuleț`: small basket; avoid duplicate-looking `coș` or generic fruit-basket image.

Every generated cell must be inspected in a circular mask before promotion. Long or scene-based rows (`șalupă`, `șofer`, `șotron`, `șifonier`, `șevalet`) need extra safe margin so no important subject part is clipped by the circular wheel slot.

## Batch 98 Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 98.

Read:
AGENTS.md
docs/agent-brief.md
docs/spec.md
docs/plan.md
docs/status.md
docs/image-pipeline.md
docs/app-development-program/speech-therapy-content-guidance.md
docs/app-development-program/features/romanian-content-expansion/spec.md
docs/app-development-program/features/romanian-content-expansion/plan.md
docs/app-development-program/features/romanian-content-expansion/status.md
docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-97.md

Task: Batch 98 image briefs/contact-sheet generation for Slice 6 only.

Create image briefs and generate the review contact sheet for these active Slice 6 rows, preserving order:
coif, ceafă, puf, șifonier, cufăr, trifoi, șuncă, șnițel, șalupă, șah, șevalet, șofer, șotron, brioșă, coșuleț.

Constraints:
- The separate image-approval stop is waived for this orchestrator run, but QA is not waived.
- Do not add production JSON until images are semantically clear, child-safe, brand-consistent, and circular-mask safe.
- Use a 5 columns x 3 rows unlabeled contact sheet in exact row-major order.
- Do not add placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Pay special attention to `ceafă`, `puf`, `șuncă`, `șalupă`, `șah`, `șofer`, `șotron`, and `coșuleț`.
- After image generation, crop and optimize accepted cells only, render circular-mask previews, promote ready images and content rows, update `/admin/releases/2`, update derived-content fixtures if needed, run all project verification, perform localhost route/image checks on port 3000, update status docs, and report changed files plus verification results.
```

## Verification

Batch 97 verification:

```txt
git diff --check
```
