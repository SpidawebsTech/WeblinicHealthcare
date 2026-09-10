import { FiHeart } from "react-icons/fi";
import aboutHeroBg from "../../assets/images/about-hero-bg.jpg";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section
      className="ah-hero"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <div className="ah-overlay" />

      <div className="ah-content">
        <div className="ah-badge">
          <FiHeart size={14} />
          About Weblinic
        </div>
        <h1 className="ah-title">
          Quality, trust, and empathy{" "}
          <br />
          <span className="ah-title-accent">
            The care you deserve is the appointment we reserve.
          </span>
        </h1>
        <p className="ah-subtitle">
          Weblinic is a telemedicine platform built to give people ownership of
          their own health decisions from the comfort of home, without
          compromising on the quality or safety of care.
        </p>
      </div>
    </section>
  );
}