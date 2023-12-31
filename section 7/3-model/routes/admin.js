const path = require("path");

const express = require("express");

const router = express.Router();
const productController = require("../controller/products");


// /admin/add-product => GET
router.get("/add-product", productController.getAddProducts);

// /admin/add-product => POST
router.post("/add-product",productController.postAppProducts );
exports.routes = router;
// exports.products = products;
// module.exports = router;
