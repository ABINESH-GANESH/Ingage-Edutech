import "./Industries.css";

export default function Industries() {
  const industries = [
    {
      id: "education",
      title: "Education",
      description:
        "Transform classrooms and learning environments through interactive 3D science labs, engineering models, and spatial storytelling.",
      metrics: "Schools, Universities & STEM Labs",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      id: "corporate",
      title: "Corporate Training",
      description:
        "Make workforce training more practical and engaging with self-paced onboarding simulations, leadership labs, and compliance training.",
      metrics: "Enterprise & Global Workforce",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Enable immersive medical simulation and skill development with anatomical digital twins and risk-free surgical practice environments.",
      metrics: "Hospitals, Medical Colleges & Nursing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      id: "industrial",
      title: "Industrial",
      description:
        "Support technical training through machine simulation, hazardous safety drill scenarios, and connected factory floor experiences.",
      metrics: "Manufacturing, Energy & Automotive",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section section-secondary industries-section" id="industries">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>INDUSTRIES & SECTORS</span>
          </div>
          <h2 className="section-title">
            Technology designed for real-world impact
          </h2>
          <p className="section-subtitle">
            Deployed across forward-thinking institutions, universities, and
            enterprise environments to build measurable real-world competency.
          </p>
        </div>

        {/* 4 Compact Industry Blocks */}
        <div className="industries-grid">
          {industries.map((ind) => (
            <div key={ind.id} className="industry-card">
              <div className="industry-icon-wrap">{ind.icon}</div>
              <h3 className="industry-card-title">{ind.title}</h3>
              <p className="industry-card-desc">{ind.description}</p>
              <div className="industry-card-meta">
                <span className="industry-meta-dot"></span>
                <span>{ind.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
