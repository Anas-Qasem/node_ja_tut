const express = require("express");

const app = express();

/// for the routes it is handling the url that
/// match so the "/" url should be the last one
app.use("/add-product", (req, res, next) => {
  console.log("I'm middleWare two");
  res.send("<h1>The Add Product Page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("I'm middleWare two");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
