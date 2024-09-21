// src/components/ProductCard.js
import React from "react";
import "../productCard/productCard.css"; // Import the CSS file for styling

const ProductCard = ({ imageUrl, title, price, onAddToCart, onBuyNow }) => {
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
