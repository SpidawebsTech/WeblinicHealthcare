import ijPhoto from "../../assets/images/IJ.jpg";
import hjPhoto from "../../assets/images/HJ.jpg";
import "./Leadership.css";

const LEADERS = [
  { photo: ijPhoto, name: "Iqan Chughtai Junaid", title: "Chief Executive Officer" },
  { photo: hjPhoto, name: "Hassan Junaid", title: "Head of IT Operations" },
];

export default function Leadership() {
  return (
    <section className="ld-section">
      <div className="ld-header">
        <div className="ld-divider-row">
          <div className="ld-divider-line" />
          <div className="ld-divider-dot" />
          <div className="ld-divider-line" />
        </div>
        <h2>Our leadership</h2>
        <p>The people behind Weblinic.</p>
      </div>

      <div className="ld-grid">
        {LEADERS.map(({ photo, name, title }) => (
          <div key={name} className="ld-person">
            <img src={photo} alt={name} className="ld-photo" />
            <h4>{name}</h4>
            <div className="ld-title">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}