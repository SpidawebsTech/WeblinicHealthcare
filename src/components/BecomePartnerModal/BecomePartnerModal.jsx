import { useState } from "react";
import { FiX } from "react-icons/fi";
import "./BecomePartnerModal.css";

const PARTNERSHIP_TYPES = ["Hospital / Clinic", "Insurance Provider", "Corporate / Employer", "Government / Regulatory", "Other"];

const COUNTRIES = [
  "Pakistan", "Afghanistan", "Australia", "Bahrain", "Bangladesh", "Canada", "China", "Egypt",
  "France", "Germany", "India", "Indonesia", "Iran", "Iraq", "Japan", "Jordan", "Kuwait",
  "Malaysia", "Nepal", "Oman", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Turkey",
  "United Arab Emirates", "United Kingdom", "United States", "Other",
];

export default function BecomePartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    orgName: "", contactName: "", jobTitle: "", email: "", phone: "", country: "", partnershipType: "", message: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required.";

    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
    else if (!/^[a-zA-Z\s'-]+$/.test(formData.contactName.trim())) newErrors.contactName = "Name can only contain letters.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number.";

    if (!formData.country) newErrors.country = "Please select a country.";
    if (!formData.partnershipType) newErrors.partnershipType = "Please select a partnership type.";

    if (!formData.message.trim()) newErrors.message = "Please tell us a bit about your organization.";
    else if (formData.message.trim().length < 20) newErrors.message = "Please provide a bit more detail (at least 20 characters).";

    return newErrors;
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onClose();
  };

  return (
    <div className="bpm-overlay" onClick={onClose}>
      <div className="bpm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bpm-header">
          <button onClick={onClose} className="bpm-close-btn" aria-label="Close"><FiX size={20} /></button>
          <div className="bpm-eyebrow">Become a Partner</div>
          <h3>Let's build better healthcare together.</h3>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bpm-form">
          <div>
            <label>Organization name</label>
            <input type="text" value={formData.orgName} onChange={handleChange("orgName")} placeholder="Your organization's name" className={errors.orgName ? "bpm-error-input" : ""} />
            {errors.orgName && <p className="bpm-error-text">{errors.orgName}</p>}
          </div>

          <div className="bpm-row-2">
            <div>
              <label>Contact name</label>
              <input type="text" value={formData.contactName} onChange={handleChange("contactName")} placeholder="Your full name" className={errors.contactName ? "bpm-error-input" : ""} />
              {errors.contactName && <p className="bpm-error-text">{errors.contactName}</p>}
            </div>
            <div>
              <label>Job title</label>
              <input type="text" value={formData.jobTitle} onChange={handleChange("jobTitle")} placeholder="e.g. Partnerships Manager" />
            </div>
          </div>

          <div>
            <label>Email</label>
            <input type="email" value={formData.email} onChange={handleChange("email")} placeholder="you@organization.com" className={errors.email ? "bpm-error-input" : ""} />
            {errors.email && <p className="bpm-error-text">{errors.email}</p>}
          </div>

          <div className="bpm-row-2">
            <div>
              <label>Phone number</label>
              <input type="tel" value={formData.phone} onChange={handleChange("phone")} placeholder="+92 3XX XXXXXXX" className={errors.phone ? "bpm-error-input" : ""} />
              {errors.phone && <p className="bpm-error-text">{errors.phone}</p>}
            </div>
            <div>
              <label>Country</label>
              <select value={formData.country} onChange={handleChange("country")} className={errors.country ? "bpm-error-input" : ""}>
                <option value="">Select country</option>
                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.country && <p className="bpm-error-text">{errors.country}</p>}
            </div>
          </div>

          <div>
            <label>Partnership type</label>
            <select value={formData.partnershipType} onChange={handleChange("partnershipType")} className={errors.partnershipType ? "bpm-error-input" : ""}>
              <option value="">Select partnership type</option>
              {PARTNERSHIP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.partnershipType && <p className="bpm-error-text">{errors.partnershipType}</p>}
          </div>

          <div>
            <label>Tell us about your organization and goals</label>
            <textarea value={formData.message} onChange={handleChange("message")} placeholder="What would you like to achieve by partnering with Weblinic?" rows={4} className={errors.message ? "bpm-error-input" : ""} />
            {errors.message && <p className="bpm-error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="bpm-submit-btn">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
}