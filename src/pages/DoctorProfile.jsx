import { useParams, Link } from "react-router-dom";
import { FiStar, FiBriefcase, FiHome, FiAward, FiMapPin } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import { DOCTORS } from "../data/doctors";
import "./DoctorProfile.css";

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <DashboardLayout>
        <div className="dp-not-found">Doctor not found.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="dp-container">
        <Link to="/doctors" className="dp-back-link">← Back to Doctors</Link>

        <div className="dp-grid">
          <div className="dp-main-card">
            <div className="dp-header">
              <div className="dp-avatar-wrap">
                <div className="dp-avatar">{doctor.initials}</div>
                {doctor.online && <span className="dp-online-dot" />}
              </div>
              <div>
                <h1>{doctor.name}</h1>
                <div className="dp-spec">{doctor.spec}</div>
                <div className="dp-rating">
                  <FiStar size={13} /> {doctor.rating} rating
                </div>
              </div>
            </div>

            <div className="dp-info-grid">
              <div className="dp-info-item">
                <FiAward size={16} />
                <div>
                  <div className="dp-info-label">Qualification</div>
                  <div className="dp-info-value">{doctor.qualification}</div>
                </div>
              </div>
              <div className="dp-info-item">
                <FiBriefcase size={16} />
                <div>
                  <div className="dp-info-label">Experience</div>
                  <div className="dp-info-value">{doctor.years} years</div>
                </div>
              </div>
              <div className="dp-info-item">
                <FiHome size={16} />
                <div>
                  <div className="dp-info-label">Current employment</div>
                  <div className="dp-info-value">{doctor.employer}</div>
                </div>
              </div>
              <div className="dp-info-item">
                <FiMapPin size={16} />
                <div>
                  <div className="dp-info-label">Distance</div>
                  <div className="dp-info-value">{doctor.distanceKm} km away</div>
                </div>
              </div>
            </div>

            <div>
              <div className="dp-info-label">Available timings</div>
              <div className="dp-timings">
                {doctor.timings.map((t) => (
                  <span key={t} className="dp-timing-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="dp-sidebar">
            <div className="dp-fee-label">Consultation fee</div>
            <div className="dp-fee">Rs. {doctor.fee.toLocaleString()}</div>
            <Link to={`/book/${doctor.slug}`} className="dp-book-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}