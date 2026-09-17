import React from "react";
import { Target, CheckCircle2 } from "lucide-react";
import { aboutMissionData } from "../../data/aboutData";
import "./AboutMission.css";

export default function AboutMission() {
  const { badge, heading, description, pillars } = aboutMissionData;

  return (
    <section className="section section-dark about-mission-root" id="about-mission">
      <div className="about-mission-ambient-grid" aria-hidden="true" />
      <div className="about-mission-glow" aria-hidden="true" />

      <div className="container about-mission-container">
        {/* Eyebrow */}
        <div className="about-mission-badge-wrap">
          <span className="mission-eyebrow">
            <Target size={13} className="text-green" />
            {badge}
          </span>
        </div>

        {/* Large Typography Heading */}
        <h2 className="about-mission-heading">
          {heading}
        </h2>

        {/* Mission Lead Statement */}
        <p className="about-mission-lead">
          {description}
        </p>

        {/* 3 Core Mission Pillars */}
        <div className="about-mission-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="mission-pillar-card">
              <div className="pillar-top-row">
                <span className="pillar-num">0{idx + 1}</span>
                <CheckCircle2 size={16} className="text-green" />
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
