# Batch 40 Corrective Image Audit

Batch: Romanian Content Expansion Batch 40.

Status: A-C flagged list corrected with human-approved AI contact-sheet replacements; `șapcă` reuse kept.

## Scope

This batch is a quality-audit and regeneration-planning pass for existing ready Romanian images that the human flags as poor, unclear, or off-style.

The current production image pack remains finalized until this audit produces an explicit reviewed scope:

- Approved Romanian words: `367`.
- Ready images: `367`.
- Approved placeholders: `0`.
- Rejected audit-trail records: `ghicitoare`, `miez`, and `stinghie`.

The first corrective scope covers letters `A` through `C` only, based on the human list recorded below. A first deterministic local-drawing replacement attempt was rejected by the human as too flat, coarse, ugly, and off-brand compared with stronger references such as `cozonac` and `cățel`. Those generated A-C replacements were restored to the previous committed assets, and the temporary alt text changes were reverted. The only kept image change from that pass was reusing the previous `caschetă` image for `șapcă`, because it depicted a casual cap and the human flagged the existing `șapcă` image as bad.

A second AI contact-sheet pass was generated with the earlier successful workflow, then human-approved as the right direction. The accepted cells were cropped in fixed order, post-processed to a refined `128 px` pixel-art grid, palette-limited to `96` colors to avoid over-smooth output, nearest-upscaled to `256 x 256 px`, and optimized as lossless WebP files. The final assets were compared against `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, and `scaun`; they are slightly more detailed than the simplest early assets but match the current polished realistic-cartoon pixel-art direction better than the rejected deterministic replacements.

Important correction: do not use deterministic SVG-like local drawings for this corrective pass. The successful earlier high-quality slices used generated contact sheets with generous gutters, cropped cells, background normalization, palette reduction, and final optimization. Future regeneration should return to that workflow and should compare candidates directly against the high-quality reference images before promotion.

Human review gate: after generating each contact sheet, stop and ask the human to review it before cropping cells, optimizing WebP assets, editing JSON, or replacing production files. For the current corrective work, prefer small sheets of about `12` to `15` images so the human can reject or redirect a bad style batch early.

## Required Inputs From Human

For each bad image, collect:

```txt
word:
what is wrong with current image:
intended meaning, if the word is ambiguous:
reference image/path, if available:
must avoid:
severity: blocker / should fix / nice to fix
```

## Audit Method

For each flagged word:

1. Resolve the production word ID and canonical image path from `content/ro/words-*.json`.
2. Inspect the current image at full `256 x 256 px` size and at wheel thumbnail size.
3. Compare it against the production style reference set in `docs/image-pipeline.md`.
4. Compare quality, style, 3D-ness, pixel construction, shadows, shape, subject size, background color, color palette, and thumbnail readability.
5. If the object or intended Romanian meaning is visually uncertain, look up online object references before writing a regeneration prompt.
6. Use online references only to understand real-world object shape and common visual features; do not copy external images or imitate protected artwork.
7. Record source URLs when online references were used.
8. Decide whether to keep, regenerate, remove from gameplay, or ask the human for a meaning/scope decision.

## Audit Table

| Word ID | Word | Current image path | Human issue | Current image audit | Reference comparison | Online object references | Decision | Regeneration direction |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ro-a-acoperis` | `acoperiș` | `/images/ro/a/ro-a-acoperis.webp` | Not clear that the target is roof; not 3D; weird geometric/nonnatural shape. | Current committed image remains weak and reads more as a flat house symbol than a natural roof object. The rejected local replacement was worse. | Compare against `cozonac`, `cadă`, `scaun`, and `jachetă` for dimensionality, outline weight, contact shadow, and object scale. | Not needed; meaning supplied by human. | Replaced from human-approved AI contact sheet. | Diagonal or slightly top-down view so roof plane is visible; one red tiled roof with chimney and just enough house context to teach roof, not house. |
| `ro-a-alge` | `alge` | `/images/ro/a/ro-a-alge.webp` | Should be underwater, maybe blue background or show in water. | Current committed algae are better than the rejected local replacement; the issue is missing underwater context. | Compare against `castravete` and `buchet` for organic texture and against `cadă` for pale blue background use. | Not needed; meaning supplied by human. | Replaced from human-approved AI contact sheet. | Preserve the quality of the current algae fronds, add subtle water context such as pale blue background, bubbles, or seabed without coarsening the plant. |
| `ro-a-ascutitoare` | `ascuțitoare` | `/images/ro/a/ro-a-ascutitoare.webp` | Weird cut background with vertical lines of normal background. | Current committed sharpener graphic is strong; only the background cut/panel is bad. The rejected local replacement lost quality. | Compare against `jachetă` and `scaun` for object scale, outline, and simple dimensional shading. | Not needed. | Replaced from human-approved AI contact sheet. | Keep the existing sharpener and pencil form; remove/normalize the rectangular background artifact to the warm pack background. |
| `ro-a-ata` | `ață` | `/images/ro/a/ro-a-ata.webp` | Same background-cut issue as `ascuțitoare`. | Current committed spool is strong; only the background panel is bad. The rejected local replacement lost quality. | Compare against `cozonac` and `buchet` for small internal detail kept readable. | Not needed. | Replaced from human-approved AI contact sheet. | Keep the existing spool and thread; remove/normalize the rectangular background artifact to the warm pack background. |
| `ro-b-branza` | `brânză` | `/images/ro/b/ro-b-branza.webp` | Cheese is too high in frame; weird artifact on bottom; cheese graphic is fine. | Current committed cheese graphic is strong; only framing and bottom artifact need correction. The rejected local replacement lost quality. | Compare against `cozonac` for food volume and thumbnail clarity. | Not needed. | Replaced from human-approved AI contact sheet. | Keep the existing cheese form; lower/recenter it and remove the stray bottom artifact/shadow. |
| `ro-b-barza` | `barză` | `/images/ro/b/ro-b-barza.webp` | Head is cut off though depiction seems fine. | Current committed stork depiction is strong; only crop/framing is bad. The rejected local replacement lost animal quality. | Compare against `cățel` for full subject framing and friendly animal readability. | Not needed. | Replaced from human-approved AI contact sheet. | Preserve existing stork style and pose; expand/reframe canvas so full head and beak are visible with safe margins. |
| `ro-b-buzunar` | `buzunar` | `/images/ro/b/ro-b-buzunar.webp` | Should be on pants or something; maybe arrow/frame to clarify pocket. | Current committed image is a detached pocket patch; garment context is weak. The rejected local replacement was too flat. | Compare against `jachetă` for clothing-object clarity and garment context. | DEX defines `buzunar` as a pocket sewn into clothing for small items: https://dexonline.ro/definitie/buzunar/5866 | Replaced from human-approved AI contact sheet. | Pocket sewn on pants or a clothing panel, with stitching and garment context; avoid arrows unless the pocket still fails to read. |
| `ro-c-ceapa` | `ceapă` | `/images/ro/c/ro-c-ceapa.webp` | Plain wrong; search for onion and reproduce in our style. | Current committed image does not read as onion. The rejected local replacement also failed to look like a real onion. | Compare against `castravete` and `cozonac` for food volume, local-color outline, and simple highlights. | DEX defines `ceapă` as the edible bulb of Allium cepa: https://dexonline.ro/definitie/ceapa/843881. Britannica bulb reference used to confirm overlapping/papery bulb structure: https://www.britannica.com/science/bulb | Replaced from human-approved AI contact sheet. | Realistic/cartoon pixel-art onion bulb: papery golden/brown layers, tapered top, root base, rounded bulb, no seed/almond shape. |
| `ro-c-ciorap` | `ciorap` | `/images/ro/c/ro-c-ciorap.webp` | Could be better. | Current committed sock is readable but flat/blocky and less polished than the reference clothing examples. Rejected local replacement was worse. | Compare against `jachetă` for clothing outline and folds. | Not needed. | Replaced from human-approved AI contact sheet. | One believable long sock with cuff, heel, toe, fabric folds/highlights, and real clothing volume. |
| `ro-c-cirese` | `cireșe` | `/images/ro/c/ro-c-cirese.webp` | Could be better, more 3D. | Current committed cherries are readable but too flat. Rejected local replacement was not enough of an improvement. | Compare against `cozonac`, `buchet`, and `castravete` for food/organic highlights and shadow. | Not needed. | Replaced from human-approved AI contact sheet. | Two cherries with stems, glossy dimensional highlights, darker side planes, and pack-consistent shadow. |
| `ro-c-cap` | `cap` | `/images/ro/c/ro-c-cap.webp` | Too coarse and weirdly geometric. | Current committed head is coarse/geometric; rejected local replacement looked scary and also failed. | Compare against `cățel` for friendly facial rendering and rounded silhouette. | Not needed. | Replaced from human-approved AI contact sheet. | Friendly non-scary child head, rounded proportions, soft cartoon-realistic style, no blocky square face, no uncanny expression. |
| `ro-c-colaj` | `colaj` | `/images/ro/c/ro-c-colaj.webp` | Too geometric; should be more in line with the style. | Current committed collage is geometric. Rejected local replacement was slightly better but still not enough; restored for now. | Compare against `buchet` for multi-part subject cohesion and against `cozonac` for dimensional shading. | Not needed. | Replaced from human-approved AI contact sheet. | Layered paper collage with varied cut paper shapes, subtle depth, warm paper texture, no diagram-like hard frames. |
| `ro-c-cascheta` | `caschetă` | `/images/ro/c/ro-c-cascheta.webp` | Existing image is actually a `șapcă`; search the meaning. | Current committed image is again the old casual baseball cap after restoring the rejected replacement, so it remains wrong for `caschetă`. | Compare against `jachetă` and `scaun` for clothing/object volume and readable perspective. | DEX defines `caschetă` as a large round cap with brim, often part of military uniform: https://dexonline.ro/intrare/caschet%C4%83/8927. DEX `cozoroc` confirms the front brim/peak feature: https://dexonline.ro/intrare/cozoroc/13563 | Replaced from human-approved AI contact sheet. | Uniform/peaked cap, round crown, visor/brim, band, small badge if helpful; clearly distinct from baseball `șapcă`. |
| `ro-c-chiciura` | `chiciură` | `/images/ro/c/ro-c-chiciura.webp` | Too geometric; circles/squares; make it more realistic. | Current committed image is too diagram-like/geometric. Rejected local replacement was also too sparse and not sufficiently realistic. | Compare against `buchet` for natural branching detail and against `cadă` for pale blue cold background. | DEX defines `chiciură` as ice crystals deposited in winter on branches, wires, etc.: https://dexonline.ro/definitie/chiciura/845326 | Replaced from human-approved AI contact sheet. | Frost-covered branch with natural twig shape, fine white ice crystals, cold pale blue background, realistic-cartoon pixel rendering. |
| `ro-sh-sapca` | `șapcă` | `/images/ro/ș/ro-sh-sapca.webp` | Existing `șapcă` image was bad; previous `caschetă` image was actually a better `șapcă`. | The previous `caschetă` asset showed a casual blue/red peaked baseball-style cap, which fits `șapcă` better than `caschetă`. | Compared against `jachetă` for clothing icon clarity and against the new `caschetă` asset to preserve distinction. | DEX `caschetă` source confirms the old casual cap should not remain under `caschetă`; `cozoroc` source confirms a cap brim/peak is valid for cap imagery. | Reused previous asset. | Restored the pre-correction `ro-c-cascheta.webp` bitmap from Git history and wrote it to `/images/ro/ș/ro-sh-sapca.webp`. |

