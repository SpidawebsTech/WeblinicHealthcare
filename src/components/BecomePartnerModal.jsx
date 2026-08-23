import { useState } from "react";
import { X } from "lucide-react";

const PARTNERSHIP_TYPES = [
  "Hospital / Clinic",
  "Insurance Provider",
  "Corporate / Employer",
  "Government / Regulatory",
  "Other",
];

const COUNTRIES = [
  "Pakistan",
  "Afghanistan",
  "Australia",
  "Bahrain",
  "Bangladesh",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Japan",
  "Jordan",
  "Kuwait",
  "Malaysia",
  "Nepal",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Other",
];

export default function BecomePartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    partnershipType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.orgName.trim()) {
      newErrors.orgName = "Organization name is required.";
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.contactName.trim())) {
      newErrors.contactName = "Name can only contain letters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country.";
    }

    if (!formData.partnershipType) {
      newErrors.partnershipType = "Please select a partnership type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a bit about your organization.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide a bit more detail (at least 20 characters).";
    }

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
    // TODO: wire this up once the actual partnerships intake flow (email,
    // CRM, backend endpoint, etc.) is confirmed. For now this just closes
    // the modal.
    onClose();
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:ring-navy-400/30"
    }`;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-navy-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-navy-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 border-b border-gray-100 text-center">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-navy-400 hover:text-navy-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="text-sm font-bold text-brand-red uppercase tracking-wide mb-2">
            Become a Partner
          </div>
          <h3 className="text-xl font-bold leading-snug">
            Let's build better healthcare together.
          </h3>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5">Organization name</label>
            <input
              type="text"
              value={formData.orgName}
              onChange={handleChange("orgName")}
              placeholder="Your organization's name"
              className={inputClass("orgName")}
            />
            {errors.orgName && <p className="text-xs text-red-600 mt-1.5">{errors.orgName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1.5">Contact name</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={handleChange("contactName")}
                placeholder="Your full name"
                className={inputClass("contactName")}
              />
              {errors.contactName && (
                <p className="text-xs text-red-600 mt-1.5">{errors.contactName}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5">
                Job title <span className="text-navy-300 font-normal"></span>
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={handleChange("jobTitle")}
                placeholder="e.g. Partnerships Manager"
                className={inputClass("jobTitle")}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="you@organization.com"
              className={inputClass("email")}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1.5">Phone number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="+92 3XX XXXXXXX"
                className={inputClass("phone")}
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5">Country</label>
              <select
                value={formData.country}
                onChange={handleChange("country")}
                className={`${inputClass("country")} bg-white`}
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="text-xs text-red-600 mt-1.5">{errors.country}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">Partnership type</label>
            <select
              value={formData.partnershipType}
              onChange={handleChange("partnershipType")}
              className={`${inputClass("partnershipType")} bg-white`}
            >
              <option value="">Select partnership type</option>
              {PARTNERSHIP_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.partnershipType && (
              <p className="text-xs text-red-600 mt-1.5">{errors.partnershipType}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">
              Tell us about your organization and goals
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange("message")}
              placeholder="What would you like to achieve by partnering with Weblinic?"
              rows={4}
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors mt-1"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}