import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import WomensDashboard from "./pages/womens/womens";
import Cart from "./pages/myCart/myCart";
import MensDashboard from "./pages/mens/mens";
import KidsDashboard from "./pages/kids/kids";

function App() {
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
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/womens"
          element={<WomensDashboard addToCart={addToCart} />}
        />
        <Route
          path="/myCart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/mens" element={<MensDashboard addToCart={addToCart} />} />
        <Route path="/kids" element={<KidsDashboard addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
