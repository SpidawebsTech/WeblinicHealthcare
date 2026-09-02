import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";
import {
  FiGrid,
  FiFileText,
  FiShoppingBag,
  FiActivity,
  FiHeart,
  FiShield,
  FiUser,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiBell,
  FiAlertCircle
} from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function DashboardLayout({ children }) {
  const [patientName, setPatientName] = useState("Patient");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="portal-container">
      <aside className="portal-sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="Weblinic Logo" className="brand-logo" />
          <h2>Weblinic</h2>
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiGrid /> Overview
          </NavLink>

          <NavLink to="/dashboard/records" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiFileText /> Medical Records
          </NavLink>

          <NavLink to="/dashboard/pharmacy" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiShoppingBag /> E-Pharmacy
          </NavLink>

          <NavLink to="/dashboard/labs" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiActivity /> Lab Diagnostics
          </NavLink>

          <NavLink to="/care" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiHeart /> Care & Emergency
          </NavLink>

          <NavLink to="/dashboard/second-opinion" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiShield /> Second Opinion
          </NavLink>

          <NavLink to="/billing-history" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiCreditCard /> Billing & Plans
          </NavLink>

          <NavLink to="/insurance/add" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiShield /> Insurance & Coverage
          </NavLink>

          <NavLink to="/settings" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <FiSettings /> Settings
          </NavLink>
        </nav>

        <div className="sidebar-emergency-card">
          <FiAlertCircle className="emergency-icon" />
          <h4>Emergency?</h4>
          <p>Book instant ambulance or blood request</p>
          <button onClick={() => navigate("/dashboard/services")}>Request Help</button>
        </div>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      <div className="portal-main flex-1">
        <header className="portal-topbar">
          <div className="topbar-left">
            <div className="portal-title-icon">
              <FiUser size={20} />
            </div>
            <h3>Patient Portal</h3>
          </div>
          <div className="topbar-right">
            <Link to="/notifications" className="icon-badge-btn" aria-label="Notifications">
              <FiBell />
              <span className="dot"></span>
            </Link>
            <div className="user-profile">
              <div className="avatar-circle">{patientName.charAt(0)}</div>
              <span className="profile-name">{patientName}</span>
            </div>
          </div>
        </header>

        <div className="portal-view-content">
          {children || <Outlet />}
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;