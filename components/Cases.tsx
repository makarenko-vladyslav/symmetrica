"use client";

import { useLocale } from '@/lib/i18n';

interface CaseItem {
  patient: string;
  diagnosis: string;
  solution: string;
  quote: string;
  rating: string;
  date: string;
  image?: string;
}

export default function Cases() {
  const { t } = useLocale();
  const cases = (t('cases.items') as CaseItem[]) || [];
  const diagnosisLabel = String(t('cases.diagnosisLabel') || 'Діагноз:');
  const solutionLabel = String(t('cases.solutionLabel') || 'Рішення:');

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 bg-[hsl(150_15%_97%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('cases.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)]">
            {String(t('cases.title'))}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(162_15%_42%)] max-w-2xl mx-auto font-light">
            {String(t('cases.subtitle'))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                {c.image && (
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-2">
                    <img 
                      src={c.image} 
                      alt={c.patient} 
                      loading="lazy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="font-display text-lg font-bold text-[hsl(162_40%_12%)]">
                    {c.patient}
                  </span>
                  <span className="text-xs font-bold text-[hsl(42_65%_52%)]">
                    ★ {c.rating}
                  </span>
                </div>

                <div className="text-xs text-[hsl(162_15%_42%)] flex flex-col gap-1">
                  <div><strong className="text-[hsl(162_40%_12%)]">{diagnosisLabel}</strong> {c.diagnosis}</div>
                  <div><strong className="text-[hsl(155_75%_38%)]">{solutionLabel}</strong> {c.solution}</div>
                </div>

                <blockquote className="text-sm italic font-light text-[hsl(162_40%_12%)] leading-relaxed pt-2 border-t border-gray-100">
                  "{c.quote}"
                </blockquote>
              </div>

              <div className="text-[0.7rem] uppercase tracking-wider text-gray-400 font-medium">
                {c.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}