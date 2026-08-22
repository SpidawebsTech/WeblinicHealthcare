import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Quality healthcare, from
            <br />
            the comfort of home
          </h1>

          <p>
            Connect with verified doctors, book an OPD visit or a specialist
            consultation, and manage your care, all in one place.
            <br />
            No waiting rooms and no travel.
          </p>

          <div className="hero-buttons">
            <button className="book-btn">
              Book an appointment
            </button>

            <button className="doctor-btn">
              Find a doctor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;