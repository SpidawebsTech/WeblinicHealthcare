import { useState } from "react";
import { Award, Lock, Heart } from "lucide-react";

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

const VALUES = [
  {
    key: "quality",
    Icon: Award,
    title: "Quality",
    text: "Every doctor on Weblinic is PMDC-verified before they can accept a single appointment; quality of care is non-negotiable.",
  },
  {
    key: "trust",
    Icon: Lock,
    title: "Trust",
    text: "From encrypted consultations to transparent pricing, patients always know exactly who they're seeing and what it costs.",
  },
  {
    key: "empathy",
    Icon: Heart,
    title: "Empathy",
    text: "Healthcare is personal. We design every interaction, from booking to consultation, around patient comfort first and foremost.",
  },
];

export default function OurValues() {
  const [qualityOpen, setQualityOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [empathyOpen, setEmpathyOpen] = useState(false);

  const cardState = { quality: [qualityOpen, setQualityOpen], trust: [trustOpen, setTrustOpen], empathy: [empathyOpen, setEmpathyOpen] };

  return (
    <section className="px-5 sm:px-8 py-16 bg-navy-50/50">
      <div className="max-w-4xl mx-auto text-center mb-11">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <div className="w-8 h-px bg-gray-200" />
        </div>
        <h2 className="text-2xl font-bold mb-2">What we stand for</h2>
        <p className="text-sm text-navy-400">
          Three principles guide every decision we make.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
        {VALUES.map(({ key, Icon, title, text }) => {
          const [isOpen, setIsOpen] = cardState[key];
          return (
            <div
              key={key}
              onClick={() => setIsOpen((v) => !v)}
              className={`relative bg-white border border-gray-100 rounded-2xl shadow-[0_8px_28px_rgba(15,76,129,0.06)] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "h-[340px]" : "h-[220px]"
              }`}
            >
              {/* Collapsed */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center px-9 transition-opacity duration-300 ${
                  isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-navy-50 text-navy-500 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold mb-3">{title}</h3>
                <ExpandHint label="Expand" />
              </div>

              {/* Expanded */}
              <div
                className={`absolute inset-0 p-9 flex flex-col h-full transition-opacity duration-500 delay-150 ${
                  isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-navy-50 text-navy-500 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold mb-3">{title}</h3>
                <p className="text-sm text-navy-400 leading-relaxed text-justify">
                  {text}
                </p>
                <div className="mt-auto">
                  <CollapseHint />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}