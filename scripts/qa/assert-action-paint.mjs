import assert from "node:assert/strict";
import sharp from "sharp";

// Use a viewport screenshot: locator screenshots can scroll/repaint the control
// and hide a paint failure that leaves its layout bounds and hit target intact.
export async function assertActionPainted(
  page,
  selector,
  label,
  capturedScreenshot,
) {
  const action = await page.locator(selector).evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      background: getComputedStyle(element).backgroundColor,
      hit: element.contains(
        document.elementFromPoint(
          rect.x + rect.width / 2,
          rect.y + rect.height / 2,
        ),
      ),
      viewport: { width: innerWidth, height: innerHeight },
    };
  });
  assert.ok(
    action.x >= 0 &&
      action.y >= 0 &&
      action.x + action.width <= action.viewport.width &&
      action.y + action.height <= action.viewport.height,
    `${label}: action is outside the viewport`,
  );
  assert.ok(action.hit, `${label}: action is obscured`);
  const expected = action.background
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number);
  assert.equal(
    expected?.length,
    3,
    `${label}: action needs an opaque RGB surface`,
  );
  const screenshot =
    capturedScreenshot ??
    (await page.screenshot({
      animations: "disabled",
      scale: "css",
    }));
  const { data, info } = await sharp(screenshot)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (const offset of [6, action.height - 9]) {
    const samples = [0.2, 0.5, 0.8].map((fraction) => {
      const x = Math.floor(action.x + action.width * fraction);
      const y = Math.floor(action.y + offset);
      const index = (y * info.width + x) * info.channels;
      return Array.from(data.subarray(index, index + 3));
    });
    const matching = samples.filter((sample) =>
      sample.every((channel, i) => Math.abs(channel - expected[i]) <= 32),
    ).length;
    assert.ok(
      matching >= 2,
      `${label}: action did not paint at y+${offset}; expected ${expected}, sampled ${JSON.stringify(samples)}`,
    );
  }
}
