import React, { useState } from "react";
import "./doctorVerificationpage.css";
import imgx from "../src/assets/Images/Cardiologist.png";
// import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import MainHeader from "./header";

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

    <>
    <MainHeader />
   
    <div className="main-container">
      <div className="main-img">
        <img src={imgx} alt="main-img" />
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

       {/* Footer */}
       <footer className="doctorVerify-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="doctorVerify-background-image-footer"/>

  <div className="doctorVerify-footer-div1">
  <img
          src="./public/vdr_2-removebg-preview-removebg-preview.png"
          alt="VDrapp Footer Logo"
          className="doctorVerify-footer-logo"
        />
 </div>
 <div className="doctorVerify-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
    </>
  );
};

export default DoctorVerification;
