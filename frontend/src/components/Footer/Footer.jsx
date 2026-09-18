import React, { useState } from "react";
import FooterColumn from "./FooterColumn";
import FooterBottomBar from "./FooterBottomBar";
import BrandLogo from "../common/BrandLogo";
import { footerData } from "./footerData";
import "./Footer.css";

export default function Footer({ onNavigate }) {
  const { brand, columns, bottomUtility } = footerData;

  // On mobile accordion: manage open/closed states for columns
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (colId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [colId]: !prev[colId],
    }));
  };

  return (
    <footer className="footer-corporate-root" id="footer">
      {/* Background Watermark Typographic Mark */}
      <div className="footer-watermark" aria-hidden="true">
        INGAGE
      </div>

      <div className="footer-corporate-container">
        {/* Top Brand & Mission Overview */}
        <div className="footer-brand-header">
          <div className="footer-brand-lockup">
            <a
              href="#home"
              className="footer-brand-link"
              aria-label="InGage EduTech Home"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/");
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <BrandLogo size="large" />
            </a>
          </div>

          <div className="footer-brand-statement">
            <p className="footer-brand-desc">{brand.description}</p>
            <span className="footer-brand-motto">{brand.motto}</span>
          </div>
        </div>

        {/* 4-Column Information Architecture Grid */}
        <div className="footer-columns-grid">
          {columns.map((column, idx) => (
            <FooterColumn
              key={column.id}
              column={column}
              isOpen={!!openAccordions[column.id]}
              onToggle={() => toggleAccordion(column.id)}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Thin Horizontal Divider */}
        <hr className="footer-corporate-divider" />

        {/* Bottom Utility Bar */}
        <FooterBottomBar
          bottomUtility={bottomUtility}
          brandName={brand.name}
          onNavigate={onNavigate}
        />
      </div>
    </footer>
  );
}
