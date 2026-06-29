# Batch 90 Image Briefs: Slice 4 D/V Top-Up

Batch: Romanian Content Expansion Batch 90.

Status: image-brief document only for Batch 89 Slice 4; no production content added.

Last updated: 2026-06-28.

## Scope Guard

Batch 90 creates the image-brief document for Slice 4 from `production-slice-planning-batch-89.md` only. It does not add production JSON records, edit content manifests, generate a contact sheet, crop cells, optimize final WebP assets, change routes, change schema, change loaders, add placeholders, edit shared status docs, add speech-target production metadata, introduce database/auth/billing/admin scope, create clinical claims, or promote any image to child-facing production.

The future image work remains bounded to these `15` Slice 4 rows, preserving Batch 89 order:

`disc`, `diamant`, `dungă`, `dronă`, `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, `navă`

The human has waived the separate image approval gate for this orchestrator run. This waiver applies only to the extra approval stop that would otherwise separate this brief from the orchestrated image-generation/promotion flow. QA remains required before production promotion: generated images still need semantic review, brand consistency review, circular-mask inspection, final `256 x 256 px` WebP validation, content validation, and the normal route/admin/browser checks when rows are promoted.

## Ordered Row Mapping

If a later step creates a review contact sheet from this brief, use a `5` columns x `3` rows sheet, equal square cells, unlabeled, with row-major order exactly as follows:

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `disc` | `ro-d-disc` | `/images/ro/d/ro-d-disc.webp` |
| 2 | 1 | 2 | `diamant` | `ro-d-diamant` | `/images/ro/d/ro-d-diamant.webp` |
| 3 | 1 | 3 | `dungă` | `ro-d-dunga` | `/images/ro/d/ro-d-dunga.webp` |
| 4 | 1 | 4 | `dronă` | `ro-d-drona` | `/images/ro/d/ro-d-drona.webp` |
| 5 | 1 | 5 | `valiză` | `ro-v-valiza` | `/images/ro/v/ro-v-valiza.webp` |
| 6 | 2 | 1 | `vrabie` | `ro-v-vrabie` | `/images/ro/v/ro-v-vrabie.webp` |
| 7 | 2 | 2 | `vulcan` | `ro-v-vulcan` | `/images/ro/v/ro-v-vulcan.webp` |
| 8 | 2 | 3 | `val` | `ro-v-val` | `/images/ro/v/ro-v-val.webp` |
| 9 | 2 | 4 | `vâslă` | `ro-v-vasla` | `/images/ro/v/ro-v-vasla.webp` |
| 10 | 2 | 5 | `velier` | `ro-v-velier` | `/images/ro/v/ro-v-velier.webp` |
| 11 | 3 | 1 | `violetă` | `ro-v-violeta` | `/images/ro/v/ro-v-violeta.webp` |
| 12 | 3 | 2 | `vultur` | `ro-v-vultur` | `/images/ro/v/ro-v-vultur.webp` |
| 13 | 3 | 3 | `ventuză` | `ro-v-ventuza` | `/images/ro/v/ro-v-ventuza.webp` |
| 14 | 3 | 4 | `evantai` | `ro-e-evantai` | `/images/ro/e/ro-e-evantai.webp` |
| 15 | 3 | 5 | `navă` | `ro-n-nava` | `/images/ro/n/ro-n-nava.webp` |

## Per-Word Image Briefs

| Stable ID | Display | Planned image path | Romanian alt text | Category | One clear subject | Safety / ambiguity notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-d-disc` | `disc` | `/images/ro/d/ro-d-disc.webp` | `Un disc colorat` | `toy` | One colorful flat toy flying disc or plain circular play disc, centered, viewed slightly from above. | Toy/circular object sense only. Avoid CD, vinyl record, computer disk, anatomy, religious plate, train signal, competitive discus throw, athlete, field scene, logo, or text. |
| `ro-d-diamant` | `diamant` | `/images/ro/d/ro-d-diamant.webp` | `Un diamant strălucitor` | `household` | One simple faceted gemstone with bright highlights, enlarged enough to read at wheel size. | Keep non-luxury and child-safe. Avoid jewelry brand, ring setting, crown, money, treasure scene, sharp realistic sparkle, text, or excessive tiny facets. |
| `ro-d-dunga` | `dungă` | `/images/ro/d/ro-d-dunga.webp` | `O dungă pe o eșarfă` | `clothing` | One bold stripe on a simple scarf or fabric swatch, with enough surrounding cloth to make the stripe concrete. | Must not be a free-floating line. Avoid wound/skin crease, road mark, ruler line, abstract pattern, many stripes, barcode-like marks, or generic fabric without one dominant stripe. |
| `ro-d-drona` | `dronă` | `/images/ro/d/ro-d-drona.webp` | `O dronă mică` | `toy` | Small friendly generic quadcopter toy/gadget, centered, with four simple propellers and rounded body. | No surveillance framing, camera close-up, screen view, soldier, weapon, missile, explosion, camouflage, emergency, disaster, police/military color scheme, brand, or text. |
| `ro-v-valiza` | `valiză` | `/images/ro/v/ro-v-valiza.webp` | `O valiză` | `household` | Simple suitcase with handle and small wheels, three-quarter view, one clear object. | No travel stickers, logos, airport signs, passport text, brand marks, busy luggage pile, or person. Keep distinct from generic package. |
| `ro-v-vrabie` | `vrabie` | `/images/ro/v/ro-v-vrabie.webp` | `O vrabie` | `animal` | One small brown sparrow, calm and friendly, perched on a simple branch or standing on plain ground. | Avoid flock, nest scene, cage, dead bird, aggressive beak, excessive feather detail, text, or species features that make it read as another bird. |
| `ro-v-vulcan` | `vulcan` | `/images/ro/v/ro-v-vulcan.webp` | `Un vulcan simplu` | `nature` | Simple cone-shaped volcano with a tiny calm red/orange lava glow and pale sky background. | Educational nature icon only. Avoid disaster, destruction, ash storm, lightning, fire spreading, fleeing people, damaged houses, scary face, monster cue, or dark mood. |
| `ro-v-val` | `val` | `/images/ro/v/ro-v-val.webp` | `Un val albastru` | `nature` | One clear friendly blue sea or lake wave with a simple foam crest. | Wave sense only. Avoid abstract swirl, storm, tsunami, threatening wave, surfer, crowded seascape, generic water splash, fabric roll, or event-wave metaphor. |
| `ro-v-vasla` | `vâslă` | `/images/ro/v/ro-v-vasla.webp` | `O vâslă de lemn` | `vehicle` | One wooden oar or paddle, slightly diagonal but shortened/recentered so it fits fully inside the circular safe area. | Boat oar sense only. Avoid boat clutter, person, fishing gear, weapon-like pose, regional grape/grain sense, text, and corners clipped by the circular mask. |
| `ro-v-velier` | `velier` | `/images/ro/v/ro-v-velier.webp` | `Un velier cu pânze` | `vehicle` | Small sailboat with one or two clear sails on calm water, centered, mast and sail silhouette obvious. | Must stay distinct from `barcă`, `vapor`, and `navă`. Avoid flags, logos, numbers, racing marks, storm, pirate cues, engine/steamship cues, or crowded marina. |
| `ro-v-violeta` | `violetă` | `/images/ro/v/ro-v-violeta.webp` | `O violetă mov` | `nature` | Purple violet flower with green leaves, one clear blossom or a small tight cluster, centered. | Flower sense only, not color-only. Avoid generic daisy/rose shape, vase label, bouquet clutter, text, garden scene, or tiny botanical detail that disappears at wheel size. |
| `ro-v-vultur` | `vultur` | `/images/ro/v/ro-v-vultur.webp` | `Un vultur cu aripile deschise` | `animal` | Large bird with wings open, calm expression, perched or gliding, broad readable wing shape. | Avoid fierce predator framing, open talons attacking, carcass/prey, blood, heraldic emblem, national symbol, military symbol, shield, flag, or scary mood. |
| `ro-v-ventuza` | `ventuză` | `/images/ro/v/ro-v-ventuza.webp` | `O ventuză simplă` | `household` | Simple non-medical suction cup or suction hook attached to a clean tile/glass square, object-only. | Highest imageability/safety risk in this slice. Avoid medical cupping, body/skin, parasite, octopus/sucker anatomy, plumbing plunger, goblet/cup, bath context, unclear rubber blob, logo, or text. Block before promotion if not clear at wheel size. |
| `ro-e-evantai` | `evantai` | `/images/ro/e/ro-e-evantai.webp` | `Un evantai deschis` | `household` | Open folding hand fan in a semicircle with simple ribs and soft colors. | Keep gender-neutral and brand-free. Avoid text pattern, tiny decoration, cultural costume scene, person, logo, national symbols, weapon-like fan pose, or clutter. |
| `ro-n-nava` | `navă` | `/images/ro/n/ro-n-nava.webp` | `O navă mare pe apă` | `vehicle` | Large generic cargo/passenger ship on calm water, visible hull and bridge, no sails. | Must be distinct from existing `barcă` and `vapor`, and from Slice 4 `velier`. Avoid spaceship, aircraft, church nave, warship, pirate ship, national flag, military markings, smoke-stack emphasis, text, or logo. |

