import { approvedData } from "../data/approvedData";
import "./Ecosystem.css";

export default function Ecosystem() {
  const ecosystem = approvedData?.ecosystem || {};

  const flagshipText = ecosystem.flagship || "TN SKILL & TNSDC GLOBAL PARTNER";
  const partnerProgramText = ecosystem.partnerProgram || "AUTHORIZED ACADEMIC PARTNER";
  const initiativeText =
    (Array.isArray(ecosystem.initiatives) && ecosystem.initiatives[0]) ||
    ecosystem.subBadge ||
    "PAN-INDIA CAMPUS SCALING";

  const leadMsg = ecosystem.leadMessage || "Backed by technology giants including";
  const subMsg = ecosystem.subMessage
    ? ecosystem.subMessage.toLowerCase()
    : "trusted active infrastructure matrix";

  const pillars = ecosystem.pillars || [
    {
      title: "TN Skill Integration",
      desc: "Direct deployment partner supporting the Tamil Nadu Government's TN Skill Development Mission (TNSDC), delivering high-impact technological literacy across engineering colleges.",
    },
    {
      title: "Global Partner Ecosystem",
      desc: "Backed by technology giants including Google, Oracle, IBM, Skill India, and ICT Academy, establishing institutional testbeds and certified curriculum pipelines.",
    },
    {
      title: "Pan-India Scaling Presence",
      desc: "Trusted active infrastructure matrix covering more than 1,750+ partner colleges and over 5,00,000+ students trained on campus with job-ready skills.",
    },
  ];

  return (
    <section className="section section-white ecosystem-root" id="ecosystem">
      <div className="container">
        {/* Top Official Partnership Lockup Banner */}
        <div className="ecosystem-partnership-banner">
          <div className="partnership-logos-row">
            {/* InGage EduTech Official Logo */}
            <div className="partner-logo-frame ingage-frame">
              <img
                src="/assets/brand/ingage-edutech-stacked.png"
                alt="InGage EduTech Official Logo"
                className="eco-official-logo ingage-logo-img"
                decoding="async"
              />
            </div>

            {/* Partnership Cross-Badge */}
            <div className="partnership-bridge">
              <span className="bridge-icon">✕</span>
              <span className="bridge-label">STRATEGIC SKILLING PARTNER</span>
            </div>

            {/* TN Skill Official Logo */}
            <div className="partner-logo-frame tnskill-frame">
              <img
                src="/assets/brand/tn-skill-logo.png"
                alt="TN Skill Official Logo"
                className="eco-official-logo tnskill-logo-img"
                decoding="async"
              />
            </div>
          </div>

          {/* Status Badges Row */}
          <div className="ecosystem-badge-cluster">
            <div className="eco-partner-pill">
              <span className="pill-star">★</span>
              <span>{flagshipText}</span>
            </div>
            <div className="eco-partner-pill">
              <span className="pill-star">★</span>
              <span>{partnerProgramText}</span>
            </div>
            <div className="eco-partner-pill">
              <span className="pill-star">★</span>
              <span>{initiativeText}</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header center-text" style={{ maxWidth: "820px", marginTop: "36px" }}>
          <h2 className="section-title">National Transformation Ecosystem</h2>
          <p className="section-subtitle">
            {leadMsg} Google, Oracle, IBM, Skill India, and ICT Academy, operating a {subMsg} delivering verified career outcomes across India's premier academic institutions.
          </p>
        </div>

        {/* 3-Pillar Ecosystem Grid */}
        <div className="ecosystem-pillars-grid">
          {/* Pillar 01: Naan Mudhalvan */}
          <div className="eco-pillar-card card-naan">
            <div className="eco-card-top-bar">
              <span className="eco-pillar-index">01</span>
              <img
                src="/assets/brand/tn-skill-logo.png"
                alt="TN Skill Logo"
                className="card-corner-logo"
                decoding="async"
              />
            </div>
            <h3 className="eco-pillar-title">{pillars[0]?.title || "TN Skill Integration"}</h3>
            <p className="eco-pillar-desc">{pillars[0]?.desc || ""}</p>
            <div className="eco-card-tag-strip">
              <span className="eco-card-tag">TN Government Flagship</span>
              <span className="eco-card-tag">State-Wide Rollout</span>
            </div>
          </div>

          {/* Pillar 2: Global Partner Ecosystem */}
          <div className="eco-pillar-card">
            <div className="eco-card-top-bar">
              <span className="eco-pillar-index">02</span>
              <div className="card-partner-logos-cluster">
                {/* Google Logo */}
                <div className="mini-logo-pill" title="Google Authorized Partner">
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
                  </svg>
                </div>

                {/* IBM Logo */}
                <div className="mini-logo-pill" title="IBM">
                  <img
                    src="/assets/brand/ibm-logo.png"
                    alt="IBM"
                    style={{
                      height: "14px",
                      width: "auto",
                      maxWidth: "36px",
                      objectFit: "contain",
                      display: "block",
                    }}
                    loading="eager"
                  />
                </div>

                {/* Oracle Logo */}
                <div className="mini-logo-pill" title="Oracle Global Partner">
                  <svg width="34" height="12" viewBox="0 0 270 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ shapeRendering: "geometricPrecision" }}>
                    <path fill="#EA1B25" d="M16.74 37.5h19.4a16.74 16.74 0 0 0 0-33.48H16.74a16.74 16.74 0 1 0 0 33.48zm18.99-5.9h-18.57a10.84 10.84 0 0 1 0-21.68h18.57a10.84 10.84 0 0 1 0 21.68zM84.45 26.68a11.27 11.27 0 0 0 0-22.54H56.32v33.48h6.43V6.25h20.98a5.42 5.42 0 0 1 0 10.84H65.93l19.23 16.53h9.34l-13.7-11.77h3.65zm27.7 -0.97h17.17l-9.08-14.65-8.09 14.65zm-8.56 11.79h-7.63l20.28-31.75a4.83 4.83 0 0 1 7.89-.06l20.57 31.81h-7.58l-3.57-5.91h-26.38l-3.58 5.91zm45.82 0h19.86l3.76-5.9h-19.34a10.84 10.84 0 1 1 0-21.68h18.88l3.81-5.9h-23.41a16.74 16.74 0 1 0 0 33.48zm33 0V4.02h-6.44v30.29a3.11 3.11 0 0 0 .96 2.25 3.26 3.26 0 0 0 2.34.98h29.31l3.82-5.9h-29.99zm45.72-5.9a10.84 10.84 0 0 1-10.44-7.89h27.52l3.79-5.9h-31.31a10.83 10.83 0 0 1 10.44-7.89h18.89l3.77-5.9h-23.1a16.74 16.74 0 0 0 0 33.48h19.87l3.77-5.9h-23.2z"/>
                  </svg>
                </div>

                {/* Skill India Logo */}
                <div className="mini-logo-pill" title="Skill India">
                  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    <path d="M24 8a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8z" stroke="#F26522" strokeWidth="2.5" strokeDasharray="3 3" />
                    <path d="M15 26c2-4 6-7 11-5 4 1.5 6 6 5 9" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="24" cy="18" r="4" fill="#1B365D" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="eco-pillar-title">{pillars[1]?.title || "Global Partner Ecosystem"}</h3>
            <p className="eco-pillar-desc">{pillars[1]?.desc || ""}</p>
            <div className="eco-card-tag-strip">
              <span className="eco-card-tag">Industry Curricula</span>
              <span className="eco-card-tag">Global Badges</span>
            </div>
          </div>

          {/* Pillar 3: Pan-India Scaling Presence */}
          <div className="eco-pillar-card">
            <div className="eco-card-top-bar">
              <span className="eco-pillar-index">03</span>
              <div className="card-metrics-callout">
                <strong>1,750+</strong>
                <span>COLLEGES</span>
              </div>
            </div>
            <h3 className="eco-pillar-title">{pillars[2]?.title || "Pan-India Scaling Presence"}</h3>
            <p className="eco-pillar-desc">{pillars[2]?.desc || ""}</p>
            <div className="eco-card-tag-strip">
              <span className="eco-card-tag">5,00,000+ Trained</span>
              <span className="eco-card-tag">75+ CoE Labs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
