import React, { useState, useMemo, useEffect } from "react";
import { opportunitiesList } from "../data/careersData";
import CareersHero from "../components/Careers/CareersHero";
import CareersStoryline from "../components/Careers/CareersStoryline";
import JobSearch from "../components/Careers/JobSearch";
import CareersIntro from "../components/Careers/CareersIntro";
import CareerCategories from "../components/Careers/CareerCategories";
import LifeAtIngage from "../components/Careers/LifeAtIngage";
import WhyIngage from "../components/Careers/WhyIngage";
import TechnologySection from "../components/Careers/TechnologySection";
import Opportunities from "../components/Careers/Opportunities";
import JobDetailModal from "../components/Careers/JobDetailModal";
import CareersCTA from "../components/Careers/CareersCTA";
import "./CareersPage.css";

export default function CareersPage({ onNavigate }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedRoleForModal, setSelectedRoleForModal] = useState(null);

  // Compute unique dropdown options from data
  const locationOptions = useMemo(() => {
    const set = new Set(opportunitiesList.map((job) => job.location));
    return Array.from(set);
  }, []);

  const departmentOptions = useMemo(() => {
    const set = new Set(opportunitiesList.map((job) => job.department));
    return Array.from(set);
  }, []);

  // Filtered opportunities logic
  const filteredOpportunities = useMemo(() => {
    return opportunitiesList.filter((job) => {
      // 1. Keyword search (title, dept, skills, about)
      if (searchKeyword.trim()) {
        const query = searchKeyword.toLowerCase().trim();
        const inTitle = job.title.toLowerCase().includes(query);
        const inDept = job.department.toLowerCase().includes(query);
        const inAbout = job.about.toLowerCase().includes(query);
        const inSkills = job.skills.some((s) => s.toLowerCase().includes(query));
        const inLevel = job.level.toLowerCase().includes(query);
        if (!inTitle && !inDept && !inAbout && !inSkills && !inLevel) {
          return false;
        }
      }

      // 2. Location filter
      if (selectedLocation !== "all" && job.location !== selectedLocation) {
        return false;
      }

      // 3. Department filter
      if (selectedDepartment !== "all" && job.department !== selectedDepartment) {
        return false;
      }

      return true;
    });
  }, [searchKeyword, selectedLocation, selectedDepartment]);

  // Smooth scroll to an internal section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle category card click
  const handleSelectCategory = (filterKey) => {
    if (filterKey === "Graduate") {
      setSearchKeyword("Graduate");
    } else if (filterKey === "Experienced") {
      setSearchKeyword("Experienced");
    } else if (filterKey === "Internship") {
      setSearchKeyword("Developer");
    } else if (filterKey === "Chennai") {
      setSelectedLocation(locationOptions[0] || "Chennai (HQ)");
    }
    scrollToSection("opportunities");
  };

  // Reset all active search filters
  const handleResetFilters = () => {
    setSearchKeyword("");
    setSelectedLocation("all");
    setSelectedDepartment("all");
  };

  return (
    <div className="careers-page-root">
      {/* 1. Cinematic Animated Video Hero Section */}
      <CareersHero
        onExploreClick={() => scrollToSection("opportunities")}
        onSectionJump={scrollToSection}
      />

      {/* 2. Connected Scroll Storytelling Section (01 LEARN, 02 BUILD, 03 EXPERIENCE, 04 GROW) */}
      <CareersStoryline onExploreRoles={() => scrollToSection("opportunities")} />

      {/* 3. Prominent Job Search Section */}
      <JobSearch
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        locationOptions={locationOptions}
        departmentOptions={departmentOptions}
        onSearchSubmit={() => scrollToSection("opportunities")}
        onResetSearch={handleResetFilters}
        totalResultsCount={filteredOpportunities.length}
      />

      {/* 4. Editorial Career Introduction */}
      <CareersIntro />

      {/* 5. Four Distinct Career Category Cards with Parallax Imagery */}
      <CareerCategories onSelectCategory={handleSelectCategory} />

      {/* 6. Life at InGage Visual Cards */}
      <LifeAtIngage />

      {/* 7. Why InGage Asymmetric Editorial Section */}
      <WhyIngage />

      {/* 8. Technology Section */}
      <TechnologySection />

      {/* 9. Current Open Opportunities Listings */}
      <Opportunities
        opportunities={filteredOpportunities}
        onSelectRole={(job) => setSelectedRoleForModal(job)}
        onResetFilters={handleResetFilters}
        totalAvailableCount={opportunitiesList.length}
      />

      {/* 10. General Talent Network Callout */}
      <CareersCTA onNavigateHome={() => onNavigate("/")} />

      {/* 11. Job Detail & Quick Application Modal */}
      {selectedRoleForModal && (
        <JobDetailModal
          job={selectedRoleForModal}
          onClose={() => setSelectedRoleForModal(null)}
        />
      )}
    </div>
  );
}
