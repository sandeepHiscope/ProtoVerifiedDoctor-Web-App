import React from "react";
import "./FindDoctor.css";

const SearchForm = () => {
  return (
      <>
    {/* // HEADER PART */}

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

{/* 
    // BODY */}
    <div className="search-section">
      <div className="location-wrapper">
        <div className="location-input" role="search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e5038e13b1be9080f0941a0b9f99ba3369e0afe7df7be02f721dfe4a71bc1d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            className="location-icon"
            alt="Location icon"
          />
          <label htmlFor="location-search" className="visually-hidden">
            Search by location
          </label>
          <input
            type="text"
            id="location-search"
            className="location-text"
            placeholder="Location"
          />
        </div>
      </div>
      <div className="search-wrapper">
        <div className="search-input" role="search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d907adf33f7d0fd47c62d89ac30bcc3a092e2eae4eedc005df53ec6c6d882fa0?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            className="search-icon"
            alt="Search icon"
          />
          <label
            htmlFor="doctor-search"
            className="visually-hidden"
          >
            Search for doctors, clinics, hospitals, or specializations
          </label>
          <input
            type="text"
            id="doctor-search"
            className="search-placeholder"
            placeholder="Search by doctors, clinics, hospitals, Specialization etc.,"
          />
        </div>
      </div>
    </div>


    {/* FOOTER PART */}

    <>
        <footer className="footer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            alt=""
            className="background-image_footer"/>
    
            <div className="footer_div1">
            <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62aa73b0f4ffde82474a1490fece5052dde1f95d465eaf7ac9624210220a6a08?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
                    alt="VDrapp Footer Logo"
                    className="footer-logo"
                  />
            </div>
            <ul  className="footer_ul1">
                <ul className="footer_ul2">
                    <li><h3>VDrapp</h3></li>
                    <li>  <a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li> <a href="#">Careers</a></li>
                    <li> <a href="#">Press</a> </li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul className="footer_ul2">
                    <li><h3>For Patient</h3></li>
                    <li><a href="#">Search for Doctors</a> 
                    <li><a href="#">Search for Clinics</a></li>
                    <li><a href="#">Search for Hospitals</a></li>
                    <li><a href="#">VDr plus</a></li>
                    <li><a href="#">Read health articles</a></li>
                    <li><a href="#">Read about medicines</a></li>
                    <li><a href="#">VDr Drive</a></li>
                    <li><a href="#">Health app</a></li></li>
                </ul>
                <ul className="footer_ul2">
                    <li><h3>For Doctors</h3></li>
                    <li><a href="#">VDr Profile</a></li>
                    <li> <a href="#">For Clinics</a></li>
                    <li><a href="#">Ray by VDr</a></li>
                    <li><a href="#">VDr Pro</a></li>
                    <li><a href="#">Ray Tab</a></li>
                    <li><a href="#">VDr Reach</a></li>
                </ul>
                <ul className="footer_ul2">
                    <li><h3>For Hospitals</h3></li>
                    <li><a href="#">Insta by VDr</a></li>
                    <li><a href="#">Qikwell by VDr</a></li>
                    <li><a href="#">VDr Profile</a></li>
                    <li><a href="#">VDr Reach</a></li>
                    <li><a href="#">VDr Drive</a></li>
                </ul>
                <ul className="footer_ul2">
                    <li><h3>More</h3></li>
                    <li> <a href="#">Help</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li> <a href="#">Terms & Conditions</a></li>
                    <li><a href="#">PCS T&C</a></li>
                    <li><a href="#">Healthcare Directory</a></li>
                    <li><a href="#">VDr Health Wiki</a></li>
                </ul>
            </ul>
          
          
        </footer>
    </>
    </>
  );
};

export default SearchForm;
