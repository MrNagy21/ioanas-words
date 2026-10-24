# Guided practice implementation and local QA

Date: 2026-10-16. Source baseline: `11bcf9b`; implementation remains in the working tree. No commit, PR or deployment was requested or performed.

## Delivered behavior

The adult workspace supports local child profiles, approved animal avatars, selected/archiveable goals, shared reusable wheel configurations, exact pre-play word previews, per-child activity, dated pronunciation observations/corrections, medals and encrypted backups. New guided wheels suggest eight words. The existing wizard still supports its exclusions, inclusion rules and manual selection. Sessions retain frozen words/configurations, so later library edits do not rewrite history.

Child play retains keep/remove, hides adult reconfiguration, names the child and shows the next-medal bar. Closing a result commits participation and eligible awards atomically. Reload consumes an already persisted displayed result once; multi-tab control uses Web Locks and owner IDs. Saving failures expose retry without claiming saved data. Normal ending requires confirmation after closing a word, and earns no extra credit.

Standard medals use 1/5/10/20, then gaps of 20; Frequent goal medals use 1/3/5/10, then gaps of 10. A pace edit preserves the next promised goal threshold. Children choose star/flower/sun art; brief confetti respects reduced motion. Adult-recognized progress has a larger teal medal and its own title. Optional synthesized celebration sound defaults off. Ratings never automatically award prizes.

The introduction, demo and restartable five-step guide support first use. Returning profiles open the workspace. Demo state is transient and cannot change saved records or preferences. Anonymous general play remains available.

## Data and protection

- Native IndexedDB stores document schema 3 in `word-wheel.practice`; schema 1/2 upgrade in memory before the next validated write. A readwrite transaction reads latest state, applies a synchronous command, validates, increments revision and waits for commit.
- Revision checks reject stale adult edits; subscriptions refresh other views. Browser Web Locks prevent simultaneous session control. These are supported-browser requirements; no unsafe fallback silently bypasses them.
- The existing setup localStorage format is preserved. Initialization reconciles changed configurations by fingerprint. A global setup lock covers editing and export snapshots. Whole-app restore uses a durable mirror-repair marker if its compatibility write needs retry. Child restore preserves the shared library and every unrelated child.
- Whole-app backup contains all records/configurations/preferences. A child backup contains only that child's records and session snapshots, with no unrelated library entries. Restore replaces the previewed scope; it does not merge histories or overwrite another identity. Profile deletion removes that child's dependent records only.
- UI exports use format 1, AES-GCM-256, PBKDF2-SHA256 at 600,000 iterations, random salt/IV and versioned additional data. Passwords are not persisted or recoverable. Decrypted input is bounded to 5 MB; encrypted files to 7 MB. Large histories may need per-child exports; unlimited storage is not promised. Wrong passwords/tampering/invalid schemas fail before mutation. This is an implemented protection design, not a security audit.
- Child records are client-only, not server-rendered or embedded in route parameters. Public word/image content stays static. Browser clearing/eviction, device loss or a lost backup password can lose records; the UI explains local saving and manual backup.

## Sound review boundary

`content/ro/sound-mapping.json` is versioned separately from canonical words. Reviewed-target coverage expresses presence and absence; missing review remains unknown. The runtime intersects reviewed matches with every active child goal and snapshots the mapping version per turn. Synthetic domain tests cover multiple goals and positions.

Production has **zero reviewed targets and zero reviewed word rows**. No real sound/position credits or goal medals are represented as verified. The user will arrange native Romanian review. `sound-review-candidates.csv` has 596 unreviewed spelling candidates and must not be promoted automatically. Overall participation and adult observations work without this review. Before release, record reviewer identity/reference, precise target meanings (including sequences), declared coverage, presence/absence and positions, then validate and browser-test actual reviewed data.

## Fresh local verification

Node 24.21.0, pinned pnpm 11.1.2, Next.js 16.2.6; no framework or dependency upgrade.

| Check                                                 | Result                                                                                                                             |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm run validate:content`                           | Pass; 599 records, 596 approved/ready, zero approved placeholders; 13 existing image-size warnings                                 |
| `pnpm run check:matching`                             | Pass                                                                                                                               |
| `pnpm run check:gameplay`                             | Pass                                                                                                                               |
| `pnpm run check:setup-storage`                        | Pass                                                                                                                               |
| `pnpm run check:practice`                             | Pass: isolation, schema/backup scopes, idempotent close/recovery, observations, reward schedules, synthetic mapping and encryption |
| `pnpm run lint`                                       | Pass                                                                                                                               |
| TypeScript check / production build                   | Pass; build generated 88 static pages including new routes and manifest                                                            |
| `pnpm run check:practice-browser`                     | Pass against production on port 3000, including manifest assets and explicit cold-offline failure                                  |
| `pnpm run check:wheel-browser`                        | Pass against production; keep/Escape/focus, final word, 15→0 no refill, rerenders/replay/layouts                                   |
| `pnpm run check:demo-routes -- http://localhost:3000` | Pass: 85 public routes; unknown target 404                                                                                         |

