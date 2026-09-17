import { brand } from "../../data/brandData";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro-editorial" id="about">
      <div className="editorial-container">
        <div style={{ marginBottom: "36px" }}>
          <span className="tech-label tech-label-accent">
            01 — ABOUT INGAGE EDUTECH
          </span>
        </div>

        <div className="intro-split-grid">
          {/* Left Side: Dramatic Editorial Statement */}
          <div>
            <h2 className="intro-left-headline">
              WE BUILD EXPERIENCES<br />
              <span className="navy-text">BETWEEN THE PHYSICAL</span><br />
              <span className="green-text">AND THE DIGITAL.</span>
            </h2>
          </div>

          {/* Right Side: Editorial Context & Giant Stat */}
          <div className="intro-right-content">
            <p className="intro-paragraph">
              {brand.introDescription}
            </p>

            <div className="intro-oversized-number">
              <span className="giant-stat-number green-text">{brand.projectsCount}</span>
              <span className="giant-stat-label navy-text">{brand.projectsLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
