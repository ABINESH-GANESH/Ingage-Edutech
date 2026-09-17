import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import CourseFilter from "./Courses/CourseFilter";
import CourseCard from "./Courses/CourseCard";
import CourseInquiryModal from "./Courses/CourseInquiryModal";
import { approvedData } from "../data/approvedData";
import "./Courses.css";

export default function Courses({ onNavigate }) {
  const { t } = useTranslation();
  const { googleTracks } = approvedData;
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  // Compute course counts per category
  const categoryCounts = useMemo(() => {
    const counts = { total: googleTracks.catalog.length };
    googleTracks.catalog.forEach((course) => {
      counts[course.category] = (counts[course.category] || 0) + 1;
    });
    return counts;
  }, [googleTracks.catalog]);

  // Filtered course catalog
  const filteredCourses = useMemo(() => {
    if (activeCategory === "ALL") return googleTracks.catalog;
    return googleTracks.catalog.filter((c) => c.category === activeCategory);
  }, [activeCategory, googleTracks.catalog]);

  return (
    <section className="section courses-redesigned-root" id="courses">
      {/* Background Technical Grid */}
      <div className="courses-tech-grid-bg" aria-hidden="true" />

      {/* Top Animated Connecting Beam */}
      <div className="courses-top-beam" aria-hidden="true" />

      <div className="container courses-main-container">
        {/* Editorial Section Header */}
        <div className="courses-editorial-header">
          <div className="header-text-side">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>{t("courses.badge", { defaultValue: "GOOGLE-CERTIFIED TRACKS" })}</span>
            </div>

            <h2 className="section-title courses-title-editorial">
              {t("courses.title", { defaultValue: "Google-Certified Career Pathways" })}
            </h2>

            <p className="courses-editorial-sub">
              {t("courses.subtitle", { defaultValue: "InGage is Google's Official Training Partner in India — delivering 6 certified course tracks on campus with instructor-led sessions, real Cloud lab access, 5+ industry projects, and an exclusive 50% discount on Google certification exams." })}
            </p>
          </div>

          <div className="header-meta-side">
            <div className="tracks-counter-badge">
              <strong className="counter-val">06</strong>
              <span className="counter-lbl">CAREER TRACKS</span>
            </div>
          </div>
        </div>

        {/* Horizontal Category Navigation Bar */}
        <CourseFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />

        {/* 3-Column Distinctive Course Grid */}
        <div className="courses-distinctive-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={() => {
                if (onNavigate) {
                  onNavigate("/courses");
                } else {
                  window.location.pathname = "/courses";
                }
              }}
            />
          ))}
        </div>

        {/* Compact Bottom CTA */}
        <div className="courses-bottom-cta-box">
          <div className="bottom-cta-inner">
            <span className="bottom-cta-prompt">
              Not sure which track is right for you?
            </span>
            <a
              href={`mailto:${approvedData.brand.contact.email}?subject=Course%20Advising%20Inquiry%20-%20InGage%20EduTech`}
              className="btn btn-navy bottom-cta-link"
            >
              <span>Talk to an expert</span>
              <span className="cta-arrow-slide">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Course Inquiry Modal */}
      <CourseInquiryModal
        course={selectedCourseForModal}
        isOpen={!!selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
      />
    </section>
  );
}
