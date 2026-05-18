# Batch 22 Diacritic And Sequence Top-Up Worksheet

Batch: Romanian Content Expansion Batch 22, Diacritic And Sequence Coverage Top-Up Planning.

Worksheet date: 2026-05-18.

Status: Planning source for the next implementation batch. This file adds no production JSON records, image assets, route changes, schema changes, production speech-target metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Research Basis

Current source checks used for this worksheet:

- Romanian early-education guidance supports picture/object naming, repeating words, using images, and word games with initial/final sounds. Source: https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2024/div/Repere_fundamentale_educatie_timpurie_2024.pdf
- Romanian early-education curriculum explicitly includes correct pronunciation, recognition of sounds/letters/words, progressive vocabulary extension, and phonetic differentiation of words, syllables, and sounds. Source: https://www.isj.sv.edu.ro/images/Docs/Discipline/invatamnat_preprimar/2018/Curriculum_pentru_educatie_timpurie_2018.pdf
- Romanian alphabet references confirm `Ă`, `Â`, `Î`, `Ș`, and `Ț` are alphabet letters, while `ci`, `gi`, `ce`, `ge`, `chi`, `ghi`, `che`, and `ghe` are letter sequences and not alphabet letters. Source: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/alfabetul-limbii-romane/
- Romanian orthography references describe `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` as complex graphemes where following letters change the value of `c` or `g`. Source: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/principiile-ortografiei-limbii-romane/
- Academia Română's orthography note records the current `î`/`â` rule: `î` at the immediate beginning or end of words, `â` inside words except specified compounds/prefix cases. Source: https://academiaromana.ro/grafieLimbaRomana/pag_grafieLR_norme.htm
- ASHA speech-sound guidance supports tracking sound production across word positions, phonetic contexts, sound combinations, consonant clusters, and syllable shapes. Source: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- DEXOnline was used as the lexical/spelling spot-check source for candidate words where the source tag includes `DEX`. Source pattern: `https://dexonline.ro/definitie/<word>`.

Source tags:

- `EDU`: early-education language/vocabulary/sound-awareness guidance.
- `ORTH`: Romanian alphabet, orthography, and `î`/`â` rules.
- `SEQ`: `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, `ghi` sequence guidance.
- `ASHA`: speech-sound position, cluster, and syllable-shape review guidance.
- `DEX`: DEXOnline lexical/spelling spot-check pattern.
- `IR`: internal Word Wheel review for ages 4 to 6, commonness, concreteness, imageability, safety, no brand/copyright dependency, and fit with the current production schema.

## Current Coverage

Derived from current production JSON and helper behavior after Batch 21 and the post-test count display update.

| Target | Starts | Contains | Mixed | Ready | Placeholder | Gap to 15 mixed | Gap to 20 mixed |
| ------ | -----: | -------: | ----: | ----: | ----------: | --------------: | --------------: |
| `CE`   |     11 |        3 |    14 |    14 |           0 |               1 |               6 |
| `CI`   |      9 |        5 |    14 |    14 |           0 |               1 |               6 |
| `GE`   |      5 |        5 |    10 |    10 |           0 |               5 |              10 |
| `GI`   |      1 |        3 |     4 |     4 |           0 |              11 |              16 |
| `CHE`  |      2 |        8 |    10 |    10 |           0 |               5 |              10 |
| `CHI`  |      4 |        5 |     9 |     9 |           0 |               6 |              11 |
| `GHE`  |      5 |        3 |     8 |     8 |           0 |               7 |              12 |
| `GHI`  |      7 |        1 |     8 |     8 |           0 |               7 |              12 |

Exact diacritic bucket state:

| Bucket | Current state                                                                            | Batch 22 decision                                                                                          |
| ------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Ă`    | Convention exists: exact bucket `ă`, route `a-breve`, prefix `ro-a-breve-`; not enabled. | Keep convention-only. No strong child-facing exact starts-with vocabulary was accepted.                    |
| `Â`    | Convention exists: exact bucket `â`, route `a-circ`, prefix `ro-a-circ-`; not enabled.   | Keep convention-only. Current orthography strongly limits exact starts-with `Â` words.                     |
| `Î`    | Enabled with 1 approved starts-with word: `înghețată`.                                   | Add a small exact `Î` scope if implementation is approved. Do not try to force a 15-word exact `Î` bucket. |

