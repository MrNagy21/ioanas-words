import assert from "node:assert/strict";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";

const browser = await launchQABrowser();
try {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
    hasTouch: true,
  });
  const page = await context.newPage();
  const errors = [];
  context.on("page", (p) => p.on("pageerror", (e) => errors.push(e.message)));
  page.on("pageerror", (e) => errors.push(e.message));
  const footer = () => page.locator(".adult-footer");
  const button = (name) => page.getByRole("button", { name, exact: true });

  async function verifyFooter(name) {
    await footer().waitFor();
    assert.equal(await footer().count(), 1, `${name}: one footer`);
    for (const [width, height, size] of [
      [390, 844, "100%"],
      [320, 568, "200%"],
      [844, 390, "100%"],
      [1440, 900, "100%"],
    ]) {
      await page.setViewportSize({ width, height });
      await page.evaluate((size) => {
        document.documentElement.style.fontSize = size;
      }, size);
      await footer().scrollIntoViewIfNeeded();
      await page.evaluate(() => document.fonts.ready);
      assert.ok(
        await page
          .locator("main")
          .evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
        `${name}: no overflow at ${width}/${size}`,
      );
      for (const link of await footer().locator("a").all()) {
        await link.scrollIntoViewIfNeeded();
        const bounds = await link.boundingBox();
        assert.ok(bounds.height >= 44, `${name}: touch target >=44px`);
        assert.ok(
          bounds.x >= 0 && bounds.x + bounds.width <= width + 1,
          `${name}: links fit`,
        );
      }
      await footer().scrollIntoViewIfNeeded();
      if (size === "100%" && [390, 1440].includes(width)) {
        await captureEvidence(page, `${name}-${width}`);
      }
    }
    const first = footer().locator("a").first();
    await first.focus();
    assert.ok(await first.evaluate((el) => document.activeElement === el));
    await page.setViewportSize({ width: 390, height: 844 });
  }

  await page.goto("http://localhost:3000/ro/about?show=1");
  await verifyFooter("footer-about");
  await footer()
    .getByRole("link", { name: "Termeni de utilizare", exact: true })
    .click();
  await page.waitForURL("**/ro/termeni");
  assert.equal(
    await footer()
      .getByRole("link", { name: "Termeni de utilizare", exact: true })
      .getAttribute("aria-current"),
    "page",
  );
  await verifyFooter("footer-terms");
  await footer()
    .getByRole("link", { name: "Confidențialitate", exact: true })
    .click();
  await page.waitForURL("**/ro/confidentialitate");
  assert.equal(
    await footer()
      .getByRole("link", { name: "Contact", exact: true })
      .getAttribute("href"),
    "mailto:darius@mrnagy.com",
  );

  await page.goto("http://localhost:3000/ro/practice");
  await button("Merg la profiluri").waitFor();
  assert.equal(await footer().count(), 0, "No footer in onboarding");
  await button("Merg la profiluri").click();
  await verifyFooter("footer-children");
  await button("Adaugă un copil").click();
  await page.getByLabel("Numele din joc", { exact: true }).fill("Mara QA");
  assert.equal(
    await footer().count(),
    0,
    "No footer competing with profile form",
  );
  await button("Salvează profilul").click();
  await page.getByRole("heading", { name: "Mara QA", exact: true }).waitFor();
  assert.equal(
    await footer().count(),
    0,
    "No footer in the focused profile menu",
  );
  await page
    .locator(".task-row")
    .filter({ has: page.getByText("Setările profilului", { exact: true }) })
    .click();
  await verifyFooter("footer-settings");
  const popupPromise = page.waitForEvent("popup");
  await footer()
    .getByRole("link", { name: "Confidențialitate (filă nouă)", exact: true })
    .click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  assert.ok(popup.url().endsWith("/ro/confidentialitate"));
  await popup.close();
  await page
    .getByRole("heading", { name: "Setările profilului", exact: true })
    .waitFor();
  await footer()
    .getByRole("link", { name: "Despre Vorbini", exact: true })
    .click();
  await page.waitForURL("**/ro/about?show=1");
  await page.getByRole("link", { name: "Încearcă jocul", exact: true }).click();
  await button("Învârte").waitFor();
  assert.equal(await footer().count(), 0, "No footer during demo play");
  for (const route of ["/ro/play/r", "/ro/setup/r"]) {
    // Let Next's route prefetch settle before replacing the document in WebKit.
    await page.waitForLoadState("networkidle");
    const response = await page.goto(`http://localhost:3000${route}`);
    assert.equal(response.status(), 200);
    await page.waitForLoadState("networkidle");
    assert.equal(await footer().count(), 0, `No footer at ${route}`);
    assert.equal(
      await page
        .locator(".app-footer")
        .evaluate((el) => getComputedStyle(el).display),
      "flex",
      "Existing game credit keeps its own layout",
    );
  }
  assert.deepEqual(errors, []);
  console.log(
    "Footer QA passed: mobile/desktop, 200% text, touch targets, keyboard, links, settings return, no footer in focused tasks or play.",
  );
} finally {
  await browser.close();
}
