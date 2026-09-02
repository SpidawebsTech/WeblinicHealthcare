import React, { useState } from 'react';
import './SampleCollectionScheduling.css';

const MOCK_SAVED_ADDRESSES = [
  {
    id: 'addr_1',
    label: 'Home',
    street: '123 Main St, Apt 4B',
    city: 'Metropolis',
    zip: '10001',
    isServiceable: true,
  },
  {
    id: 'addr_2',
    label: 'Work',
    street: '456 Tech Ave, Suite 200',
    city: 'Metropolis',
    zip: '10002',
    isServiceable: true,
  },
  {
    id: 'addr_3',
    label: 'Parents House',
    street: '789 Rural Route, Sector 5',
    city: 'Outskirts',
    zip: '90001',
    isServiceable: false, 
  },
];

const MOCK_SLOTS = [
  { id: 'slot_1', time: '07:00 AM - 08:00 AM', period: 'Morning', available: true },
  { id: 'slot_2', time: '08:00 AM - 09:00 AM', period: 'Morning', available: true },
  { id: 'slot_3', time: '09:00 AM - 10:00 AM', period: 'Morning', available: false },
  { id: 'slot_4', time: '10:00 AM - 11:00 AM', period: 'Morning', available: true },
  { id: 'slot_5', time: '02:00 PM - 03:00 PM', period: 'Afternoon', available: true },
  { id: 'slot_6', time: '04:00 PM - 05:00 PM', period: 'Afternoon', available: true },
];

export default function SampleCollectionScheduling() {
  const [selectedTests, setSelectedTests] = useState([
    { id: 't1', name: 'Complete Blood Count (CBC)', price: 35.0, fastingRequired: false },
    { id: 't2', name: 'Lipid Profile', price: 50.0, fastingRequired: true },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState('addr_1');
  const [selectedDate, setSelectedDate] = useState('2026-08-13');
  const [selectedSlotId, setSelectedSlotId] = useState('slot_1');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showFastingModal, setShowFastingModal] = useState(false);
  const [pendingSlotId, setPendingSlotId] = useState(null);
  const currentAddress = MOCK_SAVED_ADDRESSES.find((a) => a.id === selectedAddressId);
  const hasFastingTest = selectedTests.some((t) => t.fastingRequired);
  const collectionFee = 15.0;
  const subtotal = selectedTests.reduce((sum, test) => sum + test.price, 0);
  const tax = subtotal * 0.08;
  const totalAmount = currentAddress?.isServiceable ? subtotal + collectionFee + tax : 0;

  const handleSlotSelect = (slot) => {
    if (!slot.available) return;

    if (hasFastingTest && slot.period === 'Afternoon') {
      setPendingSlotId(slot.id);
      setShowFastingModal(true);
    } else {
      setSelectedSlotId(slot.id);
    }
  };

  const confirmLateSlot = () => {
    if (pendingSlotId) {
      setSelectedSlotId(pendingSlotId);
      setPendingSlotId(null);
    }
    setShowFastingModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentAddress?.isServiceable) return;

    const payload = {
      addressId: selectedAddressId,
      date: selectedDate,
      slotId: selectedSlotId,
      tests: selectedTests.map((t) => t.id),
      specialInstructions,
      totalPaid: totalAmount,
    };

    alert('Collection Scheduled Successfully!\n' + JSON.stringify(payload, null, 2));
  };

  return (
    <div className="sc-container">
      <div className="sc-stepper">
        <div className="step completed">1. Select Tests</div>
        <div className="step-divider active" />
        <div className="step active">2. Address & Schedule</div>
        <div className="step-divider" />
        <div className="step">3. Payment</div>
      </div>

      <div className="sc-layout">
        <div className="sc-main">
          <div className="sc-card">
            <h3 className="card-title">1. Selected Tests for Home Collection</h3>
            <div className="test-list">
              {selectedTests.map((test) => (
                <div key={test.id} className="test-item">
                  <div className="test-info">
                    <span className="test-name">{test.name}</span>
                    {test.fastingRequired && (
                      <span className="badge warning">12-hr Fasting Required</span>
                    )}
                  </div>
                  <span className="test-price">${test.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sc-card">
            <div className="card-header-row">
              <h3 className="card-title">2. Select Collection Address</h3>
              <button type="button" className="btn-text">+ Add New Address</button>
            </div>

            <div className="address-grid">
              {MOCK_SAVED_ADDRESSES.map((addr) => (
                <label
                  key={addr.id}
                  className={`address-card ${selectedAddressId === addr.id ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="address"
                    value={addr.id}
                    checked={selectedAddressId === addr.id}
                    onChange={() => setSelectedAddressId(addr.id)}
                  />
                  <div className="address-details">
                    <strong>{addr.label}</strong>
                    <p>{addr.street}</p>
                    <p>{addr.city}, {addr.zip}</p>
                  </div>
                </label>
              ))}
            </div>

            {!currentAddress?.isServiceable && (
              <div className="alert-box error">
                ⚠️ Home collection is not available for this address zone. Please select a different location.
              </div>
            )}
          </div>

          <div className="sc-card">
            <h3 className="card-title">3. Date & Time Slot</h3>
            <div className="form-group">
              <label htmlFor="collection-date">Select Date</label>
              <input
                type="date"
                id="collection-date"
                value={selectedDate}
                min="2026-08-13"
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-picker"
              />
            </div>

            <div className="slot-container">
              <label>Available Slots</label>
              <div className="slot-grid">
                {MOCK_SLOTS.map((slot) => {
                  const isSelected = selectedSlotId === slot.id;
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={!slot.available || !currentAddress?.isServiceable}
                      className={`slot-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sc-card">
            <h3 className="card-title">4. Special Instructions (Optional)</h3>
            <textarea
              className="textarea-input"
              rows="3"
              placeholder="e.g. Ring gate bell twice, Gate Code #4321..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            />
          </div>
        </div>

        <div className="sc-sidebar">
          <div className="sc-card summary-card">
            <h3 className="card-title">Order Summary</h3>
            
            <div className="summary-row">
              <span>Tests Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Collection Fee</span>
              <span>${collectionFee.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr className="divider" />

            <div className="summary-row total">
              <span>Total Payable</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <button
              type="button"
              className="btn-primary full-width"
              disabled={!currentAddress?.isServiceable || !selectedSlotId}
              onClick={handleSubmit}
            >
              Proceed to Payment
            </button>

            <p className="lock-notice">
              🔒 Selected time slot will be held for 5:00 minutes upon checkout.
            </p>
          </div>
        </div>
      </div>
      
      {showFastingModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Fasting Test Warning</h4>
            <p>
              You have selected an afternoon slot, but one or more tests require <strong>12 hours of overnight fasting</strong>. Morning slots are recommended for best accuracy.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowFastingModal(false)}
              >
                Change to Morning Slot
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={confirmLateSlot}
              >
                Proceed Anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}