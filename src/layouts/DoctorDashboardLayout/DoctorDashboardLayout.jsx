import React from 'react';
import { NavLink, useNavigate, Link, Outlet } from 'react-router-dom';
import {
  FaThLarge,
  FaCalendarAlt,
  FaVideo,
  FaPrescription,
  FaFlask,
  FaUserInjured,
  FaDollarSign,
  FaUserCog,
  FaClipboardList,
  FaSignOutAlt,
  FaBell,
  FaUserMd
} from 'react-icons/fa';
import './DoctorDashboardLayout.css';
import logo from "../../assets/images/logo.png";

const DoctorDashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const navItems = [
    { name: 'Overview', path: '/doctor/dashboard', icon: <FaThLarge /> },
    { name: 'Schedule Management', path: '/doctor/schedule', icon: <FaCalendarAlt /> },
    { name: 'Consultation Room', path: '/doctor/consultation', icon: <FaVideo /> },
    { name: 'Prescription Entry', path: '/doctor/prescriptionentry', icon: <FaPrescription /> },
    { name: 'Lab Order Creation', path: '/lab-order', icon: <FaFlask /> },
    { name: 'Patient Records', path: '/records', icon: <FaUserInjured /> },
    { name: 'Earnings', path: '/earnings', icon: <FaDollarSign /> },
    { name: 'Second Opinion Queue', path: '/second-opinion-queue', icon: <FaClipboardList /> },
    { name: 'Profile & Settings', path: '/doctor-settings', icon: <FaUserCog /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dash-layout-wrapper">
      <aside className="dash-sidebar">
        <div className="dash-sidebar-logo">
          <img src={logo} alt="Weblinic Logo" className="brand-logo" />
          <h2 className="logo-text">Weblinic</h2>
        </div>

        <nav className="dash-nav-list">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `dash-nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="dash-sidebar-footer">
          <button className="btn-sidebar-logout" onClick={handleLogout}>
            <FaSignOutAlt className="logout-icon" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="dash-main-container">
        <header className="dash-top-header">
          <div className="portal-title-badge">
            <FaUserMd className="portal-icon" />
            <span>Doctor Portal</span>
          </div>

          <div className="header-right-actions">
            <Link to="/notifications" className="icon-badge-btn" title="Notifications">
              <FaBell />
              <span className="notification-dot" />
            </Link>
            <div className="user-profile-badge">
              <div className="avatar-circle">D</div>
              <span className="user-role-label">Doctor</span>
            </div>
          </div>
        </header>

        <main className="dash-content-body">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};
export default DoctorDashboardLayout;