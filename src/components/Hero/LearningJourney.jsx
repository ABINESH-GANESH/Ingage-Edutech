import "./LearningJourney.css";

const STAGES = [
  { id: 0, code: "01", label: "EDUCATION", hint: "Classroom & Digital Learning" },
  { id: 1, code: "02", label: "AR / VR SKILLS", hint: "Spatial Computing Labs" },
  { id: 2, code: "03", label: "IOT & ROBOTICS", hint: "Hardware & Telemetry" },
  { id: 3, code: "04", label: "CERTIFICATION", hint: "Google & Enterprise Credentials" },
  { id: 4, code: "05", label: "CAREER", hint: "Corporate Placements" },
];

export default function LearningJourney({ activeIndex = 0, onSelectStage }) {
  const progressPercent = (activeIndex / (STAGES.length - 1)) * 100;

  return (
    <div className="learning-journey-root" aria-label="Learning Journey Navigation">
      <div className="journey-header">
        <span className="journey-eyebrow">THE JOURNEY FROM CLASSROOM TO CAREER</span>
        <span className="journey-status">
          ACTIVE PHASE: <strong>{STAGES[activeIndex].label}</strong>
        </span>
      </div>

      <div className="journey-track-container">
        {/* Background Track Line */}
        <div className="journey-track-bg" />

        {/* Animated Progress Fill Line */}
        <div
          className="journey-track-fill"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Stage Milestone Nodes */}
        <div className="journey-nodes-row">
          {STAGES.map((st, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;

            return (
              <button
                key={st.id}
                type="button"
                className={`journey-node-btn ${isActive ? "node-active" : ""} ${
                  isCompleted ? "node-completed" : ""
                }`}
                onClick={() => onSelectStage && onSelectStage(idx)}
                aria-label={`Jump to stage ${st.code} ${st.label}`}
              >
                <div className="journey-node-marker">
                  <span className="marker-dot" />
                  {isActive && <span className="marker-pulse-ring" />}
                </div>

                <div className="journey-node-meta">
                  <span className="node-code">{st.code}</span>
                  <span className="node-label">{st.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
