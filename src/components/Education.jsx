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
              <div className="education-degree">M.S., Applied Data Intelligence</div>
              <div className="education-school">San José State University</div>
            </div>
            <span className="education-gpa-badge gpa-ms">GPA 3.88/4.00</span>
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
              <div className="education-school">Visvesvaraya Technological University</div>
            </div>
            <span className="education-gpa-badge gpa-be">GPA 8.5/10.00</span>
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
    </section>
  );
}
