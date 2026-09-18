import React from "react";
import { whoIsThisFor } from "../../data/internshipData";
import { CheckCircle2 } from "lucide-react";
import "./InternshipEligibility.css";

export default function InternshipEligibility() {
  return (
    <section className="section section-white intern-eligibility-section" id="audience">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" /> APPLICANT PROFILE
          </span>
          <h2 className="section-title">WHO IS THIS FOR?</h2>
          <p className="section-subtitle">
            Our internship pathways are designed for motivated creators, aspiring engineers, and researchers eager to transition into active production codebases.
          </p>
        </div>

        {/* 6 Target Audience Profiles */}
        <div className="intern-audience-grid">
          {whoIsThisFor.map((item, idx) => (
            <div key={idx} className="intern-audience-card">
              <div className="audience-card-top">
                <span className="audience-emoji">{item.icon}</span>
                <CheckCircle2 size={16} className="audience-check text-green" />
              </div>
              <h3 className="audience-title">{item.title}</h3>
              <p className="audience-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
