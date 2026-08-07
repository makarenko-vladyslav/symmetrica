
"use client";

import { useLocale } from "@/lib/i18n";

export default function Process() {
  const { t } = useLocale();
  const steps = (t("process.steps") as Array<{ num: string; title: string; desc: string }>) || [];

  return (
    <section className="py-20 sm:py-24 bg-[hsl(212_48%_9%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_45%)] block mb-3">
            {String(t("process.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("process.title"))}
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-body">
            {String(t("process.subtitle"))}
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[hsl(185_85%_36%)] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(185_85%_36%)] text-white font-display font-bold text-xl flex items-center justify-center shrink-0 shadow-md">
                {s.num}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
