import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import DiagnosticsTech from "@/components/DiagnosticsTech";
import { StatementStrip, LabeledHairline, PressRatingStrip } from "@/components/Interstitials";
import ServicesList from "@/components/ServicesList";
import Calculator from "@/components/Calculator";
import SedationAdvantage from "@/components/SedationAdvantage";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Reveal, Marquee, Carousel, Stagger, StaggerItem } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Marquee />
        <Reveal><PressRatingStrip /></Reveal>
        <Reveal><DiagnosticsTech /></Reveal>
        <Reveal><StatementStrip /></Reveal>
        <Reveal><ServicesList /></Reveal>
        <LabeledHairline labelKey="financialTransparency" defaultLabel="ФІНАНСОВА ПРОЗОРІСТЬ" />
        <Reveal><Calculator /></Reveal>
        <Reveal><SedationAdvantage /></Reveal>
        <LabeledHairline labelKey="expertTeam" defaultLabel="ЕКСПЕРТНА КОМАНДА" />
        <Reveal><TeamSection /></Reveal>
        <Reveal><GallerySection /></Reveal>
        <Reveal><VideoShowcase /></Reveal>
        <Reveal>
          <Carousel>
            <Testimonials />
          </Carousel>
        </Reveal>
        <Reveal><FaqSection /></Reveal>
        <Reveal><ContactForm /></Reveal>
      </main>
      <Footer />
    </>
  );
}
