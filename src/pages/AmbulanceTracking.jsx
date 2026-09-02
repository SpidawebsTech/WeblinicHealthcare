import { FiTruck, FiPhone } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./AmbulanceTracking.css";

export default function AmbulanceTracking() {
  return (
    <DashboardLayout>
      <div className="at-container">
        <div className="at-main">
          <div className="at-map-placeholder">
            Map placeholder: live location not yet connected
          </div>
          <div className="at-driver-row">
            <div className="at-driver-info">
              <div className="at-driver-name">City Ambulance Service</div>
              <div className="at-eta">ETA: 8 minutes</div>
            </div>
            <button className="at-call-btn">
              <FiPhone size={16} />
            </button>
          </div>
          <div className="at-status">
            <FiTruck size={14} /> En route to your location
          </div>
        </div>

        <div className="at-sidebar">
          <h3>Trip Details</h3>
          <div className="at-details-list">
            <div className="at-detail-row"><span>Vehicle</span><span className="at-detail-value">City Ambulance Service</span></div>
            <div className="at-detail-row"><span>Driver</span><span className="at-detail-value">Imran A.</span></div>
            <div className="at-detail-row"><span>Vehicle No.</span><span className="at-detail-value">ISB-4471</span></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}