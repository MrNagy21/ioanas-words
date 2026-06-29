# Batch 76 Slice Plan Index

Status: orchestrator scope split complete; no production content added.

Last updated: 2026-06-23.

## Scope

This document turns the Batch 75 human-approved candidate pool into bounded production slices for the next Romanian content expansion work.

Batch 76 is planning/index work only. It does not add production JSON records, crop images, optimize public WebP assets, change routes, change schema, add placeholders, add speech-target production metadata, introduce database/auth/billing/admin editing scope, or make clinical claims.

## Input Decision

The human approved implementing every Batch 75 candidate marked `priority` or `reserve`.

The human excluded every Batch 75 candidate marked `hold`.

Future workers must still run source/spelling checks, duplicate checks, child-fit checks, imageability checks, human image review gates, content validation, lint/type/build checks, gameplay/matching/setup-storage checks, diff checks, and route checks before promotion. If any accepted candidate fails those checks, the worker must stop and ask instead of silently promoting it.

## Dedupe And Production Collision Audit

Read source:

- `high-value-target-top-up-worksheet-batch-75.md`
- `implementation-orchestrator-prompt-batch-76.md`
- current `content/ro/words-*.json` manifests

Results:

- Accepted target entries before exact-word dedupe: `164`.
- Accepted unique exact words after dedupe: `161`.
- Current production content before Batch 76 remains `479` total Romanian records, `476` approved words, `476` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.
- Exact approved production collisions found by `word`, `display`, or `normalized`: `0`.
- Exact cross-listed accepted words:
  - `ceafă`: accepted for `F` and `CE`; plan once in canonical `C`.
  - `săgeată`: accepted for `S` and `GE`; plan once in canonical `S`.
  - `rechin`: accepted for `R` and `CHI`; plan once in canonical `R`.

Important planning blocker:

- `ramă` and `râmă` are different exact Romanian words, but both fold to the same current `normalized` value, `rama`, and the same default ID/image slug, `ro-r-rama`. The current validator rejects duplicate normalized words globally. A future planning worker must resolve this before promotion, most likely by blocking one row or asking the human before any schema/validator exception. Do not promote both as ordinary rows with the current schema.

## Slice Order

The order prioritizes the biggest documented gaps first: `H`, `J`, `Ț`, `D`, `V`, `F`, `Ș`, `T`, then remaining letter top-ups and sequence mixed-pool candidates. Slices are roughly `15` words each, except the final shorter cleanup slice.

Each word is listed once only. Cross-listed targets are shown in parentheses.

### Slice 1: Batch 77 Planning Target

Primary goal: start closing the largest `H` starts-with gap.

Words:

`hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, `hering`

Canonical files:

- `content/ro/words-h.json` for all rows.

Key risks to check:

- `halat` must use the bathrobe sense unless a source/review decision accepts another sense.
- `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, and `hering` need source/familiarity/imageability checks.
- Person or scene rows such as `horă` need extra thumbnail and style-consistency review.

### Slice 2

Primary goal: finish `H` accepted rows, start `J`, and include the quality-limited `Ț` accepted rows early.

Words:

`hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`, `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`, `țintă`, `ținută`, `țesătură`, `țâșnitoare`

Canonical files:

- `content/ro/words-h.json`: `hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`
- `content/ro/words-j.json`: `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`
- `content/ro/words-ț.json`: `țintă`, `ținută`, `țesătură`, `țâșnitoare`

Key risks to check:

- `ham` is ambiguous and must use the dog harness sense if accepted.
- `jambon` may overlap visually with `șuncă`.
- `joystick` needs borrowed-word source/spelling review.
- `țintă` must avoid weapon framing.
- `ținută`, `țesătură`, and `țâșnitoare` are quality-limited and need strict child-fit checks.

### Slice 3

Primary goal: complete the `J` accepted pool and start `D`.

Words:

`jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`, `drum`, `dulceață`, `dop`, `dar`, `drapel`, `dalmațian`

Canonical files:

- `content/ro/words-j.json`: `jet`
- `content/ro/words-a.json`: `ambalaj`
- `content/ro/words-e.json`: `etaj`
- `content/ro/words-b.json`: `bujor`
- `content/ro/words-p.json`: `peisaj`, `prăjitor`, `pajiște`
- `content/ro/words-m.json`: `majoretă`
- `content/ro/words-c.json`: `coji`
- `content/ro/words-d.json`: `drum`, `dulceață`, `dop`, `dar`, `drapel`, `dalmațian`

Key risks to check:

- `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, and `coji` need imageability checks at wheel size.
- `drapel` must avoid political/national specificity unless explicitly approved.
- `dalmațian` needs friendly dog framing and spelling check.

### Slice 4

Primary goal: finish `D` and add the strongest `V` starts-with and contains-only top-ups.

Words:

`disc`, `diamant`, `dungă`, `dronă`, `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, `navă`

Canonical files:

