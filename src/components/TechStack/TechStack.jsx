import { company } from "../../data/ingageData";
import "./TechStack.css";

export default function TechStack() {
  const { techStack, creativeTeam } = company;

  return (
    <section className="section-wrapper" id="techstack">
      {/* Visual Technology Matrix */}
      <div className="section-header">
        <div className="section-tagline">
          <span>⚡</span> MULTI-DISCIPLINARY TECH STACK
        </div>
        <h2 className="section-title">
          Built With Next-Gen <span className="cyan-text">Technologies</span>
        </h2>
        <p className="section-desc">
          We leverage industry-standard 3D engines, spatial frameworks, AI pipelines,
          and embedded IoT hardware to power enterprise applications.
        </p>
      </div>

      <div className="tech-cloud">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-badge-item">
            <span style={{ color: "var(--cyan-main)" }}>◆</span>
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Where Creativity Meets Technology */}
      <div className="team-section-box">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-tagline" style={{ borderColor: "var(--border-purple)", color: "var(--purple-light)" }}>
            🎨 OUR EXPERTISE
          </span>
          <h3 style={{ fontSize: "30px", fontWeight: 800, marginTop: "10px" }}>
            Where Creativity Meets Technology
          </h3>
          <p style={{ color: "var(--text-muted)", marginTop: "12px", fontSize: "15px" }}>
            InGage houses an integrated team of artists, physicists, 3D animators,
            and firmware engineers working collaboratively under one roof.
          </p>
        </div>

        <div className="team-roles-grid">
          {creativeTeam.map((member, i) => (
            <div key={i} className="team-role-card">
              <strong>{member.role}</strong>
              <span>{member.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
