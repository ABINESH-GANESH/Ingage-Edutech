import React, { useState, useMemo } from "react";
import CoursesHero from "../components/courses/CoursesHero";
import CourseSearch from "../components/courses/CourseSearch";
import CourseFilters from "../components/courses/CourseFilters";
import CourseGrid from "../components/courses/CourseGrid";
import CourseDetailModal from "../components/courses/CourseDetailModal";
import LearningSection from "../components/courses/LearningSection";
import PartnersSection from "../components/courses/PartnersSection";
import CoursesCTA from "../components/courses/CoursesCTA";
import { coursesList } from "../data/coursesData";
import "./CoursesPage.css";

export default function CoursesPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Compute dynamic counts per category from the master courses list
  const categoryCounts = useMemo(() => {
    const counts = { ALL: coursesList.length };
    coursesList.forEach((course) => {
      counts[course.category] = (counts[course.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered course catalog
  const filteredCourses = useMemo(() => {
    return coursesList.filter((course) => {
      // 1. Category Filter
      if (selectedCategory !== "ALL" && course.category !== selectedCategory) {
        return false;
      }

      // 2. Search Keyword Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = course.title.toLowerCase().includes(query);
        const inCat = (course.categoryLabel || "").toLowerCase().includes(query);
        const inDesc = (course.description || "").toLowerCase().includes(query);
        const inOverview = (course.overview || "").toLowerCase().includes(query);
        const inSkills = (course.skills || []).some((s) => s.toLowerCase().includes(query));
        const inProjects = (course.projects || "").toLowerCase().includes(query);

        if (!inTitle && !inCat && !inDesc && !inOverview && !inSkills && !inProjects) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
  };

  const handleInquirePartner = (partner) => {
    // If user clicks request syllabus on a partner card, open modal with relevant partner info or default course
    const relevantCourse = coursesList.find((c) =>
      c.title.toLowerCase().includes(partner.name.toLowerCase())
    ) || coursesList[0];
    setSelectedCourseForModal(relevantCourse);
  };

  return (
    <div className="courses-page-root">
      {/* 1. Spacious Editorial Hero */}
      <CoursesHero
        onExploreClick={() => scrollToSection("course-grid")}
        onPartnersClick={() => scrollToSection("enterprise-partners")}
      />

      {/* 2. Course Search Interface */}
      <CourseSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onReset={handleResetFilters}
        totalResultsCount={filteredCourses.length}
      />

      {/* 3. Sticky Horizontal Category Filter Bar */}
      <CourseFilters
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      {/* 4. Responsive Course Cards Grid */}
      <CourseGrid
        courses={filteredCourses}
        onSelectCourse={(course) => setSelectedCourseForModal(course)}
        onResetFilters={handleResetFilters}
        totalCount={coursesList.length}
      />

      {/* 5. Editorial Learning Experience Section (01 LEARN, 02 BUILD, 03 CERTIFY) */}
      <LearningSection />

      {/* 6. Verified Enterprise Partners Section (Oracle, IBM, Google, NVIDIA) */}
      <PartnersSection onInquirePartner={handleInquirePartner} />

      {/* 7. Admissions & Academic Inquiry CTA */}
      <CoursesCTA onExploreTracks={() => scrollToSection("course-grid")} />

      {/* 8. Interactive Course Detail & Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourseForModal}
        isOpen={!!selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
      />
    </div>
  );
}
