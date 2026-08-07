"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Calculator() {
  const { t } = useLocale();

  const [procedureType, setProcedureType] = useState<"allOn4" | "singleImplant" | "veneers">("allOn4");
  const [units, setUnits] = useState<number>(1);
  const [includeSedation, setIncludeSedation] = useState<boolean>(true);

  const calculateEstimate = () => {
    let base = 0;
    if (procedureType === "allOn4") {
      base = 115000 * units;
    } else if (procedureType === "singleImplant") {
      base = 14000 * units;
    } else {
      base = 18500 * units;
    }

    if (includeSedation) {
      base += 4500 * Math.max(1, Math.ceil(units * 0.8));
    }

    return base.toLocaleString("uk-UA");
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-bg-light text-text-main relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("calculator.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary">
            {t("calculator.title") as string}
          </h2>
          <p className="text-base text-text-muted font-body">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-border-light shadow-xl space-y-8">
          {/* Procedure Type Radio Buttons */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-primary font-bold">
              {t("calculator.typeLabel") as string}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => { setProcedureType("allOn4"); setUnits(1); }}
                className={`p-4 rounded border text-left transition-all ${
                  procedureType === "allOn4"
                    ? "border-accent bg-accent/5 font-bold text-primary"
                    : "border-border-light bg-bg-light text-text-muted hover:border-gray-300"
                }`}
              >
                <div className="font-display text-base">All-on-4 / All-on-6</div>
                <div className="text-xs font-mono text-accent mt-1">Повна щелепа</div>
              </button>

              <button
                type="button"
                onClick={() => { setProcedureType("singleImplant"); setUnits(1); }}
                className={`p-4 rounded border text-left transition-all ${
                  procedureType === "singleImplant"
                    ? "border-accent bg-accent/5 font-bold text-primary"
                    : "border-border-light bg-bg-light text-text-muted hover:border-gray-300"
                }`}
              >
                <div className="font-display text-base">Поштучна імплантація</div>
                <div className="text-xs font-mono text-accent mt-1">Окремі зуби</div>
              </button>

              <button
                type="button"
                onClick={() => { setProcedureType("veneers"); setUnits(4); }}
                className={`p-4 rounded border text-left transition-all ${
                  procedureType === "veneers"
                    ? "border-accent bg-accent/5 font-bold text-primary"
                    : "border-border-light bg-bg-light text-text-muted hover:border-gray-300"
                }`}
              >
                <div className="font-display text-base">Вініри E-max</div>
                <div className="text-xs font-mono text-accent mt-1">Зона посмішки</div>
              </button>
            </div>
          </div>

          {/* Range Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-primary font-bold">
              <span>{t("calculator.teethCountLabel") as string}</span>
              <span className="text-accent text-base font-display tabular-nums">
                {units} {procedureType === "allOn4" ? "щелепа(и)" : "од."}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max={procedureType === "allOn4" ? "2" : "14"}
              value={units}
              onChange={(e) => setUnits(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[11px] font-mono text-text-muted">
              <span>1</span>
              <span>{procedureType === "allOn4" ? "2 щелепи" : "14 зубів"}</span>
            </div>
          </div>

          {/* Sedation Checkbox */}
          <div className="flex items-center justify-between p-4 rounded bg-bg-light border border-border-light">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                {t("calculator.sedationLabel") as string}
              </p>
              <p className="text-xs text-text-muted font-body mt-0.5">
                Анестезіологічний медикаментозний сон з кардіомоніторингом
              </p>
            </div>
            <input
              type="checkbox"
              checked={includeSedation}
              onChange={(e) => setIncludeSedation(e.target.checked)}
              className="w-5 h-5 accent-accent rounded cursor-pointer"
            />
          </div>

          {/* Output Display */}
          <div className="p-6 rounded bg-primary text-white space-y-4">
            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2">
              <span className="text-xs font-mono text-white/70 uppercase tracking-wider">
                Розрахунковий кошторис:
              </span>
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent tabular-nums">
                ~ {calculateEstimate()} UAH
              </div>
            </div>

            <p className="text-[11px] font-mono text-white/60 border-t border-white/10 pt-3">
              {t("calculator.disclaimer") as string}
            </p>

            <a
              href="#contacts"
              className="block w-full py-3.5 text-center rounded bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-widest font-bold transition-all"
            >
              {t("calculator.cta") as string}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
