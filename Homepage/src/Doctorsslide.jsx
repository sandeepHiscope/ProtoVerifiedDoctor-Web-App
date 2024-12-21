import React, { useState, useEffect } from "react";
import Doctoropinion from "./Doctoropinion"

const Slider = () => {
  const slidesData = [
    {
      title: "Cardiologist",
      img: "C:\Users\beese\OneDrive\Desktop\reactVDR\src\assets\Cardiologist.jpeg",
      description: "Expert Care for a Healthier Heart",
    },
    {
      title: "Gynaecologist",
      img: "",
      description: "Women's health, expert care",
    },
    {
      title: "Dentist",
      img: "https://via.placeholder.com/800x400?text=Image+3",
      description: "Strong Teeth, Bright Smiles, Happy Life",
    },
    {
      title: "Gastroenterologist",
      img: "https://via.placeholder.com/800x400?text=Image+4",
      description: "Digestive health, better comfort",
    },
    {
      title: "Orthopedist",
      img: "https://via.placeholder.com/800x400?text=Image+5",
      description: "Stronger bones, better mobility",
    },
    {
      title: "Diagnostics",
      img: "https://via.placeholder.com/800x400?text=Image+6",
      description: "Precise tests, accurate results.",
    },
    {
      title: "Dermatologist",
      img: "https://via.placeholder.com/800x400?text=Image+7",
      description: "Healthy skin, glowing confidence",
    },
    {
      title: "General Physician",
      img: "https://via.placeholder.com/800x400?text=Image+8",
      description: "Comprehensive care, healthy living",
    },
    {
      title: "Neurologist",
      img: "https://via.placeholder.com/800x400?text=Image+9",
      description: "Your brain, our priority",
    },
    {
      title: "Physiotherapist",
      img: "https://via.placeholder.com/800x400?text=Image+10",
      description: "Restoring movement, improving life",
    },
    {
      title: "Pediatrician",
      img: "https://via.placeholder.com/800x400?text=Image+11",
      description: "Caring for children's wellness",
    },
    {
      title: "Pulmonologist",
      img: "https://via.placeholder.com/800x400?text=Image+12",
      description: "Breathing easy, health restored",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slidesData.length - slidesToShow ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slidesData.length - slidesToShow
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => setCurrentIndex(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <Doctoropinion />
    
    <div className="slider">
      <div className="slides-container">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            gridTemplateColumns: `repeat(${slidesData.length}, 1fr)`,
          }}
        >
          {slidesData.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="text-above">{slide.title}</div>
              <img src={slide.img} alt={slide.title} />
              <div className="text-below">{slide.description}</div>
              <div className="buttons">
                <button className="blue-button">Online</button>
                <button className="pink-button">Clinic</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nav-buttons">
        <button onClick={prevSlide} disabled={currentIndex === 0}>
          &#10094; 
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === slidesData.length - slidesToShow}
        >
           &#10095;
        </button>
      </div>
    </div>
    </>
  );
};

export default Slider;
