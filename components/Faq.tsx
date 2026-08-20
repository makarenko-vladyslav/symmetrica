"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Faq() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = t('faq.items') as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-24 bg-bg-light text-text-main scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('faq.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-primary">
              {t('faq.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-text-muted font-light">
              {t('faq.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Accordion List Spanning Full Container Width */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="bg-bg-card rounded-2xl border border-primary/10 overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-display font-medium text-base sm:text-lg text-primary">
                      {faq.q}
                    </span>
                    <span className="text-accent font-mono text-xl font-bold">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-text-muted font-light leading-relaxed border-t border-primary/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
