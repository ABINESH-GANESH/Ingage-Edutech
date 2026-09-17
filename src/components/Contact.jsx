import { useState } from "react";
import { approvedData } from "../data/approvedData";
import { sendContactMessage, getGmailComposeLink, getMailtoLink, getWhatsAppMessageLink, RECIPIENT_EMAILS } from "../utils/contactEmailService";
import "./Contact.css";

export default function Contact() {
  const { brand } = approvedData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastData, setLastData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const snapshot = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      institution: formData.organization,
      enquiryType: "Institutional Skilling / CoE Setup",
      message: formData.message,
    };
    setLastData(snapshot);
    try {
      await sendContactMessage(snapshot);
    } catch (err) {
      console.error("Contact form dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section className="section section-white contact-root" id="contact">
      <div className="container">
        <div className="contact-split-grid">
          {/* Left Column: Direct Official Contact Info */}
          <div className="contact-info-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot"></span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="section-title">Contact Us</h2>

            <p className="contact-lead-text">
              Connect directly with our institutional transformation team to discuss
              Google-certified courses, turnkey CoE laboratory setups, internships,
              and placement partnerships.
            </p>

            <div className="contact-details-box">
              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-label">Direct Phone</span>
                  <a href={`tel:${brand.contact.phone}`} className="contact-value">
                    {brand.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-label">Email Address</span>
                  <a href={`mailto:${brand.contact.email}`} className="contact-value">
                    {brand.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-label">Headquarters Location</span>
                  <span className="contact-value">{brand.contact.location}</span>
                  <span className="contact-sub-loc">{brand.contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {formSubmitted ? (
                <div className="form-success-state">
                  <div className="success-badge-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting InGage EduTech. Our team will get back to you soon.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", organization: "", message: "" });
                    }}
                    style={{ marginTop: "16px", width: "100%", padding: "10px" }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  <h3 className="form-title">Send Us a Message</h3>

                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="clean-input"
                    />
                  </div>

                  <div className="form-duo-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="official@institution.edu"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="clean-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="clean-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-org">Institution / Organization</label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      placeholder="College or University Name"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="clean-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="3"
                      placeholder="Brief details about your requirement (Google tracks, CoE labs, internships)..."
                      value={formData.message}
                      onChange={handleChange}
                      className="clean-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-full" disabled={isSubmitting}>
                    {isSubmitting ? "SENDING..." : "CONTACT US"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
