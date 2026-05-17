# Word Wheel Implementation Plan

This plan is organized into batches. Each batch should leave the app in a better, verifiable state.

Before starting any batch, read `AGENTS.md`, `docs/agent-brief.md`, `docs/spec.md`, and `docs/status.md`. Update `docs/status.md` after each meaningful implementation step so another agent can resume without reading the conversation that created these docs.

## Batch 0: Project Foundation

Status: Complete

- Scaffold Next.js App Router with TypeScript.
- Add linting and formatting.
- Add basic app metadata.
- Add initial `docs/` files.
- Add baseline README with local development commands.
- Confirm local dev server runs.
- Update `docs/status.md` with the scaffolded project details and available commands.

Exit criteria:

- `npm run dev` starts the app.
- `npm run build` succeeds.
- The repo has a clear project structure.

## Batch 1: Core App Shell

Status: Complete

- Build full-viewport no-scroll app shell.
- Add responsive layout for phone, tablet, desktop.
- Add Romanian default locale route.
- Add placeholder letter selection view.
- Add placeholder game view.
- Add basic theme tokens.

Exit criteria:

- App opens to a usable child-focused interface.
- Layout does not scroll in normal mobile and desktop viewports.
- Letter selection and game screen can be navigated locally.

## Batch 2: Content Schema And Starter Romanian Pack

Status: Complete

- Define `content/ro/letters.json`.
- Define per-letter word file format.
- Add a tiny manual starter pack: 3 to 5 letters, 8 to 12 approved words per letter.
- Add placeholder local images or temporary generated images.
- Add TypeScript content types.
- Add content loading utilities.

Exit criteria:

- App can load Romanian letters and words from local JSON.
- Starter content appears in the UI.
- No database or network dependency is required.

## Batch 3: Wheel Gameplay

Status: Implementation complete; browser verification pending user-running dev server

- Build wheel component using SVG.
- Render segments with word labels and small images.
- Implement spin result selection.
- Implement spin animation.
- Disable spin during animation.
- Handle empty wheel state.

Exit criteria:

- User can choose a letter, spin the wheel, and land on a word.
- Wheel behavior is stable and repeatable enough for testing.

## Batch 3.5: Wheel UX And Animation Polish

Status: Implementation complete; browser verification pending user-running dev server

- Make the wheel itself a primary spin target for touch and mouse.
- Keep a separate accessible spin control only if useful for clarity and keyboard access.
- Move wheel shadow/rim effects outside the rotating surface so the shadow does not spin.
- Keep segment word labels upright/horizontal while the wheel rotates.
- Keep the center letter upright/horizontal while the wheel rotates.
- Refine spin deceleration so speed drops faster early and more gently near the end.
- Target a natural spin duration of roughly 5 to 10 seconds.
- Keep spin disabled while animation is running.
- Do not add the result modal, removal workflow, real image assets, image pipeline, accounts, billing, database, admin tools, AI pronunciation, or generated content workflows.

Exit criteria:

- Pressing/tapping the wheel starts a spin.
- The wheel animation feels slower and more physical near the end.
- The wheel shadow stays fixed while the wheel spins.
- Word labels and the center letter stay readable/upright during spin.
- Existing static content and Batch 3 gameplay still work.

## Batch 4: Result Modal And Word Removal

Status: Implementation complete; browser verification pending user-running dev server

- Add result modal with large image and word.
- Add close/keep action.
- Add remove-from-current-wheel action.
- Add reset current letter action.
- Add choose-another-letter action.
- Add reduced-motion behavior.

Exit criteria:

- Full v1 gameplay loop works end to end.
- Removed words disappear until reset.
- Empty wheel state is clear.

## Batch 5: Content Validation

Status: Complete

- Add JSON schema or equivalent runtime validation.
- Validate letters.
- Validate word files.
- Validate image paths.
- Validate duplicate IDs.
- Validate letter bucket correctness.
- Validate production status rules.
- Add validation command to package scripts.

Exit criteria:

- Content errors fail locally before deployment.
- `npm run validate:content` or equivalent reports actionable issues.

## Batch 6: Image Pipeline

Status: Tooling complete; real production image assets not started

