const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // if port 5000 not available so go with 8000

app.get('/', (req, res) => {
    return res.json({message: "Welcome to E-commerce API"});
})

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2500,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Kia Seltos Diecast Model",
        price: 800,
        category: "Toys & Collectibles"
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 499,
        category: "Clothing"
    }
];

// Product request GET
app.get('/api/products', (req, res) => {
    return res.json({
        success: true,
        totalProducts: products.length,
        data: products
    });
});


app.listen(PORT, (error) => {
    if (error) {
        console.log("Server Starting is Failed due to error Occured..,", error);
        return false;
    }
    console.log("Server is Successfully Started 🚀 at localhost:" + PORT);
})