
"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('stats') as Array<{ value: string; label: string }>;

  return (
    <section className="py-12 bg-primary text-white border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-start border-l-2 border-accent pl-4 py-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-accent tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-light mt-1 leading-snug">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
