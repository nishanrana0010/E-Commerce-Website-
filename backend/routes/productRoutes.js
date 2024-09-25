const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart"); // Assuming Cart is a Mongoose model

// Add product to cart
router.post("/cart", async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists for the user, create a new one
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      // Update quantity if product is already in the cart
      existingItem.quantity += quantity;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      // Add new product to the cart
      const product = await Product.findById(productId); // Assuming Product is another model
      cart.items.push({
        productId: productId,
        title: product.title,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity,
      });
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Error adding product to cart" });
  }
});

module.exports = router;
