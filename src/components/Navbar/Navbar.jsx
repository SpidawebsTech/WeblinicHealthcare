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
    <header className="header-wrapper">
      <div className="top-utility-bar">
        <div className="utility-container">
          <div className="utility-left">
            <a href="tel:+18001234567" className="utility-item">
              <FiPhone className="icon" /> +1 (800) 123-4567
            </a>
            <a href="https://wa.me/18001234567" target="_blank" rel="noreferrer" className="utility-item whatsapp">
              <FaWhatsapp className="icon" /> WhatsApp Support
            </a>
            <a href="mailto:support@weblinic.com" className="utility-item">
              <FiMail className="icon" /> support@weblinic.com
            </a>
            <span className="utility-item">
              <FiClock className="icon" /> Mon - Sat: 8:00 AM - 10:00 PM
            </span>
          </div>

          <div className="utility-right">
            <a href="/register/patient" className="utility-link">
              <FiUser size={12} /> Patient Registration
            </a>
            <span className="divider">|</span>
            <a href="/register/doctor" className="utility-link doctor-reg">
              <FiUserCheck size={12} /> Doctor Registration
            </a>
          </div>
        </div>
      </div>

      <nav className="main-navbar" onMouseLeave={closeDropdowns}>
        <div className="navbar-container">

          <a href="/" className="navbar-logo">
            <img src={logo} alt="Weblinic Logo" className="logo-img" />
            <h2>Weblinic Healthcare</h2>
          </a>

          <ul className="nav-menu">
            <li className="nav-item" onMouseEnter={() => toggleDropdown("patients")}>
              <button className="nav-link">
                Patients <FiChevronDown className={`arrow ${activeDropdown === "patients" ? "open" : ""}`} />
              </button>
              {activeDropdown === "patients" && (
                <div className="dropdown-menu">
                  <a href="/register/patient">Patient Registration</a>
                  <a href="/doctors">Find a Doctor</a>
                  <a href="/book">Book Appointment</a>
                  <a href="/consultation">Online Consultation</a>
                  <a href="/specialties">Specialties</a>
                  <a href="/packages">Health Packages</a>
                </div>
              )}
            </li>

            <li className="nav-item" onMouseEnter={() => toggleDropdown("services")}>
              <button className="nav-link">
                Services <FiChevronDown className={`arrow ${activeDropdown === "services" ? "open" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="dropdown-menu">
                  <a href="/services/consultation">Consultation</a>
                  <a href="/services/home-health">Home Health</a>
                  <a href="/services/diagnostics">Diagnostics</a>
                  <a href="/services/pharmacy">Pharmacy</a>
                </div>
              )}
            </li>

            <li className="nav-item" onMouseEnter={() => toggleDropdown("doctors")}>
              <button className="nav-link">
                Doctors <FiChevronDown className={`arrow ${activeDropdown === "doctors" ? "open" : ""}`} />
              </button>
              {activeDropdown === "doctors" && (
                <div className="dropdown-menu">
                  <a href="/doctors/browse">Browse Doctors</a>
                  <a href="/doctors/featured">Featured Specialists</a>
                </div>
              )}
            </li>

            <li className="nav-item" onMouseEnter={() => toggleDropdown("library")}>
              <button className="nav-link">
                Health Library <FiChevronDown className={`arrow ${activeDropdown === "library" ? "open" : ""}`} />
              </button>
              {activeDropdown === "library" && (
                <div className="dropdown-menu">
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

            <li className="nav-item" onMouseEnter={() => toggleDropdown("about")}>
              <button className="nav-link">
                About <FiChevronDown className={`arrow ${activeDropdown === "about" ? "open" : ""}`} />
              </button>
              {activeDropdown === "about" && (
                <div className="dropdown-menu">
                  <a href="/about">About Us</a>
                  <a href="/about/mission">Our Mission</a>
                  <a href="/about/team">Our Team</a>
                  <a href="/careers">Careers</a>
                  <Link to="/media" className="nav-link">
                    Media Center
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item" onMouseEnter={() => toggleDropdown("contact")}>
              <button className="nav-link">
                Contact <FiChevronDown className={`arrow ${activeDropdown === "contact" ? "open" : ""}`} />
              </button>
              {activeDropdown === "contact" && (
                <div className="dropdown-menu">
                  <a href="/contact">Contact Us</a>
                  <a href="/support">Support</a>
                  <a href="/feedback">Feedback</a>
                </div>
              )}
            </li>
          </ul>

          <div className="navbar-actions">
            <div className="nav-search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search doctors, specialties, symptoms..."
              />
            </div>

            <a href="/login" className="login-btn">
              Login / Sign Up
            </a>

            <a href="/book" className="cta-book-btn">
              <FiCalendar size={14} /> Book Appointment
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;