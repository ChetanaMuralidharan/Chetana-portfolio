import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

export default function App() {
  const [activeRole, setActiveRole] = useState("all");

  return (
    <>
      <div className="global-waves">
        <div className="wave-bg wave-bg-1"></div>
        <div className="wave-bg wave-bg-2"></div>
        <div className="wave-bg wave-bg-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects activeRole={activeRole} setActiveRole={setActiveRole} />
      <Skills activeRole={activeRole} />
      <Education />
      <Contact />
    </>
  );
}