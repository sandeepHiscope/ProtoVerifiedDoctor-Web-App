import React from "react";
import './founderPage.css';
import MainHeader from "./header";


import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";

const FounderPage = () => {
    return (
        <>
        <MainHeader />
        <>
        <div className="founderPage-main">
        <div class="founderpage-founder">
            <div class="founderpage-founder-div-img">
        <img class="founderpage-founder-img" src="./src/assets/founder-images/sai.jpg" /></div>
        <h2 className="founderpage-founder-h2"> Sai Madiraju <br />Founder & CEO</h2>
                <ul className="founderpage-founder-ul">
                    <li>
                          Founder Of : Hiscope Cyberlinks<br />
                         EVAAP (Employment Verification and Academic Proofing)<br/>
                         VDr(Verified Doctor)<br />
                    </li>
                    <li> 
                        Job Role : Software Developer<br />
                    </li>
                </ul>
      </div>
      <div class="founderpage-co-founder">
      <div class="founderpage-founder-div-img">
        <img class="founderpage-founder-img" src="" /></div>
        <h2 className="founderpage-founder-h2"> Swapna Madiraju <br />Co-Founder & CEO</h2>
                <ul className="founderpage-founder-ul">
                    <li>
                          Founder Of : Hiscope Cyberlinks<br />
                         EVAAP (Employment Verification and Academic Proofing)<br/>
                         VDr(Verified Doctor)<br />
                    </li>
                    <li> 
                        Job Role : HR<br />
                    </li>
                </ul>
      </div >
      <h2 className="founderpage-developer-h2"> DEVELOPER'S </h2>
      <div className="founderpage-developers">
        
       <ul className="founderpage-developers-ul">
       <ul className="founderpage-developers-ul-ul">
            <li><img src="./src/assets/founder-images/anji.jpg" alt="" />
            <h3>Anjaneyulu kadari</h3>
            Software Developer, <br /> Digital Marketing
            </li>
            <li>
            <img src="./src/assets/founder-images/alekhya.jpg" alt="" />
            <h3>Alekhya Padala</h3>
            Java Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/bhadru.jpg" alt="" />
            <h3>Bhadru Lotavath</h3>
            Java Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/Durga.jpg" alt="" />
            <h3>Durga Prasad</h3>
            Finance Department
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src="./src/assets/founder-images/kiran.jpg" alt="" />
            <h3>KiranVenkat Bishetti</h3>
            Software Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/mohan.jpg" alt="" />
            <h3>Mohan Bishetti</h3>
            Data Analyst, <br /> Designer
            </li>
            <li>
            <img src="./src/assets/founder-images/Praveen.jpg" alt="" />
            <h3>Praveen Puvvala</h3>
            Java Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/Shiva.jpg" alt="" />
            <h3>Shiva Banoth</h3>
            Full Stack Developer
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src="./src/assets/founder-images/sandeep.jpg" alt="" />
            <h3>Sandeep M</h3>
            Full Stack Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/SaiSakth.jpg" alt="" />
            <h3>Sai Saketh</h3>
            Data Engineer
            </li>
            <li>
            <img src="./src/assets/founder-images/vyshanavi.jpg" alt="" />
            <h3>Vaishnavi G</h3>
            Full Stack Developer
            </li>
            <li>
            <img src="./src/assets/founder-images/Pavan p.jpg" alt="" />
            <h3>Pavan P</h3>
                 Team Lead
            </li>
        </ul>
       </ul>
      </div>
      </div> 
     

  </>

  
          {/* Footer PART */}

          <footer className="founderPage-footer">
            <img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="founderPage-background-image-footer"/>

  <div className="founderPage-footer-div1">
  <img
          src="./public/vdr_2-removebg-preview-removebg-preview.png"
          alt="VDrapp Footer Logo"
          className="founderPage-footer-logo"
        />
 </div>
 <div className="founderPage-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
  </>
        
    );
}

export default FounderPage;
