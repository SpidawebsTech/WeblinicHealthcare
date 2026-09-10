import { useState } from "react";
import { FiX, FiUpload } from "react-icons/fi";
import "./RegisterModal.css";

const PROFESSIONS = ["Doctor", "Nurse", "Pharmacist", "Student", "Other"];

export default function RegisterModal({ training, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", profession: "", receipt: null,
  });
  const [errors, setErrors] = useState({});

  if (!training) return null;

  const isPaid = Boolean(training.price);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName.trim())) newErrors.firstName = "Name can only contain letters.";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName.trim())) newErrors.lastName = "Name can only contain letters.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";

    if (!formData.phone.trim()) newErrors.phone = "Contact number is required.";
    else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number.";

    if (!formData.profession) newErrors.profession = "Please select your profession.";
    if (isPaid && !formData.receipt) newErrors.receipt = "Please upload your payment receipt to complete registration.";

    return newErrors;
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, receipt: "File must be under 5MB." });
      return;
    }
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      setErrors({ ...errors, receipt: "Please upload a JPG, PNG, or PDF file." });
      return;
    }
    setFormData({ ...formData, receipt: file });
    setErrors({ ...errors, receipt: null });
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
    <div className="rm-overlay" onClick={onClose}>
      <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rm-header">
          <button onClick={onClose} className="rm-close-btn" aria-label="Close">
            <FiX size={20} />
          </button>
          <div className="rm-eyebrow">Register</div>
          <h3>{training.title}</h3>
          <p className="rm-date">{training.date}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rm-form">
          <div className="rm-row-2">
            <div>
              <label>First name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                placeholder="First name"
                className={errors.firstName ? "rm-error-input" : ""}
              />
              {errors.firstName && <p className="rm-error-text">{errors.firstName}</p>}
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                placeholder="Last name"
                className={errors.lastName ? "rm-error-input" : ""}
              />
              {errors.lastName && <p className="rm-error-text">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              className={errors.email ? "rm-error-input" : ""}
            />
            {errors.email && <p className="rm-error-text">{errors.email}</p>}
          </div>

          <div>
            <label>Contact number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
              placeholder="+92 3XX XXXXXXX"
              className={errors.phone ? "rm-error-input" : ""}
            />
            {errors.phone && <p className="rm-error-text">{errors.phone}</p>}
          </div>

          <div>
            <label>Profession</label>
            <select
              value={formData.profession}
              onChange={handleChange("profession")}
              className={errors.profession ? "rm-error-input" : ""}
            >
              <option value="">Select your profession</option>
              {PROFESSIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.profession && <p className="rm-error-text">{errors.profession}</p>}
          </div>

          {isPaid && (
            <>
              <div className="rm-payment-box">
                <p className="rm-payment-title">Payment instructions</p>
                <p className="rm-payment-text">
                  Please transfer <strong>{training.price}</strong> to the account
                  below, then upload your receipt to complete registration.
                </p>
                <div className="rm-payment-details">
                  <div>Bank: <strong>[ Bank Name ]</strong></div>
                  <div>Account Title: <strong>[ Weblinic Healthcare ]</strong></div>
                  <div>Account Number: <strong>[ XXXX-XXXXXXX-X ]</strong></div>
                </div>
              </div>

              <div>
                <label>Payment receipt</label>
                <label className={`rm-upload-box ${errors.receipt ? "error" : formData.receipt ? "success" : ""}`}>
                  <FiUpload size={18} />
                  <span>{formData.receipt ? formData.receipt.name : "Upload receipt (JPG, PNG, or PDF, max 5MB)"}</span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={handleFileChange}
                    className="rm-hidden-input"
                  />
                </label>
                {errors.receipt && <p className="rm-error-text">{errors.receipt}</p>}
              </div>
            </>
          )}

          <div className="rm-price-row">
            <span>{training.price || "Free"}</span>
          </div>

          <button type="submit" className="rm-submit-btn">Confirm Registration</button>
        </form>
      </div>
    </div>
  );
}