"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = 2026;

  const logoUrl = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg";

  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Logo & Info */}
          <div className="space-y-4">
            <img
              src={logoUrl}
              alt="Symmetrica"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs text-slate-300 font-body leading-relaxed">
              Центр стоматологічного відновлення Symmetrica — тотальна реабілітація посмішки, імплантація All-on-4 уві сні та цифрова лабораторія Symmetrica Tech у Львові з 2013 року.
            </p>
            <div className="text-[11px] text-accent font-mono">
              Ліцензія МОЗ України №582910
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-accent font-mono">
              {t('footer.servicesTitle') as string}
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-body">
              <li><a href="#services" className="hover:text-accent transition-colors min-h-[44px] flex items-center">{t('footer.s1') as string}</a></li>
              <li><a href="#tech" className="hover:text-accent transition-colors min-h-[44px] flex items-center">{t('footer.s2') as string}</a></li>
              <li><a href="#sedation" className="hover:text-accent transition-colors min-h-[44px] flex items-center">{t('footer.s3') as string}</a></li>
              <li><a href="#lab" className="hover:text-accent transition-colors min-h-[44px] flex items-center">{t('footer.s4') as string}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors min-h-[44px] flex items-center">{t('footer.s5') as string}</a></li>
            </ul>
          </div>

          {/* Col 3: Specialization */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-accent font-mono">
              Спеціалізація
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-body">
              <li>{t('footer.spec1') as string}</li>
              <li>{t('footer.spec2') as string}</li>
              <li>{t('footer.spec3') as string}</li>
              <li>{t('footer.spec4') as string}</li>
              <li>{t('footer.spec5') as string}</li>
              <li>{t('footer.spec6') as string}</li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-accent font-mono">
              Контакти
            </div>
            <div className="space-y-2 text-xs text-slate-300 font-body">
              <p>{t('footer.addr') as string}</p>
              <p><a href="tel:+380674589247" className="font-bold text-white hover:text-accent font-mono min-h-[44px] flex items-center">+380 (67) 458-92-47</a></p>
              <p>{t('footer.email') as string}</p>
              <p className="pt-2 text-[11px] text-slate-400">Пн–Пт: 09:00 – 20:00, Сб: 09:00 – 16:00</p>
            </div>
          </div>

        </div>

        {/* Social Row as Text Links */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400 uppercase">{t('footer.socialLabel') as string}</span>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/symmetrica_dent/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline min-h-[44px] flex items-center">
              Instagram →
            </a>
            <a href="https://www.facebook.com/SymmetricaDent/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline min-h-[44px] flex items-center">
              Facebook →
            </a>
            <a href="#contact" className="text-accent hover:underline min-h-[44px] flex items-center">
              Telegram →
            </a>
          </div>
        </div>

        {/* Big Decorative Wordmark Bleeding Off Edge */}
        <div className="border-t border-white/10 pt-8 text-center overflow-hidden pointer-events-none select-none">
          <span className="text-5xl sm:text-8xl lg:text-9xl font-bold font-display uppercase tracking-widest text-white/5 block leading-none">
            SYMMETRICA
          </span>
        </div>

        {/* Legal & Developer Credit Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © {currentYear} Центр стоматологічного відновлення Symmetrica. Ліцензія МОЗ України №582910. Всі права захищені.
          </div>
          <div>
            Розроблено <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold min-h-[44px] inline-flex items-center">{t('footer.studio') as string}</a> — архітектура цифрових медичних рішень
          </div>
        </div>

      </div>
    </footer>
  );
}
