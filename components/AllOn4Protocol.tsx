"use client";

import { useLocale } from '@/lib/i18n';

interface ProtocolStep {
  step: string;
  time: string;
  title: string;
  description: string;
}

export default function AllOn4Protocol() {
  const { t } = useLocale();
  const steps = (t('protocol.steps') as ProtocolStep[]) || [];
  const stepsLength = steps.length || 1;

  return (
    <section id="allOn4" className="py-20 px-4 sm:px-6 bg-[hsl(150_15%_97%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('protocol.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)]">
            {String(t('protocol.title'))}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(162_15%_42%)] max-w-2xl mx-auto font-light">
            {String(t('protocol.subtitle'))}
          </p>
        </div>

        {/* Steps Horizontal Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const percentVal = ((idx + 1) / stepsLength) * 100;
            const percentWidth = `${percentVal}%`;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-gray-200/80 flex flex-col justify-between gap-6 relative shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[hsl(155_75%_38%)]">
                      {s.step}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-wider px-2 py-1 bg-gray-100 rounded text-[hsl(162_15%_42%)] font-semibold">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[hsl(162_40%_12%)]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[hsl(162_15%_42%)] font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-[hsl(150_20%_93%)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[hsl(155_75%_38%)]" 
                    style={{ width: percentWidth }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
