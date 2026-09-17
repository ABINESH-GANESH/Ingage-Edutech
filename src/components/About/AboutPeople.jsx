import React from "react";
import { Users, CheckCircle2 } from "lucide-react";
import { peopleCultureData } from "../../data/aboutData";
import "./AboutPeople.css";

export default function AboutPeople() {
  const { badge, heading, description, image, highlights } = peopleCultureData;

  return (
    <section className="section section-white about-people-root" id="about-culture">
      <div className="container">
        <div className="about-people-grid">
          {/* Left: Team Photography */}
          <div className="about-people-img-col">
            <div className="people-img-frame">
              <img
                src={image}
                alt="InGage EduTech Team Collaboration and Culture"
                className="people-img"
                loading="lazy"
              />
              <div className="people-img-overlay" />
              <div className="people-img-badge">
                <Users size={14} className="text-green" />
                <span>CROSS-DISCIPLINARY CRAFT</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div className="about-people-text-col">
            <div className="people-badge-wrap">
              <span className="section-eyebrow">
                <Users size={13} className="eyebrow-icon text-green" />
                {badge}
              </span>
            </div>

            <h2 className="people-heading">{heading}</h2>
            <p className="people-description">{description}</p>

            <div className="people-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="people-highlight-row">
                  <CheckCircle2 size={16} className="text-green highlight-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
