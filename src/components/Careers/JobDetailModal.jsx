import React, { useState, useEffect } from "react";
import { X, MapPin, Briefcase, Clock, CheckCircle2, Send, Sparkles, User, Mail, Phone, Link2, Upload } from "lucide-react";
import { sendContactMessage, fileToBase64 } from "../../utils/contactEmailService";
import "./JobDetailModal.css";

export default function JobDetailModal({ job, onClose }) {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    note: "",
    resumeFile: null,
  });

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!job) return null;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resumeFile: file }));
    }
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let attachments = [];
      if (formData.resumeFile) {
        try {
          const encoded = await fileToBase64(formData.resumeFile);
          if (encoded) attachments.push(encoded);
        } catch (err) {
          console.error("Resume file encoding error:", err);
        }
      }

      await sendContactMessage({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: "Not specified",
        enquiryType: `Job Application: ${job.title} (${job.department})`,
        message: `Position: ${job.title}\nDepartment: ${job.department}\nLocation: ${job.location}\nExperience Level: ${job.experience}\nPortfolio / LinkedIn: ${formData.portfolio || "Not provided"}${formData.resumeFile ? `\nAttached Resume: ${formData.resumeFile.name}` : ""}\n\nCandidate Note:\n${formData.note || "Not provided"}`,
        attachments,
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error("Job application dispatch error:", err);
      alert("Unable to submit application. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="job-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-job-title"
    >
      <div
        className="job-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="job-modal-header">
          <div className="modal-header-text">
            <div className="modal-badge-row">
              <span className="modal-dept-pill">{job.department}</span>
              <span className="modal-level-pill">{job.level}</span>
            </div>
            <h2 id="modal-job-title" className="modal-job-title">
              {job.title}
            </h2>
            <div className="modal-meta-row">
              <span className="modal-meta-item">
                <MapPin size={15} /> {job.location}
              </span>
              <span className="modal-meta-item">
                <Briefcase size={15} /> {job.type}
              </span>
              <span className="modal-meta-item">
                <Clock size={15} /> {job.experience}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close job details modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="job-modal-body">
          {!showApplyForm ? (
            <div className="job-modal-details-view">
              {/* About the role */}
              <div className="job-detail-block">
                <h3 className="job-detail-section-title">About the Role</h3>
                <p className="job-detail-text">{job.about}</p>
              </div>

              {/* Responsibilities */}
              <div className="job-detail-block">
                <h3 className="job-detail-section-title">Key Responsibilities</h3>
                <ul className="job-detail-bullets">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="bullet-icon text-green" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="job-detail-block">
                <h3 className="job-detail-section-title">Requirements & Qualifications</h3>
                <ul className="job-detail-bullets">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="bullet-icon text-navy" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="job-detail-block">
                <h3 className="job-detail-section-title">Required Skills & Technologies</h3>
                <div className="job-skills-tags-wrap">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="job-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : formSubmitted ? (
            /* Application Success State */
            <div className="job-apply-success">
              <div className="success-icon-wrap">
                <Sparkles size={36} className="text-green" />
              </div>
              <h3 className="success-title">Application Submitted!</h3>
              <p className="success-desc">
                Thank you for applying for <strong>{job.title}</strong> at InGage. Our talent team will review your profile and reach out within 2–3 business days.
              </p>
              <button
                type="button"
                className="btn btn-navy"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          ) : (
            /* Application Form */
            <form className="job-apply-form" onSubmit={handleApplySubmit}>
              <h3 className="apply-form-title">Apply for {job.title}</h3>
              <p className="apply-form-sub">
                Fill in your details below to express your interest directly to our engineering hiring team.
              </p>

              <div className="apply-grid">
                <div className="apply-field">
                  <label htmlFor="apply-name">Full Name *</label>
                  <div className="apply-input-wrap">
                    <User size={16} className="apply-icon" />
                    <input
                      id="apply-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Arun Kumar"
                      value={formData.fullName}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="apply-field">
                  <label htmlFor="apply-email">Email Address *</label>
                  <div className="apply-input-wrap">
                    <Mail size={16} className="apply-icon" />
                    <input
                      id="apply-email"
                      name="email"
                      type="email"
                      required
                      placeholder="arun@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="apply-field">
                  <label htmlFor="apply-phone">Phone Number *</label>
                  <div className="apply-input-wrap">
                    <Phone size={16} className="apply-icon" />
                    <input
                      id="apply-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="apply-field">
                  <label htmlFor="apply-portfolio">LinkedIn / GitHub / Portfolio URL</label>
                  <div className="apply-input-wrap">
                    <Link2 size={16} className="apply-icon" />
                    <input
                      id="apply-portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.portfolio}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="apply-field full-width">
                  <label htmlFor="apply-resume">Attach Resume / CV (PDF, DOCX up to 10MB)</label>
                  <div className="apply-input-wrap" style={{ padding: "8px 12px", background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px" }}>
                    <Upload size={16} className="apply-icon" style={{ color: "#15428F" }} />
                    <input
                      id="apply-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ fontSize: "13px", cursor: "pointer", width: "100%" }}
                    />
                  </div>
                  {formData.resumeFile && (
                    <span style={{ fontSize: "12px", color: "#059669", fontWeight: 600, display: "inline-block", marginTop: "4px" }}>
                      ✓ Selected: {formData.resumeFile.name} ({(formData.resumeFile.size / 1024).toFixed(1)} KB)
                    </span>
                  )}
                </div>

                <div className="apply-field full-width">
                  <label htmlFor="apply-note">Brief Note / Experience Summary</label>
                  <textarea
                    id="apply-note"
                    name="note"
                    rows="3"
                    placeholder="Tell us briefly why you're interested in this role and your key technical highlights..."
                    value={formData.note}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div className="apply-form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowApplyForm(false)}
                >
                  ← Back to Details
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Application..." : "Submit Application"} <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer (when in detail view) */}
        {!showApplyForm && (
          <div className="job-modal-footer">
            <div className="modal-footer-info">
              <span>Looking to join immediately? Reach out directly to <strong>careers@ingage.in</strong></span>
            </div>
            <div className="modal-footer-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary modal-apply-btn"
                onClick={() => setShowApplyForm(true)}
              >
                Apply for this Position →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
