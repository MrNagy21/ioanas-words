# Batch 42 Candidate Review Worksheet: Requested Letter And Sound Expansion

Batch: Romanian Content Expansion Batch 42.

Status: worksheet complete; no production content added.

Last updated: 2026-06-02.

## Batch Sequence Confirmation

`requested-letter-and-sound-expansion-batch-41.md`, `plan.md`, feature `status.md`, and global `docs/status.md` all still point to the same sequence:

1. Batch 41: scope and decisions.
2. Batch 42: researched candidate worksheet.
3. Batch 43: human vocabulary review and first production-slice selection.
4. Batch 44: first production-slice planning.
5. Batch 45: image briefs and contact sheet, then stop for human image review.
6. Batch 46: promote only human-accepted slice words and images.
7. Batch 47: slice coverage QA and next prompt.
8. Repeat Batches 44 through 47 for additional slices.
9. Final QA batch: requested expansion closeout.

This worksheet keeps accepted candidates at worksheet stage only. It does not add production JSON records, images, routes, schema fields, placeholders, or speech-target production metadata.

## Recomputed Current Coverage

Source: `content/ro/*.json`, recomputed on 2026-06-02 from approved records only.

- approved words: `367`;
- ready images: `367`;
- approved placeholders: `0`;
- rejected audit-trail rows: `ghicitoare`, `miez`, `stinghie`;
- enabled letters: `A, B, C, D, E, F, G, H, I, Î, J, L, M, N, O, P, R, S, Ș, T, Ț, U, V, Z`;
- enabled sequence targets: `CE, CI, GE, GI, CHE, CHI, GHE, GHI`.

| Target | Starts With | Contains Only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 152 | 152 |
| `Â` | 0 | 11 | 11 |
| `K` | 0 | 0 | 0 |
| `Q` | 0 | 0 | 0 |
| `W` | 0 | 0 | 0 |
| `X` | 0 | 1 | 1 |
| `Y` | 0 | 0 | 0 |
| `CE` | 13 | 3 | 16 |
| `CI` | 9 | 9 | 18 |
| `GE` | 9 | 6 | 15 |
| `GI` | 6 | 9 | 15 |
| `GHE` | 11 | 4 | 15 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 12 | 75 | 87 |
| `R` | 14 | 136 | 150 |
| `S` | 17 | 28 | 45 |
| `Ș` | 12 | 27 | 39 |
| `T` | 10 | 80 | 90 |
| `Ț` | 5 | 36 | 41 |
| `V` | 9 | 14 | 23 |
| `B` | 22 | 20 | 42 |
| `D` | 9 | 18 | 27 |
| `J` | 5 | 9 | 14 |

## Sources Checked

Source labels used below:

- `S1` dexonline, `1.1. Literele`: https://dexonline.ro/articol/1.1._Literele
- `S2` DOOM 3 introductory study: https://doom.lingv.ro/studiu_introductiv_complet
- `S3` dexonline / Mioara Avram, `XIII. k sau c, ch, ck, q`: https://dexonline.ro/articol/XIII._k_sau_c%2C_ch%2C_ck%2C_q
- `S4` dexonline / Mioara Avram, `XVII. q(u) sau c, ch, cu, cv, k`: https://dexonline.ro/article/XVII._q%28u%29_sau_c%2C_ch%2C_cu%2C_cv%2C_k
- `S5` dexonline, `w`: https://dexonline.ro/definitie/w
- `S6` dexonline, `x`: https://dexonline.ro/definitie/x/1245070
- `S7` Logorici, `Corectarea dislaliei - Spinner-ul vorbăreț`: https://www.logorici.ro/spinner-ul-vorbaret/
- `S8` CJRAE Caraș-Severin, `Sunetul S`: https://www.cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_S.pdf
- `S9` CMBRAE, `Materiale logopedice pentru părinți și copii`: https://www.cmbrae.ro/2017/wp-content/uploads/Mat-logopedice-pt-parinti-si-copii.pdf
- `S10` CJRAE Caraș-Severin, materiale logopedie index: https://www.cjrae-cs.ro/mat_logopedie.html

Research notes:

- `S1` confirms the current Romanian alphabet has 31 letters and that `K`, `Q`, `W`, and `Y` are used in borrowings, foreign proper names, and formations based on them. This supports strict rare-letter gating.
- `S1` also confirms the written values of `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI`, so these remain separate practice targets.
- `S3`, `S4`, and `S5` reinforce that `K`, `Q`, and `W` are limited or foreign/neological markers. `Q` is especially weak for this child-facing content request.
- `S6` supports treating `X` as a Romanian alphabet letter with `cs`/`gz` sound values, but child-safe concrete word choices remain limited.
- `S7` explicitly covers `S, Z, Ț, Ș, J, CE, CI, GE, GI, L, R` and says materials use initial, medial, and final positions plus differentiation targets.
- `S8` records `S` practice in intervocalic, initial, medial, and final positions and differentiation such as `S/Z` and `S/Ș`.
- `S9` records child speech-practice contrasts for `S/Z`, `Ș/J`, `Ț` versus `S/CI/Ș`, `CE/CI`, `GE/GI`, `R/L`, `F/V`, `C/G/H`, and recommends sound analysis and differentiation games for preschool/school-small children.

