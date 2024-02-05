import http from "http";

//Create your own server
const server = http.createServer((req, res) => {
  //   console.log(req);
  res.write("<h1>Welcome To Node</h1>");
});
//Listening on port 8000
server.listen(8000, () => console.log("SERVER UP!"));
