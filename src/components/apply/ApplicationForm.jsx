import React, { useState } from "react";
import { X, Upload, ArrowRight, FileText, Loader2, Sparkles } from "lucide-react";
import { sendContactMessage, fileToBase64 } from "../../utils/contactEmailService";
import "./ApplicationForm.css";

export default function ApplicationForm({
  opportunity,
  journeyType = "STUDENT",
  onClose,
  onSubmitSuccess,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    college: "",
    degree: "",
    graduationYear: "",
    currentRole: "",
    yearsExperience: "",
    areaOfInterest: "",
    skills: "",
    projects: "",
    linkedin: "",
    resumeFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle simulated resume file attachment
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resumeFile: "File size must be under 10MB" }));
        return;
      }
      setFormData((prev) => ({ ...prev, resumeFile: file }));
      setErrors((prev) => ({ ...prev, resumeFile: "" }));
    }
  };

  // Validate form client-side
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (journeyType === "STUDENT") {
      if (!formData.college.trim()) {
        newErrors.college = "Please specify your college or institution.";
      }
    } else if (journeyType === "FRESHER") {
      if (!formData.college.trim()) {
        newErrors.college = "Please specify your college or degree.";
      }
      if (!formData.skills.trim()) {
        newErrors.skills = "Please list your primary skills.";
      }
    } else if (journeyType === "EXPERIENCED PROFESSIONAL") {
      if (!formData.currentRole.trim()) {
        newErrors.currentRole = "Please enter your current role or previous organization.";
      }
      if (!formData.skills.trim()) {
        newErrors.skills = "Please list your primary skills.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const oppTitle = opportunity ? opportunity.title : "General Talent Network";
      const oppDept = opportunity ? opportunity.department : "All Pathways";

      let candidateDetails = `Journey Type: ${journeyType}\nTarget Opportunity: ${oppTitle} (${oppDept})\nCity: ${formData.city || "N/A"}\nDegree / Branch: ${formData.degree || "N/A"}\nGraduation Year: ${formData.graduationYear || "N/A"}`;
      
      if (formData.currentRole) {
        candidateDetails += `\nCurrent Role / Organization: ${formData.currentRole}`;
      }
      if (formData.yearsExperience) {
        candidateDetails += `\nYears of Experience: ${formData.yearsExperience}`;
      }
      if (formData.areaOfInterest) {
        candidateDetails += `\nArea of Interest: ${formData.areaOfInterest}`;
      }
      if (formData.skills) {
        candidateDetails += `\nSkills: ${formData.skills}`;
      }
      if (formData.projects) {
        candidateDetails += `\nProjects / Highlights: ${formData.projects}`;
      }
      if (formData.linkedin) {
        candidateDetails += `\nLinkedIn / Portfolio: ${formData.linkedin}`;
      }
      if (formData.resumeFile) {
        candidateDetails += `\nAttached Resume: ${formData.resumeFile.name} (${(formData.resumeFile.size / 1024).toFixed(1)} KB)`;
      }

      // Convert resume file to base64 attachment for email delivery
      let attachments = [];
      if (formData.resumeFile) {
        try {
          const encodedFile = await fileToBase64(formData.resumeFile);
          if (encodedFile) {
            attachments.push(encodedFile);
          }
        } catch (fileErr) {
          console.error("Failed to read resume attachment:", fileErr);
        }
      }

      await sendContactMessage({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college || formData.currentRole || "Not specified",
        enquiryType: `Application: ${oppTitle} [${journeyType}]`,
        message: candidateDetails,
        attachments,
      });

      if (onSubmitSuccess) {
        onSubmitSuccess({
          opportunity: opportunity || { title: "General InGage Application", department: "Talent Network" },
          candidate: formData,
          journeyType,
        });
      }
    } catch (err) {
      console.error("Application submission failed:", err);
      alert("Unable to submit application. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="form-heading">
      <div className="application-modal-dialog">
        {/* Modal Header */}
        <div className="application-modal-header">
          <div className="header-meta-box">
            <span className="form-eyebrow">
              <Sparkles size={13} className="text-green" />
              {journeyType} APPLICATION FLOW
            </span>
            <h2 id="form-heading" className="form-main-heading">
              {opportunity ? opportunity.title : "Apply to InGage"}
            </h2>
            {opportunity && (
              <p className="form-sub-desc">
                {opportunity.department} • {opportunity.location} • {opportunity.experienceLevel}
              </p>
            )}
          </div>

          <button
            type="button"
            className="btn-close-modal"
            onClick={onClose}
            aria-label="Close application form"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="application-form-body" noValidate>
          {/* Section 1: Candidate Information */}
          <div className="form-section-group">
            <h3 className="form-group-title">1. Personal Information</h3>

            <div className="form-grid-2">
              <div className="form-field">
                <label htmlFor="fullName" className="field-label">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Priya Sundaram"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`field-input ${errors.fullName ? "input-error" : ""}`}
                />
                {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="field-label">
                  Email Address <span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. priya@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`field-input ${errors.email ? "input-error" : ""}`}
                />
                {errors.email && <span className="field-error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label htmlFor="phone" className="field-label">
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`field-input ${errors.phone ? "input-error" : ""}`}
                />
                {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="city" className="field-label">
                  Current City / Location
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="e.g. Chennai, Bangalore"
                  value={formData.city}
                  onChange={handleChange}
                  className="field-input"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Educational / Professional Background */}
          <div className="form-section-group">
            <h3 className="form-group-title">
              {journeyType === "EXPERIENCED PROFESSIONAL" ? "2. Professional Information" : "2. Academic Information"}
            </h3>

            {journeyType === "STUDENT" && (
              <>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="college" className="field-label">
                      College / Institution <span className="req">*</span>
                    </label>
                    <input
                      id="college"
                      name="college"
                      type="text"
                      placeholder="e.g. Anna University"
                      value={formData.college}
                      onChange={handleChange}
                      className={`field-input ${errors.college ? "input-error" : ""}`}
                    />
                    {errors.college && <span className="field-error-msg">{errors.college}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="degree" className="field-label">
                      Degree / Department
                    </label>
                    <input
                      id="degree"
                      name="degree"
                      type="text"
                      placeholder="e.g. B.Tech Computer Science"
                      value={formData.degree}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="graduationYear" className="field-label">
                      Graduation Year
                    </label>
                    <input
                      id="graduationYear"
                      name="graduationYear"
                      type="text"
                      placeholder="e.g. 2026 or 2027"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="areaOfInterest" className="field-label">
                      Area of Interest
                    </label>
                    <input
                      id="areaOfInterest"
                      name="areaOfInterest"
                      type="text"
                      placeholder="e.g. AR/VR, AI & Vision, IoT"
                      value={formData.areaOfInterest}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>
              </>
            )}

            {journeyType === "FRESHER" && (
              <>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="college" className="field-label">
                      Education / University <span className="req">*</span>
                    </label>
                    <input
                      id="college"
                      name="college"
                      type="text"
                      placeholder="e.g. B.E. Electronics & Communication"
                      value={formData.college}
                      onChange={handleChange}
                      className={`field-input ${errors.college ? "input-error" : ""}`}
                    />
                    {errors.college && <span className="field-error-msg">{errors.college}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="graduationYear" className="field-label">
                      Year of Graduation
                    </label>
                    <input
                      id="graduationYear"
                      name="graduationYear"
                      type="text"
                      placeholder="e.g. 2025"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="projects" className="field-label">
                    Key Academic / Capstone Projects
                  </label>
                  <input
                    id="projects"
                    name="projects"
                    type="text"
                    placeholder="Briefly describe your main project"
                    value={formData.projects}
                    onChange={handleChange}
                    className="field-input"
                  />
                </div>
              </>
            )}

            {journeyType === "EXPERIENCED PROFESSIONAL" && (
              <>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="currentRole" className="field-label">
                      Current Role / Employer <span className="req">*</span>
                    </label>
                    <input
                      id="currentRole"
                      name="currentRole"
                      type="text"
                      placeholder="e.g. Senior Frontend Engineer"
                      value={formData.currentRole}
                      onChange={handleChange}
                      className={`field-input ${errors.currentRole ? "input-error" : ""}`}
                    />
                    {errors.currentRole && <span className="field-error-msg">{errors.currentRole}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="yearsExperience" className="field-label">
                      Years of Experience
                    </label>
                    <select
                      id="yearsExperience"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleChange}
                      className="field-input field-select"
                    >
                      <option value="">Select experience range</option>
                      <option value="1–2 Years">1–2 Years</option>
                      <option value="3–5 Years">3–5 Years</option>
                      <option value="5–8 Years">5–8 Years</option>
                      <option value="8+ Years">8+ Years</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="form-field">
              <label htmlFor="skills" className="field-label">
                Primary Skills & Technologies {journeyType !== "STUDENT" && <span className="req">*</span>}
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                placeholder="e.g. React, Python, Unity, PyTorch, Cloud"
                value={formData.skills}
                onChange={handleChange}
                className={`field-input ${errors.skills ? "input-error" : ""}`}
              />
              {errors.skills && <span className="field-error-msg">{errors.skills}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="linkedin" className="field-label">
                LinkedIn / GitHub / Portfolio Link
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username or github.com"
                value={formData.linkedin}
                onChange={handleChange}
                className="field-input"
              />
            </div>
          </div>

          {/* Section 3: Resume Upload Dropzone */}
          <div className="form-section-group">
            <h3 className="form-group-title">3. Resume / Curriculum Vitae</h3>

            <div className="resume-upload-dropzone">
              <input
                id="resumeUpload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden-file-input"
              />
              <label htmlFor="resumeUpload" className="dropzone-label">
                <div className="dropzone-icon-box">
                  {formData.resumeFile ? (
                    <FileText size={24} className="text-green" />
                  ) : (
                    <Upload size={24} className="text-navy" />
                  )}
                </div>

                {formData.resumeFile ? (
                  <div className="dropzone-file-selected">
                    <span className="file-name">{formData.resumeFile.name}</span>
                    <span className="file-size">
                      ({(formData.resumeFile.size / 1024).toFixed(1)} KB) — Click to replace
                    </span>
                  </div>
                ) : (
                  <div className="dropzone-text-block">
                    <span className="dropzone-primary-text">Click to upload or drag and drop</span>
                    <span className="dropzone-sub-text">PDF, DOC, DOCX up to 5MB</span>
                  </div>
                )}
              </label>
              {errors.resumeFile && <span className="field-error-msg">{errors.resumeFile}</span>}
            </div>
          </div>

          {/* Form Footer Action */}
          <div className="form-footer-action">
            <button
              type="submit"
              className="btn-submit-application"
              disabled={isSubmitting}
              aria-label="Submit Application"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="spinner-icon" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
