
"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[hsl(212_48%_9%)] text-white">
      {/* Background Video Layer 1 + Dark Scrim Layer 2 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6998091/pexels-photo-6998091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover opacity-25"
        >
          <source
            src="https://videos.pexels.com/video-files/6998091/6998091-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(212_48%_9%)] via-[hsl(212_48%_9%/0.75)] to-[hsl(212_48%_9%/0.5)]" />
      </div>

      {/* Giant Decorative Background Watermark Type (Layer 10) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden"
      >
        <span className="font-display font-black text-[22vw] uppercase tracking-tighter whitespace-nowrap text-white">
          SYMMETRICA
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        {/* Flanking Top Mini-Copy Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-white/10 mb-8 text-xs text-white/60 font-body">
          <div>
            Ліцензія МОЗ України №582914 · 63 000+ відновлених усмішок
          </div>
          <div className="md:text-right">
            Власна CAD/CAM лабораторія Symmetrica Tech · Лікувальний сон 24/7
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Kicker with REAL Meta */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[0.7rem] font-semibold tracking-wider text-[hsl(185_85%_45%)] uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(185_85%_45%)] animate-pulse" />
              {String(t("hero.kicker"))}
            </div>

            {/* Multi-line Poster H1 with ONE word set differently */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.08] mb-6">
              {String(t("hero.titlePart1"))}{" "}
              <span className="italic font-normal text-[hsl(185_85%_45%)] font-display underline decoration-[hsl(185_85%_45%/0.4)] underline-offset-8">
                {String(t("hero.titleItalic"))}
              </span>{" "}
              {String(t("hero.titlePart2"))}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-body leading-relaxed mb-8">
              {String(t("hero.subtitle"))}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#booking"
                className="px-8 py-4 rounded-xl bg-[hsl(185_85%_36%)] hover:bg-[hsl(185_85%_30%)] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg hover:shadow-[0_0_30px_hsl(185_85%_36%/0.4)]"
              >
                {String(t("hero.primaryCta"))}
              </a>
              <a
                href="#calculator"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center transition-all backdrop-blur-sm"
              >
                {String(t("hero.secondaryCta"))}
              </a>
            </div>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 pt-4 border-t border-white/10 w-full">
              <span>Пн–Пт: 09:00 – 20:00</span>
              <span className="text-white/30">|</span>
              <span>м. Львів, вул. Стрийська, 45</span>
              <span className="text-white/30">|</span>
              <span className="text-[hsl(38_85%_52%)] font-semibold">4.9/5 за 580+ відгуками у Google</span>
            </div>
          </div>

          {/* Right Floating Text-Only Badge/Card */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="text-[0.65rem] font-bold text-[hsl(185_85%_45%)] uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                SYMMETRICA TECH · CAD/CAM
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Відновлення зубів за 24 години
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-4 font-body">
                Завдяки власній цифровій лабораторії та 3D-навігаційній хірургії ви отримуєте незнімний протез All-on-4 / All-on-6 одразу в день операції.
              </p>

              {/* Text-only Circular Badge / Stamp */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[0.65rem] text-white/90 font-mono tracking-tight flex items-center justify-between">
                <span>ГАРАНТІЯ ЗА ДОГОВОРОМ</span>
                <span className="text-[hsl(38_85%_52%)] font-bold">100% ЗАХИСТ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter & Marquee Ticker at Base */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md mt-6 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left mb-4">
            {((t("stats") as Array<{ number: string; label: string }>) || []).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[hsl(185_85%_45%)] tabular-nums">
                  {stat.number}
                </span>
                <span className="text-[0.7rem] text-white/70 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Cue Indicator (Physically Centered in Normal Flow Below Content) */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2">
        <span className="text-[0.55rem] tracking-[0.25em] font-mono text-white/50 uppercase mb-1">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[hsl(185_85%_45%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
