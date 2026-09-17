import { company } from "../../data/ingageData";
import "./WhyInGage.css";

export default function WhyInGage() {
  const { whyInGage } = company;

  return (
    <section className="section-wrapper" id="why-ingage">
      <div className="section-header">
        <div className="section-tagline">
          <span>💎</span> WHY CHOOSE INGAGE
        </div>
        <h2 className="section-title">
          Engineered for <span className="cyan-text">Enterprise Excellence</span>
        </h2>
        <p className="section-desc">
          We bridge the chasm between raw technological power and tangible
          organizational ROI through verified domain mastery.
        </p>
      </div>

      <div className="why-grid">
        {whyInGage.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
