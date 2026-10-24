# Word Wheel

Word Wheel is a Romanian-first vocabulary wheel app for young children. V1 is
static-first and deployable on Vercel without accounts, billing, a hosted database, or
AI pronunciation scoring. Child profiles and history stay in browser storage.

## Stack

- Next.js App Router
- TypeScript
- Static JSON content under `content/`
- Local optimized images under `public/images/`

## Setup

Install dependencies:

```bash
pnpm install
```

This project is pinned to `pnpm@11.1.2` through `packageManager` in
`package.json`. Use nvm-managed Node with Corepack enabled before installing.
Do not substitute another package manager for project scripts; if `pnpm` is not
on PATH, fix the Node/Corepack or nvm shell setup first.

## Commands

```bash
pnpm run dev
pnpm run validate:content
pnpm run optimize:images -- --dry-run
pnpm run optimize:images
pnpm run build
pnpm run lint
pnpm run format
```

Approve dependency build scripts if pnpm asks:

```bash
pnpm approve-builds
```

## Project Structure

```txt
app/              Next.js App Router pages and global styles
src/components/   Reusable UI components
src/content/      Content loading and typing utilities
src/game/         Wheel/game logic
src/i18n/         Locale helpers
src/utils/        Shared utilities
content/ro/       Romanian static content manifests
public/images/ro/ Romanian image assets
scripts/content/  Content validation and future pipeline scripts
scripts/images/   Image optimization scripts
assets/image-sources/ Ignored source image staging area
docs/             Product, plan, and status docs
```

Image pipeline decisions are documented in `docs/image-pipeline.md`.

## Image Pipeline

Stage reviewed source images as
`assets/image-sources/<locale>/<letter>/<word-id>.(png|jpg|jpeg|webp|avif)`.
The staging folder is ignored by default. Run
`pnpm run optimize:images -- --dry-run` to preview output paths, then
`pnpm run optimize:images` to write final lossless `256 x 256 px` WebP assets
under `public/images/<locale>/<letter>/<word-id>.webp`.

Only mark content images as `imageStatus: "ready"` after human review. Ready
images are checked by `pnpm run validate:content` for existence, `.webp`
format, `256 x 256 px` dimensions, and byte-size limits.

## Guided practice pilot

Open `/ro/about?show=1` for the introduction, `/ro/practice` for profiles,
`/ro/demo` for the isolated demo or `/ro` for anonymous play. The local app
uses port 3000. Stop a running server before a production build reuses `.next`,
then run `pnpm run start --port 3000`.

Profiles, goals, observations, participation medals and password-protected
backups are implemented locally. Sound attribution requires human-reviewed
Romanian mappings, which are not populated yet. Physical-phone and therapist
pilot checks remain. The pilot requires a connection to open/load content;
a manifest does not provide offline launch.

See [feature status](docs/app-development-program/features/guided-practice-app/status.md)
and the [pilot checklist](docs/app-development-program/features/guided-practice-app/pilot-checklist.md).

The [Romanian reviewer handoff](docs/app-development-program/features/guided-practice-app/reviewer-handoff.md)
provides instructions and review packets. Create a fresh packet for a selected
label, then check the returned files without changing production mappings:

```bash
pnpm run prepare:sound-review -- --label S --output /tmp/new-s-review
pnpm run validate:sound-review -- --packet /tmp/new-s-review
pnpm run check:sound-review-tools
```

New packets are deliberately unsigned and entirely unknown. Validation requires
actual review details; passing file checks does not authenticate human approval.

## Browser QA

The browser scripts use Bun and an external Playwright installation. They do
not install app dependencies or start another server. Set
`WORD_WHEEL_PLAYWRIGHT_PATH` to the Playwright package directory when needed.
The default engine is installed Chrome in headless mode. Set
`WORD_WHEEL_HEADED=1` to use a visible browser, which requires a desktop display.
Chrome 155 headless showed live-confetti capture artifacts on the local Mac;
the stricter medal paint checks pass in visible Chrome and headless WebKit.
See the [rendering report](docs/app-development-program/features/guided-practice-app/medal-visibility-checks.md).
WebKit must be installed through the same external Playwright CLI before selecting it.

```bash
WORD_WHEEL_HEADED=1 pnpm run check:release-regressions
WORD_WHEEL_HEADED=1 pnpm run check:onboarding-browser
WORD_WHEEL_HEADED=1 pnpm run check:practice-browser
pnpm run check:practice-resilience
pnpm run check:wheel-browser
WORD_WHEEL_BROWSER=webkit pnpm run check:release-regressions
WORD_WHEEL_BROWSER=webkit pnpm run check:onboarding-browser
WORD_WHEEL_BROWSER=webkit pnpm run check:practice-browser
WORD_WHEEL_BROWSER=webkit pnpm run check:practice-resilience
WORD_WHEEL_BROWSER=webkit pnpm run check:wheel-browser
```

Set `WORD_WHEEL_QA_ARTIFACT_DIR` to an output directory to capture the practice
suite's live-confetti and settled phone medals, landscape/desktop medals,
restore preview and desktop workspace. The screenshots use
synthetic profiles. WebKit automation is supporting evidence; it does not
replace testing real iPhone Safari.

## Acceptance testing

The first-run guide now uses five full-page setup tasks. Use `/ro/practice?guide=1`
to reopen it without clearing existing records. See the [onboarding report](docs/app-development-program/features/guided-practice-app/onboarding-redesign.md)
for the new phone/desktop captures and test results. Start with
[the feature checklist](docs/app-development-program/features/guided-practice-app/acceptance-test-checklist.md)
and use the [QA report](docs/app-development-program/features/guided-practice-app/production-qa-2026-10-18.md)
for actual automated results, dependency audit limits and screenshots. This candidate
uses Next.js 16.4.2; production dependency audit is clean at the recorded date.
Romanian sound review, real-phone/therapist results and a deployed-preview check
remain outstanding. The earlier public demo has not been updated by this work.

## Install on a device

The app has a stable manifest identity, standalone display, 192/512px icons and an Apple touch icon. Open the public HTTPS app in a normal browser.

- iPhone/iPad Safari: Share → Add to Home Screen. Enable Open as Web App if offered, then Add. See [Apple's instructions](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios).
- Android Chrome: use Install app or Add to Home screen in the browser menu. The browser controls the exact wording and any automatic prompt.
- Desktop Chrome/Edge: use the install control in the address bar or browser menu when offered.

Installation still needs a connection to open the app. Offline cold launch is not implemented. Records belong to the browser/origin or installed context; use a protected backup for an intentional transfer and keep a separate copy. Actual device installation and backup-download tests remain in the acceptance checklist. The [Chrome install criteria](https://web.dev/articles/install-criteria) explain why prompt availability also depends on browser state and engagement.
