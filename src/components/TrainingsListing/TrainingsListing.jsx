import { useState } from "react";
import { FiCalendar, FiSearch } from "react-icons/fi";
import RegisterModal from "../RegisterModal/RegisterModal";
import training1 from "../../assets/images/training-1.jpg";
import training2 from "../../assets/images/training-2.jpg";
import training3 from "../../assets/images/training-3.jpg";
import training4 from "../../assets/images/training-4.jpg";
import training5 from "../../assets/images/training-5.jpg";
import training6 from "../../assets/images/training-6.jpg";
import "./TrainingsListing.css";

const STATUS_TABS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "ongoing", label: "Ongoing" },
  { key: "past", label: "Previous" },
];

const AUDIENCE_FILTERS = ["All", "Healthcare Professionals", "Public", "Government"];

const TRAININGS = [
  { title: "Telemedicine Best Practices: A CME Workshop", desc: "A CME-accredited session covering virtual consultation techniques, remote diagnosis limitations, and digital documentation standards.", audience: "Healthcare Professionals", format: "Online", date: "Aug 14, 2026 · 6:00 PM", price: "Rs. 2,500", image: training1, status: "upcoming" },
  { title: "Managing Diabetes: A Practical Workshop", desc: "Learn how to monitor blood sugar, plan balanced meals, and work with your doctor to manage diabetes day-to-day. Islamabad venue.", audience: "Public", format: "In-Person", date: "Aug 20, 2026 · 10:00 AM", price: null, image: training2, status: "upcoming" },
  { title: "Understanding Mental Health & When to Seek Help", desc: "A gentle introduction to recognizing anxiety and depression symptoms, and how online therapy sessions on Weblinic work.", audience: "Public", format: "Online", date: "Jul 27 - 29, 2026", price: null, image: training3, status: "ongoing" },
  { title: "Clinical Update: Diabetes Management Guidelines 2026", desc: "Half-day CME session reviewing the latest treatment guidelines, case studies, and Q&A with a panel of endocrinologists.", audience: "Healthcare Professionals", format: "In-Person", date: "Sep 3, 2026 · 9:00 AM", price: "Rs. 4,000", image: training4, status: "upcoming" },
  { title: "New Parent Basics: Newborn Health 101", desc: "A beginner-friendly session on newborn feeding, sleep, common illnesses, and when to book a pediatric consultation.", audience: "Public", format: "Online", date: "Jun 8, 2026 · 6:30 PM", price: null, image: training5, status: "past" },
  { title: "Public Health Data & Telemedicine Policy Briefing", desc: "A briefing for government health officials on integrating telemedicine platforms into public health infrastructure and reporting.", audience: "Government", format: "In-Person", date: "Jun 20, 2026 · 11:00 AM", price: null, image: training6, status: "past" },
];

export default function TrainingsListing() {
  const [activeStatus, setActiveStatus] = useState("upcoming");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTraining, setSelectedTraining] = useState(null);

  const filtered = TRAININGS.filter((t) => {
    const matchesStatus = t.status === activeStatus;
    const matchesFilter = activeFilter === "All" || t.audience === activeFilter;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesFilter && matchesSearch;
  });

  const audienceClass = {
    "Healthcare Professionals": "tl-badge-navy",
    Public: "tl-badge-red",
    Government: "tl-badge-amber",
  };

  return (
    <>
      <section className="tl-hero">
        <span className="tl-hero-badge">Weblinic Trainings</span>
        <h1 className="tl-hero-title">Grow your skills, at any stage of care.</h1>
        <p className="tl-hero-subtitle">
          Education for healthcare professionals, and wellness
          workshops for the public. <br />Find a session built for you.
        </p>

        <div className="tl-search-wrap">
          <FiSearch size={16} className="tl-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trainings, topics..."
            className="tl-search-input"
          />
        </div>

        <div className="tl-status-tabs">
          {STATUS_TABS.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveStatus(s.key)}
              className={`tl-status-btn ${activeStatus === s.key ? "active" : ""}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="tl-audience-filters">
          {AUDIENCE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`tl-audience-btn ${activeFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="tl-results-section">
        <h2 className="tl-results-heading">
          {activeStatus === "past" ? "Previous" : activeStatus} Sessions
        </h2>

        {filtered.length === 0 ? (
          <p className="tl-empty">No sessions match this filter yet.</p>
        ) : (
          <div className="tl-grid">
            {filtered.map((t) => (
              <div key={t.title} className={`tl-card ${t.status === "past" ? "past" : ""}`}>
                <div className="tl-image-wrap">
                  <img src={t.image} alt={t.title} />
                  <div className="tl-badge-row">
                    <span className={`tl-badge ${audienceClass[t.audience]}`}>{t.audience}</span>
                    <span className="tl-format-badge">{t.format}</span>
                  </div>
                  {t.status === "ongoing" && (
                    <span className="tl-live-badge">
                      <span className="tl-live-dot" /> Live now
                    </span>
                  )}
                </div>

                <div className="tl-card-body">
                  <div className="tl-date-row">
                    <FiCalendar size={13} /> {t.date}
                  </div>
                  <h3>{t.title}</h3>
                  <p className="tl-desc">{t.desc}</p>
                  <div className="tl-card-footer">
                    <span className={`tl-price ${!t.price ? "free" : ""}`}>{t.price || "Free"}</span>
                    {t.status === "past" ? (
                      <span className="tl-ended">Session ended</span>
                    ) : (
                      <button onClick={() => setSelectedTraining(t)} className="tl-register-btn">
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <RegisterModal training={selectedTraining} onClose={() => setSelectedTraining(null)} />
    </>
  );
}