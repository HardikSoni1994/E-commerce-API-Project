const Product = require('../model/product.model');

// Get All Produts Logic
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            success: true,
            totalProducts: products.length,
            data: products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Products not get.!" });
    }
};

// Create or Inserted new Product - Logic
const createProduct = async (req, res) => {
    try {
        const savedProduct = await Product.create(req.body);

        res.json({
            success: true,
            message: "Product successfully inserted.! 🎉",
            data: savedProduct
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Product insertion failed.!" });
    }
};

// Product Update (PUT/PATCH) - logic
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });
        
        if (!updatedProduct) return res.status(404).json({ success: false, message: "Product not found.!" });
        
        res.json({ success: true, message: "Product Updated Successfully! 🛠️", data: updatedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Product updation failed.!" });
    }
};

// Product Delete (DELETE) - logic
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) return res.status(404).json({ success: false, message: "Product not found.!" });

        res.json({ success: true, message: "Product Deleted Successfully.! 🗑️", data: deletedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Product deletion Failed.!" });
    }
};

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };