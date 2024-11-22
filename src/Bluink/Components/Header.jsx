import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [time, setTime] = useState(1 * 24 * 60 * 60 + 18 * 60 + 18 * 60 + 39);
  const [seats, setSeats] = useState(95);
  const totalSeats = 180;
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} D : ${hours} H : ${minutes} M : ${remainingSeconds} S`;
  };

  return (
    <>
      <div className="header">
        <div>
          <marquee className="headerh4">
            Secure your future career today with our Advanced Placement program{" "}
            – Don't wait, take the first step toward a brighter future now!
          </marquee>
        </div>

        <div className="hdr">
          <div className="headertimer">
            <h1 className="headertimerh1">{formatTime(time)}</h1>
          </div>
          <div className="seat-info">
            <p className="headerp">
              Limited Seat ({seats}/{totalSeats})
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
