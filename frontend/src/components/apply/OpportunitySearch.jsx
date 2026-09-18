import React from "react";
import { Search, MapPin, Building, RotateCcw, X } from "lucide-react";
import { locationOptions, departmentOptions } from "../../data/applyData";
import "./OpportunitySearch.css";

export default function OpportunitySearch({
  searchQuery,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  selectedDepartment,
  onDepartmentChange,
  onReset,
  totalResultsCount,
  activeJourneyFilter,
  onClearJourneyFilter,
}) {
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedLocation !== "All Locations" ||
    selectedDepartment !== "All Departments" ||
    activeJourneyFilter !== null;

  return (
    <div className="opportunity-search-section">
      <div className="container">
        <div className="opp-search-card">
          <div className="opp-search-form-grid">
            {/* 1. Keyword / Skill Field */}
            <div className="search-field-block">
              <label htmlFor="opp-keyword-input" className="search-field-label">
                SEARCH BY SKILL OR KEYWORD
              </label>
              <div className="search-input-wrap">
                <Search size={16} className="field-icon" />
                <input
                  id="opp-keyword-input"
                  type="text"
                  placeholder="e.g. Developer, Python, Unity, Cloud..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-text-input"
                />
              </div>
            </div>

            {/* 2. Location Dropdown */}
            <div className="search-field-block">
              <label htmlFor="opp-location-select" className="search-field-label">
                LOCATION
              </label>
              <div className="search-input-wrap">
                <MapPin size={16} className="field-icon" />
                <select
                  id="opp-location-select"
                  value={selectedLocation}
                  onChange={(e) => onLocationChange(e.target.value)}
                  className="search-select-input"
                >
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. Department Dropdown */}
            <div className="search-field-block">
              <label htmlFor="opp-dept-select" className="search-field-label">
                DEPARTMENT
              </label>
              <div className="search-input-wrap">
                <Building size={16} className="field-icon" />
                <select
                  id="opp-dept-select"
                  value={selectedDepartment}
                  onChange={(e) => onDepartmentChange(e.target.value)}
                  className="search-select-input"
                >
                  {departmentOptions.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Reset Action */}
            <div className="search-actions-block">
              <button
                type="button"
                className="btn-opp-reset"
                onClick={onReset}
                disabled={!hasActiveFilters}
                title="Reset all filters"
                aria-label="Reset all search filters"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Active Results Summary & Filter Chips */}
          <div className="opp-search-status-bar">
            <div className="results-count-text">
              Showing <strong>{totalResultsCount}</strong> {totalResultsCount === 1 ? "opportunity" : "opportunities"}
            </div>

            {hasActiveFilters && (
              <div className="active-chips-row">
                {activeJourneyFilter && (
                  <span className="filter-chip">
                    <span>Journey: {activeJourneyFilter.toUpperCase()}</span>
                    <button
                      type="button"
                      className="chip-remove-btn"
                      onClick={onClearJourneyFilter}
                      aria-label="Remove journey filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                {searchQuery.trim() && (
                  <span className="filter-chip">
                    <span>Keyword: "{searchQuery}"</span>
                    <button
                      type="button"
                      className="chip-remove-btn"
                      onClick={() => onSearchChange("")}
                      aria-label="Clear keyword search"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                {selectedLocation !== "All Locations" && (
                  <span className="filter-chip">
                    <span>{selectedLocation}</span>
                    <button
                      type="button"
                      className="chip-remove-btn"
                      onClick={() => onLocationChange("All Locations")}
                      aria-label="Clear location filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                {selectedDepartment !== "All Departments" && (
                  <span className="filter-chip">
                    <span>{selectedDepartment}</span>
                    <button
                      type="button"
                      className="chip-remove-btn"
                      onClick={() => onDepartmentChange("All Departments")}
                      aria-label="Clear department filter"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
