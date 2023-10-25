const express = require("express");

const app = express();

// app.use((_, __, next) => {
//   console.log("This is MiddleWare One");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("This is MiddleWare Two");
//   res.send("<h1>Meow</h1>");
// });
app.use("/users", (req, res, next) => {
  res.send("<h1>This is user Page</h1>");
});
app.use("/", (req, res, next) => {
  res.send("<h1>This is Defualt page</h1>");
});
app.listen(3000);
