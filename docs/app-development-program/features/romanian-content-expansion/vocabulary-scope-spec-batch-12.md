# Batch 12 Romanian Vocabulary Scope Spec

Batch: Romanian Content Expansion Batch 12, Romanian Vocabulary Scope Spec.

Spec date: 2026-05-17.

Status: Complete for planning. This file is the source scope for Batch 13, but it does not add production JSON records, image assets, production speech-target metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Research Basis

Research reviewed on 2026-05-17 before selecting this scope:

- Romanian early-education curriculum keeps ages 3 to 6 centered on familiar communication contexts, oral expression, progressive vocabulary extension, phonetic differentiation of words/syllables/sounds, and concrete objects from the nearby world. Source: https://legislatie.just.ro/Public/DetaliiDocument/217614
- Romanian early vocabulary materials for young children and delayed-language support emphasize illustrated, functional categories: family, food, body parts, room objects, toys, fruits, and animals. Source: https://www.logorici.ro/vocabularul-primele-100-de-cuvinte/
- ASHA speech-sound guidance supports tracking word position, phonetic context, sound combinations, consonant clusters, and syllable shape, but diagnosis and treatment planning remain professional/clinical work. Source: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Romanian logopedie materials commonly practice `S`, `Z`, `Ț`, `Ș`, and `J` through syllables, initial/medial/final word positions, and sound differentiation such as `S/Ș`, `Z/S`, `Z/J`, and `Ț/S`. Source: https://cjrae-ab.ro/wp-content/uploads/2020/03/C%C3%AEmpean-Lucia-EMITEREA-CORECTA-A-SUNETELOR.pdf
- Romanian alphabet references preserve `Ă`, `Â`, `Î`, `Ș`, and `Ț` as distinct letters; `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` are letter sequences, not alphabet buckets. Source: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/alfabetul-limbii-romane/
- Academia Română orthography guidance uses `î` at the beginning and end of ordinary words and `â` inside words, so exact `Â` starts-with vocabulary is expected to remain extremely limited for v1. Source: https://academiaromana.ro/grafieLimbaRomana/pag_grafieLR_norme.htm

## Current App Coverage Baseline

Derived from `getLocaleCoverageSummary("ro")` and `getLetterCoverageSummary("ro", target)` on 2026-05-17:

- Approved Romanian words: `83`
- Ready images: `83`
- Placeholder images: `0`
- Enabled letters: `17`
- Starts-with assignments: `83`
- Contains-only assignments across enabled letters: `186`

| Target | Starts-with | Contains-only | Mixed | Batch 12 decision |
| --- | ---: | ---: | ---: | --- |
| `A` | 10 | 35 | 45 | Add a small number only; contains coverage is already dense. |
| `B` | 3 | 5 | 8 | Add common early nouns. |
| `C` | 16 | 16 | 32 | Add selectively; already one of the strongest buckets. |
| `D` | 2 | 4 | 6 | Add common starts-with words. |
| `E` | 0 | 33 | 33 | Add a small exact bucket with clear imageable words. |
| `F` | 2 | 2 | 4 | Add common `F/V` contrast words. |
| `G` | 4 | 2 | 6 | Add `G`, `GH`, and child-known concrete words. |
| `H` | 0 | 5 | 5 | Add only a few strong words. |
| `I` | 1 | 23 | 24 | Add common exact `I` words. |
| `Î` | 0 | 0 | 0 | Add one very strong exact word; keep bucket small. |
| `J` | 2 | 1 | 3 | Keep small; do not pad with weak or obscure `J` words. |
| `L` | 0 | 10 | 10 | Add strong exact bucket; useful `R/L` contrast value. |
| `M` | 10 | 4 | 14 | Add modestly; already serviceable. |
| `N` | 1 | 21 | 22 | Add common exact bucket. |
| `O` | 0 | 17 | 17 | Add common exact bucket. |
| `P` | 11 | 9 | 20 | Add useful common words but avoid overfilling. |
| `R` | 5 | 24 | 29 | Add exact words with simple contexts where possible. |
| `S` | 7 | 9 | 16 | Add varied positions and clusters deliberately. |
| `Ș` | 3 | 8 | 11 | Add common exact words; avoid scary/weak examples. |
| `T` | 0 | 16 | 16 | Add exact bucket; useful `T/D` and cluster coverage. |
| `Ț` | 1 | 6 | 7 | Do not add starts-with fillers; current quality limit remains. |
| `U` | 2 | 14 | 16 | Add common exact words. |
| `V` | 0 | 4 | 4 | Add exact bucket; useful `F/V` contrast. |
| `Z` | 3 | 3 | 6 | Add very selectively; do not pad. |
| `Ă` | 0 | 36 | 36 | Do not add exact starts-with words in this scope. |
| `Â` | 0 | 3 | 3 | Do not add exact starts-with words in this scope. |
| `K/Q/W/X/Y` | 0 | 0 | 0 | Out of v1 Romanian child vocabulary scope. |

