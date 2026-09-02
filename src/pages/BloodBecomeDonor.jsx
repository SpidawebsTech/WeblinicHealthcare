import { useState } from "react";
import { FiHeart, FiCheckCircle } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./BloodBecomeDonor.css";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodBecomeDonor() {
  const [bloodType, setBloodType] = useState("");
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return (
      <DashboardLayout>
        <div className="bbd-success-wrap">
          <div className="bbd-success-card">
            <div className="bbd-success-icon"><FiCheckCircle size={26} /></div>
            <h2>You're registered!</h2>
            <p>You'll be notified when someone nearby needs your blood type, or when a walk-in donation slot opens up.</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bbd-container">
        <h1>Become a Donor</h1>
        <p className="bbd-subtitle">Join Weblinic's voluntary donor pool, and get matched automatically with nearby requests.</p>

        <div className="bbd-grid">
          <div className="bbd-card">
            <div className="bbd-step-heading">
              <span className="bbd-step-num">1</span>
              <h3>Your Blood Type</h3>
            </div>
            <div className="bbd-type-grid">
              {BLOOD_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => setBloodType(type)}
                  className={`bbd-type-btn ${bloodType === type ? "active" : ""}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="bbd-sidebar">
            <div className="bbd-why-heading"><FiHeart size={16} /> <h3>Why donate?</h3></div>
            <div className="bbd-why-list">
              <p>One donation can help save up to 3 lives.</p>
              <p>You'll only be contacted when a compatible match is needed nearby.</p>
              <p>Eligible to donate again after 3 months.</p>
            </div>
            <button
              onClick={() => bloodType && setRegistered(true)}
              disabled={!bloodType}
              className="bbd-register-btn"
            >
              Register as Donor
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}