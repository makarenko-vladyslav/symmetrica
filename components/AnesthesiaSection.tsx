"use client";

import { useLocale } from "@/lib/i18n";

export default function AnesthesiaSection() {
  const { t } = useLocale();
  const features = (t("anesthesia.features") as string[]) || [];

  return (
    <section id="anesthesia" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
              <img
                src="/symmetrica/media/3b8eb4da114fd720.webp"
                alt={String(t("anesthesia.doctorName"))}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-md text-white p-4 rounded-lg">
              <div className="font-display font-bold text-lg text-white">
                {t("anesthesia.doctorName") as string}
              </div>
              <div className="text-xs text-accent">
                {t("anesthesia.doctorRole") as string}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
              {t("anesthesia.kicker") as string}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6">
              {t("anesthesia.title") as string}
            </h2>
            <p className="text-text-muted text-base sm:text-lg mb-8 leading-relaxed">
              {t("anesthesia.description") as string}
            </p>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-bg-light border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span className="text-sm sm:text-base font-medium text-text-main">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}