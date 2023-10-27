const express = require("express");
const body = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const pageNotFound = require("./routes/page_not_found");
/// for the routes it is handling the url that
/// match so the "/" url should be the last one

// we add this in first to parse any request body
app.use(body.urlencoded({ extended: false }));
// filtering routes
app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(pageNotFound),
  //app.post() ==> for post request
  //app.get()  ==> for get  request
  //app.use()  ==> for both get and use
  app.listen(3000);
