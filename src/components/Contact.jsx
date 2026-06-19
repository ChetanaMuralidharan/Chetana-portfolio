import Tile from "./Tile";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <h2>Links & Contact</h2>

      <div className="contact-grid">
        <Tile className="contact-card">
          <div className="contact-card-top">
            <div className="contact-icon-badge">💬</div>
            
          </div>

          <h3 className="contact-card-title">Let's Connect</h3>
          <p className="contact-card-desc">
            I'm always excited to talk about data platforms, analytics engineering, and applied AI.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-row">
              <span className="contact-info-icon">✉️</span>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">chetana.muralidharan.24@gmail.com</div>
              </div>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-icon">📍</span>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">San Jose, CA</div>
              </div>
            </div>
            
          </div>

          <a className="btn-contact" href="mailto:chetana.muralidharan.24@gmail.com">
            Say Hello →
          </a>
        </Tile>

        <Tile className="contact-card">
          <div className="contact-card-top">
            <div className="contact-icon-badge">🔗</div>
            <span className="status-pill">
              <span className="status-dot" />
              Open to opportunities
            </span>
          </div>
          
          <h3 className="contact-card-title">Profiles</h3>
          
          <div className="contact-links">
            
            <a  className="contact-link contact-link-github"
              href="https://github.com/ChetanaMuralidharan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-icon">🐙</span>
              <span>GitHub</span>
              <span className="contact-link-arrow">→</span>
            </a>
            
           <a   className="contact-link contact-link-linkedin"
              href="https://www.linkedin.com/in/chetana-muralidharan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-icon">💼</span>
              <span>LinkedIn</span>
              <span className="contact-link-arrow">→</span>
            </a>
          </div>
        </Tile>
      </div>
    </section>
  );
}