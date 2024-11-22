import "./AbtProg.css";
import one from "../../Assets/1.png";
import two from "../../Assets/2.png";
import three from "../../Assets/3.png";
import four from "../../Assets/4.png";
import five from "../../Assets/5.png";
import six from "../../Assets/6.png";
import seven from "../../Assets/7.png";
import eight from "../../Assets/8.png";

function AboutTheProgram() {
  return (
    <>
      <div className="keyhighlits">
        <h1 className="keyhighlitsh1">Key Highlights</h1>
        <div className="course-features">
          <div className="features">
            <div className="feaimg">
              <img src={one} alt="Live Sessions" />
            </div>
            <div className="text">
              <h1>Learning - Online & Offline Live and Recorded Classes</h1>
            </div>
          </div>

          <div className="features">
            <div className="feaimg">
              <img src={two} alt="Self-paced Videos" />
            </div>
            <div className="text">
              <h1>9+ industry Projects & Case Studies</h1>
            </div>
          </div>

          <div className="features">
            <div className="feaimg">
              <img src={five} alt="Faculty" />
            </div>
            <div className="text">
              <h1>Learn from Industry Expert with 1:1 Mentor</h1>
            </div>
          </div>
          <div className="features">
            <div className="feaimg">
              <img src={four} alt="Certification" />
            </div>
            <div className="text">
              <h1>Affiliated Certification </h1>
            </div>
          </div>
          <div className="features">
            <div className="feaimg">
              <img src={eight} alt="Campus Immersion" />
            </div>
            <div className="text">
              <h1>Live Session (5+1 Month Project Session) </h1>
            </div>
          </div>
          <div className="features">
            <div className="feaimg">
              <img src={three} alt="Projects and Quizzes" />
            </div>
            <div className="text">
              <h1>Designed for Working Professionals And Freshers</h1>
            </div>
          </div>

          <div className="features">
            <div className="feaimg">
              <img src={six} alt="Support" />
            </div>
            <div className="text">
              <h1>24/7 Support</h1>
            </div>
          </div>

          <div className="features">
            <div className="feaimg">
              <img src={seven} alt="Career Services" />
            </div>
            <div className="text">
              <h1>Career Services by Bluink360</h1>
            </div>
          </div>
          <div className="features">
            <div className="feaimg">
              <img src={three} alt="Projects and Quizzes" />
            </div>
            <div className="text">
              <h1>Designed for Working Professionals And Freshers</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTheProgram;
