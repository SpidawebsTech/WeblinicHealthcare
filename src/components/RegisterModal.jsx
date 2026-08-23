import { useState } from "react";
import { X, Upload } from "lucide-react";

const PROFESSIONS = ["Doctor", "Nurse", "Pharmacist", "Student", "Other"];

export default function RegisterModal({ training, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    receipt: null,
  });
  const [errors, setErrors] = useState({});

  if (!training) return null;

  const isPaid = Boolean(training.price);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Name can only contain letters.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Name can only contain letters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required.";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.profession) {
      newErrors.profession = "Please select your profession.";
    }

    if (isPaid && !formData.receipt) {
      newErrors.receipt = "Please upload your payment receipt to complete registration.";
    }

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
    // TODO: wire this up once registration flow (internal form vs external
    // link) is confirmed. For now this just closes the modal.
    onClose();
  };

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
            Register
          </div>
          <h3 className="text-xl font-bold leading-snug mb-2">{training.title}</h3>
          <p className="text-sm text-navy-400">{training.date}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1.5">First name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                placeholder="First name"
                className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                  errors.firstName
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:ring-navy-400/30"
                }`}
              />
              {errors.firstName && (
                <p className="text-xs text-red-600 mt-1.5">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5">Last name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                placeholder="Last name"
                className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                  errors.lastName
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:ring-navy-400/30"
                }`}
              />
              {errors.lastName && (
                <p className="text-xs text-red-600 mt-1.5">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-navy-400/30"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">Contact number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
              placeholder="+92 3XX XXXXXXX"
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-navy-400/30"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5">Profession</label>
            <select
              value={formData.profession}
              onChange={handleChange("profession")}
              className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white ${
                errors.profession
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-navy-400/30"
              }`}
            >
              <option value="">Select your profession</option>
              {PROFESSIONS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.profession && (
              <p className="text-xs text-red-600 mt-1.5">{errors.profession}</p>
            )}
          </div>
{isPaid && (
  <>
    <div className="bg-navy-50/60 border border-navy-100 rounded-lg p-4">
      <p className="text-xs font-bold text-navy-700 mb-2">
        Payment instructions
      </p>
      <p className="text-xs text-navy-500 leading-relaxed">
        Please transfer <strong>{training.price}</strong> to the account
        below, then upload your receipt to complete registration.
      </p>
      <div className="mt-2.5 text-xs text-navy-600 leading-relaxed">
        <div>Bank: <strong>[ Bank Name ]</strong></div>
        <div>Account Title: <strong>[ Weblinic Healthcare ]</strong></div>
        <div>Account Number: <strong>[ XXXX-XXXXXXX-X ]</strong></div>
      </div>
    </div>

    <div>
      <label className="block text-xs font-semibold mb-1.5">
        Payment receipt
      </label>
      <label
        className={`flex items-center gap-3 border-2 border-dashed rounded-lg px-4 py-4 cursor-pointer transition-colors ${
          errors.receipt
            ? "border-red-300 bg-red-50"
            : formData.receipt
            ? "border-green-300 bg-green-50"
            : "border-gray-200 hover:border-navy-300"
        }`}
      >
        <Upload size={18} className={formData.receipt ? "text-green-600" : "text-navy-400"} />
        <span className="text-xs text-navy-500 truncate">
          {formData.receipt ? formData.receipt.name : "Upload receipt (JPG, PNG, or PDF, max 5MB)"}
        </span>
        <input
          type="file"
          accept="image/jpeg,image/png,application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      {errors.receipt && (
        <p className="text-xs text-red-600 mt-1.5">{errors.receipt}</p>
      )}
    </div>
  </>
)}

          <div className="flex items-center justify-between pt-2 pb-1 border-t border-gray-100 mt-1">
            <span className="text-sm font-bold">{training.price || "Free"}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
          >
            Confirm Registration
          </button>
        </form>
      </div>
    </div>
  );
}