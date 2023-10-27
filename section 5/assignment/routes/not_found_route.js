const express = require("express");
const route = express.Router();
const viewPath = require("../helper/path_provider");

route.use((req, res, next) => res.sendFile(viewPath("404.html")));

module.exports = route;
