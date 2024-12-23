import React from "react";
import "./Footer.css";
import SearchForm from "./SearchForm";

const Footer = () => {
  return (
    <>
    <SearchForm/>
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
  );
};

export default Footer;
