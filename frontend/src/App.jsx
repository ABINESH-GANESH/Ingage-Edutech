import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Courses from "./components/Courses";
import EnterprisePartners from "./components/EnterprisePartners";
import CenterOfExcellence from "./components/CenterOfExcellence";
import Ecosystem from "./components/Ecosystem";
import InternshipsHackathonsGallery from "./components/InternshipsHackathonsGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CenterOfExcellencePage from "./pages/CenterOfExcellence";
import CareersPage from "./pages/CareersPage";
import InternshipPage from "./pages/InternshipPage";
import CoursesPage from "./pages/CoursesPage";
import AboutUs from "./pages/AboutUs";
import Apply from "./pages/Apply";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Hackathons from "./pages/Hackathons";
import ContactUs from "./pages/ContactUs";
import WebinarPage from "./pages/WebinarPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      const p = window.location.pathname.toLowerCase().replace(/\/$/, "");
      return p === "" ? "/" : p;
    }
    return "/";
  });

  // Configure manual browser scroll restoration to prevent unwanted scroll-up animations on route transitions
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const handleNavigate = useCallback((path) => {
    if (typeof window !== "undefined") {
      const [basePart, hashPart] = path.split("#");
      const normalized = basePart === "" ? "/" : (basePart.toLowerCase().replace(/\/$/, "") || "/");
      window.history.pushState({}, "", path);
      setCurrentPath(normalized);

      if (hashPart) {
        setTimeout(() => {
          const el = document.getElementById(hashPart);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 80);
      } else {
        // Instant top positioning for route transitions
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const p = window.location.pathname.toLowerCase().replace(/\/$/, "");
      setCurrentPath(p === "" ? "/" : p);
      if (window.location.hash) {
        const targetId = window.location.hash.replace(/^#/, "");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        // Instant top positioning on browser back/forward
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const isCoEPage = currentPath === "/center-of-excellence";
  const isCareersPage = currentPath === "/careers";
  const isInternshipsPage = currentPath === "/internships" || currentPath === "/internship";
  const isHackathonsPage = currentPath === "/hackathons" || currentPath === "/hackathon";
  const isWebinarPage = currentPath === "/webinar" || currentPath === "/webinars" || currentPath === "/workshop";
  const isCoursesPage = currentPath === "/courses" || currentPath === "/course";
  const isAboutPage = currentPath === "/about-us" || currentPath === "/about";
  const isContactPage = currentPath === "/contact-us" || currentPath === "/contact";
  const isApplyPage = currentPath === "/apply";
  const isPrivacyPage = currentPath === "/privacy" || currentPath === "/privacy-policy";
  const isTermsPage = currentPath === "/terms" || currentPath === "/terms-conditions" || currentPath === "/terms-and-conditions";

  // Dedicated Enterprise Full-Screen Legal Portal Pages
  if (isPrivacyPage) {
    return (
      <>
        <ScrollToTop currentPath={currentPath} />
        <PrivacyPolicy onNavigate={handleNavigate} />
      </>
    );
  }

  if (isTermsPage) {
    return (
      <>
        <ScrollToTop currentPath={currentPath} />
        <TermsAndConditions onNavigate={handleNavigate} />
      </>
    );
  }

  return (
    <div className="app-layout">
      {/* Route Scroll Restoration */}
      <ScrollToTop currentPath={currentPath} />

      {/* 1. Sticky Navigation (handles /, /courses, /center-of-excellence, /careers, /internships, /hackathons, /webinar, /about-us, /contact-us, /apply) */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {isApplyPage ? (
        /* Dedicated Apply Now Portal */
        <Apply onNavigate={handleNavigate} />
      ) : isAboutPage ? (
        /* Dedicated About Us Page */
        <AboutUs onNavigate={handleNavigate} />
      ) : isCoursesPage ? (
        /* Dedicated Courses Page */
        <CoursesPage onNavigate={handleNavigate} />
      ) : isCoEPage ? (
        /* Dedicated Center of Excellence Page */
        <CenterOfExcellencePage onNavigateHome={() => handleNavigate("/")} />
      ) : isCareersPage ? (
        /* Dedicated Careers Page */
        <CareersPage onNavigate={handleNavigate} />
      ) : isInternshipsPage ? (
        /* Dedicated Internship Experience Page */
        <InternshipPage onNavigate={handleNavigate} />
      ) : isHackathonsPage ? (
        /* Dedicated Hackathons Page */
        <Hackathons onNavigate={handleNavigate} />
      ) : isWebinarPage ? (
        /* Dedicated Career Readiness Webinar Page */
        <WebinarPage onNavigate={handleNavigate} />
      ) : isContactPage ? (
        /* Dedicated Contact Us Page */
        <ContactUs onNavigate={handleNavigate} />
      ) : (
        /* Main Website Homepage */
        <main>
          {/* 2. Hero Section */}
          <Hero onNavigate={handleNavigate} />

          {/* 3. Trusted By & Statistics Strip */}
          <Stats />

          {/* 4. About InGage (CII Honor & 3 Features) */}
          <About onNavigate={handleNavigate} />

          {/* 5. Google-Certified Tracks & Catalog */}
          <Courses onNavigate={handleNavigate} />

          {/* 6. Enterprise Partners (Oracle & IBM) */}
          <EnterprisePartners />

          {/* 7. Complete Center of Excellence (6 CoE Tiles) */}
          <CenterOfExcellence onNavigate={handleNavigate} />

          {/* 8. Partner / Ecosystem (TN Skill & Pan-India) */}
          <Ecosystem />

          {/* 9. Structured Internships & Hackathons */}
          <InternshipsHackathonsGallery onNavigate={handleNavigate} />

          {/* 10. Student Testimonials */}
          <Testimonials onNavigate={handleNavigate} />
        </main>
      )}

      {/* 11. Official Corporate Reusable Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