## Generation Prompt Constraints

Use the following constraints for any later contact-sheet generation or regeneration derived from this brief:

```txt
Use case: illustration-story
Asset type: review contact sheet for a children's Romanian vocabulary game
Primary request: Create one unlabeled 5 columns x 3 rows contact sheet of high-clarity child-friendly pixel art vocabulary icons. Preserve this exact row-major order: row 1: colorful toy disc, simple faceted diamond gemstone, one bold stripe on a scarf or fabric swatch, friendly generic quadcopter drone, simple suitcase. row 2: sparrow, calm volcano, single blue wave, wooden oar/paddle, small sailboat. row 3: purple violet flower, calm eagle/vulture with wings open, non-medical suction cup or suction hook, open folding hand fan, large generic ship.
Style/medium: cheerful handcrafted pixel art, refined educational game icon style, visible pixel construction, polished dimensional volume, clean silhouettes, rounded friendly shapes, soft playful colors, local-color outlines, simple top-left highlights, limited internal detail.
Composition/framing: exactly 5 equal square cells by 3 equal square cells, generous gutters between cells, no labels anywhere, no text anywhere. Each cell is a complete square icon with a full pale warm off-white or soft sky-blue background. One centered subject per cell, subject fills about 70% to 82% of its square, with safe margins from all corners so a circular mask would clip only background. No cropped subjects, no partial panels, no side bars.
Cell details: 1 one colorful flat toy flying disc or plain circular play disc, slightly top-down, not CD, not record, not computer disk, not sport event. 2 one simple faceted gemstone, bright but not luxury/jewelry scene. 3 one bold stripe on a scarf or fabric swatch, concrete cloth support visible, not abstract line, not many stripes. 4 small friendly generic quadcopter toy/gadget with simple propellers, no camera emphasis, no surveillance, no military, no weapon, no emergency. 5 simple suitcase with handle and wheels, no stickers, no logo, no travel text. 6 small brown sparrow on branch or ground, friendly, no cage, no flock. 7 simple cone volcano with tiny calm lava glow, no disaster, no people, no damaged houses, no scary face. 8 one clear blue sea/lake wave with foam crest, not abstract swirl, not storm, not tsunami. 9 one wooden oar or paddle, fully inside circular safe area, no boat clutter, no person. 10 small sailboat with one or two sails on calm water, no flags, no logos, distinct from large ship. 11 purple violet flower with green leaves, flower sense not color-only. 12 large calm bird with wings open, perched or gliding, no prey, no carcass, no heraldic/national/military framing. 13 simple non-medical suction cup or suction hook on clean tile/glass, no body, no skin, no parasite, no plunger, no goblet. 14 open folding hand fan in semicircle, simple ribs, no text pattern, no person. 15 large generic cargo/passenger ship on calm water with hull and bridge, no sails, no spaceship, no aircraft, no warship, no pirate cue, no church nave.
Constraints: children ages 4 to 6, safe and calm, clear at small wheel size, one centered subject per cell, full square backgrounds, circle-mask-safe composition, no letters, no numbers, no signs, no labels, no watermark, no logo, no brand, no copyrighted characters, no photorealism, no smooth CGI, no realistic 3D render, no complex scenery, no clutter, no scary mood, no violence, no weapons, no medical framing, no military framing, no surveillance framing, no political framing, no national symbols, no adult theme.
```

