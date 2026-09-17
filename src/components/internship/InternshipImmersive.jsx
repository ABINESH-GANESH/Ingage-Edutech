import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import "./InternshipImmersive.css";

export default function InternshipImmersive({ onExplorePrograms }) {
  const sectionRef = useRef(null);
  const [scaleVal, setScaleVal] = useState(1.05);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        const currentScale = 1.05 - progress * 0.05;
        setScaleVal(currentScale);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="intern-immersive-section" ref={sectionRef}>
      <div className="intern-immersive-bg-wrap" aria-hidden="true">
        <img
          src="/assets/internship/internship-immersive.jpg"
          alt="InGage Immersive Engineering Lab Experience"
          className="intern-immersive-img"
          style={{ transform: `scale(${scaleVal})` }}
          loading="lazy"
        />
        <div className="intern-immersive-overlay" />
      </div>

      <div className="container intern-immersive-container">
        <div className="intern-immersive-content">
          <span className="intern-immersive-badge">
            <Sparkles size={13} className="text-green" /> THE TRANSFORMATIONAL SHIFT
          </span>

          <h2 className="intern-immersive-headline">
            FROM CLASSROOM<br />
            TO REAL-WORLD<br />
            <span className="text-green">TECHNOLOGY.</span>
          </h2>

          <p className="intern-immersive-desc">
            Stop waiting for post-graduation to work with multi-sensor telemetry, spatial digital twins, and industrial robotics. Build what matters today.
          </p>

          <button
            type="button"
            className="btn btn-primary intern-immersive-btn"
            onClick={onExplorePrograms}
          >
            Explore Internship Pathways <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
