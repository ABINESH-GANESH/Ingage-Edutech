import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Building2,
  ShieldCheck,
  RotateCw,
  Upload,
  FileText,
  X,
  ChevronDown,
  ChevronUp,
  Award,
  HelpCircle,
  ArrowRight,
  User,
  Briefcase,
  GraduationCap,
  Laptop,
  Check,
} from "lucide-react";
import { sendContactMessage, fileToBase64 } from "../utils/contactEmailService";
import { contactData } from "../data/contactData";
import { approvedData } from "../data/approvedData";
import "./ContactUs.css";

const ENQUIRY_CATEGORIES = [
  { id: "coe", label: "Campus CoE Lab (₹1.5 Cr)", value: "Set Up a Campus CoE (₹1.5 Cr Lab)", icon: Building2 },
  { id: "google", label: "Google Certifications", value: "Google Career Certifications", icon: Award },
  { id: "internship", label: "Internships & Hackathons", value: "Student Internships & Hackathons", icon: Laptop },
  { id: "fdp", label: "Faculty Development (FDP)", value: "Faculty Development (FDP)", icon: GraduationCap },
  { id: "general", label: "General Enquiry", value: "General Enquiry", icon: HelpCircle },
];

const FAQS = [
  {
    q: "How soon will the InGage academic team respond to our enquiry?",
    a: "Our institutional enablement team reviews all incoming requests continuously during working hours (Mon–Sat, 9:00 AM – 6:30 PM IST) and guarantees a direct response from a dedicated advisor within 24 business hours.",
  },
  {
    q: "Can our college schedule an on-campus demonstration of the ₹1.5 Cr CoE Lab?",
    a: "Yes! We arrange on-premise hardware sandbox demonstrations and virtual CoE blueprints for college principals, trustees, HODs, and academic directors. Simply select 'Set Up a Campus CoE' in the form.",
  },
  {
    q: "Are official Google Career Certificate exam vouchers included in institutional tie-ups?",
    a: "Yes. InGage EduTech is an authorized partner providing official Google curriculum, cloud credits, hands-on lab sandbox access, and verified dual-branded certification credentials.",
  },
  {
    q: "What documents can we attach with our inquiry?",
    a: "You can upload college MoU proposals, institutional infrastructure specs, student cohort lists, or candidate resumes in PDF, DOC, or DOCX formats (up to 10MB).",
  },
  {
    q: "Where is InGage EduTech headquartered, and can we visit in person?",
    a: "Our corporate headquarters and flagship CoE demonstration facility is located at KG 360 Degree IT Park, 7th Floor, MGR Salai, Perungudi, Chennai (OMR Tech Corridor). Campus visits can be scheduled in advance.",
  },
];

