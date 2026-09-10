import React, { useState } from 'react';
import './SecondOpinionQueue.css';

const initialRequests = [
  {
    id: "SO-1024",
    patientName: "Tariq Mahmood",
    patientId: "P-88412",
    originalDoctor: "Dr. Ayesha Khan (Cardiology)",
    originalDiagnosis: "Stage 2 Hypertension with Angina symptoms. Recommended Beta Blockers & lifestyle changes.",
    originalRecordUrl: "#",
    requestedDoctor: "Dr. Tariq Jameel (Cardiology)",
    appointmentSlot: "Today, 04:30 PM",
    status: "Pending Review",
    concurrenceStatus: null,
    secondOpinionNotes: "",
    revisedTreatment: ""
  },
  {
    id: "SO-1025",
    patientName: "Zainab Fatima",
    patientId: "P-33019",
    originalDoctor: "Dr. Usman Ali (Neurology)",
    originalDiagnosis: "Migraine with Aura. Prescribed Triptans.",
    originalRecordUrl: "#",
    requestedDoctor: "Dr. Sarah Ahmed (Neurology)",
    appointmentSlot: "Tomorrow, 11:00 AM",
    status: "Pending Review",
    concurrenceStatus: null,
    secondOpinionNotes: "",
    revisedTreatment: ""
  },
  {
    id: "SO-1021",
    patientName: "Bilal Hassan",
    patientId: "P-11204",
    originalDoctor: "Dr. Imran Shah (Orthopedics)",
    originalDiagnosis: "ACL Tear Grade 2. Recommended Conservative Management & Physical Therapy.",
    originalRecordUrl: "#",
    requestedDoctor: "Dr. Farhan Saeed (Orthopedics)",
    appointmentSlot: "Yesterday, 02:00 PM",
    status: "Consolidated & Billed",
    concurrenceStatus: "Diverges",
    secondOpinionNotes: "Surgical intervention recommended due to high activity level.",
    revisedTreatment: "Arthroscopic Reconstruction Surgery"
  }
];

