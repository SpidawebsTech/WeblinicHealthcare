import React, { useState } from "react";
import "./Services.css";
import { FiVideo, FiHeart, FiChevronLeft, FiChevronRight, FiHome } from "react-icons/fi";
import { TbFlask } from "react-icons/tb";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <FiVideo size={22} />,
      title: "Doctor consultation",
      description:
        "Book an OPD visit or search for a specialist by name, specialty, or availability. Video or in-person.",
      buttonText: "Find a doctor",
    },
    {
      icon: <FiHeart size={22} />,
      title: "Medicine & pharmacy",
      description:
        "Your doctor's e-prescription flows straight to your pharmacy order. Track it from dispatch to your door.",
      buttonText: "Order medicine",
    },
    {
      icon: <TbFlask size={22} />,
      title: "Laboratory tests",
      description:
        "Doctor-ordered or self-requested. Schedule sample collection at home or at a partner lab.",
      buttonText: "Book a test",
    },
    {
      icon: <FiHome size={22} />,
      title: "Home health care",
      description:
        "Nursing, physiotherapy, elderly care, or sample collection. All right at your doorstep.",
      buttonText: "Request a visit",
    },
  ];

  const maxIndex = services.length - 2; // Shows 2 cards per slide view

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="services-section">
      {/* Top Accent Dot */}
      <div className="services-decorator">
        <span className="dot"></span>
      </div>

      <h2 className="services-title">Our services</h2>
      <p className="services-subtitle">
        Four ways Weblinic takes care of you, from consultation to your doorstep.
      </p>
      <div className="carousel-container">
        <button
          className="carousel-arrow prev"
          onClick={handlePrev}
          aria-label="Previous services"
        >
          <FiChevronLeft size={20} />
        </button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {services.map((service, index) => (
              <div className="blue-service-card-wrapper" key={index}>
                <div className="blue-service-card">
                  <div className="card-top-content">
                    <div className="card-icon-circle">{service.icon}</div>
                    <h3 className="s-card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                  </div>
                  <button className="card-action-btn">{service.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className="carousel-arrow next"
          onClick={handleNext}
          aria-label="Next services"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`dot-pill ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;