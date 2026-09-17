import React, { useState } from "react";
import { internshipJourneyTimeline } from "../../data/internshipData";
import { CheckCircle2, ChevronRight, Compass } from "lucide-react";
import "./InternshipJourney.css";

export default function InternshipJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section section-white intern-journey-section" id="journey">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow section-eyebrow-green">
            <span className="eyebrow-dot" /> STEP-BY-STEP ROADMAP
          </span>
          <h2 className="section-title">YOUR INTERNSHIP JOURNEY</h2>
          <p className="section-subtitle">
            A structured six-stage progression guiding your transformation from classroom foundational concepts to verifiable industry solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="journey-timeline-wrapper">
          <div className="journey-timeline-track" />

          <div className="journey-timeline-steps">
            {internshipJourneyTimeline.map((item, idx) => {
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={item.step}
                  className={`journey-step-item ${isPassed ? "step-passed" : ""} ${isCurrent ? "step-current" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="journey-step-indicator">
                    <span className="journey-step-node">
                      {item.step}
                    </span>
                  </div>

                  <div className="journey-step-card">
                    <div className="journey-card-header">
                      <span className="journey-phase-pill">{item.phase}</span>
                      <span className="journey-step-num-sub">STAGE {item.step} OF 06</span>
                    </div>
                    <h3 className="journey-step-title">{item.title}</h3>
                    <p className="journey-step-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
