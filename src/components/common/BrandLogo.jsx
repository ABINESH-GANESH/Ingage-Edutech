import React from "react";
import "./BrandLogo.css";

export default function BrandLogo({ className = "", size = "normal" }) {
  const height = size === "large" ? 44 : size === "small" ? 28 : 36;
  const width = Math.round(height * (78 / 42)); // ~67px for 36px height

  return (
    <div
      className={`ingage-brand-logo ${size === "large" ? "logo-lg" : size === "small" ? "logo-sm" : ""} ${className}`}
      role="img"
      aria-label="InGage EduTech"
    >
      <svg
        viewBox="0 0 78 42"
        height={height}
        width={width}
        className="brand-logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        style={{ shapeRendering: "geometricPrecision", display: "block" }}
      >
        {/* Top line: 'in' in dark slate + 'gage' in vibrant green */}
        <text
          x="0"
          y="18"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          fontSize="19"
          fontWeight="800"
          fill="#1E242B"
          letterSpacing="-0.4"
        >
          in<tspan fill="#76B82A">gage</tspan>
        </text>

        {/* Bottom line: 'EduTe' + 'c' (with signature dot) + 'h' in enterprise navy */}
        <text
          x="0"
          y="38"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#15428F"
          letterSpacing="-0.2"
        >
          EduTe
        </text>
        <text
          x="46.5"
          y="38"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#15428F"
          letterSpacing="-0.2"
        >
          c
        </text>
        {/* Signature green dot inside 'c' */}
        <circle cx="51.5" cy="31.2" r="1.8" fill="#76B82A" />
        <text
          x="55.8"
          y="38"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#15428F"
          letterSpacing="-0.2"
        >
          h
        </text>
      </svg>
    </div>
  );
}