## Visual Audit Checklist

For each image, record pass, weak, or fail for:

- meaning and recognizability;
- Romanian word sense;
- child familiarity and safety;
- style match to the production pack;
- pixel density and hard-edge clarity;
- dimensionality without over-smooth 3D rendering;
- silhouette and shape clarity;
- subject scale and margins;
- simple readable perspective;
- shadow/contact grounding;
- background color consistency;
- color and contrast;
- no text, watermark, logo, brand, copyrighted character, or confusing extra object.

## Regeneration Prompt Delta Template

Use this after the audit decision is `regenerate`.

```txt
Word ID:
Romanian word:
Intended meaning:
Current problem:
Replacement direction:
Reference traits to preserve:
Must avoid:
Online object references used:
```

## Review Gate

Before any replacement is promoted:

- create a contact sheet that includes the old image, candidate replacement, and relevant production references;
- stop and ask the human to review the contact sheet before cropping, optimizing, or replacing production files;
- inspect human-approved candidates at `256 x 256 px` and wheel thumbnail size;
- confirm the candidate is clearer than the old image and still on-brand;
- optimize to final `256 x 256 px` lossless WebP only after visual acceptance;
- run `pnpm run validate:content`;
- update this document, feature `status.md`, global `docs/status.md`, and `docs/next-image-batch-prompt.md`.

