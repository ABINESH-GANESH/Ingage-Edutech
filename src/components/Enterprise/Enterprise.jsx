import { enterpriseSolutions } from "../../data/solutionsData";
import "./Enterprise.css";

export default function Enterprise() {
  return (
    <section className="section-wrapper" id="enterprise">
      <div className="section-header">
        <div className="section-tagline" style={{ borderColor: "var(--border-purple)", color: "var(--purple-light)" }}>
          <span>🏢</span> ENTERPRISE TRANSFORMATION
        </div>
        <h2 className="section-title">
          Immersive Solutions for <span className="purple-text">Enterprise</span>
        </h2>
        <p className="section-desc">
          Organizations partner with InGage to dramatically elevate employee
          skills, operational safety, remote servicing, and executive customer experiences.
        </p>
      </div>

      <div className="enterprise-grid">
        {enterpriseSolutions.map((sol, index) => (
          <div key={index} className="enterprise-card">
            <span className="enterprise-icon">{sol.icon}</span>
            <h3>{sol.title}</h3>
            <p>{sol.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
