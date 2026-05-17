# Romanian Content Expansion Candidate Review Worksheet

Batch: Romanian Content Expansion Batch 2, Candidate Generation And Review Worksheet.

Worksheet date: 2026-05-16.

Pilot source: `docs/app-development-program/features/romanian-content-expansion/coverage-audit-and-targets.md`.

## Scope

This worksheet is for the worksheet-first `Tier 1 Speech Seed` pilot.

Primary targets:

- `R`
- `S`
- `Ș`
- `Ț`
- `Z`
- `J`

Secondary watchlist:

- `CE/CI`
- `GE/GI`

No production word manifests or image assets are changed by this worksheet.

## Review Meaning

Review decisions in this worksheet are candidate-stage decisions only.

- `accept`: strong enough to keep for a later human or therapist production review.
- `needs revision`: potentially useful, but spelling, age fit, imageability, target value, safety, or production scope needs another pass.
- `reject`: should not move into production for this pilot.

An `accept` row is not a production approval. Later batches still need canonical JSON review, image briefs, and normal validation before any word is published.

## Normalization And Deduplication Notes

Romanian display spelling keeps diacritics. The `normalized` field folds Romanian diacritics for ID and duplicate review, while canonical starting letters still use the exact first Romanian character.

Existing approved production words were excluded from the main candidate table. Notable excluded duplicates or already-covered words:

```txt
apă, albină, avion, ardei, arici, ananas, autobuz, acvariu, acadea, alună,
câine, cal, casă, cană, carte, copil, cub, creion, copac, castravete,
mamă, măr, masă, minge, mașină, morcov, mână, munte, mănușă, melc,
pisică, pâine, pat, pahar, pește, pantof, păpușă, perie, porc, pernă
```

## Worksheet Summary

- Candidate rows: `69`
- Accepted candidate rows: `43`
- Needs-revision rows: `19`
- Rejected rows: `7`
- Production words added: `0`
- Images added: `0`

Accepted candidates intentionally exceed the later small-pilot target. Batch 4 should choose a smaller production subset, roughly `18` to `24` words, from the accepted rows after schema and validation readiness are checked.

## Candidate Worksheet

