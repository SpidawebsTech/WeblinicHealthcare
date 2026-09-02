import { Link } from "react-router-dom";
import { FiCheck, FiHelpCircle, FiCreditCard } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import { MEMBERSHIP_PLANS } from "../data/membership";
import { useWallet } from "../context/WalletContext";
import "./MembershipPlans.css";

export default function MembershipPlans() {
  const { balance } = useWallet();

  return (
    <DashboardLayout>
      <div className="mp-container">
        <div className="mp-header-row">
          <h1>Choose a plan</h1>
          <Link to="/wallet" className="mp-wallet-link">
            Wallet balance: {balance.toLocaleString()} →
          </Link>
        </div>
        <p className="mp-subtitle">Plans are paid from your wallet balance.</p>

        <div className="mp-plans-grid">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div key={plan.id} className={`mp-plan-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="mp-popular-badge">MOST POPULAR</span>}
              <h3>{plan.name}</h3>
              <div className="mp-price-block">
                <div className="mp-price-row">
                  <FiCreditCard size={18} />
                  <span className="mp-price">{plan.price.toLocaleString()}</span>
                </div>
                <span className="mp-period">/{plan.period}</span>
              </div>
              <div className="mp-perks">
                {plan.perks.map((perk) => (
                  <div key={perk} className="mp-perk">
                    <FiCheck size={15} />
                    {perk}
                  </div>
                ))}
              </div>
              <Link
                to={`/membership/checkout/${plan.id}`}
                className={`mp-choose-btn ${plan.popular ? "popular" : ""}`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mp-faq-card">
          <div className="mp-faq-heading">
            <FiHelpCircle size={16} />
            <h3>Frequently asked questions</h3>
          </div>
          <div className="mp-faq-grid">
            <div>
              <p className="mp-faq-q">Can I change plans later?</p>
              <p>Yes, upgrade or downgrade anytime from My Membership.</p>
            </div>
            <div>
              <p className="mp-faq-q">What happens to unused consultations?</p>
              <p>Allowances reset each billing cycle and don't roll over.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}