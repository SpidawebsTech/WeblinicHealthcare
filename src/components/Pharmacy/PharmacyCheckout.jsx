import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { 
  FiPackage, 
  FiTruck, 
  FiCheckCircle, 
  FiMapPin, 
  FiCreditCard, 
  FiUpload, 
  FiClock,
  FiArrowLeft
} from "react-icons/fi";
import "./PharmacyCheckout.css";

function PharmacyCheckout() {
  const [orderStep, setOrderStep] = useState("checkout"); // 'checkout' or 'tracking'
  const [address, setAddress] = useState({
    street: "House 123, Street 4, Sector F-8/1",
    city: "Islamabad",
    phone: "+92 300 1234567",
    notes: "Leave at front desk"
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const cartItems = [
    { id: 1, name: "Panadol Extra 500mg", qty: 2, price: 150 },
    { id: 2, name: "Amoxicillin 500mg (Rx)", qty: 1, price: 450 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = 150;
  const grandTotal = subtotal + deliveryFee;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0].name);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderStep("tracking");
  };

  return (
    <DashboardLayout>
      <div className="checkout-container">
        {orderStep === "checkout" ? (
          <>
            <div className="checkout-header">
              <h2>Pharmacy Checkout</h2>
              <p>Review your order, provide delivery info, and place your order.</p>
            </div>

            <form onSubmit={handlePlaceOrder} className="checkout-layout">
              <div className="checkout-main">
                <div className="checkout-card">
                  <h3><FiUpload /> Prescription Upload</h3>
                  <p className="section-desc">One or more items in your cart require a doctor's prescription.</p>
                  <div className="file-upload-box">
                    <input 
                      type="file" 
                      id="rx-upload" 
                      onChange={handleFileChange} 
                      accept="image/*,.pdf"
                    />
                    <label htmlFor="rx-upload" className="upload-label">
                      <FiUpload size={24} />
                      <span>{prescriptionFile ? prescriptionFile : "Click to upload e-prescription (JPG, PNG, PDF)"}</span>
                    </label>
                  </div>
                </div>

                <div className="checkout-card">
                  <h3><FiMapPin /> Delivery Address</h3>
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>Street Address</label>
                      <input 
                        type="text" 
                        value={address.street} 
                        onChange={(e) => setAddress({...address, street: e.target.value})} 
                        required 
                      />
                    </div>
                    <div className="input-group">
                      <label>City</label>
                      <input 
                        type="text" 
                        value={address.city} 
                        onChange={(e) => setAddress({...address, city: e.target.value})} 
                        required 
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        value={address.phone} 
                        onChange={(e) => setAddress({...address, phone: e.target.value})} 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="checkout-card">
                  <h3><FiCreditCard /> Payment Method</h3>
                  <div className="payment-options">
                    <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="cod" 
                        checked={paymentMethod === 'cod'} 
                        onChange={() => setPaymentMethod('cod')} 
                      />
                      <div>
                        <strong>Cash on Delivery (COD)</strong>
                        <p>Pay in cash when your medicines are delivered.</p>
                      </div>
                    </label>

                    <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card" 
                        checked={paymentMethod === 'card'} 
                        onChange={() => setPaymentMethod('card')} 
                      />
                      <div>
                        <strong>Credit / Debit Card</strong>
                        <p>Pay online securely with Visa or Mastercard.</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="checkout-summary-col">
                <div className="checkout-card sticky-card">
                  <h3>Order Summary</h3>
                  <div className="summary-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="summary-item-row">
                        <span>{item.name} x {item.qty}</span>
                        <strong>Rs. {item.price * item.qty}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Fee</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total</span>
                    <strong>Rs. {grandTotal}</strong>
                  </div>

                  <button type="submit" className="place-order-btn">
                    Place Order (Rs. {grandTotal})
                  </button>
                </div>
              </div>
            </form>
          </>) : (

          <div className="tracking-wrapper">
            <div className="tracking-card">
              <div className="tracking-header">
                <div className="status-badge">
                  <FiCheckCircle /> Order Confirmed
                </div>
                <h2>Order #WEB-PH-89021</h2>
                <p>Estimated Delivery: <strong>Today, within 2 hours</strong></p>
              </div>

              <div className="stepper-container">
                <div className="step completed">
                  <div className="step-icon"><FiCheckCircle /></div>
                  <span>Order Placed</span>
                </div>
                <div className="step-line active"></div>
                <div className="step active">
                  <div className="step-icon"><FiClock /></div>
                  <span>Prescription Verified</span>
                </div>
                <div className="step-line"></div>
                <div className="step">
                  <div className="step-icon"><FiPackage /></div>
                  <span>Packed</span>
                </div>
                <div className="step-line"></div>
                <div className="step">
                  <div className="step-icon"><FiTruck /></div>
                  <span>Out for Delivery</span>
                </div>
              </div>

              <div className="tracking-info-grid">
                <div>
                  <h4>Delivery Address</h4>
                  <p>{address.street}, {address.city}</p>
                  <p>Contact: {address.phone}</p>
                </div>
                <div>
                  <h4>Payment Details</h4>
                  <p>Method: {paymentMethod === "cod" ? "Cash on Delivery" : "Credit Card"}</p>
                  <p>Amount: <strong>Rs. {grandTotal}</strong></p>
                </div>
              </div>

              <button className="back-btn" onClick={() => setOrderStep("checkout")}>
                <FiArrowLeft size={15} />
                Back to Pharmacy
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default PharmacyCheckout;