import { useState } from "react";
import { sendContactMessage, getGmailComposeLink, getMailtoLink, getWhatsAppMessageLink } from "../utils/contactEmailService";
import "./CTA.css";

export default function CTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [lastData, setLastData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "AR/VR Simulation",
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
      phone: "Not provided",
      institution: formData.organization,
      enquiryType: formData.interest,
      message: formData.message || "Project inquiry initiated from CTA panel.",
    };
    setLastData(snapshot);
    try {
      await sendContactMessage(snapshot);
    } catch (err) {
      console.error("CTA dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-card">
          <div className="cta-inner-grid">
            {/* Left / Main CTA Content */}
            <div className="cta-content">
              <div className="cta-eyebrow">
                <span className="cta-dot"></span>
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="cta-heading">Let's build a more immersive future.</h2>

              <p className="cta-text">
                Have a learning, training or technology challenge?
                Let's explore what immersive technology can do for your organisation.
              </p>

              <div className="cta-contact-details">
                <div className="cta-contact-item">
                  <span className="cta-detail-label">Email our team</span>
                  <a href="mailto:info@myingage.com" className="cta-detail-val">
                    info@myingage.com
                  </a>
                </div>
                <div className="cta-contact-item">
                  <span className="cta-detail-label">Direct phone</span>
                  <a href="tel:+919941656492" className="cta-detail-val">
                    +91 99416 56492
                  </a>
                </div>
                <div className="cta-contact-item">
                  <span className="cta-detail-label">Campus office</span>
                  <span className="cta-detail-val">
                    KG360 Degree, Perungudi, Chennai
                  </span>
                </div>
              </div>

              {!showForm && (
                <div className="cta-actions">
                  <button
                    className="btn btn-accent"
                    onClick={() => setShowForm(true)}
                  >
                    Start a conversation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Right: Interactive Inquiry Box */}
            <div className={`cta-form-col ${showForm ? "active" : ""}`}>
              <div className="cta-form-frame">
                {formSubmitted ? (
                  <div className="cta-success-box">
                    <div className="success-icon">✓</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>
                      Thank you for contacting InGage EduTech. Our team will get back to you soon.
                    </p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", organization: "", interest: "AR/VR Simulation", message: "" });
                      }}
                      style={{ marginTop: "16px", width: "100%" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cta-form">
                    <h3 className="form-heading">Initiate Project Inquiry</h3>

                    <div className="form-field-group">
                      <label htmlFor="cta-name">Your Full Name</label>
                      <input
                        id="cta-name"
                        type="text"
                        name="name"
                        placeholder="Dr. Rajesh Kumar"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="cta-email">Official Email</label>
                      <input
                        id="cta-email"
                        type="email"
                        name="email"
                        placeholder="rajesh@university.edu.in"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-row-duo">
                      <div className="form-field-group">
                        <label htmlFor="cta-org">Institution / Company</label>
                        <input
                          id="cta-org"
                          type="text"
                          name="organization"
                          placeholder="Institution Name"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="cta-interest">Primary Interest</label>
                        <select
                          id="cta-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="AR/VR Simulation">AR / VR Simulation</option>
                          <option value="IoT Connected Labs">IoT Smart Labs</option>
                          <option value="EdTech Curriculum">EdTech Curriculum</option>
                          <option value="Digital Twins">3D & Digital Twins</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="cta-message">Project Scope or Brief (Optional)</label>
                      <textarea
                        id="cta-message"
                        name="message"
                        rows="3"
                        placeholder="Tell us about your learning objectives or technical requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-accent form-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
