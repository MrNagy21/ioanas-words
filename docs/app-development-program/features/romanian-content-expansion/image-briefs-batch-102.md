# Batch 102 Image Briefs: Slice 7 T/L Top-Up

Batch: Romanian Content Expansion Batch 102.

Status: image-brief, generated-image, and circular-mask QA record for Batch 101 Slice 7.

Last updated: 2026-06-29.

## Scope Guard

Batch 102 created and reviewed images for the `15` active Slice 7 rows from `production-slice-planning-batch-101.md`, preserving Batch 76 order:

`tuș`, `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`, `lemn`, `lacăt`, `libelulă`, `lift`

The human waived the separate image-approval stop for this orchestrator run. QA remained required before promotion: generated images were semantically reviewed, safety-checked, inspected in a circular mask, and verified as final `256 x 256 px` WebP assets.

Batch 102 did not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Ordered Row Mapping

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `tuș` | `ro-t-tus` | `/images/ro/t/ro-t-tus.webp` |
| 2 | 1 | 2 | `trotinetă` | `ro-t-trotineta` | `/images/ro/t/ro-t-trotineta.webp` |
| 3 | 1 | 3 | `trusă` | `ro-t-trusa` | `/images/ro/t/ro-t-trusa.webp` |
| 4 | 1 | 4 | `tub` | `ro-t-tub` | `/images/ro/t/ro-t-tub.webp` |
| 5 | 1 | 5 | `turn` | `ro-t-turn` | `/images/ro/t/ro-t-turn.webp` |
| 6 | 2 | 1 | `tunel` | `ro-t-tunel` | `/images/ro/t/ro-t-tunel.webp` |
| 7 | 2 | 2 | `tăiței` | `ro-t-taitei` | `/images/ro/t/ro-t-taitei.webp` |
| 8 | 2 | 3 | `tufiș` | `ro-t-tufis` | `/images/ro/t/ro-t-tufis.webp` |
| 9 | 2 | 4 | `telecomandă` | `ro-t-telecomanda` | `/images/ro/t/ro-t-telecomanda.webp` |
| 10 | 2 | 5 | `termos` | `ro-t-termos` | `/images/ro/t/ro-t-termos.webp` |
| 11 | 3 | 1 | `tricicletă` | `ro-t-tricicleta` | `/images/ro/t/ro-t-tricicleta.webp` |
| 12 | 3 | 2 | `lemn` | `ro-l-lemn` | `/images/ro/l/ro-l-lemn.webp` |
| 13 | 3 | 3 | `lacăt` | `ro-l-lacat` | `/images/ro/l/ro-l-lacat.webp` |
| 14 | 3 | 4 | `libelulă` | `ro-l-libelula` | `/images/ro/l/ro-l-libelula.webp` |
| 15 | 3 | 5 | `lift` | `ro-l-lift` | `/images/ro/l/ro-l-lift.webp` |

## Accepted Image Decisions

| Stable ID | Display | Romanian alt text | Accepted visual sense | Risk handled |
| --- | --- | --- | --- | --- |
| `ro-t-tus` | `tuș` | `O sticluță cu tuș și o pensulă` | Drawing ink bottle with brush and ink drop. | Avoided makeup, tattoo, readable label, and spill mess. |
| `ro-t-trotineta` | `trotinetă` | `O trotinetă pentru copii` | Child kick scooter. | No rider, brand, or traffic danger. |
| `ro-t-trusa` | `trusă` | `O trusă de creioane` | School pencil/art case. | Avoided medical kit, red cross, needles, and adult tools. |
| `ro-t-tub` | `tub` | `Un tub de vopsea` | Plain paint squeeze tube. | Avoided medical/plumbing/lab/toothpaste-brand cues and text. |
| `ro-t-turn` | `turn` | `Un turn simplu` | Friendly simple tower. | Avoided flags, war, prison, cross, scary castle, and collapse. |
| `ro-t-tunel` | `tunel` | `Un tunel cu drum` | Tunnel opening with road. | Avoided crash, warning signs, scary darkness, and train hazard. |
| `ro-t-taitei` | `tăiței` | `Tăiței într-un bol` | Noodles in a bowl. | Avoided packaging and text. |
| `ro-t-tufis` | `tufiș` | `Un tufiș verde` | Compact green bush. | Kept distinct from tree and flower. |
| `ro-t-telecomanda` | `telecomandă` | `O telecomandă simplă` | Remote with abstract button shapes. | Avoided readable letters/numbers, brands, and logos. |
| `ro-t-termos` | `termos` | `Un termos` | Thermos bottle. | Avoided brand, text, and logo. |
| `ro-t-tricicleta` | `tricicletă` | `O tricicletă pentru copii` | Child tricycle. | Avoided rider fall, traffic, and brand. |
| `ro-l-lemn` | `lemn` | `O bucată de lemn` | One log/piece of wood. | Avoided flooring, stick-only, and chest confusion. |
| `ro-l-lacat` | `lacăt` | `Un lacăt` | Padlock. | Avoided prison/security alarm vibe and trapped-person cue. |
| `ro-l-libelula` | `libelulă` | `O libelulă` | Friendly dragonfly. | Kept non-scary and circle-safe. |
| `ro-l-lift` | `lift` | `Un lift cu uși închise` | Elevator doors. | Avoided floor numbers, letters, emergency sign, and trapped person. |

## Generation And Processing

Source review sheet:

- `assets/image-sources/ro/batch-102/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-102/final-sources/`
- `assets/image-sources/ro/batch-102/work-128/`
- `assets/image-sources/ro/batch-102/optimized-preview.png`
- `assets/image-sources/ro/batch-102/optimized-circular-preview.png`

Circular-mask corrections:

- `ro-t-tus` scaled to `0.78`;
- `ro-t-trotineta` scaled to `0.84`;
- `ro-t-turn` scaled to `0.92`;
- `ro-t-tricicleta` scaled to `0.80`;
- `ro-l-libelula` scaled to `0.78`;
- `ro-l-lift` scaled to `0.86`.

The corrected circular preview showed no meaningful subject clipping. The long or edge-heavy cells `tuș`, `trotinetă`, `tricicletă`, `libelulă`, and `lift` retained enough safe margin for circular wheel slots.

## Verification

Batch 102 image metadata check:

```txt
ro-t-tus            256x256   1456
ro-t-trotineta      256x256   2480
ro-t-trusa          256x256   3274
ro-t-tub            256x256   3284
ro-t-turn           256x256   3184
ro-t-tunel          256x256   2790
ro-t-taitei         256x256   3704
ro-t-tufis          256x256   2486
ro-t-telecomanda    256x256   3550
ro-t-termos         256x256   1476
ro-t-tricicleta     256x256   1698
ro-l-lemn           256x256   2008
ro-l-lacat          256x256   1680
ro-l-libelula       256x256   2856
ro-l-lift           256x256   1534
```

All Batch 102 final assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.
