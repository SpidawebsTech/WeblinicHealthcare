import React from "react";
import "./DoctorCTA.css";

function DoctorCTA() {
  return (
    <div className="cta-container-section">
      <div className="cta-wrapper">
        <div className="doctor-cta-banner">
          <div className="doctor-cta-content">
            <h2 className="doctor-cta-title">Are you a doctor?</h2>
            <p className="doctor-cta-description">
              Join Weblinic's network of verified healthcare providers. Set your own
              hours, your own fee, and reach thousands of patients across Pakistan.
            </p>
          </div>
          <button className="doctor-cta-button">Join as a doctor</button>
        </div>

        <div className="health-tip-card">
          <div className="health-tip-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="heart-tip-svg"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <div className="health-tip-content">
            <span className="health-tip-label">Health tip of the day</span>
            <p className="health-tip-quote">
              "Those who think they have no time for bodily exercise will sooner or
              later have to find time for illness."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DoctorCTA;