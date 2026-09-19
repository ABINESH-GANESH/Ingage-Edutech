import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import "./CourseCard.css";

export default function CourseCard({ course, onSelectCourse }) {
  const {
    id,
    title,
    categoryLabel,
    duration,
    description,
    image,
    skills,
    accentColor = "blue",
    featured,
  } = course;

  return (
    <article
      className={`course-catalog-card course-card-accent-${accentColor} ${featured ? "card-featured" : ""}`}
      onClick={() => onSelectCourse && onSelectCourse(course)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (onSelectCourse) onSelectCourse(course);
        }
      }}
      aria-label={`View details for ${title}`}
    >
      {/* Top Media / Thumbnail Box */}
      <div className="course-card-media">
        <img
          src={image}
          alt={title}
          className="course-card-img"
          decoding="async"
          width="400"
          height="225"
        />
        <div className="course-card-media-overlay" />

        {/* Badges Over Image */}
        <div className="course-card-badges-row">
          <span className="course-category-badge">{categoryLabel}</span>
          <span className="course-duration-badge">
            <Clock size={12} /> {duration}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="course-card-body">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-desc">{description}</p>

        {/* Skill Tags */}
        {skills && skills.length > 0 && (
          <div className="course-skills-list">
            {skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="course-skill-tag">
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="course-skill-tag skill-tag-more">
                +{skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Card Footer */}
        <div className="course-card-footer">
          <span className="course-cta-link">
            <span>VIEW COURSE</span>
            <ArrowRight size={15} className="course-cta-arrow" />
          </span>
        </div>
      </div>
    </article>
  );
}
