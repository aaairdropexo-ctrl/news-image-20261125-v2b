// Renders src/page.html to entry.png with headless Chromium.
// Usage: node src/render.mjs [output-path]
// Defaults to <repo-root>/entry.png. No network is used.
import { spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const pagePath = join(here, "page.html");
const outPath = resolve(process.argv[2] ?? join(root, "entry.png"));

const SHELL =
  "/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell";

if (!existsSync(pagePath)) {
  console.error("page.html not found at", pagePath);
  process.exit(1);
}

const args = [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  `--screenshot=${outPath}`,
  "--window-size=1024,1024",
  pathToFileURL(pagePath).href,
];

const result = spawnSync(SHELL, args, { encoding: "utf8", timeout: 120000 });
if (result.error) {
  console.error("render failed to start:", result.error.message);
  process.exit(1);
}
if (result.status !== 0) {
  console.error("headless shell exited with", result.status);
  console.error((result.stderr ?? "").slice(-2000));
  process.exit(1);
}
if (!existsSync(outPath)) {
  console.error("no screenshot was written to", outPath);
  process.exit(1);
}
const bytes = statSync(outPath).size;
console.log(`wrote ${outPath} (${bytes} bytes)`);
if (bytes > 1048576) {
  console.error("ERROR: entry.png is over the 1 MiB limit");
  process.exit(1);
}
