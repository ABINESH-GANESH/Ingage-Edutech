import React from "react";
import { GraduationCap, Award, Briefcase, ArrowRight, Check } from "lucide-react";
import { careerJourneys } from "../../data/applyData";
import "./JourneySelector.css";

const JOURNEY_ICONS = {
  students: GraduationCap,
  freshers: Award,
  experienced: Briefcase,
};

export default function JourneySelector({ selectedJourney, onSelectJourney }) {
  return (
    <section className="section section-white journey-selector-root" id="choose-journey">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            TAILORED PATHWAYS
          </span>
          <h2 className="section-title">WHERE ARE YOU IN YOUR CAREER JOURNEY?</h2>
          <p className="section-subtitle max-w-700">
            Select your current career stage to discover curated opportunities and customized application flows.
          </p>
        </div>

        {/* 3 Interactive Journey Cards Grid */}
        <div className="journey-cards-grid">
          {careerJourneys.map((item) => {
            const IconComponent = JOURNEY_ICONS[item.id] || GraduationCap;
            const isSelected = selectedJourney === item.id;

            return (
              <div
                key={item.id}
                className={`journey-card ${isSelected ? "selected" : ""}`}
                onClick={() => onSelectJourney(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectJourney(item.id);
                  }
                }}
                aria-pressed={isSelected}
              >
                <div className="journey-card-header">
                  <div className="journey-icon-box">
                    <IconComponent size={22} className="journey-icon text-navy" />
                  </div>
                  <span className="journey-badge">{item.badge}</span>
                </div>

                <h3 className="journey-card-title">{item.title}</h3>
                <p className="journey-card-tagline">“{item.tagline}”</p>
                <p className="journey-card-desc">{item.description}</p>

                <div className="journey-card-footer">
                  <div className="journey-cta-btn">
                    <span>{isSelected ? "Selected Pathway" : "Explore"}</span>
                    {isSelected ? (
                      <Check size={14} className="journey-arrow text-green" />
                    ) : (
                      <ArrowRight size={14} className="journey-arrow" />
                    )}
                  </div>
                </div>

                {/* Bottom Active Accent Indicator */}
                <div className="journey-active-bar" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
