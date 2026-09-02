import { useState } from "react";
import { Link } from "react-router-dom";
import { FiDroplet, FiAlertTriangle, FiMapPin } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./BloodRequestBlood.css";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodRequestBlood() {
  const [bloodType, setBloodType] = useState("");
  const [units, setUnits] = useState(1);
  const [emergency, setEmergency] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!bloodType) {
      setError("Please select a blood type.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <DashboardLayout>
        <div className="brb-success-wrap">
          <div className="brb-success-card">
            <div className="brb-success-icon"><FiDroplet size={26} /></div>
            <h2>{emergency ? "Emergency request sent" : "Request submitted"}</h2>
            <p>
              {emergency
                ? "Checking inventory and matching donors now — you'll be notified immediately."
                : "We'll notify you once inventory or a matching donor is found."}
            </p>
            <Link to="/blood/connect" className="brb-link">View matched donors →</Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="brb-container">
        <h1>Request Blood</h1>
        <p className="brb-subtitle">Submit your requirement. We'll check inventory and nearby donors.</p>
        <Link to="/blood/donate" className="brb-link">Want to donate instead? →</Link>

        <div className="brb-grid">
          <div className="brb-main-col">
            <div className="brb-card">
              <div className="brb-step-heading">
                <span className="brb-step-num">1</span>
                <h3>Blood Type Needed</h3>
              </div>
              <div className="brb-type-grid">
                {BLOOD_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBloodType(type)}
                    className={`brb-type-btn ${bloodType === type ? "active" : ""}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="brb-card">
              <div className="brb-step-heading">
                <span className="brb-step-num">2</span>
                <h3>Units & Priority</h3>
              </div>
              <label className="brb-label">Units needed</label>
              <input
                type="number"
                min={1}
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className="brb-input"
              />
              <label className="brb-emergency-check">
                <input
                  type="checkbox"
                  checked={emergency}
                  onChange={(e) => setEmergency(e.target.checked)}
                />
                <span><FiAlertTriangle size={14} /> Mark as emergency</span>
              </label>
            </div>
          </div>

          <div className="brb-sidebar">
            <h3>Request Summary</h3>
            <div className="brb-summary-rows">
              <div className="brb-summary-row"><span>Blood type</span><span>{bloodType || "—"}</span></div>
              <div className="brb-summary-row"><span>Units</span><span>{units}</span></div>
              <div className="brb-summary-row">
                <span>Priority</span>
                <span className={emergency ? "brb-emergency-text" : ""}>{emergency ? "Emergency" : "Standard"}</span>
              </div>
            </div>
            {error && <p className="brb-error">{error}</p>}
            <button onClick={handleSubmit} className="brb-submit-btn">Submit Request</button>
            <div className="brb-note">
              <FiMapPin size={13} /> Matched against partner hospitals and donors near you.
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}