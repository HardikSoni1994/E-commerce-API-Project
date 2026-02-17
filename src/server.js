const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // if port 5000 not available so go with 8000
const db = require("../config/db.config.js");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to E-commerce API" });
});

const productRoutes = require("../routes/product.routes.js");

app.use("/api/products", productRoutes);

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server Starting is Failed due to error Occured..,", error);
    return false;
  }
  console.log("Server is Successfully Started 🚀 at localhost:" + PORT);
});
