import React, { useState } from 'react';
import './Style.css';

const CheckoutView = ({ setView, cart, clearCart, formData, setFormData }) => {
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      //clearCart();
      setView('confirmation'); 
    
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxTotal = total *0.12;

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={() => setView('cart')}>Return to Cart</button>

      <h3>Order Summary</h3>
      <p><strong>Subtotal:</strong> ${total.toFixed(2)}</p>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            
          />
          
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          
        </div>

        <div>
          <label>Credit Card Number</label>
          <input
            type="text"
            name="card"
            value={formData.card}
            onChange={handleInputChange}
          />
         
        </div>

        <div>
          <label>Address 1</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Address 2 (Optional)</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutView;
