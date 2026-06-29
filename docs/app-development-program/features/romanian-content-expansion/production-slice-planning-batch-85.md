# Batch 85 Production Slice Planning: Slice 3 J/D Top-Up

Batch: Romanian Content Expansion Batch 85.

Status: planning-only for Slice 3; no production content added.

Last updated: 2026-06-24.

## Scope Guard

Batch 85 is planning-only for Slice 3 from `slice-plan-index-batch-76.md`. It does not add production JSON records, content files, image assets, placeholders, route or schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Slice 3 words, preserving Batch 76 order:

`jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, `drum`, `dulceață`, `dop`, `dar`, `drapel`, `dalmațian`

Rows stay inactive until a later image-brief/contact-sheet batch, explicit human image review, production promotion, and content validation.

## Source, Spelling, And Duplicate Checks

Source basis:

- Batch 75 marked all Slice 3 rows as `priority` or `reserve`, not `hold`.
- Batch 76 selected these rows for Slice 3 and recorded the main risks: imageability for `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, and `coji`; politics-free framing for `drapel`; friendly dog framing and spelling for `dalmațian`.
- Direct dexonline pages were checked on 2026-06-24 for all planned spellings. Browser-readable pages confirmed the visible definitions for most rows; `prăjitor`, `dulceață`, and `dop` were additionally checked with an outside-sandbox `curl` fetch because their direct pages were not useful through the browser extraction path.
- `jet` has multiple dictionary senses. This slice keeps the Batch 75 water-jet/fountain-stream sense, not a fighter aircraft or emergency scene.
- `prăjitor` has person and appliance senses. This slice keeps only the household appliance sense, specifically a toaster / bread toaster image.
- `coji` is the accepted plural display row tied to `coajă` / peels; plural production rows are already allowed by existing content precedent such as `dinți`, `semințe`, and `vișine`.

Source labels:

- `S1` dexonline `jet`: https://dexonline.ro/definitie/jet
- `S2` dexonline `ambalaj`: https://dexonline.ro/definitie/ambalaj
- `S3` dexonline `etaj`: https://dexonline.ro/definitie/etaj
- `S4` dexonline `bujor`: https://dexonline.ro/definitie/bujor
- `S5` dexonline `peisaj`: https://dexonline.ro/definitie/peisaj
- `S6` dexonline `majoretă`: https://dexonline.ro/definitie/majoret%C4%83
- `S7` dexonline `prăjitor`: https://dexonline.ro/definitie/pr%C4%83jitor
- `S8` dexonline `pajiște`: https://dexonline.ro/definitie/paji%C8%99te
- `S9` dexonline `coji`: https://dexonline.ro/definitie/coji
- `S10` dexonline `drum`: https://dexonline.ro/definitie/drum
- `S11` dexonline `dulceață`: https://dexonline.ro/definitie/dulcea%C8%9B%C4%83
- `S12` dexonline `dop`: https://dexonline.ro/definitie/dop
- `S13` dexonline `dar`: https://dexonline.ro/definitie/dar
- `S14` dexonline `drapel`: https://dexonline.ro/definitie/drapel
- `S15` dexonline `dalmațian`: https://dexonline.ro/definitie/dalma%C8%9Bian

Duplicate and collision checks:

```txt
Candidate exact words: jet, ambalaj, etaj, bujor, peisaj, majoretă, prăjitor, pajiște, coji, drum, dulceață, dop, dar, drapel, dalmațian
Checked against all current content/ro/words-*.json rows by exact word/display, normalized form, and planned ID.
Result: no exact word/display collisions, no normalized collisions, and no planned ID collisions.
```

Current baseline coverage before Slice 3 planning:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `J` | 15 | 11 | 26 |
| `D` | 15 | 30 | 45 |
| `A` | 17 | 218 | 235 |
| `E` | 7 | 212 | 219 |
| `B` | 35 | 35 | 70 |
| `P` | 41 | 46 | 87 |
| `M` | 25 | 54 | 79 |
| `C` | 69 | 92 | 161 |

If all Slice 3 rows are later promoted with ready images, the direct starts-with deltas would be `J +1`, `D +6`, `A +1`, `E +1`, `B +1`, `P +3`, `M +1`, and `C +1`.

Notable mixed-pool deltas if all rows are later promoted:

