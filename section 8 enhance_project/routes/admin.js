const path = require("path");

const express = require("express");

const router = express.Router();
const adminController = require("../controller/admin");

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProducts);
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAppProducts);
exports.routes = router;
// exports.products = products;
// module.exports = router;
