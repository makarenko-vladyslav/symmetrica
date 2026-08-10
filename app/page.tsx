import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import DiagnosticsTech from "@/components/DiagnosticsTech";
import Services from "@/components/Services";
import TreatmentCalculator from "@/components/TreatmentCalculator";
import SedationSection from "@/components/SedationSection";
import DigitalLabSection from "@/components/DigitalLabSection";
import BeforeAfter from "@/components/BeforeAfter";
import TeamSection from "@/components/TeamSection";
import SterilizationProtocol from "@/components/SterilizationProtocol";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import BookingForm from "@/components/BookingForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-light)]">
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <DiagnosticsTech />
        <Services />
        <TreatmentCalculator />
        <SedationSection />
        <DigitalLabSection />
        <BeforeAfter />
        <TeamSection />
        <SterilizationProtocol />
        <Testimonials />
        <FaqSection />
        <BookingForm />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
