
"use client";

import { useLocale } from "@/lib/i18n";

export default function AnesthesiaFeature() {
  const { t } = useLocale();
  const benefits = (t("anesthesia.benefits") as string[]) || [];

  return (
    <section id="anesthesia" className="py-20 sm:py-24 bg-[hsl(195_25%_98%)] text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Media Block */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/10 relative group">
              <img
                src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/68e3d94fe60f265d42dc8d4e_maxresdefault-p-800.webp"
                alt="Лікування під седацією Symmetrica"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[0.65rem] font-bold text-[hsl(185_85%_45%)] uppercase tracking-wider mb-1">
                  Анестезіологічний корпус
                </span>
                <span className="text-base sm:text-lg font-display font-bold">
                  Сертифікований наркоз для дорослих та дітей у центрі Symmetrica Medical Group
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
              {String(t("anesthesia.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              {String(t("anesthesia.title"))}
            </h2>
            <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body leading-relaxed mb-8">
              {String(t("anesthesia.subtitle"))}
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                  <span className="text-[hsl(185_85%_36%)] font-mono font-bold text-sm">—</span>
                  <span className="text-xs sm:text-sm font-body font-semibold text-[hsl(210_35%_15%)] leading-snug">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-block px-8 py-4 rounded-xl bg-[hsl(210_50%_12%)] hover:bg-[hsl(210_50%_18%)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Консультація анестезіолога →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
