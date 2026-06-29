# Batch 94 Image Briefs: Slice 5 F/Ș Top-Up

Batch: Romanian Content Expansion Batch 94.

Status: image-brief and generated-image QA record for Batch 93 Slice 5.

Last updated: 2026-06-28.

## Scope Guard

Batch 94 created and reviewed images for the `15` active Slice 5 rows from `production-slice-planning-batch-93.md`, preserving Batch 76 order:

`șuviță`, `movilă`, `servietă`, `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`, `afine`, `bufniță`, `cartof`

The human waived the separate image-approval stop for this orchestrator run. This did not waive QA: every generated crop still required semantic review, child-safety review, circular-mask inspection, and `256 x 256 px` WebP verification before production promotion.

Batch 94 did not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Ordered Row Mapping

The generated review contact sheet used a `5` columns x `3` rows layout, equal square cells, unlabeled, in this exact row-major order:

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `șuviță` | `ro-sh-suvita` | `/images/ro/ș/ro-sh-suvita.webp` |
| 2 | 1 | 2 | `movilă` | `ro-m-movila` | `/images/ro/m/ro-m-movila.webp` |
| 3 | 1 | 3 | `servietă` | `ro-s-servieta` | `/images/ro/s/ro-s-servieta.webp` |
| 4 | 1 | 4 | `farfurie` | `ro-f-farfurie` | `/images/ro/f/ro-f-farfurie.webp` |
| 5 | 1 | 5 | `fereastră` | `ro-f-fereastra` | `/images/ro/f/ro-f-fereastra.webp` |
| 6 | 2 | 1 | `făină` | `ro-f-faina` | `/images/ro/f/ro-f-faina.webp` |
| 7 | 2 | 2 | `fermă` | `ro-f-ferma` | `/images/ro/f/ro-f-ferma.webp` |
| 8 | 2 | 3 | `frate` | `ro-f-frate` | `/images/ro/f/ro-f-frate.webp` |
| 9 | 2 | 4 | `fotografie` | `ro-f-fotografie` | `/images/ro/f/ro-f-fotografie.webp` |
| 10 | 2 | 5 | `foarfecă` | `ro-f-foarfeca` | `/images/ro/f/ro-f-foarfeca.webp` |
| 11 | 3 | 1 | `fântână` | `ro-f-fantana` | `/images/ro/f/ro-f-fantana.webp` |
| 12 | 3 | 2 | `focă` | `ro-f-foca` | `/images/ro/f/ro-f-foca.webp` |
| 13 | 3 | 3 | `afine` | `ro-a-afine` | `/images/ro/a/ro-a-afine.webp` |
| 14 | 3 | 4 | `bufniță` | `ro-b-bufnita` | `/images/ro/b/ro-b-bufnita.webp` |
| 15 | 3 | 5 | `cartof` | `ro-c-cartof` | `/images/ro/c/ro-c-cartof.webp` |

## Image Brief Decisions