## Scope Rules

- This scope includes only newly reviewed `accept-for-scope` words. It does not import any Batch 2 `reject` or `needs revision` row.
- Existing approved words are not repeated in the table.
- Production JSON in Batch 13 should still use the existing ordinary vocabulary fields only. Speech-target fields stay in docs/status unless a later human-approved schema change exists.
- Placeholder-backed approved words may be visible in gameplay under the already approved policy, but they must use a deliberately generic app-owned placeholder until final per-word images exist.
- `/admin/words` must make placeholder counts visible so image replacement can be planned.
- The target list is intentionally uneven. `J`, `Ț`, `Z`, `H`, `Î`, and rare foreign letters remain small because quality matters more than counts.

## Diacritic ID Convention For `Ă`, `Â`, And `Î`

Use the same hybrid pattern already used for `Ș` and `Ț`: exact Romanian content buckets, ASCII public route segments, and ASCII word ID/file prefixes.

| Exact letter | Exact word file | Exact image folder | Public route segment | Word ID and filename prefix | Batch 12 scope |
| --- | --- | --- | --- | --- | --- |
| `Ă` | `content/ro/words-ă.json` | `/images/ro/ă/` | `/ro/play/a-breve` | `ro-a-breve-...` | Convention only; no words accepted now. |
| `Â` | `content/ro/words-â.json` | `/images/ro/â/` | `/ro/play/a-circ` | `ro-a-circ-...` | Convention only; no words accepted now. |
| `Î` | `content/ro/words-î.json` | `/images/ro/î/` | `/ro/play/i-circ` | `ro-i-circ-...` | One accepted word: `înghețată`. |

Rationale:

- Exact bucket IDs preserve Romanian orthography and matching.
- Route and filename tokens stay ASCII and do not collide with existing `a` or `i` buckets.
- Descriptive tokens are longer than `sh`/`tz`, but clearer than short invented codes such as `ab`, `ac`, or `ic`.

## Target Count Impact

If Batch 13 implements this whole scope with approved placeholder-backed records, expected approved-word count becomes `209` (`83 + 126`) before later image replacement.

| Letter | Current starts | Scope additions | Expected starts | Count policy |
| --- | ---: | ---: | ---: | --- |
| `A` | 10 | 4 | 14 | Small addition; strong contains pool already exists. |
| `B` | 3 | 10 | 13 | Strong early-vocabulary bucket. |
| `C` | 16 | 8 | 24 | Continue toward broad pack, but not urgent. |
| `D` | 2 | 5 | 7 | Still modest; more review can follow later. |
| `E` | 0 | 4 | 4 | New small exact bucket. |
| `F` | 2 | 6 | 8 | Useful secondary target. |
| `G` | 4 | 7 | 11 | Useful `G/GH/GE/GI` support. |
| `H` | 0 | 3 | 3 | Keep small. |
| `I` | 1 | 6 | 7 | New modest exact bucket. |
| `Î` | 0 | 1 | 1 | Exact bucket enters with one very strong word. |
| `L` | 0 | 8 | 8 | Useful `R/L` contrast support. |
| `M` | 10 | 5 | 15 | Complements existing starter pack. |
| `N` | 1 | 4 | 5 | New modest exact bucket. |
| `O` | 0 | 6 | 6 | New exact vowel bucket. |
| `P` | 11 | 11 | 22 | Broad high-quality bucket. |
| `R` | 5 | 5 | 10 | Adds exact `R` without relying on clusters only. |
| `S` | 7 | 7 | 14 | Adds more `S/Ș` contexts. |
| `Ș` | 3 | 4 | 7 | Adds exact `Ș` without scary examples. |
| `T` | 0 | 8 | 8 | New exact bucket; useful `T/D`. |
| `Ț` | 1 | 0 | 1 | No filler; use contains words instead. |
| `U` | 2 | 4 | 6 | Modest exact bucket. |
| `V` | 0 | 9 | 9 | New exact bucket; useful `F/V`. |
| `Z` | 3 | 1 | 4 | Keep small; no weak padding. |

## Accepted Vocabulary Scope

Legend:

