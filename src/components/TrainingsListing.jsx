import { useState } from "react";
import { Calendar, Search } from "lucide-react";
import RegisterModal from "./RegisterModal";
import training1 from "../assets/images/training-1.jpg";
import training2 from "../assets/images/training-2.jpg";
import training3 from "../assets/images/training-3.jpg";
import training4 from "../assets/images/training-4.jpg";
import training5 from "../assets/images/training-5.jpg";
import training6 from "../assets/images/training-6.jpg";

const STATUS_TABS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "ongoing", label: "Ongoing" },
  { key: "past", label: "Previous" },
];

const AUDIENCE_FILTERS = ["All", "Healthcare Professionals", "Public", "Government"];

const TRAININGS = [
  {
    title: "Telemedicine Best Practices: A CME Workshop",
    desc: "A CME-accredited session covering virtual consultation techniques, remote diagnosis limitations, and digital documentation standards.",
    audience: "Healthcare Professionals",
    format: "Online",
    date: "Aug 14, 2026 · 6:00 PM",
    price: "Rs. 2,500",
    image: training1,
    status: "upcoming",
  },
  {
    title: "Managing Diabetes: A Practical Workshop",
    desc: "Learn how to monitor blood sugar, plan balanced meals, and work with your doctor to manage diabetes day-to-day. Islamabad venue.",
    audience: "Community",
    format: "In-Person",
    date: "Aug 20, 2026 · 10:00 AM",
    price: null,
    image: training2,
    status: "upcoming",
  },
  {
    title: "Understanding Mental Health & When to Seek Help",
    desc: "A gentle introduction to recognizing anxiety and depression symptoms, and how online therapy sessions on Weblinic work.",
    audience: "Community",
    format: "Online",
    date: "Jul 27 - 29, 2026",
    price: null,
    image: training3,
    status: "ongoing",
  },
  {
    title: "Clinical Update: Diabetes Management Guidelines 2026",
    desc: "Half-day CME session reviewing the latest treatment guidelines, case studies, and Q&A with a panel of endocrinologists.",
    audience: "Healthcare Professionals",
    format: "In-Person",
    date: "Sep 3, 2026 · 9:00 AM",
    price: "Rs. 4,000",
    image: training4,
    status: "upcoming",
  },
  {
    title: "New Parent Basics: Newborn Health 101",
    desc: "A beginner-friendly session on newborn feeding, sleep, common illnesses, and when to book a pediatric consultation.",
    audience: "Community",
    format: "Online",
    date: "Jun 8, 2026 · 6:30 PM",
    price: null,
    image: training5,
    status: "past",
  },
  {
    title: "Public Health Data & Telemedicine Policy Briefing",
    desc: "A briefing for government health officials on integrating telemedicine platforms into public health infrastructure and reporting.",
    audience: "Government",
    format: "In-Person",
    date: "Jun 20, 2026 · 11:00 AM",
    price: null,
    image: training6,
    status: "past",
  },
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

  const audienceColor = {
    "Healthcare Professionals": "bg-navy-500",
    Public: "bg-brand-red",
    Government: "bg-amber-600",
  };

  return (
    <>
      {/* Navy hero banner with integrated search + filters */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 px-5 sm:px-8 pt-14 pb-10 text-center">
        <span className="inline-block bg-white/15 text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
          Weblinic Trainings
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Grow your skills, at any stage of care.
        </h1>
        <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Education for healthcare professionals, and wellness
          workshops for the public. <br></br> Find a session built for you.
        </p>

        <div className="max-w-md mx-auto relative mb-7">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trainings, topics..."
            className="w-full rounded-full pl-11 pr-4 py-3 text-sm text-navy-700 focus:outline-none"
          />
        </div>

        {/* Status tabs - primary */}
        <div className="flex justify-center gap-2 mb-4">
          {STATUS_TABS.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveStatus(s.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeStatus === s.key
                  ? "bg-navy-800 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Audience filters - secondary */}
        <div className="flex justify-center gap-2.5 flex-wrap">
          {AUDIENCE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeFilter === f
                  ? "bg-white text-navy-700"
                  : "bg-transparent border border-white/30 text-white/70 hover:border-white/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 sm:px-8 py-14 bg-white">
        <h2 className="text-xl font-bold mb-6 max-w-7xl mx-auto capitalize">
          {activeStatus === "past" ? "Previous" : activeStatus} Sessions
        </h2>

        {filtered.length === 0 ? (
          <p className="max-w-7xl mx-auto text-sm text-navy-400">
            No sessions match this filter yet.
          </p>
        ) : (
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t) => (
              <div
                key={t.title}
                className={`bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col ${
                  t.status === "past" ? "opacity-70" : ""
                }`}
              >
                <div className="relative h-48">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 right-3 flex justify-between">
                    <span
                      className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full text-white ${audienceColor[t.audience]}`}
                    >
                      {t.audience}
                    </span>
                    <span className="text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-white/90 border border-gray-200 text-navy-700">
                      {t.format}
                    </span>
                  </div>
                  {t.status === "ongoing" && (
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-green-600 text-white text-[10.5px] font-bold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live now
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-400 mb-2">
                    <Calendar size={13} />
                    {t.date}
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-2">{t.title}</h3>
                  <p className="text-xs text-navy-400 leading-relaxed text-justify mb-4 flex-1">
                    {t.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
                    <span className={`text-sm font-bold ${t.price ? "text-navy-700" : "text-green-700"}`}>
                      {t.price || "Free"}
                    </span>
                    {t.status === "past" ? (
                      <span className="text-xs font-semibold text-gray-400">Session ended</span>
                    ) : (
                      <button
                        onClick={() => setSelectedTraining(t)}
                        className="px-4 py-2 bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold rounded-full transition-colors"
                      >
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
      <RegisterModal
        training={selectedTraining}
        onClose={() => setSelectedTraining(null)}
      />
    </>
  );
}