import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

// Native high-precision vector logos to guarantee instant, crisp 4K rendering
function OracleOfficialLogo() {
  return (
    <svg viewBox="0 0 270 40" className="partner-vector-svg" aria-label="Oracle Official Logo" role="img">
      <path fill="#EA1B25" d="M16.74 37.5h19.4a16.74 16.74 0 0 0 0-33.48H16.74a16.74 16.74 0 1 0 0 33.48zm18.99-5.9h-18.57a10.84 10.84 0 0 1 0-21.68h18.57a10.84 10.84 0 0 1 0 21.68zM84.45 26.68a11.27 11.27 0 0 0 0-22.54H56.32v33.48h6.43V6.25h20.98a5.42 5.42 0 0 1 0 10.84H65.93l19.23 16.53h9.34l-13.7-11.77h3.65zm27.7 -0.97h17.17l-9.08-14.65-8.09 14.65zm-8.56 11.79h-7.63l20.28-31.75a4.83 4.83 0 0 1 7.89-.06l20.57 31.81h-7.58l-3.57-5.91h-26.38l-3.58 5.91zm45.82 0h19.86l3.76-5.9h-19.34a10.84 10.84 0 1 1 0-21.68h18.88l3.81-5.9h-23.41a16.74 16.74 0 1 0 0 33.48zm33 0V4.02h-6.44v30.29a3.11 3.11 0 0 0 .96 2.25 3.26 3.26 0 0 0 2.34.98h29.31l3.82-5.9h-29.99zm45.72-5.9a10.84 10.84 0 0 1-10.44-7.89h27.52l3.79-5.9h-31.31a10.83 10.83 0 0 1 10.44-7.89h18.89l3.77-5.9h-23.1a16.74 16.74 0 0 0 0 33.48h19.87l3.77-5.9h-23.2z"/>
    </svg>
  );
}

function IBMOfficialLogo() {
  return (
    <img
      src="/assets/brand/ibm-logo.png"
      alt="IBM Official Logo"
      className="partner-official-logo"
      style={{
        height: "36px",
        width: "auto",
        maxHeight: "36px",
        maxWidth: "100px",
        objectFit: "contain",
        display: "block",
      }}
      loading="eager"
    />
  );
}

function GoogleCloudOfficialLogo() {
  return (
    <svg viewBox="0 0 250 48" className="partner-vector-svg" aria-label="Google Cloud Official Logo" role="img">
      <g transform="translate(4, 3)">
        <path d="M29.5 15.6c-.8-4.4-4.7-7.6-9.3-7.6-3.7 0-6.9 2.1-8.5 5.1-3.9.4-6.8 3.7-6.8 7.6 0 4.2 3.5 7.6 7.6 7.6h16.5c3.5 0 6.4-2.8 6.4-6.4 0-3.3-2.6-6-5.9-6.3z" fill="#4285F4"/>
        <path d="M29.5 15.6c-.8-4.4-4.7-7.6-9.3-7.6-2 0-3.9.6-5.3 1.8l5.4 5.4c.4-.1.8-.1 1.3-.1 2.4 0 4.4 2 4.4 4.4 0 .4 0 .8-.1 1.3l3.7 3.7c1.5-1.1 2.4-2.9 2.4-5 0-3.3-2.6-6-5.9-6.3z" fill="#EA4335"/>
        <path d="M11.7 13.1c-1.6 3-1.6 6.6 0 9.6l5.6-5.6c-.6-.7-1.1-1.7-1.5-2.7l-4.1-1.3z" fill="#FBBC05"/>
        <path d="M11.7 22.7c.9 1.9 2.6 3.2 4.6 3.9l4.5-4.5c-.6-.2-1.3-.5-1.8-1l-7.3 1.6z" fill="#34A853"/>
      </g>
      <text x="48" y="32" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="22" fontWeight="700" fill="#1E293B" letterSpacing="-0.4">
        Google <tspan fill="#64748B" fontWeight="600">Cloud</tspan>
      </text>
    </svg>
  );
}

function NvidiaOfficialLogo() {
  return (
    <svg viewBox="0 0 220 48" className="partner-vector-svg" aria-label="NVIDIA Official Logo" role="img">
      <g transform="translate(4, 5) scale(0.78)">
        <path fill="#76B900" d="M29.5 0C13.2 0 0 13.2 0 29.5c0 10.9 6 20.5 14.8 25.5-1.1-3.6-1.7-7.5-1.7-11.5C13.1 24 28.5 11 44.5 17.5 40 7.3 30.5 0 29.5 0z"/>
        <path fill="#76B900" d="M29.5 9.8c-10.9 0-19.7 8.8-19.7 19.7 0 7.3 4 13.7 9.9 17-1-2.4-1.5-5.1-1.5-7.8 0-9.2 7.5-16.7 16.7-16.7 3.8 0 7.3 1.3 10.1 3.4-3.8-9.4-10-15.6-15.5-15.6z"/>
        <path fill="#76B900" d="M29.5 19.6c-5.5 0-9.9 4.4-9.9 9.9 0 3.7 2 6.9 5 8.6-.6-1.3-.9-2.7-.9-4.2 0-4.6 3.8-8.4 8.4-8.4 2.1 0 4 .8 5.5 2.1-1.9-5-5-8-8.1-8z"/>
      </g>
      <text x="52" y="32" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif" fontSize="23" fontWeight="900" fill="#0F172A" letterSpacing="0.8">
        NVIDIA
      </text>
    </svg>
  );
}

// Partner Logo Map
const PARTNER_LOGO_COMPONENTS = {
  oracle: OracleOfficialLogo,
  ibm: IBMOfficialLogo,
  google: GoogleCloudOfficialLogo,
  nvidia: NvidiaOfficialLogo,
};

export default function PartnerCard({ partner, onInquirePartner }) {
  const { id, name, brand, logo, programCount, description, specializations, accentColor = "blue" } = partner;

  const LogoComponent = PARTNER_LOGO_COMPONENTS[id?.toLowerCase()];

  return (
    <article className={`partner-card partner-accent-${accentColor}`}>
      {/* Brand Accent Top Stripe */}
      <div className={`partner-card-accent-bar partner-bar-${accentColor}`} />

      <div className="partner-card-header">
        <div className="partner-brand-logo-wrap">
          {LogoComponent ? (
            <LogoComponent />
          ) : logo ? (
            <img
              src={logo}
              alt={`${name} Official Logo`}
              className="partner-official-logo"
              decoding="async"
            />
          ) : (
            <span className="partner-brand-name">{brand || name}</span>
          )}
        </div>

        <span className={`partner-tier-badge partner-badge-${accentColor}`}>
          <ShieldCheck size={13} className="partner-badge-icon" />
          <span>{programCount}</span>
        </span>
      </div>

      <p className="partner-card-desc">{description}</p>

      <div className="partner-specs-box">
        <span className="partner-specs-title">VERIFIED SPECIALIZATIONS</span>
        <div className="partner-specs-tags">
          {specializations.map((spec, idx) => (
            <span key={idx} className="partner-spec-pill">
              <Check size={12} className={`spec-check spec-check-${accentColor}`} />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="partner-card-footer">
        <button
          type="button"
          className="btn-partner-cta"
          onClick={() => onInquirePartner && onInquirePartner(partner)}
          aria-label={`Request syllabus for ${name} programs`}
        >
          <span>Request Syllabus</span>
          <ArrowRight size={14} className="partner-cta-arrow" />
        </button>
      </div>
    </article>
  );
}
