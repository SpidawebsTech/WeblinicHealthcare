import { useState } from "react";
import { FiTarget, FiEye } from "react-icons/fi";
import "./MissionVision.css";

const ExpandHint = ({ label }) => (
  <div className="mv-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
    {label}
  </div>
);

const CollapseHint = () => (
  <div className="mv-hint mv-collapse-hint">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Collapse
  </div>
);

export default function MissionVision() {
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  return (
    <section className="mv-section">
      <div className="mv-grid">
        <div
          onClick={() => setMissionOpen((v) => !v)}
          className={`mv-card ${missionOpen ? "open" : ""}`}
        >
          <div className={`mv-collapsed ${missionOpen ? "hidden" : ""}`}>
            <div className="mv-icon-box mv-icon-navy">
              <FiTarget size={24} />
            </div>
            <div className="mv-label mv-label-red">Our Mission</div>
            <ExpandHint label="Expand" />
          </div>

          <div className={`mv-expanded ${missionOpen ? "visible" : ""}`}>
            <div className="mv-icon-box mv-icon-navy">
              <FiTarget size={24} />
            </div>
            <div className="mv-label mv-label-red">Our Mission</div>
            <p className="mv-text">
              To make quality healthcare accessible, affordable, and
              convenient for every patient, by connecting them with verified
              doctors, diagnostics, and pharmacy services right from home.
            </p>
            <div className="mv-hint-wrap">
              <CollapseHint />
            </div>
          </div>
        </div>

        <div
          onClick={() => setVisionOpen((v) => !v)}
          className={`mv-card ${visionOpen ? "open" : ""}`}
        >
          <div className={`mv-collapsed ${visionOpen ? "hidden" : ""}`}>
            <div className="mv-icon-box mv-icon-red">
              <FiEye size={24} />
            </div>
            <div className="mv-label mv-label-navy">Our Vision</div>
            <ExpandHint label="Expand" />
          </div>

          <div className={`mv-expanded ${visionOpen ? "visible" : ""}`}>
            <div className="mv-icon-box mv-icon-red">
              <FiEye size={24} />
            </div>
            <div className="mv-label mv-label-navy">Our Vision</div>
            <p className="mv-text">
              A future where distance, time, and traffic never stand between
              a patient and the care they need, where every person in
              Pakistan has a trusted doctor just a tap away.
            </p>
            <div className="mv-hint-wrap">
              <CollapseHint />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}