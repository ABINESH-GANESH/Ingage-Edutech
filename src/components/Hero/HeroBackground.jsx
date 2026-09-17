import { useEffect, useRef } from "react";
import "./HeroBackground.css";

const SCENES = [
  {
    id: "education",
    name: "EDUCATION",
    label: "Digital Classroom & Foundations",
    code: "01",
    image: "/assets/hero/classroom-lab.jpg",
    badge: "STAGE 01 // FOUNDATIONAL ACADEMIC RIGOR",
    badgeType: "navy",
  },
  {
    id: "ar-vr",
    name: "AR / VR SKILLS",
    label: "Spatial Computing & Digital Twins",
    code: "02",
    image: "/assets/hero/vr-students.jpg",
    badge: "STAGE 02 // SPATIAL COMPUTING & AR/VR",
    badgeType: "cyan",
  },
  {
    id: "iot-robotics",
    name: "IOT & ROBOTICS",
    label: "Hardware Labs & Telemetry",
    code: "03",
    image: "/assets/coe/robotics-lab.jpg",
    badge: "STAGE 03 // IOT, DRONE & ROBOTICS COE",
    badgeType: "green",
  },
  {
    id: "certification",
    name: "CERTIFICATION",
    label: "Google & Enterprise Credentials",
    code: "04",
    image: "/assets/campus/cloud-lab.jpg",
    badge: "STAGE 04 // GLOBAL INDUSTRY CREDENTIALS",
    badgeType: "navy",
  },
  {
    id: "career",
    name: "CAREER",
    label: "Campus-to-Corporate Pathways",
    code: "05",
    image: "/assets/hero/cii-award.jpg",
    badge: "STAGE 05 // CII HONORED CAREER READY",
    badgeType: "green",
  },
];

