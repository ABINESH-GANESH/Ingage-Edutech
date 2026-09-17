import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Users,
  MapPin,
  Cpu,
  CheckCircle,
  Compass
} from "lucide-react";
import { careersHeroData } from "../../data/careersData";
import "./CareersHero.css";

// 6-Phase Cinematic Narrative Story Beats
const STORY_BEATS = [
  { id: "01", label: "01 · LEARN", title: "Immersive Learning", desc: "Interact with real-world digital curricula & cloud sandboxes" },
  { id: "02", label: "02 · BUILD", title: "Hands-on Engineering", desc: "Code production pipelines, IoT nodes & 3D digital twins" },
  { id: "03", label: "03 · EXPERIENCE", title: "Spatial Computing", desc: "Enterprise AR/VR headsets & physical-digital simulation" },
  { id: "04", label: "04 · COLLABORATE", title: "Cross-Functional Squads", desc: "Engineers, 3D artists & researchers solving hard problems" },
  { id: "05", label: "05 · INNOVATE", title: "Applied AI & Robotics", desc: "Computer vision, edge intelligence & autonomous systems" },
  { id: "06", label: "06 · CAREER", title: "Impactful Growth", desc: "Lead mission-critical engineering for 500,000+ learners" },
];

export default function CareersHero({ onExploreClick, onSectionJump }) {
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Auto-advance narrative story beats
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBeatIndex((prev) => (prev + 1) % STORY_BEATS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Ensure video plays smoothly on mount (muted autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const statIcons = [
    <Users key="users" size={18} className="text-green stat-icon" />,
    <MapPin key="pin" size={18} className="text-green stat-icon" />,
    <Cpu key="cpu" size={18} className="text-green stat-icon" />,
    <CheckCircle key="check" size={18} className="text-green stat-icon" />,
  ];

  return (
    <section className="careers-hero-fullscreen-root" id="careers-hero">
      {/* ============================================================
          FULL-SCREEN BACKGROUND VIDEO LAYER (From public/videos/)
          ============================================================ */}
      <div className="careers-fullscreen-video-container" aria-hidden="true">
        {!videoError ? (
          <video
            ref={videoRef}
            className={`careers-fullscreen-bg-video ${videoLoaded ? "video-ready" : ""}`}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            {/* Primary Source from public/videos/ */}
            <source src="/videos/career-animation.mp4" type="video/mp4" />
            <source src="/videos/Untitled video (17).mp4" type="video/mp4" />
            <source src="/videos/careers-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="careers-fullscreen-fallback-backdrop" />
        )}

        {/* Cinematic Deep Vignette Overlays & Tint */}
        <div className="careers-video-dark-scrim" />
        <div className="careers-video-radial-glow" />
        <div className="careers-video-tech-grid" />
      </div>

      {/* ============================================================
          MAIN HERO FOREGROUND CONTENT
          ============================================================ */}
      <div className="container careers-fullscreen-hero-content">
        {/* Eyebrow Pill */}
        <div className="careers-hero-eyebrow-wrap">
          <span className="careers-hero-eyebrow">
            <span className="eyebrow-pulse-dot" />
            <Sparkles size={13} className="hero-eyebrow-icon" />
            CAREERS AT INGAGE · EXPLORE WHAT'S NEXT
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="careers-hero-fullscreen-title">
          BUILD YOUR FUTURE <br />
          <span className="title-gradient-accent">WITH INGAGE</span>
        </h1>

        {/* Tagline */}
        <p className="careers-hero-tagline">
          WHERE TECHNOLOGY MEETS OPPORTUNITY
        </p>

        {/* Lead Narrative */}
        <p className="careers-hero-fullscreen-lead">
          Learn, build and grow with a team exploring the technologies shaping tomorrow — across AR/VR, AI, IoT, robotics, and 3D digital twins.
        </p>

        {/* Primary Action Buttons */}
        <div className="careers-hero-actions-row">
          <button
            type="button"
            className="btn btn-primary careers-btn-primary"
            onClick={onExploreClick}
            aria-label="Explore Open Career Opportunities"
          >
            <span>EXPLORE OPPORTUNITIES</span>
            <ArrowRight size={16} className="btn-arrow-icon" />
          </button>

          <button
            type="button"
            className="btn btn-glass-secondary careers-btn-glass"
            onClick={() => onSectionJump && onSectionJump("life-at-ingage")}
            aria-label="Learn about life at InGage"
          >
            <span>MEET OUR TEAM</span>
            <ArrowDown size={14} className="btn-arrow-down" />
          </button>
        </div>

        {/* Interactive Narrative Storyline Stepper */}
        <div className="careers-fullscreen-stepper-wrap" aria-label="Career Journey Phases">
          <div className="careers-story-stepper">
            {STORY_BEATS.map((beat, idx) => (
              <button
                key={beat.id}
                type="button"
                className={`careers-story-beat-tab ${idx === activeBeatIndex ? "active" : ""}`}
                onClick={() => setActiveBeatIndex(idx)}
                aria-label={`Show ${beat.title}`}
              >
                <span className="beat-tab-num">{beat.id}</span>
                <span className="beat-tab-label">{beat.label.split(" · ")[1]}</span>
                {idx === activeBeatIndex && <span className="beat-active-line" />}
              </button>
            ))}
          </div>
          <div className="careers-active-beat-preview">
            <span className="active-beat-tag">{STORY_BEATS[activeBeatIndex].title}</span>
            <span className="active-beat-sep">—</span>
            <span className="active-beat-desc">{STORY_BEATS[activeBeatIndex].desc}</span>
          </div>
        </div>

        {/* Live HUD Floating Tag */}
        <div className="careers-hero-hud-strip">
          <div className="hud-live-tag">
            <span className="hud-live-dot" />
            <span>LIVE LAB TELEMETRY</span>
          </div>
          <div className="hud-tech-cluster">
            <span>AR · VR · AI · ROBOTICS · 3D TWINS</span>
          </div>
          <div className="hud-location-badge">
            <Compass size={13} className="text-green" />
            <span>CHENNAI INNOVATION HQ</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="careers-hero-stats-bar">
          <div className="careers-stats-grid">
            {careersHeroData.stats.map((stat, idx) => (
              <div key={idx} className="careers-stat-cell">
                <div className="stat-cell-top">
                  <span className="stat-icon-wrap">{statIcons[idx % statIcons.length]}</span>
                  <span className="stat-number">{stat.value}</span>
                </div>
                <span className="stat-text-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="careers-scroll-explore-wrap">
          <button
            type="button"
            className="careers-scroll-explore-btn"
            onClick={() => onSectionJump && onSectionJump("opportunities")}
            aria-label="Scroll down to career opportunities"
          >
            <span className="scroll-explore-text">SCROLL TO EXPLORE</span>
            <div className="scroll-mouse-icon">
              <div className="scroll-wheel-dot" />
            </div>
          </button>
        </div>
      </div>

      {/* Seamless Bottom Gradient Fade into next section */}
      <div className="careers-hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
