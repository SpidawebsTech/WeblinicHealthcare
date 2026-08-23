import { useState } from "react";
import { Target, Eye } from "lucide-react";

const ExpandHint = ({ label }) => (
  <div className="text-xs font-semibold flex items-center gap-1.5">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
    {label}
  </div>
);

const CollapseHint = () => (
  <div className="mt-5 text-xs font-semibold text-navy-500 flex items-center gap-1.5">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Collapse
  </div>
);

export default function MissionVision() {
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  return (
    <section className="px-5 sm:px-8 py-14">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {/* Mission card */}
        <div
          onClick={() => setMissionOpen((v) => !v)}
          className={`relative bg-white border border-gray-100 rounded-2xl shadow-[0_8px_28px_rgba(15,76,129,0.06)] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
            missionOpen ? "h-[340px]" : "h-[220px]"
          }`}
        >
          {/* Collapsed */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-9 transition-opacity duration-300 ${
              missionOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <div className="text-xs font-bold text-brand-red uppercase tracking-wide mb-3">
              Our Mission
            </div>
            <ExpandHint label="Expand" />
          </div>

          {/* Expanded */}
          <div
            className={`absolute inset-0 p-9 flex flex-col h-full transition-opacity duration-500 delay-150 ${
              missionOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <div className="text-xs font-bold text-brand-red uppercase tracking-wide mb-3">
              Our Mission
            </div>
            <p className="text-base font-medium leading-relaxed text-justify">
              To make quality healthcare accessible, affordable, and
              convenient for every patient, by connecting them with verified
              doctors, diagnostics, and pharmacy services right from home.
            </p>
            <div className="mt-auto">
              <CollapseHint />
            </div> 
          </div>
        </div>

        {/* Vision card */}
        <div
          onClick={() => setVisionOpen((v) => !v)}
          className={`relative bg-white border border-gray-100 rounded-2xl shadow-[0_8px_28px_rgba(15,76,129,0.06)] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
            visionOpen ? "h-[340px]" : "h-[220px]"
          }`}
        >
          {/* Collapsed */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-9 transition-opacity duration-300 ${
              visionOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-red to-brand-redDark text-white flex items-center justify-center mb-5">
              <Eye size={24} />
            </div>
            <div className="text-xs font-bold text-navy-500 uppercase tracking-wide mb-3">
              Our Vision
            </div>
            <ExpandHint label="Expand" />
          </div>

          {/* Expanded */}
          <div
            className={`absolute inset-0 p-9 flex flex-col h-full transition-opacity duration-500 delay-150 ${
              visionOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-red to-brand-redDark text-white flex items-center justify-center mb-5">
              <Eye size={24} />
            </div>
            <div className="text-xs font-bold text-navy-500 uppercase tracking-wide mb-3">
              Our Vision
            </div>
            <p className="text-base font-medium leading-relaxed text-justify">
              A future where distance, time, and traffic never stand between
              a patient and the care they need, where every person in
              Pakistan has a trusted doctor just a tap away.
            </p>
              <div className="mt-auto">
                <CollapseHint />
              </div>  
          </div>
        </div>
      </div>
    </section>
  );
}
