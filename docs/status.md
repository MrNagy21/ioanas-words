# Word Wheel Status

Last updated: 2026-05-16

## Current Phase

Phase: Batch 8 implementation complete; browser verification pending user-running dev server

Overall status: Static Romanian starter content drives an interactive SVG wheel with segment labels, ready image rendering, stable placeholder fallbacks, spin selection, and spin animation. The wheel itself is the primary spin target, decorative frame effects stay fixed outside the rotating surface, word labels and the center letter stay upright, and spin animation uses a longer physical deceleration. Batch 4 adds the result modal, close/keep flow, client-side word removal, reset current letter, choose-another-letter paths, reduced-motion spin behavior, and a clear empty-wheel state after all current-letter words are removed. Batch 5 added local static content validation for Romanian letters, word manifests, image paths, duplicate IDs, letter buckets, and production status rules. Batch 6 selected pixel art, AI batch generation with human review, `256 x 256 px` lossless WebP, size targets, prompt/style guidelines, and word-ID naming conventions in `docs/image-pipeline.md`, then added local ready-image validation and a dry-run capable optimizer command. The `C`, `M`, `A`, and `P` starter image pilots now each have all 10 words ready. All four pilot sets are background-normalized, marked ready after visual review, and stored as local `256 x 256 px` WebP assets. The user manually verified the updated `M`, `A`, and `P` image batches in the running app and reported they work fine. Batch 8 removed the default word-preview list from the play screen, enlarged and simplified the wheel-first layout, improved the letter selection grid, added modal focus management and focus trapping, improved contrast for primary actions, and added a future-ready word-selection helper for later letter inclusion modes. A hydration warning on the play route was addressed by making SVG wheel numeric transforms deterministic and suppressing known browser-extension mutations on `<body>`. The one-word remaining wheel state draws a full SVG disk instead of a collapsed 360-degree arc, so the last word keeps its segment color.

## Completed

- Created initial product specification.
- Created initial implementation plan.
- Created initial status tracker.
- Created agent-facing handoff instructions.
- Scaffolded a Next.js App Router app with TypeScript.
- Added baseline app metadata and global styles.
- Added Romanian-first routes:
  - `/` defaults into the Romanian app.
  - `/ro` is statically generated with `generateStaticParams`.
- Added the planned static-first project structure:
  - `app/`
  - `src/components/`
  - `src/content/`
  - `src/game/`
  - `src/i18n/`
  - `src/utils/`
  - `content/ro/`
  - `public/images/ro/`
  - `scripts/content/`
- Added linting and formatting configuration.
- Added baseline `README.md` with setup and commands.
- Switched the project to pnpm and added `pnpm-lock.yaml`.
- Added `pnpm-workspace.yaml` with approved build scripts for `sharp` and `unrs-resolver`.
- Confirmed local dev server starts at `http://localhost:3000`.
- Confirmed `HEAD /` and `HEAD /ro` return `200 OK` locally.
- Confirmed production build succeeds.
- Built a full-viewport, no-scroll app shell.
- Added responsive layouts for mobile phone, tablet, and desktop viewports.
- Kept Romanian as the default locale route:
  - `/` redirects to `/ro`.
  - `/ro` shows the letter selection view.
- Added static placeholder game routes under `/ro/play/<letter>`.
- Added a placeholder Romanian letter selection view.
- Added a placeholder game view with inactive reset and spin controls.
- Added basic theme tokens and responsive CSS in `app/globals.css`.
- Kept Batch 1 free of real gameplay, real content, accounts, billing, database, admin tools, and AI features.
- Updated `AGENTS.md` to clarify that the user is responsible for running the local dev server on port `3000`; agents should verify against that server or ask the user to start it.
- Added `content/ro/letters.json` with the starter Romanian letter manifest:
  - `A`
  - `C`
  - `M`
  - `P`
- Added per-letter Romanian word manifests:
  - `content/ro/words-a.json`
  - `content/ro/words-c.json`
  - `content/ro/words-m.json`
  - `content/ro/words-p.json`
