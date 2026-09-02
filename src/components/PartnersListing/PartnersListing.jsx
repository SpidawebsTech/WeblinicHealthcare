import { useState } from "react";
import { FiImage } from "react-icons/fi";
import "./PartnersListing.css";

const CATEGORIES = [
  "All",
  "Hospitals & Clinics",
  "Insurance Providers",
  "Corporate & Employers",
  "Government & Regulatory",
];

const PARTNERS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  category: CATEGORIES[(i % 4) + 1],
}));

export default function PartnersListing() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = PARTNERS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section className="pl-section">
      <div className="pl-header">
        <div className="pl-divider-row">
          <div className="pl-divider-line" />
          <div className="pl-divider-dot" />
          <div className="pl-divider-line" />
        </div>
        <h2>Our partners</h2>
        <p>A growing network across healthcare, insurance, and industry.</p>
      </div>

      <div className="pl-categories">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`pl-category-btn ${activeCategory === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="pl-grid">
        {filtered.map((p) => (
          <div key={p.id} className="pl-card">
            <div className="pl-icon-box">
              <FiImage size={26} />
            </div>
            <span>Partner Logo</span>
          </div>
        ))}
      </div>
    </section>
  );
}