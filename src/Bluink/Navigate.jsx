import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.png";
import "./Navigate.css";

const Navbar = () => {
  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#004aad"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#004aad"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#004aad"
        />
      </g>
    </svg>
  );

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://conversations-widget.brevo.com/brevo-conversations.js";
    script.async = true;
    script.onload = () => {
      window.BrevoConversationsID = "671768151bc87306f80970da";
      window.BrevoConversations =
        window.BrevoConversations ||
        function () {
          (window.BrevoConversations.q =
            window.BrevoConversations.q || []).push(arguments);
        };
      // Initialize the chat bot immediately
      window.BrevoConversations("open");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Course">Course</NavLink>
            </li>
            {/* <li>
              <NavLink to="/OurAlumani">Alumni</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/Jobs">Jobs</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/Blogs">Blogs</NavLink>
            </li> */}
            <li>
              <NavLink to="/CorperateTraining">Corperate Training</NavLink>
            </li>
            <li>
              <NavLink to="/ContentDevelopment">Content Development</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/* WhatsApp widget */}
      <a
        href="https://wa.me/message/P4CNJEJ4VYJKG1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </nav>
  );
};

export default Navbar;
