// routes/products.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product"); // Assuming you have a Product model

// Utility function to convert image URL to bytes (Example implementation)
const urlToByteArray = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  return Buffer.from(buffer);
};

// Route to add a product
router.post("/add-product", async (req, res) => {
  const { title, price, imageUrl, category } = req.body;

  try {
    // Convert image URL to bytes
    const imageBytes = await urlToByteArray(imageUrl);

    // Create a new product instance
    const newProduct = new Product({
      title,
      price,
      image: imageBytes,
      category,
    });

    // Save product to the appropriate collection
    if (category === "mens") {
      await newProduct.save();
    } else if (category === "womens") {
      await newProduct.save();
    } else if (category === "kids") {
      await newProduct.save();
    }

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
});

module.exports = router;
