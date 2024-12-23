import React, { useState, useEffect } from 'react';
import Last from "./Last"



const OpinionSlides = () => {
  const [activeSlides, setActiveSlides] = useState('doctor');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const doctorSlides = [
    'Detailed medical explanation about health care.',
    'Expert advice on how to maintain a healthy lifestyle.',
    'Tips on managing chronic conditions effectively.'
  ];

  const patientSlides = [
    'Real-life experience with the treatment process.',
    'How the treatment helped improve my quality of life.',
    'Personal journey with the doctors and staff.'
  ];

  const slides = activeSlides === 'doctor' ? doctorSlides : patientSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides]);

  const showSlides = (type) => {
    setActiveSlides(type);
    setCurrentSlideIndex(0); // Reset to the first slide when switching
  };

  return (
    <>
    <Last />
    <div className="body3">
      <div className="container3">
        {/* Option Buttons */}
        <div className="option-buttons3">
          <button onClick={() => showSlides('doctor')}>Doctor's Opinion</button>
          <button onClick={() => showSlides('patient')}>Patient's Opinion</button>
        </div>

        {/* Header Text */}
        <div className="header-text3">
          {activeSlides === 'doctor' ? 'Opinions from Our Doctors' : 'Opinions from Our Patients'}
        </div>

        {/* Slides */}
        <div className="slides-container3">
          <div className="slide3">{slides[currentSlideIndex]}</div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default OpinionSlides;
