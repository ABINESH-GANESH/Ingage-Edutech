import React, { useRef, useState, useEffect } from "react";
import "./HeroVisual.css";

export default function HeroVisual({ mouseOffset = { x: 0, y: 0 } }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoSrc = "/videos/tutorials_videos_1785998202458-Website_desktop.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const parallaxStyle = {
    transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
  };

  return (
    <div className="hero-visual-col" aria-label="InGage Platform Showcase Video">
      {/* Ambient Spatial Glow Behind Video */}
      <div className="visual-ambient-glow" />

      {/* Decorative Grid & Coordinate Lines */}
      <div className="visual-spatial-hud">
        <span className="hud-corner hud-tl" />
        <span className="hud-corner hud-tr" />
        <span className="hud-corner hud-bl" />
        <span className="hud-corner hud-br" />
      </div>

      {/* Full-Frame Hero Video Showcase Container */}
      <div className="hero-full-video-card" style={parallaxStyle}>
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            src={videoSrc}
            className="hero-main-video-player"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload noplaybackrate"
            aria-label="InGage EduTech Platform Showcase Video"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Subtle Bottom Gradient Scrim for Readability */}
          <div className="hero-video-scrim" />

          {/* Floating Elegant Info Pill (Bottom Left) */}
          <div className="hero-video-pill">
            <span className="pill-status-dot" />
            <div className="pill-text-stack">
              <strong className="pill-main-label">EXPERIENTIAL LEARNING</strong>
              <span className="pill-sub-label">Campus-to-Corporate Skilling Platform</span>
            </div>
          </div>

          {/* Quick Floating Controls (Bottom Right) */}
          <div className="hero-video-controls">
            <button
              type="button"
              className="hero-control-btn"
              onClick={togglePlay}
              title={isPlaying ? "Pause Video" : "Play Video"}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className={`hero-control-btn ${!isMuted ? "control-active" : ""}`}
              onClick={toggleMute}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
