import React from "react";
import { approvedData } from "../data/approvedData";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, PhoneCall } from "lucide-react";
import "./PartnershipCTA.css";

export default function PartnershipCTA({ onOpenCoESetup }) {
  const { partnershipProcess, brand } = approvedData;

  return (
    <section className="partnership-cta-root" id="partner">
      <div className="container">
        <div className="partnership-cta-card">
          {/* Subtle Grid Accent */}
          <div className="partnership-grid-bg" />

          <div className="partnership-content-wrap">
            {/* Top Eyebrow */}
            <div className="partnership-eyebrow">
              <span className="partnership-dot" />
              <span>INSTITUTIONAL ENGAGEMENT MODEL</span>
            </div>

            {/* Main Headline */}
            <h2 className="partnership-headline">
              Build the Next Generation of Industry-Ready Talent.
            </h2>
            <p className="partnership-lead">
              Partner with InGage EduTech to deploy turnkey Centre of Excellence (CoE) laboratories, certified curriculum pipelines, and direct campus-to-corporate hiring corridors.
            </p>

            {/* 4-Step Process Strip */}
            <div className="partnership-process-grid">
              {partnershipProcess.map((item) => (
                <div key={item.step} className="process-step-cell">
                  <div className="process-step-num">{item.step}</div>
                  <h4 className="process-step-title">{item.title}</h4>
                  <p className="process-step-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="partnership-actions-row">
              <button
                type="button"
                className="btn btn-hero-cta btn-lg"
                onClick={() => onOpenCoESetup && onOpenCoESetup("ai-ml")}
              >
                <span>Set Up a CoE on Campus</span>
                <span className="cta-arrow">→</span>
              </button>

              <a
                href={`tel:${brand.contact.phone}`}
                className="btn btn-secondary btn-lg btn-phone-cta"
              >
                <PhoneCall size={16} />
                <span>Call Academic Advisory: {brand.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Micro Credibility */}
            <div className="partnership-trust-strip">
              <div className="trust-item">
                <ShieldCheck size={15} className="trust-icon" />
                <span>Turnkey Physical Infrastructure</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={15} className="trust-icon" />
                <span>Google, Oracle & IBM Accredited</span>
              </div>
              <div className="trust-item">
                <Building2 size={15} className="trust-icon" />
                <span>1,750+ Partner Institutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
