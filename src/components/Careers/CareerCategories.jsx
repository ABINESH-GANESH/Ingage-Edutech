import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Briefcase, BookOpen, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { careerCategories } from "../../data/careersData";
import "./CareerCategories.css";

export default function CareerCategories({ onSelectCategory }) {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress through viewport (0 to 1)
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollY(progress * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations for section background
  const parallaxY = (scrollY - 50) * 0.65;
  const scaleZoom = 1.06 + Math.abs(scrollY - 50) * 0.0006;

  const categoryIcons = {
    graduates: <GraduationCap size={20} />,
    experienced: <Briefcase size={20} />,
    internships: <BookOpen size={20} />,
    locations: <MapPin size={20} />,
  };

  return (
    <section className="career-categories-section" id="career-categories" ref={sectionRef}>
      {/* Dynamic Parallax Background Visual */}
      <div className="career-cat-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/careers/pathways-bg.jpg"
          alt=""
          className="career-cat-bg-img"
          style={{
            transform: `scale(${scaleZoom}) translateY(${parallaxY}px)`,
          }}
          decoding="async"
        />
        <div className="career-cat-bg-overlay" />
        <div className="career-cat-grid-lines" />
        <div className="career-cat-ambient-glow" />
      </div>

      <div className="container career-cat-container">
        <div className="section-header center-text">
          <div className="career-cat-eyebrow-wrap">
            <span className="section-eyebrow section-eyebrow-green">
              <span className="eyebrow-dot" />
              <Sparkles size={13} className="text-green" />
              PATHWAYS
            </span>
          </div>
          <h2 className="section-title text-white">FIND YOUR PATH AT INGAGE</h2>
          <p className="section-subtitle text-slate">
            Whether you are stepping into industry or leading high-impact engineering architectures, discover tailored opportunities designed for continuous progression.
          </p>
        </div>

        <div className="career-categories-grid">
          {careerCategories.map((cat) => (
            <div
              key={cat.id}
              className={`career-cat-card career-cat-card-${cat.accentColor}`}
              onClick={() => onSelectCategory(cat.filterKey)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectCategory(cat.filterKey);
                }
              }}
              aria-label={`${cat.title} - ${cat.cta}`}
            >
              {/* Card Image Header with Zoom & Vignette */}
              <div className="cat-card-img-box">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="cat-card-img"
                  decoding="async"
                />
                <div className="cat-card-img-overlay" />
                
                {/* Floating Top Pills */}
                <div className="cat-card-pills-row">
                  <span className="cat-card-badge-pill">{cat.badge}</span>
                  <span className="cat-card-number-pill">{cat.number}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="cat-card-body">
                <div className="cat-card-icon-title-row">
                  <div className="cat-card-icon-wrap">
                    {categoryIcons[cat.id]}
                  </div>
                  <h3 className="cat-card-title">{cat.title}</h3>
                </div>

                <p className="cat-card-desc">{cat.description}</p>

                <div className="cat-card-bottom">
                  <span className="cat-card-cta">
                    {cat.cta} <ArrowRight size={15} className="cat-arrow" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
