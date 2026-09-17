import React from "react";
import {
  Heart,
  Sparkles,
  Lightbulb,
  Wrench,
  Users,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { coreValuesList } from "../../data/aboutData";
import "./AboutValues.css";

const VALUE_ICONS = [
  { icon: Heart, theme: "green" },
  { icon: Lightbulb, theme: "navy" },
  { icon: Wrench, theme: "green" },
  { icon: Users, theme: "navy" },
  { icon: ShieldCheck, theme: "green" },
  { icon: TrendingUp, theme: "navy" },
];

export default function AboutValues() {
  return (
    <section className="section section-page about-values-root" id="about-values">
      {/* Background Ambient Glows */}
      <div className="values-bg-glow glow-green" aria-hidden="true" />
      <div className="values-bg-glow glow-navy" aria-hidden="true" />
      <div className="values-grid-pattern" aria-hidden="true" />

      <div className="container relative-container">
        {/* Section Header */}
        <div className="section-header center-text values-header-wrap">
          <div className="values-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-sparkle text-brand-green" />
            <span>CORE PRINCIPLES</span>
          </div>

          <h2 className="section-title values-main-title">
            WHAT WE <span className="title-gradient-span">BELIEVE IN</span>
          </h2>

          <p className="section-subtitle values-lead-desc">
            The foundational values that guide our pedagogical architecture, engineering culture, and institutional partnerships.
          </p>
        </div>

        {/* 6 Core Value Cards Grid */}
        <div className="about-values-grid">
          {coreValuesList.map((val, idx) => {
            const iconConfig = VALUE_ICONS[idx % VALUE_ICONS.length];
            const IconComp = iconConfig.icon;
            const themeClass = iconConfig.theme;

            return (
              <div key={val.id} className={`value-card-premium theme-${themeClass}`}>
                <div className="card-top-accent-line" />

                <div className="value-card-top">
                  <div className={`value-icon-halo ${themeClass}`}>
                    <IconComp size={22} className="value-icon-svg" />
                  </div>
                  <span className={`value-num-badge ${themeClass}`}>{val.number}</span>
                </div>

                <div className="value-content-block">
                  <span className="value-subtitle-tag">{val.subtitle}</span>
                  <h3 className="value-card-title">{val.title}</h3>
                  <p className="value-card-desc">{val.description}</p>
                </div>

                <div className="value-card-footer">
                  <div className={`value-tag-pill ${themeClass}`}>
                    <CheckCircle2 size={13} className="tag-check-icon" />
                    <span>{val.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
