import { useState } from "react";
import { FiVideo, FiMapPin, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./MyAppointments.css";

const INITIAL_APPOINTMENTS = [
  { id: 1, doctor: "Dr. Sarah Ahmed", spec: "Cardiologist", date: "Today, Aug 12", time: "4:30 PM", type: "video", status: "upcoming" },
  { id: 2, doctor: "Dr. Bilal Khan", spec: "Dermatologist", date: "Tomorrow, Aug 13", time: "11:00 AM", type: "in-clinic", status: "upcoming" },
  { id: 3, doctor: "Dr. Mehreen Fatima", spec: "General Physician", date: "Aug 2, 2026", time: "6:00 PM", type: "video", status: "completed" },
];

const TABS = ["Upcoming", "Past", "Cancelled"];

export default function MyAppointments() {
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
  const [activeTab, setActiveTab] = useState("Upcoming");

  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "cancelled" } : a))
    );
  };

  const filtered = appointments.filter((a) => {
    if (activeTab === "Upcoming") return a.status === "upcoming";
    if (activeTab === "Past") return a.status === "completed";
    return a.status === "cancelled";
  });

  return (
    <DashboardLayout>
      <div className="ma-container">
        <div className="ma-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`ma-tab-btn ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="ma-list">
          {filtered.map((a) => (
            <div key={a.id} className="ma-card">
              <div className="ma-card-left">
                <div className="ma-avatar">
                  {a.doctor.split(" ").map((n) => n[0]).slice(-2).join("")}
                </div>
                <div>
                  <div className="ma-doctor-name">{a.doctor}</div>
                  <div className="ma-doctor-spec">{a.spec}</div>
                  <div className="ma-datetime">{a.date} · {a.time}</div>
                </div>
              </div>

              <div className="ma-card-right">
                {a.status === "upcoming" && (
                  <>
                    {a.type === "video" ? (
                      <button className="ma-join-btn">
                        <FiVideo size={13} /> Join Call
                      </button>
                    ) : (
                      <span className="ma-inclinic-tag">
                        <FiMapPin size={13} /> In-Clinic
                      </span>
                    )}
                    <button
                      onClick={() => handleCancel(a.id)}
                      className="ma-cancel-btn"
                      aria-label="Cancel appointment"
                    >
                      <FiX size={14} />
                    </button>
                  </>
                )}
                {a.status === "completed" && (
                  <Link to={`/review/${a.id}`} className="ma-review-link">
                    Rate this visit
                  </Link>
                )}
                {a.status === "cancelled" && (
                  <span className="ma-cancelled-tag">Cancelled</span>
                )}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="ma-empty">No {activeTab.toLowerCase()} appointments.</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}