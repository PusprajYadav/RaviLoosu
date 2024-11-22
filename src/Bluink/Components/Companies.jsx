import React, { useEffect } from "react";
import "./Comp.css";


const Companieslist = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".comp-scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".comp-scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div className="ourcompanies">
      <h1 className="comph1">
        Our <span> Alumni</span> Work At
      </h1>
      <div className="comp-scroller" data-direction="right" data-speed="slow">
        <div className="comp-scroller__inner">
          <img
            src="https://assets.fp.scaler.com/seo/_next/static/media/companies_light.bbacf734.webp"
            alt="Avatar 1"
          />
        </div>
      </div>

      <div className="comp-scroller" data-direction="left" data-speed="slow">
        <div className="comp-scroller__inner">
          <img
            src="https://assets.fp.scaler.com/seo/_next/static/media/companies_light1.8319c826.webp"
            alt="Avatar 1"
          />
        </div>
      </div>

    
    </div>
  );
};

export default Companieslist;
