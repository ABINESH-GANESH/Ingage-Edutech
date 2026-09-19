import React, { useState, useEffect } from "react";
import {
  Clock,
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Cpu,
  MessageSquare,
  Compass,
  Users,
  Award,
  ShieldCheck,
  Zap,
  Share2,
  Check,
  X
} from "lucide-react";
import { webinarData } from "../data/webinarData";
import "./WebinarPage.css";

export default function WebinarPage({ onNavigate }) {
  const [activeVideoScene, setActiveVideoScene] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  // Auto-cycle through the video script storyboard scenes
  useEffect(() => {
    if (!isPlayingAuto) return;
    const interval = setInterval(() => {
      setActiveVideoScene((prev) => (prev + 1) % webinarData.videoScriptTimeline.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlayingAuto]);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const iconMap = {
    Cpu: <Cpu size={22} className="pillar-icon text-indigo" />,
    FileText: <FileText size={22} className="pillar-icon text-emerald" />,
    MessageSquare: <MessageSquare size={22} className="pillar-icon text-amber" />,
    Compass: <Compass size={22} className="pillar-icon text-cyan" />,
  };

  return (
    <div className="webinar-page-root">
      {/* 1. Cinematic Announcement Top Banner */}
      <div className="webinar-top-strip">
        <div className="container webinar-top-strip-inner">
          <span className="strip-live-pulse" />
          <span className="strip-tag">LIVE CAREER MASTERCLASS</span>
          <span className="strip-divider">•</span>
          <span className="strip-date">Interactive Online Masterclass</span>
          <span className="strip-divider">•</span>
          <span className="strip-seats">100% Free Access · Limited Seats for Freshers</span>
        </div>
      </div>

      {/* 2. Hero Section: Hook & Interactive Video Simulator */}
      <section className="webinar-hero-section">
        <div className="container webinar-hero-grid">
          {/* Left Column: The Problem Hook & Value Proposition */}
          <div className="webinar-hero-left">
            <div className="webinar-kicker-pill">
              <Sparkles size={14} className="text-brand-green" />
              <span>{webinarData.kicker}</span>
            </div>

            <h1 className="webinar-main-heading">
              "Why Are You Not <br />
              <span className="heading-gradient-accent">Getting Shortlisted?"</span>
            </h1>

            <p className="webinar-hook-quote">
              "{webinarData.hook}"
            </p>

            <p className="webinar-hero-description">
              Every fresher is competing with hundreds of applicants with identical degrees. 
              Having a degree is essential, but it doesn't automatically make your profile stand out. 
              Discover the <strong>4 critical pillars</strong> recruiters evaluate before offering technical interviews.
            </p>

            {/* Quick Event Summary Badge Card */}
            <div className="webinar-schedule-card">
              <div className="schedule-item">
                <Video size={18} className="schedule-icon" />
                <div>
                  <span className="sched-label">FORMAT</span>
                  <strong className="sched-val">Live Online Interactive Masterclass</strong>
                </div>
              </div>
              <div className="schedule-item">
                <Clock size={18} className="schedule-icon" />
                <div>
                  <span className="sched-label">DURATION</span>
                  <strong className="sched-val">1-Hour Intensive Session</strong>
                </div>
              </div>
              <div className="schedule-item">
                <Award size={18} className="schedule-icon" />
                <div>
                  <span className="sched-label">ADMISSION</span>
                  <strong className="sched-val">100% Free · Certificate Included</strong>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="webinar-hero-actions">
              <a
                href={webinarData.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary webinar-register-cta"
              >
                <span>Reserve Free Spot Now</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                className="btn btn-outline-share"
                onClick={handleCopyLink}
                aria-label="Share webinar link"
              >
                {copiedLink ? (
                  <>
                    <Check size={16} className="text-emerald" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={16} />
                    <span>Share With Classmates</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Real Webinar Video Player & Interactive Blueprint */}
          <div className="webinar-hero-right">
            <div className="video-player-mockup-card">
              <div className="mockup-header-bar">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="mockup-title">
                  <Video size={13} />
                  <span>InGage Career Readiness Masterclass Video</span>
                </div>
                <div className="video-live-pill">
                  <span className="mentor-live-dot" />
                  <span>HD Video</span>
                </div>
              </div>

              {/* Real Video Player Layer */}
              <div className="webinar-real-video-wrapper">
                <video
                  className="webinar-embedded-video"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/WhatsApp%20Video%202026-09-04%20at%2010.51.33%20AM-compressed.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/videos/WhatsApp Video 2026-09-04 at 10.51.33 AM-compressed.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Bottom Quick Meta Strip */}
              <div className="mockup-bottom-meta">
                <div className="meta-point">
                  <ShieldCheck size={14} className="text-brand-green" />
                  <span>Verified Recruiter Blueprint</span>
                </div>
                <div className="meta-point">
                  <Zap size={14} className="text-amber" />
                  <span>1-Hour Live Interactive Masterclass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Comparison Visualizer: Traditional Pathway vs InGage 4-Pillar Strategy */}
      <section className="webinar-problem-section" id="comparison-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-kicker">THE DIFFERENCE</span>
            <h2 className="section-title-large">Your Degree Gets You Started. Your Profile Gets You Noticed.</h2>
            <p className="section-lead-text">
              Comparing a traditional applicant's uphill journey with InGage's structured 4-pillar career profile framework.
            </p>
          </div>

          <div className="comparison-wrapper">
            {/* Center Visual Divider Indicator */}
            <div className="comparison-vs-badge" aria-hidden="true">
              <span className="vs-badge-text">VS</span>
            </div>

            <div className="funnel-comparison-grid">
              {/* Left Column: Traditional Applicant Pathway */}
              <div className="funnel-column funnel-rejected">
                <div className="funnel-col-header">
                  <div className="funnel-badge badge-warning">
                    <AlertCircle size={13} className="funnel-badge-icon" />
                    <span>TRADITIONAL APPLICANT PATHWAY</span>
                  </div>
                  <h3 className="funnel-col-title">The 90% Filter Barrier</h3>
                  <p className="funnel-col-subtitle">Generic credentials face automated screening drops & recruiter fatigue.</p>
                </div>

                <div className="funnel-timeline-track">
                  {/* Step 1 */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-rejected">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-red">
                          <FileText size={16} />
                        </div>
                        <h4 className="funnel-card-title">100s of Generic Resumes</h4>
                      </div>
                      <p className="funnel-card-desc">Standard degree, textbook theory, no GitHub / cloud proof.</p>
                    </div>
                  </div>

                  {/* Connector 1 */}
                  <div className="funnel-connector connector-red">
                    <span className="connector-line" />
                    <span className="connector-pill pill-red">
                      <ArrowRight size={12} className="connector-arrow" />
                      <span>ATS Keyword Reject</span>
                    </span>
                    <span className="connector-line" />
                  </div>

                  {/* Step 2 */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-rejected">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-red">
                          <Clock size={16} />
                        </div>
                        <h4 className="funnel-card-title">6-Second Recruiter Glance</h4>
                      </div>
                      <p className="funnel-card-desc">Fails to find tangible metrics or live system architecture.</p>
                    </div>
                  </div>

                  {/* Connector 2 */}
                  <div className="funnel-connector connector-red">
                    <span className="connector-line" />
                    <span className="connector-pill pill-red">
                      <ArrowRight size={12} className="connector-arrow" />
                      <span>No Interview Call</span>
                    </span>
                    <span className="connector-line" />
                  </div>

                  {/* Final Outcome Card */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-outcome-rejected">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-outcome-red">
                          <X size={17} />
                        </div>
                        <div className="funnel-outcome-title-wrap">
                          <span className="outcome-tag tag-red">OUTCOME</span>
                          <h4 className="funnel-card-title text-red">Stalled Career Opportunity</h4>
                        </div>
                      </div>
                      <p className="funnel-card-desc">Months spent waiting without feedback or technical defense.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Center Divider (stacked layout on mobile/tablet) */}
              <div className="funnel-mobile-vs-divider" aria-hidden="true">
                <span className="mobile-vs-line" />
                <span className="mobile-vs-badge">VS</span>
                <span className="mobile-vs-line" />
              </div>

              {/* Right Column: InGage 4-Pillar Profile Strategy */}
              <div className="funnel-column funnel-success">
                <div className="funnel-col-header">
                  <div className="funnel-badge badge-success">
                    <Award size={13} className="funnel-badge-icon" />
                    <span>InGAGE 4-PILLAR PROFILE STRATEGY</span>
                  </div>
                  <h3 className="funnel-col-title">The Shortlist Fast-Track</h3>
                  <p className="funnel-col-subtitle">Verifiable hands-on capstones that highlight problem-solving capability.</p>
                </div>

                <div className="funnel-timeline-track">
                  {/* Step 1 */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-success">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-green">
                          <Cpu size={16} />
                        </div>
                        <h4 className="funnel-card-title">Day-One Practical Skills</h4>
                      </div>
                      <p className="funnel-card-desc">Hands-on cloud sandboxes, AI models, and IoT capstone repos.</p>
                    </div>
                  </div>

                  {/* Connector 1 */}
                  <div className="funnel-connector connector-green">
                    <span className="connector-line" />
                    <span className="connector-pill pill-green">
                      <ArrowRight size={12} className="connector-arrow" />
                      <span>High ATS Match Score</span>
                    </span>
                    <span className="connector-line" />
                  </div>

                  {/* Step 2 */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-success">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-green">
                          <CheckCircle2 size={16} />
                        </div>
                        <h4 className="funnel-card-title">Metric-Driven Resume &amp; Portfolio</h4>
                      </div>
                      <p className="funnel-card-desc">Clear impact statements that highlight problem-solving rigor.</p>
                    </div>
                  </div>

                  {/* Connector 2 */}
                  <div className="funnel-connector connector-green">
                    <span className="connector-line" />
                    <span className="connector-pill pill-green">
                      <ArrowRight size={12} className="connector-arrow" />
                      <span>Priority Shortlist</span>
                    </span>
                    <span className="connector-line" />
                  </div>

                  {/* Final Outcome Card */}
                  <div className="funnel-timeline-node">
                    <div className="funnel-step-card card-outcome-success">
                      <div className="funnel-card-header">
                        <div className="funnel-step-icon-wrap icon-outcome-green">
                          <Check size={17} />
                        </div>
                        <div className="funnel-outcome-title-wrap">
                          <span className="outcome-tag tag-green">VERIFIED OUTCOME</span>
                          <h4 className="funnel-card-title text-green">Direct Technical Interview Rounds</h4>
                        </div>
                      </div>
                      <p className="funnel-card-desc">Confident defense of architecture, leading directly to job offers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Introduce the Solution: 4 Pillars of Career Profile */}
      <section className="webinar-pillars-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-kicker">BUILD YOUR CAREER PROFILE</span>
            <h2 className="section-title-large">The 4 Core Pillars Covered in This Masterclass</h2>
            <p className="section-lead-text">
              We move beyond generic theoretical advice to give you actionable engineering frameworks you can deploy immediately.
            </p>
          </div>

          <div className="pillars-cards-grid">
            {webinarData.fourPillars.map((pillar) => (
              <div key={pillar.id} className="pillar-feature-card">
                <div className="pillar-card-top">
                  <span className="pillar-number">{pillar.num}</span>
                  <span className="pillar-badge">{pillar.tag}</span>
                </div>
                <div className="pillar-icon-box">
                  {iconMap[pillar.icon]}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-footer-check">
                  <CheckCircle2 size={15} className="text-brand-green" />
                  <span>Workshop Key Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Agenda & What You Will Gain */}
      <section className="webinar-agenda-section">
        <div className="container">
          <div className="agenda-split-wrap">
            <div className="agenda-left">
              <span className="section-kicker">1-HOUR INTENSIVE BLUEPRINT</span>
              <h2 className="section-title-large">What We Will Cover in 60 Minutes</h2>
              <p className="agenda-intro-p">
                Every minute of this workshop is structured to provide high-impact, actionable insights directly applicable to your upcoming campus drives and off-campus applications.
              </p>

              <div className="mentor-spotlight-card">
                <div className="mentor-spotlight-avatar">
                  <Users size={28} className="text-brand-green" />
                </div>
                <div className="mentor-spotlight-info">
                  <strong>{webinarData.mentorProfile.name}</strong>
                  <span className="mentor-role">{webinarData.mentorProfile.role}</span>
                  <p className="mentor-bio">{webinarData.mentorProfile.bio}</p>
                </div>
              </div>
            </div>

            <div className="agenda-right">
              <div className="agenda-timeline-stack">
                {webinarData.agendaTopics.map((topic, index) => (
                  <div key={index} className="agenda-topic-row">
                    <div className="agenda-time-pill">{topic.time}</div>
                    <div className="agenda-topic-content">
                      <h4 className="agenda-topic-title">{topic.title}</h4>
                      <p className="agenda-topic-desc">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Official Career Readiness Workshop Poster Section */}
      <section className="webinar-poster-section" id="register">
        <div className="container">
          <div className="webinar-poster-card-wrapper">
            <div className="poster-header-center">
              <div className="poster-logo-badge">
                <img
                  src={webinarData.logoImage}
                  alt="InGage EduTech Logo"
                  className="poster-official-logo"
                />
              </div>
              <span className="section-kicker">OFFICIAL WORKSHOP POSTER &amp; REGISTRATION</span>
              <h2 className="section-title-large">Career Readiness Workshop</h2>
              <p className="section-lead-text">
                For Final-Year Students, Freshers &amp; Job Seekers • Global Certification Pathways through IBM, Oracle, Google &amp; NVIDIA.
              </p>
            </div>

            <div className="poster-visual-showcase-grid">
              {/* Left/Main: High-Res Official Poster Display */}
              <div className="poster-image-frame">
                <img
                  src={webinarData.posterImage}
                  alt="InGage EduTech Career Readiness Workshop Official Poster"
                  className="official-workshop-poster-image"
                  decoding="async"
                />
              </div>

              {/* Right: Key Takeaways, Global Partners, QR Code & Direct Registration Link */}
              <div className="poster-info-sidebar">
                <div className="poster-info-box">
                  <span className="poster-info-kicker">1. WORKSHOP DETAILS</span>
                  <h4 className="poster-info-title">Industry-Aligned Skills</h4>
                  <p className="poster-info-p">
                    Explore how to leverage hands-on practical skills and globally accredited certification opportunities through InGage global enterprise partners.
                  </p>
                </div>

                <div className="poster-info-box">
                  <span className="poster-info-kicker">2. GLOBAL PARTNERS</span>
                  <h4 className="poster-info-title">Certification Pathways</h4>
                  <p className="poster-info-p">
                    Official pathways aligned with <strong>IBM</strong>, <strong>Oracle</strong>, <strong>Google</strong>, and <strong>NVIDIA</strong> to strengthen student portfolios.
                  </p>
                </div>

                <div className="poster-info-box">
                  <span className="poster-info-kicker">3. WORKSHOP MESSAGE</span>
                  <h4 className="poster-info-title">Stand Out &amp; Get Shortlisted</h4>
                  <p className="poster-info-p">
                    Learn what recruiters look for, build verified project proof, and transition smoothly from campus to high-growth tech careers.
                  </p>
                </div>

                {/* Scannable QR Code & Registration Box */}
                <div className="poster-qr-registration-card">
                  <div className="qr-image-wrapper">
                    <img
                      src={webinarData.qrImage}
                      alt="Scan to Register - Career Readiness Workshop QR Code"
                      className="qr-code-img"
                    />
                    <span className="qr-scan-label">SCAN TO REGISTER</span>
                  </div>
                  <div className="qr-details-block">
                    <span className="qr-direct-link-label">Direct Registration Form URL:</span>
                    <a
                      href={webinarData.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qr-direct-link-url"
                    >
                      {webinarData.registrationUrl}
                    </a>
                    <p className="qr-help-text">
                      Scan the QR code with your mobile camera or click the link above to submit your workshop registration.
                    </p>
                  </div>
                </div>

                <div className="poster-action-buttons-wrap">
                  <a
                    href={webinarData.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary poster-reserve-btn"
                  >
                    <span>Reserve Your Seat Now</span>
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href={webinarData.posterImage}
                    download="InGage-Career-Readiness-Workshop-Poster.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-share poster-download-btn"
                  >
                    <span>Download Official Poster</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Community Callout: JOIN InGAGE CAREER CONNECT */}
      <section className="webinar-community-banner">
        <div className="container">
          <div className="community-banner-card">
            <div className="community-banner-text">
              <span className="comm-kicker">LIFELONG ADVANCEMENT</span>
              <h3 className="comm-title">
                JOIN <span className="comm-brand-gradient">InGAGE CAREER CONNECT</span>
              </h3>
              <p className="comm-subtitle">Career Guidance • Practical Skills • Direct Opportunities</p>
              <p className="comm-desc">
                Connect with corporate mentors, fellow engineering peers, and get direct updates on exclusive hackathons, internships, and hiring drives.
              </p>
            </div>
            <div className="community-banner-actions">
              <a
                href={webinarData.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white-pill"
              >
                <span>Register &amp; Join Today</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
