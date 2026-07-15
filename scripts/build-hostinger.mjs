import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, "out");
const nextDir = path.join(root, ".next");

function removeDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
  console.log(`Removed ${path.basename(dir)}/`);
}

console.log("Preparing static export for Hostinger...\n");

// Always wipe old output so deleted pages/images never linger in out/
removeDir(outDir);
removeDir(nextDir);

process.env.STATIC_EXPORT = "true";

const nextBin = path.join(root, "node_modules/next/dist/bin/next");

const result = spawnSync(
  process.execPath,
  ["--max-old-space-size=4096", nextBin, "build"],
  { stdio: "inherit", env: process.env, cwd: root },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!fs.existsSync(outDir)) {
  console.error("\nBuild finished but out/ was not created. Check next.config.ts export settings.");
  process.exit(1);
}

const fileCount = fs.readdirSync(outDir, { recursive: true }).length;
console.log(`\nStatic export ready: out/ (${fileCount} items)`);
console.log("Upload the entire out/ folder to Hostinger public_html.\n");
