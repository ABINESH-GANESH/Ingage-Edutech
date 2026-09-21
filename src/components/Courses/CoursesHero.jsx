import React, { useState, useEffect } from "react";
import { Sparkles, ArrowDown, Award, BookOpen, Layers, CheckCircle } from "lucide-react";
import { coursesHeroData } from "../../data/coursesData";
import "./CoursesHero.css";

// Vector Logos for Course Technologies & Enterprise Certifications
function GoogleCloudVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 40 32" className={className} aria-label="Google Cloud" role="img">
      <path d="M29.5 15.6c-.8-4.4-4.7-7.6-9.3-7.6-3.7 0-6.9 2.1-8.5 5.1-3.9.4-6.8 3.7-6.8 7.6 0 4.2 3.5 7.6 7.6 7.6h16.5c3.5 0 6.4-2.8 6.4-6.4 0-3.3-2.6-6-5.9-6.3z" fill="#4285F4"/>
      <path d="M29.5 15.6c-.8-4.4-4.7-7.6-9.3-7.6-2 0-3.9.6-5.3 1.8l5.4 5.4c.4-.1.8-.1 1.3-.1 2.4 0 4.4 2 4.4 4.4 0 .4 0 .8-.1 1.3l3.7 3.7c1.5-1.1 2.4-2.9 2.4-5 0-3.3-2.6-6-5.9-6.3z" fill="#EA4335"/>
      <path d="M11.7 13.1c-1.6 3-1.6 6.6 0 9.6l5.6-5.6c-.6-.7-1.1-1.7-1.5-2.7l-4.1-1.3z" fill="#FBBC05"/>
      <path d="M11.7 22.7c.9 1.9 2.6 3.2 4.6 3.9l4.5-4.5c-.6-.2-1.3-.5-1.8-1l-7.3 1.6z" fill="#34A853"/>
    </svg>
  );
}

function PythonVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 110 110" className={className} aria-label="Python" role="img">
      <path fill="#387EB8" d="M54.5 0C24.4 0 26.3 13 26.3 13l.03 13.5h28.7v4.1H15.1S0 28.9 0 59.1c0 30.1 13.2 29 13.2 29h7.9V76.9s-.4-13.7 13.4-13.7h28.4s12.9.2 12.9-12.6V13.2S78.2 0 54.5 0zm-15.6 9c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"/>
      <path fill="#FFE052" d="M55.5 110c30.1 0 28.2-13 28.2-13l-.03-13.5H55V79.4h39.9s15.1 1.7 15.1-28.5c0-30.1-13.2-29-13.2-29h-7.9v11.2s.4 13.7-13.4 13.7H47.1s-12.9-.2-12.9 12.6v37.4s-2.4 13.2 21.3 13.2zm15.6-9c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"/>
    </svg>
  );
}

function FigmaVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 38 57" className={className} aria-label="Figma" role="img">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  );
}

function TensorFlowVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="TensorFlow" role="img">
      <polygon fill="#FF6F00" points="50,5 95,30 95,75 75,63.5 75,41.5 50,27 50,95 25,80.5 25,35 5,23.5 5,30 50,5"/>
      <polygon fill="#FFA800" points="50,5 50,27 25,41.5 25,63.5 5,75 5,30 50,5"/>
      <polygon fill="#FF6F00" points="50,27 75,41.5 75,63.5 95,75 95,85 50,95"/>
    </svg>
  );
}

function CybersecurityShieldVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Cybersecurity" role="img">
      <path fill="#0F62FE" d="M32 2L8 12v18c0 15.5 10.2 30 24 34 13.8-4 24-18.5 24-34V12L32 2z"/>
      <path fill="#15428F" d="M32 6v53.8c11.5-3.8 20-16.1 20-29.8V15.2L32 6z"/>
      <circle cx="32" cy="28" r="7" fill="#ffffff"/>
      <path d="M26 38h12v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8z" fill="#00D084"/>
      <circle cx="32" cy="28" r="3" fill="#0F172A"/>
    </svg>
  );
}

function DataAnalyticsVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Data Analytics" role="img">
      <rect x="8" y="34" width="10" height="22" rx="3" fill="#4285F4"/>
      <rect x="22" y="22" width="10" height="34" rx="3" fill="#34A853"/>
      <rect x="36" y="12" width="10" height="44" rx="3" fill="#FBBC05"/>
      <rect x="50" y="4" width="10" height="52" rx="3" fill="#EA4335"/>
      <polyline points="13,30 27,18 41,8 55,2" fill="none" stroke="#15428F" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="55" cy="2" r="4" fill="#15428F"/>
    </svg>
  );
}

function NvidiaBadgeVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-label="NVIDIA" role="img">
      <g transform="translate(4, 2) scale(0.9)">
        <path fill="#76B900" d="M29.5 0C13.2 0 0 13.2 0 29.5c0 10.9 6 20.5 14.8 25.5-1.1-3.6-1.7-7.5-1.7-11.5C13.1 24 28.5 11 44.5 17.5 40 7.3 30.5 0 29.5 0z"/>
        <path fill="#76B900" d="M29.5 9.8c-10.9 0-19.7 8.8-19.7 19.7 0 7.3 4 13.7 9.9 17-1-2.4-1.5-5.1-1.5-7.8 0-9.2 7.5-16.7 16.7-16.7 3.8 0 7.3 1.3 10.1 3.4-3.8-9.4-10-15.6-15.5-15.6z"/>
        <path fill="#76B900" d="M29.5 19.6c-5.5 0-9.9 4.4-9.9 9.9 0 3.7 2 6.9 5 8.6-.6-1.3-.9-2.7-.9-4.2 0-4.6 3.8-8.4 8.4-8.4 2.1 0 4 .8 5.5 2.1-1.9-5-5-8-8.1-8z"/>
      </g>
    </svg>
  );
}

function OracleBadgeVector({ className = "tech-vector-icon" }) {
  return (
    <svg viewBox="0 0 270 40" className={className} aria-label="Oracle" role="img">
      <path fill="#EA1B25" d="M16.74 37.5h19.4a16.74 16.74 0 0 0 0-33.48H16.74a16.74 16.74 0 1 0 0 33.48zm18.99-5.9h-18.57a10.84 10.84 0 0 1 0-21.68h18.57a10.84 10.84 0 0 1 0 21.68zM84.45 26.68a11.27 11.27 0 0 0 0-22.54H56.32v33.48h6.43V6.25h20.98a5.42 5.42 0 0 1 0 10.84H65.93l19.23 16.53h9.34l-13.7-11.77h3.65zm27.7 -0.97h17.17l-9.08-14.65-8.09 14.65zm-8.56 11.79h-7.63l20.28-31.75a4.83 4.83 0 0 1 7.89-.06l20.57 31.81h-7.58l-3.57-5.91h-26.38l-3.58 5.91zm45.82 0h19.86l3.76-5.9h-19.34a10.84 10.84 0 1 1 0-21.68h18.88l3.81-5.9h-23.41a16.74 16.74 0 1 0 0 33.48zm33 0V4.02h-6.44v30.29a3.11 3.11 0 0 0 .96 2.25 3.26 3.26 0 0 0 2.34.98h29.31l3.82-5.9h-29.99zm45.72-5.9a10.84 10.84 0 0 1-10.44-7.89h27.52l3.79-5.9h-31.31a10.83 10.83 0 0 1 10.44-7.89h18.89l3.77-5.9h-23.1a16.74 16.74 0 0 0 0 33.48h19.87l3.77-5.9h-23.2z"/>
    </svg>
  );
}

function IBMBadgeVector({ className = "tech-vector-icon" }) {
  return (
    <img
      src="/assets/brand/ibm-logo.png"
      alt="IBM"
      className={className}
      style={{
        height: "22px",
        width: "auto",
        maxWidth: "54px",
        objectFit: "contain",
        display: "inline-block",
      }}
      loading="eager"
    />
  );
}

