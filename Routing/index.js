import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  }
});

server.listen(8000, () => console.log("Sever Up!"));