- Added 40 manually selected approved starter words: 10 words for each starter letter.
- Kept words common, concrete, child-known, and suitable for ages 4 to 6.
- Added stable placeholder image paths and `imageStatus: "placeholder"` metadata; no real image assets were added.
- Added TypeScript content types in `src/content/types.ts`.
- Added static content loading utilities in `src/content/loaders.ts`.
- Wired `/ro` to render starter letters and approved word counts from local JSON.
- Wired `/ro/play/<letter>` routes to generate from enabled local content letters.
- Wired placeholder game pages to show approved starter words for the selected letter while keeping gameplay disabled for Batch 3.
- Kept Batch 2 free of database, accounts, billing, admin tools, AI pronunciation, generated content workflows, and wheel gameplay.
- Started Batch 3: Wheel Gameplay.
- Replaced the disabled placeholder game view with a client-side gameplay component in `src/components/wheel-game.tsx`.
- Built the wheel as SVG, with one segment per approved starter word for the selected letter.
- Rendered word labels directly inside wheel segments.
- Added stable image slots/placeholders inside each segment without adding real image assets.
- Implemented random spin result selection from the approved words for the current letter.
- Implemented wheel rotation animation with a fixed spin duration.
- Disabled the spin button while animation is running.
- Added an inline post-spin result state that shows the selected word without introducing the Batch 4 result modal/removal workflow.
- Kept the reset button disabled because word removal/reset behavior belongs to Batch 4.
- Added a gameplay-level empty wheel state for future letters with no approved words.
- Kept content loaded from static JSON and local app files.
- Kept Batch 3 free of database, accounts, billing, admin tools, AI pronunciation, generated content workflows, real image assets, and image pipeline work.
- Captured follow-up UX requirements from review:
  - spin should be triggered by pressing/tapping the wheel;
  - the wheel shadow/rim effects should stay fixed instead of rotating with the wheel;
  - word labels should stay upright/horizontal while the wheel spins;
  - the center letter should stay upright/horizontal while the wheel spins;
  - spin deceleration should lose speed faster early, then slow more gently near the end;
  - typical spin duration should be roughly 5 to 10 seconds;
  - the result modal should show the selected word and placeholder image first, with real pixel art added later through the image pipeline.
- Added Batch 3.5 to `docs/plan.md` for wheel UX and animation polish before Batch 4.
- Updated `docs/spec.md` with the agreed wheel interaction, animation, fixed-shadow, upright-label, and result-image direction.
- Started Batch 3.5: Wheel UX And Animation Polish.
- Made the wheel itself a real touch/mouse spin target in `src/components/wheel-game.tsx`.
- Kept the separate spin button as a secondary accessible control and disabled both spin targets while animation is running.
- Moved wheel border, rim, inset, and shadow styling into a fixed `.wheel-frame` outside the rotating SVG surface.
- Split the SVG into a rotating wheel surface plus a fixed center hub so the selected letter stays upright.
- Counter-rotated segment word labels and placeholder initials during spins so they remain horizontal and readable.
- Increased spin duration to roughly 5.6 to 7.8 seconds.
- Updated spin easing to drop speed faster early and slow more gently near the end.
- Preserved static JSON/local app content loading.
- Kept Batch 3.5 free of result modal, word removal/reset workflow, real image assets, image pipeline work, database, accounts, billing, admin tools, AI pronunciation, and generated content workflows.
- Retried the pending Batch 3.5 local verification before starting Batch 4; `http://localhost:3000/ro` was still unreachable because no user-running dev server was listening on port `3000`.
- Started and completed Batch 4: Result Modal And Word Removal.
- Added a result modal that opens after the wheel lands.
- Shows the selected word prominently in the modal.
- Shows the selected placeholder image slot prominently in the modal without adding real image assets.
- Added close/keep behavior through the modal keep action.
- Added remove-from-current-wheel behavior using in-memory client-side removed word IDs.
- Added reset current letter behavior that restores removed words for the current letter.
- Added choose-another-letter actions from the modal and empty-wheel state.
- Added reduced-motion spin behavior using `prefers-reduced-motion`.
- Added a clear empty-wheel state when all current-letter words have been removed, with reset and choose-another-letter actions.
- Preserved static JSON/local app content loading.
- Preserved free anonymous gameplay.
- Kept Batch 4 free of real image assets, image pipeline work, database, accounts, billing, admin tools, AI pronunciation, generated content workflows, and content validation pipeline work.
- Started and completed Batch 5: Content Validation.
- Added `scripts/content/validate-content.mjs` as a local runtime validator with no new dependencies.
- Added `pnpm run validate:content`.
- Validates `content/<locale>/letters.json` manifest shape, supported locale, letter IDs, labels, sort order uniqueness, and referenced word files.
- Validates per-letter word files for required fields, enum values, normalized Romanian text, ID shape, image metadata, source metadata, and status values.
- Validates duplicate word IDs and duplicate image paths across the content pack.
- Validates letter bucket correctness by checking manifest letter, word file letter, word ID prefix, word/display starting letter, and folded normalized starting letter.
- Validates static image paths under `/images/<locale>/<letter>/<word-id>.webp`.
- Enforces that `imageStatus: "ready"` assets exist in `public/` and have production-ready licensing when approved.
- Allows current `imageStatus: "placeholder"` paths to validate without adding real image assets.
- Kept Batch 5 free of real image assets, image pipeline work, database, accounts, billing, admin tools, AI pronunciation, generated content workflows, and Batch 6 work.
- Completed a targeted content hygiene pass before Batch 6.
- Added shared content rule values in `src/content/rules.mjs` with TypeScript declarations in `src/content/rules.d.mts`.
- Updated `src/content/types.ts` to derive content enum types from the shared rules.
- Updated `scripts/content/validate-content.mjs` to read the same shared content rule values.
- Tightened local v1 image validation to `.webp` only, matching the image pipeline decision.
- Added `docs/image-pipeline.md` with researched image decisions and source links.
- Selected high-clarity pixel art for the first Romanian image pack.
- Selected AI batch generation as the primary production image source.
- Kept public/royalty-free asset packs as reference/fallback sources only, not the main pack source.
- Locked batch generation guidance:
  - pilot batch: 12 to 20 images;
  - normal batch: 10 to 25 images;
  - maximum batch: 30 images before review.
