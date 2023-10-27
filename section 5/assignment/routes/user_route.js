const express = require("express");
const route = express.Router();
const viewPath = require("../helper/path_provider");

route.get("/user", (req, res, next) =>
  res.sendFile(viewPath("add-product.html"))
);

module.exports = route;
