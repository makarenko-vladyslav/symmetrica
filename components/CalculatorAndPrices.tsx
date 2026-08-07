
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function CalculatorAndPrices() {
  const { t } = useLocale();

  const [teethCount, setTeethCount] = useState<number>(1);
  const [procedureType, setProcedureType] = useState<string>("single");
  const [useSedation, setUseSedation] = useState<boolean>(false);

  const calculateEstimate = () => {
    let base = 0;
    if (procedureType === "single") base = pricing.basePrices.implantSingle * teethCount;
    else if (procedureType === "allOn4") base = pricing.basePrices.allOn4;
    else if (procedureType === "allOn6") base = pricing.basePrices.allOn6;
    else if (procedureType === "veneers") base = pricing.basePrices.veneersUnit * teethCount;

    if (useSedation) {
      base += pricing.basePrices.sedationHour * (procedureType === "allOn4" || procedureType === "allOn6" ? 3 : 1);
    }

    const min = Math.round(base);
    const max = Math.round(base * 1.15);
    return { min, max };
  };

  const estimate = calculateEstimate();
  const priceList = (t("priceList") as Array<{ name: string; price: string; tag: string; desc: string }>) || [];

  return (
    <section id="prices" className="py-20 sm:py-24 bg-white text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="calculator">
          {/* Left Interactive Calculator Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[hsl(195_25%_98%)] border border-gray-200 shadow-xl">
            <h3 className="text-xl font-display font-bold mb-6 text-[hsl(210_50%_12%)] pb-3 border-b border-gray-200">
              Інтерактивний калькулятор реабілітації
            </h3>

            {/* Slider: Teeth Count */}
            {procedureType !== "allOn4" && procedureType !== "allOn6" && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-[hsl(210_35%_15%)] uppercase tracking-wider">
                    {String(t("calculator.teethCountLabel"))}
                  </label>
                  <span className="text-base font-bold text-[hsl(185_85%_36%)] font-display tabular-nums">
                    {teethCount} {teethCount === 1 ? "зуб" : teethCount < 5 ? "зуби" : "зубів"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={teethCount}
                  onChange={(e) => setTeethCount(Number(e.target.value))}
                  className="w-full accent-[hsl(185_85%_36%)] cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
              </div>
            )}

            {/* Select Procedure Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(210_35%_15%)] mb-3">
                {String(t("calculator.procedureLabel"))}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                {[
                  { id: "single", label: String(t("calculator.optionSingle")) },
                  { id: "allOn4", label: String(t("calculator.optionAllOn4")) },
                  { id: "allOn6", label: String(t("calculator.optionAllOn6")) },
                  { id: "veneers", label: String(t("calculator.optionVeneers")) },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProcedureType(opt.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      procedureType === opt.id
                        ? "bg-[hsl(185_85%_36%)] text-white border-[hsl(185_85%_36%)] shadow-md"
                        : "bg-white text-[hsl(210_35%_15%)] border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sedation Check */}
            <div className="mb-8 p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-[hsl(210_35%_15%)]">
                  {String(t("calculator.sedationLabel"))}
                </span>
                <span className="text-[0.7rem] text-[hsl(210_15%_45%)] font-body">
                  Лікування уві сні під наглядом анестезіолога
                </span>
              </div>
              <button
                onClick={() => setUseSedation(!useSedation)}
                className={`w-12 h-6 rounded-full transition-colors p-1 ${
                  useSedation ? "bg-[hsl(185_85%_36%)]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    useSedation ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Result Box */}
            <div className="p-6 rounded-2xl bg-[hsl(210_50%_12%)] text-white text-center shadow-lg">
              <span className="text-[0.65rem] uppercase tracking-widest text-white/70 block mb-1">
                {String(t("calculator.estimatedTotal"))}
              </span>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[hsl(185_85%_45%)] mb-2 tabular-nums">
                {estimate.min.toLocaleString()} – {estimate.max.toLocaleString()} UAH
              </div>
              <p className="text-[0.7rem] text-white/70 mb-4 font-body">
                {String(t("calculator.note"))}
              </p>
              <a
                href="#booking"
                className="inline-block w-full py-3.5 rounded-xl bg-[hsl(185_85%_36%)] hover:bg-[hsl(185_85%_30%)] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                {String(t("calculator.cta"))}
              </a>
            </div>
          </div>

          {/* Right Price List Directory with Dotted Leaders */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <h3 className="text-xl font-display font-bold text-[hsl(210_50%_12%)]">
                Прайс-лист за напрямками
              </h3>
              <span className="text-xs font-semibold text-[hsl(185_85%_36%)]">
                Офіційний договір
              </span>
            </div>

            <div className="space-y-4">
              {priceList.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl transition-all ${
                    idx === 2
                      ? "bg-[hsl(185_85%_36%/0.08)] border-2 border-[hsl(185_85%_36%)]"
                      : "bg-white border border-gray-200/80 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="font-display font-bold text-sm text-[hsl(210_50%_12%)]">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-2" />
                    <span className="font-display font-bold text-sm text-[hsl(210_50%_12%)] whitespace-nowrap tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[hsl(210_15%_45%)] font-body">
                    <span>{item.desc}</span>
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-[0.65rem] font-semibold text-[hsl(185_85%_36%)]">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-[hsl(210_15%_45%)] font-body flex items-center justify-between">
              <span>Точна вартість фіксується у договірному кошторисі.</span>
              <a href="#booking" className="text-[hsl(185_85%_36%)] font-bold hover:underline">
                Запитати детальний кошторис →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
