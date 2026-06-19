export default function Education() {
  return (
    <section id="education" className="section-education">
      <h2>Education</h2>

      <div className="education-grid">
        {/* M.S. */}
        <div className="education-card">
          <div className="education-accent-bar accent-ms" />
          <div className="education-card-header">
            <div className="education-icon-badge badge-ms">🎓</div>
            <div className="education-header-text">
              <div className="education-degree">M.S., Data Analytics</div>
              <div className="education-school">San José State University</div>
            </div>
            <span className="education-gpa-badge gpa-ms">GPA 3.85/4.00</span>
          </div>
          <div className="education-meta">📍 San Jose, CA · Aug 2024 – May 2026</div>
          <p className="education-desc">
            Covering the full stack of modern data and AI systems — from
            mathematical foundations to production-grade engineering.
          </p>
          <div className="education-pills-wrap">
            {[
              "Mathematical Methods for Data Analytics",
              "Data Warehousing",
              "Big Data Technologies & Applications",
              "Data Visualization",
              "Distributed Systems",
              "Machine Learning Technologies",
              "Deep Learning Technologies",
              "Generative Models",
            ].map((c) => (
              <span className="education-pill" key={c}>{c}</span>
            ))}
          </div>
        </div>

        {/* B.E. */}
        <div className="education-card">
          <div className="education-accent-bar accent-be" />
          <div className="education-card-header">
            <div className="education-icon-badge badge-be">🎓</div>
            <div className="education-header-text">
              <div className="education-degree">B.E., Computer Science & Engineering</div>
              <div className="education-school">JSSATE Bangalore (VTU)</div>
            </div>
            <span className="education-gpa-badge gpa-be">CGPA 8.5/10.00</span>
          </div>
          <div className="education-meta">📍 Karnataka, India · Aug 2017 – Aug 2021</div>
          <div className="education-pills-wrap" style={{ marginTop: 14 }}>
            {[
              "Database Management Systems",
              "Operating Systems",
              "Data Structures & Algorithms",
              "Mathematics",
              "Computer Organization",
              "Cloud Computing",
              "Big Data Analytics",
              "Machine Learning",
            ].map((c) => (
              <span className="education-pill" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="certifications-wrap">
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