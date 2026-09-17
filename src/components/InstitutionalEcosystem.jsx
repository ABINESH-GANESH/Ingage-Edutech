import { approvedData } from "../data/approvedData";
import "./InstitutionalEcosystem.css";

export default function InstitutionalEcosystem() {
  const { institutionalEcosystem } = approvedData;

  return (
    <section className="section section-page institutional-root" id="institutional">
      <div className="container">
        <div className="institutional-split-grid">
          {/* Left Column: Heading & Feature Points */}
          <div className="inst-left-content">
            <div className="section-eyebrow">
              <span className="eyebrow-dot"></span>
              <span>ACADEMIC DEPLOYMENTS</span>
            </div>

            <h2 className="section-title">{institutionalEcosystem.heading}</h2>

            <p className="inst-main-desc">{institutionalEcosystem.description}</p>

            <div className="inst-features-list">
              {institutionalEcosystem.features.map((item, idx) => (
                <div key={item.title} className="inst-feature-item">
                  <div className="inst-item-indicator">
                    <span>0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="inst-item-title">{item.title}</h3>
                    <p className="inst-item-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Physical Laboratory Schematic Visual */}
          <div className="inst-visual-frame">
            <div className="inst-blueprint-card">
              <div className="blueprint-top-bar">
                <span className="blueprint-label">CAMPUS NODE ARCHITECTURE // CO-ORDINATE MATRIX</span>
                <span className="blueprint-status">DEPLOYED</span>
              </div>

              <div className="blueprint-body">
                <div className="blueprint-grid-row">
                  <div className="blueprint-node">
                    <span className="node-badge">NODE A</span>
                    <h4>Spatial Computing Bay</h4>
                    <p>6-DOF Headset Matrix, Tracking Anchors & XR Suite</p>
                  </div>
                  <div className="blueprint-node">
                    <span className="node-badge">NODE B</span>
                    <h4>Drone Flight Cage</h4>
                    <p>Telemetry Ground Station, Rotor Test Benches & Calibration</p>
                  </div>
                </div>

                <div className="blueprint-grid-row">
                  <div className="blueprint-node">
                    <span className="node-badge">NODE C</span>
                    <h4>Embedded IoT Workbench</h4>
                    <p>FreeRTOS Logic Analyzers, Sensor Racks & MQTT Broker</p>
                  </div>
                  <div className="blueprint-node">
                    <span className="node-badge">NODE D</span>
                    <h4>Cloud Sandbox Server</h4>
                    <p>Google Cloud Dedicated ACE Pods & BigQuery Sandboxes</p>
                  </div>
                </div>
              </div>

              <div className="blueprint-footer">
                <span>TURNKEY PHYSICAL LAB INFRASTRUCTURE</span>
                <a href="#contact" className="blueprint-cta-link">
                  Deploy to Campus →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
