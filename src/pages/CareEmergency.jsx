import { Link } from "react-router-dom";
import { Stethoscope, Droplet, Siren, Truck, Heart } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const PANELS = [
  {
    to: "/doctors",
    icon: Stethoscope,
    title: "Find a Doctor",
    desc: "Search specialists by specialty, availability, and fee.",
    color: "navy",
  },
  {
    to: "/blood/request",
    icon: Droplet,
    title: "Request Blood",
    desc: "Emergency or scheduled. Matched by type and location.",
    color: "red",
  },
  {
    to: "/ambulance/emergency",
    icon: Siren,
    title: "Emergency Ambulance",
    desc: "One-tap dispatch, no provider selection needed.",
    color: "red",
  },
  {
    to: "/ambulance/scheduled",
    icon: Truck,
    title: "Schedule Transfer",
    desc: "Non-emergency booking, ranked by distance and rating.",
    color: "navy",
  },
  { to: "/blood/donate", 
    icon: Heart, 
    title: "Become a Donor", 
    desc: "Join the voluntary donor pool.", 
    color: "red" },
];

export default function CareEmergency() {
  return (
    <PatientSidebarLayout title="Care & Emergency">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <h1 className="text-xl font-bold mb-2">How can we help?</h1>
        <p className="text-sm text-navy-400 mb-8">
          Choose a service to get started.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {PANELS.map(({ to, icon: Icon, title, desc, color }, i) => {
            const isLastOdd = i === PANELS.length - 1 && PANELS.length % 2 !== 0;
            return (
              <Link
                key={title}
                to={to}
                className={`border rounded-2xl p-7 bg-white flex flex-col transition-colors ${
                  color === "red"
                    ? "border-gray-100 hover:border-brand-red"
                    : "border-gray-100 hover:border-navy-400"
                } ${isLastOdd ? "sm:col-span-2 sm:max-w-[calc(50%-10px)] sm:mx-auto sm:w-full" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    color === "red" ? "bg-red-50 text-brand-red" : "bg-navy-50 text-navy-500"
                }`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-base mb-1.5">{title}</h3>
              <p className="text-sm text-navy-400">{desc}</p>
            </Link>
          );
        })}
      </div>
      </div>
    </PatientSidebarLayout>
  );
}