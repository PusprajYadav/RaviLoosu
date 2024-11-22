import React from "react";
import "./Pricing.css";
import { NavLink } from "react-router-dom";

// Import assets
import Dsa from "../../Assets/Dsa.png";

const courseData = [
  {
    id: 1,
    name: "Master MERN + DSA & System Design with certification",
    image: Dsa,
    cert: "ISO TSN Certified",
    jobAssistance: "100% Job Assistance",
    duration: "6-8 months",
    salary: "11LPA + Average",
    projects: "Real-World Projects",
    mentors: "Mentors from Top MNC",
    support: "24/7 Learning Support",
    mode: "₹69,999",
    brochure: "https://bluink360.com/pdfdata/Bluink360_DSA_Course.pdf",
  },
  {
    id: 2,
    name: "Master MERN + DSA & System Design with certification",
    image: Dsa,
    cert: "ISO TSN Certified",
    jobAssistance: "100% Job Assistance",
    duration: "6-8 months",
    salary: "11LPA + Average",
    projects: "Real-World Projects",
    mentors: "Mentors from Top MNC",
    support: "24/7 Learning Support",
    mode: "₹99,999",
    brochure: "https://bluink360.com/pdfdata/Bluink360_DSA_Course.pdf",
  },
  // Add more course objects if needed
];

function CourseCard() {
  return (
    <>
      <h1 className="pri-skillbuild-title">Our Courses</h1>
      <div className="pri-coursecon">
        {courseData.map((course) => (
          <div className="pri-dsa-course-card" key={course.id}>
            <img src={course.image} alt={`${course.name} Icon`} />
            <div className="pri-dsa-content">
              <span className="pri-dsa-nsdc-cert">{course.cert}</span>
              <h3>{course.name}</h3>
              <div className="pri-dsa-info">
                <div>
                  <i className="fas fa-briefcase"></i> {course.jobAssistance}
                </div>
                <div>
                  <i className="fas fa-clock"></i> Duration: {course.duration}
                </div>
              </div>
              <div className="pri-dsa-info">
                <div>
                  <i className="fas fa-money-bill-wave"></i> {course.salary}
                </div>
                <div>
                  <i className="fas fa-project-diagram"></i> {course.projects}
                </div>
              </div>
              <div className="pri-dsa-info">
                <div>
                  <i className="fas fa-user-tie"></i> {course.mentors}
                </div>
                <div>
                  <i className="fas fa-comments"></i> {course.support}
                </div>
              </div>
              <span className="pri-dsa-online-badge">{course.mode}</span>
              <NavLink to="/Course">
                <button className="pri-go-button">GO TO PROGRAM</button>
              </NavLink>
              <a href={course.brochure} className="pri-brochure-link">
                BROCHURE <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CourseCard;
