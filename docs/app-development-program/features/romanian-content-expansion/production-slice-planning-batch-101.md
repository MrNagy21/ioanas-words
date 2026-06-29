# Romanian Content Expansion Batch 101 Production Slice Planning

Date: 2026-06-29

## Scope

Batch 101 plans Slice 7 from `slice-plan-index-batch-76.md` only.

Planned candidates, preserving Batch 76 order:

1. `tuș`
2. `trotinetă`
3. `trusă`
4. `tub`
5. `turn`
6. `tunel`
7. `tăiței`
8. `tufiș`
9. `telecomandă`
10. `termos`
11. `tricicletă`
12. `lemn`
13. `lacăt`
14. `libelulă`
15. `lift`

This is a planning-only batch. It does not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Source Basis

All `15` candidates are Batch 75 non-hold accepted candidates and remain in Slice 7 of the Batch 76 plan.

Source/spelling checks used DEX Online where accessible through the browser tool, with Wiktionary fallback for encoded pages that did not render in-tool:

| Candidate | Source |
| --- | --- |
| `tuș` | [dexonline.ro/definitie/tu%C8%99](https://dexonline.ro/definitie/tu%C8%99) |
| `trotinetă` | [dexonline.ro/definitie/trotinet%C4%83](https://dexonline.ro/definitie/trotinet%C4%83) |
| `trusă` | [dexonline.ro/definitie/trus%C4%83](https://dexonline.ro/definitie/trus%C4%83) |
| `tub` | [dexonline.ro/definitie/tub](https://dexonline.ro/definitie/tub) |
| `turn` | [dexonline.ro/definitie/turn](https://dexonline.ro/definitie/turn) |
| `tunel` | [dexonline.ro/definitie/tunel](https://dexonline.ro/definitie/tunel) |
| `tăiței` | [ro.wiktionary.org/wiki/t%C4%83i%C8%9Bei](https://ro.wiktionary.org/wiki/t%C4%83i%C8%9Bei) |
| `tufiș` | [dexonline.ro/definitie/tufi%C8%99](https://dexonline.ro/definitie/tufi%C8%99) |
| `telecomandă` | [dexonline.ro/definitie/telecomanda](https://dexonline.ro/definitie/telecomanda) |
| `termos` | [dexonline.ro/definitie/termos](https://dexonline.ro/definitie/termos) |
| `tricicletă` | [ro.wiktionary.org/wiki/triciclet%C4%83](https://ro.wiktionary.org/wiki/triciclet%C4%83) |
| `lemn` | [dexonline.ro/definitie/lemn](https://dexonline.ro/definitie/lemn) |
| `lacăt` | [dexonline.ro/definitie/lac%C4%83t](https://dexonline.ro/definitie/lac%C4%83t) |
| `libelulă` | [dexonline.ro/definitie/libelul%C4%83](https://dexonline.ro/definitie/libelul%C4%83) |
| `lift` | [dexonline.ro/definitie/lift](https://dexonline.ro/definitie/lift) |

No current-fact production decision was made beyond lexical/source confirmation.

## Checks Re-Run

Recomputed after Batch 99 / Batch 100 state:

- Total Romanian records: `569`
- Approved words: `566`
- Ready images: `566`
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
| 1 | `tuș` | `content/ro/words-t.json` | `ro-t-tus` | `/images/ro/t/ro-t-tus.webp` | `tus` | `school` | `noun` | 3 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `O sticluță cu tuș și o pensulă` |
| 2 | `trotinetă` | `content/ro/words-t.json` | `ro-t-trotineta` | `/images/ro/t/ro-t-trotineta.webp` | `trotineta` | `toy` | `noun` | 2 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `O trotinetă pentru copii` |
| 3 | `trusă` | `content/ro/words-t.json` | `ro-t-trusa` | `/images/ro/t/ro-t-trusa.webp` | `trusa` | `school` | `noun` | 2 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `O trusă de creioane` |
| 4 | `tub` | `content/ro/words-t.json` | `ro-t-tub` | `/images/ro/t/ro-t-tub.webp` | `tub` | `school` | `noun` | 2 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un tub de vopsea` |
| 5 | `turn` | `content/ro/words-t.json` | `ro-t-turn` | `/images/ro/t/ro-t-turn.webp` | `turn` | `household` | `noun` | 2 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `Un turn simplu` |
| 6 | `tunel` | `content/ro/words-t.json` | `ro-t-tunel` | `/images/ro/t/ro-t-tunel.webp` | `tunel` | `vehicle` | `noun` | 2 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `Un tunel cu drum` |
| 7 | `tăiței` | `content/ro/words-t.json` | `ro-t-taitei` | `/images/ro/t/ro-t-taitei.webp` | `taitei` | `food` | `noun` | 2 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Tăiței într-un bol` |
| 8 | `tufiș` | `content/ro/words-t.json` | `ro-t-tufis` | `/images/ro/t/ro-t-tufis.webp` | `tufis` | `nature` | `noun` | 2 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un tufiș verde` |
| 9 | `telecomandă` | `content/ro/words-t.json` | `ro-t-telecomanda` | `/images/ro/t/ro-t-telecomanda.webp` | `telecomanda` | `household` | `noun` | 2 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O telecomandă simplă` |
| 10 | `termos` | `content/ro/words-t.json` | `ro-t-termos` | `/images/ro/t/ro-t-termos.webp` | `termos` | `household` | `noun` | 2 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `Un termos` |
| 11 | `tricicletă` | `content/ro/words-t.json` | `ro-t-tricicleta` | `/images/ro/t/ro-t-tricicleta.webp` | `tricicleta` | `vehicle` | `noun` | 2 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `O tricicletă pentru copii` |
| 12 | `lemn` | `content/ro/words-l.json` | `ro-l-lemn` | `/images/ro/l/ro-l-lemn.webp` | `lemn` | `nature` | `noun` | 1 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `O bucată de lemn` |
| 13 | `lacăt` | `content/ro/words-l.json` | `ro-l-lacat` | `/images/ro/l/ro-l-lacat.webp` | `lacat` | `household` | `noun` | 2 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Un lacăt` |
| 14 | `libelulă` | `content/ro/words-l.json` | `ro-l-libelula` | `/images/ro/l/ro-l-libelula.webp` | `libelula` | `animal` | `noun` | 2 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `O libelulă` |
| 15 | `lift` | `content/ro/words-l.json` | `ro-l-lift` | `/images/ro/l/ro-l-lift.webp` | `lift` | `household` | `noun` | 2 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `Un lift cu uși închise` |

## Source / Safety / Child-Fit Decisions

All `15` rows remain active.

| Display | Decision | Notes |
| --- | --- | --- |
| `tuș` | Active with strict imageability review | Use drawing ink bottle with brush. Avoid makeup mascara, unreadable black puddle, bottle label text, spill mess, or tattoo/adult cues. |
| `trotinetă` | Active | Child kick scooter; no rider needed, no brand, no traffic danger. |
| `trusă` | Active with fixed sense | School pencil case/art kit sense. Avoid medical first-aid kit, red cross, needles, medicine, adult tools, or emergency framing. |
| `tub` | Active with fixed sense | Plain paint tube or squeeze tube with colored paint cue. Avoid medical tube, plumbing pipe, laboratory tube, toothpaste brand, readable text, or adult hygiene cue. |
| `turn` | Active | Simple friendly tower; avoid war, prison, church-specific cross, national flag, scary castle, or collapsing building. |
| `tunel` | Active | Road/tunnel opening sense; no crash, dark scary tunnel, train hazard, or warning signs. |
| `tăiței` | Active | Noodles in a bowl; no text or brand packaging. |
| `tufiș` | Active | Bush, distinct from tree and flower. |
| `telecomandă` | Active | Remote control with simple button shapes only; no readable letters/numbers, brand, logo, TV screen, or adult content. |
| `termos` | Active | Thermos bottle; no brand, logo, text, or glass-break risk. |
| `tricicletă` | Active | Child tricycle; no fall, rider injury, traffic, or brand. |
| `lemn` | Active | Wood piece/log/plank; avoid duplicate-looking `băț`, `parchet`, or `cufăr`. |
| `lacăt` | Active | Padlock; avoid prison/security alarm vibe, brand, key text, or scary locked-person cue. |
| `libelulă` | Active | Dragonfly; child-safe insect depiction, not frightening. |
| `lift` | Active | Elevator doors; no readable floor numbers, emergency, trapped person, or warning signs. |

No row failed source, safety, duplicate, child-fit, or imageability checks at planning time. The rows with ambiguity risk remain active only because the planned image sense is concrete and reviewable.

## Expected Coverage Impact

If all `15` rows later pass image review and promotion, direct starts-with deltas:

| Target | Starts delta |
| --- | ---: |
| `T` | `+11` |
| `L` | `+4` |

Expected affected coverage:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `T` | `19 / 133 / 152` | `30 / 135 / 165` | `+11 / +2 / +13` |
| `L` | `22 / 120 / 142` | `26 / 123 / 149` | `+4 / +3 / +7` |
| `U` | `11 / 137 / 148` | `11 / 144 / 155` | `+0 / +7 / +7` |
| `Ș` | `27 / 34 / 61` | `27 / 36 / 63` | `+0 / +2 / +2` |
| `R` | `22 / 211 / 233` | `22 / 216 / 238` | `+0 / +5 / +5` |
| `Ă` | `0 / 229 / 229` | `0 / 236 / 236` | `+0 / +7 / +7` |
| `I` | `9 / 221 / 230` | `9 / 227 / 236` | `+0 / +6 / +6` |
| `E` | `9 / 236 / 245` | `9 / 244 / 253` | `+0 / +8 / +8` |
| `N` | `6 / 161 / 167` | `6 / 166 / 172` | `+0 / +5 / +5` |
| `C` | `75 / 98 / 173` | `75 / 101 / 176` | `+0 / +3 / +3` |
| `A` | `19 / 243 / 262` | `19 / 245 / 264` | `+0 / +2 / +2` |
| `F` | `27 / 25 / 52` | `27 / 27 / 54` | `+0 / +2 / +2` |
| `M` | `27 / 59 / 86` | `27 / 62 / 89` | `+0 / +3 / +3` |
| `D` | `25 / 30 / 55` | `25 / 31 / 56` | `+0 / +1 / +1` |
| `B` | `38 / 37 / 75` | `38 / 39 / 77` | `+0 / +2 / +2` |

Sequence coverage impact:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `CI` | `9 / 11 / 20` | `9 / 12 / 21` | `+0 / +1 / +1` |

Other tracked sequences are expected to remain unchanged.

## Route And Validation Impact

If later promoted with ready images, Slice 7 affects existing routes only:

- `/ro/play/t`
- `/ro/play/l`
- `/admin/words`
- `/admin/releases/2`

No route, schema, loader, database, auth, billing, admin editing, or speech-target metadata changes are required.

Expected manifest changes for the later production batch:

- `content/ro/words-t.json`: all `11` T rows;
- `content/ro/words-l.json`: all `4` L rows.

Expected release review impact:

- `/admin/releases/2` should add exactly `15` IDs, increasing Release 2 from `199` to `214` dirty-tree additions if all rows are promoted.

Expected fixture impact after later promotion:

- `src/game/gameplay-compatibility.check.ts`: `expectedPracticeTargetMixedCounts.ci` likely changes from `20` to `21` because `tricicletă` adds one contains-only `CI` row.

## Image Brief Risks For Batch 102

Batch 102 should create a `5 x 3` contact sheet in this exact row-major order:

`tuș`, `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`, `lemn`, `lacăt`, `libelulă`, `lift`

Required image decisions:

- `tuș`: drawing ink bottle with brush, no text, no makeup, no tattoo.
- `trusă`: school pencil case/art kit, no medical kit or red cross.
- `tub`: plain paint/squeeze tube, no text, no medical/plumbing/lab cue.
- `telecomandă`: no readable letters/numbers or brand marks on buttons.
- `lift`: no floor numbers, emergency signage, or trapped-person framing.
- Long or edge-heavy rows (`trotinetă`, `tricicletă`, `libelulă`, `lift`) need extra circular-mask margin.

Every generated cell must be inspected in a circular mask before promotion.

## Batch 102 Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 102.

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
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-101.md

Task: Batch 102 image briefs/contact-sheet generation for Slice 7 only.

Create image briefs and generate the review contact sheet for these active Slice 7 rows, preserving order:
tuș, trotinetă, trusă, tub, turn, tunel, tăiței, tufiș, telecomandă, termos, tricicletă, lemn, lacăt, libelulă, lift.

Constraints:
- The separate image-approval stop is waived for this orchestrator run, but QA is not waived.
- Do not add production JSON until images are semantically clear, child-safe, brand-consistent, and circular-mask safe.
- Use a 5 columns x 3 rows unlabeled contact sheet in exact row-major order.
- Do not add placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Pay special attention to `tuș`, `trusă`, `tub`, `telecomandă`, and `lift`.
- After image generation, crop and optimize accepted cells only, render circular-mask previews, promote ready images and content rows, update `/admin/releases/2`, update derived-content fixtures if needed, run all project verification, perform localhost route/image checks on port 3000, update status docs, and report changed files plus verification results.
```

## Verification

Batch 101 verification:

```txt
git diff --check
```
