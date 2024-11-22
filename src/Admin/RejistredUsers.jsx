import Nav from "../Admin/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx"; // Import the xlsx library

const BASE_URL = process.env.REACT_APP_BASE_URL;

function RegisteredUser() {
  const [getRegistredUser, setGetRegistredUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/AllUsers`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetRegistredUser(res.data.GetAllUsersData))
      .catch((err) => console.log(err));
  }, []);

  // Delete function for users
  function DeleteRegUser(id) {
    axios
      .delete(`${BASE_URL}//api/DeleteUserId/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("User Data Deleted Successfully");
        setGetRegistredUser(
          getRegistredUser.filter((Reguser) => Reguser._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting data");
      });
  }

  // Function to export the table data to an Excel file
  const handleExport = () => {
    const table = document.getElementById("userTable");

    // Create a new workbook and convert the table to a sheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Registered Users" });

    // Write the workbook to an Excel file
    XLSX.writeFile(wb, "registered_users.xlsx");
  };

  return (
    <>
      <div className="BodyContent">
        <Nav />

        <div className="GetAlumaidata">
          <h1 className="aluminih1">
            Registered <span>Users</span> List
          </h1>
          <button onClick={handleExport} className="export-btn">
            Export to Excel
          </button>

          <table id="userTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Qualification</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getRegistredUser.map((e) => (
                <tr key={e._id}>
                  <td>{e.FName}</td>
                  <td>{e.Email}</td>
                  <td>{e.PhoneNum}</td>
                  <td>{e.Qualification}</td>
                  <td>
                    <button
                      className="btnd"
                      onClick={() => DeleteRegUser(e._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RegisteredUser;
