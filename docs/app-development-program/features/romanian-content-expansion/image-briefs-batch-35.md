# Batch 35 Image Briefs: General Placeholder Replacement Slice 18

Batch: Romanian Content Expansion Batch 35, General Placeholder Image Replacement Slice 18.

Spec date: 2026-05-18.

Status: Implemented eighteenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize the clearest remaining non-person, non-magical placeholders whose concepts could be kept readable in a small wheel thumbnail.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-colaj` | `colaj` | school | Layered colored paper collage with simple cut shapes on sheets, no letters or text. | accepted |
| `ro-c-chiciura` | `chiciură` | nature | One brown branch with white-blue frost crystals, no full winter scene. | accepted |
| `ro-e-echipament` | `echipament` | clothing | A simple sports equipment set with shirt, shorts, and ball, no logos or numbers. | accepted |
| `ro-f-frizerie` | `frizerie` | household | Small barber shop storefront with scissors and striped pole, no people and no text. | accepted |
| `ro-g-ger` | `ger` | nature | Cold-weather symbol with low thermometer, snowflake, and small icicles. | accepted |
| `ro-g-ghereta` | `gheretă` | household | Small booth with roof, window, and door, no text or brand. | accepted |
| `ro-g-gheruta` | `gheruță` | body | Friendly animal paw with small claws, non-scary. | accepted |
| `ro-i-insula` | `insulă` | nature | Small island with water, sand, and palm tree, no people. | accepted |
| `ro-m-musetel` | `mușețel` | nature | One white chamomile flower with yellow center and green stem. | accepted |
| `ro-m-martisor` | `mărțișor` | clothing | Red-white twisted cord with a small heart pendant, no letters or numbers. | accepted |
| `ro-p-poza` | `poză` | household | Framed picture showing simple mountains and sun, no person portrait and no text. | accepted |
| `ro-sh-scoala` | `școală` | school | Small school building with windows, door, and bell, no letters or people. | accepted |

Deferred from the prompt examples:

- `miez`: still broad and context-dependent; an apple core or bread crumb would likely teach a narrower object than the Romanian word.
- `pluș`: still ambiguous between material and plush toy, and the toy reading overlaps the already-ready `ursuleț`.

Remaining placeholder-backed concepts such as person/family records, fantasy/magical records, `frizură`, `gimnastică`, `gimnast`, `ghicitoare`, `stinghie`, `îmbrățișare`, and `împărat` need a separate production tradeoff decision before image replacement.

## Generation And Review

Generation followed the established pixel-art constraints in `docs/image-pipeline.md`, using deterministic local source drawing: each accepted icon was authored as a hard-edged `128 x 128 px` pixel-art source, reviewed on a contact sheet and a comparison sheet against representative existing production assets, rendered to `256 x 256 px`, and encoded as lossless WebP.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters in final assets;
- no person-dependent visuals;
- one centered subject per image, except minimal setting-dependent concepts such as `insulă`, `frizerie`, and `școală`;
- `ger` remains symbolic but clear enough as a cold/frost icon for this slice;
- consistent hard-edged pixel-art style beside representative existing ready images;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

The reviewed source PNGs, contact sheet, brand-comparison sheet, and trace metadata were staged under ignored `assets/image-sources/ro/` paths.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/c/ro-c-colaj.webp
public/images/ro/c/ro-c-chiciura.webp
public/images/ro/e/ro-e-echipament.webp
public/images/ro/f/ro-f-frizerie.webp
public/images/ro/g/ro-g-ger.webp
public/images/ro/g/ro-g-ghereta.webp
public/images/ro/g/ro-g-gheruta.webp
public/images/ro/i/ro-i-insula.webp
public/images/ro/m/ro-m-musetel.webp
public/images/ro/m/ro-m-martisor.webp
public/images/ro/p/ro-p-poza.webp
public/images/ro/ș/ro-sh-scoala.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-c-colaj.webp` | `1082` |
| `ro-c-chiciura.webp` | `906` |
| `ro-e-echipament.webp` | `820` |
| `ro-f-frizerie.webp` | `752` |
| `ro-g-ger.webp` | `786` |
| `ro-g-ghereta.webp` | `396` |
| `ro-g-gheruta.webp` | `1016` |
| `ro-i-insula.webp` | `1222` |
| `ro-m-musetel.webp` | `1002` |
| `ro-m-martisor.webp` | `818` |
| `ro-p-poza.webp` | `582` |
| `ro-sh-scoala.webp` | `482` |

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `335 -> 347`.
- Placeholder images: `35 -> 23`.
- Letter image readiness now includes:
  - `C`: `62` ready / `0` placeholder;
  - `E`: `6` ready / `1` placeholder;
  - `F`: `15` ready / `2` placeholder;
  - `G`: `37` ready / `5` placeholder;
  - `I`: `8` ready / `0` placeholder;
  - `M`: `21` ready / `3` placeholder;
  - `P`: `33` ready / `1` placeholder;
  - `Ș`: `12` ready / `0` placeholder.

No `Ă` or `Â` bucket work was added.
