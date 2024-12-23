import React from 'react';
import "./index.css"
import Footer from "./Footer"

const Last = () => {
  return (
    <>
    <Footer />
    <div className="body4">
      <div className="container4">
        <div className="preview">

          {/* If the image is in the public folder, use relative path */}
          <img
            src="logo.png"
            height="400px"
            width="900px"
            alt="App Preview"
          />
        </div>
        <div className="info">
          <h2 className="title">Download VDr app</h2>
          <p className="description">
            Consult with India's top doctors via video on VDr app. Get 24/7 access to healthcare.
          </p>
          <div className="store-buttons">
            <div className="store-button">
              {/* Make sure to place the image in the public folder or import them directly */}
              <img
                src="logo.jpg"
                alt="Google Play"
                style={{ width: '30px', borderRadius: '20px' }}
              />
              <span>Play Store</span>
            </div>
            <div className="store-button">
              <img
                src="logo.png"
                alt="Apple App Store"
                style={{ width: '30px', borderRadius: '20px' }}
              />
              <span>App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Last;
