import React from 'react';
import './Style.css';

const CartView = ({ cart, setView, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxTotal = total * 1.17;

console.log(cart);
  return (
    <div>
      <h2 className='top'>Your Cart</h2>
      <button onClick={() => setView('browse')}>Return to Browse</button>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Subtotal:</strong> ${total.toFixed(2)}</p>
          <p><strong>Total with Tax:</strong> ${taxTotal.toFixed(2)}</p>
          
          <button onClick={() => setView('checkout')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartView;
