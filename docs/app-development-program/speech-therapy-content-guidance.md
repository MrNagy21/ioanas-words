# Speech Therapy Content Guidance

This document turns the Romanian content expansion into a therapy-informed content program. It does not make Word Wheel a diagnostic tool, medical device, or substitute for a licensed logoped. It defines how agents should choose, review, and stage words so the app can become useful for Romanian pronunciation practice under parent, teacher, or therapist guidance.

Research reviewed: 2026-05-16.

## Research Snapshot

Romanian and speech-language sources agree on several practical points:

- At ages 4 to 5, many children articulate most sounds, but remaining difficulties commonly involve consonants such as `ș`, `j`, `ț`, `t`, `r`, `s`, `l`, `v`, and `z`.
- Preschool dislalie material repeatedly identifies sigmatisms first, then rotacisms, with later or harder sounds including `r`, `s`, `z`, `ș`, and `j`.
- Romanian logopedie worksheets commonly practice sounds in initial, medial, and final word position, then move to differentiation and short phrases.
- Practice materials for `S`, `Z`, `Ș`, `J`, `Ț`, `R`, `F/V`, and `R/L` are common in Romanian logopedie repositories, which supports treating these as higher-value targets than simple alphabet quotas.
- General speech-sound guidance from ASHA also emphasizes checking sound production across word positions, phonetic contexts, consonant clusters, and culturally relevant picture prompts.
- Romanian early-education curriculum emphasizes play, verbal imitation, onomatopoeia, image reading, concrete objects, and communication activities, which matches a picture-first game better than abstract drill lists.
- Romanian vocabulary guidance for young children and delayed-language materials favors functional, illustrated categories such as family, food, body parts, room objects, toys, fruits, and animals.

Useful sources:

- Arcadia, "Dezvoltarea limbajului la copii": https://www.arcadiamedical.ro/medinfo/dezvoltarea-limbajului-la-copii
- Regina Maria, "Cand mergem cu copilul la logoped?", updated 2025-05-26: https://www.reginamaria.ro/articole-medicale/sanatatea-copiilor/cand-mergem-cu-copilul-la-logoped
- iTeach, "Importanța corectării tulburărilor de limbaj la vârsta preșcolară": https://iteach.ro/experientedidactice/importanta-corectarii-tulburarilor-de-limbaj-la-varsta-prescolara
- CMBRAE, "Materiale Logopedie": https://www.cmbrae.ro/2017/media/materiale-logopedie/
- CMBRAE, "Mat logopedice pt parinti si copii": https://www.cmbrae.ro/2017/wp-content/uploads/Mat-logopedice-pt-parinti-si-copii.pdf
- CJRAE Caraș-Severin, "Sunetul S": https://cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_S.pdf
- CJRAE Caraș-Severin, "Sunetul Ș": https://cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_%C8%98.pdf
- ASHA Practice Portal, "Speech Sound Disorders: Articulation and Phonology": https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Romanian early education curriculum, official legislative text: https://legislatie.just.ro/Public/DetaliiDocument/217614
- Logorici, "Vocabularul - Primele 100 de cuvinte": https://www.logorici.ro/vocabularul-primele-100-de-cuvinte/

## Therapy-Informed Priority Model

The app should keep alphabet-letter buckets for navigation and storage, but content review should score each word by target sound value.

Highest-value practice targets:

- `R`
- `S`
- `Z`
- `Ș`
- `J`
- `Ț`
- `CE/CI`
- `GE/GI`

High-value secondary targets:

- `F`
- `V`
- `L`
- `C`
- `G`
- `T`
- `D`

Warm-up and control targets:

- vowels `A`, `E`, `I`, `O`, `U`;
- easier, common consonant buckets already useful for vocabulary play, such as `M`, `P`, `B`, `N`.

Rare or quality-limited starting letters:

- `Â`, `K`, `Q`, `W`, `X`, `Y`.

Do not interpret "warm-up" as unimportant. It means the word is usually less valuable as a hard Romanian articulation target but can still support attention, turn-taking, vocabulary, listening, and confidence.

## Word Selection Rules

A strong therapy-informed word is:

