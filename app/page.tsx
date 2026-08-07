import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import AboutDNA from "@/components/AboutDNA";
import CalculatorAndPrices from "@/components/CalculatorAndPrices";
import Services from "@/components/Services";
import { InterstitialStatement, InterstitialHairline, InterstitialWatermark } from "@/components/Interstitials";
import AnesthesiaFeature from "@/components/AnesthesiaFeature";
import BeforeAfter from "@/components/BeforeAfter";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><AboutDNA /></Reveal>
        <Reveal><CalculatorAndPrices /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><InterstitialStatement /></Reveal>
        <Reveal><AnesthesiaFeature /></Reveal>
        <Reveal><BeforeAfter /></Reveal>
        <Reveal><InterstitialHairline /></Reveal>
        <Reveal><VideoShowcase /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Team /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><InterstitialWatermark /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><BookingForm /></Reveal>
        <Reveal><LocationSection /></Reveal>
      </main>
      <Footer />
    </>
  );
}
