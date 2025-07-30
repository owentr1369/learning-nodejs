const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our homepage");
    return;
  }
  if (request.url === "/about") {
    response.end("About page");
    return;
  }
  response.end("Error page");
});

server.listen(3000, () => {
  console.log("Server listening on port 5000");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port 3000 is already in use. Please use a different port.`);
  } else {
    console.error("Server error:", err);
  }
});
