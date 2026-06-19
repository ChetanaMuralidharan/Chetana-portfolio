import { useState } from "react";
import projects from "../data/projects";

export default function Projects() {
  const [role, setRole] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;

  const filtered = role === "all"
    ? projects
    : projects.filter((p) => p.roles.includes(role));

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section-projects">
      <div className="section-sticky-header">
        <h2>Projects</h2>
        <div className="tabs" style={{ marginBottom: 0, marginTop: 20 }}>
          {["all", "ai", "data-eng", "analytics", "swe"].map((r) => (
            <button
              key={r}
              className={`tab-btn ${role === r ? "active" : ""}`}
              onClick={() => { setRole(r); setShowAll(false); }}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="card-grid" style={{ marginTop: 24 }}>
        {visible.map((p) => (
          <div key={p.id} className="project-tile">
            {/* Project image banner */}
            <div className="project-img-banner">
              {p.image
                ? <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "10px",
                      boxSizing: "border-box",
                    }}
                  />
                : <div className="project-img-placeholder">
                    <span style={{ fontSize: "2rem" }}>{p.placeholderIcon || "📊"}</span>
                  </div>
              }
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
        ))}
      </div>

      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "none",
              border: "2px solid #f76493",
              color: "#f76493",
              borderRadius: "999px",
              padding: "10px 32px",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.target.style.background = "#f76493"; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = "#f76493"; }}
          >
            {showAll ? "Show Less ↑" : `Show ${filtered.length - INITIAL_COUNT} More Projects ↓`}
          </button>
        </div>
      )}
    </section>
  );
}