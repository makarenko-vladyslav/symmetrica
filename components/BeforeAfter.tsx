"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);

  const cases = [
    {
      title: "Тотальне відновлення All-on-4 уві сні",
      time: "24 години",
      doctor: "Д-р Андрій Іванців & Д-р Олександр Біган",
      desc: "Пацієнт завітав зі складним пародонтитом та втратою жувальної функції. За 1 сеанс під седацією видалено рухомі зуби, встановлено 4 імпланти Straumann та зафіксовано незнімний протез.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-light)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            КЛІНІЧНІ РЕЗУЛЬТАТИ
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            Реальні трансформації пацієнтів Symmetrica
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            Відновлюємо не просто зуби — ми повертаємо впевненість, відкриту посмішку та якість життя.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Slider visual */}
          <div className="lg:col-span-7">
            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300 select-none">
              
              {/* After Image */}
              <img
                src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b7d691b76e5f6f01875d44_awward-news-1.webp"
                alt="Після відновлення"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow">
                ПІСЛЯ (24 ГОДИНИ)
              </span>

              {/* Before Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/681b1e8bf899772803dd4c7b_8e1180665795c3da9ae4e62d22e4b3065cdf1840-p-800.webp"
                  alt="До лікування"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                />
                <span className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow">
                  ДО ЛІКУВАННЯ
                </span>
              </div>

              {/* Range slider input control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-accent)] text-black font-bold flex items-center justify-center text-xs shadow-lg">
                  ↔
                </div>
              </div>
            </div>
          </div>

          {/* Case text explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-[var(--color-primary)] text-white font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-widest">
              КЕЙС #148 · ALL-ON-4
            </span>
            <h3 className="text-2xl font-display font-bold text-[var(--color-text-main)]">
              {cases[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              {cases[0].desc}
            </p>

            <div className="space-y-3 pt-2 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 text-xs">
                <span className="text-gray-500">{String(t("beforeAfterSection.durationLabel"))}</span>
                <span className="font-bold text-[var(--color-primary)] tabular-nums">{cases[0].time}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 text-xs">
                <span className="text-gray-500">{String(t("beforeAfterSection.doctorsLabel"))}</span>
                <span className="font-bold text-[var(--color-primary)]">{cases[0].doctor}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 text-xs">
                <span className="text-gray-500">{String(t("beforeAfterSection.anesthesiaMethodLabel"))}</span>
                <span className="font-bold text-emerald-600 uppercase tracking-wider">{String(t("beforeAfterSection.medicalSleep"))}</span>
              </div>
            </div>

            <a
              href="#booking"
              className="block text-center py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              Отримати аналогічний результат →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
