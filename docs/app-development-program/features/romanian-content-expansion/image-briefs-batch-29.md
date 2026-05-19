# Batch 29 Image Briefs: General Placeholder Replacement Slice 12

Batch: Romanian Content Expansion Batch 29, General Placeholder Image Replacement Slice 12.

Spec date: 2026-05-18.

Status: Implemented twelfth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear F/V/Ș/Ț placeholders whose reviewed thumbnail concepts were clear enough for wheel and modal use.

`frigider` was left unchanged because it was already marked ready before this slice. The prompt spelling `șort` did not exist as a production record; the implemented existing record is `șorț`.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-f-fusta` | `fustă` | clothing | One simple child-sized skirt with clear waistband and fabric shape, no person. | accepted |
| `ro-f-fotoliu` | `fotoliu` | household | One cozy rounded armchair, no person and no room scene. | accepted |
| `ro-f-fasole` | `fasole` | food | One simple bowl of beans, clearly beans, no label or extra meal scene. | accepted |
| `ro-v-vagon` | `vagon` | vehicle | One generic red train wagon railcar, no locomotive, text, or brand. | accepted |
| `ro-v-varza` | `varză` | food | One green cabbage head with layered leaves. | accepted |
| `ro-v-vaza` | `vază` | household | One simple blue vase, empty, no flowers or table scene. | accepted |
| `ro-v-veverita` | `veveriță` | animal | One friendly red-brown squirrel with bushy tail and one acorn. | accepted |
| `ro-v-vioara` | `vioară` | toy | One brown violin with bow, no sheet music or text. | accepted |
| `ro-v-vitel` | `vițel` | animal | One friendly young calf, light brown and white, no farm clutter. | accepted |
| `ro-sh-sal` | `șal` | clothing | One folded purple shawl, broader than a scarf, no person. | accepted |
| `ro-sh-sampon` | `șampon` | household | One plain pump shampoo bottle, no label, brand, or text. | accepted |
| `ro-sh-servetel` | `șervețel` | household | One folded white paper napkin, no plate or food. | accepted |
| `ro-sh-sort` | `șorț` | clothing | One child apron with neck loop and waist ties, no person. | accepted |
| `ro-sh-siret` | `șiret` | clothing | One loose shoelace tied in a bow, no shoe. | accepted |
| `ro-sh-surub` | `șurub` | household | One simple silver screw, side view with slot head, no tools. | accepted |
| `ro-tz-tap` | `țap` | animal | One friendly male goat with small horns and beard, non-scary. | accepted |
| `ro-tz-teava` | `țeavă` | household | One short bent gray plumbing pipe segment, no water or tools. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 6-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, resized to `256 x 256 px`, simplified to a small hard-edged pixel palette, and encoded as final lossless WebP assets with local `cwebp`. This kept every final asset under the `12 KB` warning threshold and the `20 KB` hard maximum while preserving clear silhouettes.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no person-dependent visuals for clothing or household objects;
- `țap` is friendly and non-scary;
- `șampon` is plain and unbranded;
- `țeavă` reads as a clean pipe, with no unsafe or cluttered repair scene;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/f/ro-f-fusta.webp
public/images/ro/f/ro-f-fotoliu.webp
public/images/ro/f/ro-f-fasole.webp
public/images/ro/v/ro-v-vagon.webp
public/images/ro/v/ro-v-varza.webp
public/images/ro/v/ro-v-vaza.webp
public/images/ro/v/ro-v-veverita.webp
public/images/ro/v/ro-v-vioara.webp
public/images/ro/v/ro-v-vitel.webp
public/images/ro/ș/ro-sh-sal.webp
public/images/ro/ș/ro-sh-sampon.webp
public/images/ro/ș/ro-sh-servetel.webp
public/images/ro/ș/ro-sh-sort.webp
public/images/ro/ș/ro-sh-siret.webp
public/images/ro/ș/ro-sh-surub.webp
public/images/ro/ț/ro-tz-tap.webp
public/images/ro/ț/ro-tz-teava.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-f-fusta.webp` | `5930` |
| `ro-f-fotoliu.webp` | `5230` |
| `ro-f-fasole.webp` | `7664` |
| `ro-v-vagon.webp` | `4764` |
| `ro-v-varza.webp` | `9640` |
| `ro-v-vaza.webp` | `4338` |
| `ro-v-veverita.webp` | `7476` |
| `ro-v-vioara.webp` | `8862` |
| `ro-v-vitel.webp` | `8692` |
| `ro-sh-sal.webp` | `7612` |
| `ro-sh-sampon.webp` | `3264` |
| `ro-sh-servetel.webp` | `5678` |
| `ro-sh-sort.webp` | `6390` |
| `ro-sh-siret.webp` | `5938` |
| `ro-sh-surub.webp` | `4744` |
| `ro-tz-tap.webp` | `8868` |
| `ro-tz-teava.webp` | `4148` |

Source PNGs and the accepted contact sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `215 -> 232`.
- Placeholder images: `155 -> 138`.
- Letter image readiness now includes:
  - `F`: `14` ready / `3` placeholder;
  - `V`: `9` ready / `0` placeholder;
  - `Ș`: `11` ready / `1` placeholder;
  - `Ț`: `4` ready / `1` placeholder.

No `Ă` or `Â` bucket work was added.
