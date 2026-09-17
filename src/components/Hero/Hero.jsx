import { brand } from "../../data/brandData";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-editorial" id="hero">
      <div className="editorial-container">
        <div className="hero-grid">
          {/* Left: Editorial Typography */}
          <div>
            <div className="hero-meta-top">
              <span className="tech-label tech-label-accent">
                00 // MANIFESTO
              </span>
              <span className="tech-label tech-label-navy">
                CHENNAI, IN [EST. {brand.established}]
              </span>
            </div>

            <h1 className="hero-headline">
              MAKE<br />
              <span className="navy-text">TECHNOLOGY</span><br />
              <span className="green-text">FEEL REAL.</span>
            </h1>

            <div className="hero-subtag">
              AR <span className="green-text">/</span> VR <span className="green-text">/</span> MR <span className="green-text">/</span> AI <span className="green-text">/</span> IoT <span className="green-text">/</span> DIGITAL TWINS
            </div>

            <p className="hero-lead">{brand.heroDescription}</p>

            <div className="hero-actions">
              <a href="#solutions" className="btn-editorial-primary">
                Explore InGage
              </a>
              <a href="#contact" className="btn-editorial-secondary">
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Right: Technical Composition in Brand Colors */}
          <div className="hero-visual-frame">
            <div className="hero-visual-header">
              <span>SYSTEM: SPATIAL_TELEMETRY_ENGINE</span>
              <span style={{ color: "var(--brand-green)" }}>COORD: {brand.coordinates}</span>
            </div>

            {/* Industrial Wireframe & Human-Machine Schematic with Brand Green & Navy */}
            <svg
              viewBox="0 0 500 360"
              className="hero-schematic-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Technical Grid Overlay */}
              <defs>
                <pattern id="techGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#E6E6DC" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="500" height="360" fill="url(#techGrid)" />

              {/* Machinery CAD Axonometric Projection */}
              <g transform="translate(140, 60)">
                {/* Isometric machine base */}
                <polygon points="110,20 220,70 110,120 0,70" stroke="#15428F" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.9"/>
                <polygon points="0,70 110,120 110,190 0,140" stroke="#15428F" strokeWidth="1.5" fill="#F4F6FA"/>
                <polygon points="110,120 220,70 220,140 110,190" stroke="#15428F" strokeWidth="1.5" fill="#E8EDF5"/>

                {/* Cylindrical Motor Assembly */}
                <ellipse cx="110" cy="50" rx="35" ry="18" stroke="#80BC00" strokeWidth="2" fill="#F8FAFC"/>
                <path d="M75 50 L75 90 C75 100 145 100 145 90 L145 50" stroke="#80BC00" strokeWidth="2" fill="none"/>
                
                {/* Holographic AR Spatial Rings */}
                <circle cx="110" cy="70" r="65" stroke="#80BC00" strokeWidth="1.5" strokeDasharray="5 5"/>
                <circle cx="110" cy="70" r="95" stroke="#15428F" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="8 6"/>

                {/* Spatial Annotation Vectors */}
                <line x1="145" y1="50" x2="210" y2="20" stroke="#80BC00" strokeWidth="1.5"/>
                <circle cx="210" cy="20" r="4" fill="#80BC00"/>
                <text x="218" y="24" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#15428F" fontWeight="bold">
                  [RPM: 3,420 // NOMINAL]
                </text>

                <line x1="75" y1="90" x2="10" y2="120" stroke="#15428F" strokeWidth="1.5"/>
                <circle cx="10" cy="120" r="4" fill="#15428F"/>
                <text x="16" y="132" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#80BC00" fontWeight="bold">
                  [TWIN_SYNC: ACTIVE]
                </text>
              </g>

              {/* Crosshair Markers */}
              <text x="20" y="30" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#80BC00">+</text>
              <text x="470" y="30" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#15428F">+</text>
              <text x="20" y="340" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#15428F">+</text>
              <text x="470" y="340" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#80BC00">+</text>
            </svg>

            <div className="hero-visual-footer">
              <span style={{ color: "var(--brand-green)", fontWeight: 700 }}>STATUS: AR_OVERLAY_ACTIVE</span>
              <span>LATENCY: 8.4ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
