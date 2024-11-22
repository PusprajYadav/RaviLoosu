import "./Courseban.css";

function Courseban() {
  return (
    <>
      <div className="course">
        <div className="courestu1">
          <h1 className="coursestuh1">
            Master's Certification
            <span className="Couse"> In DSA & System Design </span>
          </h1>
          <p className="coursestuhp">
            "Enroll in India's top-rated DSA program with 8+ years of
            excellence. Master essential skills in algorithms, data structures,
            problem-solving, and coding. Elevate your career and join the
            prestigious Bluink360 alumni network."
          </p>

          <section className="alldatasection">
            <div className="alldata">
              <div className="Fees">
                <div className="Amount">
                  <h4 className="amount4">Learning format</h4>
                  <h3 className="amount3"> Online & Offline</h3>
                </div>
              </div>
              <div className="startdata">
                <div className="starcourse">
                  <h4 className="starcourseh4">100%</h4>
                  <h3 className="starcourseh3"> Job Assistance</h3>
                </div>
              </div>
              <div className="duration">
                <div className="durationtime">
                  <h4 className="durationtimeh4">Course Completion </h4>
                  <h3 className="durationtimeh3"> Certifiaction </h3>
                </div>
              </div>
            </div>
            <a href="/">
              <button className="ApplyNow">Apply Now</button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
export default Courseban;
