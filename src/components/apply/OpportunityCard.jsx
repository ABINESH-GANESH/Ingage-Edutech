import React from "react";
import { MapPin, Briefcase, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import "./OpportunityCard.css";

export default function OpportunityCard({ opportunity, onApply }) {
  const {
    id,
    title,
    department,
    category,
    location,
    experienceLevel,
    applicationType,
    skills,
    description,
    highlights,
  } = opportunity;

  return (
    <article className="opportunity-card">
      <div className="opp-card-header">
        <div className="opp-meta-left">
          <span className="opp-dept-badge">{department}</span>
          <span className="opp-category-badge">{category}</span>
        </div>
        <span className="opp-type-tag">
          <Clock size={12} className="type-clock-icon" />
          <span>{applicationType}</span>
        </span>
      </div>

      <h3 className="opp-card-title">{title}</h3>

      {/* Secondary Meta Row */}
      <div className="opp-secondary-meta">
        <span className="opp-meta-item">
          <MapPin size={13} className="meta-icon text-navy" />
          <span>{location}</span>
        </span>
        <span className="opp-meta-sep">•</span>
        <span className="opp-meta-item">
          <Briefcase size={13} className="meta-icon text-green" />
          <span>{experienceLevel}</span>
        </span>
      </div>

      <p className="opp-card-desc">{description}</p>

      {/* Skills Pills */}
      <div className="opp-skills-wrap">
        {skills.map((skill, idx) => (
          <span key={idx} className="opp-skill-pill">
            {skill}
          </span>
        ))}
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="opp-highlights-list">
          {highlights.map((h, idx) => (
            <div key={idx} className="opp-highlight-item">
              <CheckCircle2 size={13} className="text-green hl-check" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}

      {/* Card Footer */}
      <div className="opp-card-footer">
        <button
          type="button"
          className="btn-apply-card-action"
          onClick={() => onApply(opportunity)}
          aria-label={`Apply for ${title}`}
        >
          <span>Apply Now</span>
          <ArrowRight size={14} className="apply-btn-arrow" />
        </button>
      </div>
    </article>
  );
}
