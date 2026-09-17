import "./Overview.css";

export default function Overview() {
  const pillars = [
    {
      code: "AR & VR",
      title: "Spatial Immersion",
      description:
        "Immersive experiences that help learners understand complex concepts through direct manipulation and spatial visualization.",
      tag: "Spatial Simulation",
    },
    {
      code: "IoT",
      title: "Connected Systems",
      description:
        "Connected environments that turn physical spaces into intelligent learning systems with real-time sensor integration.",
      tag: "Hardware Telemetry",
    },
    {
      code: "EdTech",
      title: "Institutional Scale",
      description:
        "Digital-first learning solutions designed for institutions and organizations needing structured curriculum delivery.",
      tag: "Enterprise Platforms",
    },
    {
      code: "Experience",
      title: "Outcome Driven",
      description:
        "Interactive learning designed around engagement, understanding and measurable learning outcomes that stick.",
      tag: "Cognitive Retention",
    },
  ];

  return (
    <section className="section overview-section" id="overview">
      <div className="container">
        <div className="section-header overview-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>OVERVIEW</span>
          </div>
          <h2 className="section-title">
            Technology that makes learning more immersive
          </h2>
          <p className="section-subtitle">
            InGage develops technology-driven learning experiences that bridge
            the gap between digital content and the real world.
          </p>
        </div>

        {/* 4-Column Layout with Thin Separators */}
        <div className="overview-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={pillar.code} className="overview-pillar-col">
              <div className="pillar-top-meta">
                <span className="pillar-code-badge">{pillar.code}</span>
                <span className="pillar-index">0{idx + 1}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
              <div className="pillar-footer-tag">
                <span>{pillar.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
