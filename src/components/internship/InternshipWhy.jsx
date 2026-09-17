import React from "react";
import { whyInternIngage } from "../../data/internshipData";
import "./InternshipWhy.css";

export default function InternshipWhy() {
  const { intro, points } = whyInternIngage;

  return (
    <section className="section section-page intern-why-section" id="why-ingage">
      <div className="container">
        <div className="intern-why-layout">
          {/* Left Column: Editorial Statement */}
          <div className="intern-why-sidebar">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" /> PHILOSOPHY
            </span>
            <h2 className="intern-why-title">WHY INGAGE?</h2>
            
            <div className="intern-why-quote-card">
              <p className="intern-why-quote-text">
                "{intro}"
              </p>
              <span className="intern-why-quote-tag">— InGage Engineering Philosophy</span>
            </div>
          </div>

          {/* Right Column: Numbered Value Points (01 - 05) */}
          <div className="intern-why-points-stack">
            {points.map((pt) => (
              <div key={pt.number} className="intern-why-point-row">
                <div className="point-num-box">
                  <span className="point-num-text">{pt.number}</span>
                </div>
                <div className="point-content-box">
                  <h3 className="point-title-text">{pt.title}</h3>
                  <p className="point-desc-text">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
