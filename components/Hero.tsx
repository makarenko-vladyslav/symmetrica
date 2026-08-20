"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Marquee } from '@/components/motion';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-primary text-white">
      
      {/* Layer 1: Background Video Stack with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/symmetrica/media/6316077a007d752f.jpg"
          className="w-full h-full object-cover opacity-30 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/6998091/6998091-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/80" />
      </div>

      {/* Layer 2: Giant Decorative Watermark Word */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[15vw] leading-none uppercase tracking-widest text-white whitespace-nowrap">
          SYMMETRICA
        </span>
      </div>

      {/* Layer 3: Flanking Mini-Copy Marginalia (Left & Right) */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 z-10 text-[10px] font-mono tracking-widest uppercase text-white/40 rotate-90 origin-left">
        {t('hero.leftNote') as string}
      </div>
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 z-10 text-[10px] font-mono tracking-widest uppercase text-white/40 -rotate-90 origin-right">
        {t('hero.rightNote') as string}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Box */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Layer 4: Kicker with REAL Meta */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                {t('hero.meta') as string}
              </div>
            </Reveal>

            {/* Layer 5: Multi-line Poster H1 with ONE word set differently */}
            <Reveal delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-[1.08] tracking-tight text-white mb-6">
                {t('hero.titlePart1') as string}{' '}
                <span className="italic font-normal text-accent font-serif">{t('hero.titleAcc') as string}</span>{' '}
                {t('hero.titlePart2') as string}
              </h1>
            </Reveal>

            {/* Layer 6: 1-2 Line Subtitle */}
            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
                {t('hero.subtitle') as string}
              </p>
            </Reveal>

            {/* Layer 7: CTA Pair */}
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-accent/90 transition-all shadow-xl hover:shadow-accent/40 text-center"
                >
                  {t('hero.primaryCta') as string}
                </a>
                <a
                  href="#calculator"
                  className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all text-center backdrop-blur-sm"
                >
                  {t('hero.secondaryCta') as string} →
                </a>
              </div>
            </Reveal>

            {/* Layer 8: 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.5}>
              <div className="w-full pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70 font-light">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-mono font-bold">—</span>
                  <span>{t('hero.metaStrip1') as string}</span>
                </div>
                <div className="flex items-center gap-2 sm:border-l sm:border-white/15 sm:pl-4">
                  <span className="text-accent font-mono font-bold">—</span>
                  <span>{t('hero.metaStrip2') as string}</span>
                </div>
                <div className="flex items-center gap-2 sm:border-l sm:border-white/15 sm:pl-4">
                  <span className="text-accent font-mono font-bold">—</span>
                  <span className="font-medium text-white/90">{t('hero.metaStrip3') as string}</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Layer 9: Floating Visual Card with Text Seal */}
          <div className="lg:col-span-4 hidden lg:block relative">
            
            {/* Layer 10: Text-Only Rotating Circular Seal */}
            <div className="absolute -top-8 -right-6 z-20 pointer-events-none">
              <div className="w-28 h-28 relative flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent fill-current">
                  <path id="heroSealPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9.5px] uppercase tracking-[0.24em] font-mono font-semibold">
                    <textPath href="#heroSealPath">
                      SYMMETRICA · DENTAL CENTER · LVIV ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-accent font-mono">
                  2013
                </div>
              </div>
            </div>

            <Reveal delay={0.4} direction="left">
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-2xl text-white">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                  <img
                    src="/symmetrica/media/aacdf9085432ae20.webp"
                    alt={t('hero.implantationModelAlt') as string}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/30">
                    Symmetrica Tech 3D
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold">
                    3D Комп'ютерна Томографія & Седація
                  </div>
                  <div className="text-base font-display font-medium leading-snug">
                    Комплексна реабілітація під дахом однієї клініки у Львові
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Гарантійні зобов'язання та супровід сервіс-менеджера на кожному етапі лікування.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>

      {/* Layer 11: Base Marquee Strip */}
      <div className="absolute bottom-0 left-0 right-0 py-2.5 bg-primary/90 border-t border-white/10 text-[11px] font-mono tracking-widest uppercase text-white/50 overflow-hidden whitespace-nowrap">
        <Marquee>
          <span>{t('hero.bannerTicker') as string}</span>
        </Marquee>
      </div>

      {/* Layer 12: Classic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/30">
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">{t('hero.scroll') as string}</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
