import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, CheckCircle2, CreditCard } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";
import { WALLET_PACKAGES } from "../data/wallet";
import { useWallet } from "../context/WalletContext";

export default function BuyCredits() {
  const navigate = useNavigate();
  const { addCredits } = useWallet();
  const [selectedPack, setSelectedPack] = useState(WALLET_PACKAGES[1].id);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [confirmed, setConfirmed] = useState(false);

  const pack = WALLET_PACKAGES.find((p) => p.id === selectedPack);

  if (confirmed) {
    return (
      <PatientSidebarLayout title="Top Up Wallet">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
          <div className="text-center border border-gray-100 rounded-2xl p-10 bg-white">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={26} />
            </div>
            <h2 className="font-bold text-lg mb-2">
              Rs. {(pack.amount + pack.bonus).toLocaleString()} added to your wallet
            </h2>
            <p className="text-sm text-navy-400 mb-6">
              Your wallet has been topped up. You can now use this balance to purchase a membership plan.
            </p>
            <button
              onClick={() => navigate("/my-membership")}
              className="w-full bg-navy-500 hover:bg-navy-600 text-white text-sm font-bold py-3 rounded-full transition-colors"
            >
              Go to My Membership
            </button>
          </div>
        </div>
      </PatientSidebarLayout>
    );
  }

  return (
    <PatientSidebarLayout title="Top Up Wallet">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-xl font-bold mb-1">Top Up Wallet</h1>
        <p className="text-sm text-navy-400 mb-6">
          Add funds to your wallet — use your balance to purchase membership plans and more.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-navy-50 text-navy-500 flex items-center justify-center text-xs font-bold">1</div>
                <h3 className="font-bold text-sm">Choose an Amount</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {WALLET_PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPack(p.id)}
                    className={`text-left p-4 rounded-xl border transition-colors ${
                      selectedPack === p.id ? "border-navy-400 bg-navy-50/50" : "border-gray-200"
                    }`}
                  >
                    <div className="text-lg font-bold">Rs. {p.amount.toLocaleString()}</div>
                    {p.bonus > 0 && (
                      <div className="text-[10px] font-bold text-green-600 mt-1">+Rs. {p.bonus} bonus</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-navy-50 text-navy-500 flex items-center justify-center text-xs font-bold">2</div>
                <h3 className="font-bold text-sm">Payment Method</h3>
              </div>
              <div className="flex flex-col gap-3">
                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "card" ? "border-navy-400 bg-navy-50/50" : "border-gray-200"}`}>
                  <input type="radio" name="pm" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="mt-0.5 accent-navy-500" />
                  <div>
                    <div className="text-sm font-bold">Credit / Debit Card</div>
                    <div className="text-xs text-navy-400">Pay securely with Visa or Mastercard.</div>
                  </div>
                </label>
                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "wallet" ? "border-navy-400 bg-navy-50/50" : "border-gray-200"}`}>
                  <input type="radio" name="pm" checked={paymentMethod === "wallet"} onChange={() => setPaymentMethod("wallet")} className="mt-0.5 accent-navy-500" />
                  <div>
                    <div className="text-sm font-bold">JazzCash / Easypaisa</div>
                    <div className="text-xs text-navy-400">Pay using your mobile wallet.</div>
                  </div>
                </label>
              </div>
              <p className="text-xs text-amber-600 italic mt-4">
                Payment processing not yet integrated. The selection above is functional, charging is mocked.
              </p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit sticky top-6">
            <div className="flex items-center gap-2 mb-4">
              <Wallet size={16} className="text-navy-400" />
              <h3 className="font-bold text-sm">Order Summary</h3>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-navy-400">Top-up amount</span>
              <span className="font-semibold">Rs. {pack.amount.toLocaleString()}</span>
            </div>
            {pack.bonus > 0 && (
              <div className="flex justify-between text-sm mb-2">
                <span className="text-navy-400">Bonus</span>
                <span className="font-semibold text-green-600">+Rs. {pack.bonus}</span>
              </div>
            )}
            <div className="flex justify-between text-sm pt-2 border-t border-gray-100 mt-2 mb-5">
              <span className="text-navy-400">Total to pay</span>
              <span className="font-bold text-brand-red">Rs. {pack.amount.toLocaleString()}</span>
            </div>
            <button
              onClick={() => {
                addCredits(pack.amount + pack.bonus);
                setConfirmed(true);
              }}
              className="w-full bg-navy-500 hover:bg-navy-600 text-white text-sm font-bold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard size={15} /> Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}