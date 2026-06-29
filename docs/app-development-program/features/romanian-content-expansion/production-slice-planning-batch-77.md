# Batch 77 Production Slice Planning: Slice 1 H Starts-With Top-Up

Batch: Romanian Content Expansion Batch 77.

Status: planning-only for Slice 1; no production content added.

Last updated: 2026-06-23.

## Scope Guard

Batch 77 is planning-only for Slice 1 from `slice-plan-index-batch-76.md`. It does not add production JSON records, content files, image assets, placeholders, route or schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Slice 1 words, preserving Batch 76 order:

`hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, `hering`

All rows are canonical `H` starts-with candidates. Every row remains inactive until a later image-brief/contact-sheet batch, human image review, production promotion, and content validation.

## Source, Spelling, And Duplicate Checks

Source basis:

- Batch 75 worksheet accepted all Slice 1 rows as `priority` or `reserve` candidates.
- Batch 76 slice index deduplicated the accepted pool, selected these rows for Slice 1, and reported no current approved production collisions by `word`, `display`, or `normalized`.
- External dictionary lookup was available during this planning pass. dexonline definition pages were checked for the Slice 1 spellings where reachable: `hipopotam`, `hârtie`, `hotel`, `halat`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hublou`, `hamburger`, and `hering`. The direct dexonline URLs for `harpă` and `hochei` are recorded below for the next pass even though this planning pass relies mainly on the Batch 75 source basis for those two rows.

Source labels:

- `S1` dexonline `hipopotam`: https://dexonline.ro/definitie/hipopotam
- `S2` dexonline `hârtie`: https://dexonline.ro/definitie/h%C3%A2rtie
- `S3` dexonline `hotel`: https://dexonline.ro/definitie/hotel
- `S4` dexonline `halat`: https://dexonline.ro/definitie/halat
- `S5` dexonline `harpă`: https://dexonline.ro/definitie/harp%C4%83
- `S6` dexonline `horn`: https://dexonline.ro/definitie/horn
- `S7` dexonline `hamster`: https://dexonline.ro/definitie/hamster
- `S8` dexonline `hambar`: https://dexonline.ro/definitie/hambar
- `S9` dexonline `husă`: https://dexonline.ro/definitie/hus%C4%83
- `S10` dexonline `hol`: https://dexonline.ro/definitie/hol
- `S11` dexonline `horă`: https://dexonline.ro/definitie/hor%C4%83
- `S12` dexonline `hochei`: https://dexonline.ro/definitie/hochei
- `S13` dexonline `hublou`: https://dexonline.ro/definitie/hublou
- `S14` dexonline `hamburger`: https://dexonline.ro/definitie/hamburger
- `S15` dexonline `hering`: https://dexonline.ro/definitie/hering

Duplicate and collision checks:

```txt
rg -n "\"(word|display|normalized|id)\": \"(hipopotam|hârtie|hartie|hotel|halat|harpă|harpa|horn|hamster|hambar|husă|husa|hol|horă|hora|hochei|hublou|hamburger|hering|ro-h-hipopotam|ro-h-hartie|ro-h-hotel|ro-h-halat|ro-h-harpa|ro-h-horn|ro-h-hamster|ro-h-hambar|ro-h-husa|ro-h-hol|ro-h-hora|ro-h-hochei|ro-h-hublou|ro-h-hamburger|ro-h-hering)\"" content/ro
```

Result: no matches in `content/ro`; no exact production row, normalized collision, or planned ID collision was found for Slice 1.

```txt
rg -n "hipopotam|hârtie|hotel|halat|harpă|horn|hamster|hambar|husă|hol|horă|hochei|hublou|hamburger|hering" content docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
```

Result: Slice 1 words appear in the Batch 75 worksheet and Batch 76 slice index only. The broader `content` match for `hârtie` is inside existing alt text for other words, not a production word collision.

Current `H` manifest check:

```txt
sed -n '1,220p' content/ro/words-h.json
ls content/ro/words-h.json public/images/ro/h
```