- Added a baseline AI prompt template, negative prompt guidance, palette direction, style rules, and human review rules in `docs/image-pipeline.md`.
- Selected final committed asset dimensions: `256 x 256 px`.
- Selected final committed format: lossless `.webp`.
- Set image size targets:
  - goal `<= 8 KB`;
  - warning threshold `> 12 KB`;
  - hard maximum `20 KB`.
- Locked local naming convention: `public/images/<locale>/<letter>/<word-id>.webp`, stored in JSON as `/images/<locale>/<letter>/<word-id>.webp`.
- Updated `docs/spec.md`, `docs/plan.md`, and `README.md` with image-pipeline decisions.
- Fixed a reported React hydration warning on `/ro/play/<letter>`:
  - rounded SVG path and upright label transform numbers before rendering so server and client serialize the same transform strings;
  - added `suppressHydrationWarning` on `<body>` for extension-injected attributes such as `cz-shortcut-listen`.
- Completed Batch 6 image pipeline tooling without adding real production image assets.
- Added shared local image rule constants:
  - `256 x 256 px` final dimensions;
  - `12 KB` warning threshold;
  - `20 KB` hard maximum;
  - `.webp` final local format.
- Extended `pnpm run validate:content` so words with `imageStatus: "ready"` must have an existing `.webp` file under `public/images/<locale>/<letter>/<word-id>.webp`.
- Added ready-image validation for WebP file headers, dimensions, warning byte size, and hard maximum byte size.
- Kept `imageStatus: "placeholder"` image paths valid without requiring files.
- Added ignored staging folder `assets/image-sources/` with a retained `.gitkeep`.
- Added `scripts/images/optimize-images.mjs`.
- Added `pnpm run optimize:images`.
- The optimizer reads staged source images from `assets/image-sources/<locale>/<letter>/<word-id>.(png|jpg|jpeg|webp|avif)`.
- The optimizer writes final local assets to `public/images/<locale>/<letter>/<word-id>.webp`.
- The optimizer uses a transparent `256 x 256 px` canvas, nearest-neighbor resizing, and lossless WebP output.
- The optimizer supports `--dry-run` and exits cleanly when no source images exist.
- Added explicit `sharp@0.34.5` dev dependency for image optimization.
- Updated `README.md` and `docs/image-pipeline.md` with staging, optimizer usage, encoder settings, validation behavior, and human-review expectations.
- Completed the pending local browser verification against the user-running dev server on `http://localhost:3000`.
- Verified `/ro` loads the Romanian letter selection with A, C, M, and P.
- Verified `/ro/play/m` loads a playable M wheel.
- Verified tapping/clicking the wheel starts a spin.
- Verified both spin targets are disabled while spinning:
  - wheel button changes to `aria-label="Roata se învârte"` and `disabled=true`;
  - secondary spin button changes to `Se învârte` and `disabled=true`.
