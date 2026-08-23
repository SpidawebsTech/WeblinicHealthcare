import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const CATEGORIES = [
  "All",
  "Hospitals & Clinics",
  "Insurance Providers",
  "Corporate & Employers",
  "Government & Regulatory",
];

// Placeholder entries only — swap in real confirmed partner names/logos
// once available.
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
    <section className="px-5 sm:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <div className="w-8 h-px bg-gray-200" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Our partners</h2>
        <p className="text-sm text-navy-400">
          A growing network across healthcare, insurance, and industry.
        </p>
      </div>

      <div className="flex justify-center gap-2.5 flex-wrap mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-5 py-2.5 rounded-full border text-sm font-bold transition-colors ${
              activeCategory === c
                ? "bg-navy-500 border-navy-500 text-white"
                : "bg-white border-gray-200 text-navy-400 hover:border-navy-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-7 flex flex-col items-center text-center gap-2.5"
          >
            <div className="w-14 h-14 rounded-xl bg-navy-50 text-gray-300 flex items-center justify-center">
              <ImageIcon size={26} />
            </div>
            <span className="text-xs font-semibold text-gray-400">
              Partner Logo
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}