The practice browser suite uses synthetic children in isolated Chrome contexts. It verifies real IndexedDB rollback on simulated quota failure, thrown-command rollback, stale revisions, concurrent writes, persistence, profile/goal isolation, preview detours, shared configurations, count-on-close, two-tab ownership, reload recovery exactly once, confirmed ending, lower ratings without rewards, explicit queued progress, encrypted per-child/full restore, wrong password, preservation of other children/library, Help reset and demo byte-for-byte storage isolation. No real child data was used. Changed/new text files pass Prettier, all 40 local Markdown links resolve, and `git diff --check` passes.

Tracked board bounds pass at 320×568, 390×844, 568×320, 844×390 and 1440×900. Intro overflow checks pass at 320, 390 and 1440 widths. These are desktop Chrome viewport tests, not physical iPhone or Android results. The collaborative browser also exercised profile creation, goals, prepared play, medal presentation, observation correction, backup export/preview and both intro layouts.

A development smoke run hit `require is not defined` on existing admin routes after a production build had reused the running dev server's `.next` output. The server was stopped, rebuilt and started in production on the same port; all 85 routes then passed. Do not run builds against an active development server's output directory.

## Visual evidence

Screenshots and recordings were shown at tested checkpoints. All data is synthetic. Artifacts live in the browser tool's local artifact directory, outside the repository.

- Mobile profiles/goals: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb0sfkp-4a941174.png`
- Desktop profile workspace: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb0r46d-ed304a20.png`
- First participation medal: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb157ls-d5f9dc5f.png`
- Mobile adult observation: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb1t7ia-29c88651.png`
- Protected restore preview: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb1vvn4-fa96b20d.png`
- Mobile introduction: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb21ve7-37730b96.png`
- Desktop introduction: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb21vjv-6729bd57.png`
- Adult-recognized progress medal: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb2m9tx-ed1c280b.png`
- Final desktop workspace: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb2nxdt-ffdcd486.png`
- Final tracked mobile progress: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb2j5h0-55f8550a.png`
- Mobile tracked-play recording: `/Users/darius/.t3/userdata/attachments/a615842b-77e4-4e04-8849-e1b338f9683c-f774bd5f-89cd-4646-aa96-28d8cbf5915d-mp4.mp4`

Impeccable finish review found incomplete deletion copy and a stale recovery error. Both were fixed and the bounded second review returned ship. The documenter preserved the incumbent interface; its existing Arial and wording that underdescribes coral primary actions were not treated as a redesign request.

## Installation/offline decision

Manifest, standalone start URL, 192/512 icons and Apple touch icon are present. No service worker or download manager was added. Cold offline launch is unavailable; this pilot is explicitly online-required to open/load exercise content. Local persistence does not establish offline readiness. Caching App Router payloads and optimized image variants plus safe update behavior warrants separate work; this was conditional, so it is deferred without a framework upgrade. Physical installation remains unverified. Web Locks and Web Crypto require a secure browser context: localhost works for desktop QA; phone testing needs an HTTPS origin, not the plain HTTP LAN address. No HTTPS deployment or tunnel was created in this work.

## Remaining release gates

1. User-arranged Romanian review and signed mapping coverage, followed by real reviewed-data attribution/position tests.
2. Physical iPhone Safari and Android Chrome: keyboard/toolbars, rotation, touch targets, reduced motion, encrypted download/upload, wrong password, restore both scopes, reload recovery and browser storage behavior. Check tablet layout and installed mode if offered. Keep the pilot online-required.
3. Therapist-led usability sessions with children: adult setup without help, child understanding of keep/remove/End and medals, reward distraction/rushing, appropriate pacing. Record observations without asserting therapeutic benefit; adjust settings only with explicit decisions.
4. Review local implementation and final release checklist, then request deployment only if the human asks for it. No hosted accounts, analytics, billing or scoring are part of this release.

Use [next-implementation-prompt.md](next-implementation-prompt.md). The local code work is complete; external review and device/pilot evidence remain.

## Framework diagnostic on rejected routes

Checked 2026-10-16 after an earlier, intentionally stopped production-server process reported `Internal: NoFallbackError`. The current server remains running on port 3000. Requests to about, practice, demo, play/S and setup/S all returned 200 with no new server errors. A request to `/ro/play/not-a-target` returned the required 404 and immediately produced exactly one `NoFallbackError` log.

This matches the pinned Next.js 16.2.6 app-page template's internal rejection path for `dynamicParams = false` and the [upstream logging issue 90537](https://github.com/vercel/next.js/issues/90537). The route is rejected correctly; this diagnostic does not show a failed valid page or lost child data. Keep the static allowlist and invalid-route check. No framework upgrade, console suppression or application workaround was added.

## Subsequent resilience batch

The continued implementation request added [focused resilience fixes and tests](resilience-checks.md), including temporary anonymous play when browser profile storage is blocked. Saved-data transactions and locks remain mandatory; the temporary mode bypasses persistence entirely. See that report for fresh results and screenshots. Existing content, reward schedules and review boundaries are unchanged.