- Verified wheel frame shadow/rim effects stay fixed while the SVG wheel surface rotates.
- Verified word labels stay upright through counter-rotated `.word-wheel__upright` transforms.
- Verified the center letter stays upright/fixed during spin.
- Verified the result modal opens after the wheel lands.
- Verified close/keep leaves all words available.
- Verified remove-from-current-wheel removes the selected word until reset.
- Verified reset current letter restores removed words.
- Verified modal choose-another-letter navigation returns to `/ro`.
- Verified removing all current-letter words reaches the empty-wheel state.
- Verified the empty-wheel choose-another-letter action returns to `/ro`.
- Completed the next content/image step after Batch 6 tooling: a small AI-generated image pilot before broad Batch 7 expansion.
- Chose 9 existing approved Romanian starter words from the `C` letter bucket:
  - `ro-c-caine`
  - `ro-c-cal`
  - `ro-c-casa`
  - `ro-c-cana`
  - `ro-c-carte`
  - `ro-c-cub`
  - `ro-c-creion`
  - `ro-c-copac`
  - `ro-c-castravete`
- Generated high-clarity child-friendly pixel-art candidates using the built-in image generation workflow as the primary source.
- Visually reviewed the 9 candidates for recognizability, child safety, no text/logo/watermark, style consistency, and file-size viability.
- Rejected the first direct optimization output as production-ready because all 9 lossless WebP files exceeded the `20 KB` hard maximum.
- Post-processed the accepted AI candidates into simpler low-palette pixel source PNGs, then staged them under `assets/image-sources/ro/c/<word-id>.png`.
- Added ignored pilot trace metadata at `assets/image-sources/ro/c/pilot-metadata.json`.
- Ran the documented image optimizer dry run for the 9 staged pilot sources.
- Ran the documented image optimizer and wrote final local assets to `public/images/ro/c/<word-id>.webp`.
- Confirmed all 9 final WebP files are `256 x 256 px`, lossless WebP, and below the `20 KB` hard maximum through `pnpm run validate:content`.
- Normalized all 9 `C` pilot image backgrounds to the same warm light color after review feedback that the dog candidate still had a blue background.
- Marked only the 9 accepted reviewed pilot images as `imageStatus: "ready"` in `content/ro/words-c.json`.
- Changed those 9 ready image licenses to `app-owned`.
- Kept `ro-c-copil` and all other starter words on valid placeholder image paths.
- Kept the pilot free of database, accounts, billing, admin tools, AI pronunciation, and broad serious content expansion.
- Fixed the one-word remaining wheel state in `src/components/wheel-game.tsx` by drawing full-circle SVG segments as two arcs, preserving the last word's segment color instead of exposing the white wheel background.
- Wired `imageStatus: "ready"` words into the UI:
  - SVG wheel image slots render the reviewed WebP image.
  - Word preview chips render the reviewed WebP image.
  - Result modal renders the selected reviewed WebP image with alt text.
  - Placeholder words still render stable letter placeholders.
- Added the missing reviewed `copil` image:
  - generated a child-safe pixel-art candidate;
  - normalized it to the shared warm light background;
  - staged it at `assets/image-sources/ro/c/ro-c-copil.png`;
  - optimized it to `public/images/ro/c/ro-c-copil.webp`;
  - marked `ro-c-copil` as `imageStatus: "ready"` and `license: "app-owned"`.
- Improved image UX across the game:
  - moved wheel images farther toward the outside of each segment;
  - increased wheel image size from `34 x 34` to `42 x 42`;
  - clipped wheel images into circular chips;
  - made word preview icons larger and circular;
  - made result modal images circular and larger.
