import { useState } from "react";
import { Search, Star, Briefcase, MapPin } from "lucide-react";
import { DOCTORS } from "../data/doctors";
import { Link } from "react-router-dom";

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
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 px-5 sm:px-8 pt-14 pb-10 text-center">
        <span className="inline-block bg-white/15 text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
          Find a Specialist
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Find the right doctor for you
        </h1>
        <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Browse verified doctors by specialty, experience, and availability
          <br></br>Book a consultation at a time that works for you.
        </p>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-7">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name or specialty..."
              className="w-full rounded-full pl-11 pr-4 py-3 text-sm text-navy-700 focus:outline-none"
            />
          </div>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="rounded-full px-4 py-3 text-sm text-navy-700 bg-white focus:outline-none"
          >
            {SPECIALIZATIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          {["Video/Audio", "In-Person"].map((type) => (
            <button
              key={type}
              onClick={() => handleConsultTypeChange(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                consultType === type
                  ? "bg-white text-navy-700"
                  : "bg-transparent border border-white/30 text-white/70 hover:border-white/60"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2.5 flex-wrap">
          {QUICK_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveQuickFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                activeQuickFilter === f
                  ? "bg-navy-800 text-white"
                  : "bg-white text-navy-700 hover:bg-navy-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 py-14 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-6 flex-wrap gap-3">
          <p className="text-sm text-navy-400">
            <span className="font-bold text-navy-700">{sorted.length}</span> doctors found
            {isInPerson && " near you"}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-navy-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-full px-3.5 py-1.5 focus:outline-none bg-white"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((d) => (
            <div
              key={d.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-navy-500 text-white text-xl font-bold flex items-center justify-center">
                  {d.initials}
                </div>
                {d.online && (
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                )}
              </div>
              <h3 className="text-base font-bold mb-1">{d.name}</h3>
              <div className="text-sm font-semibold text-brand-red mb-2">{d.spec}</div>
              <div className="flex items-center gap-4 text-xs text-navy-400 mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase size={13} /> {d.years} yrs
                </span>
                <span className="flex items-center gap-1">
                  <Star size={13} className="text-yellow-500" /> {d.rating}
                </span>
                {isInPerson && (
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {d.distanceKm} km
                  </span>
                )}
              </div>
              <div className="text-sm font-bold mb-4">
                Rs. {d.fee.toLocaleString()} <span className="text-xs font-normal text-navy-400">/ visit</span>
              </div>
              <Link
                to={`/doctors/${d.slug}`}
                className="block text-center w-full bg-navy-50 text-navy-700 hover:bg-navy-100 text-sm font-bold py-2.5 rounded-full transition-colors"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-sm text-navy-400 mt-8">
            No doctors match your search, try a different filter.
          </p>
        )}
      </section>
    </>
  );
}