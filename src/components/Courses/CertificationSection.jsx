import React from "react";
import { Award, CheckCircle, Shield, Share2, TrendingUp, Sparkles } from "lucide-react";
import { certificationBenefits } from "../../data/coursesData";
import "./CertificationSection.css";

export default function CertificationSection() {
  const benefitIcons = [
    <Shield key="shield" size={22} className="benefit-icon text-navy" />,
    <CheckCircle key="check" size={22} className="benefit-icon text-green" />,
    <Share2 key="share" size={22} className="benefit-icon text-navy" />,
    <TrendingUp key="trend" size={22} className="benefit-icon text-green" />,
  ];

  return (
    <section className="section section-white cert-section-root" id="certifications">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-green" />
            CAREER CREDENTIALS
          </span>
          <h2 className="section-title">BUILD SKILLS. EARN RECOGNITION.</h2>
          <p className="section-subtitle">
            Earn verified digital credentials that validate your hands-on engineering capabilities directly against global technology benchmarks.
          </p>
        </div>

        <div className="cert-benefits-grid">
          {certificationBenefits.map((benefit, idx) => (
            <div key={benefit.id} className="cert-benefit-card">
              <div className="benefit-icon-box">
                {benefitIcons[idx % benefitIcons.length]}
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
