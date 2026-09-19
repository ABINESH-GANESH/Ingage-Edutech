import React, { useEffect } from "react";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import AboutMission from "../components/About/AboutMission";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";
import AboutPeople from "../components/About/AboutPeople";
import AboutEcosystem from "../components/About/AboutEcosystem";
import AboutPartners from "../components/About/AboutPartners";
import AboutJourney from "../components/About/AboutJourney";
import AboutCTA from "../components/About/AboutCTA";
import "./AboutUs.css";

export default function AboutUs({ onNavigate }) {
  // If legacy hash is visited, seamlessly redirect to dedicated legal routes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#privacy" || hash.startsWith("#privacy-")) {
        if (onNavigate) onNavigate("/privacy-policy");
      } else if (hash === "#terms" || hash.startsWith("#terms-")) {
        if (onNavigate) onNavigate("/terms-and-conditions");
      }
    }
  }, [onNavigate]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-page-root">
      {/* 1. Hero Section */}
      <AboutHero
        onExploreClick={() => scrollToSection("about-ecosystem")}
        onMissionClick={() => scrollToSection("about-mission")}
      />

      {/* 2. Who We Are Editorial Introduction */}
      <AboutIntro />

      {/* 3. Our Mission (3 Pillars) */}
      <AboutMission />

      {/* 4. Our Vision (Connected Learner Diagram) */}
      <AboutVision />

      {/* 5. What We Believe In (6 Core Values) */}
      <AboutValues />

      {/* 6. People Power Our Purpose (Culture & Team) */}
      <AboutPeople />

      {/* 7. Our Ecosystem Network Flow */}
      <AboutEcosystem />

      {/* 8. Our Technology Ecosystem (Verified Partners) */}
      <AboutPartners />

      {/* 9. Our Journey (Milestones Timeline) */}
      <AboutJourney />

      {/* 10. Bottom CTA Section */}
      <AboutCTA
        onNavigateCourses={() => onNavigate && onNavigate("/courses")}
        onNavigateCareers={() => onNavigate && onNavigate("/careers")}
      />
    </div>
  );
}
