import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CheckCircle2, Wallet, AlertCircle } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";
import { MEMBERSHIP_PLANS } from "../data/membership";
import { useWallet } from "../context/WalletContext";

export default function MembershipCheckout() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = MEMBERSHIP_PLANS.find((p) => p.id === planId);
  const { balance, deductCredits } = useWallet();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  if (!plan) {
    return (
      <PatientSidebarLayout title="Checkout">
        <div className="text-center py-24 text-navy-400">Plan not found.</div>
      </PatientSidebarLayout>
    );
  }

  const insufficientBalance = balance < plan.price;

  const handleConfirm = () => {
    const success = deductCredits(plan.price);
    if (!success) {
      setError("Insufficient wallet balance.");
      return;
    }
    setConfirmed(true);
  };

  return (
    <PatientSidebarLayout title="Checkout">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {confirmed ? (
            <div className="text-center border border-gray-100 rounded-2xl p-8 bg-white">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="font-bold text-lg mb-2">Welcome to {plan.name}!</h2>
              <p className="text-sm text-navy-400 mb-6">Your membership is now active.</p>
              <button
                onClick={() => navigate("/my-membership")}
                className="w-full bg-navy-500 hover:bg-navy-600 text-white text-sm font-bold py-3 rounded-full transition-colors"
              >
                View My Membership
              </button>
            </div>
          ) : (
            <div className="border border-gray-100 rounded-2xl p-6 bg-white">
              <h2 className="font-bold text-lg mb-4">Confirm your plan</h2>
              <div className="bg-navy-50/50 rounded-xl p-4 mb-6 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-navy-400">Plan</span>
                  <span className="font-semibold">{plan.name}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-navy-100 mt-2">
                  <span className="text-navy-400">Cost</span>
                  <span className="font-bold text-brand-red flex items-center gap-1">
                    <Wallet size={14} /> {plan.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between bg-navy-50/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Wallet size={16} className="text-navy-500" /> Wallet Balance
                </div>
                <span className={`text-sm font-bold flex items-center gap-1 ${insufficientBalance ? "text-brand-red" : "text-green-700"}`}>
                  <Wallet size={14} /> {balance.toLocaleString()}
                </span>
              </div>

              {insufficientBalance && (
                <div className="flex items-start gap-2 bg-red-50 text-brand-red text-xs p-3 rounded-lg mb-4">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <span>
                    Your wallet balance is too low for this plan.{" "}
                    <Link to="/wallet" className="font-bold underline">
                      Top up your wallet →
                    </Link>
                  </span>
                </div>
              )}

              {error && <p className="text-xs text-red-600 mb-4">{error}</p>}

              <button
                onClick={handleConfirm}
                disabled={insufficientBalance}
                className="w-full bg-brand-red hover:bg-brand-redDark disabled:bg-gray-200 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-full transition-colors"
              >
                Pay with Wallet
              </button>
            </div>
          )}
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit">
          <h3 className="font-bold text-sm mb-3">What you're getting</h3>
          <div className="flex flex-col gap-2.5 text-xs text-navy-500">
            {plan.perks.map((perk) => (
              <div key={perk} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> {perk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}