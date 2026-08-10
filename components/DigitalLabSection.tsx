"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function DigitalLabSection() {
  const { t } = useLocale();

  return (
    <section id="lab" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp"
                  alt="Власна цифрова зуботехнічна лабораторія Symmetrica Tech"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[var(--color-accent)] text-xs font-bold px-4 py-2 rounded-full border border-white/20 uppercase tracking-wider">
                  ГОТОВНІСТЬ 24-48 ГОДИН
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column Description */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {String(t("labSection.kicker"))}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)] mt-2">
                {String(t("labSection.title"))}
              </h2>
            </Reveal>

            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              {String(t("labSection.description"))}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200">
                <p className="text-xs uppercase font-bold text-[var(--color-accent)] tracking-wider">{String(t("labSection.card1Subtitle"))}</p>
                <h4 className="text-sm font-bold text-[var(--color-primary)] mt-1">{String(t("labSection.card1Title"))}</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Точність прилягання коронок до мікрона за допомогою комп'ютерного моделювання.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200">
                <p className="text-xs uppercase font-bold text-[var(--color-accent)] tracking-wider">{String(t("labSection.card2Subtitle"))}</p>
                <h4 className="text-sm font-bold text-[var(--color-primary)] mt-1">{String(t("labSection.card2Title"))}</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Ортопед і зуботехнік особисто узгоджують форму та колір зубів без сторонніх підрядників.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="inline-block px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                Записатися на примірювання Mock-Up →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}