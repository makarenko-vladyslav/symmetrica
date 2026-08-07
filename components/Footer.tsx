"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-12 border-t border-border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Giant Full-Width Wordmark Bleeding Off Bottom Edge */}
        <div className="text-center overflow-hidden border-b border-white/10 pb-8 select-none">
          <span className="font-display font-black text-[15vw] leading-none tracking-widest text-white/5 block uppercase">
            SYMMETRICA
          </span>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-mono">
          <div className="space-y-3">
            <span className="font-display font-bold text-xl text-white tracking-wider block">
              SYMMETRICA
            </span>
            <p className="font-body text-white/60 leading-relaxed">
              {t("footer.tagline") as string}
            </p>
            <p className="text-[11px] text-white/40">
              Ліцензія МОЗ України № 629251 від 2013 року.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-accent uppercase tracking-wider">
              {t("footer.navTitle") as string}
            </h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#philosophy" className="hover:text-accent transition-colors">Філософія</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Клінічні напрямки</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Калькулятор кошторису</a></li>
              <li><a href="#technology" className="hover:text-accent transition-colors">Symmetrica Tech</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Лікарі центру</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-accent uppercase tracking-wider">
              {t("footer.servicesTitle") as string}
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>All-on-4 / All-on-6 Express</li>
              <li>Седація та наркоз</li>
              <li>Вініри E-max Zirkonzahn</li>
              <li>Елайнери Invisalign</li>
              <li>3D-КТ діагностика Vatech</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-accent uppercase tracking-wider">
              {t("footer.legalTitle") as string}
            </h3>
            <p className="text-white/70">м. Львів, вул. Стрийська, 45</p>
            <p className="text-white/70">+38 (067) 458-92-58</p>
            <p className="text-white/70">symmetricalviv@gmail.com</p>
            <div className="flex gap-4 pt-2 text-accent font-bold">
              <a href="https://www.facebook.com/SymmetricaDent/" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
              <a href="https://www.instagram.com/symmetrica_dent/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>

        {/* Legal Row with Credit Meta-Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>{t("footer.copyright") as string}</p>
          <p>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-accent transition-colors underline"
            >
              {t("footer.studioCredit") as string}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
