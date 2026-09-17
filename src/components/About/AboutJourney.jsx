import React from "react";
import { Milestone, Flag } from "lucide-react";
import { companyMilestones } from "../../data/aboutData";
import "./AboutJourney.css";

export default function AboutJourney() {
  return (
    <section className="section section-page about-journey-root" id="about-journey">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <Milestone size={13} className="text-green" />
            EVOLUTION
          </span>
          <h2 className="section-title">OUR JOURNEY</h2>
          <p className="section-subtitle max-w-700">
            Key milestones in our ongoing mission to democratize advanced technology education.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="about-timeline-wrapper">
          <div className="about-timeline-line" aria-hidden="true" />

          <div className="about-timeline-items">
            {companyMilestones.map((m, idx) => (
              <div key={idx} className={`timeline-row ${idx % 2 === 0 ? "left-row" : "right-row"}`}>
                <div className="timeline-node-marker">
                  <div className="node-marker-circle">
                    <Flag size={14} className="text-green" />
                  </div>
                </div>

                <div className="timeline-content-card">
                  <span className="timeline-year-tag">{m.year}</span>
                  <h3 className="timeline-title">{m.title}</h3>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
