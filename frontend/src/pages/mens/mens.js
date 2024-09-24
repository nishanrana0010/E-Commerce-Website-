import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ProductCard from "../../components/productCard/productCard";
import axios from "axios";
import "../womens/womens.css";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const MensDashboard = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/collection?category=mens" // Only fetch women's products
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Men's Fashion</h2>
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
                onAddToCart={() => addToCart(product)}
                onBuyNow={() => alert(`Proceeding to buy ${product.title}!`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MensDashboard;