- `content/ro/words-d.json`: `disc`, `diamant`, `dungă`, `dronă`
- `content/ro/words-v.json`: `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`
- `content/ro/words-e.json`: `evantai`
- `content/ro/words-n.json`: `navă`

Key risks to check:

- `disc`, `dungă`, `val`, and `ventuză` require clear sense/image decisions.
- `dronă` must avoid surveillance or military framing.
- `vulcan` must avoid disaster/scary framing.
- `navă` must be distinct enough from existing ship/boat words.

### Slice 5

Primary goal: finish `V` and add most starts-with `F` rows.

Words:

`șuviță`, `movilă`, `servietă`, `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`, `afine`, `bufniță`, `cartof`

Canonical files:

- `content/ro/words-ș.json`: `șuviță`
- `content/ro/words-m.json`: `movilă`
- `content/ro/words-s.json`: `servietă`
- `content/ro/words-f.json`: `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`
- `content/ro/words-a.json`: `afine`
- `content/ro/words-b.json`: `bufniță`
- `content/ro/words-c.json`: `cartof`

Key risks to check:

- `șuviță`, `movilă`, `servietă`, `frate`, `fotografie`, and `fântână` need strict imageability/sense checks.
- `frate` is a person row and needs style consistency review.
- `servietă` must not skew too adult-office if accepted.

### Slice 6

Primary goal: finish `F` and add most `Ș` rows.

Words:

`coif`, `ceafă` (`F`, `CE`), `puf`, `șifonier`, `cufăr`, `trifoi`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`, `brioșă`, `coșuleț`

Canonical files:

- `content/ro/words-c.json`: `coif`, `ceafă`, `cufăr`, `coșuleț`
- `content/ro/words-p.json`: `puf`
- `content/ro/words-ș.json`: `șifonier`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`
- `content/ro/words-t.json`: `trifoi`
- `content/ro/words-b.json`: `brioșă`

Key risks to check:

- `ceafă`, `puf`, and `coșuleț` are visually hard or near-neighbor rows.
- `șuncă` may overlap with `jambon`; do not rely on duplicate-looking images.
- `șofer` and `șotron` need person/scene thumbnail review.
- `șah` must avoid letters/numbers on the board.

### Slice 7

Primary goal: complete `Ș`, complete `T`, and begin `L`.

Words:

`tuș`, `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`, `lemn`, `lacăt`, `libelulă`, `lift`

Canonical files:

- `content/ro/words-t.json`: `tuș`, `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`
- `content/ro/words-l.json`: `lemn`, `lacăt`, `libelulă`, `lift`

Key risks to check:

- `trusă` and `tub` need fixed senses before image generation.
- `tuș` may be hard to identify without text.
- `telecomandă` must not show brand marks or readable button text.

### Slice 8

Primary goal: finish `L`, add `R`, and start `S` reserve rows.

Words:

`leopard`, `lână`, `lan`, `lampion`, `ramă`, `râmă`, `rândunică`, `rechin` (`R`, `CHI`), `riglă`, `rulotă`, `ruladă`, `radio`, `romb`, `stea`, `saltea`

Canonical files:

- `content/ro/words-l.json`: `leopard`, `lână`, `lan`, `lampion`
- `content/ro/words-r.json`: `ramă`, `râmă`, `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`
- `content/ro/words-s.json`: `stea`, `saltea`

Key risks to check:

- `ramă` and `râmă` cannot both be promoted as ordinary rows under the current normalized/ID rules.
- `rechin` must avoid frightening framing.
- `romb` is shape-only and may be less object-like than preferred.
- `radio` must avoid visible text or brand marks.

### Slice 9

Primary goal: finish `S` reserve rows and start sequence mixed-pool top-ups for `CE` and `CI`.

Words:

`sfeclă`, `spanac`, `săgeată` (`S`, `GE`), `spate`, `sprânceană`, `stropitoare`, `solniță`, `cer`, `ceață`, `cep`, `celofan`, `cișmea`, `cioban`, `ciocârlie`, `ciocănitoare`

Canonical files:

- `content/ro/words-s.json`: `sfeclă`, `spanac`, `săgeată`, `spate`, `sprânceană`, `stropitoare`, `solniță`
- `content/ro/words-c.json`: `cer`, `ceață`, `cep`, `celofan`, `cișmea`, `cioban`, `ciocârlie`, `ciocănitoare`

Key risks to check:

- `spate`, `sprânceană`, `cer`, `ceață`, and `celofan` need strict imageability checks.
- `săgeată` must be a harmless arrow symbol/object, not a weapon cue.
- `cioban` is a person-scene row and needs style consistency review.
- `ciocârlie` may be less familiar than other birds.

### Slice 10

Primary goal: finish `CI`, add `GE`, add `GI`, and start `CHE`.

Words:

