"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const calcData = t("calculator") as Record<string, string>;

  const [serviceType, setServiceType] = useState<"all_on_4" | "implant_single" | "veneers_unit">("all_on_4");
  const [quantity, setQuantity] = useState(1);
  const [archType, setArchType] = useState<"single_jaw" | "both_jaws">("single_jaw");
  const [sedation, setSedation] = useState<boolean>(true);

  const calculateEstimate = () => {
    let base = pricingData.basePrices[serviceType] || 120000;
    if (serviceType === "all_on_4") {
      const multiplier = archType === "both_jaws" ? 1.9 : 1.0;
      base = base * multiplier;
    } else {
      base = base * quantity;
    }

    if (sedation) {
      base += pricingData.basePrices.sedation_hour * (serviceType === "all_on_4" ? 3 : 1);
    }

    return Math.round(base);
  };

  const formattedEstimate = (n: number) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  };

  return (
    <section id="calculator" className="py-24 bg-[hsl(205_45%_10%)] text-white scroll-mt-16 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14vw] font-serif font-black uppercase text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0"
      >
        ESTIMATE
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_48%)] mb-3">
            {calcData.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            {calcData.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-white/70">
            {calcData.subtitle}
          </p>
        </div>

        {/* Solid Interactive Calculator Card */}
        <div className="bg-white text-[hsl(210_30%_14%)] rounded-2xl shadow-2xl p-6 sm:p-10 space-y-8 border border-white/20">
          {/* Step 1: Select Service */}
          <div className="space-y-3">
            <label className="text-xs font-sans font-bold uppercase tracking-wider text-[hsl(210_15%_45%)]">
              {calcData.serviceLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setServiceType("all_on_4")}
                className={`p-4 rounded-lg text-left border font-serif font-bold text-base transition-all ${
                  serviceType === "all_on_4"
                    ? "border-[hsl(188_85%_38%)] bg-[hsl(188_85%_38%/0.08)] text-[hsl(188_85%_38%)] shadow-sm"
                    : "border-[hsl(210_15%_88%)] hover:border-slate-300"
                }`}
              >
                All-on-4 / All-on-6
              </button>
              <button
                type="button"
                onClick={() => setServiceType("implant_single")}
                className={`p-4 rounded-lg text-left border font-serif font-bold text-base transition-all ${
                  serviceType === "implant_single"
                    ? "border-[hsl(188_85%_38%)] bg-[hsl(188_85%_38%/0.08)] text-[hsl(188_85%_38%)] shadow-sm"
                    : "border-[hsl(210_15%_88%)] hover:border-slate-300"
                }`}
              >
                {calcData.singleImplantLabel}
              </button>
              <button
                type="button"
                onClick={() => setServiceType("veneers_unit")}
                className={`p-4 rounded-lg text-left border font-serif font-bold text-base transition-all ${
                  serviceType === "veneers_unit"
                    ? "border-[hsl(188_85%_38%)] bg-[hsl(188_85%_38%/0.08)] text-[hsl(188_85%_38%)] shadow-sm"
                    : "border-[hsl(210_15%_88%)] hover:border-slate-300"
                }`}
              >
                {calcData.ceramicVeneersLabel}
              </button>
            </div>
          </div>

          {/* Step 2: Parameters based on service */}
          {serviceType === "all_on_4" ? (
            <div className="space-y-3">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-[hsl(210_15%_45%)]">
                {calcData.archLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setArchType("single_jaw")}
                  className={`p-3.5 rounded-lg border font-sans text-xs sm:text-sm font-semibold transition-all ${
                    archType === "single_jaw"
                      ? "border-[hsl(188_85%_38%)] bg-[hsl(188_85%_38%/0.08)] text-[hsl(188_85%_38%)]"
                      : "border-[hsl(210_15%_88%)]"
                  }`}
                >
                  {calcData.singleJawLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setArchType("both_jaws")}
                  className={`p-3.5 rounded-lg border font-sans text-xs sm:text-sm font-semibold transition-all ${
                    archType === "both_jaws"
                      ? "border-[hsl(188_85%_38%)] bg-[hsl(188_85%_38%/0.08)] text-[hsl(188_85%_38%)]"
                      : "border-[hsl(210_15%_88%)]"
                  }`}
                >
                  {calcData.bothJawsLabel}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-[hsl(210_15%_45%)]">
                  {calcData.quantityLabel}
                </label>
                <span className="text-xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">
                  {quantity} {serviceType === "veneers_unit" ? calcData.unitsLabel : calcData.implantsLabel}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={serviceType === "veneers_unit" ? "20" : "10"}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[hsl(188_85%_38%)]"
              />
            </div>
          )}

          {/* Step 3: Sedation option */}
          <div className="space-y-3 pt-2 border-t border-[hsl(210_15%_90%)]">
            <label className="text-xs font-sans font-bold uppercase tracking-wider text-[hsl(210_15%_45%)]">
              {calcData.sedationLabel}
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-3 cursor-pointer font-body text-sm">
                <input
                  type="checkbox"
                  checked={sedation}
                  onChange={(e) => setSedation(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-[hsl(188_85%_38%)] focus:ring-[hsl(188_85%_38%)]"
                />
                <span className="text-[hsl(210_30%_14%)]">{calcData.sedationCheckboxText}</span>
              </label>
            </div>
          </div>

          {/* Result Output Display */}
          <div className="bg-[hsl(210_20%_98%)] p-6 rounded-xl border border-[hsl(210_15%_88%)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)]">
                {calcData.estimateLabel}
              </p>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[hsl(188_85%_38%)] mt-1 font-tabular">
                {calcData.fromPrefix} {formattedEstimate(calculateEstimate())} UAH
              </p>
            </div>

            <a
              href="#contacts"
              className="w-full sm:w-auto bg-[hsl(188_85%_38%)] hover:bg-[hsl(188_90%_30%)] text-white text-center font-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors shadow-md"
            >
              {calcData.submitCta}
            </a>
          </div>

          <p className="text-xs text-[hsl(210_15%_55%)] font-body text-center">
            {calcData.note}
          </p>
        </div>
      </div>
    </section>
  );
}
