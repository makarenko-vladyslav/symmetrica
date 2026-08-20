"use client";

import { useLocale } from "@/lib/i18n";

export default function LocationCoverage() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
              {t("location.kicker") as string}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6">
              {t("location.title") as string}
            </h2>

            <div className="space-y-6 text-sm text-text-main">
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-1">
                  Адреса
                </div>
                <div className="text-base font-semibold text-primary">
                  {t("location.address") as string}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-1">
                  Графік роботи
                </div>
                <div>{t("location.hours") as string}</div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-1">
                  Телефон та Email
                </div>
                <div className="font-bold text-accent text-base">
                  {t("location.phone") as string}
                </div>
                <div className="text-text-muted">
                  {t("location.email") as string}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-bg-light border border-gray-100 text-xs text-text-muted leading-relaxed">
                {t("location.intlText") as string}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
            <iframe
              title={String(t("contact.info.googleMapsLocation") || "Google Maps Location")}
              src="https://www.google.com/maps?q=Львів,+вул.+Стрийська,+45&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}