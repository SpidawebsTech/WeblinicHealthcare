import { useState } from "react";
import { Link } from "react-router-dom";
import { Droplet, AlertTriangle, MapPin } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodRequestBlood() {
  const [bloodType, setBloodType] = useState("");
  const [units, setUnits] = useState(1);
  const [emergency, setEmergency] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!bloodType) {
      setError("Please select a blood type.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PatientSidebarLayout title="Request Blood">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10">
          <div className="text-center border border-gray-100 rounded-2xl p-10 bg-white">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <Droplet size={26} />
            </div>
            <h2 className="font-bold text-lg mb-2">
              {emergency ? "Emergency request sent" : "Request submitted"}
            </h2>
            <p className="text-sm text-navy-400 mb-4">
              {emergency
                ? "Checking inventory and matching donors now — you'll be notified immediately."
                : "We'll notify you once inventory or a matching donor is found."}
            </p>
            <Link to="/blood/connect" className="text-xs font-bold text-navy-500 hover:text-navy-700">
              View matched donors →
            </Link>
          </div>
        </div>
      </PatientSidebarLayout>
    );
  }

  return (
    <PatientSidebarLayout title="Request Blood">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-xl font-bold mb-1">Request Blood</h1>
        <p className="text-sm text-navy-400 mb-1">
          Submit your requirement. We'll check inventory and nearby donors.
        </p>
        <Link to="/blood/donate" className="text-xs font-bold text-navy-500 hover:text-navy-700">
          Want to donate instead? →
        </Link>
        <div className="mt-5" />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center text-xs font-bold">1</div>
                <h3 className="font-bold text-sm">Blood Type Needed</h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {BLOOD_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBloodType(type)}
                    className={`py-2.5 rounded-lg text-sm font-bold transition-colors ${
                      bloodType === type ? "bg-brand-red text-white" : "bg-gray-50 text-navy-600 hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center text-xs font-bold">2</div>
                <h3 className="font-bold text-sm">Units & Priority</h3>
              </div>
              <label className="block text-xs font-semibold mb-2 text-navy-500">Units needed</label>
              <input
                type="number"
                min={1}
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm mb-4 focus:outline-none"
              />
              <label className="flex items-center gap-2.5 p-3 bg-red-50 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={emergency}
                  onChange={(e) => setEmergency(e.target.checked)}
                  className="accent-brand-red"
                />
                <span className="text-sm font-semibold text-brand-red flex items-center gap-1.5">
                  <AlertTriangle size={14} /> Mark as emergency
                </span>
              </label>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit sticky top-6">
            <h3 className="font-bold text-sm mb-4">Request Summary</h3>
            <div className="flex flex-col gap-3 text-sm mb-5">
              <div className="flex justify-between">
                <span className="text-navy-400">Blood type</span>
                <span className="font-semibold">{bloodType || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-400">Units</span>
                <span className="font-semibold">{units}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-400">Priority</span>
                <span className={`font-semibold ${emergency ? "text-brand-red" : ""}`}>
                  {emergency ? "Emergency" : "Standard"}
                </span>
              </div>
            </div>
            {error && <p className="text-xs text-red-600 mb-3">{error}</p>}
            <button
              onClick={handleSubmit}
              className="w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
            >
              Submit Request
            </button>
            <div className="flex items-start gap-2 mt-4 text-xs text-navy-400">
              <MapPin size={13} className="mt-0.5 shrink-0" />
              Matched against partner hospitals and donors near you.
            </div>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}