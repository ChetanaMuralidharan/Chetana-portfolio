import { useState } from "react";
import skills from "../data/skills";

export default function Skills() {
  const [role, setRole] = useState("all");

  const filtered = Object.entries(skills).filter(([, data]) =>
    role === "all" || data.roles.includes(role)
  );

  return (
    <section id="skills" className="section-skills">
      <div className="section-sticky-header">
        <h2>Skills</h2>
        <div className="tabs" style={{ marginBottom: 0, marginTop: 20 }}>
          {["all", "ai", "data-eng", "analytics", "swe"].map((r) => (
            <button
              key={r}
              className={`tab-btn ${role === r ? "active" : ""}`}
              onClick={() => setRole(r)}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-grid" style={{ marginTop: 24 }}>
        {filtered.map(([category, data]) => (
          <div key={category} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-emoji">{data.emoji}</span>
              <span className="skill-name">{category}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${data.level * 10}%` }} />
            </div>
            <div className="skill-pills-wrap">
              {data.items.map((item) => (
                <span className="skill-pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}