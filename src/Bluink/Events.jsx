import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navigate";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader"; // Import your Loader component
import "./Event.css";

function Events() {
  const [getEvents, setGetEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch events data from the backend
  useEffect(() => {
    axios
      .get("https://bluink360-1.onrender.com/api/GetAllEvent", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setGetEvents(res.data.GetAllEvents); // Update state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  const Register = () => {
    window.location.href = "https://bluink360.com/hackathon";
  };

  return (
    <>
      <Navbar />
      <div className="divevevts">
        <div className="webinar">
          <h1 className="verifiedh1">
            Acquire tech insights from seasoned industry leaders with hands-on
            experience!
          </h1>
        </div>

        {/* Show loader while data is being fetched */}
        {loading ? (
          <Loader /> // Use the imported Loader component here
        ) : (
          <div className="event-cards-container">
            {getEvents.map((event) => (
              <div key={event.id} className={`event-card event-${event.id}`}>
                <img
                  className="event-card-img"
                  src={event.banner} // Use the event banner
                  alt={event.eventName}
                />
                <div className="event-card-body">
                  <h2 className="event-card-title">{event.eventName}</h2>
                  <p className="event-card-text">{event.description}</p>
                  <p className="event-card-date">
                    Date: {new Date(event.date).toLocaleDateString()}
                  </p>
                  <button className="event-button" onClick={Register}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Events;
