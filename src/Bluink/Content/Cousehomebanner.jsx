import React from "react";
import "./CourseHomeBanner.css"; // Import styles
import bannerhome from './assset/bannerhome.gif'


const CourseHomeBanner = () => {
  return (
    <div className="Coursehomebanner">
      <div className="Coursehomebanner-content">
        <div className="Coursehomebanner-text">
          <h1>Master MERN + DSA & System Design with certification</h1>
          <p>
            Enroll in our world-class, highly engaging, and outcome-driven professional
            upskilling programs designed for success
          </p>
          <ul>
            <li> ✅ Comprehensive Curriculum – Cover all essential MERN, DSA concepts, from basics to advanced.</li>
            <li>✅ Learn Anytime, Anywhere – Flexible online classes or immersive offline sessions.</li>
            <li>✅ Hands-On Practice – Solve 200+ coding problems and real-world challenges.</li>
            <li>✅ Expert Mentorship – Get guided by industry veterans with 5-10+ years of experience.</li>
            <li>✅ Career Boost – Ace interviews at top companies with placement assistance.</li>
          </ul>
        </div>
        <div className="Coursehomebanner-programs">
          <h2>Our Program Includes : </h2>
          <div className="program-list">
            <button>📊 Online & Offline Batches</button>
            <button>🛡️ 100% Job Assistance</button>
            <button>📋 Course Completion Certificate</button>
            {/* <button>🤖 AI & Machine Learning</button> */}
          </div>
        </div>
      </div>
      <div className="Coursehomebanner-image">
        <img src= {bannerhome} alt="Smiling Student" />
      </div>
    </div>
  );
};

export default CourseHomeBanner;
