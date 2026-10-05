#!/usr/bin/env node
/**
 * Screenshot PlatformMap from a running dev server → synkube/.github profile asset.
 * Usage: pnpm dev (elsewhere), then: pnpm platform-map-png
 */
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(scriptDir, "../../.github/assets/github-profile-platform.png");
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
});
await page.goto(`${baseUrl}/#stack`, { waitUntil: "networkidle" });
const map = page.locator(".platform-map-frame");
await map.waitFor({ state: "visible" });
await map.screenshot({ path: out, type: "png" });
await browser.close();
console.log(`wrote ${out}`);