export default function HeroBackground({ activeScene = 0, mouseOffset = { x: 0, y: 0 } }) {
  const canvasRef = useRef(null);

  // Canvas ambient particle field with dynamic color shifting
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(32, Math.floor(width / 40));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.3 + 0.15,
    }));

    let tick = 0;

    const render = () => {
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Ambient radial glow that softly shifts with the mouse
      const glowX = width * 0.75 + mouseOffset.x * 0.4;
      const glowY = height * 0.45 + mouseOffset.y * 0.4;
      const radialGlow = ctx.createRadialGradient(glowX, glowY, 40, glowX, glowY, width * 0.6);

      if (activeScene === 0) {
        radialGlow.addColorStop(0, "rgba(21, 66, 143, 0.10)");
        radialGlow.addColorStop(0.5, "rgba(133, 195, 0, 0.04)");
        radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else if (activeScene === 1) {
        radialGlow.addColorStop(0, "rgba(6, 182, 212, 0.12)");
        radialGlow.addColorStop(0.5, "rgba(21, 66, 143, 0.05)");
        radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else if (activeScene === 2) {
        radialGlow.addColorStop(0, "rgba(133, 195, 0, 0.12)");
        radialGlow.addColorStop(0.5, "rgba(245, 158, 11, 0.04)");
        radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else if (activeScene === 3) {
        radialGlow.addColorStop(0, "rgba(21, 66, 143, 0.12)");
        radialGlow.addColorStop(0.5, "rgba(133, 195, 0, 0.05)");
        radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else {
        radialGlow.addColorStop(0, "rgba(16, 185, 129, 0.10)");
        radialGlow.addColorStop(0.5, "rgba(21, 66, 143, 0.08)");
        radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      }

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw particle connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.16;
            ctx.strokeStyle = `rgba(21, 66, 143, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const pulse = Math.sin(tick * 2 + i) * 0.25 + 0.75;
        ctx.fillStyle = `rgba(21, 66, 143, ${p.baseAlpha * pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeScene, mouseOffset]);

  // Parallax transform calculations
  const bgParallaxStyle = {
    transform: `translate3d(${mouseOffset.x * 0.35}px, ${mouseOffset.y * 0.35}px, 0)`,
  };

  const midParallaxStyle = {
    transform: `translate3d(${mouseOffset.x * 0.75}px, ${mouseOffset.y * 0.75}px, 0)`,
  };

  return (
    <div className="hero-bg-root" aria-hidden="true">
      {/* 1. Canvas Particle Layer */}
      <canvas ref={canvasRef} className="hero-canvas-field" />

      {/* 2. Perspective Blueprint Grid */}
      <div className="hero-perspective-grid" style={bgParallaxStyle} />

      {/* 3. Five Continuous Cinematic Scenes */}
      <div className="hero-scenes-viewport" style={midParallaxStyle}>
        {SCENES.map((scene, idx) => {
          const isActive = idx === activeScene;

          return (
            <div
              key={scene.id}
              className={`cinematic-scene-plane ${
                isActive ? "scene-visible" : "scene-hidden"
              }`}
            >
              {/* Photo Backdrop with Ken-Burns Camera Motion */}
              <div className="scene-photo-wrap">
                <img
                  src={scene.image}
                  alt={scene.name}
                  className={`scene-photo-img ${isActive ? "photo-kenburns" : ""}`}
                  loading="lazy"
                />
                {/* Soft gradient mask ensuring foreground text remains 100% crystal clear */}
                <div className="scene-photo-scrim" />
              </div>

              {/* Dynamic Digital Spatial Overlay per Scene */}
              <div className="scene-digital-overlay">
                {idx === 0 && (
                  /* Scene 1: Classroom digital telemetry */
                  <svg className="scene-spatial-svg" viewBox="0 0 800 500" fill="none">
                    <path d="M200 420 L400 240 L600 420" stroke="rgba(21, 66, 143, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <rect x="300" y="140" width="200" height="110" rx="10" fill="rgba(255, 255, 255, 0.75)" stroke="rgba(21, 66, 143, 0.3)" strokeWidth="1.5" />
                    <line x1="325" y1="170" x2="475" y2="170" stroke="rgba(21, 66, 143, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="325" y1="190" x2="420" y2="190" stroke="rgba(133, 195, 0, 0.7)" strokeWidth="2" strokeLinecap="round" />
                    <g className="anim-float-slow">
                      <circle cx="560" cy="280" r="14" fill="rgba(133, 195, 0, 0.15)" stroke="#85c300" strokeWidth="1.5" />
                      <circle cx="560" cy="280" r="4" fill="#659600" />
                      <text x="470" y="284" fill="#2e7d32" fontSize="10" fontWeight="bold">1,750+ COLLEGES</text>
                    </g>
                  </svg>
                )}

                {idx === 1 && (
                  /* Scene 2: AR/VR Spatial wireframe machinery (inspired by real VR lab photo) */
                  <svg className="scene-spatial-svg" viewBox="0 0 800 500" fill="none">
                    {/* Isometric spatial machinery wireframe */}
                    <polygon points="400,100 540,180 400,260 260,180" fill="rgba(6, 182, 212, 0.08)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" />
                    <polygon points="260,180 400,260 400,380 260,300" fill="rgba(21, 66, 143, 0.06)" stroke="rgba(21, 66, 143, 0.4)" strokeWidth="1.5" />
                    <polygon points="400,260 540,180 540,300 400,380" fill="rgba(133, 195, 0, 0.06)" stroke="rgba(133, 195, 0, 0.4)" strokeWidth="1.5" />
                    
                    {/* Spatial HUD Ring */}
                    <ellipse cx="400" cy="260" rx="180" ry="80" stroke="rgba(6, 182, 212, 0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <g className="anim-float-slow">
                      <rect x="530" y="120" width="150" height="38" rx="8" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
                      <text x="542" y="136" fill="#0891b2" fontSize="9" fontWeight="bold">6-DOF SPATIAL ENGINE</text>
                      <text x="542" y="149" fill="#0f172a" fontSize="10" fontWeight="600">VR / XR Headset Bay</text>
                    </g>
                  </svg>
                )}

                {idx === 2 && (
                  /* Scene 3: IoT & Robotics circuit bus */
                  <svg className="scene-spatial-svg" viewBox="0 0 800 500" fill="none">
                    <path d="M160 260 L320 260 L380 180 L520 180 L580 260 L700 260" stroke="rgba(133, 195, 0, 0.45)" strokeWidth="2" strokeDasharray="6 3" />
                    <circle cx="380" cy="180" r="18" fill="rgba(133, 195, 0, 0.15)" stroke="#85c300" strokeWidth="2" />
                    <circle cx="380" cy="180" r="6" fill="#85c300" />
                    <path d="M380 180 A 80 80 0 0 1 460 100" stroke="rgba(21, 66, 143, 0.5)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="460" cy="100" r="6" fill="#15428f" />
                    <g className="anim-float-alt">
                      <rect x="520" y="320" width="160" height="38" rx="8" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(133, 195, 0, 0.4)" strokeWidth="1" />
                      <text x="532" y="336" fill="#659600" fontSize="9" fontWeight="bold">MQTT SENSOR TELEMETRY</text>
                      <text x="532" y="349" fill="#0f172a" fontSize="10" fontWeight="600">Drone & IoT Workbench</text>
                    </g>
                  </svg>
                )}

                {idx === 3 && (
                  /* Scene 4: Google Cloud ACE & Global Certification Hub */
                  <svg className="scene-spatial-svg" viewBox="0 0 800 500" fill="none">
                    <ellipse cx="400" cy="240" rx="170" ry="100" stroke="rgba(21, 66, 143, 0.3)" strokeWidth="1.5" strokeDasharray="5 5" />
                    <g className="anim-float-slow">
                      <rect x="330" y="160" width="140" height="150" rx="12" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(21, 66, 143, 0.4)" strokeWidth="2" />
                      <circle cx="400" cy="210" r="22" fill="rgba(133, 195, 0, 0.18)" stroke="#85c300" strokeWidth="2" />
                      <path d="M392 210 L398 216 L410 204" stroke="#659600" strokeWidth="3" strokeLinecap="round" />
                      <text x="350" y="255" fill="#15428f" fontSize="10" fontWeight="bold">GOOGLE CLOUD</text>
                      <text x="362" y="272" fill="#64748b" fontSize="9" fontWeight="600">ACE Certified</text>
                    </g>
                  </svg>
                )}

                {idx === 4 && (
                  /* Scene 5: CII Honor & Career readiness matrix */
                  <svg className="scene-spatial-svg" viewBox="0 0 800 500" fill="none">
                    <path d="M200 420 L400 140 L600 420" stroke="rgba(21, 66, 143, 0.25)" strokeWidth="2" />
                    <line x1="400" y1="400" x2="400" y2="140" stroke="#85c300" strokeWidth="2.5" strokeDasharray="6 3" />
                    <circle cx="400" cy="140" r="14" fill="rgba(133, 195, 0, 0.25)" stroke="#85c300" strokeWidth="2" />
                    <circle cx="400" cy="140" r="5" fill="#659600" />
                    <g className="anim-float-slow">
                      <rect x="500" y="200" width="180" height="42" rx="8" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(21, 66, 143, 0.35)" strokeWidth="1" />
                      <text x="512" y="218" fill="#15428f" fontSize="9" fontWeight="bold">CII INDUSTRY HONORED</text>
                      <text x="512" y="233" fill="#0f172a" fontSize="10" fontWeight="700">10,000+ Placed / Year</text>
                    </g>
                  </svg>
                )}
              </div>

              {/* Top-Right Phase Telemetry Pill */}
              <div className="scene-telemetry-badge">
                <span className={`telemetry-dot dot-${scene.badgeType}`} />
                <span>{scene.badge}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Vignette */}
      <div className="hero-bottom-vignette" />
    </div>
  );
}
