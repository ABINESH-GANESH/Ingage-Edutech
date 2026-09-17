import { brand } from "../../data/brandData";
import "./Numbers.css";

export default function Numbers() {
  return (
    <section className="numbers-editorial">
      <div className="editorial-container">
        <div style={{ marginBottom: "36px" }}>
          <span className="tech-label tech-label-accent">
            09 // VERIFIED METRICS
          </span>
        </div>

        <div className="numbers-split-layout">
          <div>
            <span className="numbers-giant-figure">{brand.projectsCount}</span>
            <span className="numbers-giant-label">{brand.projectsLabel}</span>
          </div>

          <div className="numbers-supporting-grid">
            <div className="number-stat-item">
              <span className="num-item-val">51–200</span>
              <div className="num-item-title">Specialist Team</div>
              <p className="num-item-desc">
                Spatial artists, Unity/Unreal developers, and firmware engineers.
              </p>
            </div>

            <div className="number-stat-item">
              <span className="num-item-val">{brand.established}</span>
              <div className="num-item-title">Founded in Chennai</div>
              <p className="num-item-desc">
                Over a decade of continuous immersive technology leadership.
              </p>
            </div>

            <div className="number-stat-item">
              <span className="num-item-val">10+</span>
              <div className="num-item-title">Industries Served</div>
              <p className="num-item-desc">
                From high-hazard manufacturing to university STEM laboratories.
              </p>
            </div>

            <div className="number-stat-item">
              <span className="num-item-val">Pan-India</span>
              <div className="num-item-title">Delivery Footprint</div>
              <p className="num-item-desc">
                Turnkey spatial systems installed in enterprise briefing hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
