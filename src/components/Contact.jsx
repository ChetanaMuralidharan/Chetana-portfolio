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

          {/*
            LinkedIn messaging deep link — opens LinkedIn's compose window
            pre-addressed to your profile. Requires the visitor to be
            logged into LinkedIn; works on desktop and the LinkedIn mobile app.
          */}
          <a
            className="btn-contact"
            href="https://www.linkedin.com/messaging/compose/?recipient=chetana-muralidharan"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Message Me on LinkedIn →
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
            <a
              className="contact-link contact-link-github"
              href="https://github.com/ChetanaMuralidharan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-icon">🐙</span>
              <span>GitHub</span>
              <span className="contact-link-arrow">→</span>
            </a>

            <a
              className="contact-link contact-link-linkedin"
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