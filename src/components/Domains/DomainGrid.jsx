import React, { useState } from "react";
import { approvedData } from "../../data/approvedData";
import DomainCard from "./DomainCard";
import DomainDetailModal from "./DomainDetailModal";
import { ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";
import "./Domains.css";

export default function DomainGrid({ onOpenCoESetup }) {
  const { engineeringDomains } = approvedData;
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All 9 Domains" },
    { id: "ai", label: "AI & Robotics" },
    { id: "hardware", label: "Drones & IoT" },
    { id: "spatial", label: "XR & Cloud" },
    { id: "applied", label: "Cyber & AgriTech" },
  ];

  const filteredDomains = engineeringDomains.filter((dom) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return dom.id === "ai-ml" || dom.id === "robotics";
    if (activeFilter === "hardware") return dom.id === "drone-tech" || dom.id === "iot-digital-twins";
    if (activeFilter === "spatial") return dom.id === "metaverse-xr" || dom.id === "edge-cloud";
    if (activeFilter === "applied") return dom.id === "cybersecurity" || dom.id === "agritech";
    return true;
  });

  return (
    <section className="section section-page domains-root" id="domains">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>SPECIALIZED ENGINEERING DOMAINS</span>
          </div>
          <h2 className="section-title">
            Turnkey Centre of Excellence (CoE) Laboratories
          </h2>
          <p className="section-subtitle">
            Industry-calibrated physical hardware, real-time sensor testbenches, and accredited curricula engineered to transform campus infrastructure into high-demand innovation centers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="domain-filters-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`domain-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern Asymmetric Grid */}
        <div className="domains-asymmetric-grid">
          {filteredDomains.map((domain) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              onSelectDomain={setSelectedDomain}
              onOpenCoESetup={onOpenCoESetup}
            />
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="domains-bottom-cta-banner">
          <div className="domains-cta-content">
            <div className="domains-cta-tag">TURNKEY CAMPUS DEPLOYMENT</div>
            <h3 className="domains-cta-title">Need a tailored multi-disciplinary lab configuration?</h3>
            <p className="domains-cta-desc">
              We design custom hybrid laboratories combining multiple domains (e.g. AI + Drone + IoT) matching your department strengths and NAAC/NBA targets.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-hero-cta"
            onClick={() => onOpenCoESetup && onOpenCoESetup("ai-ml")}
          >
            <span>Set Up a CoE on Campus</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Domain Detail Modal */}
      <DomainDetailModal
        domain={selectedDomain}
        isOpen={Boolean(selectedDomain)}
        onClose={() => setSelectedDomain(null)}
        onOpenCoESetup={onOpenCoESetup}
      />
    </section>
  );
}
