import React from "react";
import { useTranslation } from "react-i18next";
import { approvedData } from "../../data/approvedData";

export default function HeroContent({ onNavigate }) {
  const { t } = useTranslation();
  const { brand } = approvedData;

  const handleSetupCoEClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("/center-of-excellence");
    } else {
      window.location.pathname = "/center-of-excellence";
    }
  };

  return (
    <div className="hero-content-col">
      {/* Eyebrow Badge */}
      <div className="hero-eyebrow-wrap">
        <span className="hero-eyebrow-pill">
          <span className="eyebrow-pulse-dot" />
          {t("hero.honorBadge", { defaultValue: brand.tagline })}
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="hero-main-title">
        <span className="title-line-dark">{t("hero.titlePart1", { defaultValue: "Bridge the Gap Between" })}</span>{" "}
        <span className="title-line-accent">{t("hero.titlePart2", { defaultValue: "Degrees and Careers" })}</span>
      </h1>

      {/* Description */}
      <p className="hero-lead-text">
        {t("hero.subtitle", { defaultValue: brand.description })}
      </p>

      {/* CTA Action Buttons */}
      <div className="hero-cta-group">
        <a
          href="/courses"
          className="btn btn-hero-cta"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate("/courses");
            else window.location.pathname = "/courses";
          }}
        >
          <span>{t("hero.ctaCourses", { defaultValue: "Explore Courses" })}</span>
          <span className="cta-arrow">→</span>
        </a>

        <a
          href="/center-of-excellence"
          className="btn btn-hero-cta"
          onClick={handleSetupCoEClick}
        >
          <span>{t("hero.ctaCoE", { defaultValue: "Set Up a CoE" })}</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </div>
  );
}
