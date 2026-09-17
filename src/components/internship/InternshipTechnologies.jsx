import React, { useState } from "react";
import { Cpu, Terminal, ArrowRight, Layers, Sparkles } from "lucide-react";
import { internshipTechnologies } from "../../data/internshipData";
import "./InternshipTechnologies.css";

export default function InternshipTechnologies() {
  const [selectedTech, setSelectedTech] = useState(internshipTechnologies[0]);

  return (
    <section className="intern-tech-section" id="technology">
      {/* Background Decorative Tech Lines */}
      <div className="intern-tech-grid-bg" aria-hidden="true" />
      <div className="intern-tech-glow" aria-hidden="true" />

      <div className="container intern-tech-container">
        <div className="intern-tech-header">
          <span className="intern-tech-badge">
            <Sparkles size={12} className="badge-sparkle" /> TECHNICAL DOMAINS
          </span>
          <h2 className="intern-tech-title">
            WHAT WILL YOU<br />WORK WITH?
          </h2>
          <p className="intern-tech-sub">
            Hover over or select any domain to explore the underlying software SDKs, hardware testbenches, and hands-on capstone project applications.
          </p>
        </div>

        {/* Oversized Interactive Typography Horizontal Bar */}
        <div className="intern-tech-strip-wrapper">
          <div className="intern-tech-strip" role="tablist" aria-label="Available Technologies">
            {internshipTechnologies.map((tech) => {
              const isActive = selectedTech.id === tech.id;
              return (
                <button
                  key={tech.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`tech-oversized-btn ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setSelectedTech(tech)}
                  onClick={() => setSelectedTech(tech)}
                  onFocus={() => setSelectedTech(tech)}
                >
                  <span className="tech-btn-name">{tech.name}</span>
                  {isActive && <span className="tech-btn-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Interactive Tech Inspector Panel */}
        <div className="intern-tech-inspector-card">
          <div className="inspector-left">
            <div className="inspector-badge-row">
              <span className="inspector-badge">INSPECTION NODE</span>
              <span className="inspector-status">LIVE MODULE</span>
            </div>
            <h3 className="inspector-title">{selectedTech.fullTitle}</h3>
            <p className="inspector-desc">{selectedTech.shortDesc}</p>
          </div>

          <div className="inspector-right">
            <div className="inspector-app-box">
              <div className="inspector-app-label">
                <Terminal size={15} className="app-icon" />
                <span>INTERNSHIP PROJECT APPLICATION</span>
              </div>
              <p className="inspector-app-text">{selectedTech.application}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
