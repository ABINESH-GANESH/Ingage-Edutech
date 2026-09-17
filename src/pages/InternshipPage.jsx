import React, { useState } from "react";
import InternshipHero from "../components/internship/InternshipHero";
import InternshipStoryScroll from "../components/internship/InternshipStoryScroll";
import InternshipWhy from "../components/internship/InternshipWhy";
import InternshipDomains from "../components/internship/InternshipDomains";
import InternshipImmersive from "../components/internship/InternshipImmersive";
import InternshipEligibility from "../components/internship/InternshipEligibility";
import InternshipOutcomes from "../components/internship/InternshipOutcomes";
import InternshipCTA from "../components/internship/InternshipCTA";
import "./InternshipPage.css";

export default function InternshipPage({ onNavigate }) {
  const [selectedTrackForApply, setSelectedTrackForApply] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectDomainForApply = (domain) => {
    setSelectedTrackForApply(domain);
    scrollToSection("apply");
  };

  return (
    <div className="internship-page-root">
      {/* 1. Full-Viewport Hero with Parallax & Metrics */}
      <InternshipHero
        onExploreClick={() => scrollToSection("story-stages")}
        onProgramsClick={() => scrollToSection("domains")}
      />

      {/* 2. 4-Phase Storytelling Immersion */}
      <InternshipStoryScroll />

      {/* 3. Why InGage Editorial Narrative (01 to 05) */}
      <InternshipWhy />

      {/* 4. Asymmetric Editorial Domain Grid */}
      <InternshipDomains onSelectDomain={handleSelectDomainForApply} />

      {/* 5. Full-Screen Immersive Statement Moment */}
      <InternshipImmersive onExplorePrograms={() => scrollToSection("domains")} />

      {/* 6. Target Audience Profiles */}
      <InternshipEligibility />

      {/* 7. Large Typography Core Deliverables */}
      <InternshipOutcomes />

      {/* 8. Application & Admissions CTA with Interactive Modal */}
      <InternshipCTA
        selectedTrack={selectedTrackForApply}
        onClearSelectedTrack={() => setSelectedTrackForApply(null)}
      />
    </div>
  );
}
