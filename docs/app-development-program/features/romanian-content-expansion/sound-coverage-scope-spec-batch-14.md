# Batch 14 Sound Coverage Scope Spec

Batch: Romanian Content Expansion Batch 14, Sound Coverage Scope Spec And Practice Target UI Plan.

Spec date: 2026-05-17.

Status: Accepted planning source for Batch 15. This file adds no production JSON records, UI code, image assets, production speech-target metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims.

## Research Basis

Research checked on 2026-05-17 before accepting this scope:

- Romanian early-education guidance supports vocabulary growth, image/object sorting, repeating syllables and words, identifying initial/final sounds, and associating pictures with words. Source: https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2024/div/Repere_fundamentale_educatie_timpurie_2024.pdf
- Romanian early-education curriculum supports phonetic discrimination, sound-letter association, naming initial/final sounds, syllable segmentation, and articulation of vowels and most consonants. Source: https://www.isj.sv.edu.ro/images/Docs/Discipline/invatamnat_preprimar/2018/Curriculum_pentru_educatie_timpurie_2018.pdf
- Romanian child phonology research supports treating fricatives, affricates, and liquids as meaningful speech-sound review targets in child Romanian. Source: https://bwpl.unibuc.ro/wp-content/uploads/2017/03/BWPL_2015_1_BUJA.pdf
- CMBRAE's `J` worksheet supports `J` as an explicit logopedie practice target and includes initial, medial, and final-position work; examples include `joc`, `garaj`, `pijama`, and `plajă`. Source: https://www.cmbrae.ro/2017/wp-content/uploads/2020/05/Fise-logopedice-sunet-J.pdf
- CJRAE Argeș's `Z-J` material supports `Z/J` differentiation as a practice target. Source: https://cjrae-arges.ro/wp-content/uploads/2020/04/Diferentierea-sunetelor-Z-J-aprilie-2020-pdf-2.pdf
- CJRAE Sălaj's `Ț` material supports initial, medial, final, and contrast practice for `Ț`, including `țap`, `țeavă`, `ață`, `față`, `băț`, and `căluț`-style final contexts. Source: https://cjraesalaj.ro/wp-content/uploads/2020/03/Material-adresat-parintilor-Material-verbal-pentru-consolidarea-sunetului-%C8%9A-Rat-Melinda.pdf
- Romanian phonetics/phonology references support treating `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi` as spelling sequences that render consonantal/palatal sound groups, not Romanian alphabet letters. Source: https://webbut.unitbv.ro/index.php/Series_IV/article/download/8624/6100/17165
- Romanian phoneme-letter references support `ce/ci`, `ge/gi`, `che/chi`, and `ghe/ghi` as special correspondences and not separate alphabet buckets. Source: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/corespondenta-dintre-fonem-si-litera/
- DEXOnline was used as the word-spelling and lexical spot-check source where a row below lists `DEX`. Source pattern: `https://dexonline.ro/definitie/<word>`.

Source tags in the worksheet:

- `EARLY`: early-education picture/object/sound-awareness guidance above.
- `PHONO`: Romanian phonology source above.
- `LOG-J`: CMBRAE `J` worksheet.
- `LOG-ZJ`: CJRAE Argeș `Z-J` differentiation material.
- `LOG-Ț`: CJRAE Sălaj `Ț` material.
- `SEQ`: Romanian phonetics/phonology sequence references above.
- `DEX`: DEXOnline lexical/spelling spot-check pattern above.
- `IR`: internal Word Wheel review for age fit, concreteness, imageability, child safety, and no brand/copyright dependency.

Worksheet examples from logopedie sources are not automatic approvals. Each accepted row below still passed Word Wheel review for commonness, concreteness, imageability, child safety, and age fit.

## Helper Baseline

Derived with `getDerivedWordPoolsForTarget("ro", target)` after Batch 13.

| Target | Starts-with | Contains-only | Mixed | Ready | Placeholder | Gap to 30 mixed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `ș` | 7 | 15 | 22 | 11 | 11 | 8 |
| `j` | 2 | 2 | 4 | 3 | 1 | 26 |
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

If Batch 15 implements all accepted rows below with placeholder-backed approved records and no final images, expected production impact is:

