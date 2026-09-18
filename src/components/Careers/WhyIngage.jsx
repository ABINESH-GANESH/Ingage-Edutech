import React from "react";
import { whyIngagePoints } from "../../data/careersData";
import "./WhyIngage.css";

export default function WhyIngage() {
  return (
    <section className="section section-page why-ingage-careers-section" id="why-ingage">
      <div className="container">
        {/* Editorial Asymmetric Layout: Left Header Column & Right Flow */}
        <div className="why-ingage-layout">
          <div className="why-ingage-sidebar">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" /> THE INGAGE ADVANTAGE
            </span>
            <h2 className="why-ingage-title">WHY INGAGE?</h2>
            <p className="why-ingage-lead">
              We empower developers, designers, and educators to create meaningful technological solutions with national reach and measurable impact.
            </p>

            <div className="why-ingage-quote-box">
              <div className="quote-mark">“</div>
              <p className="quote-text">
                Every project at InGage is built at the intersection of deep engineering, spatial computing, and educational transformation.
              </p>
              <span className="quote-author">Engineering Leadership</span>
            </div>
          </div>

          <div className="why-ingage-points-grid">
            {whyIngagePoints.map((point) => (
              <div key={point.number} className="why-point-row">
                <div className="why-point-number-col">
                  <span className="why-point-num">{point.number}</span>
                </div>
                <div className="why-point-content-col">
                  <h3 className="why-point-title">{point.title}</h3>
                  <p className="why-point-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
