import { company } from "../../data/ingageData";
import "./Stats.css";

export default function Stats() {
  const { stats } = company;

  return (
    <section className="stats-section">
      <div className="stats-grid-full">
        {stats.map((item, index) => (
          <div key={index} className="stat-card-full">
            <strong>{item.value}</strong>
            <h4>{item.label}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
