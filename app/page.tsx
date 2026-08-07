import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import TechAndAnesthesia from "@/components/TechAndAnesthesia";
import BeforeAfter from "@/components/BeforeAfter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { InterstitialHairline, InterstitialStatement } from "@/components/Interstitials";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light text-text-main">
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><Philosophy /></Reveal>
        <Reveal>
          <InterstitialStatement
            quote="Точне планування та власна CAD/CAM лабораторія дозволяють виключати помилки людського фактора."
            source="Symmetrica Dental Quality Protocol"
          />
        </Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><InterstitialHairline label="ІНТЕРАКТИВНИЙ КОШТОРИС" /></Reveal>
        <Reveal><Calculator /></Reveal>
        <Reveal><TechAndAnesthesia /></Reveal>
        <Reveal><BeforeAfter /></Reveal>
        <Reveal><Team /></Reveal>
        <Reveal><InterstitialHairline label="СЛОВО ПАЦІЄНТІВ" /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><CtaBanner /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
