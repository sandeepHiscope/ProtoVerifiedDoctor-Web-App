import React, { useState } from "react";
import "./doctorVerificationpage.css";
// import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";

const DoctorVerification = () => {
  const [fullName, setFullName] = useState("");
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
  const [medicalSpeciality, setMedicalSpeciality] = useState("");
  const [hospitalCurrentWorking, setHospitalCurrentWorking] = useState("");
  const [experience, setExperience] = useState("");
  const [complaints, setComplaints] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      fullName,
      medicalLicenseNumber,
      medicalSpeciality,
      hospitalCurrentWorking,
      experience,
      complaints,
      description,
    });
  };

  return (
    <div className="main-container">
      <div className="logo">
        <a href="#">
          <img src="./assets/" alt="logo" />
        </a>
      </div>
      <div className="frame-3">
        <div className="find-a-doctor">
          <div className="find-a-doctor2">Find a Doctor</div>
        </div>
        <div className="verify-a-doctor2">
          <div className="verify-a-doctor3">Verify a Doctor</div>
        </div>
        <div className="sos">
          <div className="sos2">SOS</div>
        </div>
        <div className="home-delivery-medicines">
          <div className="home-delivery-medicines2">
            Home Delivery Medicines
          </div>
        </div>
        <div className="micro-insurance">
          <div className="micro-insurance2">Micro Insurance</div>
        </div>
        <div className="regular-insurance">
          <div className="regular-insurance2">Regular Insurance</div>
        </div>
      </div>
      <div className="login-signup">
        <div className="rectangle-1"></div>
        <div className="login-signup2">Login / Signup</div>
      </div>
      <div className="rectangle-16"></div>
      <div className="div"></div>

      <div className="footer-cont">
        <div className="logo">
          <a href="#">
            <img src="./assets/" alt="logo" />
          </a>
        </div>
        <div className="about-us">
          <div className="about-us2">About Us</div>
        </div>
        <div className="blog">
          <div className="blog2">Blog</div>
        </div>
        <div className="careers">
          <div className="careers2">Careers</div>
        </div>
        <div className="press">
          <div className="press2">Press</div>
        </div>
        <div className="contact-us">
          <div className="contact-us2">Contact Us</div>
        </div>
        <div className="for-patient">
          <div className="for-patient2">For Patient</div>
        </div>
        <div className="search-for-doctors">
          <div className="search-for-doctors2">Search for Doctors</div>
        </div>
        <div className="search-for-clinics">
          <div className="search-for-clinics2">Search for Clinics</div>
        </div>
        <div className="search-for-hospitals">
          <div className="search-for-hospitals2">Search for Hospitals</div>
        </div>
        <div className="v-dr-plus">
          <div className="v-dr-plus2">VDr Plus</div>
        </div>
        <div className="read-health-articles">
          <div className="read-health-articles2">Read Health Articles</div>
        </div>
        <div className="read-about-medicines">
          <div className="read-about-medicines2">Read About Medicines</div>
        </div>
        <div className="v-dr-drive">
          <div className="v-dr-drive2">VDr Drive</div>
        </div>
        <div className="health-app">
          <div className="health-app2">Health App</div>
        </div>
        <div className="for-doctors">
          <div className="for-doctors2">For Doctors</div>
        </div>
        <div className="v-dr-profile">
          <div className="v-dr-profile2">VDr Profile</div>
        </div>
        <div className="for-clinics">
          <div className="for-clinics2">For Clinics</div>
        </div>
        <div className="v-dr-pro">
          <div className="v-dr-pro2">VDr Pro</div>
        </div>
        <div className="v-dr-reach">
          <div className="v-dr-reach2">VDr Reach</div>
        </div>
        <div className="ray-by-v-dr">
          <div className="ray-by-v-dr2">Ray by VDr</div>
        </div>
        <div className="ray-tab">
          <div className="ray-tab2">Ray Tab</div>
        </div>
        <div className="for-hospitals">
          <div className="for-hospitals2">For Hospitals</div>
        </div>
        <div className="insta-by-v-dr">
          <div className="insta-by-v-dr2">Insta by VDr</div>
        </div>
        <div className="qikwell-by-v-dr">
          <div className="qikwell-by-v-dr2">Qikwell by VDr</div>
        </div>
        <div className="v-dr-profile3">
          <div className="v-dr-profile2">VDr Profile</div>
        </div>
        <div className="v-dr-reach3">
          <div className="v-dr-reach4">VDr Reach</div>
        </div>
        <div className="v-dr-drive3">
          <div className="v-dr-drive4">VDr Drive</div>
        </div>
        <div className="more">
          <div className="more2">More</div>
        </div>
        <div className="help">
          <div className="help2">Help</div>
        </div>
        <div className="developers">
          <div className="developers2">Developers</div>
        </div>
        <div className="privacy-policy">
          <div className="privacy-policy2">Privacy Policy</div>
        </div>
        <div className="pcs-t-c">
          <div className="pcs-t-c2">PCS T&C</div>
        </div>
        <div className="terms-conditions">
          <div className="terms-conditions2">Terms & Conditions</div>
        </div>
        <div className="v-dr-health-wiki">
          <div className="v-dr-health-wiki2">VDr Health Wiki</div>
        </div>
        <div className="healthcare-directory">
          <div className="healthcare-directory2">Healthcare Directory</div>
        </div>
        <div className="v-drapp">VDrapp</div>
      </div>
      <div className="main-img">
        <img src="" alt="main-img" />
      </div>
      <div className="verification-cont">
        <div className="doctor-verification">Doctor Verification</div>
        <div className="full-name">
          <span>
            <span className="full-name-span">Full Name:</span>
            <span className="full-name-span2">*</span>
          </span>
        </div>
        <div className="medical-license-number">
          <span>
            <span className="medical-license-number-span">
              Medical License Number:
            </span>
            <span className="medical-license-number-span2">*</span>
          </span>
        </div>
        <div className="upload-medical-license">
          <span>
            <span className="upload-medical-license-span">
              Upload Medical License:
            </span>
            <span className="upload-medical-license-span2">*</span>
          </span>
        </div>
        <div className="medical-speciality">
          <span>
            <span className="medical-speciality-span">Medical Speciality:</span>
            <span className="medical-speciality-span2">*</span>
          </span>
        </div>
        <div className="upload-board-certificate">
          <span>
            <span className="upload-board-certificate-span">
              Upload Board Certificate:
            </span>
            <span className="upload-board-certificate-span2">*</span>
          </span>
        </div>
        <div className="input-feild-4">
          <input
            type="text"
            className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-feild-6">
          <input
            type="text"
            className="input"
            value={medicalLicenseNumber}
            onChange={(e) => setMedicalLicenseNumber(e.target.value)}
          />
        </div>
        <div className="group-71">
          <div className="upload"></div>
          <div className="choose-file">Choose file</div>
        </div>
        <div className="input-feild-7">
          <input
            type="text"
            className="input"
            value={medicalSpeciality}
            onChange={(e) => setMedicalSpeciality(e.target.value)}
          />
        </div>
        <div className="group-70">
          <div className="upload"></div>
          <div className="choose-file">Choose file</div>
        </div>
        <div className="educational-background">
          <span>
            <span className="educational-background-span">
              Educational Background:
            </span>
            <span className="educational-background-span2">*</span>
          </span>
        </div>
        <div className="upload-educational-certificates">
          <span>
            <span className="upload-educational-certificates-span">
              Upload Educational Certificates:
            </span>
            <span className="upload-educational-certificates-span2">*</span>
          </span>
        </div>
        <div className="choose-file2">
          <div className="upload"></div>
          <div className="choose-file">Choose file</div>
        </div>

        <div className="input-feild-2">
          <input type="text" className="input" />
        </div>
        <div className="highest-level-of-study">Highest level of study</div>

        <div className="hospital-current-working">
          <span>
            <span className="hospital-current-working-span">
              Hospital current working:
            </span>
            <span className="hospital-current-working-span2">*</span>
          </span>
        </div>
        <div className="input-feild-8">
          <input
            type="text"
            className="input"
            value={hospitalCurrentWorking}
            onChange={(e) => setHospitalCurrentWorking(e.target.value)}
          />
        </div>
        <div className="experiance">
          <span>
            <span className="experiance-span">Experience:</span>
            <span className="experiance-span2">*</span>
          </span>
        </div>
        <div className="input-feild-22">
          <input
            type="text"
            className="input"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="hospital-or-clinic">Hospital (or) Clinic:</div>
        <div className="any-complaints-or-disciplinary-actions-been-filed-against-this-doctor">
          <span>
            <span className="any-complaints-or-disciplinary-actions-been-filed-against-this-doctor-span">
              Any complaints or disciplinary actions been filed against this
              Doctor:
            </span>
            <span className="any-complaints-or-disciplinary-actions-been-filed-against-this-doctor-span2">
              *
            </span>
          </span>
        </div>
        <div className="description-if-any">Description (If any?):</div>
        <div className="input-feild-9">
          <input
            type="text"
            className="input"
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
          />
        </div>

        <div className="input-feild-23">
          <input type="text" className="input" />
        </div>

        <div className="input-feild-10">
          <input
            type="text"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorVerification;
