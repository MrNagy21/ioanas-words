# Proposed Vorbini address

The user proposed moving from `cuvinte.ioananagy.eu` to `vorbini.ioananagy.eu` on 27 October 2026. This is infrastructure preparation; the new hostname is not live and no redirect has been installed.

## Observed configuration

- `https://cuvinte.ioananagy.eu/ro` responds with HTTP 200 from Vercel.
- Its CNAME is `67a64e11a6186cd3.vercel-dns-017.com`.
- `vorbini.ioananagy.eu` currently has no CNAME or A record and does not resolve.
- The authoritative nameservers are `ns23.domaincontrol.com` and `ns24.domaincontrol.com`.
- The sibling psychologist-site source has two promotion URLs in `src/components/sections/WordWheelSection.tsx`. Update those only once the new hostname works; publishing that site's changes remains separate work.

Vercel CLI 65.2.0 `whoami` reports “Logged out.” No authenticated Vercel or DNS management connector is available in this session, so configuration has not been attempted.

## Migration sequence

1. Add `vorbini.ioananagy.eu` to the existing `ioanas-words` Vercel project's production domains. Keep the current deployment and old domain available.
2. Add the `vorbini` CNAME at the existing DNS provider, using the exact target Vercel displays for this project. The old domain's observed CNAME above is useful for comparison, not a substitute for checking the dashboard. No nameserver or email-record change is needed.
3. Verify Vercel domain status, HTTPS, `/ro`, `/ro/practice`, a play route and the manifest/icons at the new address.
4. Export a protected whole-app backup from each browser/device that holds records at the old address. Restore on the new address and verify profiles, history, medals and saved wheels before continuing practice there. Data at the two addresses does not synchronize.
5. Update public links after verification. Existing installed shortcuts still point at the old origin; install the new address after restoring data.
6. Keep the old app accessible for remaining exports. Decide whether and when to redirect only after accounting for existing users. An immediate redirect would hide their backup controls, even though it would not erase their browser data.

The app uses relative internal links and needs no route rename for this move. Adding a domain can point to the existing live deployment without publishing the uncommitted UI changes in this workspace.

## Sources

[Vercel's domain setup instructions](https://vercel.com/docs/domains/working-with-domains/add-a-domain) describe adding the project domain and its CNAME at the current registrar. [MDN's IndexedDB documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) confirms the same-origin storage boundary. Checked 27 October 2026.

## Next prompt

```text
Continue the proposed Vorbini domain move. Read docs/app-development-program/features/guided-practice-app/domain-move-2026-10-27.md and docs/status.md. Configure vorbini.ioananagy.eu on the existing Vercel project and DNS provider once authenticated access is available, verify HTTPS and routes, and retain cuvinte.ioananagy.eu for protected backup/export. Do not redirect existing users before their local data migration is accounted for. Keep publishing the app's local UI changes and the psychologist site's promotion as separate release decisions.
```