- Added `docs/next-image-batch-prompt.md` with the prepared next `M` image batch prompt and follow-up checklist.
- Completed the `M` image pilot:
  - generated pixel-art candidates for all 10 approved `M` starter words using the shared image prompt;
  - visually reviewed the candidates for recognizability, child safety, no text/logo/watermark, style consistency, and one centered subject;
  - normalized the source PNG backgrounds to the shared warm light color `rgb(253, 247, 230)`;
  - staged reviewed source PNGs under `assets/image-sources/ro/m/<word-id>.png`;
  - added ignored pilot trace metadata at `assets/image-sources/ro/m/pilot-metadata.json`;
  - wrote final `256 x 256 px` lossless WebP assets under `public/images/ro/m/<word-id>.webp`;
  - marked all 10 `M` words as `imageStatus: "ready"` and `license: "app-owned"` in `content/ro/words-m.json`.
- Kept the `M` pilot free of database, accounts, billing, admin tools, AI pronunciation, and broad Batch 7 content expansion.
- Recorded user manual verification that the updated `M` image batch works fine in the app.
- Replaced `docs/next-image-batch-prompt.md` with a single copy-pasteable `A` image batch prompt for the next 10 approved starter words.
- Completed the `A` image pilot:
  - generated pixel-art candidates for all 10 approved `A` starter words using the shared image prompt;
  - visually reviewed the candidates for recognizability, child safety, no text/logo/watermark, style consistency, and one centered subject;
  - normalized the source PNG backgrounds to the shared warm light color `rgb(253, 247, 230)`;
  - staged reviewed source PNGs under `assets/image-sources/ro/a/<word-id>.png`;
  - added ignored pilot trace metadata at `assets/image-sources/ro/a/pilot-metadata.json`;
  - wrote final `256 x 256 px` lossless WebP assets under `public/images/ro/a/<word-id>.webp`;
  - marked all 10 `A` words as `imageStatus: "ready"` and `license: "app-owned"` in `content/ro/words-a.json`.
- Kept the `A` pilot free of database, accounts, billing, admin tools, AI pronunciation, and broad Batch 7 content expansion.
- Replaced `docs/next-image-batch-prompt.md` with a single copy-pasteable `P` image batch prompt for the remaining starter letter bucket.
- Recorded user manual verification that the updated `A` image batch works fine in the app.
- Completed the `P` image pilot:
  - generated pixel-art candidates for all 10 approved `P` starter words using the shared image prompt;
  - visually reviewed the candidates for recognizability, child safety, no text/logo/watermark, style consistency, and one centered subject;
  - normalized the source PNG backgrounds to the shared warm light color `rgb(253, 247, 230)`;
  - staged reviewed source PNGs under `assets/image-sources/ro/p/<word-id>.png`;
  - added pilot trace metadata at `assets/image-sources/ro/p/pilot-metadata.json`;
  - wrote final `256 x 256 px` lossless WebP assets under `public/images/ro/p/<word-id>.webp`;
  - marked all 10 `P` words as `imageStatus: "ready"` and `license: "app-owned"` in `content/ro/words-p.json`.
- Kept the `P` pilot free of database, accounts, billing, admin tools, AI pronunciation, and broad Batch 7 content expansion.
- Recorded user manual verification that the updated `P` image batch works fine in the app.
- Started and completed Batch 8 implementation work:
  - removed the full word preview list from the play screen so the wheel is the clear visual focus;
  - kept a compact game status panel for the selected letter, spin prompt, and last selected word;
  - enlarged the wheel layout and adjusted responsive wheel sizing across mobile, tablet, and desktop breakpoints;
  - moved wheel image chips farther toward the outside of each segment;
  - moved word labels farther from the center and rendered them in a top SVG layer so longer labels remain visible over the hub;
  - improved the mobile letter-selection grid to use larger four-column letter tiles;
  - hid the decorative wheel preview on mobile letter selection to give the letter grid more room;
  - darkened the primary action color to improve white-text contrast;
  - added result-modal initial focus, Escape close, Tab/Shift+Tab focus trapping, and focus return after close.
