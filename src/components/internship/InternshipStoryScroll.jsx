import React, { useState } from "react";
import { Compass, Cpu, Sparkles, Trophy } from "lucide-react";
import { internshipStorySteps } from "../../data/internshipData";
import "./InternshipStoryScroll.css";

export default function InternshipStoryScroll() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const phaseIcons = [
    <Compass key="compass" size={20} />,
    <Cpu key="cpu" size={20} />,
    <Sparkles key="sparkles" size={20} />,
    <Trophy key="trophy" size={20} />,
  ];

  const currentStep = internshipStorySteps[activeStepIndex];

  return (
    <section className="story-scroll-section" id="story-stages">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow section-eyebrow-green">
            <span className="eyebrow-dot" /> THE 4-PHASE IMMERSION
          </span>
          <h2 className="section-title text-white">ENTER THE WORLD OF INGAGE</h2>
          <p className="section-subtitle text-slate">
            Experience an end-to-end technical learning arc engineered to bridge academic fundamentals with scalable industrial deployment.
          </p>
        </div>

        {/* Story Stage Container */}
        <div className="story-stage-box">
          {/* Left/Background: Dynamic Layered Image Showcase */}
          <div className="story-stage-visual">
            {internshipStorySteps.map((step, idx) => (
              <div
                key={step.number}
                className={`story-bg-layer ${idx === activeStepIndex ? "active" : ""}`}
              >
                <img
                  src={step.bgImage}
                  alt={step.title}
                  className="story-bg-img"
                  decoding="async"
                />
                <div className="story-bg-overlay" />
                <div className="story-stage-floating-tag">
                  <span className="tag-dot" />
                  <span>PHASE {step.number}: {step.tagline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Phase Navigation & Content Panels */}
          <div className="story-stage-controls">
            <div className="story-stage-tabs" role="tablist" aria-label="Internship Phases">
              {internshipStorySteps.map((step, idx) => {
                const isSelected = idx === activeStepIndex;
                return (
                  <button
                    key={step.number}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`story-tab-card ${isSelected ? "tab-active" : ""}`}
                    onClick={() => setActiveStepIndex(idx)}
                    onMouseEnter={() => setActiveStepIndex(idx)}
                  >
                    <div className="story-tab-header">
                      <div className="story-tab-icon-wrap">
                        {phaseIcons[idx]}
                      </div>
                      <span className="story-tab-num">PHASE {step.number}</span>
                      <span className="story-tab-phase">{step.phase}</span>
                    </div>

                    <h3 className="story-tab-title">{step.title}</h3>
                    <p className="story-tab-desc">{step.description}</p>

                    {isSelected && (
                      <div className="story-tab-progress-bar">
                        <div className="progress-fill" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
