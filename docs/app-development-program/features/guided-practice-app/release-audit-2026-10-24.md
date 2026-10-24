# Release audit and deployment

The user authorized an Astra high code audit followed by deployment if ready on 2026-10-24. This extends the earlier local-only preparation instruction. The reviewed code is deployed at [ioanas-words.vercel.app/ro/practice](https://ioanas-words.vercel.app/ro/practice). Code commit `779ac390838b22e3c959d25da3e4e3cef49ba378` was pushed to the existing production branch after Astra high approval and release checks.

## Independent audit

A fresh `gpt-6-astra` reviewer ran at `reasoningEffort: high` through T3. Round 1 blocked deployment on four confirmed issues in the current working tree, including the untracked Guided Practice implementation.

| Finding                                                                                | Correction                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1 delayed configuration refresh could overwrite a newer restored compatibility mirror | Every ordinary initialization acquires the configuration lock before reading. Already-locked backup/setup paths use a separate helper. Mirror reconciliation reads fresh canonical data and revision-checks its commit. |
| P2 background refresh let stale profile drafts save against a newer revision           | The editor captures its opening revision and submits against it. Conflicts preserve inputs and explain cancelling/reopening for current data.                                                                           |
| P2 normalizing setup parser accepted malformed canonical backup objects unchanged      | Canonical saved/active/session configuration fields are strictly checked. Only known old schemas receive explicit normalization during migration. Existing long configuration names remain accepted.                    |
| P2 setup writes could throw after successful initialization without recovery           | Save, Start and Delete now catch write failures, preserve selections and show accessible guidance. If saving succeeds but starting fails, feedback states that distinction; retrying Start does not save a duplicate.   |

The reviewer inspected transactions/migrations, locks/recovery, counting/rewards, profile isolation, encrypted restore, sound boundaries, onboarding, setup and static deployment. No Word Wheel graph index was available; this was a direct-source audit. The first race reproduction used a controlled in-memory harness. Round 2 cleared findings 2–4 but found a remaining lock-lifecycle hole: setup cleanup could release its lease while initialization was still awaiting a read. The final correction defers both abort and release until initialization settles. Round 3 returned **CODEDEPLOY: APPROVE**, with all four findings resolved and no remaining confirmed blocker. Its independent actual-function harness checked unmount during paused reads and mutations, later restore ordering, failure/cancellation paths and an unconditional-cleanup negative control. It also reran the domain checks. This is code-deployment approval, not physical-device or clinical approval.

## Regression evidence

`check:release-regressions` passes in headed Chrome 155.0.8059.85 and headless WebKit 26.5. It uses real browser IndexedDB/Web Locks and two tabs to check fresh mirroring after a queued refresh and a stale avatar/nickname edit. A further regression pauses the actual setup read, navigates away, verifies that its lock remains held and a restore queues, then confirms the later restore owns the final canonical and mirror values. It verifies lifecycle safety; the exact original stale-mirror reproduction remains the auditor's controlled harness. It injects post-initialization storage quota failures to check Save/Start retries and partial save-and-start without duplicate configurations. Synthetic contexts never use real child data.

`check:practice` now rejects malformed exclusion/selected-word fields, duplicates and non-string values before encryption or restore, checks that failed restores leave destination data unchanged, and confirms explicit legacy migration. It also preserves valid long configuration names.

Full practice/backup journeys pass in Chrome and WebKit after the persistence corrections. WebKit onboarding and all 85 valid public routes plus four Romanian 404 cases pass. Content validation passes with the existing soft image-size warnings; zero sound targets are reviewed. Frozen pnpm installation, matching, gameplay, setup-storage and review-tool checks pass. Production-only and full dependency audits both report zero advisories on 2026-10-24; this supersedes the previously recorded lint-only advisory for this date. Audit JSON and screenshots are retained outside the repository at `/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/`.

- [Stale profile draft retained](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/webkit-release-stale-profile-mobile.png)
- [Setup save failure](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/webkit-release-setup-save-failure-mobile.png)
- [Saved configuration with failed start](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/webkit-release-setup-partial-save-mobile.png)

The repository-wide formatter flags 138 untouched baseline files. They are identical to HEAD, and none is part of this candidate's changed-file set. Candidate files pass the scoped formatting check; no unrelated content or historical-document reformat was added.

## Deployment preparation

The existing public project is `ioanas-words.vercel.app`, connected to `MrNagy21/ioanas-words`, production branch `main`. Local and remote main started at `11bcf9bef617b820ac9c77e0be60ad048257a643`. Its last recorded GitHub deployment was successful and created by `vercel[bot]`. The GitHub account has push permission; branch protection is not enabled.

Vercel CLI 65.2.0 was tried outside app dependencies. Its stored login was expired. No temporary site or alternative project was created. The deployment used the existing GitHub integration after audit approval and final checks. Vercel documents that [pushes to the connected production branch update the production deployment](https://vercel.com/docs/git/vercel-for-github). No production settings or protection changes are needed.

## Published release

Vercel completed production deployment `7301888432` for code commit `779ac390838b22e3c959d25da3e4e3cef49ba378`. GitHub's Vercel status is success. Its immutable URL is [ioanas-words-5xgq01zia-mrnagy21s-projects.vercel.app](https://ioanas-words-5xgq01zia-mrnagy21s-projects.vercel.app); testers should use the public alias above. The previous known production revision was `11bcf9bef617b820ac9c77e0be60ad048257a643`.

Public-origin checks pass:

- HTTPS practice returns 200 with certificate verification result 0.
- All 85 public routes pass; four invalid paths return Romanian/noindex recovery.
- Full synthetic practice/backup journeys pass in headed Chrome 155 and WebKit 26.5, including IndexedDB persistence, ownership/recovery, observations and protected child/whole-app restore.
- The full WebKit onboarding journey passes, including actual profile creation, exact starter words, retry, reload, Help and existing-round resume.
- The WebKit setup journey passes with the labelled count, exclusions, optional saving, selected word count, phone/desktop/enlarged text, chooser and deletion states.
- Chrome's normal-profile manifest and installability checks return no errors. Secure-context storage/locks/crypto are available.

These probes ran against the public HTTPS origin, not localhost or the protected immutable deployment. The retained scripts replace only the local base URL and helper import paths outside the repository. Captures are in `/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/production/`; the installability result is `installability-production.json` in its parent folder. No actual child records, passwords or backups were uploaded.

The deployed code is unchanged by the later documentation commit that records these results. Physical-device/pilot results are still required. This is a deployed pilot, not a claim that GP9 human acceptance is complete.

## Installation check

The user requested installability before deployment. The manifest already has stable ID `/`, start URL `/ro/practice`, scope `/`, standalone display, Romanian names and valid 192/512px PNG icons. Root metadata includes the Apple touch icon and web-app-capable settings. No service worker or offline claim was added.

Chrome 155 in a fresh normal persistent test profile reports empty manifest and installability error lists on localhost. The earlier incognito probe reported only `in-incognito`, so it is not used as the installability verdict. No OS-level app was installed by automation. The same normal-profile check also passes on the deployed HTTPS origin, with IndexedDB, Web Locks and Web Crypto available in a secure context. Actual iPhone/Android installation remains unverified.

See [Chrome's install criteria](https://web.dev/articles/install-criteria), [Apple's home-screen web app instructions](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios) and the README installation steps. The browser decides whether and when to offer its install prompt.

## Remaining limits

Romanian mappings remain unknown until actual review returns; verified sound/position credit is disabled. Real iPhone/Android, assistive-technology and therapist acceptance remain pending. They limit pilot/clinical readiness claims separately from code deployment. Offline cold launch remains unsupported and child records remain local to each browser/origin. Tailscale data does not automatically appear on the public origin. Use a protected backup for an intentional transfer.

Use the [acceptance checklist](acceptance-test-checklist.md) and [next prompt](next-implementation-prompt.md) for findings after release.
