import React, { useState } from 'react';
import { 
  FaWallet, 
  FaHourglassHalf, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaDownload, 
  FaMoneyBillWave, 
  FaArrowUp, 
  FaSearch,
  FaFilter,
  FaUniversity,
  FaInfoCircle
} from 'react-icons/fa';
import { MdPayment, MdReceiptLong, MdHistory } from 'react-icons/md';
import './Earnings.css';

// Initial Mock Financial Data for Doctor Portal
const initialSummary = {
  monthlyEarnings: 145000,
  pendingPayout: 32500,
  nextPayoutDate: '2026-09-05',
  totalPayoutToDate: 840000,
  bankDetails: {
    bankName: 'Meezan Bank',
    accountTitle: 'Dr. Sarah Ahmed',
    accountNumber: 'PK99MEZN00012345678901',
  }
};

const initialTransactions = [
  {
    id: 'TXN-9021',
    date: '2026-09-01 10:45 AM',
    patientName: 'Jane Doe',
    consultationId: 'CS-88102',
    type: 'Video Consultation',
    grossFee: 2500,
    platformFee: 250, // 10% platform share
    netAmount: 2250,
    status: 'Pending Payout',
  },
  {
    id: 'TXN-9018',
    date: '2026-08-31 03:20 PM',
    patientName: 'Ali Raza',
    consultationId: 'CS-88094',
    type: 'Second Opinion Review',
    grossFee: 4000,
    platformFee: 400,
    netAmount: 3600,
    status: 'Pending Payout',
  },
  {
    id: 'TXN-8840',
    date: '2026-08-28 09:00 AM',
    patientName: 'Usman Khan',
    consultationId: 'CS-87910',
    type: 'Video Consultation',
    grossFee: 2500,
    platformFee: 250,
    netAmount: 2250,
    status: 'Paid',
  },
  {
    id: 'TXN-8799',
    date: '2026-08-25 04:15 PM',
    patientName: 'Fatima Zahra',
    consultationId: 'CS-87850',
    type: 'In-Person Visit',
    grossFee: 3000,
    platformFee: 300,
    netAmount: 2700,
    status: 'Paid',
  },
  {
    id: 'TXN-8650',
    date: '2026-08-20 11:30 AM',
    patientName: 'Bilal Hassan',
    consultationId: 'CS-87420',
    type: 'Video Consultation',
    grossFee: 2500,
    platformFee: 250,
    netAmount: 2250,
    status: 'Paid',
  },
];

