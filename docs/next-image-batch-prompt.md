# Next Image Batch Prompt

There is no additional approved image-generation scope after Romanian Content Expansion Batch 40. Batch 39 finalized the current Romanian image completion scope, and Batch 40 completed the first human-flagged A-C corrective image regeneration pass. Do not generate images, add vocabulary, or create another image batch without a separate human-approved production decision.

The approved image-related path for future work is corrective review through `docs/app-development-program/features/romanian-content-expansion/corrective-image-audit-batch-40.md` when the human supplies a list of poor, unclear, or off-style ready images. Batch 40 corrective passes are complete through the human-approved G-M list: the deterministic local-drawing replacement attempt was rejected and restored, later AI contact sheets were human-approved, and the accepted cells were promoted. Do not repeat the deterministic SVG-like/local drawing approach.

Current finalized Romanian production pack:

- Approved words: `367`.
- Ready images: `367`.
- Approved placeholders: `0`.
- Rejected audit-trail records: `ghicitoare`, `miez`, and `stinghie`.
- Unresolved spoken note: `Capea` / `Kapia`; no current production word ID matches it.

Batch 39 confirmed the production JSON, public image assets, `/admin/words`, and representative gameplay routes all match the finalized pack counts. Batch 40 replaced human-flagged A-C, D-F, and G-M ready images and kept the reused old casual-cap `caschetă` bitmap for `șapcă`. The public non-placeholder image tree should still contain exactly `367` WebP files referenced by approved ready records, with no missing or unused production image assets.

## Remaining Release Verification Steps

Before release or deployment handoff:

1. Run `pnpm run build`.
2. Deploy or inspect the Vercel preview.
3. Verify deployed `/ro`, `/admin/words`, and representative `/ro/play/...` routes on mobile and desktop.
4. Complete final human visual review of the deployed production image pack.

## Future Scope Rule

Any future vocabulary, image, `Ă`/`Â` bucket, route/schema, speech-target metadata, admin editing, auth, database, billing, account, AI pronunciation, clinical-claim, or image-generation work needs a new explicit human-approved production scope before implementation.

## Corrective Image Audit Rule

For each human-flagged bad image, agents must inspect the current image and compare it against the production reference set in `docs/image-pipeline.md` before generating anything. Record quality, style, 3D-ness, pixel construction, shadows, shape, subject size, background color, color/contrast, and thumbnail readability.

If the object or Romanian word sense is uncertain, look up online images of the object before writing a regeneration direction. Use online references only to understand object shape and common visual features; do not copy external artwork. Record source URLs in the Batch 40 audit document.

Only after the audit has a clear per-word decision should a later image-generation batch create candidates, comparison sheets, optimized WebP assets, and content/status updates.

