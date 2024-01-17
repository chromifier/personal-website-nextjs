/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

export default function Home() {

  return (
    <main id="home" className="min-h-screen bg-primary w-full overflow-hidden">
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}
