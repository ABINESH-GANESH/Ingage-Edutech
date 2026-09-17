import { useState } from "react";
import "./Solutions.css";

export default function Solutions() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const solutions = [
    {
      number: "01",
      title: "Augmented Reality",
      description:
        "Bring digital information into the physical world through interactive AR experiences that contextualize knowledge directly onto physical assets.",
      capabilities: ["Spatial Anchoring", "Object Recognition", "Real-Time Overlays"],
    },
    {
      number: "02",
      title: "Virtual Reality",
      description:
        "Create immersive environments for training, simulation and experiential learning where learners can safely practice complex and high-risk procedures.",
      capabilities: ["Haptic Simulation", "Multi-User Classrooms", "Hazard-Free Scenarios"],
    },
    {
      number: "03",
      title: "IoT Solutions",
      description:
        "Connect devices, environments and data to create smarter learning and operational experiences with live sensor feedback and spatial telemetry.",
      capabilities: ["Smart Lab Telemetry", "Hardware Integration", "Live Metrics"],
    },
    {
      number: "04",
      title: "Digital Learning",
      description:
        "Build engaging digital experiences that make complex subjects easier to understand through guided interactions and adaptive learning pathways.",
      capabilities: ["Interactive 3D Content", "Outcome Tracking", "LMS Integration"],
    },
  ];

  return (
    <section className="section section-secondary solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>SOLUTIONS</span>
          </div>
          <h2 className="section-title">One platform. Multiple possibilities.</h2>
          <p className="section-subtitle">
            Modular immersive solutions tailored for universities, technical
            institutes, and enterprise workforce development.
          </p>
        </div>

        {/* 4 Large Horizontal Solution Rows */}
        <div className="solutions-list-wrap">
          {solutions.map((item, idx) => (
            <div
              key={item.number}
              className={`solution-row-card ${hoveredIdx === idx ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="solution-row-left">
                <span className="solution-row-num">{item.number}</span>
                <div className="solution-title-group">
                  <h3 className="solution-row-title">{item.title}</h3>
                  <div className="solution-tag-list">
                    {item.capabilities.map((cap) => (
                      <span key={cap} className="solution-sub-tag">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="solution-row-middle">
                <p className="solution-row-desc">{item.description}</p>
              </div>

              <div className="solution-row-right">
                <div className="solution-arrow-bubble" aria-label={`View ${item.title} details`}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
