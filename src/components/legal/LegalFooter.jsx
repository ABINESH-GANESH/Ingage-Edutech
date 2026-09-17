import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import { legalContactDetails } from "../../data/legalContent";

export default function LegalFooter({ activePage = "privacy", onNavigate }) {
  const { t } = useTranslation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="legal-footer-root" role="contentinfo">
      <div className="legal-footer-container">
        {/* Left Side: Brand Name & Links */}
        <div className="legal-footer-left">
          <span className="legal-footer-brand-name">{legalContactDetails.name}</span>
          <span aria-hidden="true">•</span>
          <nav className="legal-footer-links-nav" aria-label="Legal footer navigation">
            <a
              href="/privacy-policy"
              className={`legal-footer-nav-link ${activePage === "privacy" ? "is-active" : ""}`}
              onClick={(e) => handleLinkClick(e, "/privacy-policy")}
            >
              {t("legalHeader.privacyPolicy", { defaultValue: "Privacy Policy" })}
            </a>
            <a
              href="/terms-and-conditions"
              className={`legal-footer-nav-link ${activePage === "terms" ? "is-active" : ""}`}
              onClick={(e) => handleLinkClick(e, "/terms-and-conditions")}
            >
              {t("legalHeader.termsConditions", { defaultValue: "Terms & Conditions" })}
            </a>
            <a
              href="/"
              className="legal-footer-nav-link"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              {t("legalHeader.backToWebsite", { defaultValue: "Back to Website" })}
            </a>
          </nav>
        </div>

        {/* Right Side: Back to Top */}
        <div className="legal-footer-right">
          <button
            type="button"
            className="legal-back-to-top-btn"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>{t("legal.backToTop", { defaultValue: "Back to Top" })}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
