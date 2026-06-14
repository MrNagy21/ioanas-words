# Batch 43 Human Vocabulary Review: Requested Letter And Sound Expansion

Batch: Romanian Content Expansion Batch 43.

Status: complete; human vocabulary decisions recorded; no production content added.

Last updated: 2026-06-02.

## Source Worksheet

Review source:

- `docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md`

Batch 43 stayed review-only. It did not add production JSON records, images, route changes, schema changes, placeholders, or speech-target production metadata.

## Human Review Decision

The human approved the Batch 42 proposed words broadly, with the explicit direction that more good, safe words are better and the earlier `5` to `10` rare-letter additions should be treated as a minimum where quality allows.

The human explicitly called out these rows as acceptable or worth including, subject to spelling/source verification before production planning:

- `webcam`;
- `walkie-talkie`;
- `yak`;
- `yo-yo`;
- `quinoa`;
- `mixer`.

The human noted uncertainty about whether `wombat` is a Romanian word. Batch 44 should verify the Romanian standard form before accepting it into a production slice. If both `wombat` and `vombat` are attested, prefer the form that best matches current Romanian dictionary/orthographic evidence and the requested `W` starts-with goal only if it remains defensible for child-facing vocabulary.

The human confirmed that the currently proposed first-slice word `ceainic` is acceptable and should not be swapped out.

Safety direction: include as many words as practical, while staying as safe as possible for children around ages `4` to `6`.

## Source Rechecks For Borrowed Rows

Batch 43 performed a targeted source check for borrowed or foreign-looking rows raised by the human.

Source notes to carry into Batch 44:

- dexonline `walkie-talkie`: records DEX and DOOM entries for the borrowed technical noun. Source: https://dexonline.ro/definitie/walkie-talkie
- dexonline `kiwi`: records DEX and DOOM entries, including the fruit sense. Source: https://dexonline.ro/definitie/kiwi
- dexonline `koala`: records dictionary and DOOM entries for the animal. Source: https://dexonline.ro/definitie/koala
- dexonline `mixer`: records DEX and DOOM entries for the appliance sense. Source: https://dexonline.ro/definitie/mixer
- dexonline `quinoa`: records dictionary and DOOM entries. Source: https://dexonline.ro/definitie/quinoa
- dexonline wildcard `y*`: lists `yak`, `yo-yo`, `yoga`, and related `Y` entries, supporting a focused Batch 44 check of individual forms. Source: https://dexonline.ro/definitie/y%2A
- Romanian Wiktionary `wombat`: records Romanian `wombat` with variant `vombat`; this is weaker than dexonline/DOOM and should not be enough by itself for production. Source: https://ro.wiktionary.org/wiki/wombat
- dexonline `vombat`: exists as a lookup result connected to `wombat`; Batch 44 should inspect the exact entry before deciding whether a `W` starts-with production row is defensible. Source: https://dexonline.ro/definitie/vombat
- `webcam`: no strong dexonline result was found during this pass. Romanian usage sources strongly support `cameră web`; Batch 44 should decide whether the child-facing display should be `webcam` for `W` starts-with practice or `cameră web` as the safer Romanian expression. Example usage source: https://sansanews.ro/p-webcam-ce-este-si-la-ce-foloseste-o-camera-web/

## Accepted Candidate Pool

The following candidate groups are approved for future production-slice planning, still subject to Batch 44 per-word spelling, imageability, safety, duplicate, and canonical-file checks.

### Strong Child-Known Rows

All strong child-known rows in the Batch 42 worksheet are human-approved for the candidate pool.

Batch 44 should retain these row-specific notes:

- `bancă` must mean a park bench, not a financial institution.
- `șină` should be illustrated as a rail or train track, not an abstract line.
- `dormitor` is acceptable if the bedroom scene remains simple at thumbnail size.
- `dovlecel` is acceptable despite the existing `dovleac`, but the image and category should make the distinction clear.
- Person/family rows such as `soră` remain allowed under earlier reviewed person/family image policy.
- `gălușcă` is acceptable only if the dumpling image is clear.
- `brățară` is acceptable and distinct from existing `braț`.

### Learnable Stretch Rows

Learnable stretch rows are also accepted into the candidate pool, not rejected merely because they are less familiar. Batch 44 should prefer the safest and most imageable stretch rows first.

Notable accepted stretch rows include:

- `kimono`;
- `karate`;
- `kilt`;
- `mixer`;
- `yoga`;
- `radiator`;
- `râmă`;
- `roză`;
- `sacou`;
- `șoim`;
- `șnur`;
- `ștampilă`;
- `șezlong`;
- `tacâm`;
- `țelină`;
- `țarc`;
- `țambal`;
- `țipar`;
- `țiglă`;
- `viespe`;
- `dantelă`;
- `degetar`;
- `daltă`;
- `dudă`;
- `jder`;
- `jambiere`;
- `jardinieră`;
- `joben`;
- `jantă`;
- `rășină`;
- `coțofană`;
- `șurubelniță`;
- `bondar`;
- `cojoc`;
- `bijuterie`;
- `gingie`;
- `gheorgină`;
- `răchită`.

### Held Rows Now Approved Or Revised For Planning

The human approval moved several held rows into the planning pool, with verification gates:

