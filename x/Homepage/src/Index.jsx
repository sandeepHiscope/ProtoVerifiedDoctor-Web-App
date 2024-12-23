import React from 'react';
import Padding from "./Padding"



function App() {
  // Function to handle button click
  const handleButtonClick = () => {
    alert('Login/Sign Up Button Clicked!');

  };

  return (
    <>
    <Padding /> 
    <div className="App">
      <header className="header">
        <div className="header-container">
          {/* Logo Section (Left Side) */}
          <div className="logo">
            <img
              src="logo.png" // Replace with your actual logo path
              alt="logo"
              width="100"
              height="100"
            />
          </div>

          {/* Navigation Bar (Center) */}
          <nav className="navbar">
            <ul>
              <li><a href="#home">Find a Doctor</a></li>
              <li><a href="#about">Verify a Doctor</a></li>
              <li><a href="#services">SOS</a></li>
              <li><a href="#blog">Home Delivery Medicines</a></li>
              <li><a href="#contact">Micro Insurance</a></li>
              <li><a href="#contact">Regular Insurance</a></li>
            </ul>
          </nav>

          {/* Login/Signup Button (Right Side) */}
          <div className="auth-buttons">
            <button className="login-btn" onClick={handleButtonClick}>
              Login/Sign Up
            </button>
          </div>
        </div>
        
      </header>
    </div>
    </>
    
  );
}

export default App;
