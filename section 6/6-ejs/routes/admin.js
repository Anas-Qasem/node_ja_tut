const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    activeAddProduct: true,
    productCss: true,
  });
  //=> path is passing to the main layout to make the style of link [Add product] dynamic
  //=> path could be anything
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
exports.routes = router;
exports.products = products;
// module.exports = router;
