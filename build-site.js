const { mkdir, copyFile } = require("node:fs/promises");
const { join } = require("node:path");

const outputDirectory = join(__dirname, "dist");
const siteFiles = ["index.html", "styles.css", "app.js"];

async function buildSite() {
  await mkdir(outputDirectory, { recursive: true });

  for (const filename of siteFiles) {
    await copyFile(join(__dirname, filename), join(outputDirectory, filename));
  }

  console.log(`Static website files are ready in ${outputDirectory}`);
}

buildSite().catch((error) => {
  console.error("Unable to build the static website:", error);
  process.exitCode = 1;
});
