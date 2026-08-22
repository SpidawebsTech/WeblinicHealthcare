import React from "react";
import { 
  FiPrinter, 
  FiCheckCircle, 
  FiGlobe, 
  FiShield, 
  FiUsers, 
  FiCpu, 
  FiTrendingUp, 
  FiMail 
} from "react-icons/fi";
import "./FactSheetModel.css";

export default function FactSheetPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="factsheet-page-wrapper">
      <main className="factsheet-main-content">
        <section className="factsheet-hero">
          <div className="factsheet-hero-container">
            <div className="hero-text-content">
              <span className="factsheet-badge">Official Corporate Document • 2026</span>
              <h1>Weblinic Corporate Factsheet</h1>
              <p>
                A comprehensive overview of Weblinic's technology, impact, healthcare ecosystem, 
                and corporate operations.
              </p>
            </div>

            <div className="hero-action-box">
              <button 
                type="button" 
                className="factsheet-print-btn" 
                onClick={handlePrint}
              >
                <FiPrinter /> Print / Download PDF
              </button>
            </div>
          </div>
        </section>

        <div className="factsheet-container">
          <section className="factsheet-card">
            <h2><FiGlobe className="section-icon" /> Company Overview & Mission</h2>
            <p className="overview-lead">
              Weblinic is an AI-powered telehealth infrastructure company delivering accessible, rapid, and transparent healthcare services nationwide. 
              By seamlessly connecting virtual symptom triage, licensed medical providers, and a broad network of retail pharmacies, Weblinic streamlines patient care from diagnosis to medication delivery.
            </p>
          </section>

          <section className="factsheet-card">
            <h2><FiTrendingUp className="section-icon" /> Key Performance Metrics</h2>
            <div className="factsheet-metrics-grid">
              <div className="metric-box">
                <h4>4,000+</h4>
                <p>Partner Pharmacies</p>
              </div>
              <div className="metric-box">
                <h4>60%</h4>
                <p>Reduction in Wait Times</p>
              </div>
              <div className="metric-box">
                <h4>98.4%</h4>
                <p>Patient Satisfaction</p>
              </div>
              <div className="metric-box">
                <h4>24 / 7</h4>
                <p>Virtual Coverage</p>
              </div>
            </div>
          </section>

          <section className="factsheet-card">
            <h2><FiCpu className="section-icon" /> Core Infrastructure & Platform Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-item">
                <FiCheckCircle className="check-icon" />
                <div>
                  <strong>AI-Powered Triage Engine:</strong>
                  <p>Intelligently categorizes symptoms to route urgent cases to physicians in real time, dramatically lowering emergency waiting room loads.</p>
                </div>
              </div>

              <div className="capability-item">
                <FiCheckCircle className="check-icon" />
                <div>
                  <strong>Integrated E-Prescribing:</strong>
                  <p>Direct digital routing of verified prescriptions to over 4,000 retail and mail-order pharmacies with instant status updates.</p>
                </div>
              </div>

              <div className="capability-item">
                <FiCheckCircle className="check-icon" />
                <div>
                  <strong>Cross-Platform Ecosystem:</strong>
                  <p>Native applications across Web, iOS, and Android ensuring low-bandwidth accessibility for rural and urban patients alike.</p>
                </div>
              </div>

              <div className="capability-item">
                <FiCheckCircle className="check-icon" />
                <div>
                  <strong>Unified EHR Sync:</strong>
                  <p>Bi-directional medical record integrations allowing primary care providers to view patient consult logs effortlessly.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="factsheet-card">
            <h2><FiShield className="section-icon" /> Security, Privacy & Compliance</h2>
            <ul className="factsheet-list">
              <li>
                <FiCheckCircle className="check-icon" />
                <span><strong>HIPAA & HITECH Compliant:</strong> End-to-end 256-bit AES encryption for all consultations, media storage, and data transmissions.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span><strong>State & Federal Licensing:</strong> Network physicians are board-certified and licensed across participating jurisdictions.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span><strong>SOC2 Type II Certified:</strong> Continuous third-party auditing of cloud database infrastructure and access protocols.</span>
              </li>
            </ul>
          </section>

          <section className="factsheet-card factsheet-two-col">
            <div>
              <h3><FiUsers className="section-icon" /> Corporate Summary</h3>
              <div className="meta-list">
                <p><strong>Founded:</strong> 2024</p>
                <p><strong>Headquarters:</strong> Islamabad, Pakistan</p>
                <p><strong>Company Type:</strong> Private Telehealth Infrastructure</p>
                <p><strong>Primary Markets:</strong> Telemedicine, Digital Health, AI Triage</p>
              </div>
            </div>

            <div>
              <h3><FiMail className="section-icon" /> Media & Investor Contacts</h3>
              <div className="meta-list">
                <p><strong>Press Inquiries:</strong> press@weblinic.com</p>
                <p><strong>Investor Relations:</strong> ir@weblinic.com</p>
                <p><strong>Official Website:</strong> www.weblinic.com</p>
                <p><strong>Support:</strong> support@weblinic.com</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}