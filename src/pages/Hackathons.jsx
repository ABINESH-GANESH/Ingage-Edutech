import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { previousHackathons } from "../data/hackathons";
import HackathonCard from "../components/Hackathons/HackathonCard";
import "./Hackathons.css";

export default function Hackathons({ onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  useEffect(() => {
    // Ensure the page starts at top cleanly on initial mount
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleApplyClick = (contextTitle) => {
    if (onNavigate) {
      onNavigate("/apply");
    } else {
      window.location.href = "/apply";
    }
  };

  // Filter logic for previous hackathons
  const filteredPreviousHackathons = previousHackathons.filter((item) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "CLOUD" && item.domain.toLowerCase().includes("cloud")) return true;
    if (selectedFilter === "XR" && (item.domain.toLowerCase().includes("spatial") || item.domain.toLowerCase().includes("xr"))) return true;
    if (selectedFilter === "IOT" && (item.domain.toLowerCase().includes("iot") || item.domain.toLowerCase().includes("embedded"))) return true;
    return true;
  });

  return (
    <div className="hackathons-page-root">
      {/* 1. Page Header / Hero Section */}
      <section className="hackathons-hero-section" id="active-challenges">
        <div className="hackathons-container">
          <div className="hackathons-hero-lockup">
            <div className="hero-kicker-pill hackathon-kicker-brand">
              <Sparkles size={13} className="hero-kicker-icon text-brand-green" />
              <span>ACTIVE CHALLENGES</span>
            </div>

            <h1 className="hackathons-main-heading">
              Active <span className="brand-navy-text">Hackathon</span>{" "}
              <span className="brand-green-text">Arenas</span>
            </h1>

            <p className="hackathons-hero-lead">
              Step into high-stakes engineering sandboxes designed to push technical limits. Solve complex
              cloud infrastructure tasks, live hardware telemetry constraints, and distributed ledger protocols
              alongside corporate judges to win major cash grants. Candidates are assessed on modular code standards,
              version control frequency, and telemetry pipeline stability, with high-performance teams qualifying for
              direct industry recruitment fast-tracks.
            </p>

            {/* Key Metrics Strip */}
            <div className="hackathons-hero-stats-row">
              <div className="hero-stat-card">
                <span className="hero-stat-number stat-navy">50+</span>
                <span className="hero-stat-label">HACKATHONS / YEAR</span>
              </div>
              <div className="hero-stat-card stat-highlight-green">
                <span className="hero-stat-number stat-green">₹25L+</span>
                <span className="hero-stat-label">ANNUAL CASH GRANTS</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-number stat-navy">1,750+</span>
                <span className="hero-stat-label">COLLEGIATE PARTNERS</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-number stat-navy">100%</span>
                <span className="hero-stat-label">INDUSTRY-JURIED DEFENSE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Previous Hackathons Archive Section */}
      <section className="hackathons-archive-section" id="archive">
        <div className="hackathons-container">
          <div className="archive-section-header">
            <div className="archive-title-lockup">
              <div className="archive-kicker-pill archive-kicker-brand">
                <Award size={13} className="archive-kicker-icon text-brand-green" />
                <span>PREVIOUS HACKATHONS ARCHIVE</span>
              </div>

              <h2 className="archive-main-heading">
                Explore <span className="brand-navy-text">Past Challenges</span>
              </h2>

              <p className="archive-lead-desc">
                Explore complete technical parameters, structural evaluation criteria, and the prestigious
                winners and runners-up from our past academic semesters.
              </p>
            </div>

            {/* Quick Filter Pill Buttons */}
            <div className="archive-filter-bar">
              <span className="filter-bar-label">
                <Filter size={13} />
                Domain:
              </span>
              <div className="filter-pill-group">
                <button
                  type="button"
                  className={`filter-btn ${selectedFilter === "ALL" ? "is-active" : ""}`}
                  onClick={() => setSelectedFilter("ALL")}
                >
                  All Challenges ({previousHackathons.length})
                </button>
                <button
                  type="button"
                  className={`filter-btn ${selectedFilter === "CLOUD" ? "is-active" : ""}`}
                  onClick={() => setSelectedFilter("CLOUD")}
                >
                  Cloud Security
                </button>
                <button
                  type="button"
                  className={`filter-btn ${selectedFilter === "XR" ? "is-active" : ""}`}
                  onClick={() => setSelectedFilter("XR")}
                >
                  VR &amp; Spatial
                </button>
                <button
                  type="button"
                  className={`filter-btn ${selectedFilter === "IOT" ? "is-active" : ""}`}
                  onClick={() => setSelectedFilter("IOT")}
                >
                  IoT &amp; Edge
                </button>
              </div>
            </div>
          </div>

          {/* 3 Detailed Previous Hackathon Cards */}
          <div className="previous-hackathons-list">
            {filteredPreviousHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Host a Hackathon on Campus CTA Banner */}
      <section className="hackathon-host-cta-section">
        <div className="hackathons-container">
          <div className="host-cta-card">
            <div className="host-cta-content">
              <span className="host-cta-kicker">INSTITUTIONAL INTEGRATION</span>
              <h3 className="host-cta-title">Host an InGage Hackathon Arena at Your Institution</h3>
              <p className="host-cta-text">
                Partner with InGage EduTech to organize certified regional hackathons equipped with turnkey hardware
                benches, cloud sandboxes, corporate jury panels, and corporate sponsorship grants.
              </p>
              <div className="host-cta-features">
                <div className="host-feature-item">
                  <CheckCircle2 size={15} className="host-feat-icon" />
                  <span>Turnkey Hardware &amp; Sensor Benches</span>
                </div>
                <div className="host-feature-item">
                  <CheckCircle2 size={15} className="host-feat-icon" />
                  <span>Corporate Mentors &amp; Jury Evaluators</span>
                </div>
                <div className="host-feature-item">
                  <CheckCircle2 size={15} className="host-feat-icon" />
                  <span>Direct Corporate Placement Pipelines</span>
                </div>
              </div>
            </div>

            <div className="host-cta-actions">
              <button
                type="button"
                className="host-cta-btn primary-btn"
                onClick={() => handleApplyClick("Host a Hackathon")}
              >
                <span>Partner to Host on Campus</span>
                <ArrowRight size={14} />
              </button>
              <a
                href="mailto:sriharsha@myingage.com?subject=InGage%20EduTech%20Hackathon%20Partnership"
                className="host-cta-btn secondary-btn"
              >
                <span>Speak with Academic Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
