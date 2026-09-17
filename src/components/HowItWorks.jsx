import { approvedData } from "../data/approvedData";
import "./HowItWorks.css";

export default function HowItWorks() {
  const { howItWorks } = approvedData;

  return (
    <section className="section section-page how-it-works-root">
      <div className="container">
        <div className="section-header center-text">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>SEAMLESS INSTITUTIONAL ONBOARDING</span>
          </div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A proven, frictionless three-step pathway to bring industry-grade
            CoE infrastructure and global certification tracks to your campus.
          </p>
        </div>

        {/* 3-Column Editorial Stepper */}
        <div className="how-it-works-grid">
          {howItWorks.map((step) => (
            <div key={step.step} className="how-step-card">
              <div className="step-card-header">
                <span className="step-num-badge">{step.step}</span>
                <span className="step-num-label">{step.number}</span>
              </div>
              <h3 className="step-heading">{step.heading}</h3>
              <div className="step-divider-line"></div>
              <p className="step-detail-text">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
