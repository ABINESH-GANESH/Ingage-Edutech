import React from "react";
import "./HumanSection.css";

export default function HumanSection() {
  return (
    <section className="human-editorial">
      <div className="editorial-container">
        <div className="human-content-frame">
          <span className="tech-label tech-label-accent">
            10 // HUMAN ETHOS
          </span>

          <h2 className="human-h2">
            TECHNOLOGY MATTERS<br />
            <span className="navy-text">WHEN IT HELPS</span> <span className="green-text">PEOPLE.</span>
          </h2>

          <p className="human-manifesto-p">
            "Whether it's helping an engineer understand a machine, a student
            experience a complex concept, or an organization train its
            workforce, our work begins with a human problem."
          </p>

          <div className="human-pillars-grid">
            <div className="human-pillar-cell">
              <h4>Tactile Understanding</h4>
              <p>
                Spatial computing makes intangible digital data feel physical,
                intuitive, and immediately comprehensible.
              </p>
            </div>

            <div className="human-pillar-cell">
              <h4>Safety & Dignity</h4>
              <p>
                Zero-risk simulation environments ensure every plant worker and
                surgeon hones reflex memory safely.
              </p>
            </div>

            <div className="human-pillar-cell">
              <h4>Democratizing Mastery</h4>
              <p>
                InGage EduTech unlocks multimillion-dollar industry lab
                experience for students across polytechnics and colleges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
