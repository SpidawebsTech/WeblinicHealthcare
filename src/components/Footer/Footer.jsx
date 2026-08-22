import React from "react";
import "./Footer.css";
import {
  FiPhone,
  FiMail,
  FiClock,
  FiMapPin,
  FiSend,
  FiShield
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";
import logoImg from "../../assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-wrapper">

      <div className="footer-newsletter-banner">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get health tips, wellness guides, and Weblinic updates delivered to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address..."
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe <FiSend size={14} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-main-container">
        <div className="footer-col brand-col">
          <a href="/" className="footer-logo">
            <img src={logoImg} alt="Weblinic Logo" className="footer-logo-img" />
          </a>
          <p className="brand-description">
            Your trusted digital healthcare partner. Connecting patients with top medical specialists anywhere, anytime.
          </p>

          <div className="app-download-section">
            <span className="section-subtitle">Download Mobile App</span>
            <div className="app-buttons">
              <a href="#app-store" className="app-badge">
                <FaApple className="app-icon" />
                <div className="app-badge-text">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#play-store" className="app-badge">
                <FaGooglePlay className="app-icon" />
                <div className="app-badge-text">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/story">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
            <li> <Link to="/media">Media Center</Link> </li>
            <li><a href="/partners">Insurance Partners</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="/services/consultation">Consultation</a></li>
            <li><a href="/doctors">Find Doctors</a></li>
            <li><a href="/services/pharmacy">Pharmacy</a></li>
            <li><a href="/services/diagnostics">Diagnostics</a></li>
            <li><a href="/services/home-health">Home Health</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Patients</h4>
          <ul className="footer-links">
            <li><a href="/book">Book Appointment</a></li>
            <li><a href="/portal">Patient Portal</a></li>
            <li><a href="/records">Medical Records</a></li>
            <li><a href="/prescriptions">Prescriptions</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Doctors</h4>
          <ul className="footer-links">
            <li><a href="/doctors/join">Join Our Network</a></li>
            <li><a href="/doctors/login">Doctor Login</a></li>
            <li><a href="/cme">CME Programs</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/guidelines">Guidelines</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/chat">Live Chat</a></li>
            <li><a href="/report">Report an Issue</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="contact-info-list">
            <li>
              <FiPhone className="contact-icon" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li>
              <FaWhatsapp className="contact-icon whatsapp-icon" />
              <span>WhatsApp Support</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>support@weblinic.com</span>
            </li>
            <li>
              <FiMapPin className="contact-icon" />
              <span>123 Healthcare Blvd, Suite 400, Medical District</span>
            </li>
            <li>
              <FiClock className="contact-icon" />
              <span>Mon - Sat: 8:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="social-links-wrapper">
            <span className="section-subtitle">FOLLOW US</span>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#x" aria-label="X"><FaXTwitter /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-center-content">
            <div className="legal-links">
              <a href="/terms">Terms & Conditions</a>
              <a href="/disclaimer">Telemedicine Disclaimer</a>
              <Link to="/policies">Our Policies</Link>
            </div>
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Weblinic Healthcare Inc. All rights reserved.
            </p>
          </div>

          <div className="compliance-badge">
            <FiShield size={16} />
            <span>HIPAA & GDPR Compliant Data Encryption</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;