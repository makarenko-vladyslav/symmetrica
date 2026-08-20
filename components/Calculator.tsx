"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();

  const [treatmentType, setTreatmentType] = useState<'allOn4' | 'allOn6' | 'single'>('allOn4');
  const [jawCount, setJawCount] = useState<number>(1);
  const [sedation, setSedation] = useState<boolean>(true);
  const [implantSystem, setImplantSystem] = useState<'straumann' | 'neodent'>('straumann');

  const formatMoney = (n: number) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  };

  const calculateTotal = () => {
    let base = pricingData.basePrices[treatmentType] || 120000;
    base = base * jawCount;

    if (implantSystem === 'straumann') {
      base = base * pricingData.multipliers.straumann;
    }

    if (sedation) {
      base += pricingData.multipliers.sedation * jawCount;
    }

    return Math.round(base);
  };

  const total = calculateTotal();
  const monthly = Math.round(total / 12);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 bg-[hsl(150_20%_93%)] border-y border-gray-200/60 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('calculator.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)]">
            {String(t('calculator.title'))}
          </h2>
          <p className="text-base text-[hsl(162_15%_42%)] max-w-2xl mx-auto font-light">
            {String(t('calculator.subtitle'))}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Treatment Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[hsl(162_40%_12%)]">
                {String(t('calculator.labels.treatmentType'))}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'allOn4', label: String(t('calculator.options.allOn4')) },
                  { id: 'allOn6', label: String(t('calculator.options.allOn6')) },
                  { id: 'single', label: String(t('calculator.options.single')) },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTreatmentType(opt.id as 'allOn4' | 'allOn6' | 'single')}
                    className={`py-3 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      treatmentType === opt.id
                        ? 'bg-[hsl(162_48%_18%)] text-white border-[hsl(162_48%_18%)] shadow-sm'
                        : 'bg-white text-[hsl(162_40%_12%)] border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Jaw Count */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[hsl(162_40%_12%)]">
                {String(t('calculator.labels.jawCount'))}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setJawCount(1)}
                  className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-all ${
                    jawCount === 1
                      ? 'bg-[hsl(162_48%_18%)] text-white border-[hsl(162_48%_18%)]'
                      : 'bg-white text-[hsl(162_40%_12%)] border-gray-200'
                  }`}
                >
                  {String(t('calculator.options.singleJaw'))}
                </button>
                <button
                  type="button"
                  onClick={() => setJawCount(2)}
                  className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-all ${
                    jawCount === 2
                      ? 'bg-[hsl(162_48%_18%)] text-white border-[hsl(162_48%_18%)]'
                      : 'bg-white text-[hsl(162_40%_12%)] border-gray-200'
                  }`}
                >
                  {String(t('calculator.options.bothJaws'))}
                </button>
              </div>
            </div>

            {/* Implant System */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[hsl(162_40%_12%)]">
                {String(t('calculator.labels.implantSystem'))}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setImplantSystem('straumann')}
                  className={`py-3 px-3 text-xs font-semibold rounded-xl border transition-all ${
                    implantSystem === 'straumann'
                      ? 'bg-[hsl(162_48%_18%)] text-white border-[hsl(162_48%_18%)]'
                      : 'bg-white text-[hsl(162_40%_12%)] border-gray-200'
                  }`}
                >
                  {String(t('calculator.options.straumann'))}
                </button>
                <button
                  type="button"
                  onClick={() => setImplantSystem('neodent')}
                  className={`py-3 px-3 text-xs font-semibold rounded-xl border transition-all ${
                    implantSystem === 'neodent'
                      ? 'bg-[hsl(162_48%_18%)] text-white border-[hsl(162_48%_18%)]'
                      : 'bg-white text-[hsl(162_40%_12%)] border-gray-200'
                  }`}
                >
                  {String(t('calculator.options.neodent'))}
                </button>
              </div>
            </div>

            {/* Sedation Checkbox */}
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={sedation}
                onChange={(e) => setSedation(e.target.checked)}
                className="w-5 h-5 rounded text-[hsl(155_75%_38%)] focus:ring-[hsl(155_75%_38%)]"
              />
              <span className="text-xs font-semibold text-[hsl(162_40%_12%)]">
                {String(t('calculator.labels.sedationNeeded'))}
              </span>
            </label>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 bg-[hsl(162_55%_8%)] text-white p-8 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                {String(t('calculator.labels.totalEstimate'))}
              </span>
              <div className="font-display text-3xl sm:text-4xl font-bold text-[hsl(155_75%_55%)]">
                {formatMoney(total)} UAH
              </div>
              <div className="text-xs text-white/80 pt-2 border-t border-white/10 mt-2">
                <span>{String(t('calculator.labels.monthlyPayment'))} </span>
                <span className="font-bold text-[hsl(42_65%_52%)]">{formatMoney(monthly)}</span>{' '}
                <span>{String(t('calculator.labels.perMonth'))}</span>
              </div>
            </div>

            <p className="text-[0.75rem] text-white/60 leading-relaxed font-light">
              {String(t('calculator.labels.note'))}
            </p>

            <a
              href="#contacts"
              className="w-full py-4 rounded-xl bg-[hsl(155_75%_38%)] hover:bg-[hsl(155_75%_32%)] text-white text-center font-semibold text-sm transition-all shadow-lg"
            >
              {String(t('calculator.labels.cta'))}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