| Stable ID | Display | Romanian alt text | Category | Accepted visual sense | Image-brief risks handled |
| --- | --- | --- | --- | --- | --- |
| `ro-sh-suvita` | `șuviță` | `O șuviță de păr` | `body` | A simple child-safe hair lock cue with partial head/hair context. | Avoided abstract strand-only mark; kept enough context to read as hair without making a portrait row. |
| `ro-m-movila` | `movilă` | `O movilă mică de pământ` | `nature` | A small rounded earth mound. | Avoided mountain/hill scale and cluttered landscape. |
| `ro-s-servieta` | `servietă` | `O servietă de școală` | `school` | A child-friendly school satchel/briefcase. | Avoided adult-office laptop bag, branding, labels, and text. |
| `ro-f-farfurie` | `farfurie` | `O farfurie simplă` | `household` | One plain plate. | Kept object simple and not confused with bowl/cup. |
| `ro-f-fereastra` | `fereastră` | `O fereastră cu perdele` | `household` | A window with curtains. | Avoided a whole house facade and text/signs. |
| `ro-f-faina` | `făină` | `Un bol cu făină` | `food` | A bowl of white flour. | Avoided sugar/salt ambiguity by using mound-in-bowl baking cue. |
| `ro-f-ferma` | `fermă` | `O fermă cu hambar` | `nature` | A simple farm with barn cue. | Kept scene compact for wheel size. |
| `ro-f-frate` | `frate` | `Un frate zâmbitor` | `family` | One friendly child figure. | Person row kept neutral, fully clothed, calm, and age-appropriate. |
| `ro-f-fotografie` | `fotografie` | `O fotografie într-o ramă` | `household` | A framed photo. | Avoided readable text, faces that dominate, camera-device confusion, and brand marks. |
| `ro-f-foarfeca` | `foarfecă` | `O foarfecă pentru hârtie` | `school` | Rounded child-safe scissors. | Avoided weapon framing; locally padded for circle safety. |
| `ro-f-fantana` | `fântână` | `O fântână cu apă` | `nature` | A simple safe fountain/well-like water feature. | Avoided deep-hole danger emphasis and locally padded the structure. |
| `ro-f-foca` | `focă` | `O focă prietenoasă` | `animal` | A friendly seal. | Avoided aggressive or circus/performance framing. |
| `ro-a-afine` | `afine` | `Afine albastre` | `food` | Blueberries in a compact cluster. | Avoided grapes and generic blue dots by using leaf/berry cue. |
| `ro-b-bufnita` | `bufniță` | `O bufniță prietenoasă` | `animal` | A calm owl. | Locally padded to keep ears/wings inside the circular mask. |
| `ro-c-cartof` | `cartof` | `Un cartof` | `food` | One potato. | Avoided rocks and multiple vegetables by keeping a simple tuber silhouette. |

## Generation And Processing

Source review sheet:

- `assets/image-sources/ro/batch-94/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-94/final-sources/`
- `assets/image-sources/ro/batch-94/work-128/`
- `assets/image-sources/ro/batch-94/final-preview.png`
- `assets/image-sources/ro/batch-94/circular-preview.png`
- `assets/image-sources/ro/batch-94/optimized-preview.png`
- `assets/image-sources/ro/batch-94/optimized-circular-preview.png`

Processing flow:

- generated one ordered, unlabeled `5 x 3` contact sheet in the Batch 93 order;
- cropped the cells in fixed row-major order;
- normalized each crop onto a square canvas;
- processed through the same refined `128 px` / `96` color pixel-art workflow used by the previous production slices;
- upscaled to final `256 x 256 px` lossless WebP assets;
- inspected circular-mask previews before production promotion.

Circular-mask corrections:

- `ro-sh-suvita` scaled to `0.88`;
- `ro-f-fereastra` scaled to `0.84`;
- `ro-f-ferma` scaled to `0.90`;
- `ro-f-foarfeca` scaled to `0.78`;
- `ro-f-fantana` scaled to `0.90`;
- `ro-b-bufnita` scaled to `0.82`.

The corrected circular preview showed no meaningful subject clipping. Long or edge-heavy cells, especially `foarfecă`, `fereastră`, `fântână`, and `bufniță`, retained enough margin for circular wheel slots.

## Verification

Batch 94 image metadata check:

```txt
ro-sh-suvita       256x256   8796
ro-m-movila        256x256   10708
ro-s-servieta      256x256   10026
ro-f-farfurie      256x256   10622
ro-f-fereastra     256x256   7098
ro-f-faina         256x256   10158
ro-f-ferma         256x256   8588
ro-f-frate         256x256   10606
ro-f-fotografie    256x256   9956
ro-f-foarfeca      256x256   7164
ro-f-fantana       256x256   8886
ro-f-foca          256x256   11188
ro-a-afine         256x256   10756
ro-b-bufnita       256x256   7960
ro-c-cartof        256x256   10300
```

All Batch 94 final assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.
