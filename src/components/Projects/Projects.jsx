import { selectedProjects } from "../../data/projectsData";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-editorial" id="work">
      <div className="editorial-container">
        <div className="projects-header-block">
          <div>
            <span className="tech-label tech-label-accent">
              07 // CASE ARCHIVE
            </span>
            <h2 className="projects-main-h2">
              SELECTED <span className="navy-text">WORK</span>
            </h2>
          </div>
          <span className="tech-label" style={{ color: "var(--brand-green)" }}>
            500+ DELIVERIES SINCE 2012
          </span>
        </div>

        <div className="projects-editorial-grid">
          {selectedProjects.map((proj) => (
            <div key={proj.number} className="project-editorial-card">
              <div>
                <div className="proj-top-meta">
                  <span className="proj-number">[{proj.number}]</span>
                  <span className="proj-industry">{proj.industry}</span>
                </div>

                <h3 className="proj-title-h3">{proj.title}</h3>
                <span className="proj-tech-line">{proj.technology}</span>

                <p className="proj-desc-p">{proj.description}</p>
              </div>

              <div className="proj-details-box">
                {proj.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
