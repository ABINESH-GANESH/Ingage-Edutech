import React from "react";
import { ArrowRight, MapPin, Briefcase, Clock, AlertCircle, RefreshCw } from "lucide-react";
import "./Opportunities.css";

export default function Opportunities({
  opportunities,
  onSelectRole,
  onResetFilters,
  totalAvailableCount,
}) {
  return (
    <section className="section section-page opportunities-section" id="opportunities">
      <div className="container">
        <div className="section-header">
          <div className="opportunities-header-top">
            <div>
              <span className="section-eyebrow">
                <span className="eyebrow-dot" /> OPEN POSITIONS
              </span>
              <h2 className="section-title">CURRENT OPPORTUNITIES</h2>
            </div>
            <div className="opportunities-count-badge">
              <span className="count-num">{opportunities.length}</span>
              <span className="count-label">Roles Available</span>
            </div>
          </div>
          <p className="section-subtitle">
            Explore active openings across our immersive technology, AI, hardware engineering, and academic enablement teams.
          </p>
        </div>

        {/* Opportunities Horizontal Grid Listing */}
        {opportunities.length > 0 ? (
          <div className="opportunities-grid" role="list">
            {opportunities.map((job) => (
              <article
                key={job.id}
                className="opportunity-grid-card"
                role="listitem"
                onClick={() => onSelectRole(job)}
              >
                <div className="opp-card-header">
                  <div className="opp-badge-strip">
                    <span className="opp-dept-pill">{job.department}</span>
                    <span className="opp-level-pill">{job.level}</span>
                  </div>
                  <h3 className="opp-card-title">{job.title}</h3>
                </div>

                <div className="opp-meta-list">
                  <div className="opp-meta-item">
                    <MapPin size={14} className="opp-meta-icon" />
                    <span>{job.location}</span>
                  </div>
                  <div className="opp-meta-item">
                    <Briefcase size={14} className="opp-meta-icon" />
                    <span>{job.type}</span>
                  </div>
                  <div className="opp-meta-item">
                    <Clock size={14} className="opp-meta-icon" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                {job.skills && job.skills.length > 0 && (
                  <div className="opp-skills-strip">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="opp-skill-tag">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="opp-skill-more">+{job.skills.length - 3}</span>
                    )}
                  </div>
                )}

                <div className="opp-card-footer">
                  <button
                    type="button"
                    className="btn-view-role-grid"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRole(job);
                    }}
                    aria-label={`View role details for ${job.title}`}
                  >
                    <span>VIEW ROLE</span>
                    <ArrowRight size={15} className="view-role-arrow" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="opportunities-empty-state">
            <div className="empty-icon-wrap">
              <AlertCircle size={36} className="text-navy" />
            </div>
            <h3 className="empty-title">No opportunities found</h3>
            <p className="empty-desc">
              No opportunities match your current filter criteria. Try searching with another keyword or resetting your location and department filters.
            </p>
            <button
              type="button"
              className="btn btn-navy empty-reset-btn"
              onClick={onResetFilters}
            >
              <RefreshCw size={15} /> Reset All Filters ({totalAvailableCount} Roles)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
