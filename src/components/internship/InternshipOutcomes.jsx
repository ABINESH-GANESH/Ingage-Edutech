import React from "react";
import { whatYouTakeWithYou } from "../../data/internshipData";
import { Check } from "lucide-react";
import "./InternshipOutcomes.css";

export default function InternshipOutcomes() {
  return (
    <section className="section section-page intern-outcomes-section" id="benefits">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow section-eyebrow-green">
            <span className="eyebrow-dot" /> CORE DELIVERABLES
          </span>
          <h2 className="section-title">WHAT YOU TAKE WITH YOU</h2>
          <p className="section-subtitle">
            Beyond academic credits, build enduring technical capability, collaborative maturity, and verified engineering accomplishments.
          </p>
        </div>

        {/* Large Typography Outcomes Grid */}
        <div className="intern-outcomes-grid">
          {whatYouTakeWithYou.map((outcome, idx) => (
            <div key={idx} className="outcome-item-card">
              <div className="outcome-card-inner">
                <span className="outcome-idx">0{idx + 1}</span>
                <div className="outcome-title-wrap">
                  <h3 className="outcome-title">{outcome}</h3>
                </div>
                <div className="outcome-icon-check">
                  <Check size={18} className="text-green" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
