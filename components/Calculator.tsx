"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Calculator() {
  const { t } = useLocale();

  const [serviceType, setServiceType] = useState<'implant' | 'allon4' | 'veneer' | 'sedation'>('allon4');
  const [teethCount, setTeethCount] = useState<number>(4);
  const [sedationHours, setSedationHours] = useState<number>(2);
  const [needDiagnostic, setNeedDiagnostic] = useState<boolean>(true);

  const calculateTotal = () => {
    let base = 0;
    if (serviceType === 'implant') {
      base = teethCount * 14500;
    } else if (serviceType === 'allon4') {
      base = 88000;
    } else if (serviceType === 'veneer') {
      base = teethCount * 11500;
    } else if (serviceType === 'sedation') {
      base = sedationHours * 3500;
    }

    if (serviceType !== 'sedation') {
      base += sedationHours * 3500;
    }

    if (needDiagnostic) {
      base += 800;
    }

    return base;
  };

  const total = calculateTotal();

  return (
    <section id="calculator" className="py-20 bg-bg-light text-text-main relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            ПРОЗОРІСТЬ БЮДЖЕТУ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Калькулятор орієнтовної вартості
          </h2>
          <p className="text-slate-600 font-body text-xs sm:text-sm">
            Розрахуйте орієнтовний бюджет відновлення посмішки у Центрі Symmetrica без прихованих націнок.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-bg-card rounded-3xl p-6 sm:p-10 border border-border-light shadow-xl grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  1. Оберіть напрямок лікування:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('allon4')}
                    className={`p-3 text-xs font-semibold rounded-xl text-left border transition-all min-h-[44px] flex items-center ${
                      serviceType === 'allon4'
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    All-on-4 / All-on-6
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('implant')}
                    className={`p-3 text-xs font-semibold rounded-xl text-left border transition-all min-h-[44px] flex items-center ${
                      serviceType === 'implant'
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Одиночні імпланти
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('veneer')}
                    className={`p-3 text-xs font-semibold rounded-xl text-left border transition-all min-h-[44px] flex items-center ${
                      serviceType === 'veneer'
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Керамічні вініри
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('sedation')}
                    className={`p-3 text-xs font-semibold rounded-xl text-left border transition-all min-h-[44px] flex items-center ${
                      serviceType === 'sedation'
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Лікування уві сні
                  </button>
                </div>
              </div>

              {/* Slider for count if applicable */}
              {(serviceType === 'implant' || serviceType === 'veneer') && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-primary">
                    <span>{t('calculator.teethCount') as string}</span>
                    <span className="text-accent text-sm font-mono">{teethCount} од.</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={16}
                    value={teethCount}
                    onChange={(e) => setTeethCount(Number(e.target.value))}
                    className="w-full accent-accent h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>
              )}

              {/* Slider for Sedation Hours */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-primary">
                  <span>{t('calculator.sedationTime') as string}</span>
                  <span className="text-accent text-sm font-mono">{sedationHours} год.</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={6}
                  value={sedationHours}
                  onChange={(e) => setSedationHours(Number(e.target.value))}
                  className="w-full accent-accent h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Diagnostic Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="diag"
                  checked={needDiagnostic}
                  onChange={(e) => setNeedDiagnostic(e.target.checked)}
                  className="w-4 h-4 accent-accent rounded cursor-pointer min-h-[44px]"
                />
                <label htmlFor="diag" className="text-xs text-slate-700 font-medium cursor-pointer">
                  Включити 3D Комп'ютерну томографію (КТ) та консультацію (+800 UAH)
                </label>
              </div>

            </div>

            {/* Total Cost Display Box */}
            <div className="lg:col-span-5 bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold font-mono">
                  ОРІЄНТОВНИЙ РОЗРАХУНОК
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  від {total.toLocaleString('uk-UA')} <span className="text-base font-normal text-slate-300">{t('calculator.uah') as string}</span>
                </div>
                <p className="text-[11px] text-slate-300 font-body leading-relaxed pt-2">
                  * Точний кошторис фіксується у писемному договорі після огляду та 3D КТ діагностики.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>{t('calculator.anesthesia') as string}</span>
                  <span className="text-accent font-bold">{t('calculator.included') as string}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('calculator.lab') as string}</span>
                  <span className="text-accent font-bold">{t('calculator.symTech') as string}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('calculator.installment') as string}</span>
                  <span className="text-accent font-bold">{t('calculator.months') as string}</span>
                </div>
              </div>

              <a
                href="#booking"
                className="block text-center py-3.5 px-6 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg min-h-[44px] flex items-center justify-center"
              >
                Фіксувати ціну та записатись →
              </a>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
