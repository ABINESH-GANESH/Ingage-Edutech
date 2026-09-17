import React from "react";
import { useTranslation } from "react-i18next";

export default function FooterBottomBar({ bottomUtility, brandName, onNavigate }) {
  const { t } = useTranslation();
  const { legal, support, location } = bottomUtility;

  const handleLegalClick = (e, href) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(href);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <div className="footer-bottom-utility-bar">
      {/* Left Side: Copyright & Legal Policy Links */}
      <div className="footer-utility-left">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} {brandName}. {t("footer.allRightsReserved", { defaultValue: "All rights reserved." })}
        </p>

        <nav className="footer-legal-nav" aria-label="Footer Legal Navigation">
          <a
            href="/privacy-policy"
            className="utility-link"
            onClick={(e) => handleLegalClick(e, "/privacy-policy")}
          >
            {t("footer.legalPrivacy", { defaultValue: "Privacy Policy" })}
          </a>
          <a
            href="/terms-and-conditions"
            className="utility-link"
            onClick={(e) => handleLegalClick(e, "/terms-and-conditions")}
          >
            {t("footer.legalTerms", { defaultValue: "Terms & Conditions" })}
          </a>
        </nav>
      </div>

      {/* Right Side: Help & Country Indicator */}
      <div className="footer-utility-right">
        {support && (
          <a href={support.href} className="utility-link utility-help-link">
            {t("footer.help", { defaultValue: support.label })}
          </a>
        )}

        {/* India Location with Globe Icon */}
        <div className="utility-location-pill" title="Location: India">
          <svg
            className="location-globe-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="location-name">{location}</span>
        </div>
      </div>
    </div>
  );
}
