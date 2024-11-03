import React, { useState } from 'react';
import products from '../assets/products.json';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const BrowseView = ({ setView, cart, addToCart, removeFromCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getProductQuantity = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  const handleIncreaseQuantity = (product) => {
    addToCart(product, 1);
  };

  const handleDecreaseQuantity = (product) => {
    const currentQuantity = getProductQuantity(product.id);
    if (currentQuantity > 0) {
      addToCart(product, -1);
    } else {
      removeFromCart(product.id);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(cart);

  return (
    <div>
      <h2 className='top'>Browse Products</h2>
      <input 
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map((product) => {
          const quantity = getProductQuantity(product.id);

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p><strong>Price: </strong>${product.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(product)} disabled={quantity === 0}>-</button>
                {quantity}
                <button onClick={() => handleIncreaseQuantity(product)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => setView('cart')}>View Cart</button>
    </div>
  );
};

export default BrowseView;
