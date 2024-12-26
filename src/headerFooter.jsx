import React from "react";

import "./headerFooter.css";

const HeaderFooter = () => {
    return(
<>
  <div className="login-container">
  <section className="header-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3816a04fcc74163bada0a2cbd8666252a1c3d39e2c479cd0c439e054a756e8a9?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
        alt=""
        className="background-image"
      />
    <nav className="nav-container">
      <img
        src="../public/VDr-logo.png"
        alt="VDrapp Logo"
        className="logo"
      />
      <div className="nav-menu">
        <div className="nav-links">
          <a href="/findDoctorPage" className="nav-link">Find a Doctor</a>
          <a href="/doctorVerificationpage" className="nav-link">Verify a Doctor</a>
          <a href="/sosPage" className="nav-link sos-link">SOS</a>
          <a href="#" className="nav-link">Home Delivery Medicines</a>
          <a href="#" className="nav-link">Micro Insurance</a>
          <a href="#" className="nav-link">Regular Insurance</a>
        </div>
      </div>
      <button className="login-button">Login/Signup</button>
    </nav>
  </section>
</div>


<footer className="footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="background-image_footer_sos"/>

  <div className="footer_div1">
  <img
          src="./public/vdr_2-removebg-preview-removebg-preview.png"
          alt="VDrapp Footer Logo"
          className="footer-logo"
        />
 </div>
 <div className="footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
</>
    )
}
 export default HeaderFooter;