- Approved Romanian words: `209 -> 319`.
- Ready images: unchanged at `83`.
- Placeholder images: `126 -> 236`.
- `ș`: `22 -> 36` mixed.
- `j`: `4 -> 14` mixed.
- `ț`: `14 -> 36` mixed.
- `z`: `12 -> 31` mixed.
- `ce`: `2 -> 14` mixed.
- `ci`: `5 -> 14` mixed.
- `ge`: `4 -> 10` mixed.
- `gi`: `1 -> 4` mixed.
- `che`: `3 -> 10` mixed.
- `chi`: `1 -> 9` mixed.
- `ghe`: `2 -> 8` mixed.
- `ghi`: `2 -> 8` mixed.

Quality still overrides count. `J`, `GI`, `GHE`, `GHI`, and several sequence targets remain below `30` because reaching `30` now would require obscure words, abstract actions/adjectives, unsafe objects, or visually weak examples.

## Accepted Candidate Rows

All accepted rows are intended as Batch 15 source rows only. They are not production records until Batch 15 maps them into canonical JSON and validation passes.

| Word | Canonical start | Target(s) improved | Position note | Source basis | Age / image / safety | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| `școală` | `Ș` | `ș` | starts-with | `EARLY`, `DEX`, `IR` | strong / high / pass | accept |
| `șarpe` | `Ș` | `ș` | starts-with | `DEX`, `IR` | good / high / pass with friendly animal image | accept |
| `șorț` | `Ș` | `ș`, `ț` | starts-with `ș`; final `ț` | `DEX`, `IR` | strong / high / pass | accept |
| `șiret` | `Ș` | `ș` | starts-with | `DEX`, `IR` | strong / high / pass | accept |
| `șurub` | `Ș` | `ș` | starts-with | `DEX`, `IR` | good / high / pass; simple hardware object | accept |
| `cocoș` | `C` | `ș` | final | `DEX`, `IR` | strong / high / pass | accept |
| `duș` | `D` | `ș` | final | `DEX`, `IR` | strong / high / pass | accept |
| `buștean` | `B` | `ș` | medial | `DEX`, `IR` | good / high / pass | accept |
| `mușețel` | `M` | `ș`, `ț` | medial `ș`; medial `ț` | `DEX`, `IR` | good / high / pass; flower/tea image | accept |
| `pluș` | `P` | `ș` | final | `DEX`, `IR` | strong / high / pass as plush toy | accept |
| `joc` | `J` | `j` | starts-with | `LOG-J`, `DEX`, `IR` | strong / medium-high / pass; show simple game/toy scene | accept |
| `jeleu` | `J` | `j` | starts-with | `DEX`, `IR` | good / high / pass | accept |
| `jaluzea` | `J` | `j`, `z` | starts-with `j`; medial `z` | `DEX`, `IR` | good / high / pass | accept |
| `coajă` | `C` | `j` | medial/final syllable | `DEX`, `IR` | good / medium-high / pass; image as banana peel or tree bark | accept |
| `prăjitură` | `P` | `j` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `păianjen` | `P` | `j` | medial | `DEX`, `IR` | good / high / pass with friendly non-scary spider | accept |
| `garaj` | `G` | `j` | final | `LOG-J`, `DEX`, `IR` | good / high / pass | accept |
| `bagaj` | `B` | `j` | final | `DEX`, `IR` | good / high / pass | accept |
| `colaj` | `C` | `j` | final | `DEX`, `IR` | good / high / pass; school/art image | accept |
| `stejar` | `S` | `j` | medial | `DEX`, `IR` | good / high / pass | accept |
| `țap` | `Ț` | `ț` | starts-with | `LOG-Ț`, `DEX`, `IR` | good / high / pass | accept |
| `țânțar` | `Ț` | `ț` | starts-with/repeated | `DEX`, `IR` | good / high / pass with non-scary insect image | accept |
| `țeavă` | `Ț` | `ț` | starts-with | `LOG-Ț`, `DEX`, `IR` | good / high / pass | accept |
| `țurțure` | `Ț` | `ț` | starts-with/repeated | `DEX`, `IR` | good / high / pass | accept |
| `ață` | `A` | `ț` | medial/final syllable | `LOG-Ț`, `DEX`, `IR` | strong / high / pass | accept |
| `băț` | `B` | `ț` | final | `LOG-Ț`, `DEX`, `IR` | strong / high / pass | accept |
| `căruță` | `C` | `ț` | medial/final syllable | `DEX`, `IR` | good / high / pass | accept |
| `lanț` | `L` | `ț` | final | `DEX`, `IR` | good / high / pass; neutral object image | accept |
| `mărțișor` | `M` | `ț`, `ș` | medial `ț`; medial `ș` | `DEX`, `IR` | strong / high / pass; culturally familiar object | accept |
| `pătuț` | `P` | `ț` | final | `DEX`, `IR` | strong / high / pass | accept |
| `furculiță` | `F` | `ț` | medial/final syllable | `DEX`, `IR` | strong / high / pass | accept |
| `linguriță` | `L` | `ț` | medial/final syllable | `DEX`, `IR` | strong / high / pass | accept |
| `rotiță` | `R` | `ț` | medial/final syllable | `DEX`, `IR` | strong / high / pass | accept |
| `săniuță` | `S` | `ț` | medial/final syllable | `DEX`, `IR` | strong / high / pass | accept |
| `căsuță` | `C` | `ț` | medial/final syllable | `DEX`, `IR` | strong / high / pass | accept |
| `fetiță` | `F` | `ț` | medial/final syllable | `DEX`, `IR` | strong / medium-high / pass; generic child image | accept |
| `băiețel` | `B` | `ț` | medial | `DEX`, `IR` | strong / medium-high / pass; generic child image | accept |
| `ursuleț` | `U` | `ț` | final | `DEX`, `IR` | strong / high / pass as toy bear/little bear | accept |
| `zmeu` | `Z` | `z` | starts-with | `DEX`, `IR` | strong / high / pass as kite, not monster | accept |
| `zână` | `Z` | `z` | starts-with | `DEX`, `IR` | good / high / pass as generic fairy, no brand cues | accept |
| `zmeură` | `Z` | `z` | starts-with | `DEX`, `IR` | strong / high / pass | accept |
| `zambilă` | `Z` | `z` | starts-with | `DEX`, `IR` | good / high / pass | accept |
| `poză` | `P` | `z` | medial | `DEX`, `IR` | good / medium-high / pass; no text inside image | accept |
| `puzzle` | `P` | `z` | medial/repeated spelling | `DEX`, `IR` | strong / high / pass; generic puzzle pieces only | accept |
| `mazăre` | `M` | `z` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `cizmă` | `C` | `z`, `ci` | medial `z`; starts-with `ci` | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `barză` | `B` | `z` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `buburuză` | `B` | `z` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `iaz` | `I` | `z` | final | `DEX`, `IR` | good / high / pass | accept |
| `cozonac` | `C` | `z` | medial | `LOG-ZJ`, `DEX`, `IR` | strong / high / pass | accept |
| `televizor` | `T` | `z` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `buzunar` | `B` | `z` | medial | `DEX`, `IR` | strong / high / pass | accept |
| `frizerie` | `F` | `z` | medial | `DEX`, `IR` | good / high / pass | accept |
| `frizură` | `F` | `z` | medial | `DEX`, `IR` | good / medium-high / pass | accept |
| `miez` | `M` | `z` | final | `LOG-ZJ`, `DEX`, `IR` | good / medium-high / pass; show apple/core context | accept |
| `orez` | `O` | `z` | final | `LOG-ZJ`, `DEX`, `IR` | strong / high / pass | accept |
| `ceas` | `C` | `ce` | starts-with | `SEQ`, `PHONO`, `DEX`, `IR` | strong / high / pass | accept |
| `cerb` | `C` | `ce` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `cerc` | `C` | `ce` | starts-with/repeated spelling | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `cercel` | `C` | `ce` | starts-with/repeated spelling | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `ceai` | `C` | `ce` | starts-with | `SEQ`, `PHONO`, `DEX`, `IR` | good / high / pass | accept |
| `ceașcă` | `C` | `ce`, `ș` | starts-with `ce`; medial `ș` | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `cereale` | `C` | `ce` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `cearșaf` | `C` | `ce`, `ș` | starts-with `ce`; medial `ș` | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ceară` | `C` | `ce` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass; show wax/crayon, not flame | accept |
| `cetate` | `C` | `ce` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `purcel` | `P` | `ce` | contains-only | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ciocolată` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ciocan` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass; tool shown safely | accept |
| `ciupercă` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `cioc` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | good / medium-high / pass; bird beak image | accept |
| `ciorbă` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ciucure` | `C` | `ci` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `ghiveci` | `G` | `ghi`, `ci` | starts-with `ghi`; final `ci` | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `pisicuță` | `P` | `ț` | medial/final `ț` | `DEX`, `IR` | strong / high / pass | accept |
| `rădăcină` | `R` | `ci` | medial | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `geacă` | `G` | `ge` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `geantă` | `G` | `ge` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `genunchi` | `G` | `ge`, `chi` | starts-with `ge`; final `chi` | `SEQ`, `DEX`, `IR` | strong / medium-high / pass; body part image | accept |
| `mărgele` | `M` | `ge` | medial | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `fulger` | `F` | `ge` | medial | `SEQ`, `DEX`, `IR` | good / high / pass; non-frightening weather image | accept |
| `alge` | `A` | `ge` | final spelling | `SEQ`, `DEX`, `IR` | good / medium-high / pass | accept |
| `frigider` | `F` | `gi` | medial | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `pagină` | `P` | `gi` | medial | `SEQ`, `DEX`, `IR` | good / medium-high / pass; no text required | accept |
| `regină` | `R` | `gi` | medial | `SEQ`, `DEX`, `IR` | good / high / pass as generic queen/fairy-tale figure | accept |
| `cheie` | `C` | `che` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `chec` | `C` | `che` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ureche` | `U` | `che` | final spelling | `SEQ`, `DEX`, `IR` | strong / medium-high / pass | accept |
| `ridiche` | `R` | `che` | final spelling | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `pachet` | `P` | `che` | medial | `SEQ`, `DEX`, `IR` | good / high / pass; no brand/text | accept |
| `buchet` | `B` | `che` | medial | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `caschetă` | `C` | `che` | medial | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `chitară` | `C` | `chi` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `chiflă` | `C` | `chi` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `chiftea` | `C` | `chi` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `chioșc` | `C` | `chi`, `ș` | starts-with `chi`; medial `ș` | `SEQ`, `DEX`, `IR` | good / high / pass; no brand/text | accept |
| `unchi` | `U` | `chi` | final spelling | `SEQ`, `DEX`, `IR` | strong / medium-high / pass; generic family image | accept |
| `ochi` | `O` | `chi` | final spelling | `SEQ`, `DEX`, `IR` | strong / medium-high / pass | accept |
| `cochilie` | `C` | `chi` | medial | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghete` | `G` | `ghe` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghetuță` | `G` | `ghe`, `ț` | starts-with `ghe`; medial/final `ț` | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghem` | `G` | `ghe` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghepard` | `G` | `ghe` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass with friendly animal image | accept |
| `lighean` | `L` | `ghe` | medial | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `spaghete` | `S` | `ghe` | medial | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghindă` | `G` | `ghi` | starts-with | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghiocel` | `G` | `ghi`, `ce` | starts-with `ghi`; final `ce` spelling | `SEQ`, `DEX`, `IR` | strong / high / pass | accept |
| `ghidon` | `G` | `ghi` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass; bicycle handlebar | accept |
| `ghirlandă` | `G` | `ghi` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass | accept |
| `ghiuvetă` | `G` | `ghi` | starts-with | `SEQ`, `DEX`, `IR` | good / high / pass | accept |

## Quality Ceilings And Held Rows

The following candidates are not accepted for Batch 15. They can be revisited only with stronger review, but they should not be used to pad counts.

| Candidate | Target | Decision | Reason |
| --- | --- | --- | --- |
| `jar` | `j` | reject | Hot/fire imagery is safety-sensitive and the word is weak for ages 4 to 6. |
| `ruj` | `j` | reject | Adult cosmetic object; not a strong child-facing vocabulary item. |
| `ojă` | `j` | reject | Adult/cosmetic/chemical object; weak fit for child-facing content. |
| `jder` | `j` | reject | Concrete animal but too obscure for this app's first Romanian pack. |
| `joi` | `j` | reject | Abstract day-name target; not imageable as a single object. |
| `vrajă` | `j` | reject | Abstract/fantasy action; weaker and less concrete than accepted fantasy nouns. |
| `zece` | `z`, `ce` | hold | Numeral is child-known, but a no-text image is visually weak for Word Wheel. |
| `zero` | `z` | hold | Numeral is child-known, but a no-text image would be ambiguous. |
| `ziar` | `z` | reject | Text-heavy object conflicts with the no-text image direction. |
| `priză` | `z` | reject | Electrical outlet is safety-sensitive for the target age. |
| `lege` | `ge` | reject | Abstract; not suitable for a picture-first preschool game. |
| `trage` | `ge` | reject | Action verb; image would need context and is weaker than object nouns. |
| `gingie` | `gi` | reject | Body/medical detail is visually awkward and not a strong practice image. |
| `gimnast` | `gi` | hold | Person/action target may be useful later, but weaker than object nouns now. |
| `chibrit` | `chi` | reject | Matches/fire are safety-sensitive. |
| `chiloți` | `chi`, `ț` | reject | Privacy-sensitive clothing item for child-facing public content. |
| `ghimpe` | `ghi` | reject | Thorn image is safety-sensitive and less child-friendly. |
| `ghiulea` | `ghi` | reject | Weapon/cannonball association is out of child-facing scope. |
| `gheară` | `ghe` | hold | Concrete but can read as threatening; not needed for current quality target. |
| `ghimbir` | `ghi` | hold | Concrete food/root but less familiar to many 4-to-6-year-old children. |

## Target Decisions

Batch 15 may implement the `110` accepted unique rows above as placeholder-backed approved records under the existing Batch 11/13 policy. The rows are production-quality vocabulary candidates, but they still need normal manifest mapping, duplicate checks, content validation, and status updates before they become production content.

Target decisions:

- `Ș`, `Ț`, and `Z` can reach or pass `30` mixed words with accepted child-friendly vocabulary. Batch 15 should implement the full accepted rows for these targets unless validation reveals a defect.
- `J` should not be forced to `30`. This scope raises `J` from `4` to `14` mixed words with reasonable concrete vocabulary; additional `J` padding would become obscure, adult, abstract, or unsafe.
- The eight sequence targets should become start-page practice options even if their pools remain below `30`. They are useful because they represent Romanian letter-sequence sound practice, but high-quality concrete examples are naturally uneven.
- `CE`, `CI`, `GE`, `CHE`, and `CHI` receive the strongest sequence expansion in this scope.
- `GI`, `GHE`, and `GHI` remain quality-limited and should be expanded only through clearly familiar, concrete words in later reviews.

## Practice Target UI Plan

The `/ro` start page should keep the alphabet grid and add a separate bottom section for:

```txt
CE, CI, GE, GI, CHE, CHI, GHE, GHI
```

These are sequence practice targets, not Romanian alphabet letters. They must stay separate from `content/ro/letters.json`.

Recommended manifest:

```txt
content/ro/practice-targets.json
```

Recommended fields:

```txt
id: "ce" | "ci" | "ge" | "gi" | "che" | "chi" | "ghe" | "ghi"
label: "CE" | "CI" | "GE" | "GI" | "CHE" | "CHI" | "GHE" | "GHI"
locale: "ro"
kind: "sequence"
routeSegment: same as id
sortOrder: 1..8
enabled: true
```

Implementation notes for Batch 15:

- Add helper APIs for enabled practice targets.
- Include both enabled letters and enabled practice targets in `/ro/play/[letter]` static params.
- Resolve route segments against letter aliases first (`sh`, `tz`, `i-circ`, etc.), then against practice targets.
- Use `getDerivedWordPoolsForTarget("ro", target.id)` for sequence pools.
- Distinguish letter buckets from sequence targets in `GameplayContent` only if needed by UI labels and mode defaults.
- Default sequence targets to a mixed/contains-driven mode because exact starts-with pools are naturally small.
- Show the sequence label in the wheel hub and setup sheet.
- Add an `/admin/words` section or adjacent admin coverage section that lists practice-target starts-with, contains-only, mixed, ready, and placeholder counts.
- Add regression checks for practice target route generation and sequence pool counts.

## Batch 15 Acceptance Gate

Batch 15 should implement only accepted rows from this file. If a row creates a duplicate ID, exact word, folded normalized value, canonical placement defect, safety concern, or image/alt-text ambiguity during implementation, hold that row and document the reason instead of weakening validation.

Production word JSON must keep the established ordinary vocabulary fields only. Do not add sound-target, syllable, cluster, contrast, therapy, or clinical fields to production JSON in Batch 15.