## Accepted Top-Up Candidates

Rows below are accepted for the next implementation scope, not production records yet. A later implementation batch must still map them to canonical JSON fields, use the existing placeholder policy or reviewed images, pass validation, and update status.

| Candidate      | Canonical start | Target(s) improved | Position note              | Category direction | Age / image / safety                                                            | Source basis               | Decision note                                                                                   |
| -------------- | --------------- | ------------------ | -------------------------- | ------------------ | ------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------- |
| `cerneală`     | `C`             | `CE`               | initial `CE`               | school             | good / high / pass; ink bottle or ink drop, no text                             | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `centură`      | `C`             | `CE`               | initial `CE`               | clothing           | strong / high / pass                                                            | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `licurici`     | `L`             | `CI`               | medial/final repeated `CI` | animal             | strong / high / pass; friendly firefly                                          | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `piscină`      | `P`             | `CI`               | medial `CI`                | household / nature | strong / high / pass; pool image, no unsafe behavior                            | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `înger`        | `Î`             | `Î`, `GE`          | exact `Î`; medial `GE`     | people / toy       | good / high / pass as generic fairy-tale angel, no religious scene              | `ORTH`, `SEQ`, `DEX`, `IR` | accept                                                                                          |
| `gemeni`       | `G`             | `GE`               | initial `GE`               | people             | good / medium-high / pass; generic twins, no identity cues                      | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `geamantan`    | `G`             | `GE`               | initial `GE`               | household          | good / high / pass; suitcase                                                    | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `ger`          | `G`             | `GE`               | initial `GE`               | nature             | good / medium / pass; icy window or frost, no danger                            | `SEQ`, `DEX`, `IR`         | accept as a compact weather word                                                                |
| `gelatină`     | `G`             | `GE`               | initial `GE`               | food               | good / high / pass; simple jelly dessert, no brand                              | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `fulgi`        | `F`             | `GI`               | final `GI`                 | nature / food      | strong / high / pass; snowflakes or cereal flakes                               | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `covrigi`      | `C`             | `GI`               | final `GI`                 | food               | strong / high / pass                                                            | `SEQ`, `DEX`, `IR`         | accept; plural form is okay because current content already includes plural food/object records |
| `fragi`        | `F`             | `GI`               | final `GI`                 | food               | good / high / pass                                                              | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `magie`        | `M`             | `GI`               | medial `GI`                | toy                | good / medium-high / pass as generic magic wand/stars, no copyrighted character | `SEQ`, `DEX`, `IR`         | accept with fantasy-image caution                                                               |
| `magician`     | `M`             | `GI`, `CI`         | medial `GI`; medial `CI`   | people             | good / high / pass as generic stage magician, no brand/character                | `SEQ`, `DEX`, `IR`         | accept with generic-costume image caution                                                       |
| `gimnastică`   | `G`             | `GI`               | initial `GI`               | people             | good / medium-high / pass; child-safe gym ribbon/mat image                      | `SEQ`, `DEX`, `IR`         | accept; activity word must still fit production category mapping                                |
| `gimnast`      | `G`             | `GI`               | initial `GI`               | people             | good / medium-high / pass; generic athlete pose                                 | `SEQ`, `DEX`, `IR`         | accept; do not add both `gimnast` and a gendered variant                                        |
| `gibon`        | `G`             | `GI`               | initial `GI`               | animal             | good / high / pass; zoo animal, not obscure enough to reject                    | `SEQ`, `DEX`, `IR`         | accept with familiarity review                                                                  |
| `gigant`       | `G`             | `GI`               | initial `GI`               | people / toy       | good / medium-high / pass; friendly fairy-tale giant, not frightening           | `SEQ`, `DEX`, `IR`         | accept with image-safety caution                                                                |
| `giroscop`     | `G`             | `GI`               | initial `GI`               | toy / school       | mixed / high / pass; toy gyroscope only                                         | `SEQ`, `DEX`, `IR`         | accept as advanced/low-priority GI filler only if image brief is strong                         |
| `argint`       | `A`             | `GI`               | medial `GI`                | household          | mixed / medium-high / pass; silver spoon/coin, not abstract metal swatch        | `SEQ`, `DEX`, `IR`         | accept as advanced/low-priority GI filler                                                       |
| `parchet`      | `P`             | `CHE`              | medial `CHE`               | household          | good / high / pass; floor planks                                                | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `mochetă`      | `M`             | `CHE`              | medial `CHE`               | household          | good / high / pass; carpet surface                                              | `SEQ`, `DEX`, `IR`         | accept with familiarity review                                                                  |
| `machetă`      | `M`             | `CHE`              | medial `CHE`               | toy / school       | good / high / pass; simple model object                                         | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `ochean`       | `O`             | `CHE`              | medial `CHE`               | toy                | good / high / pass; toy spyglass                                                | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `echer`        | `E`             | `CHE`              | medial `CHE`               | school             | good / high / pass; triangle ruler, no text                                     | `SEQ`, `DEX`, `IR`         | accept for 6-year-old/school edge of age band                                                   |
| `chiuvetă`     | `C`             | `CHI`              | initial `CHI`              | household          | strong / high / pass                                                            | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `chipiu`       | `C`             | `CHI`              | initial `CHI`              | clothing           | good / high / pass; simple cap, no uniform/military emphasis                    | `SEQ`, `DEX`, `IR`         | accept with image caution                                                                       |
| `echipă`       | `E`             | `CHI`              | medial `CHI`               | people             | good / medium / pass; generic team of children/players                          | `SEQ`, `DEX`, `IR`         | accept with people-image caution                                                                |
| `echipament`   | `E`             | `CHI`              | medial `CHI`               | clothing / toy     | good / medium-high / pass; sports gear, no brand                                | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `chimen`       | `C`             | `CHI`              | initial `CHI`              | food               | mixed / medium / pass; spice seeds                                              | `SEQ`, `DEX`, `IR`         | accept as low-priority top-up; review familiarity before implementation                         |
| `chiciură`     | `C`             | `CHI`              | initial `CHI`              | nature             | mixed / medium / pass; frost on branch                                          | `SEQ`, `DEX`, `IR`         | accept as low-priority weather/nature word                                                      |
| `baghetă`      | `B`             | `GHE`              | medial `GHE`               | food / toy         | strong / high / pass; breadstick or toy wand, choose one in image brief         | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `ghemotoc`     | `G`             | `GHE`              | initial `GHE`              | household / toy    | good / high / pass; crumpled paper or yarn lump                                 | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `ghețar`       | `G`             | `GHE`              | initial `GHE`              | nature             | good / high / pass; glacier/ice block, no danger                                | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `gheretă`      | `G`             | `GHE`              | initial `GHE`              | household          | mixed / high / pass; kiosk/booth, no text                                       | `SEQ`, `DEX`, `IR`         | accept with familiarity review                                                                  |
| `gheruță`      | `G`             | `GHE`              | initial `GHE`              | animal / body      | good / medium-high / pass; small animal paw/claw, not threatening               | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `gheară`       | `G`             | `GHE`              | initial `GHE`              | animal / body      | mixed / medium-high / pass only with non-scary animal paw image                 | `SEQ`, `DEX`, `IR`         | accept with safety caution                                                                      |
| `ghețuș`       | `G`             | `GHE`              | initial `GHE`              | nature             | mixed / medium / pass only as ice patch, no slipping person                     | `SEQ`, `DEX`, `IR`         | accept as low-priority top-up                                                                   |
| `triunghi`     | `T`             | `GHI`              | final `GHI`                | school / toy       | strong / high / pass; simple triangle shape                                     | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `dreptunghi`   | `D`             | `GHI`              | final `GHI`                | school / toy       | strong / high / pass; simple rectangle shape                                    | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `frânghie`     | `F`             | `GHI`              | medial/final `GHI`         | household / toy    | strong / high / pass; rope, no unsafe scene                                     | `SEQ`, `DEX`, `IR`         | accept                                                                                          |
| `unghi`        | `U`             | `GHI`              | final `GHI`                | school             | mixed / medium / pass; angle shape, no text                                     | `SEQ`, `DEX`, `IR`         | accept as 6-year-old/school edge of age band                                                    |
| `ghicitoare`   | `G`             | `GHI`              | initial `GHI`              | school / toy       | mixed / medium / pass; riddle/game card with no written text                    | `SEQ`, `DEX`, `IR`         | accept with imageability caution                                                                |
| `stinghie`     | `S`             | `GHI`              | medial/final `GHI`         | household          | mixed / medium-high / pass; wooden slat                                         | `SEQ`, `DEX`, `IR`         | accept as low-priority top-up                                                                   |
| `ghișeu`       | `G`             | `GHI`              | initial `GHI`              | household          | mixed / medium / pass; counter/window, no text or adult admin context           | `SEQ`, `DEX`, `IR`         | accept only if implementation review agrees target depth is worth the familiarity tradeoff      |
| `înot`         | `Î`             | `Î`                | exact `Î`                  | people / nature    | strong / high / pass; swimming icon, no unsafe water scene                      | `ORTH`, `DEX`, `IR`        | accept                                                                                          |
| `încălțăminte` | `Î`             | `Î`, `Ț`           | exact `Î`; medial `Ț`      | clothing           | strong / high / pass; shoes/boots group                                         | `ORTH`, `DEX`, `IR`        | accept                                                                                          |
| `îmbrăcăminte` | `Î`             | `Î`                | exact `Î`                  | clothing           | strong / high / pass; folded clothes                                            | `ORTH`, `DEX`, `IR`        | accept                                                                                          |
| `îmbrățișare`  | `Î`             | `Î`, `Ț`, `Ș`      | exact `Î`; medial `Ț`, `Ș` | family / people    | strong / medium-high / pass; generic hug, no identity cues                      | `ORTH`, `DEX`, `IR`        | accept                                                                                          |
| `împărat`      | `Î`             | `Î`                | exact `Î`                  | people             | good / high / pass as generic fairy-tale emperor, no specific character         | `ORTH`, `DEX`, `IR`        | accept                                                                                          |
| `încuietoare`  | `Î`             | `Î`                | exact `Î`                  | household          | good / high / pass; lock/latch, no key-brand text                               | `ORTH`, `DEX`, `IR`        | accept                                                                                          |

