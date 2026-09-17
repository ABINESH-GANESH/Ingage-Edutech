import { audienceList } from "../../data/audienceData";
import AudienceCard from "./AudienceCard";
import "./Audience.css";

export default function Audience() {
  return (
    <section className="audience" id="students">
      <div className="section-heading">
        <span className="section-tag">ONE PLATFORM FOR ALL</span>
        <h2>Built for Every Learner & Educator</h2>
        <p>
          World-class digital learning experiences uniquely crafted for
          students, teachers, parents, and institution leaders.
        </p>
      </div>

      <div className="audience-grid">
        {audienceList.map((item) => (
          <AudienceCard key={item.id} audience={item} />
        ))}
      </div>
    </section>
  );
}
