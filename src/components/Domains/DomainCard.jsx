import React from "react";
import { ArrowRight, Cpu, Sparkles, Layers, ShieldCheck } from "lucide-react";
import "./Domains.css";

export default function DomainCard({ domain, onSelectDomain, onOpenCoESetup }) {
  const { id, title, category, badge, shortDesc, technologies, hardwareSetup, featured, gridSpan } = domain;

  return (
    <div
      className={`domain-card-item ${featured ? "featured-domain-card" : ""} ${gridSpan || "span-1"}`}
      onClick={() => onSelectDomain(domain)}
    >
      <div className="domain-card-top">
        <div className="domain-badge-wrap">
          <span className={`domain-pill-badge ${featured ? "pill-featured" : ""}`}>
            {badge}
          </span>
          <span className="domain-category-text">{category}</span>
        </div>
      </div>

      <div className="domain-card-body">
        <h3 className="domain-card-title">{title}</h3>
        <p className="domain-card-desc">{shortDesc}</p>

        {/* Tech tags preview */}
        <div className="domain-card-tags">
          {technologies.slice(0, featured ? 4 : 3).map((tech) => (
            <span key={tech} className="domain-card-tag">
              {tech}
            </span>
          ))}
          {technologies.length > (featured ? 4 : 3) && (
            <span className="domain-card-tag tag-more">
              +{technologies.length - (featured ? 4 : 3)} more
            </span>
          )}
        </div>
      </div>

      <div className="domain-card-bottom">
        <div className="domain-hardware-indicator">
          <span className="domain-hw-dot" />
          <span className="domain-hw-text">
            {hardwareSetup.length} Turnkey Lab Modules
          </span>
        </div>

        <button
          type="button"
          className="domain-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelectDomain(domain);
          }}
          aria-label={`View ${title} lab specs`}
        >
          <span>View Lab Specs</span>
          <ArrowRight size={15} className="domain-arrow-icon" />
        </button>
      </div>
    </div>
  );
}
