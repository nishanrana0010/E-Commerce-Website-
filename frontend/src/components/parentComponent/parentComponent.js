import React, { useState } from "react";
import WomensDashboard from "./WomensDashboard";
import Cart from "./Cart";

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...product, quantity: 1, total: product.price },
        ];
      }
    });
  };

  return (
    <div>
      <WomensDashboard addToCart={addToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default ParentComponent;
