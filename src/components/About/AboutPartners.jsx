import React from "react";
import { ShieldCheck, Check } from "lucide-react";
import { verifiedPartnersList } from "../../data/aboutData";
import "./AboutPartners.css";

export default function AboutPartners() {
  return (
    <section className="section section-white about-partners-root" id="about-partners">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <ShieldCheck size={13} className="text-green" />
            GLOBAL COLLABORATIONS
          </span>
          <h2 className="section-title">OUR TECHNOLOGY ECOSYSTEM</h2>
          <p className="section-subtitle max-w-700">
            Integrated learning pathways calibrated with premier global technology leaders.
          </p>
        </div>

        {/* 4 Verified Partner Cards */}
        <div className="about-partners-grid">
          {verifiedPartnersList.map((partner) => (
            <div key={partner.name} className="about-partner-card">
              <div className="partner-logo-box">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Official Logo`}
                  className="about-partner-svg"
                  loading="lazy"
                />
              </div>

              <div className="partner-role-badge">
                <ShieldCheck size={12} className="text-green" />
                <span>{partner.role}</span>
              </div>

              <p className="partner-focus-desc">{partner.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
