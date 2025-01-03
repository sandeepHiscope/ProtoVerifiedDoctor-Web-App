import React, { useState, useRef } from "react";
import "./sosPage.css";
import Header from "./header";

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";


const SosPage = () => {
  const [count, setCount] = useState("Double click");
  const [sosActive, setSosActive] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const audioRef = useRef(null);
  const countdownRef = useRef(null); // Ref to keep track of countdown interval

  const handleDoubleClick = () => {
    let i = 5;
    setCountdownStarted(true);
    countdownRef.current = setInterval(() => {
      if (i >= 0) {
        setCount(i);
        i--;
      } else {
        clearInterval(countdownRef.current);
        setCount("SOS Activated");
        setSosActive(true);
        playMusic();
        setCountdownStarted(false); // Ensure countdown state is reset
      }
    }, 1000); // Decrease count every 1 second
  };

  const playMusic = () => {
    audioRef.current = new Audio("./emergency-alarm-69780.mp3"); // Ensure the path to your music file is correct
    audioRef.current.loop = true; // Loop the audio
    audioRef.current.play();
  };

  const stopSos = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    }
    clearInterval(countdownRef.current); // Clear countdown interval
    setSosActive(false);
    setCountdownStarted(false);
    setCount("Double click");
  };

  return (
    <>
    <Header/>

      {/* SOS part */}
      <div className="sos-container">
      <div className="div1">
        <button className="div1_btn" onDoubleClick={handleDoubleClick}>
          {count}
        </button>
      </div>
      <h2 className="div1-h2">SOS EMERGENCY</h2>
      {(sosActive || countdownStarted) && (
        <>
          <button className="stop_btn" onClick={stopSos}>
            X
          </button>
     
        </>
     
      )}
    </div>


    {/* Footer */}
    <footer className="sos-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="sos-background-image-footer"/>

  <div className="sos-footer-div1">
  <img
         src={VDrLogo}
         alt="VDrapp Footer Logo"
          className="sos-footer-logo"
        />
 </div>
 <div className="sos-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
          </>
  );
};

export default SosPage;