// Official Google 4-Color Icon
function GoogleOfficialIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Google Official Logo"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function ContactUs({ onNavigate }) {
  const { directCommunication, officeLocation } = contactData;
  const { brand } = approvedData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    enquiryType: "Set Up a Campus CoE (₹1.5 Cr Lab)",
    message: "",
  });

  const [attachmentFile, setAttachmentFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCategorySelect = (enquiryValue) => {
    setFormData((prev) => ({ ...prev, enquiryType: enquiryValue }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setAttachmentFile(file);
    }
  };

  const handleRemoveFile = () => {
    setAttachmentFile(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or requirements.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) {
        const el = document.getElementById(`field-${firstKey}`);
        if (el) el.focus();
      }
      return;
    }

    setIsSubmitting(true);
    let attachments = [];
    if (attachmentFile) {
      try {
        const encoded = await fileToBase64(attachmentFile);
        if (encoded) {
          attachments.push(encoded);
        }
      } catch (err) {
        console.error("Attachment encoding error:", err);
      }
    }

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.institution,
      enquiryType: formData.enquiryType,
      message: formData.message || "Institutional inquiry submitted via website contact form.",
      attachments,
    };

    try {
      await sendContactMessage(payload);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        enquiryType: "Set Up a Campus CoE (₹1.5 Cr Lab)",
        message: "",
      });
      setAttachmentFile(null);
      setErrors({});
    } catch (err) {
      console.error("Submission dispatch error:", err);
      setSubmitError("Unable to send your message right now. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetSuccess = () => {
    setIsSuccess(false);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page-root">
      {/* 1. HERO HEADER BANNER */}
      <section className="contact-hero-banner">
        <div className="contact-hero-glow glow-1" aria-hidden="true" />
        <div className="contact-hero-glow glow-2" aria-hidden="true" />
        <div className="contact-hero-grid-pattern" aria-hidden="true" />

        <div className="contact-container">
          <div className="contact-hero-header-content">
            <div className="contact-pill-badge">
              <Sparkles size={14} className="pill-badge-icon text-brand-green" />
              <span>OFFICIAL ADMISSIONS &amp; INSTITUTIONAL PARTNERSHIP PORTAL</span>
            </div>

            <h1 className="contact-hero-title">
              Let's Build the Future of <br className="hero-br" />
              <span className="hero-gradient-text">Higher Education Together</span>
            </h1>

            <p className="contact-hero-subtitle">
              Whether establishing turnkey ₹1.5 Cr CoE Laboratories, integrating official Google Career Certificates,
              or scheduling faculty immersion bootcamps, our enablement team responds within 24 hours.
            </p>

            {/* Quick Metrics Bar */}
            <div className="contact-metrics-pills-row">
              <div className="metric-pill-item">
                <span className="metric-dot green" />
                <span className="metric-text"><strong>&lt; 24h</strong> Guaranteed Response</span>
              </div>
              <div className="metric-pill-item">
                <span className="metric-dot blue" />
                <span className="metric-text"><strong>1,750+</strong> Partner Colleges</span>
              </div>
              <div className="metric-pill-item">
                <span className="metric-dot green" />
                <span className="metric-text"><strong>75+</strong> CoE Labs Built</span>
              </div>
              <div className="metric-pill-item">
                <span className="metric-dot blue" />
                <span className="metric-text"><strong>10,000+</strong> Placements/Yr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT MASTER CONTACT SECTION */}
      <section className="contact-main-split-section">
        <div className="contact-container">
          <div className="contact-split-master-card">
            {/* LEFT COLUMN: BRAND VALUE SHOWCASE */}
            <div className="contact-showcase-pane">
              <div className="showcase-ambient-blob" aria-hidden="true" />
              
              <div className="showcase-top-tag">
                <Building2 size={15} className="text-brand-green" />
                <span>CENTRE OF EXCELLENCE HUB • CHENNAI</span>
              </div>

              <div className="showcase-body">
                <span className="showcase-kicker">Direct Institutional Channel</span>
                <h2 className="showcase-heading">
                  Bridging the Gap Between <br />
                  <span className="showcase-gradient-words">Degrees &amp; Industry Careers</span>
                </h2>
                <p className="showcase-lead">
                  Connect directly with InGage EduTech’s academic transformation consultants to design turnkey infrastructure, 
                  deploy emerging tech sandboxes, and empower your student cohorts with global credentials.
                </p>

                <div className="showcase-value-cards">
                  <div className="value-mini-card">
                    <div className="value-icon-box">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="value-text-box">
                      <h4 className="value-title">Dedicated Relationship Manager</h4>
                      <p className="value-desc">Single point of contact for institutional MoUs, syllabus upgrades, and timeline execution.</p>
                    </div>
                  </div>

                  <div className="value-mini-card">
                    <div className="value-icon-box">
                      <Award size={20} />
                    </div>
                    <div className="value-text-box">
                      <h4 className="value-title">Turnkey Lab Architecture</h4>
                      <p className="value-desc">Complete hardware, AR/VR spatial setups, AI workstations, and cloud lab sandboxes.</p>
                    </div>
                  </div>

                  <div className="value-mini-card">
                    <div className="value-icon-box">
                      <Briefcase size={20} />
                    </div>
                    <div className="value-text-box">
                      <h4 className="value-title">Corporate Hiring Integration</h4>
                      <p className="value-desc">Direct placement pathways across 500+ top tech recruiters and Fortune enterprise networks.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Micro-Card */}
                <div className="showcase-direct-channel">
                  <div className="direct-channel-title">NEED IMMEDIATE ASSISTANCE?</div>
                  <div className="direct-channel-links">
                    <a href={`tel:${brand.contact.phone}`} className="channel-link-pill">
                      <Phone size={14} className="text-brand-green" />
                      <span>{brand.contact.phoneDisplay}</span>
                    </a>
                    <a href={`mailto:${brand.contact.email}`} className="channel-link-pill">
                      <Mail size={14} className="text-brand-green" />
                      <span>{brand.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MODERN INTERACTIVE CONTACT FORM */}
            <div className="contact-form-pane">
              <div className="form-pane-header">
                <div className="form-title-group">
                  <h2 className="form-main-heading">Send Us a Message</h2>
                  <p className="form-sub-heading">
                    Fill out the form below and our institutional skilling team will get in touch with you shortly.
                  </p>
                </div>
              </div>

              {isSuccess ? (
                /* SUCCESS CONFIRMATION STATE */
                <div className="contact-success-state" role="status" aria-live="polite">
                  <div className="success-halo-badge">
                    <CheckCircle2 size={44} className="success-check-svg" />
                  </div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-text">
                    Thank you for reaching out to <strong>InGage EduTech</strong>. Your inquiry has been registered in our portal, 
                    and an academic relationship manager will review your submission and contact you within 24 business hours.
                  </p>
                  
                  <div className="success-features-checklist">
                    <div className="chk-row"><Check size={16} className="text-green" /><span>Inquiry dispatched to core enablement team</span></div>
                    <div className="chk-row"><Check size={16} className="text-green" /><span>Two-way direct response linked to your email</span></div>
                    {attachmentFile && <div className="chk-row"><Check size={16} className="text-green" /><span>Attached document delivered securely</span></div>}
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary success-continue-btn"
                    onClick={handleResetSuccess}
                  >
                    <span>Send Another Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                /* INTERACTIVE FORM */
                <form className="contact-actual-form" onSubmit={handleSubmit} noValidate>
                  {/* Category Fast Selection Pills */}
                  <div className="enquiry-category-selector">
                    <label className="field-top-label">I'M INTERESTED IN:</label>
                    <div className="category-pills-row">
                      {ENQUIRY_CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = formData.enquiryType === cat.value;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            className={`category-pill-btn ${isSelected ? "active" : ""}`}
                            onClick={() => handleCategorySelect(cat.value)}
                          >
                            <Icon size={14} className="pill-btn-icon" />
                            <span>{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* FULL NAME */}
                  <div className="form-group-item">
                    <label htmlFor="field-name" className="field-top-label">
                      FULL NAME <span className="field-req">*</span>
                    </label>
                    <div className={`field-input-box ${errors.name ? "has-error" : ""}`}>
                      <User size={18} className="field-input-icon" />
                      <input
                        type="text"
                        id="field-name"
                        name="name"
                        className="field-native-input"
                        placeholder="e.g. Dr. Rajesh Kumar / Priya Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                      />
                    </div>
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  {/* 2-COLUMN: EMAIL & PHONE */}
                  <div className="form-grid-2col">
                    <div className="form-group-item">
                      <label htmlFor="field-email" className="field-top-label">
                        EMAIL ADDRESS <span className="field-req">*</span>
                      </label>
                      <div className={`field-input-box ${errors.email ? "has-error" : ""}`}>
                        <Mail size={18} className="field-input-icon" />
                        <input
                          type="email"
                          id="field-email"
                          name="email"
                          className="field-native-input"
                          placeholder="rajesh.k@institution.edu"
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                        />
                      </div>
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="field-phone" className="field-top-label">
                        PHONE NUMBER <span className="field-req">*</span>
                      </label>
                      <div className={`field-input-box ${errors.phone ? "has-error" : ""}`}>
                        <Phone size={18} className="field-input-icon" />
                        <input
                          type="tel"
                          id="field-phone"
                          name="phone"
                          className="field-native-input"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          aria-required="true"
                        />
                      </div>
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* 2-COLUMN: COLLEGE / INSTITUTION & ENQUIRY TYPE SELECT */}
                  <div className="form-grid-2col">
                    <div className="form-group-item">
                      <label htmlFor="field-institution" className="field-top-label">
                        COLLEGE / INSTITUTION / ORG
                      </label>
                      <div className="field-input-box">
                        <Building2 size={18} className="field-input-icon" />
                        <input
                          type="text"
                          id="field-institution"
                          name="institution"
                          className="field-native-input"
                          placeholder="e.g. Anna University, SRM, IIT Madras"
                          value={formData.institution}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="field-enquiryType" className="field-top-label">
                        ENQUIRY PROGRAM
                      </label>
                      <div className="field-input-box">
                        <Award size={18} className="field-input-icon" />
                        <select
                          id="field-enquiryType"
                          name="enquiryType"
                          className="field-native-select"
                          value={formData.enquiryType}
                          onChange={handleChange}
                        >
                          <option value="Set Up a Campus CoE (₹1.5 Cr Lab)">Set Up a Campus CoE (₹1.5 Cr Lab)</option>
                          <option value="Google Career Certifications">Google Career Certifications</option>
                          <option value="Student Internships & Hackathons">Student Internships & Hackathons</option>
                          <option value="Faculty Development (FDP)">Faculty Development (FDP)</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div className="form-group-item">
                    <label htmlFor="field-message" className="field-top-label">
                      MESSAGE / REQUIREMENTS <span className="field-req">*</span>
                    </label>
                    <div className={`field-textarea-box ${errors.message ? "has-error" : ""}`}>
                      <textarea
                        id="field-message"
                        name="message"
                        rows={4}
                        className="field-native-textarea"
                        placeholder="Please describe your institution's requirements, target student strength, lab preferences, or timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        aria-required="true"
                      />
                    </div>
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  {/* ATTACH RESUME / PROPOSAL DOCUMENT (OPTIONAL) */}
                  <div className="form-group-item">
                    <div className="attachment-header-row">
                      <label htmlFor="field-attachment" className="field-top-label">
                        ATTACH DOCUMENT / RESUME <span className="field-opt-label">(Optional)</span>
                      </label>
                      <span className="field-hint-text">PDF, DOC, DOCX up to 10MB</span>
                    </div>

                    {!attachmentFile ? (
                      <label htmlFor="field-attachment" className="file-upload-dropzone">
                        <Upload size={20} className="dropzone-upload-icon text-brand-navy" />
                        <div className="dropzone-text-group">
                          <span className="dropzone-primary-text">Click to upload or drag &amp; drop document</span>
                          <span className="dropzone-sub-text">MoU draft, lab specs, syllabus, or student resume</span>
                        </div>
                        <input
                          type="file"
                          id="field-attachment"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          onChange={handleFileChange}
                          className="file-hidden-input"
                        />
                      </label>
                    ) : (
                      <div className="file-selected-card">
                        <div className="file-selected-left">
                          <div className="file-icon-square">
                            <FileText size={18} className="text-brand-navy" />
                          </div>
                          <div className="file-info-group">
                            <span className="file-name-text">{attachmentFile.name}</span>
                            <span className="file-size-badge">{(attachmentFile.size / 1024).toFixed(1)} KB</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="file-remove-btn"
                          onClick={handleRemoveFile}
                          aria-label="Remove attached file"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* SUBMIT ERROR BANNER */}
                  {submitError && (
                    <div className="form-submit-error-banner" role="alert">
                      <AlertCircle size={18} className="error-banner-icon" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="contact-primary-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <RotateCw size={18} className="btn-spinner animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Your Message</span>
                          <Send size={16} className="btn-send-icon" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN DIRECT CHANNELS GRID */}
      <section className="contact-channels-section">
        <div className="channels-ambient-glow" aria-hidden="true" />
        <div className="contact-container">
          <div className="section-title-wrap text-center">
            <div className="channels-kicker-pill">
              <span className="channels-kicker-dot" />
              <span>DIRECT DESK ROUTING</span>
            </div>
            <h2 className="section-title">
              Direct <span className="title-gradient-accent">Department Desks</span>
            </h2>
            <p className="section-desc">
              Connect directly with our specialized teams for institutional MoUs, Google certifications, and campus hackathons.
            </p>
          </div>

          <div className="channels-grid-cards">
            {/* Channel 1: Institutional & CoE */}
            <div className="channel-card-item card-coe">
              <div className="card-top-accent green-accent" />
              <div className="channel-card-inner">
                <div className="channel-icon-header">
                  <div className="channel-icon-circle green">
                    <Building2 size={24} />
                  </div>
                  <span className="channel-badge badge-green">
                    <span className="badge-pulse-dot" /> CAMPUS TIE-UPS
                  </span>
                </div>
                
                <h3 className="channel-card-title">Centre of Excellence &amp; MoUs</h3>
                <p className="channel-card-desc">
                  Consult with our engineering infrastructure architects on setting up ₹1.5 Cr lab setups, AI/VR hardware, and university partnerships.
                </p>

                <div className="channel-perks-list">
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon green" /> Turnkey ₹1.5 Cr CoE
                  </span>
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon green" /> Institutional MoU
                  </span>
                </div>

                <div className="channel-card-action">
                  <a href={`mailto:${brand.contact.email}?subject=CoE%20Lab%20Setup%20Inquiry`} className="channel-action-btn btn-coe">
                    <span>Connect with CoE Lead</span>
                    <ArrowRight size={15} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Channel 2: Student Certifications */}
            <div className="channel-card-item card-google">
              <div className="card-top-accent google-accent" />
              <div className="channel-card-inner">
                <div className="channel-icon-header">
                  <div className="channel-icon-circle google-box">
                    <GoogleOfficialIcon size={24} />
                  </div>
                  <span className="channel-badge badge-blue">
                    <span className="badge-pulse-dot blue" /> STUDENT SKILLING
                  </span>
                </div>

                <h3 className="channel-card-title">Google Career Certifications</h3>
                <p className="channel-card-desc">
                  Inquire about Google Cloud, AI/ML, Data Analytics, and Cybersecurity dual-certification pathways for enrolled college batches.
                </p>

                <div className="channel-perks-list">
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon blue" /> Official Cloud &amp; AI
                  </span>
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon blue" /> 50% Exam Subsidy
                  </span>
                </div>

                <div className="channel-card-action">
                  <a href={`mailto:${brand.contact.email}?subject=Google%20Certifications%20Inquiry`} className="channel-action-btn btn-google">
                    <span>Inquire Certifications</span>
                    <ArrowRight size={15} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Channel 3: Internships & Faculty FDP */}
            <div className="channel-card-item card-faculty">
              <div className="card-top-accent purple-accent" />
              <div className="channel-card-inner">
                <div className="channel-icon-header">
                  <div className="channel-icon-circle purple">
                    <GraduationCap size={24} />
                  </div>
                  <span className="channel-badge badge-purple">
                    <span className="badge-pulse-dot purple" /> FDP &amp; INTERNSHIPS
                  </span>
                </div>

                <h3 className="channel-card-title">Faculty Immersion &amp; Hackathons</h3>
                <p className="channel-card-desc">
                  Organize national hackathons, high-impact Faculty Development Programs (FDPs), and student immersion cohorts on your campus.
                </p>

                <div className="channel-perks-list">
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon purple" /> AICTE-Aligned FDP
                  </span>
                  <span className="channel-perk-tag">
                    <Check size={12} className="perk-icon purple" /> Cash Prize Hackathons
                  </span>
                </div>

                <div className="channel-card-action">
                  <a href={`mailto:${brand.contact.email}?subject=FDP%20and%20Hackathons%20Inquiry`} className="channel-action-btn btn-faculty">
                    <span>Schedule FDP / Hackathon</span>
                    <ArrowRight size={15} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFICE LOCATION & LIVE INTERACTIVE MAP */}
      <section className="contact-location-map-section">
        <div className="contact-container">
          <div className="location-master-card">
            <div className="location-info-bar">
              <div className="location-text-col">
                <div className="location-kicker-row">
                  <MapPin size={16} className="text-brand-green" />
                  <span className="location-kicker">CAMPUS HEADQUARTERS</span>
                </div>
                <h3 className="location-card-title">InGage EduTech Corporate Office</h3>
                <p className="location-address-text">{officeLocation.fullAddress}</p>
                <div className="location-landmark-tag">
                  <Building2 size={13} />
                  <span>{officeLocation.landmark}</span>
                </div>
              </div>

              <div className="location-hours-col">
                <div className="hours-badge-box">
                  <Clock size={16} className="text-brand-navy" />
                  <div className="hours-text-group">
                    <span className="hours-title">WORKING HOURS</span>
                    <span className="hours-val">{officeLocation.timings}</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=KG+360+Degree+IT+Park+Perungudi+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary map-directions-btn"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Embedded Responsive Map */}
            <div className="location-map-viewport">
              <iframe
                title="InGage EduTech Headquarters Location Map"
                src="https://maps.google.com/maps?q=KG+360+Degree+IT+Park+Perungudi+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-native-iframe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="contact-faqs-section">
        <div className="contact-container">
          <div className="section-title-wrap text-center">
            <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-desc">
              Have questions about partnering with InGage? Here are the most common answers.
            </p>
          </div>

          <div className="faq-accordion-container">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-toggle-icon-wrap">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