export default function SecondOpinionQueue() {
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [concurrence, setConcurrence] = useState("Agrees");
  const [notes, setNotes] = useState("");
  const [revisedTreatment, setRevisedTreatment] = useState("");

  const handleSelectRequest = (req) => {
    setSelectedRequest(req);
    setConcurrence(req.concurrenceStatus || "Agrees");
    setNotes(req.secondOpinionNotes || "");
    setRevisedTreatment(req.revisedTreatment || "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    const updated = requests.map((req) => {
      if (req.id === selectedRequest.id) {
        return {
          ...req,
          status: "Consolidated & Billed",
          concurrenceStatus: concurrence,
          secondOpinionNotes: notes,
          revisedTreatment: concurrence === "Diverges" ? revisedTreatment : "Original Treatment Confirmed"
        };
      }
      return req;
    });

    setRequests(updated);
    setSelectedRequest(null);
    alert(`Second Opinion Review for Request ${selectedRequest.id} has been submitted, consolidated into history, and sent to billing.`);
  };

  const filteredRequests = requests.filter((req) => {
    if (activeFilter === "Pending") return req.status === "Pending Review";
    if (activeFilter === "Completed") return req.status === "Consolidated & Billed";
    return true;
  });

  return (
    <div className="so-container">
      <header className="so-header">
        <div className="so-header-text">
          <h1>Second Opinion Review Queue</h1>
          <p>Independent Clinical Reviews & Record Consolidation</p>
        </div>
        <div className="so-header-badge">
          <span>Active Queue: {requests.filter(r => r.status === "Pending Review").length} Pending</span>
        </div>
      </header>

      <div className="so-layout">
        <section className="so-queue-list-card">
          <div className="so-list-header">
            <h3>Queue Requests</h3>
            <div className="so-filter-tabs">
              {["All", "Pending", "Completed"].map((tab) => (
                <button
                  key={tab}
                  className={`so-tab-btn ${activeFilter === tab ? "active" : ""}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="so-cards-container">
            {filteredRequests.map((req) => (
              <div
                key={req.id}
                className={`so-item-card ${selectedRequest?.id === req.id ? "selected" : ""} ${req.status === "Consolidated & Billed" ? "completed" : ""}`}
                onClick={() => handleSelectRequest(req)}
              >
                <div className="so-card-top">
                  <span className="so-req-id">{req.id}</span>
                  <span className={`so-status-badge ${req.status === "Pending Review" ? "status-pending" : "status-completed"}`}>
                    {req.status}
                  </span>
                </div>
                <h4 className="so-patient-name">{req.patientName} <span className="so-patient-id">({req.patientId})</span></h4>
                <div className="so-card-details">
                  <p><strong>Original:</strong> {req.originalDoctor}</p>
                  <p><strong>Reviewer:</strong> {req.requestedDoctor}</p>
                  <p><strong>Slot:</strong> {req.appointmentSlot}</p>
                </div>
                {req.concurrenceStatus && (
                  <div className={`so-concurrence-tag ${req.concurrenceStatus === "Agrees" ? "tag-agree" : "tag-diverge"}`}>
                     Decision: {req.concurrenceStatus}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="so-detail-card">
          {selectedRequest ? (
            <div className="so-detail-content">

              <div className="so-process-bar">
                <span className="so-step">Access Granted</span> → 
                <span className="so-step">Consultation</span> → 
                <span className="so-step active-step">Decision</span> → 
                <span className="so-step">Consolidation</span>
              </div>

              <h2>Review Case: {selectedRequest.id}</h2>
              <div className="so-original-record-box">
                <div className="so-box-header">
                  <h4>Original Diagnosis Record (Read Access Granted)</h4>
                  <a href={selectedRequest.originalRecordUrl} className="so-link-btn" target="_blank" rel="noreferrer">
                    View Full Medical History ↗
                  </a>
                </div>
                <p><strong>Doctor:</strong> {selectedRequest.originalDoctor}</p>
                <p className="so-diagnosis-text"><strong>Diagnosis:</strong> {selectedRequest.originalDiagnosis}</p>
              </div>

              {selectedRequest.status === "Pending Review" ? (
                <form onSubmit={handleFormSubmit} className="so-review-form">
                  <h3>Second Opinion Assessment</h3>

                  <div className="so-form-group">
                    <label className="so-label">Concurrence Decision (SP 13.6):</label>
                    <div className="so-radio-group">
                      <label className={`so-radio-btn ${concurrence === "Agrees" ? "selected-agree" : ""}`}>
                        <input
                          type="radio"
                          name="concurrence"
                          value="Agrees"
                          checked={concurrence === "Agrees"}
                          onChange={(e) => setConcurrence(e.target.value)}
                        />
                        Agrees (Confirms Original Diagnosis)
                      </label>
                      <label className={`so-radio-btn ${concurrence === "Diverges" ? "selected-diverge" : ""}`}>
                        <input
                          type="radio"
                          name="concurrence"
                          value="Diverges"
                          checked={concurrence === "Diverges"}
                          onChange={(e) => setConcurrence(e.target.value)}
                        />
                        Diverges (Differs / Revised Clinical View)
                      </label>
                    </div>
                  </div>

                  <div className="so-form-group">
                    <label className="so-label">Clinical Evaluation & Notes:</label>
                    <textarea
                      rows="4"
                      className="so-textarea"
                      placeholder="Enter detailed clinical rationale for this second opinion..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      required
                    />
                  </div>

                  {concurrence === "Diverges" && (
                    <div className="so-form-group animated-fade">
                      <label className="so-label label-warning">Revised Treatment / Prescription Plan (SP 13.8):</label>
                      <textarea
                        rows="3"
                        className="so-textarea textarea-warning"
                        placeholder="Detail alternative treatment, medications, or diagnostic steps required..."
                        value={revisedTreatment}
                        onChange={(e) => setRevisedTreatment(e.target.value)}
                        required
                      />
                      <small className="so-field-hint">Note: Both original and divergent diagnoses will be recorded side-by-side in the patient history.</small>
                    </div>
                  )}

                  <div className="so-action-bar">
                    <button type="submit" className="so-btn-submit">
                      Submit Review & Consolidate Record (SP 13.9 - 13.10)
                    </button>
                  </div>
                </form>
              ) : (
                /* Completed Summary View */
                <div className="so-completed-summary">
                  <div className="so-summary-banner">
                    ✔ Consultation Closed, Record Consolidated & Billed
                  </div>
                  <h3>Final Evaluation</h3>
                  <p><strong>Concurrence:</strong> {selectedRequest.concurrenceStatus}</p>
                  <p><strong>Notes:</strong> {selectedRequest.secondOpinionNotes}</p>
                  <p><strong>Plan:</strong> {selectedRequest.revisedTreatment}</p>
                </div>
              )}

            </div>
          ) : (
            <div className="so-placeholder">
              <div className="so-placeholder-icon">📋</div>
              <h3>No Case Selected</h3>
              <p>Select a second opinion request from the queue to review patient history, enter clinical decision, and consolidate records.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}