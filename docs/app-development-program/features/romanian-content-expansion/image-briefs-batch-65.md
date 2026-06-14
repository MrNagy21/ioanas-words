# Batch 65 Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 65.

Status: complete; human accepted all cells; promoted in Batch 66.

Last updated: 2026-06-13.

## Scope Guard

Batch 65 is review-only. It did not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Batch 66 later promoted all human-accepted cells and revised planned `tacâm` to the more usual plural production word `tacâmuri`.

The planned source slice is `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-64.md`.

## Global Image Requirements

- refined, lightly dimensional pixel art compatible with the current production pack;
- one centered subject per square cell;
- full square background or transparency, with no gutters, side bars, rectangular panels, or cut-background artifacts inside cells;
- subject must fit comfortably inside the inscribed circle of each square cell so circular UI masks clip only background;
- no labels, captions, text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, adult/business framing, or confusing extra objects;
- use varied soft colors and local-color outlines;
- compare against the production reference direction from `docs/image-pipeline.md`, including recent accepted household, clothing, animal, vehicle, school/object, and nature icons such as `biberon`, `borcan`, `brad`, `bluză`, `bancă`, `sticlă`, `șină`, `tren`, `tractor`, `medalie`, `cabană`, and `pădure`.

## Contact Sheet

Review contact sheet:

- `assets/image-sources/ro/batch-65/contact-sheet.png`

The sheet is ordered row-major according to the table below. The cells are intentionally unlabeled; use this table for review mapping.

Comparison sheet:

- `assets/image-sources/ro/batch-65/comparison-sheet.png`

The comparison sheet mixes representative existing production assets with selected Batch 65 cells for style/scale review only. It is not a crop source for production promotion.

## Review Notes

Initial visual check:

- all `15` cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, or watermarks;
- all cells use full panel backgrounds and generous gutters;
- the overall style is close to the current refined pixel-art production direction;
- subjects are generally padded for circular UI masks;
- cell `11` / `șurubelniță` is diagonal and must receive careful circular-mask QA if accepted;
- the generated sheet is `1536 x 1024 px`, so Batch 66 must crop and normalize accepted cells carefully into true `256 x 256 px` square assets before any promotion.

Human review attention points:

- cell `1` / `bibliotecă`: confirm it reads as a bookcase/bookshelf, not a public building, classroom, or software/library abstraction;
- cell `2` / `radiator`: confirm it reads as a home heating radiator, not a car part or technical device;
- cell `3` / `sacou`: confirm it reads as a garment and not generic `jachetă` or adult office/business framing;
- cell `4` / `șoim`: confirm bird species cues are strong enough and the image is not scary or predatory;
- cell `5` / `ștampilă`: confirm it is a rubber stamp object with no letters or readable imprint;
- cell `6` / `șezlong`: confirm the lounge chair stays simple and not dominated by beach scenery;
- cell `7` / `tacâmuri`: confirm the cutlery set is safe-looking and clear without text or restaurant clutter;
- cell `8` / `țarc`: confirm it reads as a child-safe playpen/fence, not a trap, cage, or confinement scene;
- cell `9` / `țiglă`: confirm it reads as roof tile(s), not a whole roof or house duplicate;
- cell `10` / `viespe`: confirm it is distinct from `albină` and not threatening;
- cell `11` / `șurubelniță`: confirm the long tool stays inside the circular safe area and does not look sharp or unsafe;
- cell `12` / `joben`: confirm it is distinct from `pălărie` and not a magician/person scene;
- cell `13` / `jantă`: confirm it reads as a wheel rim, not a full wheel/tire/car;
- cell `14` / `coțofană`: confirm the magpie-like long-tail black-and-white bird is clear and not just a generic bird;
- cell `15` / `jardinieră`: confirm it reads as a long planter box and not the existing round `ghiveci`.

Brand/style comparison note:

