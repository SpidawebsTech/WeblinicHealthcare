import { Pill, FlaskConical, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PatientSidebarLayout from "../components/PatientSidebarLayout";


export default function Notifications() {
  return (
    <PatientSidebarLayout title="Notifications">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col gap-4">

          {/* New Prescription */}
          <Link
            to="/prescriptions"
            className="border border-gray-100 rounded-2xl p-6 bg-white flex items-center gap-4 hover:border-gray-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center shrink-0">
              <Pill size={18} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <div className="font-bold text-sm">
                  New Prescription
                </div>

                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
              </div>

              <div className="text-xs text-navy-400 mt-1">
                Dr. Mehreen Fatima has issued a new prescription.
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Aug 2, 2026
              </div>
            </div>

            <ChevronRight
              size={16}
              className="text-navy-300 shrink-0"
            />
          </Link>


          {/* New Lab Order */}
          <Link
            to="/lab-orders"
            className="border border-gray-100 rounded-2xl p-6 bg-white flex items-center gap-4 hover:border-gray-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <FlaskConical size={18} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <div className="font-bold text-sm">
                  New Lab Order
                </div>

                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
              </div>

              <div className="text-xs text-navy-400 mt-1">
                Dr. Mehreen Fatima has created a new lab order.
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Aug 2, 2026
              </div>
            </div>

            <ChevronRight
              size={16}
              className="text-navy-300 shrink-0"
            />
          </Link>

        </div>
      </div>
    </PatientSidebarLayout>
  );
}