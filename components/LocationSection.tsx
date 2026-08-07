
"use client";

import { useLocale } from "@/lib/i18n";

export default function LocationSection() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-20 sm:py-24 bg-white text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
              {String(t("location.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              {String(t("location.title"))}
            </h2>

            <div className="space-y-4 mb-8 text-xs sm:text-sm font-body">
              <div className="p-3.5 rounded-xl bg-[hsl(195_25%_98%)] border border-gray-200">
                <div className="font-bold text-[hsl(210_50%_12%)] mb-1">Адреса клініки</div>
                <div>{String(t("location.address"))}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[hsl(195_25%_98%)] border border-gray-200">
                <div className="font-bold text-[hsl(210_50%_12%)] mb-1">Графік роботи</div>
                <div>{String(t("location.hours"))}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[hsl(195_25%_98%)] border border-gray-200">
                <div className="font-bold text-[hsl(210_50%_12%)] mb-1">Контактний телефон</div>
                <a href="tel:+380674589258" className="text-[hsl(185_85%_36%)] font-bold tabular-nums">
                  {String(t("location.phone"))}
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[hsl(195_25%_98%)] border border-gray-200">
                <div className="font-bold text-[hsl(210_50%_12%)] mb-1">Електронна пошта</div>
                <div>{String(t("location.email"))}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[hsl(195_25%_98%)] border border-gray-200">
              <h4 className="font-display font-bold text-sm mb-2 text-[hsl(210_50%_12%)]">
                {String(t("location.tourismTitle"))}
              </h4>
              <p className="text-xs text-[hsl(210_15%_45%)] font-body leading-relaxed">
                {String(t("location.tourismDesc"))}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=вулиця+Стрийська,+45,+Львів,+Львівська+область&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Symmetrica Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
