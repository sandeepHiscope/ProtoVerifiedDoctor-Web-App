import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
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
  );
};

export default SearchForm;
