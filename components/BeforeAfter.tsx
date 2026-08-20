"use client";

import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();
  const cases = (t("cases.items") as Array<{ title: string; detail: string; result: string }>) || [];

  return (
    <section id="cases" className="py-20 sm:py-28 bg-bg-light scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {t("cases.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
            {t("cases.title") as string}
          </h2>
          <p className="text-text-muted text-base">
            {t("cases.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-gray-100">
                <img
                  src={
                    idx === 0
                      ? "/symmetrica/media/885c7eb3f928f466.webp"
                      : "/symmetrica/media/809da82708f4d0c2.webp"
                  }
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-display font-bold text-primary mb-2">
                {c.title}
              </h3>
              <p className="text-xs font-semibold text-accent mb-3">
                {c.detail}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
