import Nav from "../Admin/Nav";
import axios from "axios";
import "./AllForms.css";
import { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Events() {
  const [Event, setEvent] = useState({
    eventName: "",
    description: "",
    date: "",
    banner: "",
  });

  const handleChangeEvent = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        setEvent((prevEvents) => ({
          ...prevEvents,
          banner: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setEvent((prevEvents) => ({
        ...prevEvents,
        [name]: value,
      }));
    }
  };

  // submiit button to post data from admin to mongoose
  const handleSubmitEvent = () => {
    axios
      .post(`${BASE_URL}/api/Admin/Event`, Event, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Event Data posted successfully");

        setEvent({
          eventName: "",
          description: "",
          date: "",
          banner: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Event Data not posted");
      });
  };

  // getting from mongode to admin
  const [getEvents, setGetEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllEvent`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetEvents(res.data.GetAllEvents))
      .catch((err) => console.log(err));
  }, []);

  //delete data from

  function DeleteEvent(id) {
    axios
      .delete(`${BASE_URL}/api/DeleteEventbybId/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Event Data Deleted Successfully");
        setGetEvents(getEvents.filter((event) => event._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting data");
      });
  }

  return (
    <div className="BodyContent">
      <Nav />

      <div className="Alumi">
        <div className="forms">
          <h1 className="aluminih1">
            Add <span>Events</span>
          </h1>
          <input
            type="text"
            placeholder="Enter Event name"
            onChange={handleChangeEvent}
            value={Event.eventName}
            name="eventName"
            className="inputfield"
          />
          <br />
          <input
            type="text"
            placeholder="Enter The Description"
            onChange={handleChangeEvent}
            value={Event.description}
            name="description"
            className="inputfield"
          />
          <br />

          <input
            type="date"
            placeholder="Enter The Job Role"
            onChange={handleChangeEvent}
            value={Event.date}
            name="date"
            className="inputfield"
          />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeEvent}
            name="banner"
            className="inputfield"
          />
          <br />

          <button className="btnu submitbtn" onClick={handleSubmitEvent}>
            Submit
          </button>
        </div>

        <div className="GetAlumaidata">
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Description</th>
                <th>DATE</th>
                <th>Banner</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getEvents.map((e) => (
                <tr key={e._id}>
                  <td>{e.eventName}</td>
                  <td>{e.description}</td>
                  <td>{e.date}</td>
                  <td>
                    <img
                      src={
                        e.banner.startsWith("data:image")
                          ? e.banner
                          : `data:image/png;base64,${e.banner}`
                      }
                      alt="Banner"
                      width="150"
                      height="150"
                    />
                  </td>

                  <td>
                    <button className="btnd" onClick={() => DeleteEvent(e._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Events;
