import React, { useEffect } from "react";
import "./Stats.css"; // Import the CSS file

const Stats = () => {
  // Function to animate the count values
  const animateCount = (id, start, end, duration, suffix = "") => {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const element = document.getElementById(id);
    const timer = setInterval(() => {
      current += increment;
      element.textContent = current + suffix;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {""
    animateCount("brands", 0, 3, 2000, "+");
    animateCount("acos", 0, 5, 2000, "X");
    animateCount("profit", 0, 15, 2000, "+");
    animateCount("revenue", 0, 30, 2000, "%");
  }, []);

  return (
    <div className="stats">
      <div className="stats-container">
        <div className="stats-title">Our Power Numbers</div>
        <div className="stats-numbers">
          <div className="stats-number-box">
            <div className="stats-number" id="brands">
              0
            </div>
            <div className="stats-label">Years Served</div> 
          </div>
          <div className="stats-number-box">
            <div className="stats-number" id="acos">
              0%
            </div>
            <div className="stats-label">Faster Content Delivery</div>
          </div>
          <div className="stats-number-box">
            <div className="stats-number" id="profit">
              0%
            </div>
            <div className="stats-label">Company Trust Our Services</div>
          </div>
          <div className="stats-number-box">
            <div className="stats-number" id="revenue">
              0
            </div>
            <div className="stats-label">Lower Content Creation Costs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
