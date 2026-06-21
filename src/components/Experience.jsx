import { useState } from "react";

function CollapsibleCurriculum({ curriculum, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: open ? "14px" : "0",
          transition: "color 0.2s ease",
          userSelect: "none",
        }}
        onMouseEnter={e => e.currentTarget.style.color = color}
        onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
      >
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "1.5px solid currentColor",
          fontSize: "0.65rem",
          transition: "transform 0.22s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}>▾</span>
        What I Built · Curriculum Covered
      </button>

      {open && (
        <div style={{ animation: "fadeSlideIn 0.22s ease" }}>
          <div style={{
            fontSize: "0.7rem",
            fontStyle: "italic",
            color: "#b0b0b0",
            marginBottom: "14px",
          }}>
            Every topic below was implemented live — not just studied.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {curriculum.map((group, gi) => (
              <div key={gi}>
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: color,
                  marginBottom: "6px",
                  letterSpacing: "0.05em",
                }}>
                  {group.group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {group.topics.map((topic, ti) => (
                    <span key={ti} style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      padding: "3px 9px",
                      borderRadius: "999px",
                      background: "#f5f5f7",
                      border: "1px solid #e8e8ec",
                      color: "#555",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${color}18`;
                      e.currentTarget.style.borderColor = `${color}55`;
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#f5f5f7";
                      e.currentTarget.style.borderColor = "#e8e8ec";
                      e.currentTarget.style.color = "#555";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CollapsibleExtra({ extraBullets, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "16px" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: open ? "14px" : "0",
          transition: "color 0.2s ease",
          userSelect: "none",
        }}
        onMouseEnter={e => e.currentTarget.style.color = color}
        onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
      >
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "1.5px solid currentColor",
          fontSize: "0.65rem",
          transition: "transform 0.22s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}>▾</span>
        {open ? "Show Less" : "Read More"}
      </button>

      {open && (
        <div style={{ animation: "fadeSlideIn 0.22s ease" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {extraBullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: color,
                  flexShrink: 0,
                  marginTop: "6px",
                  opacity: 0.5,
                }} />
                <span style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.6 }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const roles = [
  {
    id: "isa",
    company: "SJSU – ISA",
    title: "Generative Models - Instructional Student Assistant",
    period: "Jan 2026 – May 2026",
    color: "#f76493",
    gradient: "linear-gradient(135deg, #f76493, #ffb0cc)",
    kpis: [
      { value: "14", label: "Live Code Demos" },
      { value: "35+", label: "Grad Students Supported" },
      { value: "100+", label: "Submissions Reviewed" },
      { value: "8+", label: "Architectures Implemented" },
    ],
    bullets: [
      "Implemented 14 live in-class walkthroughs covering architectures from CUDA kernels and feedforward nets up through Transformers, diffusion models, and multi-agent systems",
      "Built working PyTorch implementations of LLMS from scratch, VAEs, GANs, DDPM/DDIM, SimCLR, and CycleGAN as reference code for 35 graduate students",
      "Debugged and reviewed 100+ student implementations across training pipelines, attention mechanisms, fine-tuning loops, and RAG systems, developing deep diagnostic fluency across the full GenAI stack",
      "Graded and provided feedback on assignments spanning LoRA/PEFT fine-tuning, knowledge distillation, multimodal RAG, CLIP-based retrieval, and Stable Diffusion fine-tuning",
    ],
    skills: [
      "Python", "PyTorch",  "LLMs", "RAGs", "Transformers", "LangChain", "Multi-Agent Systems", "AI Agents", "MCP", "Diffusion Models", "GANs",
      "VAEs", "Fine-tuning", "LoRA", "PEFT", "Prompt Engineering", "Pinecone", "CLIP",
      "Stable Diffusion", "Knowledge Distillation", "Quantization", 
    ],
    curriculum: [
      {
        group: "Foundations",
        topics: ["CUDA Programming", "PyTorch", "Neural Networks", "Backprop", "Word Embeddings", "NER"],
      },
      {
        group: "Transformers & LLMs",
        topics: ["Self-Attention from Scratch", "Causal Masking", "GPT Decoder", "BERT Tokenization", "Prompt Engineering", "Zero-Shot / CoT"],
      },
      {
        group: "Generative Models",
        topics: ["VAE", "GAN / DCGAN", "CycleGAN", "DDPM", "DDIM", "Classifier-Free Guidance", "Stable Diffusion Fine-tuning"],
      },
      {
        group: "Fine-Tuning & Optimization",
        topics: ["LoRA / PEFT", "Knowledge Distillation", "Quantization", "KV Cache", "Mixed Precision Training"],
      },
      {
        group: "Retrieval & Agents",
        topics: ["RAG Pipelines", "Vector Databases (Pinecone)", "Reranking", "LangChain Agents", "Multi-Agent Systems", "GraphRAG"],
      },
      {
        group: "Multimodal",
        topics: ["CLIP", "Text-to-Image", "Multimodal RAG", "Vision-Language Models"],
      },
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    title: "Full-Stack Engineer Analyst (Data Engineer)",
    period: "Aug 2021 – Jul 2024",
    color: "#29b0bc",
    gradient: "linear-gradient(135deg, #29b0bc, #7fdbe2)",
    kpis: [
      { value: "87%", label: "Refresh Time Cut" },
      { value: "7", label: "APAC Markets" },
      { value: "6+", label: "Source Systems" },
      { value: "3", label: "Enterprise Projects" },
    ],
    bullets: [
  "Maintained and operated 60+ ETL pipelines serving Roche Diagnostics' APAC commercial, distributor, and finance data across 7 markets (Korea, Japan, Indonesia, Thailand, Taiwan, Vietnam, China)",
  "Reduced pipeline refresh time from 6-8 hours to 45 minutes by redesigning full-refresh loads as watermark-based incremental extractions",
  "Eliminated manual validation across all ingested objects by building an automated reconciliation framework that compared source vs. Snowflake record counts after every load",
  "Delivered new pipelines every sprint while owning daily incident response as the sole ETL engineer for 3 years",
  "Unified 6+ heterogeneous source systems (MS SQL Server, Oracle, SAP HANA, SFTP, AWS S3, and distributor Excel files) into a single Snowflake warehouse",
],
    extraBullets: [
  "Eliminated an entire class of production incidents by engineering every pipeline to be fully idempotent, making re-runs safe at any point without duplicating or corrupting data",
  "Enabled full reprocessing from source without re-extraction by preserving raw data in a dedicated staging layer before any transformation, keeping business logic cleanly separated",
  "Automated source-to-target validation as a pipeline stage after every load, with structured results stored for auditability, replacing manual data quality checks entirely",
  "Handled 6+ source systems with differing schemas, delta patterns, and data types through a single unified pipeline framework, with no bespoke code written per source",
],
    skills: [
      "Talend", "Python", "SQL", "Snowflake", "MS SQL Server", "Oracle",
      "SAP HANA", "AWS S3", "SFTP", "ETL", "Data Engineering", "Data Reconciliation",
      "Incremental Loads", "Watermark-based Extraction", "PII Detection", "Presidio", "spaCy",
    ],
  },
  
  {
    id: "early",
    company: "Early Roles",
    title: "Android Dev Intern · Instructor",
    period: "Oct 2020 – Dec 2020",
    color: "#f29e38",
    gradient: "linear-gradient(135deg, #f29e38, #ffd67a)",
    kpis: [
      { value: "40", label: "Students Taught" },
      { value: "2", label: "Roles" },
    ],
    bullets: [
      "Developed accessible Android UIs for differently-abled students",
      "Taught full-stack development (HTML/CSS/JS, PHP, MySQL) to 40 students",
      "Designed hands-on projects covering end-to-end application development",
    ],
    skills: [
      "Android", "Java", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full-Stack Development",
    ],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState("isa");
  const [hoveredId, setHoveredId] = useState(null);
  const active = roles.find((r) => r.id === activeId);

  return (
    <section id="experience" className="section-experience">
      <h2>Experience</h2>

      <div className="exp-layout">
        {/* LEFT PANEL — role list */}
        <div className="exp-left-panel">
          {roles.map((role) => {
            const isActive = role.id === activeId;
            const isHovered = role.id === hoveredId;
            return (
              <button
                key={role.id}
                onClick={() => setActiveId(role.id)}
                onMouseEnter={() => setHoveredId(role.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isActive
                    ? "#fff"
                    : isHovered
                    ? `${role.color}0e`
                    : "transparent",
                  border: isActive
                    ? `1.5px solid ${role.color}44`
                    : isHovered
                    ? `1.5px solid ${role.color}33`
                    : "1.5px solid transparent",
                  boxShadow: isActive
                    ? `0 2px 16px ${role.color}22`
                    : isHovered
                    ? `0 2px 10px ${role.color}15`
                    : "none",
                  transition: "all 0.22s ease",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {(isActive || isHovered) && (
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: "12px",
                    bottom: "12px",
                    width: "3px",
                    borderRadius: "999px",
                    background: role.gradient,
                    opacity: isActive ? 1 : 0.5,
                  }} />
                )}
                <div style={{
                  paddingLeft: isActive || isHovered ? "10px" : "0",
                  transition: "padding 0.22s ease",
                }}>
                  <div style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: isActive ? role.color : isHovered ? role.color : "#555",
                    marginBottom: "3px",
                    transition: "color 0.22s ease",
                  }}>
                    {role.company}
                  </div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "#999",
                    lineHeight: 1.4,
                  }}>
                    {role.period}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT PANEL — detail card */}
        <div
          key={activeId}
          className="exp-detail-card"
        >
          {/* Card header bar */}
          <div style={{
            background: active.gradient,
            padding: "18px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
              {active.company}
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)" }}>
              {active.title}
            </div>
            <div style={{
              display: "inline-block",
              marginTop: "6px",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "3px 10px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.25)",
              color: "#fff",
              width: "fit-content",
            }}>
              {active.period}
            </div>
          </div>

          <div style={{ padding: "22px 28px" }}>
            {/* KPI impact tiles */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
              {active.kpis.map((kpi, i) => (
                <div key={i} style={{
                  flex: 1,
                  minWidth: "80px",
                  background: `${active.color}0d`,
                  border: `1px solid ${active.color}30`,
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textAlign: "center",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 6px 18px ${active.color}25`;
                  e.currentTarget.style.background = `${active.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = `${active.color}0d`;
                }}
                >
                  <div style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: active.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}>
                    {kpi.value}
                  </div>
                  <div style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bullet points */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
              {active.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: active.color,
                    flexShrink: 0,
                    marginTop: "6px",
                  }} />
                  <span style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.6 }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Expand/collapse extra bullets — Accenture only */}
            {active.extraBullets && (
              <CollapsibleExtra extraBullets={active.extraBullets} color={active.color} />
            )}

            {/* Skills tags */}
            {active.skills && active.skills.length > 0 && (
              <div style={{ marginTop: "22px", marginBottom: active.curriculum ? "22px" : "0" }}>
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: "10px",
                }}>
                  Skills & Technologies
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {active.skills.map((skill, i) => (
                    <span key={i} style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: `${active.color}12`,
                      border: `1px solid ${active.color}35`,
                      color: active.color,
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = active.color;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 4px 10px ${active.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${active.color}12`;
                      e.currentTarget.style.color = active.color;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ISA Curriculum section — collapsible */}
            {active.curriculum && (
              <CollapsibleCurriculum curriculum={active.curriculum} color={active.color} />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .exp-layout {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 20px;
          align-items: start;
          overflow: hidden;
        }

        .exp-left-panel {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 140px;
        }

        .exp-detail-card {
          background: #fff;
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          overflow: hidden;
          animation: fadeSlideIn 0.25s ease;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          min-width:0;
        }

        .exp-detail-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.09);
        }

        @media (max-width: 700px) {
        .exp-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: visible;
        }

        .exp-left-panel {
          flex-direction: row;
          overflow-x: auto;
          gap: 8px;
          padding-bottom: 4px;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }

        .exp-left-panel button {
          flex-shrink: 0 !important;
          width: auto !important;
          min-width: 120px;
        }

        .exp-detail-card {
          width: 100%;
        }
      }
      `}</style>
    </section>
  );
}