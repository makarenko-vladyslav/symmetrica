"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-bg-dark text-white">
      {/* Layer 1: Background Video + Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6998091/pexels-photo-6998091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/6998091/6998091-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/50" />
      </div>

      {/* Layer 2: Giant Watermark Word (Zero height, pointer-events-none, aria-hidden) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden"
      >
        <span className="font-display font-black text-[18vw] leading-none text-white/[0.03] uppercase tracking-widest whitespace-nowrap">
          SYMMETRICA
        </span>
      </div>

      {/* Layer 3: Rotating Text Seal Badge (Top Right) */}
      <div className="absolute top-28 right-8 z-10 hidden lg:block pointer-events-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9.5px] font-mono uppercase tracking-[0.2em] fill-accent font-semibold">
              <textPath href="#circlePath">
                SYMMETRICA DENTAL CENTER · EST. 2013 · SWISS QUALITY ·
              </textPath>
            </text>
          </svg>
          <span className="absolute font-display text-accent font-bold text-xs tracking-wider">
            ZURICH
          </span>
        </div>
      </div>

      {/* Layer 4 & 5: Main Hero Content Cluster */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 space-y-6">
            {/* Kicker with REAL Meta */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              {t("hero.kicker") as string}
            </div>

            {/* Poster H1 with Italic Word */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-white">
              {t("hero.titlePre") as string}{" "}
              <span className="italic font-normal text-accent font-display">
                {t("hero.titleItalic") as string}
              </span>{" "}
              {t("hero.titlePost") as string}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed max-w-2xl">
              {t("hero.subtitle") as string}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contacts"
                className="px-8 py-4 rounded bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-widest font-bold text-center transition-all shadow-xl hover:shadow-2xl"
              >
                {t("hero.ctaPrimary") as string}
              </a>
              <a
                href="#calculator"
                className="px-8 py-4 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest font-semibold text-center border border-white/20 transition-all backdrop-blur-sm"
              >
                {t("hero.ctaSecondary") as string}
              </a>
            </div>
          </div>

          {/* Layer 6: Flanking Mini-Copy Column (Right side desktop) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 text-xs font-body text-white/70 border-l border-white/10 pl-6 space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold block">
                01 — КЛІНІЧНИЙ ДОСВІД
              </span>
              <p className="leading-relaxed text-white/80">
                {t("hero.flankLeft") as string}
              </p>
            </div>
            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold block">
                02 — ВЛАСНА ІНФРАСТРУКТУРА
              </span>
              <p className="leading-relaxed text-white/80">
                {t("hero.flankRight") as string}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 7: 3-Item Meta Strip with Hairline Separators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-white/80">
          <div className="flex flex-col space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-accent">ЛОКАЦІЯ КЛІНІКИ</span>
            <span className="font-bold text-white">{t("hero.address") as string}</span>
            <span className="text-white/50 text-[11px]">м. Львів, Франківський р-н</span>
          </div>

          <div className="flex flex-col space-y-0.5 sm:border-l sm:border-white/10 sm:pl-6">
            <span className="text-[10px] uppercase tracking-widest text-accent">ПРЯМИЙ ЗВ'ЯЗОК</span>
            <a href="tel:+380674589258" className="font-bold text-white hover:text-accent transition-colors">
              +38 (067) 458-92-58
            </a>
            <span className="text-white/50 text-[11px]">Персональний сервіс-менеджер</span>
          </div>

          <div className="flex flex-col space-y-0.5 sm:border-l sm:border-white/10 sm:pl-6">
            <span className="text-[10px] uppercase tracking-widest text-accent">ГРАФІК ТА РЕЙТИНГ</span>
            <span className="font-bold text-white">{t("hero.workHours") as string}</span>
            <span className="text-white/50 text-[11px]">4.9 / 5.0 на базі 340+ відгуків Google</span>
          </div>
        </div>
      </div>

      {/* Layer 8: Scroll Cue Indicator in Normal Flow */}
      <div className="relative z-10 pt-6 pb-2 flex flex-col items-center justify-center gap-1.5 opacity-70">
        <span className="text-[9px] tracking-[0.3em] uppercase font-mono text-white/80">SCROLL</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>

      {/* Layer 9: Thin Ticker Strip at Base */}
      <div className="w-full py-2 bg-primary/90 border-t border-white/10 overflow-hidden relative z-10">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[10px] font-mono uppercase tracking-[0.25em] text-accent/90">
          <span>SYMMETRICA TECH CAD/CAM</span>
          <span className="text-white/20">—</span>
          <span>ALL-ON-4 & ALL-ON-6 EXPRESS</span>
          <span className="text-white/20">—</span>
          <span>ВЛАСНА АНЕСТЕЗІОЛОГІЯ</span>
          <span className="text-white/20">—</span>
          <span>ВІНІРИ E-MAX ZIRKONZAHN</span>
          <span className="text-white/20">—</span>
          <span>SWISS GBT PROTOCOL</span>
          <span className="text-white/20">—</span>
          <span>SYMMETRICA TECH CAD/CAM</span>
          <span className="text-white/20">—</span>
          <span>ALL-ON-4 & ALL-ON-6 EXPRESS</span>
          <span className="text-white/20">—</span>
        </div>
      </div>
    </section>
  );
}