| Target | Before | After | Delta |
| --- | ---: | ---: | ---: |
| `J` | 26 | 35 | +9 |
| `D` | 45 | 51 | +6 |
| `A` | 235 | 244 | +9 |
| `E` | 219 | 226 | +7 |
| `P` | 87 | 92 | +5 |
| `M` | 79 | 83 | +4 |
| `Ă` | 204 | 207 | +3 |
| `Ș` | 49 | 50 | +1 |
| `Ț` | 58 | 60 | +2 |
| `R` | 209 | 215 | +6 |
| `L` | 126 | 130 | +4 |

## Planning Decisions

- All `15` Slice 3 rows remain active planning candidates.
- No row is blocked at this planning stage, but `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, and `drapel` require stricter human imageability review than the stronger object rows.
- `jet` is planned only as a water jet or fountain stream. Do not use aircraft, fighter jet, engine exhaust, fire hose, emergency, weapon, or pressure-blast imagery.
- `ambalaj` is source-supported and concrete, but a wrapper/package can be visually generic. It should show a simple package/wrapper with no text, logo, barcode, or brand.
- `etaj` is source-supported but partly abstract. It needs a simple building/floor cue; block later if it reads only as a generic building.
- `bujor` is one of the strongest rows in this slice: a peony flower is concrete, safe, and imageable.
- `peisaj` and `pajiște` are scene rows, not single-object rows. They remain active but need thumbnail review because broad scenery can become unclear inside wheel slots.
- `majoretă` is a person/action row. It must use a child-safe baton-twirling or parade-performance framing, with no militarized, sexualized, adult, national, or team-branded cues.
- `prăjitor` is allowed only in the household appliance sense. The image should show a generic toaster with bread, not a worker/person, hot oil pan, fire, or brand.
- `coji` should show fruit peels beside a peeled apple or orange, not dirty trash, skin wounds, peeling paint, or anything visually unpleasant.
- `drum`, `dulceață`, `dop`, and `dar` are strong child-fit rows if images stay concrete and text-free.
- `drapel` must stay a generic flag. Use abstract colors or a plain classroom/parade flag with no national flag, party symbol, military unit, coat of arms, political color coding, slogan, or readable mark unless the human explicitly approves a specific flag direction.
- `dalmațian` is active as a friendly spotted dog row. It must not reference copyrighted characters, firefighter mascots, or branded/cartoon associations.

## Planned Canonical Rows

All future production rows should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only if promoted with a reviewed final `256 x 256 px` WebP image. Do not promote any row without its accepted final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Part of speech | Difficulty | Age band | Source plan | Alt text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `jet` | `content/ro/words-j.json` | `ro-j-jet` | `/images/ro/j/ro-j-jet.webp` | `jet` | `nature` | `noun` | 3 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `Un jet de apă` |
| 2 | `ambalaj` | `content/ro/words-a.json` | `ro-a-ambalaj` | `/images/ro/a/ro-a-ambalaj.webp` | `ambalaj` | `household` | `noun` | 3 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `Un ambalaj simplu` |
| 3 | `etaj` | `content/ro/words-e.json` | `ro-e-etaj` | `/images/ro/e/ro-e-etaj.webp` | `etaj` | `household` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `Un etaj al unei clădiri` |
| 4 | `bujor` | `content/ro/words-b.json` | `ro-b-bujor` | `/images/ro/b/ro-b-bujor.webp` | `bujor` | `nature` | `noun` | 2 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un bujor roz` |
| 5 | `peisaj` | `content/ro/words-p.json` | `ro-p-peisaj` | `/images/ro/p/ro-p-peisaj.webp` | `peisaj` | `nature` | `noun` | 3 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `Un peisaj cu dealuri` |
| 6 | `majoretă` | `content/ro/words-m.json` | `ro-m-majoreta` | `/images/ro/m/ro-m-majoreta.webp` | `majoreta` | `people` | `noun` | 3 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `O majoretă cu baston` |
| 7 | `prăjitor` | `content/ro/words-p.json` | `ro-p-prajitor` | `/images/ro/p/ro-p-prajitor.webp` | `prajitor` | `household` | `noun` | 3 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Un prăjitor de pâine` |
| 8 | `pajiște` | `content/ro/words-p.json` | `ro-p-pajiste` | `/images/ro/p/ro-p-pajiste.webp` | `pajiste` | `nature` | `noun` | 3 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `O pajiște verde` |
| 9 | `coji` | `content/ro/words-c.json` | `ro-c-coji` | `/images/ro/c/ro-c-coji.webp` | `coji` | `food` | `noun` | 3 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `Coji de fructe` |
| 10 | `drum` | `content/ro/words-d.json` | `ro-d-drum` | `/images/ro/d/ro-d-drum.webp` | `drum` | `vehicle` | `noun` | 1 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `Un drum simplu` |
| 11 | `dulceață` | `content/ro/words-d.json` | `ro-d-dulceata` | `/images/ro/d/ro-d-dulceata.webp` | `dulceata` | `food` | `noun` | 1 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `Un borcan cu dulceață` |
| 12 | `dop` | `content/ro/words-d.json` | `ro-d-dop` | `/images/ro/d/ro-d-dop.webp` | `dop` | `household` | `noun` | 1 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `Un dop de plută` |
| 13 | `dar` | `content/ro/words-d.json` | `ro-d-dar` | `/images/ro/d/ro-d-dar.webp` | `dar` | `household` | `noun` | 1 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Un dar împachetat` |
| 14 | `drapel` | `content/ro/words-d.json` | `ro-d-drapel` | `/images/ro/d/ro-d-drapel.webp` | `drapel` | `school` | `noun` | 3 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `Un drapel simplu` |
| 15 | `dalmațian` | `content/ro/words-d.json` | `ro-d-dalmatian` | `/images/ro/d/ro-d-dalmatian.webp` | `dalmatian` | `animal` | `noun` | 2 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `Un dalmațian prietenos` |

