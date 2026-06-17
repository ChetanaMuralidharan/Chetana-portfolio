import { useState } from "react";
import projects from "../data/projects";

const heroKpi = {
  "lineageiq": { number: "17",   desc: "lineage nodes parsed" },
  "smoke":     { number: "4M+",  desc: "environmental records" },
  "weavenet":  { number: "517K", desc: "emails processed" },
};

export default function Projects() {
  const [role, setRole] = useState("all");

  const filtered = role === "all"
    ? projects
    : projects.filter((p) => p.roles.includes(role));

  return (
    <section id="projects" className="section-projects">
      <div className="section-sticky-header">
        <h2>Projects</h2>
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

      <div className="card-grid" style={{ marginTop: 24 }}>
        {filtered.map((p) => {
          const kpi = heroKpi[p.id] || { number: "—", desc: "" };
          return (
            <div key={p.id} className="project-tile">
              <div className="project-kpi-banner">
                <div className="project-kpi-number">{kpi.number}</div>
                <div className="project-kpi-desc">{kpi.desc}</div>
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-summary">{p.summary}</div>
                <ul className="project-kpis">
                  {p.kpis.map((k, i) => <li key={i}>{k}</li>)}
                </ul>
                <div className="project-tech">{p.tech}</div>
                <div className="role-tags">
                  {p.roles.map((r) => (
                    <span key={r} className="role-pill" data-role={r}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}