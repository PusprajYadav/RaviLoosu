import React from "react";
import Navbar from "./Navigate";
import Footer from "./Components/Footer";
import "./Navigate.css";
import "./OurAlumani.css";
import Alumni from "./Components/Alumni";
import "./Event.css";
import Company from "../Assets/comp.webp";

function OurAlumani() {
  return (
    <>
      <Navbar />
      <div className="Alucon">
        <h1 className="alum1">
          At Bluink360 Institute, we empower our students to land positions in
          leading companies.
        </h1>
        <h4 className="alum4">
          Our dedicated team provides personalized guidance and resources,
        </h4>

        <h4 className="alum4">
          ensuring you stand out in the competitive job market.
        </h4>
        <h4 className="alum4">
          Enhance your career trajectory with our expert support and open doors
          to exciting opportunities in your industry.
        </h4>
      </div>
      <Alumni />

      <div className="complists">
        <h1 className="comph1">
          Our <span> Alumni</span> Work At
        </h1>
        <img src={Company} alt="" id="comping" />
      </div>

      <Footer />
    </>
  );
}
export default OurAlumani;
