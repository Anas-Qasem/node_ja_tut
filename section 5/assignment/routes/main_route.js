const express = require("express");
const route = express.Router();
const viewPath = require("../helper/path_provider");

route.get("/", (req, res, next) => res.sendFile(viewPath("shop.html")));

module.exports = route;
