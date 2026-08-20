"use client";

import { useLocale } from '@/lib/i18n';

interface FeatureItem {
  num: string;
  title: string;
  text: string;
}

export default function LabFeature() {
  const { t } = useLocale();
  const features = (t('lab.features') as FeatureItem[]) || [];

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 bg-[hsl(162_55%_8%)] text-white scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header & Overview */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_55%)]">
              {String(t('lab.kicker'))}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
              {String(t('lab.title'))}
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              {String(t('lab.subtitle'))}
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 mt-2">
              <div className="font-display text-xl text-[hsl(42_65%_52%)] font-bold">
                Точність до 5 мікрон
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Цифровий протокол повністю виключає людський фактор при формуванні оклюзійного контакту.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[hsl(162_45%_12%)] border border-white/10 flex flex-col gap-3 hover:border-[hsl(155_75%_38%/0.5)] transition-all"
              >
                <div className="font-mono text-2xl font-bold text-[hsl(155_75%_55%)]">
                  {item.num}
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
