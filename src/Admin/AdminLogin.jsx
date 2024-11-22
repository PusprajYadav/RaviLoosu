import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"; // Path to your logo image
import "../Admin/AdminLogin.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Eye icon imports

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "Admin@123") {
      setError("");
      navigate("/RegistredUser");
    } else {
      setError("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="admin-container">
      <form className="admin-form" onSubmit={handleLogin}>
        <img id="Adminlogo" src={logo} alt="Admin Logo" />
        {error && <p className="error-message">{error}</p>}
        <div className="admin-input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Admin Username"
          />
        </div>
        <div className="admin-input-group">
          <label>Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>
        <button type="submit" className="admin-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
