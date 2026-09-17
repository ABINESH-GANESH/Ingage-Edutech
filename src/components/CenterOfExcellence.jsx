import React from "react";
import { useTranslation } from "react-i18next";
import { approvedData } from "../data/approvedData";
import "./CenterOfExcellence.css";

export default function CenterOfExcellence({ onNavigate }) {
  const { t } = useTranslation();
  const { centerOfExcellence } = approvedData;

  const handleSetupClick = (e, techName) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("/center-of-excellence");
    } else {
      window.location.pathname = "/center-of-excellence";
    }
  };

  return (
    <section className="section section-page coe-root" id="coe">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{t("coe.badge", { defaultValue: "ON-CAMPUS TURNKEY INFRASTRUCTURE" })}</span>
          </div>
          <h2 className="section-title">{t("coe.title", { defaultValue: centerOfExcellence.heading })}</h2>
          <p className="section-subtitle">{t("coe.subtitle", { defaultValue: centerOfExcellence.description })}</p>
        </div>

        {/* Six Exact Technology CoE Visual Tiles with Real Imagery */}
        <div className="coe-tiles-grid">
          {centerOfExcellence.technologies.map((tech) => (
            <div key={tech.id} className="coe-tile-card">
              {/* Lab Visual Photo Banner */}
              <div className="coe-image-container">
                <img
                  src={tech.image}
                  alt={`${tech.name} Lab`}
                  className="coe-card-img"
                  decoding="async"
                />
                <div className="coe-img-overlay">
                  <span className="coe-badge-sub">{tech.sub}</span>
                </div>
              </div>

              <div className="coe-tile-body">
                <h3 className="coe-tech-name">{tech.name}</h3>
                <p className="coe-tech-desc">{tech.desc}</p>
              </div>

              <div className="coe-tile-footer">
                <span className="coe-install-label">Hardware & Software Calibrated</span>
                <a
                  href="/center-of-excellence"
                  className="coe-inquire-btn"
                  onClick={(e) => handleSetupClick(e, tech.name)}
                >
                  {t("coe.exploreLabs", { defaultValue: "Setup CoE →" })}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
