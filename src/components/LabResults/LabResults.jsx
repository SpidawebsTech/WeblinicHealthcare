import React, { useState } from 'react';
import {FiCheck} from "react-icons/fi";
import './LabResults.css';

const MOCK_LAB_RESULTS = [
  {
    id: 'RES-101',
    testName: 'Complete Blood Count (CBC)',
    labName: 'Central Diagnostic Lab',
    date: '2026-08-12',
    status: 'Ready',
    hasAbnormalities: true,
    orderingDoctor: 'Dr. Sarah Jenkins',
    metrics: [
      { name: 'Hemoglobin', value: '14.2', unit: 'g/dL', range: '13.8 - 17.2', status: 'Normal' },
      { name: 'White Blood Cell (WBC)', value: '11.5', unit: 'x10^3/µL', range: '4.5 - 11.0', status: 'High' },
      { name: 'Platelets', value: '250', unit: 'x10^3/µL', range: '150 - 450', status: 'Normal' },
    ],
  },
  {
    id: 'RES-102',
    testName: 'Lipid Profile Panel',
    labName: 'Metro Health Labs',
    date: '2026-07-28',
    status: 'Ready',
    hasAbnormalities: false,
    orderingDoctor: 'Dr. Robert Chen',
    metrics: [
      { name: 'Total Cholesterol', value: '185', unit: 'mg/dL', range: '< 200', status: 'Normal' },
      { name: 'HDL Cholesterol', value: '55', unit: 'mg/dL', range: '> 40', status: 'Normal' },
      { name: 'LDL Cholesterol', value: '110', unit: 'mg/dL', range: '< 100', status: 'Normal' },
    ],
  },
  {
    id: 'RES-103',
    testName: 'Thyroid Stimulating Hormone (TSH)',
    labName: 'Central Diagnostic Lab',
    date: '2026-08-14',
    status: 'Processing',
    hasAbnormalities: false,
    orderingDoctor: 'Dr. Sarah Jenkins',
    metrics: [],
  },
];

export default function LabResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredResults = MOCK_LAB_RESULTS.filter((result) => {
    const matchesSearch =
      result.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.labName.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'READY') return matchesSearch && result.status === 'Ready';
    if (statusFilter === 'PROCESSING') return matchesSearch && result.status === 'Processing';
    if (statusFilter === 'ABNORMAL') return matchesSearch && result.hasAbnormalities;
    return matchesSearch;
  });

  return (
    <div className="lr-container">
      <div className="lr-header">
        <div>
          <h2>Lab Results & Diagnostics</h2>
          <p className="lr-subtitle">View, download, and track your clinical laboratory reports.</p>
        </div>
      </div>

      <div className="lr-controls">
        <input
          type="text"
          className="lr-search"
          placeholder="Search test name or lab..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="lr-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Reports</option>
          <option value="READY">Ready</option>
          <option value="ABNORMAL">Attention Needed (Abnormal)</option>
          <option value="PROCESSING">Processing</option>
        </select>
      </div>

      <div className="lr-list">
        {filteredResults.map((result) => (
          <div key={result.id} className="lr-card">
            <div className="lr-card-header">
              <div>
                <h3 className="lr-test-title">{result.testName}</h3>
                <span className="lr-meta">
                  {result.labName} • Ordered by {result.orderingDoctor} • {result.date}
                </span>
              </div>
              <span className={`lr-status-badge ${result.status.toLowerCase()}`}>
                {result.status}
              </span>
            </div>

            <div className="lr-card-body">
              {result.status === 'Ready' ? (
                result.hasAbnormalities ? (
                  <div className="lr-alert warning">
                    ⚠️ <strong>Attention:</strong> One or more values fall outside standard reference ranges.
                  </div>
                ) : (
                  <div className="lr-alert success">
                    <FiCheck size={20}/> All measured parameters are within standard reference ranges.
                  </div>
                )
              ) : (
                <div className="lr-alert info">
                  ⏳ Sample received. Analysis is currently in progress by the laboratory.
                </div>
              )}
            </div>

            <div className="lr-card-actions">
              {result.status === 'Ready' && (
                <>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSelectedReport(result)}
                  >
                    Quick View
                  </button>
                  <button type="button" className="btn-outline">
                    Download PDF
                  </button>
                </>
              )}
              <button type="button" className="btn-link">
                Share with Doctor
              </button>
            </div>
          </div>
        ))}

        {filteredResults.length === 0 && (
          <div className="lr-empty">No lab reports found matching your criteria.</div>
        )}
      </div>

      {selectedReport && (
        <div className="modal-overlay" onClick={() => setSelectedReport(null)}>
          <div className="modal-content lr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedReport.testName} - Summary</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setSelectedReport(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <table className="lr-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Result</th>
                    <th>Reference Range</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedReport.metrics.map((m, idx) => (
                    <tr key={idx} className={m.status !== 'Normal' ? 'row-abnormal' : ''}>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.value} {m.unit}</td>
                      <td>{m.range}</td>
                      <td>
                        <span className={`metric-badge ${m.status.toLowerCase()}`}>
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={() => setSelectedReport(null)}>
                Close
              </button>
              <button type="button" className="btn-primary">
                Download Full PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}