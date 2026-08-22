import React, { useState } from "react";
import "./Signup.css";
import LoginBanner from "../LoginBanner/LoginBanner";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiCalendar,
  FiBriefcase,
  FiAward,
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiClock,
  FiMapPin,
  FiCreditCard,
  FiChevronLeft
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [role, setRole] = useState("patient");
  const [doctorStep, setDoctorStep] = useState(1);
  const [patientData, setPatientData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [doctorData, setDoctorData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    pmdcLicense: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    qualification: "",
    university: "",
    experience: "",
    consultationType: "",
    clinicAddress: "",
    availableDays: [],
    startTime: "",
    endTime: "",
    slotDuration: "",
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    iban: ""
  });

  const handlePatientSubmit = (e) => {
    e.preventDefault();

    if (patientData.password !== patientData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Patient account created successfully!");
  };
  const handleDoctorChange = (field, value) => {
    setDoctorData({
      ...doctorData,
      [field]: value
    });
  };

  const handleBasicInfoNext = (e) => {
    e.preventDefault();

    if (doctorData.password !== doctorData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!doctorData.agreeTerms) {
      alert("Please agree to the Terms of Service.");
      return;
    }

    setDoctorStep(2);
  };

  const handleCredentialsNext = (e) => {
    e.preventDefault();

    if (
      !doctorData.qualification ||
      !doctorData.university ||
      !doctorData.experience ||
      !doctorData.consultationType
    ) {
      alert("Please complete all required credential information.");
      return;
    }

    setDoctorStep(3);
  };

  const handleSlotsNext = (e) => {
    e.preventDefault();

    if (
      doctorData.availableDays.length === 0 ||
      !doctorData.startTime ||
      !doctorData.endTime ||
      !doctorData.slotDuration
    ) {
      alert("Please complete your availability information.");
      return;
    }

    setDoctorStep(4);
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();

    if (
      !doctorData.accountHolder ||
      !doctorData.bankName ||
      !doctorData.accountNumber ||
      !doctorData.iban
    ) {
      alert("Please complete your payout information.");
      return;
    }

    alert("Doctor account created successfully!");
  };

  const toggleDay = (day) => {
    if (doctorData.availableDays.includes(day)) {
      setDoctorData({
        ...doctorData,
        availableDays: doctorData.availableDays.filter(
          (item) => item !== day
        )
      });
    } else {
      setDoctorData({
        ...doctorData,
        availableDays: [...doctorData.availableDays, day]
      });
    }
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="s-form-wrapper">
          <div className="form-header">
            <h2>Create Your Account</h2>
            <p>
              Join Weblinic to manage your health or practice online
            </p>
          </div>

          <div className="role-tab-container">

            <button
              type="button"
              className={`role-tab ${
                role === "patient" ? "active" : ""
              }`}
              onClick={() => {
                setRole("patient");
                setDoctorStep(1);
              }}
            >
              <FiUser className="tab-icon" />
              <span>Join as Patient</span>
            </button>

            <button
              type="button"
              className={`role-tab ${
                role === "doctor" ? "active" : ""
              }`}
              onClick={() => setRole("doctor")}
            >
              <FiBriefcase className="tab-icon" />
              <span>Join as Doctor</span>
            </button>

          </div>

          {role === "patient" && (
            <>
              <button className="google-signup-btn">
                <FcGoogle size={20} />
                <span>Sign up with Google</span>
              </button>

              <div className="s-divider">
                <span>OR SIGN UP WITH EMAIL</span>
              </div>
            </>
          )}

          {role === "doctor" && (

            <div className="doctor-progress-bar">
              <div
                className={`s-progress-step ${
                  doctorStep >= 1 ? "active" : ""
                }`}
              >
                <span className="s-step-num">1</span>
                <span className="s-step-label">
                  Basic Info
                </span>
              </div>

              <div
                className={`s-progress-line ${
                  doctorStep >= 2 ? "active-line" : ""
                }`}
              />

              <div
                className={`s-progress-step ${
                  doctorStep >= 2 ? "active" : ""
                }`}
              >
                <span className="s-step-num">2</span>
                <span className="s-step-label">
                  Credentials
                </span>
              </div>

              <div
                className={`s-progress-line ${
                  doctorStep >= 3 ? "active-line" : ""
                }`}
              />

              <div
                className={`s-progress-step ${
                  doctorStep >= 3 ? "active" : ""
                }`}
              >
                <span className="s-step-num">3</span>
                <span className="s-step-label">
                  Slots
                </span>
              </div>

              <div
                className={`s-progress-line ${
                  doctorStep >= 4 ? "active-line" : ""
                }`}
              />
              <div
                className={`s-progress-step ${
                  doctorStep >= 4 ? "active" : ""
                }`}
              >
                <span className="s-step-num">4</span>
                <span className="s-step-label">
                  Payout
                </span>
              </div>

            </div>
          )}

          {role === "patient" && (
            <form
              onSubmit={handlePatientSubmit}
              className="auth-form"
            >
              <div className="l-input-field">

                <label>Full Name</label>

                <div className="l-input-group">

                  <FiUser className="field-icon" />

                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={patientData.fullName}
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        fullName: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              <div className="form-row">
                <div className="l-input-field">
                  <label>Email Address</label>
                  <div className="l-input-group">
                    <FiMail className="field-icon" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={patientData.email}
                      onChange={(e) =>
                        setPatientData({
                          ...patientData,
                          email: e.target.value
                        })
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>Phone Number</label>

                  <div className="l-input-group">

                    <FiPhone className="field-icon" />

                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      required
                      value={patientData.phone}
                      onChange={(e) =>
                        setPatientData({
                          ...patientData,
                          phone: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="l-input-field">

                <label>Date of Birth</label>

                <div className="l-input-group">

                  <FiCalendar className="field-icon" />

                  <input
                    type="date"
                    required
                    value={patientData.dob}
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        dob: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Password</label>

                  <div className="l-input-group">

                    <FiLock className="field-icon" />

                    <input
                      type="password"
                      placeholder="Create password"
                      required
                      value={patientData.password}
                      onChange={(e) =>
                        setPatientData({
                          ...patientData,
                          password: e.target.value
                        })
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>Confirm Password</label>

                  <div className="l-input-group">

                    <FiLock className="field-icon" />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                      value={patientData.confirmPassword}
                      onChange={(e) =>
                        setPatientData({
                          ...patientData,
                          confirmPassword: e.target.value
                        })
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="checkbox-field">

                <input
                  type="checkbox"
                  id="patientTerms"
                  required
                  checked={patientData.agreeTerms}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      agreeTerms: e.target.checked
                    })
                  }
                />

                <label htmlFor="patientTerms">

                  I agree to the{" "}

                  <a href="/terms">
                    Terms of Service
                  </a>{" "}

                  and{" "}

                  <a href="/privacy">
                    Privacy Policy
                  </a>

                </label>

              </div>

              <button
                type="submit"
                className="submit-btn primary-red"
              >

                <span>
                  Create Patient Account
                </span>

                <FiArrowRight />

              </button>

            </form>
          )}

          {role === "doctor" && doctorStep === 1 && (

            <form
              onSubmit={handleBasicInfoNext}
              className="auth-form"
            >

              <div className="l-input-field">

                <label>Full Name (with Title)</label>

                <div className="l-input-group">

                  <FiUser className="field-icon" />

                  <input
                    type="text"
                    placeholder="Dr. Sarah Ahmed"
                    required
                    value={doctorData.fullName}
                    onChange={(e) =>
                      handleDoctorChange(
                        "fullName",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Email Address</label>

                  <div className="l-input-group">

                    <FiMail className="field-icon" />

                    <input
                      type="email"
                      placeholder="doctor@clinic.com"
                      required
                      value={doctorData.email}
                      onChange={(e) =>
                        handleDoctorChange(
                          "email",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>Phone Number</label>

                  <div className="l-input-group">

                    <FiPhone className="field-icon" />

                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      required
                      value={doctorData.phone}
                      onChange={(e) =>
                        handleDoctorChange(
                          "phone",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Specialty</label>

                  <div className="l-input-group">

                    <FiAward className="field-icon" />

                    <input
                      type="text"
                      placeholder="e.g. Cardiologist"
                      required
                      value={doctorData.specialty}
                      onChange={(e) =>
                        handleDoctorChange(
                          "specialty",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>PMDC License Number</label>

                  <div className="l-input-group">

                    <FiFileText className="field-icon" />

                    <input
                      type="text"
                      placeholder="e.g. 12345-P"
                      required
                      value={doctorData.pmdcLicense}
                      onChange={(e) =>
                        handleDoctorChange(
                          "pmdcLicense",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Password</label>

                  <div className="l-input-group">

                    <FiLock className="field-icon" />

                    <input
                      type="password"
                      placeholder="Create password"
                      required
                      value={doctorData.password}
                      onChange={(e) =>
                        handleDoctorChange(
                          "password",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>Confirm Password</label>

                  <div className="l-input-group">

                    <FiLock className="field-icon" />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                      value={doctorData.confirmPassword}
                      onChange={(e) =>
                        handleDoctorChange(
                          "confirmPassword",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="checkbox-field">

                <input
                  type="checkbox"
                  id="doctorTerms"
                  required
                  checked={doctorData.agreeTerms}
                  onChange={(e) =>
                    handleDoctorChange(
                      "agreeTerms",
                      e.target.checked
                    )
                  }
                />

                <label htmlFor="doctorTerms">

                  I agree to the{" "}

                  <a href="/terms">
                    Terms of Service
                  </a>{" "}

                  and provider guidelines

                </label>

              </div>

              <button
                type="submit"
                className="submit-btn primary-blue"
              >
                <span>
                  Continue to Qualifications (Step 2/4)
                </span>

                <FiArrowRight />

              </button>

            </form>
          )}

          {role === "doctor" && doctorStep === 2 && (

            <form
              onSubmit={handleCredentialsNext}
              className="auth-form"
            >

              <div className="step-heading">

                <h3>Professional Credentials</h3>

                <p>
                  Tell us about your education and professional
                  experience.
                </p>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Highest Qualification</label>

                  <div className="l-input-group">

                    <FiAward className="field-icon" />

                    <input
                      type="text"
                      placeholder="e.g. MBBS, FCPS"
                      required
                      value={doctorData.qualification}
                      onChange={(e) =>
                        handleDoctorChange(
                          "qualification",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>University / Institution</label>

                  <div className="l-input-group">

                    <FiFileText className="field-icon" />

                    <input
                      type="text"
                      placeholder="e.g. KMU"
                      required
                      value={doctorData.university}
                      onChange={(e) =>
                        handleDoctorChange(
                          "university",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="l-input-field">

                <label>Years of Experience</label>

                <div className="l-input-group">

                  <FiBriefcase className="field-icon" />

                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 5"
                    required
                    value={doctorData.experience}
                    onChange={(e) =>
                      handleDoctorChange(
                        "experience",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="l-input-field">

                <label>Consultation Type</label>

                <div className="l-input-group">

                  <FiUser className="field-icon" />

                  <select
                    required
                    value={doctorData.consultationType}
                    onChange={(e) =>
                      handleDoctorChange(
                        "consultationType",
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select consultation type
                    </option>

                    <option value="video">
                      Video Consultation
                    </option>

                    <option value="clinic">
                      In-Clinic Visit
                    </option>

                    <option value="both">
                      Video + In-Clinic
                    </option>

                  </select>

                </div>

              </div>

              <div className="l-input-field">

                <label>Clinic Address</label>

                <div className="l-input-group">

                  <FiMapPin className="field-icon" />

                  <input
                    type="text"
                    placeholder="Clinic address"
                    value={doctorData.clinicAddress}
                    onChange={(e) =>
                      handleDoctorChange(
                        "clinicAddress",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="step-buttons">

                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setDoctorStep(1)}
                >
                  <FiChevronLeft />
                  Back
                </button>

                <button
                  type="submit"
                  className="submit-btn primary-blue"
                >
                  Continue to Availability
                  <FiArrowRight />
                </button>
              </div>
            </form>
          )}

          {role === "doctor" && doctorStep === 3 && (

            <form
              onSubmit={handleSlotsNext}
              className="auth-form"
            >

              <div className="step-heading">

                <h3>Set Your Availability</h3>

                <p>
                  Choose the days and times when patients can
                  book consultations with you.
                </p>

              </div>

              <div className="l-input-field">

                <label>Available Days</label>

                <div className="days-container">

                  {days.map((day) => (

                    <button
                      type="button"
                      key={day}
                      className={`day-btn ${
                        doctorData.availableDays.includes(day)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleDay(day)}
                    >

                      {doctorData.availableDays.includes(day) && (
                        <FiCheck />
                      )}

                      {day}

                    </button>

                  ))}

                </div>

              </div>

              <div className="form-row">

                <div className="l-input-field">

                  <label>Start Time</label>

                  <div className="l-input-group">

                    <FiClock className="field-icon" />

                    <input
                      type="time"
                      required
                      value={doctorData.startTime}
                      onChange={(e) =>
                        handleDoctorChange(
                          "startTime",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="l-input-field">

                  <label>End Time</label>

                  <div className="l-input-group">

                    <FiClock className="field-icon" />

                    <input
                      type="time"
                      required
                      value={doctorData.endTime}
                      onChange={(e) =>
                        handleDoctorChange(
                          "endTime",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              <div className="l-input-field">

                <label>Consultation Slot Duration</label>

                <div className="l-input-group">

                  <FiCalendar className="field-icon" />

                  <select
                    required
                    value={doctorData.slotDuration}
                    onChange={(e) =>
                      handleDoctorChange(
                        "slotDuration",
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select duration
                    </option>

                    <option value="15">
                      15 minutes
                    </option>

                    <option value="30">
                      30 minutes
                    </option>

                    <option value="45">
                      45 minutes
                    </option>

                    <option value="60">
                      60 minutes
                    </option>

                  </select>

                </div>

              </div>

              <div className="step-buttons">

                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setDoctorStep(2)}
                >

                  <FiChevronLeft />
                  Back

                </button>

                <button
                  type="submit"
                  className="submit-btn primary-blue"
                >

                  Continue to Payout

                  <FiArrowRight />

                </button>

              </div>

            </form>
          )}

          {role === "doctor" && doctorStep === 4 && (

            <form
              onSubmit={handleDoctorSubmit}
              className="auth-form"
            >

              <div className="step-heading">

                <h3>Payout Information</h3>

                <p>
                  Add your bank details for receiving payments
                  from Weblinic.
                </p>

              </div>

              <div className="l-input-field">

                <label>Account Holder Name</label>

                <div className="l-input-group">

                  <FiUser className="field-icon" />

                  <input
                    type="text"
                    placeholder="Dr. Sarah Ahmed"
                    required
                    value={doctorData.accountHolder}
                    onChange={(e) =>
                      handleDoctorChange(
                        "accountHolder",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="l-input-field">

                <label>Bank Name</label>

                <div className="l-input-group">

                  <FiBriefcase className="field-icon" />

                  <input
                    type="text"
                    placeholder="e.g. HBL, UBL, Meezan Bank"
                    required
                    value={doctorData.bankName}
                    onChange={(e) =>
                      handleDoctorChange(
                        "bankName",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="l-input-field">

                <label>Account Number</label>

                <div className="l-input-group">

                  <FiCreditCard className="field-icon" />

                  <input
                    type="text"
                    placeholder="Enter account number"
                    required
                    value={doctorData.accountNumber}
                    onChange={(e) =>
                      handleDoctorChange(
                        "accountNumber",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="l-input-field">

                <label>IBAN</label>

                <div className="l-input-group">

                  <FiCreditCard className="field-icon" />

                  <input
                    type="text"
                    placeholder="PK00 ABCD 0000 0000 0000"
                    required
                    value={doctorData.iban}
                    onChange={(e) =>
                      handleDoctorChange(
                        "iban",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="payout-note">

                <FiCheck />

                <span>
                  Your payment information will be kept
                  secure and used only for processing payouts.
                </span>

              </div>

              <div className="step-buttons">
                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setDoctorStep(3)}
                >
                  <FiChevronLeft />
                  Back
                </button>

                <button
                  type="submit"
                  className="submit-btn primary-blue">
                  <FiCheck />
                  Create Doctor Account
                </button>
              </div>
            </form>
          )}

          <div className="form-footer">

            <span>
              Already have an account?{" "}
            </span>
            <a
              href="/login"
              className="login-link"
            >Sign In
            </a>
          </div>
        </div>
      </div>

      <div className="signup-banner-container">
        <LoginBanner />
      </div>
    </div>
  );
}

export default Signup;