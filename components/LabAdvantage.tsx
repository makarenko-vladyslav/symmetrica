"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function LabAdvantage() {
  const { t } = useLocale();

  return (
    <section id="lab" className="py-24 bg-bg-light text-text-main scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('lab.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-primary">
              {t('lab.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              {t('lab.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Oversized Statement Pull-Quote */}
        <Reveal delay={0.2}>
          <div className="mb-16 p-8 rounded-2xl bg-primary text-white border-l-4 border-accent shadow-xl">
            <p className="text-lg sm:text-xl font-serif italic text-white/90 leading-relaxed mb-4">
              {t('lab.quote') as string}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded-full bg-accent text-white font-bold font-display flex items-center justify-center text-xs">
                S
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {t('lab.personName') as string}
                </div>
                <div className="text-[11px] text-accent font-mono">
                  {t('lab.personRole') as string}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2-Photo Cluster with Captions & Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-lg h-80">
              <img
                src="/symmetrica/media/885c7eb3f928f466.webp"
                alt={t('lab.labTitleAlt') as string}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-2/3 rounded-2xl overflow-hidden border-2 border-white shadow-2xl h-48 hidden sm:block">
              <img
                src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/662651c7d676b605cbf2a9e3_%D0%93%D0%BE%D1%80%D1%96%D0%BD%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%20-%20%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%201-p-800.webp"
                alt={t('lab.teamAtWorkAlt') as string}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="pt-2 border-t border-primary/20 text-xs text-text-muted font-mono uppercase tracking-wider">
              {t('lab.photoCaption') as string}
            </div>

            <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
              3D-сканування, безпосередній контакт лікаря-хірурга та ортопеда із зуботехніком забезпечує найвищий рівень крафтового виготовлення реставрацій у Львові.
            </p>

            <a
              href="#contact"
              className="inline-block py-2 text-xs font-bold uppercase tracking-wider text-accent hover:underline font-mono"
            >
              {t('lab.linkText') as string} →
            </a>
          </div>
        </div>

        {/* Advantage Cards Stack */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="h-full bg-bg-card rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-accent font-mono font-bold text-lg mb-4">01</div>
                <h3 className="text-xl font-display font-medium text-primary mb-3">
                  {t('lab.card1Title') as string}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-6">
                  {t('lab.card1Desc') as string}
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full bg-bg-card rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-accent font-mono font-bold text-lg mb-4">02</div>
                <h3 className="text-xl font-display font-medium text-primary mb-3">
                  {t('lab.card2Title') as string}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-6">
                  {t('lab.card2Desc') as string}
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full bg-bg-card rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-accent font-mono font-bold text-lg mb-4">03</div>
                <h3 className="text-xl font-display font-medium text-primary mb-3">
                  {t('lab.card3Title') as string}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-6">
                  {t('lab.card3Desc') as string}
                </p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>

      </div>
    </section>
  );
}
