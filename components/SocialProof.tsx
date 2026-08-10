"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = (t("stats") as Array<{ value: string; label: string }>) || [];
  const socialTicker = (t("socialTicker") as string[]) || [];

  return (
    <section className="bg-[var(--color-primary)] text-white py-10 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-3 sm:px-6 space-y-1">
              <p className="text-3xl sm:text-5xl font-display font-bold text-[var(--color-accent)] tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interstitial Ticker Bar */}
      <div className="bg-black/40 py-3.5 border-t border-white/10">
        <Marquee speed={30}>
          <div className="flex items-center gap-12 text-xs uppercase tracking-widest text-white/80 font-semibold">
            {socialTicker.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}