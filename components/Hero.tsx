"use client";

import { useLocale } from "@/lib/i18n";
import { TextReveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[var(--color-bg-dark)]">
      {/* Background Layer 1: Looping Video + Dark Scrim Stack */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={String(t("hero.heroPoster"))}
          className="w-full h-full object-cover filter brightness-75 scale-105"
        >
          <source src={String(t("hero.heroVideo"))} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-dark)]/95 via-[var(--color-bg-dark)]/85 to-[var(--color-bg-dark)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-[var(--color-bg-dark)]/70" />
      </div>

      {/* Background Layer 2: Giant Watermark Type Layer (pointer-events-none, whitespace-nowrap) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-[15vw] font-display font-bold text-white/[0.03] uppercase tracking-widest whitespace-nowrap"
      >
        SYMMETRICA
      </div>

      {/* Main Content Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 10-Layer Stack */}
          <div className="lg:col-span-8 space-y-6 text-white">
            
            {/* Layer 1: Eyebrow Kicker with REAL Meta */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>{String(t("hero.kicker"))}</span>
            </div>

            {/* Layer 2: Multi-line Poster H1 with contrast typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6.5xl font-display font-medium leading-[1.1] text-white tracking-tight">
              Тотальне <em className="italic font-serif text-[var(--color-accent)]">{String(t("hero.recoveryWord"))}</em> зубів уві сні за 24 години
            </h1>

            {/* Layer 3: Lede Paragraph */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
              {String(t("hero.subtitle"))}
            </p>

            {/* Layer 4: Flanking Mini-Copy Columns & Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  3D КТ Діагностика СНЩС
                </p>
                <p className="text-sm font-bold text-white tabular-nums">
                  {String(t("hero.priceConsult"))}
                </p>
                <p className="text-[11px] text-white/60">{String(t("hero.jointAnalysis"))}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  Хірургічна Імплантація
                </p>
                <p className="text-sm font-bold text-white tabular-nums">
                  {String(t("hero.priceImplant"))}
                </p>
                <p className="text-[11px] text-white/60">{String(t("hero.systemsLabel"))}</p>
              </div>
            </div>

            {/* Layer 5: CTA Pair (Solid Primary + Secondary Text Link) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
              <a
                href="#booking"
                className="px-8 py-4 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                {String(t("hero.ctaPrimary"))}
              </a>
              <a
                href="#calculator"
                className="px-6 py-4 text-white hover:text-[var(--color-accent)] font-semibold text-xs uppercase tracking-wider transition-colors text-center border-b border-white/20 hover:border-[var(--color-accent)]"
              >
                {String(t("hero.ctaSecondary"))} →
              </a>
            </div>

            {/* Layer 6: Meta Strip with Hairline Separators */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-white/70 tracking-wider uppercase font-semibold tabular-nums">
              <span>ПН-ПТ: 09:00 - 20:00</span>
              <span className="text-[var(--color-accent)]">·</span>
              <span>{String(t("hero.addressLine"))}</span>
              <span className="text-[var(--color-accent)]">·</span>
              <span className="text-amber-400 font-bold">{String(t("hero.googleReviews"))}</span>
            </div>

          </div>

          {/* Right Column: Rotating Text Badge & Interactive Diagnostic Protocol Panel */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
            
            {/* Layer 7: Rotating Text Circular Seal (Text Only, NO Glyphs) */}
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center pointer-events-none select-none">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[var(--color-accent)]/40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--color-accent)] text-[9px] font-bold uppercase tracking-widest fill-current">
                  <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text>
                    <textPath href="#circlePath">
                      SYMMETRICA DENTAL CENTER · EST 2013 ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="text-center space-y-0.5">
                <span className="block text-2xl font-display font-bold text-white tabular-nums">13</span>
                <span className="block text-[9px] uppercase tracking-widest text-[var(--color-accent)]">{String(t("hero.yearsText"))}</span>
              </div>
            </div>

            {/* Protocol Panel Card */}
            <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 space-y-4 text-white shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  ПРОТОКОЛ SYMMETRICA TECH
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  СЕДАЦІЯ
                </span>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba7d575c31abae62e8_research-image-1.webp"
                  alt="3D КТ Комп'ютерна томографія щелепи"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <p className="text-[11px] text-white/90">
                    Точне 3D-сканування кісткової тканини перед імплантацією
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-white/80">
                <p className="flex justify-between border-b border-white/10 pb-1">
                  <span>{String(t("hero.anesthesiologistLabel"))}</span>
                  <span className="font-bold text-white">{String(t("hero.anesthesiologistName"))}</span>
                </p>
                <p className="flex justify-between border-b border-white/10 pb-1">
                  <span>{String(t("hero.prosthesisReadyLabel"))}</span>
                  <span className="font-bold text-[var(--color-accent)]">{String(t("hero.prosthesisReadyTime"))}</span>
                </p>
              </div>

              <a
                href="#booking"
                className="block text-center w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors border border-white/20"
              >
                Забронювати візит →
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Layer 8: Scroll Cue (Tiny bottom-center indicator) */}
      <div className="relative z-10 text-center pb-2 text-white/50 text-[9px] tracking-widest uppercase flex flex-col items-center gap-1">
        <span>{String(t("hero.scroll"))}</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}