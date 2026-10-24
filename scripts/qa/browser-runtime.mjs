import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
export const browserEngine = process.env.WORD_WHEEL_BROWSER || "chromium";
assertSupportedEngine(browserEngine);

function assertSupportedEngine(engine) {
  if (!["chromium", "webkit"].includes(engine))
    throw new Error("WORD_WHEEL_BROWSER must be chromium or webkit.");
}

export async function launchQABrowser() {
  const playwright = require(
    process.env.WORD_WHEEL_PLAYWRIGHT_PATH || "playwright",
  );
  const browser = await playwright[browserEngine].launch({
    headless: process.env.WORD_WHEEL_HEADED !== "1",
    ...(browserEngine === "chromium" ? { channel: "chrome" } : {}),
  });
  console.log(
    `Browser QA: ${browserEngine} ${browser.version()} (${process.env.WORD_WHEEL_HEADED === "1" ? "headed" : "headless"})`,
  );
  return browser;
}

export async function captureEvidence(page, name) {
  const directory = process.env.WORD_WHEEL_QA_ARTIFACT_DIR;
  if (!directory) return;
  await mkdir(directory, { recursive: true });
  const screenshot = path.join(directory, `${browserEngine}-${name}.png`);
  const buffer = await page.screenshot({
    path: screenshot,
    animations: "disabled",
    scale: "css",
  });
  console.log(`Evidence: ${screenshot}`);
  return buffer;
}
