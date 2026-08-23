import { useState } from "react";
import { Heart, CheckCircle2 } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodBecomeDonor() {
  const [bloodType, setBloodType] = useState("");
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return (
      <PatientSidebarLayout title="Become a Donor">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10">
          <div className="text-center border border-gray-100 rounded-2xl p-10 bg-white">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={26} />
            </div>
            <h2 className="font-bold text-lg mb-2">You're registered!</h2>
            <p className="text-sm text-navy-400">
              You'll be notified when someone nearby needs your blood type, or when a walk-in donation slot opens up.
            </p>
          </div>
        </div>
      </PatientSidebarLayout>
    );
  }

  return (
    <PatientSidebarLayout title="Become a Donor">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-xl font-bold mb-1">Become a Donor</h1>
        <p className="text-sm text-navy-400 mb-6">
          Join Weblinic's voluntary donor pool, and get matched automatically with nearby requests.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-gray-100 rounded-2xl p-6 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center text-xs font-bold">1</div>
              <h3 className="font-bold text-sm">Your Blood Type</h3>
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

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit sticky top-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart size={16} className="text-brand-red" />
              <h3 className="font-bold text-sm">Why donate?</h3>
            </div>
            <div className="flex flex-col gap-3 text-xs text-navy-500 mb-5">
              <p>One donation can help save up to 3 lives.</p>
              <p>You'll only be contacted when a compatible match is needed nearby.</p>
              <p>Eligible to donate again after 3 months.</p>
            </div>
            <button
              onClick={() => bloodType && setRegistered(true)}
              disabled={!bloodType}
              className="w-full bg-brand-red hover:bg-brand-redDark disabled:bg-gray-200 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-full transition-colors"
            >
              Register as Donor
            </button>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}