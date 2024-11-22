import React from "react";
import { motion } from "framer-motion";
import "./CorporateBanner.css";
import image from './image.png'

const CorporateBanner = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="corporate-banner-container">
      <div className="corporate-banner-background">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2 }}
          variants={textAnimation}
          className="corporate-banner-text"
        >
          <div className="homebannerhai">
            <div className="Homebannerhain">
      <div className="content">
        <h1>
          New skills for <span>digital transformation</span>
        </h1>
        <p>
          Experience immersive learning and equip your teams with the skills of tomorrow.
        </p>
        <button>Start Free Demo</button>
      </div>
      <div className="image-container">
        <img
          src={image} // Replace with your actual image path
          alt="Smiling professional"
        />
      </div>
      </div>
      <div className="statistics">
        <div>
          <p className="number">350,000 +</p>
          <p>Professionals trained</p>
        </div>
        <div>
          <p className="number">1200 +</p>
          <p>Enterprise clients</p>
        </div>
        <div>
          <p className="number">100 +</p>
          <p>Countries and counting</p>
        </div>
      </div>
      {/* <div className="image-container">
        <img
          src="/path-to-your-image.jpg" // Replace with your actual image path
          alt="Smiling professional"
        />
      </div> */}
    </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CorporateBanner;