Result: current approved `H` rows are `haină`, `hamac`, and `hartă`; existing `H` images are `ro-h-haina.webp`, `ro-h-hamac.webp`, and `ro-h-harta.webp`.

## Planning Decisions

- All `15` Slice 1 rows are acceptable planning candidates.
- No row is blocked at this planning stage.
- `halat` is planned strictly as a bathrobe, not a lab coat or medical garment.
- `hambar` remains a rural stretch row but is concrete and imageable.
- `husă` should use a clear protective cover for a simple object, preferably a phone/tablet case or a chair cover, not an abstract fabric sheet.
- `hol` needs a simple hallway/interior scene and must avoid tiny details.
- `horă` needs a friendly, non-stereotyped circle-dance scene; it is a person/scene row and requires strict thumbnail review.
- `hochei` should use a hockey stick and puck, not a collision/contact scene.
- `hublou` should show a round ship or airplane window clearly enough to teach a stretch word.
- `hamburger` must be a generic burger with no brand, wrapper text, logo, or fast-food chain cues.
- `hering` is a weaker child-fit reserve row than generic fish words, but it is source-supported, concrete, and imageable; keep it active with a note for human image review.

## Planned Canonical Rows

All future production rows should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only if promoted with a reviewed final `256 x 256 px` WebP image. Do not promote any row without its accepted final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Part of speech | Difficulty | Age band | Source plan | Alt text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `hipopotam` | `content/ro/words-h.json` | `ro-h-hipopotam` | `/images/ro/h/ro-h-hipopotam.webp` | `hipopotam` | `animal` | `noun` | 2 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `Un hipopotam prietenos` |
| 2 | `hârtie` | `content/ro/words-h.json` | `ro-h-hartie` | `/images/ro/h/ro-h-hartie.webp` | `hartie` | `school` | `noun` | 1 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `O foaie de hârtie albă` |
| 3 | `hotel` | `content/ro/words-h.json` | `ro-h-hotel` | `/images/ro/h/ro-h-hotel.webp` | `hotel` | `household` | `noun` | 2 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `Un hotel simplu` |
| 4 | `halat` | `content/ro/words-h.json` | `ro-h-halat` | `/images/ro/h/ro-h-halat.webp` | `halat` | `clothing` | `noun` | 1 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un halat de baie` |
| 5 | `harpă` | `content/ro/words-h.json` | `ro-h-harpa` | `/images/ro/h/ro-h-harpa.webp` | `harpa` | `music` | `noun` | 2 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `O harpă aurie` |
| 6 | `horn` | `content/ro/words-h.json` | `ro-h-horn` | `/images/ro/h/ro-h-horn.webp` | `horn` | `household` | `noun` | 2 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `Un horn pe acoperiș` |
| 7 | `hamster` | `content/ro/words-h.json` | `ro-h-hamster` | `/images/ro/h/ro-h-hamster.webp` | `hamster` | `animal` | `noun` | 1 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Un hamster mic` |
| 8 | `hambar` | `content/ro/words-h.json` | `ro-h-hambar` | `/images/ro/h/ro-h-hambar.webp` | `hambar` | `household` | `noun` | 3 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un hambar roșu` |
| 9 | `husă` | `content/ro/words-h.json` | `ro-h-husa` | `/images/ro/h/ro-h-husa.webp` | `husa` | `household` | `noun` | 3 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O husă simplă` |
| 10 | `hol` | `content/ro/words-h.json` | `ro-h-hol` | `/images/ro/h/ro-h-hol.webp` | `hol` | `household` | `noun` | 2 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `Un hol luminos` |
| 11 | `horă` | `content/ro/words-h.json` | `ro-h-hora` | `/images/ro/h/ro-h-hora.webp` | `hora` | `music` | `noun` | 3 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `Copii dansând horă` |
| 12 | `hochei` | `content/ro/words-h.json` | `ro-h-hochei` | `/images/ro/h/ro-h-hochei.webp` | `hochei` | `sport` | `noun` | 3 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `O crosă de hochei și un puc` |
| 13 | `hublou` | `content/ro/words-h.json` | `ro-h-hublou` | `/images/ro/h/ro-h-hublou.webp` | `hublou` | `vehicle` | `noun` | 3 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Un hublou rotund` |
| 14 | `hamburger` | `content/ro/words-h.json` | `ro-h-hamburger` | `/images/ro/h/ro-h-hamburger.webp` | `hamburger` | `food` | `noun` | 2 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `Un hamburger simplu` |
| 15 | `hering` | `content/ro/words-h.json` | `ro-h-hering` | `/images/ro/h/ro-h-hering.webp` | `hering` | `animal` | `noun` | 3 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `Un pește hering` |

## Speech Target And Image Brief Planning

| Display | Primary target | Secondary targets | Target positions | Syllables | Clusters | Image brief direction | Risks and notes |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `hipopotam` | `H` | `P`, `T`, `M` | `H` initial; `P` repeated medial; `T` medial; `M` final | 4 | none | Friendly side-view hippopotamus, rounded body, no open mouth, no aggressive teeth, simple pale water or neutral ground. | Longer word but common animal; keep image non-scary. |
| `hârtie` | `H` | `R`, `T` | `H` initial; `R` medial; `T` medial | 3 | `rt` | One clean sheet of paper or small stack, no visible writing, no letters, no numbers, no worksheet text. | Must stay distinct from existing `hartă`; no map markings. |
| `hotel` | `H` | `T`, `L` | `H` initial; `T` medial; `L` final | 2 | none | Simple friendly building with windows and a bed cue if needed, no sign text, no logo, no brand. | A building can read as generic house; use luggage/bed/window cues without text. |
| `halat` | `H` | `L`, `T` | `H` initial; `L` medial; `T` final | 2 | none | Soft bathrobe on a hanger or folded open, belt visible, no person needed, no medical white coat. | Sense is locked to bathrobe to avoid medical framing. |
| `harpă` | `H` | `R`, `P`, `Ă` | `H` initial; `R` medial; `P` medial; `Ă` final | 2 | `rp` | Single harp instrument, warm wood or gold, simple strings, no musician, no stage text. | Fine strings may be hard at thumbnail size; keep silhouette strong. |
| `horn` | `H` | `R`, `N` | `H` initial; `R` medial; `N` final | 1 | `rn` | Small chimney on a simple roof, optional tiny smoke puff, no fire, no soot-heavy scene. | Must show chimney meaning, not a musical horn. |
| `hamster` | `H` | `M`, `S`, `T`, `R` | `H` initial; `M/S/T` medial; `R` final | 2 | `mst`, `st` | Cute hamster sitting with paws visible, no cage bars if they obscure shape, no wheel clutter. | Borrowed/common pet word; acceptable if image is immediately recognizable. |
| `hambar` | `H` | `M`, `B`, `R` | `H` initial; `M/B` medial; `R` final | 2 | `mb` | Simple barn/grain store building, warm rural colors, no tiny farm scene, no text sign. | Rural stretch; human image review should confirm recognizability. |
| `husă` | `H` | `S`, `Ă` | `H` initial; `S` medial; `Ă` final | 2 | none | Clear protective cover on one object, preferably a tablet/phone case or chair cover, no logos, no device brand. | Protective-cover concept can be abstract; block later if no-label image is weak. |
| `hol` | `H` | `L` | `H` initial; `L` final | 1 | none | Bright simple hallway with door shapes and floor perspective, minimal details, no text signs. | Room/space scenes can be vague at wheel size. |
| `horă` | `H` | `R`, `Ă` | `H` initial; `R` medial; `Ă` final | 2 | none | Small group of friendly children or simple figures holding hands in a circle dance, no flags, no costumes required, no labels. | Person/scene row; strict style consistency and thumbnail checks needed. |
| `hochei` | `H` | `CHE` | `H` initial; `CHE` medial/final sequence by spelling context | 2 | none | Hockey stick and puck on ice, no player collision, no aggressive sport action, no team logos. | Less universally familiar sport; object-only image should carry meaning. |
| `hublou` | `H` | `B`, `L` | `H` initial; `B/L` medial | 2 | `bl` | Round porthole window with simple blue water/sky view, centered, no plane/ship brand text. | Stretch word; image must show round-window meaning clearly. |
| `hamburger` | `H` | `M`, `B`, `R`, `G` | `H` initial; `M/B/G/R` medial; `R` final | 3 | `mb`, `rg` | Generic burger with bun, patty, lettuce, cheese, centered, no wrapper, no logo, no text. | Avoid branded fast-food cues and overly detailed fillings. |
| `hering` | `H` | `R`, `G` | `H` initial; `R` medial; `G` final | 2 | none | Single silvery herring fish in side view, simple water background, friendly neutral expression, no hook, no dead-fish cue. | Less child-known than generic fish; keep active because accepted as reserve but review carefully. |

## Route, Loader, And Validation Impact

Planning-only Batch 77 has no immediate route, loader, schema, content validation, gameplay, matching, setup-storage, build, or browser-route impact.

If later promoted, the affected route is `H` / `/ro/play/h`, and the affected manifest is `content/ro/words-h.json`. Final public images would be added under `public/images/ro/h/` with paths matching the planned IDs.

Promotion validation must verify:

- schema shape and required metadata;
- unique IDs and normalized values;
- canonical `h` letter bucket placement;
- `word`, `display`, `normalized`, `id`, and image path consistency;
- `source`, `license`, `status`, and `imageStatus` values;
- image paths exist for all approved rows;
- final images are `.webp`, `256 x 256 px`, and within the documented size limits;
- no placeholder image is introduced;
- `/ro/play/h`, `/admin/words`, and `/admin/releases/2` reflect the promoted rows after production changes.

## Active Image-Brief Candidate List

No rows are blocked in Batch 77. Active candidates for the next image-brief/contact-sheet batch, preserving order:

1. `hipopotam`
2. `hârtie`
3. `hotel`
4. `halat`
5. `harpă`
6. `horn`
7. `hamster`
8. `hambar`
9. `husă`
10. `hol`
11. `horă`
12. `hochei`
13. `hublou`
14. `hamburger`
15. `hering`

## Ready-To-Copy Next Prompt

```txt
You are a bounded worker subagent for the Word Wheel repo at /Users/darius/mrNagySSC/ioana/word-wheel. You are not alone in the codebase: do not revert edits made by others; work with existing changes.

