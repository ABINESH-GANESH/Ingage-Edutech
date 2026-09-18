import React from "react";
import { Network, ArrowRight } from "lucide-react";
import { ecosystemFlowData } from "../../data/aboutData";
import "./AboutEcosystem.css";

export default function AboutEcosystem() {
  const { badge, heading, subtitle, steps } = ecosystemFlowData;

  return (
    <section className="section section-page about-ecosystem-root" id="about-ecosystem">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <Network size={13} className="text-green" />
            {badge}
          </span>
          <h2 className="section-title">{heading}</h2>
          <p className="section-subtitle max-w-700">{subtitle}</p>
        </div>

        {/* Linear Connected Flow Network */}
        <div className="ecosystem-flow-wrapper">
          <div className="ecosystem-flow-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="ecosystem-step-node">
                <div className="node-number-pill">0{idx + 1}</div>
                <h4 className="node-title">{step.title}</h4>
                <p className="node-desc">{step.role}</p>
                {idx < steps.length - 1 && (
                  <div className="node-connector-arrow" aria-hidden="true">
                    <ArrowRight size={16} className="arrow-icon" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
