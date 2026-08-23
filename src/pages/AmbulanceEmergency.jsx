import { useState } from "react";
import { Siren, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

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
    <PatientSidebarLayout title="Emergency Ambulance">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {dispatched ? (
            <div className="text-center border-2 border-green-200 rounded-2xl p-8 bg-green-50">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <Siren size={26} />
              </div>
              <h2 className="font-bold text-lg mb-2">Ambulance dispatched</h2>
              <p className="text-sm text-navy-500 mb-4">Nearest available vehicle is on the way.</p>
              <Link
                  to="/ambulance/tracking"
                  className="text-xs font-bold text-green-700 hover:text-green-800"
              >
                  Track live location →
              </Link>
            </div>
          ) : (
            <div className="border-2 border-brand-red rounded-2xl p-8 bg-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-50 text-brand-red flex items-center justify-center mx-auto mb-5">
                  <Siren size={30} />
                </div>
                <h2 className="font-bold text-xl mb-2">Emergency Request</h2>
                <Link to="/ambulance/scheduled" className="text-xs text-navy-400 hover:text-navy-700 mb-4 inline-block">
                    Not an emergency? Schedule a transfer instead →
                </Link>
                <p className="text-sm text-navy-400">
                  One tap dispatches the nearest available ambulance, no provider selection needed.
                </p>
              </div>

              <div className="text-left mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <MapPin size={16} /> Pickup Location
                  </div>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-1 text-xs font-bold text-navy-500 hover:text-navy-700"
                  >
                    <Plus size={12} /> Add New Address
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {addresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`text-left p-3.5 rounded-xl border transition-colors ${
                        selectedAddress === addr.id
                          ? "border-brand-red bg-red-50/50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-sm font-bold mb-0.5">{addr.label}</div>
                      <div className="text-xs text-navy-400">{addr.address}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setDispatched(true)}
                className="w-full bg-brand-red hover:bg-brand-redDark text-white text-base font-bold py-4 rounded-full transition-colors"
              >
                Request Emergency Ambulance
              </button>
            </div>
          )}
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 bg-white h-fit">
          <h3 className="font-bold text-sm mb-4">What happens next</h3>
          <div className="flex flex-col gap-4 text-xs text-navy-500">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center font-bold shrink-0">1</span>
              <span>Nearest available ambulance is located automatically.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center font-bold shrink-0">2</span>
              <span>Driver accepts and begins route to your location.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-50 text-brand-red flex items-center justify-center font-bold shrink-0">3</span>
              <span>Track live location once dispatched.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-sm mb-4">Add New Address</h3>
            <label className="block text-xs font-semibold mb-1.5">Label</label>
            <input
              type="text"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              placeholder="e.g. Parents' House"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm mb-4 focus:outline-none"
            />
            <label className="block text-xs font-semibold mb-1.5">Address</label>
            <textarea
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              rows={2}
              placeholder="Street, sector, city"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm mb-5 focus:outline-none resize-none"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-navy-600 text-sm font-bold py-2.5 rounded-full transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAddress}
                className="flex-1 bg-navy-500 hover:bg-navy-600 text-white text-sm font-bold py-2.5 rounded-full transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </PatientSidebarLayout>
  );
}