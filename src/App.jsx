import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroStatement from "./components/IntroStatement";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Process from "./components/Process";
import Statement from "./components/Statement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="page-column">
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <IntroStatement />
        <Projects />
        <Skills />
        <Technologies />
        <About />
        <Certifications />
        <Process />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
