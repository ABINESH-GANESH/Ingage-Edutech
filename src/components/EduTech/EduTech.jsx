import { edutech } from "../../data/edutechData";
import "./EduTech.css";

export default function EduTech() {
  return (
    <section className="edutech-editorial" id="edutech">
      <div className="editorial-container">
        <div className="edutech-header-grid">
          <span className="tech-label tech-label-accent">
            08 // SKILL DEVELOPMENT & ACADEMIA
          </span>
          <h2 className="edutech-main-h2">
            FROM EMERGING <span className="navy-text">TECHNOLOGY</span><br />
            TO INDUSTRY-READY <span className="green-text">SKILLS.</span>
          </h2>
          <p className="edutech-lead-p">{edutech.copy}</p>
        </div>

        {/* 5-Step Learning Pathway: DISCOVER -> LEARN -> BUILD -> SIMULATE -> APPLY */}
        <div className="pathway-horizontal-system">
          {edutech.pathway.map((p) => (
            <div key={p.step} className="pathway-step-cell">
              <span className="pathway-step-num">STAGE // [{p.step}]</span>
              <div className="pathway-step-name">{p.name}</div>
              <p className="pathway-step-action">{p.action}</p>
            </div>
          ))}
        </div>

        {/* 8 Emerging Tech Skill Domains */}
        <div className="edutech-skills-grid">
          {edutech.skills.map((s, idx) => (
            <div key={idx} className="edutech-skill-item">
              <h5>{s.name}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Sample 60-Hour Curricula */}
        <div className="edutech-courses-frame">
          {edutech.sampleCourses.map((c) => (
            <div key={c.code} className="course-editorial-card">
              <span className="course-code-tag">COURSE // [{c.code}]</span>
              <h4>{c.title}</h4>
              <div className="course-target-line">{c.target}</div>
              <div className="course-duration-badge">{c.duration} • {c.format}</div>
              <ul>
                {c.topics.map((top, i) => (
                  <li key={i}>{top}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
