import { Link } from "react-router-dom";
import { Check, HelpCircle, Wallet } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";
import { MEMBERSHIP_PLANS } from "../data/membership";
import { useWallet } from "../context/WalletContext";

export default function MembershipPlans() {
  const { balance } = useWallet();

  return (
    <PatientSidebarLayout title="Membership Plans">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold">Choose a plan</h1>
          <Link to="/wallet" className="text-xs font-bold text-navy-500 hover:text-navy-700">
            Wallet balance: {balance.toLocaleString()} →
          </Link>
        </div>
        <p className="text-sm text-navy-400 mb-6">Plans are paid from your wallet balance.</p>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative border rounded-2xl p-6 bg-white ${
                plan.popular ? "border-brand-red shadow-lg" : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <div className="mb-4">
                <div className="flex items-center gap-1.5">
                  <Wallet size={18} className="text-navy-500" />
                  <span className="text-2xl font-bold">{plan.price.toLocaleString()}</span>
                </div>
                <span className="text-xs text-navy-400">/{plan.period}</span>
              </div>
              <div className="flex flex-col gap-2.5 mb-6">
                {plan.perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-green-600 mt-0.5 shrink-0" />
                    {perk}
                  </div>
                ))}
              </div>
              <Link
                to={`/membership/checkout/${plan.id}`}
                className={`block text-center w-full text-sm font-bold py-3 rounded-full transition-colors ${
                  plan.popular
                    ? "bg-brand-red hover:bg-brand-redDark text-white"
                    : "bg-navy-50 hover:bg-navy-100 text-navy-700"
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle size={16} className="text-navy-400" />
            <h3 className="font-bold text-sm">Frequently asked questions</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs text-navy-500">
            <div>
              <p className="font-semibold text-navy-700 mb-1">Can I change plans later?</p>
              <p>Yes, upgrade or downgrade anytime from My Membership.</p>
            </div>
            <div>
              <p className="font-semibold text-navy-700 mb-1">What happens to unused consultations?</p>
              <p>Allowances reset each billing cycle and don't roll over.</p>
            </div>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}