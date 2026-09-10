import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiCheckCircle, FiCreditCard, FiAlertCircle } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import { MEMBERSHIP_PLANS } from "../data/membership";
import { useWallet } from "../context/WalletContext";
import "./MembershipCheckout.css";

export default function MembershipCheckout() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = MEMBERSHIP_PLANS.find((p) => p.id === planId);
  const { balance, deductCredits } = useWallet();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  if (!plan) {
    return (
      <DashboardLayout>
        <div className="mc-not-found">Plan not found.</div>
      </DashboardLayout>
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
    <DashboardLayout>
      <div className="mc-grid">
        <div className="mc-main-col">
          {confirmed ? (
            <div className="mc-card mc-confirmed">
              <div className="mc-confirmed-icon"><FiCheckCircle size={28} /></div>
              <h2>Welcome to {plan.name}!</h2>
              <p>Your membership is now active.</p>
              <button onClick={() => navigate("/my-membership")} className="mc-secondary-btn">
                View My Membership
              </button>
            </div>
          ) : (
            <div className="mc-card">
              <h2>Confirm your plan</h2>
              <div className="mc-summary-box">
                <div className="mc-summary-row">
                  <span>Plan</span>
                  <span className="mc-bold">{plan.name}</span>
                </div>
                <div className="mc-summary-row mc-summary-total">
                  <span>Cost</span>
                  <span className="mc-cost">
                    <FiCreditCard size={14} /> {plan.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mc-wallet-row">
                <div className="mc-wallet-label">
                  <FiCreditCard size={16} /> Wallet Balance
                </div>
                <span className={`mc-wallet-balance ${insufficientBalance ? "low" : "ok"}`}>
                  <FiCreditCard size={14} /> {balance.toLocaleString()}
                </span>
              </div>

              {insufficientBalance && (
                <div className="mc-warning">
                  <FiAlertCircle size={14} />
                  <span>
                    Your wallet balance is too low for this plan.{" "}
                    <Link to="/wallet" className="mc-warning-link">Top up your wallet →</Link>
                  </span>
                </div>
              )}

              {error && <p className="mc-error">{error}</p>}

              <button onClick={handleConfirm} disabled={insufficientBalance} className="mc-primary-btn">
                Pay with Wallet
              </button>
            </div>
          )}
        </div>

        <div className="mc-sidebar">
          <h3>What you're getting</h3>
          <div className="mc-perks">
            {plan.perks.map((perk) => (
              <div key={perk} className="mc-perk">
                <span className="mc-check">✓</span> {perk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}