import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
        alt=""
        className="background-image"
      />
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-logo-column">
            <div className="footer-logo-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62aa73b0f4ffde82474a1490fece5052dde1f95d465eaf7ac9624210220a6a08?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
                alt="VDrapp Footer Logo"
                className="footer-logo"
              />

           
              <div>
                <div className="footer-brand">VDrapp</div>
                <nav className="footer-links">
                  <a href="#">About Us</a>
                  <a href="#">Blog</a>
                  <a href="#">Careers</a>
                  <a href="#">Press</a>
                  <a href="#">Contact Us</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-nav-column">
            <div className="footer-nav-grid">
              <section className="footer-section">
                <h2 className="footer-heading">For Patient</h2>
                <nav className="footer-nav-links">
                  <a href="#">Search for Doctors</a>
                  <a href="#">Search for Clinics</a>
                  <a href="#">Search for Hospitals</a>
                  <a href="#">VDr plus</a>
                  <a href="#">Read health articles</a>
                  <a href="#">Read about medicines</a>
                  <a href="#">VDr Drive</a>
                  <a href="#">Health app</a>
                </nav>
              </section>
              <section className="footer-section">
                <h2 className="footer-heading">For Doctors</h2>
                <nav className="footer-nav-links">
                  <a href="#">VDr Profile</a>
                  <a href="#">For Clinics</a>
                  <a href="#">Ray by VDr</a>
                  <a href="#">VDr Pro</a>
                  <a href="#">Ray Tab</a>
                  <a href="#">VDr Reach</a>
                </nav>
              </section>
              <section className="footer-section">
                <h2 className="footer-heading">For Hospitals</h2>
                <nav className="footer-nav-links">
                  <a href="#">Insta by VDr</a>
                  <a href="#">Qikwell by VDr</a>
                  <a href="#">VDr Profile</a>
                  <a href="#">VDr Reach</a>
                  <a href="#">VDr Drive</a>
                </nav>
              </section>
              <section className="footer-section">
                <h2 className="footer-heading">More</h2>
                <nav className="footer-nav-links">
                  <a href="#">Help</a>
                  <a href="#">Developers</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">PCS T&C</a>
                  <a href="#">Healthcare Directory</a>
                  <a href="#">VDr Health Wiki</a>
                </nav>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
