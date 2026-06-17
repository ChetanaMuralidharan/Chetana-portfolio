import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
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
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
