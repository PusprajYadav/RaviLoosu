import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function AlumaniUpdate() {
  const location = useLocation();
  const ExistedData = location.state;
  console.log(ExistedData);

  // useEffect(()=>{
  //   axios.get("http:127.0.0.1/api/")
  // })

  const [AlumaniData, setAlumaniData] = useState({
    _id: ExistedData._id,
    studentName: ExistedData.studentName,
    companyPlaced: ExistedData.companyPlaced,
    packages: ExistedData.packages,
    jobRole: ExistedData.jobRole,
    photo: ExistedData.photo,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAlumaniData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // }
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://127.0.0.1:5000/api/UpdateAlumani/${ExistedData._id}`,
        AlumaniData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        alert("Alumni data updated successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Error updating alumni data");
      });
  };

  return (
    <>
      <h1>Alumani Update</h1>
      <input
        type="text"
        onChange={handleChange}
        value={AlumaniData.studentName}
        pattern="Enter Alumani Name"
        name="studentName"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        value={AlumaniData.companyPlaced}
        pattern="Enter The Comapny Placed"
        name="companyPlaced"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        value={AlumaniData.packages}
        name="packages"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        value={AlumaniData.jobRole}
        name="jobRole"
        pattern="Enter The Job Role"
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        name="photo"
      />
      <br />
      <button className="btnu submitbtn" onClick={handleUpdate}>
        Update
      </button>
    </>
  );
}

export default AlumaniUpdate;
