"use client";

import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] bg-[hsl(162_55%_8%)] text-white pt-28 pb-16 px-4 sm:px-6 flex flex-col justify-between overflow-hidden border-b border-[hsl(162_35%_26%/0.3)]">
      {/* Client supplied video background loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/symmetrica/media/6316077a007d752f.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/symmetrica/media/200f4c779d0cf8fe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(162_55%_8%/0.9)] via-[hsl(162_55%_8%/0.7)] to-[hsl(162_55%_8%/0.95)]" />
      </div>

      {/* Background Subtle Gradient Glows */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(155_75%_38%/0.12)] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[hsl(42_65%_52%/0.08)] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column Text Content */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 self-start bg-[hsl(162_45%_14%)] border border-[hsl(155_75%_38%/0.3)] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[hsl(155_75%_55%)]">
            <span className="w-2 h-2 rounded-full bg-[hsl(155_75%_38%)] animate-pulse" />
            <span>{String(t('hero.badge'))}</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-white">
            {String(t('hero.titlePrefix'))}{' '}
            <span className="italic font-normal text-[hsl(42_65%_52%)]">
              {String(t('hero.titleItalic'))}
            </span>{' '}
            {String(t('hero.titleSuffix'))}
          </h1>

          {/* Subtitle / Lede */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            {String(t('hero.subtitle'))}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[hsl(155_75%_38%)] hover:bg-[hsl(155_75%_32%)] text-white font-semibold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              {String(t('hero.ctaPrimary'))}
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold text-base transition-all"
            >
              {String(t('hero.ctaSecondary'))}
            </a>
          </div>

          {/* Meta Info Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs sm:text-sm text-white/70 border-t border-white/10 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-[hsl(42_65%_52%)] font-bold">★</span>
              <span>{String(t('hero.metaStrip.rating'))}</span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div>{String(t('hero.metaStrip.location'))}</div>
            <div className="hidden sm:block text-white/30">•</div>
            <div>{String(t('hero.metaStrip.hours'))}</div>
          </div>
        </div>

        {/* Right Column: Key Guarantees & Stats Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-[hsl(162_45%_12%)] border border-white/10 flex flex-col gap-2 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-[hsl(155_75%_55%)] font-semibold">
              {String(t('hero.flankLeftTitle'))}
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {String(t('hero.flankLeftText'))}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[hsl(162_45%_12%)] border border-white/10 flex flex-col gap-2 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-[hsl(42_65%_52%)] font-semibold">
              {String(t('hero.flankRightTitle'))}
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {String(t('hero.flankRightText'))}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[hsl(155_75%_55%)]">
                {String(t('hero.stats.patients'))}
              </div>
              <div className="text-[0.7rem] uppercase tracking-wider text-white/60 mt-1">
                {String(t('hero.stats.patientsLabel'))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[hsl(42_65%_52%)]">
                {String(t('hero.stats.satisfaction'))}
              </div>
              <div className="text-[0.7rem] uppercase tracking-wider text-white/60 mt-1">
                {String(t('hero.stats.satisfactionLabel'))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classic Scroll Indicator */}
      <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs uppercase tracking-[0.25em] text-white/40 relative z-10">
        <span>{String(t('hero.scroll'))}</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}