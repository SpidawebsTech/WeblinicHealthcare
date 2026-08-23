import { Phone, MessageCircle, Users } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const MATCHES = [
  { name: "Ahmed R.", bloodType: "O+", distanceKm: 1.8, phone: "+92 3XX XXXXXXX" },
  { name: "Fatima S.", bloodType: "O+", distanceKm: 3.2, phone: "+92 3XX XXXXXXX" },
];

export default function DonorDirectConnect() {
  return (
    <PatientSidebarLayout title="Direct Donor Connect">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-xl font-bold mb-1">Direct Donor Connect</h1>
        <p className="text-sm text-navy-400 mb-6">
          Nearby, type-compatible donors. Connect directly and coordinate donation yourselves.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-4">
            {MATCHES.map((m) => (
              <div key={m.name} className="border border-gray-100 rounded-2xl p-5 bg-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy-500 text-white text-sm font-bold flex items-center justify-center">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{m.name}</div>
                    <div className="text-xs text-navy-400">{m.bloodType} · {m.distanceKm} km away</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                    <Phone size={15} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-navy-50 text-navy-600 flex items-center justify-center">
                    <MessageCircle size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit sticky top-6 text-center">
            <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-500 flex items-center justify-center mx-auto mb-3">
              <Users size={22} />
            </div>
            <div className="text-3xl font-bold text-brand-red mb-1">{MATCHES.length}</div>
            <div className="text-xs text-navy-400 mb-4">compatible donors nearby</div>
            <p className="text-xs text-navy-500">
              Weblinic facilitates the introduction only. Coordinate donation directly with your match.
            </p>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}