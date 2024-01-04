/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {


  return (
    <main className="min-h-screen bg-primary w-full">
      <Hero />
      <About />
    </main>
  );
}
