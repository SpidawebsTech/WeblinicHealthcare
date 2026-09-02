import { useState } from "react";
import { FiTruck, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./AmbulanceScheduled.css";

const VEHICLES = [
  { id: 1, name: "City Ambulance Service", rating: 4.8, fee: 1200, distanceKm: 2.1 },
  { id: 2, name: "Rapid Response Medical", rating: 4.6, fee: 1000, distanceKm: 4.5 },
  { id: 3, name: "SafeRide Ambulance", rating: 4.9, fee: 1500, distanceKm: 3.0 },
];

export default function AmbulanceScheduled() {
  const [booked, setBooked] = useState(null);

  return (
    <DashboardLayout>
      <div className="as-container">
        {booked ? (
          <div className="as-booked-card">
            <h2>Booked with {booked.name}</h2>
            <p>Confirmation sent, you'll be notified before pickup.</p>
            <Link to="/ambulance/tracking" className="as-track-link">
              Track live location →
            </Link>
          </div>
        ) : (
          <>
            <p className="as-subtitle">
              Ranked by distance, rating, and fee. Choose a vehicle for your scheduled transfer.
            </p>
            <div className="as-list">
              {VEHICLES.map((v) => (
                <div key={v.id} className="as-vehicle-card">
                  <div className="as-vehicle-left">
                    <div className="as-vehicle-icon">
                      <FiTruck size={18} />
                    </div>
                    <div>
                      <div className="as-vehicle-name">{v.name}</div>
                      <div className="as-vehicle-meta">
                        <span className="as-rating"><FiStar size={12} /> {v.rating}</span>
                        <span>{v.distanceKm} km</span>
                        <span>Rs. {v.fee}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setBooked(v)} className="as-book-btn">
                    Book
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}