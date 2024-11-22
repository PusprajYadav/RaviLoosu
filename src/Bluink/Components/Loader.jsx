import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loader_22">
          <g className="loader_circle_1">
            <circle cx="30" cy="30" r="30" fill="transparent" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.03 32.49C4.89 31.12 3.78 30 2.41 30 1.02 30 -0.11 31.13 0.01 32.51 1.26 47.03 12.86 58.6 27.4 59.8 28.77 59.92 29.9 58.79 29.9 57.41c0-1.38-1.12-2.49-2.5-2.63C15.62 53.61 6.24 44.26 5.03 32.49Z"
              fill="#5598FF"
            />
          </g>
          <g className="loader_circle_2">
            <circle cx="30" cy="30" r="20" fill="transparent" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.07 32.47c-0.23-1.35-1.33-2.47-2.71-2.47-1.38 0-2.52 1.13-2.34 2.51 1.17 9 8.32 16.13 17.34 17.25 1.37 0.17 2.5-1 2.5-2.38 0-1.38-1.13-2.48-2.49-2.7-6.26-1.05-11.21-6.98-12.3-13.25Z"
              fill="#5598FF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
