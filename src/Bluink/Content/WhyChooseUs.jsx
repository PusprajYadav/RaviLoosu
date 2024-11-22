import React from "react";
import "./WhyChooseUsHm.css";

const WhyChooseUsHm = () => {
  return (
    
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us?</h2>
        <p>
          Our organization strives on the philosophy of “Customer First” approach, and we are driven
          by the same mantra in each of our departments whether it is Sales, Delivery, and Content
          Development. Our services have these key features:
        </p>
        <div className="features">
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=46851&format=png&color=000000"
              alt="Lean Methodology Icon"
            />
            <h3>Lean Methodology</h3>
          </div>
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=103984&format=png&color=000000"
              alt="Agile Implementation Icon"
            />
            <h3>Agile Implementation</h3>
          </div>
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=82671&format=png&color=000000"
              alt="Cost Effective Solutions Icon"
            />
            <h3>Cost Effective Solutions</h3>
          </div>
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=IlFXeDGvZQQC&format=png&color=000000"
              alt="Quick Turnaround Time Icon"
            />
            <h3>Quick Turnaround Time</h3>
          </div>
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=103407&format=png&color=000000"
              alt="Multilingual Support Icon"
            />
            <h3>Multilingual Support</h3>
          </div>
          <div className="feature-item">
            <img
              src="https://img.icons8.com/?size=100&id=QkAoBvyzFLpH&format=png&color=000000"
              alt="Customer-Centric Solutions Icon"
            />
            <h3>Customer-Centric Solutions</h3>
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src="https://cdn.shopaccino.com/techsurgelearning/images/home-page-abou-img-2-404658_l.jpg?v=521"
          alt="Team Working"
        />
      </div>
    </section>
  );
};

export default WhyChooseUsHm
