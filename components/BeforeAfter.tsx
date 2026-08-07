
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();

  const cases = [
    {
      title: "Тотальне відновлення All-on-4 (Верхня щелепа)",
      time: "24 години",
      material: "Цирконієвий протез Symmetrica Tech",
      desc: "Пацієнт звернувся зі значною атрофією кістки. Проведено операцію в медикаментозному сні із зафіксованим протезом в день процедури.",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b77a267afb1b0ddb1d9b69_trust-image-1-p-800.webp",
    },
    {
      title: "Реконструкція усмішки 10 вінірами E-max",
      time: "3 дні",
      material: "Кераміка E-max Press (Швейцарія)",
      desc: "Усунення стертості емалі, виправлення формату за протоколом Digital Smile Design.",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e%2F69ccddd651f817894d3f03fd_IMG_6295_poster.0000000.jpg",
    },
  ];

  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-white text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
            {String(t("beforeAfter.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("beforeAfter.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body">
            {String(t("beforeAfter.subtitle"))}
          </p>
        </div>

        {/* Full-width Container Case Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src={cases[activeCase].img}
                alt={cases[activeCase].title}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[hsl(210_50%_12%)] text-white text-xs font-bold uppercase tracking-wider tabular-nums">
                Термін: {cases[activeCase].time}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-4">
              {cases.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeCase === i
                      ? "bg-[hsl(195_25%_98%)] border-[hsl(185_85%_36%)] shadow-md"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-[hsl(185_85%_36%)] uppercase tracking-wider block mb-1">
                    КЛІНІЧНИЙ ВИПАДОК 0{i + 1}
                  </span>
                  <h3 className="text-lg font-display font-bold text-[hsl(210_50%_12%)] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[hsl(210_15%_45%)] font-body leading-relaxed mb-3">
                    {c.desc}
                  </p>
                  <div className="text-xs font-semibold text-[hsl(210_35%_15%)]">
                    Матеріал: {c.material}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
