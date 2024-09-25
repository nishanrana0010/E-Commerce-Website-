// import React, { useState } from "react";
// import WomensDashboard from "./WomensDashboard";
// import Cart from "./Cart";

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item._id === product._id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item._id === product._id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//                 total: (item.quantity + 1) * item.price,
//               }
//             : item
//         );
//       } else {
//         return [
//           ...prevItems,
//           { ...product, quantity: 1, total: product.price },
//         ];
//       }
//     });
//   };

//   return (
//     <div>
//       <WomensDashboard addToCart={addToCart} />
//       <Cart cartItems={cartItems} setCartItems={setCartItems} />
//     </div>
//   );
// };

// export default ParentComponent;

import React, { useState } from "react";
import WomensDashboard from "../../pages/womens/womens";
import Cart from "../../pages/myCart/myCart";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
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
      // If the product is not in the cart, add it with quantity 1
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, total: product.price },
      ]);
    }
  };

  return (
    <div>
      {/* Women's Dashboard to browse products */}
      <WomensDashboard addToCart={addToCart} />

      {/* Cart to display added items */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Shop;
