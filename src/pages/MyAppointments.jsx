import { useState } from "react";
import { Video, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

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
    <PatientSidebarLayout title="My Appointments">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex gap-2 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab
                  ? "bg-navy-500 text-white"
                  : "bg-gray-50 text-navy-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((a) => (
            <div key={a.id} className="border border-gray-100 rounded-2xl p-5 bg-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {a.doctor.split(" ").map((n) => n[0]).slice(-2).join("")}
                </div>
                <div>
                  <div className="font-bold text-sm">{a.doctor}</div>
                  <div className="text-xs text-navy-400">{a.spec}</div>
                  <div className="text-xs text-navy-400 mt-1">{a.date} · {a.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {a.status === "upcoming" && (
                  <>
                    {a.type === "video" ? (
                      <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                        <Video size={13} /> Join Call
                      </button>
                    ) : (
                      <span className="flex items-center gap-1.5 bg-gray-100 text-navy-600 text-xs font-bold px-4 py-2 rounded-full">
                        <MapPin size={13} /> In-Clinic
                      </span>
                    )}
                    <button
                      onClick={() => handleCancel(a.id)}
                      className="w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-navy-400 hover:text-brand-red flex items-center justify-center transition-colors"
                      aria-label="Cancel appointment"
                    >
                      <X size={14} />
                    </button>
                  </>
                )}
                {a.status === "completed" && (
                    <Link
                        to={`/review/${a.id}`}
                        className="text-xs font-bold text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-full transition-colors"
                    >
                        Rate this visit
                    </Link>
                )}
                {a.status === "cancelled" && (
                  <span className="text-xs font-bold text-navy-400 bg-gray-50 px-4 py-2 rounded-full">
                    Cancelled
                  </span>
                )}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-sm text-navy-400 py-12">
              No {activeTab.toLowerCase()} appointments.
            </p>
          )}
        </div>
      </div>
    </PatientSidebarLayout>
  );
}