import React, { useState } from 'react';
import { 
  FaUserInjured, 
  FaStethoscope, 
  FaPills, 
  FaVial, 
  FaAmbulance, 
  FaFileMedical, 
  FaExclamationTriangle, 
  FaNotesMedical, 
  FaUserMd, 
  FaSearch,
  FaFileDownload,
  FaPlus,
  FaExchangeAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { FaUserInjured as FaPatient, FaStethoscope as FaSteth, FaPills as FaPharm, FaVial as FaLab, FaAmbulance as FaAmb, FaExclamationTriangle as FaAlert } from 'react-icons/fa';
import { MdOutlineMedicalServices, MdAssignment } from 'react-icons/md';
import './PatientRecords.css';

const mockPatients = [
  {
    id: 'PAT-99420',
    name: 'Dr. Smith',
    cnic: '12345-6789012-3',
    age: 32,
    gender: 'Female',
    bloodGroup: 'O+',
    allergies: ['Penicillin', 'Dust Mites'],
    chronicConditions: ['Asthma (Mild Persistent)'],
    activeConsultationId: 'CS-88102',
    records: [
      {
        id: 'REC-101',
        category: 'Consultation',
        title: 'General Consultation & Triage',
        provider: 'Dr. Sarah Ahmed (General Physician)',
        date: '2026-08-28 10:30 AM',
        status: 'Finalized',
        details: 'Patient presented with seasonal allergies and mild fever. Wheezing absent on auscultation.',
        icdCode: 'ICD-10: J30.1',
        actions: ['View Clinical Note', 'Append Follow-up Note'],
      },
      {
        id: 'REC-102',
        category: 'Prescription',
        title: 'e-Prescription #RX-88491',
        provider: 'Dr. Sarah Ahmed',
        date: '2026-08-28 10:45 AM',
        status: 'Active Rx',
        details: '1. Cetirizine 10mg - PO once daily (10 Days)\n2. Paracetamol 500mg - PO PRN for fever',
        actions: ['Re-issue Rx', 'Download PDF'],
      },
      {
        id: 'REC-103',
        category: 'Lab Report',
        title: 'Complete Blood Count (CBC) + IgE Levels',
        provider: 'Weblinic Diagnostics',
        date: '2026-08-29 02:15 PM',
        status: 'Critical Alert',
        details: 'Eosinophil count elevated (12%). AEC: 750/mcL. Critical flag raised.',
        actions: ['Review Diagnostic PDF', 'Order Follow-up Panel'],
      },
      {
        id: 'REC-104',
        category: 'Home Health',
        title: 'Home Care Vitals Logging Visit',
        provider: 'Nurse Ayesha Khan (Home Care)',
        date: '2026-08-30 09:00 AM',
        status: 'Recorded',
        details: 'BP: 120/80 mmHg | Temp: 98.6°F | Pulse: 72 bpm | SpO2: 98%',
        actions: ['View Full Vitals Log'],
      },
      {
        id: 'REC-105',
        category: 'Ambulance',
        title: 'Emergency Transport & Handover Log',
        provider: 'Crew ID: EMS-04',
        date: '2026-08-15 11:20 PM',
        status: 'Archived',
        details: 'En-route O2 administered @ 2L/min. Patient delivered to ER in stable condition.',
        actions: ['View Handover Summary'],
      },
    ],
  },
  {
    id: 'PAT-44019',
    name: 'Ali Raza',
    cnic: '35202-1144558-9',
    age: 45,
    gender: 'Male',
    bloodGroup: 'B+',
    allergies: ['NSAIDs / Aspirin'],
    chronicConditions: ['Type 2 Diabetes', 'Hypertension'],
    activeConsultationId: null,
    records: [
      {
        id: 'REC-201',
        category: 'Consultation',
        title: 'Endocrine Follow-up Visit',
        provider: 'Dr. Tariq Mahmood (Endocrinologist)',
        date: '2026-07-12 11:00 AM',
        status: 'Finalized',
        details: 'HbA1c levels slightly improved. Adjusted Metformin dosage.',
        icdCode: 'ICD-10: E11.9',
        actions: ['View Clinical Note'],
      },
      {
        id: 'REC-202',
        category: 'Prescription',
        title: 'e-Prescription #RX-77123',
        provider: 'Dr. Tariq Mahmood',
        date: '2026-07-12 11:30 AM',
        status: 'Active Rx',
        details: '1. Metformin 1000mg - Twice daily with meals\n2. Amlodipine 5mg - Daily in morning',
        actions: ['Re-issue Rx', 'Download PDF'],
      },
      {
        id: 'REC-203',
        category: 'Lab Report',
        title: 'Fasting Blood Sugar & HbA1c',
        provider: 'Weblinic Diagnostics',
        date: '2026-07-10 08:00 AM',
        status: 'Recorded',
        details: 'HbA1c: 7.2% | Fasting Glucose: 135 mg/dL',
        actions: ['Review Diagnostic PDF'],
      },
    ],
  },
  {
    id: 'PAT-11204',
    name: 'Fatima Zahra',
    cnic: '42101-9876543-1',
    age: 28,
    gender: 'Female',
    bloodGroup: 'A+',
    allergies: ['None Reported'],
    chronicConditions: ['None'],
    activeConsultationId: 'CS-99411',
    records: [
      {
        id: 'REC-301',
        category: 'Consultation',
        title: 'Dermatology Assessment',
        provider: 'Dr. Sarah Ahmed',
        date: '2026-09-01 09:15 AM',
        status: 'Finalized',
        details: 'Evaluated topical rash on left forearm. Prescribed hydrocortisone.',
        icdCode: 'ICD-10: L30.9',
        actions: ['View Clinical Note', 'Append Follow-up Note'],
      },
    ],
  },
];

export default function DoctorPatientRecords() {
  const [patients, setPatients] = useState(mockPatients);
  const [selectedPatientId, setSelectedPatientId] = useState(mockPatients[0].id);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null); 
  const [modalInput, setModalInput] = useState('');
  const currentPatient = patients.find((p) => p.id === selectedPatientId) || patients[0];

  const filteredRecords = currentPatient.records.filter((r) => {
    const matchesTab = activeTab === 'All' || r.category.toLowerCase().includes(activeTab.toLowerCase());
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleAddClinicalNote = (e) => {
    e.preventDefault();
    if (!modalInput.trim()) return;

    const newRecord = {
      id: `REC-${Date.now().toString().slice(-3)}`,
      category: 'Consultation',
      title: 'Doctor Progress Note',
      provider: 'Dr. Current Session User',
      date: new Date().toLocaleString(),
      status: 'Finalized',
      details: modalInput,
      icdCode: 'ICD-10: General Note',
      actions: ['View Clinical Note'],
    };

    setPatients(prev => prev.map(p => {
      if (p.id === currentPatient.id) {
        return { ...p, records: [newRecord, ...p.records] };
      }
      return p;
    }));

    setModalInput('');
    setActiveModal(null);
  };

  const handleCreatePrescription = (e) => {
    e.preventDefault();
    if (!modalInput.trim()) return;

    const newRecord = {
      id: `REC-${Date.now().toString().slice(-3)}`,
      category: 'Prescription',
      title: `e-Prescription #RX-${Math.floor(10000 + Math.random() * 90000)}`,
      provider: 'Dr. Current Session User',
      date: new Date().toLocaleString(),
      status: 'Active Rx',
      details: modalInput,
      actions: ['Re-issue Rx', 'Download PDF'],
    };

    setPatients(prev => prev.map(p => {
      if (p.id === currentPatient.id) {
        return { ...p, records: [newRecord, ...p.records] };
      }
      return p;
    }));

    setModalInput('');
    setActiveModal(null);
  };

  const handleOrderLab = (e) => {
    e.preventDefault();
    if (!modalInput.trim()) return;

    const newRecord = {
      id: `REC-${Date.now().toString().slice(-3)}`,
      category: 'Lab Report',
      title: `Lab Order: ${modalInput}`,
      provider: 'Weblinic Central Diagnostics',
      date: new Date().toLocaleString(),
      status: 'Pending Collection',
      details: 'Lab order generated. Pending sample collection.',
      actions: ['Review Diagnostic PDF'],
    };

    setPatients(prev => prev.map(p => {
      if (p.id === currentPatient.id) {
        return { ...p, records: [newRecord, ...p.records] };
      }
      return p;
    }));

    setModalInput('');
    setActiveModal(null);
  };

  const handleActionClick = (actionName, recordId) => {
    alert(`[SYSTEM ACTION]: "${actionName}" executed successfully for record ${recordId}. Logging audit trail under §1.2.8.`);
  };

  return (
    <div className="doc-records-container">
      <div className="patient-selector-bar">
        <div className="selector-title">
          <FaUserMd className="icon-main" />
          <span><strong>Doctor Portal</strong> — Patient Selection Queue:</span>
        </div>
        <div className="patient-chips">
          {patients.map((p) => (
            <button
              key={p.id}
              className={`chip-btn ${p.id === currentPatient.id ? 'chip-active' : ''}`}
              onClick={() => setSelectedPatientId(p.id)}
            >
              <FaPatient /> {p.name} ({p.id})
            </button>
          ))}
        </div>
      </div>

      {currentPatient.activeConsultationId && (
        <div className="active-session-bar">
          <div className="session-info">
            <span className="live-indicator"><FaCheckCircle /> LIVE VISIT IN PROGRESS</span>
            <span><strong>Consultation ID:</strong> {currentPatient.activeConsultationId}</span>
          </div>
          <div className="session-actions">
            <button className="btn-session-primary" onClick={() => setActiveModal('prescription')}>
              <MdAssignment /> Issue Prescription
            </button>
            <button className="btn-session-secondary" onClick={() => setActiveModal('lab')}>
              <FaLab /> Order Lab Test
            </button>
          </div>
        </div>
      )}

      <header className="doc-patient-banner">
        <div className="patient-main-info">
          <h1 className="patient-name">
            {currentPatient.name} <span className="patient-id">({currentPatient.id})</span>
          </h1>
          <p className="patient-subtext">
            <strong>CNIC:</strong> {currentPatient.cnic} | <strong>Age/Gender:</strong> {currentPatient.age} Yrs / {currentPatient.gender} | <strong>Blood Group:</strong> {currentPatient.bloodGroup}
          </p>
        </div>
        
        <div className="clinical-tags">
          <div className="tag-group">
            <span className="tag-label">Allergies:</span>
            {currentPatient.allergies.map((allergy, i) => (
              <span key={i} className="clinical-badge badge-allergy">
                <FaAlert /> {allergy}
              </span>
            ))}
          </div>
          <div className="tag-group">
            <span className="tag-label">Chronic Conditions:</span>
            {currentPatient.chronicConditions.map((cond, i) => (
              <span key={i} className="clinical-badge badge-chronic">
                <FaSteth /> {cond}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="doc-main-layout">
        <aside className="doc-sidebar">
          <h3>Clinical Actions</h3>
          <button className="doc-btn-primary" onClick={() => setActiveModal('note')}>
            <FaPlus /> Add Progress Note
          </button>
          <button className="doc-btn-secondary" onClick={() => setActiveModal('prescription')}>
            <FaPharm /> Issue e-Prescription
          </button>
          <button className="doc-btn-secondary" onClick={() => setActiveModal('lab')}>
            <FaLab /> Order Diagnostic Lab
          </button>
          <button className="doc-btn-secondary" onClick={() => setActiveModal('refer')}>
            <FaExchangeAlt /> Refer Patient
          </button>

          <div className="search-box-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="record-search-input"
            />
          </div>

          <div className="rule-box">
            <small>
              <strong>§1.2.5 Record Update Rule:</strong> All medical notes & orders automatically append to patient record upon save.
            </small>
          </div>
        </aside>

        <main className="doc-content-area">
          <nav className="doc-tab-nav">
            {[
              { label: 'All', icon: <MdOutlineMedicalServices /> },
              { label: 'Consultation', icon: <FaSteth /> },
              { label: 'Prescription', icon: <FaPharm /> },
              { label: 'Lab Report', icon: <FaLab /> },
              { label: 'Home Health', icon: <FaNotesMedical /> },
              { label: 'Ambulance', icon: <FaAmb /> }
            ].map((tab) => (
              <button
                key={tab.label}
                className={`doc-tab-btn ${activeTab === tab.label ? 'active-doc-tab' : ''}`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.icon} <span>{tab.label === 'All' ? 'Full History' : tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="doc-timeline">
            {filteredRecords.length === 0 ? (
              <div className="no-records">
                <FaNotesMedical size={24} />
                <p>No clinical records match your current criteria.</p>
              </div>
            ) : (
              filteredRecords.map((item) => (
                <div key={item.id} className="doc-record-card">
                  <div className="doc-card-header">
                    <div>
                      <div className="category-row">
                        <span className="doc-category-tag">{item.category}</span>
                        {item.icdCode && <span className="icd-code">{item.icdCode}</span>}
                      </div>
                      <h4 className="doc-record-title">{item.title}</h4>
                      <p className="doc-record-meta">
                        <strong>Provider:</strong> {item.provider} | <strong>Date:</strong> {item.date}
                      </p>
                    </div>
                    <span
                      className={`doc-status-pill ${
                        item.status === 'Critical Alert' ? 'doc-status-critical' : 'doc-status-normal'
                      }`}
                    >
                      {item.status === 'Critical Alert' && <FaAlert />} {item.status}
                    </span>
                  </div>

                  <div className="doc-card-body">
                    <p className="doc-record-details">{item.details}</p>
                  </div>

                  <div className="doc-card-footer">
                    {item.actions.map((act, index) => (
                      <button
                        key={index}
                        className="doc-btn-action"
                        onClick={() => handleActionClick(act, item.id)}
                      >
                        <FaFileDownload /> {act}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {activeModal === 'note' && (
              <form onSubmit={handleAddClinicalNote}>
                <h3>Add Progress / Clinical Note</h3>
                <textarea
                  rows="4"
                  placeholder="Enter diagnosis details, clinical observations..."
                  value={modalInput}
                  onChange={(e) => setModalInput(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                  <button type="submit" className="btn-save">Save to Record</button>
                </div>
              </form>
            )}

            {activeModal === 'prescription' && (
              <form onSubmit={handleCreatePrescription}>
                <h3>Issue e-Prescription</h3>
                <textarea
                  rows="4"
                  placeholder="Format: 1. Medication Name - Dosage - Frequency"
                  value={modalInput}
                  onChange={(e) => setModalInput(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                  <button type="submit" className="btn-save">Issue Rx</button>
                </div>
              </form>
            )}

            {activeModal === 'lab' && (
              <form onSubmit={handleOrderLab}>
                <h3>Order Diagnostic Lab Test</h3>
                <input
                  type="text"
                  placeholder="Test Name (e.g., Lipid Profile, Liver Function Test)"
                  value={modalInput}
                  onChange={(e) => setModalInput(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                  <button type="submit" className="btn-save">Submit Lab Order</button>
                </div>
              </form>
            )}

            {activeModal === 'refer' && (
              <div>
                <h3>Initiate Patient Referral / Second Opinion</h3>
                <p>Refer <strong>{currentPatient.name}</strong> to a specialist or request second opinion review.</p>
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={() => setActiveModal(null)}>Close</button>
                  <button type="button" className="btn-save" onClick={() => {
                    alert('Referral request generated successfully.');
                    setActiveModal(null);
                  }}>Confirm Referral</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}