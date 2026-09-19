import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

export default function FooterColumn({ column, isOpen, onToggle, onNavigate }) {
  const { title, links, contactDetails, socials } = column;

  return (
    <div className={`footer-column-item ${isOpen ? "is-accordion-open" : ""}`}>
      {/* Column Heading / Accordion Trigger for Mobile */}
      <button
        type="button"
        className="footer-column-heading-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="footer-column-title">{title}</h3>
        <span className="footer-accordion-indicator" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Column Content Body (Static on desktop, collapsible on mobile) */}
      <div className={`footer-column-body ${isOpen ? "body-expanded" : ""}`}>
        <div className="footer-column-body-inner">
          {/* Main Link List */}
          <FooterLinks links={links} onNavigate={onNavigate} />

          {/* Direct Contact Information (For Connect Column) */}
          {contactDetails && (
            <div className="footer-direct-contact-group">
              <span className="contact-subhead">Headquarters Contact</span>

              <div className="footer-c-item">
                <span className="c-item-label">Direct Phone</span>
                <a href={`tel:${contactDetails.phone}`} className="c-item-link">
                  {contactDetails.phoneDisplay}
                </a>
              </div>

              <div className="footer-c-item">
                <span className="c-item-label">Official Email</span>
                <a href={`mailto:${contactDetails.email}`} className="c-item-link">
                  {contactDetails.email}
                </a>
              </div>

              <div className="footer-c-item">
                <span className="c-item-label">Location</span>
                <span className="c-item-text">{contactDetails.location}</span>
              </div>
            </div>
          )}

          {/* Socials (For Connect Column) */}
          {socials && <FooterSocials socials={socials} />}
        </div>
      </div>
    </div>
  );
}
