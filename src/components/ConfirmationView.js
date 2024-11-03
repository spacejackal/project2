import React, { useState } from 'react';
import './Style.css';


const ConfirmationView = ({ setView, clearCart,cart,formData }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxTotal = total * 1.17;
  const handleNewOrder = () => {
    clearCart([]);
    setView('browse');
  };    
  console.log(formData);
  return (
    <div>
      <h2 className='top'>Order Confirmation</h2>
      <p>Name: {formData.fullName}</p>
      <p>Card: {formData.card}</p>
      <p>Address: {formData.address1}, {formData.city}, {formData.state}, {formData.zip}</p>
      
        <div>
          <h5>Purchased Items:</h5>
          {cart.map((item) => (
                <div key={item.id}>
                  <p>
                  <img src={item.image} alt={item.name} className='conProduct'></img>
                    {item.name} ,      
                        #{item.quantity},  
                        Individual price: ${item.price},   
                  </p>
                </div>
              ))}
         
          <h5>Total: ${taxTotal} </h5> 
          <button onClick={handleNewOrder}>New Order</button>
        </div>
      
    </div>
  );
};

export default ConfirmationView;
