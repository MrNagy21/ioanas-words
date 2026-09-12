import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
// Use a local Playwright install, or the desktop app's bundled package.
const { chromium } = require(
  process.env.WORD_WHEEL_PLAYWRIGHT_PATH || "playwright",
);
const repo = fileURLToPath(new URL("../../", import.meta.url));
const output = await mkdtemp(path.join(tmpdir(), "word-wheel-qa-"));
const errors = [];
let browser;
try {
  // Next's package re-export needs an explicit ESM bridge in Bun's browser bundle.
  // This still uses the real Next Image component, not a test replacement.
  await writeFile(
    path.join(output, "image.mjs"),
    `export { Image as default } from ${JSON.stringify(path.join(repo, "node_modules/next/dist/client/image-component.js"))};`,
  );
  await writeFile(
    path.join(output, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        jsx: "react-jsx",
        paths: {
          "@/*": [path.join(repo, "src/*")],
          "next/image": [path.join(output, "image.mjs")],
        },
      },
    }),
  );
  execFileSync(
    "bun",
    [
      "build",
      "--tsconfig-override",
      path.join(output, "tsconfig.json"),
      "scripts/qa/wheel-game.fixture.tsx",
      "--target=browser",
      "--define",
      'process.env.NODE_ENV="development"',
      "--outfile",
      path.join(output, "fixture.js"),
    ],
    { cwd: repo, stdio: "pipe" },
  );
  await writeFile(
    path.join(output, "index.html"),
    `<!doctype html><html lang="ro"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${await readFile(path.join(repo, "app/globals.css"), "utf8")}</style><div id="root"></div><script>window.process = { env: {} };</script><script src="fixture.js"></script></html>`,
  );
  browser = await chromium.launch({ headless: true, channel: "chrome" });
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  page.on("pageerror", (error) => {
    errors.push(error.message);
    console.error(error.message);
  });
  await page.route("**/images/**", async (route) => {
    const pathname = decodeURIComponent(
      new URL(route.request().url()).pathname,
    );
    await route.fulfill({ path: path.join(repo, "public", pathname) });
  });
  await page.addInitScript(() => {
    localStorage.setItem(
      "word-wheel.setup.v1",
      JSON.stringify({
        schemaVersion: 2,
        savedSetups: [],
        activeConfigsByTargetKey: {
          "ro:letter:d": {
            mode: "starts-with",
            excludedTargetKeys: [],
            wheelWordCount: 15,
            wordSelectionMode: "all",
            selectedWordIds: [],
          },
        },
      }),
    );
  });
  await page.goto(pathToFileURL(path.join(output, "index.html")).href);
  const labels = () => page.locator(".word-wheel__label").allTextContents();
  const waitCount = (count) =>
    page.waitForFunction(
      (n) => document.querySelectorAll(".word-wheel__label").length === n,
      count,
    );
  const spin = async () => {
    await page.getByRole("button", { name: "Învârte", exact: true }).click();
    await page.getByRole("dialog").waitFor();
  };
  await waitCount(15);
  for (const [width, height] of [
    [1440, 900],
    [768, 1024],
    [390, 844],
    [320, 568],
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    const boxes = await page.evaluate(() =>
      [".wheel-wrap", ".game-panel", ".game-actions"].map((selector) => {
        const r = document.querySelector(selector).getBoundingClientRect();
        return { x: r.x, y: r.y, right: r.right, bottom: r.bottom };
      }),
    );
    assert.ok(
      boxes.every(
        (r) => r.x >= 0 && r.y >= 0 && r.right <= width && r.bottom <= height,
      ),
      `Game must fit ${width}x${height}`,
    );
    const [wheel, panel, actions] = boxes;
    assert.ok(
      wheel.right <= panel.x ||
        wheel.bottom <= panel.y ||
        panel.right <= wheel.x ||
        panel.bottom <= wheel.y,
      `Wheel and panel must not overlap at ${width}x${height}`,
    );
    assert.ok(
      wheel.bottom <= actions.y && panel.bottom <= actions.y,
      `Actions must stay below the board at ${width}x${height}`,
    );
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  const initial = await labels();
  await spin();
  const firstResult = await page.locator("#result-title").textContent();
  assert.ok(initial.includes(firstResult));
  await page.getByRole("button", { name: "Păstrează", exact: true }).click();
  assert.deepEqual(await labels(), initial, "Keep must preserve the wheel");
  await page.waitForFunction(() =>
    document.activeElement?.classList.contains("wheel-button"),
  );
  await spin();
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  assert.deepEqual(await labels(), initial, "Escape must preserve the wheel");
  await spin();
  await page.keyboard.press("Shift+Tab");
  assert.equal(
    await page.locator(":focus").getAttribute("aria-label"),
    "Închide rezultatul",
  );
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Păstrează");
  await page
    .getByRole("button", { name: "Închide rezultatul", exact: true })
    .click();
  assert.deepEqual(await labels(), initial, "Close must preserve the wheel");
  await spin();
  await page.getByRole("button", { name: /Înlocuiește cu/ }).click();
  await waitCount(15);
  assert.equal(
    (await labels()).filter((word) => !initial.includes(word)).length,
    1,
  );

  for (let count = 15; count > 0; count--) {
    const before = await labels();
    await spin();
    const removed = await page.locator("#result-title").textContent();
    await page
      .getByRole("button", { name: "Scoate din roată", exact: true })
      .click();
    await waitCount(count - 1);
    assert.deepEqual(
      await labels(),
      before.filter((word) => word !== removed),
    );
    if (count <= 4) {
      await page.evaluate(() => window.renderTarget("d"));
      await page.waitForTimeout(100);
      assert.deepEqual(
        await labels(),
        before.filter((word) => word !== removed),
        "Fresh same-target props must not reset progress",
      );
    }
  }
  await page.getByRole("heading", { name: "Ai terminat roata!" }).waitFor();
  await page.waitForFunction(() => document.activeElement?.id === "game-title");
  assert.equal(
    await page.locator(".game-actions, .game-panel, .wheel-button").count(),
    0,
  );

  for (const [width, height] of [
    [1440, 900],
    [768, 1024],
    [390, 844],
    [320, 568],
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    const geometry = await page.locator(".empty-wheel-state").evaluate((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.x,
        y: r.y,
        right: r.right,
        bottom: r.bottom,
        client: el.clientHeight,
        scroll: el.scrollHeight,
      };
    });
    assert.ok(
      geometry.x >= 0 &&
        geometry.y >= 0 &&
        geometry.right <= width &&
        geometry.bottom <= height,
      `Completion card must fit ${width}x${height}: ${JSON.stringify(geometry)}`,
    );
    assert.ok(
      geometry.scroll <= geometry.client + 1,
      `Completion card should not need scrolling at ${width}x${height}`,
    );
  }
  await page.getByRole("button", { name: "Joacă din nou" }).click();
  await waitCount(15);
  await page.waitForFunction(() =>
    document.activeElement?.classList.contains("wheel-button"),
  );

  // Fresh target sessions must discard the previous target's state and timers.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.renderTarget("ghi"));
  await waitCount(10);
  await spin();
  for (const [width, height] of [
    [390, 844],
    [320, 568],
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    const modal = page.getByRole("dialog");
    const bounds = await modal.boundingBox();
    assert.ok(
      bounds &&
        bounds.x >= 0 &&
        bounds.y >= 0 &&
        bounds.x + bounds.width <= width &&
        bounds.y + bounds.height <= height,
    );
    await page
      .getByRole("button", { name: "Scoate din roată", exact: true })
      .scrollIntoViewIfNeeded();
    const button = await page
      .getByRole("button", { name: "Scoate din roată", exact: true })
      .boundingBox();
    assert.ok(button && button.y >= 0 && button.y + button.height <= height);
  }
  await page.keyboard.press("Escape");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.getByRole("button", { name: "Învârte", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Se învârte", exact: true })
      .isDisabled(),
    true,
  );
  await page.evaluate(() => window.renderTarget("d"));
  await waitCount(15);
  await page.waitForTimeout(8000);
  assert.equal(
    await page.getByRole("dialog").count(),
    0,
    "Leaving during a spin must cancel its result",
  );
  assert.deepEqual(errors, [], "No browser runtime errors");
  console.log(
    "Wheel browser checks passed: keep, Escape, focus trap, replace, 15→0 countdown, same-target rerenders, completion layouts, replay, target changes, timer cleanup, and result layouts.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
