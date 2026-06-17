export default function Experience() {
  return (
    <section id="experience" className="section-experience">
      <h2>Experience</h2>

      <div className="gantt-wrapper">
        {/* Timeline header */}
        <div className="gantt-header">
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>Now</span>
        </div>

        {/* Row 1 */}
        <div className="gantt-row">
          <div className="gantt-label">
            <div className="gantt-label-company">Accenture</div>
            <div className="gantt-label-role">Data Engineer</div>
          </div>
          <div className="gantt-track">
            <div className="gantt-track-bg" />
            <div className="gantt-bar gantt-bar-accenture">
              Aug 2021 – Jul 2024
            </div>
            <ul className="gantt-bullets">
              <li>Built ETL pipelines using Python, SQL, and Azure Data Factory</li>
              <li>Developed scalable data models and warehouse structures</li>
              <li>Delivered analytics solutions for business stakeholders</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="gantt-row" style={{ marginBottom: 0 }}>
          <div className="gantt-label">
            <div className="gantt-label-company">SJSU</div>
            <div className="gantt-label-role">Graduate Research</div>
          </div>
          <div className="gantt-track">
            <div className="gantt-track-bg" />
            <div className="gantt-bar gantt-bar-sjsu">
              Aug 2024 – Present
            </div>
            <ul className="gantt-bullets">
              <li>Built LineageIQ, a data pipeline observability platform</li>
              <li>Developed ELT pipelines for wildfire and air-quality analytics</li>
              <li>Explored AI for data quality, anomaly detection, and lineage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}