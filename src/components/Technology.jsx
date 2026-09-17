import { useState } from "react";
import "./Technology.css";

export default function Technology() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const techStack = [
    {
      id: "ar",
      code: "AR",
      name: "Augmented Reality",
      summary: "Spatial anchors & real-time contextual overlays",
      details:
        "High-precision markerless tracking and persistent spatial anchors that project interactive holographic information onto physical laboratory benches and machinery.",
      specs: ["Persistent Spatial Mesh", "Dynamic Occlusion", "Cross-Platform iOS/Android"],
    },
    {
      id: "vr",
      code: "VR",
      name: "Virtual Reality",
      summary: "High-fidelity simulated environments & haptics",
      details:
        "Full 6-DOF immersion with physics simulation, custom hand-tracking gestures, and multi-user collaborative virtual labs engineered for risk-free procedural training.",
      specs: ["6-DOF Motion Tracking", "OpenXR Standards", "Low-Latency Rendering"],
    },
    {
      id: "iot",
      code: "IoT",
      name: "Connected IoT",
      summary: "Hardware integration & real-time sensor streams",
      details:
        "Seamless telemetry bridge connecting real-world sensors, microcontrollers, and industrial PLCs directly into virtual twin dashboards for live operational learning.",
      specs: ["MQTT / WebSocket Protocols", "Real-Time Telemetry", "Hardware Edge Relays"],
    },
    {
      id: "3d",
      code: "3D",
      name: "3D & Digital Twins",
      summary: "Parametric engineering models & photoreal shaders",
      details:
        "Sub-millimeter accurate CAD asset optimization, custom PBR material rendering, and interactive exploded-view assemblies optimized for web and standalone headsets.",
      specs: ["GLTF/GLB Asset Pipeline", "PBR Physically-Based Shading", "Real-Time Exploded Views"],
    },
    {
      id: "interactive",
      code: "IC",
      name: "Interactive Content",
      summary: "Pedagogy-driven branching scenarios & guided discovery",
      details:
        "Instructional architecture designed around cognitive load theory, featuring guided step-by-step masterclasses, self-paced trial runs, and instant corrective feedback.",
      specs: ["SCORM / xAPI Integration", "Adaptive Learning Paths", "Branching Decision Engines"],
    },
    {
      id: "analytics",
      code: "AN",
      name: "Analytics & Telemetry",
      summary: "Granular learner performance & comprehension tracking",
      details:
        "Deep telemetry capturing dwell time, error frequency, spatial interaction heatmaps, and skill mastery milestones for institutional administrative reporting.",
      specs: ["Real-Time Performance Heatmaps", "Skill Proficiency Scoring", "Enterprise LMS Sync"],
    },
  ];

  const activeTech = techStack[activeTechIndex];

  return (
    <section className="section technology-section" id="technology">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="section-title">
            Built at the intersection of learning and technology
          </h2>
          <p className="section-subtitle">
            InGage combines immersive technologies with educational content and
            connected systems to deliver scalable, reliable, and enterprise-ready
            learning experiences.
          </p>
        </div>

        {/* Clean Composition: Left Column Interactive List, Right Column Clean Spec Panel */}
        <div className="technology-composition-grid">
          {/* Left: Tech Selector List */}
          <div className="tech-selector-column">
            {techStack.map((tech, idx) => (
              <button
                key={tech.id}
                className={`tech-row-btn ${activeTechIndex === idx ? "active" : ""}`}
                onClick={() => setActiveTechIndex(idx)}
                onMouseEnter={() => setActiveTechIndex(idx)}
              >
                <div className="tech-btn-left">
                  <span className="tech-btn-code">{tech.code}</span>
                  <div className="tech-btn-text">
                    <span className="tech-btn-name">{tech.name}</span>
                    <span className="tech-btn-summary">{tech.summary}</span>
                  </div>
                </div>
                <div className="tech-btn-indicator">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Technical Detail Display Card */}
          <div className="tech-detail-column">
            <div className="tech-spec-card">
              <div className="tech-spec-top">
                <span className="tech-spec-tag">ARCHITECTURE // {activeTech.code}</span>
                <span className="tech-spec-active-pill">SYSTEM CAPABILITY</span>
              </div>

              <h3 className="tech-spec-title">{activeTech.name}</h3>
              <p className="tech-spec-paragraph">{activeTech.details}</p>

              <div className="tech-spec-divider"></div>

              <div className="tech-spec-features">
                <span className="features-label">Core Technical Highlights:</span>
                <ul className="spec-feature-list">
                  {activeTech.specs.map((spec) => (
                    <li key={spec}>
                      <span className="spec-bullet">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-spec-footer">
                <span className="spec-footer-label">Ready for Multi-Platform Deployment</span>
                <a href="#contact" className="spec-action-link">
                  Discuss Integration →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