`cimpoi`, `ciclist`, `cilindru`, `geamandură`, `gerbera`, `gene`, `genunchieră`, `gel`, `gips`, `girofar`, `giruetă`, `argilă`, `cheiță`, `chenar`, `etichetă`

Canonical files:

- `content/ro/words-c.json`: `cimpoi`, `ciclist`, `cilindru`, `cheiță`, `chenar`
- `content/ro/words-g.json`: `geamandură`, `gerbera`, `gene`, `genunchieră`, `gel`, `gips`, `girofar`, `giruetă`
- `content/ro/words-a.json`: `argilă`
- `content/ro/words-e.json`: `etichetă`

Key risks to check:

- `gerbera`, `gel`, `gips`, `giruetă`, and `argilă` require source/spelling/familiarity checks.
- `gene` may be too fine-detail for wheel thumbnails.
- `cilindru` is shape-like and may be too abstract unless represented as a toy/block.
- `gips` and later `ghips` may be semantically too close; do not add both without explicit duplicate/near-duplicate review.

### Slice 11

Primary goal: finish sequence mixed-pool accepted rows for `CHE`, `CHI`, `GHE`, and `GHI`.

Words:

`încheietură`, `buchețel`, `chihlimbar`, `smochină`, `trunchi`, `gheorgină`, `gheizer`, `ungher`, `zgheab`, `ghimpe`, `ghips`

Canonical files:

- `content/ro/words-î.json`: `încheietură`
- `content/ro/words-b.json`: `buchețel`
- `content/ro/words-c.json`: `chihlimbar`
- `content/ro/words-s.json`: `smochină`
- `content/ro/words-t.json`: `trunchi`
- `content/ro/words-g.json`: `gheorgină`, `gheizer`, `ghimpe`, `ghips`
- `content/ro/words-u.json`: `ungher`
- `content/ro/words-z.json`: `zgheab`

Key risks to check:

- `încheietură`, `chihlimbar`, `gheizer`, `ungher`, `zgheab`, `ghimpe`, and `ghips` need strict source/familiarity/imageability checks.
- `ghips` and `gips` are near-duplicate spelling/sense rows across slices; source and product-review decision must happen before promoting both.
- `gheizer` may be uncommon for many children and should be blocked if source/child-fit review is weak.

## Verification Performed

- Read required project and feature docs.
- Recomputed current production totals from `content/ro/words-*.json`: `479` total records, `476` approved words, `476` ready images, `0` approved placeholders, `3` rejected rows.
- Audited accepted Batch 75 non-hold entries: `164` target entries, `161` exact unique words.
- Checked exact accepted words against current approved production `word`, `display`, and `normalized` values; no current approved production collision found.
- Ran an independent worker audit with no file edits; it matched the `164` / `161` counts and the three cross-listed words.

Batch 76 intentionally did not run content validation, lint, typecheck, gameplay checks, matching checks, setup-storage checks, build, browser route checks, or image validation because no production JSON, code, route, fixture, or image assets changed.

## Next Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion with Batch 77.

Read these files first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/plan.md
5. docs/status.md
6. docs/image-pipeline.md
7. docs/app-development-program/speech-therapy-content-guidance.md
8. docs/app-development-program/features/romanian-content-expansion/spec.md
9. docs/app-development-program/features/romanian-content-expansion/plan.md
10. docs/app-development-program/features/romanian-content-expansion/status.md
11. docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
12. docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
13. docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md

Task: Batch 77 planning-only document for Slice 1 from `slice-plan-index-batch-76.md`.

Slice 1 words:

hipopotam, hârtie, hotel, halat, harpă, horn, hamster, hambar, husă, hol, horă, hochei, hublou, hamburger, hering

Use `multi_agent_v1.spawn_agent` with `agent_type: "worker"` for the bounded slice planning work. Tell the worker it is not alone in the codebase, must not revert unrelated edits, and must keep changes scoped to one new planning-only document under `docs/app-development-program/features/romanian-content-expansion/`. The orchestrator owns shared status integration.

The planning worker must:

- write one planning-only document for Slice 1;
- not add production JSON records;
- not add, crop, or optimize images;
- not edit shared status files;
- run source/spelling checks for each word where production decisions depend on current Romanian usage;
- check duplicates and near-duplicates against current approved production words;
- record canonical file, planned stable ID, planned image path, category, part of speech, difficulty, age band, alt-text direction, image brief direction, expected coverage deltas, route/validation impact, and risk for every word;
- block any row that fails source, safety, duplicate, child-fit, or imageability checks and explain why;
- preserve all hold exclusions and do not add placeholders, clinical claims, database/auth/billing scope, admin editing, or AI pronunciation.

After the worker finishes, review the document, update `docs/app-development-program/features/romanian-content-expansion/status.md` and `docs/status.md`, run `git diff --check`, and provide the next ready-to-copy prompt for the Slice 1 image-brief/contact-sheet batch if all planned rows remain acceptable. If any row is blocked, record the blocker and adjust the next prompt accordingly.
```
