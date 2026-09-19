import React, { useState } from "react";
import { Sparkles, ArrowRight, BookOpen, Wrench, Eye, TrendingUp, CheckCircle } from "lucide-react";
import "./CareersStoryline.css";

const STORY_STEPS = [
  {
    id: "01",
    tag: "LEARN",
    title: "Build knowledge that moves beyond the classroom.",
    description:
      "Deep dive into production cloud architectures, spatial computing paradigms, and modern engineering practices with vendor-certified pathways from Google, IBM, and Oracle.",
    bullets: [
      "Mentorship from principal architects & researchers",
      "Sponsored professional certifications",
      "Interactive multi-modal learning sandboxes",
    ],
    image: "/assets/careers/pathway-graduates.jpg",
    accentColor: "blue",
    icon: BookOpen,
  },
  {
    id: "02",
    tag: "BUILD",
    title: "Turn ideas into practical technology.",
    description:
      "Write high-performance code, engineer low-latency IoT communication gateways, design spatial interfaces in Unreal & Unity, and deploy scalable cloud microservices.",
    bullets: [
      "Direct code contribution to live enterprise platforms",
      "Hardware-software CoE lab prototyping",
      "Agile engineering squads with fast feedback loops",
    ],
    image: "/assets/careers/pathway-experienced.jpg",
    accentColor: "green",
    icon: Wrench,
  },
  {
    id: "03",
    tag: "EXPERIENCE",
    title: "Work with emerging technologies and real-world applications.",
    description:
      "Engage daily with enterprise AR/VR headsets, autonomous drone cages, NVIDIA GPU AI clusters, and industrial digital twins deployed across India's premier academic institutions.",
    bullets: [
      "Real-world deployments touching 500,000+ students",
      "Hands-on spatial & robotics hardware benches",
      "Enterprise client demonstrations & CoE launches",
    ],
    image: "/assets/careers/careers-hero-vivid.jpg",
    accentColor: "navy",
    icon: Eye,
  },
  {
    id: "04",
    tag: "GROW",
    title: "Develop the skills, confidence and experience to move forward.",
    description:
      "Accelerate your career through dual-track leadership and technical specializations, intellectual property creation, conference speaking, and impactful team mentorship.",
    bullets: [
      "Merit-driven progression with clear milestones",
      "Patent co-authorship & technical writing support",
      "Cross-disciplinary mobility across tech stacks",
    ],
    image: "/assets/careers/pathway-locations.jpg",
    accentColor: "emerald",
    icon: TrendingUp,
  },
];

export default function CareersStoryline({ onExploreRoles }) {
  const [activeStepId, setActiveStepId] = useState("01");

  const activeStep = STORY_STEPS.find((s) => s.id === activeStepId) || STORY_STEPS[0];
  const IconComponent = activeStep.icon;

  return (
    <section className="careers-storyline-root" id="careers-storyline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-green" />
            THE INGAGE CAREER JOURNEY
          </span>
          <h2 className="section-title">HOW YOU GROW AT INGAGE</h2>
          <p className="section-subtitle">
            A continuous progression designed to take you from foundational discovery to production leadership.
          </p>
        </div>

        {/* 4 Connected Interactive Story Pills / Tabs */}
        <div className="storyline-nav-tabs">
          {STORY_STEPS.map((step) => (
            <button
              key={step.id}
              type="button"
              className={`storyline-nav-btn ${activeStepId === step.id ? "active" : ""}`}
              onClick={() => setActiveStepId(step.id)}
            >
              <span className="storyline-nav-num">{step.id}</span>
              <span className="storyline-nav-tag">{step.tag}</span>
              {activeStepId === step.id && <span className="storyline-nav-indicator" />}
            </button>
          ))}
        </div>

        {/* Dynamic Story Card Showcase */}
        <div className="storyline-showcase-card">
          <div className="storyline-content-side">
            <div className="storyline-phase-badge">
              <span className="phase-num">{activeStep.id}</span>
              <span className="phase-tag">{activeStep.tag}</span>
            </div>

            <h3 className="storyline-step-title">{activeStep.title}</h3>
            <p className="storyline-step-desc">{activeStep.description}</p>

            <ul className="storyline-bullets-list">
              {activeStep.bullets.map((bullet, idx) => (
                <li key={idx} className="storyline-bullet-item">
                  <CheckCircle size={15} className="bullet-check text-green" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="storyline-card-cta-wrap">
              <button
                type="button"
                className="btn-storyline-cta"
                onClick={onExploreRoles}
                aria-label={`Explore open roles for ${activeStep.tag}`}
              >
                <span>Find opportunities in this track</span>
                <ArrowRight size={14} className="storyline-cta-arrow" />
              </button>
            </div>
          </div>

          <div className="storyline-visual-side">
            <div className="storyline-img-frame">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="storyline-img"
                key={activeStep.id}
              />
              <div className="storyline-img-overlay" />
              <div className="storyline-img-badge">
                <IconComponent size={14} className="text-green" />
                <span>PHASE {activeStep.id} · {activeStep.tag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
