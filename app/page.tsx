import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import AboutCards from "./sections/AboutCards";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <AboutCards />
        <Services />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
