import React from "react";
import "./BrandLogo.css";

export default function BrandLogo({ className = "", size = "normal" }) {
  return (
    <div
      className={`ingage-brand-logo ${size === "large" ? "logo-lg" : size === "small" ? "logo-sm" : ""} ${className}`}
      role="img"
      aria-label="InGage EduTech"
    >
      <img
        src="/assets/branding/ingage-edutech-logo.png"
        alt="InGage EduTech"
        className="brand-logo-img"
        width="140"
        height="44"
        loading="eager"
      />
    </div>
  );
}
