import React, { useState } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiActivity, 
  FiHeart, 
  FiUsers, 
  FiMapPin, 
  FiFileText, 
  FiCheckCircle, 
  FiAlertTriangle, 
  FiArrowRight, 
  FiThermometer,
  FiArrowLeft 
} from 'react-icons/fi';

import './HomeHealthRequest.css';

const SERVICES = [
  { 
    id: 'nursing', 
    title: 'Nursing Care', 
    icon: FiActivity, 
    desc: 'In-home medical nursing and vital monitoring',
    badge: 'Medical',
    colorClass: 'teal'
  },
  { 
    id: 'lab', 
    title: 'Lab Collection', 
    icon: FiThermometer, // <-- Updated here
    desc: 'Blood, urine, or diagnostic specimen collection',
    badge: 'Diagnostics',
    colorClass: 'blue'
  },
  { 
    id: 'physio', 
    title: 'Physiotherapy', 
    icon: FiHeart, 
    desc: 'Rehabilitation and physical therapy sessions',
    badge: 'Rehab',
    colorClass: 'purple'
  },
  { 
    id: 'elderly', 
    title: 'Elderly Care', 
    icon: FiUsers, 
    desc: 'Daily assistance and specialized geriatric care',
    badge: 'Care',
    colorClass: 'red'
  }
];

export default function HomeHealthRequest() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    address: '',
    urgency: 'normal',
    notes: ''
  });
  const [status, setStatus] = useState(null);

  const handleServiceSelect = (id) => {
    setSelectedService(id);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setStatus('checking');

    setTimeout(() => {
      const isAvailable = Math.random() > 0.2;
      if (isAvailable) {
        setStatus('assigned');
      } else {
        setStatus('waitlisted'); 
      }
    }, 2000);
  };

  const selectedServiceObj = SERVICES.find(s => s.id === selectedService);

  return (
    <div className="home-health-wrapper">
      {/* Top Navbar */}
      <header className="dashboard-header">
        <div className="header-search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search services, doctors, records..." />
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <FiBell />
            <span className="badge-dot"></span>
          </button>
          <div className="user-profile-badge">
            <div className="user-avatar">P</div>
            <span className="user-name">Patient</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="dashboard-content">
        <div className="page-title-banner">
          <div>
            <h1>Home Health Care</h1>
            <p>Book professional in-person medical services delivered directly to your doorstep.</p>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleSubmit} className="home-health-layout">
            {/* Main Form Left Column */}
            <div className="main-form-column">
              
              {/* Section 1: Services */}
              <div className="dashboard-card">
                <div className="card-header">
                  <h3><span className="step-badge">1</span> Select Required Service</h3>
                </div>
                <div className="services-grid-wrapper">
                  {SERVICES.map((item) => {
                    const IconComponent = item.icon;
                    const isSelected = selectedService === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`portal-service-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(item.id)}
                      >
                        <div className="card-top">
                          <div className={`icon-box ${item.colorClass}`}>
                            <IconComponent />
                          </div>
                          <span className="category-pill">{item.badge}</span>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 2: Details */}
              <div className="dashboard-card">
                <div className="card-header">
                  <h3><span className="step-badge">2</span> Location & Clinical Notes</h3>
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <FiMapPin className="field-icon" /> Patient Delivery Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Enter complete home address (Building, Street, Area)..."
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">
                    <FiFileText className="field-icon" /> Clinical Notes / Specific Instructions
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Mention key symptoms, patient condition, or arrival instructions..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

            </div>

            {/* Sidebar Summary Right Column */}
            <div className="sidebar-column">
              <div className="dashboard-card summary-card">
                <h3>Request Summary</h3>
                <hr className="divider" />
                
                <div className="summary-item">
                  <span className="summary-label">Selected Service</span>
                  <span className="summary-value">
                    {selectedServiceObj ? selectedServiceObj.title : 'None Selected'}
                  </span>
                </div>

                <div className="summary-item">
                  <span className="summary-label">Target Address</span>
                  <span className="summary-value address-value">
                    {formData.address || 'Address pending...'}
                  </span>
                </div>

                <div className="summary-item">
                  <span className="summary-label">Dispatch Protocol</span>
                  <span className="summary-value highlight">Nearest Provider (SP 7.2)</span>
                </div>

                <button 
                  type="submit" 
                  className="dispatch-submit-btn" 
                  disabled={!selectedService || !formData.address}
                >
                  Confirm & Dispatch Staff <FiArrowRight />
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Step 2: Processing & Status */}
        {step === 2 && (
          <div className="status-container">
            <div className="dashboard-card status-card-panel">
              {status === 'checking' && (
                <div className="status-state">
                  <div className="portal-spinner"></div>
                  <h2>Locating Nearby Providers</h2>
                  <p>Searching for active, qualified field staff in your vicinity (SP 7.2)...</p>
                </div>
              )}

              {status === 'assigned' && (
                <div className="status-state success">
                  <div className="status-badge-icon success-bg">
                    <FiCheckCircle />
                  </div>
                  <h2>Field Staff Dispatched!</h2>
                  <p>A qualified provider has accepted your request using the Nearest-Available Model (SP 7.4).</p>
                  
                  <div className="tracker-timeline">
                    <div className="tracker-item completed">
                      <div className="tracker-dot"></div>
                      <span>Request Initiated</span>
                    </div>
                    <div className="tracker-item completed">
                      <div className="tracker-dot"></div>
                      <span>Staff Assigned</span>
                    </div>
                    <div className="tracker-item active">
                      <div className="tracker-dot"></div>
                      <span>Staff En Route</span>
                    </div>
                    <div className="tracker-item">
                      <div className="tracker-dot"></div>
                      <span>Vitals Logging</span>
                    </div>
                  </div>

                  <button className="secondary-action-btn" onClick={() => setStep(1)}>
                    <FiArrowLeft /> Book Another Request
                  </button>
                </div>
              )}

              {status === 'waitlisted' && (
                <div className="status-state warning">
                  <div className="status-badge-icon warning-bg">
                    <FiAlertTriangle />
                  </div>
                  <h2>No Staff Available (SP 7.3)</h2>
                  <p>All field personnel in your sector are occupied. Your ticket has been placed on priority waitlist, and a dispatcher will contact you shortly.</p>
                  <button className="secondary-action-btn" onClick={() => setStep(1)}>
                    <FiArrowLeft /> Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}