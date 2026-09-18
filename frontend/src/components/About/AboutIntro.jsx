import React from "react";
import { Compass, Award, Cpu, Globe, CheckCircle2 } from "lucide-react";
import { aboutIntroData } from "../../data/aboutData";
import "./AboutIntro.css";

export default function AboutIntro() {
  const { badge, heading, paragraphs, metrics } = aboutIntroData;

  const metricIcons = [
    <Award key="award" size={20} className="metric-icon text-navy" />,
    <Cpu key="cpu" size={20} className="metric-icon text-green" />,
    <Globe key="globe" size={20} className="metric-icon text-navy" />,
    <CheckCircle2 key="check" size={20} className="metric-icon text-green" />,
  ];

  return (
    <section className="section section-white about-intro-root" id="about-intro">
      <div className="container">
        <div className="about-intro-grid">
          {/* Left Column: Heading and Eyebrow */}
          <div className="about-intro-left">
            <div className="about-intro-badge-wrap">
              <span className="section-eyebrow">
                <Compass size={13} className="eyebrow-icon text-green" />
                {badge}
              </span>
            </div>

            <h2 className="about-intro-heading">
              {heading}
            </h2>

            <div className="about-intro-decor-line" aria-hidden="true" />
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="about-intro-right">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="about-intro-para">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="about-intro-metrics-strip">
          <div className="metrics-strip-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-strip-card">
                <div className="metric-card-top">
                  <span className="metric-icon-wrap">{metricIcons[idx % metricIcons.length]}</span>
                  <span className="metric-card-val">{metric.value}</span>
                </div>
                <span className="metric-card-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
