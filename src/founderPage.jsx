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
             <img class="founderpage-founder-img" src="./src/assets/images/sai.jpg" alt="Sai Madiraju   "/>
             </div>
                <h2 className="founderpage-founder-h2"> Sai Madiraju <br />Founder & CEO</h2>
                <ul className="founderpage-founder-ul">
                    <li>
                          Founder Of : Hiscope Cyberlinks<br />
                         EVAAP (Employment Verification and Academic Proofing)<br/>
                         VDr(Verified Doctor)<br />
                    </li>
                </ul>
            </div>
           
            <h2 className="founderpage-developer-h2"> DEVELOPER'S </h2>
      <div className="founderpage-developers">
        
                <ul className="founderpage-developers-ul">
                <ul className="founderpage-developers-ul-ul">
                 <li><img src="./src/assets/images/anji.jpg" alt="Anjaneyulu kadari" />
                <h3>Anjaneyulu kadari</h3>
                 Software Developer, <br /> Digital Marketing
                    </li>
                    <li>
                <img src="./src/assets/images/alekhya.jpg" alt="Alekhya Padala" />
                <h3>Alekhya Padala</h3>
                 Java Developer
                </li>
            <li>
            <img src="./src/assets/images/bhadru.jpg" alt="Bhadru Lotavath" />
            <h3>Bhadru Lotavath</h3>
            Java Developer
            </li>
            <li>
            <img src="./src/assets/images/Durga.jpg" alt="Durga Prasad" />
            <h3>Durga Prasad</h3>
            Finance Department
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src="./src/assets/images/kiran.jpg" alt="KiranVenkat Bishetti" />
            <h3>KiranVenkat Bishetti</h3>
            Software Developer
            </li>
            <li>
            <img src="./src/assets/images/mohan.jpg" alt="Mohan Bishetti" />
            <h3>Mohan Bishetti</h3>
            Data Analyst, <br /> Designer
            </li>
            <li>
            <img src="./src/assets/images/Praveen.jpg" alt="Praveen Puvvala" />
            <h3>Praveen Puvvala</h3>
            Java Developer
            </li>
            <li>
            <img src="./src/assets/images/Shiva.jpg" alt="Shiva Banoth" />
            <h3>Shiva Banoth</h3>
            Full Stack Developer
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src="./src/assets/images/sandeep.jpg" alt="Sandeep M" />
            <h3>Sandeep M</h3>
            Full Stack Developer
            </li>
            <li>
            <img src="./src/assets/images/SaiSakth.jpg" alt="Sai Saketh" />
            <h3>Sai Saketh</h3>
            Data Engineer
            </li>
            <li>
            <img src="./src/assets/images/vyshanavi.jpg" alt="Vaishnavi G" />
            <h3>Vaishnavi G</h3>
            Full Stack Developer
            </li>
            <li>
            <img src="./src/assets/images/Pavan p.jpg" alt="Pavan P" />
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
