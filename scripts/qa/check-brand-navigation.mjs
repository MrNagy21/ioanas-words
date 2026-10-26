import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile, mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";
const output = await mkdtemp(path.join(tmpdir(), "vorbini-nav-"));
let browser;
try {
  execFileSync("bun", [
    "build",
    "scripts/qa/practice-store.fixture.ts",
    "--target=browser",
    "--outfile",
    path.join(output, "fixture.js"),
  ]);
  browser = await launchQABrowser();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const heading = (name) => page.getByRole("heading", { name, exact: true });
  const button = (name) =>
    page.getByRole("button", { name, exact: typeof name === "string" });
  const row = (name) =>
    page
      .locator(".task-row")
      .filter({ has: page.getByText(name, { exact: true }) });
  await page.goto("http://localhost:3000/ro/practice");
  await button("Merg la profiluri").click();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  await page.evaluate(async () => {
    const a = window.practiceQA;
    await a.mutatePracticeState((s) => {
      a.saveProfile(s, { nickname: "Ioana", avatar: a.AVATAR_WORD_IDS[1] });
      a.saveGoal(s, s.profiles[0].id, "R");
    });
  });
  await button(/Ioana/).click();
  await heading("Ioana").waitFor();
  await page.waitForFunction(() => document.fonts.status === "loaded");
  const titleY = (await heading("Ioana").boundingBox()).y;
  assert.ok(titleY < 150, `Compact profile heading, got y=${titleY}`);
  const stateBefore = await page.evaluate(() =>
    window.practiceQA.readPracticeState(),
  );
  const historyLength = await page.evaluate(() => history.length);
  await row("Sunete urmărite").click();
  await heading("Sunete urmărite").waitFor();
  await button("Înapoi la profil").click();
  await heading("Ioana").waitFor();
  assert.equal(
    await page.evaluate(() => history.length),
    historyLength + 1,
    "Back reuses the existing entry",
  );
  await page.goBack();
  await heading("Copii").waitFor();
  await page.goForward();
  await heading("Ioana").waitFor();
  await row("Setările profilului").click();
  await row("Nume și personaj").click();
  await button("Setările profilului").click();
  await heading("Setările profilului").waitFor();
  await row("Copie de siguranță").click();
  await heading("Date și copii de siguranță").waitFor();
  await page.goBack();
  await heading("Setările profilului").waitFor();
  await page.goForward();
  await heading("Date și copii de siguranță").waitFor();
  await button("Setările profilului").click();
  await heading("Setările profilului").waitFor();
  await button("Înapoi la profil").click();
  await heading("Ioana").waitFor();
  await row("Roțile mele").click();
  await heading("Roțile mele salvate").waitFor();
  await button("Înapoi la profil").click();
  await heading("Ioana").waitFor();
  await row("Activitate").click();
  await heading("Activitate").waitFor();
  await page.reload();
  await heading("Activitate").waitFor();
  await button("Înapoi la profil").click();
  await heading("Ioana").waitFor();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  const stateAfter = await page.evaluate(() =>
    window.practiceQA.readPracticeState(),
  );
  assert.deepEqual(
    stateAfter,
    stateBefore,
    "Menu navigation does not change child records",
  );
  for (const [w, h] of [
    [390, 844],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width: w, height: h });
    await page.mouse.move(0, 0);
    await captureEvidence(page, `brand-profile-${w}`);
  }
  for (const [name, url] of [
    ["about", "/ro/about?show=1"],
    ["onboarding", "/ro/practice?guide=1"],
    ["letters", "/ro"],
    ["setup", "/ro/setup/r"],
    ["demo", "/ro/demo"],
  ]) {
    for (const [w, h] of [
      [390, 844],
      [1440, 900],
    ]) {
      await page.setViewportSize({ width: w, height: h });
      await page.goto("http://localhost:3000" + url);
      // Let link prefetches settle before the next full-document navigation.
      // WebKit reports cancelled in-flight prefetches as page errors.
      await page.waitForLoadState("networkidle");
      await page.waitForFunction(() => document.fonts.status === "loaded");
      await page
        .locator("img")
        .evaluateAll((images) =>
          Promise.all(images.map((img) => img.decode().catch(() => {}))),
        );
      await page.mouse.move(0, 0);
      await captureEvidence(page, `brand-${name}-${w}`);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${name} ${w} no page overflow`,
      );
    }
  }
  const manifest = await (
    await context.request.get("http://localhost:3000/manifest.webmanifest")
  ).json();
  assert.equal(manifest.short_name, "Vorbini");
  for (const icon of manifest.icons)
    assert.equal(
      (await context.request.get("http://localhost:3000" + icon.src)).status(),
      200,
    );
  assert.deepEqual(errors, []);
  const report = {
    status: "passed",
    profileHeadingY: titleY,
    historyBackCreatesNoEntry: true,
    browserBackForward: true,
    reloadRestoresMenu: true,
    navigationPreservesRecords: true,
    manifestName: manifest.short_name,
    browserErrors: errors,
  };
  if (process.env.WORD_WHEEL_QA_ARTIFACT_DIR)
    await writeFile(
      path.join(
        process.env.WORD_WHEEL_QA_ARTIFACT_DIR,
        "brand-navigation.json",
      ),
      JSON.stringify(report, null, 2),
    );
  console.log(JSON.stringify(report));
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
