# Batch 14 Sound Coverage And Practice Target Planning

Batch: Romanian Content Expansion Batch 14, Sound Coverage And Practice Target Planning.

Spec date: 2026-05-17.

Status: Complete planning source. The accepted Batch 14 candidate worksheet/spec is `sound-coverage-scope-spec-batch-14.md`. This file does not add production JSON records, UI code, image assets, production speech-target metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Research Requirement

Before accepting any new production word or sound-coverage scope, the implementing agent must check current online/source material and record the sources used. If strong sources are unavailable for a specific narrow word choice, the agent may use best judgment, but must say that the candidate is based on internal review rather than a cited source.

Use higher-quality sources first:

- current Romanian early-education guidance;
- Romanian child phonology or speech-language research;
- Romanian logopedie materials from recognized educational or counseling institutions;
- Romanian phonetics/phonology references for letter groups and sound values;
- child vocabulary and picture-word resources only as supporting evidence, not automatic approval.

Do not use worksheet examples or pronunciation-reference examples as automatic production approvals. Every candidate still needs Word Wheel review for child familiarity, concreteness, imageability, safety, and age fit.

Research checked for this planning update on 2026-05-17:

- Romanian early-education fundamentals emphasize vocabulary development, sound discrimination, and symbol-sound correspondence in early childhood: https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2024/div/Repere_fundamentale_educatie_timpurie_2024.pdf
- Romanian early-education curriculum includes progressive vocabulary extension and phonetic differentiation of words, syllables, and sounds: https://www.isj.sv.edu.ro/images/Docs/Discipline/invatamnat_preprimar/2018/Curriculum_pentru_educatie_timpurie_2018.pdf
- Romanian classroom material standards include phonetic-discrimination materials, picture alphabets, picture vocabulary, and games for finding sounds: https://www.isj.sv.edu.ro/images/Docs/Discipline/invatamnat_preprimar/2017/Documentatii_curriculare_si_metodice/Standardele_privind_materialele_de_predare.pdf
- Buja, `Phonological development in Romanian monolingual children`, supports treating liquids, sibilants, and affricates as meaningful review targets in child speech-sound development: https://bwpl.unibuc.ro/wp-content/uploads/2017/03/BWPL_2015_1_BUJA.pdf
- Romanian phonetics/phonology work identifies `ce/ci`, `ge/gi`, `che/chi`, and `ghe/ghi` as graphical renderings for consonantal/palatal sound groups, not alphabet letters: https://webbut.unitbv.ro/index.php/Series_IV/article/download/8624/6100/17165
- ASHA speech-sound guidance remains useful for checking word position, phonetic context, sound combinations, and culturally relevant picture prompts without making clinical claims: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/

## Decision

Pause placeholder image replacement until the important sound targets and the eight bottom-row practice targets are planned and implemented.

The user clarified the next priority after Batch 13:

- Important sounds should have stronger combined pools before final image work begins.
- For important sounds, the mixed/combined pool should target at least `30` words where quality allows.
- The start page should include eight additional sound options at the bottom for the Romanian letter-sequence targets already discussed:
  - `CE`
  - `CI`
  - `GE`
  - `GI`
  - `CHE`
  - `CHI`
  - `GHE`
  - `GHI`

These are practice targets, not alphabet buckets. They should not be added to `content/ro/letters.json` as Romanian letters.

Batch 14 accepted a documentation-only scope of `110` unique candidate rows in `sound-coverage-scope-spec-batch-14.md`. If Batch 15 implements all accepted rows as placeholder-backed approved records, expected target impact is:

- approved Romanian words `209 -> 319`;
- ready images unchanged at `83`;
- placeholder images `126 -> 236`;
- `ș` mixed `22 -> 36`;
- `j` mixed `4 -> 14`;
- `ț` mixed `14 -> 36`;
- `z` mixed `12 -> 31`;
- `ce` mixed `2 -> 14`;
- `ci` mixed `5 -> 14`;
- `ge` mixed `4 -> 10`;
- `gi` mixed `1 -> 4`;
- `che` mixed `3 -> 10`;
- `chi` mixed `1 -> 9`;
- `ghe` mixed `2 -> 8`;
- `ghi` mixed `2 -> 8`.

Quality ceilings are explicit in the accepted scope. `J`, `GI`, `GHE`, `GHI`, and several sequence targets remain below `30` mixed words because stronger counts would require obscure, abstract, unsafe, adult, or visually weak words.

## Current Derived Baseline

Derived from `getDerivedWordPoolsForTarget("ro", target)` after Batch 13.

