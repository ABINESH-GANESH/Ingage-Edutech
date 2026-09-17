import React, { useState } from "react";
import { Cpu } from "lucide-react";
import { technologiesList } from "../../data/careersData";
import "./TechnologySection.css";

export default function TechnologySection() {
  const [activeTech, setActiveTech] = useState(technologiesList[0]);

  return (
    <section className="section section-white tech-careers-section" id="technology-stack">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow section-eyebrow-green">
            <span className="eyebrow-dot" /> CORE TECH STACK
          </span>
          <h2 className="section-title">BUILD WITH THE FUTURE</h2>
          <p className="section-subtitle">
            Immerse yourself in full-stack spatial computing, edge telemetry, deep learning pipelines, and real-time physical-digital architectures.
          </p>
        </div>

        {/* Interactive Typography & Technology Strip */}
        <div className="tech-interactive-wrapper">
          <div className="tech-tags-cloud" role="tablist" aria-label="Core Technologies">
            {technologiesList.map((tech) => {
              const isSelected = activeTech.name === tech.name;
              return (
                <button
                  key={tech.name}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`tech-chip-btn ${isSelected ? "tech-chip-active" : ""}`}
                  onMouseEnter={() => setActiveTech(tech)}
                  onClick={() => setActiveTech(tech)}
                  onFocus={() => setActiveTech(tech)}
                >
                  <span className="tech-chip-name">{tech.name}</span>
                  {isSelected && <span className="tech-chip-dot" />}
                </button>
              );
            })}
          </div>

          {/* Active Highlight Display Panel */}
          <div className="tech-active-preview-card">
            <div className="tech-preview-header">
              <div className="tech-preview-title-wrap">
                <span className="tech-preview-badge">TECH SPECIFICATION</span>
                <h3 className="tech-preview-title">{activeTech.label} ({activeTech.name})</h3>
              </div>
              <span className="tech-preview-icon">
                <Cpu size={28} className="text-green" />
              </span>
            </div>

            <p className="tech-preview-desc">
              {activeTech.desc}
            </p>

            <div className="tech-preview-tags">
              <span className="tech-pill">Production Ready</span>
              <span className="tech-pill">Lab Validated</span>
              <span className="tech-pill">Industry Tier 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
