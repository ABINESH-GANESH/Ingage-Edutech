import React from "react";
import "./CourseFilter.css";

const CATEGORIES = [
  { id: "ALL", label: "ALL" },
  { id: "CLOUD", label: "CLOUD" },
  { id: "DATA", label: "DATA" },
  { id: "CYBERSECURITY", label: "CYBERSECURITY" },
  { id: "AI & ML", label: "AI & ML" },
  { id: "IT", label: "IT" },
  { id: "DESIGN", label: "DESIGN" },
];

export default function CourseFilter({ activeCategory, onSelectCategory, counts = {} }) {
  return (
    <div className="course-filter-bar-wrap" role="tablist" aria-label="Course Categories">
      <div className="course-filter-track">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id] || (cat.id === "ALL" ? counts.total : 0);

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`course-filter-tab ${isActive ? "filter-tab-active" : ""}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span className="tab-label-text">{cat.label}</span>
              {count !== undefined && (
                <span className="tab-count-pill">{count}</span>
              )}
              {isActive && <span className="tab-active-indicator" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