- common for Romanian children aged roughly 4 to 6;
- concrete, functional, and easy to show in one clear image;
- emotionally neutral or positive;
- pronounceable as a single-word prompt;
- useful for one or more target sounds;
- reviewable in initial, medial, or final sound position;
- not only a letter-quota filler.

Prefer:

- one to three syllables for early practice;
- four syllables only when the word is very familiar and useful;
- open syllables and simple consonant-vowel shapes for easier words;
- harder consonant clusters only as a deliberate advanced marker;
- nouns before verbs and adjectives when image clarity matters;
- everyday Romanian objects over dictionary-like examples.

Avoid:

- abstract contrast words that are common in therapy worksheets but poor for a picture game;
- words that require reading a sentence to understand the picture;
- scary, violent, shame-based, medical, political, financial, adult, slang, brand, or copyrighted content;
- rare words added only because a target sound is underfilled.

## Sound Position Coverage

For every high-value target, content review should seek coverage across:

- `initial`: target sound at the beginning of the word;
- `medial`: target sound inside the word;
- `final`: target sound at the end of the word;
- `cluster`: target sound in a consonant cluster, only when useful and age-appropriate;
- `repeated`: target appears more than once, only when the word remains familiar.

Examples for review thinking, not automatic approvals:

- `Ș`: `șapcă`, `șarpe`, `mașină`, `ușă`, `pește`, `coș`, `moș`.
- `S`: `sanie`, `soare`, `masă`, `casă`, `nas`.
- `R`: `rață`, `roată`, `morcov`, `carte`, `măr`, `pahar`.
- `Ț`: `țap`, `țestoasă`, `cuțit`, `rață`, `gheață`, `moț`.
- `Z`: `zebră`, `zăpadă`, `zar`, `bază` if imageable and age-fit.
- `J`: `jucărie`, `joc`, `cojoc` only if the image is culturally clear, `păianjen`.

Some good therapy examples may still be rejected by Word Wheel because they are abstract, frightening, visually unclear, too old for ages 4 to 6, or culturally weak.

## Contrast And Differentiation

Romanian logopedie materials often differentiate nearby sounds, for example:

- `S` versus `Ș`;
- `Z` versus `J`;
- `Ț` versus `S`, `Ș`, or `CI`;
- `R` versus `L`;
- `F` versus `V`;
- `C` versus `G`;
- `CE/CI` versus `Ș`;
- `GE/GI` versus `J`.

For Word Wheel, contrast work must remain child-safe and imageable. Do not force minimal pairs if one side is abstract, shaming, too adult, or hard to illustrate. A future therapist mode can introduce curated contrast sets by word ID after enough high-quality canonical content exists.

## Candidate Worksheet Fields

Every candidate review artifact should include these fields before production JSON is changed:

```txt
candidate word
display spelling with Romanian diacritics
canonical starting letter
category
part of speech
age fit
familiarity score
imageability score
safety notes
primary speech target
secondary speech targets
target sound position: initial / medial / final / cluster / repeated
syllable count
simple or complex syllable shape
consonant clusters present
likely contrast target, if any
starts-with target improved
contains targets improved
review decision
rejection reason, if rejected
therapist-review note
image brief status
```

## App And Workflow Implications

Short term:

- Keep production content JSON unchanged until a coverage audit and candidate worksheet exist.
- Add therapy metadata first in review documents, not necessarily in production manifests.
- Use `/admin/words` for alphabet and image coverage, but supplement it with a speech-target matrix because letter counts alone are not enough.
- For each expansion batch, report whether the new words improve initial, medial, final, or contrast coverage for priority sounds.

Medium term:

- Add optional production metadata only after the worksheet proves the needed fields.
- Consider a generated speech-target coverage report derived from canonical words.
- Add practice targets for `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` separately from alphabet letters.
- Add therapist-reviewed word sets by ID only when derivation is insufficient.

Long term:

- A true therapy app should support therapist-created or therapist-reviewed sessions, target sounds, sound positions, contrast sets, and progress notes.
- Any future pronunciation scoring, diagnosis, treatment claim, or therapeutic recommendation needs a separate safety, privacy, and clinical-review spec.
