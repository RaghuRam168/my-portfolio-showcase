import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the server entry
const serverEntry = await import("./dist/server/assets/server-CrUcObWX.js").then(
  (m) => m.default ?? m
);

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  try {
    // Serve static files from dist/client
    const filePath = join(__dirname, "dist/client", req.url);
    
    // Check if it's a static asset
    if (req.url.startsWith("/assets/") || req.url === "/favicon.ico" || req.url === "/robots.txt") {
      try {
        const file = fs.readFileSync(filePath);
        res.writeHead(200);
        res.end(file);
        return;
      } catch {
        // File not found, continue to SSR
      }
    }

    // Create a Request object for the server entry
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    });

    // Call the server entry fetch handler
    const response = await serverEntry.fetch(request, {}, {});

    // Convert Response to Node.js response
    res.writeHead(response.status, Object.fromEntries(response.headers));
    
    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    
    res.end();
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>500 Internal Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