## Speech Target And Image Brief Planning

| Display | Primary target | Secondary targets | Target positions | Syllables | Clusters | Image brief direction | Risks and notes |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `jet` | `J` | `T` | `J` initial; `T` final | 1 | none | Centered water jet from a small fountain nozzle, blue water arc/splash, simple non-emergency setting. | Weak object clarity; reject later if it reads as explosion, fire hose, aircraft, or generic water. |
| `ambalaj` | `J` | `A`, `M`, `B`, `L` | `J` final; `A` initial/repeated; `M/B/L` medial | 3 | `mb`, final `aj` | Simple opened package/wrapper around a child-safe object, no text, no logo, no barcode. | Generic packaging may be hard to name; strict imageability review needed. |
| `etaj` | `J` | `E`, `T` | `J` final; `E` initial; `T` medial | 2 | none | Small building cutaway or highlighted upper floor, no text numbers, no elevator labels. | Abstract building level; block later if image only reads as house/building. |
| `bujor` | `J` | `B`, `R` | `J` medial; `B` initial; `R` final | 2 | none | Single large pink/red peony flower with green leaves, centered, no vase text. | Strong imageability; distinguish from generic flower by lush round petals where possible. |
| `peisaj` | `J` | `P`, `S` | `J` final; `P` initial; `S` medial | 2 | none | Simple landscape with green hill, sun, tree, and sky, composed as a clear icon. | Broad scene may become generic; keep big shapes and low detail. |
| `majoretă` | `J` | `M`, `R`, `T`, `Ă` | `J` medial; `M` initial; `R/T` medial; `Ă` final | 4 | none | Friendly majorette figure with baton, simple parade/dance pose, no flags, no logos, no adult styling. | Person/action row; avoid military, team, national, or sexualized cues. |
| `prăjitor` | `J` | `P`, `R`, `Ă`, `T` | `J` medial; `P/R` initial cluster; `Ă` medial; `T` medial; `R` final | 3 | `pr` | Generic toaster with two slices of bread, no brand, no cord clutter, no smoke/fire. | Source has appliance/person senses; image must lock the household appliance meaning. |
| `pajiște` | `J` | `P`, `Ș`, `T`, `E` | `J/Ș/T` medial; `P` initial; `E` final | 3 | `șt` | Small meadow with grass and flowers, maybe one simple tree, no animals needed. | Scene can read as generic field; thumbnail clarity required. |
| `coji` | `J` | `C` | `J` medial/final; `C` initial | 2 | none | Several orange/apple peels beside a peeled fruit, clean plate or surface, no trash pile. | Plural and visually subtle; avoid wounds, peeling paint, dirt, or unpleasant waste. |
| `drum` | `D` | `R`, `M` | `D` initial; `R/M` medial/final | 1 | `dr` | Simple road or path with lane/edge cue, no cars required, no traffic signs with text. | Good child fit; keep safe and calm, no accident or emergency scene. |
| `dulceață` | `D` | `L`, `CE`, `Ț`, `Ă` | `D` initial; `L/CE/Ț` medial; `Ă` final | 3 | none | Open jam jar with spoon and red fruit jam, no label text, no brand. | Strong food row; avoid honey/sauce confusion by showing fruit pieces. |
| `dop` | `D` | `P` | `D` initial; `P` final | 1 | none | Cork or bottle stopper next to a plain bottle mouth, no alcohol label. | Good object row; avoid wine branding and tiny stopper scale. |
| `dar` | `D` | `R` | `D` initial; `R` final | 1 | none | Wrapped gift box with ribbon, no text tag, no holiday-specific symbols. | Strong child fit; may overlap with `pachet`, but gift/ribbon cue is distinct. |
| `drapel` | `D` | `R`, `P`, `L` | `D` initial; `R/P` medial; `L` final | 2 | `dr` | Generic plain flag on a small pole, abstract non-national colors, no emblem/text. | Political/military/national risk; must stay neutral or ask human before specific flag. |
| `dalmațian` | `D` | `L`, `M`, `Ț` | `D` initial; `L/M/Ț` medial | 3 | none | Friendly white dog with black spots, standing or sitting, no firefighter/cartoon cues. | Longer word; avoid copyrighted character resemblance and overly busy spots. |

