import React from "react";
import { useTranslation } from "react-i18next";
import { approvedData } from "../data/approvedData";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const { brand, aboutCards } = approvedData;

  return (
    <section className="section section-white about-root" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="about-header-centered">
          {/* Eyebrow Badge */}
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-pill">
              <span className="about-pulse-dot" />
              {t("about.tag", { defaultValue: "TOP COMPANY HONOR BY CII FOR SOCIAL IMPACT" })}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="about-main-title">
            <span className="title-line-dark">{t("about.headingPart1", { defaultValue: "BUILD SKILLS." })}</span><br />
            <span className="title-line-green">{t("about.headingPart2", { defaultValue: "GET CERTIFIED." })}</span>
          </h2>

          {/* Subtitle Description */}
          <p className="about-main-desc">
            {t("about.description", { defaultValue: brand.aboutDescription })}
          </p>

          {/* CTA Buttons */}
          <div className="about-cta-group">
            <a href="/courses" className="btn btn-about-cta">
              <span>Explore Courses</span>
              <span className="cta-arrow">→</span>
            </a>
            <a href="/center-of-excellence" className="btn btn-about-cta">
              <span>Set Up a CoE</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        {/* 8-Card Grid */}
        <div className="about-cards-grid">
          {aboutCards.map((card) => (
            <div key={card.id} className="about-grid-card">
              <div className="about-card-icon-wrap" aria-hidden="true">
                <span className="about-card-icon">{card.icon}</span>
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
