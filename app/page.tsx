import { BuiltAt } from "@/components/sections/BuiltAt";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Focus } from "@/components/sections/Focus";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Numbers } from "@/components/sections/Numbers";
import { Skills } from "@/components/sections/Skills";
import { StartHere } from "@/components/sections/StartHere";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <a className="skip label" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StartHere />
        <Marquee />
        <Focus />
        <Work />
        <Numbers />
        <Skills />
        <BuiltAt />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