## Projected Impact

If all accepted rows above later pass implementation review, production mapping, and validation, expected mixed-pool counts become:

| Target | Current starts / contains / mixed | Projected starts / contains / mixed | Notes                                                                                            |
| ------ | --------------------------------: | ----------------------------------: | ------------------------------------------------------------------------------------------------ |
| `CE`   |                     `11 / 3 / 14` |                       `13 / 3 / 16` | Reaches the floor; still below the 20 stretch.                                                   |
| `CI`   |                      `9 / 5 / 14` |                        `9 / 8 / 17` | Reaches the floor; benefits from `magician`.                                                     |
| `GE`   |                      `5 / 5 / 10` |                        `9 / 6 / 15` | Reaches the floor.                                                                               |
| `GI`   |                       `1 / 3 / 4` |                        `6 / 9 / 15` | Reaches the floor only with several advanced or lower-priority rows.                             |
| `CHE`  |                      `2 / 8 / 10` |                       `2 / 13 / 15` | Reaches the floor through contains-only words.                                                   |
| `CHI`  |                       `4 / 5 / 9` |                        `8 / 7 / 15` | Reaches the floor, but `chimen` and `chiciură` are lower-priority.                               |
| `GHE`  |                       `5 / 3 / 8` |                       `11 / 4 / 15` | Reaches the floor, with safety/image cautions for `gheară` and `ghețuș`.                         |
| `GHI`  |                       `7 / 1 / 8` |                        `9 / 6 / 15` | Reaches the floor only if low-priority rows like `ghișeu` are accepted in implementation review. |
| `Î`    |                       `1 / 0 / 1` |                         `8 / 0 / 8` | Improves exact starts-with depth; do not force 15.                                               |
| `Ă`    |                     `0 / n/a / 0` |                       `0 / n/a / 0` | Keep disabled.                                                                                   |
| `Â`    |                     `0 / n/a / 0` |                       `0 / n/a / 0` | Keep disabled.                                                                                   |

