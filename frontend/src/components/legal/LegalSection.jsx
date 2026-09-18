import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { legalContactDetails } from "../../data/legalContent";

export default function LegalSection({ section, isLast = false, onNavigateToPrivacy }) {
  if (!section) return null;

  return (
    <article className="legal-section-article" id={section.id}>
      {/* Section Header with Number Pill */}
      <div className="legal-section-header-wrap">
        <span className="legal-section-number-pill" aria-hidden="true">
          {section.number}
        </span>
        <h2 className="legal-section-heading">{section.title}</h2>
      </div>

      {/* Optional Lead Summary */}
      {section.lead && (
        <p className="legal-section-lead-text">{section.lead}</p>
      )}

      {/* Main Paragraphs */}
      {section.paragraphs &&
        section.paragraphs.map((para, idx) => (
          <p key={idx} className="legal-section-paragraph">
            {para}
          </p>
        ))}

      {/* Subsections (H3 hierarchy) */}
      {section.subsections &&
        section.subsections.map((sub, sIdx) => (
          <div key={sIdx} className="legal-subsection-block">
            <h3 className="legal-subsection-title">{sub.title}</h3>
            {sub.text && <p className="legal-section-paragraph">{sub.text}</p>}
            {sub.items && (
              <ul className="legal-bullet-list">
                {sub.items.map((item, iIdx) => (
                  <li key={iIdx} className="legal-bullet-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

      {/* Bulleted List Items */}
      {section.items && (
        <ul className="legal-bullet-list">
          {section.items.map((item, iIdx) => (
            <li key={iIdx} className="legal-bullet-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Paragraphs after list / subsections */}
      {section.paragraphsAfter &&
        section.paragraphsAfter.map((para, idx) => (
          <p key={`after-${idx}`} className="legal-section-paragraph">
            {para}
          </p>
        ))}

      {/* Optional Highlight Note Callout */}
      {section.note && (
        <div className="legal-note-callout-box">
          <strong>Note:</strong> {section.note}
        </div>
      )}

      {/* Optional Jurisdiction Box */}
      {section.callout && (
        <div className="legal-jurisdiction-box">
          <span className="legal-jurisdiction-label">{section.callout.label}</span>
          <p className="legal-jurisdiction-text">{section.callout.text}</p>
        </div>
      )}

      {/* In-Document Privacy Policy Link */}
      {section.hasPrivacyLink && (
        <div className="legal-note-callout-box">
          <p className="legal-section-paragraph">
            Please review our{" "}
            <a
              href="/privacy-policy"
              className="legal-inline-link"
              onClick={(e) => {
                if (onNavigateToPrivacy) {
                  e.preventDefault();
                  onNavigateToPrivacy();
                }
              }}
            >
              Privacy Policy
            </a>{" "}
            for full details regarding our data collection and protection practices.
          </p>
        </div>
      )}

      {/* Special Contact Us Block */}
      {section.isContactSection && (
        <div className="legal-contact-card">
          <h3 className="legal-contact-card-title">
            Official InGage EduTech Communication Channels
          </h3>
          <div className="legal-contact-grid">
            {/* Email */}
            <div className="legal-contact-item">
              <div className="legal-contact-icon-badge" aria-hidden="true">
                <Mail size={18} />
              </div>
              <div className="legal-contact-item-content">
                <span className="legal-contact-item-label">Email Address</span>
                <span className="legal-contact-item-value">
                  <a href={`mailto:${legalContactDetails.email}`}>
                    {legalContactDetails.email}
                  </a>
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="legal-contact-item">
              <div className="legal-contact-icon-badge" aria-hidden="true">
                <Phone size={18} />
              </div>
              <div className="legal-contact-item-content">
                <span className="legal-contact-item-label">Phone Support</span>
                <span className="legal-contact-item-value">
                  <a href={`tel:${legalContactDetails.phone}`}>
                    {legalContactDetails.phoneDisplay}
                  </a>
                </span>
              </div>
            </div>

            {/* Registered Office */}
            <div className="legal-contact-item">
              <div className="legal-contact-icon-badge" aria-hidden="true">
                <MapPin size={18} />
              </div>
              <div className="legal-contact-item-content">
                <span className="legal-contact-item-label">Registered Office</span>
                <span className="legal-contact-item-value">
                  {legalContactDetails.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Divider */}
      {!isLast && <hr className="legal-section-divider" aria-hidden="true" />}
    </article>
  );
}
