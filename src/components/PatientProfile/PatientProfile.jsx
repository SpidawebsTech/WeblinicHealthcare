import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { FiUser, FiHeart, FiAlertTriangle, FiPhone, FiSave, FiCheckCircle, FiEdit3, FiChevronRight } from "react-icons/fi";
import "./PatientProfile.css";

function PatientProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "Noor Ul Ain",
    email: "noor@example.com",
    phone: "+92 302 9404686",
    dob: "1995-05-15",
    gender: "Female",
    bloodGroup: "O+",
    allergies: "Penicillin, Peanuts",
    chronicConditions: "Hypertension",
    emergencyContactName: "Noor Ul Ain",
    emergencyContactPhone: "+92 302 9404686",
    relation: "Single",
  });

  const [formData, setFormData] = useState({ ...profile });
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  const handleCancel = () => {
    setFormData({ ...profile }); 
    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <div className="profile-summary-card">
          <div className="summary-avatar">{profile.fullName.charAt(0)}</div>
          <div className="summary-details">
            <h2>{profile.fullName}</h2>
            <p>{profile.email} • {profile.phone}</p>
            <div className="summary-tags">
              <span className="tag blood-tag">Blood: {profile.bloodGroup}</span>
              <span className="tag gender-tag">{profile.gender}</span>
            </div>
          </div>
          {!isEditing && (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              <FiEdit3 /> Edit Profile
            </button>
          )}
        </div>

        {saved && (
          <div className="success-toast">
            <FiCheckCircle size={18} /> Profile details updated and saved!
          </div>
        )}

        <div
          onClick={() => navigate("/prescriptions")}
          style={{
            cursor: "pointer",
            background: "white",
            border: "1px solid #f1f5f9",
            borderRadius: "16px",
            padding: "20px 24px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "border-color 0.2s ease",
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>My Prescriptions</h3>
            <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "0.85rem" }}>
              View and download prescriptions issued by your doctors
            </p>
          </div>
          <FiChevronRight size={20} color="#94a3b8" />
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h3><FiUser /> Personal Information</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="input-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label>Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><FiHeart /> Medical History & Conditions</h3>
            <div className="form-grid">
              <div className="input-group full-width">
                <label><FiAlertTriangle className="alert-icon" /> Known Allergies</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="List any medication, food, or environmental allergies..."
                />
              </div>
              <div className="input-group full-width">
                <label>Chronic Conditions</label>
                <textarea
                  name="chronicConditions"
                  value={formData.chronicConditions}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="e.g. Asthma, Diabetes, Hypertension..."
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><FiPhone /> Emergency Contact</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Contact Name</label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group">
                <label>Contact Phone</label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group">
                <label>Relationship</label>
                <input
                  type="text"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="e.g. Spouse, Parent, Sibling"
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="save-btn">
                <FiSave /> Save Profile Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </DashboardLayout>
  );
}

export default PatientProfile;