| Target | Starts-with | Contains-only | Mixed | Ready | Placeholder | Gap to 30 mixed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `ș` | 7 | 15 | 22 | 11 | 11 | 8 |
| `s` | 14 | 19 | 33 | 16 | 17 | 0 |
| `r` | 10 | 72 | 82 | 29 | 53 | 0 |
| `j` | 2 | 2 | 4 | 3 | 1 | 26 |
| `l` | 8 | 48 | 56 | 10 | 46 | 0 |
| `ț` | 1 | 13 | 14 | 7 | 7 | 16 |
| `z` | 4 | 8 | 12 | 6 | 6 | 18 |
| `ce` | 1 | 1 | 2 | 2 | 0 | 28 |
| `ci` | 2 | 3 | 5 | 4 | 1 | 25 |
| `ge` | 2 | 2 | 4 | 4 | 0 | 26 |
| `gi` | 1 | 0 | 1 | 1 | 0 | 29 |
| `che` | 0 | 3 | 3 | 2 | 1 | 27 |
| `chi` | 0 | 1 | 1 | 1 | 0 | 29 |
| `ghe` | 1 | 1 | 2 | 1 | 1 | 28 |
| `ghi` | 1 | 1 | 2 | 0 | 2 | 28 |

Interpretation:

- `R`, `S`, and `L` already clear the user-requested mixed-pool threshold.
- `Ș`, `J`, `Ț`, and `Z` need more coverage before image replacement.
- The eight sequence targets need an explicit target manifest/UI path and a candidate scope; most will require many additional child-friendly contains words because exact starts-with options are naturally limited.
- Quality still overrides numeric targets. If a target cannot reach `30` without obscure, unsafe, abstract, visually weak, or too-old words, the spec should document the quality ceiling instead of padding.

## Target Policy For The Next Scope

Batch 14 created a reviewed sound-coverage vocabulary scope before implementation.

Prioritize:

1. Bring `ș` mixed coverage from `22` to at least `30`.
2. Bring `j` mixed coverage meaningfully upward, targeting `30` only if enough strong child-facing words exist.
3. Bring `ț` and `z` mixed coverage upward, targeting `30` where quality allows.
4. Add candidates for the eight sequence targets so each can become a real start-page practice option.
5. Preserve the existing broad alphabet coverage; do not remove any current approved word.

Candidate rows must still be common, concrete, child-known, safe, imageable, and suitable for ages 4 to 6. Rejected and needs-revision candidates should remain documented and out of production JSON.

For every candidate row, record:

```txt
candidate word
display spelling with Romanian diacritics
canonical starting letter
target sound or sequence improved
target position: starts-with / contains-only / repeated / final when relevant
source basis: cited source / helper-derived gap / internal review
source URL or note
age fit
imageability
safety
decision
rejection or quality-ceiling reason, if applicable
```

## Eight Bottom-Row Practice Targets

The start page should keep the normal Romanian letter grid and add a visually separate bottom row or compact section for these eight practice targets:

| Practice target | Route token | Display label | Matching behavior |
| --- | --- | --- | --- |
| `ce` | `ce` | `CE` | words containing exact lowercase `ce` in `word` or `display` |
| `ci` | `ci` | `CI` | words containing exact lowercase `ci` in `word` or `display` |
| `ge` | `ge` | `GE` | words containing exact lowercase `ge` in `word` or `display` |
| `gi` | `gi` | `GI` | words containing exact lowercase `gi` in `word` or `display` |
| `che` | `che` | `CHE` | words containing exact lowercase `che` in `word` or `display` |
| `chi` | `chi` | `CHI` | words containing exact lowercase `chi` in `word` or `display` |
| `ghe` | `ghe` | `GHE` | words containing exact lowercase `ghe` in `word` or `display` |
| `ghi` | `ghi` | `GHI` | words containing exact lowercase `ghi` in `word` or `display` |

UI notes:

- These should appear below the alphabet letter selection on `/ro`, not mixed into the alphabet grid.
- Use child-facing wording like `Sunete` or `Alte sunete`, not clinical language.
- The route can reuse `/ro/play/<target>` after the play route supports practice targets beyond enabled letters.
- The selected play page should show the target label (`CE`, `CHI`, etc.) in the hub and setup sheet, not a fake letter bucket.
- The default mode for sequence targets should be mixed/contains-driven, because many of these targets have few or no starts-with words.

## Technical Planning Notes

The current implementation only generates play routes from `getEnabledLetters("ro")` and rejects targets that are not in `letters.json`. The practice-target implementation should add a separate static target manifest/helper, not overload `letters.json`.

Recommended shape:

```txt
src/content/practice-targets.ts or content/ro/practice-targets.json
```

Each target should include:

```txt
id: "ce" | "ci" | "ge" | "gi" | "che" | "chi" | "ghe" | "ghi"
label: "CE" | ...
locale: "ro"
kind: "sequence"
routeSegment: same as id
sortOrder: 1..8
featured: true
```

Implementation should:

- Add helper APIs for enabled practice targets.
- Include both enabled letters and enabled practice targets in `generateStaticParams()` for `/ro/play/[letter]`.
- Resolve route segments first against exact letters/aliases, then against practice targets.
- Use `getDerivedWordPoolsForTarget("ro", target.id)` for sequence target pools.
- Extend `GameplayContent` only if needed so the UI can distinguish a letter bucket from a sequence practice target.
- Update `/admin/words` or add an admin section to show practice-target coverage and placeholder counts.
- Add regression checks for route generation and sequence coverage.

