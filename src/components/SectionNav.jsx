import { useState, useEffect } from "react";
import "./SectionNav.css";

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "technology", label: "Technology" },
    { id: "industries", label: "Industries" },
    { id: "impact", label: "Impact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      const offset = 140; // offset for navbar + floating section nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="section-nav-sticky-wrap">
      <div className="container section-nav-container">
        <nav className="section-nav-pill" aria-label="Section Navigation">
          {sections.map((sec) => (
            <button
              key={sec.id}
              className={`section-nav-item ${activeSection === sec.id ? "active" : ""}`}
              onClick={(e) => scrollToSection(e, sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