- `comparison-sheet.png` was generated from existing production references plus selected Batch 65 cells.
- The Batch 65 cells are broadly compatible with the existing pack in palette, outline weight, dimensionality, and subject scale.
- The most important human-review risks are semantic rather than style-only: `sacou` versus generic jacket, `șoim` and `coțofană` bird recognizability, `țarc` as playpen/fence rather than cage, `viespe` versus `albină`, `joben` versus generic hat, and `jantă` versus full wheel/tire.

## Briefs

| # | Stable ID | Display | Planned image path | Alt text | Category | One clear subject | Safety and ambiguity notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ro-b-biblioteca` | `bibliotecă` | `/images/ro/b/ro-b-biblioteca.webp` | `O bibliotecă cu cărți colorate.` | `school` | One simple bookcase/bookshelf with a few colorful books. | Use furniture sense only; no room scene, public library building, readable book text, software meaning, or clutter. |
| 2 | `ro-r-radiator` | `radiator` | `/images/ro/r/ro-r-radiator.webp` | `Un radiator de casă.` | `household` | One home heating radiator with simple fins. | No car radiator, pipes clutter, hot-danger symbol, technical cutaway, or text. |
| 3 | `ro-s-sacou` | `sacou` | `/images/ro/s/ro-s-sacou.webp` | `Un sacou simplu.` | `clothing` | One simple blazer/jacket garment. | No person, office, money, briefcase, logo, text, or adult business framing; keep distinct from generic `jachetă`. |
| 4 | `ro-sh-soim` | `șoim` | `/images/ro/ș/ro-sh-soim.webp` | `Un șoim calm.` | `animal` | One calm falcon/hawk-like bird in side view. | Clear beak and wing shape; no hunting prey, attack pose, scary mood, or extra animals. |
| 5 | `ro-sh-stampila` | `ștampilă` | `/images/ro/ș/ro-sh-stampila.webp` | `O ștampilă simplă.` | `school` | One rubber stamp object with blank base. | No readable imprint, official seal, office paperwork, logo, ink mess, letters, or numbers. |
| 6 | `ro-sh-sezlong` | `șezlong` | `/images/ro/ș/ro-sh-sezlong.webp` | `Un șezlong simplu.` | `household` | One simple lounge chair. | No adult vacation scene, beach clutter, brand pattern, person, or text. |
| 7 | `ro-t-tacamuri` | `tacâmuri` | `/images/ro/t/ro-t-tacamuri.webp` | `Tacâmuri cu lingură și furculiță.` | `household` | One small cutlery set, preferably fork and spoon with a rounded knife if included. | No restaurant setting, plate text, sharp-danger framing, poultry-parts sense, or clutter. |
| 8 | `ro-tz-tarc` | `țarc` | `/images/ro/ț/ro-tz-tarc.webp` | `Un țarc de joacă simplu.` | `household` | One child-safe playpen or small fenced enclosure. | No trapped animal, cage bars, locked gate, confinement mood, or scary framing. |
| 9 | `ro-tz-tigla` | `țiglă` | `/images/ro/ț/ro-tz-tigla.webp` | `O țiglă roșie.` | `household` | One or a few red/orange roof tiles. | No full house scene, construction hazard, roof duplicate of `acoperiș`, letters, or text. |
| 10 | `ro-v-viespe` | `viespe` | `/images/ro/v/ro-v-viespe.webp` | `O viespe prietenoasă.` | `animal` | One friendly wasp with yellow-black body and narrow waist. | Distinct from existing `albină`; no sting attack, fear marks, swarm, scary mood, or text. |
| 11 | `ro-sh-surubelnita` | `șurubelniță` | `/images/ro/ș/ro-sh-surubelnita.webp` | `O șurubelniță colorată.` | `household` | One static screwdriver with colorful handle. | Keep the long tool circle-safe; no hand, screw action, sharp pose, toolbox clutter, logo, injury cue, or text. |
| 12 | `ro-j-joben` | `joben` | `/images/ro/j/ro-j-joben.webp` | `Un joben negru.` | `clothing` | One black top hat. | Keep distinct from `pălărie`; no magician, rabbit, person, formal adult scene, logo, or text. |
| 13 | `ro-j-janta` | `jantă` | `/images/ro/j/ro-j-janta.webp` | `O jantă de roată.` | `vehicle` | One clean wheel rim. | Not a full car wheel, tire, `roată`, or car; no logo, racing context, repair scene, or text. |
| 14 | `ro-c-cotofana` | `coțofană` | `/images/ro/c/ro-c-cotofana.webp` | `O coțofană alb-negru.` | `animal` | One magpie-like black-and-white bird with long tail. | No stealing-object joke, dark mood, crowded branch, generic-bird ambiguity, or text. |
| 15 | `ro-j-jardiniera` | `jardinieră` | `/images/ro/j/ro-j-jardiniera.webp` | `O jardinieră cu flori.` | `household` | One long rectangular planter box with simple flowers or green plants. | Distinct from round `ghiveci`; no window/building clutter, readable labels, or busy garden scene. |

