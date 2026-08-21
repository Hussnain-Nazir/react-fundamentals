// State Management

import React, { createContext, useContext, useState } from 'react';

// A simple, app-wide state management setup
const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems([...items, item]);

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

function AddToCartButton() {
  const { addItem } = useContext(CartContext);
  return <button onClick={() => addItem('Shoes')}>Add Shoes to Cart</button>;
}

function CartSummary() {
  const { items } = useContext(CartContext);
  return <p>Items in cart: {items.length}</p>;
}

function Cart() {
  return (
    <CartProvider>
      <AddToCartButton />
      <CartSummary />
    </CartProvider>
  );
}

export default Cart;