import { insideIngage } from "../../data/insideData";
import "./InsideIngage.css";

export default function InsideIngage() {
  return (
    <section className="inside-editorial" id="inside">
      <div className="editorial-container">
        <div className="inside-header-grid">
          <div>
            <span className="tech-label tech-label-accent">
              06 // MULTIDISCIPLINARY CRAFT
            </span>
            <h2 className="inside-main-h2">
              INSIDE <span className="navy-text">INGAGE</span> <span className="green-text">EDUTECH</span>
            </h2>
          </div>
          <p className="inside-lead-p">{insideIngage.copy}</p>
        </div>

        {/* 10 Disciplines Matrix */}
        <div className="disciplines-grid">
          {insideIngage.disciplines.map((item) => (
            <div key={item.code} className="discipline-sketch-card">
              <div>
                <div className="disc-code">[{item.code}]</div>
                <h4 className="disc-name-h4">{item.name}</h4>
                <p className="disc-focus-p">{item.focus}</p>
              </div>
              <div className="disc-spec-tag">{item.spec}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
