import React, { useState } from "react";
import { Sparkles, ArrowRight, Search, BookOpen, Layers, TrendingUp } from "lucide-react";
import { approachSteps } from "../../data/aboutData";
import "./AboutApproach.css";

const STEP_ICONS = [Search, BookOpen, Layers, TrendingUp];

export default function AboutApproach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section section-page about-approach-root" id="about-approach">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-green" />
            OUR METHODOLOGY
          </span>
          <h2 className="section-title">HOW WE CREATE IMPACT</h2>
          <p className="section-subtitle">
            A structured four-phase progression that translates foundational ambition into verified engineering capability.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="approach-steps-grid">
          {approachSteps.map((step, idx) => {
            const IconComp = STEP_ICONS[idx % STEP_ICONS.length];
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                className={`approach-step-card ${isSelected ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-top-row">
                  <span className="step-num">{step.number}</span>
                  <span className="step-phase-badge">{step.phase}</span>
                </div>

                <div className="step-icon-wrap">
                  <IconComp size={22} className="step-icon text-navy" />
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>

                <div className="step-active-indicator" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
