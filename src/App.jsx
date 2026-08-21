import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { MascotProvider } from "./context/MascotContext";
import MascotBird from "./components/mascot/MascotBird";

function App() {
  return (
    <MascotProvider>
      <div className="bg-surface">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <MascotBird />
      </div>
    </MascotProvider>
  );
}

export default App;