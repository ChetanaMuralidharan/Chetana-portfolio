import Tile from "./Tile";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <h2>Links & Contact</h2>

      <div className="contact-grid">
        <Tile>
          <div className="status-indicator">
            <div className="status-dot" />
            Open to opportunities
          </div>
          <h3>Let's Connect</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6, marginBottom: 16 }}>
            I'm always excited to talk about data platforms, analytics engineering, and applied AI.
          </p>
          <ul className="stats-list">
            <li><span>Email:</span> chetana.muralidharan.24@gmail.com</li>
            <li><span>Location:</span> San Jose, CA</li>
            <li><span>Response time:</span> &lt; 24 hrs</li>
          </ul>
        </Tile>

        <Tile>
          <h3>Profiles</h3>
          <div className="contact-links">
            <a className="contact-link" href="https://github.com/Chetana" target="_blank" rel="noreferrer">
              <span>🐙</span> GitHub
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/ChetanaMuralidharan" target="_blank" rel="noreferrer">
              <span>💼</span> LinkedIn
            </a>
          </div>
        </Tile>
      </div>
    </section>
  );
}