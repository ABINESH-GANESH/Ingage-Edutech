import React, { useState, useEffect, useRef } from "react";
import CoESetupModal from "../components/CoESetupModal";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import "./CenterOfExcellence.css";

export default function CenterOfExcellence({ onNavigateHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("drone-tech");

  const statCards = [
    { value: "₹1.5 Cr", label: "Value Delivered", sub: "Enterprise tooling & hardware" },
    { value: "₹1.2 Cr", label: "Tech Stack FREE", sub: "Licensed curricula & sandboxes" },
    { value: "5", label: "Domains of Choice", sub: "Turnkey specialized tracks" },
    { value: "75+", label: "CoE Labs Built", sub: "Across premier institutions" },
  ];

  const coeCards = [
    {
      id: "drone-tech",
      title: "Drone Tech",
      description: "Autonomous UAV assembly, telemetry flight controllers, drone mapping, and DGCA-compliant pilot training setups.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/coe/drone-lab.jpg",
    },
    {
      id: "agritech",
      title: "AgriTech",
      description: "Precision agriculture IoT sensors, soil moisture spectral telemetry, smart greenhouse controls, and crop health models.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/coe/agritech-lab.jpg",
    },
    {
      id: "metaverse",
      title: "Metaverse",
      description: "Spatial computing hardware, Unity/Unreal XR simulation suites, haptic feedback testbeds, and multi-user digital twins.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/coe/metaverse-lab.jpg",
    },
    {
      id: "robotics",
      title: "Robotics",
      description: "6-axis robotic arm articulation, ROS 2 firmware integration, industrial PLC programming, and kinematics test stations.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/coe/robotics-lab.jpg",
    },
    {
      id: "embedded",
      title: "Embedded",
      description: "ARM Cortex architectures, FreeRTOS microkernel programming, PCB design workstations, and hardware-in-the-loop debugging.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/coe/embedded-lab.jpg",
    },
    {
      id: "edge-iot",
      title: "Edge & IoT",
      description: "Industrial MQTT telemetry test benches, smart sensor arrays, edge AI inferencing nodes, and SCADA gateway integration.",
      bottomLabel: "Hardware & Software Calibrated",
      image: "/assets/campus/cloud-lab.jpg",
    },
  ];

  const institutionalValues = [
    {
      id: "student-outcomes",
      icon: "🎓",
      title: "Student Outcomes",
      gradientClass: "val-gradient-blue-green",
      points: [
        "Immersive internships inside actual enterprise sandboxes",
        "Dedicated corporate placement drives with verified pipelines",
        "Exclusive access nodes to regional and national hackathons",
        "Direct weekly industry mentorship with senior engineers",
      ],
    },
    {
      id: "institution-benefits",
      icon: "🏫",
      title: "Institution Benefits",
      gradientClass: "val-gradient-green",
      points: [
        "Full audit-ready NAAC/NBA criteria documentation support",
        "Co-branding credentials as an official Google Partner College",
        "Faculty Development Program (FDP) advanced cloud modules",
        "Formalized institutional MOU sign-off with InGage",
      ],
    },
    {
      id: "innovation-support",
      icon: "🚀",
      title: "Innovation Support",
      gradientClass: "val-gradient-purple-pink",
      points: [
        "Pre-seed incubation lifecycles for student startups",
        "Direct funding pathways for verified prototype builds",
        "Live masterclass collaborations with emerging tech leaders",
        "Multi-disciplinary project labs running active R&D nodes",
      ],
    },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, []);

  const handleOpenSetup = (domainId = "drone-tech") => {
    setSelectedDomain(domainId);
    setIsModalOpen(true);
  };

  return (
    <div className="coe-page-root">
      {/* SECTION 1: HERO / INSTITUTIONAL UPGRADE PORTAL */}
      <section className="coe-hero-section">
        <div className="container">
          <div className="coe-hero-header center-text">
            {/* Small badge */}
            <div className="section-eyebrow coe-hero-badge coe-hero-badge-brand">
              <span className="eyebrow-dot" />
              <Sparkles size={13} className="text-brand-green" />
              <span>INSTITUTIONAL UPGRADE PORTAL</span>
            </div>

            {/* Main heading */}
            <h1 className="coe-hero-main-heading">
              Upgrade Your Existing Lab into a <span className="brand-navy-text">₹1.5 Crore</span>{" "}
              <span className="brand-green-text">Centre of Excellence</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="coe-hero-lead-text">
              The InGage CoE transforms standard hardware installations into an industrial emerging technology hub. We handle end-to-end setups, from raw hardware procurement and licensing to custom curriculum design and specialized training delivery across five technical domains.
            </p>
          </div>

          {/* Flagship Turnkey CoE Lab Hero Visual Showcase */}
          <div className="coe-hero-visual-wrap">
            <div className="coe-hero-image-card">
              <video
                ref={videoRef}
                src="/videos/CoE%20Full%20Promo.mp4"
                poster="/assets/coe/coe-flagship-hero.jpg"
                className="coe-hero-img coe-hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
                aria-label="InGage Centre of Excellence Lab Setup Promo Video"
              >
                <source src="/videos/CoE%20Full%20Promo.mp4" type="video/mp4" />
                <source src="/videos/CoE Full Promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="coe-hero-img-overlay" aria-hidden="true" />

              {/* Floating Status Badges */}
              <div className="coe-hero-float-badge top-left">
                <Sparkles size={14} className="badge-icon-green" />
                <span>₹1.5 Crore Turnkey Installation</span>
              </div>

              <div className="coe-hero-float-badge bottom-left">
                <Building2 size={14} className="badge-icon-green" />
                <span>Industrial Hardware &amp; Telemetry Calibration</span>
              </div>

              <div className="coe-hero-float-badge bottom-right">
                <ShieldCheck size={14} className="badge-icon-green" />
                <span>Audit Ready • AICTE / NAAC / NBA</span>
              </div>

              {/* Action Trigger inside Image Card */}
              <div className="coe-hero-img-action-bar">
                <div className="coe-hero-img-action-info">
                  <span className="live-dot" />
                  <span>Live Production Lab Setup • Turnkey Deployment in 45 Days</span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary coe-hero-img-btn"
                  onClick={() => handleOpenSetup("drone-tech")}
                >
                  Request Lab Audit &amp; Setup Plan <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Statistic Cards */}
          <div className="coe-stat-cards-grid">
            {statCards.map((stat, idx) => (
              <div
                key={idx}
                className={`coe-stat-card ${idx === 1 || idx === 3 ? "coe-stat-highlight-green" : ""}`}
              >
                <div
                  className={`coe-stat-value ${
                    idx === 1 || idx === 3 ? "stat-green-text" : "stat-navy-text"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="coe-stat-label">{stat.label}</div>
                <div className="coe-stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPLETE CENTER OF EXCELLENCE */}
      <section className="section section-page coe-turnkey-section" id="coe-domains">
        <div className="container">
          <div className="section-header center-text">
            <div className="section-eyebrow coe-hero-badge-brand">
              <span className="eyebrow-dot" />
              <Sparkles size={13} className="text-brand-green" />
              <span>ON-CAMPUS TURNKEY INFRASTRUCTURE</span>
            </div>
            <h2 className="section-title">
              Complete <span className="brand-navy-text">Centre of</span>{" "}
              <span className="brand-green-text">Excellence</span>
            </h2>
            <p className="section-subtitle">
              End-to-end turnkey physical laboratory setups engineered to transform campus infrastructure into Industry 4.0 innovation hubs.
            </p>
          </div>

          {/* Responsive CoE Cards Grid */}
          <div className="coe-cards-grid">
            {coeCards.map((card) => (
              <div key={card.id} className="coe-showcase-card">
                {/* Large image area */}
                <div className="coe-card-image-wrap">
                  <img
                    src={card.image}
                    alt={`${card.title} Laboratory`}
                    className="coe-card-image"
                    decoding="async"
                  />
                  <div className="coe-card-img-badge">
                    <span>{card.title}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="coe-card-content">
                  <h3 className="coe-card-title">{card.title}</h3>
                  <p className="coe-card-description">{card.description}</p>
                </div>

                {/* Bottom Action Bar */}
                <div className="coe-card-action-bar">
                  <span className="coe-card-bottom-label">
                    {card.bottomLabel}
                  </span>
                  <button
                    type="button"
                    className="btn btn-hero-cta btn-coe-card-cta"
                    onClick={() => handleOpenSetup(card.id)}
                  >
                    <span>Setup CoE</span>
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INSTITUTIONAL VALUES */}
      <section className="section section-white coe-values-section">
        <div className="container">
          <div className="section-header center-text">
            <div className="section-eyebrow coe-hero-badge-brand">
              <span className="eyebrow-dot" />
              <Sparkles size={13} className="text-brand-green" />
              <span>RETURN ON INVESTMENT</span>
            </div>
            <h2 className="section-title">
              Institutional <span className="brand-navy-text">Upgrade</span> &amp;{" "}
              <span className="brand-green-text">Accreditation</span> Value
            </h2>
            <p className="section-subtitle">
              Detailed outcomes mapping student milestones, compliance documentation, and innovation pipelines.
            </p>
          </div>

          {/* Three Large Responsive Cards with Colorful Gradient Concepts */}
          <div className="coe-values-grid">
            {institutionalValues.map((val) => (
              <div key={val.id} className={`coe-value-card ${val.gradientClass}`}>
                <div className="coe-value-card-header">
                  <span className="coe-value-icon">{val.icon}</span>
                  <h3 className="coe-value-title">{val.title}</h3>
                </div>

                <div className="coe-value-divider" />

                <ul className="coe-value-points">
                  {val.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="value-check-icon text-brand-green" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SPECIAL OFFER ANNOUNCEMENT BANNER */}
      <section className="coe-special-offer-section">
        <div className="container">
          <div className="coe-special-offer-banner">
            <div className="offer-main-content">
              <div className="offer-heading-row">
                <span className="offer-gift-icon">🎁</span>
                <span className="offer-main-text">
                  SPECIAL OFFER: INTEGRATION COST WAIVED FOR THE FIRST 15 PARTNER INSTITUTIONS.
                </span>
              </div>
            </div>
            <div className="offer-supporting-badge">
              <span>350+ students · Min. 3 courses/semester</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="coe-cta-section">
        <div className="container">
          <div className="coe-cta-box center-text">
            <h2 className="coe-cta-title">
              Ready to Establish an <span className="brand-green-text">Industry 4.0 CoE</span> on Your{" "}
              <span className="brand-navy-text">Campus</span>?
            </h2>
            <p className="coe-cta-desc">
              Connect with our senior academic consultants for an immediate lab space assessment and customized institutional blueprint.
            </p>

            <button
              type="button"
              className="btn btn-hero-cta btn-cta-large"
              onClick={() => handleOpenSetup("drone-tech")}
            >
              <span>Partner With Us</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive CoE Setup Modal */}
      <CoESetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedDomain={selectedDomain}
      />
    </div>
  );
}
