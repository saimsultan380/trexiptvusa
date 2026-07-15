import sharp from "sharp";
import fs from "fs";
import path from "path";

const publicDir = "./public";
const appDir = "./app";
const MAX_HERO_WIDTH = 1120;
const HERO_MIN_KB = 100;

async function optimizeHeroPng(filePath, file) {
  const stats = fs.statSync(filePath);
  const initialSize = stats.size / 1024;

  if (initialSize < HERO_MIN_KB && file !== "logo.PNG") {
    return;
  }

  console.log(`Optimizing ${file}... (${initialSize.toFixed(1)} KB)`);

  const image = sharp(filePath);
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.width > MAX_HERO_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_HERO_WIDTH,
      withoutEnlargement: true,
    });
  }

  const outputBuffer = await pipeline
    .png({
      compressionLevel: 9,
      palette: true,
      quality: 80,
      effort: 10,
    })
    .toBuffer();

  fs.writeFileSync(filePath, outputBuffer);

  const finalSize = fs.statSync(filePath).size / 1024;
  const reduction = ((1 - finalSize / initialSize) * 100).toFixed(1);
  console.log(
    `  ${initialSize.toFixed(1)} KB -> ${finalSize.toFixed(1)} KB (${reduction}% smaller)`,
  );
}

async function generateFavicons() {
  const logoPath = path.join(publicDir, "logo.PNG");
  if (!fs.existsSync(logoPath)) {
    console.error("logo.PNG not found — cannot generate favicons.");
    return;
  }

  console.log("\nGenerating favicons from logo.PNG...");

  const sizes = [
    { out: path.join(publicDir, "favicon.png"), size: 32 },
    { out: path.join(appDir, "icon.png"), size: 32 },
    { out: path.join(publicDir, "apple-touch-icon.png"), size: 180 },
    { out: path.join(appDir, "apple-icon.png"), size: 180 },
    { out: path.join(publicDir, "icon-192.png"), size: 192 },
    { out: path.join(publicDir, "icon-512.png"), size: 512 },
  ];

  for (const { out, size } of sizes) {
    const buffer = await sharp(logoPath)
      .resize(size, size, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(out, buffer);
    console.log(`  Created ${out} (${size}x${size})`);
  }
}

async function optimize() {
  const files = fs.readdirSync(publicDir);

  for (const file of files) {
    if (file.endsWith(".tmp")) {
      fs.unlinkSync(path.join(publicDir, file));
      console.log(`Removed ${file}`);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      continue;
    }

    const filePath = path.join(publicDir, file);
    if (
      file === "logo.PNG" ||
      file === "favicon.png" ||
      file.startsWith("icon-") ||
      file === "apple-touch-icon.png"
    ) {
      continue;
    }

    try {
      await optimizeHeroPng(filePath, file);
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }

  await generateFavicons();
}

optimize();