| Candidate | Batch 43 decision | Batch 44 condition |
| --- | --- | --- |
| `quinoa` | Approved as a rare `Q` starts-with stretch | Verify standard spelling and decide whether food familiarity is acceptable enough for the slice. |
| `walkie-talkie` | Approved | Verify exact production ID/display handling for the hyphenated form. |
| `webcam` | Approved in principle | Prefer `cameră web` if Romanian wording is prioritized; use `webcam` only if the `W` practice value justifies the borrowed display. |
| `wombat` | Tentatively approved, but uncertain | Verify whether `wombat` or `vombat` is the defensible Romanian production form. |
| `yo-yo` | Approved | Verify `yo-yo` versus `yoyo` and hyphenated ID/display handling. |
| `yak` | Approved | Verify `yak` versus adapted `iac`; use `yak` only if `Y` starts-with practice remains defensible. |
| `yacht` | Not prioritized for first slice | Prefer adapted `iaht` unless a later explicit `Y` bucket decision accepts the foreign spelling. |
| `quokka` | Accepted only as later rare-letter stretch | Verify Romanian attestation before planning. |
| `ketchup` | Accepted only as later rare-letter stretch | Avoid brand-like packaging and verify spelling before planning. |
| `valiză` | Accepted as later candidate | Avoid adding only as a near-synonym of existing `geamantan`. |
| `vânt` | Accepted as later candidate | Image ambiguity remains high; not a first-slice priority. |

Rows held for child safety or depiction sensitivity, such as `doctor`, `balerină`, `vrăjitor`, `șanț`, and `cenușă`, are not rejected, but should stay out of the first slice unless a later review deliberately chooses them.

## Missing Ă And Â Starts-With Decision

Batch 43 records the Batch 42 finding as accepted:

- no production-ready starts-with `Ă` candidates were found;
- no production-ready starts-with `Â` candidates were found;
- do not force `Ă` or `Â` starts-with rows using pronouns, deictics, nonstandard spellings, or obscure terms.

Later implementation may still enable `Ă` and `Â` as playable targets through contains-only and mixed modes if the UX explicitly supports zero starts-with words.

## Rejected Rows

The Batch 42 rejected/not-recommended rows remain rejected unless a later human review explicitly reopens one:

- `ăla`;
- `ăsta`;
- `ânger`;
- `kilogram`;
- `quasar`;
- `quetzal`;
- `watt`;
- `weekend`;
- `whisky`;
- `text`;
- `explozie`;
- `yeti`;
- `ruj`;
- `jeep`;
- duplicate `lighean`;
- duplicate `tobogan`.

## First Approved Production-Slice Queue

The first Batch 44 planning queue should stay small enough for one image-brief/contact-sheet pass while covering the highest-value new rare-letter and requested-sound wins.

Approved first slice, in order:

1. `kiwi`
2. `koala`
3. `xilofon`
4. `taxi`
5. `pix`
6. `boxă`
7. `mixer`
8. `walkie-talkie`
9. `webcam` or revised `cameră web` after Batch 44 spelling decision
10. `yo-yo`
11. `yak` or revised `iac` after Batch 44 spelling decision
12. `quinoa`
13. `lampă`
14. `lună`
15. `ceainic`

Rationale:

- covers new or weak rare-letter practice for `K`, `Q`, `W`, `X`, and `Y`;
- includes very strong `X` starts, medial, and final examples;
- includes two simple `L` starts-with words and one `CE` starts-with word;
- limits first-slice complexity while preserving the human direction to approve a broader future pool.

Batch 44 may replace `webcam` or `yak` with the Romanian-standard form if source checks show that the display form should change. If either replacement loses the requested rare-letter starts-with value, Batch 44 should record that explicitly instead of silently forcing the bucket.

## Batch 44 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 43.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
9. docs/app-development-program/features/romanian-content-expansion/plan.md
10. docs/app-development-program/features/romanian-content-expansion/status.md
11. docs/status.md

Goal:

Execute Batch 44: production slice planning for the first Batch 43 approved queue. Do not add production JSON records, image assets, route/schema changes, placeholders, or speech-target production metadata.

Plan this first queue in order:

1. kiwi
2. koala
3. xilofon
4. taxi
5. pix
6. boxă
7. mixer
8. walkie-talkie
9. webcam or revised cameră web after source decision
10. yo-yo
11. yak or revised iac after source decision
12. quinoa
13. lampă
14. lună
15. ceainic

For each selected word, record:

- canonical starting-letter manifest file;
- stable word ID and filename-safe image path;
- display spelling and any hyphen/diacritic ID convention;
- source/orthography verification, especially for webcam/cameră web, yak/iac, yo-yo, walkie-talkie, quinoa, kiwi, koala, and mixer;
- category, part of speech, difficulty, age band, source plan, license plan, and status plan;
- starts-with, contains-only, mixed, requested-target, and overlap impact;
- image brief direction and any safety/image ambiguity notes;
- whether new letter manifests, route aliases, loader imports, validation, matching helpers, admin inventory, setup/play routing, or compatibility fixtures will need changes in Batch 46.

Keep Batch 44 planning-only. End by updating the feature status and global docs/status.md, running `git diff --check`, and providing a ready-to-copy prompt for Batch 45 image briefs and contact sheet generation.
```
