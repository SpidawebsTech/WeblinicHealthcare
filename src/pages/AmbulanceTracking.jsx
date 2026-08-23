import { Truck, Phone } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

export default function AmbulanceTracking() {
  return (
    <PatientSidebarLayout title="Live Tracking">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border border-gray-100 rounded-2xl p-6 bg-white text-center">
          <div className="w-full h-48 bg-navy-50 rounded-xl flex items-center justify-center text-navy-300 mb-5">
            Map placeholder: live location not yet connected
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-left">
              <div className="font-bold text-sm">City Ambulance Service</div>
              <div className="text-xs text-navy-400">ETA: 8 minutes</div>
            </div>
            <button className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <Phone size={16} />
            </button>
          </div>
          <div className="flex items-center gap-2 justify-center text-xs text-navy-400">
            <Truck size={14} /> En route to your location
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit">
          <h3 className="font-bold text-sm mb-4">Trip Details</h3>
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex justify-between"><span className="text-navy-400">Vehicle</span><span className="font-semibold">City Ambulance Service</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Driver</span><span className="font-semibold">Imran A.</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Vehicle No.</span><span className="font-semibold">ISB-4471</span></div>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}