export default function DoctorEarnings() {
  const [summary, setSummary] = useState(initialSummary);
  const [transactions] = useState(initialTransactions);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRequestingPayout, setIsRequestingPayout] = useState(false);

  // Filter transactions
  const filteredTransactions = transactions.filter((t) => {
    const matchesStatus = filterStatus === 'All' || t.status === filterStatus;
    const matchesSearch = 
      t.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.consultationId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Action: Manual Payout Request Button
  const handleRequestPayout = () => {
    if (summary.pendingPayout <= 0) {
      alert('You currently have no pending earnings available for immediate payout request.');
      return;
    }
    setIsRequestingPayout(true);
    setTimeout(() => {
      alert(`Payout request of Rs. ${summary.pendingPayout.toLocaleString()} submitted successfully! It will be deposited into your bank account on ${summary.nextPayoutDate}.`);
      setIsRequestingPayout(false);
    }, 800);
  };

  // Action: Export Statement PDF/CSV
  const handleExportStatement = () => {
    alert('Generating Monthly Earnings Statement (PDF/CSV)... Download will begin shortly.');
  };

  return (
    <div className="doc-earnings-container">
      {/* PAGE HEADER */}
      <div className="earnings-header">
        <div>
          <h1><FaWallet className="header-icon" /> Doctor Earnings & Payouts</h1>
          <p className="sub-header-text">Track monthly revenue, pending disbursements, and consultation payout history.</p>
        </div>
        <button className="btn-export" onClick={handleExportStatement}>
          <FaDownload /> Download Statement
        </button>
      </div>

      {/* 3 CORE SUMMARY CARDS (Specified in Section 3.4) */}
      <div className="earnings-summary-grid">
        {/* Card 1: Monthly Earnings */}
        <div className="summary-card card-blue">
          <div className="card-top">
            <span className="card-title">Monthly Earnings (Sep 2026)</span>
            <div className="card-icon-wrapper"><FaMoneyBillWave /></div>
          </div>
          <div className="card-value">Rs. {summary.monthlyEarnings.toLocaleString()}</div>
          <div className="card-footer-info">
            <FaArrowUp className="trend-icon" /> <span>+12.5% compared to last month</span>
          </div>
        </div>

        {/* Card 2: Pending Payout */}
        <div className="summary-card card-orange">
          <div className="card-top">
            <span className="card-title">Pending Payout</span>
            <div className="card-icon-wrapper"><FaHourglassHalf /></div>
          </div>
          <div className="card-value">Rs. {summary.pendingPayout.toLocaleString()}</div>
          <div className="card-footer-info">
            <button 
              className="btn-payout-now" 
              onClick={handleRequestPayout}
              disabled={isRequestingPayout}
            >
              {isRequestingPayout ? 'Processing...' : 'Request Early Settlement'}
            </button>
          </div>
        </div>

        {/* Card 3: Scheduled Payout Date */}
        <div className="summary-card card-green">
          <div className="card-top">
            <span className="card-title">Next Scheduled Payout Date</span>
            <div className="card-icon-wrapper"><FaCalendarAlt /></div>
          </div>
          <div className="card-value date-value">{summary.nextPayoutDate}</div>
          <div className="card-footer-info">
            <FaCheckCircle className="check-icon" /> <span>Auto-clears bi-monthly</span>
          </div>
        </div>
      </div>

      {/* BANK ACCOUNT & DISBURSEMENT INFO */}
      <div className="bank-info-banner">
        <div className="bank-details">
          <FaUniversity className="bank-icon" />
          <div>
            <strong>Disbursement Account:</strong> {summary.bankDetails.bankName} — {summary.bankDetails.accountTitle} ({summary.bankDetails.accountNumber})
          </div>
        </div>
        <div className="audit-rule">
          <FaInfoCircle /> <span><strong>P1 Rule:</strong> Platform Fee (10%) deducted automatically per consultation.</span>
        </div>
      </div>

      {/* TRANSACTIONS & PAYOUT HISTORY SECTION */}
      <div className="transactions-section">
        <div className="transactions-controls">
          <h3><MdHistory /> Consultation Earnings Breakdown</h3>

          <div className="controls-right">
            {/* Search Input */}
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search patient or Txn ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              {['All', 'Pending Payout', 'Paid'].map((status) => (
                <button
                  key={status}
                  className={`filter-btn ${filterStatus === status ? 'filter-active' : ''}`}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TRANSACTIONS TABLE */}
        <div className="table-responsive">
          <table className="earnings-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Date & Time</th>
                <th>Patient Name</th>
                <th>Consultation Type</th>
                <th>Gross Fee</th>
                <th>Platform Fee (10%)</th>
                <th>Net Earnings</th>
                <th>Payout Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan="9" className="no-data">
                    No earning records match your current filters.
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((txn) => (
                  <tr key={txn.id}>
                    <td className="font-mono"><strong>{txn.id}</strong></td>
                    <td className="text-subtle">{txn.date}</td>
                    <td><strong>{txn.patientName}</strong> <br/><small className="text-subtle">{txn.consultationId}</small></td>
                    <td><span className="type-badge">{txn.type}</span></td>
                    <td>Rs. {txn.grossFee.toLocaleString()}</td>
                    <td className="text-danger">- Rs. {txn.platformFee.toLocaleString()}</td>
                    <td className="text-success font-bold">Rs. {txn.netAmount.toLocaleString()}</td>
                    <td>
                      <span className={`status-pill ${txn.status === 'Paid' ? 'status-paid' : 'status-pending'}`}>
                        {txn.status === 'Paid' ? <FaCheckCircle /> : <FaHourglassHalf />} {txn.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn-action-view" 
                        onClick={() => alert(`Receipt details for ${txn.id}:\nGross: Rs. ${txn.grossFee}\nNet Payout: Rs. ${txn.netAmount}`)}
                      >
                        <MdReceiptLong /> View Receipt
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}