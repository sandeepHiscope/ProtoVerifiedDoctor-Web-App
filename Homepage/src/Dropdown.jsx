import React, { useState } from 'react';
import Doctorsslide from "./Doctorsslide"


const DropdownWithSearch = () => {
  // Define state for country, state, and search input
  const [country, setCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // States for India and USA
  const states = {
    india: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
      "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
      "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
      "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ],
    usa: [
      "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina",
      "Michigan", "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee",
      "Indiana", "Missouri", "Maryland", "Wisconsin"
    ]
  };

  // List of doctor types
  const doctorTypes = [
    "Dentist", "Cardiologist", "Dermatologist", "Pediatrician", "Orthopedic", "General Physician", 
    "ENT Specialist", "Gynecologist", "Urologist", "Neurologist", "Psychiatrist", "Oncologist", "Gastroenterologist"
  ];

  // Update state dropdown based on selected country
  const updateStates = (e) => {
    setCountry(e.target.value);
    setSelectedState('');
  };

  // Filter doctor types based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter doctor types based on query
    if (query) {
      const filtered = doctorTypes.filter(doctor =>
        doctor.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors([]);
    }
  };

  // Select doctor type from suggestions
  const selectDoctorType = (doctor) => {
    setSearchQuery(doctor);
    setFilteredDoctors([]); // Hide suggestions after selection
  };

  return (
    <>
      <Doctorsslide />
    <div>
      {/* Dropdown for country and state */}
      <div className="dropdown-container">
        <div className="input-container">
          <select id="country" value={country} onChange={updateStates}>
            <option value="">Location</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
        </div>

        <select id="state" value={selectedState} disabled={!country}>
          <option value="">Select a state</option>
          {country && states[country].map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* Search input for doctor types */}
      <div className="search-container2">
        <div className="search-icon"></div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search doctors, clinics, hospitals, etc."
          autoComplete="off"
        />
        {filteredDoctors.length > 0 && (
          <div id="dropdown" className="dropdown">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => selectDoctorType(doctor)}
              >
                {doctor}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Heading */}
      <div className="h1">
        <h1>Get Expert Medical Care Online or In-Clinic for Any Health Need</h1>
      </div>
    </div>
    </>
  );
};

export default DropdownWithSearch;
