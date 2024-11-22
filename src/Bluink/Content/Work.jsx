import React from "react";
import "./Works.css"; // Importing the CSS file
import "remixicon/fonts/remixicon.css";

const WorkSection = () => {
  return (
    <section className="work__container" id="work">
      <h2 className="work__header">We are working on</h2>
      <div className="work__grid">
        <div className="work__card">
          <span>
            <i className="ri-map-pin-fill"></i>
          </span>
          <h4>Content Strategy</h4>
          <p>
            A content strategy outlines the planning, creation, and distribution
            of content to achieve specific business objectives, ensuring it
            resonates with the target audience.
          </p>
        </div>
        <div className="work__card">
          <span>
            <i className="ri-calendar-check-fill"></i>
          </span>
          <h4>Content Marketing</h4>
          <p>
            Content marketing involves creating and sharing valuable content to
            attract, engage, and convert a target audience, driving profitable
            customer actions.
          </p>
        </div>
        <div className="work__card">
          <span>
            <i className="ri-bookmark-3-fill"></i>
          </span>
          <h4>Brand StoryTelling</h4>
          <p>
            Brand storytelling is the art of crafting a narrative that
            emotionally connects with consumers, building trust and loyalty by
            showcasing a brand’s values, mission, and vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
