import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowRight, Calendar, Building2 } from "lucide-react";
import LegalHeader from "../components/legal/LegalHeader";
import LegalSidebar from "../components/legal/LegalSidebar";
import LegalMobileContents from "../components/legal/LegalMobileContents";
import LegalSection from "../components/legal/LegalSection";
import LegalFooter from "../components/legal/LegalFooter";
import { privacyPolicyData } from "../data/legalContent";
import "../styles/legal-pages.css";

export default function PrivacyPolicy({ onNavigate }) {
  const { t } = useTranslation();
  const { title, subtitle, lastUpdated, entity, sections } = privacyPolicyData;

  const [activeSectionId, setActiveSectionId] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      return window.location.hash.replace(/^#/, "");
    }
    return sections[0]?.id || "introduction";
  });

  // Scrollspy to detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Initial scroll if URL contains hash on mount
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace(/^#/, "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -85;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSectionId(targetId);
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  const handleSectionClick = useCallback((e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const yOffset = -85;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSectionId(sectionId);
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  }, []);

  const handleNavigateTerms = () => {
    if (onNavigate) {
      onNavigate("/terms-and-conditions");
    } else {
      window.location.href = "/terms-and-conditions";
    }
  };

  return (
    <div className="legal-portal-root">
      {/* 1. Dedicated Enterprise Sticky Header */}
      <LegalHeader activePage="privacy" onNavigate={onNavigate} />

      {/* 2. Mobile Table of Contents Bar */}
      <LegalMobileContents
        sections={sections}
        activeSectionId={activeSectionId}
        onSectionClick={handleSectionClick}
      />

      {/* 3. Main Body: Sticky Sidebar + Wide Document */}
      <div className="legal-portal-body">
        <div className="legal-layout-container">
          {/* Left Column: Desktop Sticky Table of Contents */}
          <LegalSidebar
            sections={sections}
            activeSectionId={activeSectionId}
            onSectionClick={handleSectionClick}
            sidebarTitle={t("legal.contentsTitle", { defaultValue: "Privacy Policy" })}
          />

          {/* Right Column: Main Legal Document */}
          <main className="legal-main-document-area" id="main-document">
            {/* Header Document Banner */}
            <header className="legal-doc-banner-block">
              <div className="legal-doc-pill-badge">
                <ShieldCheck size={14} />
                <span>{t("privacy.badge", { defaultValue: "LEGAL & PRIVACY PORTAL" })}</span>
              </div>

              <h1 className="legal-doc-main-heading">
                {t("privacy.title", { defaultValue: title })}
              </h1>

              <p className="legal-doc-lead-summary">
                {t("privacy.lead", { defaultValue: subtitle })}
              </p>

              <div className="legal-doc-metadata-bar">
                <div className="legal-doc-meta-item">
                  <Calendar size={14} />
                  <span>
                    <strong>{t("privacy.lastUpdated", { defaultValue: "Last Updated" })}:</strong> {lastUpdated}
                  </span>
                </div>

                <span className="legal-doc-meta-dot" aria-hidden="true">•</span>

                <div className="legal-doc-meta-item">
                  <Building2 size={14} />
                  <span>
                    <strong>{t("privacy.entity", { defaultValue: "Entity" })}:</strong> {entity}
                  </span>
                </div>

                {/* Quick Switch to Terms & Conditions */}
                <a
                  href="/terms-and-conditions"
                  className="legal-doc-quick-switcher"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigateTerms();
                  }}
                >
                  <span>{t("legalHeader.termsConditions", { defaultValue: "Terms & Conditions" })}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </header>

            {/* Document Sections */}
            <div className="legal-sections-flow">
              {sections.map((section, idx) => (
                <LegalSection
                  key={section.id}
                  section={section}
                  isLast={idx === sections.length - 1}
                  onNavigateToPrivacy={null}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* 4. Dedicated Enterprise Legal Footer */}
      <LegalFooter activePage="privacy" onNavigate={onNavigate} />
    </div>
  );
}
