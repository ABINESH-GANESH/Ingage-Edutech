import React from "react";
import { Sparkles, Check, BookOpen, Layers, Briefcase, Building, Cpu, Globe } from "lucide-react";
import { whatWeDoCategories } from "../../data/aboutData";
import "./WhatWeDo.css";

const CATEGORY_ICONS = {
  learning: BookOpen,
  immersive: Layers,
  career: Briefcase,
  enterprise: Building,
  coe: Cpu,
  "industry-connect": Globe,
};

export default function WhatWeDo() {
  return (
    <section className="section section-page what-we-do-root" id="what-we-do">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-green" />
            OUR CAPABILITIES & SOLUTIONS
          </span>
          <h2 className="section-title">WHAT WE DO</h2>
          <p className="section-subtitle">
            Comprehensive learning frameworks and technological capabilities designed to build real-world engineering proficiency.
          </p>
        </div>

        {/* 6 Clean Feature Cards Grid */}
        <div className="what-we-do-grid">
          {whatWeDoCategories.map((item) => {
            const IconComponent = CATEGORY_ICONS[item.id] || BookOpen;

            return (
              <article key={item.id} className="what-we-do-card">
                <div className="card-top-row">
                  <div className="card-icon-box">
                    <IconComponent size={20} className="card-icon text-navy" />
                  </div>
                  <span className="card-tag-pill">{item.tag}</span>
                </div>

                <div className="card-number-label">{item.number}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>

                <div className="card-highlights-wrap">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="card-highlight-item">
                      <Check size={13} className="text-green check-icon" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
