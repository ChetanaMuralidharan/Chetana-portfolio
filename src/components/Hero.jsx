import { useState, useRef, useEffect } from "react";

function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    {
      label: "Data & Analytics Engineer",
      sub: "ETL · Snowflake · dbt · Airflow",
      href: "./resume-de.pdf",
    },
    {
      label: "AI Engineer · ML Engineer",
      sub: "LLMs · RAG · Agents · PyTorch",
      href: "./resume-aiml.pdf",
    },
  ];

  const bgGradient = (open || hovered)
    ? "linear-gradient(135deg, #29b0bc, #f76493)"
    : "linear-gradient(135deg, #f29e38, #f76493)";

  const boxShadow = (open || hovered)
    ? "0 14px 30px rgba(41,176,188,0.35)"
    : "none";

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn small"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          border: "none",
          font: "inherit",
          background: bgGradient,
          boxShadow: boxShadow,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        Resume
        <span style={{
          fontSize: "0.65rem",
          transition: "transform 0.2s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
          border: "1px solid rgba(0,0,0,0.07)",
          overflow: "hidden",
          zIndex: 100,
          minWidth: "200px",
          animation: "fadeSlideDown 0.18s ease",
        }}>
          {options.map((opt, i) => (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 18px",
                textDecoration: "none",
                borderBottom: i < options.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f5f5f7"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "2px",
              }}>
                {opt.label}
              </div>
              <div style={{
                fontSize: "0.68rem",
                color: "#aaa",
                fontWeight: 500,
              }}>
                {opt.sub}
              </div>
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>

      <div className="hero-content">
        <div className="portrait"></div>

        <h1>CHETANA MURALIDHARAN</h1>
        <p>DATA ENGINEERING · ANALYTICS · APPLIED AI</p>

        <div className="buttons">
          <a href="https://github.com/ChetanaMuralidharan" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chetana-muralidharan" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <ResumeDropdown />
        </div>
      </div>
    </section>
  );
}