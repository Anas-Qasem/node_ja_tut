const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
//=> we can change it to hbs
app.set("views", path.join(__dirname, "/views"));
//  => set is a function to set global value across our app
//  => also check the documentation for set function
//  => {view engine} is a reserved key for express and to tell express what template engine we are using
//  => pug is a template engine
//  => {views} is also a reserved key to telling express where it can find the dynamic templates

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
