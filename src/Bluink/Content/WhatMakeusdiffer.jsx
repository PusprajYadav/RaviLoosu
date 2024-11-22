import React from 'react';
import './WhatMakeusdiffer.css'; // Assuming you'll define CSS here

const WhatMakeusdiffer = () => {
  const content = [
    {
      title: "Client-Centric Approach",
      description:
        "Bluink360 tailors content development to client needs, focusing on understanding challenges and goals. We collaborate closely to ensure high-quality, goal-aligned content.",
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our team’s diverse industry experience enables us to craft educational content tailored to meet the specific needs and regulations of various sectors effectively.",
    },
    {
      title: "Focus on Engagement and Retention",
      description:
        "Unlike most content developers, Bluink360 prioritizes engagement and retention by using multimedia, interactive tools, and adaptive learning to keep learners engaged and information retained.",
    },
    {
      title: "Measurable Impact",
      description:
        "Bluink360 delivers outcome-focused content, setting clear learning objectives and using data-driven insights to ensure measurable results that empower learners to achieve their goals.",
    },
    {
      title: "Commitment to Quality",
      description:
        "At Bluink360, we prioritize quality at every stage, ensuring accurate, relevant, and impactful content that sets us apart and earns our clients’ trust.",
    },
    {
      title: "Post Production Support",
      description:
        "We offer 3 to 5 months of extended support after project completion, covering design changes, content edits, quality checks, and other development activities.",
    },
  ];

  return (
    <div className="WhatMakeusdiffer">
      <h2 className="WhatMakeusdiffer-title">
        What Makes Us Different In Content Development?
      </h2>
      <div className="WhatMakeusdiffer-grid">
        {content.map((item, index) => (
          <div key={index} className="WhatMakeusdiffer-card">
            <h3 className="WhatMakeusdiffer-card-title">{item.title}</h3>
            <p className="WhatMakeusdiffer-card-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakeusdiffer;
