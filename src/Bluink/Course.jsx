import React from "react";
import { useEffect } from "react";
import Navbar from "./Navigate";
import Footer from "./Components/Footer";
import "./Course.css";
import Courseban from "./Components/Courseban";
import AboutTheProgram from "./Components/AbouttheProgram";
import Roles from "./Components/Roles";
import AccordianFaq from "./Components/Accordian";
import ProgramDsa from "./Components/Dsa";
import Form from "./Components/Form";
import CareerServices from "./Components/CareerServices";
import Pricing from "./Components/Pricing";
import Objective from "./Components/Objectives";
import CourseHomeBanner from "./Content/Cousehomebanner";
import OurAlumini2 from "./Content/Ouralumini2";
function Course() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <CourseHomeBanner />
      {/* <Courseban /> */}
      <AboutTheProgram />

      {/* <Roles /> */}
      {/* <Objective /> */}
      <OurAlumini2 />

      <ProgramDsa />
      {/* <Form /> */}
      {/* <CareerServices /> */}
      <CareerServices />
      <Pricing />
      {/* <Roles /> */}
      <Form />
      <AccordianFaq />
      <Footer />
    </>
  );
}

export default Course;
