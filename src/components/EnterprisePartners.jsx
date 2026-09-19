import { approvedData } from "../data/approvedData";
import "./EnterprisePartners.css";

export default function EnterprisePartners() {
  const { enterprisePartners } = approvedData;

  return (
    <section className="section section-white enterprise-root" id="partners">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>{enterprisePartners.badge}</span>
          </div>
          <h2 className="section-title">{enterprisePartners.heading}</h2>
          <p className="section-subtitle">{enterprisePartners.description}</p>
        </div>

        {/* Two Featured Partner Cards with Official Logos */}
        <div className="enterprise-partners-grid">
          {enterprisePartners.partners.map((partner) => (
            <div
              key={partner.brand}
              className={`enterprise-partner-card card-accent-${partner.badgeColor || "blue"}`}
            >
              {/* Background Ambient Glow */}
              <div className="card-ambient-glow" aria-hidden="true" />

              {/* 1. Header with Official Logo & Course Count Pill */}
              <div className="partner-card-header">
                <div className="partner-logo-container">
                  <img
                    src={partner.logo}
                    alt={`${partner.brand} Official Logo`}
                    className="partner-official-logo"
                    decoding="async"
                  />
                </div>
                <span className="partner-headline-pill">
                  <span className="pill-pulse-dot" />
                  {partner.headline}
                </span>
              </div>

              {/* 2. Partner Details Copy */}
              <p className="partner-card-details">{partner.details}</p>

              {/* 3. Certified Specializations Box */}
              <div className="partner-features-box">
                <div className="features-box-header">
                  <span className="partner-features-title">CERTIFIED SPECIALIZATIONS:</span>
                  <span className="features-verified-label">Industry Calibrated</span>
                </div>
                <div className="partner-pills-row">
                  {partner.features.map((feat) => (
                    <span key={feat} className="partner-feat-tag">
                      <span className="feat-check-icon">✓</span>
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Footer Actions & Semester Credit Badge */}
              <div className="partner-card-footer">
                <div className="partner-avail-badge">
                  <span className="avail-icon">★</span>
                  <span>Available for Semester Credit Integration</span>
                </div>
                <a
                  href={`mailto:${approvedData.brand.contact.email}?subject=Inquiry:%20${encodeURIComponent(partner.brand)}%20Curriculum%20Syllabus`}
                  className="partner-link"
                >
                  <span>Request Syllabus</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
