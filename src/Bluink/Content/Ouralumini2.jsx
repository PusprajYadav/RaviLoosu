import React from "react";
import Alumni from "../Components/Alumni";
import Company from "../../Assets/comp.webp";
const OurAlumini2 = () => {
  return (
    <>
    <Alumni />

<div className="complists">
  <h1 className="comph1">
    Our <span> Alumni</span> Work At
  </h1>
  <img src={Company} alt="" id="comping" />
</div>
    </>
    
  );
};

export default OurAlumini2