- Added future word mode planning in `docs/future-word-modes.md`.
- Updated `docs/spec.md` and `docs/plan.md` with the future expanded-content and letter-inclusion-mode direction.
- Added `src/game/word-selection.ts` with a default `starts-with` mode and future mode types for `starts-with-or-contains` and `contains-only`, without exposing the future mode UI yet.

## In Progress

- No implementation is currently in progress.

## Available Commands

Use pnpm:

```bash
pnpm install
pnpm run dev
pnpm run validate:content
pnpm run optimize:images -- --dry-run
pnpm run optimize:images
pnpm run build
pnpm run lint
pnpm run format
pnpm run format:write
```

The package manager is pinned in `package.json`:

```json
"packageManager": "pnpm@11.1.2"
```

Note: use the nvm Node PATH when running local pnpm commands in automation. A previous local build attempt hit a macOS code-signing rejection for the installed Next SWC native binary, but the latest build completed successfully with nvm Node `v24.15.0`.

`pnpm run validate:content` was added in Batch 5 and now validates ready local image dimensions and byte sizes. `pnpm run optimize:images` was added in Batch 6.

## Verification

- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after Batch 6 image validation changes.
- `pnpm run lint`: passes with nvm Node `v24.15.0` after Batch 6 image pipeline changes.
- `pnpm run format`: passes with nvm Node `v24.15.0` after Batch 6 image pipeline changes.
- `pnpm run optimize:images -- --dry-run`: passes with nvm Node `v24.15.0`; no source images are currently staged.
- `pnpm run optimize:images`: passes with nvm Node `v24.15.0`; no source images are currently staged.
- `pnpm run optimize:images -- --dry-run`: passes with nvm Node `v24.15.0` for 9 staged `C` pilot source images.
- `pnpm run optimize:images`: passes with nvm Node `v24.15.0` for 9 staged `C` pilot source images.
- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after marking 9 `C` pilot images ready.
- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after normalizing the 9 `C` pilot image backgrounds.
- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after wiring ready images into the UI.
- `pnpm run lint`: passes with nvm Node `v24.15.0` after wiring ready images into the UI.
- `pnpm run format`: passes with nvm Node `v24.15.0` after wiring ready images into the UI and adding the next-batch prompt.
- `pnpm run build`: passes with nvm Node `v24.15.0` after wiring ready images into the UI.
- `pnpm run optimize:images -- --dry-run`: passes with nvm Node `v24.15.0` for 10 staged `C` source images after adding `copil`.
- `pnpm run optimize:images`: passes with nvm Node `v24.15.0` for 10 staged `C` source images after adding `copil`.
- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after adding `copil` and polishing image UX.
- `pnpm run lint`: passes with nvm Node `v24.15.0` after adding `copil` and polishing image UX.
- `pnpm run format`: passes with nvm Node `v24.15.0` after adding `copil` and polishing image UX.
- `pnpm run build`: passes with nvm Node `v24.15.0` after adding `copil` and polishing image UX.
- `bun run optimize:images --dry-run --source /private/tmp/word-wheel-m-sources`: passes for 10 staged `M` source images.
- `bun run optimize:images --source /private/tmp/word-wheel-m-sources`: fails locally because the installed Sharp native module is rejected by macOS code signing (`mapping process and mapped file (non-platform) have different Team IDs`).
- Bundled Python/Pillow WebP export wrote 10 final `M` images as `256 x 256 px` lossless WebP files under `public/images/ro/m/`.
- Final `M` WebP verification confirmed all 10 files are `256 x 256 px`, below the `20 KB` hard maximum, and have `rgb(253, 247, 230)` corner backgrounds.
- `bun run validate:content`: passes after marking all 10 `M` images ready; it reports warning-threshold notices for `ro-m-mama.webp` at `13,740` bytes and `ro-m-mana.webp` at `12,388` bytes, both below the `20 KB` hard maximum.
- `pnpm run lint`: passes with nvm Node `v24.15.0` after the image pilot.
- `pnpm run format`: passes with nvm Node `v24.15.0` after the image pilot.
- `pnpm run build`: passes with nvm Node `v24.15.0` after the image pilot.
- `bun run optimize:images --dry-run --source /private/tmp/word-wheel-a-sources`: passes for 10 staged `A` source images.
- `bun run optimize:images --source /private/tmp/word-wheel-a-sources`: fails locally because the installed Sharp native module is rejected by macOS code signing (`mapping process and mapped file (non-platform) have different Team IDs`).
- Bundled Python/Pillow WebP export wrote 10 final `A` images as `256 x 256 px` lossless WebP files under `public/images/ro/a/`.
- Final `A` WebP verification confirmed all 10 files are `256 x 256 px`, below the `20 KB` hard maximum, and have `rgb(253, 247, 230)` corner backgrounds.
- `bun run validate:content`: passes after marking all 10 `A` images ready; it reports the existing warning-threshold notices for `ro-m-mama.webp` and `ro-m-mana.webp`, both below the `20 KB` hard maximum.
- `bun run lint`: passes after the `A` image pilot.
- `bun run format`: passes after the `A` image pilot.
- `bun run build`: still fails locally after the `A` image pilot because the local Next SWC native binary is rejected by macOS code signing (`mapping process and mapped file (non-platform) have different Team IDs`).
- `pnpm exec tsc --noEmit`: passes with nvm Node `v24.15.0` after Batch 6 image pipeline changes.
- `/Users/darius/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/content/validate-content.mjs`: passes after marking all 10 `P` images ready; it reports existing warning-threshold notices for `ro-m-mama.webp` and `ro-m-mana.webp`, plus `ro-p-papusa.webp`, `ro-p-porc.webp`, and `ro-p-perna.webp`, all below the `20 KB` hard maximum.
- P image sanity check confirmed all 10 final `P` WebP files are `256 x 256 px`, below the `20 KB` hard maximum, and have exact `rgb(253, 247, 230)` corner backgrounds.
- `node_modules/.bin/prettier --check content/ro/words-p.json assets/image-sources/ro/p/pilot-metadata.json docs/status.md`: passes after the `P` image pilot.
- `/Users/darius/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/content/validate-content.mjs`: passes after Batch 8 implementation; existing image warning-threshold notices remain below the `20 KB` hard maximum.
- `node_modules/.bin/tsc --noEmit`: passes after Batch 8 implementation.
- `node_modules/.bin/eslint .`: passes after Batch 8 implementation.
- `node_modules/.bin/prettier --check .`: passes after Batch 8 implementation.
- `PATH=/Users/darius/.nvm/versions/node/v24.15.0/bin:$PATH node_modules/.bin/next build`: passes after Batch 8 implementation.
- `node_modules/.bin/next build` with the shell default Node still fails because the local Next SWC native binary is rejected by macOS code signing; use nvm Node `v24.15.0` for local builds.
- `pnpm run validate:content`: passes with nvm Node `v24.15.0` after the one-word wheel color fix.
- `pnpm run lint`: passes with nvm Node `v24.15.0` after the one-word wheel color fix; reports existing Next `<img>` warnings in `src/components/wheel-game.tsx`.
- `pnpm run format`: passes with nvm Node `v24.15.0` after running `pnpm run format:write` for the one-word wheel color fix.
- `pnpm exec tsc --noEmit`: passes with nvm Node `v24.15.0` after the one-word wheel color fix.
- `pnpm run build`: still fails locally after the one-word wheel color fix because the local Next SWC native binary is rejected by macOS code signing (`mapping process and mapped file (non-platform) have different Team IDs`).
- `pnpm run format`: initially reported formatting drift after the new image decision doc and shared rules declaration were added; `pnpm run format:write` was run, then `pnpm run format` passed.
- `pnpm run build`: previously passed with nvm Node `v24.15.0`.
- `pnpm run build`: failed after Batch 6 because the local Next SWC native binary is still rejected by macOS code signing (`mapping process and mapped file (non-platform) have different Team IDs`).
- Production build prerenders:
  - `/`
  - `/ro`
  - `/ro/play/a`
  - `/ro/play/c`
  - `/ro/play/m`
  - `/ro/play/p`
