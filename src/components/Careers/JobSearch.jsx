import React from "react";
import { Search, MapPin, Briefcase, X } from "lucide-react";
import "./JobSearch.css";

export default function JobSearch({
  searchKeyword,
  setSearchKeyword,
  selectedLocation,
  setSelectedLocation,
  selectedDepartment,
  setSelectedDepartment,
  locationOptions,
  departmentOptions,
  onSearchSubmit,
  onResetSearch,
  totalResultsCount,
}) {
  const isFiltered = Boolean(searchKeyword || selectedLocation !== "all" || selectedDepartment !== "all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <section className="job-search-section" id="job-search">
      <div className="container">
        <div className="job-search-card">
          <form className="job-search-form" onSubmit={handleSubmit} role="search" aria-label="Search Careers">
            {/* Field 1: Keyword / Skill */}
            <div className="job-search-field-group">
              <label htmlFor="search-keyword" className="job-search-label">
                Search by skill or keyword
              </label>
              <div className="job-search-input-wrap">
                <Search size={18} className="job-search-icon" aria-hidden="true" />
                <input
                  id="search-keyword"
                  type="text"
                  className="job-search-input"
                  placeholder="e.g. Unity, AI, Embedded, 3D, Trainer..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  autoComplete="off"
                />
                {searchKeyword && (
                  <button
                    type="button"
                    className="job-search-clear-btn"
                    onClick={() => setSearchKeyword("")}
                    aria-label="Clear keyword"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Field 2: Location */}
            <div className="job-search-field-group">
              <label htmlFor="search-location" className="job-search-label">
                Location
              </label>
              <div className="job-search-input-wrap">
                <MapPin size={18} className="job-search-icon" aria-hidden="true" />
                <select
                  id="search-location"
                  className="job-search-select"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 3: Department / Category (bonus refinement) */}
            <div className="job-search-field-group">
              <label htmlFor="search-dept" className="job-search-label">
                Department
              </label>
              <div className="job-search-input-wrap">
                <Briefcase size={18} className="job-search-icon" aria-hidden="true" />
                <select
                  id="search-dept"
                  className="job-search-select"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {departmentOptions.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="job-search-actions">
              <button type="submit" className="btn btn-navy job-search-submit-btn">
                <Search size={16} /> Search
              </button>

              {isFiltered && (
                <button
                  type="button"
                  className="btn btn-secondary job-search-reset-btn"
                  onClick={onResetSearch}
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {/* Quick Active Filter Pill Summary */}
          {isFiltered && (
            <div className="job-search-summary-bar">
              <span className="job-search-summary-text">
                Showing results ({totalResultsCount} roles found)
              </span>
              {searchKeyword && (
                <span className="search-filter-tag">
                  Keyword: "{searchKeyword}"
                  <button type="button" onClick={() => setSearchKeyword("")}>×</button>
                </span>
              )}
              {selectedLocation !== "all" && (
                <span className="search-filter-tag">
                  Location: {selectedLocation}
                  <button type="button" onClick={() => setSelectedLocation("all")}>×</button>
                </span>
              )}
              {selectedDepartment !== "all" && (
                <span className="search-filter-tag">
                  Dept: {selectedDepartment}
                  <button type="button" onClick={() => setSelectedDepartment("all")}>×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
