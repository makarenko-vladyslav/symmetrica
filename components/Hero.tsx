"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const hero = t("hero") as Record<string, string>;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[hsl(205_45%_10%)] text-white">
      {/* Background Layer 1: Looping Video Clip */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.posterUrl}
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
        {/* Layer 2: Dark Tinted Scrim (never white) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(205_45%_10%)] via-[hsl(205_45%_10%/0.75)] to-[hsl(205_45%_10%/0.5)]" />
      </div>

      {/* Giant Background Watermark Layer (whitespace-nowrap, pointer-events-none, aria-hidden) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-serif font-black uppercase text-white/[0.03] select-none pointer-events-none whitespace-nowrap z-0"
      >
        SYMMETRICA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Kicker with Real Meta */}
        <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase mb-8 self-start backdrop-blur-sm shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[hsl(188_85%_48%)] animate-pulse" />
          <span className="text-white/95 font-semibold">{hero.kicker}</span>
        </div>

        {/* Main Content Layout with Flanking Copy Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            {/* Multi-line Poster H1 with ONE word styled differently */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.08] tracking-tight">
              Тотальне відновлення зубів{" "}
              <span className="italic font-normal text-[hsl(188_85%_48%)] underline decoration-1 underline-offset-8">
                {hero.titleAccentWord}
              </span>{" "}
              уві сні за 24 години
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-body text-white/80 max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>

            {/* CTA Pair: Solid CTA + Secondary Outline */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#contacts"
                className="bg-[hsl(188_85%_38%)] hover:bg-[hsl(188_90%_30%)] text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold px-8 py-4 rounded transition-all shadow-xl hover:shadow-[hsl(188_85%_38%/0.4)] text-center"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#calculator"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold px-8 py-4 rounded transition-all backdrop-blur-sm text-center"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Flanking Mini-Copy Columns + Rotating Circular Text Seal */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/15 lg:pl-8">
            {/* Rotating Floating Text Seal */}
            <div className="relative w-28 h-28 self-start hidden sm:flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow text-white/80" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-sans uppercase font-bold tracking-[0.2em] fill-current">
                  <textPath href="#circlePath">{hero.sealText}</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-serif font-bold text-[hsl(188_85%_48%)]">
                ★ 3D
              </div>
            </div>

            {/* Mini Column 1 */}
            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[hsl(188_85%_48%)]">
                {hero.miniLeftTitle}
              </h4>
              <p className="text-xs font-body text-white/70 leading-normal">
                {hero.miniLeftText}
              </p>
            </div>

            {/* Mini Column 2 */}
            <div className="space-y-1 pt-3 border-t border-white/10">
              <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[hsl(188_85%_48%)]">
                {hero.miniRightTitle}
              </h4>
              <p className="text-xs font-body text-white/70 leading-normal">
                {hero.miniRightText}
              </p>
            </div>
          </div>
        </div>

        {/* 3-Item Meta Strip with Hairline Separators */}
        <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-white/80">
          <div className="flex items-center space-x-3">
            <span className="text-[hsl(188_85%_48%)] font-bold">⏱</span>
            <span>{hero.metaHours}</span>
          </div>
          <div className="flex items-center space-x-3 md:border-l md:border-white/15 md:pl-6">
            <span className="text-[hsl(188_85%_48%)] font-bold">📍</span>
            <span>{hero.metaAddress}</span>
          </div>
          <div className="flex items-center space-x-3 md:border-l md:border-white/15 md:pl-6">
            <span className="text-[hsl(188_85%_48%)] font-bold">★</span>
            <span className="font-semibold">{hero.metaRating}</span>
          </div>
        </div>

        {/* Scroll Cue (Classic tiny center indicator) */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-1.5 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-[0.35em] font-sans text-white/70">{hero.scrollLabel || "SCROLL"}</span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-[hsl(188_85%_48%)] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
