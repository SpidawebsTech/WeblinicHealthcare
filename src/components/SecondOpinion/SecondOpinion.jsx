import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {
  FiFileText,
  FiUploadCloud,
  FiUserCheck,
  FiCheckCircle,
  FiPaperclip,
  FiShield,
  FiClock,
  FiHelpCircle
} from "react-icons/fi";
import "./SecondOpinion.css";

const SPECIALISTS = [
  {
    id: 1,
    name: "Dr. Aris Thorne",
    specialty: "Orthopedic & Spine Surgery",
    hospital: "Johns Hopkins Medicine Partner",
    experience: "18+ Years Exp",
    fee: 5000,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150"
  },
  {
    id: 2,
    name: "Dr. Elena Rostova",
    specialty: "Oncology & Haematology",
    hospital: "Mayo Clinic Network",
    experience: "15+ Years Exp",
    fee: 6500,
    avatar: "https://images.unsplash.com/photo-1594824813566-820d29d4d546?w=150"
  }
];

export default function SecondOpinion() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    primaryDiagnosis: "",
    reason: "Confirm Diagnosis",
    medicalSummary: "",
    files: [],
    selectedDoctor: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const uploaded = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...uploaded] }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <DashboardLayout>
      <div className="so-container">
        {/* Header */}
        <div className="so-header">
          <div>
            <h2>Request a Second Opinion</h2>
            <p>Get expert verification on diagnoses, surgeries, and treatment plans from senior specialists.</p>
          </div>
          <div className="so-trust-badge">
            <FiShield size={18} />
            <span>100% Confidential & HIPAA Compliant</span>
          </div>
        </div>

        {/* Stepper Progress Bar */}
        <div className="so-stepper">
          <div className={`stepper-item ${step >= 1 ? "active" : ""}`}>
            <span className="step-num">1</span>
            <span className="step-label">Case Details</span>
          </div>
          <div className="stepper-line"></div>
          <div className={`stepper-item ${step >= 2 ? "active" : ""}`}>
            <span className="step-num">2</span>
            <span className="step-label">Upload Records</span>
          </div>
          <div className="stepper-line"></div>
          <div className={`stepper-item ${step >= 3 ? "active" : ""}`}>
            <span className="step-num">3</span>
            <span className="step-label">Select Specialist</span>
          </div>
        </div>

        {/* Form Body */}
        {!isSubmitted ? (
          <form className="so-form" onSubmit={handleSubmit}>
            {/* STEP 1: CASE DETAILS */}
            {step === 1 && (
              <div className="so-step-content">
                <h3>Step 1: Primary Diagnosis & Reason</h3>
                <div className="so-field">
                  <label htmlFor="primaryDiagnosis">Current Diagnosis or Recommended Treatment *</label>
                  <input
                    type="text"
                    id="primaryDiagnosis"
                    placeholder="e.g., Stage II Lumbar Disc Herniation, Recommended Surgery"
                    value={formData.primaryDiagnosis}
                    onChange={(e) => setFormData({ ...formData, primaryDiagnosis: e.target.value })}
                    required
                  />
                </div>

                <div className="so-field">
                  <label>Primary Goal for Second Opinion</label>
                  <div className="so-radio-group">
                    {["Confirm Diagnosis", "Explore Non-Surgical Alternatives", "Review Medication Plan", "Other"].map((option) => (
                      <label key={option} className="so-radio-card">
                        <input
                          type="radio"
                          name="reason"
                          value={option}
                          checked={formData.reason === option}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="so-field">
                  <label htmlFor="medicalSummary">Medical History & Current Symptoms</label>
                  <textarea
                    id="medicalSummary"
                    rows="4"
                    placeholder="Briefly describe when symptoms started, current medications, and past procedures..."
                    value={formData.medicalSummary}
                    onChange={(e) => setFormData({ ...formData, medicalSummary: e.target.value })}
                  ></textarea>
                </div>

                <div className="so-actions">
                  <div></div>
                  <button
                    type="button"
                    className="so-btn-primary"
                    disabled={!formData.primaryDiagnosis}
                    onClick={() => setStep(2)}
                  >
                    Next: Upload Records &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: UPLOAD RECORDS */}
            {step === 2 && (
              <div className="so-step-content">
                <h3>Step 2: Upload Medical Documents</h3>
                <p className="step-desc">
                  Attach relevant MRI/CT scans, pathology reports, prescription notes, or discharge summaries.
                </p>

                <div className="so-dropzone">
                  <input
                    type="file"
                    id="so-files"
                    multiple
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.dcm"
                    className="so-file-input"
                  />
                  <label htmlFor="so-files" className="so-dropzone-label">
                    <FiUploadCloud className="drop-icon" />
                    <span>Drag and drop medical reports or <strong>browse files</strong></span>
                    <small>Supports PDF, DICOM, PNG, JPG (Up to 25MB each)</small>
                  </label>
                </div>

                {formData.files.length > 0 && (
                  <div className="so-file-list">
                    <h4>Attached Files ({formData.files.length})</h4>
                    {formData.files.map((file, index) => (
                      <div key={index} className="so-file-row">
                        <span className="file-info"><FiPaperclip /> {file.name}</span>
                        <button type="button" onClick={() => removeFile(index)} className="remove-btn">&times;</button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="so-actions">
                  <button type="button" className="so-btn-secondary" onClick={() => setStep(1)}>
                    &larr; Back
                  </button>
                  <button type="button" className="so-btn-primary" onClick={() => setStep(3)}>
                    Next: Select Specialist &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SELECT SPECIALIST */}
            {step === 3 && (
              <div className="so-step-content">
                <h3>Step 3: Choose Senior Reviewer</h3>
                <div className="so-doctors-grid">
                  {SPECIALISTS.map((doc) => (
                    <div
                      key={doc.id}
                      className={`so-doc-card ${formData.selectedDoctor?.id === doc.id ? "selected" : ""}`}
                      onClick={() => setFormData({ ...formData, selectedDoctor: doc })}
                    >
                      <img src={doc.avatar} alt={doc.name} className="doc-avatar" />
                      <div className="doc-info">
                        <h4>{doc.name}</h4>
                        <span className="doc-spec">{doc.specialty}</span>
                        <small className="doc-hosp">{doc.hospital} • {doc.experience}</small>
                        <strong className="doc-fee">Rs. {doc.fee} Review Fee</strong>
                      </div>
                      <div className="doc-select-radio">
                        <input
                          type="radio"
                          name="selectedDoctor"
                          checked={formData.selectedDoctor?.id === doc.id}
                          readOnly
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="so-summary-box">
                  <FiClock className="summary-icon" />
                  <div>
                    <strong>Turnaround Time:</strong> Detailed review report delivered within 48-72 hours.
                  </div>
                </div>

                <div className="so-actions">
                  <button type="button" className="so-btn-secondary" onClick={() => setStep(2)}>
                    &larr; Back
                  </button>
                  <button
                    type="submit"
                    className="so-btn-primary"
                    disabled={!formData.selectedDoctor}
                  >
                    Submit Case for Opinion &rarr;
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* Confirmation State */
          <div className="so-success-card">
            <FiCheckCircle className="success-icon" />
            <h2>Case Submitted Successfully!</h2>
            <p>
              Your case has been securely routed to <strong>{formData.selectedDoctor?.name}</strong>. You will receive an email notification once the comprehensive opinion report is finalized.
            </p>
            <div className="success-meta">
              <span><strong>Case Ref:</strong> #SO-2026-8819</span>
              <span><strong>Estimated Completion:</strong> Within 48 Hours</span>
            </div>
            <button type="button" className="so-btn-primary" onClick={() => setIsSubmitted(false)}>
              Request Another Review
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}