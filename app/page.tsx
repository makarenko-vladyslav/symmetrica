import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import LabAdvantage from "@/components/LabAdvantage";
import TechShowcase from "@/components/TechShowcase";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/motion";
import { useLocale } from "@/lib/i18n";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Interstitial 1: Text Ticker Marquee Strip */}
        <div className="py-3 bg-bg-dark text-white/60 border-y border-white/10 text-[11px] font-mono tracking-widest uppercase overflow-hidden whitespace-nowrap">
          <Marquee>
            <span>4.9/5 ВІДГУКИ GOOGLE MAPS · 100% ЛІЦЕНЗОВАНА АНЕСТЕЗІОЛОГІЧНА СЛУЖБА · DIGITALLY CRAFTED SMILES IN LVIV</span>
          </Marquee>
        </div>

        {/* Section 2: Social Proof / Stats */}
        <SocialProof />

        {/* Section 3: Services / Price List */}
        <Services />

        {/* Interstitial 2: Standalone Labeled Hairline Statement */}
        <div className="py-8 bg-primary text-white border-y border-white/10 text-center">
          <div className="max-w-7xl mx-auto px-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-accent font-semibold">
            100% ЛІЦЕНЗОВАНА АНЕСТЕЗІОЛОГІЧНА СЛУЖБА · МЕДИКАМЕНТОЗНИЙ СОН БЕЗ ТРИВОГИ ТА БОЛЮ
          </div>
        </div>

        {/* Section 4: Interactive Calculator */}
        <Calculator />

        {/* Section 5: Lab & Sedation Craft Advantage */}
        <LabAdvantage />

        {/* Interstitial 3: Watermark / Marquee Band */}
        <div className="py-3 bg-primary text-white/50 border-y border-white/10 text-[11px] font-mono tracking-widest uppercase overflow-hidden whitespace-nowrap">
          <Marquee>
            <span>SYMMETRICA TECH LABORATORY · ROLAND 3D MILLING · 24H EXPRESS TURNAROUND · DENTAL RESTORATION CENTER</span>
          </Marquee>
        </div>

        {/* Section 6: Tech Showcase */}
        <TechShowcase />

        {/* Interstitial 4: Hairline Section Divider */}
        <div className="py-6 bg-bg-light border-y border-primary/10 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-text-muted">
            17 ЛІКАРІВ-ЕКСПЕРТІВ ПРАЦЮЮТЬ ЗА ЄДИНИМ МІЖНАРОДНИМ ПРОТОКОЛОМ DIGITAL SMILE DESIGN
          </span>
        </div>

        {/* Section 7: Team */}
        <Team />

        {/* Section 8: Testimonials / Proof */}
        <Testimonials />

        {/* Section 9: FAQ */}
        <Faq />

        {/* Section 10: Booking / Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
