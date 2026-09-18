import React from "react";
import { BookOpen, Cpu, Award, CheckCircle2, Sparkles } from "lucide-react";
import { learningPillars } from "../../data/coursesData";
import "./LearningSection.css";

export default function LearningSection() {
  const pillarIcons = [
    <BookOpen key="book" size={24} className="pillar-icon text-navy" />,
    <Cpu key="cpu" size={24} className="pillar-icon text-green" />,
    <Award key="award" size={24} className="pillar-icon text-navy" />,
  ];

  return (
    <section className="section section-white learning-section-root" id="learning-experience">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow courses-eyebrow-brand">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-brand-green" />
            THE INGAGE LEARNING ARC
          </span>
          <h2 className="section-title">
            LEARN BEYOND <span className="brand-navy-text">THE</span>{" "}
            <span className="brand-green-text">CLASSROOM</span>
          </h2>
          <p className="section-subtitle">
            Build practical skills through structured learning, hands-on experiences and technology-focused programs designed around real-world applications.
          </p>
        </div>

        <div className="learning-pillars-grid">
          {learningPillars.map((pillar, idx) => (
            <div key={pillar.number} className="learning-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>
                <div className="pillar-num-badge">
                  <span>{pillar.number}</span>
                  <span className="pillar-tag-sub">{pillar.pillar}</span>
                </div>
              </div>

              <h3 className="pillar-card-title">{pillar.title}</h3>
              <p className="pillar-card-desc">{pillar.description}</p>

              <div className="pillar-points-list">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="pillar-pt-item">
                    <CheckCircle2 size={15} className="pillar-pt-check text-green" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
