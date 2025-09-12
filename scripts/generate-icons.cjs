// scripts/generate-icons.cjs
const favicons = require("favicons");
const fs = require("fs");
const path = require("path");

const source = "public/glimvia-mark.svg"; // DARK/COLORED logomark (no wordmark)
const outDir = "public";

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
    favicons: true,
    android: true,
    appleIcon: true,
    appleStartup: false,
    windows: true,
    firefox: true,
    yandex: false,
    coast: false
  }
};

favicons(source, config, (error, response) => {
  if (error) {
    console.error("[favicons] Error:", error.message);
    process.exit(1);
  }
  for (const image of response.images) {
    fs.writeFileSync(path.join(outDir, image.name), image.contents);
  }
  for (const file of response.files) {
    fs.writeFileSync(path.join(outDir, file.name), file.contents);
  }
  console.log("[favicons] Generated:", [
    ...response.images.map(i => i.name),
    ...response.files.map(f => f.name),
  ].join("\n - "));
});
