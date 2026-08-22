import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {
  FiSearch,
  FiActivity,
  FiPlus,
  FiMinus,
  FiCheckCircle,
  FiClock,
  FiInfo,
  FiCalendar,
  FiFileText,
  FiCheckSquare,
  FiUploadCloud,
  FiPaperclip
} from "react-icons/fi";
import "./LabTestCatalog.css";

function LabTestCatalog() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("browse"); 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [addedNotice, setAddedNotice] = useState("");
  const [activeModalTest, setActiveModalTest] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [prescriptionNotes, setPrescriptionNotes] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const categories = [
    "All",
    "Blood Tests",
    "Diabetes Care",
    "Heart Health",
    "Liver Function",
    "Full Body Checkups"
  ];

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Blood Tests",
      price: 1200,
      reportTime: "12 Hours",
      fasting: "No fasting required",
      sampleType: "Blood",
      description: "Measures red/white blood cells, hemoglobin, and platelets to evaluate overall health."
    },
    {
      id: 2,
      name: "Fasting Blood Sugar (FBS)",
      category: "Diabetes Care",
      price: 500,
      reportTime: "6 Hours",
      fasting: "8-10 hours fasting required",
      sampleType: "Blood",
      description: "Checks blood glucose levels after fasting to screen for diabetes or prediabetes."
    },
    {
      id: 3,
      name: "Lipid Profile Panel",
      category: "Heart Health",
      price: 2200,
      reportTime: "24 Hours",
      fasting: "10-12 hours fasting required",
      sampleType: "Blood",
      description: "Measures cholesterol levels (HDL, LDL, triglycerides) to assess cardiovascular risk."
    },
    {
      id: 4,
      name: "HbA1c Glycated Hemoglobin",
      category: "Diabetes Care",
      price: 1800,
      reportTime: "12 Hours",
      fasting: "No fasting required",
      sampleType: "Blood",
      description: "Evaluates your average blood sugar control over the past 2-3 months."
    },
    {
      id: 5,
      name: "Liver Function Test (LFT)",
      category: "Liver Function",
      price: 2500,
      reportTime: "24 Hours",
      fasting: "No fasting required",
      sampleType: "Blood",
      description: "Checks proteins, liver enzymes, and bilirubin levels to assess liver health."
    },
    {
      id: 6,
      name: "Comprehensive Executive Health Checkup",
      category: "Full Body Checkups",
      price: 7500,
      reportTime: "48 Hours",
      fasting: "10-12 hours fasting required",
      sampleType: "Blood & Urine",
      description: "Includes CBC, LFT, KFT, Lipid Profile, Thyroid, Vitamin D, and Blood Sugar."
    }
  ];

  const toggleTestInCart = (test) => {
    const exists = cart.find((item) => item.id === test.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== test.id));
    } else {
      setCart([...cart, test]);
      setAddedNotice(`Added ${test.name} to booking list!`);
      setTimeout(() => setAddedNotice(""), 3000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
    if (!uploadedFile) return;
    setUploadSuccess(true);
  };

  const filteredTests = labTests.filter((test) => {
    const matchesCategory = selectedCategory === "All" || test.category === selectedCategory;
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <DashboardLayout>
      <div className="lab-catalog-container">
        <div className="lab-catalog-header">
          <div>
            <h2>Diagnostic & Lab Tests</h2>
            <p>Book home sample collection or visit our partner diagnostic centers.</p>
          </div>
          <div className="lab-cart-badge">
            <FiActivity size={22} />
            <div>
              <span>{cart.length} Tests Selected</span>
              <strong>Rs. {totalPrice}</strong>
            </div>
          </div>
        </div>

        <div className="lab-sub-tabs">
          <button
            type="button"
            className={`sub-tab-btn ${activeTab === "browse" ? "active" : ""}`}
            onClick={() => setActiveTab("browse")}
          >
            <FiCheckSquare size={16} /> Browse & Book Tests
          </button>
          <button
            type="button"
            className={`sub-tab-btn ${activeTab === "upload" ? "active" : ""}`}
            onClick={() => setActiveTab("upload")}
          >
            <FiUploadCloud size={16} /> Upload Prescription
          </button>
          <button
            type="button"
            className={`sub-tab-btn ${location.pathname === "/dashboard/labs/results" ? "active" : ""}`}
            onClick={() => navigate("/dashboard/lab-results")}
          >
            <FiFileText size={16} /> Lab Results
          </button>
        </div>

        {addedNotice && (
          <div className="lab-alert">
            <FiCheckCircle /> {addedNotice}
          </div>
        )}

        {activeTab === "browse" && (
          <>
            <div className="lab-filter-section">
              <div className="lab-search-box">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for blood tests, diabetes screening, lipid profiles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="lab-category-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`lab-pill ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="lab-grid">
              <div className="lab-tests-list">
                {filteredTests.map((test) => {
                  const isSelected = cart.some((item) => item.id === test.id);
                  return (
                    <div key={test.id} className={`lab-card ${isSelected ? "selected" : ""}`}>
                      <div className="lab-card-header">
                        <span className="lab-cat-tag">{test.category}</span>
                        <button
                          type="button"
                          className="lab-info-btn"
                          onClick={() => setActiveModalTest(test)}
                        >
                          <FiInfo size={16} /> Details
                        </button>
                      </div>

                      <h3 className="lab-title">{test.name}</h3>
                      <p className="lab-desc">{test.description}</p>

                      <div className="lab-meta-row">
                        <span><FiClock /> Reports in {test.reportTime}</span>
                        <span><FiActivity /> {test.sampleType}</span>
                      </div>

                      <div className="lab-card-footer">
                        <div className="lab-price-box">
                          <span className="price-label">Test Price</span>
                          <strong className="lab-price">Rs. {test.price}</strong>
                        </div>

                        <button
                          type="button"
                          className={`add-test-btn ${isSelected ? "added" : ""}`}
                          onClick={() => toggleTestInCart(test)}
                        >
                          {isSelected ? <><FiMinus /> Remove</> : <><FiPlus /> Add to Booking</>}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lab-summary-sidebar">
                <h3>Selected Tests ({cart.length})</h3>
                {cart.length === 0 ? (
                  <div className="empty-lab-cart">
                    <FiActivity size={32} />
                    <p>No tests selected yet. Add tests or upload a prescription.</p>
                  </div>
                ) : (
                  <div className="lab-summary-content">
                    <div className="selected-tests-list">
                      {cart.map((item) => (
                        <div key={item.id} className="selected-test-row">
                          <div>
                            <p className="selected-test-name">{item.name}</p>
                            <small>{item.fasting}</small>
                          </div>
                          <div className="selected-test-right">
                            <span>Rs. {item.price}</span>
                            <button
                              type="button"
                              className="remove-icon-btn"
                              onClick={() => toggleTestInCart(item)}
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="lab-cost-breakdown">
                      <div className="cost-row">
                        <span>Subtotal</span>
                        <span>Rs. {totalPrice}</span>
                      </div>
                      <div className="cost-row">
                        <span>Home Sample Collection</span>
                        <span className="free-tag">FREE</span>
                      </div>
                      <div className="lab-divider"></div>
                      <div className="cost-row total">
                        <span>Total Pay</span>
                        <strong>Rs. {totalPrice}</strong>
                      </div>
                    </div>

                    <Link to="/dashboard/labs/checkout" className="book-now-btn">
                      <FiCalendar /> Schedule Sample Collection
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === "upload" && (
          <div className="rx-upload-container">
            {!uploadSuccess ? (
              <form onSubmit={handlePrescriptionSubmit} className="rx-upload-card">
                <div className="rx-header">
                  <FiUploadCloud className="rx-icon" />
                  <h3>Upload Prescription for Assistant Booking</h3>
                  <p>
                    Don't worry about finding exact test names. Upload your doctor's prescription, 
                    and our certified clinical team will review it, add required tests, and call you to finalize your booking.
                  </p>
                </div>

                <div className="rx-dropzone">
                  <input
                    type="file"
                    id="rx-file-input"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="rx-file-input"
                  />
                  <label htmlFor="rx-file-input" className="rx-dropzone-label">
                    <FiPaperclip size={24} />
                    {uploadedFile ? (
                      <span className="rx-filename">Selected: {uploadedFile.name}</span>
                    ) : (
                      <span>Drag and drop your prescription or <strong>browse files</strong></span>
                    )}
                    <small>Supports PNG, JPG, JPEG, PDF (Max 10MB)</small>
                  </label>
                </div>

                <div className="rx-field">
                  <label htmlFor="rx-notes">Additional Instructions (Optional)</label>
                  <textarea
                    id="rx-notes"
                    rows="3"
                    placeholder="e.g., Preferred timing for home sample collection, patient age..."
                    value={prescriptionNotes}
                    onChange={(e) => setPrescriptionNotes(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rx-submit-btn"
                  disabled={!uploadedFile}
                >
                  Submit Prescription for Review
                </button>
              </form>
            ) : (
              <div className="rx-success-card">
                <FiCheckCircle size={48} className="rx-success-icon" />
                <h3>Prescription Received!</h3>
                <p>
                  Our diagnostic specialist is reviewing your document. We will identify the tests and call you shortly to confirm sample pickup details.
                </p>
                <button
                  type="button"
                  className="rx-reset-btn"
                  onClick={() => {
                    setUploadSuccess(false);
                    setUploadedFile(null);
                    setPrescriptionNotes("");
                  }}
                >
                  Upload Another Prescription
                </button>
              </div>
            )}
          </div>
        )}

        {activeModalTest && (
          <div className="lab-modal-overlay" onClick={() => setActiveModalTest(null)}>
            <div className="lab-modal" onClick={(e) => e.stopPropagation()}>
              <h3>{activeModalTest.name}</h3>
              <span className="lab-cat-tag">{activeModalTest.category}</span>
              <p className="modal-desc">{activeModalTest.description}</p>
              <div className="modal-details">
                <p><strong>Sample Required:</strong> {activeModalTest.sampleType}</p>
                <p><strong>Fasting Rules:</strong> {activeModalTest.fasting}</p>
                <p><strong>Report Turnaround:</strong> Within {activeModalTest.reportTime}</p>
              </div>
              <div className="modal-footer">
                <strong className="modal-price">Rs. {activeModalTest.price}</strong>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModalTest(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default LabTestCatalog;