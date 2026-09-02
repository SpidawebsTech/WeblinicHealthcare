import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiCheckCircle } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import { WALLET_PACKAGES } from "../data/wallet";
import { useWallet } from "../context/WalletContext";
import "./BuyCredits.css";

export default function BuyCredits() {
  const navigate = useNavigate();
  const { addCredits } = useWallet();
  const [selectedPack, setSelectedPack] = useState(WALLET_PACKAGES[1].id);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [confirmed, setConfirmed] = useState(false);

  const pack = WALLET_PACKAGES.find((p) => p.id === selectedPack);

  if (confirmed) {
    return (
      <DashboardLayout>
        <div className="bc-success-wrap">
          <div className="bc-success-card">
            <div className="bc-success-icon"><FiCheckCircle size={26} /></div>
            <h2>Rs. {(pack.amount + pack.bonus).toLocaleString()} added to your wallet</h2>
            <p>Your wallet has been topped up. You can now use this balance to purchase a membership plan.</p>
            <button onClick={() => navigate("/my-membership")} className="bc-goto-btn">
              Go to My Membership
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bc-container">
        <h1>Top Up Wallet</h1>
        <p className="bc-subtitle">Add funds to your wallet — use your balance to purchase membership plans and more.</p>

        <div className="bc-grid">
          <div className="bc-main">
            <div className="bc-card">
              <div className="bc-step-heading">
                <span className="bc-step-num">1</span>
                <h3>Choose an Amount</h3>
              </div>
              <div className="bc-amount-grid">
                {WALLET_PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPack(p.id)}
                    className={`bc-amount-btn ${selectedPack === p.id ? "active" : ""}`}
                  >
                    <div className="bc-amount-value">Rs. {p.amount.toLocaleString()}</div>
                    {p.bonus > 0 && (
                      <div className="bc-amount-bonus">+Rs. {p.bonus} bonus</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bc-card">
              <div className="bc-step-heading">
                <span className="bc-step-num">2</span>
                <h3>Payment Method</h3>
              </div>
              <div className="bc-payment-list">
                <label className={`bc-payment-option ${paymentMethod === "card" ? "active" : ""}`}>
                  <input type="radio" name="pm" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                  <div>
                    <div className="bc-payment-title">Credit / Debit Card</div>
                    <div className="bc-payment-desc">Pay securely with Visa or Mastercard.</div>
                  </div>
                </label>
                <label className={`bc-payment-option ${paymentMethod === "wallet" ? "active" : ""}`}>
                  <input type="radio" name="pm" checked={paymentMethod === "wallet"} onChange={() => setPaymentMethod("wallet")} />
                  <div>
                    <div className="bc-payment-title">JazzCash / Easypaisa</div>
                    <div className="bc-payment-desc">Pay using your mobile wallet.</div>
                  </div>
                </label>
              </div>
              <p className="bc-payment-note">
                Payment processing not yet integrated. The selection above is functional, charging is mocked.
              </p>
            </div>
          </div>

          <div className="bc-sidebar">
            <div className="bc-summary-heading">
              <FiCreditCard size={16} />
              <h3>Order Summary</h3>
            </div>
            <div className="bc-summary-row">
              <span>Top-up amount</span>
              <span className="bc-summary-value">Rs. {pack.amount.toLocaleString()}</span>
            </div>
            {pack.bonus > 0 && (
              <div className="bc-summary-row">
                <span>Bonus</span>
                <span className="bc-summary-bonus">+Rs. {pack.bonus}</span>
              </div>
            )}
            <div className="bc-summary-total">
              <span>Total to pay</span>
              <span className="bc-summary-total-value">Rs. {pack.amount.toLocaleString()}</span>
            </div>
            <button
              onClick={() => {
                addCredits(pack.amount + pack.bonus);
                setConfirmed(true);
              }}
              className="bc-confirm-btn"
            >
              <FiCreditCard size={15} /> Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}