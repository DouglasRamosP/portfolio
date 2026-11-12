import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
