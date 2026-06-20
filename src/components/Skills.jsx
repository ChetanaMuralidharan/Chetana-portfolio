import { useState } from "react";
import skills from "../data/skills";

const badgeColorMap = {
  "badge-teal":   "#29b0bc",
  "badge-orange": "#fb923c",
  "badge-pink":   "#f76493",
  "badge-purple": "#a78bfa",
  "badge-yellow": "#f29e38",
};

export default function Skills({ activeRole = "all" }) {
  const allEntries = Object.entries(skills);

  return (
    <section id="skills" className="section-skills">
      <div className="section-sticky-header">
        <h2>Skills & Certifications</h2>
      </div>

      <div className="skills-grid" style={{ marginTop: 24 }}>
        {allEntries.map(([category, data]) => {
          const isHighlighted = activeRole === "all" || data.roles.includes(activeRole);
          const accentColor = badgeColorMap[data.badge] || "#f76493";

          return (
            <div
              key={category}
              className="skill-card"
              style={{
                transition: "box-shadow 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
                opacity: isHighlighted ? 1 : 0.80,
                boxShadow: isHighlighted && activeRole !== "all"
                  ? `0 0 0 2px ${accentColor}, 0 8px 24px ${accentColor}26`
                  : undefined,
                transform: isHighlighted && activeRole !== "all" ? "translateY(-2px)" : undefined,
              }}
            >
              <div className={`skill-accent-bar ${data.badge.replace("badge", "accent")}`} />
              <div className="skill-card-header">
                <div className={`skill-emoji-badge ${data.badge}`}>{data.emoji}</div>
                <span className="skill-name">{category}</span>
              </div>
              <div className="skill-pills-wrap">
                {data.items.map((item) => (
                  <span className="skill-pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Certifications sub-section */}
      <div className="certifications-wrap" style={{ marginTop: 48 }}>
        <div className="certifications-heading-row">
          <h3 className="certifications-heading">Certifications</h3>
          <div className="certifications-heading-line" />
        </div>

        <div className="certifications-grid">
          <div className="cert-card cert-snowflake">
            <div className="cert-icon-badge icon-snowflake">❄️</div>
            <div className="cert-name">SnowPro Core</div>
            <span className="cert-code code-snowflake">COF-C02</span>
            <div className="cert-issuer">Snowflake</div>
          </div>

          <div className="cert-card cert-azure">
            <div className="cert-icon-badge icon-azure">🗄️</div>
            <div className="cert-name">Azure Data Fundamentals</div>
            <span className="cert-code code-azure">DP-900</span>
            <div className="cert-issuer">Microsoft</div>
          </div>

          <div className="cert-card cert-azure">
            <div className="cert-icon-badge icon-azure">☁️</div>
            <div className="cert-name">Azure Fundamentals</div>
            <span className="cert-code code-azure">AZ-900</span>
            <div className="cert-issuer">Microsoft</div>
          </div>

          <div className="cert-card cert-azure">
            <div className="cert-icon-badge icon-azure">🤖</div>
            <div className="cert-name">Azure AI Fundamentals</div>
            <span className="cert-code code-azure">AI-900</span>
            <div className="cert-issuer">Microsoft</div>
          </div>
        </div>
      </div>
    </section>
  );
}