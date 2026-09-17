import React from "react";
import { Sparkles, ArrowRight, Mail, ArrowUpRight } from "lucide-react";
import "./CoursesCTA.css";

export default function CoursesCTA({ onExploreTracks }) {
  return (
    <section className="courses-cta-section" id="courses-contact">
      <div className="container">
        <div className="courses-cta-card">
          <div className="cta-ambient-glow" aria-hidden="true" />
          
          <div className="courses-cta-content">
            <span className="courses-cta-badge courses-eyebrow-brand">
              <Sparkles size={13} className="text-brand-green" />
              CAMPUS &amp; STUDENT ADMISSIONS
            </span>

            <h2 className="courses-cta-title">
              READY TO ACCELERATE YOUR <span className="brand-green-text">TECHNICAL CAREER</span> WITH{" "}
              <span className="brand-navy-text">INGAGE</span>?
            </h2>

            <p className="courses-cta-description">
              Whether you are an ambitious student aiming for global certification or an institution looking to integrate certified tracks into your curriculum, InGage provides the complete enablement roadmap.
            </p>

            <div className="courses-cta-actions">
              <a
                href="mailto:courses@ingage.in?subject=Course%20Advising%20Inquiry%20-%20InGage%20EduTech"
                className="btn btn-primary courses-cta-btn-main"
              >
                <span>TALK TO AN ACADEMIC EXPERT</span>
                <Mail size={16} />
              </a>

              <button
                type="button"
                className="btn courses-cta-btn-glass"
                onClick={onExploreTracks}
              >
                <span>EXPLORE ALL 6 TRACKS</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
