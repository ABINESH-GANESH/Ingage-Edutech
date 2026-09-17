import React from "react";
import { Search, RotateCcw, Tag } from "lucide-react";
import { courseCategories } from "../../data/coursesData";
import "./CourseSearch.css";

export default function CourseSearch({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onReset,
  totalResultsCount,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="course-search-root">
      <div className="container">
        <form className="course-search-card" onSubmit={handleSubmit} role="search" aria-label="Course Search">
          <div className="search-inputs-row">
            {/* Keyword / Skill Search Field */}
            <div className="search-field keyword-field">
              <label htmlFor="course-search-input" className="search-field-label">
                SEARCH BY SKILL OR KEYWORD
              </label>
              <div className="search-input-wrap">
                <Search size={18} className="search-field-icon" />
                <input
                  id="course-search-input"
                  type="text"
                  placeholder="Search courses, skills or technologies..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-text-input"
                />
              </div>
            </div>

            {/* Category / Track Dropdown */}
            <div className="search-field category-field">
              <label htmlFor="course-category-select" className="search-field-label">
                CATEGORY / TRACK
              </label>
              <div className="search-input-wrap">
                <Tag size={16} className="search-field-icon" />
                <select
                  id="course-category-select"
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="search-select-input"
                >
                  {courseCategories.map((cat) => (
                    <option key={cat.key} value={cat.key}>
                      {cat.label === "ALL" ? "All Tracks" : cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="search-actions-col">
              <button
                type="submit"
                className="btn btn-primary search-submit-btn"
                aria-label="Search courses"
              >
                <Search size={16} />
                <span>SEARCH</span>
              </button>

              {(searchQuery || selectedCategory !== "ALL") && (
                <button
                  type="button"
                  className="btn btn-ghost search-reset-btn"
                  onClick={onReset}
                  aria-label="Reset all search filters"
                >
                  <RotateCcw size={15} />
                  <span>RESET</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
