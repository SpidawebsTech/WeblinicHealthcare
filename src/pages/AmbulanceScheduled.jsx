import { useState } from "react";
import { Truck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const VEHICLES = [
  { id: 1, name: "City Ambulance Service", rating: 4.8, fee: 1200, distanceKm: 2.1 },
  { id: 2, name: "Rapid Response Medical", rating: 4.6, fee: 1000, distanceKm: 4.5 },
  { id: 3, name: "SafeRide Ambulance", rating: 4.9, fee: 1500, distanceKm: 3.0 },
];

export default function AmbulanceScheduled() {
  const [booked, setBooked] = useState(null);

  return (
    <PatientSidebarLayout title="Schedule Transfer">
      <div className="max-w-lg mx-auto px-5 sm:px-8 py-10">
        {booked ? (
          <div className="text-center border border-gray-100 rounded-2xl p-8 bg-white">
            <h2 className="font-bold text-lg mb-2">Booked with {booked.name}</h2>
            <p className="text-sm text-navy-400">Confirmation sent, you'll be notified before pickup.</p>
            <Link to="/ambulance/tracking" className="text-xs font-bold text-navy-500 hover:text-navy-700">
              Track live location →
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-navy-400 mb-6">
              Ranked by distance, rating, and fee. Choose a vehicle for your scheduled transfer.
            </p>
            <div className="flex flex-col gap-3">
              {VEHICLES.map((v) => (
                <div key={v.id} className="border border-gray-100 rounded-2xl p-5 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center">
                      <Truck size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{v.name}</div>
                      <div className="flex items-center gap-3 text-xs text-navy-400">
                        <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" /> {v.rating}</span>
                        <span>{v.distanceKm} km</span>
                        <span>Rs. {v.fee}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setBooked(v)}
                    className="bg-navy-500 hover:bg-navy-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                  >
                    Book
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </PatientSidebarLayout>
  );
}