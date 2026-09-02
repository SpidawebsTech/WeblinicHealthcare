import React, { useState } from "react";
import {
    FiUser,
    FiLock,
    FiBell,
    FiShield,
    FiSave,
    FiSettings,
    FiEdit2,
    FiMail,
    FiCheck,
    FiPhone,
    FiCalendar,
    FiCreditCard,
    FiAlertCircle
} from "react-icons/fi";
import "./AccountSettings.css";

function AccountSettings() {
    const [activeTab, setActiveTab] = useState("profile");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [profile, setProfile] = useState({
        firstName: "Noor",
        lastName: "Ul Ain",
        email: "noor@example.com",
        phone: "+92 300 1234567",
        dob: "2004-05-15",
        cnic: "XXXXX-XXXXXXX-X",
        bloodGroup: "B+",
        emergencyContact: "+92 301 7654321"
    });

    const [notifications, setNotifications] = useState({
        appointments: true,
        prescriptions: true,
        labResults: true,
        promotions: false
    });

    const handleProfileChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setShowSuccessModal(true);
    };

    return (
        <div className="settings-page">
            <div className="settings-header">
                <div className="settings-title">
                    <FiSettings className="settings-header-icon" />

                    <div>
                        <h1>Account Settings</h1>
                        <p>
                            Manage your personal information, security and notification
                            preferences.
                        </p>
                    </div>
                </div>
            </div>

            <div className="settings-layout">
                <aside className="settings-menu">

                    <button
                        className={activeTab === "profile" ? "settings-menu-item active" : "settings-menu-item"}
                        onClick={() => setActiveTab("profile")}
                    >
                        <FiUser />
                        <span>Personal Information</span>
                    </button>

                    <button
                        className={activeTab === "medical" ? "settings-menu-item active" : "settings-menu-item"}
                        onClick={() => setActiveTab("medical")}
                    >
                        <FiShield />
                        <span>Medical Information</span>
                    </button>

                    <button
                        className={activeTab === "notifications" ? "settings-menu-item active" : "settings-menu-item"}
                        onClick={() => setActiveTab("notifications")}
                    >
                        <FiBell />
                        <span>Notifications</span>
                    </button>

                    <button
                        className={activeTab === "security" ? "settings-menu-item active" : "settings-menu-item"}
                        onClick={() => setActiveTab("security")}
                    >
                        <FiLock />
                        <span>Security</span>
                    </button>

                </aside>
                <main className="settings-content">
                    {activeTab === "profile" && (
                        <section className="settings-card">

                            <div className="settings-card-header">
                                <div className="settings-card-title">
                                    <div className="settings-header-icon">
                                        <FiUser />
                                    </div>
                                    <div>
                                        <h2>Personal Information</h2>
                                        <p>
                                            Update your basic account and contact information.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-summary">

                                <div className="profile-avatar">
                                    N
                                </div>

                                <div className="profile-summary-info">
                                    <h3>Noor Ul Ain</h3>
                                    <p>Patient Account</p>
                                </div>

                                <button className="edit-profile-btn">
                                    <FiEdit2 />
                                    Edit Profile
                                </button>

                            </div>

                            <div className="form-grid">

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={profile.firstName}
                                        onChange={handleProfileChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={profile.lastName}
                                        onChange={handleProfileChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>

                                    <div className="input-with-icon">
                                        <FiMail />
                                        <input
                                            type="email"
                                            name="email"
                                            value={profile.email}
                                            onChange={handleProfileChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>

                                    <div className="input-with-icon">
                                        <FiPhone />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={profile.phone}
                                            onChange={handleProfileChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Date of Birth</label>

                                    <div className="input-with-icon">
                                        <FiCalendar />
                                        <input
                                            type="date"
                                            name="dob"
                                            value={profile.dob}
                                            onChange={handleProfileChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>CNIC</label>

                                    <div className="input-with-icon">
                                        <FiCreditCard />
                                        <input
                                            type="text"
                                            name="cnic"
                                            value={profile.cnic}
                                            readOnly
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="settings-actions">
                                <button
                                    className="save-btn"
                                    onClick={handleSave}
                                >
                                    <FiSave />
                                    Save Changes
                                </button>

                                {showSuccessModal && (
                                    <div className="success-modal-overlay">
                                        <div className="success-modal">

                                            <div className="success-icon">
                                                <FiCheck />
                                            </div>

                                            <h2>Changes Saved Successfully</h2>

                                            <p>
                                                Your profile information has been updated successfully.
                                            </p>

                                            <button
                                                className="success-modal-btn"
                                                onClick={() => setShowSuccessModal(false)}
                                            >
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </section>
                    )}
                    {activeTab === "medical" && (
                        <section className="settings-card">
                            <div className="settings-card-header">
                                <div className="settings-card-title">
                                    <div className="settings-header-icon">
                                        <FiShield />
                                    </div>

                                    <div>
                                        <h2>Medical Information</h2>
                                        <p>
                                            Keep your important medical information up to date.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-info-grid">

                                <div className="medical-info-box">
                                    <span className="medical-label">
                                        Blood Group
                                    </span>

                                    <strong>B+</strong>
                                </div>

                                <div className="medical-info-box">
                                    <span className="medical-label">
                                        Emergency Contact
                                    </span>

                                    <strong>+92 301 7654321</strong>
                                </div>

                            </div>

                            <div className="form-group full-width">
                                <label>Allergies</label>

                                <textarea
                                    placeholder="Enter known allergies..."
                                    defaultValue="Penicillin"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Chronic Conditions</label>

                                <textarea
                                    placeholder="Enter any chronic conditions..."
                                    defaultValue="No known chronic conditions"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Emergency Contact</label>

                                <input
                                    type="text"
                                    defaultValue="+92 301 7654321"
                                />
                            </div>

                            <div className="settings-actions">
                                <button
                                    className="save-btn"
                                    onClick={handleSave}
                                >
                                    <FiSave />
                                    Save Medical Information
                                </button>
                                {showSuccessModal && (
                                    <div className="success-modal-overlay">
                                        <div className="success-modal">
                                            <div className="success-icon">
                                                ✓
                                            </div>

                                            <h2>Changes Saved Successfully!</h2>

                                            <p>
                                                Your medical information has been updated successfully.
                                            </p>

                                            <button
                                                className="success-modal-btn"
                                                onClick={() => setShowSuccessModal(false)}
                                            >
                                                OK
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>

                        </section>
                    )}

                    {activeTab === "notifications" && (
                        <section className="settings-card">
                            <div className="settings-card-header">
                                <div className="settings-card-title">
                                    <div className="settings-header-icon">
                                        <FiBell />
                                    </div>
                                    <div>
                                        <h2>Notification Preferences</h2>
                                        <p>
                                            Choose which notifications you want to receive.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="notification-list">

                                <div className="notification-item">
                                    <div>
                                        <h3>Appointment Reminders</h3>
                                        <p>
                                            Receive reminders about upcoming appointments.
                                        </p>
                                    </div>

                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={notifications.appointments}
                                            onChange={() =>
                                                setNotifications({
                                                    ...notifications,
                                                    appointments: !notifications.appointments
                                                })
                                            }
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>


                                <div className="notification-item">
                                    <div>
                                        <h3>Prescription Updates</h3>
                                        <p>
                                            Get notified when prescriptions are issued or updated.
                                        </p>
                                    </div>

                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={notifications.prescriptions}
                                            onChange={() =>
                                                setNotifications({
                                                    ...notifications,
                                                    prescriptions: !notifications.prescriptions
                                                })
                                            }
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>


                                <div className="notification-item">
                                    <div>
                                        <h3>Lab Result Notifications</h3>
                                        <p>
                                            Receive alerts when your lab results become available.
                                        </p>
                                    </div>

                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={notifications.labResults}
                                            onChange={() =>
                                                setNotifications({
                                                    ...notifications,
                                                    labResults: !notifications.labResults
                                                })
                                            }
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>


                                <div className="notification-item">
                                    <div>
                                        <h3>Offers & Promotions</h3>
                                        <p>
                                            Receive information about Weblinic offers and services.
                                        </p>
                                    </div>

                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={notifications.promotions}
                                            onChange={() =>
                                                setNotifications({
                                                    ...notifications,
                                                    promotions: !notifications.promotions
                                                })
                                            }
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                            </div>

                        </section>
                    )}
                    {activeTab === "security" && (
                        <section className="settings-card">
                            <div className="settings-card-header">
                                <div className="settings-card-title">
                                    <div className="settings-header-icon">
                                        <FiLock />
                                    </div>

                                    <div>
                                        <h2>Security</h2>
                                        <p>
                                            Manage your password and account security.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="security-warning">
                                <FiAlertCircle />

                                <div>
                                    <strong>Keep your account secure</strong>
                                    <p>
                                        Never share your password with anyone.
                                    </p>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Current Password</label>

                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>New Password</label>

                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Confirm New Password</label>

                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                />
                            </div>

                            <div className="settings-actions">
                                <button
                                    className="save-btn"
                                    onClick={() => setShowSuccessModal(true)}
                                >
                                    <FiLock />
                                    Update Password
                                </button>
                                {showSuccessModal && (
                                    <div className="success-modal-overlay">
                                        <div className="success-modal">

                                            <div className="success-icon">
                                                <FiCheck />
                                            </div>

                                            <h2>Password Updated Successfully!</h2>

                                            <p>
                                                Your password has been updated successfully.
                                            </p>

                                            <button
                                                className="success-modal-btn"
                                                onClick={() => setShowSuccessModal(false)}
                                            >
                                                OK
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>

                        </section>
                    )}

                </main>

            </div>

        </div>
    );
}

export default AccountSettings;