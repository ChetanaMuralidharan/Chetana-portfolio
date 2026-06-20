import { useState } from "react";
import projects from "../data/projects";

export default function Projects({ activeRole, setActiveRole }) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;

  const filtered = activeRole === "all"
    ? projects
    : projects.filter((p) => p.roles.includes(activeRole));

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
              className={`tab-btn ${activeRole === r ? "active" : ""}`}
              onClick={() => { setActiveRole(r); setShowAll(false); }}
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
            <div className="project-img-banner" style={{ position: "relative" }}>
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

              {/* GitHub link badge */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View on GitHub"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    zIndex: 2,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#1a1a1a";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.92)";
                    e.currentTarget.style.color = "#1a1a1a";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
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