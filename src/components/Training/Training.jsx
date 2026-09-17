import { trainingSystem } from "../../data/trainingData";
import "./Training.css";

export default function Training() {
  return (
    <section className="training-editorial" id="training">
      <div className="editorial-container">
        <div className="training-header-block">
          <span className="tech-label tech-label-accent">
            05 // EXPERIENTIAL METHODOLOGY
          </span>
          <h2 className="training-main-h2">
            LEARN BY <span className="green-text">EXPERIENCING.</span>
          </h2>
          <p className="training-lead-text">{trainingSystem.copy}</p>

          <a href="#edutech" className="btn-editorial-primary">
            Explore Training <span>→</span>
          </a>
        </div>

        {/* Process Flow: STUDENT -> SIMULATION -> INTERACTION -> SKILL */}
        <div className="process-flow-grid">
          {trainingSystem.processSteps.map((step) => (
            <div key={step.step} className="process-step-card">
              <span className="step-num-top">PHASE // [{step.step}]</span>
              <h4 className="step-name-h4">{step.name}</h4>
              <p className="step-desc-p">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Connected Technology Pillars */}
        <div className="pillars-row-frame">
          {trainingSystem.pillars.map((pil, idx) => (
            <div key={idx} className="pillar-item-box">
              <span className="pillar-code">{pil.code}</span>
              <span className="pillar-label">{pil.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
