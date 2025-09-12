// scripts/generate-icons.mjs
import favicons from "favicons";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "..", "public", "glimvia-mark.svg"); // dark/colored logomark
const outDir = path.join(__dirname, "..", "public");

// sanity check for source
try {
  await fs.access(source);
} catch {
  console.error(`[favicons] Missing source SVG at: ${source}
- Put your DARK/COLORED logomark (no wordmark) there and re-run.
`);
  process.exit(1);
}

const config = {
  path: "/",
  appName: "Glimvia",
  appShortName: "Glimvia",
  appDescription: "Your dashboards, KPIs and alerts in your pocket.",
  developerName: "Glimvia",
  developerURL: "https://glimvia.app",
  background: "#ffffff",
  theme_color: "#0b1220",
  display: "standalone",
  orientation: "portrait",
  start_url: "/",
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    favicons: true,   // favicon.ico + 16/32 PNGs (+ safari-pinned-tab.svg)
    android: true,    // android-chrome-192/512 + manifest
    appleIcon: true,  // apple-touch-icon
    appleStartup: false, // set true if you want iOS splash screens too
    windows: true,    // browserconfig.xml + ms tiles
    yandex: false,
    coast: false
    // firefox: false // removed (unsupported in current favicons)
  }
};

try {
  const response = await favicons(source, config);

  await Promise.all(
    response.images.map((img) =>
      fs.writeFile(path.join(outDir, img.name), img.contents)
    )
  );
  await Promise.all(
    response.files.map((file) =>
      fs.writeFile(path.join(outDir, file.name), file.contents)
    )
  );

  console.log("[favicons] Generated:\n - " + [
    ...response.images.map((i) => i.name),
    ...response.files.map((f) => f.name),
  ].join("\n - "));
  console.log("Done ✅");
} catch (err) {
  console.error("[favicons] Error:", err?.message || err);
  process.exit(1);
}
