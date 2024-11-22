import "./Careerservices.css";
import React, { useState } from "react";
import resbuild from "../../Assets/resbuild.png";
import jobass from "../../Assets/jobassi.png";

function CareerServices() {
  // Set initial state to show "Profile Building" by default
  const [selectedService, setSelectedService] = useState("profile-building");

  const handleServiceClick = (service) => {
    // Set the selected service, ensuring only one content is displayed at a time
    setSelectedService(service);
  };

  return (
    <div className="careerbody">
      <div className="careerdiv">
        <h1>Career Services By Bluink360</h1>

        <div className="car-ser-service-buttons">
          <button onClick={() => handleServiceClick("profile-building")}>
            PROFILE BUILDING
          </button>
          <button onClick={() => handleServiceClick("job-assistance")}>
            JOB ASSISTANCE
          </button>
          <button onClick={() => handleServiceClick("interview-preparation")}>
            INTERVIEW PREPARATION
          </button>
        </div>

        {/* Conditionally render content based on selected service */}
        {selectedService === "profile-building" && (
          <div className="car-ser-service-content">
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={resbuild} // Use an appropriate image for profile building
                  alt="Profile Building"
                />
              </div>
              <div className="divcontent">
                <h2>
                  Resume & LinkedIn Profile Building After 70% Of Course
                  Completion
                </h2>
                <p>
                  Get Assistance In Creating A World-Class Resume & LinkedIn
                  Profile From Our Career Services Team And Learn How To Grab
                  The Attention Of The Hiring Manager At Profile Shortlisting
                  Stage.
                </p>
              </div>
            </div>
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={resbuild} // Use an appropriate image for career-oriented sessions
                  alt="Career Oriented Sessions"
                />
              </div>
              <div className="divcontent">
                <h3>Career Oriented Sessions Throughout The Course</h3>
                <p>
                  Over 20+ Live Interactive Sessions With An Industry Expert To
                  Gain Knowledge And Experience On How To Build Skills That Are
                  Expected By Hiring Managers. These Will Be Guided Sessions And
                  That Will Help You Stay On Track With Your Up Skilling
                  Objective.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedService === "job-assistance" && (
          <div className="car-ser-service-content">
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={jobass} // Use an appropriate image for job assistance
                  alt="Job Assistance"
                />
              </div>
              <div className="divcontent">
                <h3>Job Opportunities Guaranteed</h3>
                <p>
                  Get A 100% Job Opportunities Guarantee Upon Movement To The
                  Placement Pool After Clearing The Placement Readiness Test
                  (PRT).
                </p>
              </div>
            </div>
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={resbuild} // Use an appropriate image for job portal access
                  alt="Access To Job Portal"
                />
              </div>
              <div className="divcontent">
                <h3>Access To Bluink360 Job Portal</h3>
                <p>
                  Exclusive Access To Our Dedicated Job Portal And Apply For
                  Jobs. More Than 500 Hiring Partners Including Top Start-Ups
                  And Product Companies Hiring Our Learners. Mentored Support On
                  Job Search And Relevant Jobs For Your Career Growth.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedService === "interview-preparation" && (
          <div className="car-ser-service-content">
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={jobass} // Ensure you have a relevant image for interview preparation
                  alt="Interview Preparation"
                />
              </div>
              <div className="divcontent">
                <h3>
                  1 On 1 Career Mentoring Sessions After 90% Of The Course
                  Completion
                </h3>
                <p>
                  Attend One-On-One Sessions With Career Mentors On How To
                  Develop The Required Skills And Attitude To Secure A Dream Job
                  Based On A Learner’s Educational Background, Past Experience,
                  And Future Career Aspirations.
                </p>
              </div>
            </div>
            <div className="imgandcon">
              <div className="divimage">
                <img
                  src={jobass} // Ensure you have a relevant image for mock interviews
                  alt="Mock Interview Preparation"
                />
              </div>
              <div className="divcontent">
                <h3>
                  Mock Interview Preparation After 80% Of The Course Completion
                </h3>
                <p>
                  Students Will Go Through A Number Of Mock Interviews Conducted
                  By Technical Experts Who Will Then Offer Tips And Constructive
                  Feedback For Reference And Improvement.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerServices;
