import React, { useState } from "react";
import "./Navbar.css";
import {
  FiPhone,
  FiMail,
  FiClock,
  FiSearch,
  FiChevronDown,
  FiUser,
  FiUserCheck,
  FiCalendar
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => setActiveDropdown(null);

  return (
    <header className="wn-header-wrapper">
      <div className="wn-top-utility-bar">
        <div className="wn-utility-container">
          <div className="wn-utility-left">
            <a href="tel:+18001234567" className="wn-utility-item">
              <FiPhone className="wn-icon" /> +1 (800) 123-4567
            </a>
            <a href="https://wa.me/18001234567" target="_blank" rel="noreferrer" className="wn-utility-item whatsapp">
              <FaWhatsapp className="wn-icon" /> WhatsApp Support
            </a>
            <a href="mailto:support@weblinic.com" className="wn-utility-item">
              <FiMail className="wn-icon" /> support@weblinic.com
            </a>
            <span className="wn-utility-item">
              <FiClock className="wn-icon" /> Mon - Sat: 8:00 AM - 10:00 PM
            </span>
          </div>

          <div className="wn-utility-right">
            <a href="/register/patient" className="wn-utility-link">
              <FiUser size={12} /> Patient Registration
            </a>
            <span>|</span>
            <a href="/register/doctor" className="wn-utility-link doctor-reg">
              <FiUserCheck size={12} /> Doctor Registration
            </a>
          </div>
        </div>
      </div>

      <nav className="wn-main-navbar" onMouseLeave={closeDropdowns}>
        <div className="wn-navbar-container">

          <a href="/" className="wn-navbar-logo">
            <img src={logo} alt="Weblinic Logo" className="wn-logo-img" />
            <h2>Weblinic Healthcare</h2>
          </a>

          <ul className="wn-nav-menu">
            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("patients")}>
              <button className="wn-nav-link">
                Patients <FiChevronDown className={`wn-arrow ${activeDropdown === "patients" ? "open" : ""}`} />
              </button>
              {activeDropdown === "patients" && (
                <div className="wn-dropdown-menu">
                  <a href="/register/patient">Patient Registration</a>
                  <a href="/doctors">Find a Doctor</a>
                  <a href="/book">Book Appointment</a>
                  <a href="/consultation">Online Consultation</a>
                  <a href="/specialties">Specialties</a>
                  <a href="/packages">Health Packages</a>
                </div>
              )}
            </li>

            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("services")}>
              <button className="wn-nav-link">
                Services <FiChevronDown className={`wn-arrow ${activeDropdown === "services" ? "open" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="wn-dropdown-menu">
                  <a href="/services/consultation">Consultation</a>
                  <a href="/services/home-health">Home Health</a>
                  <a href="/services/diagnostics">Diagnostics</a>
                  <a href="/services/pharmacy">Pharmacy</a>
                </div>
              )}
            </li>

            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("doctors")}>
              <button className="wn-nav-link">
                Doctors <FiChevronDown className={`wn-arrow ${activeDropdown === "doctors" ? "open" : ""}`} />
              </button>
              {activeDropdown === "doctors" && (
                <div className="wn-dropdown-menu">
                  <a href="/doctors/browse">Browse Doctors</a>
                  <a href="/doctors/featured">Featured Specialists</a>
                </div>
              )}
            </li>

            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("library")}>
              <button className="wn-nav-link">
                Health Library <FiChevronDown className={`wn-arrow ${activeDropdown === "library" ? "open" : ""}`} />
              </button>
              {activeDropdown === "library" && (
                <div className="wn-dropdown-menu">
                  <a href="/library/articles">Articles</a>
                  <a href="/library/guides">Disease Guides</a>
                  <a href="/library/symptoms">Symptoms Checker</a>
                  <Link to="/blog" className="view-all-link">
                    Blogs
                  </Link>
                  <a href="/library/faqs">FAQs</a>
                </div>
              )}
            </li>

            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("about")}>
              <button className="wn-nav-link">
                About <FiChevronDown className={`wn-arrow ${activeDropdown === "about" ? "open" : ""}`} />
              </button>
              {activeDropdown === "about" && (
                <div className="wn-dropdown-menu">
                  <a href="/about">About Us</a>
                  <a href="/about/mission">Our Mission</a>
                  <a href="/about/team">Our Team</a>
                  <a href="/careers">Careers</a>
                  <Link to="/media" className="wn-nav-link">
                    Media Center
                  </Link>
                </div>
              )}
            </li>

            <li className="wn-nav-item" onMouseEnter={() => toggleDropdown("contact")}>
              <button className="wn-nav-link">
                Contact <FiChevronDown className={`wn-arrow ${activeDropdown === "contact" ? "open" : ""}`} />
              </button>
              {activeDropdown === "contact" && (
                <div className="wn-dropdown-menu">
                  <a href="/contact">Contact Us</a>
                  <a href="/support">Support</a>
                  <a href="/feedback">Feedback</a>
                </div>
              )}
            </li>
          </ul>

          <div className="wn-navbar-actions">
            <div className="wn-nav-search-box">
              <FiSearch className="wn-search-icon" />
              <input
                type="text"
                placeholder="Search doctors, specialties..."
              />
            </div>

            <a href="/login" className="wn-login-btn">
              Login / Sign Up
            </a>

            <a href="/book" className="wn-cta-book-btn">
              <FiCalendar size={14} /> Book Appointment
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;