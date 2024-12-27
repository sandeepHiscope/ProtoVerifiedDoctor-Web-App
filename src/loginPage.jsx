import React from 'react';
import "./loginPage.css"; // Import the CSS file

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
// import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import MainHeader from './header';

const Login = () => {
  return (
    <>
    <>
    <MainHeader  />
    </>
    <main className="main-content">
        <div className="content-wrapper">
          <div className="image-column">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07d1dfbb02eae67caa3e2cfdf5c9867238ca7e72eb515ca4ba7a5fa71896a65?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
              alt="Healthcare illustration"
              className="hero-image"
            />
          </div>
          <div className="form-column">
            <form className="login-form">
              <label htmlFor="userInput" className="input-label">Mobile Number / Email ID</label>
              <input type="text" id="userInput" className="form-input" placeholder="Mobile Number / Email ID" />

              <label htmlFor="passwordInput" className="input-label">Password</label>
              <input type="password" id="passwordInput" className="form-input" placeholder="Password" />

              <a href="#" className="forgot-password">Forgot password ?</a>

              <div className="checkbox-container">
                <input type="checkbox" id="otpLogin" className="checkbox" />
                <label htmlFor="otpLogin">Login with Otp instead of Password</label>
              </div>

              <button type="submit" className="submit-button">Login</button>
            </form>
          </div>
        </div>
      </main>

    </>
  );
}

export default Login;
