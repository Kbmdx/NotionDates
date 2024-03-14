require("dotenv").config();
const express = require("express");
const notion = require("./notion")

const app = express();
app.listen(process.env.PORT, function () {
  console.log("hello",process.env.PORT);
});
app.get("/", (req, res) => {
  res.send("Hi");
});
