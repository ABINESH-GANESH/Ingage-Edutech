import React from "react";
import { Compass } from "lucide-react";
import { careersIntroData } from "../../data/careersData";
import "./CareersIntro.css";

export default function CareersIntro() {
  const { badge, heading, description } = careersIntroData;

  return (
    <section className="section section-white careers-intro-section" id="careers-intro">
      <div className="container">
        <div className="careers-intro-wrapper">
          <div className="careers-intro-eyebrow-wrap">
            <span className="section-eyebrow">
              <Compass size={13} className="eyebrow-icon" />
              {badge}
            </span>
          </div>

          <h2 className="careers-intro-heading">
            {heading}
          </h2>

          <div className="careers-intro-divider" aria-hidden="true" />

          <p className="careers-intro-copy">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
