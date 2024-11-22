import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Alumni.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const Alumni = () => {
  const [getStudent, setGetStudent] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllAlumanai`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetStudent(res.data.GetAllAlumanidata))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".alu-scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".alu-scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div className="aluscrol">
      <h2 className="aluscrolh2">
        Bluink360 grads have landed their dream careers through hands-on
        learning.
      </h2>
      {/* Image Scroller */}
      <div className="alu-scroller" data-direction="right" data-speed="slow">
        {/* First div showing images in normal order */}
        <div className="alu-scroller__inner">
          {getStudent.map((e, index) => (
            <div key={index} className="student-info">
              <img
                className="aluimmg"
                src={
                  e.photo.startsWith("data:image")
                    ? e.photo
                    : `data:image/png;base64,${e.photo}`
                }
                alt="student"
              />
            </div>
          ))}
        </div>

        {/* Second div showing images in reverse order */}
        <div className="alu-scroller__inner">
          {getStudent
            .slice()
            .reverse()
            .map((e, index) => (
              <div key={index} className="student-info">
                <img
                  className="aluimmg"
                  src={
                    e.photo.startsWith("data:image")
                      ? e.photo
                      : `data:image/png;base64,${e.photo}`
                  }
                  alt="student"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