- `Shape`: `simple` means mostly open CV/CVC syllables; `moderate` means longer word or one harder coda; `complex` means cluster, coda-heavy, or long multisyllable word.
- `Clusters`: only notable consonant clusters or affricate/sequence notes are listed.
- `Age/Image/Safety`: `strong/high/pass` means age fit, imageability, and safety are all acceptable for Batch 13 placeholder-backed implementation.
- These review fields are documentation metadata only. They must not be copied into production JSON in Batch 13.

| Letter | Word | Category | Target and position | Syllables / shape / clusters | Contrast value | Age/Image/Safety | Expected coverage impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `A` | `album` | household/school | initial `A`; final `M` | 2 / moderate / `lb` | vowel warm-up; `L/M` | strong/high/pass | `A` +1; contains `L`, `M` |
| `A` | `acoperiș` | household | initial `A`; final `Ș` | 4 / moderate / none | `S/Ș` final | good/high/pass | `A` +1; contains final `Ș` |
| `A` | `aripă` | animal/body | initial `A`; medial `R` | 3 / simple / none | `R/L` | strong/high/pass | `A` +1; contains `R` |
| `A` | `ascuțitoare` | school object | initial `A`; medial `S`, `C`, `Ț` | 5 / complex / `sc` | `S/Ș`; `Ț/S`; `C/G` | good/high/pass | `A` +1; contains `S`, `Ț`; advanced school word |
| `B` | `balon` | toy/object | initial `B`; medial `L`; final `N` | 2 / simple / none | `B/P`; `L/R` | strong/high/pass | `B` +1; contains `L`, `N` |
| `B` | `banană` | food | initial `B`; repeated `N` | 3 / simple / none | `B/P`; nasal practice | strong/high/pass | `B` +1; contains `N`, `Ă` |
| `B` | `barcă` | vehicle/toy | initial `B`; medial `R`; final `C` | 2 / moderate / `rc` coda | `B/P`; `R/L`; `C/G` | strong/high/pass | `B` +1; contains `R`, `C` |
| `B` | `bec` | household object | initial `B`; final `C` | 1 / simple / none | `B/P`; `C/G` | strong/high/pass | `B` +1; short CVC word |
| `B` | `bebeluș` | family/person | initial/repeated `B`; final `Ș` | 3 / simple / none | `B/P`; `S/Ș` | strong/high/pass | `B` +1; contains final `Ș` |
| `B` | `biscuit` | food | initial `B`; medial `S`; final `T` | 2 / moderate / `sc` spelling context | `S/Ș`; `T/D` | strong/high/pass | `B` +1; contains `S`, `T` |
| `B` | `broască` | animal | initial `B`; medial `R`; final `C` | 2 / complex / `br`, `sc` | `B/P`; `R/L`; `S/Ș`; `C/G` | strong/high/pass | `B` +1; cluster and contrast value |
| `B` | `brânză` | food | initial `B`; medial `R`, `Â`; final `Z` | 2 / complex / `br`, `nz` | `B/P`; `R/L`; `Z/J` | strong/high/pass | `B` +1; contains `Â`, `Z` |
| `B` | `bunic` | family | initial `B`; final `C` | 2 / simple / none | `B/P`; `C/G` | strong/high/pass | `B` +1; family category |
| `B` | `bunică` | family | initial `B`; medial `N`; final `C` | 3 / simple / none | `B/P`; `C/G` | strong/high/pass | `B` +1; family category |
| `C` | `cadă` | household | initial `C`; medial `D` | 2 / simple / none | `C/G`; `T/D` | strong/high/pass | `C` +1; contains `D` |
| `C` | `cap` | body part | initial `C`; final `P` | 1 / simple / none | `C/G`; `P/B` | strong/high/pass | `C` +1; short CVC word |
| `C` | `capră` | animal | initial `C`; medial `R` | 2 / complex / `pr` | `C/G`; `R/L`; `P/B` | strong/high/pass | `C` +1; contains `R`; cluster marked advanced |
| `C` | `căciulă` | clothing | initial `C`; medial `CI`; final `L` | 3 / moderate / `ci` | `CE/CI`; `R/L` | strong/high/pass | `C` +1; contains `CI`, `L` |
| `C` | `căpșună` | food/fruit | initial `C`; medial `PȘ`; final `N` | 3 / complex / `pș` | `S/Ș`; `P/B` | strong/high/pass | `C` +1; contains `Ș`, `N` |
| `C` | `clopoțel` | object/toy | initial `C`; medial `L`, `Ț`; final `L` | 3 / complex / `cl` | `C/G`; `L/R`; `Ț/S` | strong/high/pass | `C` +1; contains `L`, `Ț`; useful holiday/school object |
| `C` | `colac` | food/object | initial `C`; medial `L`; final `C` | 2 / simple / none | `C/G`; `L/R` | strong/high/pass | `C` +1; repeated `C` |
| `C` | `cort` | household/toy | initial `C`; medial `R`; final `T` | 1 / moderate / `rt` coda | `C/G`; `R/L`; `T/D` | good/high/pass | `C` +1; compact coda practice |
| `D` | `delfin` | animal | initial `D`; medial `L`; final `N` | 2 / moderate / `lf` | `T/D`; `F/V`; `L/R` | strong/high/pass | `D` +1; contains `F`, `L` |
| `D` | `dovleac` | food/nature | initial `D`; medial `V`, `L`; final `C` | 2 / complex / `vl` | `T/D`; `F/V`; `C/G` | strong/high/pass | `D` +1; contains `V`, `L`, `C` |
| `D` | `dulap` | household | initial `D`; medial `L`; final `P` | 2 / simple / none | `T/D`; `L/R`; `P/B` | strong/high/pass | `D` +1; common room object |
| `D` | `desen` | school/art | initial `D`; medial `S`; final `N` | 2 / simple / none | `T/D`; `S/Ș` | strong/high/pass | `D` +1; contains `S`, `N` |
| `D` | `dinozaur` | animal/toy | initial `D`; medial `Z`; final `R` | 4 / moderate / none | `T/D`; `Z/J`; `R/L` | strong/high/pass | `D` +1; contains `Z`, `R` |
| `E` | `elefant` | animal | initial `E`; medial `L`, `F`; final `T` | 3 / moderate / `nt` coda | `F/V`; `T/D`; `L/R` | strong/high/pass | `E` +1; new exact bucket |
| `E` | `elicopter` | vehicle/toy | initial `E`; medial `L`, `C`, `P`, `T`; final `R` | 4 / complex / `pt` | `C/G`; `T/D`; `R/L` | strong/high/pass | `E` +1; advanced vehicle word |
| `E` | `eșarfă` | clothing | initial `E`; medial `Ș`, `R`, `F` | 3 / complex / `rf` | `S/Ș`; `R/L`; `F/V` | good/high/pass | `E` +1; contains `Ș`, `F` |
| `E` | `excavator` | vehicle/toy | initial `E`; medial `X`, `C`, `V`; final `R` | 4 / complex / `xc`, `vt` | `C/G`; `F/V`; `R/L` | good/high/pass | `E` +1; useful construction vehicle; advanced |
| `F` | `floare` | nature | initial `F`; medial `L`; final `R` | 2 / complex / `fl` | `F/V`; `L/R` | strong/high/pass | `F` +1; contains `L`, `R` |
| `F` | `fluture` | animal/insect | initial `F`; medial `L`, `T`, `R` | 3 / complex / `fl` | `F/V`; `L/R`; `T/D` | strong/high/pass | `F` +1; rich target coverage |
| `F` | `fular` | clothing | initial `F`; medial `L`; final `R` | 2 / simple / none | `F/V`; `L/R` | strong/high/pass | `F` +1; contains final `R` |
| `F` | `fustă` | clothing | initial `F`; medial `S`; final `T` | 2 / moderate / `st` | `F/V`; `S/Ș`; `T/D` | strong/high/pass | `F` +1; contains `S`, `T` |
| `F` | `fotoliu` | household | initial `F`; medial `T`, `L` | 4 / moderate / none | `F/V`; `T/D`; `L/R` | strong/high/pass | `F` +1; household object |
| `F` | `fasole` | food | initial `F`; medial `S`, `L` | 3 / simple / none | `F/V`; `S/Ș`; `L/R` | strong/high/pass | `F` +1; contains `S`, `L` |
| `G` | `găină` | animal | initial `G`; final `N` | 3 / simple / none | `C/G`; nasal practice | strong/high/pass | `G` +1; animal category |
| `G` | `gâscă` | animal | initial `G`; medial `Â`; final `C` | 2 / complex / `sc` | `C/G`; `S/Ș` | strong/high/pass | `G` +1; contains `Â`, `C` |
| `G` | `găleată` | household/object | initial `G`; medial `L`, `T` | 3 / simple / none | `C/G`; `L/R`; `T/D` | strong/high/pass | `G` +1; common object |
| `G` | `gard` | household/nature | initial `G`; medial `R`; final `D` | 1 / moderate / `rd` coda | `C/G`; `R/L`; `T/D` | good/high/pass | `G` +1; compact coda word |
| `G` | `ghiozdan` | school object | initial `GHI`; medial `Z`, `D`; final `N` | 2 / complex / `zd` | `GE/GI/GHI`; `Z/J`; `T/D` | strong/high/pass | `G` +1; school category |
| `G` | `glob` | object/toy | initial `G`; medial `L`; final `B` | 1 / complex / `gl` | `C/G`; `L/R`; `B/P` | strong/high/pass | `G` +1; cluster marked advanced |
| `G` | `gogoașă` | food | initial/repeated `G`; medial `Ș` | 3 / simple / none | `C/G`; `S/Ș` | strong/high/pass | `G` +1; contains `Ș` |
| `H` | `haină` | clothing | initial `H`; final `N` | 2 / simple / none | `H` warm-up | strong/high/pass | `H` +1; new exact bucket |
| `H` | `hamac` | household/outdoor | initial `H`; medial `M`; final `C` | 2 / simple / none | `H`; `C/G` | good/high/pass | `H` +1; contains `M`, `C` |
| `H` | `hartă` | school/object | initial `H`; medial `R`; final `T` | 2 / moderate / `rt` coda | `H`; `R/L`; `T/D` | good/high/pass | `H` +1; map image must avoid text labels |
| `I` | `iaurt` | food | initial `I`; medial `R`; final `T` | 2 / moderate / `rt` coda | `R/L`; `T/D` | strong/high/pass | `I` +1; contains `R`, `T` |
| `I` | `iarbă` | nature | initial `I`; medial `R`; final `B` | 2 / moderate / `rb` coda | `R/L`; `B/P` | strong/high/pass | `I` +1; contains `R`, `B` |
| `I` | `iglu` | household/place | initial `I`; medial `G`, `L` | 2 / complex / `gl` | `C/G`; `L/R` | good/high/pass | `I` +1; distinctive object/place |
| `I` | `inel` | clothing/object | initial `I`; final `L` | 2 / simple / none | `L/R` | strong/high/pass | `I` +1; contains `L` |
| `I` | `inimă` | body part | initial `I`; medial `N`, `M` | 3 / simple / none | nasal practice; `M/N` | strong/high/pass | `I` +1; body category |
| `I` | `insulă` | nature/place | initial `I`; medial `N`, `S`, `L` | 3 / moderate / `ns` | `S/Ș`; `L/R` | good/high/pass | `I` +1; contains `S`, `L` |
| `Î` | `înghețată` | food | initial `Î`; medial `NGH`, `Ț`, `T` | 4 / complex / `ngh` | `Ț/S`; `T/D`; `G/GH` | strong/high/pass | `Î` +1; establishes exact bucket |
| `L` | `lac` | nature | initial `L`; final `C` | 1 / simple / none | `L/R`; `C/G` | strong/high/pass | `L` +1; short word |
| `L` | `lalea` | nature/flower | initial/repeated `L` | 3 / simple / none | `L/R` | strong/high/pass | `L` +1; repeated `L` |
| `L` | `lămâie` | food/fruit | initial `L`; medial `M`, `Â` | 3 / simple / none | `L/R`; `M/N` | strong/high/pass | `L` +1; contains `Â` |
| `L` | `lapte` | food/drink | initial `L`; medial `P`, `T` | 2 / complex / `pt` | `L/R`; `P/B`; `T/D` | strong/high/pass | `L` +1; common food |
| `L` | `lanternă` | object | initial `L`; medial `N`, `T`, `R` | 3 / moderate / `nt` | `L/R`; `T/D` | good/high/pass | `L` +1; contains `R`, `T` |
| `L` | `leu` | animal | initial `L` | 1 / simple / none | `L/R` | strong/high/pass | `L` +1; animal category |
| `L` | `lingură` | household object | initial `L`; medial `NG`, `R` | 3 / complex / `ng` | `L/R`; `C/G` | strong/high/pass | `L` +1; contains `R`, `G` |
| `L` | `lup` | animal | initial `L`; final `P` | 1 / simple / none | `L/R`; `P/B` | strong/high/pass | `L` +1; animal category |
| `M` | `maimuță` | animal | initial `M`; medial `Ț` | 3 / simple / none | `M/N`; `Ț/S` | strong/high/pass | `M` +1; contains `Ț` |
| `M` | `măgar` | animal | initial `M`; medial `G`; final `R` | 2 / simple / none | `M/N`; `C/G`; `R/L` | strong/high/pass | `M` +1; contains `R`, `G` |
| `M` | `mătură` | household object | initial `M`; medial `T`; final `R` | 3 / simple / none | `M/N`; `T/D`; `R/L` | strong/high/pass | `M` +1; contains `T`, `R` |
| `M` | `miere` | food | initial `M`; medial `R` | 2 / simple / none | `M/N`; `R/L` | strong/high/pass | `M` +1; contains `R` |
| `M` | `motan` | animal | initial `M`; medial `T`; final `N` | 2 / simple / none | `M/N`; `T/D` | strong/high/pass | `M` +1; animal category |
| `N` | `nor` | nature | initial `N`; final `R` | 1 / simple / none | `N/M`; `R/L` | strong/high/pass | `N` +1; short word |
| `N` | `nucă` | food/nature | initial `N`; final `C` | 2 / simple / none | `N/M`; `C/G` | strong/high/pass | `N` +1; food/nature category |
| `N` | `nasture` | clothing object | initial `N`; medial `S`, `T`, `R` | 3 / complex / `st` | `S/Ș`; `T/D`; `R/L` | good/high/pass | `N` +1; contains `S`, `T`, `R` |
| `N` | `nufăr` | nature/flower | initial `N`; medial `F`; final `R` | 2 / simple / none | `F/V`; `R/L` | good/high/pass | `N` +1; contains `F`, `R` |
| `O` | `oaie` | animal | initial `O` | 2 / simple / none | vowel warm-up | strong/high/pass | `O` +1; new exact bucket |
| `O` | `oală` | household object | initial `O`; medial `L` | 2 / simple / none | `L/R` | strong/high/pass | `O` +1; common household object |
| `O` | `ochelari` | clothing/body object | initial `O`; medial `CH`, `L`, `R` | 4 / complex / `ch` | `C/G`; `L/R` | strong/high/pass | `O` +1; contains `R`, `L` |
| `O` | `oglindă` | household object | initial `O`; medial `G`, `L`, `D` | 3 / complex / `gl`, `nd` | `C/G`; `L/R`; `T/D` | strong/high/pass | `O` +1; contains `G`, `L`, `D` |
| `O` | `omidă` | animal/insect | initial `O`; medial `M`, `D` | 3 / simple / none | `M/N`; `T/D` | strong/high/pass | `O` +1; animal category |
| `O` | `ou` | food | initial `O` | 1 / simple / none | vowel warm-up | strong/high/pass | `O` +1; short word |
| `P` | `pară` | food/fruit | initial `P`; final `R` | 2 / simple / none | `P/B`; `R/L` | strong/high/pass | `P` +1; contains `R` |
| `P` | `pălărie` | clothing | initial `P`; medial `L`, `R` | 4 / simple / none | `P/B`; `L/R` | strong/high/pass | `P` +1; clothing category |
| `P` | `pătură` | household object | initial `P`; medial `T`; final `R` | 3 / simple / none | `P/B`; `T/D`; `R/L` | strong/high/pass | `P` +1; contains `T`, `R` |
| `P` | `pepene` | food/fruit | initial/repeated `P`; final `N` | 3 / simple / none | `P/B`; nasal practice | strong/high/pass | `P` +1; food category |
| `P` | `pensulă` | school/art object | initial `P`; medial `N`, `S`, `L` | 3 / moderate / `ns` | `P/B`; `S/Ș`; `L/R` | strong/high/pass | `P` +1; contains `S`, `L` |
| `P` | `penar` | school object | initial `P`; medial `N`; final `R` | 2 / simple / none | `P/B`; `R/L` | strong/high/pass | `P` +1; contains `R` |
| `P` | `pieptene` | hygiene object | initial `P`; medial `P`, `T`, `N` | 3 / complex / `pt` | `P/B`; `T/D` | strong/high/pass | `P` +1; hygiene category |
| `P` | `plajă` | nature/place | initial `P`; medial `L`; final `J` | 2 / complex / `pl` | `P/B`; `L/R`; `Z/J` | strong/high/pass | `P` +1; contains final `J` |
| `P` | `ploaie` | nature/weather | initial `P`; medial `L` | 2 / complex / `pl` | `P/B`; `L/R` | strong/high/pass | `P` +1; weather category |
| `P` | `portocală` | food/fruit | initial `P`; medial `R`, `T`, `C`, `L` | 4 / moderate / `rt` | `P/B`; `R/L`; `T/D`; `C/G` | strong/high/pass | `P` +1; rich contains coverage |
| `P` | `prună` | food/fruit | initial `P`; medial `R`; final `N` | 2 / complex / `pr` | `P/B`; `R/L` | strong/high/pass | `P` +1; contains `R`; cluster marked advanced |
| `R` | `raft` | household object | initial `R`; final `F`, `T` | 1 / complex / `ft` | `R/L`; `F/V`; `T/D` | good/high/pass | `R` +1; compact coda word |
| `R` | `ramură` | nature | initial/repeated `R`; medial `M` | 3 / simple / none | `R/L`; `M/N` | good/high/pass | `R` +1; repeated `R` |
| `R` | `râu` | nature | initial `R` | 1 / simple / none | `R/L`; vowel practice | strong/high/pass | `R` +1; short word |
| `R` | `roșie` | food/fruit | initial `R`; medial `Ș` | 3 / simple / none | `R/L`; `S/Ș` | strong/high/pass | `R` +1; contains `Ș` |
| `R` | `robinet` | household object | initial `R`; medial `B`, `N`; final `T` | 3 / simple / none | `R/L`; `B/P`; `T/D` | strong/high/pass | `R` +1; common household object |
| `S` | `sandviș` | food | initial `S`; final `Ș` | 2 / complex / `ndv` | `S/Ș`; `F/V` | strong/high/pass | `S` +1; final `Ș` contrast |
| `S` | `scară` | household/play | initial `S`; medial `C`, `R` | 2 / complex / `sc` | `S/Ș`; `C/G`; `R/L` | strong/high/pass | `S` +1; cluster marked advanced |
| `S` | `scoică` | nature/object | initial `S`; medial `C` | 2 / complex / `sc` | `S/Ș`; `C/G` | good/high/pass | `S` +1; imageable nature object |
| `S` | `sfoară` | household/play object | initial `S`; medial `F`, `R` | 2 / complex / `sf` | `S/Ș`; `F/V`; `R/L` | good/high/pass | `S` +1; cluster marked advanced |
| `S` | `spumă` | household/play | initial `S`; medial `P`, `M` | 2 / complex / `sp` | `S/Ș`; `P/B` | strong/high/pass | `S` +1; cluster marked advanced |
| `S` | `struguri` | food/fruit | initial `S`; medial `T`, `R`, `G` | 3 / complex / `str`, `gr` | `S/Ș`; `T/D`; `R/L`; `C/G` | strong/high/pass | `S` +1; fruit category, advanced cluster |
| `S` | `stilou` | school object | initial `S`; medial `T`, `L` | 2 / complex / `st` | `S/Ș`; `T/D`; `L/R` | good/high/pass | `S` +1; school category |
| `Ș` | `șal` | clothing | initial `Ș`; final `L` | 1 / simple / none | `S/Ș`; `L/R` | strong/high/pass | `Ș` +1; short word |
| `Ș` | `șampon` | hygiene object | initial `Ș`; medial `M`, `P`; final `N` | 2 / simple / none | `S/Ș`; `P/B` | strong/high/pass | `Ș` +1; hygiene category |
| `Ș` | `șervețel` | household/hygiene | initial `Ș`; medial `R`, `V`, `Ț`; final `L` | 3 / complex / `rv` | `S/Ș`; `F/V`; `Ț/S`; `L/R` | strong/high/pass | `Ș` +1; contains `Ț`, `V`, `L` |
| `Ș` | `șopârlă` | animal | initial `Ș`; medial `P`, `Â`, `R`, `L` | 3 / complex / `rl` | `S/Ș`; `R/L`; `P/B` | good/high/pass | `Ș` +1; must be friendly, non-scary lizard |
| `T` | `tata` | family | initial/repeated `T` | 2 / simple / none | `T/D` | strong/high/pass | `T` +1; family category |
| `T` | `tavă` | household object | initial `T`; medial `V` | 2 / simple / none | `T/D`; `F/V` | strong/high/pass | `T` +1; contains `V` |
| `T` | `telefon` | household/toy | initial `T`; medial `F`, `N` | 3 / simple / none | `T/D`; `F/V` | strong/high/pass | `T` +1; common object |
| `T` | `tigru` | animal | initial `T`; medial `G`, `R` | 2 / complex / `gr` | `T/D`; `C/G`; `R/L` | strong/high/pass | `T` +1; animal category |
| `T` | `tobă` | toy/music | initial `T`; final `B` | 2 / simple / none | `T/D`; `B/P` | strong/high/pass | `T` +1; music/toy category |
| `T` | `tobogan` | playground | initial `T`; medial `B`, `G`, `N` | 3 / simple / none | `T/D`; `B/P`; `C/G` | strong/high/pass | `T` +1; playground object |
| `T` | `tort` | food | initial `T`; medial `R`; final `T` | 1 / moderate / `rt` coda | `T/D`; `R/L` | strong/high/pass | `T` +1; repeated `T` |
| `T` | `tricou` | clothing | initial `T`; medial `R`, `C` | 2 / complex / `tr` | `T/D`; `R/L`; `C/G` | strong/high/pass | `T` +1; clothing category |
| `U` | `umbrelă` | household/clothing | initial `U`; medial `M`, `B`, `R`, `L` | 3 / complex / `mbr` | `B/P`; `R/L` | strong/high/pass | `U` +1; contains `R`, `L` |
| `U` | `unghie` | body part | initial `U`; medial `NGH` | 2 / complex / `ngh` | `C/G`; body vocabulary | strong/high/pass | `U` +1; body category |
| `U` | `unicorn` | toy/character | initial `U`; medial `N`, `C`, `R` | 3 / moderate / `rn` coda | `C/G`; `R/L` | good/high/pass | `U` +1; acceptable fantasy toy image |
| `U` | `ulei` | food/household | initial `U`; medial `L` | 2 / simple / none | `L/R` | strong/high/pass | `U` +1; kitchen object/food |
| `V` | `vacă` | animal | initial `V`; final `C` | 2 / simple / none | `F/V`; `C/G` | strong/high/pass | `V` +1; animal category |
| `V` | `vagon` | vehicle/toy | initial `V`; medial `G`; final `N` | 2 / simple / none | `F/V`; `C/G` | strong/high/pass | `V` +1; vehicle category |
| `V` | `vapor` | vehicle/toy | initial `V`; medial `P`; final `R` | 2 / simple / none | `F/V`; `P/B`; `R/L` | strong/high/pass | `V` +1; vehicle category |
| `V` | `varză` | food | initial `V`; medial `R`; final `Z` | 2 / complex / `rz` | `F/V`; `R/L`; `Z/J` | strong/high/pass | `V` +1; contains `Z` |
| `V` | `vază` | household object | initial `V`; final `Z` | 2 / simple / none | `F/V`; `Z/J` | strong/high/pass | `V` +1; contains `Z` |
| `V` | `veveriță` | animal | initial/repeated `V`; medial `R`; final `Ț` | 4 / moderate / none | `F/V`; `R/L`; `Ț/S` | strong/high/pass | `V` +1; contains `R`, `Ț` |
| `V` | `vioară` | music/toy | initial `V`; medial `R` | 3 / simple / none | `F/V`; `R/L` | strong/high/pass | `V` +1; music category |
| `V` | `vițel` | animal | initial `V`; medial `Ț`; final `L` | 2 / simple / none | `F/V`; `Ț/S`; `L/R` | strong/high/pass | `V` +1; contains `Ț`, `L` |
| `V` | `vulpe` | animal | initial `V`; medial `L`, `P` | 2 / simple / none | `F/V`; `L/R`; `P/B` | strong/high/pass | `V` +1; animal category |
| `Z` | `zid` | household/place | initial `Z`; final `D` | 1 / simple / none | `Z/J`; `T/D` | good/high/pass | `Z` +1; short word, keep `Z` modest |

