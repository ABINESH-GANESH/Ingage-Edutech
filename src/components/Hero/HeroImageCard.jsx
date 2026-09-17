import React, { useRef, useEffect } from "react";
import "./HeroImageCard.css";

export default function HeroImageCard({
  image,
  isVideo = false,
  videoSrc,
  poster,
  alt,
  label,
  subLabel,
  stateClass, // 'card-dominant', 'card-emerging', 'card-receding', 'card-stacked'
  zIndex,
  parallaxOffset = { x: 0, y: 0 },
  glowColor,
}) {
  const cardStyle = {
    zIndex,
    transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
  };

  const videoRef = useRef(null);
  const isMediaVideo = isVideo || (typeof image === "string" && image.endsWith(".mp4")) || Boolean(videoSrc);
  const activeVideoUrl = videoSrc || (typeof image === "string" && image.endsWith(".mp4") ? image : null);

  useEffect(() => {
    if (isMediaVideo && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, [isMediaVideo, activeVideoUrl]);

  return (
    <div className={`hero-image-card ${stateClass} ${glowColor ? `glow-${glowColor}` : ""}`} style={cardStyle}>
      <div className="card-media-wrapper">
        {isMediaVideo ? (
          <video
            ref={videoRef}
            src={activeVideoUrl}
            poster={poster}
            className="card-real-photo card-real-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            aria-label={alt || label}
          >
            <source src={activeVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={image}
            alt={alt}
            className="card-real-photo"
            loading="eager"
          />
        )}
        <div className="card-subtle-scrim" />
        
        {/* Floating Elegant Label */}
        <div className="card-floating-pill">
          <span className="pill-status-dot" />
          <div className="pill-text-stack">
            <strong className="pill-main-label">{label}</strong>
            {subLabel && <span className="pill-sub-label">{subLabel}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
