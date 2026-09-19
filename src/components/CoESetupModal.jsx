import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { approvedData } from "../data/approvedData";
import "./CoESetupModal.css";

export default function CoESetupModal({ isOpen, onClose, preselectedDomain = null }) {
  const { engineeringDomains, brand } = approvedData;

  const [selectedDomains, setSelectedDomains] = useState(
    preselectedDomain ? [preselectedDomain] : ["ai-ml"]
  );
  const [labTier, setLabTier] = useState("multi-domain"); // 'department', 'multi-domain', 'apex-hub'
  const [formData, setFormData] = useState({
    institutionName: "",
    stateCity: "",
    contactName: "",
    designation: "Dean / Principal",
    officialEmail: "",
    phone: "",
    studentStrength: "500-1500 Students",
    targetSemester: "Upcoming Semester (Immediate)",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preselected domain if prop changes
  useEffect(() => {
    if (preselectedDomain) {
      setSelectedDomains((prev) =>
        prev.includes(preselectedDomain) ? prev : [...prev, preselectedDomain]
      );
    }
  }, [preselectedDomain]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleDomain = (id) => {
    setSelectedDomains((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter((d) => d !== id);
      }
      return [...prev, id];
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 300);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="coe-modal-overlay" onClick={onClose}>
      <div
        className="coe-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coe-modal-title"
      >
        {/* Modal Header */}
        <div className="coe-modal-header">
          <div className="coe-modal-header-text">
            <div className="coe-modal-badge">
              <span className="coe-pulse-dot" />
              <span>OFFICIAL INSTITUTIONAL ONBOARDING</span>
            </div>
            <h2 id="coe-modal-title" className="coe-modal-title">
              Request Centre of Excellence (CoE) Blueprint
            </h2>
            <p className="coe-modal-subtitle">
              Configure turnkey hardware, certified curriculum tracks, and campus deployment timelines for your institution.
            </p>
          </div>
          <button
            className="coe-modal-close-btn"
            onClick={onClose}
            aria-label="Close setup modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="coe-modal-body">
          {isSubmitted ? (
            <div className="coe-success-screen">
              <div className="coe-success-icon-wrap">
                <CheckCircle2 size={54} className="coe-success-icon" />
              </div>
              <h3 className="coe-success-title">Proposal Submitted Successfully!</h3>
              <p className="coe-success-message">
                Thank you, <strong>{formData.contactName || "Academic Leader"}</strong>. Your customized lab blueprint request for <strong>{formData.institutionName || "your institution"}</strong> has been dispatched directly to our executive team.
              </p>

              <div className="coe-success-summary-box">
                <div className="coe-summary-row">
                  <span>Selected Domains:</span>
                  <strong>{selectedDomains.map(d => engineeringDomains.find(ed => ed.id === d)?.title || d).join(", ")}</strong>
                </div>
                <div className="coe-summary-row">
                  <span>Target Lab Deployment:</span>
                  <strong>{formData.targetSemester}</strong>
                </div>
                <div className="coe-summary-row">
                  <span>Consultant Call Assigned:</span>
                  <strong>Within 4 Business Hours ({brand.contact.phoneDisplay})</strong>
                </div>
              </div>

              <div className="coe-success-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  <span>Done & Return to Website</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="coe-form">
              {/* Step 1: Select Specialized Engineering Domains */}
              <div className="coe-form-section">
                <div className="coe-section-label-row">
                  <span className="coe-step-pill">STEP 1</span>
                  <label className="coe-section-title">
                    Select Target CoE Engineering Domain(s)
                  </label>
                  <span className="coe-selected-count">
                    {selectedDomains.length} selected
                  </span>
                </div>
                <div className="coe-domains-selector-grid">
                  {engineeringDomains.map((dom) => {
                    const isSelected = selectedDomains.includes(dom.id);
                    return (
                      <button
                        type="button"
                        key={dom.id}
                        className={`coe-domain-chip ${isSelected ? "selected" : ""}`}
                        onClick={() => handleToggleDomain(dom.id)}
                      >
                        <div className="coe-chip-checkbox">
                          {isSelected && <CheckCircle2 size={14} />}
                        </div>
                        <div className="coe-chip-content">
                          <span className="coe-chip-name">{dom.title}</span>
                          <span className="coe-chip-category">{dom.category}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Lab Tier Configuration */}
              <div className="coe-form-section">
                <div className="coe-section-label-row">
                  <span className="coe-step-pill">STEP 2</span>
                  <label className="coe-section-title">
                    Select Infrastructure & Lab Deployment Scale
                  </label>
                </div>
                <div className="coe-tier-selector-grid">
                  <div
                    className={`coe-tier-card ${labTier === "department" ? "active" : ""}`}
                    onClick={() => setLabTier("department")}
                  >
                    <div className="coe-tier-header">
                      <span className="coe-tier-name">Departmental Lab</span>
                      <span className="coe-tier-badge">30 Workstations</span>
                    </div>
                    <p className="coe-tier-desc">
                      1 Dedicated domain lab, 30 student seats, faculty upskilling, and Google/Oracle courseware.
                    </p>
                  </div>

                  <div
                    className={`coe-tier-card ${labTier === "multi-domain" ? "active" : ""}`}
                    onClick={() => setLabTier("multi-domain")}
                  >
                    <div className="coe-tier-header">
                      <span className="coe-tier-name">Multi-Domain CoE</span>
                      <span className="coe-tier-badge recommended">Most Popular</span>
                    </div>
                    <p className="coe-tier-desc">
                      2-4 Interdisciplinary domain testbenches, robotics arm cells, cloud sandbox, and placement pipeline.
                    </p>
                  </div>

                  <div
                    className={`coe-tier-card ${labTier === "apex-hub" ? "active" : ""}`}
                    onClick={() => setLabTier("apex-hub")}
                  >
                    <div className="coe-tier-header">
                      <span className="coe-tier-name">Apex Research Center</span>
                      <span className="coe-tier-badge">Campus Flagship</span>
                    </div>
                    <p className="coe-tier-desc">
                      Full multi-lab floor with GPU clusters, drone arena, AR/VR suite, incubator and industry sponsored R&D.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Institution & Contact Person Details */}
              <div className="coe-form-section">
                <div className="coe-section-label-row">
                  <span className="coe-step-pill">STEP 3</span>
                  <label className="coe-section-title">
                    Institution & Leadership Contact Information
                  </label>
                </div>
                <div className="coe-fields-grid">
                  <div className="coe-field-group">
                    <label htmlFor="modal-inst-name" className="coe-field-label">
                      College / University Name <span className="req">*</span>
                    </label>
                    <input
                      id="modal-inst-name"
                      type="text"
                      name="institutionName"
                      required
                      placeholder="e.g. PSG College of Technology"
                      value={formData.institutionName}
                      onChange={handleInputChange}
                      className="coe-input"
                    />
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-state-city" className="coe-field-label">
                      Location (City, State) <span className="req">*</span>
                    </label>
                    <input
                      id="modal-state-city"
                      type="text"
                      name="stateCity"
                      required
                      placeholder="e.g. Coimbatore, Tamil Nadu"
                      value={formData.stateCity}
                      onChange={handleInputChange}
                      className="coe-input"
                    />
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-contact-name" className="coe-field-label">
                      Contact Person Name <span className="req">*</span>
                    </label>
                    <input
                      id="modal-contact-name"
                      type="text"
                      name="contactName"
                      required
                      placeholder="e.g. Dr. K. Ramesh"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="coe-input"
                    />
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-designation" className="coe-field-label">
                      Designation
                    </label>
                    <select
                      id="modal-designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="coe-select"
                    >
                      <option value="Dean / Principal">Dean / Principal</option>
                      <option value="Head of Department (HOD)">Head of Department (HOD)</option>
                      <option value="Placement Director / TPO">Placement Director / TPO</option>
                      <option value="Managing Trustee / Vice Chancellor">Managing Trustee / Vice Chancellor</option>
                      <option value="Faculty / Coordinator">Faculty / Coordinator</option>
                    </select>
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-email" className="coe-field-label">
                      Official Institutional Email <span className="req">*</span>
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="officialEmail"
                      required
                      placeholder="e.g. principal@college.edu.in"
                      value={formData.officialEmail}
                      onChange={handleInputChange}
                      className="coe-input"
                    />
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-phone" className="coe-field-label">
                      Mobile / WhatsApp Number <span className="req">*</span>
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="coe-input"
                    />
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-strength" className="coe-field-label">
                      Annual Engineering Intake
                    </label>
                    <select
                      id="modal-strength"
                      name="studentStrength"
                      value={formData.studentStrength}
                      onChange={handleInputChange}
                      className="coe-select"
                    >
                      <option value="Under 500 Students">Under 500 Students</option>
                      <option value="500-1500 Students">500 – 1,500 Students</option>
                      <option value="1500-3000 Students">1,500 – 3,000 Students</option>
                      <option value="3000+ Students (Multi-Campus)">3,000+ Students (Multi-Campus)</option>
                    </select>
                  </div>

                  <div className="coe-field-group">
                    <label htmlFor="modal-target-semester" className="coe-field-label">
                      Deployment Timeline
                    </label>
                    <select
                      id="modal-target-semester"
                      name="targetSemester"
                      value={formData.targetSemester}
                      onChange={handleInputChange}
                      className="coe-select"
                    >
                      <option value="Upcoming Semester (Immediate)">Upcoming Semester (Immediate Launch)</option>
                      <option value="Next Academic Year">Next Academic Year</option>
                      <option value="Exploring Feasibility / Budgeting">Exploring Feasibility / Budgeting</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="coe-form-footer">
                <div className="coe-guarantee-note">
                  <ShieldCheck size={16} className="coe-shield-icon" />
                  <span>Confidential institutional consultation. Zero spam. Blueprint provided free of charge.</span>
                </div>
                <div className="coe-form-buttons">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-hero-cta"
                  >
                    <span>Request Turnkey CoE Blueprint</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