## Generation Prompt

```txt
Create one unlabeled 5-column by 3-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 15 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject. Long or wide objects should be centered and scaled down so they remain safe inside a circular thumbnail.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, adult/business framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. bookcase/bookshelf: one simple bookcase/bookshelf with a few colorful books; furniture sense only, no room scene, public library building, readable book text, software meaning, or clutter.
2. home heating radiator: one home radiator with simple fins; no car radiator, pipes clutter, hot-danger symbol, technical cutaway, or text.
3. blazer jacket garment: one simple blazer/sacou garment, front view; no person, office, money, briefcase, logo, text, or adult business framing; keep distinct from generic jacket.
4. falcon/hawk: one calm falcon-like bird in side view with clear beak and wing shape; no hunting prey, attack pose, scary mood, or extra animals.
5. rubber stamp: one rubber stamp object with a blank base; no readable imprint, official seal, office paperwork, logo, ink mess, letters, or numbers.
6. lounge chair: one simple chaise lounge / lounge chair, centered; no adult vacation scene, beach clutter, brand pattern, person, or text.
7. cutlery set: one small fork and spoon set, with a rounded knife only if safe and clear; no restaurant setting, plate text, sharp-danger framing, poultry-parts sense, or clutter.
8. child-safe playpen: one simple playpen or small fenced enclosure; no trapped animal, cage bars, locked gate, confinement mood, or scary framing.
9. roof tiles: one or a few red/orange roof tiles; no full house scene, construction hazard, roof duplicate, letters, or text.
10. wasp: one friendly wasp with yellow-black body and narrow waist, distinct from a bee; no sting attack, fear marks, swarm, scary mood, or text.
11. screwdriver: one static screwdriver with colorful handle, centered and scaled to be circle-safe; no hand, screw action, sharp pose, toolbox clutter, logo, injury cue, or text.
12. top hat: one black top hat, clear silhouette; no magician, rabbit, person, formal adult scene, logo, or text.
13. wheel rim: one clean wheel rim only, not a full tire or car wheel; no car logo, racing context, repair scene, or text.
14. magpie: one black-and-white magpie-like bird with long tail; no stealing-object joke, dark mood, crowded branch, generic-bird ambiguity, or text.
15. rectangular planter box: one long rectangular planter box with simple flowers or green plants; distinct from round flower pot, no window/building clutter, readable labels, or busy garden scene.
```

Generation metadata:

- generation mode: built-in `image_gen` tool;
- generated source path: `/Users/darius/.codex/generated_images/019eb5dc-2504-7cc1-8942-b7f414803d47/ig_070850a33670895a016a2cde0ddb6c8191b129bb6c5c3afbd0.png`;
- workspace review copy: `assets/image-sources/ro/batch-65/contact-sheet.png`;
- generated date: 2026-06-13;
- reviewer status: human accepted all `15` cells;
- production status: promoted in Batch 66.

## Batch 66 Promotion Result

Batch 66 promoted all accepted cells and records the production details in `production-promotion-batch-66.md`.
