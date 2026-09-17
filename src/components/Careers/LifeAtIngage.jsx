import React from "react";
import { Users2, Award, Zap, ArrowUpRight } from "lucide-react";
import { lifeAtIngage } from "../../data/careersData";
import "./LifeAtIngage.css";

export default function LifeAtIngage() {
  const cardIcons = {
    culture: <Users2 size={20} className="life-card-icon" />,
    growth: <Award size={20} className="life-card-icon" />,
    innovation: <Zap size={20} className="life-card-icon" />,
  };

  return (
    <section className="section section-white life-at-ingage-section" id="life-at-ingage">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow section-eyebrow-green">
            <span className="eyebrow-dot" /> CULTURE & ENVIRONMENT
          </span>
          <h2 className="section-title">LIFE AT INGAGE</h2>
          <p className="section-subtitle">
            Step inside our collaborative workspaces where technology curiosity, engineering rigor, and creative problem solving converge every day.
          </p>
        </div>

        <div className="life-cards-grid">
          {lifeAtIngage.map((item) => (
            <article key={item.id} className="life-card">
              <div className="life-card-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="life-card-img"
                  loading="lazy"
                />
                <div className="life-card-tag-badge">
                  {cardIcons[item.id]}
                  <span>{item.tag}</span>
                </div>
              </div>

              <div className="life-card-content">
                <h3 className="life-card-title">{item.title}</h3>
                <p className="life-card-desc">{item.description}</p>
                <div className="life-card-footer">
                  <span className="life-card-link">
                    Explore experience <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
