const express = require("express");
const router = express.Router();

const Product = require("../model/product.model");

router.get("/get", async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      success: true,
      totalProducts: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Data Fetch failed.!",
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);

    res.json({
      success: true,
      message: "Product inserted successfully.! 🎉",
      data: savedProduct,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Product insertion failed.!" });
  }
});

// Product Update (PUT) route
const updateProductLogic = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true },
    );

    if (!updatedProduct)
      return res
        .status(404)
        .json({ success: false, message: "Product nahi mila!" });

    res.json({
      success: true,
      message: "Product Updated Successfully! 🛠️",
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Product update karne mein error aayi",
      });
  }
};

// 2. Ab bas dono routes ko yahi function de do (Koi copy-paste nahi!)
router.put("/update/:id", updateProductLogic);
router.patch("/update/:id", updateProductLogic);

// Product Delete route
router.delete("/delete/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found..!",
      });
    }

    res.json({
      success: true,
      message: "Product Deleted Successfully! 🗑️",
      data: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Product Deletion failed..!" });
  }
});

module.exports = router;
