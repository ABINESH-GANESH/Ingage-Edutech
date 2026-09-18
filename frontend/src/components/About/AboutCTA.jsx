import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { aboutCTAData } from "../../data/aboutData";
import "./AboutCTA.css";

export default function AboutCTA({ onNavigateCourses, onNavigateCareers }) {
  const { heading, description, btnCourses, btnCareers } = aboutCTAData;

  return (
    <section className="about-cta-root" id="about-cta">
      <div className="about-cta-ambient-glow" aria-hidden="true" />
      <div className="about-cta-ambient-grid" aria-hidden="true" />

      <div className="container about-cta-container">
        <div className="about-cta-badge-wrap">
          <span className="cta-eyebrow">
            <Sparkles size={13} className="text-green" />
            JOIN THE ECOSYSTEM
          </span>
        </div>

        <h2 className="about-cta-heading">{heading}</h2>
        <p className="about-cta-desc">{description}</p>

        <div className="about-cta-buttons">
          <button
            type="button"
            className="btn btn-primary about-cta-btn-primary"
            onClick={onNavigateCourses}
            aria-label="Explore InGage Courses"
          >
            <span>{btnCourses}</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className="btn btn-glass-secondary about-cta-btn-glass"
            onClick={onNavigateCareers}
            aria-label="Explore InGage Careers"
          >
            <span>{btnCareers}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
