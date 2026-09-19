import React, { useState, useEffect } from "react";
import { ArrowDown, Sparkles, ArrowRight, Layers, Compass, Code, Cpu } from "lucide-react";
import { internshipHeroData } from "../../data/internshipData";
import "./InternshipHero.css";

export default function InternshipHero({ onExploreClick, onProgramsClick }) {
  const { badge, headline, subheadline, description, primaryCTA, secondaryCTA, metrics } = internshipHeroData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax transform calculation (subtle and capped)
  const parallaxOffset = Math.min(scrollY * 0.25, 120);
  const scaleZoom = 1 + Math.min(scrollY * 0.0004, 0.08);
  const textFade = Math.max(1 - scrollY * 0.002, 0.2);

  const metricIcons = [
    <Layers key="layers" size={18} className="text-green" />,
    <Cpu key="cpu" size={18} className="text-green" />,
    <Compass key="compass" size={18} className="text-green" />,
    <Code key="code" size={18} className="text-green" />,
  ];

  return (
    <section className="intern-hero-root" id="hero">
      {/* Full-Bleed Background Visual with Parallax & Subtle Zoom */}
      <div className="intern-hero-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/internship/internship-hero-bg.jpg"
          alt=""
          className="intern-hero-bg-img"
          style={{
            transform: `scale(${scaleZoom}) translateY(${parallaxOffset}px)`,
          }}
          loading="eager"
        />
        <div className="intern-hero-overlay" />
        <div className="intern-hero-grid-lines" />
      </div>

      {/* Hero Content Container */}
      <div className="container intern-hero-container" style={{ opacity: textFade }}>
        {/* Eyebrow Badge */}
        <div className="intern-hero-badge-wrap">
          <span className="intern-hero-badge">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="hero-sparkle-icon" />
            {badge}
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="intern-hero-title">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="intern-hero-subheadline">
          {subheadline}
        </p>

        {/* Supporting Narrative */}
        <p className="intern-hero-description">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="intern-hero-actions">
          <button
            type="button"
            className="btn btn-primary intern-hero-btn-primary"
            onClick={onExploreClick}
          >
            {primaryCTA} <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn intern-hero-btn-glass"
            onClick={onProgramsClick}
          >
            {secondaryCTA}
          </button>
        </div>

        {/* Metrics Strip */}
        <div className="intern-hero-metrics-strip">
          {metrics.map((item, idx) => (
            <div key={idx} className="intern-metric-item">
              <div className="intern-metric-top">
                <span className="intern-metric-icon">{metricIcons[idx % metricIcons.length]}</span>
                <span className="intern-metric-value">{item.value}</span>
              </div>
              <span className="intern-metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="intern-hero-scroll-indicator" onClick={onExploreClick} role="button" tabIndex={0}>
        <span className="scroll-indicator-text">SCROLL TO EXPLORE</span>
        <ArrowDown size={15} className="scroll-arrow-pulse" />
      </div>
    </section>
  );
}
