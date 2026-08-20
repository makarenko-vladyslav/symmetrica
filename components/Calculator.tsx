"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';
import { Reveal } from '@/components/motion';

export default function Calculator() {
  const { t } = useLocale();
  
  const [selectedService, setSelectedService] = useState<'all_on_4' | 'implant' | 'veneers' | 'splint' | 'consultation'>('implant');
  const [unitsCount, setUnitsCount] = useState<number>(1);
  const [addSedation, setAddSedation] = useState<boolean>(true);
  const [addTechLab, setAddTechLab] = useState<boolean>(true);

  const calculateTotal = () => {
    const base = pricingData.services[selectedService]?.basePrice || 14500;
    let total = base * unitsCount;
    if (addSedation) total += pricingData.sedationAddon;
    if (addTechLab) total += pricingData.techLabAddon;
    return total;
  };

  const formattedTotal = calculateTotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  const serviceButtons = [
    { id: 'implant', label: t('calculator.servicesList.implant') as string, price: '14 500 UAH' },
    { id: 'all_on_4', label: t('calculator.servicesList.all_on_4') as string, price: '120 000 UAH' },
    { id: 'veneers', label: t('calculator.servicesList.veneers') as string, price: '12 500 UAH' },
    { id: 'splint', label: t('calculator.servicesList.splint') as string, price: '18 000 UAH' },
  ];

  return (
    <section id="calculator" className="py-24 bg-primary text-white scroll-mt-16 relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('calculator.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4">
              {t('calculator.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light">
              {t('calculator.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Options Left */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-3 font-mono">
                  {t('calculator.selectService') as string}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceButtons.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id as any)}
                      className={`p-3.5 rounded-xl text-left border transition-all text-xs font-medium ${
                        selectedService === s.id
                          ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="opacity-80 mt-1 text-[11px] font-mono">{s.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Teeth/Units */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-accent font-mono">
                    {t('calculator.teethCount') as string}
                  </label>
                  <span className="text-xl font-display font-bold text-white font-mono">
                    {unitsCount} од.
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={unitsCount}
                  onChange={(e) => setUnitsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>1 од.</span>
                  <span>7 од.</span>
                  <span>{t('calculator.teethFullJaw') as string}</span>
                </div>
              </div>

              {/* Toggle Options */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <input
                    type="checkbox"
                    checked={addSedation}
                    onChange={(e) => setAddSedation(e.target.checked)}
                    className="w-4 h-4 rounded text-accent focus:ring-accent accent-accent"
                  />
                  <span className="text-xs text-white/90 font-medium">
                    {t('calculator.addSedation') as string} (+6 000 UAH)
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <input
                    type="checkbox"
                    checked={addTechLab}
                    onChange={(e) => setAddTechLab(e.target.checked)}
                    className="w-4 h-4 rounded text-accent focus:ring-accent accent-accent"
                  />
                  <span className="text-xs text-white/90 font-medium">
                    {t('calculator.addTechLab') as string} (+4 500 UAH)
                  </span>
                </label>
              </div>

            </div>

            {/* Total Display Right */}
            <div className="lg:col-span-5 bg-gradient-to-br from-accent/20 to-primary/90 border border-accent/40 rounded-2xl p-6 flex flex-col justify-between text-center items-center">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-2 font-mono">
                {t('calculator.estimatedTotal') as string}
              </span>
              
              <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight my-4 font-mono">
                {formattedTotal} <span className="text-lg font-normal text-accent font-serif">{t('calculator.currency') as string}</span>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                {t('calculator.note') as string}
              </p>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-full bg-accent hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-accent/30"
              >
                {t('calculator.cta') as string}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
