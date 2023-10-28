const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHBs = require("express-handlebars"); //=> import express-handlebars because it is not auto installed be express
//=> so we need to tell express there is a new template engine
const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//{layoutsDir: 'views/layouts/main.handlebars',defaultLayout: 'main'}
app.engine("handlebars", expressHBs.engine()); //=> to register a template engine that is not registered
app.set("view engine", "handlebars");  //=> oug is built it [The name is also should be the same one as the file extension of the view]
//=> we can change it to hbs
app.set("views", path.join(__dirname, "/views"));
//  => set is a function to set global value across our app
//  => also check the documentation for set function
//  => {view engine} is a reserved key for express and to tell express what template engine we are using
//  => pug is a template engine
//  => {views} is also a reserved key to telling express where it can find the dynamic templates

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
