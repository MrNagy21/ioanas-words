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

## Non-Goals

- No broad image-generation batch without a human-approved flagged list.
- No vocabulary additions.
- No reintroduction of `ghicitoare`, `miez`, or `stinghie`.
- No changes for the unresolved `Capea` / `Kapia` note unless a current production word ID is identified and the human approves the scope.
- No database, auth, billing, account, admin editing, AI pronunciation, or clinical claims.
