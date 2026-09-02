import React, { useState } from "react";
import "./AddInsurancePolicy.css";
import {
  FiShield,
  FiUploadCloud,
  FiCheckCircle,
  FiArrowLeft,
  FiFileText,
  FiLock,
  FiActivity
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AddInsurancePolicy() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    providerName: "",
    policyNumber: "",
    groupNumber: "",
    primaryHolderName: "",
    relationship: "Self",
    expiryDate: ""
  });

  const [cardFront, setCardFront] = useState(null);
  const [cardBack, setCardBack] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      if (side === "front") setCardFront(file.name);
      if (side === "back") setCardBack(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="add-policy-container">
      <div className="policy-wrapper">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          <FiArrowLeft /> Back to Dashboard
        </button>

        <div className="policy-header">
          <div className="header-icon">
            <FiShield />
          </div>
          <div>
            <h2>Insurance & Coverage</h2>
            <p>Manage your health insurance plan, verify coverage, and track medical claims.</p>
          </div>
        </div>

        <div className="insurance-nav-tabs">
          <button className="tab-btn active">
            <FiShield /> Policy Information
          </button>
          <button
            type="button"
            className="tab-btn"
            onClick={() => navigate("/insurance/claims")}
          >
            <FiActivity /> View Claims & Tracker
          </button>
        </div>

        {successMsg ? (
          <div className="success-banner">
            <FiCheckCircle className="success-icon" />
            <h3>Policy Submitted Successfully!</h3>
            <p>Your insurance details are being verified. Redirecting to dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="policy-form">
            <div className="form-section">
              <h4 className="section-title"><FiFileText /> 1. Policy Details</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>Insurance Provider *</label>
                  <select
                    name="providerName"
                    value={formData.providerName}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Provider</option>
                    <option value="State Life">State Life Insurance</option>
                    <option value="Jubilee Health">Jubilee Health Insurance</option>
                    <option value="Other">Other Provider</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Policy / Member ID *</label>
                  <input
                    type="text"
                    name="policyNumber"
                    placeholder="e.g. POL-9981240"
                    value={formData.policyNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Group Number (Optional)</label>
                  <input
                    type="text"
                    name="groupNumber"
                    placeholder="e.g. G-5542"
                    value={formData.groupNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Policy Expiry Date *</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h4 className="section-title"><FiShield /> 2. Primary Cardholder Information</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>Primary Policyholder Name *</label>
                  <input
                    type="text"
                    name="primaryHolderName"
                    placeholder="Full name as printed on card"
                    value={formData.primaryHolderName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Relationship to Patient *</label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                  >
                    <option value="Self">Self</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Parent">Parent</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h4 className="section-title"><FiUploadCloud /> 3. Upload Insurance Card Images</h4>
              <p className="section-sub">Upload clear photos of your card for automatic verification.</p>
              
              <div className="upload-grid">
                <div className={`upload-box ${cardFront ? 'uploaded' : ''}`}>
                  <input
                    type="file"
                    id="card-front-input"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "front")}
                  />
                  <label htmlFor="card-front-input">
                    <FiUploadCloud className="upload-icon" />
                    <span>{cardFront ? cardFront : "Upload Card Front"}</span>
                    <small>PNG, JPG up to 5MB</small>
                  </label>
                </div>

                <div className={`upload-box ${cardBack ? 'uploaded' : ''}`}>
                  <input
                    type="file"
                    id="card-back-input"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "back")}
                  />
                  <label htmlFor="card-back-input">
                    <FiUploadCloud className="upload-icon" />
                    <span>{cardBack ? cardBack : "Upload Card Back"}</span>
                    <small>PNG, JPG up to 5MB</small>
                  </label>
                </div>
              </div>
            </div>

            <div className="security-note">
              <FiLock />
              <span>Your insurance details are encrypted and securely shared only with authorized healthcare billing providers.</span>
            </div>

            <button type="submit" className="submit-policy-btn" disabled={isSubmitting}>
              {isSubmitting ? "Verifying Policy..." : "Save & Verify Policy"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddInsurancePolicy;