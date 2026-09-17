import React, { useEffect } from "react";
import { X, CheckCircle2, Cpu, Wrench, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import "./Domains.css";

export default function DomainDetailModal({ domain, isOpen, onClose, onOpenCoESetup }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !domain) return null;

  const handleRequestLab = () => {
    onClose();
    if (onOpenCoESetup) {
      onOpenCoESetup(domain.id);
    }
  };

  return (
    <div className="domain-modal-overlay" onClick={onClose}>
      <div
        className="domain-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="domain-modal-header">
          <div>
            <div className="domain-modal-meta">
              <span className="domain-modal-badge">{domain.badge}</span>
              <span className="domain-modal-cat">{domain.category}</span>
            </div>
            <h2 className="domain-modal-title">{domain.title}</h2>
          </div>
          <button
            className="domain-modal-close"
            onClick={onClose}
            aria-label="Close domain details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="domain-modal-content">
          {/* Overview */}
          <div className="domain-modal-section">
            <h3 className="domain-section-heading">Overview & Industry Demand</h3>
            <p className="domain-modal-text">{domain.overview}</p>
          </div>

          {/* 2-Column Specs Grid */}
          <div className="domain-specs-grid">
            {/* Key Technologies */}
            <div className="domain-spec-card">
              <div className="domain-spec-title-row">
                <Cpu size={18} className="domain-spec-icon" />
                <h4>Key Technologies & Toolchains</h4>
              </div>
              <div className="domain-tech-pills">
                {domain.technologies.map((tech) => (
                  <span key={tech} className="domain-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Possible Laboratory Hardware Setup */}
            <div className="domain-spec-card">
              <div className="domain-spec-title-row">
                <Wrench size={18} className="domain-spec-icon" />
                <h4>Turnkey Laboratory Hardware Setup</h4>
              </div>
              <ul className="domain-spec-list">
                {domain.hardwareSetup.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className="spec-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Applications & Capstones */}
            <div className="domain-spec-card">
              <div className="domain-spec-title-row">
                <GraduationCap size={18} className="domain-spec-icon" />
                <h4>Student Capstone Projects</h4>
              </div>
              <ul className="domain-spec-list">
                {domain.studentApplications.map((app, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className="spec-check-icon" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placement & Career Roles */}
            <div className="domain-spec-card">
              <div className="domain-spec-title-row">
                <Briefcase size={18} className="domain-spec-icon" />
                <h4>Industry Placement Pathways</h4>
              </div>
              <div className="domain-career-pills">
                {domain.industryPlacements.map((role) => (
                  <span key={role} className="domain-career-tag">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="domain-modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close Details
          </button>
          <button
            type="button"
            className="btn btn-hero-cta"
            onClick={handleRequestLab}
          >
            <span>Request {domain.badge} CoE Lab Setup</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