// 6 Interactive Course Tracks for the dynamic hero showcase
const HERO_COURSE_TRACKS = [
  {
    id: "gcp-ace",
    number: "01",
    name: "Cloud Engineering",
    vendor: "Google Cloud ACE",
    icon: GoogleCloudVector,
    accent: "blue",
    skills: ["Compute Engine", "Kubernetes", "IAM Security", "Terraform"],
    tag: "CLOUD INFRASTRUCTURE",
  },
  {
    id: "data-analytics",
    number: "02",
    name: "Data Analytics",
    vendor: "Google BigQuery & SQL",
    icon: DataAnalyticsVector,
    accent: "yellow",
    skills: ["BigQuery", "SQL Queries", "Tableau", "Data Pipelines"],
    tag: "BUSINESS INTELLIGENCE",
  },
  {
    id: "ai-ml",
    number: "03",
    name: "AI & Machine Learning",
    vendor: "TensorFlow & NVIDIA",
    icon: TensorFlowVector,
    accent: "orange",
    skills: ["Deep Learning", "TensorFlow", "Computer Vision", "LLMs"],
    tag: "APPLIED AI",
  },
  {
    id: "cybersecurity",
    number: "04",
    name: "Cybersecurity Defense",
    vendor: "SOC & Linux Security",
    icon: CybersecurityShieldVector,
    accent: "navy",
    skills: ["SIEM Triage", "Wireshark", "Network Defense", "Threat Intel"],
    tag: "ENTERPRISE SECURITY",
  },
  {
    id: "it-automation",
    number: "05",
    name: "IT Automation",
    vendor: "Python & Git CI/CD",
    icon: PythonVector,
    accent: "amber",
    skills: ["Python Scripting", "Git DevOps", "Puppet", "OS Automation"],
    tag: "SYSTEMS DEV",
  },
  {
    id: "ux-spatial",
    number: "06",
    name: "UX & Spatial Design",
    vendor: "Figma & Interaction",
    icon: FigmaVector,
    accent: "cyan",
    skills: ["Figma Systems", "Spatial UI", "Wireframing", "Usability"],
    tag: "PRODUCT DESIGN",
  },
];

// Marquee Brand Logos Array
const MARQUEE_TECH_ITEMS = [
  { name: "Google Cloud", Icon: GoogleCloudVector, color: "#4285F4" },
  { name: "IBM SkillsBuild", Icon: IBMBadgeVector, color: "#1F70C1" },
  { name: "Python", Icon: PythonVector, color: "#387EB8" },
  { name: "TensorFlow", Icon: TensorFlowVector, color: "#FF6F00" },
  { name: "Figma", Icon: FigmaVector, color: "#A259FF" },
  { name: "Cybersecurity", Icon: CybersecurityShieldVector, color: "#0F62FE" },
  { name: "Data Analytics", Icon: DataAnalyticsVector, color: "#34A853" },
  { name: "NVIDIA AI", Icon: NvidiaBadgeVector, color: "#76B900" },
  { name: "Oracle OCI", Icon: OracleBadgeVector, color: "#EA1B25" },
];

