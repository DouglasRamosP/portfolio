import { useLayoutEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  useLayoutEffect(() => {
    // Fragment navigation can run before React inserts the target on a direct visit.
    const destination = document.getElementById(window.location.hash.slice(1));
    destination?.scrollIntoView({ block: "start", behavior: "instant" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
