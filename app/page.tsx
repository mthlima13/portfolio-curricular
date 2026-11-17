import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SiteCreation from "./components/SiteCreation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ReadingProgress from "./components/ReadingProgress";

export default function Home() {
  return (
    <div id="inicio" className="min-h-screen">
      <ReadingProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SiteCreation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
