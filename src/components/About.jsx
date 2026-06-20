import DashboardRow from "./DashboardRow";
import Tile from "./Tile";

function DonutChart() {
  const segments = [
    { label: "Data Engineering",  pct: 30, color: "#29b0bc" },
    { label: "Analytics Eng",     pct: 20, color: "#f76493" },
    { label: "Gen AI / AI Eng",   pct: 20, color: "#f29e38" },
    { label: "ML / Data Science", pct: 20, color: "#a78bfa" },
    { label: "SWE",               pct: 10, color: "#22c55e" },
  ];

  let cumulative = 0;
  const r = 42, cx = 56, cy = 56, strokeW = 14;
  const circumference = 2 * Math.PI * r;

  const slices = segments.map((s) => {
    const dashArray = `${(s.pct / 100) * circumference} ${circumference}`;
    const rotation = (cumulative / 100) * 360 - 90;
    cumulative += s.pct;
    return { ...s, dashArray, rotation };
  });

  return (
    <div className="donut-tile">
      <svg width="112" height="112" viewBox="0 0 112 112">
        {slices.map((s, i) => (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeW}
            strokeDasharray={s.dashArray}
            strokeDashoffset="0"
            transform={`rotate(${s.rotation} ${cx} ${cy})`}
          />
        ))}
        <text x="56" y="52" textAnchor="middle" fontSize="9" fill="#999" fontFamily="DM Sans, system-ui">Focus</text>
        <text x="56" y="65" textAnchor="middle" fontSize="9" fill="#999" fontFamily="DM Sans, system-ui">Split</text>
      </svg>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6px 12px",
        marginTop: "4px",
      }}>
        {segments.map((s) => (
          <div className="donut-legend-item" key={s.label}>
            <div className="donut-dot" style={{ background: s.color }} />
            {/* <span style={{ fontSize: "0.75rem", color: "#555" }}>{s.label} — {s.pct}%</span> */}
            <span style={{ fontSize: "0.75rem", color: "#555" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const timelineSteps = [
  { label: "B.E. CS",          sub: "2017–2021",      color: "#f29e38", icon: "🎓" },
  { label: "Android Intern",   sub: "2020",            color: "#fb923c", icon: "📱" },
  { label: "Instructor",       sub: "2020–2021",       color: "#60a5fa", icon: "👩‍🏫" },
  { label: "Accenture",        sub: "2021–2024",       color: "#29b0bc", icon: "💼" },
  { label: "Masters @ SJSU",   sub: "2024–2026",       color: "#a78bfa", icon: "🎓" },
  { label: "ISA @ SJSU",       sub: "Jan–May 2026",    color: "#f76493", icon: "🧑‍🏫" },
  { label: "To Be Continued...",      sub: "Now",             color: "#22c55e", icon: "🚀", active: true },
];

function MiniTimeline() {
  return (
    <div style={{
      marginTop: "16px",
      background: "#fff",
      borderRadius: "16px",
      padding: "16px 20px",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.09)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
    }}
    >
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: "12px", fontWeight: 600 }}>
        Journey at a Glance
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto", paddingBottom: "4px" }}>
        {timelineSteps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < timelineSteps.length - 1 ? "1" : "0 0 auto" }}>
            {/* Node — no individual hover effect */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
              <div style={{
                width: step.active ? "38px" : "32px",
                height: step.active ? "38px" : "32px",
                borderRadius: "50%",
                background: step.active
                  ? `linear-gradient(135deg, ${step.color}, ${step.color}aa)`
                  : `${step.color}18`,
                border: `2px solid ${step.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: step.active ? "0.95rem" : "0.85rem",
                boxShadow: step.active ? `0 0 0 4px ${step.color}22` : "none",
                flexShrink: 0,
              }}>
                {step.icon}
              </div>
              <div style={{ textAlign: "center", minWidth: "60px" }}>
                <div style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: step.active ? step.color : "#1a1a1a",
                  whiteSpace: "nowrap",
                }}>
                  {step.label}
                </div>
                <div style={{ fontSize: "0.58rem", color: "#999", whiteSpace: "nowrap" }}>
                  {step.sub}
                </div>
              </div>
            </div>
            {/* Connector line */}
            {i < timelineSteps.length - 1 && (
              <div style={{
                flex: 1,
                height: "2px",
                background: `linear-gradient(to right, ${step.color}66, ${timelineSteps[i+1].color}66)`,
                minWidth: "12px",
                marginBottom: "20px",
                marginLeft: "2px",
                marginRight: "2px",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-about" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
      <h2 style={{ marginBottom: "16px" }}>About Me</h2>

      {/* Top row: bio + donut */}
      <div className="about-top-grid">
        <div className="tile" style={{ padding: "16px 20px" }}>
          <h3>👩‍💻 Who I Am</h3>
          <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
            I'm <strong>Chetana Muralidharan</strong> a Data Engineer, Analytics Engineer, and
            AI builder with 3+ years of industry experience at Accenture and an M.S. in Applied Data Intelligence from SJSU.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
            I work across the full data stack: from raw ingestion and dbt-modeled warehouses to
            LLM-powered pipelines and multi-agent systems. I don't just move data, I make it
            intelligent, observable, and trustworthy.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6 }}>
            9 projects. 5 domains. One throughline: turning complex, messy data into systems
            that actually work.
          </p>
        </div>

        <div className="tile" style={{ padding: "16px 20px" }}>
          <h3>🎯 Focus Split</h3>
          <DonutChart />
        </div>
      </div>

      {/* KPI row */}
      <div className="about-kpi-row" style={{ marginBottom: "0" }}>
        <div className="kpi-tile-pink" style={{ padding: "14px 20px" }}>
          <div className="kpi-tile-number">3+</div>
          <div className="kpi-tile-label">Years Experience</div>
        </div>
        <div className="kpi-tile-teal" style={{ padding: "14px 20px" }}>
          <div className="kpi-tile-number">9</div>
          <div className="kpi-tile-label">Projects Built</div>
        </div>
        <div className="kpi-tile-yellow" style={{ padding: "14px 20px" }}>
          <div className="kpi-tile-number">M.S.</div>
          <div className="kpi-tile-label">CS · SJSU 2026</div>
        </div>
      </div>

      {/* Timeline */}
      <MiniTimeline />

      <style>{`
        .about-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        @media (max-width: 700px) {
          .about-top-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}