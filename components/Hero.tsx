"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, TextReveal } from '@/components/motion';

export default function Hero() {
  const { t } = useLocale();

  const heroVideoSrc = "https://videos.pexels.com/video-files/6998091/6998091-hd_1920_1080_25fps.mp4";
  const heroPoster = "https://images.pexels.com/videos/6998091/pexels-photo-6998091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-6 overflow-hidden bg-primary text-white">
      
      {/* Background Video with Scrim Stack */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover scale-105 filter brightness-75"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* Background Decorative Watermark */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[15vw] font-display font-bold text-white/[0.03] pointer-events-none select-none whitespace-nowrap z-0 uppercase tracking-widest"
        aria-hidden="true"
      >
        SYMMETRICA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Kicker badge with REAL meta */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-accent text-xs uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{t('hero.est') as string}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              <span>{t('hero.titleBefore') as string} </span>
              <span className="font-serif italic text-accent font-normal">{t('hero.titleHighlight') as string}</span>
              <span> {t('hero.titleAfter') as string}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-body leading-relaxed">
              {t('hero.subtitle') as string}
            </p>

            {/* Flanking mini-copy columns */}
            <div className="grid sm:grid-cols-2 gap-4 py-2 max-w-xl text-xs text-slate-300 font-mono border-y border-white/10 my-4">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">— 01</span>
                <span>{t('hero.nav1') as string}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">— 02</span>
                <span>{t('hero.nav2') as string}</span>
              </div>
            </div>

            {/* Call to Actions PAIR */}
            <div className="pt-2 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
              <a
                href="#booking"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-accent/30 text-center transition-all duration-300 transform hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center"
              >
                {t('hero.ctaPrimary') as string}
              </a>
              <a
                href="#calculator"
                className="text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-accent transition-colors flex items-center justify-center gap-2 py-2 min-h-[44px]"
              >
                <span>{t('hero.ctaSecondary') as string}</span>
                <span>→</span>
              </a>
            </div>

            {/* Rating / Meta strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span className="text-slate-400">{t('hero.reviews') as string}</span>
              </div>
              <div className="hidden sm:block text-slate-600">|</div>
              <div>{t('hero.patients') as string}</div>
            </div>

          </div>

          {/* Floating Text Seal & Trust Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <Reveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-white space-y-6 relative overflow-hidden">
                
                {/* Text Seal SVG (no icons inside) */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold block">{t('hero.sealSubtitle') as string}</span>
                    <span className="text-xs font-bold text-white font-display block">{t('hero.sealTitle') as string}</span>
                  </div>
                  <div className="w-14 h-14 relative shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[10px] font-mono fill-accent uppercase tracking-widest">
                        <textPath href="#circlePath">
                          • SYMMETRICA MEDICAL GROUP • EST. 2013
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold leading-tight font-display text-white">
                    Гарантія точного відновлення посмішки
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    Власна цифрова зуботехнічна лабораторія та штатна анестезіологія дають змогу виконати тотальне відновлення без сторонніх підрядників.
                  </p>
                </div>

                <div className="bg-black/30 rounded-xl p-3.5 flex items-center justify-between text-xs border border-white/10">
                  <span className="text-slate-300">{t('hero.ctLabel') as string}</span>
                  <span className="font-bold text-accent font-mono">{t('hero.ctPrice') as string}</span>
                </div>

                <a
                  href="#sedation"
                  className="block text-center text-xs font-bold text-accent hover:text-white uppercase tracking-wider transition-colors pt-1 min-h-[44px] flex items-center justify-center"
                >
                  Детальніше про лікування уві сні →
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Hero Bottom Scroll Cue */}
      <div className="relative z-10 text-center pt-6 pb-2">
        <div className="inline-flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-slate-300 mb-1">{t('hero.scroll') as string}</span>
          <div className="w-px h-6 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
        </div>
      </div>

    </section>
  );
}
