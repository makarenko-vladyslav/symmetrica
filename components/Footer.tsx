"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const meta = t("meta") as Record<string, string>;
  const nav = t("nav") as Record<string, string>;
  const footerData = t("footer") as Record<string, string>;

  return (
    <footer className="bg-[hsl(205_45%_10%)] text-white pt-20 pb-12 border-t border-[hsl(188_85%_38%/0.2)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <img
              src="/symmetrica/media/1557f414372216b6.svg"
              alt={meta.brand || "Symmetrica"}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm font-body text-white/70 leading-relaxed">
              {footerData.aboutText}
            </p>
            <p className="text-xs font-sans text-white/50">{footerData.license}</p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-[hsl(188_85%_48%)]">
              {footerData.navHeader}
            </h4>
            <ul className="space-y-2 text-sm font-body text-white/80">
              <li><a href="#diagnostics" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.diagnostics}</a></li>
              <li><a href="#services" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.services}</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.calculator}</a></li>
              <li><a href="#sedation" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.sedation}</a></li>
              <li><a href="#team" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.team}</a></li>
              <li><a href="#faq" className="hover:text-[hsl(188_85%_48%)] transition-colors">{nav.faq}</a></li>
            </ul>
          </div>

          {/* Col 3: Services & Social TEXT Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-[hsl(188_85%_48%)]">
              {footerData.socialHeader}
            </h4>
            <div className="flex flex-col space-y-2 text-sm font-sans text-white/80">
              <a href="#" className="hover:text-[hsl(188_85%_48%)] transition-colors">{footerData.socialInsta}</a>
              <a href="#" className="hover:text-[hsl(188_85%_48%)] transition-colors">{footerData.socialFb}</a>
              <a href="#" className="hover:text-[hsl(188_85%_48%)] transition-colors">{footerData.socialYt}</a>
            </div>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-[hsl(188_85%_48%)]">
              {footerData.contactHeader}
            </h4>
            <div className="space-y-2 text-sm font-body text-white/80">
              <p>{meta.address}</p>
              <p><a href={`tel:${meta.phone}`} className="hover:text-[hsl(188_85%_48%)] text-base font-bold font-tabular">{meta.phoneFormatted}</a></p>
              <p>{meta.email}</p>
              <p className="text-xs text-white/60 pt-2">{meta.hours}</p>
            </div>
          </div>
        </div>

        {/* Legal Row + Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-body text-white/60 gap-4">
          <p>© 2026 Symmetrica Dental Center. {footerData.rights}</p>
          <p className="text-white/40 italic">{footerData.brandVoiceCredit}</p>
          <p>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(188_85%_48%)] underline transition-colors"
            >
              {footerData.developerCredit}
            </a>
          </p>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div
          aria-hidden="true"
          className="mt-12 text-[16vw] font-serif font-black uppercase text-white/[0.04] leading-none text-center select-none pointer-events-none whitespace-nowrap overflow-hidden"
        >
          SYMMETRICA
        </div>
      </div>
    </footer>
  );
}
