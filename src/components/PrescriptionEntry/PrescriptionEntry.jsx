import React, { useState } from 'react';
import {
  FaUserCheck,
  FaStethoscope,
  FaPills,
  FaPlus,
  FaTrashAlt,
  FaSave,
  FaCheckCircle,
  FaFileAlt
} from 'react-icons/fa';
import './PrescriptionEntry.css';

const DiagnosisPrescriptionEntry = () => {
  // Toast state
  const [saveMessage, setSaveMessage] = useState('');

  // Patient / Consultation Context State
  const [patientInfo, setPatientInfo] = useState({
    patientName: 'Sarah Jenkins',
    patientAge: '34',
    patientGender: 'Female',
    appointmentId: 'APT-98234',
    consultationType: 'Video Consultation',
    symptoms: 'Persistent dry cough, fever for 3 days, body aches.',
    vitals: 'BP: 120/80 mmHg | Temp: 101.2°F | Pulse: 88 bpm',
  });

  // Clinical Entry State
  const [diagnosis, setDiagnosis] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [labTests, setLabTests] = useState('');

  // Medicines List State
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Amoxicillin 500mg',
      dosage: '1 tablet',
      frequency: '3 times daily',
      duration: '5 days',
      instructions: 'After meals',
    },
  ]);

  // Temporary single medicine form state
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '1 tablet',
    frequency: 'Twice daily',
    duration: '5 days',
    instructions: 'After meals',
  });

  // Add new medicine to prescription
  const handleAddMedicine = (e) => {
    e.preventDefault();
    if (!newMed.name.trim()) return;

    setMedicines([
      ...medicines,
      { id: Date.now(), ...newMed }
    ]);

    // Reset form
    setNewMed({
      name: '',
      dosage: '1 tablet',
      frequency: 'Twice daily',
      duration: '5 days',
      instructions: 'After meals',
    });
  };

  // Remove medicine
  const handleRemoveMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  // Submit complete record
  const handleSavePrescription = () => {
    // API logic goes here
    setSaveMessage('Diagnosis & Prescription successfully saved!');
    setTimeout(() => {
      setSaveMessage('');
    }, 3500);
  };

  return (
    <div className="diag-container">
      {/* Top Banner */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Diagnosis & Prescription Entry</h1>
          <p>Record clinical observations, diagnose conditions, and issue official digital prescriptions.</p>
        </div>
        <button className="btn-primary-red" onClick={handleSavePrescription}>
          <FaSave style={{ marginRight: '8px' }} /> Save & Complete
        </button>
      </div>

      {/* Save Notification Toast */}
      {saveMessage && (
        <div className="save-toast-banner">
          <FaCheckCircle style={{ marginRight: '8px' }} />
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Main Grid */}
      <div className="diag-grid">
        
        {/* LEFT COLUMN: Patient Info & Clinical Notes */}
        <div className="diag-left-panel">
          
          {/* Patient Overview Card */}
          <div className="content-card">
            <div className="card-header">
              <h2>
                <FaUserCheck style={{ marginRight: '8px', color: '#003853' }} />
                Patient Overview
              </h2>
              <span className="type-badge">{patientInfo.consultationType}</span>
            </div>
            
            <div className="patient-meta-grid">
              <div className="meta-item">
                <label>Patient</label>
                <strong>{patientInfo.patientName} ({patientInfo.patientGender}, {patientInfo.patientAge}y)</strong>
              </div>
              <div className="meta-item">
                <label>Appointment ID</label>
                <strong>{patientInfo.appointmentId}</strong>
              </div>
              <div className="meta-item full-width">
                <label>Reported Symptoms</label>
                <p>{patientInfo.symptoms}</p>
              </div>
              <div className="meta-item full-width">
                <label>Recorded Vitals</label>
                <span className="vitals-pill">{patientInfo.vitals}</span>
              </div>
            </div>
          </div>

          {/* Clinical Diagnosis Card */}
          <div className="content-card">
            <div className="card-header">
              <h2>
                <FaStethoscope style={{ marginRight: '8px', color: '#003853' }} />
                Clinical Assessment & Diagnosis
              </h2>
            </div>
            
            <div className="diag-form-group">
              <label>Primary Diagnosis / Impression *</label>
              <input
                type="text"
                placeholder="e.g. Acute Upper Respiratory Tract Infection"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </div>

            <div className="diag-form-group">
              <label>Clinical Notes / Advice</label>
              <textarea
                rows="4"
                placeholder="Detail clinical findings, patient history, diet advice, or lifestyle modifications..."
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
              />
            </div>

            <div className="diag-form-group">
              <label>Recommended Lab Tests / Investigations</label>
              <input
                type="text"
                placeholder="e.g. CBC, Chest X-Ray (PA View)"
                value={labTests}
                onChange={(e) => setLabTests(e.target.value)}
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Prescription / Rx Builder */}
        <div className="diag-right-panel">
          
          <div className="content-card">
            <div className="card-header">
              <h2>
                <FaPills style={{ marginRight: '8px', color: '#003853' }} />
                Prescription (Rx)
              </h2>
            </div>

            {/* Add Medication Form */}
            <form onSubmit={handleAddMedicine} className="add-med-form">
              <div className="med-input-row">
                <div className="diag-form-group flex-2">
                  <label>Medicine Name & Strength *</label>
                  <input
                    type="text"
                    placeholder="e.g. Paracetamol 650mg"
                    value={newMed.name}
                    onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                    required
                  />
                </div>
                <div className="diag-form-group flex-1">
                  <label>Dosage</label>
                  <input
                    type="text"
                    placeholder="e.g. 1 tablet"
                    value={newMed.dosage}
                    onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                  />
                </div>
              </div>

              <div className="med-input-row">
                <div className="diag-form-group flex-1">
                  <label>Frequency</label>
                  <select
                    value={newMed.frequency}
                    onChange={(e) => setNewMed({ ...newMed, frequency: e.target.value })}
                  >
                    <option value="Once daily">Once daily (1-0-0)</option>
                    <option value="Twice daily">Twice daily (1-0-1)</option>
                    <option value="3 times daily">3 times daily (1-1-1)</option>
                    <option value="4 times daily">4 times daily</option>
                    <option value="As needed (SOS)">As needed (SOS)</option>
                  </select>
                </div>

                <div className="diag-form-group flex-1">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 days"
                    value={newMed.duration}
                    onChange={(e) => setNewMed({ ...newMed, duration: e.target.value })}
                  />
                </div>

                <div className="diag-form-group flex-1">
                  <label>Instruction</label>
                  <select
                    value={newMed.instructions}
                    onChange={(e) => setNewMed({ ...newMed, instructions: e.target.value })}
                  >
                    <option value="After meals">After meals</option>
                    <option value="Before meals">Before meals</option>
                    <option value="With food">With food</option>
                    <option value="At bedtime">At bedtime</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-action-green add-med-btn">
                <FaPlus style={{ marginRight: '6px' }} /> Add Medicine
              </button>
            </form>

            {/* Prescribed Items Table / List */}
            <div className="prescribed-list-wrapper">
              <h3>Prescribed Medications ({medicines.length})</h3>

              {medicines.length === 0 ? (
                <div className="empty-med-state">
                  <p>No medications added yet. Fill out the form above to build the prescription.</p>
                </div>
              ) : (
                <div className="med-table">
                  <div className="med-table-header">
                    <span>Medicine</span>
                    <span>Dosage</span>
                    <span>Frequency</span>
                    <span>Duration</span>
                    <span>Action</span>
                  </div>

                  {medicines.map((med) => (
                    <div key={med.id} className="med-table-row">
                      <div className="med-name-col">
                        <strong>{med.name}</strong>
                        <small>{med.instructions}</small>
                      </div>
                      <div>{med.dosage}</div>
                      <div>{med.frequency}</div>
                      <div>{med.duration}</div>
                      <div>
                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => handleRemoveMedicine(med.id)}
                          title="Remove Medicine"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DiagnosisPrescriptionEntry;