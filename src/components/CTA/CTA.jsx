import { useState } from "react";
import { sendContactMessage } from "../../utils/contactEmailService";
import "./CTA.css";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      await sendContactMessage({
        fullName: "Platform Trial Request",
        email: email.trim(),
        phone: "Not provided",
        college: "Not specified",
        enquiryType: "Free Trial & Platform Demo",
        message: `Free trial request initiated from homepage banner for: ${email.trim()}`,
      });
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("CTA submission error:", err);
      alert("Unable to process request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <span className="cta-badge">START TODAY</span>
        <h2>Ready to transform the way you learn?</h2>
        <p>
          Discover a smarter, more engaging, and high-impact learning experience.
          Join millions of successful students, educators, and schools today.
        </p>

        {submitted ? (
          <div
            style={{
              padding: "16px 28px",
              background: "#dcfce7",
              color: "#15803d",
              borderRadius: "9999px",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            🎉 Thank you! Our academic counsellor will reach out shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cta-action-group">
            <div className="cta-input-box">
              <input
                type="email"
                placeholder="Enter your work or personal email..."
                className="cta-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get Free Trial"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
