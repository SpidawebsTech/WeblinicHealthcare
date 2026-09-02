import { useState } from "react";
import { FiAlertTriangle, FiMapPin, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./AmbulanceEmergency.css";

const SAVED_ADDRESSES = [
  { id: "home", label: "Home", address: "House 123, Street 4, Sector F-8/1, Islamabad" },
  { id: "work", label: "Work", address: "Office 45, Blue Area, Islamabad" },
];

export default function AmbulanceEmergency() {
  const [dispatched, setDispatched] = useState(false);
  const [addresses, setAddresses] = useState(SAVED_ADDRESSES);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (!newLabel.trim() || !newAddress.trim()) return;
    const id = newLabel.toLowerCase().replace(/\s+/g, "-");
    setAddresses([...addresses, { id, label: newLabel, address: newAddress }]);
    setSelectedAddress(id);
    setNewLabel("");
    setNewAddress("");
    setShowAddModal(false);
  };

  return (
    <DashboardLayout>
      <div className="ae-container">
        <div className="ae-main">
          {dispatched ? (
            <div className="ae-dispatched-card">
              <div className="ae-dispatched-icon"><FiAlertTriangle size={26} /></div>
              <h2>Ambulance dispatched</h2>
              <p>Nearest available vehicle is on the way.</p>
              <Link to="/ambulance/tracking" className="ae-track-link">
                Track live location →
              </Link>
            </div>
          ) : (
            <div className="ae-request-card">
              <div className="ae-request-header">
                <div className="ae-request-icon"><FiAlertTriangle size={30} /></div>
                <h2>Emergency Request</h2>
                <Link to="/ambulance/scheduled" className="ae-schedule-link">
                  Not an emergency? Schedule a transfer instead →
                </Link>
                <p>One tap dispatches the nearest available ambulance, no provider selection needed.</p>
              </div>

              <div className="ae-pickup-section">
                <div className="ae-pickup-heading">
                  <div className="ae-pickup-label">
                    <FiMapPin size={16} /> Pickup Location
                  </div>
                  <button onClick={() => setShowAddModal(true)} className="ae-add-address-btn">
                    <FiPlus size={12} /> Add New Address
                  </button>
                </div>
                <div className="ae-address-grid">
                  {addresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`ae-address-card ${selectedAddress === addr.id ? "active" : ""}`}
                    >
                      <div className="ae-address-label">{addr.label}</div>
                      <div className="ae-address-text">{addr.address}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setDispatched(true)} className="ae-request-btn">
                Request Emergency Ambulance
              </button>
            </div>
          )}
        </div>

        <div className="ae-sidebar">
          <h3>What happens next</h3>
          <div className="ae-steps">
            <div className="ae-step">
              <span className="ae-step-num">1</span>
              <span>Nearest available ambulance is located automatically.</span>
            </div>
            <div className="ae-step">
              <span className="ae-step-num">2</span>
              <span>Driver accepts and begins route to your location.</span>
            </div>
            <div className="ae-step">
              <span className="ae-step-num">3</span>
              <span>Track live location once dispatched.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="ae-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="ae-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Address</h3>
            <label className="ae-form-label">Label</label>
            <input
              type="text"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              placeholder="e.g. Parents' House"
              className="ae-form-input"
            />
            <label className="ae-form-label">Address</label>
            <textarea
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              rows={2}
              placeholder="Street, sector, city"
              className="ae-form-textarea"
            />
            <div className="ae-modal-actions">
              <button onClick={() => setShowAddModal(false)} className="ae-cancel-btn">
                Cancel
              </button>
              <button onClick={handleAddAddress} className="ae-save-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}