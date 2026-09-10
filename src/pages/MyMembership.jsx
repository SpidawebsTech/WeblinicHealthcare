import { Link } from "react-router-dom";
import { FiClock, FiVideo, FiShoppingBag, FiThermometer, FiUsers, FiCreditCard, FiActivity } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./MyMembership.css";

const BENEFITS = [
  { icon: FiVideo, title: "5 Consultations / month", desc: "Video, audio, or in-person visits with any specialist." },
  { icon: FiShoppingBag, title: "20% Pharmacy Discount", desc: "Applied automatically at checkout on every order." },
  { icon: FiThermometer, title: "15% Lab Test Discount", desc: "Applied to catalog and doctor-ordered tests alike." },
  { icon: FiUsers, title: "Priority Support", desc: "Faster response times on all support requests." },
];

const BILLING_HISTORY = [
  { label: "1 credit used: Consultation with Dr. Mehreen Fatima", date: "Aug 2, 2026", type: "usage" },
  { label: "1 credit used: Consultation with Dr. Sana Riaz", date: "Jul 28, 2026", type: "usage" },
  { label: "Plan purchased: Plus Plan", date: "Jul 12, 2026", type: "payment", amount: "-1,999" },
  { label: "Pharmacy discount applied: Order #WEB-PH-89021", date: "Jul 10, 2026", type: "usage" },
];

export default function MyMembership() {
  return (
    <DashboardLayout>
      <div className="mm-container">
        <h1>My Membership</h1>

        <div className="mm-top-grid">
          <div className="mm-plan-card">
            <span className="mm-active-badge">ACTIVE</span>
            <h2>Plus Plan</h2>
            <p className="mm-renew-date">Renews on Sep 12, 2026</p>

            <div className="mm-credits-box">
              <div className="mm-credits-label">
                <FiActivity size={14} /> Credits Remaining
              </div>
              <div className="mm-credits-count">
                <span className="mm-credits-num">3</span>
                <span>credits remaining</span>
              </div>
              <div className="mm-credits-used">2 of 5 used this cycle</div>
              <div className="mm-progress-track">
                <div className="mm-progress-fill" style={{ width: "60%" }} />
              </div>
            </div>

            <div className="mm-discount-box">
              <div className="mm-discount-num">20%</div>
              <div className="mm-discount-label">Pharmacy discount active</div>
            </div>

            <Link to="/membership" className="mm-change-plan-btn">Change Plan</Link>
          </div>

          <div className="mm-activity-card">
            <div className="mm-activity-heading">
              <FiClock size={16} /> <h3>Recent activity</h3>
            </div>
            <div className="mm-activity-list">
              <div className="mm-activity-row"><span>Consultation used</span><span>Aug 2</span></div>
              <div className="mm-activity-row"><span>Consultation used</span><span>Jul 28</span></div>
              <div className="mm-activity-row"><span>Plan purchased</span><span>Jul 12</span></div>
            </div>
          </div>
        </div>

        <div className="mm-benefits-card">
          <h3>What's included in Plus Plan</h3>
          <div className="mm-benefits-grid">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="mm-benefit">
                <div className="mm-benefit-icon"><Icon size={16} /></div>
                <div>
                  <div className="mm-benefit-title">{title}</div>
                  <div className="mm-benefit-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mm-history-card">
          <h3>Billing & Usage History</h3>
          <div>
            {BILLING_HISTORY.map((entry, i) => (
              <div key={i} className={`mm-history-row ${i !== BILLING_HISTORY.length - 1 ? "bordered" : ""}`}>
                <div>
                  <div className="mm-history-label">{entry.label}</div>
                  <div className="mm-history-date">{entry.date}</div>
                </div>
                {entry.amount && (
                  <span className="mm-history-amount">
                    <FiCreditCard size={13} /> {entry.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}