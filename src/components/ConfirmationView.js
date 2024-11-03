import React, { useState } from 'react';
import './Style.css';


const ConfirmationView = ({ setView, clearCart,cart,formData }) => {
  const handleNewOrder = () => {
    clearCart([]);
    setView('browse');
  };    
  console.log(formData);
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Address: {formData.address1}</p>
      <p>Name: {formData.fullName}</p>
      <p>Card: {formData.card}</p>
      <p>Address: {formData.address1}, {formData.city}, {formData.state}, {formData.zip}</p>
      
        <div>
          <h5>Purchased Items:</h5>
          {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>    #{item.quantity}</td>
                  <td>Total = ${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
         
          <h5>Total: $</h5>
          <button onClick={handleNewOrder}>New Order</button>
        </div>
      
    </div>
  );
};

export default ConfirmationView;
