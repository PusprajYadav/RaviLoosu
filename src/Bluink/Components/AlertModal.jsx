import React, { useEffect } from "react";
import "./AlertModal.css";

function AlertModal({ message, type, onClose }) {
  useEffect(() => {
    // Close the alert automatically after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    // Clean up the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-modal">
      <div className={`alert-box ${type}`}>
        {/* Render icons based on success or error */}
        <div className="alert-icon">
          {type === "success" ? (
            <span className="success-icon">✔</span> // Green checkmark
          ) : (
            <span className="error-icon">✘</span> // Red X
          )}
        </div>
        <p className="alert-message">{message}</p>
      </div>
    </div>
  );
}

export default AlertModal;
