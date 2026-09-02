import { useState } from "react";
import { FiAward, FiLock, FiHeart } from "react-icons/fi";
import "./OurValues.css";

const ExpandHint = ({ label }) => (
  <div className="ov-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
    {label}
  </div>
);

const CollapseHint = () => (
  <div className="ov-hint ov-collapse-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Collapse
  </div>
);

const VALUES = [
  {
    key: "quality",
    Icon: FiAward,
    title: "Quality",
    text: "Every doctor on Weblinic is PMDC-verified before they can accept a single appointment; quality of care is non-negotiable.",
  },
  {
    key: "trust",
    Icon: FiLock,
    title: "Trust",
    text: "From encrypted consultations to transparent pricing, patients always know exactly who they're seeing and what it costs.",
  },
  {
    key: "empathy",
    Icon: FiHeart,
    title: "Empathy",
    text: "Healthcare is personal. We design every interaction, from booking to consultation, around patient comfort first and foremost.",
  },
];

export default function OurValues() {
  const [qualityOpen, setQualityOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [empathyOpen, setEmpathyOpen] = useState(false);

  const cardState = {
    quality: [qualityOpen, setQualityOpen],
    trust: [trustOpen, setTrustOpen],
    empathy: [empathyOpen, setEmpathyOpen],
  };

  return (
    <section className="ov-section">
      <div className="ov-header">
        <div className="ov-divider-row">
          <div className="ov-divider-line" />
          <div className="ov-divider-dot" />
          <div className="ov-divider-line" />
        </div>
        <h2>What we stand for</h2>
        <p>Three principles guide every decision we make.</p>
      </div>

      <div className="ov-grid">
        {VALUES.map(({ key, Icon, title, text }) => {
          const [isOpen, setIsOpen] = cardState[key];
          return (
            <div
              key={key}
              onClick={() => setIsOpen((v) => !v)}
              className={`ov-card ${isOpen ? "open" : ""}`}
            >
              <div className={`ov-collapsed ${isOpen ? "hidden" : ""}`}>
                <div className="ov-icon-box">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <ExpandHint label="Expand" />
              </div>

              <div className={`ov-expanded ${isOpen ? "visible" : ""}`}>
                <div className="ov-icon-box">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="ov-hint-wrap">
                  <CollapseHint />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}