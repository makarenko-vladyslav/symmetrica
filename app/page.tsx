import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import LabFeature from "@/components/LabFeature";
import AllOn4Protocol from "@/components/AllOn4Protocol";
import AnesthesiaSection from "@/components/AnesthesiaSection";
import SymmetricaTech from "@/components/SymmetricaTech";
import Team from "@/components/Team";
import Cases from "@/components/Cases";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem, Carousel } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        
        <Reveal>
          <Ticker />
        </Reveal>

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <Calculator />
        </Reveal>

        <Reveal>
          <LabFeature />
        </Reveal>

        <Reveal>
          <SymmetricaTech />
        </Reveal>

        <Reveal>
          <AllOn4Protocol />
        </Reveal>

        <Reveal>
          <AnesthesiaSection />
        </Reveal>

        <Reveal>
          <Team />
        </Reveal>

        <Reveal>
          <Carousel>
            <Cases />
          </Carousel>
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}