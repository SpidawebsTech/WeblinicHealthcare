import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiCalendar, FiClock, FiCreditCard, FiCheckCircle } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import { DOCTORS } from "../data/doctors";
import "./AppointmentBooking.css";

const DATES = ["Mon, Aug 12", "Tue, Aug 13", "Wed, Aug 14", "Thu, Aug 15", "Fri, Aug 16"];
const TIME_SLOTS = ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"];

export default function AppointmentBooking() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  const [selectedDate, setSelectedDate] = useState(DATES[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!doctor) {
    return (
      <DashboardLayout>
        <div className="ab-not-found">Doctor not found.</div>
      </DashboardLayout>
    );
  }

  const handleContinueToPayment = () => {
    if (!selectedTime) {
      setError("Please select a time slot before continuing.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleConfirmPayment = () => {
    setStep(3);
  };

  return (
    <DashboardLayout>
      <div className="ab-container">
        <Link to={`/doctors/${doctor.slug}`} className="ab-back-link">
          ← Back to {doctor.name}'s profile
        </Link>

        <div className="ab-steps">
          {["Select Slot", "Payment", "Confirmed"].map((label, i) => (
            <div key={label} className="ab-step-item">
              <div
                className={`ab-step-circle ${
                  step > i + 1 ? "done" : step === i + 1 ? "active" : ""
                }`}
              >
                {step > i + 1 ? <FiCheckCircle size={14} /> : i + 1}
              </div>
              <span className={`ab-step-label ${step >= i + 1 ? "active" : ""}`}>{label}</span>
              {i < 2 && <div className="ab-step-line" />}
            </div>
          ))}
        </div>

        <div className="ab-grid">
          <div className="ab-main-col">
            {step === 1 && (
              <div className="ab-card">
                <div className="ab-section-heading"><FiCalendar size={16} /> Select a date</div>
                <div className="ab-chip-row">
                  {DATES.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`ab-chip ${selectedDate === d ? "active" : ""}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="ab-section-heading"><FiClock size={16} /> Select a time</div>
                <div className="ab-time-grid">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`ab-time-chip ${selectedTime === t ? "active" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {error && <p className="ab-error">{error}</p>}

                <button onClick={handleContinueToPayment} className="ab-primary-btn">
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="ab-card">
                <div className="ab-section-heading"><FiCreditCard size={16} /> Payment Method</div>

                <div className="ab-payment-options">
                  <label className={`ab-payment-option ${paymentMethod === "card" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <div>
                      <div className="ab-payment-title">Credit / Debit Card</div>
                      <div className="ab-payment-sub">Pay securely with Visa or Mastercard.</div>
                    </div>
                  </label>

                  <label className={`ab-payment-option ${paymentMethod === "wallet" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                    />
                    <div>
                      <div className="ab-payment-title">JazzCash / Easypaisa</div>
                      <div className="ab-payment-sub">Pay using your mobile wallet.</div>
                    </div>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="ab-card-fields">
                    <input type="text" placeholder="Card number" className="ab-input ab-input-full" />
                    <input type="text" placeholder="MM/YY" className="ab-input" />
                    <input type="text" placeholder="CVV" className="ab-input" />
                  </div>
                )}

                {paymentMethod === "wallet" && (
                  <input type="tel" placeholder="Mobile number (03XXXXXXXXX)" className="ab-input ab-input-block" />
                )}

                <p className="ab-mock-note">
                  Payment processing not yet integrated. The selection above is functional, charging is mocked.
                </p>
                <button onClick={handleConfirmPayment} className="ab-primary-btn">
                  Confirm & Pay (Mock)
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="ab-card ab-confirmed">
                <div className="ab-confirmed-icon"><FiCheckCircle size={28} /></div>
                <h2>Appointment Confirmed!</h2>
                <p>{doctor.name} · {selectedDate} at {selectedTime}</p>
                <button onClick={() => navigate("/appointments")} className="ab-secondary-btn">
                  Go to My Appointments
                </button>
              </div>
            )}
          </div>

          <div className="ab-sidebar">
            <div className="ab-doc-header">
              <div className="ab-doc-avatar">{doctor.initials}</div>
              <div>
                <div className="ab-doc-name">{doctor.name}</div>
                <div className="ab-doc-spec">{doctor.spec}</div>
              </div>
            </div>
            <div className="ab-doc-meta">
              <div><span>Experience</span><span>{doctor.years} yrs</span></div>
              <div><span>Rating</span><span>{doctor.rating} ★</span></div>
              <div><span>Fee</span><span>Rs. {doctor.fee.toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}