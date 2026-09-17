import React, { useState } from "react";
import {
  Trophy,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Layers,
  Wrench,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

export default function HackathonCard({ hackathon }) {
  const [showDetails, setShowDetails] = useState(false);

  const {
    title,
    subtitle,
    badge,
    prize,
    domain,
    targetTools = [],
    description,
    phases = [],
    winner,
    runnersUp = [],
  } = hackathon;

  return (
    <article className="hackathon-card-root" id={hackathon.id}>
      {/* 1. Header Lockup: Clean Domain Pill, Prize Pool, Title & Subtitle */}
      <header className="hackathon-card-header">
        <div className="hackathon-header-top-row">
          <div className="hackathon-tag-group">
            <span className="hackathon-domain-pill">
              <Layers size={12} className="pill-icon" />
              {domain}
            </span>
            {badge && <span className="hackathon-status-pill">{badge}</span>}
          </div>

          {prize && (
            <span className="hackathon-prize-pill">
              <Sparkles size={13} className="prize-sparkle" />
              {prize}
            </span>
          )}
        </div>

        <h3 className="hackathon-card-title">{title}</h3>
        <p className="hackathon-card-subtitle">{subtitle}</p>
      </header>

      {/* 2. Challenge Overview & Stack */}
      <div className="hackathon-overview-section">
        <p className="hackathon-desc-text">{description}</p>

        {targetTools.length > 0 && (
          <div className="hackathon-tools-strip">
            <span className="tools-strip-label">
              <Wrench size={12} />
              Stack &amp; Tools:
            </span>
            <div className="tools-chips-wrap">
              {targetTools.map((tool, idx) => (
                <span key={idx} className="tool-chip-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. 3-Phase Timeline (Clean Connected Roadmap) */}
      <div className="hackathon-timeline-wrap">
        <div className="section-label-bar">
          <span className="section-label-text">3-PHASE EVALUATION ROADMAP</span>
        </div>

        <div className="phases-connected-grid">
          {phases.map((phase) => (
            <div key={phase.number} className="phase-card-pill">
              <div className="phase-top-bar">
                <span className="phase-badge-num">{phase.number}</span>
                <strong className="phase-badge-name">{phase.name}</strong>
              </div>

              <div className="phase-date-row">
                {phase.timing && (
                  <span className="phase-date-item">
                    <Calendar size={12} />
                    {phase.timing}
                  </span>
                )}
                {phase.venue && (
                  <span className="phase-date-item venue-highlight">
                    <MapPin size={12} />
                    {phase.venue}
                  </span>
                )}
              </div>

              <p className="phase-simple-desc">{phase.overview}</p>

              {/* Quick Highlight Metric */}
              {(phase.metrics || phase.benchmarks) && (
                <div className="phase-quick-metric">
                  <CheckCircle2 size={13} className="metric-icon" />
                  <span>
                    <strong>{(phase.metrics || phase.benchmarks)[0].label}:</strong>{" "}
                    {(phase.metrics || phase.benchmarks)[0].value}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Breakdown Toggle */}
        <div className="details-toggle-row">
          <button
            type="button"
            className="details-toggle-btn"
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
          >
            <span>{showDetails ? "Hide Full Evaluation Criteria" : "View Full Evaluation Criteria & Benchmarks"}</span>
            {showDetails ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expandable Deep Technical Metrics */}
        {showDetails && (
          <div className="expanded-phases-details">
            <div className="expanded-details-grid">
              {phases.map((phase) => (
                <div key={`expanded-${phase.number}`} className="expanded-phase-box">
                  <div className="exp-phase-title">
                    <span className="exp-num">{phase.number}</span>
                    <strong>{phase.name} Details</strong>
                  </div>

                  {phase.shortlist && (
                    <div className="exp-shortlist">
                      <ShieldCheck size={13} />
                      <span>{phase.shortlist}</span>
                    </div>
                  )}

                  {(phase.metrics || phase.benchmarks) && (
                    <div className="exp-metrics-list">
                      <span className="exp-subhead">
                        {phase.benchmarks ? "Finalist Benchmarks:" : "Scoring Metrics:"}
                      </span>
                      <ul>
                        {(phase.metrics || phase.benchmarks).map((m, idx) => (
                          <li key={idx}>
                            <span className="m-lbl">{m.label}:</span>
                            <strong className="m-val">{m.value}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.criteria && (
                    <div className="exp-criteria-box">
                      <span className="exp-subhead">Assessment Focus:</span>
                      <p>{phase.criteria}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. 🏆 The Winner's Podium */}
      <div className="hackathon-podium-wrap">
        <div className="podium-bar-title">
          <div className="podium-title-text">
            <Trophy size={18} className="trophy-gold-icon" />
            <h4>THE WINNER'S PODIUM</h4>
          </div>
          {prize && <span className="podium-total-badge">{prize}</span>}
        </div>

        <div className="podium-cards-split">
          {/* Winner Spotlight */}
          {winner && (
            <div className="winner-spotlight-card">
              <div className="winner-badge-row">
                <span className="gold-winner-tag">
                  <Trophy size={14} />
                  WINNER TEAM
                </span>
                <span className="winner-cash-award">{winner.prize}</span>
              </div>

              <h4 className="winner-name-txt">{winner.teamName}</h4>
              <p className="winner-college-txt">{winner.institution}</p>

              {winner.members && winner.members.length > 0 && (
                <div className="winner-team-members">
                  <span className="members-title">
                    <Users size={12} />
                    Team Members:
                  </span>
                  <div className="members-chip-row">
                    {winner.members.map((member, idx) => (
                      <span key={idx} className="member-pill">
                        {typeof member === "string" ? member : `${member.name} (${member.role})`}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {winner.solutionTitle && (
                <div className="winning-solution-card">
                  <span className="solution-kicker">WINNING SOLUTION</span>
                  <strong className="solution-headline">{winner.solutionTitle}</strong>
                  <p className="solution-summary-text">{winner.solutionSummary}</p>
                </div>
              )}
            </div>
          )}

          {/* Runners-Up List */}
          {runnersUp && runnersUp.length > 0 && (
            <div className="runners-up-column">
              <span className="runners-col-heading">
                <Award size={15} />
                RUNNER-UP TEAMS
              </span>

              <div className="runners-stack-list">
                {runnersUp.map((runner, idx) => (
                  <div key={idx} className="runner-spotlight-card">
                    <div className="runner-card-top">
                      <span className="runner-badge-pill">{runner.badge || runner.position}</span>
                      <span className="runner-cash-pill">{runner.prize}</span>
                    </div>

                    <h5 className="runner-name-txt">{runner.teamName}</h5>
                    <p className="runner-college-txt">{runner.institution}</p>

                    {runner.members && (
                      <div className="runner-members-snippet">
                        <span className="lbl">Members:</span>{" "}
                        <span className="val">
                          {Array.isArray(runner.members) ? runner.members.join(" • ") : runner.members}
                        </span>
                      </div>
                    )}

                    {runner.solutionTitle && (
                      <div className="runner-solution-snippet">
                        <strong className="s-name">{runner.solutionTitle}:</strong>{" "}
                        <span className="s-desc">{runner.solutionSummary}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
