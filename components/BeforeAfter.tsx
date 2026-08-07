"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-20 sm:py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("beforeAfter.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
            {t("beforeAfter.title") as string}
          </h2>
          <p className="text-base text-white/70 font-body">
            {t("beforeAfter.subtitle") as string}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-5xl mx-auto h-[380px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl select-none">
          {/* After Image */}
          <img
            src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b77a267afb1b0ddb1d9b69_trust-image-1-p-800.webp"
            alt="Після тотального відновлення"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider">
            ПІСЛЯ (РЕКОНСТРУКЦІЯ)
          </div>

          {/* Before Image */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/681b1e8bf899772803dd4c7b_8e1180665795c3da9ae4e62d22e4b3065cdf1840-p-800.webp"
              alt="До лікування"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
              style={{ width: "100%", height: "100%" }}
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider">
              ДО ЛІКУВАННЯ
            </div>
          </div>

          {/* Range Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Slider comparison before and after"
          />

          {/* Slider Control Line */}
          <div
            className="absolute inset-y-0 pointer-events-none z-20 flex items-center justify-center"
            style={{ left: `calc(${sliderPosition}% - 14px)` }}
          >
            <div className="w-7 h-7 rounded-full bg-accent border-2 border-white shadow-xl flex items-center justify-center text-white text-[10px] font-mono font-bold">
              SLIDE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
