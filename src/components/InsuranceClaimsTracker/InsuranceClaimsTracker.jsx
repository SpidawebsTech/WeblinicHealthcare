import React, { useState } from "react";
import "./InsuranceClaimsTracker.css";
import {
  FiShield,
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiPlus,
  FiChevronRight,
  FiDollarSign,
  FiArrowLeft,
  FiAlertCircle
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function InsuranceClaimsTracker() {
  const navigate = useNavigate();

  const [claims] = useState([
    {
      id: "CLM-99241",
      provider: "Jubilee Health Insurance",
      policyNo: "POL-8839201",
      service: "Cardiology Consultation & ECG",
      facility: "Weblinic Virtual Care",
      date: "Aug 10, 2026",
      totalAmount: "$250.00",
      coveredAmount: "$200.00",
      patientOutofPocket: "$50.00",
      status: "In Review",
      currentStep: 2, // 1: Submitted, 2: In Review, 3: Approved, 4: Paid
      steps: ["Submitted", "Under Review", "Approval", "Disbursed"]
    },
    {
      id: "CLM-88102",
      provider: "State Life Insurance",
      policyNo: "POL-8839201",
      service: "Complete Blood Count & Lipid Profile",
      facility: "Weblinic Diagnostics Lab",
      date: "Jul 28, 2026",
      totalAmount: "$120.00",
      coveredAmount: "$120.00",
      patientOutofPocket: "$0.00",
      status: "Approved",
      currentStep: 4,
      steps: ["Submitted", "Under Review", "Approval", "Disbursed"]
    },
    {
      id: "CLM-77319",
      provider: "Jubilee Health Insurance",
      policyNo: "POL-8839201",
      service: "Dermatology Follow-up",
      facility: "Central Clinic",
      date: "Jul 14, 2026",
      totalAmount: "$90.00",
      coveredAmount: "$0.00",
      patientOutofPocket: "$90.00",
      status: "Rejected",
      currentStep: 2,
      steps: ["Submitted", "Under Review", "Rejected", "Closed"]
    }
  ]);

  const [selectedClaim, setSelectedClaim] = useState(claims[0]);

  return (
    <div className="claims-container">
      <div className="claims-top-bar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </button>
        <button className="add-claim-btn" onClick={() => navigate("/insurance/add")}>
          <FiPlus /> Submit New Claim
        </button>
      </div>

      <div className="claims-header">
        <div className="header-badge">
          <FiShield />
        </div>
        <div>
          <h2>Insurance Claims & Coverage Tracker</h2>
          <p>Track real-time adjudication status, direct coverage payouts, and copay breakdowns.</p>
        </div>
      </div>

      <div className="claims-grid">
        <div className="claims-list-column">
          <h3 className="section-heading">Recent Claims</h3>
          <div className="claims-list">
            {claims.map((claim) => (
              <div
                key={claim.id}
                className={`claim-card ${selectedClaim.id === claim.id ? "selected" : ""}`}
                onClick={() => setSelectedClaim(claim)}
              >
                <div className="claim-card-header">
                  <span className="claim-id">{claim.id}</span>
                  <span className={`status-pill ${claim.status.toLowerCase().replace(" ", "-")}`}>
                    {claim.status === "Approved" && <FiCheckCircle />}
                    {claim.status === "In Review" && <FiClock />}
                    {claim.status === "Rejected" && <FiXCircle />}
                    {claim.status}
                  </span>
                </div>

                <h4 className="claim-title">{claim.service}</h4>
                <p className="claim-provider">{claim.provider} • {claim.date}</p>

                <div className="claim-card-footer">
                  <span className="claim-amount">Total: <strong>{claim.totalAmount}</strong></span>
                  <span className="view-detail">View Details <FiChevronRight /></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="claim-detail-column">
          <div className="detail-card">
            <div className="detail-card-header">
              <div>
                <h3>Claim #{selectedClaim.id}</h3>
                <span className="detail-sub">{selectedClaim.facility}</span>
              </div>
              <span className={`status-pill large ${selectedClaim.status.toLowerCase().replace(" ", "-")}`}>
                {selectedClaim.status}
              </span>
            </div>

            <div className="progress-tracker-box">
              <h4>Adjudication Progress</h4>
              <div className="stepper">
                {selectedClaim.steps.map((step, index) => {
                  const isCompleted = index + 1 < selectedClaim.currentStep;
                  const isCurrent = index + 1 === selectedClaim.currentStep;

                  return (
                    <div
                      key={step}
                      className={`step-item ${isCompleted ? "completed" : ""} ${isCurrent ? "active" : ""}`}
                    >
                      <div className="step-circle">
                        {isCompleted ? <FiCheckCircle /> : index + 1}
                      </div>
                      <span className="step-label">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="financial-summary">
              <h4><FiDollarSign /> Coverage Breakdown</h4>
              <div className="summary-row">
                <span>Total Billed Amount</span>
                <strong>{selectedClaim.totalAmount}</strong>
              </div>
              <div className="summary-row highlight-green">
                <span>Insurance Covered Amount</span>
                <strong>-{selectedClaim.coveredAmount}</strong>
              </div>
              <div className="summary-row total-row">
                <span>Patient Out-of-Pocket (Copay)</span>
                <strong>{selectedClaim.patientOutofPocket}</strong>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-box">
                <span className="info-label">Insurance Provider</span>
                <span className="info-value">{selectedClaim.provider}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Policy Number</span>
                <span className="info-value">{selectedClaim.policyNo}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Date of Service</span>
                <span className="info-value">{selectedClaim.date}</span>
              </div>
            </div>

            {selectedClaim.status === "Rejected" && (
              <div className="rejection-alert">
                <FiAlertCircle />
                <p>This claim was denied due to incomplete documentation. Please upload standard medical notes or contact your insurance desk.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceClaimsTracker;