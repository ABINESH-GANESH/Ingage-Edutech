import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Check } from "lucide-react";

export default function LegalMobileContents({
  sections = [],
  activeSectionId,
  onSectionClick,
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  // Prevent background body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleItemSelect = (e, sectionId) => {
    setIsOpen(false);
    onSectionClick(e, sectionId);
  };

  return (
    <div className="legal-mobile-contents-bar">
      <button
        type="button"
        className="legal-mobile-trigger-btn"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open Table of Contents"
      >
        <div className="legal-mobile-trigger-left">
          <Menu size={16} />
          <span>{t("legal.contentsMenu", { defaultValue: "Contents" })}</span>
          {activeSection && (
            <span className="legal-mobile-active-label">
              • {activeSection.number}. {activeSection.navLabel || activeSection.title}
            </span>
          )}
        </div>
        <ChevronDown size={16} />
      </button>

      {/* Drawer Sheet */}
      {isOpen && (
        <div
          className="legal-mobile-drawer-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Table of Contents Drawer"
        >
          <div
            className="legal-mobile-drawer-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-mobile-drawer-header">
              <span className="legal-mobile-drawer-title">
                {t("legal.tableOfContents", { defaultValue: "Table of Contents" })}
              </span>
              <button
                type="button"
                className="legal-mobile-drawer-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Table of Contents"
              >
                <X size={20} />
              </button>
            </div>

            <div className="legal-mobile-drawer-list">
              {sections.map((section) => {
                const isActive = activeSectionId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    className={`legal-mobile-drawer-item-btn ${isActive ? "is-active" : ""}`}
                    onClick={(e) => handleItemSelect(e, section.id)}
                  >
                    <span className="legal-sidebar-link-num">{section.number}</span>
                    <span className="legal-sidebar-link-text">{section.navLabel || section.title}</span>
                    {isActive && <Check size={14} className="legal-sidebar-active-arrow" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
