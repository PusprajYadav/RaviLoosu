import React, { useState } from "react";
import axios from "axios";
import Hike from "../Components/hike";
import AlertModal from "./AlertModal"; // Import the custom alert modal
import "./Ban.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Banner() {
  const [formData, setFormData] = useState({
    FName: "",
    Email: "",
    PhoneNum: "",
    Qualification: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/api/Registraion`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setAlertMessage("Registered Successfully!");
        setAlertType("success");
        setShowAlert(true);
        setFormData({
          FName: "",
          Email: "",
          PhoneNum: "",
          Qualification: "",
        });
      })
      .catch((err) => {
        setAlertMessage("Registration Failed");
        setAlertType("error");
        setShowAlert(true);
      });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="Banner">
        <div className="content">
          <div className="newcomapnies">
            <span className="spannew">New !</span> Jobs From Top Companies
          </div>
          <h1 className="newcomapniesh1">
            "Craft Your Future: Job-Ready Courses Await to Engineer Your
            Success!"
          </h1>
          <br />

          <p className="newcomapniesp">
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>{" "}
            Secure an 11+ LPA Salary with Us!
          </p>
          <p className="newcomapniesp">
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>{" "}
            250+ Companies Hiring
          </p>
          <p className="newcomapniesp">
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>{" "}
            Placements & Training Programs to Fast-Track Your Career
          </p>

          <Hike />
        </div>

        <div className="Bannerform">
          <h2 className="Bannerformh2">
            Book a <span className="freespan"> Free </span> Demo,Now!
          </h2>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="FName"
              placeholder=" "
              value={formData.FName}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Enter Your Name</label>
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="PhoneNum"
              placeholder=" "
              value={formData.PhoneNum}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNum">Phone Number</label>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              name="Email"
              placeholder=" "
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Enter Your Email</label>
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="Qualification"
              placeholder=" "
              value={formData.Qualification}
              onChange={handleChange}
            />
            <label htmlFor="qualification">Qualification</label>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      {/* Show the custom alert */}
      {showAlert && (
        <AlertModal
          message={alertMessage}
          type={alertType}
          onClose={closeAlert}
        />
      )}
    </>
  );
}

export default Banner;
