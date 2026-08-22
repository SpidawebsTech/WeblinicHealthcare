import React, { useState } from "react";
import "./OtherPolicies.css";
import { 
  FiShieldOff, 
  FiUsers, 
  FiHeart, 
  FiCheckCircle, 
  FiLock,
  FiRefreshCw
} from "react-icons/fi";

function OtherPolicies() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="policies-wrapper">
      <section className="policies-hero">
        <div className="policies-hero-content">
          <h1>Weblinic Policies & Compliance</h1>
          <p>
            Review our organizational guidelines for safety, employee well-being, 
            data protection, refunds, and legal healthcare standards.
          </p>
        </div>
      </section>

      <div className="policies-container">
        <aside className="policies-sidebar">
          <button 
            className={`p-tab-btn ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => setActiveTab("privacy")}
          >
            <FiLock className="tab-icon" /> Privacy Policy
          </button>

          <button 
            className={`p-tab-btn ${activeTab === "refund" ? "active" : ""}`}
            onClick={() => setActiveTab("refund")}
          >
            <FiRefreshCw className="tab-icon" /> Refund & Cancellation Policy
          </button>

          <button 
            className={`p-tab-btn ${activeTab === "harassment" ? "active" : ""}`}
            onClick={() => setActiveTab("harassment")}
          >
            <FiShieldOff className="tab-icon" /> Anti-Harassment Policy
          </button>
          
          <button 
            className={`p-tab-btn ${activeTab === "employee" ? "active" : ""}`}
            onClick={() => setActiveTab("employee")}
          >
            <FiUsers className="tab-icon" /> Employee Welfare Policy
          </button>
          
          <button 
            className={`p-tab-btn ${activeTab === "patient" ? "active" : ""}`}
            onClick={() => setActiveTab("patient")}
          >
            <FiHeart className="tab-icon" /> Patient Welfare Policy
          </button>
        </aside>

        <main className="policies-content">
          {activeTab === "privacy" && (
            <div className="policy-section fade-in">
              <div className="section-header">
                <FiLock className="p-header-icon icon-blue" />
                <h2>Privacy & Data Protection Policy</h2>
              </div>
              <p className="effective-date">Last Updated: July 2026</p>

              <div className="policy-body">
                <h3>1. Information We Collect</h3>
                <p>
                  To provide seamless medical consultations and prescriptions, Weblinic collects personal 
                  identifiable information (PII) including name, contact details, medical history, lab results, 
                  and consultation recordings.
                </p>

                <h3>2. How We Protect & Store Data</h3>
                <p>
                  All patient medical records, diagnostic attachments, and communication logs are encrypted using 
                  256-bit AES encryption. We store data on fully compliant server infrastructures following strict 
                  HIPAA and GDPR privacy regulations.
                </p>

                <h3>3. Sharing of Health Information</h3>
                <ul>
                  <li><FiCheckCircle className="li-icon" /> Your data is shared strictly with your assigned doctor or specialist.</li>
                  <li><FiCheckCircle className="li-icon" /> Lab results are securely shared only with authorized partner laboratories.</li>
                  <li><FiCheckCircle className="li-icon" /> Weblinic <strong>never sells</strong> or rents patient information to third-party advertisers.</li>
                </ul>

                <h3>4. Patient Rights</h3>
                <p>
                  You have the right to request a complete copy of your health records, request corrections to inaccurate 
                  information, or ask for account deletion by emailing <strong className="accent-text">privacy@weblinic.com</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "refund" && (
            <div className="policy-section fade-in">
              <div className="section-header">
                <FiRefreshCw className="p-header-icon icon-teal" />
                <h2>Refund & Cancellation Policy</h2>
              </div>
              <p className="effective-date">Last Updated: July 2026</p>

              <div className="policy-body">
                <h3>1. Appointment Cancellations</h3>
                <p>
                  Patients can cancel or reschedule any booked teleconsultation up to <strong>2 hours prior</strong> 
                  to the scheduled doctor's appointment time without incurring any penalty charges.
                </p>

                <h3>2. Refund Eligibility Criteria</h3>
                <ul>
                  <li><FiCheckCircle className="li-icon" /> <strong>Full Refund:</strong> If a doctor cancels an appointment or fails to join the call within 15 minutes of the scheduled time.</li>
                  <li><FiCheckCircle className="li-icon" /> <strong>Full Refund:</strong> Technical errors originating from the Weblinic platform that prevent the completion of a consultation.</li>
                  <li><FiCheckCircle className="li-icon" /> <strong>Partial / Full Refund:</strong> Unresolved medical grievances evaluated under our Patient Satisfaction Guarantee.</li>
                </ul>

                <h3>3. Non-Refundable Items</h3>
                <p>
                  Consultations that have already taken place in full, dispatched prescription medications, or completed 
                  home laboratory tests are non-refundable.
                </p>

                <h3>4. Processing Timeline</h3>
                <p>
                  Approved refunds are automatically credited back to your original payment method (Credit/Debit Card, 
                  Mobile Wallet, or Bank Account) within <strong>5 to 7 business days</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "harassment" && (
            <div className="policy-section fade-in">
              <div className="section-header">
                <FiShieldOff className="p-header-icon icon-red" />
                <h2>Anti-Harassment & Non-Discrimination Policy</h2>
              </div>
              <p className="effective-date">Last Updated: July 2026</p>

              <div className="policy-body">
                <h3>1. Zero Tolerance Standard</h3>
                <p>
                  Weblinic is committed to maintaining a workplace and healthcare environment 
                  free from harassment, intimidation, and unlawful discrimination based on race, 
                  gender, religious beliefs, disability, or sexual orientation.
                </p>

                <h3>2. Prohibited Conduct</h3>
                <ul>
                  <li><FiCheckCircle className="li-icon" /> Verbal abuse, derogatory remarks, or offensive comments.</li>
                  <li><FiCheckCircle className="li-icon" /> Unwelcome sexual advances or inappropriate physical/digital behavior.</li>
                  <li><FiCheckCircle className="li-icon" /> Bullying, intimidation, or retaliation against reporting parties.</li>
                </ul>

                <h3>3. Reporting Procedure</h3>
                <p>
                  Any patient or employee who experiences or witnesses harassment can submit a 
                  confidential report directly to our HR & Legal compliance team at 
                  <strong className="accent-text"> compliance@weblinic.com</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "employee" && (
            <div className="policy-section fade-in">
              <div className="section-header">
                <FiUsers className="p-header-icon icon-blue" />
                <h2>Employee Welfare Policy</h2>
              </div>
              <p className="effective-date">Last Updated: July 2026</p>

              <div className="policy-body">
                <h3>1. Health & Safety Support</h3>
                <p>
                  We prioritize the physical and mental health of our healthcare professionals 
                  and administrative staff. Full-time and part-time staff members are provided 
                  with comprehensive health insurance coverage and wellness benefits.
                </p>

                <h3>2. Work-Life Balance & Remote Care</h3>
                <p>
                  To prevent medical burnout among clinicians, Weblinic enforces strict shift limits 
                  and provides mental health days off to ensure doctors operate in peak mental condition.
                </p>

                <h3>3. Professional Development</h3>
                <ul>
                  <li><FiCheckCircle className="li-icon" /> Annual stipends for Continuing Medical Education (CME).</li>
                  <li><FiCheckCircle className="li-icon" /> Paid training on modern telemedicine practices.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "patient" && (
            <div className="policy-section fade-in">
              <div className="section-header">
                <FiHeart className="p-header-icon icon-teal" />
                <h2>Patient Welfare & Care Standard Policy</h2>
              </div>
              <p className="effective-date">Last Updated: July 2026</p>

              <div className="policy-body">
                <h3>1. Pro-Bono & Subsidy Policy for Underprivileged Areas</h3>
                <p>
                  Weblinic is deeply committed to healthcare equity. We offer free or fully subsidized 
                  teleconsultations for underprivileged patients residing in remote, rural, or financially 
                  backward regions who lack access to basic medical infrastructure.
                </p>

                <h3>2. Patient Privacy & HIPAA Compliance</h3>
                <p>
                  Medical records, prescriptions, and video consultation data are encrypted using 
                  military-grade 256-bit HIPAA and GDPR compliant security.
                </p>

                <h3>3. Right to Medical Grievance</h3>
                <p>
                  If a patient feels their treatment or prescription was unsatisfactory, they are entitled 
                  to a free medical review or refund under our Patient Satisfaction Guarantee.
                </p>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}

export default OtherPolicies;