## Field Key

Table fields are compact to keep the worksheet usable:

- `candidate/display`: candidate word and Romanian display spelling.
- `canonical`: proposed canonical starting-letter bucket.
- `route/id`: new-letter route and ID prefix only when relevant.
- `cat/pos`: category and part of speech.
- `fit`: `child-known`, `stretch`, `hold`, or `reject`; all non-rejected rows still need human review.
- `fam/img`: familiarity and imageability scores from `1` to `5`.
- `speech/position`: primary speech target and target position.
- `syll/shape/clusters`: syllable count, simple or complex shape, and notable consonant clusters.
- `areas improved`: requested starts-with and contains targets improved.
- `overlap/contrast`: additional requested sound load or useful contrast.
- `source/safety/dupe`: source notes, safety notes, and duplicate or near-synonym review.
- `decision`: worksheet-stage decision only.

## Strong Child-Known Candidates

| candidate/display | canonical | route/id | cat/pos | fit | fam/img | speech/position | syll/shape/clusters | areas improved | overlap/contrast | source/safety/dupe | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `kiwi` | `K` | `k` / `ro-k-...` | food / noun | child-known | 4/5 | `K` initial | 2; simple; none | `K` starts | rare letter only | Borrowed but common fruit; verify spelling in DEX/DOOM before production; no duplicate | worksheet accept |
| `koala` | `K` | `k` / `ro-k-...` | animal / noun | child-known | 4/5 | `K` initial | 3; simple; none | `K` starts | rare letter only | Borrowed animal name; verify standard Romanian spelling; no duplicate | worksheet accept |
| `xilofon` | `X` | `x` / `ro-x-...` | music / noun | child-known | 4/5 | `X` initial | 3; simple; none | `X` starts | useful `F`, `L`, `N` secondary sounds | Supported by `S6`; no duplicate | worksheet accept |
| `taxi` | `T` | existing | vehicle / noun | child-known | 5/5 | `X` medial | 2; simple; none | `X` contains, `T` starts | `T`, `X` | Standard borrowed word, concrete vehicle; no duplicate | worksheet accept |
| `pix` | `P` | existing | school / noun | child-known | 5/5 | `X` final | 1; complex final `x` | `X` contains | final target value | Common school object; no duplicate | worksheet accept |
| `boxă` | `B` | existing | household / noun | child-known | 4/5 | `X` medial | 2; simple; none | `X` contains, `B` starts | `Ă` contains | Concrete speaker; no duplicate | worksheet accept |
| `lampă` | `L` | existing | household / noun | child-known | 5/5 | `L` initial | 2; simple; cluster `mp` | `L` starts, `Ă` contains | `P` interior | Common object; no duplicate | worksheet accept |
| `lună` | `L` | existing | nature / noun | child-known | 5/5 | `L` initial | 2; simple; none | `L` starts, `Ă` contains | vowel warm-up | Concrete celestial object; no duplicate | worksheet accept |
| `locomotivă` | `L` | existing | vehicle / noun | child-known | 4/5 | `L` initial | 5; complex; none | `L` starts, `V` contains | long word, good `V` interior | Concrete but long; no duplicate | worksheet accept |
| `lebădă` | `L` | existing | animal / noun | child-known | 4/5 | `L` initial | 3; simple; none | `L` starts, `B/D` contains | `Ă` repeated | Concrete animal; no duplicate | worksheet accept |
| `lopată` | `L` | existing | tool / noun | child-known | 5/5 | `L` initial | 3; simple; none | `L` starts, `T` contains | `Ă` contains | Common outdoor object; no duplicate | worksheet accept |
| `lipici` | `L` | existing | school / noun | child-known | 5/5 | `L` initial | 3; simple; none | `L` starts, `CI` contains | `CI` final | Common school object; no duplicate | worksheet accept |
| `lupă` | `L` | existing | school / noun | child-known | 4/5 | `L` initial | 2; simple; none | `L` starts, `Ă` contains | `P` interior | Concrete magnifier; no duplicate | worksheet accept |
| `leagăn` | `L` | existing | playground / noun | child-known | 5/5 | `L` initial | 3; simple; none | `L` starts, `Ă` contains | `G` interior | Common playground object; no duplicate | worksheet accept |
| `rac` | `R` | existing | animal / noun | child-known | 4/5 | `R` initial | 1; complex final `c` | `R` starts | `R/L` contrast possible | Concrete animal; no duplicate | worksheet accept |
| `ren` | `R` | existing | animal / noun | child-known | 4/5 | `R` initial | 1; simple; none | `R` starts | `R/L` contrast possible | Concrete animal; no duplicate | worksheet accept |
| `rucsac` | `R` | existing | school / noun | child-known | 5/5 | `R` initial | 2; complex; `cs`/`sac` coda | `R` starts, `S` contains | cluster load moderate | Common backpack; no duplicate | worksheet accept |
| `role` | `R` | existing | toy / noun | child-known | 4/5 | `R` initial | 2; simple; none | `R` starts | `R/L` in same word | Concrete skates; no duplicate | worksheet accept |
| `sac` | `S` | existing | household / noun | child-known | 4/5 | `S` initial | 1; complex final `c` | `S` starts | simple `S` initial | Concrete bag/sack; no duplicate | worksheet accept |
| `supă` | `S` | existing | food / noun | child-known | 5/5 | `S` initial | 2; simple; none | `S` starts, `Ă` contains | simple `S` initial | Common food; no duplicate | worksheet accept |
| `sare` | `S` | existing | food / noun | child-known | 5/4 | `S` initial | 2; simple; none | `S` starts, `R` contains | `S/R` load | Concrete if shown as salt shaker/pile; no duplicate | worksheet accept |
| `soră` | `S` | existing | family / noun | child-known | 5/4 | `S` initial | 2; simple; none | `S` starts, `R/Ă` contains | person image; `S/R` | Person/family images previously allowed if reviewed; no duplicate | worksheet accept |
| `semințe` | `S` | existing | food / noun | child-known | 4/4 | `S` initial | 3; simple; none | `S` starts, `Ț` contains | `Ț` final-ish, plural | Concrete seeds; no duplicate | worksheet accept |
| `sită` | `S` | existing | household / noun | child-known | 4/5 | `S` initial | 2; simple; none | `S` starts, `T/Ă` contains | simple target | Concrete sieve; no duplicate | worksheet accept |
| `sticlă` | `S` | existing | household / noun | child-known | 5/5 | `S` initial cluster | 2; complex; `st`, `cl` | `S` starts, `T/L/Ă` contains | advanced cluster load | Common bottle; no duplicate | worksheet accept |
| `șină` | `Ș` | existing | vehicle / noun | child-known | 4/4 | `Ș` initial | 2; simple; none | `Ș` starts, `Ă` contains | rail/train context | Image should show rail, not abstract line; no duplicate | worksheet accept |
| `tren` | `T` | existing | vehicle / noun | child-known | 5/5 | `T` initial | 1; complex; `tr` | `T` starts, `R` contains | `T/R` cluster | Common vehicle; no duplicate | worksheet accept |
| `tractor` | `T` | existing | vehicle / noun | child-known | 5/5 | `T` initial cluster | 2; complex; `tr`, `ct` | `T` starts, `R` contains | cluster load high but familiar | Common vehicle; no duplicate | worksheet accept |
| `tablă` | `T` | existing | school / noun | child-known | 5/5 | `T` initial | 2; complex; `bl` | `T` starts, `B/L/Ă` contains | `T/D` contrast possible | School board; no duplicate | worksheet accept |
| `tigaie` | `T` | existing | household / noun | child-known | 5/5 | `T` initial | 3; simple; none | `T` starts, `GI` contains by spelling `gi` | `GI` incidental | Concrete pan; verify `GI` target value acceptable in app matching | worksheet accept |
| `tamburină` | `T` | existing | music / noun | child-known | 4/5 | `T` initial | 4; complex; `mb` | `T` starts, `B` contains | `B` interior | Concrete instrument; no duplicate | worksheet accept |
| `trandafir` | `T` | existing | nature / noun | child-known | 5/5 | `T` initial cluster | 3; complex; `tr`, `nd` | `T` starts, `R/D` contains | `T/R/D` load | Common flower; no duplicate | worksheet accept |
| `ventilator` | `V` | existing | household / noun | child-known | 4/5 | `V` initial | 4; complex; none | `V` starts, `T/R` contains | long but concrete | Household appliance; no duplicate | worksheet accept |
| `vopsea` | `V` | existing | art / noun | child-known | 4/5 | `V` initial | 2; complex diphthong | `V` starts, `S` contains | `F/V` contrast | Paint can/brush image; no duplicate | worksheet accept |
| `volan` | `V` | existing | vehicle / noun | child-known | 5/5 | `V` initial | 2; simple; none | `V` starts, `L` contains | `F/V` contrast | Concrete steering wheel; no duplicate | worksheet accept |
| `vestă` | `V` | existing | clothing / noun | child-known | 4/5 | `V` initial | 2; complex; `st` | `V` starts, `S/T/Ă` contains | cluster load | Concrete clothing item; no duplicate | worksheet accept |
| `vânătă` | `V` | existing | food / noun | child-known | 4/5 | `V` initial | 3; simple; none | `V` starts, `Â/T/Ă` contains | exact `Â` contains | Eggplant; no duplicate | worksheet accept |
| `vierme` | `V` | existing | animal / noun | child-known | 4/4 | `V` initial | 2; complex diphthong | `V` starts, `R` contains | `F/V`, `R` | Concrete worm; child-safe if friendly | worksheet accept |
| `vișine` | `V` | existing | food / noun | child-known | 5/5 | `V` initial | 3; simple; none | `V` starts, `Ș` contains | requested interior `Ș` | Concrete fruit; no duplicate | worksheet accept |
| `biberon` | `B` | existing | household / noun | child-known | 5/5 | `B` initial/repeated | 3; simple; none | `B` starts and repeated | repeated `B`, `R` contains | Common baby bottle; no duplicate | worksheet accept |
| `borcan` | `B` | existing | household / noun | child-known | 5/5 | `B` initial | 2; complex; `rc` | `B` starts, `R` contains | `B/R` load | Concrete jar; no duplicate | worksheet accept |
| `burete` | `B` | existing | household / noun | child-known | 5/5 | `B` initial | 3; simple; none | `B` starts, `T/R` contains | `B/R/T` | Concrete sponge; no duplicate | worksheet accept |
| `bibliotecă` | `B` | existing | household / noun | child-known | 4/5 | `B` initial/repeated | 4; complex; `bl` absent, repeated `b` | `B` starts and repeated, `T` contains | repeated `B` | Show bookcase, not abstract library; no duplicate | worksheet accept |
| `brad` | `B` | existing | nature / noun | child-known | 5/5 | `B` initial cluster | 1; complex; `br` | `B` starts, `R/D` contains | `B/R/D` load | Common tree; avoid holiday-only framing if possible | worksheet accept |
| `bomboană` | `B` | existing | food / noun | child-known | 5/5 | `B` initial/repeated | 3; complex; `mb` | `B` starts and repeated | `B` repetition | Common candy; no brand | worksheet accept |
| `bluză` | `B` | existing | clothing / noun | child-known | 5/5 | `B` initial cluster | 2; complex; `bl` | `B` starts | `B/L` cluster | Concrete clothing; no duplicate | worksheet accept |
| `bancă` | `B` | existing | outdoor / noun | child-known | 4/4 | `B` initial | 2; complex; `nc` | `B` starts, `Ă` contains | possible ambiguous bank/bench | Use park bench sense only; human should confirm ambiguity acceptable | worksheet accept |
| `dormitor` | `D` | existing | household / noun | child-known | 4/4 | `D` initial | 3; complex; `rm` | `D` starts, `R/T` contains | room scene | Imageable as bed/bedroom, but room scenes are busier | worksheet accept |
| `dovlecel` | `D` | existing | food / noun | child-known | 4/5 | `D` initial | 3; complex; `vl` | `D` starts, `V/CE/L` contains | good overlap for `V`, `CE` | Distinct from existing `dovleac`; human to confirm not too near | worksheet accept |
| `gălușcă` | `G` | existing | food / noun | child-known | 4/4 | `Ș` medial | 3; complex; `șc` | `Ș` contains, `Ă` contains | `G/Ș/CĂ` load | Concrete dumpling if visual style is clear; no duplicate | worksheet accept |
| `periuță` | `P` | existing | hygiene / noun | child-known | 5/5 | `Ț` medial/final-ish | 4; simple; none | `Ț` contains | `R` contains | Toothbrush; no duplicate | worksheet accept |
| `fundiță` | `F` | existing | clothing / noun | child-known | 5/5 | `Ț` medial/final-ish | 3; complex; `nd` | `Ț` contains, `D` contains | `F/V` contrast not primary | Bow/ribbon; no duplicate | worksheet accept |
| `brățară` | `B` | existing | clothing / noun | child-known | 5/5 | `Ț` medial | 3; complex; `br` | `B` starts, `Ț/R` contains | `B/R/Ț` load | Concrete bracelet; distinct from existing `braț` | worksheet accept |
| `sticluță` | `S` | existing | household / noun | child-known | 4/5 | `Ț` medial/final-ish | 3; complex; `st`, `cl` | `S` starts, `Ț/T/L` contains | cluster load high | Concrete little bottle; no duplicate | worksheet accept |
| `punguță` | `P` | existing | household / noun | child-known | 5/5 | `Ț` medial/final-ish | 3; complex; `ng` | `Ț` contains | `G` contains | Concrete little bag; no duplicate | worksheet accept |
| `covor` | `C` | existing | household / noun | child-known | 5/5 | `V` medial | 2; simple; none | `V` contains, `R` contains | `C/G`, `R` secondary | Concrete rug; no duplicate | worksheet accept |
| `cravată` | `C` | existing | clothing / noun | child-known | 4/5 | `V` medial | 3; complex; `cr` | `V` contains, `R/T/Ă` contains | `R/L`, `F/V` | Concrete tie; no duplicate | worksheet accept |
| `lavetă` | `L` | existing | household / noun | child-known | 4/5 | `V` medial | 3; simple; none | `L` starts, `V/T/Ă` contains | `F/V` | Concrete cleaning cloth; no duplicate | worksheet accept |
| `porumbel` | `P` | existing | animal / noun | child-known | 5/5 | `B` medial | 3; complex; `mb` | `B` contains, `R/L` contains | strong `R/L` contrast | Concrete bird; no duplicate | worksheet accept |
| `roabă` | `R` | existing | outdoor / noun | child-known | 4/5 | `B` medial | 2; complex diphthong | `R` starts, `B/Ă` contains | `R/B` | Concrete wheelbarrow; no duplicate | worksheet accept |
| `cabană` | `C` | existing | place / noun | child-known | 4/4 | `B` medial | 3; simple; none | `B` contains, `Ă` contains | place image | Concrete cabin; no duplicate | worksheet accept |
| `pădure` | `P` | existing | nature / noun | child-known | 5/5 | `D` medial | 3; simple; none | `D` contains, `Ă/R` contains | broad scene but familiar | Forest icon must be simple; no duplicate | worksheet accept |
| `medalie` | `M` | existing | object / noun | child-known | 4/5 | `D` medial | 4; simple; none | `D` contains, `L` contains | `D/L` | Concrete medal; no duplicate | worksheet accept |
| `lădiță` | `L` | existing | household / noun | child-known | 4/5 | `D` medial, `Ț` medial | 3; simple; none | `L` starts, `D/Ț/Ă` contains | useful overlap | Small crate/box; no duplicate | worksheet accept |
| `ceainic` | `C` | existing | household / noun | child-known | 4/5 | `CE` initial | 3; complex diphthong | `CE` starts, `C` final | `C/G` | Concrete teapot/kettle; no duplicate | worksheet accept |
| `papuci` | `P` | existing | clothing / noun | child-known | 5/5 | `CI` final | 3; simple; none | `CI` contains | `P` repeated | Concrete slippers; no duplicate | worksheet accept |

