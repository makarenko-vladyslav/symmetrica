"use client";

import { useState } from "react";
import pricingData from "@/lib/pricing.json";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

/** Формат числа, однаковий на збірці й у браузері: платформу не питаємо. */
const money = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

export default function TreatmentCalculator() {
  const { t } = useLocale();
  const { calculatorOptions } = pricingData;
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(calculatorOptions.treatments[0].id);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["sedation"]);

  const currentTreatment = calculatorOptions.treatments.find((t) => t.id === selectedTreatmentId) || calculatorOptions.treatments[0];

  const handleTreatmentChange = (id: string) => {
    setSelectedTreatmentId(id);
    const newT = calculatorOptions.treatments.find((t) => t.id === id);
    if (newT) {
      setQuantity(newT.minQty);
    }
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseCalc = currentTreatment.basePrice * quantity;
  const addonsTotal = calculatorOptions.addons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const totalPrice = baseCalc + addonsTotal;

  return (
    <section id="calculator" className="py-20 bg-[var(--color-bg-light)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            ПРОЗОРІСТЬ ВАРТОСТІ
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            Калькулятор орієнтовної вартості лікування
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            Оберіть необхідні процедури та розрахуйте орієнтовну вартість комплексного відновлення в Symmetrica.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-8">
            
            {/* Treatment Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                1. Оберіть напрямок відновлення
              </label>
              <div className="grid grid-cols-1 gap-2">
                {calculatorOptions.treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTreatmentChange(t.id)}
                    className={`p-4 rounded-xl text-left border transition-all flex justify-between items-center ${
                      selectedTreatmentId === t.id
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 font-semibold text-[var(--color-primary)]"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <span className="text-sm font-display font-bold">{t.name}</span>
                    <span className="text-xs font-bold text-gray-500 tabular-nums">
                      від {money(t.basePrice)} UAH / {t.unitLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  2. Кількість ({currentTreatment.unitLabel}):
                </label>
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  {quantity} {currentTreatment.unitLabel}
                </span>
              </div>
              <input
                type="range"
                min={currentTreatment.minQty}
                max={currentTreatment.maxQty}
                step={currentTreatment.step}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
              />
              <div className="flex justify-between text-xs text-gray-400 font-semibold tabular-nums">
                <span>{currentTreatment.minQty}</span>
                <span>{currentTreatment.maxQty}</span>
              </div>
            </div>

            {/* Addons checkboxes */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                3. Додаткові опції комфорту
              </label>
              <div className="space-y-2">
                {calculatorOptions.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? "border-[var(--color-accent)] bg-[var(--color-accent-light)]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 font-bold text-[10px] ${
                        isChecked ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-black" : "border-gray-300"
                      }`}>
                        {isChecked ? "✓" : ""}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-gray-800">{addon.name}</span>
                          <span className="text-xs font-bold text-[var(--color-primary)] tabular-nums">
                            +{money(addon.price)} UAH
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result card */}
          <div className="lg:col-span-5 bg-[var(--color-primary)] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 sticky top-28 border border-white/10">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold uppercase text-[var(--color-accent)] tracking-widest">
                ПОПЕРЕДНІЙ РОЗРАХУНОК
              </span>
              <h3 className="text-2xl font-display font-semibold mt-1">
                Орієнтовний підсумок
              </h3>
            </div>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex justify-between">
                <span>
                  {currentTreatment.name} ({quantity} {currentTreatment.unitLabel})
                </span>
                <span className="font-semibold text-white tabular-nums">{money(baseCalc)} UAH</span>
              </div>

              {calculatorOptions.addons
                .filter((a) => selectedAddons.includes(a.id))
                .map((a) => (
                  <div key={a.id} className="flex justify-between text-xs text-amber-200">
                    <span>+ {a.name}</span>
                    <span className="tabular-nums">{money(a.price)} UAH</span>
                  </div>
                ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <p className="text-xs text-white/60">{String(t("calculatorSection.totalCostLabel"))}</p>
              <p className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-accent)] tabular-nums">
                від {money(totalPrice)} UAH
              </p>
              <p className="text-[11px] text-white/50 leading-relaxed pt-1">
                * Фінальний кошторис розраховується лікарем на основі даних 3D КТ томографії.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Що входить у вартість:
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {currentTreatment.includes.map((inc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[var(--color-accent)] font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#booking"
              className="block w-full py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold text-center text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
            >
              Зафіксувати ціну на візиті →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}