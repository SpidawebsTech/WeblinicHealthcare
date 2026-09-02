import React, { useState } from "react";
import "./HowItWorks.css";
import { FiVideo, FiHeart, FiHome } from "react-icons/fi";
import { TbFlask } from "react-icons/tb";

function HowItWorks() {
  
  const [activeTab, setActiveTab] = useState("doctor");

  const serviceData = {
    doctor: {
      steps: [
        {
          number: 1,
          title: "Search & choose a doctor",
          description: "Filter by specialization, availability, rating, and fee.",
        },
        {
          number: 2,
          title: "Book your slot",
          description: "Pick an open time, for video or in-person, and confirm.",
        },
        {
          number: 3,
          title: "Attend & get prescribed",
          description: "Consult with your doctor and receive a diagnosis, prescription, or lab order.",
        },
      ],
    },
    pharmacy: {
      steps: [
        {
          number: 1,
          title: "Receive your e-prescription",
          description: "Issued directly by your doctor right after consultation.",
        },
        {
          number: 2,
          title: "Place your order",
          description: "Review prescribed medicines and confirm your order.",
        },
        {
          number: 3,
          title: "Get it delivered",
          description: "Track your order from dispatch to your doorstep.",
        },
      ],
    },
    laboratory: {
      steps: [
        {
          number: 1,
          title: "Get your test ordered",
          description: "By your doctor during a consultation, or requested directly.",
        },
        {
          number: 2,
          title: "Schedule collection",
          description: "Choose home sample collection or a partner lab facility.",
        },
        {
          number: 3,
          title: "View your results",
          description: "Delivered securely to your record and your doctor.",
        },
      ],
    },
    homecare: {
      steps: [
        {
          number: 1,
          title: "Request a home visit",
          description: "Assigned based on your location and the service needed.",
        },
        {
          number: 2,
          title: "Get matched with field staff",
          description: "Assigned based on your location and the service needed.",
        },
        {
          number: 3,
          title: "Receive care at home",
          description: "Visit notes and vitals flow directly into your medical record.",
        },
      ],
    },
  };

  const tabs = [
    { id: "doctor", label: "Doctor consultation", icon: <FiVideo size={20} /> },
    { id: "pharmacy", label: "Pharmacy", icon: <FiHeart size={20} /> },
    { id: "laboratory", label: "Laboratory", icon: <TbFlask size={20} /> },
    { id: "homecare", label: "Home health care", icon: <FiHome size={20} /> },
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-decorator">
        <span className="dot"></span>
      </div>

      <h2 className="how-title">How it works</h2>
      <p className="how-subtitle">
        Select a service to see exactly how it works.
      </p>

      <div className="service-tabs-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-card ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-icon-wrapper">{tab.icon}</div>
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>

      <div className="how-steps-grid">
        {serviceData[activeTab].steps.map((step) => (
          <div className="step-item" key={step.number}>
            <div className="step-circle">{step.number}</div>
            <h3 className="step-item-title">{step.title}</h3>
            <p className="step-item-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;