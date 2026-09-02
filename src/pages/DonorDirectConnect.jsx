import { FiPhone, FiMessageCircle, FiUsers } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./DonorDirectConnect.css";

const MATCHES = [
  { name: "Ahmed R.", bloodType: "O+", distanceKm: 1.8, phone: "+92 3XX XXXXXXX" },
  { name: "Fatima S.", bloodType: "O+", distanceKm: 3.2, phone: "+92 3XX XXXXXXX" },
];

export default function DonorDirectConnect() {
  return (
    <DashboardLayout>
      <div className="ddc-container">
        <h1>Direct Donor Connect</h1>
        <p className="ddc-subtitle">Nearby, type-compatible donors. Connect directly and coordinate donation yourselves.</p>
        <div className="ddc-grid">
          <div className="ddc-list">
            {MATCHES.map((m) => (
              <div key={m.name} className="ddc-match-card">
                <div className="ddc-match-left">
                  <div className="ddc-avatar">{m.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div>
                    <div className="ddc-match-name">{m.name}</div>
                    <div className="ddc-match-meta">{m.bloodType} · {m.distanceKm} km away</div>
                  </div>
                </div>
                <div className="ddc-actions">
                  <button className="ddc-btn-call"><FiPhone size={15} /></button>
                  <button className="ddc-btn-message"><FiMessageCircle size={15} /></button>
                </div>
              </div>
            ))}
          </div>
          <div className="ddc-sidebar">
            <div className="ddc-sidebar-icon"><FiUsers size={22} /></div>
            <div className="ddc-sidebar-count">{MATCHES.length}</div>
            <div className="ddc-sidebar-label">compatible donors nearby</div>
            <p className="ddc-sidebar-text">Weblinic facilitates the introduction only. Coordinate donation directly with your match.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}