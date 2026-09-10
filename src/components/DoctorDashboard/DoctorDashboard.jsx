import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaPills, 
  FaShieldAlt, 
  FaWallet, 
  FaVideo, 
  FaFileMedical, 
  FaVials, 
  FaUserMd,
  FaChevronRight 
} from 'react-icons/fa';
import {FiPlusCircle} from 'react-icons/fi';
import { Link } from "react-router-dom";
import './DoctorDashboard.css';
import DoctorDashboardLayout from "../../layouts/DoctorDashboardLayout/DoctorDashboardLayout";

const DoctorDashboard = () => {
  const [stats] = useState({
    todayAppointments: 8,
    pendingPrescriptions: 3,
    completedToday: 5,
    monthlyEarnings: '$4,250',
  });

  const [patientQueue] = useState([
    {
      id: 'APT-101',
      patientName: 'Sarah Jenkins',
      age: 34,
      gender: 'Female',
      time: '10:00 AM',
      type: 'Video Consultation',
      status: 'Ready',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: 'APT-102',
      patientName: 'Michael Chang',
      age: 45,
      gender: 'Male',
      time: '10:30 AM',
      type: 'Second Opinion',
      status: 'Waiting',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 'APT-103',
      patientName: 'Emma Watson',
      age: 29,
      gender: 'Female',
      time: '11:15 AM',
      type: 'Follow-up',
      status: 'Waiting',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  ]);

  return (
    <DoctorDashboardLayout>
    <div className="doc-dashboard">
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Welcome Back, Dr. Smith! 👋</h1>
          <p>Your practice is on track. You have <strong>{stats.todayAppointments} appointments</strong> scheduled for today.</p>
        </div>
        <Link to="/doctor/schedule" className="btn-primary-red"> 
        <FiPlusCircle/> Set Availability</Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon-bg bg-red-soft">
            <FaCalendarAlt className="icon-red" />
          </div>
          <div className="stat-details">
            <span className="stat-label">Appointments Today</span>
            <span className="stat-value">{stats.todayAppointments}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-bg bg-blue-soft">
            <FaPills className="icon-blue" />
          </div>
          <div className="stat-details">
            <span className="stat-label">Pending Prescriptions</span>
            <span className="stat-value">{stats.pendingPrescriptions}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-bg bg-green-soft">
            <FaShieldAlt className="icon-green" />
          </div>
          <div className="stat-details">
            <span className="stat-label">Completed Consults</span>
            <span className="stat-value">{stats.completedToday}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-bg bg-teal-soft">
            <FaWallet className="icon-teal" />
          </div>
          <div className="stat-details">
            <span className="stat-label">Monthly Earnings</span>
            <span className="stat-value">{stats.monthlyEarnings}</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="content-card queue-card">
          <div className="card-header">
            <h2>
              <FaCalendarAlt style={{ marginRight: '8px', color: '#003853' }} /> 
              Today's Patient Queue
            </h2>
            <button className="text-btn">View All</button>
          </div>

          <div className="patient-list">
            {patientQueue.map((patient) => (
              <div key={patient.id} className="patient-item">
                <img src={patient.avatar} alt={patient.patientName} className="patient-avatar" />
                <div className="patient-info">
                  <h4>{patient.patientName}</h4>
                  <p>{patient.type} • {patient.age} yrs, {patient.gender}</p>
                  <span className="time-text">Today, {patient.time}</span>
                </div>
                <div className="patient-actions">
                  <span className={`status-badge ${patient.status.toLowerCase()}`}>
                    {patient.status}
                  </span>
                  <button className="btn-action-green">
                    <FaVideo style={{ marginRight: '6px' }} /> Start Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card quick-actions-card">
          <h3>Quick Services Access</h3>
          
          <div className="action-tile">
            <div className="action-tile-left">
              <div className="stat-icon-bg bg-red-soft">
                <FaFileMedical className="icon-red" />
              </div>
              <div>
                <h5>Medical Records</h5>
                <p>Lookup longitudinal patient records</p>
              </div>
            </div>
            <FaChevronRight className="chevron" />
          </div>

          <div className="action-tile">
            <div className="action-tile-left">
              <div className="stat-icon-bg bg-blue-soft">
                <FaVials className="icon-blue" />
              </div>
              <div>
                <h5>Lab Diagnostics</h5>
                <p>Issue lab & imaging requests</p>
              </div>
            </div>
            <FaChevronRight className="chevron" />
          </div>

          <div className="action-tile">
            <div className="action-tile-left">
              <div className="stat-icon-bg bg-green-soft">
                <FaUserMd className="icon-green" />
              </div>
              <div>
                <h5>Second Opinion Queue</h5>
                <p>Review incoming requests</p>
              </div>
            </div>
            <FaChevronRight className="chevron" />
          </div>
        </div>
      </div>
    </div>
    </DoctorDashboardLayout>
  );
};
export default DoctorDashboard;