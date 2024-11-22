import React from "react";
import "./contenban.css"; // Ensure this CSS file contains your provided styles
import Srvimg from "../../Assets/ServCon.png";

const ContentBan = () => {
  return (
    <div className="pre-add-serv">
      <section className="serv-content">
        <h1>Bluink360’s Content Development Service</h1>
        <p>
          Bluink360’s Content Development service delivers high-quality,
          impactful learning materials tailored to the unique needs of
          organizations and their learners.
        </p>
        <p>
          Our approach combines a strong foundation in adult learning
          principles, innovative technology, and a dedication to creating
          content that is both informative and engaging.
        </p>
        <button className="call-button">BOOK A CALL</button>
      </section>
      <section className="serv-image">
        <img src={Srvimg} alt="Team working together" />
      </section>
    </div>
  );
};

export default ContentBan;
