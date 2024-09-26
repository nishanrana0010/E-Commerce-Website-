import React from "react";
import "../myCart/myCart.css";
import Navbar from "../../components/navbar/navbar";

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + change,
              total: (item.quantity + change) * item.price,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.total, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>myCart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="cart-item">
                    <img
                      src={item.imageUrl} // Directly use imageUrl
                      alt={item.title}
                    />
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleQuantityChange(item._id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => handleQuantityChange(item._id, 1)}>
                    +
                  </button>
                </td>
                <td>${item.total.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item._id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-total">
          <p>Total: ${calculateTotal().toFixed(2)}</p>
          <p>Taxes and shipping not included</p>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