## Learnable Stretch Candidates

These are concrete and imageable, but not assumed to be familiar to most 4-to-6-year-olds. Batch 43 should review them more strictly.

| candidate/display | canonical | route/id | cat/pos | fit | fam/img | speech/position | syll/shape/clusters | areas improved | overlap/contrast | source/safety/dupe | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `kimono` | `K` | `k` / `ro-k-...` | clothing / noun | stretch | 2/5 | `K` initial | 3; simple; none | `K` starts | rare letter | Standard borrowed clothing word likely learnable; verify in DEX/DOOM | worksheet accept as stretch |
| `karate` | `K` | `k` / `ro-k-...` | action/sport / noun | stretch | 3/4 | `K` initial | 3; simple; none | `K` starts, `T/R` contains | action image, `R/L` contrast | One clear child-safe pose possible, but human should review action policy | worksheet accept as stretch |
| `kilt` | `K` | `k` / `ro-k-...` | clothing / noun | stretch | 1/5 | `K` initial | 1; complex final cluster | `K` starts, `T/L` contains | rare culture-specific word | Very learnable but not Romanian-child-known; verify standard usage | worksheet accept as stretch |
| `mixer` | `M` | existing | household / noun | stretch | 4/5 | `X` medial | 2; complex; `x` | `X` contains, `R` contains | `M/X/R` | Common appliance, but English-looking spelling; verify | worksheet accept as stretch |
| `yoga` | `Y` | `y` / `ro-y-...` | action / noun | stretch | 3/4 | `Y` initial | 2; simple; none | `Y` starts | rare letter | One pose can be imageable; human review needed for action suitability | worksheet accept as stretch |
| `radiator` | `R` | existing | household / noun | stretch | 3/5 | `R` initial/repeated | 4; complex; none | `R` starts, `D/T` contains | repeated `R` | Concrete household object; no duplicate | worksheet accept as stretch |
| `râmă` | `R` | existing | animal / noun | stretch | 3/4 | `R` initial | 2; simple; none | `R` starts, `Â/Ă` contains | exact `Â` contains | Worm image can be friendly; no duplicate | worksheet accept as stretch |
| `roză` | `R` | existing | nature / noun | stretch | 3/5 | `R` initial | 2; simple; none | `R` starts, `Ă` contains | near `trandafir` if both accepted | Flower sense may duplicate later `trandafir`; human review | worksheet accept as stretch |
| `sacou` | `S` | existing | clothing / noun | stretch | 3/5 | `S` initial | 2; complex diphthong | `S` starts | clothing category | Concrete jacket; check near `jachetă` | worksheet accept as stretch |
| `șoim` | `Ș` | existing | animal / noun | stretch | 3/5 | `Ș` initial | 1; complex diphthong | `Ș` starts | `Ș/J` contrast possible | Concrete bird; less familiar than common animals | worksheet accept as stretch |
| `șnur` | `Ș` | existing | object / noun | stretch | 3/4 | `Ș` initial cluster | 1; complex; `șn` | `Ș` starts, `R` contains | cluster load | Concrete cord/string; image must not duplicate `șiret` | worksheet accept as stretch |
| `ștampilă` | `Ș` | existing | school / noun | stretch | 3/5 | `Ș` initial cluster | 3; complex; `șt`, `mp` | `Ș` starts, `T/L` contains | advanced cluster load | Concrete stamp; no duplicate | worksheet accept as stretch |
| `șezlong` | `Ș` | existing | outdoor / noun | stretch | 2/5 | `Ș` initial | 2; complex; `zl`, `ng` | `Ș` starts | high cluster load | Concrete lounge chair, but less preschool-common | worksheet accept as stretch |
| `tacâm` | `T` | existing | household / noun | stretch | 3/5 | `T` initial | 2; simple; none | `T` starts, `Â` contains | tableware | Concrete if shown as fork/spoon set; no duplicate | worksheet accept as stretch |
| `țelină` | `Ț` | existing | food / noun | stretch | 3/5 | `Ț` initial | 3; simple; none | `Ț` starts, `Ă` contains | weak exact `Ț` bucket | Concrete vegetable; not all children know it | worksheet accept as stretch |
| `țarc` | `Ț` | existing | household/outdoor / noun | stretch | 2/4 | `Ț` initial | 1; complex final `rc` | `Ț` starts, `R` contains | weak exact `Ț` bucket | Concrete pen/enclosure; visual needs clarity | worksheet accept as stretch |
| `țambal` | `Ț` | existing | music / noun | stretch | 1/5 | `Ț` initial | 2; complex; `mb` | `Ț` starts, `B/L` contains | weak exact `Ț` bucket | Concrete instrument but unfamiliar; human review | worksheet accept as stretch |
| `țipar` | `Ț` | existing | animal / noun | stretch | 2/5 | `Ț` initial | 2; simple; none | `Ț` starts, `R` contains | weak exact `Ț` bucket | Concrete eel; may be unfamiliar | worksheet accept as stretch |
| `țiglă` | `Ț` | existing | household / noun | stretch | 2/5 | `Ț` initial | 2; complex; `gl` | `Ț` starts, `L/Ă` contains | weak exact `Ț` bucket | Concrete roof tile; likely learnable, not child-known | worksheet accept as stretch |
| `viespe` | `V` | existing | animal / noun | stretch | 3/4 | `V` initial | 2; complex diphthong | `V` starts, `S` contains | `F/V`, `S/Ș` | Insect can be safe if non-scary; no duplicate | worksheet accept as stretch |
| `dantelă` | `D` | existing | clothing / noun | stretch | 2/4 | `D` initial | 3; complex; `nt` | `D` starts, `T/L/Ă` contains | texture/material | Concrete lace but image may be pattern-like | worksheet accept as stretch |
| `degetar` | `D` | existing | household / noun | stretch | 2/5 | `D` initial, `GE` medial | 3; simple; none | `D` starts, `GE/T/R` contains | `GE` useful | Concrete thimble; likely unfamiliar | worksheet accept as stretch |
| `daltă` | `D` | existing | tool / noun | stretch | 2/5 | `D` initial | 2; complex; `lt` | `D` starts, `T/L/Ă` contains | tool safety neutral if static | Concrete tool; no duplicate | worksheet accept as stretch |
| `dudă` | `D` | existing | food / noun | stretch | 2/5 | `D` initial/repeated | 2; simple; none | `D` starts, `Ă` contains | repeated `D` | Concrete mulberry; unfamiliar for some children | worksheet accept as stretch |
| `jder` | `J` | existing | animal / noun | stretch | 1/4 | `J` initial | 1; complex; `jd` | `J` starts, `D/R` contains | weak exact `J` bucket | Concrete animal but uncommon | worksheet accept as stretch |
| `jambiere` | `J` | existing | clothing / noun | stretch | 2/5 | `J` initial | 4; complex; `mb` | `J` starts, `B/R` contains | weak exact `J` bucket | Concrete leg warmers; unfamiliar | worksheet accept as stretch |
| `jardinieră` | `J` | existing | household / noun | stretch | 2/5 | `J` initial | 4; complex; `rd` | `J` starts, `D/R` contains | weak exact `J` bucket | Concrete planter; no duplicate | worksheet accept as stretch |
| `joben` | `J` | existing | clothing / noun | stretch | 2/5 | `J` initial | 2; simple; none | `J` starts, `B` contains | weak exact `J` bucket | Concrete hat; `S9` uses as `J` example; unfamiliar | worksheet accept as stretch |
| `jantă` | `J` | existing | vehicle / noun | stretch | 2/5 | `J` initial | 2; complex; `nt` | `J` starts, `T/Ă` contains | weak exact `J` bucket | Concrete wheel rim; less child-known | worksheet accept as stretch |
| `rășină` | `R` | existing | nature / noun | stretch | 2/4 | `Ș` medial | 3; simple; none | `Ș` contains, `R` starts | `R/Ș` | Concrete tree resin but may be hard to show; human review | worksheet accept as stretch |
| `coțofană` | `C` | existing | animal / noun | stretch | 3/5 | `Ț` medial | 4; simple; none | `Ț` contains, `Ă` contains | bird vocabulary | Concrete bird; no duplicate | worksheet accept as stretch |
| `șurubelniță` | `Ș` | existing | tool / noun | stretch | 3/5 | `Ș` initial, `B/Ț` medial | 5; complex; `ș`, `bl`, `ln` | `Ș` starts, `B/Ț` contains | high overlap load | Concrete tool; long word, human should review complexity | worksheet accept as stretch |
| `bondar` | `B` | existing | animal / noun | stretch | 3/5 | `D` medial | 2; complex; `nd` | `B` starts, `D/R` contains | `B/D/R` | Concrete bumblebee; no duplicate | worksheet accept as stretch |
| `cojoc` | `C` | existing | clothing / noun | stretch | 2/5 | `J` medial | 2; simple; none | `J` contains | `Ș/J` contrast possible | `S9` uses `cojoc` as `J` example; cultural familiarity varies | worksheet accept as stretch |
| `bijuterie` | `B` | existing | object / noun | stretch | 3/4 | `J` medial | 4; simple; none | `B` starts, `J/T/R` contains | `J` interior | Concrete jewelry, but adult/ornamental leaning; human review | worksheet accept as stretch |
| `gingie` | `G` | existing | body / noun | stretch | 2/3 | `GI` initial/repeated | 3; simple; none | `GI` starts and repeated | `GE/GI-J` contrast | `S9` uses `gingie` as `GI` example; image may be mouth-close-up | worksheet accept as stretch |
| `gheorgină` | `G` | existing | nature / noun | stretch | 2/5 | `GHE` initial | 4; simple; none | `GHE` starts | flower vocabulary | Concrete flower but unfamiliar; no duplicate | worksheet accept as stretch |
| `răchită` | `R` | existing | nature / noun | stretch | 2/4 | `CHI` medial | 3; simple; none | `CHI` contains, `R/T/Ă` contains | `CHI` value | Concrete willow branch/tree but less child-known | worksheet accept as stretch |

