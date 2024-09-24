// src/components/ProductCard.js
import React from "react";
import "../productCard/productCard.css"; // Import the CSS file for styling
import axios from "axios"; // Import axios for API calls

const ProductCard = ({ imageUrl, title, price, category }) => {
  const onAddToCart = async () => {
    try {
      const response = await axios.post("/api/add-product", {
        title,
        price,
        imageUrl,
        category, // Send the category to the backend
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const onBuyNow = () => {
    // Implement Buy Now functionality
    console.log("Buy Now clicked");
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <div className="product-buttons">
        <button className="btn add-to-cart" onClick={onAddToCart}>
          Add to Cart
        </button>
        <button className="btn buy-now" onClick={onBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
