import { useState } from "react";
import { FiUsers, FiLock, FiGrid, FiTrendingUp } from "react-icons/fi";
import "./PartnershipBenefits.css";

const ExpandHint = ({ label }) => (
  <div className="pb-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
    {label}
  </div>
);

const CollapseHint = () => (
  <div className="pb-hint pb-collapse-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Collapse
  </div>
);

const BENEFITS = [
  { key: "reach", Icon: FiUsers, title: "Extended reach", text: "Connect with thousands of patients and healthcare professionals already using Weblinic." },
  { key: "trust", Icon: FiLock, title: "Verified & trusted", text: "Every partnership is vetted, keeping the platform safe and credible for patients and providers alike." },
  { key: "integration", Icon: FiGrid, title: "Seamless integration", text: "From insurance claims to referral pathways, our platform is built to plug into existing systems." },
  { key: "impact", Icon: FiTrendingUp, title: "Measurable impact", text: "Track patient outcomes and engagement through shared reporting and dashboards." },
];

export default function PartnershipBenefits() {
  const [reachOpen, setReachOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [integrationOpen, setIntegrationOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);

  const cardState = {
    reach: [reachOpen, setReachOpen],
    trust: [trustOpen, setTrustOpen],
    integration: [integrationOpen, setIntegrationOpen],
    impact: [impactOpen, setImpactOpen],
  };

  return (
    <section className="pb-section">
      <div className="pb-header">
        <div className="pb-divider-row">
          <div className="pb-divider-line" />
          <div className="pb-divider-dot" />
          <div className="pb-divider-line" />
        </div>
        <h2>Why organizations partner with Weblinic</h2>
        <p>A few reasons our partners choose to work with us.</p>
      </div>

      <div className="pb-grid">
        {BENEFITS.map(({ key, Icon, title, text }) => {
          const [isOpen, setIsOpen] = cardState[key];
          return (
            <div key={key} onClick={() => setIsOpen((v) => !v)} className={`pb-card ${isOpen ? "open" : ""}`}>
              <div className={`pb-collapsed ${isOpen ? "hidden" : ""}`}>
                <div className="pb-icon-box"><Icon size={24} /></div>
                <h3>{title}</h3>
                <ExpandHint label="Expand" />
              </div>

              <div className={`pb-expanded ${isOpen ? "visible" : ""}`}>
                <div className="pb-icon-box"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="pb-hint-wrap"><CollapseHint /></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}