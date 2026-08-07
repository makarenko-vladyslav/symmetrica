
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();

  const testimonialsList = [
    {
      quote: "Враження від стоматології лише найкраще! Професійні лікарі, уважний персонал. Пояснюють всі кроки в процесі лікування. Дають відповіді на всі запитання і рекомендації для подальшого догляду. Є можливість провести все необхідне обстеження в клініці. Однозначно рекомендую!",
      author: "Надія К.",
      role: "Пацієнтка Symmetrica з 2019 року",
      rating: "4.9/5 · Google Maps · 580+ відгуків",
    },
    {
      quote: "Проходив процедуру імплантації All-on-4 уві сні. Заснув — прокинувся вже з новою усмішкою! Ніякого болю чи набряку. Окремо дякую персональному координатору за опіку.",
      author: "Володимир М.",
      role: "Пацієнт напрямку All-on-4",
      rating: "4.9/5 · Google Maps · 580+ відгуків",
    },
    {
      quote: "Власна лабораторія Symmetrica Tech — це просто космос. Мої керамічні вініри зробили за 2 дні. Колір і форма точно відповідають моїм очікуванням.",
      author: "Олена К.",
      role: "Пацієнтка напрямку вінірів E-max",
      rating: "4.9/5 · Google Maps · 580+ відгуків",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-[hsl(195_25%_98%)] text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
            {String(t("testimonials.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("testimonials.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body">
            {String(t("testimonials.subtitle"))}
          </p>
        </div>

        {/* Featured Large Display Quote */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-lg relative mb-8">
          <div className="font-display font-black text-6xl text-[hsl(185_85%_36%/0.2)] absolute top-6 left-6 leading-none pointer-events-none select-none">
            “
          </div>
          <p className="relative z-10 text-base sm:text-lg font-display italic text-[hsl(210_50%_12%)] leading-relaxed mb-6 pt-4">
            «{testimonialsList[currentIndex].quote}»
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div>
              <div className="font-display font-bold text-base text-[hsl(210_50%_12%)]">
                {testimonialsList[currentIndex].author}
              </div>
              <div className="text-xs text-[hsl(210_15%_45%)] font-body">
                {testimonialsList[currentIndex].role}
              </div>
            </div>
            <div className="text-xs font-semibold text-[hsl(185_85%_36%)]">
              {testimonialsList[currentIndex].rating}
            </div>
          </div>
        </div>

        {/* DOT Indicators + Slider Counter (NO Prev/Next Arrows) */}
        <div className="flex items-center justify-center gap-6">
          <span className="text-xs font-mono text-[hsl(210_15%_45%)] tabular-nums">
            0{currentIndex + 1} / 0{testimonialsList.length}
          </span>
          <div className="flex items-center gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-[hsl(185_85%_36%)]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
