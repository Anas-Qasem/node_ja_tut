const express = require("express");
const body = require("body-parser");
const app = express();

/// for the routes it is handling the url that
/// match so the "/" url should be the last one

// we add this in first to parse any request body
app.use(body.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("I'm middleWare two");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>add-product</button></input></form>"
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("I'm middleWare two");
  res.send("<h1>Hello from express</h1>");
});

//app.post() ==> for post request
//app.get()  ==> for get  request
//app.use()  ==> for both get and use
app.listen(3000);
