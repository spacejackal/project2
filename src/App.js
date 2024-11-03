import React, { useState } from 'react';
import BrowseView from './components/BrowseView';
import CartView from './components/CartView';
import ConfirmationView from './components/ConfirmationView';
import CheckoutView from './components/CheckoutView';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [view, setView] = useState('browse');
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };


  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      {view === 'browse' && (
        <BrowseView setView={setView} cart={cart} addToCart={addToCart} />
      )}
      {view === 'cart' && (
        <CartView setView={setView} cart={cart} removeFromCart={removeFromCart} />
      )}
      {view === 'checkout' && (
        <CheckoutView setView={setView} cart={cart} clearCart={clearCart} />
      )}
      {view === 'confirmation' && (
        <ConfirmationView setView={setView} />
      )}
            <footer>
        <p><strong>ComS 319</strong></p>
        <p>Assignment 3</p>
        <p>Jacob Leary</p>
      </footer>
    </div>
  );
};

export default App;
