const express = require("express");
const app = express();

const data = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App Online on http://localhost:${port}`);
});
