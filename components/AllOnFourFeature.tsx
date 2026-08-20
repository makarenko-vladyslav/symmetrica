"use client";

import { useLocale } from "@/lib/i18n";

export default function AllOnFourFeature() {
  const { t } = useLocale();
  const steps = (t("allOnFour.steps") as Array<{ num: string; title: string; text: string }>) || [];

  return (
    <section id="all-on-4" className="py-20 sm:py-28 bg-bg-dark text-white scroll-mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
              {t("allOnFour.kicker") as string}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-white leading-tight">
              {t("allOnFour.title") as string}
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              {t("allOnFour.subtitle") as string}
            </p>

            <a
              href="#booking"
              className="inline-block px-6 py-4 bg-accent hover:bg-accent-hover text-primary font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-lg"
            >
              {t("allOnFour.cta") as string}
            </a>
          </div>

          {/* Right Column Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="text-3xl font-display font-bold text-accent shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