## Held For Human Decision

These may be useful but should not be treated as accepted until the human reviews the tradeoff.

| candidate/display | canonical | route/id | reason to hold |
| --- | --- | --- | --- |
| `ketchup` | `K` | `k` / `ro-k-...` | Common condiment for some children, but English-looking borrowed spelling and brand-like packaging risk. |
| `quinoa` | `Q` | `q` / `ro-q-...` | Concrete food and possible `Q` starts candidate, but weak child familiarity and Romanian usage needs explicit acceptance. |
| `quokka` | `Q` | `q` / `ro-q-...` | Concrete animal, but likely foreign and not standard Romanian child vocabulary. |
| `walkie-talkie` | `W` | `w` / `ro-w-...` | Concrete child toy/device, but English-looking compound spelling and pronunciation need review. |
| `webcam` | `W` | `w` / `ro-w-...` | Concrete device, but screen/technology vocabulary is not a priority for ages 4 to 6. |
| `wombat` | `W` | `w` / `ro-w-...` | Concrete animal, but likely foreign and weakly familiar for Romanian preschool vocabulary. |
| `yo-yo` | `Y` | `y` / `ro-y-...` | Strong toy concept, but spelling may be `yo-yo`, `yoyo`, or adapted; verify Romanian standard before ID planning. |
| `yacht` | `Y` | `y` / `ro-y-...` | Concrete vehicle, but Romanian standard often uses adapted `iaht`; foreign spelling may not fit the letter bucket. |
| `yak` | `Y` | `y` / `ro-y-...` | Concrete animal, but Romanian standard may be adapted `iac`; hold for spelling and familiarity review. |
| `valiză` | `V` | existing | Good `V` starts candidate, but near-synonym of existing `geamantan`; avoid adding only for count. |
| `vânt` | `V` | existing | Common word but visually represented only through effects on other objects; image ambiguity risk. |
| `balerină` | `B` | existing | Concrete person/action image possible, but human should confirm person-role image direction. |
| `doctor` | `D` | existing | Child-known role, but medical framing can become clinical/scary if poorly illustrated. |
| `șanț` | `Ș` | existing | Concrete but visually dull and possible safety/ditch ambiguity. |
| `șah` | `Ș` | existing | Concrete board game, but may be older-child vocabulary and more literacy/strategy than object vocabulary. |
| `cenușă` | `C` | existing | Helps `CE` and interior `Ș`, but ash is messy/fire-adjacent and not strongly child-friendly. |
| `măceșe` | `M` | existing | Concrete berries and interior `Ș`, but less familiar and may duplicate generic berry concepts. |
| `celofan` | `C` | existing | Helps `CE`, but material is hard to distinguish in one icon. |
| `vecin` | `V` | existing | Helps interior `CI`, but person/social role may be abstract without a scene. |
| `rege` | `R` | existing | Strong `GE` and `R/L` contrast value, but near existing `regină` and `împărat`; human should decide if another royalty word is worthwhile. |
| `încheietură` | `Î` | existing | Helps `CHE`, but body-part image may be hard to distinguish from hand/arm and word is long. |
| `vrăjitor` | `V` | existing | Interior `J`, but fantasy/person depiction needs explicit human approval even though fantasy images were allowed earlier. |