- Local server check:
  - `curl -I --max-time 5 http://localhost:3000/ro` failed before Batch 4 because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed again after Batch 4 because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed again after Batch 5 because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed again after the hygiene/image-definition pass because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/p` failed after the hydration fix because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed after Batch 6 because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/m` failed after Batch 6 because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/` passed outside the sandbox after the user started the dev server; `/ro/` redirects to `/ro`.
  - Browser verification for `/ro` and `/ro/play/m` completed successfully after the user started the dev server.
  - `/ro` verified the letter selection route.
  - `/ro/play/m` verified spin, disabled spin targets, fixed frame effects, upright word labels, upright center letter, result modal, close/keep, remove, reset, choose-another-letter navigation, and empty-wheel behavior.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed after the `C` image pilot because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/c` failed after the `C` image pilot because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/m` failed after the one-word wheel color fix because nothing was listening on port `3000`.
  - In-app browser verification passed after the user started the dev server on port `3000`.
  - `/ro` loaded the Romanian letter selection with A, C, M, and P.
  - `/ro/play/c` loaded the C wheel with 9 reviewed WebP images and one placeholder fallback for `copil`.
  - Verified all 9 ready `C` wheel SVG image references use `/images/ro/c/<word-id>.webp`.
  - Verified all 9 ready `C` word preview images load at natural `256 x 256` dimensions.
  - Verified spinning on `/ro/play/c` opens a result modal with the selected ready WebP image, correct alt text, and the selected word.
  - `/ro/play/c` verified again after adding `copil` and polishing image UX.
  - Verified all 10 ready `C` word preview images load at natural `256 x 256` dimensions.
  - Verified all 10 wheel SVG image references use `/images/ro/c/<word-id>.webp`, render at `42 x 42`, and use circular clipping.
  - Verified the result modal image slot is circular with hidden overflow and displays a ready WebP image.
  - Verified mobile viewport `390 x 844` renders the larger circular wheel images without page overflow.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/m` failed after the `M` image pilot because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/a` failed after the `A` image pilot because nothing was listening on port `3000`.
  - `curl -I --max-time 5 http://localhost:3000/ro/play/p` failed after the `P` image pilot because nothing was listening on port `3000`.
  - User manually verified `/ro/play/p` after the `P` image pilot and reported it works fine.
  - `curl -I --max-time 5 http://localhost:3000/ro` failed after Batch 8 implementation because nothing was listening on port `3000`.

