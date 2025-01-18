import React, { useState, useCallback, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id)) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  // addToCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log("addToCart 함수 참조값 변경");
  }, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log("removeFromCart 참조값 변경");
  }, [removeFromCart]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
