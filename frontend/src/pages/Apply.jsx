import React, { useState, useMemo } from "react";
import ApplyHero from "../components/apply/ApplyHero";
import JourneySelector from "../components/apply/JourneySelector";
import OpportunityTypes from "../components/apply/OpportunityTypes";
import OpportunitySearch from "../components/apply/OpportunitySearch";
import OpportunityCard from "../components/apply/OpportunityCard";
import ApplicationForm from "../components/apply/ApplicationForm";
import ApplicationSuccess from "../components/apply/ApplicationSuccess";
import { sampleOpportunities } from "../data/applyData";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import "./Apply.css";

export default function Apply({ onNavigate }) {
  const [selectedJourney, setSelectedJourney] = useState("students");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");

  // Application Form Modal State
  const [applyingOpportunity, setApplyingOpportunity] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Compute active journey object & label
  const currentJourneyObj = useMemo(() => {
    return careerJourneys.find((j) => j.id === selectedJourney) || careerJourneys[0];
  }, [selectedJourney]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts = { ALL: sampleOpportunities.length };
    sampleOpportunities.forEach((opp) => {
      counts[opp.category] = (counts[opp.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter opportunities based on journey, category, search query, location, department
  const filteredOpportunities = useMemo(() => {
    return sampleOpportunities.filter((opp) => {
      // 1. Journey Filter
      if (selectedJourney && opp.targetJourney && !opp.targetJourney.includes(selectedJourney)) {
        return false;
      }

      // 2. Category Filter
      if (activeCategory !== "ALL" && opp.category !== activeCategory) {
        return false;
      }

      // 3. Location Filter
      if (selectedLocation !== "All Locations" && opp.location !== selectedLocation) {
        return false;
      }

      // 4. Department Filter
      if (selectedDepartment !== "All Departments" && opp.department !== selectedDepartment) {
        return false;
      }

      // 5. Keyword Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = opp.title.toLowerCase().includes(query);
        const inDept = opp.department.toLowerCase().includes(query);
        const inDesc = opp.description.toLowerCase().includes(query);
        const inSkills = (opp.skills || []).some((s) => s.toLowerCase().includes(query));
        const inLevel = opp.experienceLevel.toLowerCase().includes(query);

        if (!inTitle && !inDept && !inDesc && !inSkills && !inLevel) {
          return false;
        }
      }

      return true;
    });
  }, [selectedJourney, activeCategory, selectedLocation, selectedDepartment, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedLocation("All Locations");
    setSelectedDepartment("All Departments");
    setActiveCategory("ALL");
  };

  const handleOpenApplication = (opportunity) => {
    setApplyingOpportunity(opportunity);
    setIsFormOpen(true);
  };

  const handleFormSuccess = (result) => {
    setIsFormOpen(false);
    setSubmissionResult(result);
  };

  return (
    <div className="apply-page-root">
      {/* 1. Hero Section */}
      <ApplyHero onExploreClick={() => scrollToSection("choose-journey")} />

      {/* 2. Choose Your Journey (Students, Freshers, Experienced) */}
      <JourneySelector
        selectedJourney={selectedJourney}
        onSelectJourney={(journeyId) => {
          setSelectedJourney(journeyId);
          scrollToSection("opportunities-catalog");
        }}
      />

      {/* 3. Category Filter Tabs (ALL, JOBS, INTERNSHIPS, COURSES, PROJECTS, TRAINING) */}
      <OpportunityTypes
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      {/* 4. Search and Filter Bar */}
      <OpportunitySearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
        onReset={handleResetFilters}
        totalResultsCount={filteredOpportunities.length}
        activeJourneyFilter={currentJourneyObj?.title || null}
        onClearJourneyFilter={() => setSelectedJourney(null)}
      />

      {/* 5. Opportunities Cards Grid */}
      <section className="section section-page opportunities-catalog-section" id="opportunities-catalog">
        <div className="container">
          {filteredOpportunities.length > 0 ? (
            <div className="opportunities-cards-grid">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  onApply={handleOpenApplication}
                />
              ))}
            </div>
          ) : (
            <div className="no-opp-results-card">
              <div className="no-results-icon-wrap">
                <Sparkles size={28} className="text-green" />
              </div>
              <h3 className="no-results-title">No opportunities found</h3>
              <p className="no-results-desc">
                No active postings match your current filter selection. Try adjusting your search query, location, or exploring all pathways.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-reset-catalog"
                onClick={handleResetFilters}
              >
                <RotateCcw size={14} />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

          {/* General Talent Network Callout Card */}
          <div className="general-application-banner">
            <div className="banner-text-side">
              <span className="banner-eyebrow">CAN'T FIND THE EXACT ROLE?</span>
              <h3 className="banner-title">Join the InGage Talent Network</h3>
              <p className="banner-desc">
                Submit a general application. Our recruiting team will review your profile for upcoming technical cohorts, lab openings, and research fellowships.
              </p>
            </div>
            <div className="banner-btn-side">
              <button
                type="button"
                className="btn btn-primary banner-apply-btn"
                onClick={() => handleOpenApplication(null)}
              >
                <span>Submit General Application</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Application Form Modal */}
      {isFormOpen && (
        <ApplicationForm
          opportunity={applyingOpportunity}
          journeyType={currentJourneyObj.journeyType}
          onClose={() => setIsFormOpen(false)}
          onSubmitSuccess={handleFormSuccess}
        />
      )}

      {/* 7. Application Success Modal */}
      {submissionResult && (
        <ApplicationSuccess
          submissionData={submissionResult}
          onExploreMore={() => {
            setSubmissionResult(null);
            scrollToSection("opportunities-catalog");
          }}
          onNavigateHome={() => {
            setSubmissionResult(null);
            if (onNavigate) onNavigate("/");
          }}
        />
      )}
    </div>
  );
}
