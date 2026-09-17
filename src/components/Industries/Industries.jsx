import { useState } from "react";
import { industries } from "../../data/industriesData";
import "./Industries.css";

export default function Industries() {
  const [selectedInd, setSelectedInd] = useState(industries[0]);

  return (
    <section className="industries-editorial" id="industries">
      <div className="editorial-container">
        <div className="industries-layout-grid">
          {/* Left: Typographic list */}
          <div>
            <span className="tech-label tech-label-accent">
              04 // SECTOR DEPLOYMENTS
            </span>
            <h2 className="industries-h2">
              BUILT FOR THE<br />
              <span className="navy-text">REAL</span> <span className="green-text">WORLD.</span>
            </h2>

            <div className="industries-typo-list">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  className={`industry-typo-btn ${selectedInd.id === ind.id ? "active" : ""}`}
                  onMouseEnter={() => setSelectedInd(ind)}
                  onClick={() => setSelectedInd(ind)}
                >
                  <span>{ind.name}</span>
                  <span className="ind-arrow">VIEW SECTOR →</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Preview Card */}
          <div className="industry-display-card">
            <div className="ind-card-sector">
              [{selectedInd.sector}]
            </div>

            <h3 className="ind-card-h3">{selectedInd.headline}</h3>

            <p className="ind-card-p">{selectedInd.narrative}</p>

            <div className="ind-card-stats">
              {selectedInd.stats}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