## Rejected Or Not Recommended

| candidate/display | canonical | reason |
| --- | --- | --- |
| `ăla` | `Ă` | Pronoun/deictic, not concrete or imageable; not suitable for a starts-with `Ă` child-facing bucket. |
| `ăsta` | `Ă` | Pronoun/deictic, not concrete or imageable; not suitable for a starts-with `Ă` bucket. |
| `ânger` | `Â` | Nonstandard spelling for `înger`; Romanian spelling rules use `î` at word start in ordinary words. |
| `kilogram` | `K` | Standard but abstract unit of measure; poor 4-to-6 concrete image target. |
| `quasar` | `Q` | Specialized astronomy word; abstract and outside age scope. |
| `quetzal` | `Q` | Concrete bird but rare and foreign; too obscure for current child-facing scope. |
| `watt` | `W` | Unit of measure; abstract and specialized. |
| `weekend` | `W` | Common borrowed word but temporal abstraction, not one clear image. |
| `whisky` | `W` | Adult/alcohol word; reject. |
| `text` | `T` | Contains `X`, but literacy abstraction and poor image target. |
| `explozie` | `E` | Contains `X`, but violent/scary unsafe concept. |
| `yeti` | `Y` | Fantasy/scary creature risk and not standard child-known Romanian vocabulary. |
| `ruj` | `R` | Adult cosmetic; not a priority child word despite final `J`. |
| `jeep` | `J` | Brand/genericization risk and foreign spelling; avoid for production vocabulary. |
| `lighean` | `L` | Already approved production word; duplicate. |
| `tobogan` | `T` | Already approved production word; duplicate. |

