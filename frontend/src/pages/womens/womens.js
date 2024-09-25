import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../components/navbar/navbar";
import ProductCard from "../../components/productCard/productCard";
import axios from "axios";
import "../womens/womens.css";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const WomensDashboard = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/collection?category=womens" // Only fetch women's products
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Add to cart and navigate to the cart page
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      // If product already in cart, update quantity and total
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, total: product.price },
      ]);
    }

    // Navigate to the cart page after adding
    navigate("/myCart");
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Women's Fashion</h2>
        <div className="products-grid">
          {products.map((product) => {
            let imageBase64;
            if (product.image) {
              // Convert image buffer to base64
              imageBase64 = `data:image/png;base64,${Buffer.from(
                product.image.data
              ).toString("base64")}`;
            } else if (product.imageUrl) {
              // Use imageUrl if available
              imageBase64 = product.imageUrl;
            } else {
              // Fallback in case both are missing
              imageBase64 = "https://via.placeholder.com/250"; // Placeholder or fallback image
            }

            return (
              <ProductCard
                key={product._id}
                imageUrl={imageBase64}
                title={product.title}
                price={product.price}
                onAddToCart={() => addToCart(product)} // Call addToCart when clicking on Add to Cart
                onBuyNow={() => alert(`Proceeding to buy ${product.title}!`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WomensDashboard;