## Implemented Asset Changes

The following Batch 40 corrective asset changes are currently kept:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-a-acoperis` | `/images/ro/a/ro-a-acoperis.webp` | 11060 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-a-alge` | `/images/ro/a/ro-a-alge.webp` | 8540 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-a-ascutitoare` | `/images/ro/a/ro-a-ascutitoare.webp` | 8906 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-a-ata` | `/images/ro/a/ro-a-ata.webp` | 8968 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-b-branza` | `/images/ro/b/ro-b-branza.webp` | 8340 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-b-barza` | `/images/ro/b/ro-b-barza.webp` | 9844 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-b-buzunar` | `/images/ro/b/ro-b-buzunar.webp` | 11120 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-ceapa` | `/images/ro/c/ro-c-ceapa.webp` | 9744 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-ciorap` | `/images/ro/c/ro-c-ciorap.webp` | 9518 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-cirese` | `/images/ro/c/ro-c-cirese.webp` | 9130 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-cap` | `/images/ro/c/ro-c-cap.webp` | 9994 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-colaj` | `/images/ro/c/ro-c-colaj.webp` | 7692 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-cascheta` | `/images/ro/c/ro-c-cascheta.webp` | 8260 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-c-chiciura` | `/images/ro/c/ro-c-chiciura.webp` | 9656 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-sh-sapca` | `/images/ro/ș/ro-sh-sapca.webp` | 3202 B | 256 x 256 | Accepted, reused from previous `caschetă` asset |

The rejected deterministic local replacements for `A` through `C` were restored before the accepted AI contact-sheet replacements were promoted. Alt text was updated only where the replacement meaning materially changed: `ro-a-alge` now describes algae underwater, and `ro-b-buzunar` now describes a pocket on pants.

Verification:

- `pnpm run validate:content` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`; only pre-existing warning-threshold images were reported, and none of the new Batch 40 A-C assets were in the warning list.
- `pnpm run lint` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`.
- `git diff --check` passed.

## Follow-Up Human Review Notes

The human reviewed the changed A-C images and confirmed the direction but flagged additional cleanup before moving on:

- `ro-a-ascutitoare`: concept and object quality are strong, but the pencil is inserted the wrong way; it needs a future AI/object edit or regeneration with the pencil's point going into the sharpener.
- `ro-b-bicicleta`: current bicycle remains too flat/simple and should receive a future AI corrective candidate.
- `ro-b-branza`, `ro-b-bustean`, `ro-b-barza`, `ro-c-ceapa`, `ro-c-cirese`, `ro-c-ciorap`, `ro-c-cada`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura`: background patches looked cut or incomplete and needed full square backgrounds.

Implemented follow-up cleanup:

- Normalized edge-connected background pixels for `ro-a-ascutitoare`, `ro-b-branza`, `ro-b-bustean`, `ro-b-barza`, `ro-c-ceapa`, `ro-c-cirese`, `ro-c-ciorap`, `ro-c-cada`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura` so the backdrop fills the full `256 x 256 px` square.
- Kept subject pixels unchanged for that background cleanup.
- Confirmed the cleaned background assets are all `256 x 256 px` and between `7222 B` and `9962 B`, below the `12 KB` warning threshold.
- Updated `docs/image-pipeline.md` to require full square backgrounds after contact-sheet crops and to reject gutters, side bars, corner blocks, or rectangular panel artifacts before promotion.

Closed for now:

- The human marked the A-C corrective set done for now, with the caveat that some images may still be improved later if the pack receives another polish pass.

Still pending human-reviewed generation:

- `ro-a-ascutitoare` pencil orientation correction.
- `ro-b-bicicleta` quality/style improvement.

## Next Corrective Scope: D-F Human Flags

The next human-flagged list covers:

| Word ID | Word | Current image path | Human issue | Current image audit | Decision | Regeneration direction |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-d-desen` | `desen` | `/images/ro/d/ro-d-desen.webp` | Can be a lot better. | Current image reads as a flat drawing sheet on a black/cut background and is weaker than the polished pack references. | Replaced from human-approved AI contact sheet. | A clear child's drawing on paper, such as a simple colorful house, sun, and tree, with full warm square background and no text. |
| `ro-d-dus` | `duș` | `/images/ro/d/ro-d-dus.webp` | Does not have full background. | Current shower is readable but has an incomplete/cut-looking pale blue background. | Replaced from human-approved AI contact sheet. | Shower head with water drops, full soft blue square background, centered and polished. |
| `ro-e-echer` | `echer` | `/images/ro/e/ro-e-echer.webp` | Cut. | Current set square is readable but has a cut/cropped edge and weak framing. | Replaced from human-approved AI contact sheet. | One centered triangular school set square, translucent light blue plastic, full warm square background, no marks/text. |
| `ro-e-echipament` | `echipament` | `/images/ro/e/ro-e-echipament.webp` | Can be better; ugly and boxy. | Current sports equipment is flat, blocky, and on a black/cut background. | Replaced from human-approved AI contact sheet. | Friendly sports equipment set with shirt, shorts, ball, and maybe shoes; rounded, dimensional, no logos or numbers. |
| `ro-f-fata` | `față` | `/images/ro/f/ro-f-fata.webp` | Needs to be a lot better. | Current face is too simple/coarse compared with the accepted `cap` and `cățel` references. | Replaced from human-approved AI contact sheet. | Friendly child face/front head, warm skin, simple features, non-scary, no cosmetics or adult styling. |
| `ro-f-frunza` | `frunză` | `/images/ro/f/ro-f-frunza.webp` | Can be better; ugly. | Current leaf is readable but crude and less organic/polished than `castravete` or `buchet`. | Replaced from human-approved AI contact sheet. | One green leaf with natural curved shape, central vein, subtle highlights, full warm background. |
| `ro-f-fasole` | `fasole` | `/images/ro/f/ro-f-fasole.webp` | Not centered and has right-side artifacts. | Current bowl of beans is readable but off-center with a visible right-edge artifact. | Replaced from human-approved AI contact sheet. | Centered bowl of beans or small pile of beans, appetizing and dimensional, no side artifacts. |
| `ro-f-frizerie` | `frizerie` | `/images/ro/f/ro-f-frizerie.webp` | Very bad and not suggestive. | Current storefront is too dark, flat, and unclear for a barbershop/hairdresser place. | Replaced from human-approved AI contact sheet. | Small barber shop/salon scene icon with barber chair, mirror, scissors, comb, or striped pole; no text. |
| `ro-f-frizura` | `frizură` | `/images/ro/f/ro-f-frizura.webp` | More a man thing; `coafură` is for women. Make it a clear man hairstyle so the word refers to hair. | Current image reads as a woman/girl hairstyle, which conflicts with the requested sense distinction. | Replaced from human-approved AI contact sheet. | Male head focused on a clear neat men's haircut/hairstyle, simple face if needed, hair is the subject, no beard-heavy adult portrait. |

