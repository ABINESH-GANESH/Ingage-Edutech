import { useState } from "react";
import { brand } from "../../data/brandData";
import { sendContactMessage } from "../../utils/contactEmailService";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    interest: "Enterprise Spatial Solutions",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      await sendContactMessage({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        college: formData.org || "Not specified",
        enquiryType: formData.interest,
        message: formData.message || "General enquiry submitted from Home Contact section.",
      });
      setSent(true);
      setFormData({
        name: "",
        org: "",
        email: "",
        phone: "",
        interest: "Enterprise Spatial Solutions",
        message: "",
      });
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error("Home contact dispatch error:", err);
      setSubmitError("Unable to Send Message. Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-editorial" id="contact">
      <div className="editorial-container">
        <div className="contact-split-grid">
          {/* Left: Editorial Statement & Address */}
          <div>
            <span className="tech-label tech-label-accent">
              11 // INITIATE DIALOGUE
            </span>

            <h2 className="contact-main-h2">
              HAVE A PROBLEM<br />
              <span className="navy-text">WORTH</span> <span className="green-text">EXPERIENCING?</span>
            </h2>

            <p className="contact-lead-p">
              "Tell us what you're trying to build, teach, simulate or improve."
            </p>

            <div className="contact-address-card">
              <strong>{brand.name}</strong>
              <p>
                {brand.location.office}, {brand.location.plot}, {brand.location.area},<br />
                {brand.location.city} – {brand.location.pincode}, {brand.location.state}, {brand.location.country}
              </p>

              <div className="contact-quick-links">
                <div>EMAIL // <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a></div>
                <div>PHONE // <a href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}>{brand.contact.phone}</a></div>
                <div>PORTAL // <span>{brand.contact.website}</span></div>
                <div>COORDINATES // <span>{brand.coordinates}</span></div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Inquiry Form */}
          <div className="contact-form-frame">
            {sent ? (
              <div className="form-success-editorial">
                [TRANSMISSION RECEIVED // OUR TEAM WILL INITIATE DIALOGUE SHORTLY]
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="editorial-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    className="editorial-input"
                    placeholder="e.g. Arun Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="editorial-form-group">
                  <label>Organization / University</label>
                  <input
                    type="text"
                    className="editorial-input"
                    placeholder="e.g. Industrial Automation Corp / Engineering College"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  />
                </div>

                <div className="editorial-form-group">
                  <label>Work Email *</label>
                  <input
                    type="email"
                    required
                    className="editorial-input"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="editorial-form-group">
                  <label>Area of Interest</label>
                  <select
                    className="editorial-select"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="Enterprise Spatial Solutions">Enterprise Spatial Solutions (AR / VR / MR)</option>
                    <option value="InGage EduTech Skill Center">InGage EduTech Skill Labs (60h Curricula)</option>
                    <option value="Industrial Safety Simulation">Industrial Safety & Hazard Rehearsal</option>
                    <option value="Digital Twin & IoT">Digital Twin & IoT Shopfloor Telemetry</option>
                    <option value="Digital Experience Center">Flagship Experience Center Architecture</option>
                    <option value="Other Technology Challenge">Other Custom Technology Challenge</option>
                  </select>
                </div>

                <div className="editorial-form-group">
                  <label>What are you looking to build or improve?</label>
                  <textarea
                    className="editorial-textarea"
                    placeholder="Briefly describe the machinery, student cohort, or operational challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {submitError && (
                  <div style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px", padding: "8px 12px", background: "rgba(239, 68, 68, 0.1)", borderRadius: "4px" }}>
                    ⚠️ {submitError}
                  </div>
                )}

                <button type="submit" className="btn-editorial-primary" style={{ width: "100%" }} disabled={isSubmitting}>
                  {isSubmitting ? "SENDING MESSAGE..." : "START A CONVERSATION →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
