import React from "react";
import { Mail, ArrowRight, Sparkles, Send } from "lucide-react";
import "./CareersCTA.css";

export default function CareersCTA({ onNavigateHome }) {
  return (
    <section className="section careers-cta-section" id="careers-cta">
      <div className="container">
        <div className="careers-cta-card">
          <div className="careers-cta-glow-1" aria-hidden="true" />
          <div className="careers-cta-glow-2" aria-hidden="true" />

          <div className="careers-cta-content">
            <span className="careers-cta-badge">
              <Sparkles size={14} className="text-green" /> TALENT NETWORK
            </span>

            <h2 className="careers-cta-title">
              DON’T SEE THE EXACT ROLE YOU’RE LOOKING FOR?
            </h2>

            <p className="careers-cta-desc">
              We are constantly seeking brilliant software engineers, 3D spatial artists, embedded firmware developers, and passionate technical educators to join our multidisciplinary teams.
            </p>

            <div className="careers-cta-actions">
              <a
                href="mailto:careers@ingage.in?subject=Career%20Inquiry%20-%20InGage%20EduTech"
                className="btn btn-primary careers-cta-btn"
              >
                <Mail size={16} /> Send CV to careers@ingage.in
              </a>

              <button
                type="button"
                className="btn btn-secondary careers-cta-btn-subtle"
                onClick={onNavigateHome}
              >
                Back to Homepage <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
