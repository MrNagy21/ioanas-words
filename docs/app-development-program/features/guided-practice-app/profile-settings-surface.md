# Focused profile settings

Status: implemented and locally verified, 2026-10-26. The finish reviewer returned `disposition: ship` for the scored documentation, regression and enlarged-text fixes.

The user's phone screenshots show a long page mixing pronunciation, goal settings, deletion, saved wheels and backups. This extension keeps the existing warm ivory, system type, pixel animals and coral/teal actions. Mode: Operate. Form: user-directed focused task screens; no new visual identity or concept round.

The profile opens with its child's avatar and name, word/medal totals, prepare/resume action and six plain navigation rows. Sounds, pronunciation, activity, medals, saved wheels and profile settings open separately. Each row says what the adult can do. No accordion or nested card is needed for these tasks.

A sound opens its own participation progress, verified-sound information and archive/reactivate action. Adding a sound uses labelled native radios arranged as large letter/group choices, with an explicit save action. Active goals are marked and disabled. Archived goals reuse their existing identity and history.

Pronunciation first asks which sound. The observation form has six labelled choices using the agreed 0–5 scale and starts unrated. It replaces duplicate slider/button controls. History and optional adult-triggered celebrations have separate screens. Ratings do not change rewards. Schema, counting, automatic goals and reviewed sound attribution remain unchanged.

Profile settings lead to name/avatar editing and protected backups, with a separate deletion confirmation. Backup opens a dedicated screen with the current child selected as the initial export scope. The child list provides app-wide data/settings and shared-wheel access. Profile and pronunciation navigation support browser Back/Forward. Choosing a child resets to its home. Preparation still adds or reactivates a target only when real play starts.

On a 390px phone, the child and prepare/resume action lead, followed by the profile navigation. Task screens replace the menu and reset scroll/focus. At 320px and enlarged text, controls wrap and remain reachable. Desktop keeps a readable single column. Primary actions use the existing 52px minimum. No decorative motion was added.

## Verification

- Production build with TypeScript, lint, `pnpm run check:practice` and scoped Prettier checks pass.
- `pnpm run check:profile-settings` passes in headed Chrome 155 and WebKit 26.5. Coverage includes native-radio keyboard operation, duplicate prevention, archive/reactivation with the same goal ID, failed saves preserving selection, initially unrated and zero observations, corrections without automatic rewards, explicit adult medals, profile editing, backup entry, Back/Forward and child isolation.
- The focused suite checks 320px and 390px phones, 844px landscape, 1440px desktop and 200% text. Both browser engines pass again after the grid correction below, with individual label overflow assertions for both letters and letter groups. The final production build/TypeScript check also passes.
- WebKit release-regression, resilience, child-workspace and onboarding suites pass. The final full practice suite passes, including protected child/full restore, shared-library preservation, Help, observations, recovery/ownership, demo isolation, 404/installability assets and the online-required limit. Its test helper now waits for asynchronous onboarding exit before continuing.
- Localhost and Tailscale HTTPS return 200. Testing used the existing app on port 3000.

The finish reviewer accepted all eight mobile/desktop captures and found no visual fixes. Its initial `fix` verdict concerned stale documentation and the pending full practice rerun. Both are now resolved. The final verdict is `disposition: ship`, scoped to the scored documentation, regression and enlarged-text fixes. A subsequent targeted 390px/200% text check found multi-letter choices overflowing their buttons. The grid minimum now uses `max(52px, 3.25rem)` to preserve normal sizing and grow with enlarged text. Both focused browser suites pass after this correction. All eight original captures were refreshed and an enlarged-text group capture was added; the parent opened and validated all nine. Existing Arial and press-border detector findings were left unchanged because this extension does not replace the visual system.

Source evidence came from direct reads of `profile-panel.tsx`, `pronunciation-panel.tsx`, `profile-workspace.tsx`, `practice-progress.tsx`, `practice-backups.tsx` and the final CSS section. The graph catalog had no Word Wheel project, so this report claims no graph evidence.

## Screenshots

Three phone captures show the main changes:

- [Profile menu](/Users/darius/.t3/userdata/artifacts/word-wheel-profile-settings-2026-10-26/webkit-profile-menu-mobile.png)
- [Sound picker](/Users/darius/.t3/userdata/artifacts/word-wheel-profile-settings-2026-10-26/webkit-sound-picker-mobile.png)
- [Pronunciation choices](/Users/darius/.t3/userdata/artifacts/word-wheel-profile-settings-2026-10-26/webkit-pronunciation-rating-mobile.png)

All nine captures are retained under `.impeccable/review/profile-settings/` and copied to `/Users/darius/.t3/userdata/artifacts/word-wheel-profile-settings-2026-10-26/`. The eight main names use `webkit-{profile-menu,sound-picker,pronunciation-rating,profile-settings}-{mobile,desktop}.png`. The enlarged-text proof is `webkit-sound-groups-200-mobile.png`.

## Phone acceptance checklist

Open [the local HTTPS app](https://dariuss-macbook-pro-2.tail1ee9b4.ts.net:9443/ro/practice) on a device connected to the same tailnet. Each browser/origin keeps separate local records. Use a test child and save a protected backup before restore or deletion checks.

1. Choose a child. Check its name, avatar, totals and prepare/resume action, then open each of the six destinations. Try Back/Forward and select another child.
2. Open Sunete urmărite. Add a letter and a letter group, confirm an active sound cannot be added twice, then archive/reactivate a sound and check that its history remains.
3. Open Pronunție. Choose a sound, confirm nothing is selected initially, save 0, then correct it through history. Confirm these actions award no medal. Offer a progress medal through the separate celebration task.
4. Prepare a wheel, preview it, then start real play. Check that the target appears only at start. Close a word, return to the profile and inspect activity, totals and medals. Resume an unfinished round.
5. Open profile settings. Change the name/avatar, open backup and confirm that child is selected. Export and restore a protected test backup; check the other child and shared saved wheels remain. Cancel a deletion confirmation.
6. Repeat the main tasks in portrait and landscape with enlarged text. Check that labels, focus, save actions and Back remain reachable. Record the device/browser and any therapist feedback. Confirm the app still says a connection is needed to open.

## Remaining GP9 work

Physical iPhone/Android and assistive-technology acceptance, therapist feedback and user-arranged Romanian review remain pending. No verified sound credit can be enabled from spelling alone. This extension changes no schema, domain, counting, reward, mapping or content contracts. Opening remains online-required and protected backups remain local. No commit, push or deployment was made for this update.

Ready-to-copy next prompt:

```text
Continue Guided Practice App GP9 acceptance for Word Wheel. Read AGENTS.md, docs/agent-brief.md, docs/spec.md, docs/plan.md, docs/status.md and the guided-practice feature package, including profile-settings-surface.md, child-first-workspace.md, the accepted contracts, implementation report and next-implementation-prompt.md. Use the existing app on port 3000 and the Tailscale HTTPS test link. Collect actual physical iPhone/Android, assistive-technology and therapist results using the six-step profile-settings checklist and the full acceptance checklist. Incorporate user-arranged reviewed Romanian mappings only after validation; never infer verified sound credit from spelling. Preserve the agreed counting/rewards, browser-local records, protected backup/restore and explicit online-required messaging. Fix evidenced acceptance issues, rerun relevant checks, and update status with actual results and remaining gates. Do not deploy without an explicit request.
```
