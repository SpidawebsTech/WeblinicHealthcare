import { FiThermometer, FiUser } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./LabOrderView.css";

const LAB_ORDERS = [
  { id: 1, doctor: "Dr. Mehreen Fatima", date: "Aug 2, 2026", test: "Complete Blood Count (CBC)", status: "Pending collection" },
];

export default function LabOrderView() {
  return (
    <DashboardLayout>
      <div className="lo-container">
        <div className="lo-list">
          {LAB_ORDERS.map((o) => (
            <div key={o.id} className="lo-card">
              <div className="lo-card-left">
                <div className="lo-icon-box">
                  <FiThermometer size={18} />
                </div>
                <div>
                  <div className="lo-test-name">{o.test}</div>
                  <div className="lo-meta">
                    <FiUser size={12} /> {o.doctor} · {o.date}
                  </div>
                </div>
              </div>
              <span className="lo-status-tag">{o.status}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}