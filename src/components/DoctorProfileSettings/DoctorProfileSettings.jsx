import React, { useState } from 'react';
import { 
  FaUserMd, 
  FaGraduationCap, 
  FaStethoscope, 
  FaMoneyBillWave, 
  FaClock, 
  FaSave, 
  FaCamera, 
  FaCheckCircle, 
  FaLock, 
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { MdVerified, MdOutlineMedicalServices } from 'react-icons/md';
import './DoctorProfileSettings.css';

// Initial Mock Profile Data based on SP 2.1 & SP 2.4 requirements
const initialProfile = {
  fullName: 'Dr. Sarah Ahmed',
  pmdcId: 'PMDC-77492-P', // Pakistan Medical Commission License
  specialization: 'Cardiologist',
  subSpecialty: 'Interventional Cardiology',
  qualifications: 'MBBS, FCPS (Cardiology), Fellowship in Interventional Cardiology',
  experienceYears: 12,
  consultationFee: 2500, // PKR
  followUpFee: 1500, // PKR
  slotDuration: 15, // Minutes per slot
  phone: '+92 300 1234567',
  email: 'dr.sarah@weblinic.com',
  bio: 'Experienced Interventional Cardiologist dedicated to compassionate patient care, preventative heart care, and advanced tele-consultations.',
  hospitalAffiliation: 'Shifa International Hospital, Islamabad',
  profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
  languages: ['English', 'Urdu', 'Punjabi'],
};

export default function DoctorProfileSettings() {
  const [profile, setProfile] = useState(initialProfile);
  const [isSaved, setIsSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form Field Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Handler
  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    
    // Simulate API Call (SP 2.1 Profile Update Rule)
    setTimeout(() => {
      setSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 600);
  };

  return (
    <div className="doc-settings-container">
      {/* PAGE HEADER */}
      <div className="settings-header">
        <div>
          <h1><FaUserMd className="header-icon" /> Doctor Profile & Settings</h1>
          <p className="sub-header-text">Manage professional qualifications, specializations, consultation fees, and schedule parameters (SP 2.1, SP 2.4).</p>
        </div>
        <button 
          className="btn-save-header" 
          onClick={handleSave} 
          disabled={saving}
        >
          <FaSave /> {saving ? 'Saving...' : 'Save Profile Changes'}
        </button>
      </div>

      {/* SAVED TOAST ALERT */}
      {isSaved && (
        <div className="toast-success">
          <FaCheckCircle /> Profile details updated successfully! Audit log created under SP 2.1.
        </div>
      )}

      <form onSubmit={handleSave} className="settings-grid">
        {/* LEFT COLUMN: AVATAR & QUICK CREDENTIALS */}
        <aside className="profile-card-sidebar">
          <div className="avatar-wrapper">
            <img src={profile.profilePicture} alt={profile.fullName} className="profile-avatar" />
            <button type="button" className="btn-upload-photo" onClick={() => alert('Opening photo upload picker...')}>
              <FaCamera />
            </button>
          </div>

          <h2 className="doctor-display-name">{profile.fullName}</h2>
          <p className="doctor-spec-tag">{profile.specialization}</p>

          <div className="verification-badge">
            <MdVerified className="verified-icon" /> PMDC Verified ({profile.pmdcId})
          </div>

          <div className="sidebar-divider" />

          <div className="contact-info-list">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>{profile.email}</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>{profile.phone}</span>
            </div>
            <div className="contact-item">
              <FaGlobe className="contact-icon" />
              <span>{profile.languages.join(', ')}</span>
            </div>
          </div>

          <div className="rule-note-box">
            <small><FaLock /> <strong>SP 2.1 Security:</strong> Medical license (PMDC ID) changes require admin re-verification before public display.</small>
          </div>
        </aside>

        {/* RIGHT COLUMN: EDITABLE FORM FIELDS */}
        <main className="profile-form-main">
          {/* SECTION 1: PROFESSIONAL DETAILS (SP 2.1) */}
          <section className="form-section">
            <h3 className="section-title"><FaGraduationCap /> Qualifications & Specialization</h3>
            
            <div className="form-row-2">
              <div className="form-group">
                <label>Primary Specialization</label>
                <select name="specialization" value={profile.specialization} onChange={handleChange}>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Endocrinologist">Endocrinologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                </select>
              </div>

              <div className="form-group">
                <label>Sub-Specialty / Focus</label>
                <input 
                  type="text" 
                  name="subSpecialty" 
                  value={profile.subSpecialty} 
                  onChange={handleChange} 
                  placeholder="e.g. Interventional Cardiology"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Academic Qualifications & Degrees</label>
              <textarea 
                rows="2" 
                name="qualifications" 
                value={profile.qualifications} 
                onChange={handleChange}
                placeholder="e.g. MBBS, FCPS, MD"
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Years of Clinical Experience</label>
                <input 
                  type="number" 
                  name="experienceYears" 
                  value={profile.experienceYears} 
                  onChange={handleChange} 
                  min="1" 
                  max="60"
                />
              </div>

              <div className="form-group">
                <label>Primary Hospital / Clinic Affiliation</label>
                <input 
                  type="text" 
                  name="hospitalAffiliation" 
                  value={profile.hospitalAffiliation} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </section>

          {/* SECTION 2: CONSULTATION FEES & SLOTS (SP 2.4) */}
          <section className="form-section">
            <h3 className="section-title"><FaMoneyBillWave /> Consultation Fee & Slot Configuration</h3>
            
            <div className="form-row-3">
              <div className="form-group">
                <label>Initial Consultation Fee (PKR)</label>
                <div className="input-with-symbol">
                  <span className="currency-prefix">Rs.</span>
                  <input 
                    type="number" 
                    name="consultationFee" 
                    value={profile.consultationFee} 
                    onChange={handleChange} 
                    step="100"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Follow-up Visit Fee (PKR)</label>
                <div className="input-with-symbol">
                  <span className="currency-prefix">Rs.</span>
                  <input 
                    type="number" 
                    name="followUpFee" 
                    value={profile.followUpFee} 
                    onChange={handleChange} 
                    step="100"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Default Slot Duration</label>
                <select name="slotDuration" value={profile.slotDuration} onChange={handleChange}>
                  <option value={10}>10 Minutes</option>
                  <option value={15}>15 Minutes</option>
                  <option value={20}>20 Minutes</option>
                  <option value={30}>30 Minutes</option>
                </select>
              </div>
            </div>
          </section>

          {/* SECTION 3: BIOGRAPHY & PUBLIC PRESENTATION */}
          <section className="form-section">
            <h3 className="section-title"><MdOutlineMedicalServices /> Public Profile Biography</h3>
            
            <div className="form-group">
              <label>Doctor Bio / Summary (Visible to Patients)</label>
              <textarea 
                rows="4" 
                name="bio" 
                value={profile.bio} 
                onChange={handleChange}
                placeholder="Write a brief intro regarding your medical background and patient care philosophy..."
              />
            </div>
          </section>

          {/* FORM FOOTER ACTIONS */}
          <div className="form-actions-footer">
            <button type="submit" className="btn-save-main" disabled={saving}>
              <FaSave /> {saving ? 'Saving...' : 'Save Profile & Fee Settings'}
            </button>
          </div>
        </main>
      </form>
    </div>
  );
}