## Rare-Letter Summary

- `Ă`: no production-ready starts-with candidates found. Existing contains-only coverage is large. Human decision needed later: defer playable `Ă` starts mode, or enable `Ă` only when UX can handle zero starts-with and strong contains-only/mixed content.
- `Â`: no production-ready starts-with candidates found. Current Romanian spelling makes ordinary word-initial `Â` effectively unsuitable for this child-facing bucket. Human decision needed later as for `Ă`.
- `K`: `kiwi` and `koala` are the strongest child-known candidates; `kimono`, `karate`, and `kilt` are stretch candidates.
- `Q`: no clean child-known accepted candidate. `quinoa` and `quokka` are held, not accepted.
- `W`: no clean child-known accepted candidate. `walkie-talkie`, `webcam`, and `wombat` were considered but should remain stretch/hold unless the human wants borrowed-looking vocabulary.
- `X`: `xilofon`, `taxi`, `pix`, and `boxă` are strong candidates; `mixer` is a stretch candidate.
- `Y`: `yoga` is the only tentative stretch candidate. `yo-yo`, `yacht`, and `yak` need spelling/usage decisions before acceptance.

## Coverage Notes For Batch 43 Review

The strongest first production slice should probably avoid rare-letter overreach. A good first review queue could combine:

- exact new-letter wins: `kiwi`, `koala`, `xilofon`;
- strong requested starts-with expansion: `lampă`, `lună`, `tren`, `tractor`, `ventilator`, `biberon`, `borcan`, `dormitor`;
- strong contains/interior wins: `periuță`, `brățară`, `covor`, `porumbel`, `pădure`;
- one or two sequence improvements: `ceainic`, `papuci`, optionally `gingie` only if mouth imagery is accepted.

Do not automatically select this queue. Batch 43 is the human vocabulary review gate.

## Batch 43 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 42.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/plan.md
9. docs/app-development-program/features/romanian-content-expansion/status.md
10. docs/status.md

Goal:

Execute Batch 43: human vocabulary review for the requested letter and sound expansion. Do not add production JSON records, images, route changes, schema changes, placeholders, or speech-target production metadata.

Start from the Batch 42 worksheet. Ask the human to approve, reject, or revise candidate rows, with special attention to:

- rare-letter stretch words for K, Q, W, X, and Y;
- the lack of strong starts-with candidates for Ă and Â;
- borrowed or foreign-looking spellings;
- near-synonym risk, especially words added only to raise counts;
- child safety and age fit;
- image ambiguity;
- action/person/fantasy image policy;
- overlap load for words containing multiple harder targets.

End Batch 43 by recording the human decisions in the worksheet or a companion review document, producing a first approved production-slice queue of about 15 words, updating feature status and global docs/status.md, running `git diff --check`, and providing a ready-to-copy prompt for Batch 44 production slice planning.
```
