import DashboardRow from "./DashboardRow";
import Tile from "./Tile";

function DonutChart() {
  const segments = [
    { label: "Data Engineering", pct: 40, color: "#29b0bc" },
    { label: "Analytics",        pct: 35, color: "#f76493" },
    { label: "Applied AI",       pct: 25, color: "#f29e38" },
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
      <div className="donut-legend">
        {segments.map((s) => (
          <div className="donut-legend-item" key={s.label}>
            <div className="donut-dot" style={{ background: s.color }} />
            <span style={{ fontSize: "0.8rem", color: "#555" }}>{s.label} — {s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-about">
      <h2>About Me</h2>

      {/* Top row: bio + donut */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
        <div className="tile">
          <h3>👩‍💻 Who I Am</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7, marginBottom: 10 }}>
            Hi! I'm <strong>Chetana Muralidharan</strong>, a Data Engineer &
            Analytics Engineer passionate about building clean, reliable, and
            intelligent data systems.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7 }}>
            I love transforming messy data into meaningful insights and designing
            pipelines that are elegant, scalable, and observable.
          </p>
        </div>

        <div className="tile">
          <h3>🎯 Focus Split</h3>
          <DonutChart />
        </div>
      </div>

      {/* Bottom row: 3 colored KPI tiles */}
      <div className="about-kpi-row">
        <div className="kpi-tile-pink">
          <div className="kpi-tile-number">3+</div>
          <div className="kpi-tile-label">Years Experience</div>
        </div>
        <div className="kpi-tile-teal">
          <div className="kpi-tile-number">SnowPro</div>
          <div className="kpi-tile-label">Snowflake Certified</div>
        </div>
        <div className="kpi-tile-yellow">
          <div className="kpi-tile-number">3</div>
          <div className="kpi-tile-label">Flagship Projects</div>
        </div>
      </div>
    </section>
  );
}