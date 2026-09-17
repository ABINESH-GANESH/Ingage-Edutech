import React from "react";
import { useTranslation } from "react-i18next";
import { approvedData } from "../data/approvedData";
import "./Stats.css";

export default function Stats() {
  const { t } = useTranslation();
  const { metrics } = approvedData;

  const statKeyMap = {
    "STUDENTS TRAINED": "stats.studentsTrained",
    "PARTNER COLLEGES": "stats.partnerColleges",
    "COE LABS BUILT": "stats.coeLabsBuilt",
    "HACKATHONS/YEAR": "stats.hackathonsYear",
    "PLACEMENTS/YEAR": "stats.placementsYear",
    "INTERNSHIPS/SEM": "stats.internshipsSem",
    "CAMPUS-TO-CORP": "stats.campusToCorp",
    "FDPS DELIVERED": "stats.fdpsDelivered",
  };

  const getTranslatedLabel = (label) => {
    const key = statKeyMap[label];
    return key ? t(key, { defaultValue: label }) : label;
  };

  const leadersWithLogos = [
    {
      name: "SKILL INDIA",
      desc: "National Skill Development Partner",
      logo: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M24 8a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8z" stroke="#F26522" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M15 26c2-4 6-7 11-5 4 1.5 6 6 5 9" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="18" r="4" fill="#1B365D" />
          <path d="M18 33c1.5-2.5 3.5-3.5 6-3.5s4.5 1 6 3.5" stroke="#F26522" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "GOOGLE",
      desc: "Authorized Career Certificate Partner",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
        </svg>
      ),
    },
    {
      name: "ORACLE",
      desc: "Global Cloud & AI Certification",
      logo: (
        <svg width="28" height="18" viewBox="0 0 60 30" fill="#F80000" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.716 0 0 6.716 0 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15S53.284 0 45 0H15zm30 22H15c-3.866 0-7-3.134-7-7s3.134-7 7-7h30c3.866 0 7 3.134 7 7s-3.134 7-7 7z" />
        </svg>
      ),
    },
    {
      name: "IBM",
      desc: "IBM SkillsBuild Digital Credentials",
      logo: (
        <svg width="34" height="18" viewBox="0 0 60 25" fill="#0F62FE" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm0 3.5h12v2.5H0zm16-24h18c3 0 6 2 6 5 0 2-1 3-3 4 2 1 4 2 4 5 0 3-3 5-7 5H16zm6 3.5v2.5h8c1 0 2-1 2-1.25S31 6 30 6zm0 7v2.5h9c1 0 2-1 2-1.25s-1-1.25-2-1.25zm19-10.5h19v2.5H41zm0 3.5h5v18h-5zm14 0h5v18h-5zm-14 3.5h19v2.5H41zm0 3.5h19v2.5H41zm0 3.5h19v2.5H41z" />
        </svg>
      ),
    },
    {
      name: "NVIDIA",
      desc: "AI & GPU Computing Partner",
      logo: (
        <svg width="28" height="22" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.2 16.5c-9.1 1.2-16.7 6.6-20.7 14.7-3.3 6.6-3.7 13.9-1.2 20.8 3.7 10.3 12.8 17.6 23.7 19 3.5.5 8.7.2 12.1-.6 4.9-1.2 9.5-3.6 13.1-7l2.2-2.1-1.6-1.5c-.9-.8-2.6-2.2-3.8-3.1l-2.1-1.6-2 1.8c-4.4 3.9-9.8 5.7-15.6 5.1-6.9-.7-12.7-5.1-15-11.4-1.1-2.9-1.3-6.6-.5-9.6 1.4-5.3 5.4-9.5 10.5-11.2 4.1-1.4 8.7-1.1 12.7.7 2.6 1.2 4.9 3.1 6.6 5.5l1.4 2 8.3-7.5-1.5-1.5c-4.9-5.2-11.5-8.5-18.7-9.4-2.8-.4-6.2-.4-8.8-.1zm-1.8 14.5c-4.3 1.1-7.5 4.5-8.4 8.8-.7 3.3-.2 6.6 1.4 9.4 2 3.6 5.6 5.8 9.7 6 3.7.2 7.1-1.5 9.4-4.6.9-1.2 1.3-2.1 1.3-3.7s-.4-2.5-1.3-3.7c-2.3-3.1-5.7-4.8-9.4-4.6-.9 0-1.8.2-2.7.4z" fill="#76B900" />
          <path d="M68.2 10.2C59.6 3.6 48.9.2 38.1.7 23.2 1.4 9.9 10.6 4.2 24.3.4 33.3-.7 43.6 1.2 53.1c3.5 17.5 16.5 31.2 33.4 35.2 7.9 1.9 16.5 1.6 24.3-.9 11-3.6 20.3-11.7 25.8-22.3 2.8-5.4 4.3-11.5 4.3-17.6 0-3.3-.4-6.6-1.3-9.8l-1.1-3.9-9.8 8.7.6 2.4c.8 3.2.9 6.8.2 10-1.6 7.4-6.8 13.5-13.8 16.2-5.4 2.1-11.3 2.1-16.7.1-8.5-3.1-14.7-10.4-16.1-19.4-.7-4.4-.1-9 1.7-13.1 3.2-7.3 9.4-12.4 17.1-14 3.7-.8 7.6-.6 11.2.6 5 1.7 9.4 5 12.3 9.4l1.5 2.3 9.4-8.4-1.7-1.8c-4.4-4.6-9.8-8.1-15.8-10.3-4.4-1.6-8.9-2.4-13.6-2.4z" fill="#76B900" />
        </svg>
      ),
    },
    {
      name: "HCL TECH",
      desc: "Global IT & Engineering Ecosystem",
      logo: (
        <svg width="34" height="20" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6h6.5v9.5h9V6H24v24h-6.5v-9.5h-9V30H2V6z" fill="#004F9F" />
          <path d="M42 6h-8.5c-4.5 0-8 3.5-8 8v8c0 4.5 3.5 8 8 8h8.5v-5.5h-7.5c-1.5 0-2.5-1-2.5-2.5v-7c0-1.5 1-2.5 2.5-2.5h7.5V6z" fill="#004F9F" />
          <path d="M47 6h6.5v18.5H65V30H47V6z" fill="#004F9F" />
          <path d="M70 12h20v4.5h-7.5V30H76V16.5H70V12z" fill="#00A3E0" />
          <circle cx="94" cy="22" r="3" fill="#00A3E0" />
        </svg>
      ),
    },
    {
      name: "ICT ACADEMY",
      desc: "Institutional Skilling Partner",
      logo: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M12 24c0-6.627 5.373-12 12-12 4.97 0 9.25 3.018 11.08 7.32" stroke="#004B87" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 24c0 6.627-5.373 12-12 12-4.97 0-9.25-3.018-11.08-7.32" stroke="#F37021" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="24" r="4.5" fill="#004B87" />
          <circle cx="35" cy="19.32" r="2.5" fill="#F37021" />
          <circle cx="13" cy="28.68" r="2.5" fill="#004B87" />
        </svg>
      ),
    },
    {
      name: "TNSDC",
      desc: "Apex State Skill Mission",
      logo: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="18" fill="#0D6838" fillOpacity="0.08" stroke="#0D6838" strokeWidth="1.2" />
          <path d="M24 11l9 5.5-9 5.5-9-5.5 9-5.5z" fill="#0D6838" />
          <path d="M18 19.5v5c0 2.8 2.7 4.5 6 4.5s6-1.7 6-4.5v-5" stroke="#0D6838" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M33 16.5v7" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="33" cy="24.5" r="1.5" fill="#D97706" />
          <path d="M13 36c3.5-3 7.5-4 11-4s7.5 1 11 4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "FICCI",
      desc: "Industry Apex Body & Network",
      logo: (
        <svg width="32" height="22" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="42" rx="4" fill="#C51A1B" />
          <text x="32" y="26" fontFamily="'Arial Black', 'Inter', sans-serif" fontSize="16" fontWeight="900" fill="#ffffff" textAnchor="middle" letterSpacing="1.2">FICCI</text>
          <line x1="8" y1="33" x2="56" y2="33" stroke="#FFD700" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  // Duplicate metrics for a seamless, continuous infinite horizontal marquee
  const marqueeMetrics = [...metrics, ...metrics, ...metrics];

  return (
    <section className="stats-section-root">
      <div className="container">
        {/* Trusted By Industry Leaders with Logos */}
        <div className="leaders-top-strip">
          <span className="leaders-eyebrow">{t("hero.trustLabel", { defaultValue: "TRUSTED BY INDUSTRY LEADERS" })}</span>
          <div className="leaders-name-grid">
            {leadersWithLogos.map((ldr) => (
              <div key={ldr.name} className="leader-badge-item">
                <div className="leader-logo-icon">{ldr.logo}</div>
                <div className="leader-info-block">
                  <span className="leader-name">{ldr.name}</span>
                  <span className="leader-desc">{ldr.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Statistics Animated Horizontal Marquee / Track */}
        <div className="stats-marquee-wrapper">
          <div className="stats-marquee-track">
            {marqueeMetrics.map((stat, idx) => (
              <div key={`${stat.label}-${idx}`} className="stat-pill-cell">
                <span className={`stat-huge-number text-${stat.color || "green"}`}>
                  {stat.value}
                </span>
                <span className="stat-label-text">{getTranslatedLabel(stat.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
