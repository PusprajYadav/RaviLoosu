import React from "react";
import "./Popup.css";
import logo from "../../Assets/logo.png";

const Popup = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-icon" onClick={closePopup}>
          ×
        </span>
        <div className="popup-image">
          <img
            src={logo}
            alt="Diwali Offer"
            className="popup-image-img" // Use a class for styling
          />
        </div>
        <div className="popup-text">
          <h1 className="popup-heading">
            Step Up to Your Next Career Milestone
          </h1>
          <p className="popup-paragraph">
            Unlock the next phase of your career! Experience the power of
            learning by doing to advance in tech.
          </p>

          <h2 className="popupmobmail">+91 6360136036</h2>
          <h2 className="popupmobmail">contact@bluink360.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
