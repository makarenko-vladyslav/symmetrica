"use client";

import { useLocale } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useLocale();

  return (
    <section className="py-16 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-primary-light via-primary to-primary-light border border-white/15 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
                {t("ctaBanner.kicker") as string}
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                {t("ctaBanner.title") as string}
              </h2>
              <p className="text-xs sm:text-sm font-body text-white/80 leading-relaxed">
                {t("ctaBanner.subtitle") as string}
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <a
                href="#contacts"
                className="px-8 py-4 rounded bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-all text-center"
              >
                {t("ctaBanner.button") as string} —
              </a>
              <span className="text-[11px] font-mono text-white/60 text-center">
                {t("ctaBanner.trustNote") as string}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
