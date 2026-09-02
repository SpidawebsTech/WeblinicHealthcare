import React from "react";
import "./LoginBanner.css";
import { 
  FiLock, 
  FiCheckCircle, 
  FiVideo, 
  FiFileText, 
  FiActivity, 
  FiUserCheck 
} from "react-icons/fi"; 

function LoginBanner() {
  return (
    <div className="login-banner">
      {/* Subtle background decorative shapes */}
      <div className="banner-bg-circle circle-1"></div>
      <div className="banner-bg-circle circle-2"></div>

      <div className="banner-content">
        
        {/* Top Header Group */}
        <div className="banner-top-group">
          <span className="banner-tag">Weblinic Telehealth</span>
          <h1>Your health, on your terms.</h1>
          <p>
            Get instant doctor visits, diagnostics, and pharmacy delivery—all in one secure platform.
          </p>
        </div>

        {/* Visual Feature Highlights (Fills the center empty space) */}
        <div className="banner-features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FiVideo /></div>
            <div className="feature-text">
              <h4>24/7 Video Consults</h4>
              <p>Connect with specialists anytime</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FiFileText /></div>
            <div className="feature-text">
              <h4>Instant E-Prescriptions</h4>
              <p>Sent directly to your pharmacy</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FiActivity /></div>
            <div className="feature-text">
              <h4>Home Sample Collection</h4>
              <p>Book lab tests with fast results</p>
            </div>
          </div>
        </div>

        {/* Live Social Proof Badge */}
        <div className="social-proof-pill">
          <div className="online-indicator">
            <span className="pulse-dot"></span>
            <FiUserCheck className="proof-icon" />
          </div>
          <span><strong>500+ Licensed Doctors</strong> available right now</span>
        </div>

        {/* Bottom Callout & Security Badges */}
        <div className="banner-bottom-group">
          <h2>Be seen today.</h2>
          <p>
            Connect with a verified physician from home with zero waiting room hassle.
          </p>
          
          <div className="badges">
            <span className="badge-pill">
              <FiLock size={14} className="badge-icon" /> HIPAA Encrypted
            </span>
            <span className="badge-pill">
              <FiCheckCircle size={14} className="badge-icon" /> Verified Doctors Only
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginBanner;