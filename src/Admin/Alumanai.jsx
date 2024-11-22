import Nav from "../Admin/Nav";
import "../Admin/AllForms.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Alumanai() {
  const [student, setStudent] = useState({
    studentName: "",
    companyPlaced: "",
    packages: "",
    jobRole: "",
    photo: "",
  });

  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        setStudent((prevStudent) => ({
          ...prevStudent,
          photo: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    }
  };

  // post data from admin to mongoose
  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}api/Admin/Alumanai`, student, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Alumani Data posted successfully");

        setStudent({
          studentName: "",
          companyPlaced: "",
          packages: "",
          jobRole: "",
          photo: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Data not posted");
      });
  };

  /// getting data from mongoose from mongoose to admin panel
  const [getStudent, setGetStudent] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllAlumanai`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetStudent(res.data.GetAllAlumanidata))
      .catch((err) => console.log(err));
  }, []);

  // dalet the data from admin to mongoose
  function DeleteAlumani(id) {
    axios
      .delete(`${BASE_URL}/api/DeleteAlumanai/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Data Deleted Successfully");
        setGetStudent(getStudent.filter((student) => student._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting data");
      });
  }

  function NavtoUpdateAlumani(id) {
    nav("/AluUpdate", {
      state: id,
    });
  }

  return (
    <>
      <div className="BodyContent">
        <Nav />
        <div className="Alumi">
          <div className="forms">
            <h1 className="aluminih1">
              Add <span>Alumni</span>
            </h1>
            <input
              type="text"
              placeholder="Enter Alumni name"
              onChange={handleChange}
              value={student.studentName}
              name="studentName"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Company Placed"
              onChange={handleChange}
              value={student.companyPlaced}
              name="companyPlaced"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The packages"
              onChange={handleChange}
              value={student.packages}
              name="packages"
              className="inputfield"
            />
            <br />
            <input
              type="text"
              placeholder="Enter The Job Role"
              onChange={handleChange}
              value={student.jobRole}
              name="jobRole"
              className="inputfield"
            />
            <br />
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              name="photo"
              className="inputfield"
            />
            <br />
            <button className="btnu submitbtn" onClick={handleSubmit}>
              Update
            </button>
          </div>

          <div className="GetAlumaidata">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company Placed</th>
                  <th>packages</th>
                  <th>Position</th>
                  <th>Image</th>
                  <th>Update</th>
                  {/* <th>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {getStudent.map((e) => (
                  <tr key={e._id}>
                    <td>{e.studentName}</td>
                    <td>{e.companyPlaced}</td>
                    <td>{e.packages}</td>
                    <td>{e.jobRole}</td>
                    <td>
                      <img
                        src={
                          e.photo.startsWith("data:image")
                            ? e.photo
                            : `data:image/png;base64,${e.photo}`
                        }
                        alt="student"
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <button
                        className="btnd"
                        onClick={() => DeleteAlumani(e._id)}
                      >
                        Delete
                      </button>
                    </td>
                    {/* <td>
                      <button
                        className="btnd"
                        style={{ background: "green" }}
                        onClick={() => NavtoUpdateAlumani(e._id)}
                      >
                        Update
                      </button>
                    </td> */}
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

export default Alumanai;
