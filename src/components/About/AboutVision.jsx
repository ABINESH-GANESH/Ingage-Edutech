import React, { useState } from "react";
import {
  Eye,
  GraduationCap,
  Cpu,
  Building2,
  Wrench,
  Briefcase,
  UserCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { aboutVisionData } from "../../data/aboutData";
import "./AboutVision.css";

const NODE_DETAILS = [
  {
    id: "edu",
    step: "01",
    name: "Education",
    tag: "Academic Foundation",
    role: "Rigorous pedagogical framework, curriculum integration, and university alignments.",
    icon: GraduationCap,
    theme: "green",
  },
  {
    id: "tech",
    step: "02",
    name: "Technology",
    tag: "Emerging Tech Lab",
    role: "Hands-on AR/VR spatial setups, AI models, cloud sandboxes, and digital twins.",
    icon: Cpu,
    theme: "navy",
  },
  {
    id: "ind",
    step: "03",
    name: "Industry",
    tag: "Enterprise Standards",
    role: "Production-grade workflows calibrated to real corporate and global hiring demands.",
    icon: Building2,
    theme: "green",
  },
  {
    id: "skills",
    step: "04",
    name: "Skills",
    tag: "Practical Mastery",
    role: "Functional code repositories, hardware troubleshooting, and applied competencies.",
    icon: Wrench,
    theme: "navy",
  },
  {
    id: "careers",
    step: "05",
    name: "Careers",
    tag: "Verified Outcomes",
    role: "Industry certifications, executive portfolios, and direct hiring placement pipelines.",
    icon: Briefcase,
    theme: "green",
  },
];

export default function AboutVision() {
  const { badge, heading, description } = aboutVisionData;
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="section section-white about-vision-root" id="about-vision">
      {/* Background Ambient Glowing Orbs */}
      <div className="vision-bg-glow glow-navy" aria-hidden="true" />
      <div className="vision-bg-glow glow-green" aria-hidden="true" />
      <div className="vision-grid-mesh" aria-hidden="true" />

      <div className="container relative-container">
        {/* Header */}
        <div className="about-vision-header center-text">
          <div className="vision-eyebrow-pill">
            <Eye size={14} className="text-brand-green" />
            <span>{badge || "OUR VISION"}</span>
          </div>
          <h2 className="section-title vision-main-title">
            BUILDING A FUTURE-READY <span className="vision-title-gradient">LEARNING ECOSYSTEM</span>
          </h2>
          <p className="section-subtitle max-w-700">
            {description ||
              "We envision a borderless learning paradigm where academia and industry seamlessly converge, anchoring all competencies directly around the student."}
          </p>
        </div>

        {/* Dynamic Connected Ecosystem Architecture */}
        <div className="vision-ecosystem-network-wrap">
          {/* 1. TOP CENTRAL HUB: THE LEARNER */}
          <div className="vision-center-hub-container">
            <div className="hub-orbit-ring ring-outer" aria-hidden="true" />
            <div className="hub-orbit-ring ring-inner" aria-hidden="true" />
            
            <div className="center-hub-main-card">
              <div className="hub-icon-capsule">
                <UserCheck size={28} className="hub-user-svg" />
                <span className="hub-live-dot" />
              </div>
              <span className="hub-kicker-tag">CENTRAL ANCHOR</span>
              <h3 className="hub-title-text">THE LEARNER</h3>
              <span className="hub-desc-text">Core of all pedagogy, labs &amp; placement outcomes</span>
            </div>
          </div>

          {/* 2. DYNAMIC CONNECTING SVG CABLES (Desktop & Tablet) */}
          <div className="vision-svg-connectors-wrapper" aria-hidden="true">
            <svg
              className="vision-connectors-svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#15428f" />
                  <stop offset="50%" stopColor="#76b82a" />
                  <stop offset="100%" stopColor="#15428f" />
                </linearGradient>
                <linearGradient id="lineGradIdle" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(21, 66, 143, 0.4)" />
                  <stop offset="100%" stopColor="rgba(118, 184, 42, 0.4)" />
                </linearGradient>
              </defs>

              {/* Path 1 -> Node 01 (10% x) */}
              <path
                d="M 500 0 C 500 50, 100 50, 100 100"
                className={`connector-path ${hoveredNode === "edu" ? "active" : ""}`}
              />
              {/* Path 2 -> Node 02 (30% x) */}
              <path
                d="M 500 0 C 500 50, 300 50, 300 100"
                className={`connector-path ${hoveredNode === "tech" ? "active" : ""}`}
              />
              {/* Path 3 -> Node 03 (50% x) */}
              <path
                d="M 500 0 L 500 100"
                className={`connector-path ${hoveredNode === "ind" ? "active" : ""}`}
              />
              {/* Path 4 -> Node 04 (70% x) */}
              <path
                d="M 500 0 C 500 50, 700 50, 700 100"
                className={`connector-path ${hoveredNode === "skills" ? "active" : ""}`}
              />
              {/* Path 5 -> Node 05 (90% x) */}
              <path
                d="M 500 0 C 500 50, 900 50, 900 100"
                className={`connector-path ${hoveredNode === "careers" ? "active" : ""}`}
              />
            </svg>
          </div>

          {/* 3. 5 CONNECTED ECOSYSTEM NODES */}
          <div className="vision-nodes-flex-row">
            {NODE_DETAILS.map((node, idx) => {
              const NodeIcon = node.icon;
              const isHovered = hoveredNode === node.id;
              const hasActiveHover = hoveredNode !== null;

              return (
                <div
                  key={node.id}
                  className={`vision-node-card-modern theme-${node.theme} ${isHovered ? "is-hovered" : ""} ${hasActiveHover && !isHovered ? "is-dimmed" : ""}`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-top-indicator-badge">
                    <span className="node-step-number">{node.step}</span>
                    <span className="node-connection-dot" />
                  </div>

                  <div className={`node-icon-bubble ${node.theme}`}>
                    <NodeIcon size={22} className="node-icon-svg" />
                  </div>

                  <div className="node-text-body">
                    <span className="node-category-tag">{node.tag}</span>
                    <h4 className="node-title-heading">{node.name}</h4>
                    <p className="node-desc-copy">{node.role}</p>
                  </div>

                  <div className="node-bottom-status">
                    <CheckCircle2 size={13} className="node-check-icon" />
                    <span>Active InGage Pillar</span>
                  </div>

                  {/* Horizontal Sequential Flow Arrow (except last card) */}
                  {idx < NODE_DETAILS.length - 1 && (
                    <div className="node-flow-arrow-bridge" aria-hidden="true">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
