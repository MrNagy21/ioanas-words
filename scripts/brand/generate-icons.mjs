import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Keep the original speech-bubble composition and generous home-screen margins.
const mark = await readFile(
  new URL("../../public/brand/vorbini-mark.svg", import.meta.url),
  "utf8",
);
const icon = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#fcf8ef"/>${mark.replace("<svg ", '<svg x="80" y="80" width="352" height="352" ')}</svg>`,
);
for (const [file, size] of [
  ["public/icons/vorbini-192.png", 192],
  ["public/icons/vorbini-512.png", 512],
  ["public/icons/vorbini-apple.png", 180],
  ["app/icon.png", 192],
]) {
  await sharp(icon)
    .resize(size, size)
    .png()
    .toFile(fileURLToPath(new URL(`../../${file}`, import.meta.url)));
}
