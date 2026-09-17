import "./WhyIngage.css";

export default function WhyIngage() {
  const pillars = [
    {
      index: "01",
      title: "Immersive by design",
      description:
        "Every module is engineered from the ground up for spatial interaction, boosting learner focus, situational awareness, and deep intuition.",
    },
    {
      index: "02",
      title: "Technology driven",
      description:
        "Built on modern open standards, cross-platform spatial engines, and high-performance device synchronization with minimal hardware overhead.",
    },
    {
      index: "03",
      title: "Built for scale",
      description:
        "Architected for seamless institutional rollout across hundreds of classrooms, enterprise campuses, and multi-location training centers.",
    },
    {
      index: "04",
      title: "Focused on outcomes",
      description:
        "Real-time analytics and rigorous assessment frameworks ensure every training hour directly translates to verifiable skill competency.",
    },
  ];

  return (
    <section className="section why-ingage-section" id="impact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>IMPACT & ADVANTAGE</span>
          </div>
          <h2 className="section-title">Why organisations choose InGage</h2>
          <p className="section-subtitle">
            A trusted engineering partner delivering measurable educational and
            operational impact across India and global markets.
          </p>
        </div>

        {/* Simple Editorial 4-Column Layout */}
        <div className="why-ingage-grid">
          {pillars.map((item) => (
            <div key={item.index} className="why-editorial-card">
              <span className="why-index-num">{item.index}</span>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
