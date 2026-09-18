import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Mail, Send, X, User, GraduationCap, Phone, Upload } from "lucide-react";
import { sendContactMessage, fileToBase64 } from "../../utils/contactEmailService";
import "./InternshipCTA.css";

export default function InternshipCTA({ selectedTrack, onClearSelectedTrack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    degreeBranch: "",
    yearOfStudy: "Final Year",
    domain: selectedTrack ? (selectedTrack.title || selectedTrack.name) : "AR / VR & Spatial Computing Track",
    note: "",
    resumeFile: null,
  });

  useEffect(() => {
    if (selectedTrack) {
      setIsModalOpen(true);
      setFormData((prev) => ({
        ...prev,
        domain: selectedTrack.title || selectedTrack.name || prev.domain,
      }));
    }
  }, [selectedTrack]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (onClearSelectedTrack) onClearSelectedTrack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resumeFile: file }));
    }
  };

  const handleSubmit = async (e) => {
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
        college: formData.institution,
        enquiryType: `Internship Application: ${formData.domain}`,
        message: `Degree & Branch: ${formData.degreeBranch}\nYear of Study: ${formData.yearOfStudy}\nDomain Track: ${formData.domain}${formData.resumeFile ? `\nAttached Resume: ${formData.resumeFile.name}` : ""}\n\nTechnical Statement:\n${formData.note || "Not provided"}`,
        attachments,
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error("Internship application dispatch error:", err);
      alert("Unable to submit application. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="intern-cta-section" id="apply">
      <div className="container">
        <div className="intern-cta-card">
          <div className="cta-glow-1" aria-hidden="true" />
          <div className="cta-glow-2" aria-hidden="true" />

          <div className="intern-cta-content">
            <span className="intern-cta-badge">
              <Sparkles size={14} className="text-green" /> ADMISSIONS OPEN
            </span>

            <h2 className="intern-cta-title">
              READY TO START?
            </h2>

            <p className="intern-cta-desc">
              Bring your curiosity, build practical skills and explore what's possible with emerging technology. Join an immersive engineering cohort at InGage.
            </p>

            <div className="intern-cta-actions">
              <button
                type="button"
                className="btn btn-primary intern-cta-btn-main"
                onClick={handleOpenModal}
              >
                APPLY FOR AN INTERNSHIP <ArrowRight size={16} />
              </button>

              <a
                href="mailto:internships@ingage.in?subject=Internship%20Inquiry%20-%20InGage%20EduTech"
                className="btn intern-cta-btn-glass"
              >
                <Mail size={16} /> TALK TO INGAGE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Application Modal */}
      {isModalOpen && (
        <div className="intern-modal-backdrop" onClick={handleCloseModal} role="dialog" aria-modal="true">
          <div className="intern-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="intern-modal-header">
              <div>
                <span className="modal-eyebrow">INGAGE INTERNSHIP APPLICATION</span>
                <h3 className="modal-title">Begin Your Immersion Track</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close application form"
              >
                <X size={20} />
              </button>
            </div>

            <div className="intern-modal-body">
              {formSubmitted ? (
                <div className="modal-success-state">
                  <div className="modal-success-icon-wrap">
                    <Sparkles size={36} className="text-green" />
                  </div>
                  <h4 className="modal-success-title">Application Received!</h4>
                  <p className="modal-success-desc">
                    Thank you for applying for the InGage Internship. Our academic enablement coordinators will review your technical background and reach out to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-navy"
                    onClick={handleCloseModal}
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form className="intern-app-form" onSubmit={handleSubmit}>
                  <div className="intern-form-grid">
                    <div className="form-field">
                      <label htmlFor="form-fullName">Full Name *</label>
                      <div className="input-icon-wrap">
                        <User size={16} className="field-icon" />
                        <input
                          id="form-fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="e.g. Kavitha Raman"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="form-email">Email Address *</label>
                      <div className="input-icon-wrap">
                        <Mail size={16} className="field-icon" />
                        <input
                          id="form-email"
                          name="email"
                          type="email"
                          required
                          placeholder="kavitha@example.edu"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="form-phone">Contact Phone *</label>
                      <div className="input-icon-wrap">
                        <Phone size={16} className="field-icon" />
                        <input
                          id="form-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="form-institution">College / University *</label>
                      <div className="input-icon-wrap">
                        <GraduationCap size={16} className="field-icon" />
                        <input
                          id="form-institution"
                          name="institution"
                          type="text"
                          required
                          placeholder="e.g. Anna University / Premier Tech Institute"
                          value={formData.institution}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="form-degreeBranch">Degree & Branch *</label>
                      <input
                        id="form-degreeBranch"
                        name="degreeBranch"
                        type="text"
                        required
                        placeholder="e.g. B.E. Computer Science / ECE / Mechatronics"
                        value={formData.degreeBranch}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="form-domain">Track of Interest *</label>
                      <select
                        id="form-domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                      >
                        <option value="AR / VR & Spatial Computing Track">AR / VR & Spatial Computing Track</option>
                        <option value="Applied AI & Computer Vision Track">Applied AI & Computer Vision Track</option>
                        <option value="Industrial IoT & Connected Telemetry Track">Industrial IoT & Connected Telemetry Track</option>
                        <option value="Embedded Firmware & Robotics Track">Embedded Firmware & Robotics Track</option>
                        <option value="3D Spatial Design & Photogrammetry Track">3D Spatial Design & Photogrammetry Track</option>
                        <option value="Digital Twins & Industrial Simulation Track">Digital Twins & Industrial Simulation Track</option>
                        <option value="Core Software & Full-Stack Systems Track">Core Software & Full-Stack Systems Track</option>
                      </select>
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="intern-resume">Attach Resume / Academic Profile (PDF, DOCX up to 10MB)</label>
                      <div className="input-icon-wrap" style={{ padding: "8px 12px", background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px" }}>
                        <Upload size={16} className="field-icon" style={{ color: "#15428F" }} />
                        <input
                          id="intern-resume"
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

                    <div className="form-field full-width">
                      <label htmlFor="form-note">Brief Statement of Technical Interest</label>
                      <textarea
                        id="form-note"
                        name="note"
                        rows="3"
                        placeholder="Share a brief overview of your technical interests, past projects or tools you have worked with..."
                        value={formData.note}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting Application..." : "Submit Internship Application"} <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
