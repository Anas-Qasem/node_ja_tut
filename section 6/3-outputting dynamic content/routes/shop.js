const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.products;
  res.render("shop", { prods: product, docTitle: "Shop" }); //=> passing products to view

  //=> render is a default function use to render template engine
  //=> it go to the path we define in the global set
  //=> also no need to set the type of the file because we set the
  //=> engine type to be pug
});

module.exports = router;
