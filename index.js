const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));
const PORT = 9000;

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is rinnumg on PORT: ${PORT}`);
});
