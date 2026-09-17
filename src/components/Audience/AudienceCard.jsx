import React from "react";

export default function AudienceCard({ audience }) {
  const { title, subtitle, icon, description, cardClass, accentColor, features, buttonText } =
    audience;

  return (
    <div className={`audience-card ${cardClass}`} id={audience.id}>
      <div>
        <div className="card-top">
          <div className="card-icon-wrap" style={{ color: accentColor }}>
            {icon}
          </div>
          <span className="card-badge">{subtitle}</span>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="card-features">
          {features.map((feat, i) => (
            <li key={i} style={{ color: "#374151" }}>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="card-cta-btn"
        style={{ color: accentColor }}
        onClick={() => {
          const el = document.getElementById("products");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
