import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, Mail } from "lucide-react";
import { legalContactDetails } from "../../data/legalContent";

export default function LegalSidebar({
  sections = [],
  activeSectionId,
  onSectionClick,
  sidebarTitle = "Contents",
}) {
  const { t } = useTranslation();

  return (
    <aside className="legal-sidebar-sticky" aria-label="Table of Contents">
      <div className="legal-sidebar-card">
        <h2 className="legal-sidebar-title">
          {t("legal.tableOfContents", { defaultValue: sidebarTitle })}
        </h2>

        <nav aria-label="Sections list">
          <ul className="legal-sidebar-nav-list">
            {sections.map((section) => {
              const isActive = activeSectionId === section.id;
              return (
                <li key={section.id} className="legal-sidebar-nav-item">
                  <a
                    href={`#${section.id}`}
                    className={`legal-sidebar-nav-link ${isActive ? "is-active" : ""}`}
                    onClick={(e) => onSectionClick(e, section.id)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <div className="legal-sidebar-link-content">
                      <span className="legal-sidebar-link-num">{section.number}</span>
                      <span className="legal-sidebar-link-text">{section.navLabel || section.title}</span>
                    </div>
                    {isActive && (
                      <ChevronRight size={14} className="legal-sidebar-active-arrow" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Sidebar Assistance Mini Card */}
      <div className="legal-sidebar-contact-card">
        <h3 className="legal-sidebar-contact-heading">
          {t("legal.assistanceTitle", { defaultValue: "Need Assistance?" })}
        </h3>
        <p className="legal-sidebar-contact-desc">
          {t("legal.assistanceDesc", {
            defaultValue: "Questions regarding our policies? Reach our administrative team:",
          })}
        </p>
        <a
          href={`mailto:${legalContactDetails.email}?subject=Legal%20Policy%20Inquiry`}
          className="legal-sidebar-contact-email-link"
        >
          <Mail size={13} aria-hidden="true" />
          <span>{legalContactDetails.email}</span>
        </a>
      </div>
    </aside>
  );
}
