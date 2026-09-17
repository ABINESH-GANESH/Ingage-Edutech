import React from "react";
import { approvedData } from "../data/approvedData";
import { GraduationCap, Building2, Sparkles, CheckCircle2, ArrowRight, Award, Trophy, TrendingUp } from "lucide-react";
import "./InstitutionBenefits.css";

export default function InstitutionBenefits({ onOpenCoESetup }) {
  const { institutionalValue } = approvedData;
  const { eyebrow, heading, subtitle, categories, partnershipBanner } = institutionalValue;

  const getCategoryIcon = (icon) => {
    switch (icon) {
      case "GraduationCap":
        return <GraduationCap size={22} className="cat-icon-svg" />;
      case "Building2":
        return <Building2 size={22} className="cat-icon-svg" />;
      case "Sparkles":
        return <Sparkles size={22} className="cat-icon-svg" />;
      default:
        return <Award size={22} className="cat-icon-svg" />;
    }
  };

  return (
    <section className="section section-page institutional-editorial-root" id="institutions">
      <div className="container">
        {/* Header */}
        <div className="section-header center-text">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="section-title">{heading}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* 3 Structured Editorial Columns */}
        <div className="institutions-editorial-grid">
          {categories.map((cat, idx) => (
            <div key={cat.id} className="institution-benefit-column">
              <div className="benefit-col-header">
                <div className="benefit-icon-box">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span className="benefit-stat-tag">{cat.statsBadge}</span>
              </div>

              <h3 className="benefit-col-title">{cat.title}</h3>
              <p className="benefit-col-summary">{cat.summary}</p>

              <div className="benefit-divider-line" />

              <ul className="benefit-points-list">
                {cat.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle2 size={16} className="benefit-check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlighted Partnership Callout Box */}
        <div className="institution-partnership-highlight-box">
          <div className="partner-highlight-badge">
            <span className="partner-pulse-dot" />
            <span>{partnershipBanner.tag}</span>
          </div>
          <div className="partner-highlight-content">
            <h3 className="partner-highlight-heading">{partnershipBanner.headline}</h3>
            <p className="partner-highlight-sub">{partnershipBanner.subline}</p>
          </div>
          <button
            type="button"
            className="btn btn-hero-cta"
            onClick={() => onOpenCoESetup && onOpenCoESetup("ai-ml")}
          >
            <span>Partner With InGage</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
