import React from "react";
import "./About.css";
import Nav from "./Navigate";
import Footer from "./Components/Footer";

function AboutUsPage() {
  return (
    <>
      <Nav />
      <div className="aboutUs-container">
        <h1 className="aboutUsh1">
          Welcome to <span>Bluink360</span> Solutions
        </h1>

        {/* <div className="aboutUs-image-container">
        <img
          src="/path-to-your-image"
          alt="Mentorship"
          className="aboutUs-hero-image"
        />
      </div> */}

        <div className="aboutUs-section">
          <h2>Who We Are</h2>
          <p>
            Bluink360 Solutions is India's biggest platform certified by an{" "}
            <span className="aboutUs-highlight">
              International Standard Organization (ISO 9001-2015)
            </span>{" "}
            and Teacher Scientists Network (TSN).
            <br />
            Accredited By: EUAS - Euro Universal Accreditation Systems - USA
            <br />
            Address: 1401 Morris Road, Building 1, Suite 600, Alpharetta, GA
            30004, Georgia (USA)
          </p>
        </div>

        <div className="aboutUs-section">
          <h2>What We Do</h2>
          <p>
            We enroll students and train them for about eight months. Students
            spend <span className="aboutUs-highlight">500 to 600 hours</span> on
            these tools and work on at least 35+ projects to build a portfolio
            they can showcase to potential recruiters. We focus on working with
            industry-relevant projects that will enable students to become
            better engineers.
          </p>
        </div>

        <div className="aboutUs-section">
          <h2>Our Key Features</h2>

          <div className="aboutUs-feature-item">
            <h3>World-Class Mentors</h3>
            <p>
              Get taught by industry experts with years of experience, who have
              cracked top tech companies worldwide.
            </p>
          </div>
          <div className="aboutUs-feature-item">
            <h3>One-on-One Mentorship</h3>
            <p>
              Mentors are available 24x7 to clear doubts, provide guidance, and
              support students on their learning journey.
            </p>
          </div>
          <div className="aboutUs-feature-item">
            <h3>Top-Notch Lectures</h3>
            <p>
              Join our three to six-month-long series of online and offline
              lectures with recorded sessions and teaching assistants.
            </p>
          </div>
        </div>

        <div className="aboutUs-section">
          <h2>Join Us Now</h2>
          <p>
            Unlock your full potential and shape a brighter future with our
            transformative courses. Join our community of eager learners today
            and embark on a journey of knowledge, growth, and limitless
            possibilities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;