For corrective generation, use the earlier successful AI contact-sheet workflow: generate a small sheet with generous gutters and no labels, then stop and ask the human to review it before cropping or replacing anything. Use sheets of about `12` to `15` images so a bad style batch can be rejected early. After human approval, crop cells in fixed order, normalize the background, compare against high-quality references such as `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, and `umbrelă`, then promote only accepted assets.

For smooth AI outputs, use the Batch 40 post-processing default unless the image clearly needs a different treatment: crop the accepted cell, resolve it through a refined `128 px` pixel-art grid, palette-limit to roughly `96` to `128` colors, nearest-neighbor upscale to `256 x 256 px`, and optimize as lossless WebP. Avoid `64 px`-style coarseness unless the human explicitly requests retro sprites.

After contact-sheet cropping, always verify that the final icon has a full square background or transparency across the entire `256 x 256 px` canvas. Reject or repair white gutters, side bars, corner blocks, cut-background patches, and rectangular panel artifacts before promotion.

## Ready-To-Copy Prompt For Next Agent

You are continuing Word Wheel image work after Romanian Content Expansion Batch 40. Do not generate or replace images unless the human has supplied a new explicit corrective scope.

Read first:

1. `AGENTS.md`
2. `docs/agent-brief.md`
3. `docs/image-pipeline.md`
4. `docs/app-development-program/features/romanian-content-expansion/corrective-image-audit-batch-40.md`
5. `docs/app-development-program/features/romanian-content-expansion/status.md`
6. `docs/status.md`

Critical context:

- The current pack has `367` approved words, `367` ready images, and `0` approved placeholders.
- Batch 40 completed the human-flagged A-C corrective image list: `ro-a-acoperis`, `ro-a-alge`, `ro-a-ascutitoare`, `ro-a-ata`, `ro-b-branza`, `ro-b-barza`, `ro-b-buzunar`, `ro-c-ceapa`, `ro-c-ciorap`, `ro-c-cirese`, `ro-c-cap`, `ro-c-colaj`, `ro-c-cascheta`, and `ro-c-chiciura`.
- Batch 40 also kept `ro-sh-sapca` as the reused old casual-cap `caschetă` bitmap.
- The deterministic SVG-like/local drawing approach was rejected by the human as ugly, coarse, flat, and off-brand. Do not repeat that approach.
- Batch 40's accepted corrective replacements came from an AI contact sheet, then were cropped in fixed order, processed through a refined `128 px` grid, palette-limited to `96` colors, nearest-upscaled to `256 x 256 px`, and optimized as lossless WebP.
- The follow-up cleanup normalized full square backgrounds for the accepted A-C assets that looked cut after cropping; future crops must not leave contact-sheet gutters or partial background panels.
- `ro-a-ascutitoare` still needs a human-reviewed object fix because the pencil points outward instead of into the sharpener.
- `ro-b-bicicleta` still needs a human-reviewed quality/style improvement.
- The A-C corrective set is marked done for now, but can still be improved in a later polish pass.
- The D-F corrective scope is complete: `desen`, `duș`, `echer`, `echipament`, `față`, `frunză`, `fasole`, `frizerie`, and `frizură` were generated as one `3 x 3` AI contact sheet, accepted by the human, cropped in fixed order, background-normalized, and promoted as `256 x 256 px` lossless WebP assets.
- The G-M corrective scope is complete: `gem`, `garaj`, `gemeni`, `ger`, `gheretă`, `gheruță`, `insulă`, `iaz`, `lac`, `melc`, `mușețel`, `mărțișor`, and `mazăre` were generated as one `13`-cell AI contact sheet, accepted by the human, cropped in fixed order, background-normalized into true square canvases, and promoted as optimized `256 x 256 px` lossless WebP assets. `mărțișor` was checked against online Romanian/tradition references before prompting.
- Future corrective work needs a new human-flagged list and must stop for human review after the generated contact sheet.

Goal:

If the human has provided a new flagged image list, audit each image first, generate one small corrective candidate sheet with the earlier successful AI contact-sheet workflow, then stop for human review.

Use this style target:

- realistic-cartoon pixel art, closer to `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, and `scaun`;
- polished, lightly dimensional, with cartoon-friendly colors but believable object forms;
- visible refined pixel-art texture after post-processing, not flat vector art, emoji, blocky icon, or coarse 64 px sprite;
- subject fills roughly `70%` to `85%` of the square with safe margins;
- pale warm off-white or soft sky-blue background only where useful;
- simple, pack-consistent contact shadow when needed;
- no text, letters, logos, brands, watermarks, copyrighted characters, clutter, scary expression, or confusing extra objects.

Generate one contact sheet only:

- about `12` to `15` cells, or fewer if the human flagged fewer images;
- generous gutters;
- no labels or text inside the generated sheet;
- square cells, one centered image per cell;
- preserve the human-provided order exactly;
- after the sheet is generated, stop and ask the human to review it before cropping, optimizing, editing JSON, or replacing production files.

After generating the contact sheet:

1. Show the sheet to the human.
2. Ask which cells are accepted, rejected, or need another pass.
3. Do not crop or promote anything until the human responds.
4. If approved, crop only accepted cells in the fixed order, normalize background, preserve the realistic-cartoon pixel-art quality, use the `128 px` grid / `96` to `128` color / nearest-upscale post-processing default if needed, optimize to `256 x 256 px` WebP, update only necessary alt text, and run:
   - `pnpm run validate:content`
   - `pnpm run lint`
   - `pnpm exec tsc --noEmit --incremental false`
   - `git diff --check`
5. Update `corrective-image-audit-batch-40.md`, `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and this prompt.
