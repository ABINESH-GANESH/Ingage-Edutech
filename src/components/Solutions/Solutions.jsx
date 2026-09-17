import { useState } from "react";
import { solutions } from "../../data/solutionsData";
import "./Solutions.css";

export default function Solutions() {
  const [activeItem, setActiveItem] = useState("01");

  return (
    <section className="solutions-editorial" id="solutions">
      <div className="editorial-container">
        <div className="solutions-header-bar">
          <div>
            <span className="tech-label tech-label-accent">
              03 // CORE OFFERINGS
            </span>
            <h2 className="solutions-main-h2">
              WHAT WE <span className="navy-text">MAKE</span>
            </h2>
          </div>
          <span className="tech-label" style={{ color: "var(--brand-green)" }}>
            CLICK OR HOVER TO EXPAND TECHNICAL SPECS
          </span>
        </div>

        <div className="solutions-list-editorial">
          {solutions.map((item) => (
            <div
              key={item.number}
              className={`solution-editorial-item ${activeItem === item.number ? "active" : ""}`}
              onMouseEnter={() => setActiveItem(item.number)}
              onClick={() => setActiveItem(item.number)}
            >
              <div className="solution-item-row-top">
                <div className="solution-num-title">
                  <span className="solution-item-num">[{item.number}]</span>
                  <h3 className="solution-item-title">{item.title}</h3>
                </div>
                <span className="solution-item-category">
                  {item.category}
                </span>
              </div>

              {activeItem === item.number && (
                <div className="solution-expanded-drawer">
                  <div className="solution-expanded-left">
                    <h4>{item.headline}</h4>
                    <p>{item.description}</p>
                  </div>

                  <div className="solution-expanded-right">
                    <ul>
                      {item.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                    <div className="solution-metadata-tag">
                      {item.metadata}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
