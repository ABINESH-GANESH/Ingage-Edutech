import React, { useState } from "react";
import { sendContactMessage } from "../../utils/contactEmailService";
import "./CourseInquiryModal.css";

export default function CourseInquiryModal({ course, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastData, setLastData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !course) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const snapshot = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.institution,
      enquiryType: `Course Track Inquiry: ${course.title} (${course.certification || "Google Certified"})`,
      message: `Course: ${course.title}\nDuration: ${course.duration}\nProjects: ${course.projects}`,
    };
    try {
      await sendContactMessage(snapshot);
      setSubmitted(true);
    } catch (err) {
      console.error("Course inquiry dispatch error:", err);
      alert("Unable to send inquiry. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="course-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="course-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="course-modal-close-btn"
          onClick={onClose}
          aria-label="Close inquiry modal"
        >
          ✕
        </button>

        <div className="course-modal-header">
          <div className="modal-tag-row">
            <span className="modal-category-tag">{course.tag}</span>
            <span className="modal-duration-tag">{course.duration}</span>
          </div>
          <h2 className="modal-course-title">{course.title}</h2>
          <div className="modal-cert-badge">
            <span className="cert-check">✓</span>
            <span>{course.certification} Included</span>
          </div>
        </div>

        <div className="course-modal-body">
          <div className="modal-labs-box">
            <strong>Hands-on Labs Curriculum:</strong>
            <p>{course.projects}</p>
          </div>

          {submitted ? (
            <div className="modal-success-state">
              <div className="success-icon-ring">✓</div>
              <h3>Inquiry Sent Successfully!</h3>
              <p>
                Thank you for your interest in <strong>{course.title}</strong>. Our academic team will get back to you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                className="btn btn-navy"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                style={{ marginTop: "16px", minWidth: "140px" }}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="modal-inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row-grid">
                <div className="form-field">
                  <label htmlFor="modal-name">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-email">Work / Academic Email *</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@institution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-field">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 99416 56492"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-inst">College / Institution</label>
                  <input
                    id="modal-inst"
                    type="text"
                    placeholder="e.g. Anna University"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-navy modal-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending Inquiry..." : "Submit Track Inquiry →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
