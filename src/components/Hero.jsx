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
          <a href="https://github.com/ChetanaMuralidharan" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/chetana-muralidharan" className="btn">LinkedIn</a>
          <a href="/resume.pdf" className="btn small">Resume</a>
        </div>
      </div>
    </section>
  );
}
