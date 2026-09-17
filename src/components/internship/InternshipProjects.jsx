import React from "react";
import { ArrowRight, Code2 } from "lucide-react";
import { projectExperienceCategories } from "../../data/internshipData";
import "./InternshipProjects.css";

export default function InternshipProjects({ onSelectProject }) {
  return (
    <section className="section section-page intern-projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="projects-header-flex">
            <div>
              <span className="section-eyebrow section-eyebrow-green">
                <span className="eyebrow-dot" /> REAL-WORLD CAPSTONES
              </span>
              <h2 className="section-title">BUILD SOMETHING REAL.</h2>
            </div>
            <p className="projects-lead-text">
              Move beyond tutorials and classroom exercises. Explore practical technology projects that connect learning with real-world applications.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="intern-projects-grid">
          {projectExperienceCategories.map((proj) => (
            <div
              key={proj.id}
              className="intern-project-card"
              onClick={() => onSelectProject && onSelectProject(proj)}
            >
              <div className="project-card-image-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-card-badge">
                  <span>{proj.category}</span>
                </div>
                <span className="project-card-num">{proj.number}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>

                <div className="project-tech-tags">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
