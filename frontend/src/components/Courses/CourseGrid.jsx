import React from "react";
import CourseCard from "./CourseCard";
import { AlertCircle, RotateCcw } from "lucide-react";
import "./CourseGrid.css";

export default function CourseGrid({
  courses,
  onSelectCourse,
  onResetFilters,
  totalCount,
}) {
  return (
    <section className="course-grid-section" id="course-grid">
      <div className="container">
        {courses.length > 0 ? (
          <div className="course-cards-grid" role="list">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
              />
            ))}
          </div>
        ) : (
          <div className="course-empty-state">
            <div className="empty-icon-box">
              <AlertCircle size={36} className="text-navy" />
            </div>
            <h3 className="empty-state-title">No Courses Match Your Criteria</h3>
            <p className="empty-state-desc">
              We couldn't find any courses matching your search or category filter. Try clearing your search keyword or switching categories.
            </p>
            <button
              type="button"
              className="btn btn-navy empty-reset-action"
              onClick={onResetFilters}
            >
              <RotateCcw size={15} />
              <span>Show All {totalCount} Courses</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
