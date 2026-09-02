import "./AdvisoryBoard.css";

const ADVISOR_COUNT = 3;

export default function AdvisoryBoard() {
  return (
    <section className="ab-section">
      <div className="ab-header">
        <div className="ab-divider-row">
          <div className="ab-divider-line" />
          <div className="ab-divider-dot" />
          <div className="ab-divider-line" />
        </div>
        <h2>Advisory Board</h2>
        <p>Guiding Weblinic's strategy and clinical direction.</p>
      </div>

      <div className="ab-grid">
        {Array.from({ length: ADVISOR_COUNT }).map((_, i) => (
          <div key={i} className="ab-person">
            <div className="ab-placeholder-photo" />
            <h4>Advisor Name</h4>
            <div className="ab-title">Title</div>
          </div>
        ))}
      </div>
    </section>
  );
}