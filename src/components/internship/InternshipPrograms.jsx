import React from "react";
import { ArrowRight, Code, Cpu, Sparkles } from "lucide-react";
import { internshipPrograms } from "../../data/internshipData";
import "./InternshipPrograms.css";

export default function InternshipPrograms({ onApplyForTrack }) {
  return (
    <section className="section section-white intern-programs-section" id="programs">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" /> PATHWAYS CATALOG
          </span>
          <h2 className="section-title">EXPLORE INTERNSHIP PATHWAYS</h2>
          <p className="section-subtitle">
            Structured hands-on tracks engineered to give student cohorts direct exposure to active technology stacks, industry tools, and mentorship.
          </p>
        </div>

        {/* Programs Listing Grid */}
        <div className="intern-programs-grid">
          {internshipPrograms.map((prog) => (
            <div key={prog.id} className="intern-prog-card">
              <div className="prog-card-top">
                <div className="prog-tags-row">
                  {prog.tags.map((tag, idx) => (
                    <span key={idx} className="prog-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="prog-card-title">{prog.name}</h3>

              <div className="prog-tech-stack-row">
                <span className="tech-stack-label">TECH STACK:</span>
                <span className="tech-stack-val">{prog.technology}</span>
              </div>

              <p className="prog-card-desc">{prog.description}</p>

              <div className="prog-card-bottom">
                <button
                  type="button"
                  className="btn btn-navy prog-apply-btn"
                  onClick={() => onApplyForTrack(prog)}
                >
                  Apply for Pathway <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
