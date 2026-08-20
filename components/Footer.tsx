"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <img
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D1%8„.svg"
              alt="Symmetrica"
              className="h-8 w-auto filter brightness-0 invert"
            />
            <p className="text-xs text-white/60 font-light leading-relaxed">
              {t('footer.tagline') as string}
            </p>
            <div className="text-xs font-semibold text-accent font-mono">
              Est. 2013 — м. Львів
            </div>
          </div>

          {/* Col 2: Navigation Column */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-accent uppercase tracking-wider mb-2 font-mono">
              {t('footer.navTitle') as string}
            </div>
            <ul className="space-y-2 text-white/70 font-light">
              <li><a href="#services" className="hover:text-accent transition-colors py-1 inline-block">{t('footer.servicePricing') as string}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors py-1 inline-block">{t('footer.calcCost') as string}</a></li>
              <li><a href="#lab" className="hover:text-accent transition-colors py-1 inline-block">{t('footer.anesthesiaLab') as string}</a></li>
              <li><a href="#tech" className="hover:text-accent transition-colors py-1 inline-block">{t('footer.digitalDiag') as string}</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors py-1 inline-block">{t('footer.teamDoctors') as string}</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts Column */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-accent uppercase tracking-wider mb-2 font-mono">
              {t('footer.contactsTitle') as string}
            </div>
            <div className="text-white/70 font-light space-y-1">
              <div>{t('footer.addressLine') as string}</div>
              <div className="font-mono">Пн–Сб: 09:00 – 20:00</div>
              <a href="tel:+380674589247" className="block text-white hover:text-accent font-mono font-semibold mt-2 py-1">
                +38 (067) 458-92-47
              </a>
              <a href="mailto:symmetricalviv@gmail.com" className="block text-white/60 hover:text-white font-mono py-1">
                symmetricalviv@gmail.com
              </a>
            </div>
          </div>

          {/* Col 4: Social Text Links */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-accent uppercase tracking-wider mb-2 font-mono">
              {t('footer.socialTitle') as string}
            </div>
            <div className="flex flex-col gap-2 text-white/70 font-light">
              <a
                href="https://www.instagram.com/symmetrica_dent/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors font-mono py-1"
              >
                Instagram: @symmetrica_dent
              </a>
              <a
                href="https://www.facebook.com/SymmetricaDent/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors font-mono py-1"
              >
                Facebook: SymmetricaDent
              </a>
            </div>
          </div>

        </div>

        {/* Giant Symmetrica Wordmark Bleeding Off Bottom Edge */}
        <div className="py-8 border-b border-white/5 text-center overflow-hidden">
          <span className="font-display font-bold text-5xl sm:text-8xl lg:text-9xl text-white/10 uppercase tracking-widest pointer-events-none select-none block leading-none">
            SYMMETRICA
          </span>
        </div>

        {/* Legal & Studio Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4 font-mono">
          <div>
            © 2026 Symmetrica Dental Center. {t('footer.rights') as string}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-accent transition-colors underline decoration-accent/40 py-1 inline-block"
            >
              {t('footer.credit') as string} — https://makarich.framer.website
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