Contact-sheet outcome: generated one unlabeled `3 x 3` candidate sheet in the exact order above, stopped for human review, and the human accepted all cells.

Implemented D-F corrective changes:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-d-desen` | `/images/ro/d/ro-d-desen.webp` | 4574 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-d-dus` | `/images/ro/d/ro-d-dus.webp` | 5342 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-e-echer` | `/images/ro/e/ro-e-echer.webp` | 5800 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-e-echipament` | `/images/ro/e/ro-e-echipament.webp` | 7694 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-f-fata` | `/images/ro/f/ro-f-fata.webp` | 8216 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-f-frunza` | `/images/ro/f/ro-f-frunza.webp` | 6914 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-f-fasole` | `/images/ro/f/ro-f-fasole.webp` | 6814 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-f-frizerie` | `/images/ro/f/ro-f-frizerie.webp` | 7394 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-f-frizura` | `/images/ro/f/ro-f-frizura.webp` | 6916 B | 256 x 256 | Accepted, AI contact-sheet replacement |

Alt text updated where the new image meaning became more specific: `desen`, `duș`, `echipament`, `față`, `frizerie`, and `frizură`.

D-F verification:

- `pnpm run validate:content` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`; only pre-existing warning-threshold images were reported, and none of the promoted D-F assets were in the warning list.
- `pnpm run lint` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`.
- `git diff --check` passed.

Local ignored review artifacts may include:

- `assets/image-sources/ro/batch-40/current-and-reference-contact-sheet.png`
- `assets/image-sources/ro/batch-40/accepted-contact-sheet.png`
- `assets/image-sources/ro/batch-40/cropped-review-96.png`
- `assets/image-sources/ro/batch-40/brand-comparison-final.png`
- `assets/image-sources/ro/batch-40/generated-96/*.png`

## Next Corrective Scope: G-M Human Flags

The next human-flagged list covers:

| Word ID | Word | Current image path | Human issue | Current image audit | Decision | Regeneration direction |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-g-gem` | `gem` | `/images/ro/g/ro-g-gem.webp` | Plain and bad; needs more detail and dimensionality. | Current jar reads as jam but is flat, sparse, and below the accepted food-object polish level. | Generate review candidate. | Detailed glass jar or small open jar of red berry jam, glossy jam surface, believable glass volume, warm full square background. |
| `ro-g-garaj` | `garaj` | `/images/ro/g/ro-g-garaj.webp` | Needs to be more 3D, detailed, and specific; could be a boxy garage or near a house. | Current garage is simple and flat, with weak dimensional detail. | Generate review candidate. | Boxy small garage with clear segmented garage door, slight three-quarter view, a hint of house wall/driveway context if useful, full square background. |
| `ro-g-gemeni` | `gemeni` | `/images/ro/g/ro-g-gemeni.webp` | Should be two identical boys. | Current image shows two children but not clearly identical twins. | Generate review candidate. | Two identical friendly boys side by side, same hair/clothes/proportions, child-safe expression, full square background. |
| `ro-g-ger` | `ger` | `/images/ro/g/ro-g-ger.webp` | Too boxy/geometrical; needs more detail and 3D. | Current thermometer/snowflake symbol is geometric and too icon-like. | Generate review candidate. | Readable freezing-cold scene/object, such as frosty window/ice crystals with a small thermometer or icy branch, dimensional frost texture, cold full square background. |
| `ro-g-ghereta` | `gheretă` | `/images/ro/g/ro-g-ghereta.webp` | Needs to be more specific, more detailed, more 3D, in style, and no shadow. | Current booth is readable but flat and too simple. | Generate review candidate. | Small kiosk/guard booth/ticket booth with window and door, simple 3D volume, no text, no cast/contact shadow, full square background. |
| `ro-g-gheruta` | `gheruță` | `/images/ro/g/ro-g-gheruta.webp` | Same style/detail issue as `gheretă`; no shadow. | Current paw/claw is symbolic, flat, and on a cut/transparent-looking background. | Generate review candidate. | Small animal paw with visible little claws, rounded friendly shape, dimensional fur/pad detail, no scary talons, no shadow, full square background. |
| `ro-i-insula` | `insulă` | `/images/ro/i/ro-i-insula.webp` | Needs more detail and 3D in the current standard. | Current island is too simple and geometric. | Generate review candidate. | Small sandy island with water around it and a palm/tree, gentle three-quarter/top-down volume, full square background. |
| `ro-i-iaz` | `iaz` | `/images/ro/i/ro-i-iaz.webp` | Needs more detail and 3D. | Current pond is closer, but still too flat and sparse. | Generate review candidate. | Small contained pond with reeds, stones, lily pad, shallow-water feel, distinct from a large lake, full square background. |
| `ro-l-lac` | `lac` | `/images/ro/l/ro-l-lac.webp` | Current image feels more like `iaz`; should be a bigger lake landscape. | Current lake is small and pond-like. | Generate review candidate. | Broader lake landscape with a larger water body, shoreline, trees or distant hills, still simple enough for thumbnail, full square background. |
| `ro-m-melc` | `melc` | `/images/ro/m/ro-m-melc.webp` | Has two sets of eyes; snail eyes should be on eyestalks, not on the face. | Current snail is otherwise readable, but extra face eyes are biologically confusing. | Generate review candidate. | Friendly snail with exactly two eyes at the ends of upper eyestalks, no extra face eyes, rounded shell/body, full square background. |
| `ro-m-musetel` | `mușețel` | `/images/ro/m/ro-m-musetel.webp` | Too boxy, geometrical, plain, and bad. | Current flower is stiff and icon-like. | Generate review candidate. | Small cluster of chamomile flowers with white petals and yellow centers, natural stems/leaves, soft dimensional pixel-art texture, full square background. |
| `ro-m-martisor` | `mărțișor` | `/images/ro/m/ro-m-martisor.webp` | Too boxy/geometrical/plain; should be more Romanian-like. | Current heart charm has a red-white cord but does not clearly capture the Romanian traditional object. | Generate review candidate. | Romanian mărțișor with red-white twisted cord, tassels or bow, and a small spring/luck charm such as a flower, horseshoe, or clover; no text. Sources: Wikipedia overview of the Romanian/Moldovan spring tradition and red-white string (https://en.wikipedia.org/wiki/M%C4%83r%C8%9Bi%C8%99or), DEX definition of the mărțișor object/custom (https://dexonline.ro/definitie/m%C4%83r%C8%9Bi%C8%99or). |
| `ro-m-mazare` | `mazăre` | `/images/ro/m/ro-m-mazare.webp` | Too boxy, geometrical, plain, and bad. | Current pea pod is flat and angular. | Generate review candidate. | Rounded green pea pod partly open with visible peas, organic curves, soft volume, full square background. |

Contact-sheet plan: generate one unlabeled 13-cell candidate sheet in the exact table order above, with full square backgrounds inside every cell, then stop for human review before cropping, optimization, JSON edits, or production replacement.

Contact-sheet outcome: generated one unlabeled 13-cell candidate sheet in the exact order above, stopped for human review, and the human accepted all cells.

Implemented G-M corrective changes:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-g-gem` | `/images/ro/g/ro-g-gem.webp` | 11158 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-g-garaj` | `/images/ro/g/ro-g-garaj.webp` | 8830 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-g-gemeni` | `/images/ro/g/ro-g-gemeni.webp` | 10846 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-g-ger` | `/images/ro/g/ro-g-ger.webp` | 12038 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-g-ghereta` | `/images/ro/g/ro-g-ghereta.webp` | 10202 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-g-gheruta` | `/images/ro/g/ro-g-gheruta.webp` | 11544 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-i-insula` | `/images/ro/i/ro-i-insula.webp` | 10982 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-i-iaz` | `/images/ro/i/ro-i-iaz.webp` | 11242 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-l-lac` | `/images/ro/l/ro-l-lac.webp` | 9376 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-m-melc` | `/images/ro/m/ro-m-melc.webp` | 11812 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-m-musetel` | `/images/ro/m/ro-m-musetel.webp` | 12190 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-m-martisor` | `/images/ro/m/ro-m-martisor.webp` | 12056 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-m-mazare` | `/images/ro/m/ro-m-mazare.webp` | 11214 B | 256 x 256 | Accepted, AI contact-sheet replacement |

Alt text updated where the new image meaning became more specific: `garaj`, `gemeni`, `ger`, `gheretă`, `iaz`, `lac`, `mușețel`, and `mărțișor`.

G-M brand/style review:

- Created a final comparison sheet mixing `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and all promoted G-M crops.
- Confirmed the approved crops use true `256 x 256 px` canvases, refined `128 px` pixel-art processing, full square backgrounds, and no contact-sheet gutter/cut-background artifacts.
- All promoted G-M files are below the `12 KiB` warning boundary after lossless WebP optimization.

G-M verification:

- `pnpm run validate:content` passed outside the sandbox after sandboxed `pnpm` returned `fetch failed`; the reported image-size warnings were pre-existing assets (`fular`, `glob`, `hartă`, `mamă`, `mână`, `păpușă`, `porc`, `pernă`, `șarpe`, `ursuleț`, `vacă`, and `vulpe`), not the promoted G-M corrective assets.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Next Corrective Scope: N-R Human Flags

The next human-flagged list covers:

| Word ID | Word | Current image path | Human issue | Current image audit | Decision | Regeneration direction |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-n-nas` | `nas` | `/images/ro/n/ro-n-nas.webp` | Shows a face, not very intuitive or suggestive. | Current image is a full child face; the nose is only one facial feature and is not isolated enough for the word. | Generate review candidate. | A friendly isolated nose or close-up lower face where the nose is clearly the subject, warm skin tones, non-scary, no full head/face dominance. |
| `ro-p-plaja` | `plajă` | `/images/ro/p/ro-p-plaja.webp` | Plain bad; needs fixing. | Current beach is a very flat umbrella/stripe symbol with weak beach depth and polish. | Generate review candidate. | Small beach scene with sand, sea edge, umbrella or beach towel, dimensional shoreline, clear sky/water context, full square background. |
| `ro-p-ploaie` | `ploaie` | `/images/ro/p/ro-p-ploaie.webp` | Bad; needs fixing. | Current rain cloud is flat, symbolic, and below the pack standard. | Generate review candidate. | Soft gray rain cloud with falling raindrops and visible rainy atmosphere, polished volume, no storm/scary mood, full sky-blue square background. |
| `ro-p-prajitura` | `prăjitură` | `/images/ro/p/ro-p-prajitura.webp` | Bad and needs fixing. | Current cake is a flat block/box with weak appetizing detail. | Generate review candidate. | Appetizing slice or small piece of cake/pastry, frosting/cream layers, soft 3D volume, no candle/text, full warm square background. |
| `ro-p-paianjen` | `păianjen` | `/images/ro/p/ro-p-paianjen.webp` | Needs to be 3D and properly generated. | Current spider is flat, crude, and not in the refined animal style. | Generate review candidate. | Child-friendly spider with rounded body, eight clear legs, subtle volume, non-scary eyes/expression if present, no extra limbs, full square background. |
| `ro-p-poza` | `poză` | `/images/ro/p/ro-p-poza.webp` | Needs to be properly defined. | Current framed landscape is readable as a picture, but too generic and flat. | Generate review candidate. | Clearly a printed photo/picture in a simple frame or held photo print, with a simple landscape/photo image inside, visible paper/frame depth, no text. |
| `ro-p-pisicuta` | `pisicuță` | `/images/ro/p/ro-p-pisicuta.webp` | Needs to be 3D and up to style. | Current kitten is a flat face icon and not a dimensional kitten. | Generate review candidate. | Cute small kitten, preferably whole seated body or bust with paws, soft fur volume, friendly, not just a flat head, full square background. |
| `ro-r-raft` | `raft` | `/images/ro/r/ro-r-raft.webp` | Similar flat/plain quality issue. | Current shelf is a flat rectangle with minimal depth and boxy contents. | Generate review candidate. | Wooden shelf/bookcase in slight three-quarter view with books and a toy/object, dimensional wood and contents, no text. |
| `ro-r-ramura` | `ramură` | `/images/ro/r/ro-r-ramura.webp` | Similar flat/plain quality issue. | Current branch is simple, flat, and icon-like. | Generate review candidate. | Natural brown branch with green leaves, organic curves, bark texture, subtle dimension, full square background. |
| `ro-r-rau` | `râu` | `/images/ro/r/ro-r-rau.webp` | Similar flat/plain quality issue. | Current river is a flat blue stripe on a rectangular green panel, with cut-background risk. | Generate review candidate. | Winding river through grassy banks or small landscape, dimensional water flow, full square background, distinct from lake/pond. |
| `ro-r-rosie` | `roșie` | `/images/ro/r/ro-r-rosie.webp` | Similar flat/plain quality issue. | Current tomato is readable but flat and simplified. | Generate review candidate. | Glossy red tomato with green calyx, rounded believable volume, subtle highlights and shadow, full warm background. |
| `ro-r-rotita` | `rotiță` | `/images/ro/r/ro-r-rotita.webp` | Similar flat/plain quality issue; first review candidate looked too much like a full vehicle tire. | Current small wheel/gear reads flat and mechanical-symbol-like. | Generate focused second-pass review candidate. | Visibly small wheel or cog-like little wheel, compact and clearly a `rotiță`, with rim/teeth depth and rounded 3D form; avoid a large car tire, app-settings gear confusion, or a flat symbol. |

Contact-sheet plan: generate one unlabeled 12-cell candidate sheet in the exact table order above, with complete square backgrounds inside every cell, then stop for human review before cropping, optimization, JSON edits, or production replacement.

Contact-sheet first-pass outcome: the human accepted the first 11 cells and requested another pass only for `ro-r-rotita`, because the candidate should read more as a cog or visibly small wheel.

Second-pass outcome: generated a focused 4-cell `rotiță` variant sheet and the human accepted the bottom-left third cell, a small caster-style wheel.

Implemented N-R corrective changes:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-n-nas` | `/images/ro/n/ro-n-nas.webp` | 12166 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-plaja` | `/images/ro/p/ro-p-plaja.webp` | 10580 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-ploaie` | `/images/ro/p/ro-p-ploaie.webp` | 11262 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-prajitura` | `/images/ro/p/ro-p-prajitura.webp` | 11818 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-paianjen` | `/images/ro/p/ro-p-paianjen.webp` | 12248 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-poza` | `/images/ro/p/ro-p-poza.webp` | 11416 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-p-pisicuta` | `/images/ro/p/ro-p-pisicuta.webp` | 12026 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-r-raft` | `/images/ro/r/ro-r-raft.webp` | 11006 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-r-ramura` | `/images/ro/r/ro-r-ramura.webp` | 12068 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-r-rau` | `/images/ro/r/ro-r-rau.webp` | 11548 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-r-rosie` | `/images/ro/r/ro-r-rosie.webp` | 11276 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-r-rotita` | `/images/ro/r/ro-r-rotita.webp` | 11068 B | 256 x 256 | Accepted, second-pass AI contact-sheet replacement |

Alt text updated where the new image meaning became more specific: `prăjitură`, `poză`, `pisicuță`, `raft`, and `rotiță`.

N-R brand/style review:

- Created a final comparison sheet mixing `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and all promoted N-R crops.
- Confirmed the approved crops use true `256 x 256 px` canvases, refined `128 px` pixel-art processing, full square backgrounds, and no contact-sheet gutter/cut-background artifacts.
- All promoted N-R files are below the `12 KiB` warning boundary after lossless WebP optimization.

N-R verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing warning-threshold images were reported, and none of the promoted N-R assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Next Corrective Scope: S Human Flags

The human requested regeneration for all approved `S` letter images except `soare`, `suc`, `săpun`, `scaun`, and `spaghete`, which are acceptable despite being a bit coarser than the newest assets. Rejected audit-trail row `stinghie` remains out of scope.

The S corrective list covers:

| Word ID | Word | Current image path | Human issue | Current image audit | Decision | Regeneration direction |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-s-sanie` | `sanie` | `/images/ro/s/ro-s-sanie.webp` | Needs to be on-brand, 3D, non-geometric, and without bottom shadow. | Current sled is flat, blocky, and uses a heavy oval bottom shadow. | Generate review candidate. | Normal-sized wooden/red sled on snow if useful, realistic-cartoon pixel art, dimensional rails and seat, clearly larger than `săniuță`, no bottom oval shadow. |
| `ro-s-salata` | `salată` | `/images/ro/s/ro-s-salata.webp` | Same S-batch quality issue. | Current salad bowl is flat and geometric with minimal ingredient detail. | Generate review candidate. | Dimensional bowl of salad with leafy greens and small vegetable pieces, appetizing, full square background, no bottom oval shadow. |
| `ro-s-sandale` | `sandale` | `/images/ro/s/ro-s-sandale.webp` | Same S-batch quality issue. | Current sandals are flat, simplified, and icon-like. | Generate review candidate. | Pair of child-friendly sandals with straps, soles, depth, and soft leather/fabric volume, full square background, no bottom oval shadow. |
| `ro-s-sandvis` | `sandviș` | `/images/ro/s/ro-s-sandvis.webp` | Same S-batch quality issue. | Current sandwich is a flat triangular wedge with weak food detail. | Generate review candidate. | Triangular sandwich with bread thickness, visible filling layers, rounded believable volume, no text, no bottom oval shadow. |
| `ro-s-scara` | `scară` | `/images/ro/s/ro-s-scara.webp` | Same S-batch quality issue. | Current ladder is very flat, front-on, and has a heavy bottom shadow. | Generate review candidate. | Wooden ladder in slight three-quarter perspective, visible rails/rungs and depth, full square background, no bottom oval shadow. |
| `ro-s-scoica` | `scoică` | `/images/ro/s/ro-s-scoica.webp` | Same S-batch quality issue. | Current shell is readable but flat and low detail. | Generate review candidate. | Pink/cream seashell with ridges, glossy curved volume, natural shell shape, full square background, no bottom oval shadow. |
| `ro-s-sfoara` | `sfoară` | `/images/ro/s/ro-s-sfoara.webp` | Same S-batch quality issue. | Current rope coil is flat and coarse. | Generate review candidate. | Coiled rope or ball of twine with braided fiber texture and dimensional curl, full square background, no bottom oval shadow. |
| `ro-s-spuma` | `spumă` | `/images/ro/s/ro-s-spuma.webp` | Same S-batch quality issue. | Current foam is sparse geometric bubbles and a stripe. | Generate review candidate. | Cluster of soft white soap/foam bubbles with translucent highlights and rounded volume, full square background, no bottom oval shadow. |
| `ro-s-struguri` | `struguri` | `/images/ro/s/ro-s-struguri.webp` | Same S-batch quality issue. | Current grapes are flat, angular, and not grape-cluster-like enough. | Generate review candidate. | Bunch of purple grapes with many round glossy grapes and a small green leaf/stem, dimensional, no bottom oval shadow. |
| `ro-s-stilou` | `stilou` | `/images/ro/s/ro-s-stilou.webp` | Same S-batch quality issue. | Current fountain pen is a flat blue stick and does not clearly show a nib. | Generate review candidate. | Blue fountain pen with visible metal nib, cap/body depth, slight diagonal pose, no text/logo, no bottom oval shadow. |
| `ro-s-stejar` | `stejar` | `/images/ro/s/ro-s-stejar.webp` | Same S-batch quality issue. | Current oak tree is boxy and flat, with crude acorns. | Generate review candidate. | Friendly oak tree with rounded leafy crown, trunk bark, acorns, dimensional but simple, full square background, no bottom oval shadow. |
| `ro-s-saniuta` | `săniuță` | `/images/ro/s/ro-s-saniuta.webp` | Must be clearly distinct from `sanie`; little sled should read as very small, maybe baby/toy sled. | Current little sled is flat and does not strongly communicate small scale. | Generate review candidate. | Very small toy/baby sled, visibly smaller and cuter than the normal sled, perhaps on a small snow patch with toy-like proportions, no bottom oval shadow. |

Contact-sheet plan: generate one unlabeled 12-cell candidate sheet in the exact table order above, with complete square backgrounds inside every cell and no bottom oval shadows, then stop for human review before cropping, optimization, JSON edits, or production replacement.

Contact-sheet outcome: generated one unlabeled 12-cell candidate sheet in the exact order above, stopped for human review, and the human accepted all cells.

Implemented S corrective changes:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-s-sanie` | `/images/ro/s/ro-s-sanie.webp` | 8134 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-salata` | `/images/ro/s/ro-s-salata.webp` | 8016 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-sandale` | `/images/ro/s/ro-s-sandale.webp` | 7996 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-sandvis` | `/images/ro/s/ro-s-sandvis.webp` | 7828 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-scara` | `/images/ro/s/ro-s-scara.webp` | 8078 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-scoica` | `/images/ro/s/ro-s-scoica.webp` | 8444 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-sfoara` | `/images/ro/s/ro-s-sfoara.webp` | 8780 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-spuma` | `/images/ro/s/ro-s-spuma.webp` | 8976 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-struguri` | `/images/ro/s/ro-s-struguri.webp` | 8376 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-stilou` | `/images/ro/s/ro-s-stilou.webp` | 7198 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-stejar` | `/images/ro/s/ro-s-stejar.webp` | 8660 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-s-saniuta` | `/images/ro/s/ro-s-saniuta.webp` | 7470 B | 256 x 256 | Accepted, AI contact-sheet replacement |

Alt text updated where the new image meaning became more specific: `sanie`, `sandviș`, and `săniuță`.

S circular-slot review:

- The human noted that wheel images are circular and future regenerated assets should be composed for circular display.
- Cropped the accepted S cells with additional padding/recentering and created a circular-mask preview before production promotion.
- Confirmed the accepted S crops fit inside the circular wheel/admin safe area; only background is clipped by the circular mask.
- Updated `docs/image-pipeline.md` with a reusable circular corrective prompt add-on requiring subjects to fit inside the inscribed circle of the square cell.

S brand/style review:

- Created a final comparison sheet mixing `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and all promoted S crops.
- Confirmed the approved crops use true `256 x 256 px` canvases, refined `128 px` pixel-art processing, circle-safe composition, full square backgrounds, and no contact-sheet gutter/cut-background artifacts.
- All promoted S files are below the `12 KiB` warning boundary after lossless WebP optimization.

S verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing warning-threshold images were reported, and none of the promoted S assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Next Corrective Scope: Ș-T-Ț-U-Z Human Flags

The next human-flagged list covers approved images from `Ș`, `T`, `Ț`, `U`, and `Z`. The common issue is the older flat/geometric style with heavy bottom shadows, weaker dimensionality, and less reliable circular wheel fit.

Candidate order for the review sheet:

1. `ro-sh-soricel` / `șoricel`: friendly small mouse, full body, dimensional fur, large ears, tail inside circle-safe area.
2. `ro-sh-soseta` / `șosetă`: single sock or pair of socks with cuff, heel, toe shape, fabric folds, soft volume.
3. `ro-sh-servetel` / `șervețel`: folded napkin or small stack of napkins, paper folds and thickness, no text/pattern clutter.
4. `ro-sh-scoala` / `școală`: small school building, dimensional, friendly, clear doors/windows/bell, no text/sign.
5. `ro-t-tava` / `tavă`: shallow tray or baking tray, metal/wood rim, handles if useful, clear 3D depth.
6. `ro-t-telefon` / `telefon`: phone object, child-readable modern smartphone or simple phone, dimensional screen/body, no brand/text.
7. `ro-t-tigru` / `tigru`: friendly tiger, preferably full body or clear bust, orange stripes, non-scary, dimensional animal style.
8. `ro-t-toba` / `tobă`: drum with cylindrical body, rim, drumhead, sticks if useful, clear volume.
9. `ro-t-tort` / `tort`: whole cake with frosting/layers, child-friendly, no letters/numbers/logos.
10. `ro-t-tricou` / `tricou`: T-shirt with sleeves/collar/fabric folds, dimensional, no text/logo.
11. `ro-t-televizor` / `televizor`: TV set/screen with stand, dimensional body, no text/logo, screen can show simple color/landscape.
12. `ro-tz-testoasa` / `țestoasă`: friendly turtle/tortoise, shell volume, full body, non-scary.
13. `ro-tz-turture` / `țurțure`: natural icicle hanging from a roof/branch edge, transparent icy texture, cold pale background.
14. `ro-u-ulei` / `ulei`: bottle of cooking oil, golden liquid, glass/plastic volume, no label/text.
15. `ro-z-zar` / `zar`: 3D die with pips, rounded cube, clear perspective, no numbers/text.
16. `ro-z-zid` / `zid`: brick wall segment with depth and staggered bricks, not a flat rectangle.
17. `ro-z-zmeura` / `zmeură`: raspberry or small cluster of raspberries, bumpy drupelet texture, leaf if useful.
18. `ro-z-zambila` / `zambilă`: hyacinth flower spike with many small purple blossoms and green leaves, dimensional plant form.

Contact-sheet plan: generate one unlabeled 18-cell candidate sheet in the exact order above, with complete square backgrounds, no heavy bottom shadows, and circle-safe composition inside each cell, then stop for human review before cropping, optimization, JSON edits, or production replacement.

Contact-sheet outcome: generated one unlabeled 18-cell candidate sheet in the exact order above, stopped for human review, and the human accepted all cells.

Implemented Ș-T-Ț-U-Z corrective changes:

| Word ID | Public path | Size | Dimensions | Result |
| --- | --- | ---: | --- | --- |
| `ro-sh-soricel` | `/images/ro/ș/ro-sh-soricel.webp` | 9996 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-sh-soseta` | `/images/ro/ș/ro-sh-soseta.webp` | 9544 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-sh-servetel` | `/images/ro/ș/ro-sh-servetel.webp` | 10426 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-sh-scoala` | `/images/ro/ș/ro-sh-scoala.webp` | 9020 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-tava` | `/images/ro/t/ro-t-tava.webp` | 9686 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-telefon` | `/images/ro/t/ro-t-telefon.webp` | 8822 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-tigru` | `/images/ro/t/ro-t-tigru.webp` | 9888 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-toba` | `/images/ro/t/ro-t-toba.webp` | 9476 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-tort` | `/images/ro/t/ro-t-tort.webp` | 9930 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-tricou` | `/images/ro/t/ro-t-tricou.webp` | 9186 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-t-televizor` | `/images/ro/t/ro-t-televizor.webp` | 7594 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-tz-testoasa` | `/images/ro/ț/ro-tz-testoasa.webp` | 9612 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-tz-turture` | `/images/ro/ț/ro-tz-turture.webp` | 9540 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-u-ulei` | `/images/ro/u/ro-u-ulei.webp` | 9248 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-z-zar` | `/images/ro/z/ro-z-zar.webp` | 9000 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-z-zid` | `/images/ro/z/ro-z-zid.webp` | 9570 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-z-zmeura` | `/images/ro/z/ro-z-zmeura.webp` | 9694 B | 256 x 256 | Accepted, AI contact-sheet replacement |
| `ro-z-zambila` | `/images/ro/z/ro-z-zambila.webp` | 9606 B | 256 x 256 | Accepted, AI contact-sheet replacement |

Alt text updated where the new image meaning became more specific: `șosetă`, `șervețel`, `tavă`, `tobă`, `tort`, `televizor`, `țurțure`, and `zmeură`.

Ș-T-Ț-U-Z circular-slot review:

- Created a circular-mask preview before production promotion.
- Confirmed the accepted crops fit inside the circular wheel/admin safe area; only background is clipped by the circular mask.

Ș-T-Ț-U-Z brand/style review:

- Created a final comparison sheet mixing representative accepted assets (`cozonac`, `cățel`, `cadă`, `buchet`, `scaun`, `sanie`) with all promoted Ș-T-Ț-U-Z crops.
- Confirmed the approved crops use true `256 x 256 px` canvases, refined `128 px` pixel-art processing, circle-safe composition, full square backgrounds, and no contact-sheet gutter/cut-background artifacts.
- All promoted Ș-T-Ț-U-Z files are below the `12 KiB` warning boundary after lossless WebP optimization.

Ș-T-Ț-U-Z verification:

- `pnpm run validate:content` passed outside the sandbox; only pre-existing warning-threshold images were reported, and none of the promoted Ș-T-Ț-U-Z assets were in the warning list.
- `pnpm run lint` passed outside the sandbox.
- `pnpm exec tsc --noEmit --incremental false` passed outside the sandbox.
- `git diff --check` passed.

## Non-Goals

- No broad image-generation batch without a human-approved flagged list.
- No vocabulary additions.
- No reintroduction of `ghicitoare`, `miez`, or `stinghie`.
- No changes for the unresolved `Capea` / `Kapia` note unless a current production word ID is identified and the human approves the scope.
- No database, auth, billing, account, admin editing, AI pronunciation, or clinical claims.
