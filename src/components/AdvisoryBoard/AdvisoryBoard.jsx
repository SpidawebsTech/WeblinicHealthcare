import "./AdvisoryBoard.css";

const ADVISOR_COUNT = 3;

export default function AdvisoryBoard() {
  return (
    <section className="advb-section">
      <div className="advb-header">
        <div className="advb-divider-row">
          <div className="advb-divider-line" />
          <div className="advb-divider-dot" />
          <div className="advb-divider-line" />
        </div>
        <h2>Advisory Board</h2>
        <p>Guiding Weblinic's strategy and clinical direction.</p>
      </div>

      <div className="advb-grid">
        {Array.from({ length: ADVISOR_COUNT }).map((_, i) => (
          <div key={i} className="advb-person">
            <div className="advb-placeholder-photo" />
            <h4>Advisor Name</h4>
            <div className="advb-title">Title</div>
          </div>
        ))}
      </div>
    </section>
  );
}