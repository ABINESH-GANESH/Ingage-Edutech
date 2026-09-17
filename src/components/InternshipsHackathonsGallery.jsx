import React from "react";
import { ArrowRight, Trophy, Award, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { approvedData } from "../data/approvedData";
import "./InternshipsHackathonsGallery.css";

export default function InternshipsHackathonsGallery({ onNavigate }) {
  const { internshipsAndHackathons } = approvedData;

  const handleNavigateHackathons = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("/hackathons");
    } else {
      window.location.href = "/hackathons";
    }
  };

  const handleNavigateInternships = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("/internships");
    } else {
      window.location.href = "/internships";
    }
  };

  return (
    <div className="experience-programs-wrap">
      {/* 1. Structured Academic Internships Section */}
      <section className="section section-white internships-root" id="internships">
        <div className="container">
          <div className="programs-split-card">
            <div className="program-text-side">
              <div className="section-eyebrow">
                <span className="eyebrow-dot"></span>
                <span>CAREER INTEGRATION</span>
              </div>
              <h2 className="section-title">{internshipsAndHackathons.internships.heading}</h2>
              <p className="program-desc-p">{internshipsAndHackathons.internships.desc}</p>
              <div className="program-metric-badge">
                <strong className="program-metric-val">{internshipsAndHackathons.internships.stat}</strong>
                <span className="program-metric-sub">Delivered Across 1,750+ Colleges</span>
              </div>
              <div className="program-actions-row" style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="/internships"
                  onClick={handleNavigateInternships}
                  className="btn btn-navy"
                >
                  <span>Explore Internships</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href={`mailto:${approvedData.brand.contact.email}?subject=Inquiry:%20College%20Internship%20Partnership`}
                  className="btn btn-outline"
                >
                  Inquire for Campus
                </a>
              </div>
            </div>

            <div className="program-highlights-side">
              <div className="program-feat-pill">
                <span className="feat-check">✓</span>
                <div>
                  <strong>Guided Industrial Mentorship</strong>
                  <p>Students work directly with verified corporate mentors and technical project leads.</p>
                </div>
              </div>
              <div className="program-feat-pill">
                <span className="feat-check">✓</span>
                <div>
                  <strong>Capstone Deployment</strong>
                  <p>Real GitHub repositories, cloud deployments, and verified project deliverables.</p>
                </div>
              </div>
              <div className="program-feat-pill">
                <span className="feat-check">✓</span>
                <div>
                  <strong>Placement Acceleration</strong>
                  <p>Top performers directly recommended into corporate hiring pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. National Innovation Hackathons Section */}
      <section className="section section-subtle hackathons-home-root" id="hackathons">
        <div className="container">
          <div className="programs-split-card reverse-split">
            <div className="program-highlights-side">
              <div className="program-feat-pill">
                <Trophy size={20} className="feat-trophy-icon" />
                <div>
                  <strong>₹25L+ Annual Cash Grants</strong>
                  <p>Competitive prize money distributed directly to top student innovator teams.</p>
                </div>
              </div>
              <div className="program-feat-pill">
                <Shield size={20} className="feat-shield-icon" />
                <div>
                  <strong>Industry Jury Evaluation</strong>
                  <p>Solutions scored by senior architects and security directors from tech giants.</p>
                </div>
              </div>
              <div className="program-feat-pill">
                <Sparkles size={20} className="feat-sparkle-icon" />
                <div>
                  <strong>Direct Placement Fast-Tracks</strong>
                  <p>Winners &amp; finalist teams qualify for direct core technical interviews.</p>
                </div>
              </div>
            </div>

            <div className="program-text-side">
              <div className="section-eyebrow">
                <span className="eyebrow-dot" style={{ backgroundColor: "#15428f" }}></span>
                <span>COMPETITIVE ARENAS</span>
              </div>
              <h2 className="section-title">{internshipsAndHackathons.hackathons.heading}</h2>
              <p className="program-desc-p">{internshipsAndHackathons.hackathons.desc}</p>
              <div className="program-metric-badge" style={{ borderColor: "#bfdbfe" }}>
                <strong className="program-metric-val" style={{ color: "#15428f" }}>
                  {internshipsAndHackathons.hackathons.stat}
                </strong>
                <span className="program-metric-sub">Cloud • AI • Drone • IoT • VR</span>
              </div>
              <div style={{ marginTop: "24px" }}>
                <a
                  href="/hackathons"
                  onClick={handleNavigateHackathons}
                  className="btn btn-primary"
                  style={{ backgroundColor: "#15428f", color: "#ffffff" }}
                >
                  <span>Explore Hackathons Portal</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
