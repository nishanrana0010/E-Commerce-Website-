// src/pages/WomensDashboard.js
import React from "react";
import Navbar from "../../components/navbar/navbar";
import "../womens/womens.css";
import ProductCard from "../../components/productCard/productCard";

const WomensDashboard = () => {
  const products = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/250",
      title: "Stylish Jacket",
      price: "79.99",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/250",
      title: "Elegant Dress",
      price: "129.99",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/250",
      title: "Stylish Jacket",
      price: "79.99",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/250",
      title: "Elegant Dress",
      price: "129.99",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/250",
      title: "Casual Shoes",
      price: "59.99",
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Women's Fashion</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              onAddToCart={() => alert(`Added ${product.title} to cart!`)}
              onBuyNow={() => alert(`Proceeding to buy ${product.title}!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensDashboard;
