# Batch 98 Image Briefs: Slice 6 C/Ș Top-Up

Batch: Romanian Content Expansion Batch 98.

Status: image-brief, generated-image, and circular-mask QA record for Batch 97 Slice 6.

Last updated: 2026-06-28.

## Scope Guard

Batch 98 created and reviewed images for the `15` active Slice 6 rows from `production-slice-planning-batch-97.md`, preserving Batch 76 order:

`coif`, `ceafă`, `puf`, `șifonier`, `cufăr`, `trifoi`, `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`, `brioșă`, `coșuleț`

The human waived the separate image-approval stop for this orchestrator run. QA remained required before promotion: generated images were semantically reviewed, safety-checked, inspected in a circular mask, and verified as final `256 x 256 px` WebP assets.

Batch 98 did not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Ordered Row Mapping

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `coif` | `ro-c-coif` | `/images/ro/c/ro-c-coif.webp` |
| 2 | 1 | 2 | `ceafă` | `ro-c-ceafa` | `/images/ro/c/ro-c-ceafa.webp` |
| 3 | 1 | 3 | `puf` | `ro-p-puf` | `/images/ro/p/ro-p-puf.webp` |
| 4 | 1 | 4 | `șifonier` | `ro-sh-sifonier` | `/images/ro/ș/ro-sh-sifonier.webp` |
| 5 | 1 | 5 | `cufăr` | `ro-c-cufar` | `/images/ro/c/ro-c-cufar.webp` |
| 6 | 2 | 1 | `trifoi` | `ro-t-trifoi` | `/images/ro/t/ro-t-trifoi.webp` |
| 7 | 2 | 2 | `șuncă` | `ro-sh-sunca` | `/images/ro/ș/ro-sh-sunca.webp` |
| 8 | 2 | 3 | `șnițel` | `ro-sh-snitel` | `/images/ro/ș/ro-sh-snitel.webp` |
| 9 | 2 | 4 | `șalupă` | `ro-sh-salupa` | `/images/ro/ș/ro-sh-salupa.webp` |
| 10 | 2 | 5 | `șah` | `ro-sh-sah` | `/images/ro/ș/ro-sh-sah.webp` |
| 11 | 3 | 1 | `șevalet` | `ro-sh-sevalet` | `/images/ro/ș/ro-sh-sevalet.webp` |
| 12 | 3 | 2 | `șofer` | `ro-sh-sofer` | `/images/ro/ș/ro-sh-sofer.webp` |
| 13 | 3 | 3 | `șotron` | `ro-sh-sotron` | `/images/ro/ș/ro-sh-sotron.webp` |
| 14 | 3 | 4 | `brioșă` | `ro-b-briosa` | `/images/ro/b/ro-b-briosa.webp` |
| 15 | 3 | 5 | `coșuleț` | `ro-c-cosulet` | `/images/ro/c/ro-c-cosulet.webp` |

## Accepted Image Decisions

| Stable ID | Display | Romanian alt text | Accepted visual sense | Risk handled |
| --- | --- | --- | --- | --- |
| `ro-c-coif` | `coif` | `Un coif de petrecere` | Colorful party paper cone hat. | Avoided helmet, armor, sharp cone, and shame/dunce cue. |
| `ro-c-ceafa` | `ceafă` | `Ceafa unui copil văzută din spate` | Back of a child head/neck from behind. | Avoided medical, injury, massage, and close-up skin crop. |
| `ro-p-puf` | `puf` | `Un puf moale de pană` | Soft feather/fluff cue. | Avoided smoke, dust, cloud, mold, and abstract blob. |
| `ro-sh-sifonier` | `șifonier` | `Un șifonier` | Wooden wardrobe/closet. | Avoided mirror reflection, brand, and room clutter. |
| `ro-c-cufar` | `cufăr` | `Un cufăr de lemn` | Wooden storage chest. | Avoided pirate, coins, weapons, and scary attic mood. |
| `ro-t-trifoi` | `trifoi` | `Un trifoi verde` | Green clover leaf. | Kept simple and readable at wheel size. |
| `ro-sh-sunca` | `șuncă` | `Felii de șuncă pe o farfurie` | Pink ham slices on a plate. | Kept distinct from `jambon`, with no packaging or labels. |
| `ro-sh-snitel` | `șnițel` | `Un șnițel pe o farfurie` | Breaded cutlet on a plate. | Avoided raw meat, knife, and adult dining scene. |
| `ro-sh-salupa` | `șalupă` | `O șalupă pe apă` | Small motor boat on calm water. | Kept distinct from sailboat and large ship rows. |
| `ro-sh-sah` | `șah` | `O tablă de șah cu piese` | Chess board with pieces. | Avoided letters, numbers, flags, and combat framing. |
| `ro-sh-sevalet` | `șevalet` | `Un șevalet cu hârtie albă` | Art easel with blank paper. | Avoided writing and logos. |
| `ro-sh-sofer` | `șofer` | `Un șofer într-o mașină` | Friendly driver in a simple car. | Avoided accident, police, emergency, and brand cues. |
| `ro-sh-sotron` | `șotron` | `Un șotron desenat pe jos` | Hopscotch grid on pavement. | Avoided numbers and letters. |
| `ro-b-briosa` | `brioșă` | `O brioșă` | Plain muffin/cupcake. | Avoided candle, birthday text, and wrapper brand. |
| `ro-c-cosulet` | `coșuleț` | `Un coșuleț mic` | Small woven basket. | Kept distinct from trash basket and large fruit-basket rows. |

## Generation And Processing

Source review sheet:

- `assets/image-sources/ro/batch-98/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-98/final-sources/`
- `assets/image-sources/ro/batch-98/work-128/`
- `assets/image-sources/ro/batch-98/optimized-preview.png`
- `assets/image-sources/ro/batch-98/optimized-circular-preview.png`

Processing flow:

- generated one ordered, unlabeled `5 x 3` contact sheet in the Batch 97 order;
- detected the clean row/column cell blocks and cropped fixed row-major cells;
- normalized each crop through the established `128 px` / `96` color pixel-art workflow;
- saved final `256 x 256 px` lossless WebP assets under canonical public image paths;
- rendered circular previews before production promotion.

Circular-mask corrections:

- `ro-c-coif` scaled to `0.88`;
- `ro-sh-sifonier` scaled to `0.86`;
- `ro-c-cufar` scaled to `0.90`;
- `ro-sh-sah` scaled to `0.78`;
- `ro-sh-sevalet` scaled to `0.88`;
- `ro-sh-sofer` scaled to `0.88`;
- `ro-c-cosulet` scaled to `0.90`.

The corrected circular preview showed no meaningful subject clipping. The scene and long-object cells, especially `șalupă`, `șah`, `șevalet`, `șofer`, and `șotron`, remain readable inside circular wheel slots.

## Verification

Batch 98 image metadata check:

```txt
ro-c-coif        256x256   1518
ro-c-ceafa       256x256   1992
ro-p-puf         256x256   3818
ro-sh-sifonier   256x256   1906
ro-c-cufar       256x256   2148
ro-t-trifoi      256x256   3398
ro-sh-sunca      256x256   2420
ro-sh-snitel     256x256   3246
ro-sh-salupa     256x256   1998
ro-sh-sah        256x256   1612
ro-sh-sevalet    256x256   1606
ro-sh-sofer      256x256   2144
ro-sh-sotron     256x256   2830
ro-b-briosa      256x256   2898
ro-c-cosulet     256x256   3478
```

All Batch 98 final assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.
