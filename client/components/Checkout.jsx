import React from 'react'
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
        <div className="checkout-container">
            <h1 className='container-title'>Check out</h1>
            <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" className="form-input" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" className="form-input" />
          </div>
        </div>
        <button className="checkout-button">Place Order</button>
      </form>
        </div>
   
  </div>
);
}

export default Checkout;