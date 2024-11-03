import React, { useState } from 'react';
import './Style.css';


const ConfirmationView = ({ setView, setCart,cart, orderDetails,FormData }) => {
  const handleNewOrder = () => {
    //cart =setCart;
    setView('browse');
  };    
  console.log(cart);
  return (
    <div>
      <h2>Order Confirmation</h2>
      
        <div>
          <h5>Purchased Items:</h5>
         
          <h5>Total: ${FormData.total}</h5>
          <button onClick={handleNewOrder}>New Order</button>
        </div>
      
    </div>
  );
};

export default ConfirmationView;
