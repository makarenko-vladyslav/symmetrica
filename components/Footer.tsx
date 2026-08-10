"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Giant Brand Wordmark Bleeding Off Bottom Edge */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none text-[22vw] font-display font-bold text-white/[0.02] uppercase tracking-widest whitespace-nowrap leading-none"
      >
        SYMMETRICA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-white/10 pb-12">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg"
              alt="Symmetrica Dental Logo"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-light">
              {String(t("footer.about"))}
            </p>
            <p className="text-xs text-[var(--color-accent)] font-semibold pt-1 tabular-nums">
              {String(t("footer.hours"))}
            </p>
          </div>

          {/* Col 2: Nav Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Напрямки
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-medium">
              <li><a href="#diagnostics" className="hover:text-white transition-colors">{String(t("footer.linkCt"))}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{String(t("footer.linkAllOn4"))}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{String(t("footer.linkVeneers"))}</a></li>
              <li><a href="#sedation" className="hover:text-white transition-colors">{String(t("footer.linkSedation"))}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{String(t("footer.linkTmj"))}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Контакти
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p>{String(t("footer.address"))}</p>
              <p>
                <a href="tel:+380674589247" className="hover:text-[var(--color-accent)] font-bold tabular-nums">
                  +380 67 458 92 47
                </a>
              </p>
              <p>{String(t("footer.email"))}</p>
            </div>
          </div>

          {/* Col 4: Socials Row as Text Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Соціальні мережі
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-white/70 font-semibold uppercase tracking-wider">
              <a
                href="https://www.facebook.com/SymmetricaDent/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                FACEBOOK →
              </a>
              <a
                href="https://www.instagram.com/symmetrica_dent/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                INSTAGRAM →
              </a>
            </div>
          </div>

        </div>

        {/* Legal Row & Studio Credit */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4 font-light">
          <p>{String(t("footer.rights"))}</p>
          <p>
            Розроблено{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline font-bold"
            >
              Студія Тест
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}