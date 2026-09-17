import React from "react";

export default function FooterLinks({ links, onNavigate }) {
  if (!links || links.length === 0) return null;

  const handleLinkClick = (e, href) => {
    if (href.startsWith("/") && onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <ul className="footer-links-list">
      {links.map((link, idx) => (
        <li key={`${link.label}-${idx}`} className="footer-link-item">
          <a
            href={link.href}
            className="footer-nav-anchor"
            onClick={(e) => handleLinkClick(e, link.href)}
            {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="link-text">{link.label}</span>
            <span className="link-hover-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
