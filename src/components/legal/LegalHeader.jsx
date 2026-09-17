import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Shield, FileText } from "lucide-react";
import BrandLogo from "../common/BrandLogo";

export default function LegalHeader({ activePage = "privacy", onNavigate }) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", "#contact-us");
      }
    }
  };

  return (
    <header className={`legal-header-sticky ${isScrolled ? "is-scrolled" : ""}`}>
      {/* Dynamic Reading Progress Bar */}
      <div className="legal-reading-progress-track" aria-hidden="true">
        <div
          className="legal-reading-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="legal-header-inner">
        {/* Left: Official InGage EduTech Brand Lockup */}
        <div className="legal-header-brand-lockup">
          <a
            href="/"
            className="legal-header-logo-link"
            onClick={(e) => handleLinkClick(e, "/")}
            aria-label="InGage EduTech Home"
          >
            <BrandLogo size="normal" />
          </a>
        </div>

        {/* Center / Left Navigation Tabs */}
        <nav className="legal-header-nav-center" aria-label="Legal portal navigation">
          <a
            href="/"
            className="legal-nav-tab-item"
            onClick={(e) => handleLinkClick(e, "/")}
          >
            {t("legalHeader.overview", { defaultValue: "Overview" })}
          </a>
          <a
            href="/privacy-policy"
            className={`legal-nav-tab-item ${activePage === "privacy" ? "is-active" : ""}`}
            onClick={(e) => handleLinkClick(e, "/privacy-policy")}
            aria-current={activePage === "privacy" ? "page" : undefined}
          >
            {t("legalHeader.privacyPolicy", { defaultValue: "Privacy Policy" })}
          </a>
          <a
            href="/terms-and-conditions"
            className={`legal-nav-tab-item ${activePage === "terms" ? "is-active" : ""}`}
            onClick={(e) => handleLinkClick(e, "/terms-and-conditions")}
            aria-current={activePage === "terms" ? "page" : undefined}
          >
            {t("legalHeader.termsConditions", { defaultValue: "Terms & Conditions" })}
          </a>
          <a
            href="#contact-us"
            className="legal-nav-tab-item"
            onClick={handleContactClick}
          >
            {t("legalHeader.contact", { defaultValue: "Contact" })}
          </a>
        </nav>

        {/* Right Side Utilities: Back to Website + Apply Now */}
        <div className="legal-header-actions-right">

          {/* Back to Main Website */}
          <button
            type="button"
            className="legal-back-to-website-btn"
            onClick={(e) => handleLinkClick(e, "/")}
            title={t("legalHeader.backToWebsite", { defaultValue: "Back to Website" })}
            aria-label="Return to Main Website"
          >
            <ArrowLeft size={14} />
            <span>{t("legalHeader.backToWebsite", { defaultValue: "Back to Website" })}</span>
          </button>

          {/* Apply Now CTA */}
          <button
            type="button"
            className="legal-apply-cta-btn"
            onClick={(e) => handleLinkClick(e, "/apply")}
            aria-label="Apply Now"
          >
            <span>{t("navbar.applyNow", { defaultValue: "Apply Now" })}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </header>
  );
}
