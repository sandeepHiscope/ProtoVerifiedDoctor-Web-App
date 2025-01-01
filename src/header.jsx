import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation

import "./headerFooter.css";
import Home from "./Home";
import Login from "./loginPage";
import HomeDeliveryMedicine from "./demoPage";
import VDrlogo from "../src/assets/Images/VDrlogo.png";
import ComingSoon from "./ComingSoon";

const LoginButtonClick = () => {
  window.location.href = "/loginPage";
  };
const MainHeader = () => {
  return (
    <>
      <div className="login-container">
        <section className="header-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3816a04fcc74163bada0a2cbd8666252a1c3d39e2c479cd0c439e054a756e8a9?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
              alt="logo"
              className="background-image-header"
            />
        
          <nav className="nav-container">
            <a href=""><img
              src={VDrlogo}
              alt="VDrapp Logo"
              className="header-logo"

            /></a>
           
            <div className="nav-menu">
              <div className="nav-links">
                <a href="/findDoctorPage" className="nav-link">Find a Doctor</a>
                <a href="/doctorVerificationpage" className="nav-link">Verify a Doctor</a>
                <a href="/sosPage" className="nav-link sos-link">SOS</a>
                <a href="/ComingSoon" className="nav-link">Home Delivery Medicines</a>
                <a href="/ComingSoon" className="nav-link">Micro Insurance</a>
                <a href="/ComingSoon" className="nav-link">Regular Insurance</a>
                <a href="/founderPage" className="nav-link">Founder Page</a>
                
              </div>
            </div>
            <button className="login-button-header" onClick={LoginButtonClick}>Login/Signup</button>
          </nav>
        </section>
      </div>
    </>
  );
};


export default MainHeader;