import React from "react";
import { courseCategories } from "../../data/coursesData";
import "./CourseFilters.css";

export default function CourseFilters({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
}) {
  // Only show categories that have available courses
  const availableCategories = courseCategories.filter((cat) => {
    if (cat.key === "ALL") return true;
    const count = categoryCounts[cat.key];
    return count !== undefined && count > 0;
  });

  return (
    <div className="course-filters-sticky-wrap">
      <div className="container">
        <div className="course-filters-bar" role="tablist" aria-label="Course Categories">
          <div className="course-filters-scroll-area">
            {availableCategories.map((cat) => {
              const isSelected = activeCategory === cat.key;
              const count = categoryCounts[cat.key] ?? 0;

              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`course-filter-pill ${isSelected ? "filter-pill-active" : ""}`}
                  onClick={() => onSelectCategory(cat.key)}
                >
                  <span className="filter-pill-label">{cat.label}</span>
                  <span className={`filter-pill-count ${isSelected ? "count-active" : ""}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