- Decide initial image style: pixel art or flat illustration.
- Define image dimensions and size targets.
- Add naming convention based on word IDs.
- Add image optimization workflow.
- Add source image staging folder if needed.
- Add final image output under `public/images/ro/...`.

Exit criteria:

- Ready local images are validated for existence, `.webp` format, `256 x 256 px` dimensions, and byte-size thresholds.
- Source/staging folder expectations and optimizer usage are documented.
- A dry-run capable optimizer can convert reviewed source images to final local `256 x 256 px` lossless WebP paths.
- Starter production images are still pending a human-reviewed image pilot.

## Batch 7: Serious Romanian Content Pack

Status: Not started

- Build AI-assisted candidate generation workflow.
- Generate candidate words per Romanian letter.
- Filter to child-friendly, concrete, imageable words.
- Target 30 to 40 approved words for most common letters.
- Target up to 50 approved words for very common letters.
- Allow fewer words for rare letters.
- Generate image briefs.
- Produce candidate images.
- Run automated QA.
- Run human review.
- Publish approved pack.

Exit criteria:

- Romanian pack is broad enough for real use.
- All production words are approved.
- Every approved word has a matching image and metadata.

## Batch 8: Polish And Accessibility

Status: Implementation complete; browser verification pending user-running dev server

- Improve visual design.
- Verify mobile phone layouts.
- Verify tablet layouts.
- Verify desktop layouts.
- Add focus handling for modal.
- Add keyboard support where relevant.
- Check contrast.
- Check text overflow.
- Add loading and error states.

Exit criteria:

- App feels polished on target devices.
- Basic accessibility requirements are met.

## Future Batch: Expanded Content And Letter Inclusion Modes

Status: Future

Planning note: the next-phase feature order is now defined in `docs/app-development-program/roadmap.md`. Start there before writing detailed specs for this area. The recommended immediate order is public `/admin/words` inventory, locale-wide content loader/catalog refactor, gameplay inclusion mode selector, then broad Romanian content expansion.

- Expand every Romanian letter bucket to a useful approved pack.
- Use `docs/app-development-program/speech-therapy-content-guidance.md` so expansion tracks target sounds, sound positions, syllable complexity, consonant clusters, and contrast value.
- Prefer 20 to 30 approved words per regular letter.
- Keep at least 15 approved words for harder letters when quality allows.
- Allow 30 to 40 approved words for high-value letters if the words remain common, concrete, and child-known.
- Add a mode selector for:
  - words that begin with the selected letter;
  - words that begin with the selected letter plus words that contain it elsewhere;
  - words that contain the selected letter but do not begin with it.
- Keep the default v1 mode as begin-with-letter only.
- Keep the play screen focused on the wheel, with the mode selector taking the space where the removed word list used to be.
- See `docs/future-word-modes.md` before writing the detailed spec.

## Batch 9: Vercel Deployment

Status: Not started

- Add deployment configuration if needed.
- Confirm build output on Vercel.
- Confirm local production build.
- Deploy preview.
- Test preview on phone.
- Fix deployment-only issues.

Exit criteria:

- Public Vercel preview URL works.
- Core game works on mobile from the deployed URL.

## Batch 10: Optional PWA/Offline Support

Status: Not started

- Add web app manifest.
- Add icons.
- Add service worker or framework-supported PWA setup.
- Cache app shell and content pack.
- Test offline behavior.

Exit criteria:

- App can be installed or launched like a lightweight mobile app.
- Previously loaded content works offline.

## Future Batch: Accounts

Status: Future

- Add Supabase project.
- Add auth UI.
- Add user profile table.
- Save selected locale and progress.
- Keep anonymous free mode.

## Future Batch: Billing

Status: Future

- Add Stripe products and prices.
- Add subscription checkout.
- Add webhook route.
- Add entitlement model.
- Gate premium content packs.
- Preserve free Romanian starter mode.

## Future Batch: Admin Content Review

Status: Future

- Add protected admin area.
- Add candidate word review.
- Add image review.
- Add approval workflow.
- Publish approved content to static JSON or CDN manifest.

## Future Batch: AI Pronunciation

Status: Future

- Add recording UI.
- Add server route for pronunciation scoring.
- Add free quota limits.
- Add premium limits.
- Store results only for signed-in users.
