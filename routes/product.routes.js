const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const Product = require("../model/product.model");

// Get All Products route
router.get("/", productController.getAllProducts);

// Product Insert route
router.post("/", productController.createProduct);

// Product Update (PUT & PATCH) route
router.put("/:id", productController.updateProduct);
router.patch("/:id", productController.updateProduct);

// Product Delete route
router.delete("/:id", productController.deleteProduct);

module.exports = router;
