import React from "react";
import "./Coursecard.css";
import { NavLink } from "react-router-dom";

// Import assets
import Dsa from "../../Assets/Dsa.png";

const courseData = [
  {
    id: 1,
    name: "Master MERN + DSA & System Design with Certification",
    image: Dsa,
    cert: "ISO TSN Certified",
    jobAssistance: "100% Job Assistance",
    duration: "6-8 months",
    salary: "11LPA + Average",
    projects: "Real-World Projects",
    mentors: "Mentors from Top MNC",
    support: "24/7 Learning Support",
    mode: "Online + Offline",
    brochure: "https://bluink360.com/pdfdata/Bluink360_DSA_Course.pdf",
  },

];

function CourseCard() {
  return (
    <>
      <h1 className="skillbuild-title">
        Skill-Building Programs for Career Success
      </h1>
      <div className="coursecon">
        {courseData.map((course) => (
          <div className="dsa-course-card" key={course.id}>
            <img src={course.image} alt={`${course.name} Icon`} />
            <div className="dsa-content">
              <span className="dsa-nsdc-cert">{course.cert}</span>
              <h3>{course.name}</h3>
              <div className="dsa-info">
                <div>
                  <i className="fas fa-briefcase"></i> {course.jobAssistance}
                </div>
                <div>
                  <i className="fas fa-clock"></i> Duration: {course.duration}
                </div>
              </div>
              <div className="dsa-info">
                <div>
                  <i className="fas fa-money-bill-wave"></i> {course.salary}
                </div>
                <div>
                  <i className="fas fa-project-diagram"></i> {course.projects}
                </div>
              </div>
              <div className="dsa-info">
                <div>
                  <i className="fas fa-user-tie"></i> {course.mentors}
                </div>
                <div>
                  <i className="fas fa-comments"></i> {course.support}
                </div>
              </div>
              <span className="dsa-online-badge">{course.mode}</span>
              <NavLink to="/Course">
                <button>GO TO PROGRAM</button>
              </NavLink>
              <a href={course.brochure}>
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
