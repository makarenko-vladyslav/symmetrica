"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t("stats") as Array<{ number: string; unit: string; label: string }>;

  return (
    <section className="bg-primary text-white border-b border-border-dark py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.isArray(stats) &&
            stats.map((st, i) => (
              <div key={i} className="border-l border-accent/40 pl-5 space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight tabular-nums">
                    {st.number}
                  </span>
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {st.unit}
                  </span>
                </div>
                <p className="text-xs font-body text-white/70 leading-snug">
                  {st.label}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
