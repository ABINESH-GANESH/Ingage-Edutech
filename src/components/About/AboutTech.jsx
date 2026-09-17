import React from "react";
import { Cpu, Eye, Wifi, Cloud, Box, Sparkles } from "lucide-react";
import { techAreasList } from "../../data/aboutData";
import "./AboutTech.css";

const TECH_ICONS = {
  ai: Cpu,
  xr: Eye,
  iot: Wifi,
  cloud: Cloud,
  twins: Box,
  "immersive-pedagogy": Sparkles,
};

export default function AboutTech() {
  return (
    <section className="section section-white about-tech-root" id="about-technology">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <Sparkles size={13} className="text-green" />
            INNOVATION DOMAINS
          </span>
          <h2 className="section-title">WHERE TECHNOLOGY MEETS LEARNING</h2>
          <p className="section-subtitle">
            Core emerging technology pillars integrated across InGage Center of Excellence labs and learning pathways.
          </p>
        </div>

        {/* 6 Technology Domain Panels */}
        <div className="about-tech-grid">
          {techAreasList.map((tech) => {
            const IconComp = TECH_ICONS[tech.id] || Cpu;

            return (
              <div key={tech.id} className="tech-domain-card">
                <div className="tech-card-header">
                  <div className="tech-icon-circle">
                    <IconComp size={20} className="tech-icon text-navy" />
                  </div>
                  <span className="tech-short-badge">{tech.short}</span>
                </div>

                <h3 className="tech-domain-name">{tech.name}</h3>
                <p className="tech-domain-desc">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
