import Nav from "../Admin/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function PostJobs() {
  const [jobs, setJobs] = useState({
    companyName: "",
    logo: "",
    title: "",
    location: "",
    description: "",
    Spackage: "",
  });

  const handleChangejob = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        setJobs((prevJobs) => ({
          ...prevJobs,
          logo: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setJobs((prevJobs) => ({
        ...prevJobs,
        [name]: value,
      }));
    }
  };

  // submitting data from
  const handleSubmitJobs = () => {
    axios
      .post(`${BASE_URL}/api/Admin/Job`, jobs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Job posted successfully");

        setJobs({
          companyName: "",
          title: "",
          location: "",
          description: "",
          Spackage: "",
          logo: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Job Data not posted");
      });
  };

  // getting from mongode to admin
  const [getJob, setGetJob] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllJob`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetJob(res.data.GetAllJobData))
      .catch((err) => console.log(err));
  }, []);

  // delted data
  function DeleteJob(id) {
    axios
      .delete(`${BASE_URL}/api/DeleteJobById/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Job Post Deleted Successfully");
        setGetJob(getJob.filter((jobpost) => jobpost._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Job Post Not Deleted");
      });
  }

  return (
    <>
      <div className="BodyContent">
        <Nav />

        <div className="Alumi">
          <div className="forms">
            <h1 className="aluminih1">
              Add <span>Jobs</span>{" "}
            </h1>
            <input
              type="text"
              placeholder="Enter Company Name"
              onChange={handleChangejob}
              value={jobs.companyName}
              name="companyName"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Title"
              onChange={handleChangejob}
              value={jobs.title}
              name="title"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Location"
              onChange={handleChangejob}
              value={jobs.location}
              name="location"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Job Role"
              onChange={handleChangejob}
              value={jobs.description}
              name="description"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Job Role"
              onChange={handleChangejob}
              value={jobs.Spackage}
              name="Spackage"
              className="inputfield"
            />
            <br />
            <input
              type="file"
              accept="image/*"
              onChange={handleChangejob}
              name="logo"
              className="inputfield"
            />
            <br />

            <button className="btnu submitbtn" onClick={handleSubmitJobs}>
              Submit
            </button>
          </div>

          <div className="GetAlumaidata">
            <table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Package</th>
                  <th> Logo</th>

                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {getJob.map((e) => (
                  <tr key={e._id}>
                    <td>{e.companyName}</td>
                    <td>{e.title}</td>
                    <td>{e.location}</td>
                    <td>{e.description}</td>
                    <td>{e.Spackage}</td>
                    <td>
                      <img
                        src={
                          e.logo.startsWith("data:image")
                            ? e.logo
                            : `data:image/png;base64,${e.logo}`
                        }
                        alt="Logo"
                        width="100"
                        height="100"
                      />
                    </td>
                    <td>
                      <button className="btnd" onClick={() => DeleteJob(e._id)}>
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
    </>
  );
}
export default PostJobs;
