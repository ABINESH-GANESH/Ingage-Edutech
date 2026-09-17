import React from "react";
import { Sparkles, ArrowDown, Compass, ShieldCheck } from "lucide-react";
import { applyHeroData } from "../../data/applyData";
import "./ApplyHero.css";

export default function ApplyHero({ onExploreClick }) {
  const { badge, headline, supportingText, image, ctaText } = applyHeroData;

  return (
    <section className="apply-hero-root" id="apply-hero">
      <div className="apply-hero-grid-bg" aria-hidden="true" />
      <div className="apply-hero-light-beam" aria-hidden="true" />

      <div className="container apply-hero-container">
        <div className="apply-hero-grid">
          {/* Left Column: Heading, Subtitle & Primary Action */}
          <div className="apply-hero-content">
            <div className="apply-hero-badge-wrap">
              <span className="section-eyebrow">
                <span className="eyebrow-dot" />
                <Sparkles size={13} className="text-green" />
                {badge}
              </span>
            </div>

            <h1 className="apply-hero-title">
              {headline}
            </h1>

            <p className="apply-hero-lead-text">
              {supportingText}
            </p>

            <div className="apply-hero-actions">
              <button
                type="button"
                className="btn btn-primary apply-hero-btn"
                onClick={onExploreClick}
                aria-label="Explore Opportunities"
              >
                <span>{ctaText}</span>
                <ArrowDown size={16} className="btn-arrow-icon" />
              </button>
            </div>
          </div>

          {/* Right Column: High-End Corporate Visual */}
          <div className="apply-hero-visual-side">
            <div className="apply-hero-img-frame">
              <img
                src={image}
                alt="InGage Technology Innovation and Career Ecosystem"
                className="apply-hero-img"
                loading="eager"
              />
              <div className="apply-hero-img-overlay" />
              <div className="apply-hero-floating-pill">
                <ShieldCheck size={14} className="text-green" />
                <span>INNOVATION · LEARNING · CAREER ACCELERATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
