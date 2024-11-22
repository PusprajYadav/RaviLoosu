import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-cta pt-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    50, 1st Floor, 100 Feet, Dodda Banaswadi Main Rd, HRBR
                    Layout 1st Block, Balaji Layout, Subbaiahnapalya, Bengaluru,
                    560043
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 6360136036</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>contact@bluink360.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-1">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo"></div>
                <p>
                  Bluink360 distinguishes itself in the competitive landscape of
                  training and content development through a combination of
                  innovation, customization, and a deep understanding of client
                  needs.
                </p>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <ul className="social_icon">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/bluink360-solutions-training-and-e-learning-content-provider">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bluink360/profilecard/?igsh=MXhkMmRhNm1xdGl3bg==">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <Link to="/Aboutus" className="link-1">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Terms&Condition" className="link-1">
                      Terms & Condition
                    </Link>

                    <a href="#"></a>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy" className="link-1">
                      PrivacyPolicy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blogs" className="link-1">
                      Blogs
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">Sponsorship</a>
                  </li>
                  <li>
                    <a href="#">Our Policies</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <h3>Subscribe</h3>
                <p>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <i className="fab fa-telegram-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div class="containers">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <a href="#">Bluink360</a>
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <Link to="#" className="link-1">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Course" className="link-1">
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/OurAlumani" className="link-1">
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link to="/Jobs" className="link-1">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link to="/Events" className="link-1">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
