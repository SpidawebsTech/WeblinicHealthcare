import React, { useState } from "react";
import "./Contact.css";
import {
  FiVideo,
  FiHelpCircle,
  FiUserCheck,
  FiFileText,
  FiBriefcase,
  FiShield,
  FiX,
  FiSend
} from "react-icons/fi";

function Contact() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const contactCards = [
    {
      id: 2,
      title: "Contact Member Support",
      desc: "Need help with our app, prescriptions, or account service? Our Member Support team is available 8am–10pm every day.",
      icon: <FiHelpCircle className="card-icon icon-teal" />,
      subtitle: "Patient & Account Help Desk"
    },
    {
      id: 4,
      title: "Contact Media Team",
      desc: "Media members seeking an interview, a quote, or brand press materials? Get in touch with our communications team.",
      icon: <FiFileText className="card-icon icon-purple" />,
      subtitle: "Press & Public Relations Desk"
    },
    {
      id: 5,
      title: "Start a Partnership",
      desc: "Want to help us place quality primary care and healthcare at every patient's fingertips? Let's discuss enterprise solutions.",
      icon: <FiBriefcase className="card-icon icon-orange" />,
      subtitle: "Enterprise & Strategic Partnerships"
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[a-zA-A\s'-]+$/.test(val)) {
      setFormData((prev) => ({ ...prev, name: val }));
      setErrors((prev) => ({ ...prev, name: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "Numbers and special characters are not allowed in names."
      }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, message: val }));
    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address containing '@' and domain (e.g. name@example.com).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(`Thank you, ${formData.name}! Your message regarding "${selectedCard.title}" has been sent.`);
    closeModal();
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We are here to help.</p>
        </div>
      </section>

      <section className="contact-cards-container">
        <div className="contact-grid">
          {contactCards.map((card) => (
            <div
              className="contact-card"
              key={card.id}
              onClick={() => handleCardClick(card)}
              role="button"
              tabIndex={0}
            >
              <div className="card-icon-badge">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedCard && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div
            className="contact-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="contact-modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="contact-modal-header">
              <div className="contact-modal-icon-badge">
                {selectedCard.icon}
              </div>

              <h2>{selectedCard.title}</h2>

              <p className="contact-modal-subtitle">
                {selectedCard.subtitle}
              </p>
            </div>

            <p className="contact-modal-description">
              {selectedCard.desc}
            </p>

            <form
              className="contact-modal-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleNameChange}
                  className={errors.name ? "contact-input-error" : ""}
                />

                {errors.name && (
                  <span className="contact-error-message">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-form-group">
                <label>Your Email</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={errors.email ? "contact-input-error" : ""}
                />

                {errors.email && (
                  <span className="contact-error-message">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-form-group">
                <label>Message / Inquiry</label>

                <textarea
                  rows="3"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleMessageChange}
                  className={errors.message ? "contact-input-error" : ""}
                />

                {errors.message && (
                  <span className="contact-error-message">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="contact-modal-submit-btn"
              >
                Send Message <FiSend size={14} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;