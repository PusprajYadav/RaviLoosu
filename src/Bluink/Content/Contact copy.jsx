import React from "react";
import "./Contact.css";

const ContactForm = () => {
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
          <form>
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="E-mail *" required />
            <input type="tel" placeholder="Mobile Number *" required />
            <textarea placeholder="Message *" required></textarea>
            <button type="submit">Request a Call Back</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
