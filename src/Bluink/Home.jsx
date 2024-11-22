import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navagation from "../Bluink/Navigate";
import Banner from "./Components/Banner";
import Verified from "./Components/Verified";

import Alumni from "./Components/Alumni";

import Companieslist from "./Components/Companies";
import HaveQuestion from "./Components/Question";
import News from "./Components/News";
import CodeEditor from "./Components/CodeEditor";
import Footer from "./Components/Footer";

import CourseCard from "./Components/Coursecard";
import NewMentorCard from "./Components/NewMentor";
import Blogs from "./Blogs";
// import Popup from "./Components/Popup"; // Import Popup component

function Home() {
  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // const timer = setTimeout(() => {
    //   setShowPopup(true);
    // }, 5000); // Show popup after 5 seconds

    // return () => clearTimeout(timer);
  }, []);

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <Header />
      <Navagation />
      <Banner />
      <div style={{ backgroundColor: "#f0f7ff" }}>
        <Verified />
        <CodeEditor />
        <Alumni />
        <CourseCard />

        <Companieslist />
        <NewMentorCard />

        <News />
        {/* <HaveQuestion /> */}
        <Blogs />
      </div>

      <Footer />

      {/* Display Popup if showPopup is true */}
      {/* {showPopup && <Popup closePopup={closePopup} />} */}
    </>
  );
}

export default Home;