Task: Romanian Content Expansion Batch 78 image briefs/contact sheet for Batch 77 Slice 1 only.

Read these files before acting:
- AGENTS.md
- docs/agent-brief.md
- docs/spec.md
- docs/plan.md
- docs/status.md
- docs/image-pipeline.md
- docs/app-development-program/speech-therapy-content-guidance.md
- docs/app-development-program/features/romanian-content-expansion/spec.md
- docs/app-development-program/features/romanian-content-expansion/plan.md
- docs/app-development-program/features/romanian-content-expansion/status.md
- docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
- docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
- docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
- docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-77.md

Create image briefs and one unlabeled contact sheet for these active Slice 1 candidates, preserving order:

hipopotam, hârtie, hotel, halat, harpă, horn, hamster, hambar, husă, hol, horă, hochei, hublou, hamburger, hering

Constraints:
- Do not edit production JSON, content manifests, route/schema/loader code, shared status docs, or public production WebP assets.
- Do not crop cells or optimize final assets.
- Do not add placeholders.
- Do not make clinical claims.
- Follow docs/image-pipeline.md: high-clarity child-friendly pixel art, square cells, full square backgrounds or transparency, no text, no numbers, no logos, no brands, no copyrighted characters, one centered subject per cell, clear at wheel size, and circular-mask-safe composition.
- Pay special attention to risks recorded in production-slice-planning-batch-77.md: bathrobe sense for `halat`, no map confusion for `hârtie`, chimney sense for `horn`, imageability for `husă`, `hol`, `horă`, `hublou`, generic unbranded `hamburger`, and careful child-fit review for `hering`.
- Stop after creating the review contact sheet and brief document. Ask for human image validation before any production promotion.

After writing, run git diff --check and report changed files plus verification results.
```

## Verification

Batch 77 is documentation-only. Required verification:

```txt
git diff --check
```
