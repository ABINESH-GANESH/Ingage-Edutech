import React, { useState, useEffect } from "react";
import { X, Clock, Award, CheckCircle2, BookOpen, Layers, Send, User, Mail, Phone, Building } from "lucide-react";
import { sendContactMessage } from "../../utils/contactEmailService";
import "./CourseDetailModal.css";

export default function CourseDetailModal({ course, isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    role: "Student",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContactMessage({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        enquiryType: `Course Enrollment Request: ${course.title}`,
        message: `Applicant Role: ${formData.role}\nCourse: ${course.title}\nCategory: ${course.categoryLabel}\nDuration: ${course.duration}\nCertification: ${course.certification}`,
      });
    } catch (err) {
      console.error("Course Detail Modal dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="course-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="course-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="course-modal-header">
          <div className="modal-header-meta">
            <span className="modal-category-badge">{course.categoryLabel}</span>
            <span className="modal-duration-badge">
              <Clock size={13} /> {course.duration}
            </span>
          </div>
          <button
            type="button"
            className="course-modal-close"
            onClick={onClose}
            aria-label="Close course details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="course-modal-body">
          <div className="course-modal-title-row">
            <h2 className="course-modal-title">{course.title}</h2>
            <div className="course-cert-badge">
              <Award size={15} className="text-green" />
              <span>{course.certification}</span>
            </div>
          </div>

          <p className="course-modal-overview">{course.overview || course.description}</p>

          {/* Key Details Grid */}
          <div className="course-detail-sections-grid">
            {/* Left Column: What you'll learn & Outcomes */}
            <div className="detail-col-main">
              {course.whatYouWillLearn && (
                <div className="detail-block">
                  <h4 className="detail-block-title">
                    <BookOpen size={17} className="text-navy" /> What You'll Learn
                  </h4>
                  <ul className="detail-checklist">
                    {course.whatYouWillLearn.map((item, idx) => (
                      <li key={idx} className="checklist-item">
                        <CheckCircle2 size={16} className="check-icon text-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.learningOutcomes && (
                <div className="detail-block">
                  <h4 className="detail-block-title">
                    <Layers size={17} className="text-navy" /> Learning Outcomes
                  </h4>
                  <ul className="detail-checklist">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="checklist-item">
                        <CheckCircle2 size={16} className="check-icon text-green" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.skills && (
                <div className="detail-block">
                  <h4 className="detail-block-title">Skills & Technologies Covered</h4>
                  <div className="modal-skills-cloud">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="modal-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Inquire / Enrollment Form */}
            <div className="detail-col-sidebar">
              <div className="modal-inquiry-box">
                <h4 className="inquiry-box-title">Request Syllabus & Enrollment</h4>
                <p className="inquiry-box-sub">
                  Connect with InGage academic counselors for course scheduling, institution licensing, and student voucher details.
                </p>

                {formSubmitted ? (
                  <div className="modal-inquiry-success">
                    <CheckCircle2 size={36} className="text-green" />
                    <h5>Inquiry Received!</h5>
                    <p>
                      Thank you for your interest in <strong>{course.title}</strong>. Our academic team will email syllabus details to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      className="btn btn-navy"
                      onClick={onClose}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form className="modal-inquiry-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="modal-name">Full Name *</label>
                      <div className="input-wrap">
                        <User size={15} className="input-icon" />
                        <input
                          id="modal-name"
                          name="fullName"
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-email">Email Address *</label>
                      <div className="input-wrap">
                        <Mail size={15} className="input-icon" />
                        <input
                          id="modal-email"
                          name="email"
                          type="email"
                          required
                          placeholder="rahul@example.edu"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-phone">Phone Number *</label>
                      <div className="input-wrap">
                        <Phone size={15} className="input-icon" />
                        <input
                          id="modal-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-inst">College / Organization *</label>
                      <div className="input-wrap">
                        <Building size={15} className="input-icon" />
                        <input
                          id="modal-inst"
                          name="institution"
                          type="text"
                          required
                          placeholder="Institution Name"
                          value={formData.institution}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary modal-submit-btn" disabled={isSubmitting}>
                      <span>{isSubmitting ? "Submitting..." : "Request Track Syllabus"}</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
