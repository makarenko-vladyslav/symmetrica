"use client";

import { useLocale } from "@/lib/i18n";

export default function SterilizationSafety() {
  const { t } = useLocale();
  const steps = (t("sterilization.steps") as Array<{ title: string; desc: string }>) || [];

  return (
    <section className="py-20 bg-hsl(210 25% 96%)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {t("sterilization.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
            {t("sterilization.title") as string}
          </h2>
          <p className="text-text-muted text-base">
            {t("sterilization.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-display font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
