import { approvedData } from "../data/approvedData";
import "./Ecosystem.css";

export default function Ecosystem() {
  const { ecosystem } = approvedData;

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
                loading="lazy"
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
                loading="lazy"
              />
            </div>
          </div>

          {/* Status Badges Row */}
          <div className="ecosystem-badge-cluster">
            <div className="eco-partner-pill">
              <span className="pill-star">★</span>
              <span>{ecosystem.flagship}</span>
            </div>
            <div className="eco-scale-pill">
              <span className="pill-dot-green" />
              <span>{ecosystem.subBadge}</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header center-text" style={{ maxWidth: "820px", marginTop: "36px" }}>
          <h2 className="section-title">National Transformation Ecosystem</h2>
          <p className="section-subtitle">
            {ecosystem.leadMessage} Google, Oracle, IBM, Skill India, and ICT Academy — operating a {ecosystem.subMessage.toLowerCase()} delivering verified career outcomes across India's premier academic institutions.
          </p>
        </div>

        {/* 3 Ecosystem Pillar Columns */}
        <div className="ecosystem-pillars-grid">
          {/* Pillar 1: TN Skill & TNSDC Integration */}
          <div className="eco-pillar-card eco-card-featured">
            <div className="eco-card-top-bar">
              <span className="eco-pillar-index">01</span>
              <img
                src="/assets/brand/tn-skill-logo.png"
                alt="TN Skill Logo"
                className="card-corner-logo"
                loading="lazy"
              />
            </div>
            <h3 className="eco-pillar-title">{ecosystem.pillars[0].title}</h3>
            <p className="eco-pillar-desc">{ecosystem.pillars[0].desc}</p>
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
                <div className="mini-logo-pill" title="IBM SkillsBuild">
                  <svg width="26" height="13" viewBox="0 0 60 25" fill="#0F62FE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm16-24h18c3 0 6 2 6 5 0 2-1 3-3 4 2 1 4 2 4 5 0 3-3 5-7 5H16zm6 3.5v2.5h8c1 0 2-1 2-1.25S31 6 30 6zm0 7v2.5h9c1 0 2-1 2-1.25s-1-1.25-2-1.25zm19-10.5h19v2.5H41zm0 3.5h5v18h-5zm14 0h5v18h-5zm-14 3.5h19v2.5H41zm0 3.5h19v2.5H41zm0 3.5h19v2.5H41z" />
                  </svg>
                </div>

                {/* Oracle Logo */}
                <div className="mini-logo-pill" title="Oracle Global Partner">
                  <img
                    src="/assets/brand/oracle-logo.svg"
                    alt="Oracle Logo"
                    style={{ height: "13px", width: "auto" }}
                  />
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
            <h3 className="eco-pillar-title">{ecosystem.pillars[1].title}</h3>
            <p className="eco-pillar-desc">{ecosystem.pillars[1].desc}</p>
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
            <h3 className="eco-pillar-title">{ecosystem.pillars[2].title}</h3>
            <p className="eco-pillar-desc">{ecosystem.pillars[2].desc}</p>
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
