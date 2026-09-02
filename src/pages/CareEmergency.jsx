import { Link } from "react-router-dom";
import { Stethoscope, Droplet, Siren, Truck, Heart } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./CareEmergency.css";

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
  {
    to: "/blood/donate",
    icon: Heart,
    title: "Become a Donor",
    desc: "Join the voluntary donor pool.",
    color: "red",
  },
];

export default function CareEmergency() {
  return (
    <DashboardLayout>
      <div className="care-page">
        <h1 className="care-title">How can we help?</h1>
        <p className="care-subtitle">Choose a service to get started.</p>

        <div className="care-grid">
          {PANELS.map(({ to, icon: Icon, title, desc, color }, i) => {
            const isLastOdd = i === PANELS.length - 1 && PANELS.length % 2 !== 0;
            return (
              <Link
                key={title}
                to={to}
                className={`care-panel care-panel-${color} ${isLastOdd ? "care-panel-centered" : ""}`}
              >
                <div className={`care-icon-badge care-icon-badge-${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="care-panel-title">{title}</h3>
                <p className="care-panel-desc">{desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}