## Next Task

Run browser verification for `/ro`, `/ro/play/a`, `/ro/play/c`, `/ro/play/m`, and `/ro/play/p` after the user starts the dev server on port `3000`, then continue to Batch 9 deployment preparation.

## Decisions Made

- Use Next.js App Router with TypeScript.
- Use Next.js 16.2.6 with React 19.2.6.
- Deploy on Vercel.
- Keep v1 static-first and database-free for gameplay.
- Start with Romanian.
- Target children around ages 4 to 6.
- Use common, concrete, child-known vocabulary.
- Use high-clarity pixel art for the first Romanian image pack.
- Use AI batch generation plus strict human review as the primary production image pipeline.
- Use external public asset packs only as reference/fallback material unless a complete, consistent, license-clean pack is deliberately approved.
- Commit final local images as `256 x 256 px` lossless `.webp`.
- Keep final local image paths stable and word-ID based under `/images/<locale>/<letter>/<word-id>.webp`.
- Prefer local repository images for the first pack if optimized and small.
- Keep Cloudflare R2 as the scale path for thousands of assets or multiple languages.
- Store public content as JSON manifests plus image assets.
- Use stable placeholder image paths until real optimized assets are produced.
- Treat the user-running dev server on port `3000` as the local verification target.
- Add AI-assisted content generation, but require human review before publishing substantial content batches.
- Future agents should read `AGENTS.md` and `docs/agent-brief.md` before making product or architecture changes.

## Open Questions

- Exact first Romanian letter set.
- Whether removed words persist across refresh.
- Whether v1 includes audio playback.
- Whether the first serious pack includes every Romanian letter or only high-value letters first.

## Risks

- Content quality may suffer if candidate generation is automated without strict review.
- Image count can bloat the repository if assets are not aggressively optimized.
- Rare letters may not have enough good child-friendly words.
- Generated images may misrepresent words unless reviewed carefully.
- Mobile no-scroll layout can be fragile across browser UI variants and must be tested on real devices.

## Metrics To Track Later

- Number of approved Romanian words.
- Number of approved words per letter.
- Total image storage size.
- Average image file size.
- Build size.
- Mobile layout test status.
- Vercel deployment status.
