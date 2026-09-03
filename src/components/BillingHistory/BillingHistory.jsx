import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './BillingHistory.css';
import { 
  CreditCard, 
  Download, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  FileText,
  Search,
  ChevronRight
} from 'lucide-react';

const mockInvoices = [
  {
    id: 'INV-2026-089',
    service: 'Cardiology Consultation (Dr. Sarah Ahmed)',
    date: 'Aug 12, 2026',
    dueDate: 'Aug 26, 2026',
    amount: '$150.00',
    status: 'Pending',
    category: 'Consultation'
  },
  {
    id: 'INV-2026-074',
    service: 'Complete Blood Count (CBC) & Lipid Profile',
    date: 'Jul 28, 2026',
    dueDate: 'Jul 28, 2026',
    amount: '$85.00',
    status: 'Paid',
    category: 'Lab Test'
  },
  {
    id: 'INV-2026-052',
    service: 'Prescription Medicine Delivery - Amoxicillin',
    date: 'Jul 15, 2026',
    dueDate: 'Jul 15, 2026',
    amount: '$42.50',
    status: 'Paid',
    category: 'E-Pharmacy'
  },
  {
    id: 'INV-2026-011',
    service: 'Home Nursing & Vitals Checkup',
    date: 'Jun 30, 2026',
    dueDate: 'Jun 30, 2026',
    amount: '$120.00',
    status: 'Paid',
    category: 'Home Care'
  }
];

export default function BillingPlans() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = mockInvoices.filter(inv => {
    const matchesTab = activeTab === 'All' || inv.status === activeTab;
    const matchesSearch = inv.service.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          inv.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="billing-container">
      
      {/* Overview Stat Cards */}
      <div className="billing-stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper red">
            <DollarSign className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Outstanding</span>
            <h3 className="stat-value">$150.00</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper green">
            <CheckCircle2 className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Paid (2026)</span>
            <h3 className="stat-value">$397.50</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper blue">
            <Clock className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-label">Upcoming Due Date</span>
            <h3 className="stat-value">Aug 26, 2026</h3>
          </div>
        </div>
      </div>

      {/* Grid Layout: Main Invoices Table + Side Cards */}
      <div className="billing-content-grid">
        
        {/* Left / Main Section: Invoices & History */}
        <div className="billing-main-section">
          
          {/* Unpaid / Immediate Attention Alert Banner */}
          <div className="action-required-card">
            <div className="action-header">
              <div className="action-title">
                <AlertCircle className="alert-icon" />
                <div>
                  <h4>Pending Payment Due</h4>
                  <p>Cardiology Consultation with Dr. Sarah Ahmed</p>
                </div>
              </div>
              <div className="action-amount-box">
                <span className="due-amount">$150.00</span>
                <button className="btn-pay-now">Pay Now</button>
              </div>
            </div>
          </div>

          {/* Billing History Card */}
          <div className="weblinic-card history-card">
            <div className="card-header-flex">
              <div className="card-title-group">
                <FileText className="section-icon" />
                <h3>Billing & Payment History</h3>
              </div>
              
              {/* Search Bar */}
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search invoice or service..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              {['All', 'Paid', 'Pending'].map((tab) => (
                <button 
                  key={tab} 
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab} Invoices
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Service & Details</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.length > 0 ? (
                    filteredInvoices.map((item) => (
                      <tr key={item.id}>
                        <td className="font-semibold text-dark">{item.id}</td>
                        <td>
                          <div className="service-name">{item.service}</div>
                          <span className="service-badge">{item.category}</span>
                        </td>
                        <td className="text-muted">{item.date}</td>
                        <td className="font-semibold">{item.amount}</td>
                        <td>
                          <span className={`status-pill ${item.status.toLowerCase()}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          {item.status === 'Paid' ? (
                            <button className="btn-icon-action" title="Download Receipt">
                              <Download size={16} />
                              <span>Receipt</span>
                            </button>
                          ) : (
                            <button className="btn-table-pay">Pay</button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-records">No invoices found matching your criteria.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section: Saved Cards & Coverage */}
        <div className="billing-sidebar-section">
          
          {/* Payment Methods Card */}
          <div className="weblinic-card">
            <div className="card-header-flex border-bottom">
              <h3>Payment Methods</h3>
              <button className="btn-text-action">
                <Plus size={16} /> Add
              </button>
            </div>

            <div className="payment-methods-list">
              <div className="payment-method-item active-card">
                <div className="card-brand visa">VISA</div>
                <div className="card-details">
                  <p className="card-number">•••• •••• •••• 4242</p>
                  <span className="card-expiry">Expires 12/28</span>
                </div>
                <span className="default-badge">Primary</span>
              </div>

              <div className="payment-method-item">
                <div className="card-brand mc">MC</div>
                <div className="card-details">
                  <p className="card-number">•••• •••• •••• 8819</p>
                  <span className="card-expiry">Expires 09/27</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Membership Info */}
          <div className="weblinic-card insurance-summary-card">
            <div className="insurance-header">
              <span className="insurance-tag">Active Plan</span>
              <h4>Plus Membership</h4>
            </div>
            <div className="insurance-info">
              <p>Consultations left: <span>3 of 5</span></p>
              <p>Renews: <span>Sep 12, 2026</span></p>
            </div>
            <Link to="/my-membership" className="insurance-link">
              View My Membership <ChevronRight size={16} />
            </Link> 
          </div>

          {/* Quick Insurance Info */}
          <div className="weblinic-card insurance-summary-card">
            <div className="insurance-header">
              <span className="insurance-tag">Active Coverage</span>
              <h4>State Health Insurance</h4>
            </div>
            <div className="insurance-info">
              <p>Policy ID: <span>#HLT-9902-X1</span></p>
              <p>Coverage Limit: <span>80% Covered</span></p>
            </div>
            <a href="#insurance" className="insurance-link">
              View Insurance & Claims <ChevronRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}