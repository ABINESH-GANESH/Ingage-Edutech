import React from "react";
import { approvedData } from "../data/approvedData";
import { Cpu, Award, Rocket, Users, ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import "./Offerings.css";

export default function Offerings({ onOpenCoESetup, onOpenCourses }) {
  const { coreOfferings } = approvedData;
  const featuredOffering = coreOfferings.find((o) => o.isFeatured) || coreOfferings[0];
  const supportingOfferings = coreOfferings.filter((o) => !o.isFeatured);

  const getIcon = (id) => {
    switch (id) {
      case "coe-turnkey":
        return <Cpu size={24} className="offering-icon-svg" />;
      case "global-certs":
        return <Award size={24} className="offering-icon-svg" />;
      case "internships-hackathons":
        return <Rocket size={24} className="offering-icon-svg" />;
      case "faculty-development":
        return <Users size={24} className="offering-icon-svg" />;
      default:
        return <Cpu size={24} className="offering-icon-svg" />;
    }
  };

  const handleAction = (action) => {
    if (action === "domains" || action === "coe") {
      if (onOpenCoESetup) onOpenCoESetup("ai-ml");
    } else if (action === "courses") {
      const el = document.getElementById("courses");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (action === "internships") {
      const el = document.getElementById("institutions");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      if (onOpenCoESetup) onOpenCoESetup("ai-ml");
    }
  };

  return (
    <section className="section section-white offerings-editorial-root" id="offerings">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>CORE INSTITUTIONAL PILLARS</span>
          </div>
          <h2 className="section-title">
            Enterprise Solutions for Modern Technical Campuses
          </h2>
          <p className="section-subtitle">
            A comprehensive, four-pillar framework designed to bridge the chasm between traditional academic syllabi and fast-evolving Industry 4.0 job markets.
          </p>
        </div>

        {/* Structured Editorial Grid */}
        <div className="offerings-editorial-grid">
          {/* Left Column: Large Featured Offering (Turnkey CoE Labs) */}
          <div className="offering-large-featured-card">
            <div className="featured-card-header">
              <div className="offering-icon-bubble">
                {getIcon(featuredOffering.id)}
              </div>
              <span className="offering-tag-pill">{featuredOffering.tag}</span>
            </div>

            <div className="featured-card-content">
              <h3 className="featured-card-title">{featuredOffering.title}</h3>
              <p className="featured-card-subtitle">{featuredOffering.subtitle}</p>
              <p className="featured-card-desc">{featuredOffering.description}</p>

              {/* Highlights List */}
              <div className="featured-highlights-block">
                <span className="highlights-label">CAMPUS DELIVERABLES INCLUDED:</span>
                <ul className="featured-highlights-list">
                  {featuredOffering.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="highlight-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="featured-card-footer">
              <div className="featured-stat-badge">
                <span className="stat-num">{featuredOffering.stats.number}</span>
                <span className="stat-lbl">{featuredOffering.stats.label}</span>
              </div>
              <button
                type="button"
                className="btn btn-hero-cta"
                onClick={() => handleAction(featuredOffering.ctaAction)}
              >
                <span>{featuredOffering.ctaText}</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Structured Supporting Offerings */}
          <div className="offerings-supporting-column">
            {supportingOfferings.map((offering) => (
              <div
                key={offering.id}
                className="offering-supporting-card"
                onClick={() => handleAction(offering.ctaAction)}
              >
                <div className="supporting-card-top">
                  <div className="supporting-icon-wrap">
                    {getIcon(offering.id)}
                  </div>
                  <div className="supporting-title-wrap">
                    <span className="supporting-tag">{offering.tag}</span>
                    <h4 className="supporting-title">{offering.title}</h4>
                  </div>
                </div>

                <p className="supporting-desc">{offering.description}</p>

                <div className="supporting-card-bottom">
                  <span className="supporting-stat-pill">
                    {offering.stats.number} {offering.stats.label}
                  </span>
                  <span className="supporting-action-link">
                    <span>{offering.ctaText}</span>
                    <ChevronRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