export default function CoursesHero({ onExploreClick, onPartnersClick }) {
  const { badge, headline, description, stats } = coursesHeroData;
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  // Auto-cycle through the 6 course tracks on the right card every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTrackIndex((prev) => (prev + 1) % HERO_COURSE_TRACKS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeTrack = HERO_COURSE_TRACKS[activeTrackIndex];
  const ActiveIconComponent = activeTrack.icon;

  return (
    <section className="courses-hero-root" id="courses-hero">
      <div className="courses-hero-grid-bg" aria-hidden="true" />
      <div className="courses-hero-light-beam" aria-hidden="true" />

      {/* Floating Animated Ambient Course Badges in Background */}
      <div className="floating-badge-layer" aria-hidden="true">
        <div className="hero-float-chip chip-1">
          <GoogleCloudVector className="float-chip-icon" />
          <span>Google Cloud ACE</span>
        </div>
        <div className="hero-float-chip chip-2">
          <PythonVector className="float-chip-icon" />
          <span>Python Automation</span>
        </div>
        <div className="hero-float-chip chip-3">
          <TensorFlowVector className="float-chip-icon" />
          <span>TensorFlow & AI</span>
        </div>
        <div className="hero-float-chip chip-4">
          <FigmaVector className="float-chip-icon" />
          <span>Figma Spatial UX</span>
        </div>
        <div className="hero-float-chip chip-5">
          <CybersecurityShieldVector className="float-chip-icon" />
          <span>SOC Cyber Defense</span>
        </div>
        <div className="hero-float-chip chip-6">
          <NvidiaBadgeVector className="float-chip-icon" />
          <span>NVIDIA Deep Learning</span>
        </div>
      </div>

      <div className="container courses-hero-container">
        <div className="courses-hero-layout">
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="courses-hero-content">
            <div className="courses-hero-badge-wrap">
              <span className="section-eyebrow courses-eyebrow-brand">
                <span className="eyebrow-dot" />
                <Sparkles size={13} className="text-brand-green" />
                {badge}
              </span>
            </div>

            <h1 className="courses-hero-title">
              GET GOOGLE CERTIFIED. <br className="hero-desktop-br" />
              <span className="brand-navy-text">GET HIRED</span>{" "}
              <span className="brand-green-text">3× FASTER</span>.
            </h1>

            <p className="courses-hero-description">
              {description}
            </p>

            <div className="courses-hero-actions">
              <button
                type="button"
                className="btn btn-primary courses-hero-btn-primary"
                onClick={onExploreClick}
                aria-label="Explore Course Tracks"
              >
                <span>Explore Tracks</span>
                <ArrowDown size={16} />
              </button>

              <button
                type="button"
                className="btn btn-secondary courses-hero-btn-secondary"
                onClick={onPartnersClick}
                aria-label="View Enterprise Partners"
              >
                <span>Enterprise Partners</span>
              </button>
            </div>

            {/* Seamless Animated Marquee / Course Tech Strip */}
            <div className="courses-hero-marquee-wrap" aria-label="Certified Course Technologies">
              <span className="marquee-lead-label">CERTIFIED TECHNOLOGY TRACKS:</span>
              <div className="marquee-track-container">
                <div className="marquee-scroll-inner">
                  {/* First Pass */}
                  {MARQUEE_TECH_ITEMS.map((item, idx) => {
                    const ItemIcon = item.Icon;
                    return (
                      <div key={`m1-${idx}`} className="marquee-pill-badge">
                        <ItemIcon className="marquee-pill-icon" />
                        <span className="marquee-pill-text">{item.name}</span>
                      </div>
                    );
                  })}
                  {/* Second Pass for Infinite Loop */}
                  {MARQUEE_TECH_ITEMS.map((item, idx) => {
                    const ItemIcon = item.Icon;
                    return (
                      <div key={`m2-${idx}`} className="marquee-pill-badge" aria-hidden="true">
                        <ItemIcon className="marquee-pill-icon" />
                        <span className="marquee-pill-text">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Track Showcase Card */}
          <div className="courses-hero-meta-side">
            <div className={`courses-stat-card card-accent-${activeTrack.accent}`}>
              {/* Dynamic Ambient Corner Glow */}
              <div className="stat-card-glow" aria-hidden="true" />

              {/* Card Header with Rotating Active Track */}
              <div className="stat-card-top">
                <div className="stat-number-box">
                  <span className="stat-number-val">{stats.count}</span>
                </div>
                <div className="stat-label-box">
                  <div className="stat-label-row">
                    <span className="stat-label-title">{stats.label}</span>
                    <span className="live-curriculum-badge">Official Curriculum</span>
                  </div>
                  <span className="stat-label-sub">Calibrated with Google, Oracle & IBM</span>
                </div>
              </div>

              {/* Animated Interactive Track Switcher Carousel */}
              <div className="hero-track-showcase-box">
                <div className="hero-track-icon-row">
                  {HERO_COURSE_TRACKS.map((track, idx) => {
                    const TrackIcon = track.icon;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        className={`hero-track-circle-btn ${idx === activeTrackIndex ? "active" : ""}`}
                        onClick={() => setActiveTrackIndex(idx)}
                        aria-label={`Select ${track.name}`}
                        title={track.name}
                      >
                        <TrackIcon className="track-circle-icon" />
                        {idx === activeTrackIndex && <span className="active-ring-pulse" />}
                      </button>
                    );
                  })}
                </div>

                {/* Active Track Highlight Details */}
                <div className="hero-active-track-panel">
                  <div className="active-track-header">
                    <div className="active-track-title-wrap">
                      <span className="active-track-tag">{activeTrack.tag}</span>
                      <h4 className="active-track-name">{activeTrack.name}</h4>
                    </div>
                    <div className="active-track-icon-badge">
                      <ActiveIconComponent className="active-badge-svg" />
                    </div>
                  </div>

                  <div className="active-track-skills-list">
                    {activeTrack.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="active-track-skill-chip">
                        <CheckCircle size={10} className="skill-check-icon text-green" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="stat-card-divider" />

              {/* Track Credential Features */}
              <div className="stat-card-features">
                <div className="stat-feature-item">
                  <BookOpen size={16} className="stat-feature-icon text-navy" />
                  <span><strong>45 Hours</strong> Structured Hands-on Learning per Track</span>
                </div>
                <div className="stat-feature-item">
                  <Layers size={16} className="stat-feature-icon text-green" />
                  <span><strong>5+ Capstone Projects</strong> in Physical & Cloud Labs</span>
                </div>
                <div className="stat-feature-item">
                  <Award size={16} className="stat-feature-icon text-navy" />
                  <span><strong>Verified Digital Badges</strong> & Placement Fast-Track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
