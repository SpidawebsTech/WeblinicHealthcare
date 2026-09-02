import React, { useState } from 'react';
import './HomeHealthTracker.css';

const HomeHealthTracker = () => {
  const [requestStatus, setRequestStatus] = useState('En-Route'); // States: 'Requested', 'Assigned', 'En-Route', 'In-Progress', 'Completed', 'Escalated'
  const [isEscalated, setIsEscalated] = useState(false);

  const steps = ['Requested', 'Staff Assigned', 'En-Route', 'In-Progress', 'Completed'];
  const currentStepIndex = steps.indexOf(requestStatus === 'Escalated' ? 'In-Progress' : requestStatus);

  const handleEscalationToggle = () => {
    if (!isEscalated) {
      setRequestStatus('Escalated');
      setIsEscalated(true);
    } else {
      setRequestStatus('In-Progress');
      setIsEscalated(false);
    }
  };

  return (
    <div className="tracker-container">
      {/* Urgent Escalation Banner */}
      {isEscalated && (
        <div className="escalation-banner">
          <div className="escalation-content">
            <span className="alert-icon">⚠️</span>
            <div>
              <strong>URGENT ESCALATION TRIGGERED</strong>
              <p>Field staff flagged an anomaly. Tele-consult requested with Dr. Sarah Jenkins.</p>
            </div>
          </div>
          <button className="resolve-btn" onClick={handleEscalationToggle}>Resolve Alert</button>
        </div>
      )}

      {/* Header Summary */}
      <div className="tracker-card header-card">
        <div>
          <span className="badge">ID: #HH-8942</span>
          <h2>Home Nursing & Vitals Check</h2>
          <p className="patient-info">Patient: <strong>Eleanor Vance</strong> | Scheduled: Today, 2:30 PM</p>
        </div>
        <div className="status-pill-container">
          <span className={`status-pill ${requestStatus.toLowerCase().replace(' ', '-')}`}>
            {requestStatus}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="tracker-card">
        <h3>Request Progress</h3>
        <div className="progress-bar-container">
          {steps.map((step, index) => (
            <div key={step} className={`progress-step ${index <= currentStepIndex ? 'active' : ''}`}>
              <div className="step-number">{index + 1}</div>
              <span className="step-label">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="tracker-grid">
        {/* Field Staff Card & Map */}
        <div className="tracker-card">
          <h3>Assigned Provider</h3>
          <div className="provider-info">
            <div className="avatar">JD</div>
            <div>
              <h4>John Doe, RN</h4>
              <p>★ 4.9 (120+ visits)</p>
              <p className="contact">📞 +1 (555) 019-2834</p>
            </div>
          </div>
          
          <div className="map-placeholder">
            <div className="map-overlay">
              <span>📍 Staff Live Location Map</span>
              <small>ETA: 12 mins</small>
            </div>
          </div>
        </div>

        {/* Live Vitals Feed */}
        <div className="tracker-card">
          <h3>Visit Notes & Vitals Feed</h3>
          <div className="vitals-grid">
            <div className="vital-item">
              <span className="vital-label">Heart Rate</span>
              <span className="vital-value">72 <small>bpm</small></span>
            </div>
            <div className="vital-item">
              <span className="vital-label">Blood Pressure</span>
              <span className="vital-value">120/80 <small>mmHg</small></span>
            </div>
            <div className="vital-item">
              <span className="vital-label">SpO2</span>
              <span className="vital-value">98%</span>
            </div>
            <div className="vital-item">
              <span className="vital-label">Temp</span>
              <span className="vital-value">98.6 <small>°F</small></span>
            </div>
          </div>
          
          <div className="notes-box">
            <strong>Provider Notes:</strong>
            <p>Patient is resting comfortably. Vitals are within normal limits. Administered routine wound care.</p>
          </div>

          <button className="escalate-trigger-btn" onClick={handleEscalationToggle}>
            {isEscalated ? 'Clear Emergency Flag' : 'Simulate Emergency Escalation'}
          </button>
        </div>
      </div>

      {/* Settlement Block */}
      <div className="tracker-card settlement-card">
        <h3>Payment & Billing Summary</h3>
        <div className="settlement-details">
          <div className="row"><span>Base Visit Fee:</span><span>$80.00</span></div>
          <div className="row"><span>Travel Allowance:</span><span>$15.00</span></div>
          <div className="row discount"><span>Membership Discount:</span><span>-$10.00</span></div>
          <hr />
          <div className="row total"><span>Total Amount:</span><span>$85.00</span></div>
        </div>
        <button className="pay-btn">Process Settlement</button>
      </div>
    </div>
  );
};

export default HomeHealthTracker;