Negative prompt guidance when the generation tool supports it:

```txt
text, letters, numbers, signs, labels, watermark, logo, brand, copyrighted character, photorealistic, 3d render, realistic photo, complex background, clutter, scary, violent, weapon, medical treatment, body or skin, surveillance camera, military, camouflage, disaster, national flag, political symbol, adult theme, distorted object, extra limbs, face on object unless naturally expected, blurry, low contrast, noisy dithering
```

## Brand Consistency Notes

Any generated Slice 4 contact sheet or individual replacement must be compared with the established production style references in `docs/image-pipeline.md`, especially `barcă` for elongated vehicle framing, `vacă`, `cal`, `măgar`, and `elefant` for animals, `copac` and `buchet` for nature subjects, `jachetă`, `umbrelă`, `oală`, `acvariu`, and `șurub` for object scale and readable dimensionality.

Review for:

- polished educational-game pixel art rather than emoji, sticker, flat vector, photo, or smooth CGI;
- refined apparent pixel density close to a `96 x 96` to `128 x 128` source grid upscaled to `256 x 256`;
- centered subject scale around `70%` to `85%` of the square, with a clear margin;
- local-color outlines, top-left highlights, simple shadows, and controlled internal detail;
- pale warm off-white or soft sky-blue backgrounds when transparency is not used;
- broad child-friendly colors rather than muddy, neon, dark, or one-note palettes;
- no text, numbers, watermarks, logos, brand marks, copyrighted characters, or confusing extra objects.

