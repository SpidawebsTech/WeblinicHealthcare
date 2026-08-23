import { useState } from "react";
import { Users, Lock, Puzzle, TrendingUp } from "lucide-react";

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

const BENEFITS = [
  {
    key: "reach",
    Icon: Users,
    title: "Extended reach",
    text: "Connect with thousands of patients and healthcare professionals already using Weblinic.",
  },
  {
    key: "trust",
    Icon: Lock,
    title: "Verified & trusted",
    text: "Every partnership is vetted, keeping the platform safe and credible for patients and providers alike.",
  },
  {
    key: "integration",
    Icon: Puzzle,
    title: "Seamless integration",
    text: "From insurance claims to referral pathways, our platform is built to plug into existing systems.",
  },
  {
    key: "impact",
    Icon: TrendingUp,
    title: "Measurable impact",
    text: "Track patient outcomes and engagement through shared reporting and dashboards.",
  },
];

export default function PartnershipBenefits() {
  const [reachOpen, setReachOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [integrationOpen, setIntegrationOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);

  const cardState = {
    reach: [reachOpen, setReachOpen],
    trust: [trustOpen, setTrustOpen],
    integration: [integrationOpen, setIntegrationOpen],
    impact: [impactOpen, setImpactOpen],
  };

  return (
    <section className="px-5 sm:px-8 py-16 bg-navy-50/50">
      <div className="max-w-4xl mx-auto text-center mb-11">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <div className="w-8 h-px bg-gray-200" />
        </div>
        <h2 className="text-2xl font-bold mb-2">
          Why organizations partner with Weblinic
        </h2>
        <p className="text-sm text-navy-400">
          A few reasons our partners choose to work with us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map(({ key, Icon, title, text }) => {
          const [isOpen, setIsOpen] = cardState[key];
          return (
            <div
              key={key}
              onClick={() => setIsOpen((v) => !v)}
              className={`relative bg-white border border-gray-100 rounded-2xl shadow-[0_8px_28px_rgba(15,76,129,0.06)] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "h-[320px]" : "h-[220px]"
              }`}
            >
              {/* Collapsed */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center px-7 transition-opacity duration-300 ${
                  isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold mb-3">{title}</h3>
                <ExpandHint label="Expand" />
              </div>

              {/* Expanded */}
              <div
                className={`absolute inset-0 p-7 flex flex-col h-full transition-opacity duration-500 delay-150 ${
                  isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center mb-5">
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