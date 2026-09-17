import { company } from "../../data/ingageData";
import "./Careers.css";

export default function Careers() {
  const { careers } = company;

  return (
    <section className="section-wrapper" id="careers">
      <div className="careers-box">
        <span className="section-tagline">🚀 JOIN OUR SQUAD</span>
        <h2 className="section-title" style={{ marginTop: "12px" }}>
          {careers.heading.split("With")[0]}
          <span className="cyan-text">With InGage</span>
        </h2>
        <p className="section-desc" style={{ maxWidth: "600px", margin: "16px auto 0" }}>
          {careers.copy}
        </p>

        <div className="careers-roles-cloud">
          {careers.openings.map((role, idx) => (
            <div key={idx} className="career-role-tag">
              💼 {role}
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-cyan">
          View Open Positions & Apply <span>→</span>
        </a>
      </div>
    </section>
  );
}
