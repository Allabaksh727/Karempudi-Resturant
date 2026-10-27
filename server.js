const { createServer } = require("node:http");
const { readFile } = require("node:fs/promises");
const { extname, join } = require("node:path");
const { networkInterfaces } = require("node:os");

const host = "0.0.0.0";
const port = Number(process.env.PORT || 3000);
const publicFiles = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/styles.css", "styles.css"],
  ["/app.js", "app.js"],
]);
const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
]);

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = new URL(request.url, `http://${host}`).pathname;
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const filename = publicFiles.get(pathname);
  if (!filename) {
    response.writeHead(404).end("Not found");
    return;
  }

  try {
    const contents = await readFile(join(__dirname, filename));
    response.writeHead(200, {
      "Content-Type": contentTypes.get(extname(filename)),
      "X-Content-Type-Options": "nosniff",
    });
    response.end(contents);
  } catch (error) {
    console.error(`Unable to serve ${filename}:`, error);
    response.writeHead(500).end("Unable to load page");
  }
});

server.listen(port, host, () => {
  console.log(`Karempudi Restaurants is running at http://localhost:${port}`);

  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        console.log(`Open on this network: http://${address.address}:${port}`);
      }
    }
  }
});
