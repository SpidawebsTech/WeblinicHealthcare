import React, { useState } from 'react';
import {
  FaFlask,
  FaSearch,
  FaPlus,
  FaTrash,
  FaUserInjured,
  FaNotesMedical,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPaperPlane
} from 'react-icons/fa';
import './LabOrderCreation.css';

const LabOrderCreation = () => {
  const availableTests = [
    { id: 'LT-101', name: 'Complete Blood Count (CBC)', category: 'Hematology', fasting: false },
    { id: 'LT-102', name: 'Fasting Blood Sugar (FBS)', category: 'Biochemistry', fasting: true },
    { id: 'LT-103', name: 'Lipid Profile', category: 'Biochemistry', fasting: true },
    { id: 'LT-104', name: 'Liver Function Test (LFT)', category: 'Hepatology', fasting: false },
    { id: 'LT-105', name: 'Thyroid Profile (T3, T4, TSH)', category: 'Endocrinology', fasting: false },
    { id: 'LT-106', name: 'HbA1c', category: 'Endocrinology', fasting: false },
    { id: 'LT-107', name: 'Renal Function Test (RFT)', category: 'Nephrology', fasting: false },
    { id: 'LT-108', name: 'Urine Detailed Report (D/R)', category: 'Microbiology', fasting: false },
  ];

  const [patientInfo] = useState({
    id: 'PAT-8842',
    name: 'Sarah Ahmed',
    age: 34,
    gender: 'Female',
    consultationId: 'CON-9921'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTests, setSelectedTests] = useState([]);
  const [urgency, setUrgency] = useState('Routine'); 
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [diagnosisICD, setDiagnosisICD] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const filteredCatalog = availableTests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTest = (test) => {
    if (!selectedTests.some(t => t.id === test.id)) {
      setSelectedTests([...selectedTests, { ...test, instructions: '' }]);
    }
  };

  const handleRemoveTest = (testId) => {
    setSelectedTests(selectedTests.filter(t => t.id !== testId));
  };

  const handleInstructionChange = (testId, instruction) => {
    setSelectedTests(
      selectedTests.map(t => (t.id === testId ? { ...t, instructions: instruction } : t))
    );
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (selectedTests.length === 0) return;

    const payload = {
      orderId: `LO-${Math.floor(100000 + Math.random() * 900000)}`,
      patientId: patientInfo.id,
      consultationId: patientInfo.consultationId,
      tests: selectedTests,
      urgency,
      diagnosisICD,
      clinicalNotes,
      timestamp: new Date().toISOString()
    };

    console.log("Lab Order Submitted (SP 2.9):", payload);
    setOrderSubmitted(true);
  };

  const handleReset = () => {
    setSelectedTests([]);
    setClinicalNotes('');
    setDiagnosisICD('');
    setUrgency('Routine');
    setOrderSubmitted(false);
  };

  return (
    <div className="lab-order-container">
      <div className="lab-order-header">
        <div>
          <h2><FaFlask className="header-icon" /> Lab Order Creation</h2>
          <p className="subtitle">Issue diagnostic testing requests directly during or post-consultation (SP 2.9)</p>
        </div>
      </div>

      <div className="patient-context-card">
        <div className="patient-info">
          <FaUserInjured className="patient-avatar-icon" />
          <div>
            <h4>{patientInfo.name}</h4>
            <span>ID: {patientInfo.id} | {patientInfo.age} Yrs | {patientInfo.gender}</span>
          </div>
        </div>
        <div className="consult-ref">
          <span className="badge-consult">Active Consultation: #{patientInfo.consultationId}</span>
        </div>
      </div>

      {orderSubmitted ? (
        <div className="order-success-card">
          <FaCheckCircle className="success-icon" />
          <h3>Lab Order Transmitted Successfully</h3>
          <p>The order has been linked to <strong>{patientInfo.name}</strong>'s medical record and routed to the Lab Diagnostics module.</p>
          <button className="btn-primary" onClick={handleReset}>Create Another Order</button>
        </div>
      ) : (
        <form onSubmit={handleSubmitOrder} className="lab-order-grid">
          <div className="catalog-panel">
            <h3>Select Tests from Catalog</h3>
            
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search tests by name, ID, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="catalog-list">
              {filteredCatalog.map((test) => {
                const isSelected = selectedTests.some(t => t.id === test.id);
                return (
                  <div key={test.id} className={`catalog-item ${isSelected ? 'selected' : ''}`}>
                    <div className="test-details">
                      <span className="test-name">{test.name}</span>
                      <div className="test-tags">
                        <span className="tag-category">{test.category}</span>
                        {test.fasting && <span className="tag-fasting">Requires Fasting</span>}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-add-test"
                      disabled={isSelected}
                      onClick={() => handleAddTest(test)}
                    >
                      {isSelected ? 'Added' : <><FaPlus /> Add</>}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="requisition-panel">
            <h3>Diagnostic Order Summary</h3>
            <div className="selected-tests-container">
              {selectedTests.length === 0 ? (
                <div className="empty-selection">
                  <FaExclamationTriangle className="empty-icon" />
                  <p>No lab tests selected yet. Choose tests from the catalog on the left.</p>
                </div>
              ) : (
                selectedTests.map((test) => (
                  <div key={test.id} className="selected-test-row">
                    <div className="row-header">
                      <strong>{test.name}</strong>
                      <button
                        type="button"
                        className="btn-remove"
                        onClick={() => handleRemoveTest(test.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="test-instruction-input"
                      placeholder="Specific note (e.g., repeating post 12h fasting)"
                      value={test.instructions}
                      onChange={(e) => handleInstructionChange(test.id, e.target.value)}
                    />
                  </div>
                ))
              )}
            </div>

            <div className="form-group">
              <label>Urgency Level</label>
              <div className="urgency-selector">
                {['Routine', 'Urgent', 'STAT'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={`urgency-btn ${urgency === level ? `active ${level.toLowerCase()}` : ''}`}
                    onClick={() => setUrgency(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Provisional Diagnosis / ICD Code</label>
              <input
                type="text"
                placeholder="e.g. E11.9 (Type 2 diabetes mellitus without complications)"
                value={diagnosisICD}
                onChange={(e) => setDiagnosisICD(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label><FaNotesMedical /> Clinical Notes / Indications</label>
              <textarea
                rows="3"
                placeholder="Reason for ordering tests, symptoms, relevant medical history..."
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit-order"
              disabled={selectedTests.length === 0}
            >
              <FaPaperPlane /> Issue Lab Order ({selectedTests.length} Tests)
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LabOrderCreation;