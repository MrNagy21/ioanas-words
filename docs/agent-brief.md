# Agent Brief

This file captures the project decisions. Use it as the fast handoff for any agent starting work in this repository.

## Active direction: guided practice app

Updated 2026-10-16 after the product interview. The core game and public demo exist. The next work is [Guided Practice App](app-development-program/features/guided-practice-app/spec.md), following its [GP0–GP9 plan](app-development-program/features/guided-practice-app/plan.md). GP0–GP7 are implemented and locally tested; GP8 has manifest/icons with offline explicitly deferred. GP9 mapping review, physical devices and therapist pilot remain.

The adult prepares the app and the child plays. Add local child profiles, selected goals, a shared adult wheel library, a goal-aware pre-play summary, durable sessions, history/statistics, adult-entered pronunciation-quality ratings, participation medals, explicit adult-triggered progress celebrations, and whole-app/individual-child backup. Add a public one-page introduction, isolated demo, and skippable/restartable onboarding. Installation/offline support is conditional on feasibility.

Count practice on result closure, with once-only recovery of displayed pending words. Keep both keep/remove actions. Credit all reviewed matching active child goals, not just the wheel's target. Ratings do not measure independence and do not automatically change rewards. Position breakdowns are statistics only; no position medals or XP in the pilot.

This agreement supersedes the original no-landing-page and no-local-progress-screen limitations below. The no-scroll rule applies to normal play; adult histories and the public introduction may scroll. Local browser records are allowed; no hosted database, accounts, billing, recording, AI pronunciation scoring, or clinical efficacy claims are added. Preserve anonymous general play and existing approved content.

The 2026-10-18 local candidate uses Next.js/matching ESLint config 16.4.2 and Sharp 0.35.5 after dependency hardening. Local production QA is complete; use the [acceptance checklist](app-development-program/features/guided-practice-app/acceptance-test-checklist.md) and [QA report](app-development-program/features/guided-practice-app/production-qa-2026-10-18.md) for the user test. It is not deployed.

On 2026-10-24, the user's iPhone feedback prompted a five-page task onboarding that creates/selects the child, optionally adds a sound, previews exact pictures and starts or resumes real play. The dashboard stays hidden during setup. See the [redesign report](app-development-program/features/guided-practice-app/onboarding-redesign.md). Final Chrome/WebKit onboarding checks pass; actual phone acceptance remains pending. Help or `/ro/practice?guide=1` reopens it without clearing records.

The user explicitly authorized deployment after an Astra high code audit on 2026-10-24, then asked about installation. Four persistence blockers were fixed and independently cleared in round 3. Code `779ac39` is deployed at https://ioanas-words.vercel.app/ro/practice with passing public-origin browser/storage/backup/route/installability checks. See the [release audit](app-development-program/features/guided-practice-app/release-audit-2026-10-24.md). Home-screen installation is configured and Chrome installability passes; physical-device acceptance and Romanian/therapist review remain. Offline cold launch is still deferred.

Continue with the [GP9 prompt](app-development-program/features/guided-practice-app/next-implementation-prompt.md). The user accepted the sidecar structure and will arrange Romanian review. Pilot slider labels, Standard 1/5/10/20 then every 20, Frequent 1/3/5/10 then every 10, progress bar and password-protected backups are accepted and implemented. Do not silently substitute character matching for reviewed sound credit.

## Project Summary

Word Wheel is a mobile-first web app for young children to practice Romanian vocabulary and pronunciation. A child chooses a starting letter, spins a roulette-style wheel containing words and images that start with that letter, then sees the selected word and image in a large modal.

The first version is a simple exercise/game. It should be deployable on Vercel for free or very low cost, with no database required for gameplay.

## Original wheel scope

The following records the deployed wheel's original scope. The active guided-practice agreement above extends it where explicitly stated.

V1 must include:

- Romanian as the first language.
- A no-scroll, app-like interface.
- Responsive layouts for mobile phones, tablets, and desktop.
- Letter selection.
- A spinning wheel with words and images for the selected letter.
- Result modal showing the selected image and word larger.
- Modal actions:
  - close and keep the word on the wheel;
  - remove the word from the current wheel.
- Reset for the current letter.
- Ability to choose another letter.
- Static JSON content files.
- Local optimized images for the first pack, unless the repository becomes too large.
- Content validation scripts before adding a serious pack.

V1 must not include:

- accounts;
- billing;
- database-backed progress;
- AI pronunciation scoring;
- admin content editing;
- user-generated content;
- teacher dashboard;
- dynamic production content editing.

## Product Experience

The app should feel like a small mobile game, not a landing page or traditional website.

Important UI constraints:

- The first screen is the actual app, not marketing content.
- Normal gameplay should not require page scrolling.
- Mobile portrait is the primary target.
- Desktop should use a polished constrained app layout, not a stretched full-browser game board.
- Buttons must be touch-friendly.
- Text must not overlap wheel segments, controls, or modal content.
- The wheel is the main visual focus.

## Local Verification

The local development server is expected to be running on port `3000`.

Agents should verify browser and route behavior against `http://localhost:3000`. If a sandboxed command cannot reach `localhost:3000`, retry the reachability check outside the sandbox before treating the app as unavailable. Do not start another dev server or switch to another port.

## Target Child Vocabulary

The Romanian pack is for children around ages 4 to 6.

Words must be:

- common;
- concrete;
- familiar to young children;
- easy to illustrate;
- easy to recognize;
- culturally appropriate;
- suitable for pronunciation practice.

Good categories:

- household objects;
- family;
- animals;
- food;
- clothing;
- toys;
- school objects;
- nature;
- body parts;
- vehicles;
- simple everyday actions.

For broad Romanian expansion, also read `docs/app-development-program/speech-therapy-content-guidance.md`. Candidate words should be reviewed not only by starting letter, but also by speech target, target sound position, syllable complexity, consonant clusters, and contrast value. Keep the product language to pronunciation and vocabulary practice unless a future clinical-review spec explicitly changes that boundary.

Avoid:

- business terms;
- financial terms;
- legal terms;
- political terms;
- advanced science terms;
- specialized medical terms;
- abstract words;
- frightening words;
- violent words;
- adult words;
- slang;
- offensive words;
- brand names;
- copyrighted characters;
- rare, archaic, or literary words;
- words that are visually ambiguous for a 4 to 6 year old.

## Romanian Content Quantity Target

The serious Romanian pack should eventually target:

- 30 to 40 approved words for most useful/common letters;
- up to 50 approved words for very common letters where many good child words exist;
- fewer words for rare letters where quality would otherwise suffer.

Do not pad rare letters with obscure words. Quality matters more than count.

## Romanian Letter Handling

Romanian letters with diacritics must be handled deliberately.

Important buckets include:

- `A`, `Ă`, `Â`
- `I`, `Î`
- `S`, `Ș`
- `T`, `Ț`

Do not silently collapse these letters unless the product decision is explicitly changed. For child-facing UX we may later decide to group or simplify some letters, but the content model should preserve correct buckets.

## Image Direction

The preferred first image style is either:

- pixel art; or
- simple flat illustration.

Pixel art is attractive because thousands of images can stay small and visually consistent.

Image requirements:

- square format;
- recognizable at small wheel sizes;
- clear in a larger modal;
- no text inside images;
- no brands;
- no copyrighted characters;
- no confusing backgrounds;
- optimized `.webp` or `.avif`;
- stable filenames based on word IDs.

For v1, local repository images are acceptable if optimized and small. If the image set grows too large, move images to Cloudflare R2 while keeping JSON manifests in the app.

## Architecture Decision

Use Next.js App Router with TypeScript, deployed on Vercel.

This was chosen over a plain Vite app because the long-term vision includes:

- accounts;
- billing;
- saved progress;
- protected admin pages;
- server routes;
- AI pronunciation checks;
- subscription entitlements.

However, v1 must still be static-first:

- no database required for gameplay;
- no auth required for gameplay;
- no server calls required to spin the wheel;
- public content should load from static JSON and image assets;
- core game should work locally without external credentials.

## Suggested Project Structure

```txt
app/
  [locale]/
    page.tsx
    choose-letter/
src/
  components/
  content/
  game/
  i18n/
  utils/
content/
  ro/
    letters.json
    words-a.json
    words-b.json
    words-ă.json
    ...
public/
  images/
    ro/
      a/
      b/
      ă/
scripts/
  content/
docs/
```

This structure can change if implementation needs it, but preserve the key idea: app code, static content manifests, and image assets are separate.

## Content File Decisions

Use `content/<locale>/letters.json` for supported letters.

Use per-letter word files so the app does not need to load every word at once:

```txt
content/ro/words-m.json
content/ro/words-a.json
content/ro/words-ă.json
```

Each production word must have:

- stable ID;
- word;
- display label;
- normalized form;
- locale;
- letter bucket;
- part of speech;
- difficulty;
- age band;
- category;
- image path or URL;
- alt text;
- source;
- license;
- status.

Only `status: "approved"` words should appear in production gameplay.

## Content Pipeline Decision

Large content batches should be built through an AI-assisted pipeline plus human review.

Expected agents/stages:

1. Word candidate miner.
2. Romanian normalizer.
3. Child vocabulary reviewer.
4. Image brief writer.
5. Image producer.
6. Content QA.
7. Human review.

Useful candidate sources may include Romanian lexical resources and frequency lists, but every final word must pass the child-friendly and imageability rules.

Release review convention:

- Treat the last committed code/content state as `Release 1` until the next release cut is committed.
- Treat the current dirty work tree additions as `Release 2` while batches are still being prepared and reviewed.
- When adding production words or preparing a commit/release cut, update `/admin/releases`, `/admin/releases/1`, and `/admin/releases/2` so Release 2 lists only the newly added approved words that need QA, with wheel links for affected routes.
- After the release cut is committed, the committed state becomes the new reviewed baseline for the next development cycle.

## Storage Decision

V1 preferred path:

- Store optimized images in `public/images/...`.
- Keep assets small.
- Watch repository size and deployment size.

Scale path:

- Move large image packs to Cloudflare R2.
- Keep immutable image URLs in word metadata.
- Keep JSON manifests in repo or publish them as static assets.
- Cache aggressively.

Do not use a database as the primary public word/image catalog. A future database is for user state, subscriptions, admin review, and metadata workflows.

## Future Vision

Future versions may add:

- user accounts;
- saved progress across devices;
- parent/teacher dashboards;
- subscriptions and premium content;
- Stripe billing;
- Supabase auth and database;
- admin content review tools;
- AI pronunciation scoring;
- audio playback;
- multiple languages;
- offline/PWA support;
- analytics.

Free anonymous gameplay must remain available.

## Implementation Order

Follow `docs/plan.md`.

The next task is Guided Practice App GP9, linked above. The original foundation batches are already implemented. Do not restart scaffolding or treat new vocabulary generation as a prerequisite for this app-development work.

## Status Discipline

After each meaningful change:

- update `docs/status.md`;
- mark current phase;
- record completed work;
- record next task;
- record new decisions or open questions.

Agents should be able to resume work using only the repository docs.
