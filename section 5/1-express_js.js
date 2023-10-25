const express = require("express");

const app = express();
/// middle ware is a functions that each req go through
/// use allow us to add new middleware function
/// all functions in use called in every request
app.use((req, res, next) => {
  console.log("I'm middleWare one");
  next(); ///=> will call next middleware
});
app.use((req, res, next) => {
  console.log("I'm middleWare two");
  res.send("<h1>Hello from express</h1>");
});
/// next is actually a function that will be passed
/// to current function by express js
/// next function need to be executed to pass the request to the
/// next middleware function
/// next should not called in the last middle ware function
app.listen(3000);