The 20-word stretch target should not drive the next implementation batch. The accepted rows are enough to test whether the 15-word floor is achievable without obvious padding. After that, the remaining stretch gap should be reviewed again from real playtesting and image-brief quality.

## Held Or Rejected Candidates

These rows should not be used to pad counts in the next implementation batch.

| Candidate                                       | Target      | Decision      | Reason                                                                                                                                                        |
| ----------------------------------------------- | ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ăsta`, `ăla`, `ăia`, `ăștia`                   | `Ă`         | reject        | Pronouns/demonstratives; not concrete single-image vocabulary.                                                                                                |
| exact `Â` starts-with words                     | `Â`         | reject for v1 | Current orthography uses `î` at the beginning of ordinary words and `â` inside words; no strong child-facing exact `Â` starts-with scope was found.           |
| `zece`, `zero`                                  | `CE`        | hold          | Numerals are child-known, but no-text images are ambiguous and weaker than object words.                                                                      |
| `lege`                                          | `GE`        | reject        | Abstract and not suitable for picture-first preschool gameplay.                                                                                               |
| `merge`, `trage`, `împinge`, `ajunge`, `plânge` | `GE`        | hold          | Common verbs/actions, but the current category model and picture-first format favor nouns; revisit only if action-word category/schema is deliberately added. |
| `sânge`, `gingie`, `gips`                       | `GI`        | reject        | Medical/body/injury contexts are visually awkward or safety-sensitive for this pack.                                                                          |
| `giuvaier`, `ginseng`, `girasol`                | `GI`        | reject        | Too adult, rare, or weakly familiar for ages 4 to 6.                                                                                                          |
| `chibrit`, `brichetă`                           | `CHI`/`CHE` | reject        | Fire/match/lighter safety concern.                                                                                                                            |
| `chiloți`                                       | `CHI`       | reject        | Privacy-sensitive clothing item for public child-facing content.                                                                                              |
| `schelet`                                       | `CHE`       | reject        | Can read as frightening or Halloween-like; weaker than accepted household/school words.                                                                       |
| `chenar`, `cherestea`, `cheag`                  | `CHE`       | hold          | Concrete but weak child familiarity or image clarity.                                                                                                         |
| `chihlimbar`, `chimion`                         | `CHI`       | hold          | Concrete but weaker familiarity than accepted rows. Use only if later review needs another low-priority `CHI` candidate.                                      |
| `ghimpe`, `așchie`                              | `GHI`       | reject        | Thorn/splinter imagery is safety-sensitive.                                                                                                                   |
| `ghiulea`                                       | `GHI`       | reject        | Weapon/cannonball association.                                                                                                                                |
| `junghi`, `liturghie`, `ghinion`                | `GHI`       | reject        | Pain, religious/abstract, or non-imageable context.                                                                                                           |
| `ghid`, `ghidaj`                                | `GHI`       | reject        | Role/abstract concept; weak picture prompt for this age band.                                                                                                 |

## Implementation Guidance For Next Batch

Recommended next implementation batch: **Batch 23: Diacritic And Sequence Top-Up Manifest Implementation**.

Scope recommendation:

- Implement the accepted rows above in two slices if the image or placeholder workload feels too large:
  - Slice A: `GI`, `GE`, `GHE`, `GHI`, and exact `Î`.
  - Slice B: `CE`, `CI`, `CHE`, and `CHI`.
- Use canonical starting-letter storage. A word that helps `GI` or `GHI` still belongs in its true starting-letter word file.
- Add `Ă` and `Â` letter manifest entries only if a later human decision changes the quality ceiling. This worksheet does not recommend enabling them.
- Apply the already-approved placeholder policy if final images are not produced in the same implementation batch, and keep `/admin/words` placeholder counts auditable.
- Keep speech-target, syllable, cluster, contrast, therapy, and clinical metadata in docs only.
- Before production JSON changes, re-run duplicate checks against exact `word`, `display`, and `normalized` values.
- During implementation, rows marked as mixed or low-priority must receive stricter image-brief review. If the image cannot be clear without text, reject or defer the word instead of weakening the pack.

Suggested verification for the implementation batch:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Browser verification should use the user-running server on `http://localhost:3000` and cover `/ro`, `/admin/words`, `/ro/play/gi`, `/ro/play/ghe`, `/ro/play/ghi`, `/ro/play/chi`, `/ro/play/ge`, `/ro/play/che`, `/ro/play/ce`, `/ro/play/ci`, and `/ro/play/i-circ`.
