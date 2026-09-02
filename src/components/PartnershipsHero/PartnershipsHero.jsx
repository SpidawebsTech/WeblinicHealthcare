import { FiUsers } from "react-icons/fi";
import "./PartnershipsHero.css";

export default function PartnershipsHero() {
  return (
    <section className="ph-hero">
      <div className="ph-blur-circle-1" />
      <div className="ph-blur-circle-2" />

      <div className="ph-content">
        <div className="ph-badge">
          <FiUsers size={14} />
          Partnerships
        </div>
        <h1>Better healthcare, built together.</h1>
        <p>
          Weblinic partners with hospitals, insurance providers, employers,
          and government bodies to extend quality, verified care to more
          people, wherever they are.
        </p>
      </div>
    </section>
  );
}