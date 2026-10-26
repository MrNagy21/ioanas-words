# Your app testing checklist

Use this for your acceptance test after the local engineering QA. It lists the features, actions to try and expected results. The [onboarding report](onboarding-redesign.md) and [earlier QA report](production-qa-2026-10-18.md) record the automated results separately. Blank boxes below are for your results, not claims that a physical phone was tested.

## Before you start

Open [the public app](https://ioanas-words.vercel.app/ro/practice). See the [2026-10-26 release report](release-2026-10-26.md) for the current revision and verification. Local testing remains available at `http://localhost:3000/ro/practice`. Use synthetic profiles named Alex Test and Mara Test. Keep the existing browser data; there is no need to clear it. If you use existing records, make a protected whole-app backup before restore or deletion tests.

The public app needs no Tailscale connection. Its records are separate from localhost/Tailscale; use a protected backup for an intentional transfer. To test the local build from phones instead, connect Tailscale to the same tailnet and open [the private HTTPS candidate](https://dariuss-macbook-pro-2.tail1ee9b4.ts.net:9443/ro/practice). This route was enabled and certificate-checked on 2026-10-19. The app still runs on this computer; keep it awake and running during testing. HTTPS supports the secure context needed for saved profiles, locking and encryption. Each browser/origin starts with its own local records. The local LAN HTTP address is unsuitable for saved-mode checks. Record the actual URL and build you test; do not treat the older public demo as this candidate.

The app needs a connection to open. Offline cold launch is not supported. Sound mappings are waiting for Romanian review, so overall participation works but verified sound/position totals are unavailable. That message is expected, not a zero score.

## First walkthrough

1. Open [the focused guide](https://ioanas-words.vercel.app/ro/practice?guide=1). It should show one task page at a time, without the profile dashboard underneath.
2. Continue from the welcome. Create Alex Test and choose an avatar. Go back once, then continue without creating a duplicate profile.
3. Choose an optional sound. Review the actual pictures on the starter wheel and try changing the selection. Pending Romanian review is expected.
4. Continue to the child handover, then start. The wheel must contain exactly the pictures you reviewed.
5. Spin and practise a word. Close it with **Păstrează**. Collect the first medal and choose its illustration.
6. Spin again, then use **Scoate din roată**. Confirm that the word leaves this round.
7. Open End, cancel it, then end deliberately. Return to Alex's activity and collection.
8. Add an adult pronunciation observation. Check that the rating alone adds no medal.
9. Create Mara Test from profiles. Prepare and save a custom wheel, then reuse that saved wheel for Alex. Their histories must stay separate.
10. Open **Ajutor**, go back and exit with **Merg la profiluri**. Existing records remain. Reopen Help while a round is active and confirm that it offers to resume that round.
11. Try [the introduction](https://ioanas-words.vercel.app/ro/about?show=1) and demo. Demo activity must remain separate.
12. Download a protected child backup, then a whole-app backup. Run the restore checks below using test data.

## Features and expected behaviour

### Entry, guidance and profiles

- [ ] **E1 Introduction:** explanations and Start/Demo links are readable on phone and desktop. Demo activity never appears in a child profile.
- [ ] **E2 Returning adult:** reopening `/` returns to the workspace when profiles exist. **Despre Vorbini** still opens the introduction.
- [ ] **E3 Guide:** welcome → child → optional sound → picture wheel → handover. Each page has one main action. Create/select a real child, go back, reload, skip the sound and exit with **Merg la profiluri**. Restart from **Ajutor**. The reviewed pictures enter real play; an existing round resumes. Profiles, wheels and history remain. On a phone, check the keyboard and footer text as well as the buttons.
- [ ] **P1 Profiles:** create, edit a nickname/avatar and switch between two children. The correct nickname/avatar appears before play.
- [ ] **P4 Two-tab editing:** open the same child's profile editor in two tabs. Save a changed avatar in one, then try saving the old form in the other. A conflict should retain the draft and preserve the newer avatar. Cancel/reopen before saving a fresh edit.
- [ ] **P2 Long names:** use a long nickname with the phone keyboard open. Save, Cancel and navigation stay reachable.
- [ ] **P3 Delete:** cancel deletion first. Then delete only a synthetic profile after confirmation. The other child's data and shared wheels remain.

### Goals and reusable wheels

- [ ] **G1 Goals:** add a target from the sound picker, archive it, then start a wheel for that target. Starting the round reactivates the existing goal and preserves its history. Preparing a wheel alone adds no goal. There is no reward-frequency setting.
- [ ] **G2 Honest coverage:** pending Romanian review is clearly stated. Practice totals are available; unknown sound/position coverage is not presented as verified zero.
- [ ] **W1 Setup:** choose a target, matching mode and words/exclusions through the four clean task pages. On Final, the number explicitly says how many words go on the wheel. Available words are a separate pool. Change the number with minus/plus and confirm the prepared preview contains that many words. Try starting without saving, then expand optional saving and save a named wheel.
- [ ] **W2 Library:** save, reopen and edit a wheel. Reuse it for the other child. Editing a shared configuration does not rewrite an already active round.
- [ ] **W3 Pre-play:** verify the child and exact prepared words. The chosen target is added or reactivated when the round starts; no prior goal setup is required.
- [ ] **W5 Storage recovery:** if a post-initialization save/start fails, the draft and name stay available with readable retry guidance. A saved wheel followed by a failed start must be reported as saved, and retrying Start must not create another saved wheel.
- [ ] **W4 No goals:** start with a child who has no goals. A targeted round adds its target automatically and earns overall and target participation.

### Play, counting and stopping

- [ ] **S1 Keep/remove:** **Păstrează** retains the word; **Scoate din roată** removes it from this round. Each closed result counts once.
- [ ] **S2 Other closes:** try the result's close button and desktop Escape on separate spins. Each closure counts once and retains the word.
- [ ] **S3 Counting:** merely displaying a word does not normally add a count. Repeating the same word on a later spin adds another practice turn, while the distinct-word total remains unchanged.
- [ ] **S4 End:** End is available after closing the result. Cancel continues the round. Confirm ends it without another count or completion medal.
- [ ] **S5 Empty wheel:** remove every word from a small wheel. The round ends and returns a useful summary without refilling removed words.
- [ ] **S6 Recovery:** reload with a displayed word. It counts once on recovery for the same child. Reload again; it must not count twice. Recovery approximates participation and does not prove the child spoke.
- [ ] **S7 Two tabs:** open the same child's round in another tab. Only the owning tab controls it. Close that tab and resume from the other without duplicate counts.

### Rewards, activity and adult observations

- [ ] **R1 Medals:** the overall first medal follows one closed word, then milestones 3, 5 and 10, then every 10. Existing profiles retain their next promised medal before adopting the new schedule. The bar fills per word. There is no timer, lost streak or speed bonus.
- [ ] **R2 Choice:** the award congratulates the child, names the milestone and saves the chosen medal illustration. Changing the drawing does not add credit.
- [ ] **R3 Access:** the medal choices and save action remain reachable in portrait, short landscape and enlarged text. Reduced motion keeps a readable celebration.
- [ ] **H1 Activity:** repeated versus different words, session summaries and picture history agree with your test turns. Switching children changes the history.
- [ ] **O1 Ratings:** unrated differs from 0. Try the adult 0–5 pronunciation scale, save a dated observation and correct one. No automatic accuracy claim or reward change follows.
- [ ] **O2 Adult celebration:** use **Sărbătorește acum**, then queue a separate celebration for next play. They belong to that child and are labelled as adult-observed progress.
- [ ] **O3 Sound:** celebration sound starts off. Turn it on and off; the preference persists. Muting does not hide awards. Check actual audio on each device.

### Navigation and footer

- [ ] **N1 Profile menus:** open each of the six destinations. Back returns to its parent; browser Back/Forward follows the same journey. Reload preserves the selected child and screen.
- [ ] **N2 Settings:** edit nickname/avatar from settings, cancel once, then save. Both routes return to settings. The child backup screen returns to settings before returning to the profile.
- [ ] **N3 Footer:** introduction, child list, profile settings and policy pages have readable links on a phone. Terms and Privacy from adult menus open a separate tab and preserve the current task. Gameplay and focused forms have no adult footer.
- [ ] **N4 Policies:** both policy pages remain visibly marked as drafts. Their operational release decisions are still pending.

### Backups, recovery and responsive use

- [ ] **B1 Export:** export both child-only and whole-app protected files. Verify the download is findable on the actual device. Keep the test password separately; a lost password cannot be recovered.
- [ ] **B2 Invalid file/password:** try a wrong password and a damaged test copy. An understandable error appears and current records remain intact.
- [ ] **B3 Child restore:** inspect the preview, cancel once, then confirm. The selected child's records return; other children and shared wheels stay unchanged.
- [ ] **B4 Whole-app restore:** export, make a recognisable test change, then restore. Profiles, goals, activity, observations, medals and the shared library return to the exported state.
- [ ] **B5 Repeated restore:** restore the same test file twice. History and medals are not duplicated.
- [ ] **U1 Mobile:** repeat setup, results, medals, history and backup forms with touch, keyboard/toolbars, rotation and larger system text. Scrolling is allowed in adult pages; normal play controls should fit.
- [ ] **U4 Installation:** open the public HTTPS app in a normal browser. On iPhone Safari, use Share → Add to Home Screen and enable Open as Web App if offered. On Android Chrome, use the browser's Install app/Add to Home screen option. Launch from its icon and confirm the app opens without normal browser navigation. Reopen a synthetic profile and check protected backup downloads in this installed context. A connection is still required; do not expect offline cold launch or automatic transfer from another browser/origin.
- [ ] **U2 Missing page:** visit `/ro/play/not-a-target`. The Romanian recovery screen offers the app, anonymous play and explanation. Returning to the app preserves records.
- [ ] **U3 Local limits:** the app explains local saving and manual backups. If saving is blocked, temporary anonymous play is available. Do not expect offline cold launch or cross-device sync.

## Tests waiting for Romanian review

Mark these **Blocked** until actual reviewed mappings are integrated. Do not substitute spelling matches.

- **M1** The pre-play list reflects the exact reviewed matching subset and distinguishes unknown from reviewed absence.
- **M2** Reviewed sound statistics may record several selected matching goals once each. Wheel-target participation remains separate and each closed word still adds only one overall turn.
- **M3** Beginning/middle/end statistics match reviewed positions. New or archived goals do not rewrite historical credits. Previously earned medals and the next promised milestone remain intact after migration.

## Send back findings

For each failure, include the checklist ID, device/OS/browser, URL/build, steps, expected result, actual result and a screenshot or recording. Use Pass, Fail or Blocked. Do not include real child identifiers, backup contents or passwords.

```text
Build / URL:
Date:
Device / OS / browser:
Checklist ID:
Result: Pass / Fail / Blocked
Steps:
Expected:
Actual:
Screenshot / recording:
```

For the therapist walkthrough, also note where setup needed coaching, whether the child understood the next-medal bar, whether effects distracted from practice, and whether rewards encouraged rushing. Record usefulness and friction without treating the session as a clinical efficacy test.

The user authorized deployment after code audit; the pilot is live. Physical-phone/therapist acceptance and Romanian review remain open. Automated QA does not fill those human result boxes.
