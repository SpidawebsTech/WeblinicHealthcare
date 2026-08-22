import React, { useState } from "react";
import "./PatientDashboard.css";
import {
  FiCalendar,
  FiClock,
  FiVideo,
  FiPlusCircle,
  FiFileText,
  FiActivity,
  FiShield,
  FiUser,
  FiHome,
  FiChevronRight,
  FiNavigation,
  FiAlertCircle
} from "react-icons/fi";
import { LuStethoscope, LuPill } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

function PatientDashboard() {
  const [patientName, setPatientName] = useState("Noor");
  const navigate = useNavigate();
  const [activeHomeHealthRequest] = useState({
    id: "HH-8942",
    service: "Home Nursing & Vitals Check",
    status: "Staff En Route",
    provider: "John Doe, RN",
    eta: "12 mins"
  });

  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Ahmed",
      specialty: "Cardiologist",
      date: "Today, Aug 12",
      time: "04:30 PM",
      status: "Confirmed",
      type: "Video Call",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      doctor: "Dr. Bilal Khan",
      specialty: "Dermatologist",
      date: "Tomorrow, Aug 13",
      time: "11:00 AM",
      status: "Confirmed",
      type: "In-Clinic",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop"
    }
  ]);

  return (
    <div className="patient-dashboard">
      <main className="dashboard-content">
        <section className="welcome-banner">
          <div className="welcome-text">
            <h2>Welcome Back, {patientName}! 👋</h2>
            <p>Your health is on track. You have <strong>1 appointment today</strong>.</p>
          </div>
          <button className="book-btn-accent">
            <FiPlusCircle /> Book New Appointment
          </button>
        </section>

        <section className="vitals-grid">
          <div className="vital-card">
            <div className="vital-icon pulse"><FiActivity /></div>
            <div className="vital-info">
              <span className="vital-label">Heart Rate</span>
              <span className="vital-value">72 <small>bpm</small></span>
            </div>
          </div>
          <div className="vital-card">
            <div className="vital-icon prescription"><LuPill /></div>
            <div className="vital-info">
              <span className="vital-label">Active Meds</span>
              <span className="vital-value">2 Prescriptions</span>
            </div>
          </div>
          <div className="vital-card">
            <div className="vital-icon status"><FiShield /></div>
            <div className="vital-info">
              <span className="vital-label">Account Status</span>
              <span className="vital-value status-active">Verified</span>
            </div>
          </div>
        </section>

        <div className="dashboard-main-grid">
          <div className="grid-left">
            <section className="dashboard-card">
              <div className="card-header">
                <h3><FiCalendar /> Upcoming Appointments</h3>
                <a href="#all" className="view-all-link">View All</a>
              </div>
              <div className="appointment-list">
                {appointments.map((appt) => (
                  <div key={appt.id} className="appointment-item">
                    <img src={appt.avatar} alt={appt.doctor} className="doc-avatar" />
                    <div className="appt-details">
                      <h4>{appt.doctor}</h4>
                      <p className="specialty">{appt.specialty}</p>
                      <div className="appt-time-info">
                        <span><FiCalendar /> {appt.date}</span>
                        <span><FiClock /> {appt.time}</span>
                      </div>
                    </div>
                    <div className="appt-action-zone">
                      {appt.type === "Video Call" ? (
                        <button className="join-call-btn">
                          <FiVideo /> Join Video Call
                        </button>
                      ) : (
                        <span className="clinic-tag">In-Clinic Visit</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="dashboard-card">
              <div className="card-header">
                <h3><FiFileText /> Recent Medical Records</h3>
                <a href="#records" className="view-all-link">View Files</a>
              </div>
              <div className="records-list">
                <div className="record-item">
                  <div className="record-icon"><LuPill /></div>
                  <div className="record-info">
                    <h5>Amoxicillin & Pain Relief</h5>
                    <p>Prescribed by Dr. Sarah Ahmed • Aug 02, 2026</p>
                  </div>
                  <button className="download-btn">Download PDF</button>
                </div>
                <div className="record-item">
                  <div className="record-icon lab"><FiActivity /></div>
                  <div className="record-info">
                    <h5>Complete Blood Count (CBC)</h5>
                    <p>Weblinic Diagnostics • Jul 28, 2026</p>
                  </div>
                  <button className="download-btn">View Result</button>
                </div>
              </div>
            </section>
          </div>

          <div className="grid-right">
            {activeHomeHealthRequest && (
              <section 
                className="active-request-card"
                onClick={() => navigate("/dashboard/homehealth-track")}
              >
                <div className="active-request-header">
                  <span className="live-indicator">● LIVE TRACKING</span>
                  <span className="request-id">#{activeHomeHealthRequest.id}</span>
                </div>
                <div className="active-request-body">
                  <h4>{activeHomeHealthRequest.service}</h4>
                  <p>Provider: <strong>{activeHomeHealthRequest.provider}</strong></p>
                  <div className="request-status-row">
                    <span className="status-badge en-route">
                      <FiNavigation /> {activeHomeHealthRequest.status}
                    </span>
                    <span className="eta-text">ETA: {activeHomeHealthRequest.eta}</span>
                  </div>
                </div>
                <div className="active-request-footer">
                  <span>Track visit & live vitals</span>
                  <FiChevronRight />
                </div>
              </section>
            )}

            <section className="dashboard-card quick-access-card">
              <div className="card-header">
                <h3>Quick Services Access</h3>
              </div>
              <div className="service-grid">
                <div className="service-tile red-hover">
                  <div className="service-icon red"><LuStethoscope /></div>
                  <div className="service-info">
                    <h4>Consult Doctor</h4>
                    <p>Connect with specialists online in minutes</p>
                  </div>
                  <FiChevronRight className="tile-arrow" />
                </div>

                <div className="service-tile blue-hover">
                  <div className="service-icon blue"><LuPill /></div>
                  <div className="service-info">
                    <h4>E-Pharmacy</h4>
                    <p>Order prescribed medicines to your doorstep</p>
                  </div>
                  <FiChevronRight className="tile-arrow" />
                </div>

                <div className="service-tile green-hover">
                  <div className="service-icon green"><FiActivity /></div>
                  <div className="service-info">
                    <h4>Lab Tests</h4>
                    <p>Book home sample collection effortlessly</p>
                  </div>
                  <FiChevronRight className="tile-arrow" />
                </div>

                <Link to="/dashboard/homehealth" className="service-tile teal-hover" style={{ textDecoration: 'none' }}>
                  <div className="service-icon teal"><FiHome /></div>
                  <div className="service-info">
                    <h4>Home Health</h4>
                    <p>Request in-person nursing, physio, or elderly care</p>
                  </div>
                  <FiChevronRight className="tile-arrow" />
                </Link>

                <div className="service-tile purple-hover">
                  <div className="service-icon purple"><FiUser /></div>
                  <div className="service-info">
                    <h4>Medical Records</h4>
                    <p>Manage & view your complete history</p>
                  </div>
                  <FiChevronRight className="tile-arrow" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PatientDashboard;