| # | Candidate | Normalized | Canonical start | Category | POS | Age fit | Primary target | Secondary/watchlist targets | Sound position | Syllables | Syllable complexity | Clusters | Contrast value | Imageability | Safety | Expected coverage impact | Decision | Rejection or revision reason |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | rață | rata | R | animal | noun | strong | R | Ț | initial R; medial Ț | 2 | simple | none | R/L; Ț/S | high: duck | pass | Adds initial `R`; improves contains `Ț`. | accept |  |
| 2 | roată | roata | R | object/vehicle part | noun | strong | R | none | initial | 2 | simple | none | R/L | high: wheel | pass | Adds initial `R`; useful concrete wheel image. | accept |  |
| 3 | robot | robot | R | toy/object | noun | strong | R | none | initial | 2 | simple | none | R/L | high: toy robot | pass | Adds initial `R`; familiar toy/object. | accept |  |
| 4 | rochie | rochie | R | clothing | noun | strong | R | none | initial | 2 | simple | none | R/L | high: dress | pass | Adds initial `R`; clothing category. | accept |  |
| 5 | rachetă | racheta | R | toy/vehicle | noun | good | R | none | initial | 3 | moderate | none | R/L | high: toy rocket | pass | Adds initial `R`; slightly harder 3-syllable word. | accept |  |
| 6 | rucsac | rucsac | R | school object | noun | strong | R | S | initial R; final S | 2 | moderate | possible `cs` boundary | R/L; S/Ș | high: backpack | pass | Adds initial `R`; adds final `S`. | needs revision | Useful, but cluster/boundary complexity should be reviewed before early-practice use. |
| 7 | ridiche | ridiche | R | food | noun | good | R | none | initial | 3 | moderate | none | R/L | medium: radish | pass | Adds initial `R`; food category. | needs revision | Age familiarity may vary; keep only if a reviewer confirms child familiarity. |
| 8 | iepure | iepure | I | animal | noun | strong | R | none | medial | 3 | moderate | none | R/L | high: rabbit | pass | Improves contains-only `R`; canonical `I`. | accept |  |
| 9 | farfurie | farfurie | F | household object | noun | strong | R | F | medial/repeated | 4 | complex | `rf` boundary | R/L; F/V | high: plate | pass | Improves repeated/medial `R`; canonical `F`. | needs revision | Four syllables and repeated `R` make this better as advanced content. |
| 10 | tren | tren | T | vehicle | noun | strong | R | T | cluster | 1 | complex | `tr` | R/L; T/D | high: train | pass | Adds cluster `R`; canonical `T`. | needs revision | Strong word, but cluster target should be marked advanced. |
| 11 | ramă | rama | R | household object | noun | mixed | R | none | initial | 2 | simple | none | R/L | medium: picture frame | pass | Adds initial `R`. | needs revision | Image may be visually weak without showing text or a photo inside the frame. |
| 12 | rege | rege | R | person/role | noun | mixed | R | GE/GI | initial R; medial GE | 2 | simple | none | R/L; GE/GI | medium: king figure | caution | Adds initial `R`; watchlist `GE`. | reject | Royal role is less functional and may require culturally loaded/fantasy imagery. |
| 13 | sanie | sanie | S | vehicle/toy | noun | strong | S | none | initial | 3 | simple | none | S/Ș | high: sled | pass | Adds initial `S`. | accept |  |
| 14 | soare | soare | S | nature | noun | strong | S | R | initial S; medial R | 2 | simple | none | S/Ș; R/L | high: sun | pass | Adds initial `S`; contains `R`. | accept |  |
| 15 | suc | suc | S | food/drink | noun | strong | S | none | initial | 1 | simple | none | S/Ș | high: juice cup | pass | Adds short initial `S`. | accept |  |
| 16 | sac | sac | S | household object | noun | good | S | none | initial | 1 | simple | none | S/Ș | medium: sack/bag | pass | Adds short initial `S`. | needs revision | Image may overlap with `rucsac` or bag imagery; clarify brief before use. |
| 17 | salată | salata | S | food | noun | strong | S | none | initial | 3 | simple | none | S/Ș | high: salad bowl | pass | Adds initial `S`; food category. | accept |  |
| 18 | scaun | scaun | S | household object | noun | strong | S | none | cluster | 1 | complex | `sc` | S/Ș; C/G | high: chair | pass | Adds initial `S` cluster. | accept |  |
| 19 | stea | stea | S | nature/shape | noun | good | S | T | cluster | 1 | complex | `st` | S/Ș; T/D | high: star | pass | Adds initial `S` cluster. | needs revision | Useful but cluster-heavy; may fit later than simple initial `S`. |
| 20 | nas | nas | N | body part | noun | strong | S | none | final | 1 | simple | none | S/Ș | high: nose | pass | Adds final `S`; canonical `N`. | accept |  |
| 21 | urs | urs | U | animal | noun | strong | S | R | final S; cluster/coda R | 1 | complex | `rs` coda | S/Ș; R/L | high: bear | pass | Adds final `S` and useful `R` context; canonical `U`. | accept |  |
| 22 | săpun | sapun | S | hygiene object | noun | strong | S | none | initial | 2 | simple | none | S/Ș | high: soap | pass | Adds initial `S`. | accept |  |
| 23 | sandale | sandale | S | clothing | noun | strong | S | none | initial | 3 | simple | none | S/Ș | high: sandals | pass | Adds initial `S`; clothing category. | accept |  |
| 24 | sirenă | sirena | S | object/character | noun | mixed | S | R | initial S; medial R | 3 | simple | none | S/Ș; R/L | low: mermaid vs alarm | caution | Adds initial `S`. | reject | Ambiguous meaning and weak single-image fit for a child picture game. |
| 25 | șapcă | sapca | Ș | clothing | noun | strong | Ș | none | initial | 2 | moderate | `pc` boundary | S/Ș | high: cap | pass | Adds initial `Ș`. | accept |  |
| 26 | șarpe | sarpe | Ș | animal | noun | good | Ș | R | initial Ș; medial R | 2 | simple | none | S/Ș; R/L | high: snake | caution | Adds initial `Ș`; contains `R`. | needs revision | Use only if illustrated as friendly and non-frightening. |
| 27 | șosetă | soseta | Ș | clothing | noun | strong | Ș | S | initial Ș; medial S | 3 | simple | none | S/Ș | high: sock | pass | Adds initial `Ș`; useful `S/Ș` contrast context. | accept |  |
| 28 | școală | scoala | Ș | place/school | noun | strong | Ș | none | cluster | 2 | complex | `șc` | S/Ș; C/G | high: school building | pass | Adds initial cluster `Ș`. | needs revision | Good word, but cluster-heavy and image may look like generic building. |
| 29 | șoricel | soricel | Ș | animal | noun | strong | Ș | R; CE/CI | initial Ș; medial R; final CE-like spelling not target | 3 | simple | none | S/Ș; R/L | high: mouse | pass | Adds initial `Ș`; contains `R`. | accept |  |
| 30 | ușă | usa | U | household object | noun | strong | Ș | none | medial | 2 | simple | none | S/Ș | high: door | pass | Improves contains-only `Ș`; canonical `U`. | accept |  |
| 31 | coș | cos | C | household object | noun | good | Ș | none | final | 1 | simple | none | S/Ș | medium: basket | pass | Improves final `Ș`; canonical `C`. | accept |  |
| 32 | cămașă | camasa | C | clothing | noun | strong | Ș | none | medial | 3 | simple | none | S/Ș | high: shirt | pass | Improves medial `Ș`; canonical `C`. | accept |  |
| 33 | vișină | visina | V | food/fruit | noun | good | Ș | none | medial | 3 | simple | none | S/Ș | high: sour cherry | pass | Improves medial `Ș`; canonical `V`. | needs revision | Age familiarity may vary by region; verify before production. |
| 34 | șurub | surub | Ș | object/tool part | noun | mixed | Ș | R | initial Ș; medial R | 2 | simple | none | S/Ș; R/L | medium: screw | caution | Adds initial `Ș`. | reject | Small hardware object is less child-focused and can be a choking/safety cue. |
| 35 | țap | tap | Ț | animal | noun | mixed | Ț | none | initial | 1 | simple | none | Ț/S | medium: male goat | pass | Adds initial `Ț`. | needs revision | Less common than `capră`; use only if reviewer confirms age familiarity. |
| 36 | țestoasă | testoasa | Ț | animal | noun | strong | Ț | S | initial Ț; medial/final S | 3 | moderate | `st` | Ț/S; S/Ș | high: turtle | pass | Adds initial `Ț`; secondary `S`. | accept |  |
| 37 | țânțar | tantar | Ț | insect | noun | good | Ț | R | initial/repeated Ț; final R | 2 | moderate | `nț` | Ț/S; R/L | medium: mosquito | caution | Adds repeated `Ț`; final `R`. | needs revision | Insect bite association may be too negative; needs safety review. |
| 38 | ață | ata | A | household object | noun | mixed | Ț | none | medial | 2 | simple | none | Ț/S | low: thread | pass | Improves contains-only `Ț`; canonical `A`. | reject | Thin thread is visually weak at wheel size. |
| 39 | față | fata | F | body part | noun | strong | Ț | F | medial | 2 | simple | none | Ț/S; F/V | high: face | pass | Improves contains-only `Ț`; canonical `F`. | accept |  |
| 40 | braț | brat | B | body part | noun | strong | Ț | R | final; cluster R | 1 | complex | `br` | Ț/S; R/L | high: arm | pass | Adds final `Ț`; canonical `B`. | accept |  |
| 41 | gheață | gheata | G | nature/food object | noun | strong | Ț | none | medial | 2 | simple | none | Ț/S | high: ice cube | pass | Improves contains-only `Ț`; canonical `G`. | accept |  |
| 42 | cuțit | cutit | C | household object | noun | strong | Ț | T | medial | 2 | simple | none | Ț/S; T/D | high: knife | reject | Improves contains-only `Ț`; canonical `C`. | reject | Sharp object is not appropriate for this child-facing pack. |
| 43 | dinți | dinti | D | body part | noun | strong | Ț | D | final | 1 | moderate | `nț` | Ț/S; T/D | high: teeth | pass | Adds final `Ț`; canonical `D`. | accept |  |
| 44 | cățel | catel | C | animal | noun | strong | Ț | none | medial | 2 | simple | none | Ț/S | high: puppy | pass | Improves contains-only `Ț`; canonical `C`. | accept |  |
| 45 | zebră | zebra | Z | animal | noun | strong | Z | R | initial Z; medial R | 2 | moderate | `br` | Z/J; R/L | high: zebra | pass | Adds initial `Z`. | accept |  |
| 46 | zăpadă | zapada | Z | nature | noun | strong | Z | D | initial Z; medial D | 3 | simple | none | Z/J; T/D | high: snow | pass | Adds initial `Z`. | accept |  |
| 47 | zar | zar | Z | toy/game object | noun | good | Z | R | initial Z; final R | 1 | simple | none | Z/J; R/L | high: die | pass | Adds short initial `Z`. | accept |  |
| 48 | zmeu | zmeu | Z | toy | noun | strong | Z | none | cluster | 1 | complex | `zm` | Z/J | high: kite | pass | Adds initial cluster `Z`. | needs revision | Good image, but cluster target is advanced. |
| 49 | zmeură | zmeura | Z | food/fruit | noun | good | Z | R | cluster Z; medial R | 2 | complex | `zm` | Z/J; R/L | high: raspberry | pass | Adds `Z` cluster and contains `R`. | needs revision | Familiarity may vary; cluster target is advanced. |
| 50 | zână | zana | Z | character | noun | mixed | Z | none | initial | 2 | simple | none | Z/J | medium: fairy | caution | Adds initial `Z`. | needs revision | Generic fantasy image may be acceptable, but keep secondary to concrete real-world words. |
| 51 | buză | buza | B | body part | noun | strong | Z | none | medial | 2 | simple | none | Z/J | high: lips | pass | Improves contains-only `Z`; canonical `B`. | accept |  |
| 52 | frunză | frunza | F | nature | noun | strong | Z | R; F | medial; cluster R | 2 | complex | `fr`, `nz` | Z/J; R/L; F/V | high: leaf | pass | Improves contains-only `Z`; canonical `F`. | accept |  |
| 53 | joc | joc | J | toy/activity | noun | strong | J | none | initial | 1 | simple | none | Z/J | medium: board game/toys | pass | Adds short initial `J`. | needs revision | Very child-known, but image brief must avoid abstract "game" and show a concrete toy/game setup. |
| 54 | jucărie | jucarie | J | toy | noun | strong | J | R | initial J; medial R | 4 | moderate | none | Z/J; R/L | high: toy | pass | Adds initial `J`; toy category. | accept |  |
| 55 | jachetă | jacheta | J | clothing | noun | strong | J | none | initial | 3 | simple | none | Z/J | high: jacket | pass | Adds initial `J`; clothing category. | accept |  |
| 56 | pijama | pijama | P | clothing | noun | strong | J | none | medial | 3 | simple | none | Z/J | high: pajamas | pass | Improves contains-only `J`; canonical `P`. | accept |  |
| 57 | păianjen | paianjen | P | animal/insect | noun | good | J | none | medial | 3 | simple | none | Z/J | medium: spider | caution | Improves contains-only `J`; canonical `P`. | needs revision | Some children may find spiders frightening; image must be friendly if kept. |
| 58 | cojoc | cojoc | C | clothing | noun | weak | J | none | medial | 2 | simple | none | Z/J | medium: sheepskin coat | pass | Improves contains-only `J`; canonical `C`. | reject | Archaic/regional feel for many children; not a strong age-4-to-6 word. |
| 59 | jder | jder | J | animal | noun | weak | J | D; R | cluster | 1 | complex | `jd`, final `dr` feel | Z/J; R/L; T/D | low: marten | pass | Adds cluster `J`. | reject | Obscure animal for the target age; do not pad `J`. |
| 60 | ceapă | ceapa | C | food | noun | strong | CE/CI | none | initial CE | 2 | simple | none | CE/CI vs Ș | high: onion | pass | Adds watchlist initial `CE`; canonical `C`. | accept |  |
| 61 | cerc | cerc | C | toy/shape/object | noun | good | CE/CI | R | initial CE; final R | 1 | moderate | `rc` coda | CE/CI vs Ș; R/L | medium: hoop/circle | pass | Adds watchlist initial `CE`; canonical `C`. | needs revision | Image brief must choose a hoop/ring, not an abstract drawn circle. |
| 62 | cireșe | cirese | C | food/fruit | noun | strong | CE/CI | Ș | initial CI; medial Ș | 3 | simple | none | CE/CI vs Ș; S/Ș | high: cherries | pass | Adds watchlist initial `CI` and secondary `Ș`; canonical `C`. | accept |  |
| 63 | ciorap | ciorap | C | clothing | noun | strong | CE/CI | R | initial CI; medial R | 2 | simple | none | CE/CI vs Ș; R/L | high: sock | pass | Adds watchlist initial `CI`; canonical `C`. | accept |  |
| 64 | ciupercă | ciuperca | C | food/nature | noun | good | CE/CI | R | initial CI; medial R | 3 | simple | none | CE/CI vs Ș; R/L | high: mushroom | caution | Adds watchlist initial `CI`; canonical `C`. | needs revision | Food/safety context should be reviewed because wild mushrooms can imply danger. |
| 65 | bicicletă | bicicleta | B | vehicle/toy | noun | strong | CE/CI | Ț | medial CI; final-ish Ț | 4 | complex | `cl` | CE/CI vs Ș; Ț/S | high: bicycle | pass | Improves watchlist contains `CI`; canonical `B`. | accept |  |
| 66 | geam | geam | G | household object | noun | strong | GE/GI | none | initial GE | 1 | simple | none | GE/GI vs J | high: window | pass | Adds watchlist initial `GE`; canonical `G`. | accept |  |
| 67 | gem | gem | G | food | noun | strong | GE/GI | none | initial GE | 1 | simple | none | GE/GI vs J | high: jam jar | pass | Adds watchlist initial `GE`; canonical `G`. | accept |  |
| 68 | girafă | girafa | G | animal | noun | strong | GE/GI | R; F | initial GI; medial R; medial F | 3 | simple | none | GE/GI vs J; R/L; F/V | high: giraffe | pass | Adds watchlist initial `GI`; canonical `G`. | accept |  |
| 69 | deget | deget | D | body part | noun | strong | GE/GI | D; T | medial GE; final T | 2 | simple | none | GE/GI vs J; T/D | high: finger | pass | Improves watchlist contains `GE`; canonical `D`. | accept |  |

## Batch 3 Input Notes

The pilot audit and worksheet are complete. Batch 3 and later should treat this as production preparation: any content implemented from this worksheet must be production-ready once it enters manifests or public assets.

Before production content is added, Batch 3 should decide whether speech-target metadata stays worksheet-only or becomes optional production metadata. The current worksheet suggests these fields are useful for review, but it does not prove they all belong in `content/ro/words-<letter>.json`.

The first production content slice should select a smaller subset from the accepted rows. A balanced starting subset would include:

- simple initial examples for `R`, `S`, `Ș`, `Ț`, `Z`, and `J`;
- a few high-value contains-only examples such as `ușă`, `coș`, `față`, `braț`, `buză`, `pijama`, or `deget`;
- only one or two cluster/advanced examples until the content metadata strategy is settled.

Do not move rejected candidates into production without deliberately changing this worksheet and documenting why.
