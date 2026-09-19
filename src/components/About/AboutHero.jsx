import React, { useState, useEffect } from "react";
import { Sparkles, ArrowDown, ArrowRight, Compass } from "lucide-react";
import { aboutHeroData } from "../../data/aboutData";
import "./AboutHero.css";

export default function AboutHero({ onExploreClick, onMissionClick }) {
  const { badge, headline, supportingHeadline, description, image, ctaPrimary, ctaSecondary } = aboutHeroData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle scroll parallax for the hero image
  const imageParallax = Math.min(scrollY * 0.12, 40);

  return (
    <section className="about-hero-root" id="about-hero">
      <div className="about-hero-grid-bg" aria-hidden="true" />
      <div className="about-hero-light-beam" aria-hidden="true" />

      <div className="container about-hero-container">
        <div className="about-hero-grid">
          {/* Left Column: Heading, Value Proposition & Actions */}
          <div className="about-hero-left">
            <div className="about-hero-badge-wrap">
              <span className="section-eyebrow">
                <span className="eyebrow-dot" />
                <Sparkles size={13} className="text-green" />
                {badge}
              </span>
            </div>

            <h1 className="about-hero-title">
              {headline}
            </h1>

            <h2 className="about-hero-subheadline">
              {supportingHeadline}
            </h2>

            <p className="about-hero-lead-text">
              {description}
            </p>

            <div className="about-hero-actions">
              <button
                type="button"
                className="btn btn-primary about-btn-primary"
                onClick={onExploreClick}
                aria-label="Explore Our Ecosystem"
              >
                <span>{ctaPrimary}</span>
                <ArrowDown size={16} className="btn-arrow-down" />
              </button>

              <button
                type="button"
                className="btn btn-secondary about-btn-secondary"
                onClick={onMissionClick}
                aria-label="Our Mission and Vision"
              >
                <span>{ctaSecondary}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Wide Cinematic Photography */}
          <div className="about-hero-right">
            <div className="about-hero-image-frame">
              <img
                src={image}
                alt="InGage EduTech Innovation and Learning Environment"
                className="about-hero-main-img"
                style={{ transform: `translateY(${imageParallax}px)` }}
                loading="eager"
              />
              <div className="about-hero-image-overlay" />
              
              {/* Floating Ambient Label */}
              <div className="about-hero-floating-pill">
                <Compass size={14} className="text-green" />
                <span>LEARN · CONNECT · INNOVATE · GROW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
