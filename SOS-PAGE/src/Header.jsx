import React from "react";
import './Header.css'
import Footer from "./Footer";


const Head = () => {
  return (<>
    <Footer/>
    <div className="login-container">
      <section className="header-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3816a04fcc74163bada0a2cbd8666252a1c3d39e2c479cd0c439e054a756e8a9?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            alt=""
            className="background-image"
          />
        <nav className="nav-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5579435fcea5352f7b3da9021f52f1cd4a3e8059c744d02a45317074cdbc09b3?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            alt="VDrapp Logo"
            className="logo"
          />
          <div className="nav-menu">
            <div className="nav-links">
              <a href="#" className="nav-link">Find a Doctor</a>
              <a href="#" className="nav-link">Verify a Doctor</a>
              <a href="#" className="nav-link sos-link">SOS</a>
              <a href="#" className="nav-link">Home Delivery Medicines</a>
              <a href="#" className="nav-link">Micro Insurance</a>
              <a href="#" className="nav-link">Regular Insurance</a>
            </div>
          </div>
          <button className="login-button">Login/Signup</button>
        </nav>
      </section>
    </div>
    </>
  );
};

export default Head;
