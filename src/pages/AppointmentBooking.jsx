import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";
import { DOCTORS } from "../data/doctors";

const DATES = ["Mon, Aug 12", "Tue, Aug 13", "Wed, Aug 14", "Thu, Aug 15", "Fri, Aug 16"];
const TIME_SLOTS = ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"];

export default function AppointmentBooking() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  const [selectedDate, setSelectedDate] = useState(DATES[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1 = slot, 2 = payment, 3 = confirmed
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!doctor) {
    return (
      <PatientSidebarLayout title="Book Appointment">
        <div className="text-center py-24 text-navy-400">Doctor not found.</div>
      </PatientSidebarLayout>
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
    // SP 4.4/4.5: slot lock + payment collection. Method selection is real;
    // actual charge processing is mocked — no gateway wired up yet, matches
    // the "payment page: dedicated or inline?" open question on the nav diagram.
    setStep(3);
  };

  return (
    <PatientSidebarLayout title="Book Appointment">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <Link to={`/doctors/${doctor.slug}`} className="text-sm text-navy-400 hover:text-navy-700">
          ← Back to {doctor.name}'s profile
        </Link>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mt-6 mb-8 max-w-2xl">
          {["Select Slot", "Payment", "Confirmed"].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  step > i + 1
                    ? "bg-green-600 text-white"
                    : step === i + 1
                    ? "bg-navy-500 text-white"
                    : "bg-gray-100 text-navy-300"
                }`}
              >
                {step > i + 1 ? <CheckCircle2 size={14} /> : i + 1}
              </div>
              <span className={`text-xs font-semibold ${step >= i + 1 ? "text-navy-700" : "text-navy-300"}`}>
                {label}
              </span>
              {i < 2 && <div className="flex-1 h-px bg-gray-100" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Step 1: Slot selection */}
            {step === 1 && (
              <div className="border border-gray-100 rounded-2xl p-6 bg-white">
                <div className="flex items-center gap-2 mb-4 text-sm font-bold">
                  <Calendar size={16} /> Select a date
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {DATES.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                        selectedDate === d
                          ? "bg-navy-500 text-white"
                          : "bg-gray-50 text-navy-600 hover:bg-gray-100"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm font-bold">
                  <Clock size={16} /> Select a time
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                        selectedTime === t
                          ? "bg-brand-red text-white"
                          : "bg-gray-50 text-navy-600 hover:bg-gray-100"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {error && <p className="text-xs text-red-600 mb-4">{error}</p>}

                <button
                  onClick={handleContinueToPayment}
                  className="w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="border border-gray-100 rounded-2xl p-6 bg-white">
                <div className="flex items-center gap-2 mb-4 text-sm font-bold">
                  <CreditCard size={16} /> Payment Method
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "card" ? "border-navy-400 bg-navy-50/50" : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mt-0.5 accent-navy-500"
                    />
                    <div>
                      <div className="text-sm font-bold">Credit / Debit Card</div>
                      <div className="text-xs text-navy-400">Pay securely with Visa or Mastercard.</div>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "wallet" ? "border-navy-400 bg-navy-50/50" : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                      className="mt-0.5 accent-navy-500"
                    />
                    <div>
                      <div className="text-sm font-bold">JazzCash / Easypaisa</div>
                      <div className="text-xs text-navy-400">Pay using your mobile wallet.</div>
                    </div>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="col-span-2 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none"
                    />
                  </div>
                )}

                {paymentMethod === "wallet" && (
                  <input
                    type="tel"
                    placeholder="Mobile number (03XXXXXXXXX)"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm mb-6 focus:outline-none"
                  />
                )}

                <p className="text-xs text-amber-600 italic mb-4">
                  Payment processing not yet integrated. The selection above is functional, charging is mocked.
                </p>
                <button
                  onClick={handleConfirmPayment}
                  className="w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
                >
                  Confirm & Pay (Mock)
                </button>
              </div>
            )}

            {/* Step 3: Confirmed */}
            {step === 3 && (
              <div className="border border-gray-100 rounded-2xl p-8 bg-white text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="text-lg font-bold mb-2">Appointment Confirmed!</h2>
                <p className="text-sm text-navy-400 mb-6">
                  {doctor.name} · {selectedDate} at {selectedTime}
                </p>
                <button
                  onClick={() => navigate("/appointments")}
                  className="w-full bg-navy-500 hover:bg-navy-600 text-white text-sm font-bold py-3 rounded-full transition-colors"
                >
                  Go to My Appointments
                </button>
              </div>
            )}
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-navy-500 text-white font-bold flex items-center justify-center">
                {doctor.initials}
              </div>
              <div>
                <div className="font-bold text-sm">{doctor.name}</div>
                <div className="text-xs text-brand-red font-semibold">{doctor.spec}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 text-xs text-navy-500 border-t border-gray-50 pt-4">
              <div className="flex justify-between"><span>Experience</span><span className="font-semibold">{doctor.years} yrs</span></div>
              <div className="flex justify-between"><span>Rating</span><span className="font-semibold">{doctor.rating} ★</span></div>
              <div className="flex justify-between"><span>Fee</span><span className="font-semibold">Rs. {doctor.fee.toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}