## Route, Loader, And Validation Impact

Planning-only Batch 85 has no immediate route, loader, schema, content validation, gameplay, matching, setup-storage, build, or browser-route impact.

If later promoted, affected manifests and routes are:

- `content/ro/words-j.json` and `/ro/play/j`
- `content/ro/words-a.json` and `/ro/play/a`
- `content/ro/words-e.json` and `/ro/play/e`
- `content/ro/words-b.json` and `/ro/play/b`
- `content/ro/words-p.json` and `/ro/play/p`
- `content/ro/words-m.json` and `/ro/play/m`
- `content/ro/words-c.json` and `/ro/play/c`
- `content/ro/words-d.json` and `/ro/play/d`

Final public images would be added under matching canonical `public/images/ro/<letter>/` folders. No new route aliases, letter manifests, loaders, schema fields, placeholder rules, or speech-target production metadata should be needed.

Promotion validation must verify:

- schema shape and required metadata;
- unique IDs and normalized values;
- canonical starting-letter bucket placement for `j`, `a`, `e`, `b`, `p`, `m`, `c`, and `d`;
- `word`, `display`, `normalized`, `id`, and image path consistency;
- `source`, `license`, `status`, and `imageStatus` values;
- image paths exist for all approved rows;
- final images are `.webp`, `256 x 256 px`, and within documented size limits;
- no placeholder image is introduced;
- `/ro/play/j`, `/ro/play/d`, `/admin/words`, and `/admin/releases/2` reflect the promoted rows after production changes.

## Active Image-Brief Candidate List

No rows are blocked in Batch 85. Active candidates for the next image-brief/contact-sheet batch, preserving order:

1. `jet`
2. `ambalaj`
3. `etaj`
4. `bujor`
5. `peisaj`
6. `majoretă`
7. `prăjitor`
8. `pajiște`
9. `coji`
10. `drum`
11. `dulceață`
12. `dop`
13. `dar`
14. `drapel`
15. `dalmațian`

## Ready-To-Copy Next Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 86.

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
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-85.md

Task: Batch 86 image briefs and one unlabeled contact sheet for Batch 85 Slice 3 only.

Create image briefs and one unlabeled review contact sheet for these active Slice 3 candidates, preserving order:
jet, ambalaj, etaj, bujor, peisaj, majoretă, prăjitor, pajiște, coji, drum, dulceață, dop, dar, drapel, dalmațian.

Constraints:
- Do not edit production JSON, content manifests, route/schema/loader code, shared status docs, or public production WebP assets.
- Do not crop cells or optimize final assets.
- Do not add placeholders.
- Do not make clinical claims.
- Follow docs/image-pipeline.md: high-clarity child-friendly pixel art, square cells, full square backgrounds or transparency, no text, no numbers, no logos, no brands, no copyrighted characters, one centered subject per cell, clear at wheel size, and circular-mask-safe composition.
- Pay special attention to risks recorded in production-slice-planning-batch-85.md: `jet` must be a water jet/fountain stream, not aircraft or emergency imagery; `ambalaj`, `etaj`, `peisaj`, `pajiște`, and `coji` need strict imageability review; `majoretă` is a person/action row; `prăjitor` must show the toaster/appliance sense; `drapel` must stay politics-free and non-national unless explicitly approved; `dalmațian` must be a friendly generic spotted dog with no copyrighted-character cues.
- Stop after creating the review contact sheet and brief document. Ask for human image validation before any production promotion.

After writing, run git diff --check and report changed files plus verification results.
```

## Verification

Batch 85 is documentation-only. Verification passed on 2026-06-24:

```txt
git diff --check
```
