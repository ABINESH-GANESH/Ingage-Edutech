import React from "react";
import { CheckCircle2, ArrowRight, Home, Sparkles } from "lucide-react";
import "./ApplicationSuccess.css";

export default function ApplicationSuccess({
  submissionData,
  onExploreMore,
  onNavigateHome,
}) {
  const oppTitle = submissionData?.opportunity?.title || "Career Opportunity";
  const candidateName = submissionData?.candidate?.fullName || "Candidate";

  return (
    <div className="application-modal-overlay" role="dialog" aria-modal="true">
      <div className="application-success-dialog">
        <div className="success-badge-top">
          <div className="success-icon-halo">
            <CheckCircle2 size={36} className="text-green success-checkmark" />
          </div>
        </div>

        <span className="success-eyebrow">
          <Sparkles size={13} className="text-green" />
          SUBMISSION CONFIRMED
        </span>

        <h2 className="success-main-title">APPLICATION RECEIVED</h2>

        <p className="success-lead-text">
          Thank you, <strong>{candidateName}</strong>. Your application for <strong>{oppTitle}</strong> has been submitted successfully.
        </p>

        {/* Status Checkpoints */}
        <div className="success-checklist-box">
          <div className="success-check-row">
            <CheckCircle2 size={16} className="text-green" />
            <span>Application successfully recorded</span>
          </div>
          <div className="success-check-row">
            <CheckCircle2 size={16} className="text-green" />
            <span>Candidate profile and portfolio indexed</span>
          </div>
          <div className="success-check-row">
            <CheckCircle2 size={16} className="text-green" />
            <span>Our technical recruiting team will review your profile</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="success-actions-row">
          <button
            type="button"
            className="btn btn-primary btn-success-primary"
            onClick={onExploreMore}
            aria-label="Explore more opportunities"
          >
            <span>Explore More Opportunities</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-success-secondary"
            onClick={onNavigateHome}
            aria-label="Return to homepage"
          >
            <Home size={15} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
