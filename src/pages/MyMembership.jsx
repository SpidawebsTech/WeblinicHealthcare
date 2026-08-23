import { Link } from "react-router-dom";
import { Clock, Video, ShoppingBag, FlaskConical, Users, Wallet, Stethoscope} from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const BENEFITS = [
  { icon: Video, title: "5 Consultations / month", desc: "Video, audio, or in-person visits with any specialist." },
  { icon: ShoppingBag, title: "20% Pharmacy Discount", desc: "Applied automatically at checkout on every order." },
  { icon: FlaskConical, title: "15% Lab Test Discount", desc: "Applied to catalog and doctor-ordered tests alike." },
  { icon: Users, title: "Priority Support", desc: "Faster response times on all support requests." },
];

const BILLING_HISTORY = [
  { label: "1 credit used: Consultation with Dr. Mehreen Fatima", date: "Aug 2, 2026", type: "usage" },
  { label: "1 credit used: Consultation with Dr. Sana Riaz", date: "Jul 28, 2026", type: "usage" },
  { label: "Plan purchased: Plus Plan", date: "Jul 12, 2026", type: "payment", amount: "-1,999" },
  { label: "Pharmacy discount applied: Order #WEB-PH-89021", date: "Jul 10, 2026", type: "usage" },
];

export default function MyMembership() {
  return (
    <PatientSidebarLayout title="My Membership">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-xl font-bold mb-6">My Membership</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 border border-brand-red rounded-2xl p-6 bg-white">
            <span className="text-[10px] font-bold bg-brand-red text-white px-3 py-1 rounded-full">ACTIVE</span>
            <h2 className="font-bold text-xl mt-3 mb-1">Plus Plan</h2>
            <p className="text-sm text-navy-400 mb-6">Renews on Sep 12, 2026</p>

            <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-5 mb-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-2">
                <Stethoscope size={14} /> Credits Remaining
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">3</span>
                <span className="text-sm text-white/70 mb-1">credits remaining</span>
              </div>
              <div className="text-xs text-white/60 mt-1">2 of 5 used this cycle</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div className="bg-white rounded-full h-2" style={{ width: "60%" }} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-navy-50/50 rounded-xl p-4">
                <div className="text-2xl font-bold">20%</div>
                <div className="text-xs text-navy-400">Pharmacy discount active</div>
              </div>
            </div>

            <Link
              to="/membership"
              className="block text-center w-full bg-navy-50 hover:bg-navy-100 text-navy-700 text-sm font-bold py-3 rounded-full transition-colors"
            >
              Change Plan
            </Link>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-navy-400" />
              <h3 className="font-bold text-sm">Recent activity</h3>
            </div>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between">
                <span className="text-navy-500">Consultation used</span>
                <span className="text-navy-400">Aug 2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-500">Consultation used</span>
                <span className="text-navy-400">Jul 28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-500">Plan purchased</span>
                <span className="text-navy-400">Jul 12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white mb-6">
          <h3 className="font-bold text-sm mb-4">What's included in Plus Plan</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy-500 flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold">{title}</div>
                  <div className="text-xs text-navy-400 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white">
          <h3 className="font-bold text-sm mb-4">Billing & Usage History</h3>
          <div className="flex flex-col">
            {BILLING_HISTORY.map((entry, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 ${
                  i !== BILLING_HISTORY.length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <div>
                  <div className="text-sm text-navy-700">{entry.label}</div>
                  <div className="text-xs text-navy-400 mt-0.5">{entry.date}</div>
                </div>
                {entry.amount && (
                  <span className="text-sm font-bold text-navy-600 flex items-center gap-1">
                    <Wallet size={13} /> {entry.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}