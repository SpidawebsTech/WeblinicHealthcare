import { useState } from "react";
import { FiSearch, FiStar, FiBriefcase, FiMapPin } from "react-icons/fi";
import { DOCTORS } from "../../data/doctors";
import { Link } from "react-router-dom";
import "./DoctorSearchListing.css";

const SPECIALIZATIONS = [
  "All Departments",
  "General Physician",
  "Dermatologist",
  "Psychiatrist",
  "Pediatrician",
  "Gynecologist",
  "Cardiologist",
];

const QUICK_FILTERS = ["All", "Online now", "Under Rs. 1500", "5+ years experience", "Highest rated"];

const SORT_OPTIONS_IN_PERSON = [
  { value: "distance", label: "Nearest first" },
  { value: "rating", label: "Highest rated" },
  { value: "fee", label: "Lowest fee" },
];

const SORT_OPTIONS_VIDEO = [
  { value: "rating", label: "Highest rated" },
  { value: "fee", label: "Lowest fee" },
  { value: "years", label: "Most experienced" },
];

export default function DoctorSearchListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [activeQuickFilter, setActiveQuickFilter] = useState("All");
  const [consultType, setConsultType] = useState("Video/Audio");
  const [sortBy, setSortBy] = useState("rating");

  const isInPerson = consultType === "In-Person";
  const sortOptions = isInPerson ? SORT_OPTIONS_IN_PERSON : SORT_OPTIONS_VIDEO;

  const handleConsultTypeChange = (type) => {
    setConsultType(type);
    // Reset sort to the model each mode is actually ranked by (§2.5:
    // distance, rating, fee for in-person; distance drops out for video).
    setSortBy(type === "In-Person" ? "distance" : "rating");
  };

  const filtered = DOCTORS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.spec.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = department === "All Departments" || d.spec === department;
    const matchesQuick =
      activeQuickFilter === "All" ||
      (activeQuickFilter === "Online now" && d.online) ||
      (activeQuickFilter === "Under Rs. 1500" && d.fee < 1500) ||
      (activeQuickFilter === "5+ years experience" && d.years >= 5) ||
      (activeQuickFilter === "Highest rated" && d.rating >= 4.8);
    return matchesSearch && matchesDept && matchesQuick;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "distance") return a.distanceKm - b.distanceKm;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "fee") return a.fee - b.fee;
    if (sortBy === "years") return b.years - a.years;
    return 0;
  });

  return (
    <>
      <section className="ds-hero">
        <span className="ds-hero-badge">Find a Specialist</span>
        <h1 className="ds-hero-title">Find the right doctor for you</h1>
        <p className="ds-hero-subtitle">
          Browse verified doctors by specialty, experience, and availability
          <br />Book a consultation at a time that works for you.
        </p>

        <div className="ds-hero-searchrow">
          <div className="ds-search-wrap">
            <FiSearch size={16} className="ds-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name or specialty..."
              className="ds-search-input"
            />
          </div>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="ds-department-select"
          >
            {SPECIALIZATIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="ds-consult-toggle">
          {["Video/Audio", "In-Person"].map((type) => (
            <button
              key={type}
              onClick={() => handleConsultTypeChange(type)}
              className={`ds-consult-btn ${consultType === type ? "active" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="ds-quick-filters">
          {QUICK_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveQuickFilter(f)}
              className={`ds-quick-filter-btn ${activeQuickFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="ds-results-section">
        <div className="ds-results-bar">
          <p className="ds-results-count">
            <strong>{sorted.length}</strong> doctors found
            {isInPerson && " near you"}
          </p>

          <div className="ds-sort-row">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="doctors-grid">
          {sorted.map((d) => (
            <div key={d.name} className="doctor-card">
              <div className="doctor-avatar-wrap">
                <div className="doctor-avatar">{d.initials}</div>
                {d.online && <span className="online-dot" />}
              </div>
              <h3>{d.name}</h3>
              <div className="doctor-spec-tag">{d.spec}</div>
              <div className="doctor-meta-row">
                <span><FiBriefcase size={13} /> {d.years} yrs</span>
                <span><FiStar size={13} /> {d.rating}</span>
                {isInPerson && <span><FiMapPin size={13} /> {d.distanceKm} km</span>}
              </div>
              <div className="doctor-price-row">
                Rs. {d.fee.toLocaleString()} <span className="doctor-fee-sub">/ visit</span>
              </div>
              <Link to={`/doctors/${d.slug}`} className="view-profile-btn">
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="ds-empty-state">
            No doctors match your search, try a different filter.
          </p>
        )}
      </section>
    </>
  );
}