import { useState } from "react";
import { technologies } from "../../data/technologyData";
import "./Technology.css";

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

  return (
    <section className="tech-medium-section" id="technology">
      <div className="editorial-container">
        <div className="tech-medium-header">
          <span className="tech-label tech-label-accent">
            02 // CORE CAPABILITIES
          </span>
          <h2 className="tech-medium-h2">
            THE TECHNOLOGY<br />
            <span className="navy-text">IS THE MEDIUM.</span><br />
            <span className="green-text">THE EXPERIENCE</span><br />
            IS THE PRODUCT.
          </h2>
        </div>

        <div className="tech-interactive-system">
          {/* Left: Interactive List */}
          <div className="tech-selector-list">
            {technologies.map((tech) => (
              <button
                key={tech.code}
                className={`tech-selector-row ${selectedTech.code === tech.code ? "active" : ""}`}
                onMouseEnter={() => setSelectedTech(tech)}
                onClick={() => setSelectedTech(tech)}
              >
                <div className="tech-row-left">
                  <span className="tech-row-code">[{tech.code}]</span>
                  <span className="tech-row-name">{tech.name}</span>
                </div>
                <span className="tech-row-arrow">EXPLORE →</span>
              </button>
            ))}
          </div>

          {/* Right: Technical Detail Panel */}
          <div className="tech-detail-panel">
            <div className="tech-detail-meta-top">
              <span>ACTIVE_NODE // [{selectedTech.short}]</span>
              <span>INDEX: {selectedTech.code}/08</span>
            </div>

            <h3 className="tech-detail-headline">{selectedTech.headline}</h3>

            <p className="tech-detail-explanation">{selectedTech.explanation}</p>

            <div className="tech-detail-app-box">
              <strong>Enterprise Application</strong>
              <p>{selectedTech.application}</p>
            </div>

            <div className="tech-detail-telemetry">
              {selectedTech.telemetry}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
