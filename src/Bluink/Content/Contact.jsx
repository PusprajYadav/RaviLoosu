import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://bluink360.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Your request has been submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage(result.message || "Something went wrong!");
      }
    } catch (error) {
      setResponseMessage("Error submitting your request. Please try again later.");
    }
  };

  return (
    <div className="serform">
      <div className="serform-container">
        <div className="serform-info">
          <h2>Our Office Info</h2>
          <p>
            Contact us to make an order or get more information about any
            Services you are interested in. We will provide you with all the
            information about those services.
          </p>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/24/ff5a3c/marker.png"
              alt="Location"
            />
            <span>
              1st Floor, 100 Feet, Dodda Banaswadi Main Rd, HRBR Layout 1st
              Block, Balaji Layout, Subbaiahnapalya, Bengaluru, 560043
            </span>
          </div>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/24/ff5a3c/phone.png"
              alt="Phone"
            />
            <span>Call : +91 8951127999</span>
          </div>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/24/ff5a3c/time.png"
              alt="Timings"
            />
            <span>Mon - Fri 10:00 am - 7:00 pm</span>
          </div>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/24/ff5a3c/mail.png"
              alt="Email"
            />
            <span>Rajesh@Bluink360.com</span>
          </div>
        </div>

        <div className="serform-contact-form">
          <h2>Request a CallBack</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Request a Call Back</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
