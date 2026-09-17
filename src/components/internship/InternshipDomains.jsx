import React from "react";
import { ArrowUpRight } from "lucide-react";
import { internshipDomains } from "../../data/internshipData";
import "./InternshipDomains.css";

export default function InternshipDomains({ onSelectDomain }) {
  return (
    <section className="section section-page intern-domains-section" id="domains">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" /> SPECIALIZATION TRACKS
          </span>
          <h2 className="section-title">EXPLORE YOUR DOMAIN</h2>
          <p className="section-subtitle">
            Choose from eleven specialized emerging technology tracks tailored to build rigorous engineering depth and portfolio proof.
          </p>
        </div>

        {/* Asymmetric Editorial Domain Grid */}
        <div className="intern-domains-grid">
          {internshipDomains.map((domain, idx) => {
            const isFeatured = idx === 0 || idx === 6;
            return (
              <article
                key={domain.id}
                className={`domain-card ${isFeatured ? "domain-card-featured" : ""}`}
                onClick={() => onSelectDomain && onSelectDomain(domain)}
              >
                <div className="domain-card-img-wrap">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="domain-card-img"
                    loading="lazy"
                  />
                  <div className="domain-card-badge">
                    <span>{domain.badge}</span>
                  </div>
                </div>

                <div className="domain-card-body">
                  <h3 className="domain-card-title">{domain.title}</h3>
                  <p className="domain-card-desc">{domain.description}</p>
                  <div className="domain-card-footer">
                    <span className="domain-link-btn">
                      Explore Track <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
