import { useNavigate } from "react-router-dom";
import React from "react";
import "./navStyle.css";

const NavSidebar = () => {
  const toggleMenu = () => {
    const navigation = document.querySelector(".sidenav-navigation");
    const toggle = document.querySelector(".sidenav-toggle");
    navigation.classList.toggle("sidenav-active");
    toggle.classList.toggle("sidenav-active");
  };

  const nav = useNavigate();

  return (
    <div>
      <div className="sidenav-navigation">
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/Admin");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-house"></i>
              </span>
              <span className="sidenav-title">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/RegistredUser");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="sidenav-title">Students</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/Alumanai");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-message"></i>
              </span>
              <span className="sidenav-title">Alumani</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/PostJobs");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-briefcase"></i>
              </span>
              <span className="sidenav-title">Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/PostEvents");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <span className="sidenav-title">Events</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/Admin");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-book"></i>
              </span>
              <span className="sidenav-title">Courses</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/PostBlogs");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-book"></i>
              </span>
              <span className="sidenav-title">Blogs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/Admin");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-lock"></i>
              </span>
              <span className="sidenav-title">Password</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                nav("/Admin");
              }}
            >
              <span className="sidenav-icon">
                <i className="fas fa-right-from-bracket"></i>
              </span>
              <span className="sidenav-title">SignOut</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidenav-toggle" onClick={toggleMenu}></div>
    </div>
  );
};

export default NavSidebar;
