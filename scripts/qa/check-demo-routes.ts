import assert from "node:assert/strict";
import { getGameplayRouteTargets } from "../../src/content/loaders";

const base = new URL(process.argv[2] ?? "http://localhost:3000");
assert.ok(
  ["http:", "https:"].includes(base.protocol),
  "Use an HTTP(S) demo URL",
);
const targets = getGameplayRouteTargets("ro");
const routes = [
  "/",
  "/ro",
  "/admin/words",
  "/admin/releases",
  "/admin/releases/1",
  "/admin/releases/2",
  "/admin/releases/3",
  "/icon.png",
  ...targets.flatMap(({ locale, target }) => [
    `/${locale}/setup/${target}`,
    `/${locale}/play/${target}`,
  ]),
];

async function checkRoute(route: string) {
  const response = await fetch(new URL(route, base), {
    signal: AbortSignal.timeout(30_000),
  });
  assert.equal(
    response.status,
    200,
    `${route}: expected HTTP 200, received ${response.status}`,
  );
  assert.equal(
    new URL(response.url).origin,
    base.origin,
    `${route}: redirected away from the app; check deployment protection`,
  );
  if (route.endsWith(".png")) {
    assert.match(response.headers.get("content-type") ?? "", /image\/png/);
    await response.arrayBuffer();
  } else {
    assert.ok(
      /<title>[^<]*Word Wheel<\/title>/.test(await response.text()),
      `${route}: response is not the Word Wheel app`,
    );
  }
}

// Stop early on protection or access failures instead of repeating them for every route.
await checkRoute("/ro");
for (let index = 0; index < routes.length; index += 4) {
  await Promise.all(routes.slice(index, index + 4).map(checkRoute));
}
const invalid = await fetch(new URL("/ro/play/not-a-target", base));
assert.equal(invalid.status, 404, "Unknown targets must return HTTP 404");
console.log(
  `${routes.length} public routes passed on ${base.origin}; unknown target returned 404.`,
);
