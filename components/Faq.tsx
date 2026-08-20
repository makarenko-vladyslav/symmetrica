"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const { t } = useLocale();
  const items = (t('faq.items') as FaqItem[]) || [];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[hsl(150_20%_93%)] scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('faq.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)]">
            {String(t('faq.title'))}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-lg font-bold text-[hsl(162_40%_12%)] hover:text-[hsl(155_75%_38%)] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="font-mono text-xl text-[hsl(155_75%_38%)] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[hsl(162_15%_42%)] font-light leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
