import { FlaskConical, Stethoscope } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const LAB_ORDERS = [
  { id: 1, doctor: "Dr. Mehreen Fatima", date: "Aug 2, 2026", test: "Complete Blood Count (CBC)", status: "Pending collection" },
];

export default function LabOrderView() {
  return (
    <PatientSidebarLayout title="Lab Orders">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col gap-4">
          {LAB_ORDERS.map((o) => (
            <div key={o.id} className="border border-gray-100 rounded-2xl p-6 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FlaskConical size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm">{o.test}</div>
                  <div className="text-xs text-navy-400 flex items-center gap-1 mt-0.5">
                    <Stethoscope size={12} /> {o.doctor} · {o.date}
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full">
                {o.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PatientSidebarLayout>
  );
}