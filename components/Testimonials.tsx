"use client";

import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("testimonials.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
            {t("testimonials.title") as string}
          </h2>
        </div>

        {/* Featured Display Quote */}
        <div className="p-8 sm:p-12 rounded-2xl bg-primary-light/60 border border-white/10 space-y-6 shadow-2xl relative">
          <p className="text-xl sm:text-3xl font-display italic text-white/95 leading-relaxed">
            «{t("testimonials.quote") as string}»
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-display font-bold text-lg text-white">
                {t("testimonials.author") as string}
              </p>
              <p className="text-xs font-mono text-white/60">
                {t("testimonials.descriptor") as string}
              </p>
            </div>

            <div className="text-xs font-mono text-accent font-bold uppercase tracking-wider">
              {t("testimonials.rating") as string}
            </div>
          </div>
        </div>

        {/* Slider Dot Indicators */}
        <div className="flex justify-center items-center gap-2">
          <span className="w-8 h-1.5 rounded-full bg-accent" />
          <span className="w-2 h-1.5 rounded-full bg-white/20" />
          <span className="w-2 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