## Production JSON Boundary

Do not add speech-target metadata to word records for this work. Candidate review should stay in documentation. Production word JSON should continue using the established fields only.

New words added to support these targets may be approved placeholder-backed records under the Batch 11/13 policy, but they must be production-quality vocabulary entries and remain visible/auditable in `/admin/words`.

## Next Work Order

1. Batch 14: Sound Coverage Scope Spec And Practice Target UI Plan. Complete in `sound-coverage-scope-spec-batch-14.md`.
2. Batch 15: Sound Coverage Manifest Implementation And Start-Page Practice Targets.
3. Batch 16: Placeholder Image Replacement.

Image replacement should not start until Batch 15 has added the accepted sound-coverage words and the eight bottom-row practice target options.

## Historical Prompt: Batch 14

```txt
You are working in /Users/darius/mrNagySSC/ioana/word-wheel.

Start Romanian Content Expansion Batch 14: Sound Coverage Scope Spec And Practice Target UI Plan.

Before editing, read:
1. AGENTS.md
2. docs/agent-brief.md
3. docs/status.md
4. docs/app-development-program/review-and-qa.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/app-development-program/features/romanian-content-expansion/plan.md
8. docs/app-development-program/features/romanian-content-expansion/vocabulary-scope-spec-batch-12.md
9. docs/app-development-program/features/romanian-content-expansion/sound-coverage-and-practice-targets-batch-14.md

Scope:
- Create a reviewed candidate worksheet/spec for underfilled important Romanian sound targets before image replacement.
- Use helper-derived coverage as the baseline after Batch 13.
- Check current online/source material before accepting any new production word or sound-coverage target.
- Prefer Romanian early-education guidance, Romanian child phonology research, recognized Romanian logopedie materials, Romanian phonetics/phonology references, and child vocabulary resources as supporting evidence.
- Record source URLs or explicit internal-review notes for candidate words and sound-coverage decisions.
- Target at least 30 mixed/combined words for important sounds where common, concrete, child-safe, imageable vocabulary allows it.
- Prioritize underfilled targets: ș, j, ț, z, ce, ci, ge, gi, che, chi, ghe, ghi.
- Define the start-page practice-target model for eight bottom-row options: CE, CI, GE, GI, CHE, CHI, GHE, GHI.
- Keep those eight options separate from content/ro/letters.json; they are sequence practice targets, not Romanian alphabet letters.
- Update Romanian expansion plan/status and global docs/status.md.

Non-goals:
- No production JSON records.
- No UI code.
- No final per-word images.
- No speech-target metadata in production JSON.
- No admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

QA:
- Review markdown for consistency and readable handoff quality.
- git diff --check
```

## Ready-To-Copy Prompt: Batch 15

```txt
You are working in /Users/darius/mrNagySSC/ioana/word-wheel.

Start Romanian Content Expansion Batch 15: Sound Coverage Manifest Implementation And Start-Page Practice Targets.

Before editing, read:
1. AGENTS.md
2. docs/agent-brief.md
3. docs/status.md
4. docs/app-development-program/review-and-qa.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/app-development-program/features/romanian-content-expansion/plan.md
8. docs/app-development-program/features/romanian-content-expansion/sound-coverage-and-practice-targets-batch-14.md
9. docs/app-development-program/features/romanian-content-expansion/sound-coverage-scope-spec-batch-14.md

Scope:
- Implement only accepted Batch 14 sound-coverage rows.
- Add production-quality placeholder-backed approved word records where final images are not ready.
- Keep production word JSON to the established ordinary vocabulary fields only.
- Add a separate practice-target manifest/helper for CE, CI, GE, GI, CHE, CHI, GHE, and GHI.
- Add the eight practice target options in a separate bottom section on /ro.
- Update /ro/play/[letter] static params and target resolution so letter buckets and practice targets both work.
- Use derived pools for exact sequence matching.
- Update admin coverage so practice-target counts and placeholder counts are visible/auditable.
- Update Romanian expansion plan/status and global docs/status.md.

Non-goals:
- No rejected, held, or needs-revision candidates.
- No final per-word images unless explicitly approved in a changed scope.
- No speech-target metadata in production JSON.
- No admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

QA:
- bun run validate:content
- bun run lint
- ./node_modules/.bin/tsc --noEmit --incremental false
- bun src/game/gameplay-compatibility.check.ts
- bun src/content/matching.check.ts
- git diff --check
- Browser-check http://localhost:3000/ro, http://localhost:3000/admin/words, and /ro/play/ce, /ro/play/ci, /ro/play/ge, /ro/play/gi, /ro/play/che, /ro/play/chi, /ro/play/ghe, /ro/play/ghi. If sandboxed localhost checks fail, retry outside the sandbox before treating the server as unavailable. Do not start another dev server or use another port.
```
