import React from "react";
import "./Jobs.css";
import Navbar from "./Navigate";
import Footer from "./Components/Footer";

const jobDetails = [
  {
    id: 1,
    companyName: "Tech Solutions Inc.",
    title: "Full Stack Developer",
    location: "New York, NY",
    description: "Join our team to work on innovative web applications.",
    package: 85000,
  },
  {
    id: 2,
    companyName: "Web Innovations LLC",
    title: "Frontend Developer",
    location: "San Francisco, CA",
    description:
      "Looking for a passionate frontend developer to join our team.",
    package: 75000,
  },
  {
    id: 3,
    companyName: "Data Systems Corp.",
    title: "Data Analyst",
    location: "Austin, TX",
    description: "Analyze data and provide insights for business strategies.",
    package: 70000,
  },
  {
    id: 4,
    companyName: "Cloud Solutions Co.",
    title: "Backend Developer",
    location: "Remote",
    description: "Develop robust backend services and APIs.",
    package: 90000,
  },
  {
    id: 5,
    companyName: "Web Innovations LLC",
    title: "Frontend Developer",
    location: "San Francisco, CA",
    description:
      "Looking for a passionate frontend developer to join our team.",
    package: 75000,
  },
  {
    id: 6,
    companyName: "Data Systems Corp.",
    title: "Data Analyst",
    location: "Austin, TX",
    description: "Analyze data and provide insights for business strategies.",
    package: 70000,
  },
  {
    id: 7,
    companyName: "Cloud Solutions Co.",
    title: "Backend Developer",
    location: "Remote",
    description: "Develop robust backend services and APIs.",
    package: 90000,
  },
];

function jobappjy() {
  alert("Job Applied Successfully");
}

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="jobcon">
        <h3 id="job3">
          Explore job opportunities in Data Science, Full Stack Development,
          and Software Engineering. Apply now to take the next step in your
          career."
        </h3>
      </div>
      <div className="job-card-container">
        {jobDetails.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-body">
              <h3 className="job-title">{job.title}</h3>
              <h4 className="job-company">{job.companyName}</h4>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <p className="job-package">
                Salary Package: ${job.package.toLocaleString()}
              </p>
              <button className="jobapply-button" onClick={jobappjy}>
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Jobs;
