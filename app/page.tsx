import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TechShowcase from "@/components/TechShowcase";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import SedationUnit from "@/components/SedationUnit";
import DigitalLab from "@/components/DigitalLab";
import BeforeAfter from "@/components/BeforeAfter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import { LabeledHairline, StatementBand, WatermarkStrip, TrustHairline } from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <LabeledHairline label="ЦЕНТР СТОМАТОЛОГІЧНОГО ВІДНОВЛЕННЯ — МІСТО ЛЬВІВ" />
        <TechShowcase />
        <StatementBand text="«Кожен клінічний випадок моделюється в 3D до початку хірургічного чи естетичного втручання»" />
        <Services />
        <Calculator />
        <WatermarkStrip text="БЕЗПЕКА · ДІАГНОСТИКА · ЕСТЕТИКА · 24–48 ГОДИН" />
        <SedationUnit />
        <DigitalLab />
        <BeforeAfter />
        <TrustHairline text="63 000+ ПАЦІЄНТІВ · 13 РОКІВ ДОСВІДУ · 17 ФАХІВЦІВ" />
        <Team />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
