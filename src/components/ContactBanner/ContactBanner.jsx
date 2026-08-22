import React from "react";
import "./ContactBanner.css";
import { FaPlay, FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function ContactBanner() {
  return (
    <section className="contact-cta-banner">
      <div className="cta-banner-container">
        <div className="cta-text-content">
          <h2>Start your journey to better health.</h2>
          <p>
            Register now in just a few steps, or download the Weblinic mobile app 
            so quality care is always just a tap away.
          </p>
        </div>
        
        <div className="cta-button-group">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="cta-btn store-btn">
            <IoLogoGooglePlaystore size={20} style={{ color: "#01875f" }} /> Google Play
          </a>

          <a 
            href="https://www.apple.com/app-store/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn primary-btn"
          >
            <FaApple className="btn-icon store-apple-icon" /> App Store
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;