The main brand risks for this slice are:

- `dungă`, `val`, and `ventuză` may become too abstract unless grounded by concrete support/context.
- `vâslă` may become too thin or corner-clipped unless it is shortened and padded.
- `dronă`, `vulcan`, `vultur`, and `navă` may drift into serious, scary, military, disaster, emblematic, or adult framing if the prompt is not strict.
- `diamant` may become too luxury-coded or over-detailed.
- `velier` and `navă` must look different from each other and from existing boat/ship rows.

## Circular-Mask Constraints

All future generated cells and final crops must remain square files, but every subject must fit comfortably inside the inscribed circle of the square because Word Wheel displays images in circular slots.

Rules for this slice:

- Keep important subject pixels away from all four corners; only background may be clipped by a circular mask.
- For `vâslă`, use a shortened/recentered paddle angle and enough padding so both ends remain inside the circular safe area.
- For `velier` and `navă`, keep masts, sails, hull ends, bridge, and water cue inside the circular safe area; no long wake reaching into corners.
- For `vultur`, keep wing tips inside the safe area; reduce wingspan or choose a perched/gliding pose if needed.
- For `evantai`, keep the full fan arc and handle inside the safe area.
- For `val`, keep the foam crest inside the safe area and avoid a long horizontal wave that touches side edges.
- For `dronă`, keep all propellers inside the safe area with visible margin.
- For `disc`, `diamant`, `ventuză`, and `violetă`, use centered compact silhouettes that should be straightforward to mask.

Before any production promotion, render or inspect a circular-mask preview of every accepted crop. If the mask clips meaningful subject pixels, recenter/scale down locally while preserving quality, or regenerate the cell if padding makes the object too weak at wheel size.

## QA And Promotion Notes

The separate image approval gate is waived for this orchestrator run, but QA is not waived. A later promotion batch must still:

- promote only images that match the intended Romanian word and child-safe sense;
- reject or regenerate any unclear, off-brand, cropped, scary, medical, surveillance, military, political, branded, text-bearing, or duplicate-looking cell;
- verify final image files are `.webp`, `256 x 256 px`, full-square, circle-mask safe, and within documented size limits;
- add production JSON only for accepted, ready images, using the stable IDs and paths from this document;
- run `pnpm run validate:content` and all required project checks for the promotion scope;
- run route/admin/browser checks for affected pages and representative image URLs when rows are promoted.

## Verification

Batch 90 is documentation-only. Required verification:

```txt
git diff --check
```
