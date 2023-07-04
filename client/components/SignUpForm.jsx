import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../src/App.css";
import "./SignUpForm.css";

const SignUpForm = ({setSignedUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    } 

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and contain a special character.');
      return;
    }

    // Clear any previous error message
    setErrorMessage('');

    // Reset form fields
    setEmail('');
    setPassword('');

    // Proceed with form submission logic
    // ...
    setSignedUp(true);
  };

  const proceedAsGuest = () => {
    setSignedUp(true);
  }

  return (
    <div className="wrapper">
      <div className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="offer1">
          <span>
            Become a member of La Réserve today to receive exclusive offers and great deals!
          </span>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="form">
          <form className="signup-form__container" onSubmit={handleSubmit}>
            <div className="email-input">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                className="signup__inputs"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password:</label>
              <input 
                id="password"
                name="password"
                className="signup__inputs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                required
              />
            </div>
            <div className="submit__container">
              <button className="register__button" type="submit">Submit</button>
              <button onClick={proceedAsGuest} className="guest__link" type="button">Continue as Guest</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;