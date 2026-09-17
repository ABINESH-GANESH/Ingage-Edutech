import React from "react";
import PartnerCard from "./PartnerCard";
import { Sparkles } from "lucide-react";
import { enterprisePartnersData } from "../../data/coursesData";
import "./PartnersSection.css";

export default function PartnersSection({ onInquirePartner }) {
  const { heading, subtitle, partners } = enterprisePartnersData;

  return (
    <section className="section section-page partners-section-root" id="enterprise-partners">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-eyebrow courses-eyebrow-brand">
            <span className="eyebrow-dot" />
            <Sparkles size={13} className="text-brand-green" />
            GLOBAL TECHNOLOGY COLLABORATIONS
          </span>
          <h2 className="section-title">
            Enterprise <span className="brand-navy-text">Certification</span>{" "}
            <span className="brand-green-text">Partners</span>
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="partners-cards-grid">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onInquirePartner={onInquirePartner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