## Batch 13 Implementation Notes

- Use this file as the Batch 13 source list.
- Add production records only for the accepted rows above.
- Use stable IDs from the existing pattern: `ro-<ascii-letter-token>-<folded-slug>`.
- Use the diacritic tokens above for exact `Î` and any future `Ă`/`Â` work.
- Add a single app-owned generic placeholder asset in Batch 13, for example `/images/ro/placeholders/generic-word-placeholder.webp`, then point unfinished words to it with `imageStatus: "placeholder"`.
- Keep `source: ["manual"]`, `license: "app-owned"`, and `status: "approved"` only if the metadata validates and the intentional placeholder path is validated.
- Do not add final per-word images in Batch 13.
- Do not copy target-sound, position, syllable, cluster, or contrast fields into production JSON.

## Remaining Gaps After This Scope

- `J`, `Ț`, and `Z` remain intentionally small because most additional starts-with options are weak, obscure, ambiguous, or already marked `needs revision`/`reject` in the earlier worksheet.
- `Ă` and `Â` exact starts-with buckets remain convention-only; current Romanian usage does not provide strong child-facing starts-with words for v1.
- Some clusters are included because they are attached to very familiar words, but they should be treated as advanced practice contexts in review docs.
- Final image work remains deferred to Batch 14 and later.

