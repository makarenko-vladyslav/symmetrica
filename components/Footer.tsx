
"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(212_48%_9%)] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(185_85%_36%)] flex items-center justify-center font-bold text-lg">
                S
              </div>
              <span className="font-display text-xl font-bold tracking-wider uppercase">
                SYMMETRICA
              </span>
            </div>
            <p className="text-xs text-white/70 font-body leading-relaxed mb-6">
              {String(t("footer.tagline"))}
            </p>
            <div className="text-xs font-mono text-[hsl(38_85%_52%)]">
              Est. 2013 · Lviv, Ukraine
            </div>
          </div>

          {/* Col 2: Navigation Column */}
          <div>
            <h4 className="font-display font-bold text-xs mb-4 text-[hsl(185_85%_45%)] uppercase tracking-wider">
              Навігація
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li><a href="#about" className="hover:text-[hsl(185_85%_45%)] transition-colors">Про центр</a></li>
              <li><a href="#services" className="hover:text-[hsl(185_85%_45%)] transition-colors">Послуги імплантації</a></li>
              <li><a href="#prices" className="hover:text-[hsl(185_85%_45%)] transition-colors">Прайс-лист та калькулятор</a></li>
              <li><a href="#anesthesia" className="hover:text-[hsl(185_85%_45%)] transition-colors">Лікування уві сні</a></li>
              <li><a href="#team" className="hover:text-[hsl(185_85%_45%)] transition-colors">Лікарі центру</a></li>
              <li><a href="#faq" className="hover:text-[hsl(185_85%_45%)] transition-colors">Часті питання</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Column */}
          <div>
            <h4 className="font-display font-bold text-xs mb-4 text-[hsl(185_85%_45%)] uppercase tracking-wider">
              Контакти
            </h4>
            <div className="space-y-2 text-xs text-white/80 font-body">
              <p>м. Львів, вул. Стрийська, 45</p>
              <p className="tabular-nums">Тел: +38 (067) 458-92-58</p>
              <p>Email: symmetricalviv@gmail.com</p>
              <p className="tabular-nums">Пн–Пт: 09:00 – 20:00</p>
              <p className="tabular-nums">Сб: 09:00 – 18:00</p>
            </div>
          </div>

          {/* Col 4: Social Row as TEXT links */}
          <div>
            <h4 className="font-display font-bold text-xs mb-4 text-[hsl(185_85%_45%)] uppercase tracking-wider">
              Соціальні мережі
            </h4>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-6">
              <a
                href="https://www.facebook.com/SymmetricaDent/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(185_85%_45%)] transition-colors underline underline-offset-4"
              >
                Facebook
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://www.instagram.com/symmetrica_dent/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(185_85%_45%)] transition-colors underline underline-offset-4"
              >
                Instagram
              </a>
            </div>
            <p className="text-[0.65rem] text-white/50 leading-relaxed font-body">
              Ліцензія МОЗ України №582914 на медичну та анестезіологічну практику.
            </p>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding off Bottom Edge */}
        <div className="border-t border-white/10 pt-8 pb-2 text-center overflow-hidden select-none pointer-events-none">
          <div className="font-display font-black text-5xl sm:text-8xl lg:text-9xl text-white/5 tracking-widest uppercase leading-none">
            SYMMETRICA
          </div>
        </div>

        {/* Bottom Rights, Credit Meta-Line & Developer Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] text-white/50 border-t border-white/10 pt-6 font-body">
          <span>© 2026 Symmetrica Medical Center. {String(t("footer.rights"))}</span>
          <span className="text-white/40">Цифрова стоматологічна реабілітація у Львові</span>
          <a
            href="https://makarich.framer.website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[hsl(185_85%_45%)] transition-colors underline decoration-dotted"
          >
            {String(t("footer.developer"))}
          </a>
        </div>
      </div>
    </footer>
  );
}
