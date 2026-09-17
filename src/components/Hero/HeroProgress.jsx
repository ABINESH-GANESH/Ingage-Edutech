import "./HeroProgress.css";

const STAGES = [
  { id: 0, code: "01", label: "EXPERIENTIAL", desc: "Campus Skilling & Tech Platform" },
  { id: 1, code: "02", label: "LEARNING", desc: "Hands-on Campus Cohort Training" },
  { id: 2, code: "03", label: "IMMERSIVE TECHNOLOGY", desc: "Spatial AR / VR Computing" },
];

export default function HeroProgress({ activeIndex = 0, onSelectStage }) {
  const progressPercent = (activeIndex / (STAGES.length - 1)) * 100;

  return (
    <div className="hero-progress-root" aria-label="Hero Visual Story Navigation">
      <div className="hero-progress-line-wrap">
        <div className="hero-progress-bg-track" />
        <div
          className="hero-progress-fill-bar"
          style={{ width: `${progressPercent}%` }}
        />

        <div className="hero-progress-milestones">
          {STAGES.map((st, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;

            return (
              <button
                key={st.id}
                type="button"
                className={`hero-progress-btn ${isActive ? "btn-active" : ""} ${
                  isCompleted ? "btn-completed" : ""
                }`}
                onClick={() => onSelectStage && onSelectStage(idx)}
                aria-label={`Jump to stage ${st.code} ${st.label}`}
              >
                <span className="milestone-dot-ring">
                  <span className="milestone-dot-core" />
                </span>
                <span className="milestone-label-stack">
                  <strong className="milestone-code">{st.code}</strong>
                  <span className="milestone-name">{st.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
