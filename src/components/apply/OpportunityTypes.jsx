import React from "react";
import { opportunityCategories } from "../../data/applyData";
import "./OpportunityTypes.css";

export default function OpportunityTypes({ activeCategory, onSelectCategory, categoryCounts = {} }) {
  return (
    <div className="opportunity-types-wrapper" id="explore-opportunities">
      <div className="container">
        <div className="opportunity-types-pill-bar" role="tablist" aria-label="Opportunity Categories">
          {opportunityCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count = categoryCounts[cat.key] || 0;

            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`opp-type-pill-btn ${isActive ? "active" : ""}`}
                onClick={() => onSelectCategory(cat.key)}
              >
                <span className="opp-pill-label">{cat.label}</span>
                {count > 0 && <span className="opp-pill-count">{count}</span>}
                {isActive && <span className="opp-active-underline" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
