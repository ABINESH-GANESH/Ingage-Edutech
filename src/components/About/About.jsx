import { useState } from "react";
import { company } from "../../data/ingageData";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("who-we-are");
  const { about } = company;

  return (
    <section className="section-wrapper about-section" id="about">
      <div className="about-grid">
        <div>
          <div className="section-tagline">
            <span>⚡</span> ABOUT INGAGE
          </div>
          <h2 className="section-title">
            Redefining How People <span className="cyan-text">Train, Learn & Work</span>
          </h2>
          <p className="section-desc">
            InGage combines boundless creativity, engineering excellence, and
            domain mastery to deliver next-generation spatial computing and
            Industry 4.0 experiences.
          </p>

          <div className="about-key-highlights">
            <div className="highlight-box">
              <strong>Enterprise Solutions</strong>
              <span>AR/VR training, safety, & digital twin telemetry</span>
            </div>
            <div className="highlight-box">
              <strong>InGage EduTech</strong>
              <span>Skill development & academic center of excellence</span>
            </div>
          </div>
        </div>

        <div className="about-vision-card">
          <div className="about-tabs-nav">
            <button
              className={`about-tab-btn ${activeTab === "who-we-are" ? "active" : ""}`}
              onClick={() => setActiveTab("who-we-are")}
            >
              Who We Are
            </button>
            <button
              className={`about-tab-btn ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`about-tab-btn ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
          </div>

          <div className="about-tab-body">
            {activeTab === "who-we-are" && (
              <div>
                <h3>Pioneering Immersive Technologies</h3>
                <p>{about.copy}</p>
              </div>
            )}
            {activeTab === "mission" && (
              <div>
                <h3>Our Core Mission</h3>
                <p>{about.mission}</p>
              </div>
            )}
            {activeTab === "vision" && (
              <div>
                <h3>Our Long-Term Vision</h3>
                <p>{about.vision}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
